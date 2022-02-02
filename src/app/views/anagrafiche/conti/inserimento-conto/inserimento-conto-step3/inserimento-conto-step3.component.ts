import { Component, OnInit } from '@angular/core';
import {RicercaContiComponent} from '../../ricerca-conti/ricerca-conti.component';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../../services/party.service';
import {FilialeService} from '../../../../../services/filiale.service';
import {ContoService} from '../../../../../services/conto.service';
import {SecurityService, UserService} from '../../../../../services';
import {FilterUtils} from '../../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../../utilities/formatterUtils';
import {FormBuilder, FormControl} from '@angular/forms';
import {RSQLUtils} from '../../../../../utilities/rsqlUtil';
import {Utils} from '../../../../../utilities/util';
import {RoutingService} from '../../../../../services/routing.service';
import {InserimentoContoModel, TipoConto} from '../../../../../models/conto';
import {GenericActionRenderComponent} from '../../../generic-action-render/generic-action-render.component';
import {ActionRenderModel, ButtonModel} from '../../../../../models/action-render-model';
import {TipoContoEnum, TipoFlagEnum} from '../../../../../models/enum';
import {SearchModel} from "../../../../../models/search";
import {get} from 'lodash';
import {dateValidator} from "../../../../../validators/date-validator";

@Component({
  selector: 'app-inserimento-conto-step3',
  templateUrl: './inserimento-conto-step3.component.html',
  styleUrls: ['./inserimento-conto-step3.component.scss']
})
export class InserimentoContoStep3Component extends  RicercaContiComponent implements OnInit {

  inserimentoContoModel: InserimentoContoModel;
  tipiContoDCA_CB: TipoConto [];
  constructor(
      protected router: Router,
      protected partyService: PartyService,
      protected filialeService: FilialeService,
      protected contoService: ContoService,
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
    super(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route);
  }

  ngOnInit() {
    this.buildCombo();
    this.checkUserSpi();
    this.manageNavigation();
  }

  protected manageNavigation() {

    this.route.queryParams.subscribe(params => {

      const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
      if (!!inserimentoContoSessionObj) {
        this.inserimentoContoModel = inserimentoContoSessionObj;
        this.tipiContoDCA_CB = this.buildTipoContoDCAOrCB();
        this.buildForm();
        this.buildModel();
        this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step3');
        this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step3');
      } else {
        this.setError();
      }

      if (!!params && !!get(params, this.BACK) && !!this.getSearcModel() ) {
        this.ricercaForm.setValue(this.getSearcModel().form);
        this.submit(null, false);
      } else {
        this.setSearcModel(this.initSearchModel());
      }
    });
  }

  protected buildForm() {
    this.ricercaForm = this.formBuilder.group({
      bicParty:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
      tipoParty: new FormControl(null,   []),
      nomeParty: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      bicConto:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
      targetService: new FormControl(null,   []),
      idConto: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      abi: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      tipoConto: new FormControl(null,   []),
      defaultMCA: new FormControl(null,   []),
      flagPressoBDI: new FormControl((!!this.inserimentoContoModel.pressoBDI ? 1 : 0),   []),
      flagInserimentoManuale: new FormControl(null,   []),
      indResidenza: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      catEconomica: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      filiale: new FormControl(null,   []),
      dataAperturaDa: new FormControl(null, []   ),
      dataAperturaA: new FormControl(null, []   ),
      dataChiusuraDa: new FormControl(null, []   ),
      dataChiusuraA: new FormControl(null, []   ),
      utenteInserimento: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      utenteApprovatore: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
    }, { validator: dateValidator( [
        {field1: 'dataAperturaDa', field2: 'dataAperturaA'},
        {field1: 'dataChiusuraDa', field2: 'dataChiusuraA'},
        {field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA'},
        {field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA'}
      ]) });
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
      {colId: ('id_' + order++), headerName: 'ID_CONTO',               field: 'id',                       filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'TARGET SERVICE',         field: 'targetService',            filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'TIPO CONTO',             field: 'tipoConto.descrizione',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'BIC PARTY',              field: 'bicParty',                 filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'NOME PARTY',             field: 'nomeParty',                filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DEFAULT MCA',            field: 'mcaDefFlag',               filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.getBooleanAsString(data.data, 'mcaDefFlag'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'PRESSO BDI',             field: 'pressoBDI',                filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.getBooleanAsString(data.data, 'pressoBDI'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DATA APERTURA',          field: 'dataApertura',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DATA CHIUSURA',          field: 'dataChiusura',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',      field: 'validFrom',                filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',        field: 'validTo',                  filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',                         resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
    ];
  }

  buildActionRenderModel(data): ActionRenderModel {
    this.inserimentoContoModel.contoDCAPadre = data.id;
    const selectButton = <ButtonModel> {
      label: 'Seleziona Conto '.concat(data.nunmeroConto),
      routerLink: this.inserimentoContoModel.prefixUrl.concat('step4'),
      params: this.inserimentoContoModel,
      enabled: true,
      sessionKey: this.CONTO_INSERT_SESSION
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
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicParty.value, 'bicParty'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoParty.value, 'tipoParty'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.nomeParty.value, 'nomeParty '));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicConto.value, 'bic'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.targetService.value, 'targetService'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.idConto.value, 'numeroConto'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.abi.value, 'abi'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoConto.value, 'tipoConto'));
    rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.formatterUtils.getStringAsBoolean(this.defaultMCA.value), 'mcaDefFlag'));
    rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.flagPressoBDI.value, 'pressoBdi'));
    rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.formatterUtils.getStringAsBoolean(this.flagInserimentoManuale.value), 'flgMan'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.filiale.value, 'filialeRiferimento'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.indResidenza.value, 'effIndicatoreRes'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.catEconomica.value, 'effCatEconomica'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataChiusuraDa.value), this.formatterUtils.dateToString(this.dataChiusuraA.value), 'dataChiusura'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString({day: today.getUTCDate(), month: (today.getUTCMonth() + 1), year: today.getFullYear()}), this.formatterUtils.dateToString({day: 31, month: 12, year: 9999}), 'validTo'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));

    const searchString = this.rSQLUtils.getSearchString(rSQLArray);
    console.log('RSQL searchString:' + searchString);
    return searchString;
  }

  getTipoContoValue() {
    return this.tipiConto.find( f => f.codice == this.tipoConto.value).descrizione;
  }

  getPressoBDIValue() {
    const val = (!!this.inserimentoContoModel.pressoBDI ? TipoFlagEnum.SI : TipoFlagEnum.NO);
    return this.tipiPressoBDI.find( t => t.codice ==  val).descrizione;
  }

  protected getSearcModel() {
    return this.contoService.insertContosearchContoPadreModel;
  }

  protected setSearcModel(searchModel: SearchModel) {
    return this.contoService.insertContosearchContoPadreModel = searchModel;
  }
}
