import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {GenericTableModule} from "../../generic-table/generic-table.module";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {DettaglioTaskEccTranscodingRetailComponent} from "./dettaglio-task-ecc-transcoding-retail.component";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {BDIDatepickerModule, BDITooltipModule, ModalService} from "scam-bdi-uikit";
import {StatoTaskEnum, TipoOperazioneEnum, TipoTaskEnum} from "../../../../models/enum";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EUserRole} from "../../../../models";
import {RouterTestingModule} from "@angular/router/testing";
import {InfoPanelModule} from "../../info-panel/info-panel.module";
import {of} from "rxjs";

describe('DettaglioTaskEccTranscodingRetailComponent', () => {
  let component: DettaglioTaskEccTranscodingRetailComponent;
  let fixture: ComponentFixture<DettaglioTaskEccTranscodingRetailComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const username = 'test';
  const requestor = 'requestor';

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_DET],
    getUsername: () =>  username,
  };

  const dataEccTrIn  = {
    tipoTask: {codice: TipoTaskEnum.ECC_TRANSCODIFICA_DETTAGLIO , descrizione: 'ECC_TRANSCODIFICA_DETTAGLIO'},
    id: '1',
    operazione: {codice: 1 , descrizione: TipoOperazioneEnum.INS},
    stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
    tsInserimento: new Date(),
    tsValidate: new Date(),
    userReq: requestor,
    userValidate: null,
    noteRifiuto: null,
    recordId: 'AAABBB11CCC'
  };

  const mockTaskService = {
    getTipoTask: () =>  of([{codice: 1 , descrizione: 'ECC_TRANSCODIFICA_DETTAGLIO'}]),
    getOperazione: () =>  of([{codice: 1 , descrizione: 'INSERT'}]),
    getStatoTask: () =>  of([{codice: 1 , descrizione: 'DA APPROVARE'}]),
    getTaskEccTranscodingRetail: (id: string) =>  of (dataEccTrIn)
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
        BDIDatepickerModule,
        InfoPanelModule,
      ],
      declarations: [ DettaglioTaskEccTranscodingRetailComponent ],
      providers: [
        {provide: TaskService, useValue: mockTaskService},
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
    fixture = TestBed.createComponent(DettaglioTaskEccTranscodingRetailComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if user is requestor should show buttons rifiuta ', () => {
    component.loadSections(dataEccTrIn.id);
    expect(component.showButtonRifiuta).toBeTrue();
  });

  it('if user is requestor should show buttons conferma ', () => {
    component.loadSections(dataEccTrIn.id);
    expect(component.showButtonConferma).toBeTrue();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
