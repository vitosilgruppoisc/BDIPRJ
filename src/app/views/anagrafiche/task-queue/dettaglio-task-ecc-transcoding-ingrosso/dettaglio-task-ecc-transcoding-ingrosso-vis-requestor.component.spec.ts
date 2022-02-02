import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioTaskEccTranscodingIngrossoComponent } from './dettaglio-task-ecc-transcoding-ingrosso.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EUserRole} from "../../../../models";
import {StatoTaskEnum, TipoOperazioneEnum, TipoTaskEnum} from "../../../../models/enum";
import {of} from "rxjs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {GenericTableModule} from "../../generic-table/generic-table.module";
import {BDIDatepickerModule, BDITooltipModule, ModalService} from "scam-bdi-uikit";
import {InfoPanelModule} from "../../info-panel/info-panel.module";
import {DettaglioTaskPartyComponent} from "../dettaglio-task-party/dettaglio-task-party.component";
import {TaskService} from "../../../../services/task.service";
import {FilialeService} from "../../../../services/filiale.service";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {DettaglioEccTranscodingIngrossoComponent} from "../../ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component";

describe('DettaglioTaskEccTranscodingIngrossoComponent', () => {
  let component: DettaglioTaskEccTranscodingIngrossoComponent;
  let fixture: ComponentFixture<DettaglioTaskEccTranscodingIngrossoComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const username = 'test';
  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_VISUALIZZATORE],
    getUsername: () =>  username,
  };

  const dataEccTrIn  = {
    tipoTask: {codice: TipoTaskEnum.ECC_TRANSCODIFICA_INGROSSO , descrizione: 'ECC_TRANSCODIFICA_INGROSSO'},
    id: '1',
    operazione: {codice: 1 , descrizione: TipoOperazioneEnum.INS},
    stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
    tsInserimento: new Date(),
    tsValidate: new Date(),
    userReq: username,
    userValidate: null,
    noteRifiuto: null,
    recordId: 'AAABBB11CCC'
  };

  const mockTaskService = {
    getTipoTask: () =>  of([{codice: 1 , descrizione: 'ECC_TRANSCODIFICA_INGROSSO'}]),
    getOperazione: () =>  of([{codice: 1 , descrizione: 'INSERT'}]),
    getStatoTask: () =>  of([{codice: 1 , descrizione: 'DA APPROVARE'}]),
    getTaskEccTranscodingIngrosso: (id: string) =>  of (dataEccTrIn)
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
      declarations: [ DettaglioTaskEccTranscodingIngrossoComponent ],
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
    fixture = TestBed.createComponent(DettaglioTaskEccTranscodingIngrossoComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if user is requestor should not show buttons rifiuta ', () => {
    component.loadSections(dataEccTrIn.id);
    expect(component.showButtonRifiuta).toBeFalse();
  });

  it('if user is requestor should not show buttons conferma ', () => {
    component.loadSections(dataEccTrIn.id);
    expect(component.showButtonConferma).toBeFalse();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
