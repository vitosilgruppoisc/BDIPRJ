import { Component, OnInit } from '@angular/core';
import {AbstractPartyComponent} from '../abstract-party.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IDatepickerModel} from 'scam-bdi-uikit/lib/daterangepicker/interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {TaskService} from '../../../../services/task.service';
import {InfostatService} from '../../../../services/infostat.service';
import {ModalService} from 'scam-bdi-uikit';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Party, TipoParty} from '../../../../models/party';
import {TaskParty} from '../../../../models/task';
import {TipoOperazioneEnum} from '../../../../models/enum';
import {FilialeRiferimento} from '../../../../models/filiale';
import {RoutingService} from '../../../../services/routing.service';
import {dateValidator} from "../../../../validators/date-validator";

@Component({
  selector: 'app-eliminazione-logica-party',
  templateUrl: './eliminazione-logica-party.component.html',
  styleUrls: ['./eliminazione-logica-party.component.scss']
})
export class EliminazioneLogicaPartyComponent extends AbstractPartyComponent implements OnInit {

  party: Party;
  minDate: IDatepickerModel;
  minDateField: string;

  eliminazioneForm: FormGroup;

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
      protected route: ActivatedRoute,
      protected routingService: RoutingService
  ) {
    super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.queryParams.subscribe(params => {
      const deletePartySessionObj = this.getSession(this.routingService.PARTY_DELETE);
      if (!!deletePartySessionObj) {
        this.load(deletePartySessionObj.idParty);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(deletePartySessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private load (idParty: string) {
    this.showSpinner();

    this.partyService.getParty(idParty).pipe(
        tap( res => {
          this.party = res;
          this.setMinDate();
          this.isActive = this.isPartyActive(this.party);
          const dc = new Date(this.party.dataChiusura);
          this.eliminazioneForm = this.formBuilder.group({
            dataChiusura: new FormControl(  {year: dc.getFullYear(), month: (dc.getUTCMonth() + 1), day: dc.getUTCDate()} , [Validators.required]),
          }, { validator: dateValidator( [
              {field1: 'dataChiusura', minDate1: this.minDate}
            ]) });
          this.hideSpinner();
        }),
        catchError((error) => {
          console.log ('Error - loadParty', error);
          this.setError(error);
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  get dataChiusura() { return this.eliminazioneForm.get('dataChiusura'); }

  setMinDate() {
    const d1 = new Date(this.party.dataApertura);
    d1.setDate(d1.getDate() + 1);
    const d2 = new Date(this.party.validFrom);
    /*if (d1 >= d2 ) {
      this.minDate =  {day: d1.getUTCDate(), month: (d1.getUTCMonth() + 1), year: d1.getFullYear()};
      this.minDateField = 'data apertura';
    } else {
      this.minDate = {day: d2.getUTCDate(), month: (d2.getUTCMonth() + 1), year: d2.getFullYear()};
      this.minDateField = 'data inizio validità';
    }*/
    //Poichè la data inizio validità deve essere sempre >= della data apertura allora vale il seguente
    this.minDate = {day: d2.getUTCDate(), month: (d2.getUTCMonth() + 1), year: d2.getFullYear()};
    this.minDateField = 'data inizio validità';
  }

  reset(field) {
    this.eliminazioneForm.get(field).setValue(undefined);
  }

  onSubmit() {
    this.resetError();
    this.isResultOk = false;

    if (this.eliminazioneForm.valid) {
      this.showSpinner();
      const taskPartyReq = this.buildTaskParty();
      this.taskService.saveTaskParty(taskPartyReq).pipe(
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

  private buildTaskParty (): TaskParty {
    return <TaskParty> {
      operazione: {
        codice: TipoOperazioneEnum.DEL
      },
      dataChiusura: this.formatterUtils.dateToString(this.dataChiusura.value),
      idPartyOrig: this.party.id
    };
  }

  getDataChiusuraValue() {
    return  this.eliminazioneForm.get('dataChiusura').value;
  }

}
