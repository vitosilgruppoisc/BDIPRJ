import { Component, OnInit } from '@angular/core';
import {GenericTableModel} from "../../../../models/generic-table-model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Utils} from "../../../../utilities/util";
import {SecurityService, UserService} from "../../../../services";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {RSQLUtils} from "../../../../utilities/rsqlUtil";
import {RoutingService} from "../../../../services/routing.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchModel} from "../../../../models/search";
import {dateValidator} from "../../../../validators/date-validator";
import {GenericActionRenderComponent} from "../../generic-action-render/generic-action-render.component";
import {ActionRenderModel, ButtonModel} from "../../../../models/action-render-model";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {AbstractEccTranscodingRetailComponent} from "../abstract-ecc-transcoding-retail.component";
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";
import {get} from 'lodash';

@Component({
  selector: 'app-ricerca-ecc-transcoding-retail',
  templateUrl: './ricerca-ecc-transcoding-retail.component.html',
  styleUrls: ['./ricerca-ecc-transcoding-retail.component.scss']
})
export class RicercaEccTranscodingRetailComponent extends AbstractEccTranscodingRetailComponent implements OnInit {

  eccTranscodingRetailModel: GenericTableModel;
  showTable = false;
  ricercaForm: FormGroup;
  util: Utils ;

  constructor( protected eccTranscodingRetailService: EccTranscodingRetailService,
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

    super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
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
    return this.eccTranscodingRetailService.searchModel;
  }

  protected setSearcModel(searchModel: SearchModel) {
    return this.eccTranscodingRetailService.searchModel = searchModel;
  }

  protected buildForm() {
    this.ricercaForm = this.formBuilder.group({
      nsc: new FormControl(null, [this.wildcard2Validator.bind(this)]   ),
      countryCode: new FormControl(null, []   ),
      bic: new FormControl(null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)] ),
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

  get nsc() { return this.ricercaForm.get('nsc'); }
  get countryCode() { return this.ricercaForm.get('countryCode'); }
  get bic() { return this.ricercaForm.get('bic'); }
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
    this.eccTranscodingRetailModel = {
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
    this.eccTranscodingRetailModel.gridOptions.api.sizeColumnsToFit();
    this.eccTranscodingRetailModel.gridOptions.onGridSizeChanged = evt =>  this.eccTranscodingRetailModel.gridOptions.api ?  this.eccTranscodingRetailModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  protected buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: 'NSC',                    field: 'nsc',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'COUNTRY CODE',           field: 'countryCode.descrizione',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'BIC',                    field: 'bic',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DESCRIZIONE',            field: 'descrizione',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',      field: 'validFrom',        filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',        field: 'validTo',          filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',                 resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
    ];
  }

  public buildActionRenderModel(data): ActionRenderModel {
    let detailButton =  null;

    if (this.userIsDet || this.userIsVis) {
      detailButton = <ButtonModel> {
        label: 'Visualizza dettaglio Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_RET_DETAIL),
        params: {idEccTransRet: data.id, backUrl: this.routingService.ECC_TRANS_RET_SEARCH},
        enabled: true,
        sessionKey : this.routingService.ECC_TRANS_RET_DETAIL
      };
    }

    let modifyButton =  null;
    let deleteButton =  null;

    //La condizione che il record debba essere attivo è statta modificata da Ernesto sul DRF: cfr mail del 20/09/21
    if (this.userIsDet /*&& this.isEccTranscodingRetailActive(data)*/) {
      modifyButton = <ButtonModel> {
        label: 'Modifica Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_RET_MODIFY),
        params: {idEccTransRet: data.id, backUrl: this.routingService.ECC_TRANS_RET_SEARCH},
        enabled: true,
        sessionKey : this.routingService.ECC_TRANS_RET_MODIFY
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
    this.eccTranscodingRetailModel.rowData = [];
    this.eccTranscodingRetailModel.enableMessageOnSizeResultLimit = false;

    this.manageSearchModel( this.eccTranscodingRetailModel, this.getSearcModel(), resetPage);

    if (!!this.ricercaForm.valid) {
      this.showSpinner();

      if (!this.getSearcModel()) {
        this.setSearcModel(this.initSearchModel());
      }
      this.getSearcModel().form = this.ricercaForm.value;
      const searchString = this.buildRsqlSearchString();

      this.eccTranscodingRetailService.getEccezioniTranscodingRetail(searchString).pipe(

          tap( res => {
            this.eccTranscodingRetailModel.enableMessageEmptyResult = true;
            if (!!res && res.content.length > 0 ) {
              this.eccTranscodingRetailModel.enableMessageEmptyResult = false;
              this.eccTranscodingRetailModel.rowData = res.content;
              this.eccTranscodingRetailModel.enableMessageOnSizeResultLimit = false;
              this.eccTranscodingRetailModel.searchRecordLenght = res.content.length;
              if ( res.totalElements > res.content.length) {
                this.eccTranscodingRetailModel.enableMessageOnSizeResultLimit = true;
                this.eccTranscodingRetailModel.searchRecordLenght = res.totalElements;
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
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.nsc.value, 'nsc'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.countryCode.value, 'countryCode'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bic.value, 'bic'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.descrizione.value, 'descrizione'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));

    const searchString = this.rSQLUtils.getSearchString(rSQLArray);
    console.log('RSQL searchString:' + searchString);
    return searchString;
  }

  goToInsertEccTranscodingRetail(){
    this.setSession(this.routingService.ECC_TRANS_RET_INSERT, {backUrl: this.routingService.ECC_TRANS_RET_SEARCH});
    this.router.navigate(['/anagrafiche/ecctranscodingretail/inserimento'], {});
  }
}
