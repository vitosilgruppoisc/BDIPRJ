import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AbstractContiComponent} from '../../abstract-conti.component';
import {Conto, InserimentoContoModel, TipoConto} from '../../../../../models/conto';
import {GetPartiesResponse, Party, TipoParty} from '../../../../../models/party';
import {Button, InfoPanelElement, InfoPanelModel} from '../../../../../models/info-panel-model';
import {ActivatedRoute, Router} from '@angular/router';
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
import {catchError, filter, mergeMap, switchMap, tap, toArray} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {TipoContoEnum, TipoFlagEnum, TipoOperazioneEnum} from '../../../../../models/enum';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {ModalService} from 'scam-bdi-uikit';
import {TaskConto, TaskParty} from '../../../../../models/task';
import {TaskService} from '../../../../../services/task.service';
import {dateValidator} from "../../../../../validators/date-validator";

@Component({
    selector: 'app-inserimento-conto-step4',
    templateUrl: './inserimento-conto-step4.component.html',
    styleUrls: ['./inserimento-conto-step4.component.scss']
})
export class InserimentoContoStep4Component extends  AbstractContiComponent implements OnInit {

    contoDCAPadre: Conto;
    partyProprietario: Party;
    infoPanelContoModel: InfoPanelModel;
    inserimentoContoModel: InserimentoContoModel;
    inserimentoForm: FormGroup;
    util: Utils ;
    minDate: IDatepickerModel;
    maxDate: IDatepickerModel;

    @ViewChild('confirmModal', { static: false })
    confirmModal: TemplateRef<any>;
    confirmModalReference: any;

    constructor(
        router: Router,
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
        protected route: ActivatedRoute,
        protected modalService: ModalService,
        protected taskService: TaskService,
    ) {
        super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
        this.util = utils;
    }

