import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SfruttamentoModel, Conto, TipoConto} from '../../../../../models/conto';
import {RoutingService} from '../../../../../services/routing.service';
import {AbstractAnagraficheComponent} from '../../../abstract-anagrafiche.component';
import {PartyService} from '../../../../../services/party.service';
import {FilialeService} from '../../../../../services/filiale.service';
import {ContoService} from '../../../../../services/conto.service';
import {SecurityService, UserService} from '../../../../../services';
import {FormatterUtils} from '../../../../../utilities/formatterUtils';
import {ActivatedRoute} from '@angular/router';
import {Party, TipoParty} from '../../../../../models/party';
import {InfoPanelModel} from '../../../../../models/info-panel-model';
import {catchError, tap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TipoContoEnum, TipoFlagEnum, TipoOperazioneEnum, TipoSfruttamentoEnum} from '../../../../../models/enum';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {ModalService} from 'scam-bdi-uikit';
import {TaskService} from '../../../../../services/task.service';
import {TaskConto, TaskSfruttamentoAnsyDca} from '../../../../../models/task';
import {dateValidator} from "../../../../../validators/date-validator";

@Component({
  selector: 'app-assocazione-conto-step2',
  templateUrl: './assocazione-conto-step2.component.html',
  styleUrls: ['./assocazione-conto-step2.component.scss']
})
export class AssocazioneContoStep2Component extends AbstractAnagraficheComponent implements OnInit {

  party: Party;
  conto: Conto;

  sfruttamentoModel: SfruttamentoModel;
  infoPanelPartyModel: InfoPanelModel;
  infoPanelContoModel: InfoPanelModel;
  isDCAorCB: boolean = false;

