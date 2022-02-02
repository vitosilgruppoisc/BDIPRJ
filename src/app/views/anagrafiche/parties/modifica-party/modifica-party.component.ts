import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AbstractPartyComponent} from '../abstract-party.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {TaskService} from '../../../../services/task.service';
import {InfostatService} from '../../../../services/infostat.service';
import {ModalService} from 'scam-bdi-uikit';
import {TaskParty} from '../../../../models/task';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Party, TipoParty} from '../../../../models/party';
import {TipoOperazioneEnum} from '../../../../models/enum';
import { get} from 'lodash';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {FilialeRiferimento} from '../../../../models/filiale';
import {RoutingService} from '../../../../services/routing.service';
import {dateValidator} from "../../../../validators/date-validator";
import {Utils} from "../../../../utilities/util";

@Component({
    selector: 'app-modifica-party',
    templateUrl: './modifica-party.component.html',
    styleUrls: ['./modifica-party.component.scss']
})
export class ModificaPartyComponent extends AbstractPartyComponent implements OnInit {

    @ViewChild('mfiModal', { static: false })
    mfiModal: TemplateRef<any>;

    private mfiModalReference: any;

    modificaForm: FormGroup;
    minDate: IDatepickerModel;
    maxDate: IDatepickerModel;
    party: Party;

