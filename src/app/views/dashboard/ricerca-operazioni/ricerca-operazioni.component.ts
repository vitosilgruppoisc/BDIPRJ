import { Component, OnInit } from '@angular/core';
import { RicercaOperazioni } from '../../../models/ricerca-operazioni-model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RicercaService } from '../../../services/core/ricerca.service';
import { Payment } from '../../../models/payment';
import { ActionRenderModel, ButtonModel } from '../../../models/action-render-model';
import { AppConfigService } from '../../../services/core/app-config.service';
import { forkJoin } from 'rxjs';
import { Currency } from '../../../models/currency';
import { OperationType } from '../../../models/operation-type';
import { FlowType } from '../../../models/flow-type';
import { ProcedureService } from '../../../services/procedure.service';
import { SettlementCircuit } from '../../../models/settlement-circuit';
import { ProceduraUtente } from '../../../models/procedure-utente';
import { createStandardColumnDef } from '../../../common/generic-table/utils';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Status } from '../../../models/status';
import { ComparisonType, dateValidator } from '../../../utilities/validationUtils';
import { SpinningLoaderComponent } from '../../../common/spinning-loader/spinning-loader.component';

@Component({
  selector: 'app-ricerca-operazioni',
  templateUrl: './ricerca-operazioni.component.html',
  styleUrls: ['./ricerca-operazioni.component.scss']
})
export class RicercaOperazioniComponent implements OnInit {

  private formValidate: FormGroup = new FormBuilder().group({
    dataEsecuzioneA: new FormControl(null, [Validators.required, dateValidator(ComparisonType.BEFORE, () => { return this.formValidate.get("dataEsecuzioneDa").value })]),
    dataEsecuzioneDa: new FormControl(null, [Validators.required, dateValidator(ComparisonType.AFTER, () => { return this.formValidate.get("dataEsecuzioneA").value })]),
    tipoFlusso: new FormControl(null, [Validators.required]),
    tipoOperazione: new FormControl(null, [Validators.required]),
    valuta: new FormControl(),
    stato: new FormControl(),
    proceduraUtente: new FormControl(),
    idGepa: new FormControl(),
    TRN: new FormControl(),
    UETR: new FormControl(),
    endToEndId: new FormControl(),
    BICBeneficiario: new FormControl(),
    BICOrdinante: new FormControl(),
    IBANBeneficiario: new FormControl(),
    IBANOrdinante: new FormControl(),
    circuitoRegolamento: new FormControl(),
    importoDa: new FormControl(),
    importoA: new FormControl()
  });;
  private isLoading: boolean;
  private tableData = null;
  private showTable = false
  private trasferimento: RicercaOperazioni = new RicercaOperazioni();

  private currencyData: Currency[]
  private operationData: OperationType[]
  private flowTypeData: FlowType[]
  private circuitData: SettlementCircuit[]
  private statusData: Status[]
  private procedureData: ProceduraUtente[]

  constructor(
    private ricercaService: RicercaService,
    private appConfigService: AppConfigService,
    private procedureService: ProcedureService,
    private router: Router
  ) { }

  ngOnInit() {

    this.isLoading = true;
    console.log("Inizio caricamento appConfig")
    let currencyObservable = this.appConfigService.getCurrency()
    let operationObservable = this.appConfigService.getOperationTypes()
    let flowTypeObservable = this.appConfigService.getFlowTypes()
    let circuitObservable = this.appConfigService.getSettlementCircuit()
    let procedureObservable = this.procedureService.getProcedureUtente()

    forkJoin([currencyObservable, operationObservable, flowTypeObservable, circuitObservable, procedureObservable]).subscribe(result => {
      console.log("Getting currency")
      this.currencyData = result[0]
      console.log(this.currencyData)
      console.log("Getting operations")
      this.operationData = result[1]
      console.log(this.operationData)
      console.log("Getting flow")
      this.flowTypeData = result[2]
      console.log(this.flowTypeData)
      console.log("Getting circuit")
      this.circuitData = result[3]
      console.log(this.circuitData)
      console.log("Getting procedure")
      this.procedureData = result[4]
      console.log(this.procedureData)


      console.log("Controllo query params")
      const params = this.router.routerState.snapshot.root.queryParams
      console.log(params)

      if (params.dataEsecuzione) {
        console.log("Setting dates...")
        this.formValidate.get('dataEsecuzioneA').setValue(params.dataEsecuzione);
        this.formValidate.get('dataEsecuzioneDa').setValue(params.dataEsecuzione);
      }

      if (params.tipoFlusso) {
        console.log("Finding flow")
        const tipoFlusso = this.flowTypeData.find(y => {
          return y.descrTipoFlusso.toLowerCase() == params.tipoFlusso.toLowerCase()
        })
        console.log("Found: ")
        console.log(tipoFlusso)
        if (tipoFlusso)
          this.formValidate.get('tipoFlusso').setValue(tipoFlusso);
      }

      if (params.tipoOperazione) {
        console.log("Finding operation...")
        const tipoOperazione = this.operationData.find(y => {
          return y.descrTipoOperazione.toLowerCase() == params.tipoOperazione.toLowerCase()
        })
        console.log("Found: ")
        console.log(tipoOperazione)
        this.formValidate.get('tipoOperazione').setValue(tipoOperazione)
      }


      console.log("formValidate before loading status")
      console.log(this.formValidate)



      if (this.canLoadStatus())
        this.loadStatus(x => {

          if (params.stato) {
            console.log("Finding operation...")
            const tipoOperazione = this.statusData.find(y => {
              return y.descrStato.toLowerCase() == params.stato.toLowerCase()
            })
            console.log("Found: ")
            console.log(tipoOperazione)
            this.formValidate.get('tipoOperazione').setValue(tipoOperazione)
          }


          console.log("formValidate after retrieving get data")
          console.log(this.formValidate)
          this.doSearch();
        })
      else
        this.isLoading = false


    }, catchError((err, obsv) => {
      console.log("Error during page init")
      console.log(err)
      this.isLoading = false

      return null
    }
    ))
  }

