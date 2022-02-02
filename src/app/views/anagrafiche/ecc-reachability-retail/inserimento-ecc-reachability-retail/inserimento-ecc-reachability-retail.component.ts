import {dateValidator} from "../../../../validators/date-validator";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractEccReachabilityRetailComponent} from "../abstract-ecc-reachability-retail.component";
import {catchError, tap} from "rxjs/operators";
import {SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {RoutingService} from "../../../../services/routing.service";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {ActivatedRoute, Router} from "@angular/router";
import {TipoFlagEnum, TipoOperazioneEnum} from "../../../../models/enum";
import {TaskEccReachabilityRetail} from "../../../../models/task";
import {Component, OnInit} from "@angular/core";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {of} from "rxjs";
import {eccReachabilityRetailBicValidator} from "../../../../validators/ecc-rag-ret-bic-validator";


@Component({
  selector: 'app-inserimento-ecc-reachability-retail',
  templateUrl: './inserimento-ecc-reachability-retail.component.html',
  styleUrls: ['./inserimento-ecc-reachability-retail.component.scss']
})
export class InserimentoEccReachabilityRetailComponent extends AbstractEccReachabilityRetailComponent implements OnInit {

  inserimentoForm: FormGroup;

  constructor(
      router: Router,
      protected eccReachabilityRetailService: EccReachabilityRetailService,
      protected securityService: SecurityService,
      protected userService: UserService,
      private filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      private formBuilder: FormBuilder,
      private taskService: TaskService,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const insertEccSessionObj = this.getSession(this.routingService.ECC_RAGG_RET_INSERT);
      if (!!insertEccSessionObj) {
        this.backUrl = this.routingService.getRouteByKey(insertEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
    super.ngOnInit();
    this.buildForm();
  }

  private buildForm() {
    this.inserimentoForm = this.formBuilder.group({
      bicInput:  new FormControl(null,   [Validators.required]),
      canale: new FormControl(null,   [Validators.required]),
      raggiungibile: new FormControl(null, [Validators.required]   ),
      //bicOutput: new FormControl(null,    [this.bicValidator.bind(this)]),
      bicDiretto: new FormControl(null,    [this.bicValidator.bind(this)]),
      descrizione: new FormControl(null,   []),
      dataInizioValidita: new FormControl(null, [Validators.required]),
      dataFineValidita: new FormControl(null, [])
    }, {validator: Validators.compose(          [
            dateValidator( [{field1: 'dataInizioValidita', required1: true,  field2: 'dataFineValidita', required2: true}]),
            eccReachabilityRetailBicValidator()]
      )});

    this.raggiungibile.valueChanges.subscribe(
        () => {
          this.manageRaggiungibile();
        }
    );
  }

  private manageRaggiungibile(){
    //this.bicOutput.updateValueAndValidity();
    this.bicDiretto.updateValueAndValidity();
  }

  get bicInput() { return this.inserimentoForm.get('bicInput'); }
  get canale() { return this.inserimentoForm.get('canale'); }
  get raggiungibile() { return this.inserimentoForm.get('raggiungibile'); }
  //get bicOutput() { return this.inserimentoForm.get('bicOutput'); }
  get bicDiretto() { return this.inserimentoForm.get('bicDiretto'); }
  get descrizione() { return this.inserimentoForm.get('descrizione'); }
  get dataInizioValidita() { return this.inserimentoForm.get('dataInizioValidita'); }
  get dataFineValidita() { return this.inserimentoForm.get('dataFineValidita'); }

  reset(field) {
    this.inserimentoForm.get(field).setValue(undefined);
  }

  saveEccReachabilityRetail() {
    this.resetError();
    this.isResultOk = false;

    if (this.inserimentoForm.valid) {
      this.showSpinner();
      const taskEccReachabilityRetail = this.buildTaskEccReachabilityRetail();
      this.taskService.saveTaskEccReachabilityRetail(taskEccReachabilityRetail).pipe(
          tap( res => {
            const d = new Date(res.validTo);
            this.inserimentoForm.get('dataFineValidita').setValue({year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate()});
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - saveEccReachabilityRetail', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private buildTaskEccReachabilityRetail (): TaskEccReachabilityRetail {

    return <TaskEccReachabilityRetail> {
      operazione: {
        codice: TipoOperazioneEnum.INS
      },

      bicInput: this.bicInput.value,
      canale: {
        codice: this.canale.value
      },
      raggiungibile: (!!this.raggiungibile.value ? ((this.raggiungibile.value == TipoFlagEnum.SI) ? true : false) : null),
      //bicOutput: this.bicOutput.value,
      bicDiretto: this.bicDiretto.value,
      descrizione: this.descrizione.value,
      validFrom: this.formatterUtils.dateToString(this.dataInizioValidita.value),
      validTo: this.formatterUtils.dateToString((!!this.dataFineValidita.value ? this.dataFineValidita.value : {year: 9999, month: 12, day: 31}))
    };
  }

  resetForm() {
    this.readonlyForm = false;
    this.isResultOk = false;
    this.buildForm();
  }

  getCanaleValue(): string {
    return this.canaliList.find( t => t.codice == this.canale.value).descrizione;
  }

  getRaggiungibileValue(): string {
    const val = ((this.raggiungibile.value == TipoFlagEnum.SI) ? TipoFlagEnum.SI : TipoFlagEnum.NO);
    return this.raggiungibileList.find( t => t.codice ==  val).descrizione;
  }

  getDataInizioValiditaValue() {
    return this.formatterUtils.dateToString(this.dataInizioValidita.value);
  }

  getDataFineValiditaValue() {
    return this.formatterUtils.dateToString(this.dataFineValidita.value);
  }

}

