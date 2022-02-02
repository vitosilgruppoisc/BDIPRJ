import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService, UserService} from '../../../../services';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {AbstractPartyComponent} from '../abstract-party.component';
import {TaskService} from '../../../../services/task.service';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Task, TaskParty} from '../../../../models/task';
import {TipoOperazioneEnum} from '../../../../models/enum';
import {InfostatService} from '../../../../services/infostat.service';
import {ModalService} from 'scam-bdi-uikit';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {RoutingService} from '../../../../services/routing.service';
import {dateValidator} from "../../../../validators/date-validator";

@Component({
  selector: 'app-inserimento-party',
  templateUrl: './inserimento-party.component.html',
  // styleUrls: ['./inserimento-party.component.scss']
})
export class InserimentoPartyComponent extends AbstractPartyComponent implements OnInit {

  @ViewChild('mfiModal', { static: false })
  mfiModal: TemplateRef<any>;

  private mfiModalReference: any;

  inserimentoForm: FormGroup;
  minDate: IDatepickerModel;

  constructor(
      router: Router,
      protected partyService: PartyService,
      protected filialeService: FilialeService,
      protected securityService: SecurityService,
      protected userService: UserService,
      private filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      private formBuilder: FormBuilder,
      private taskService: TaskService,
      private infostatService: InfostatService,
      private modalService: ModalService,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const insertPartySessionObj = this.getSession(this.routingService.PARTY_INSERT);
      if (!!insertPartySessionObj) {
        this.backUrl = this.routingService.getRouteByKey(insertPartySessionObj.backUrl);
      } else {
        this.setError();
      }
    });
    super.ngOnInit();
    this.buildForm();
  }

  private buildForm() {
    const today = new Date();
    this.minDate =  {day: today.getUTCDate(), month: (today.getUTCMonth() + 1), year: today.getFullYear()};
    this.inserimentoForm = this.formBuilder.group({
      bic:  new FormControl(null,   [Validators.required, this.bic11Validator.bind(this)]),
      tipo: new FormControl(null,   [Validators.required]),
      nome: new FormControl(null,   [Validators.required]),
      abi: new FormControl(null,    [Validators.required]),
      filiale: new FormControl(null,   [Validators.required]),
      mfiCode: new FormControl(null,   [Validators.required]),
      indResidenza: new FormControl(null,   []),
      catEconomica: new FormControl(null,   []),
      dataApertura: new FormControl(null, [Validators.required]),
      dataChiusura: new FormControl(null, [])
    }, { validator: dateValidator( [
        {field1: 'dataApertura', field2: 'dataChiusura', minDate2: this.minDate}
      ]) });
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

  get bic() { return this.inserimentoForm.get('bic'); }
  get tipo() { return this.inserimentoForm.get('tipo'); }
  get nome() { return this.inserimentoForm.get('nome'); }
  get abi() { return this.inserimentoForm.get('abi'); }
  get filiale() { return this.inserimentoForm.get('filiale'); }
  get mfiCode() { return this.inserimentoForm.get('mfiCode'); }
  get indResidenza() { return this.inserimentoForm.get('indResidenza'); }
  get catEconomica() { return this.inserimentoForm.get('catEconomica'); }
  get dataApertura() { return this.inserimentoForm.get('dataApertura'); }
  get dataChiusura() { return this.inserimentoForm.get('dataChiusura'); }

  reset(field) {
    this.inserimentoForm.get(field).setValue(undefined);
  }

  onSubmit() {
    this.resetError();
    this.isResultOk = false;

    if (this.inserimentoForm.valid) {
      this.showSpinner();
      this.infostatService.getInfostatValue(this.mfiCode.value).pipe(
          tap ( res => {
            if (!!res) {
              this.saveParty();
            }  else {
              this.openModal();
            }
          }),
          catchError((error) => {
            console.log ('Error - getInfostatValue', error);
            this.hideSpinner();
            this.openModal();
            return of(null);
          })
      ).subscribe();
    }
  }

  private openModal() {
    this.mfiModalReference = this.modalService.open(this.mfiModal);
  }

  closeModal() {
    this.mfiModalReference.close();
  }

  confirmModal() {
    this.mfiModalReference.close();
    this.saveParty();
  }

  private saveParty () {
    const taskParty = this.buildTaskParty();
    this.taskService.saveTaskParty(taskParty).pipe(
        tap( res => {
          const d = new Date(res.dataChiusura);
          this.inserimentoForm.get('indResidenza').setValue(res.indicatoreResidenza);
          this.inserimentoForm.get('catEconomica').setValue(res.categoriaEconomica);
          this.inserimentoForm.get('dataChiusura').setValue({year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate()});
          this.isResultOk = true;
          this.hideSpinner();
          this.readonlyForm = true;
        }),
        catchError((error) => {
          console.log ('Error - saveParty', error);
          this.setError(error);
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  private buildTaskParty (): TaskParty {

    return <TaskParty> {
      operazione: {
        codice: TipoOperazioneEnum.INS
      },
      bic: this.bic.value,
      tipoParty: {
        codice: this.tipo.value
      },
      defaultAbi: this.abi.value,
      nome: this.nome.value,
      filialeRiferimento: {
        codice: this.filiale.value,
      },
      mfiCode: this.mfiCode.value,
      categoriaEconomica: this.catEconomica.value,
      indicatoreResidenza: this.indResidenza.value,
      dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
      dataChiusura: this.formatterUtils.dateToString((!!this.dataChiusura.value ? this.dataChiusura.value : {year: 9999, month: 12, day: 31}))
    };
  }

  resetForm() {
    this.readonlyForm = false;
    this.isResultOk = false;
    this.buildForm();
  }

  getTipoValue(): string {
    return this.tipiParty.find( t => t.codice == this.tipo.value).descrizione;
  }

  getFilialeValue(): string {
    return this.filialiRiferimento.find( f => f.codice == this.filiale.value).descrizione;
  }

  getDataAperturaValue() {
    return this.formatterUtils.dateToString(this.dataApertura.value);
  }

  getDataChiusuraValue() {
    return this.formatterUtils.dateToString(this.dataChiusura.value);
  }
}
