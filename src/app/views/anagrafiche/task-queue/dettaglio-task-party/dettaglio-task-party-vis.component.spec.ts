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
import {StatoTaskEnum, TipoOperazioneEnum, TipoTaskEnum} from '../../../../models/enum';
import {InfoPanelModule} from '../../info-panel/info-panel.module';
import {DettaglioTaskPartyComponent} from './dettaglio-task-party.component';


describe('DettaglioTaskPartyComponent', () => {
  let component: DettaglioTaskPartyComponent;
  let fixture: ComponentFixture<DettaglioTaskPartyComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const username = 'test';
  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_VISUALIZZATORE],
    getUsername: () =>  username,
  };

  const dataParty  = {
    tipoTask: {codice: TipoTaskEnum.PARTY , descrizione: 'PARTY'},
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
    getTipoTask: () =>  of([{codice: 1 , descrizione: 'PARTY'}]),
    getOperazione: () =>  of([{codice: 1 , descrizione: 'INSERT'}]),
    getStatoTask: () =>  of([{codice: 1 , descrizione: 'DA APPROVARE'}]),
    getTaskParty: (id: string) =>  of (dataParty)
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
      declarations: [ DettaglioTaskPartyComponent ],
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
    fixture = TestBed.createComponent(DettaglioTaskPartyComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if user is requestor should show buttons rifiuta ', () => {
    component.loadSections(dataParty.id);
    expect(component.showButtonRifiuta).toBeFalse();
  });

  it('if user is requestor should not show buttons conferma ', () => {
    component.loadSections(dataParty.id);
    expect(component.showButtonConferma).toBeFalse();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
