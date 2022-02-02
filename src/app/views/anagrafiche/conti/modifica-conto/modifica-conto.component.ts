import { Component, OnInit } from '@angular/core';
import {AbstractContiComponent} from '../abstract-conti.component';
import {Conto, TipoConto} from '../../../../models/conto';
import {GetPartiesResponse, Party, TipoParty} from '../../../../models/party';
import {Button, InfoPanelElement, InfoPanelModel} from '../../../../models/info-panel-model';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {ContoService} from '../../../../services/conto.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {Utils} from '../../../../utilities/util';
import {RoutingService} from '../../../../services/routing.service';
import {catchError, filter, mergeMap, switchMap, tap, toArray} from 'rxjs/operators';
import {of} from 'rxjs';
import {TaskConto, TaskParty} from '../../../../models/task';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import { get} from 'lodash';
import {TaskService} from '../../../../services/task.service';
import {TipoFlagEnum, TipoOperazioneEnum} from '../../../../models/enum';

@Component({
  selector: 'app-modifica-conto',
  templateUrl: './modifica-conto.component.html',
  styleUrls: ['./modifica-conto.component.scss']
})
export class ModificaContoComponent extends  AbstractContiComponent implements OnInit {

  party: Party;
  conto: Conto;
  modificaForm: FormGroup;
  minDateDA: IDatepickerModel;
  minDateVF: IDatepickerModel;
  enableModificatoriBIL: boolean = false;

  constructor(
      router: Router,
      protected partyService: PartyService,
      protected filialeService: FilialeService,
      protected contoService: ContoService,
      protected securityService: SecurityService,
      protected userService: UserService,
      private filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      private formBuilder: FormBuilder,
      private rSQLUtils: RSQLUtils,
      private utils: Utils,
      protected routingService: RoutingService,
      protected route: ActivatedRoute,
      private taskService: TaskService
  ) {
    super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
    this.utils = utils;
  }