  private canLoadStatus(): boolean {
    console.log("Checking if Stato can be searched")
    const tipoFlusso = this.formValidate.get("tipoFlusso").value
    const tipoOperazione = this.formValidate.get("tipoOperazione").value
    return tipoFlusso != null && tipoOperazione != null
  }
  loadStatus(additionalOperations?: (result: Status[]) => void) {

    const tipoFlusso = this.formValidate.get("tipoFlusso").value
    const tipoOperazione = this.formValidate.get("tipoOperazione").value
    if (this.canLoadStatus()) {
      console.log("Searching Stato with following params")
      console.log(tipoFlusso)
      console.log(tipoOperazione)
      return this.appConfigService.getStates(tipoFlusso, tipoOperazione).subscribe(res => {
        console.log("Retrieving status:")
        this.statusData = res
        console.log(res)
        if (additionalOperations)
          additionalOperations(res)
      })
    }
  }

  doSearch() {
    console.log(this.formValidate);
    if (this.formValidate.valid) {
      this.ricercaService.getPagamentoByType(
        this.formValidate.get("tipoFlusso").value,
        this.formValidate.get("tipoOperazione").value,
        '', this.getSearchParams()).subscribe(result => {
          this.showTable = true
          this.buildModel(result)
        })
    } else {
      console.log("Form not valid")
    }
  }


  private getSearchParams(): { key: string, value: string } {
    return null
  }

  buildModel(rowData: Payment[]) {
    console.log("Building table model")
    console.log("rowData:")
    console.log(rowData)
    this.tableData = {
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
      rowData: rowData,
      pagination: true,
      columnsFitAvailable: true,
      columnDefs: this.buildColumnDef(),
      enableCsvExport: true,
      enablePdfExport: true,
      
      enableColumnSelection: false
    };
  }

  protected buildColumnDef() {
    let order = 0;
    return [
      createStandardColumnDef(('id_' + order++), 'Data Esecuzione', 'dataEsecuzione'),
      createStandardColumnDef(('id_' + order++), 'Procedura Utente', 'idProceduraUtente', (data) => this.procedureData.find(x => x.idProceduraUtente == data.data.idProceduraUtente).nomeLogico),
      createStandardColumnDef(('id_' + order++), 'Stato', 'idStato'),
      createStandardColumnDef(('id_' + order++), 'UETR', 'uetr'),
      createStandardColumnDef(('id_' + order++), 'Importo', 'amount'),
      createStandardColumnDef(('id_' + order++), 'Valuta', 'valuta', (data) => this.currencyData.find(x => x.idValuta.toString() == data.data.valuta.toString()).descrValuta),
      createStandardColumnDef(('id_' + order++), 'Tipo Operazione', 'idTipoOperazione', (data) => this.operationData.find(x => x.idTipoOperazione.toString() == data.data.idTipoOperazione.toString()).descrTipoOperazione),
      createStandardColumnDef(('id_' + order++), 'Circuito Regolamento', 'idCircuitoRegolamento', (data) => this.circuitData.find(x => x.idCircuitoRegolamento.toString() == data.data.idCircuitoRegolamento.toString()).descrCircuitoRegolamento),
    ];
  }


  buildActionRenderModel(): ActionRenderModel {
    const selectButton = <ButtonModel>{
      label: 'Dettaglio',
      routerLink: "ROUTERLINK", //TODO add router link
      params: "QUERYPARAMS",//TODO add queryParams
      enabled: true,
      sessionKey: "SESSIONKEY" //TODO add session key
    };



    return <ActionRenderModel>{
      detailButton: null,
      modifyButton: null,
      deleteButton: null,
      selectButton: selectButton
    };
  }

  protected initializeGrid(): void {
    this.tableData.gridOptions.onGridSizeChanged = evt => this.tableData.gridOptions.api ? this.tableData.gridOptions.api.sizeColumnsToFit() : null;
  }
}
