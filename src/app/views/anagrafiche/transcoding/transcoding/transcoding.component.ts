import { Component, OnInit } from '@angular/core';
import {CountryCode} from "../../../../models/ecc-transcoding-retail";
import {SecurityService, UserService} from "../../../../services";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {RoutingService} from "../../../../services/routing.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {TranscodingService} from "../../../../services/transcoding.service";
import {GenericComboItemModel} from "../../../../models/combo";
import {TipologiaRichiestaTrRaEnum, TipoTaskEnum} from "../../../../models/enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {dateValidator} from "../../../../validators/date-validator";
import {GenericTableModel} from "../../../../models/generic-table-model";
import {transcodingReachabilityTipologiaValidator} from "../../../../validators/trans-ragg-tipologia-validator";
import {of} from "rxjs";
import {AbstractAnagraficheComponent} from "../../abstract-anagrafiche.component";
import {
  BicTranscodingResultInfo,
  CircuitoTrRaItem,
  TranscodingRequest,
  TrascodingInfo
} from "../../../../models/transc-ragg-model";
import {InfoPanelModel} from "../../../../models/info-panel-model";
import {GenericResultRenderComponent} from "../../generic-result-render/generic-result-render.component";
import {ResultModel, ResultRenderModel} from "../../../../models/result-render-model";

@Component({
  selector: 'app-transcoding',
  templateUrl: './transcoding.component.html',
  styleUrls: ['./transcoding.component.scss']
})
export class TranscodingComponent extends  AbstractAnagraficheComponent implements OnInit {

  countryCodeList: CountryCode [];
  tipologiaList: GenericComboItemModel [];
  circuitiList: GenericComboItemModel [];
  transcodingModel: GenericTableModel;
  infoPanelModel: InfoPanelModel;
  showTable = false;
  ricercaForm: FormGroup;

  nscCCReadonly = true;
  ibanReadonly = true;

  constructor( private transcodingService: TranscodingService,
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
    this.transcodingService.getCountryCodes().pipe(
        tap( res => this.countryCodeList = res)
    ).subscribe();

    this.transcodingService.getCircuiti().pipe(
        tap( res => this.circuitiList = res)
    ).subscribe();

    this.transcodingService.getTipologia(false).pipe(
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

    if (this.tipologia.value == TipologiaRichiestaTrRaEnum.NSC_CC) {
      this.reset('iban');
      this.nscCCReadonly = false;
    }

    if (this.tipologia.value == TipologiaRichiestaTrRaEnum.IBAN) {
      this.reset('nsc');
      this.reset('countryCode');
      this.ibanReadonly = false;
    }

    this.nsc.updateValueAndValidity();
    this.countryCode.updateValueAndValidity();
    this.iban.updateValueAndValidity();
  }

  get tipologia() { return this.ricercaForm.get('tipologia'); }
  get data() { return this.ricercaForm.get('data'); }
  get nsc() { return this.ricercaForm.get('nsc'); }
  get countryCode() { return this.ricercaForm.get('countryCode'); }
  get iban() { return this.ricercaForm.get('iban'); }
  get circuito() { return this.ricercaForm.get('circuito'); }

  reset( field) {
    this.ricercaForm.get(field).setValue(null);
  }

  buildModel() {
    this.transcodingModel = {
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
    this.transcodingModel.gridOptions.api.sizeColumnsToFit();
    this.transcodingModel.gridOptions.onGridSizeChanged = evt =>  this.transcodingModel.gridOptions.api ?  this.transcodingModel.gridOptions.api.sizeColumnsToFit() : null;
  }

  protected buildColumnDef() {
    let order = 0;
    return  [
      {colId: ('id_' + order++), headerName: '',     field: '',              resizable: true, cellRendererFramework: GenericResultRenderComponent, cellRendererParams: {modelFn: this.buildResultRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'left', minWidth: 30, maxWidth: 50},
      {colId: ('id_' + order++), headerName: 'CIRCUITO',      field: 'circuito',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'BIC',           field: 'bic',           filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
      {colId: ('id_' + order++), headerName: 'TIPO',          field: 'tipo',          filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
    ];
  }

  submit() {
    this.showTable = false;
    this.resetError();
    this.transcodingModel.rowData = [];
    this.transcodingModel.enableMessageOnSizeResultLimit = false;
    this.transcodingModel.enableMessageEmptyResult = false;
    this.infoPanelModel = null;

    if (!!this.ricercaForm.valid) {
      this.showSpinner();

      const request = this.buildRequest();
      this.transcodingService.getTranscoding(request).pipe(

          tap( res => {
            this.transcodingModel.errorCustomMessage = 'Si è verificato un errore nel calcolo della transcodifica.';
            if (!!res &&
                res.responseList.length > 0 &&
                res.responseList[0].itemStatusCode == 200 &&
                !!res.responseList[0].circuiti &&
                res.responseList[0].circuiti.length > 0
            ) {
              const bicList =  this.buildBicList(res.responseList[0].circuiti);
              this.transcodingModel.errorCustomMessage = null;
              this.transcodingModel.rowData = bicList;

              if (this.tipologia.value == TipologiaRichiestaTrRaEnum.IBAN) {
                const circuitoTrInfo = res.responseList[0].circuiti.filter(c => !!c.trInfo)[0];
                this.buildNscCcSection((!!circuitoTrInfo ? circuitoTrInfo.trInfo : null));
              }
            } else if (!!res &&
                res.responseList.length > 0 &&
                res.responseList[0].itemStatusCode !== 200) {
              this.transcodingModel.errorCustomMessage = 'Si è verificato un errore nel calcolo della transcodifica: '.concat(res.responseList[0].itemErrorMessage);
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


  private buildRequest(): TranscodingRequest {
    return <TranscodingRequest>{
      requestList: [{
        dataRif: this.formatterUtils.dateToString(this.data.value),
        nsc: 	this.nsc.value,
        countryCode: this.countryCode.value,
        iban: this.iban.value,
        circuito: this.circuito.value
      }]
    };
  }

  private buildBicList(circuiti: CircuitoTrRaItem[]): BicTranscodingResultInfo[] {
    const bicList: BicTranscodingResultInfo [] = [];
    circuiti.forEach( c => {
      if (c.circuitoStatusCode != 200) {
        bicList.push({
          circuito: c.circuito,
          bic: this.NOT_DEFINED,
          tipo: this.NOT_DEFINED,
          circuitoStatusCode: c.circuitoStatusCode,
          circuitoErrorMessage: c.circuitoErrorMessage
        });
      } else {
        c.trInfo.trBicList.forEach( b => {
          bicList.push({
            circuito: c.circuito,
            bic: b.bic,
            tipo: b.tipo,
            circuitoStatusCode: c.circuitoStatusCode,
            circuitoErrorMessage: c.circuitoErrorMessage
          });
        });
      }});
    return bicList;
  }

  private buildNscCcSection(trInfo: TrascodingInfo) {
    if (!!trInfo && !!trInfo.nsc && !!trInfo.countryCode){
      const data = [
        [this.buildInfoPanelElement('Nsc', 'string',  trInfo, 'nsc'), this.buildInfoPanelElement('Country Code', 'string', trInfo , 'countryCode')]
      ];

      this.infoPanelModel = <InfoPanelModel> {
        columnNumber: 2,
        data: data
      };
    }
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
}
