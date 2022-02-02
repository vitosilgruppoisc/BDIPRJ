import {FormBuilder} from "@angular/forms";
import {AbstractDettaglioTaskComponent} from "../abstract-dettaglio-task.component";
import {catchError, tap} from "rxjs/operators";
import {InfoPanelModel} from "../../../../models/info-panel-model";
import {SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {RoutingService} from "../../../../services/routing.service";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {ActivatedRoute, Router} from "@angular/router";
import {RSQLUtils} from "../../../../utilities/rsqlUtil";
import {EUserRole} from "../../../../models";
import {Component, OnInit} from "@angular/core";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {of} from "rxjs";
import {ModalService} from "scam-bdi-uikit";
import {Task, TaskEccTranscodingRetail} from "../../../../models/task";


@Component({
  selector: 'app-dettaglio-task-ecc-transcoding-retail',
  templateUrl: './dettaglio-task-ecc-transcoding-retail.component.html',
  styleUrls: ['./dettaglio-task-ecc-transcoding-retail.component.scss']
})
export class DettaglioTaskEccTranscodingRetailComponent extends  AbstractDettaglioTaskComponent implements OnInit {

  taskEccTranscodingRetail: TaskEccTranscodingRetail;

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
      const detailEccSessionObj = this.getSession(this.routingService.TASK_ECC_TRANS_RET_DETAIL);
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

    this.taskService.getTaskEccTranscodingRetail(idEcc).pipe (
        tap( res => {
          this.taskEccTranscodingRetail = <TaskEccTranscodingRetail> res;
          this.buildTaskEccTranscodingRetailSection();
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

  private buildTaskEccTranscodingRetailSection() {
    const data = [
      [{ label: 'Tipo Intervento', value: this.taskEccTranscodingRetail.operazione.descrizione}, {}],
      [this.buildInfoPanelElement('Nsc', 'string', this.taskEccTranscodingRetail, 'nsc'), this.buildInfoPanelElement('Country Code', 'string', this.taskEccTranscodingRetail, 'countryCode.descrizione', 'countryCodeOrig.descrizione')],
      [this.buildInfoPanelElement('Bic', 'string', this.taskEccTranscodingRetail, 'bic'), this.buildInfoPanelElement('Descrizione', 'string', this.taskEccTranscodingRetail, 'descrizione')],
      [this.buildInfoPanelElement('Data Inizio Validità', 'date', this.taskEccTranscodingRetail, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità', 'date', this.taskEccTranscodingRetail, 'validTo')],
      [this.buildModel('Utente Richiesta', this.taskEccTranscodingRetail.userReq, this.taskEccTranscodingRetail.utenteRichiestaOrig, this.taskEccTranscodingRetail), this.buildModel('Utente Approvatore', this.taskEccTranscodingRetail.userValidate, this.taskEccTranscodingRetail.utenteValidazioneOrig, this.taskEccTranscodingRetail)]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

    this.manageButton(this.taskEccTranscodingRetail.stato, this.taskEccTranscodingRetail.userReq, [EUserRole.ANAGRAFICHE_DET]);
  }

  getConferma(task: Task) {
    return this.taskService.confermaTaskEccTranscodingRetail(task);
  }

  getRifiuta (task: Task) {
    return this.taskService.rifiutaTaskEccTranscodingRetail(task);
  }

  getId(): number {
    return this.taskEccTranscodingRetail.id;
  }

}
