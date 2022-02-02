import { get} from 'lodash';
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskEccTranscodingIngrosso, TaskEccTranscodingRetail} from "../../../../models/task";
import {TipoOperazioneEnum, TipoVersoEnum} from "../../../../models/enum";
import {Component, OnInit} from "@angular/core";
import {AbstractEccTranscodingRetailComponent} from "../abstract-ecc-transcoding-retail.component";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {SecurityService, UserService} from "../../../../services";
import {of} from "rxjs";
import {dateValidator} from "../../../../validators/date-validator";
import {TaskService} from "../../../../services/task.service";
import {eccTranscodingRetailNscValidator} from "../../../../validators/ecc-trans-ret-nsc-validator";
import {RoutingService} from "../../../../services/routing.service";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {EccTranscondingRetail} from "../../../../models/ecc-transcoding-retail";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {IDatepickerModel} from "scam-bdi-uikit/lib/daterangepicker/interfaces";
import {Utils} from "../../../../utilities/util";

@Component({
  selector: 'app-modifica-ecc-transcoding-retail',
  templateUrl: './modifica-ecc-transcoding-retail.component.html',
  styleUrls: ['./modifica-ecc-transcoding-retail.component.scss']
})
export class ModificaEccTranscodingRetailComponent extends AbstractEccTranscodingRetailComponent implements OnInit {

  modificaForm: FormGroup;
  eccTransRet: EccTranscondingRetail;

  constructor(
      router: Router,
      protected eccTranscodingRetailService: EccTranscodingRetailService,
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
    super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
    this.utils = utils;
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.queryParams.subscribe(params => {
      const modifyEccSessionObj = this.getSession(this.routingService.ECC_TRANS_RET_MODIFY);
      if (!!modifyEccSessionObj) {
        this.load(modifyEccSessionObj.idEccTransRet);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private load (idEcc: string) {
    this.showSpinner();
    this.eccTranscodingRetailService.getEccezioneTranscodingRetail(idEcc).pipe(
        tap( res => {
          this.eccTransRet = res;
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
    const validFrom = new Date(this.eccTransRet.validFrom);
    const validTo = new Date(this.eccTransRet.validTo);
    this.modificaForm = this.formBuilder.group({
      nsc:  new FormControl(this.eccTransRet.nsc,   [Validators.required]),
      countryCode: new FormControl(this.eccTransRet.countryCode.codice,   [Validators.required]),
      bic: new FormControl(this.eccTransRet.bic,    [Validators.required, this.bicValidator.bind(this)]),
      descrizione: new FormControl(this.eccTransRet.descrizione,   []),
      validFrom: new FormControl({year: validFrom.getFullYear(), month: (validFrom.getUTCMonth() + 1), day: validFrom.getUTCDate()}, [Validators.required]),
      validTo: new FormControl({year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate()}, []),
      checkednsc:  new FormControl(false,   []),
      checkedcountryCode:  new FormControl(false,   []),
      checkedbic:  new FormControl(false,   []),
      checkeddescrizione:  new FormControl(false,   []),
      checkedvalidFrom:  new FormControl(false,   []),
      checkedvalidTo:  new FormControl(false,   [])
    }, {validator: Validators.compose(          [
            dateValidator( [{field1: 'validFrom', required1: true,  field2: 'validTo', required2: true}])
          ]
      )});
  }

  get nsc() { return this.modificaForm.get('nsc'); }
  get countryCode() { return this.modificaForm.get('countryCode'); }
  get bic() { return this.modificaForm.get('bic'); }
  get descrizione() { return this.modificaForm.get('descrizione'); }
  get validFrom() { return this.modificaForm.get('validFrom'); }
  get validTo() { return this.modificaForm.get('validTo'); }
  get checkednsc() { return this.modificaForm.get('checkednsc'); }
  get checkedcountryCode() { return this.modificaForm.get('checkedcountryCode'); }
  get checkedbic() { return this.modificaForm.get('checkedbic'); }
  get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
  get checkedvalidFrom() { return this.modificaForm.get('checkedvalidFrom'); }
  get checkedvalidTo() { return this.modificaForm.get('checkedvalidTo'); }

  reset(field) {
    this.modificaForm.get(field).setValue(undefined);
  }

  manageCheckBox(field: string, type?: string) {
    if (this.modificaForm.get('checked'.concat(field)).value) {
      let val = get(this.eccTransRet, field);
      if (!!type && type == 'date') {
        val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
      }
      this.modificaForm.get(field).setValue(val);
    } else {
      //this.modificaForm.get(field).setValue(null);
    }
  }

  public modifyEccTranscodingRetail() {
    this.resetError();
    this.isResultOk = false;

    if (this.modificaForm.valid) {
      this.showSpinner();
      const taskEccTranscodingReatilReq = this.buildTaskEccTranscodingRetail();
      this.taskService.saveTaskEccTranscodingRetail(taskEccTranscodingReatilReq).pipe(
          tap( res => {
            if (!!res) {
              this.eccTransRet.validFrom = res.validFrom;
              this.eccTransRet.countryCode = res.countryCode;
            }

            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - modifyEccTranscodingRetail', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private  buildTaskEccTranscodingRetail (): TaskEccTranscodingRetail {
    return <TaskEccTranscodingRetail> {
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

      nsc: this.nsc.value,
      countryCode: {
        codice: this.countryCode.value,
      },
      bic: this.bic.value,
      descrizione: this.descrizione.value,
      validFrom: this.formatterUtils.dateToString(this.validFrom.value),
      validTo: this.formatterUtils.dateToString(this.validTo.value),
      tsModifica: null,
      utenteRichiesta: null,
      utenteValidazione: null,

      nscToEdit: this.checkednsc.value,
      countryCodeToEdit: this.checkedcountryCode.value,
      bicToEdit: this.checkedbic.value,
      descrizioneToEdit: this.checkeddescrizione.value,
      validFromToEdit: this.checkedvalidFrom.value,
      validToToEdit: this.checkedvalidTo.value,
      tsModificaToEdit: false,
      utenteRichiestaToEdit: true,
      utenteValidazioneToEdit: false,

      idEccOrig: this.eccTransRet.id,
      nscOrig: null,
      countryCodeOrig: null,
      bicOrig: null,
      descrizioneOrig: null,
      validFromOrig: null,
      validToOrig: null,
      tsModificaOrig: null,
      utenteRichiestaOrig: null,
      utenteValidazioneOrig: null
    };
  }

  getCountryCodeValue(): string {
    return this.countryCodeList.find( t => t.codice == this.countryCode.value).descrizione;
  }

  getvalidFromValue() {
    return this.formatterUtils.dateToString(this.validFrom.value);
  }

  getvalidToValue() {
    return this.formatterUtils.dateToString(this.validTo.value);
  }
}

