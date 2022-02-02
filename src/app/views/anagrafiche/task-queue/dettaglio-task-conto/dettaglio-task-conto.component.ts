import { Component, OnInit } from '@angular/core';
import {AbstractDettaglioTaskComponent} from '../abstract-dettaglio-task.component';
import {Task, TaskConto, TaskParty} from '../../../../models/task';
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
import {Conto} from '../../../../models/conto';
import {TipoContoEnum} from '../../../../models/enum';
import {EUserRole} from "../../../../models";

@Component({
  selector: 'app-dettaglio-task-conto',
  templateUrl: './dettaglio-task-conto.component.html',
  styleUrls: ['./dettaglio-task-conto.component.scss']
})
export class DettaglioTaskContoComponent extends  AbstractDettaglioTaskComponent implements OnInit {

  taskConto: TaskConto;

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
      const detailContoSessionObj = this.getSession(this.routingService.TASK_CONTO_DETAIL);
      if (!!detailContoSessionObj) {
        this.loadSections(detailContoSessionObj.idTask);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailContoSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  loadSections (idTask: string) {
    this.showSpinner();

    this.taskService.getTaskConto(idTask).pipe (
        tap( res => {
          this.taskConto = <TaskConto> res;
          this.buildTaskContoSection();
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

  private buildTaskContoSection() {
    const data = [
      [{ label: 'Tipo Intervento', value: this.taskConto.operazione.descrizione}, {}],
      [this.buildInfoPanelElement('Bic', 'string', this.taskConto, 'bic'), this.buildInfoPanelElement('Target Service', 'string', this.taskConto, 'targetService')],
      [this.buildInfoPanelElement('Account Id', 'string', this.taskConto, 'numeroConto'), this.buildInfoPanelElement('ABI', 'string', this.taskConto, 'abi')],
      [this.buildInfoPanelElement('Tipo Conto', 'string', this.taskConto, 'tipoConto.descrizione', 'tipoContoOrig.descrizione'), this.buildInfoPanelElement('Descrizione', 'string', this.taskConto, 'descrizione')],
      [this.buildInfoPanelElement('Default MCA', 'boolean', this.taskConto, 'mcaDefFlag'), this.buildInfoPanelElement('Presso BDI', 'boolean', this.taskConto, 'pressoBdi')],
      [this.buildInfoPanelElement('Flag Inserimento Manuale', 'boolean', this.taskConto, 'flgMan'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.taskConto, 'indicatoreResidenza')],
    ];

    if (!!this.checkTaskContoIsSubAccount(this.taskConto)) {
      const tipiSfruttamento = this.buildTipiSfruttamento();
      const tipoSfruttamentoItem =  tipiSfruttamento.find( e => e.codice == this.taskConto.subTipoSfruttAnsy);
      const tipoSfruttamento = (!!tipoSfruttamentoItem ? tipoSfruttamentoItem.descrizione : null );
      const tipoSfruttamentoOrigItem =  tipiSfruttamento.find( e => e.codice == this.taskConto.subTipoSfruttAnsyOrig);
      const tipoSfruttamentoOrig =  (!!tipoSfruttamentoOrigItem ? tipoSfruttamentoOrigItem.descrizione : null );

      data.push( [this.buildInfoPanelElement('Categoria Economica', 'string', this.taskConto, 'categoriaEconomica'), this.buildInfoPanelElement('Bic Conto DCA/CB', 'string', this.taskConto, 'subParBicDca')],
          [this.buildInfoPanelElement('Bic Party ANSY', 'string', this.taskConto, 'subBicPtyAnsy'), this.buildModel('Tipo Sfruttamento', tipoSfruttamento, tipoSfruttamentoOrig, this.taskConto)]
      );
    } else {
      data.push([this.buildInfoPanelElement('Categoria Economica', 'string', this.taskConto, 'categoriaEconomica'), {}]);
    }

    data.push(
        [this.buildInfoPanelElement('Data Apertura', 'date', this.taskConto, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura', 'date', this.taskConto, 'dataChiusura')],
        [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.taskConto, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.taskConto, 'validTo')],
        [this.buildModel('Utente Richiesta', this.taskConto.userReq, this.taskConto.utenteRichiestaOrig, this.taskConto), this.buildModel('Utente Approvatore', this.taskConto.userValidate, this.taskConto.utenteValidazioneOrig, this.taskConto)]
    );

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

    this.manageButton(this.taskConto.stato, this.taskConto.userReq, [EUserRole.ANAGRAFICHE_SPI]);
  }

  public checkTaskContoIsSubAccount(taskConto: TaskConto) {
    return taskConto.tipoConto.codice == TipoContoEnum.RTGS_SA;
  }

  getConferma(task: Task) {
    return this.taskService.confermaTaskConto(task);
  }

  getRifiuta (task: Task) {
    return this.taskService.rifiutaTaskConto(task);
  }

  getId(): number {
    return this.taskConto.id;
  }

}
