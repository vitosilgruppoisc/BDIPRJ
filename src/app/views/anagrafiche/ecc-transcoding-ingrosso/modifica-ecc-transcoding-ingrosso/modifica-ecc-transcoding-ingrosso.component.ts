import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IDatepickerModel} from "scam-bdi-uikit/lib/daterangepicker/interfaces";
import {Party, TipoParty} from "../../../../models/party";
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
import {AbstractEccTranscodingIngrossoComponent} from "../abstract-ecc-transcoding-ingrosso.component";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {TaskEccTranscodingIngrosso, TaskParty} from "../../../../models/task";
import {EccTranscondingIngrosso} from "../../../../models/ecc-transcoding-ingrosso";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {dateValidator} from "../../../../validators/date-validator";
import {eccTranscodingIngrossoVersoValidator} from "../../../../validators/ecc-trans-ingr-cab-validator";
import {TipoContoEccTranscodingIngrossoEnum, TipoOperazioneEnum, TipoVersoEnum} from "../../../../models/enum";
import { get} from 'lodash';
import {FilialeRiferimento} from "../../../../models/filiale";
import {Utils} from "../../../../utilities/util";

@Component({
  selector: 'app-modifica-ecc-transcoding-ingrosso',
  templateUrl: './modifica-ecc-transcoding-ingrosso.component.html',
  styleUrls: ['./modifica-ecc-transcoding-ingrosso.component.scss']
})
export class ModificaEccTranscodingIngrossoComponent extends AbstractEccTranscodingIngrossoComponent implements OnInit {

