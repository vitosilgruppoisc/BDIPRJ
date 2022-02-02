import { Component, OnInit } from '@angular/core';
import {AssocazioneContoStep1Component} from '../assocazione-conto-step1/assocazione-conto-step1.component';
import {PartyService} from '../../../../../services/party.service';
import {FilialeService} from '../../../../../services/filiale.service';
import {ContoService} from '../../../../../services/conto.service';
import {SecurityService, UserService} from '../../../../../services';
import {FormatterUtils} from '../../../../../utilities/formatterUtils';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {RoutingService} from '../../../../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from 'scam-bdi-uikit';
import {TaskService} from '../../../../../services/task.service';
import {AssocazioneContoStep2Component} from '../assocazione-conto-step2/assocazione-conto-step2.component';
import {catchError, tap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {TaskConto, TaskSfruttamentoAnsyDca} from '../../../../../models/task';
import {TipoOperazioneEnum} from '../../../../../models/enum';
import {dateValidator} from "../../../../../validators/date-validator";

@Component({
    selector: 'app-eliminazione-logica-associazione-conto',
    templateUrl: './eliminazione-logica-associazione-conto.component.html',
    styleUrls: ['./eliminazione-logica-associazione-conto.component.scss']
})
export class EliminazioneLogicaAssociazioneContoComponent extends  AssocazioneContoStep2Component implements OnInit {

    constructor( protected partyService: PartyService,
                 protected filialeService: FilialeService,
                 protected contiService: ContoService,
                 protected securityService: SecurityService,
                 protected userService: UserService,
                 protected formatterUtils: FormatterUtils,
                 protected formBuilder: FormBuilder,
                 protected routingService: RoutingService,
                 protected route: ActivatedRoute,
                 protected modalService: ModalService,
                 protected taskService: TaskService) {
        super(partyService, filialeService, contiService, securityService, userService, formatterUtils, formBuilder, routingService, route, modalService, taskService);
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.idConto = params.idConto;
            this.idParty = params.idParty;
            this.sfruttamentoModel = this.getSession(this.CONTO_ELIMINA_ASSOCIA_SESSION);
            if (!!this.sfruttamentoModel) {
                this.loadSections();
                this.minDate = this.formatterUtils.getValueForDateinDatePickerFormat(this.sfruttamentoModel.dataInizioSfruttamento);
                this.backUrl = '/anagrafiche/parties/dettaglio';
            } else {
                this.setError();
            }
        });
    }

    protected buildForm() {
        this.sfruttamentoForm = this.formBuilder.group({
            dataFineSfruttamentoDa: new FormControl(null, [Validators.required])
        }, { validator: dateValidator( [
                {field1: 'dataFineSfruttamentoDa', minDate1: this.minDate, required1: true}
            ]) });
    }

    confirm () {
        this.confirmModalReference.close();
        if (this.isDCAorCB) {
            this.saveEliminazioneSfruttamentoAnsyDca();
        } else {
            this.saveEliminazioneSfuttamentoSubAccount();
        }
    }

    private saveEliminazioneSfruttamentoAnsyDca() {
        this.resetError();
        this.showSpinner();
        const taskSfruttamentoAnsyDca = this.buildEliminazioneTaskSfruttamentoAnsyDca();
        this.taskService.saveTaskSfruttamentoAnsyDca(taskSfruttamentoAnsyDca).pipe(
            tap( res => {
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }),
            catchError((error) => {
                console.log ('Error - saveEliminazioneSfruttamentoAnsyDca', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildEliminazioneTaskSfruttamentoAnsyDca(): TaskSfruttamentoAnsyDca {
        return <TaskSfruttamentoAnsyDca> {
            operazione: {
                codice: TipoOperazioneEnum.DEL
            },

            validTo: this.formatterUtils.dateToString(this.dataFineSfruttamentoDa.value),
            idSfruttamentoDcaOrig: this.sfruttamentoModel.idSfruttamento
        };
    }

    private saveEliminazioneSfuttamentoSubAccount () {
        this.resetError();
        this.showSpinner();
        const taskConto = this.buildEliminazioneTaskConto();
        this.taskService.saveTaskConto(taskConto).pipe(
            tap( res => {
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }),
            catchError((error) => {
                console.log ('Error - saveEliminazioneSfuttamentoSubAccount', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildEliminazioneTaskConto (): TaskConto {

        const dfs = this.dataFineSfruttamentoDa.value;
        const d = new Date(dfs.year, dfs.month - 1, dfs.day);
        d.setDate(d.getDate() + 1);
        return <TaskConto> {
            operazione: {
                codice: TipoOperazioneEnum.UPD
            },
            idConto: this.conto.id,
            subBicPtyAnsy: null,
            subTipoPtyAnsy: null,
            subTipoSfruttAnsy: null,
            validFrom: this.formatterUtils.formatDate(d),

            abiToEdit: false,
            //bicPartyToEdit: false,
            //bicToEdit: false,
            categoriaEconomicaToEdit: false,
            dataAperturaToEdit: false,
            //dataChiusuraToEdit: false,
            descrizioneToEdit: false,
            flgManToEdit: false,
            indicatoreResidenzaToEdit: false,
            mcaDefFlagToEdit: false,
            numeroContoToEdit: false,
            pressoBdiToEdit: false,
            subParBicDcaToEdit: false,
            subParTsDcaToEdit: false,
            subBicPtyAnsyToEdit: true,
            subTipoPtyAnsyToEdit: true,
            subTipoSfruttAnsyToEdit: true,
            targetServiceToEdit: false,
            tipoContoToEdit: false,
            tipoPartyToEdit: false,
            /*tsModificaToEdit: false,
            utenteRichiestaToEdit: false,
            utenteValidazioneToEdit: false,*/
            validFromToEdit: true,
            //validToToEdit: false

            idContoOrig: this.conto.id

        };
    }

    get dataFineSfruttamentoDa() { return this.sfruttamentoForm.get('dataFineSfruttamentoDa'); }

    getDataFineSfruttamentoValue() {
        return this.formatterUtils.dateToString(this.dataFineSfruttamentoDa.value);
    }

    getDataSfruttamentoTooltip(): string {
        return 'La data fine sfruttamento non può essere minore di quella inizio sfruttamento e pari a ' + this.formatterUtils.dateToString(this.minDate);
    }
}
