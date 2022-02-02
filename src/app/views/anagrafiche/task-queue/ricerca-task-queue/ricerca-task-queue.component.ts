import { Component, OnInit } from '@angular/core';
import {GenericTableModel} from '../../../../models/generic-table-model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {SecurityService, UserService} from '../../../../services';
import {AbstractTaskComponent} from '../abstract-task.component';
import {ActionRenderModel, ButtonModel} from '../../../../models/action-render-model';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {TaskService} from '../../../../services/task.service';
import {OperazioneTask, StatoTask, TipoTask} from '../../../../models/task';
import {StatoTaskEnum, TipoTaskEnum, TipoOperazioneEnum} from '../../../../models/enum';
import {ModalService} from 'scam-bdi-uikit';
import {Utils} from '../../../../utilities/util';
import {RoutingService} from '../../../../services/routing.service';
import {get} from 'lodash';
import {dateValidator} from "../../../../validators/date-validator";

@Component({
  selector: 'app-ricerca-task-queue',
  templateUrl: './ricerca-task-queue.component.html',
  styleUrls: ['./ricerca-task-queue.component.scss']
})
export class RicercaTaskQueueComponent extends  AbstractTaskComponent implements OnInit {

  taskModel: GenericTableModel;
  showTable = false;
  ricercaForm: FormGroup;

  tipiAnagrafica: TipoTask [];
  tipiOperazione: OperazioneTask [];
  stati: StatoTask [];
  util: Utils ;

  constructor(
      router: Router,
      private taskService: TaskService,
      protected securityService: SecurityService,
      protected userService: UserService,
      protected modalService: ModalService,
      private filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      private formBuilder: FormBuilder,
      private rSQLUtils: RSQLUtils,
      private utils: Utils,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(securityService, userService, formatterUtils, modalService, routingService, route);
    this.util = utils;
  }

  ngOnInit() {
    super.ngOnInit();
    this.buildCombo();
    this.buildForm();
    this.buildModel();
    this.manageNavigation();
  }

  private manageNavigation() {
    this.route.queryParams.subscribe(params => {
      if (!!params && !!get(params, this.BACK) && !!this.taskService.searchModel ) {
        this.ricercaForm.setValue(this.taskService.searchModel.form);
        this.submit(null, false);
      } else {
        this.taskService.searchModel = this.initSearchModel();
      }
    });
  }

  private buildCombo() {
    this.taskService.getTipoTask().pipe(
        tap( res => this.tipiAnagrafica = res)
    ).subscribe();

    this.taskService.getOperazione().pipe(
        tap( res => this.tipiOperazione = res)
    ).subscribe();

    this.taskService.getStatoTask().pipe(
        tap( res => this.stati = res)
    ).subscribe();
  }

  private buildForm() {
    this.ricercaForm = this.formBuilder.group({
      tipoAnagrafica:  new FormControl(null,   []),
      operazione: new FormControl(null,   []),
      recordId: new FormControl(null,   []),
      utenteRichiesta: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      stato: new FormControl(null,   []),
      utenteValidazione: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
      dataRichiestaDa: new FormControl(null,   []),
      dataRichiestaA: new FormControl(null,   []),
      dataValidazioneDa: new FormControl(null,   []),
      dataValidazioneA: new FormControl(null,   [])
    }, { validator: dateValidator( [
        {field1: 'dataRichiestaDa', field2: 'dataRichiestaA'},
        {field1: 'dataValidazioneDa', field2: 'dataValidazioneA'}
      ]) });

    this.ricercaForm.get('stato').setValue(StatoTaskEnum.CREATED);
  }

  get tipoAnagrafica() { return this.ricercaForm.get('tipoAnagrafica'); }
  get operazione() { return this.ricercaForm.get('operazione'); }
  get recordId() { return this.ricercaForm.get('recordId'); }
  get utenteRichiesta() { return this.ricercaForm.get('utenteRichiesta'); }
  get stato() { return this.ricercaForm.get('stato'); }
  get utenteValidazione() { return this.ricercaForm.get('utenteValidazione'); }
  get dataRichiestaDa() { return this.ricercaForm.get('dataRichiestaDa'); }
  get dataRichiestaA() { return this.ricercaForm.get('dataRichiestaA'); }
  get dataValidazioneDa() { return this.ricercaForm.get('dataValidazioneDa'); }
  get dataValidazioneA() { return this.ricercaForm.get('dataValidazioneA'); }

  reset( field) {
    this.ricercaForm.get(field).setValue(null);
  }