  modificaForm: FormGroup;
  minDate: IDatepickerModel;
  eccTransIngr: EccTranscondingIngrosso;
  tipoVersoEnum = TipoVersoEnum;

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
      protected route: ActivatedRoute,
      private utils: Utils,
  ) {
    super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
    this.utils = utils;
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.queryParams.subscribe(params => {
      const modifyEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_MODIFY);
      if (!!modifyEccSessionObj) {
        this.load(modifyEccSessionObj.idEccTransIng);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private load (idEcc: string) {
    this.showSpinner();
    this.eccTranscodingIngrossoService.getEccezioneTranscodingIngrosso(idEcc).pipe(
        tap( res => {
          this.eccTransIngr = res;
          this.isActive = this.isEccTranscodingIngrossoActive(this.eccTransIngr);
          if (!this.isActive) {
            this.readonlyForm = true;
          }
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
    const validFrom = new Date(this.eccTransIngr.validFrom);
    const validTo = new Date(this.eccTransIngr.validTo);
    this.minDate =  {day: validFrom.getUTCDate(), month: (validFrom.getUTCMonth() + 1), year: validFrom.getFullYear()};
    this.modificaForm = this.formBuilder.group({
      abi:  new FormControl(this.eccTransIngr.abi,   [Validators.required]),
      cab: new FormControl(this.eccTransIngr.cab,   [Validators.required]),
      tipoConto: new FormControl(this.eccTransIngr.tipoConto,   [Validators.required]),
      bicConto: new FormControl(this.eccTransIngr.bicConto,    [Validators.required, this.bicValidator.bind(this)]),
      verso: new FormControl(this.eccTransIngr.verso,   [Validators.required]),
      descrizione: new FormControl(this.eccTransIngr.descrizione,   []),
      dataInizioValidita: new FormControl({year: validFrom.getFullYear(), month: (validFrom.getUTCMonth() + 1), day: validFrom.getUTCDate()}, [Validators.required]),
      dataFineValidita: new FormControl({year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate()}, []),
      checkedabi:  new FormControl(false,   []),
      checkedcab:  new FormControl(false,   []),
      checkedtipoConto:  new FormControl(false,   []),
      checkedbicConto:  new FormControl(false,   []),
      checkedverso:  new FormControl(false,   []),
      checkeddescrizione:  new FormControl(false,   []),
      checkeddataInizioValidita:  new FormControl(false,   []),
      checkeddataFineValidita:  new FormControl(false,   [])
    }, {validator: Validators.compose(          [
            dateValidator( [{field1: 'dataInizioValidita', minDate1: this.minDate}]),
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

  private manageVerso() {
    this.cab.updateValueAndValidity();
  }

  get abi() { return this.modificaForm.get('abi'); }
  get cab() { return this.modificaForm.get('cab'); }
  get bicConto() { return this.modificaForm.get('bicConto'); }
  get tipoConto() { return this.modificaForm.get('tipoConto'); }
  get verso() { return this.modificaForm.get('verso'); }
  get descrizione() { return this.modificaForm.get('descrizione'); }
  get dataInizioValidita() { return this.modificaForm.get('dataInizioValidita'); }
  get dataFineValidita() { return this.modificaForm.get('dataFineValidita'); }
  get checkedabi() { return this.modificaForm.get('checkedabi'); }
  get checkedcab() { return this.modificaForm.get('checkedcab'); }
  get checkedbicConto() { return this.modificaForm.get('checkedbicConto'); }
  get checkedtipoConto() { return this.modificaForm.get('checkedtipoConto'); }
  get checkedverso() { return this.modificaForm.get('checkedverso'); }
  get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
  get checkeddataInizioValidita() { return this.modificaForm.get('checkeddataInizioValidita'); }
  get checkeddataFineValidita() { return this.modificaForm.get('checkeddataFineValidita'); }

  reset(field) {
    this.modificaForm.get(field).setValue(undefined);
  }

  manageCheckBox(field: string, type?: string) {
    if (this.modificaForm.get('checked'.concat(field)).value) {
      let val = get(this.eccTransIngr, field);
      if (!!type && type == 'date') {
        val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
      }
      this.modificaForm.get(field).setValue(val);
    } else {
      //this.modificaForm.get(field).setValue(null);
    }
  }

  public modifyEccTranscodingIngrosso() {
    this.resetError();
    this.isResultOk = false;

    if (this.modificaForm.valid) {
      this.showSpinner();
      const taskEccTranscodingIngrossoReq = this.buildTaskEccTranscodingIngrosso();
      this.taskService.saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrossoReq).pipe(
          tap( res => {
            if (!!res) {
              this.eccTransIngr.validFrom = res.validFrom;
              this.eccTransIngr.verso = res.verso;
              this.eccTransIngr.tipoConto = res.tipoConto;
            }

            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - modifyEccTranscodingIngrosso', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private  buildTaskEccTranscodingIngrosso (): TaskEccTranscodingIngrosso {
    return <TaskEccTranscodingIngrosso> {
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

      abi: this.abi.value,
      cab: this.cab.value,
      bicConto: this.bicConto.value,
      tipoConto: this.tipoConto.value,
      verso: this.verso.value,
      descrizione: this.descrizione.value,
      validFrom: (!!this.dataInizioValidita.value ? this.formatterUtils.dateToString(this.dataInizioValidita.value) : null),
      validTo: null,
      tsModifica: null,
      utenteRichiesta: null,
      utenteValidazione: null,

      abiToEdit: this.checkedabi.value,
      cabToEdit: this.checkedcab.value,
      bicContoToEdit: this.checkedbicConto.value,
      tipoContoToEdit: this.checkedtipoConto.value,
      versoToEdit: this.checkedverso.value,
      descrizioneToEdit: this.checkeddescrizione.value,
      validFromToEdit: (!!this.dataInizioValidita.value ? true : false),
      validToToEdit: false,
      tsModificaToEdit: false,
      utenteRichiestaToEdit: true,
      utenteValidazioneToEdit: false,

      idEccOrig: this.eccTransIngr.id,
      abiOrig: null,
      cabOrig: null,
      bicOrig: null,
      tipoOrig: null,
      versoOrig: null,
      descrizioneOrig: null,
      validFromOrig: null,
      validToOrig: null,
      tsModificaOrig: null,
      utenteRichiestaOrig: null,
      utenteValidazioneOrig: null
    };
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