  ngOnInit() {
    this.checkUserSpi();
    if (!this.userIsSpi) {
      this.checkUserBil();
    }
    this.route.queryParams.subscribe(params => {
      const modifyContoSessionObj = this.getSession(this.routingService.CONTO_MODIFY);
      if (!!modifyContoSessionObj) {
        this.loadSections(modifyContoSessionObj.idConto);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyContoSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private loadSections (idConto: string) {
    this.showSpinner();
    this.buildCombo();

    this.contoService.getConto(idConto).pipe(
        tap(res => this.conto = <Conto>res),
        tap( res =>  this.buildForm()),
        switchMap(res => this.partyService.getPartyByBicAndTipo(this.conto.bicParty, this.conto.tipoParty)),
        tap ( res => { this.party = res; }),
        tap( res => {
          if (!!this.party) {
            this.buildPartySection();
          }
          this.hideSpinner();
        }),
        catchError((error) => {
          console.log ('Error - loadSections', error);
          this.setError();
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  private buildPartySection() {
    if (!!this.party) {
      const dap = new Date(this.party.dataApertura);
      this.minDateDA =  {day: dap.getUTCDate(), month: (dap.getUTCMonth() + 1), year: dap.getFullYear()};
      const data = [
        [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
        [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza')],
        [this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura')],
        [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
      ];

      this.infoPanelPartyModel = <InfoPanelModel> {
        columnNumber: 2,
        data: data
      };
    }
  }

  private buildForm() {
    const da = new Date(this.conto.dataApertura);
    const dc = new Date(this.conto.dataChiusura);
    const vf = new Date(this.conto.validFrom);
    vf.setDate(vf.getDate() + 1);
    this.minDateVF =  {day: vf.getUTCDate(), month: (vf.getUTCMonth() + 1), year: vf.getFullYear()};
    this.modificaForm = this.formBuilder.group({
      bicConto:  new FormControl(this.conto.bic,   []),
      tipoConto: new FormControl(this.conto.tipoConto.codice,   []),
      targetService: new FormControl(this.conto.targetService,   [Validators.required]),
      descrizione: new FormControl(this.conto.descrizione,    [Validators.required]),
      numeroConto: new FormControl(this.conto.numeroConto,   [Validators.required]),
      abi: new FormControl(this.conto.abi,   [Validators.required]),
      mcaDefFlag: new FormControl(this.formatterUtils.getBooleanAsString(this.conto, 'mcaDefFlag'),   [this.defaultMCAValueValidator.bind(this)]),
      pressoBdi: new FormControl(this.formatterUtils.getBooleanAsString(this.conto, 'pressoBdi'),   [Validators.required]),
      flgMan: new FormControl(this.formatterUtils.getBooleanAsString(this.conto, 'flgMan'),   [Validators.required]),
      indicatoreResidenza: new FormControl(this.conto.indicatoreResidenza,   [this.bilValidator.bind(this)]),
      categoriaEconomica: new FormControl(this.conto.categoriaEconomica,   [this.bilValidator.bind(this)]),
      dataApertura: new FormControl( {year: da.getFullYear(), month: (da.getUTCMonth() + 1), day: da.getUTCDate()} , [Validators.required]),
      dataChiusura: new FormControl(  {year: dc.getFullYear(), month: (dc.getUTCMonth() + 1), day: dc.getUTCDate()} , [this.dateValueValidator.bind(this)]),
      checkedbicConto:  new FormControl(false,   []),
      checkedtipoConto: new FormControl(false,   []),
      checkedtargetService: new FormControl(false,   []),
      checkeddescrizione: new FormControl(false,   []),
      checkednumeroConto: new FormControl(false,   []),
      checkedabi: new FormControl(false,   []),
      checkedmcaDefFlag: new FormControl(false,   []),
      checkedpressoBdi: new FormControl(false,   []),
      checkedflgMan: new FormControl(false,   []),
      checkedindicatoreResidenza: new FormControl(false,   []),
      checkedcategoriaEconomica: new FormControl(false,   []),
      checkeddataApertura: new FormControl(false,   []),
      checkeddataChiusura: new FormControl(false,   []),
      dataInizioValidita: new FormControl(  null ,  [])
    });

    this.flgMan.valueChanges.subscribe(
        () => {
          this.categoriaEconomica.updateValueAndValidity();
          this.indicatoreResidenza.updateValueAndValidity();
        }
    );

    this.checkedflgMan.valueChanges.subscribe(
        () => {
          this.categoriaEconomica.updateValueAndValidity();
          this.indicatoreResidenza.updateValueAndValidity();
        }
    );

    if (!!this.userIsBil && !!this.conto.flgMan) {
      this.enableModificatoriBIL = true;
    }
  }

  bic11Validator (control: FormControl): {[s: string]: boolean } {
    const bicRegex = new RegExp('^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})$');
    if (    !!control &&
        !!control.value &&
        !bicRegex.test(control.value)
    ) {
      return {'syntax': true};
    }
    return null;
  }

  bilValidator (control: FormControl): {[s: string]: boolean } {
    if (
        !!this.modificaForm &&
        this.checkBilValidator() &&
        (!control ||
            !control.value)
    ) {
      return {'value': true};
    }
    return null;
  }

  private checkBilValidator() {
    const flg =  this.flgMan.value;
    if (!!this.userIsBil &&
        (!!this.formatterUtils.getStringAsBoolean(flg) || (typeof flg === 'boolean' && !!flg))
    ) {
      return true;
    }
    return false;

  }

  defaultMCAValueValidator (control: FormControl): {[s: string]: boolean } {
    if (  !!this.modificaForm &&
        this.checkTipoConto() &&
        !this.modificaForm.get('mcaDefFlag').value  ) {
      return {'value': true};
    }
    return null;
  }

  dateValueValidator (control: FormControl): {[s: string]: boolean } {
    if (  !!this.modificaForm &&
        !!this.modificaForm.get('dataApertura').value &&
        !!this.modificaForm.get('dataChiusura').value ) {
      const d1 = new Date(this.formatterUtils.dateToString(this.modificaForm.get('dataApertura').value));
      const d2 = new Date(this.formatterUtils.dateToString(this.modificaForm.get('dataChiusura').value));
      if ( d1 > d2 ) {
        return {'value': true};
      }
    }
    return null;
  }

  get bicConto() { return this.modificaForm.get('bicConto'); }
  get tipoConto() { return this.modificaForm.get('tipoConto'); }
  get targetService() { return this.modificaForm.get('targetService'); }
  get descrizione() { return this.modificaForm.get('descrizione'); }
  get numeroConto() { return this.modificaForm.get('numeroConto'); }
  get abi() { return this.modificaForm.get('abi'); }
  get mcaDefFlag() { return this.modificaForm.get('mcaDefFlag'); }
  get pressoBdi() { return this.modificaForm.get('pressoBdi'); }
  get flgMan() { return this.modificaForm.get('flgMan'); }
  get indicatoreResidenza() { return this.modificaForm.get('indicatoreResidenza'); }
  get categoriaEconomica() { return this.modificaForm.get('categoriaEconomica'); }
  get dataApertura() { return this.modificaForm.get('dataApertura'); }
  get dataChiusura() { return this.modificaForm.get('dataChiusura'); }
  get checkedbicConto() { return this.modificaForm.get('checkedbicConto'); }
  get checkedtipoConto() { return this.modificaForm.get('checkedtipoConto'); }
  get checkedtargetService() { return this.modificaForm.get('checkedtargetService'); }
  get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
  get checkednumeroConto() { return this.modificaForm.get('checkednumeroConto'); }
  get checkedabi() { return this.modificaForm.get('checkedabi'); }
  get checkedmcaDefFlag() { return this.modificaForm.get('checkedmcaDefFlag'); }
  get checkedpressoBdi() { return this.modificaForm.get('checkedpressoBdi'); }
  get checkedflgMan() { return this.modificaForm.get('checkedflgMan'); }
  get checkedindicatoreResidenza() { return this.modificaForm.get('checkedindicatoreResidenza'); }
  get checkedcategoriaEconomica() { return this.modificaForm.get('checkedcategoriaEconomica'); }
  get checkeddataApertura() { return this.modificaForm.get('checkeddataApertura'); }
  get checkeddataChiusura() { return this.modificaForm.get('checkeddataChiusura'); }
  get dataInizioValidita() { return this.modificaForm.get('dataInizioValidita'); }

  checkTipoConto(): boolean {
    return (this.tipoConto.value == 'CLM_MCA' || this.tipoConto.value == 'CLM_CB');
  }

  reset(field) {
    this.modificaForm.get(field).setValue(undefined);
  }

  manageCheckBox(field: string, type?: string) {

    if (this.modificaForm.get('checked'.concat(field)).value) {
      let val = get(this.conto, field);
      if (!!type && type == 'date') {
        val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
      }
      this.modificaForm.get(field).setValue(val);
    } else {
      //this.modificaForm.get(field).setValue(null);
    }
  }

  setTargetService() {
    this.modificaForm.get('targetService').setValue(this.tipiConto.find( t => t.codice == this.tipoConto.value).targetService);
  }

  manageFlagInserimentoForBil(field: string) {
    this.manageCheckBox(field);
    this.checkenableModificatoriBIL();
  }

  checkenableModificatoriBIL() {
  if (this.checkBilValidator()) {
      this.enableModificatoriBIL = true;
    } else {
      this.enableModificatoriBIL = false;
      this.manageCheckBox('indicatoreResidenza');
      this.modificaForm.get('checkedindicatoreResidenza').setValue(false);
      this.manageCheckBox('categoriaEconomica');
      this.modificaForm.get('checkedcategoriaEconomica').setValue(false);
    }
  }

  onSubmit() {
    this.resetError();
    this.isResultOk = false;

    if (this.modificaForm.valid) {
      this.showSpinner();
      const taskconto = this.buildTaskConto();
      this.taskService.saveTaskConto(taskconto).pipe(
          switchMap(res => this.contoService.getConto( String(res.idContoOrig))),
          tap( res => {
            if (!!res) {
              this.conto.flgMan = res.flgMan;
              this.conto.indicatoreResidenza = res.indicatoreResidenza;
              this.modificaForm.get('indicatoreResidenza').setValue(this.conto.indicatoreResidenza);
              this.conto.categoriaEconomica = res.categoriaEconomica;
              this.modificaForm.get('categoriaEconomica').setValue(this.conto.categoriaEconomica);
              this.conto.dataApertura = res.dataApertura
              this.conto.validFrom = res.validFrom;
              const d = new Date(res.dataChiusura);
              this.modificaForm.get('dataChiusura').setValue({year: d.getFullYear(), month: d.getUTCMonth(), day: d.getUTCDate()});
            }
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - saveTaskConto', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    } else {
      this.getFormValidationErrors();
    }
  }

  private buildTaskConto (): TaskConto {

    return <TaskConto> {
      operazione: {
        codice: TipoOperazioneEnum.UPD
      },

      bic: this.bicConto.value,
      tipoConto: {
        codice: this.tipoConto.value
      },
      targetService: this.targetService.value,
      numeroConto: this.numeroConto.value,
      descrizione: this.descrizione.value,
      abi: this.abi.value,
      mcaDefFlag: (!!this.mcaDefFlag.value ? ((this.mcaDefFlag.value == TipoFlagEnum.SI) ? true : false) : null),
      flgMan: (!!this.flgMan.value ? ((this.flgMan.value == TipoFlagEnum.SI) ? true : false) : null),
      pressoBdi: (!!this.pressoBdi.value ? ((this.pressoBdi.value == TipoFlagEnum.SI) ? true : false) : null),
      categoriaEconomica: (!!this.checkedcategoriaEconomica.value ? this.categoriaEconomica.value : null),
      indicatoreResidenza: (!!this.checkedindicatoreResidenza.value ? this.indicatoreResidenza.value : null),
      dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
      dataChiusura: this.formatterUtils.dateToString((!!this.dataChiusura.value ? this.dataChiusura.value : {year: 9999, month: 12, day: 31})),
      validFrom: (!!this.dataInizioValidita.value ? this.formatterUtils.dateToString(this.dataInizioValidita.value) : null),

      abiToEdit: this.checkedabi.value,
      //bicPartyToEdit: false,
      //bicToEdit: this.checkedbicConto.value,
      categoriaEconomicaToEdit: this.checkedcategoriaEconomica.value,
      dataAperturaToEdit: this.checkeddataApertura.value,
      //dataChiusuraToEdit: this.checkeddataChiusura.value,
      descrizioneToEdit: this.checkeddescrizione.value,
      flgManToEdit: this.checkedflgMan.value,
      indicatoreResidenzaToEdit: this.checkedindicatoreResidenza.value,
      mcaDefFlagToEdit: this.checkedmcaDefFlag.value,
      numeroContoToEdit: this.checkednumeroConto.value,
      pressoBdiToEdit: this.checkedpressoBdi.value,
      subBicPtyAnsyToEdit: false,
      subParBicDcaToEdit: false,
      subParTsDcaToEdit: false,
      subTipoPtyAnsyToEdit: false,
      subTipoSfruttAnsyToEdit: false,
      //targetServiceToEdit: this.checkedtargetService.value,
      tipoContoToEdit: this.checkedtipoConto.value,
      tipoPartyToEdit: false,
      /*tsModificaToEdit: false,
      utenteRichiestaToEdit: false,
      utenteValidazioneToEdit: false,
      validFromToEdit: (!!this.dataInizioValidita.value ? true : false),
      validToToEdit: false*/

      idContoOrig: this.conto.id
    };
  }

  getSelectValue( list: any, field: any) {
    return list.find( t => t.codice == field).descrizione;
  }

  getSelectValueFlgMan( list: any, field: any) {
    return list.find( t => t.codice == field).descrizione;
  }

  getDataAperturaValue() {
    return this.conto.dataApertura;
  }

  getDataChiusuraValue() {
    return this.conto.dataChiusura;
  }

  getDataInizioValiditaValue() {
    return this.conto.validFrom;
  }

  getFormValidationErrors() {
    Object.keys(this.modificaForm.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.modificaForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}

