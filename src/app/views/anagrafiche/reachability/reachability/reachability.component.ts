import { Component, OnInit } from '@angular/core';
import {AbstractAnagraficheComponent} from "../../abstract-anagrafiche.component";
import {CountryCode} from "../../../../models/ecc-transcoding-retail";
import {GenericComboItemModel} from "../../../../models/combo";
import {GenericTableModel} from "../../../../models/generic-table-model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SecurityService, UserService} from "../../../../services";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {RoutingService} from "../../../../services/routing.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {CircuitoEnum, TipologiaRichiestaTrRaEnum} from "../../../../models/enum";
import {dateValidator} from "../../../../validators/date-validator";
import {transcodingReachabilityTipologiaValidator} from "../../../../validators/trans-ragg-tipologia-validator";
import {of} from "rxjs";
import {ReachabilityService} from "../../../../services/reachability.service";
import {
  BicRechabilityResultInfo,
  BicTranscodingResultInfo,
  CircuitoTrRaItem,
  ReachabilityRequest,
  TranscodingRequest
} from "../../../../models/transc-ragg-model";
import {ResultModel, ResultRenderModel} from "../../../../models/result-render-model";
import {GenericResultRenderComponent} from "../../generic-result-render/generic-result-render.component";

@Component({
  selector: 'app-reachability',
  templateUrl: './reachability.component.html',
  styleUrls: ['./reachability.component.scss']
})
export class ReachabilityComponent extends  AbstractAnagraficheComponent implements OnInit {

  countryCodeList: CountryCode [];
  tipologiaList: GenericComboItemModel [];
  circuitiList: GenericComboItemModel [];
  reachabilityModel: GenericTableModel;
  showTable = false;
  ricercaForm: FormGroup;

  nscCCReadonly = true;
  ibanReadonly = true;
  bicReadonly = true;

