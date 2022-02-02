import { Component, OnInit } from '@angular/core';
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {SecurityService, UserService} from "../../../../services";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {RoutingService} from "../../../../services/routing.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractEccTranscodingIngrossoComponent} from "../abstract-ecc-transcoding-ingrosso.component";
import {GenericTableModel} from "../../../../models/generic-table-model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Utils} from "../../../../utilities/util";
import {dateValidator} from "../../../../validators/date-validator";
import {get} from 'lodash';
import {RSQLUtils} from "../../../../utilities/rsqlUtil";
import {SearchModel} from "../../../../models/search";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {ContoService} from "../../../../services/conto.service";
import {GenericActionRenderComponent} from "../../generic-action-render/generic-action-render.component";
import {ActionRenderModel, ButtonModel} from "../../../../models/action-render-model";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-ricerca-ecc-transcoding-ingrosso',
  templateUrl: './ricerca-ecc-transcoding-ingrosso.component.html',
  styleUrls: ['./ricerca-ecc-transcoding-ingrosso.component.scss']
})
export class RicercaEccTranscodingIngrossoComponent extends AbstractEccTranscodingIngrossoComponent implements OnInit {

  eccTranscodingIngrossoModel: GenericTableModel;
  showTable = false;
  ricercaForm: FormGroup;
  util: Utils ;

  constructor( protected eccTranscodingIngrossoService: EccTranscodingIngrossoService,
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

    super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
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
    return this.eccTranscodingIngrossoService.searchModel;
  }

  protected setSearcModel(searchModel: SearchModel) {
    return this.eccTranscodingIngrossoService.searchModel = searchModel;
  }

  protected buildForm() {
    this.ricercaForm = this.formBuilder.group({
      abi: new FormControl(null, [this.wildcard2Validator.bind(this)]   ),
      cab: new FormControl(null, [this.wildcard2Validator.bind(this)]   ),
      bicConto: new FormControl(null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)] ),
      tipoConto: new FormControl(null, []   ),
      verso: new FormControl(null, [] ),
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

  get abi() { return this.ricercaForm.get('abi'); }
  get cab() { return this.ricercaForm.get('cab'); }
  get bicConto() { return this.ricercaForm.get('bicConto'); }
  get tipoConto() { return this.ricercaForm.get('tipoConto'); }
  get verso() { return this.ricercaForm.get('verso'); }
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
    this.eccTranscodingIngrossoModel = {
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
    this.eccTranscodingIngrossoModel.gridOptions.api.sizeColumnsToFit();
    this.eccTranscodingIngrossoModel.gridOptions.onGridSizeChanged = evt =>  this.eccTranscodingIngrossoModel.gridOptions.api ?  this.eccTranscodingIngrossoModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  protected buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: 'ABI',                    field: 'abi',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'CAB',                    field: 'cab',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'VERSO',                  field: 'verso',            filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'BIC CONTO',              field: 'bicConto',         filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'TIPO CONTO',             field: 'tipoConto',        filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',      field: 'validFrom',        filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',        field: 'validTo',          filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',                 resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
    ];
  }

  public buildActionRenderModel(data): ActionRenderModel {
    let detailButton =  null;

    if (this.userIsSpi || this.userIsBil || this.userIsVis) {
      detailButton = <ButtonModel>{
        label: 'Visualizza dettaglio Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_INGR_DETAIL),
        params: {idEccTransIng: data.id, backUrl: this.routingService.ECC_TRANS_INGR_SEARCH},
        enabled: true,
        sessionKey: this.routingService.ECC_TRANS_INGR_DETAIL
      };
    }

    let modifyButton =  null;
    let deleteButton =  null;

    if (this.userIsSpi && this.isEccTranscodingIngrossoActive(data)) {
      modifyButton = <ButtonModel> {
        label: 'Modifica Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_INGR_MODIFY),
        params: {idEccTransIng: data.id, backUrl: this.routingService.ECC_TRANS_INGR_SEARCH},
        enabled: true,
        sessionKey : this.routingService.ECC_TRANS_INGR_MODIFY
      };
      deleteButton = <ButtonModel> {
        label: 'Cancellazione Logica Eccezione ',
        routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_INGR_DELETE),
        params: {idEccTransIng: data.id, backUrl: this.routingService.ECC_TRANS_INGR_SEARCH},
        enabled: true,
        sessionKey : this.routingService.ECC_TRANS_INGR_DELETE
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
    this.eccTranscodingIngrossoModel.rowData = [];
    this.eccTranscodingIngrossoModel.enableMessageOnSizeResultLimit = false;

    this.manageSearchModel( this.eccTranscodingIngrossoModel, this.getSearcModel(), resetPage);

    if (!!this.ricercaForm.valid) {
      this.showSpinner();

      if (!this.getSearcModel()) {
        this.setSearcModel(this.initSearchModel());
      }
      this.getSearcModel().form = this.ricercaForm.value;
      const searchString = this.buildRsqlSearchString();

      this.eccTranscodingIngrossoService.getEccezioniTranscodingIngrosso(searchString).pipe(

          tap( res => {
            this.eccTranscodingIngrossoModel.enableMessageEmptyResult = true;
            if (!!res && res.content.length > 0 ) {
              this.eccTranscodingIngrossoModel.enableMessageEmptyResult = false;
              this.eccTranscodingIngrossoModel.rowData = res.content;
              this.eccTranscodingIngrossoModel.enableMessageOnSizeResultLimit = false;
              this.eccTranscodingIngrossoModel.searchRecordLenght = res.content.length;
              if ( res.totalElements > res.content.length) {
                this.eccTranscodingIngrossoModel.enableMessageOnSizeResultLimit = true;
                this.eccTranscodingIngrossoModel.searchRecordLenght = res.totalElements;
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
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.abi.value, 'abi'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.cab.value, 'cab'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoConto.value, 'tipoConto'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicConto.value, 'bicConto'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.verso.value, 'verso'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.descrizione.value, 'descrizione'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));

    const searchString = this.rSQLUtils.getSearchString(rSQLArray);
    console.log('RSQL searchString:' + searchString);
    return searchString;
  }

  goToInsertEccTranscodingIngrosso(){
    this.setSession(this.routingService.ECC_TRANS_INGR_INSERT, {backUrl: this.routingService.ECC_TRANS_INGR_SEARCH});
    this.router.navigate(['/anagrafiche/ecctranscodingingrosso/inserimento'], {});
  }
}
