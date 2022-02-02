import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MonitoraggioDTO } from '../../../models/monitoraggio';
import { ProceduraUtente } from '../../../models/procedure-utente';
import { MonitoraggioService } from '../../../services/core/monitoraggio.service';
import { ProcedureService } from '../../../services/procedure.service';
import { TaskService } from '../../../services/core/task.service';
import { ChartData, LegendType } from '../../../common/pie-chart/chartData';
import { query } from '@angular/animations';

@Component({
  selector: 'app-chart',
  templateUrl: './monitoraggio.component.html',
  styleUrls: ['./monitoraggio.component.scss']
})
export class MonitoraggioComponent implements OnInit {
  // maps the local data column to fields property
  public localFields: Object = { text: 'nomeLogico', value: 'idProceduraUtente' };
  // set the placeholder to MultiSelect Dropdown input element
  public localWaterMark: string = 'Select PU';
   
    
  readonly loadingData: MonitoraggioDTO = { tipologia: "Caricamento...", totale: "Caricamento...", items: [] }
  readonly errorData: MonitoraggioDTO = { tipologia: "Si è verificato un errore!", totale: "Riprova più tardi", items: [] }

  private procedureData: ProceduraUtente[] = []

  private entrataData: MonitoraggioDTO = this.loadingData
  private uscitaData: MonitoraggioDTO = this.loadingData
  private taskData: MonitoraggioDTO = this.loadingData

  private graphLegendType: LegendType = LegendType.CLICK

  showCard: boolean = false;
  formValidate:FormGroup;
  trasfertaData: any;
  svt: any;
  classes: any;
  submitted: boolean;
  tipoFlusso: string ='ricevuta';

  ///
  itemList = [];
    selectedItems = [];
    settings = {};
  ////
  constructor(
    private monitoraggioService: MonitoraggioService,
    private procedureService: ProcedureService,
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  

    this.procedureService.getProcedureUtente().pipe(
	tap(result => {
	  console.log("result pu: " + result);
      this.procedureData = result;
	})).  subscribe(
	result=>{
	  console.log("result pu: " + result);
      this.procedureData = result;
      for (let i = 0; i < this.procedureData.length; i++) {
        this.itemList.push({"id" : this.procedureData[i].idProceduraUtente , "itemName" :  this.procedureData[i].nomeLogico });
        this.selectedItems.push({"id" : this.procedureData[i].idProceduraUtente , "itemName" :  this.procedureData[i].nomeLogico});

      }

    });
    this.buildForm();


//    this.itemList = [
//     { "id": 1, "itemName": "CONTI LORO" },
//     { "id": 2, "itemName": "POLIS" },
//     { "id": 3, "itemName": "SIPROS" },
// ];

//     this.selectedItems = [
//   { "id": 1, "itemName": "CONTI LORO" },
//   { "id": 2, "itemName": "POLIS" },
//   { "id": 3, "itemName": "SIPROS" },
//   ];

this.settings = {
  text: "Select PU",
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  classes: "myclass custom-class"
};
    
  }
  private buildForm() {
    this.formValidate = this.formBuilder.group({
      dataEsecuzione: [null,Validators.required],
      proceduraUtente: [null,Validators.required]
    });
  }

  private doSearch() {

    console.log(this.formValidate.valid)

    this.entrataData = this.loadingData
    this.uscitaData = this.loadingData
    this.taskData = this.loadingData

    this.showCard =true;

    console.log("Eseguo ricerca coi seguenti dati:")
    let dataEsecuzione = this.formValidate.get("dataEsecuzione").value;
    let proceduraUtente = this.formValidate.get("proceduraUtente").value;
    console.log(dataEsecuzione)
    console.log(proceduraUtente)
    let entrataObservable = this.monitoraggioService.getMonitoraggioPagamentiEntrata(dataEsecuzione, proceduraUtente, true)
    let uscitaObservable = this.monitoraggioService.getMonitoraggioPagamentiUscita(dataEsecuzione, proceduraUtente, true)
    let taskObservable = this.taskService.getMonitoraggioTaskDaEseguire("TODO change this string to the correct one") //TODO change this string to the correct one

    forkJoin([entrataObservable, uscitaObservable, taskObservable]).subscribe(result => {
      console.log("Ricevuti dati di entrate e uscite")
      console.log(result)
      this.entrataData = result[0] ? result[0] : this.errorData
      this.uscitaData = result[1] ? result[1] : this.errorData
      this.taskData = result[2] ? result[2] : this.errorData
    })
  }

   setUTCTimeZone(date: Date): Date {
      return new Date(
      Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds()
        )
      );
    }

onSubmit() {

  this.submitted = true;
  console.log(this.formValidate.value.name);
  // stop here if form is invalid
  if (this.formValidate.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formValidate.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.formValidate.reset();
}

navigateToSearch(destination: ChartData[], graphType:string){
  console.log("Navigating to: ")
  console.log(destination[0].name)
  console.log(destination)
  console.log(graphType)

  if (destination.length != 1){
    console.log("Unvalid destionation passed!")
    return
  }
  this.tipoFlusso= 'ricevuta'
  if (graphType.toLowerCase().indexOf('uscita')!=-1){
    console.log("Stato uscita trovato!")
    this.tipoFlusso = 'inviata';
  }
  
  this.router.navigateByUrl(`core/ricerca?dataEsecuzione=${
    this.formValidate.get("dataEsecuzione").value
  }&tipoOperazione=${
    destination[0].name
  }&tipoFlusso=${this.tipoFlusso}
  }&stato=${destination[0].name}`
  )

}

onItemSelect(item: any) {
  console.log(item);
  console.log(this.selectedItems);
}
OnItemDeSelect(item: any) {
  console.log(item);
  console.log(this.selectedItems);
}
onSelectAll(items: any) {
  console.log(items);
}
onDeSelectAll(items: any) {
  console.log(items);
}
}
