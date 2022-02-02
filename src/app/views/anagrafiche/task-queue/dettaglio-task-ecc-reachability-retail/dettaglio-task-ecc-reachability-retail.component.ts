import { Component, OnInit } from '@angular/core';
import {AbstractDettaglioTaskComponent} from "../abstract-dettaglio-task.component";
import {Task, TaskEccReachabilityRetail} from "../../../../models/task";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../../../services/task.service";
import {SecurityService, UserService} from "../../../../services";
import {ModalService} from "scam-bdi-uikit";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {FormBuilder} from "@angular/forms";
import {RSQLUtils} from "../../../../utilities/rsqlUtil";
import {RoutingService} from "../../../../services/routing.service";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {InfoPanelModel} from "../../../../models/info-panel-model";
import {EUserRole} from "../../../../models";

@Component({
  selector: 'app-dettaglio-task-ecc-reachability-retail',
  templateUrl: './dettaglio-task-ecc-reachability-retail.component.html',
  styleUrls: ['./dettaglio-task-ecc-reachability-retail.component.scss']
})
export class DettaglioTaskEccReachabilityRetailComponent extends  AbstractDettaglioTaskComponent implements OnInit {

  taskEccReachabilityRetail: TaskEccReachabilityRetail;

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
      const detailEccSessionObj = this.getSession(this.routingService.TASK_ECC_RAGG_RET_DETAIL);
      if (!!detailEccSessionObj) {
        this.loadSections(detailEccSessionObj.idTask);
        this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  loadSections (idEcc: string) {
    this.showSpinner();

    this.taskService.getTaskEccReachabilityRetail(idEcc).pipe (
        tap( res => {
          this.taskEccReachabilityRetail = <TaskEccReachabilityRetail> res;
          this.buildTaskEccReachabilityRetailSection();
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

  private buildTaskEccReachabilityRetailSection() {
    const data = [
      [{ label: 'Tipo Intervento', value: this.taskEccReachabilityRetail.operazione.descrizione}, {}],
      [this.buildInfoPanelElement('Bic Input', 'string', this.taskEccReachabilityRetail, 'bicInput'), this.buildInfoPanelElement('Canale', 'string', this.taskEccReachabilityRetail, 'canale.descrizione', 'canaleOrig.descrizione')],
      [this.buildInfoPanelElement('Raggiungibile', 'boolean', this.taskEccReachabilityRetail, 'raggiungibile'), this.buildInfoPanelElement('Descrizione', 'string', this.taskEccReachabilityRetail, 'descrizione')],
      [/*this.buildInfoPanelElement('Bic Output', 'string', this.taskEccReachabilityRetail, 'bicOutput'),*/ this.buildInfoPanelElement('Bic Diretto', 'string', this.taskEccReachabilityRetail, 'bicDiretto'), {}],
      [this.buildInfoPanelElement('Data Inizio Validità', 'date', this.taskEccReachabilityRetail, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità', 'date', this.taskEccReachabilityRetail, 'validTo')],
      [this.buildModel('Utente Richiesta', this.taskEccReachabilityRetail.userReq, this.taskEccReachabilityRetail.utenteRichiestaOrig, this.taskEccReachabilityRetail), this.buildModel('Utente Approvatore', this.taskEccReachabilityRetail.userValidate, this.taskEccReachabilityRetail.utenteValidazioneOrig, this.taskEccReachabilityRetail)]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

    this.manageButton(this.taskEccReachabilityRetail.stato, this.taskEccReachabilityRetail.userReq, [EUserRole.ANAGRAFICHE_DET]);
  }

  getConferma(task: Task) {
    return this.taskService.confermaTaskEccReachabilityRetail(task);
  }

  getRifiuta (task: Task) {
    return this.taskService.rifiutaTaskEccReachabilityRetail(task);
  }

  getId(): number {
    return this.taskEccReachabilityRetail.id;
  }

}

