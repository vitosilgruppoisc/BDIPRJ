import { Component, OnInit } from '@angular/core';
import {InfoPanelElement, InfoPanelModel, Style, Tooltip} from '../../../../models/info-panel-model';
import {AbstractTaskComponent} from '../abstract-task.component';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../../../../services/task.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {FormBuilder} from '@angular/forms';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {catchError, tap} from 'rxjs/operators';
import {TaskParty, Task} from '../../../../models/task';
import {of} from 'rxjs';
import {ModalService} from 'scam-bdi-uikit';
import {RoutingService} from '../../../../services/routing.service';
import {AbstractDettaglioTaskComponent} from '../abstract-dettaglio-task.component';
import {EUserRole} from "../../../../models";

@Component({
  selector: 'app-dettaglio-task-party',
  templateUrl: './dettaglio-task-party.component.html',
  styleUrls: ['./dettaglio-task-party.component.scss']
})
export class DettaglioTaskPartyComponent extends  AbstractDettaglioTaskComponent implements OnInit {

  taskParty: TaskParty;

  constructor(
      router: Router,
      protected taskService: TaskService,
      protected securityService: SecurityService,
      protected userService: UserService,
      protected modalService: ModalService,
      protected filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      protected formBuilder: FormBuilder,
      protected rSQLUtils: RSQLUtils,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(securityService, userService, modalService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.queryParams.subscribe(params => {
      const detailPartySessionObj = this.getSession(this.routingService.TASK_PARTY_DETAIL);
      if (!!detailPartySessionObj) {
        this.loadSections(detailPartySessionObj.idTask);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailPartySessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  loadSections (idParty: string) {
    this.showSpinner();

    this.taskService.getTaskParty(idParty).pipe (
        tap( res => {
          this.taskParty = <TaskParty> res;
          this.buildTaskPartySection();
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

  private buildTaskPartySection() {
    const data = [
      [{ label: 'Tipo Intervento', value: this.taskParty.operazione.descrizione}, {}],
      [this.buildInfoPanelElement('Party Bic', 'string', this.taskParty, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.taskParty, 'tipoParty.descrizione', 'tipoPartyOrig.descrizione')],
      [this.buildInfoPanelElement('Nome Party', 'string', this.taskParty, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.taskParty, 'defaultAbi')],
      [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.taskParty, 'filialeRiferimento.descrizione', 'filialeRiferimentoOrig.descrizione'), this.buildInfoPanelElement('MFI Code', 'string', this.taskParty, 'mfiCode' )],
      [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.taskParty, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.taskParty, 'categoriaEconomica')],
      [this.buildInfoPanelElement('Data Apertura', 'date', this.taskParty, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura', 'date', this.taskParty, 'dataChiusura')],
      [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.taskParty, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.taskParty, 'validTo')],
      [this.buildModel('Utente Richiesta', this.taskParty.userReq, this.taskParty.utenteRichiestaOrig, this.taskParty), this.buildModel('Utente Approvatore', this.taskParty.userValidate, this.taskParty.utenteValidazioneOrig, this.taskParty)]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

    this.manageButton(this.taskParty.stato, this.taskParty.userReq, [EUserRole.ANAGRAFICHE_SPI]);
  }

  getConferma(task: Task) {
    return this.taskService.confermaTaskParty(task);
  }

  getRifiuta (task: Task) {
    return this.taskService.rifiutaTaskParty(task);
  }

  getId(): number {
    return this.taskParty.id;
  }

}