  sfruttamentoForm: FormGroup;
  tipiSfruttamento: any [];
  minDate: IDatepickerModel;
  @ViewChild('confirmModal', { static: false })
  confirmModal: TemplateRef<any>;
  confirmModalReference: any;
  idConto: any;
  idParty: any;

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
    super(securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idConto = params.idConto;
      this.idParty = params.idParty;
      this.sfruttamentoModel = this.getSession(this.CONTO_ASSOCIA_SESSION);
      if (!!this.sfruttamentoModel) {
        this.loadSections();
        this.minDate = this.sfruttamentoModel.dataInizioSfruttamento;
        this.sfruttamentoModel.wizardSteps = this.setStepForAssociaConto(this.sfruttamentoModel, 'associa-step2');
        this.backUrl = this.getBackUrlForAssociaConto(this.sfruttamentoModel, 'associa-step2');
      } else {
        this.setError();
      }
    });  }

  protected loadSections () {
    this.showSpinner();

    const getParty = this.partyService.getParty( this.idParty).pipe(tap ( res => this.party = res));
    const getConto = this.contiService.getConto( this.idConto).pipe(tap ( res => this.conto = res));
    const calls = [getParty, getConto];

    forkJoin(calls).pipe (
        tap( res => {
          this.buildPartySection();
          this.buildContoSection();
          this.tipiSfruttamento = this.buildTipiSfruttamento();
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

  private buildPartySection() {
    const data = [
      [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
      [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.party, 'defaultAbi')],
      [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.party, 'filialeRiferimento.descrizione'), this.buildInfoPanelElement('MFI COde', 'string', this.party, 'mfiCode')],
      [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica')],
      [this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
      [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.party, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.party, 'validTo')],
      [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.party, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.party, 'utenteValidazione')]
    ];

    this.infoPanelPartyModel = <InfoPanelModel>{
      columnNumber: 2,
      data: data
    };
  }

  private buildContoSection() {
    const data = [
      [this.buildInfoPanelElement('Bic', 'string', this.conto, 'bic'), this.buildInfoPanelElement('Account Id', 'string', this.conto, 'numeroConto')],
      [this.buildInfoPanelElement('Target Service', 'string', this.conto, 'targetService'), this.buildInfoPanelElement('Tipo Conto', 'string', this.conto, 'tipoConto.descrizione')],
      [this.buildInfoPanelElement('ABI', 'string', this.conto, 'abi'), this.buildInfoPanelElement('Descrizione', 'string', this.conto, 'descrizione')],
      [this.buildInfoPanelElement('Data Apertura', 'date', this.conto, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura', 'date', this.conto, 'dataChiusura')]
    ];

    this.infoPanelContoModel = <InfoPanelModel>{
      columnNumber: 2,
      data: data
    };

    this.isDCAorCB = (this.checkContoIsDCA(this.conto) || this.checkContoIsCB(this.conto));
  }

  protected buildForm() {
    this.sfruttamentoForm = this.formBuilder.group({
      dataInizioSfruttamentoDa: new FormControl(null, [Validators.required]),
      tipoSfruttamento: new FormControl(null,   [this.tipoSfruttamentoValidator.bind(this)]),
    }, { validator: dateValidator( [
        {field1: 'dataInizioSfruttamentoDa', minDate1: this.minDate, required1: true}
      ]) });
  }

  tipoSfruttamentoValidator(control: FormControl): {[s: string]: boolean } {
    if ( !this.isDCAorCB &&
        ! (!!control && !!control.value)) {
      return {'value': true};
    }
    return null;
  }

  get dataInizioSfruttamentoDa() { return this.sfruttamentoForm.get('dataInizioSfruttamentoDa'); }
  get tipoSfruttamento() { return this.sfruttamentoForm.get('tipoSfruttamento'); }

  reset( field) {
    this.sfruttamentoForm.get(field).setValue(null);
  }

  getDataSfruttamentoTooltip(): string {
    return 'La data inizio sfruttamento non può essere minore di quella impostata in fase di ricerca e pari a ' + this.formatterUtils.dateToString(this.minDate);
  }

  openModal() {
    if (!!this.sfruttamentoForm.valid) {
      this.confirmModalReference = this.modalService.open(this.confirmModal);
    }
  }

  closeModal() {
    this.confirmModalReference.close();
  }

  confirm () {
    this.confirmModalReference.close();
    if (this.isDCAorCB) {
      this.saveAssociazioneSfruttamentoAnsyDca();
    } else {
      this.saveAssociazioneSfruttamentoSubAccount();
    }
  }

  private saveAssociazioneSfruttamentoAnsyDca() {
    this.resetError();
    this.showSpinner();
    const taskSfruttamentoAnsyDca = this.buildTaskSfruttamentoAnsyDca();
    this.taskService.saveTaskSfruttamentoAnsyDca(taskSfruttamentoAnsyDca).pipe(
        tap( res => {
          this.isResultOk = true;
          this.hideSpinner();
          this.readonlyForm = true;
        }),
        catchError((error) => {
          console.log ('Error - saveAssociazioneSfruttamentoAnsyDca', error);
          this.setError(error);
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  private buildTaskSfruttamentoAnsyDca(): TaskSfruttamentoAnsyDca {
    return <TaskSfruttamentoAnsyDca> {
      operazione: {
        codice: TipoOperazioneEnum.INS
      },
      bicConto: this.conto.bic,
      targetServiceConto: this.conto.targetService,
      bicParty: this.party.bic,
      tipoParty: this.party.tipoParty,
      validFrom: this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value)
    };
  }

  private saveAssociazioneSfruttamentoSubAccount () {
    this.resetError();
    this.showSpinner();
    const taskConto = this.buildTaskConto();
    this.taskService.saveTaskConto(taskConto).pipe(
        tap( res => {
          this.isResultOk = true;
          this.hideSpinner();
          this.readonlyForm = true;
        }),
        catchError((error) => {
          console.log ('Error - saveAssociazioneSfruttamentoSubAccount', error);
          this.setError(error);
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  private buildTaskConto (): TaskConto {
    return <TaskConto> {
      operazione: {
        codice: TipoOperazioneEnum.UPD
      },
      idConto: this.conto.id,
      subBicPtyAnsy: this.party.bic,
      subTipoPtyAnsy: this.party.tipoParty.codice,
      subTipoSfruttAnsy: this.tipoSfruttamento.value,
      validFrom: this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value),

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

  getTipoSfruttamentoValue(){
    return this.tipiSfruttamento.find( t => t.codice ==  this.tipoSfruttamento.value).descrizione;
  }

  getDataSfruttamentoValue(){
    return this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value);
  }
}

