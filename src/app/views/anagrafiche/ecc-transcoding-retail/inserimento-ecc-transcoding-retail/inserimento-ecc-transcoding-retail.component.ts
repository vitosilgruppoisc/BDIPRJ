import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SecurityService, UserService} from "../../../../services";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {TaskService} from "../../../../services/task.service";
import {RoutingService} from "../../../../services/routing.service";
import {dateValidator} from "../../../../validators/date-validator";
import {eccTranscodingIngrossoVersoValidator} from "../../../../validators/ecc-trans-ingr-cab-validator";
import {TipoOperazioneEnum} from "../../../../models/enum";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {AbstractEccTranscodingRetailComponent} from "../abstract-ecc-transcoding-retail.component";
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";
import {TaskEccTranscodingRetail} from "../../../../models/task";
import {eccTranscodingRetailNscValidator} from "../../../../validators/ecc-trans-ret-nsc-validator";

@Component({
  selector: 'app-inserimento-ecc-transcoding-retail',
  templateUrl: './inserimento-ecc-transcoding-retail.component.html',
  styleUrls: ['./inserimento-ecc-transcoding-retail.component.scss']
})
export class InserimentoEccTranscodingRetailComponent extends AbstractEccTranscodingRetailComponent implements OnInit {

  inserimentoForm: FormGroup;

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
      protected route: ActivatedRoute
  ) {
    super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const insertEccSessionObj = this.getSession(this.routingService.ECC_TRANS_RET_INSERT);
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
      nsc:  new FormControl(null,   [Validators.required]),
      countryCode: new FormControl(null,   [Validators.required]),
      bic: new FormControl(null,    [Validators.required, this.bicValidator.bind(this)]),
      descrizione: new FormControl(null,   []),
      dataInizioValidita: new FormControl(null, [Validators.required]),
      dataFineValidita: new FormControl(null, [])
    }, {validator: Validators.compose(          [
            dateValidator( [{field1: 'dataInizioValidita', required1: true,  field2: 'dataFineValidita', required2: true}]),
            eccTranscodingRetailNscValidator()
          ]
      )});

    this.countryCode.valueChanges.subscribe(
        () => {
          this.manageCountryCode();
        }
    );
  }

  private manageCountryCode() {
    this.nsc.updateValueAndValidity();
  }

  get nsc() { return this.inserimentoForm.get('nsc'); }
  get countryCode() { return this.inserimentoForm.get('countryCode'); }
  get bic() { return this.inserimentoForm.get('bic'); }
  get descrizione() { return this.inserimentoForm.get('descrizione'); }
  get dataInizioValidita() { return this.inserimentoForm.get('dataInizioValidita'); }
  get dataFineValidita() { return this.inserimentoForm.get('dataFineValidita'); }

  reset(field) {
    this.inserimentoForm.get(field).setValue(undefined);
  }

  saveEccTranscodingRetail() {
    this.resetError();
    this.isResultOk = false;

    if (this.inserimentoForm.valid) {
      this.showSpinner();
      const taskEccTranscodingRetail = this.buildTaskEccTranscodingRetail();
      this.taskService.saveTaskEccTranscodingRetail(taskEccTranscodingRetail).pipe(
          tap( res => {
            const d = new Date(res.validTo);
            this.inserimentoForm.get('dataFineValidita').setValue({year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate()});
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - saveEccTranscodingRetail', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private buildTaskEccTranscodingRetail (): TaskEccTranscodingRetail {

    return <TaskEccTranscodingRetail> {
      operazione: {
        codice: TipoOperazioneEnum.INS
      },

      nsc: this.nsc.value,
      countryCode: {
        codice: this.countryCode.value
      },
      bic: this.bic.value,
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

  getCountryCodeValue(): string {
    return this.countryCodeList.find( t => t.codice == this.countryCode.value).descrizione;
  }

  getDataInizioValiditaValue() {
    return this.formatterUtils.dateToString(this.dataInizioValidita.value);
  }

  getDataFineValiditaValue() {
    return this.formatterUtils.dateToString(this.dataFineValidita.value);
  }

}

