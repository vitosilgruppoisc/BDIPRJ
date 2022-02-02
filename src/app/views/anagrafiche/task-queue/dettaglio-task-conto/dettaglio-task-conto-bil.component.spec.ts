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
import {TaskService} from '../../../../services/task.service';
import {Observable, of} from 'rxjs';
import {StatoTaskEnum, TipoContoEnum, TipoOperazioneEnum, TipoTaskEnum} from '../../../../models/enum';
import {DettaglioTaskContoComponent} from './dettaglio-task-conto.component';
import {InfoPanelModule} from '../../info-panel/info-panel.module';


describe('DettaglioTaskContoComponent', () => {
  let component: DettaglioTaskContoComponent;
  let fixture: ComponentFixture<DettaglioTaskContoComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const username = 'test';
  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_BIL],
    getUsername: () =>  username,
  };

  const dataConto = {
    id: '1',
    tipoTask: {codice: TipoTaskEnum.CONTO , descrizione: 'CONTO'},
    operazione: {codice: 1 , descrizione: TipoOperazioneEnum.INS},
    stato: {codice: StatoTaskEnum.CREATED , descrizione: 'DA APPROVARE'},
    tsInserimento: new Date(),
    tsValidate: new Date(),
    userReq: username,
    userValidate: null,
    noteRifiuto: null,
    recordId: 'AAABBB11CCC',
    tipoConto: {codice: TipoContoEnum.RTGS_DCA}
  };

  const mockTaskService = {
    getTipoTask: () =>  of([{codice: 1 , descrizione: 'PARTY'}]),
    getOperazione: () =>  of([{codice: 1 , descrizione: 'INSERT'}]),
    getStatoTask: () =>  of([{codice: 1 , descrizione: 'DA APPROVARE'}]),
    getTaskConto: (id: string) =>  of (dataConto)
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
      declarations: [ DettaglioTaskContoComponent ],
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
    fixture = TestBed.createComponent(DettaglioTaskContoComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if user is requestor should not show buttons rifiuta ', () => {
    component.loadSections(dataConto.id);
    expect(component.showButtonRifiuta).toBeFalse();
  });

  it('if user is requestor should not show buttons conferma ', () => {
    component.loadSections(dataConto.id);
    expect(component.showButtonConferma).toBeFalse();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});