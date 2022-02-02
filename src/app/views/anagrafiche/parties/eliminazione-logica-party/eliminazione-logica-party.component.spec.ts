import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIAlertModule, BDIDatepickerModule, ModalService} from 'scam-bdi-uikit';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {ConfigurationService, SecurityService, UserService} from '../../../../services';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {TaskService} from '../../../../services/task.service';
import {InfostatService} from '../../../../services/infostat.service';
import {EUserRole} from '../../../../models';
import { EliminazioneLogicaPartyComponent } from './eliminazione-logica-party.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

describe('EliminazioneLogicaPartyComponent', () => {
  let component: EliminazioneLogicaPartyComponent;
  let fixture: ComponentFixture<EliminazioneLogicaPartyComponent>;
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
        RouterTestingModule,
        NgbModalModule
      ],
      declarations: [EliminazioneLogicaPartyComponent],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
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
    let params = {idParty: 1, backUrl: 'PARTY_DELETE'};
    sessionStorage.setItem('PARTY_DELETE', JSON.stringify(params));
    fixture = TestBed.createComponent(EliminazioneLogicaPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('/parties/1');
    req.flush({id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}});
    expect(component).toBeTruthy();
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
  });

  it('should not submit if not valid', () => {
    const req = httpTestingController.expectOne('/parties/1');
    req.flush({id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}});
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    component.onSubmit();
    const req3 = httpTestingController.expectNone('/soggettiInfostat/A');
  });

  it('should not save if mfiCode not valid', () => {
    const req = httpTestingController.expectOne('/parties/1');
    req.flush({id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}, bic: 'ABAVCFDRETO', defaultAbi: 'AAAA', nome: 'BBB', dataApertura: '2021-01-01'});
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    component.eliminazioneForm.get("dataChiusura").setValue('2020-01-01');
    component.onSubmit();
    const req3 = httpTestingController.expectNone('/soggettiInfostat/A');
    const req4 = httpTestingController.expectNone('/tasks/party');
  });

  it('should save if valid', () => {
    const req = httpTestingController.expectOne('/parties/1');
    req.flush({id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}, mfiCode: 'A', bic: 'ABAVCFDRETO', defaultAbi: 'AAAA', nome: 'BBB', dataApertura: '2021-01-01'});
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    component.eliminazioneForm.get("dataChiusura").setValue({year: 2021, month: 4, day: 22});
    component.onSubmit();
    const req3 = httpTestingController.expectNone('/soggettiInfostat/A');
    const req4 = httpTestingController.expectOne('/tasks/party');
    expect(req4.request.method).toEqual('POST');
    req4.flush({idPartyOrig: 1});
  });


  afterEach(() => {
		httpTestingController.verify();
	});

});
