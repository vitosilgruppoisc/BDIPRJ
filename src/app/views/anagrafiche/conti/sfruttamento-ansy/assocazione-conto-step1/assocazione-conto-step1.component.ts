import { Component, OnInit } from '@angular/core';
import {RicercaContiComponent} from '../../ricerca-conti/ricerca-conti.component';
import {SfruttamentoModel, InserimentoContoModel, TipoConto} from '../../../../../models/conto';
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
import {forkJoin, of} from 'rxjs';
import {Party} from '../../../../../models/party';
import {catchError, tap} from 'rxjs/operators';
import {InfoPanelModel} from '../../../../../models/info-panel-model';
import {GenericActionRenderComponent} from '../../../generic-action-render/generic-action-render.component';
import {ActionRenderModel, ButtonModel} from '../../../../../models/action-render-model';
import {AbstractContiComponent} from '../../abstract-conti.component';
import {GenericTableModel} from '../../../../../models/generic-table-model';
import { and, comparison, eq, lt, or } from 'rsql-builder';
import {TipoContoEnum} from '../../../../../models/enum';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {dateValidator} from "../../../../../validators/date-validator";
import {get} from 'lodash';
import {SearchModel} from "../../../../../models/search";

@Component({
  selector: 'app-assocazione-conto-step1',
  templateUrl: './assocazione-conto-step1.component.html',
  styleUrls: ['./assocazione-conto-step1.component.scss']
})
export class AssocazioneContoStep1Component extends  AbstractContiComponent implements OnInit {

  party: Party;
  associaContoModel: SfruttamentoModel;
  infoPanelPartyModel: InfoPanelModel;
  ricercaContiForm: FormGroup;
  contoModel: GenericTableModel;
  showTable = false;
  util: Utils ;

  constructor(
      protected router: Router,
      protected partyService: PartyService,
      protected filialeService: FilialeService,
      protected contiService: ContoService,
      protected securityService: SecurityService,
      protected userService: UserService,
      protected filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      protected formBuilder: FormBuilder,
      protected rSQLUtils: RSQLUtils,
      protected utils: Utils,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(partyService, filialeService, contiService, securityService, userService, formatterUtils, routingService, route);
    this.util = utils;
  }

  ngOnInit() {
    this.buildCombo();
    this.checkUserSpi();
    this.manageNavigation();
  }

  protected manageNavigation() {

    this.route.queryParams.subscribe(params => {

      this.associaContoModel = this.getSession(this.CONTO_ASSOCIA_SESSION);
      if (!!this.associaContoModel) {
        this.loadSections();
        this.associaContoModel.wizardSteps = this.setStepForAssociaConto(this.associaContoModel, 'associa-step1');
        this.backUrl = this.getBackUrlForAssociaConto(this.associaContoModel, 'associa-step1');
      } else {
        this.setError();
      }

      this.buildModel();
      this.buildForm();

      if (!!params && !!get(params, this.BACK) && !!this.getSearcModel() ) {
        this.ricercaContiForm.setValue(this.getSearcModel().form);
        this.onSubmit(false);
      } else {
        this.setSearcModel(this.initSearchModel());
      }
    });
  }