  buildModel() {
    this.taskModel = {
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

  private initializeGrid(): void {
    this.taskModel.gridOptions.api.sizeColumnsToFit();
    this.taskModel.gridOptions.onGridSizeChanged = evt =>  this.taskModel.gridOptions.api ?  this.taskModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  private buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: 'TIPO ANAGRAFICA',        field: 'tipoTask.descrizione',   filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'RECORD ID',              field: 'recordId',               filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'OPERAZIONE',             field: 'operazione.descrizione', filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'UTENTE RICHIESTA',       field: 'userReq',                filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'STATO',                  field: 'stato.descrizione',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'UTENTE VALIDATORE',      field: 'userValidate',           filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DATA RICHIESTA',         field: 'tsInserimento',          filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDateTime(data.data, 'tsInserimento'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'DATA VALIDAZIONE',       field: 'tsValidate',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDateTime(data.data, 'tsValidate'), exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',                       resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
    ];
  }

  buildActionRenderModel(data): ActionRenderModel {

    let detailButton = null;

    if(this.userIsSpi || this.userIsBil || this.userIsVis) {
      if (data.tipoTask.codice == TipoTaskEnum.PARTY) {
        detailButton = <ButtonModel>{
          label: 'Visualizza dettaglio Party',
          routerLink: this.routingService.getRouteByKey(this.routingService.TASK_PARTY_DETAIL),
          params: {idTask: data.id, backUrl: this.routingService.TASK_SEARCH},
          enabled: true,
          sessionKey: this.routingService.TASK_PARTY_DETAIL
        };
      }

      if (data.tipoTask.codice == TipoTaskEnum.CONTO) {
        detailButton = <ButtonModel>{
          label: 'Visualizza dettaglio Conto',
          routerLink: this.routingService.getRouteByKey(this.routingService.TASK_CONTO_DETAIL),
          params: {idTask: data.id, backUrl: this.routingService.TASK_SEARCH},
          enabled: true,
          sessionKey: this.routingService.TASK_CONTO_DETAIL
        };
      }

      if (data.tipoTask.codice == TipoTaskEnum.SFRUTTAMENTO) {
        detailButton = <ButtonModel>{
          label: 'Visualizza dettaglio Sfruttamento',
          routerLink: this.routingService.getRouteByKey(this.routingService.TASK_SFRUTTAMENTO_DETAIL),
          params: {idTask: data.id, backUrl: this.routingService.TASK_SEARCH},
          enabled: true,
          sessionKey: this.routingService.TASK_SFRUTTAMENTO_DETAIL
        };
      }

      if (data.tipoTask.codice == TipoTaskEnum.ECC_TRANSCODIFICA_INGROSSO) {
        detailButton = <ButtonModel>{
          label: 'Visualizza dettaglio Eccezione',
          routerLink: this.routingService.getRouteByKey(this.routingService.TASK_ECC_TRANS_INGR_DETAIL),
          params: {idTask: data.id, backUrl: this.routingService.TASK_SEARCH},
          enabled: true,
          sessionKey: this.routingService.TASK_ECC_TRANS_INGR_DETAIL
        };
      }
    }

    if (this.userIsDet || this.userIsVis) {
      if (data.tipoTask.codice == TipoTaskEnum.ECC_TRANSCODIFICA_DETTAGLIO) {
        detailButton = <ButtonModel> {
          label: 'Visualizza dettaglio Eccezione',
          routerLink: this.routingService.getRouteByKey(this.routingService.TASK_ECC_TRANS_RET_DETAIL),
          params: {idTask: data.id, backUrl: this.routingService.TASK_SEARCH},
          enabled: true,
          sessionKey: this.routingService.TASK_ECC_TRANS_RET_DETAIL
        };
      }

      if (data.tipoTask.codice == TipoTaskEnum.ECC_RAGGIUNGIBILITA_DETTAGLIO) {
        detailButton = <ButtonModel> {
          label: 'Visualizza dettaglio Eccezione',
          routerLink: this.routingService.getRouteByKey(this.routingService.TASK_ECC_RAGG_RET_DETAIL),
          params: {idTask: data.id, backUrl: this.routingService.TASK_SEARCH},
          enabled: true,
          sessionKey: this.routingService.TASK_ECC_RAGG_RET_DETAIL
        };
      }
    }

    const modifyButton =  null;
    const deleteButton =  null;
    return <ActionRenderModel> {
      detailButton: detailButton,
      modifyButton: modifyButton,
      deleteButton: deleteButton
    };
  }

  submit(targetEl: HTMLElement, resetPage: boolean) {

    this.showTable = false;
    this.resetError();
    this.taskModel.rowData = [];
    this.taskModel.enableMessageOnSizeResultLimit = false;

    this.manageSearchModel( this.taskModel, this.taskService.searchModel, resetPage);

    if (!!this.ricercaForm.valid) {
      this.showSpinner();

      if (!this.taskService.searchModel) {
        this.taskService.searchModel = this.initSearchModel();
      }
      this.taskService.searchModel.form = this.ricercaForm.value;
      const searchString = this.buildRsqlSearchString()

      this.taskService.getTasks(searchString).pipe(

          tap( res => {
            this.taskModel.enableMessageEmptyResult = true;
            if (!!res && res.content.length > 0 ) {
              this.taskModel.enableMessageEmptyResult = false;
              this.taskModel.rowData = res.content;
              this.taskModel.enableMessageOnSizeResultLimit = false;
              this.taskModel.searchRecordLenght = res.content.length;
              if ( res.totalElements > res.content.length) {
                this.taskModel.enableMessageOnSizeResultLimit = true;
                this.taskModel.searchRecordLenght = res.totalElements;
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

  private scrollToResult(targetEl: HTMLElement) {
    setTimeout(function() {
      console.log('Scrolling to table');
      targetEl.scrollIntoView({behavior: 'smooth'});
    }, 500);
  }

  private buildRsqlSearchString() {

    const rSQLArray: string [] = [];

    rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoAnagrafica.value, 'tipoTask'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.operazione.value, 'operazione'));
    rSQLArray.push(this.rSQLUtils.manageSelect( this.stato.value, 'stato'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteRichiesta.value, 'userReq'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteValidazione.value, 'userValidate'));
    rSQLArray.push(this.rSQLUtils.manageWildcard( this.recordId.value, 'recordId'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToStringWithTime(this.dataRichiestaDa.value), this.formatterUtils.dateToStringWithTime(this.dataRichiestaA.value, true), 'tsInserimento'));
    rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToStringWithTime(this.dataValidazioneDa.value), this.formatterUtils.dateToStringWithTime(this.dataValidazioneA.value, true), 'tsValidate'));

    const searchString = this.rSQLUtils.getSearchString(rSQLArray);
    console.log('RSQL searchString:' + searchString);
    return searchString;
  }
}
