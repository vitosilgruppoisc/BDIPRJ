import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {BDIDatepickerModule, ModalService} from 'scam-bdi-uikit';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { RouterTestingModule } from '@angular/router/testing';
import { InserimentoPartyComponent } from './inserimento-party.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {ConfigurationService, SecurityService, UserService} from '../../../../services';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {TaskService} from '../../../../services/task.service';
import {Task, TaskParty} from '../../../../models/task';
import {InfostatService} from '../../../../services/infostat.service';
import {EUserRole} from '../../../../models';

describe('InserimentoPartyComponent', () => {
  let component: InserimentoPartyComponent;
  let fixture: ComponentFixture<InserimentoPartyComponent>;
  let httpTestingController: HttpTestingController;

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_SPI],
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BDIDatepickerModule,
        GepaGuiCommonModule,
        HttpClientTestingModule,
        RouterTestingModule],
      declarations: [InserimentoPartyComponent],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
        FormBuilder,
        PartyService,
        FilialeService,
        SecurityService,
        TaskService,
        InfostatService,
        ModalService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(InserimentoPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
  });


  it('should save if valid', () => {
    component.inserimentoForm.get('bic').setValue('ABAVCFDRETO');
    component.inserimentoForm.get('tipo').setValue('CSDY');
    component.inserimentoForm.get('nome').setValue('BBB');
    component.inserimentoForm.get('abi').setValue('12345'); 
    component.inserimentoForm.get('filiale').setValue('120'); 
    component.inserimentoForm.get('mfiCode').setValue('IT0000101234440CANCELLA'); 
    component.inserimentoForm.get('dataApertura').setValue({year: 2021, month: 4, day: 23});  
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    component.onSubmit();
    const req3 = httpTestingController.expectOne('/soggettiInfostat/IT0000101234440CANCELLA');
    req3.flush({});
    const req4 = httpTestingController.expectOne('/tasks/party');
    expect(req4.request.method).toEqual('POST');
    req4.flush({idPartyOrig: 1});
  });


  it('should not submit if not valid', () => {
    component.inserimentoForm.get('bic').setValue('ABAVCFDRETO');
    component.inserimentoForm.get('tipo').setValue('CSDY');
    component.inserimentoForm.get('nome').setValue('BBB');
    component.inserimentoForm.get('abi').setValue('12345'); 
    component.inserimentoForm.get('filiale').setValue('120'); 
    component.inserimentoForm.get('dataApertura').setValue({year: 2021, month: 4, day: 23});  
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    component.onSubmit();
    const req3 = httpTestingController.expectNone('/soggettiInfostat/A');
    const req4 = httpTestingController.expectNone('/tasks/party');
  });

  it('should not submit if bic not valid', () => {
    component.inserimentoForm.get('bic').setValue('A');
    component.inserimentoForm.get('tipo').setValue('CSDY');
    component.inserimentoForm.get('nome').setValue('BBB');
    component.inserimentoForm.get('abi').setValue('12345'); 
    component.inserimentoForm.get('filiale').setValue('120'); 
    component.inserimentoForm.get('mfiCode').setValue('IT0000101234440CANCELLA'); 
    component.inserimentoForm.get('dataApertura').setValue({year: 2021, month: 4, day: 23});  
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    component.onSubmit();
    const req3 = httpTestingController.expectNone('/soggettiInfostat/IT0000101234440CANCELLA');
    const req4 = httpTestingController.expectNone('/tasks/party');
  });


  afterEach(() => {
		httpTestingController.verify();
	});

});