  constructor( private reachabilityService: ReachabilityService,
               protected securityService: SecurityService,
               protected userService: UserService,
               private formBuilder: FormBuilder,
               protected formatterUtils: FormatterUtils,
               protected routingService: RoutingService,
               protected route: ActivatedRoute

  ) {
    super( securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.buildCombo();
    this.buildForm();
    this.buildModel();
  }

  protected buildCombo() {
    this.reachabilityService.getCountryCodes().pipe(
        tap( res => this.countryCodeList = res)
    ).subscribe();

    this.reachabilityService.getCircuiti().pipe(
        tap( res => this.circuitiList = res)
    ).subscribe();

    this.reachabilityService.getTipologia(true).pipe(
        tap( res => this.tipologiaList = res)
    ).subscribe();
  }

  protected buildForm() {
    const today = new Date();
    this.ricercaForm = this.formBuilder.group({
      tipologia: new FormControl(null, []),
      data: new FormControl({year: today.getFullYear(), month: (today.getUTCMonth() + 1), day: today.getUTCDate()}, []   ),
      nsc: new FormControl(null, []   ),
      countryCode: new FormControl(null, [] ),
      iban: new FormControl(null, [] ),
      bic: new FormControl(null, [] ),
      circuito: new FormControl(null, [] ),
    }, { validator: Validators.compose([
        dateValidator( [{field1: 'data', required1: true}]),
        transcodingReachabilityTipologiaValidator()]
      )});

    this.tipologia.valueChanges.subscribe(
        () => {
          this.manageTipologia();
        }
    );
  }

  private manageTipologia() {

    this.nscCCReadonly = true;
    this.ibanReadonly = true;
    this.bicReadonly = true;

    if (this.tipologia.value == TipologiaRichiestaTrRaEnum.NSC_CC) {
      this.reset('iban');
      this.reset('bic');
      this.nscCCReadonly = false;
    }

    if (this.tipologia.value == TipologiaRichiestaTrRaEnum.IBAN) {
      this.reset('nsc');
      this.reset('countryCode');
      this.reset('bic');
      this.ibanReadonly = false;
    }

    if (this.tipologia.value == TipologiaRichiestaTrRaEnum.BIC) {
      this.reset('nsc');
      this.reset('countryCode');
      this.reset('iban');
      this.bicReadonly = false;
    }

    this.nsc.updateValueAndValidity();
    this.countryCode.updateValueAndValidity();
    this.iban.updateValueAndValidity();
    this.bic.updateValueAndValidity();
  }

  get tipologia() { return this.ricercaForm.get('tipologia'); }
  get data() { return this.ricercaForm.get('data'); }
  get nsc() { return this.ricercaForm.get('nsc'); }
  get countryCode() { return this.ricercaForm.get('countryCode'); }
  get iban() { return this.ricercaForm.get('iban'); }
  get circuito() { return this.ricercaForm.get('circuito'); }
  get bic() { return this.ricercaForm.get('bic'); }

  reset( field) {
    this.ricercaForm.get(field).setValue(null);
  }

  buildModel() {
    this.reachabilityModel = {
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
    this.reachabilityModel.gridOptions.api.sizeColumnsToFit();
    this.reachabilityModel.gridOptions.onGridSizeChanged = evt =>  this.reachabilityModel.gridOptions.api ?  this.reachabilityModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  protected buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: '',     field: '',             resizable: true, cellRendererFramework: GenericResultRenderComponent, cellRendererParams: {modelFn: this.buildResultRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'left', minWidth: 30, maxWidth: 50},
      {colId: ('id_' + order++), headerName: 'CIRCUITO',                    field: 'circuito',          filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'CANALE',                      field: 'canale',            filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      //{colId: ('id_' + order++), headerName: 'REACHABLE BIC',               field: 'reachableBic',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'BIC PARTECIPANTE DIRETTO',    field: 'bic',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
    ];
  }

  submit() {
    this.showTable = false;
    this.resetError();
    this.reachabilityModel.rowData = [];
    this.reachabilityModel.enableMessageOnSizeResultLimit = false;
    this.reachabilityModel.enableMessageEmptyResult = false;

    if (!!this.ricercaForm.valid) {
      this.showSpinner();

      const request = this.buildRequest();
      this.reachabilityService.getReachability(request).pipe(

          tap( res => {
            this.reachabilityModel.errorCustomMessage = 'Si è verificato un errore nel calcolo della raggiungibilità.';
            if (!!res &&
                res.responseList.length > 0 &&
                res.responseList[0].itemStatusCode == 200 &&
                !!res.responseList[0].circuiti &&
                res.responseList[0].circuiti.length > 0
            ){
              const bicList =  this.buildBicList(res.responseList[0].circuiti);
              this.reachabilityModel.errorCustomMessage = null;
              this.reachabilityModel.rowData = bicList;
            } else if (!!res &&
                res.responseList.length > 0 &&
                res.responseList[0].itemStatusCode !== 200) {
              this.reachabilityModel.errorCustomMessage = 'Si è verificato un errore nel calcolo della raggiungibilità: '.concat(res.responseList[0].itemErrorMessage);
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

  private buildRequest(): ReachabilityRequest {
    return <ReachabilityRequest>{
      requestList: [{
        dataRif: this.formatterUtils.dateToString(this.data.value),
        nsc: 	this.nsc.value,
        countryCode: this.countryCode.value,
        iban: this.iban.value,
        bic: this.bic.value,
        circuito: this.circuito.value
      }]
    };
  }

  buildResultRenderModel(data): ResultRenderModel {

    let okResult = null;
    let koResult = null;

    if (data.circuitoStatusCode == 200) {
      okResult = <ResultModel> {
        enabled: true
      };
    } else {
      koResult = <ResultModel> {
        enabled: true,
        message : data.circuitoErrorMessage
      };
    }

    return <ResultRenderModel> {
      okResult: okResult,
      koResult: koResult
    };
  }

  private buildBicList(circuiti: CircuitoTrRaItem[]): BicRechabilityResultInfo [] {
    const bicList: BicRechabilityResultInfo [] = [];
    circuiti.forEach( c => {
      if (c.canaliList != null && c.canaliList.length > 0) {
      c.canaliList.forEach( ca => {
      if (c.circuitoStatusCode != 200) {
        bicList.push({
          circuito: c.circuito,
          bic: this.NOT_DEFINED,
          canale: this.NOT_DEFINED,
          circuitoStatusCode: c.circuitoStatusCode,
          circuitoErrorMessage: c.circuitoErrorMessage
        });
      } else {
          bicList.push({
            circuito: c.circuito,
            bic: ca.bicPartDiretto,
            canale: ca.canale,
            circuitoStatusCode: c.circuitoStatusCode,
            circuitoErrorMessage: c.circuitoErrorMessage
          });
      }})}});
    return bicList;
  }
}
