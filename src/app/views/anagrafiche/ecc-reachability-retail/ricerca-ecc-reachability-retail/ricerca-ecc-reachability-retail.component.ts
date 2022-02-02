import {SearchModel} from "../../../../models/search";
import {ActionRenderModel, ButtonModel} from "../../../../models/action-render-model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {SecurityService, UserService} from "../../../../services";
import {of} from "rxjs";
import {dateValidator} from "../../../../validators/date-validator";
import {GenericActionRenderComponent} from "../../generic-action-render/generic-action-render.component";
import {AbstractEccReachabilityRetailComponent} from "../abstract-ecc-reachability-retail.component";
import {RoutingService} from "../../../../services/routing.service";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {GenericTableModel} from "../../../../models/generic-table-model";
import {RSQLUtils} from "../../../../utilities/rsqlUtil";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {get} from 'lodash';
import {Utils} from "../../../../utilities/util";

@Component({
  selector: 'app-ricerca-ecc-reachability-retail',
  templateUrl: './ricerca-ecc-reachability-retail.component.html',
  styleUrls: ['./ricerca-ecc-reachability-retail.component.scss']
})
export class RicercaEccReachabilityRetailComponent extends AbstractEccReachabilityRetailComponent implements OnInit {

  eccReachabilityRetailModel: GenericTableModel;
  showTable = false;
  ricercaForm: FormGroup;
  util: Utils ;

  constructor( protected eccReachabilityRetailService: EccReachabilityRetailService,
               protected securityService: SecurityService,
               protected userService: UserService,
               protected filterUtils: FilterUtils,
               protected formatterUtils: FormatterUtils,
               protected formBuilder: FormBuilder,
               protected rSQLUtils: RSQLUtils,
               protected utils: Utils,
               protected routingService: RoutingService,
               protected route: ActivatedRoute,
               protected router: Router) {

    super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
    this.util = utils;
  }

  ngOnInit() {
    super.ngOnInit();
    this.buildForm();
    this.buildModel();
    this.manageNavigation();
  }

  protected manageNavigation() {
    this.route.queryParams.subscribe(params => {
      if (!!params && !!get(params, this.BACK) && !!this.getSearcModel()) {
        this.ricercaForm.setValue(this.getSearcModel().form);
        this.submit(null, false);
      } else {
        this.setSearcModel(this.initSearchModel());
      }
    });
  }

  protected getSearcModel() {
    return this.eccReachabilityRetailService.searchModel;
  }

  protected setSearcModel(searchModel: SearchModel) {
    return this.eccReachabilityRetailService.searchModel = searchModel;
  }

  protected buildForm() {
    this.ricercaForm = this.formBuilder.group({
      bicInput: new FormControl(null, [this.wildcard2Validator.bind(this)]   ),
      canale: new FormControl(null, []   ),
      raggiungibile: new FormControl(null, []   ),
      //bicOutput: new FormControl(null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)] ),
      bicDiretto: new FormControl(null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)] ),
      descrizione: new FormControl(null, [this.wildcard2Validator.bind(this)] ),
      dataInizioValiditaDa: new FormControl(null, []   ),
      dataInizioValiditaA: new FormControl(null, []   ),
      dataFineValiditaDa: new FormControl(null, []   ),
      dataFineValiditaA: new FormControl(null, []   ),
      utenteInserimento: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      utenteApprovatore: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
    }, { validator: dateValidator( [
        {field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA'},
        {field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA'}
      ]) });
  }

  get bicInput() { return this.ricercaForm.get('bicInput'); }
  get canale() { return this.ricercaForm.get('canale'); }
  get raggiungibile() { return this.ricercaForm.get('raggiungibile'); }
  //get bicOutput() { return this.ricercaForm.get('bicOutput'); }
  get bicDiretto() { return this.ricercaForm.get('bicDiretto'); }
  get descrizione() { return this.ricercaForm.get('descrizione'); }
  get dataInizioValiditaDa() { return this.ricercaForm.get('dataInizioValiditaDa'); }
  get dataInizioValiditaA() { return this.ricercaForm.get('dataInizioValiditaA'); }
  get dataFineValiditaDa() { return this.ricercaForm.get('dataFineValiditaDa'); }
  get dataFineValiditaA() { return this.ricercaForm.get('dataFineValiditaA'); }
  get utenteInserimento() { return this.ricercaForm.get('utenteInserimento'); }
  get utenteApprovatore() { return this.ricercaForm.get('utenteApprovatore'); }

  reset( field) {
    this.ricercaForm.get(field).setValue(null);
  }

  buildModel() {
    this.eccReachabilityRetailModel = {
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
      enableCsvExport: true,
      enablePdfExport: true,
      enableColumnSelection: true
    };
  }