    ngOnInit() {
        this.checkUserSpi();
        this.route.queryParams.subscribe(params => {
            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                this.buildCombo();
                this.loadSections();
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step4');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step4');
            } else {
                this.setError();
            }
        });
    }


    private loadSections () {
        this.showSpinner();

        const calls = [];
        if (!!this.inserimentoContoModel.idParty) {
            const getPartyProprietario = this.partyService.getParty(this.inserimentoContoModel.idParty).pipe(
                tap( res => this.partyProprietario = res)
            );
            calls.push(getPartyProprietario);
        }
        if (!!this.inserimentoContoModel.contoDCAPadre) {
            const getContoDCAPadre = this.contiService.getConto(this.inserimentoContoModel.contoDCAPadre).pipe(
                tap(res => this.contoDCAPadre = <Conto>res));
            calls.push(getContoDCAPadre);
        }

        if(!!calls && calls.length) {
            const getTipiConto = this.contiService.getTipiConto().pipe(
                tap( res => this.tipiConto = res))
            ;
            calls.push(getTipiConto);
            forkJoin(calls).pipe (
                tap( res => {
                    this.buildPartyProprietarioSection();
                    this.buildContoDCAPadreSection();
                    this.buildForm();
                    this.hideSpinner();
                }),
                catchError((error) => {
                    console.log ('Error - loadSections', error);
                    this.setError();
                    this.hideSpinner();
                    return of(null);
                })
            ).subscribe();
        } else {
            this.contiService.getTipiConto().pipe(
                tap( res => this.tipiConto = res),
                tap( res => {
                    this.buildForm();
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
    }

    private buildPartyProprietarioSection() {
        if (!!this.partyProprietario) {
            const data = [
                [this.buildInfoPanelElement('Party Bic', 'string', this.partyProprietario, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.partyProprietario, 'tipoParty.descrizione')],
                [this.buildInfoPanelElement('Nome Party', 'string', this.partyProprietario, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.partyProprietario, 'defaultAbi')],
                [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.partyProprietario, 'filialeRiferimento.descrizione'), this.buildInfoPanelElement('MFI COde', 'string', this.partyProprietario, 'mfiCode')],
                [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.partyProprietario, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.partyProprietario, 'categoriaEconomica')],
                [this.buildInfoPanelElement('Data Apertura Party', 'date', this.partyProprietario, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura Party', 'date', this.partyProprietario, 'dataChiusura')],
                [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.partyProprietario, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.partyProprietario, 'validTo')],
                [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.partyProprietario, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.partyProprietario, 'utenteValidazione')]
            ];

            this.infoPanelPartyModel = <InfoPanelModel>{
                columnNumber: 2,
                data: data
            };
        }
    }

    private buildContoDCAPadreSection() {
        if (!!this.contoDCAPadre) {
            const data = [
                [this.buildInfoPanelElement('Bic', 'string', this.contoDCAPadre, 'bic'), this.buildInfoPanelElement('Target Service', 'string', this.contoDCAPadre, 'targetService')],
                [this.buildInfoPanelElement('Account Id', 'string', this.contoDCAPadre, 'numeroConto'), this.buildInfoPanelElement('ABI', 'string', this.contoDCAPadre, 'abi')],
                [this.buildInfoPanelElement('Tipo Conto', 'string', this.contoDCAPadre, 'tipoConto.descrizione'), this.buildInfoPanelElement('Descrizione', 'string', this.contoDCAPadre, 'descrizione')],
                [this.buildInfoPanelElement('Default MCA', 'boolean', this.contoDCAPadre, 'mcaDefFlag'), this.buildInfoPanelElement('Presso BDI', 'boolean', this.contoDCAPadre, 'pressoBDI')],
                [this.buildInfoPanelElement('Flag Inserimento Manuale', 'boolean', this.contoDCAPadre, 'flgMan'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.contoDCAPadre, 'indicatoreResidenza')],
                [this.buildInfoPanelElement('Categoria Economica', 'string', this.contoDCAPadre, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.contoDCAPadre, 'dataApertura')],
                [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.contoDCAPadre, 'dataChiusura'), this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.contoDCAPadre, 'validFrom')],
                [this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.contoDCAPadre, 'validTo'), this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.contoDCAPadre, 'utenteRichiesta')],
                [this.buildInfoPanelElement('Utente Approvatore', 'string', this.contoDCAPadre, 'utenteValidazione'), {}]
            ];

            this.infoPanelContoModel = <InfoPanelModel>{
                columnNumber: 2,
                data: data
            };
        }
    }

    protected buildForm() {

        /*this.contiService.getTipiConto().pipe(
            tap( res => this.tipiConto = res)
        ).subscribe( res => {*/

            if (!!this.partyProprietario) {
                const da = new Date(this.partyProprietario.dataApertura);
                const dc = new Date(this.partyProprietario.dataChiusura);
                this.minDate =  {day: da.getUTCDate(), month: (da.getUTCMonth() + 1), year: da.getFullYear()};
                this.maxDate = {day: dc.getUTCDate(), month: (dc.getUTCMonth() + 1), year: dc.getFullYear()};
            }
            this.inserimentoForm = this.formBuilder.group({
                bicConto:  new FormControl(null,   [ this.requiredBicValidator.bind(this), this.bicValidator.bind(this)]),
                tipoConto: new FormControl(this.inserimentoContoModel.tipoConto,   [Validators.required]),
                descrizione: new FormControl( null,   [Validators.required]),
                idConto: new FormControl(null,   [ Validators.required]),
                abi: new FormControl((!!this.partyProprietario ? this.partyProprietario.defaultAbi : null),   [Validators.required]),
                targetService: new FormControl(null,   [Validators.required]),
                defaultMCA: new FormControl(null,   [this.defaultMCAValueValidator.bind(this)]),
                flagPressoBDI: new FormControl((!!this.inserimentoContoModel.pressoBDI ? 1 : 0),   [Validators.required]),
                flagInserimentoManuale: new FormControl(0,   [Validators.required]),
                dataApertura: new FormControl(null, [Validators.required]   ),
                dataChiusura: new FormControl(null, [] ),
                indResidenza: new FormControl((!!this.partyProprietario ? this.partyProprietario.indicatoreResidenza : null),   []),
                catEconomica: new FormControl((!!this.partyProprietario ? this.partyProprietario.categoriaEconomica : null),   []),
            }, { validator: dateValidator( [
                    {field1: 'dataApertura', minDate1: this.minDate, maxDate1: this.maxDate, field2: 'dataChiusura'}
                ]) });

            this.inserimentoForm.get('targetService').setValue(this.tipiConto.find( t => t.codice == this.inserimentoContoModel.tipoConto).targetService)
        //});
    }

    requiredBicValidator (control: FormControl): {[s: string]: boolean } {
        if (  !!this.inserimentoForm &&
            !this.checkContoIsSubAccountByTipoCod(this.inserimentoContoModel.tipoConto) &&
            !this.inserimentoForm.get('bicConto').value ) {
            return {'bicReq': true};
        }
        return null;
    }

    defaultMCAValueValidator (control: FormControl): {[s: string]: boolean } {
        if (  !!this.inserimentoForm &&
            this.checkTipoConto() &&
            !this.inserimentoForm.get('defaultMCA').value  ) {
            return {'value': true};
        }
        return null;
    }

    get bicConto() { return this.inserimentoForm.get('bicConto'); }
    get targetService() { return this.inserimentoForm.get('targetService'); }
    get descrizione() { return this.inserimentoForm.get('descrizione'); }
    get idConto() { return this.inserimentoForm.get('idConto'); }
    get abi() { return this.inserimentoForm.get('abi'); }
    get tipoConto() { return this.inserimentoForm.get('tipoConto'); }
    get defaultMCA() { return this.inserimentoForm.get('defaultMCA'); }
    get flagPressoBDI() { return this.inserimentoForm.get('flagPressoBDI'); }
    get flagInserimentoManuale() { return this.inserimentoForm.get('flagInserimentoManuale'); }
    get indResidenza() { return this.inserimentoForm.get('indResidenza'); }
    get catEconomica() { return this.inserimentoForm.get('catEconomica'); }
    get dataApertura() { return this.inserimentoForm.get('dataApertura'); }
    get dataChiusura() { return this.inserimentoForm.get('dataChiusura'); }

    reset( field) {
        this.inserimentoForm.get(field).setValue(null);
    }

    checkTipoConto(): boolean {
        return (this.tipoConto.value == 'CLM_MCA' || this.tipoConto.value == 'CLM_CB');
    }

    getTipoValue(): string {
        return this.tipiConto.find( t => t.codice == this.tipoConto.value).descrizione;
    }

    getPressoBDIValue() {
        const val = (!!this.inserimentoContoModel.pressoBDI ? TipoFlagEnum.SI : TipoFlagEnum.NO);
        return this.tipiPressoBDI.find( t => t.codice ==  val).descrizione;
    }

    getTargetServiceValue(): string {
        if(!! this.targetService.value) {
            return this.tipiTargetService.find(t => t.codice == this.targetService.value).descrizione;
        }
    }

    getFlagInserimentoManualeValue() {
        const val = TipoFlagEnum.NO;
        return this.tipiPressoBDI.find( t => t.codice ==  val).descrizione;
    }

    getDataAperturaValue() {
        return this.formatterUtils.dateToString(this.dataApertura.value);
    }

    getDataChiusuraValue() {
        return this.formatterUtils.dateToString(this.dataChiusura.value);
    }

    openModal() {
        if (!!this.inserimentoForm.valid) {
            this.confirmModalReference = this.modalService.open(this.confirmModal);
        }
    }

    protected closeModal() {
        this.confirmModalReference.close();
    }

    confirm () {
        this.confirmModalReference.close();
        this.saveConto();
    }

    private saveConto () {
        this.resetError();
        this.showSpinner();
        const taskConto = this.buildTaskConto();
        this.taskService.saveTaskConto(taskConto).pipe(
            tap( res => {
                this.isResultOk = true;
                const d = new Date(res.dataChiusura);
                this.inserimentoForm.get('dataChiusura').setValue({year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate()});
                this.hideSpinner();
                this.readonlyForm = true;
            }),
            catchError((error) => {
                console.log ('Error - saveConto', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildTaskConto (): TaskConto {

        //NB: i campi categoriaEconomica, indicatoreResidenza, flgMan sono valorizzati lato BE
        return <TaskConto> {
            operazione: {
                codice: TipoOperazioneEnum.INS
            },
            abi: this.abi.value,
            bic: this.bicConto.value,
            bicParty: (!!this.partyProprietario ? this.partyProprietario.bic : null),
            categoriaEconomica: null,
            descrizione: this.descrizione.value,
            flgMan: null,
            indicatoreResidenza: null,
            mcaDefFlag: (!!this.defaultMCA.value ? ((this.defaultMCA.value == TipoFlagEnum.SI) ? true : false) : null),
            numeroConto: this.idConto.value,
            pressoBdi: this.inserimentoContoModel.pressoBDI,
            subParBicDca: (!!this.contoDCAPadre ? this.contoDCAPadre.bic : null),
            subParTsDca: (!!this.contoDCAPadre ? this.contoDCAPadre.targetService : null),
            targetService: this.targetService.value,
            tipoConto: {
                codice: this.tipoConto.value
            },
            tipoParty: (!!this.partyProprietario ? this.partyProprietario.tipoParty : null),
            dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
            dataChiusura: this.formatterUtils.dateToString((!!this.dataChiusura.value ? this.dataChiusura.value : {year: 9999, month: 12, day: 31}))
        };
    }
}
