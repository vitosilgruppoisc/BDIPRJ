import { get} from 'lodash';
import {EccReachabilityRetail} from "../../../../models/ecc-reachability-retail";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {eccReachabilityRetailBicValidator} from "../../../../validators/ecc-rag-ret-bic-validator";
import {TipoFlagEnum, TipoOperazioneEnum} from "../../../../models/enum";
import {Component, OnInit} from "@angular/core";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {SecurityService, UserService} from "../../../../services";
import {of} from "rxjs";
import {dateValidator} from "../../../../validators/date-validator";
import {AbstractEccReachabilityRetailComponent} from "../abstract-ecc-reachability-retail.component";
import {TaskService} from "../../../../services/task.service";
import {RoutingService} from "../../../../services/routing.service";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {TaskEccReachabilityRetail} from "../../../../models/task";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {Utils} from "../../../../utilities/util";

@Component({
  selector: 'app-modifica-ecc-reachability-retail',
  templateUrl: './modifica-ecc-reachability-retail.component.html',
  styleUrls: ['./modifica-ecc-reachability-retail.component.scss']
})
export class ModificaEccReachabilityRetailComponent extends AbstractEccReachabilityRetailComponent implements OnInit {

  modificaForm: FormGroup;
  eccRaggRet: EccReachabilityRetail;

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
      protected route: ActivatedRoute,
      private utils: Utils,
  ) {
    super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
    this.utils = utils;
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.queryParams.subscribe(params => {
      const modifyEccSessionObj = this.getSession(this.routingService.ECC_RAGG_RET_MODIFY);
      if (!!modifyEccSessionObj) {
        this.load(modifyEccSessionObj.idEccRaggRet);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private load (idEcc: string) {
    this.showSpinner();
    this.eccReachabilityRetailService.getEccezioneReachabilityRetail(idEcc).pipe(
        tap( res => {
          this.eccRaggRet = res;
          this.buildForm();
          this.hideSpinner();
        }),
        catchError((error) => {
          console.log ('Error - load', error);
          this.setError(error);
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  private buildForm() {
    const validFrom = new Date(this.eccRaggRet.validFrom);
    const validTo = new Date(this.eccRaggRet.validTo);
    this.modificaForm = this.formBuilder.group({
      bicInput:  new FormControl(this.eccRaggRet.bicInput,   [Validators.required]),
      canale: new FormControl(this.eccRaggRet.canale.codice,   [Validators.required]),
      raggiungibile: new FormControl(this.formatterUtils.getBooleanAsString(this.eccRaggRet, 'raggiungibile'),    [Validators.required]),
      //bicOutput: new FormControl(this.eccRaggRet.bicOutput,    [this.bicValidator.bind(this)]),
      bicDiretto: new FormControl(this.eccRaggRet.bicDiretto,    [this.bicValidator.bind(this)]),
      descrizione: new FormControl(this.eccRaggRet.descrizione,   []),
      validFrom: new FormControl({year: validFrom.getFullYear(), month: (validFrom.getUTCMonth() + 1), day: validFrom.getUTCDate()}, [Validators.required]),
      validTo: new FormControl({year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate()}, []),

      checkedbicInput:  new FormControl(false,   []),
      checkedcanale:  new FormControl(false,   []),
      checkedraggiungibile:  new FormControl(false,   []),
      //checkedbicOutput:  new FormControl(false,   []),
      checkedbicDiretto:  new FormControl(false,   []),
      checkeddescrizione:  new FormControl(false,   []),
      checkedvalidFrom:  new FormControl(false,   []),
      checkedvalidTo:  new FormControl(false,   [])
    }, {validator: Validators.compose(          [
        dateValidator( [{field1: 'validFrom', required1: true,  field2: 'validTo', required2: true}]),
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

  get bicInput() { return this.modificaForm.get('bicInput'); }
  get canale() { return this.modificaForm.get('canale'); }
  get raggiungibile() { return this.modificaForm.get('raggiungibile'); }
  //get bicOutput() { return this.modificaForm.get('bicOutput'); }
  get bicDiretto() { return this.modificaForm.get('bicDiretto'); }
  get descrizione() { return this.modificaForm.get('descrizione'); }
  get validFrom() { return this.modificaForm.get('validFrom'); }
  get validTo() { return this.modificaForm.get('validTo'); }
  get checkedbicInput() { return this.modificaForm.get('checkedbicInput'); }
  get checkedcanale() { return this.modificaForm.get('checkedcanale'); }
  get checkedraggiungibile() { return this.modificaForm.get('checkedraggiungibile'); }
  //get checkedbicOutput() { return this.modificaForm.get('checkedbicOutput'); }
  get checkedbicDiretto() { return this.modificaForm.get('checkedbicDiretto'); }
  get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
  get checkedvalidFrom() { return this.modificaForm.get('checkedvalidFrom'); }
  get checkedvalidTo() { return this.modificaForm.get('checkedvalidTo'); }

  reset(field) {
    this.modificaForm.get(field).setValue(undefined);
  }

  manageCheckBox(field: string, type?: string) {
    if (this.modificaForm.get('checked'.concat(field)).value) {
      let val = get(this.eccRaggRet, field);
      if (!!type && type == 'date') {
        val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
      }
      this.modificaForm.get(field).setValue(val);
    } else {
      //this.modificaForm.get(field).setValue(null);
    }
  }

  public modifyEccReachabilityRetail() {
    this.resetError();
    this.isResultOk = false;

    if (this.modificaForm.valid) {
      this.showSpinner();
      const taskEccReachabilityReatilReq = this.buildTaskEccReachabilityRetail();
      this.taskService.saveTaskEccReachabilityRetail(taskEccReachabilityReatilReq).pipe(
          tap( res => {
            if (!!res) {
              this.eccRaggRet.validFrom = res.validFrom;
              this.eccRaggRet.canale = res.canale;
            }

            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - modifyEccReachabilityRetail', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private  buildTaskEccReachabilityRetail (): TaskEccReachabilityRetail {
    return <TaskEccReachabilityRetail> {
      operazione: {
        codice: TipoOperazioneEnum.UPD
      },
      tipoTask: null,
      stato: null,
      tsInserimento: null,
      userReq: null,
      tsValidate: null,
      userValidate: null,
      noteRifiuto: null,

      bicInput: this.bicInput.value,
      canale: {
        codice: this.canale.value,
      },
      raggiungibile: (!!this.raggiungibile.value ? ((this.raggiungibile.value == TipoFlagEnum.SI) ? true : false) : null),
      //bicOutput: this.bicOutput.value,
      bicDiretto: this.bicDiretto.value,
      descrizione: this.descrizione.value,
      validFrom: this.formatterUtils.dateToString(this.validFrom.value),
      validTo: this.formatterUtils.dateToString(this.validTo.value),
      tsModifica: null,
      utenteRichiesta: null,
      utenteValidazione: null,

      bicInputToEdit: this.checkedbicInput.value,
      canaleToEdit: this.checkedcanale.value,
      raggiungibileToEdit: this.checkedraggiungibile.value,
      //bicOutputToEdit: this.checkedbicOutput.value,
      bicDirettoToEdit: this.checkedbicDiretto.value,
      descrizioneToEdit: this.checkeddescrizione.value,
      validFromToEdit: this.checkedvalidFrom.value,
      validToToEdit: this.checkedvalidTo.value,
      tsModificaToEdit: false,
      utenteRichiestaToEdit: true,
      utenteValidazioneToEdit: false,

      idEccOrig: this.eccRaggRet.id,
      bicOrig: null,
      canaleOrig: null,
      raggiungibileOrig: null,
      //bicOutputOrig: null,
      bicDirettoOrig: null,
      descrizioneOrig: null,
      validFromOrig: null,
      validToOrig: null,
      tsModificaOrig: null,
      utenteRichiestaOrig: null,
      utenteValidazioneOrig: null
    };
  }

  getCanaleValue(): string {
    return this.canaliList.find( t => t.codice == this.canale.value).descrizione;
  }

  getRaggiungibileValue(): string {
    const val = ((this.raggiungibile.value == TipoFlagEnum.SI) ? TipoFlagEnum.SI : TipoFlagEnum.NO);
    return this.raggiungibileList.find( t => t.codice == val).descrizione;
  }

  getvalidFromValue() {
    return this.formatterUtils.dateToString(this.validFrom.value);
  }

  getvalidToValue() {
    return this.formatterUtils.dateToString(this.validTo.value);
  }
}

