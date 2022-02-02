import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IDatepickerModel} from "scam-bdi-uikit/lib/daterangepicker/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PartyService} from "../../../../services/party.service";
import {FilialeService} from "../../../../services/filiale.service";
import {SecurityService, UserService} from "../../../../services";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {TaskService} from "../../../../services/task.service";
import {InfostatService} from "../../../../services/infostat.service";
import {ModalService} from "scam-bdi-uikit";
import {RoutingService} from "../../../../services/routing.service";
import {dateValidator} from "../../../../validators/date-validator";
import {AbstractEccTranscodingIngrossoComponent} from "../abstract-ecc-transcoding-ingrosso.component";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {
  TipoContoEccTranscodingIngrossoEnum,
  TipoContoEnum,
  TipoOperazioneEnum,
  TipoVersoEnum
} from "../../../../models/enum";
import {eccTranscodingIngrossoVersoValidator} from "../../../../validators/ecc-trans-ingr-cab-validator";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {TaskEccTranscodingIngrosso, TaskParty} from "../../../../models/task";

@Component({
  selector: 'app-inserimento-ecc-transcoding-ingrosso',
  templateUrl: './inserimento-ecc-transcoding-ingrosso.component.html',
  styleUrls: ['./inserimento-ecc-transcoding-ingrosso.component.scss']
})
export class InserimentoEccTranscodingIngrossoComponent extends AbstractEccTranscodingIngrossoComponent implements OnInit {

  inserimentoForm: FormGroup;
  readonlyCab = false;

  constructor(
      router: Router,
      protected eccTranscodingIngrossoService: EccTranscodingIngrossoService,
      protected securityService: SecurityService,
      protected userService: UserService,
      private filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      private formBuilder: FormBuilder,
      private taskService: TaskService,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const insertEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_INSERT);
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
      abi:  new FormControl(null,   [Validators.required]),
      cab: new FormControl(null,   [Validators.required]),
      tipoConto: new FormControl(null,   [Validators.required]),
      bicConto: new FormControl(null,    [Validators.required, this.bicValidator.bind(this)]),
      verso: new FormControl(null,   [Validators.required]),
      descrizione: new FormControl(null,   []),
      dataInizioValidita: new FormControl(null, [Validators.required]),
      dataFineValidita: new FormControl(null, [])
    }, {validator: Validators.compose(          [
            dateValidator( [{field1: 'dataInizioValidita', required1: true,  field2: 'dataFineValidita'}]),
            eccTranscodingIngrossoVersoValidator()
          ]
      )});

    this.verso.valueChanges.subscribe(
        () => {
          this.manageVerso();
        }
    );

    this.tipoConto.valueChanges.subscribe(
        () => {
          this.manageVerso();
        }
    );
  }

  private manageVerso(){
    //this.manageRuleOnCab();
    this.cab.updateValueAndValidity();
  }

  private manageRuleOnCab() {
    this.readonlyCab = false;
    if ( !!this.verso && !!this.verso.value && !!this.tipoConto && !!this.tipoConto.value) {
      if (! (this.verso.value === TipoVersoEnum.AB.valueOf() && this.tipoConto.value === TipoContoEccTranscodingIngrossoEnum.RTGS.valueOf())) {
        this.cab.setValue(0);
        this.readonlyCab = true;
      }
    }
  }

  get abi() { return this.inserimentoForm.get('abi'); }
  get cab() { return this.inserimentoForm.get('cab'); }
  get bicConto() { return this.inserimentoForm.get('bicConto'); }
  get tipoConto() { return this.inserimentoForm.get('tipoConto'); }
  get verso() { return this.inserimentoForm.get('verso'); }
  get descrizione() { return this.inserimentoForm.get('descrizione'); }
  get dataInizioValidita() { return this.inserimentoForm.get('dataInizioValidita'); }
  get dataFineValidita() { return this.inserimentoForm.get('dataFineValidita'); }

  reset(field) {
    this.inserimentoForm.get(field).setValue(undefined);
  }

  saveEccTranscodingIngrosso() {
    this.resetError();
    this.isResultOk = false;

    if (this.inserimentoForm.valid) {
      this.showSpinner();
      const taskEccTranscodingIngrosso = this.buildTaskEccTranscodingIngrosso();
      this.taskService.saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrosso).pipe(
          tap( res => {
            const d = new Date(res.validTo);
            this.inserimentoForm.get('dataFineValidita').setValue({year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate()});
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - saveEccTranscodingIngrosso', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private buildTaskEccTranscodingIngrosso (): TaskEccTranscodingIngrosso {

    return <TaskEccTranscodingIngrosso> {
      operazione: {
        codice: TipoOperazioneEnum.INS
      },

      abi: this.abi.value,
      cab: this.cab.value,
      bicConto: this.bicConto.value,
      tipoConto: this.tipoConto.value,
      verso: this.verso.value,
      descrizione: this.descrizione.value,
      validFrom: this.formatterUtils.dateToString(this.dataInizioValidita.value),
      validTo: this.formatterUtils.dateToString((!!this.dataFineValidita.value ? this.dataFineValidita.value : {year: 9999, month: 12, day: 31}))
    };
  }

  resetForm() {
    this.readonlyForm = false;
    this.isResultOk = false;
    this.readonlyCab = false;
    this.buildForm();
  }

  getTipoValue(): string {
    return this.tipiConto.find( t => t.codice == this.tipoConto.value).descrizione;
  }

  getVersoValue(): string {
    return this.tipiVerso.find( f => f.codice == this.verso.value).descrizione;
  }

  getDataInizioValiditaValue() {
    return this.formatterUtils.dateToString(this.dataInizioValidita.value);
  }

  getDataFineValiditaValue() {
    return this.formatterUtils.dateToString(this.dataFineValidita.value);
  }

}