  protected initializeGrid(): void {
    this.eccReachabilityRetailModel.gridOptions.api.sizeColumnsToFit();
    this.eccReachabilityRetailModel.gridOptions.onGridSizeChanged = evt =>  this.eccReachabilityRetailModel.gridOptions.api ?  this.eccReachabilityRetailModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  protected buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: 'BIC INPUT',              field: 'bicInput',               filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'CANALE',                 field: 'canale.descrizione',     filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'RAGGIUNGIBILE',          field: 'raggiungibile',          filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.getBooleanAsString(data.data, 'raggiungibile'), exportOptions: {skipColumn: false}},
      //{colId: ('id_' + order++), headerName: 'BIC OUTPUT',             field: 'bicOutput',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'BIC DIRETTO',            field: 'bicDiretto',             filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',      field: 'validFrom',              filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',        field: 'validTo',                filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',                       resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
    ];
  }

  public buildActionRenderModel(data): ActionRenderModel {
    let detailButton =  null;

    if (this.userIsDet || this.userIsVis) {
      detailButton = <ButtonModel> {
        label: 'Visualizza dettaglio Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_RAGG_RET_DETAIL),
        params: {idEccRaggRet: data.id, backUrl: this.routingService.ECC_RAGG_RET_SEARCH},
        enabled: true,
        sessionKey : this.routingService.ECC_RAGG_RET_DETAIL
      };
    }

    let modifyButton =  null;
    const deleteButton =  null;

    //La condizione che il record debba essere attivo è statta modificata da Ernesto sul DRF: cfr mail del 20/09/21
    if (this.userIsDet /*&& this.isEccReachabilityRetailActive(data)*/) {
      modifyButton = <ButtonModel> {
        label: 'Modifica Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_RAGG_RET_MODIFY),
        params: {idEccRaggRet: data.id, backUrl: this.routingService.ECC_RAGG_RET_SEARCH},
        enabled: true,
        sessionKey : this.routingService.ECC_RAGG_RET_MODIFY
      };
    }
    return <ActionRenderModel> {
      detailButton: detailButton,
      modifyButton: modifyButton,
      deleteButton: deleteButton
    };
  }

  submit(targetEl: HTMLElement, resetPage: boolean) {

    this.showTable = false;
    this.resetError();
    this.eccReachabilityRetailModel.rowData = [];
    this.eccReachabilityRetailModel.enableMessageOnSizeResultLimit = false;

    this.manageSearchModel( this.eccReachabilityRetailModel, this.getSearcModel(), resetPage);

    if (!!this.ricercaForm.valid) {
      this.showSpinner();

      if (!this.getSearcModel()) {
        this.setSearcModel(this.initSearchModel());
      }
      this.getSearcModel().form = this.ricercaForm.value;
      const searchString = this.buildRsqlSearchString();

      this.eccReachabilityRetailService.getEccezioniReachabilityRetail(searchString).pipe(

          tap( res => {
            this.eccReachabilityRetailModel.enableMessageEmptyResult = true;
            if (!!res && res.content.length > 0 ) {
              this.eccReachabilityRetailModel.enableMessageEmptyResult = false;
              this.eccReachabilityRetailModel.rowData = res.content;
              this.eccReachabilityRetailModel.enableMessageOnSizeResultLimit = false;
              this.eccReachabilityRetailModel.searchRecordLenght = res.content.length;
              if ( res.totalElements > res.content.length) {
                this.eccReachabilityRetailModel.enableMessageOnSizeResultLimit = true;
                this.eccReachabilityRetailModel.searchRecordLenght = res.totalElements;
              }
            }
          }),

          tap ( res => {
            this.showTable = true;
            if (!!targetEl) {
              this.scrollToResult(targetEl);
            }
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

  protected scrollToResult(targetEl: HTMLElement) {
    setTimeout(function() {
      console.log('Scrolling to table');
      targetEl.scrollIntoView({behavior: 'smooth'});
    }, 500);
  }

  protected buildRsqlSearchString() {

    const rSQLArray: string [] = [];
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicInput.value, 'bicInput'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.canale.value, 'canale'));
    rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.formatterUtils.getStringAsBoolean(this.raggiungibile.value), 'raggiungibile'));
    //rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicOutput.value, 'bicOutput'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicDiretto.value, 'bicDiretto'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.descrizione.value, 'descrizione'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));

    const searchString = this.rSQLUtils.getSearchString(rSQLArray);
    console.log('RSQL searchString:' + searchString);
    return searchString;
  }

  goToInsertEccReachabilityRetail() {
    this.setSession(this.routingService.ECC_RAGG_RET_INSERT, {backUrl: this.routingService.ECC_RAGG_RET_SEARCH});
    this.router.navigate(['/anagrafiche/eccreachabilityretail/inserimento'], {});
  }
}
