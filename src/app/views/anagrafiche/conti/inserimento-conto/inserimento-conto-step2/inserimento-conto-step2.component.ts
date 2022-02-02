import {Component, OnInit} from '@angular/core';
import {AbstractContiComponent} from '../../abstract-conti.component';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {PartyService} from '../../../../../services/party.service';
import {FilialeService} from '../../../../../services/filiale.service';
import {ContoService} from '../../../../../services/conto.service';
import {SecurityService, UserService} from '../../../../../services';
import {FilterUtils} from '../../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../../utilities/formatterUtils';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RSQLUtils} from '../../../../../utilities/rsqlUtil';
import {Utils} from '../../../../../utilities/util';
import {RoutingService} from '../../../../../services/routing.service';
import {catchError, tap} from 'rxjs/operators';
import {Party} from '../../../../../models/party';
import {of} from 'rxjs';
import {InfoPanelModel} from '../../../../../models/info-panel-model';
import {InserimentoContoModel} from '../../../../../models/conto';
import {TipoContoEnum} from '../../../../../models/enum';

@Component({
    selector: 'app-inserimento-conto-step2',
    templateUrl: './inserimento-conto-step2.component.html',
    styleUrls: ['./inserimento-conto-step2.component.scss']
})
export class InserimentoContoStep2Component extends AbstractContiComponent  implements OnInit {

    inserimentoContoModel: InserimentoContoModel;
    party: Party;
    tipoContoform: FormGroup;

    constructor(
        private router: Router,
        protected partyService: PartyService,
        protected filialeService: FilialeService,
        protected contoService: ContoService,
        protected securityService: SecurityService,
        protected userService: UserService,
        private filterUtils: FilterUtils,
        protected formatterUtils: FormatterUtils,
        private formBuilder: FormBuilder,
        private rSQLUtils: RSQLUtils,
        private utils: Utils,
        protected routingService: RoutingService,
        protected route: ActivatedRoute
    ) {
        super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
    }

    ngOnInit() {
        this.checkUserSpi();

        this.tipoContoform = this.formBuilder.group({
            tipoConto: new FormControl(null,   [Validators.required]),
        });

        this.route.queryParams.subscribe(params => {
            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                if (!!this.inserimentoContoModel.idParty) {
                    this.loadSections(this.inserimentoContoModel.idParty);
                } else {
                    this.buildTipoContoSection();
                }
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step2');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step2');
                if (!!this.inserimentoContoModel && this.inserimentoContoModel.tipoConto) {
                    return this.tipoContoform.get('tipoConto').setValue(this.inserimentoContoModel.tipoConto);
                }
            } else {
                this.setError();
            }
        });
    }

    get tipoConto() { return this.tipoContoform.get('tipoConto'); }

    private loadSections (idParty: string) {
        this.showSpinner();

        this.partyService.getParty(idParty).pipe(
            tap ( res => {
                this.party = res;
            }),
            tap( res => {
                this.buildPartySection();
                this.buildTipoContoSection();
                this.hideSpinner();
            }),
            catchError((error) => {
                console.log ('Error - loadSections', error);
                this.setError();
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildPartySection() {
        const data = [
            [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
            [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.party, 'defaultAbi')],
            [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.party, 'filialeRiferimento.descrizione'), this.buildInfoPanelElement('MFI COde', 'string', this.party, 'mfiCode' )],
            [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica')],
            [this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.party, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.party, 'validTo')],
            [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.party, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.party, 'utenteValidazione')]
        ];

        this.infoPanelPartyModel = <InfoPanelModel> {
            columnNumber: 2,
            data: data
        };
    }

    private buildTipoContoSection() {
        if (!!this.party) {
            this.contoService.getTipiConto(this.party.tipoParty.codice).pipe(
                tap( res => this.tipiConto = res)
            ).subscribe();
        } else {
            this.tipiConto = this.buildTipoContoDCAOrCBorSubAccount();
        }
    }

    onSubmit() {
        if (this.tipoContoform.valid) {
            this.inserimentoContoModel.tipoConto = this.tipoConto.value;
            if (this.inserimentoContoModel.tipoConto == TipoContoEnum.RTGS_SA) {
                this.goToStep3();
            } else {
                this.goToStep4();
            }
        }
    }

    goToStep3() {
        const route = this.inserimentoContoModel.prefixUrl.concat('step3');
        this.setSession(this.CONTO_INSERT_SESSION, this.inserimentoContoModel);
        this.router.navigate([route], {});
    }

    goToStep4() {
        const route = this.inserimentoContoModel.prefixUrl.concat('step4');
        this.setSession(this.CONTO_INSERT_SESSION, this.inserimentoContoModel);
        this.router.navigate([route], {});
    }
}
