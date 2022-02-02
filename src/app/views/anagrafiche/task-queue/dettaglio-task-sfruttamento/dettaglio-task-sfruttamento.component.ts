import { Component, OnInit } from '@angular/core';
import {AbstractDettaglioTaskComponent} from '../abstract-dettaglio-task.component';
import {Task, TaskParty, TaskSfruttamentoAnsyDca} from '../../../../models/task';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../../../../services/task.service';
import {SecurityService, UserService} from '../../../../services';
import {ModalService} from 'scam-bdi-uikit';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {FormBuilder} from '@angular/forms';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {RoutingService} from '../../../../services/routing.service';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {InfoPanelModel} from '../../../../models/info-panel-model';
import {TipoParty} from '../../../../models/party';
import {EUserRole} from "../../../../models";

@Component({
  selector: 'app-dettaglio-task-sfruttamento',
  templateUrl: './dettaglio-task-sfruttamento.component.html',
  styleUrls: ['./dettaglio-task-sfruttamento.component.scss']
})
export class DettaglioTaskSfruttamentoComponent extends  AbstractDettaglioTaskComponent implements OnInit {

  taskSfruttamentoAnsyDca: TaskSfruttamentoAnsyDca;

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
      const detailSfruttamentoSessionObj = this.getSession(this.routingService.TASK_SFRUTTAMENTO_DETAIL);
      if (!!detailSfruttamentoSessionObj) {
        this.loadSections(detailSfruttamentoSessionObj.idTask);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailSfruttamentoSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  loadSections (idSfruttamento: string) {
    this.showSpinner();

    this.taskService.getTaskSfruttamentoAnsyDca(idSfruttamento).pipe (
        tap( res => {
          this.taskSfruttamentoAnsyDca = <TaskSfruttamentoAnsyDca> res;
          this.buildTaskSfruttamentoAnsyDcaSection();
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

  private buildTaskSfruttamentoAnsyDcaSection() {
    const data = [
      [{ label: 'Tipo Intervento', value: this.taskSfruttamentoAnsyDca.operazione.descrizione}, {}],
      [this.buildInfoPanelElement('Party Bic', 'string', this.taskSfruttamentoAnsyDca, 'bicParty'), this.buildInfoPanelElement('Tipo Party', 'string', this.taskSfruttamentoAnsyDca, 'tipoParty.descrizione', 'tipoPartyOrig.descrizione')],
      [this.buildInfoPanelElement('Bic Conto', 'string', this.taskSfruttamentoAnsyDca, 'bicConto'), this.buildInfoPanelElement('Target Service', 'string', this.taskSfruttamentoAnsyDca, 'targetServiceConto')],
      [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.taskSfruttamentoAnsyDca, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.taskSfruttamentoAnsyDca, 'validTo')],
      [this.buildModel('Utente Richiesta', this.taskSfruttamentoAnsyDca.userReq, this.taskSfruttamentoAnsyDca.utenteRichiestaOrig, this.taskSfruttamentoAnsyDca), this.buildModel('Utente Approvatore', this.taskSfruttamentoAnsyDca.userValidate, this.taskSfruttamentoAnsyDca.utenteValidazioneOrig, this.taskSfruttamentoAnsyDca)]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

    this.manageButton(this.taskSfruttamentoAnsyDca.stato, this.taskSfruttamentoAnsyDca.userReq, [EUserRole.ANAGRAFICHE_SPI]);
  }

  getConferma(task: Task) {
    return this.taskService.confermaTaskSfruttamentoAnsyDca(task);
  }

  getRifiuta (task: Task) {
    return this.taskService.rifiutaTaskSfruttamentoAnsyDca(task);
  }

  getId(): number {
    return this.taskSfruttamentoAnsyDca.id;
  }
}
