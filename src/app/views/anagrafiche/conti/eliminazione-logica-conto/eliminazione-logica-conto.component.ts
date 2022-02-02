import { Component, OnInit } from '@angular/core';
import {AbstractPartyComponent} from '../../parties/abstract-party.component';
import {GetPartiesResponse, Party} from '../../../../models/party';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {TaskService} from '../../../../services/task.service';
import {InfostatService} from '../../../../services/infostat.service';
import {ModalService} from 'scam-bdi-uikit';
import {RoutingService} from '../../../../services/routing.service';
import {Conto} from '../../../../models/conto';
import {catchError, filter, mergeMap, switchMap, tap, toArray} from 'rxjs/operators';
import {of} from 'rxjs';
import {ContoService} from '../../../../services/conto.service';
import {AbstractContiComponent} from '../abstract-conti.component';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {Utils} from '../../../../utilities/util';
import {TaskConto, TaskParty} from '../../../../models/task';
import {TipoOperazioneEnum} from '../../../../models/enum';
import {InfoPanelModel} from '../../../../models/info-panel-model';

@Component({
  selector: 'app-eliminazione-logica-conto',
  templateUrl: './eliminazione-logica-conto.component.html',
  styleUrls: ['./eliminazione-logica-conto.component.scss']
})
export class EliminazioneLogicaContoComponent extends AbstractContiComponent implements OnInit {

  party: Party;
  conto: Conto;
  minDate: IDatepickerModel;

  eliminazioneForm: FormGroup;
  isActive: boolean = false;

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
    super.ngOnInit();
    this.route.queryParams.subscribe(params => {
      const deleteContoSessionObj = this.getSession(this.routingService.CONTO_DELETE);
      if (!!deleteContoSessionObj) {
        this.load(deleteContoSessionObj.idConto);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(deleteContoSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private load (idConto: string) {
    this.showSpinner();
    this.contoService.getConto(idConto).pipe(
        tap( res => {
          this.conto = res;
          this.setMinDate();
          this.isActive = this.isContoActive(this.conto);
          this.eliminazioneForm = this.formBuilder.group({
            dataChiusura: new FormControl(  null , [Validators.required]),
          });
        }),
        switchMap(res => this.partyService.getPartyByBicAndTipo(this.conto.bicParty, this.conto.tipoParty)),
        tap ( res => { this.party = res; }),
        tap( res => {
          if (!!this.party) {
            this.buildPartySection();
          }
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

  private buildPartySection() {
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

  get dataChiusura() { return this.eliminazioneForm.get('dataChiusura'); }

  setMinDate() {
    const d1 = new Date(this.conto.dataApertura);
    d1.setDate(d1.getDate() + 1);
    const d2 = new Date(this.conto.validFrom);
    if (d1 >= d2 ) {
      this.minDate =  {day: d1.getUTCDate(), month: (d1.getUTCMonth() + 1), year: d1.getFullYear()};
    } else {
      this.minDate = {day: d2.getUTCDate(), month: (d2.getUTCMonth() + 1), year: d2.getFullYear()};
    }
  }

  reset(field) {
    this.eliminazioneForm.get(field).setValue(undefined);
  }

  onSubmit() {
    this.resetError();
    this.isResultOk = false;

    if (this.eliminazioneForm.valid) {
      this.showSpinner();
      const taskContoReq = this.buildTaskConto();
      this.taskService.saveTaskConto(taskContoReq).pipe(
          tap( res => {
            this.eliminazioneForm.get('dataChiusura').setValue(res.dataChiusura);
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
          }),
          catchError((error) => {
            console.log ('Error - onSubmit', error);
            this.setError(error);
            this.hideSpinner();
            return of(null);
          })
      ).subscribe();
    }
  }

  private buildTaskConto (): TaskConto {
    return <TaskConto> {
      operazione: {
        codice: TipoOperazioneEnum.DEL
      },
      dataChiusura: this.formatterUtils.dateToString(this.dataChiusura.value),
      idContoOrig: this.conto.id
    };
  }

  getDataChiusuraValue() {
    return  this.eliminazioneForm.get('dataChiusura').value;
  }

}