  private loadSections () {
    this.showSpinner();

    this.partyService.getParty( this.associaContoModel.idParty).pipe(
        tap ( res => {
          this.party = res;
          this.buildPartySection();
          this.tipiConto = this.buildTipoContoDCAOrCBorSubAccount();
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

  protected buildForm() {
    this.ricercaContiForm = this.formBuilder.group({
      bicConto:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
      targetService: new FormControl('RTGS',   []),
      idConto: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      abi: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      tipoConto: new FormControl(null,   [/*Validators.required*/]),
      dataInizioSfruttamentoDa: new FormControl(null, []),
      dataAperturaDa: new FormControl(null, []   ),
      dataAperturaA: new FormControl(null, []   ),
      dataChiusuraDa: new FormControl(null, []   ),
      dataChiusuraA: new FormControl(null, []   ),
      utenteInserimento: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      utenteApprovatore: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
    }, { validator: dateValidator( [
        {field1: 'dataAperturaDa', field2: 'dataAperturaA'},
        {field1: 'dataChiusuraDa', field2: 'dataChiusuraA'}
      ]) });

    //A valle dei test l'utente richiede di eliminare l'obbligatorietà della data inizio sfruttamento
    /*this.dataInizioSfruttamentoDa.setValidators([this.dataInizioSfruttamentoValidator.bind(this)]);
    this.tipoConto.valueChanges.subscribe(
        () => { this.dataInizioSfruttamentoDa.updateValueAndValidity(); }
    );*/
  }

  dataInizioSfruttamentoValidator(control: FormControl): {[s: string]: boolean } {
    if ( this.checkTipoContoRTGS_SA() ) {
      if (! (!!control && !!control.value)) {
        return {'value': true};
      } else if (typeof  control.value === 'string' || !this.checkDateFormat(control.value)) {
        return{ dateformat: true };
      }
    }
    return null;
  }

  private checkDateFormat(val: any) {
    if (!val.year || val.year < 1000) {
      return false;
    }
    if (!val.month || val.month > 12 || val.month < 1) {
      return false;
    }
    if (!val.day || val.day > 31 || val.day < 1) {
      return false;
    }
    return true;
  }

  checkTipoContoRTGS_SA(): boolean {
    return (!!this.ricercaContiForm.get('tipoConto') && !!this.ricercaContiForm.get('tipoConto').value && this.ricercaContiForm.get('tipoConto').value == 'RTGS_SA');
  }

  checkResetDataInizioSfruttamento() {
    if (!this.checkTipoContoRTGS_SA()) {
      this.reset('dataInizioSfruttamentoDa');
    }
  }

  get bicConto() { return this.ricercaContiForm.get('bicConto'); }
  get targetService() { return this.ricercaContiForm.get('targetService'); }
  get idConto() { return this.ricercaContiForm.get('idConto'); }
  get abi() { return this.ricercaContiForm.get('abi'); }
  get tipoConto() { return this.ricercaContiForm.get('tipoConto'); }
  get indResidenza() { return this.ricercaContiForm.get('indResidenza'); }
  get catEconomica() { return this.ricercaContiForm.get('catEconomica'); }
  get filiale() { return this.ricercaContiForm.get('filiale'); }
  get dataAperturaDa() { return this.ricercaContiForm.get('dataAperturaDa'); }
  get dataAperturaA() { return this.ricercaContiForm.get('dataAperturaA'); }
  get dataChiusuraDa() { return this.ricercaContiForm.get('dataChiusuraDa'); }
  get dataChiusuraA() { return this.ricercaContiForm.get('dataChiusuraA'); }
  get utenteInserimento() { return this.ricercaContiForm.get('utenteInserimento'); }
  get utenteApprovatore() { return this.ricercaContiForm.get('utenteApprovatore'); }
  get dataInizioSfruttamentoDa() { return this.ricercaContiForm.get('dataInizioSfruttamentoDa'); }

  reset( field) {
    this.ricercaContiForm.get(field).setValue(null);
  }

  buildModel() {
    this.contoModel = {
      domLayout: 'autoHeight',
      gridOptions: {
        rowHeight: 30,
        paginationPageSize: 10,
        defaultColDef: {
          sortable: true
        },
        context: {
          componentParent: this
        },
        onGridReady: () => this.initializeGrid()
      },
      rowData: [],
      pagination: true,
      columnsFitAvailable: true,
      columnDefs: this.buildColumnDef(),
      enableCsvExport: false,
      enablePdfExport: false,
      enableColumnSelection: false
    };
  }

  protected initializeGrid(): void {
    this.contoModel.gridOptions.api.sizeColumnsToFit();
    this.contoModel.gridOptions.onGridSizeChanged = evt =>  this.contoModel.gridOptions.api ?  this.contoModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  protected buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: 'BIC CONTO',              field: 'bic',                      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'ACCOUNT ID',             field: 'numeroConto',                       filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'TARGET SERVICE',         field: 'targetService',            filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'TIPO CONTO',             field: 'tipoConto.descrizione',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'ABI',                    field: 'abi',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DESCRIZIONE',            field: 'descrizione',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DATA APERTURA',          field: 'dataApertura',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DATA CHIUSURA',          field: 'dataChiusura',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',                         resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
    ];
  }

  protected buildActionRenderModel(data): ActionRenderModel {
    this.associaContoModel.dataInizioSfruttamento = this.dataInizioSfruttamentoDa.value;
    this.setSession(this.CONTO_ASSOCIA_SESSION, this.associaContoModel);

    const selectButton = <ButtonModel> {
      label: 'Seleziona Conto '.concat(data.numeroConto),
      routerLink: this.routingService.getRouteByKey(this.routingService.CONTO_ASSOCIA_STEP2),
      params: {idConto: data.id, idParty:  this.associaContoModel.idParty},
      enabled: true,
      sessionKey: this.CONTO_ASSOCIA_SESSION
    };

    return <ActionRenderModel> {
      detailButton: null,
      modifyButton: null,
      deleteButton: null,
      selectButton: selectButton
    };
  }

  protected buildRsqlSearchString() {

    const today = new Date();

    const rSQLArray: string [] = [];
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicConto.value, 'bic'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.targetService.value, 'targetService'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.idConto.value, 'numeroConto'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.abi.value, 'abi'));
    if(!!this.tipoConto.value){
      rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoConto.value, 'tipoConto'));
    } else {
      rSQLArray.push(this.rSQLUtils.manageIn( this.tipiConto.map( t => t.codice), 'tipoConto'));
    }
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value), null, 'validTo'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataChiusuraDa.value), this.formatterUtils.dateToString(this.dataChiusuraA.value), 'dataChiusura'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));
    //Ricerca solo conti attivi
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString({day: today.getUTCDate(), month: (today.getUTCMonth() + 1), year: today.getFullYear()}), null, 'validTo'));
    //Data l’associazione 1:1, potranno essere selezionabili solo Subaccount NON sfruttati da un altro ANSY, oppure la cui associazione di sfruttamento risulti terminata alla data di inizio sfruttamento rispetto all’ANSY di cui si sta effettuando l’associazione
    if (!!this.checkTipoContoRTGS_SA() && !!this.dataInizioSfruttamentoDa.value) {
      const comparison1 = and('subTipoPtyAnsy'.concat('=isnull=null'), 'subBicPtyAnsy'.concat('=isnull=null'));
      const comparison2 = and(comparison('subTipoPtyAnsy', eq(this.party.tipoParty.codice)), comparison('subBicPtyAnsy', eq(this.party.bic)), comparison('validFrom', lt(this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value))));
      const comparison3 = or(comparison1, comparison2);
      rSQLArray.push(comparison3);
    }
    const searchString = this.rSQLUtils.getSearchString(rSQLArray);
    console.log('RSQL searchString:' + searchString);
    return searchString;
  }

  onSubmit(resetPage: boolean) {
    if (!!this.ricercaContiForm.valid) {
      this.showSpinner();
      this.showTable = false;
      this.resetError();
      this.contoModel.rowData = [];
      this.contoModel.enableMessageOnSizeResultLimit = false;

      this.manageSearchModel( this.contoModel, this.getSearcModel(), resetPage);

      if (!!this.ricercaContiForm.valid) {
        this.showSpinner();

        if (!this.getSearcModel()) {
          this.setSearcModel(this.initSearchModel());
        }
        this.getSearcModel().form = this.ricercaContiForm.value;
        const searchString = this.buildRsqlSearchString();

        this.contiService.getConti(searchString).pipe(

            tap( res => {
              this.contoModel.enableMessageEmptyResult = true;
              if (!!res && res.content.length > 0 ) {
                this.contoModel.enableMessageEmptyResult = false;
                this.contoModel.rowData = res.content;
                this.contoModel.enableMessageOnSizeResultLimit = false;
                this.contoModel.searchRecordLenght = res.content.length;
                if ( res.totalElements > res.content.length) {
                  this.contoModel.enableMessageOnSizeResultLimit = true;
                  this.contoModel.searchRecordLenght = res.totalElements;
                }
              }
            }),

            tap ( res => {
              this.showTable = true;
              this.hideSpinner();
            }),

            catchError((error) => {
              console.log ('Error - submit', error);
              this.showTable = false;
              this.setError(error);
              this.hideSpinner();
              return of(null);
            })
        ).subscribe();
      }
    }
  }

  protected getSearcModel() {
    return this.contiService.associaContosearchContoModel;
  }

  protected setSearcModel(searchModel: SearchModel) {
    return this.contiService.associaContosearchContoModel = searchModel;
  }

}
