import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { ConfigurationService, SecurityService, UserService } from '../../../../services';
import { FilialeService } from '../../../../services/filiale.service';
import { GenericTableModule } from '../../generic-table/generic-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EUserRole } from '../../../../models';
import {BDIDatepickerModule, ModalService} from 'scam-bdi-uikit';
import { BDITooltipModule } from 'scam-bdi-uikit';
import {RicercaTaskQueueComponent} from './ricerca-task-queue.component';
import {TaskService} from '../../../../services/task.service';
import {Observable, of} from 'rxjs';
import {GetTasksResponse, OperazioneTask, StatoTask, TipoTask} from '../../../../models/task';
import {tap} from 'rxjs/operators';
import {ActionRenderModel} from '../../../../models/action-render-model';
import {StatoTaskEnum, TipoOperazioneEnum, TipoTaskEnum} from '../../../../models/enum';


describe('RicercaTaskQueueComponent', () => {
  let component: RicercaTaskQueueComponent;
  let fixture: ComponentFixture<RicercaTaskQueueComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const username = 'test';
  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_SPI],
    getUsername: () =>  username,

  };

  const mockTaskService = {
    getTipoTask: () =>  of([{codice: 1 , descrizione: 'PARTY'}]),
    getOperazione: () =>  of([{codice: 1 , descrizione: 'INSERT'}]),
    getStatoTask: () =>  of([{codice: 1 , descrizione: 'DA APPROVARE'}]),
    getTasks: (searchString: string) =>  of({
      totalElements: 1,
      content:  [ {
        id: 1,
        tipoTask: {codice: TipoTaskEnum.PARTY , descrizione: 'PARTY'},
        operazione: {codice: 1 , descrizione: 'INSERT'},
        stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
        tsInserimento: new Date(),
        tsValidate: new Date(),
        userReq: username,
        userValidate: null,
        noteRifiuto: null,
        recordId: 'AAABBB11CCC'
      }]
    })
  };

  const dataConto = {
    id: 1,
    tipoTask: {codice: TipoTaskEnum.CONTO , descrizione: 'CONTO'},
    operazione: {codice: 1 , descrizione: TipoOperazioneEnum.INS},
    stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
    tsInserimento: new Date(),
    tsValidate: new Date(),
    userReq: username,
    userValidate: null,
    noteRifiuto: null,
    recordId: 'AAABBB11CCC'
  };

  const dataSfruttamento  = {
    id: 1,
    tipoTask: {codice: TipoTaskEnum.SFRUTTAMENTO , descrizione: 'SFRUTTAMENTO'},
    operazione: {codice: 1 , descrizione: TipoOperazioneEnum.INS},
    stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
    tsInserimento: new Date(),
    tsValidate: new Date(),
    userReq: username,
    userValidate: null,
    noteRifiuto: null,
    recordId: 'AAABBB11CCC'
  };

  const dataParty  = {
    id: 1,
    tipoTask: {codice: TipoTaskEnum.PARTY , descrizione: 'PARTY'},
    operazione: {codice: 1 , descrizione: TipoOperazioneEnum.INS},
    stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
    tsInserimento: new Date(),
    tsValidate: new Date(),
    userReq: username,
    userValidate: null,
    noteRifiuto: null,
    recordId: 'AAABBB11CCC'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        GepaGuiCommonModule,
        RouterTestingModule,
        GenericTableModule,
       BDITooltipModule.forRoot(),
        HttpClientTestingModule,
        BDIDatepickerModule
      ],
      declarations: [ RicercaTaskQueueComponent ],
      providers: [
        {provide: TaskService, useValue: mockTaskService},
        FilialeService,
        ModalService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RicercaTaskQueueComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if data is party should show buttons ', () => {
    const model: ActionRenderModel = component.buildActionRenderModel(dataParty);
    expect(model.detailButton).not.toBeNull();
  });

  it('if data is conto should show buttons ', () => {
    const model: ActionRenderModel = component.buildActionRenderModel(dataConto);
    expect(model.detailButton).not.toBeNull();
  });

  it('if data is sfruttamento should show buttons ', () => {
    const model: ActionRenderModel = component.buildActionRenderModel(dataSfruttamento);
    expect(model.detailButton).not.toBeNull();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