    constructor(
        router: Router,
        protected partyService: PartyService,
        protected filialeService: FilialeService,
        protected securityService: SecurityService,
        protected userService: UserService,
        private filterUtils: FilterUtils,
        protected formatterUtils: FormatterUtils,
        private formBuilder: FormBuilder,
        private taskService: TaskService,
        private infostatService: InfostatService,
        private modalService: ModalService,
        protected route: ActivatedRoute,
        protected routingService: RoutingService,
        private utils: Utils
    ) {
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
        this.utils = utils;
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const modifyPartySessionObj = this.getSession(this.routingService.PARTY_MODIFY);
            if (!!modifyPartySessionObj) {
                this.load(modifyPartySessionObj.idParty);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyPartySessionObj.backUrl);
            } else {
                this.setError();
            }
        });
    }

    private load (idParty: string) {
        this.showSpinner();
        this.partyService.getParty(idParty).pipe(
            tap( res => {
                this.party = res;
                this.isActive = this.isPartyActive(this.party);
                if (!this.isActive) {
                    this.readonlyForm = true;
                }
                this.buildForm();
                this.hideSpinner();
            }),
            catchError((error) => {
                console.log ('Error - loadParty', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildForm() {
        const da = new Date(this.party.dataApertura);
        const dc = new Date(this.party.dataChiusura);
        const vf = new Date(this.party.validFrom);
        vf.setDate(vf.getDate() + 1);
        this.minDate =  {day: vf.getUTCDate(), month: (vf.getUTCMonth() + 1), year: vf.getFullYear()};
        this.maxDate = {day: dc.getUTCDate(), month: (dc.getUTCMonth() + 1), year: dc.getFullYear()};
        this.modificaForm = this.formBuilder.group({
            bic:  new FormControl(this.party.bic,   [Validators.required, this.bic11Validator.bind(this)]),
            tipo: new FormControl(this.party.tipoParty.codice,   [Validators.required]),
            nome: new FormControl(this.party.nome,   [Validators.required]),
            defaultAbi: new FormControl(this.party.defaultAbi,    [Validators.required]),
            filiale: new FormControl(this.party.filialeRiferimento.codice,   [Validators.required]),
            mfiCode: new FormControl(this.party.mfiCode,   [Validators.required]),
            indicatoreResidenza: new FormControl(this.party.indicatoreResidenza,   []),
            categoriaEconomica: new FormControl(this.party.categoriaEconomica,   []),
            dataApertura: new FormControl( {year: da.getFullYear(), month: (da.getUTCMonth() + 1), day: da.getUTCDate()} , [Validators.required]),
            dataChiusura: new FormControl(  {year: dc.getFullYear(), month: (dc.getUTCMonth() + 1), day: dc.getUTCDate()} , []),
            checkedbic:  new FormControl(false,   []),
            checkedtipo: new FormControl(false,   []),
            checkednome: new FormControl(false,   []),
            checkeddefaultAbi: new FormControl(false,   []),
            checkedfiliale: new FormControl(false,   []),
            checkedmfiCode: new FormControl(false,   []),
            checkedindicatoreResidenza: new FormControl(false,   []),
            checkedcategoriaEconomica: new FormControl(false,   []),
            checkeddataApertura: new FormControl(false,   []),
            checkeddataChiusura: new FormControl(false,   []),
            dataInizioValidita: new FormControl(  null ,  [])
        }, { validator: dateValidator( [
                {field1: 'dataApertura', maxDate1: this.maxDate},
                {field1: 'dataInizioValidita', minDate1: this.minDate, maxDate1: this.maxDate}
            ]) });
    }

    bic11Validator (control: FormControl): {[s: string]: boolean } {
        const bicRegex = new RegExp('^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})$');
        if (    !!control &&
            !!control.value &&
            !bicRegex.test(control.value)
        ) {
            return {'syntax': true};
        }
        return null;
    }

    get bic() { return this.modificaForm.get('bic'); }
    get tipo() { return this.modificaForm.get('tipo'); }
    get nome() { return this.modificaForm.get('nome'); }
    get defaultAbi() { return this.modificaForm.get('defaultAbi'); }
    get filiale() { return this.modificaForm.get('filiale'); }
    get mfiCode() { return this.modificaForm.get('mfiCode'); }
    get indicatoreResidenza() { return this.modificaForm.get('indicatoreResidenza'); }
    get categoriaEconomica() { return this.modificaForm.get('categoriaEconomica'); }
    get dataApertura() { return this.modificaForm.get('dataApertura'); }
    get dataChiusura() { return this.modificaForm.get('dataChiusura'); }
    get checkedbic() { return this.modificaForm.get('checkedbic'); }
    get checkedtipo() { return this.modificaForm.get('checkedtipo'); }
    get checkednome() { return this.modificaForm.get('checkednome'); }
    get checkeddefaultAbi() { return this.modificaForm.get('checkeddefaultAbi'); }
    get checkedfiliale() { return this.modificaForm.get('checkedfiliale'); }
    get checkedmfiCode() { return this.modificaForm.get('checkedmfiCode'); }
    get checkedindicatoreResidenza() { return this.modificaForm.get('checkedindicatoreResidenza'); }
    get checkedcategoriaEconomica() { return this.modificaForm.get('checkedcategoriaEconomica'); }
    get checkeddataApertura() { return this.modificaForm.get('checkeddataApertura'); }
    get checkeddataChiusura() { return this.modificaForm.get('checkeddataChiusura'); }
    get dataInizioValidita() { return this.modificaForm.get('dataInizioValidita'); }

    reset(field) {
        this.modificaForm.get(field).setValue(undefined);
    }

    manageCheckBox(field: string, type?: string) {
        if (this.modificaForm.get('checked'.concat(field)).value) {
            let val = get(this.party, field);
            if (!!type && type == 'date') {
                val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
            }
            this.modificaForm.get(field).setValue(val);
        } else {
            //this.modificaForm.get(field).setValue(null);
        }
    }

    onSubmit() {
        this.resetError();
        this.isResultOk = false;

        if (this.modificaForm.valid) {
            this.showSpinner();
            if (!this.checkedmfiCode.value) {
                this.modifyParty();
            } else {
                this.infostatService.getInfostatValue(this.mfiCode.value).pipe(
                    tap ( res => {
                        if (!!res) {
                            this.modifyParty();
                        }  else {
                            this.openModal();
                        }
                    }),
                    catchError((error) => {
                        console.log ('Error - getInfostatValue', error);
                        this.hideSpinner();
                        this.openModal();
                        return of(null);
                    })
                ).subscribe();
            }
        }
    }

    private openModal() {
        this.mfiModalReference = this.modalService.open(this.mfiModal);
    }

    closeModal() {
        this.mfiModalReference.close();
    }

    confirmModal() {
        this.mfiModalReference.close();
        this.modifyParty();
    }

    private modifyParty() {
        const taskPartyReq = this.buildTaskParty();
        console.log(taskPartyReq);
        this.taskService.saveTaskParty(taskPartyReq).pipe(
            tap( res => {
                if (!!res) {
                    this.party.dataApertura = res.dataApertura;
                    this.party.dataChiusura = res.dataChiusura;
                    this.party.filialeRiferimento = res.filialeRiferimento;
                    this.modificaForm.get('indicatoreResidenza').setValue(res.indicatoreResidenza);
                    this.modificaForm.get('categoriaEconomica').setValue(res.categoriaEconomica);
                }

                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }),
            catchError((error) => {
                console.log ('Error - modifyParty', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildTaskParty (): TaskParty {
        return <TaskParty> {
            operazione: {
                codice: TipoOperazioneEnum.UPD
            },
            tipoTask: null,
            stato: null,
            tsInserimento: null,
            userReq: null,
            tsValidate: null,
            userValidate: null,
            noteRifiuto: null,
            bic: this.bic.value,
            tipoParty: <TipoParty>{
                codice: this.tipo.value
            },
            defaultAbi: this.defaultAbi.value,
            nome: this.nome.value,
            filialeRiferimento: <FilialeRiferimento>{
                codice: this.filiale.value
            },
            mfiCode: this.mfiCode.value,
            categoriaEconomica: null,
            indicatoreResidenza: null,
            dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
            dataChiusura: this.formatterUtils.dateToString(this.dataChiusura.value),
            validFrom: (!!this.dataInizioValidita.value ? this.formatterUtils.dateToString(this.dataInizioValidita.value) : null),
            validTo: null,
            tsModifica: null,
            utenteRichiesta: null,
            utenteValidazione: null,
            bicToEdit: this.checkedbic.value,
            tipoPartyToEdit: this.checkedtipo.value,
            defaultAbiToEdit: this.checkeddefaultAbi.value,
            nomeToEdit: this.checkednome.value,
            filialeRiferimentoToEdit: this.checkedfiliale.value,
            mfiCodeToEdit: this.checkedmfiCode.value,
            categoriaEconomicaToEdit: this.checkedcategoriaEconomica.value,
            indicatoreResidenzaToEdit: this.checkedindicatoreResidenza.value,
            dataAperturaToEdit: this.checkeddataApertura.value,
            dataChiusuraToEdit: this.checkeddataChiusura.value,
            validFromToEdit: (!!this.dataInizioValidita.value ? true : false),
            validToToEdit: false,
            tsModificaToEdit: false,
            utenteRichiestaToEdit: true,
            utenteValidazioneToEdit: false,
            idPartyOrig: this.party.id,
            bicOrig: null,
            tipoPartyOrig: null,
            defaultAbiOrig: null,
            nomeOrig: null,
            filialeRiferimentoOrig: null,
            mfiCodeOrig: null,
            categoriaEconomicaOrig: null,
            indicatoreResidenzaOrig: null,
            dataAperturaOrig: null,
            dataChiusuraOrig: null,
            validFromOrig: null,
            validToOrig: null,
            tsModificaOrig: null,
            utenteRichiestaOrig: null,
            utenteValidazioneOrig: null
        };
    }

    getTipoValue(): string {
        return this.tipiParty.find( t => t.codice == this.party.tipoParty.codice).descrizione;
    }

    getFilialeValue(): string {
        return this.filialiRiferimento.find( f => f.codice == this.party.filialeRiferimento.codice).descrizione;
    }

    getDataAperturaValue() {
        return this.party.dataApertura;
    }

    getDataChiusuraValue() {
        return this.party.dataChiusura;
    }

    getDataInizioValiditaValue() {
        return this.party.validFrom;
    }
}

