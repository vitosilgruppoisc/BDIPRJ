import { Component, OnInit } from '@angular/core';
import {AbstractDettaglioTaskComponent} from "../abstract-dettaglio-task.component";
import {Task, TaskEccTranscodingIngrosso} from "../../../../models/task";
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
  selector: 'app-dettaglio-task-ecc-transcoding-ingrosso',
  templateUrl: './dettaglio-task-ecc-transcoding-ingrosso.component.html',
  styleUrls: ['./dettaglio-task-ecc-transcoding-ingrosso.component.scss']
})
export class DettaglioTaskEccTranscodingIngrossoComponent extends  AbstractDettaglioTaskComponent implements OnInit {

  taskEccTranscodingIngrosso: TaskEccTranscodingIngrosso;

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
      const detailEccSessionObj = this.getSession(this.routingService.TASK_ECC_TRANS_INGR_DETAIL);
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

    this.taskService.getTaskEccTranscodingIngrosso(idEcc).pipe (
        tap( res => {
          this.taskEccTranscodingIngrosso = <TaskEccTranscodingIngrosso> res;
          this.buildTaskEccTranscodingIngrossoSection();
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

  private buildTaskEccTranscodingIngrossoSection() {
    const data = [
      [{ label: 'Tipo Intervento', value: this.taskEccTranscodingIngrosso.operazione.descrizione}, {}],
      [this.buildInfoPanelElement('Abi', 'string', this.taskEccTranscodingIngrosso, 'abi'), this.buildInfoPanelElement('Cab', 'string', this.taskEccTranscodingIngrosso, 'cab')],
      [this.buildInfoPanelElement('Tipo Conto', 'string', this.taskEccTranscodingIngrosso, 'tipoConto'), this.buildInfoPanelElement('Bic Conto', 'string', this.taskEccTranscodingIngrosso, 'bicConto')],
      [this.buildInfoPanelElement('Verso', 'string', this.taskEccTranscodingIngrosso, 'verso'), this.buildInfoPanelElement('Descrizione', 'string', this.taskEccTranscodingIngrosso, 'descrizione')],
      [this.buildInfoPanelElement('Data Inizio Validità', 'date', this.taskEccTranscodingIngrosso, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità', 'date', this.taskEccTranscodingIngrosso, 'validTo')],
      [this.buildModel('Utente Richiesta', this.taskEccTranscodingIngrosso.userReq, this.taskEccTranscodingIngrosso.utenteRichiestaOrig, this.taskEccTranscodingIngrosso), this.buildModel('Utente Approvatore', this.taskEccTranscodingIngrosso.userValidate, this.taskEccTranscodingIngrosso.utenteValidazioneOrig, this.taskEccTranscodingIngrosso)]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

    this.manageButton(this.taskEccTranscodingIngrosso.stato, this.taskEccTranscodingIngrosso.userReq, [EUserRole.ANAGRAFICHE_SPI]);
  }

  getConferma(task: Task) {
    return this.taskService.confermaTaskEccTranscodingIngrosso(task);
  }

  getRifiuta (task: Task) {
    return this.taskService.rifiutaTaskEccTranscodingIngrosso(task);
  }

  getId(): number {
    return this.taskEccTranscodingIngrosso.id;
  }

}

