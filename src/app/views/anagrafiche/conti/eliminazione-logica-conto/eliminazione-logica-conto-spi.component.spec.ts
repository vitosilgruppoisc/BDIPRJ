import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Party} from '../../../../models/party';
import { RouterTestingModule } from '@angular/router/testing';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { ConfigurationService, SecurityService, UserService } from '../../../../services';
import { ContoService } from '../../../../services/conto.service';
import { FilialeService } from '../../../../services/filiale.service';
import { PartyService } from '../../../../services/party.service';
import { GenericTableModule } from '../../generic-table/generic-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EUserRole, IUser } from '../../../../models';
import { EliminazioneLogicaContoComponent } from './eliminazione-logica-conto.component';
import { BDIDatepickerModule } from 'scam-bdi-uikit';
import { BDITooltipModule } from 'scam-bdi-uikit';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import {TipoFlagEnum, TipoOperazioneEnum} from '../../../../models/enum';
import { ActionRenderModel } from '../../../../models/action-render-model';

describe('EliminazioneLogicaContoComponent', () => {
  let component: EliminazioneLogicaContoComponent;
  let fixture: ComponentFixture<EliminazioneLogicaContoComponent>;
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
        GenericTableModule,
        BDITooltipModule.forRoot(),
        NgbModalModule
      ],
      declarations: [EliminazioneLogicaContoComponent],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
        PartyService,
        FilialeService,
        SecurityService,
        ContoService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    let params = {idConto:1,  backUrl: 'CONTO_DELETE'};
    sessionStorage.setItem('CONTO_DELETE', JSON.stringify(params));
    fixture = TestBed.createComponent(EliminazioneLogicaContoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.expectOne('/tipiConto');
    const req3 = httpTestingController.expectOne('/tipiTargetService');
    const req4 = httpTestingController.expectOne('/conti/1');
    req4.flush({idConto: 1,bic:'ABAVCFDRETO',targetService:'CSDY',descrizione: 'MODIFICA',pressoBdi: false,tipoConto: {codice: 'CLM_MCA'},
    bicParty: 'ABAVCFDRETO',tipoParty: 'AAA',numeroConto: '00123',mcaDefFlag: TipoFlagEnum.NO, abi: 12345,flgMan: TipoFlagEnum.NO,dataApertura: '2021-01-01',dataChiusura: '2021-04-23',dataInizioValidita:'2021-01-01'});
    expect(component).toBeTruthy();
    const req6 = httpTestingController.expectOne('/parties?search=bic==ABAVCFDRETO');
  });


  it('should save if valid', () => {

    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    const req3 = httpTestingController.expectOne('/tipiConto');
    const req4 = httpTestingController.expectOne('/tipiTargetService');
    const req5 = httpTestingController.expectOne('/conti/1');
    req5.flush({idConto: 1,bic:'ABAVCFDRETO',targetService:'CSDY',descrizione: 'MODIFICA',pressoBdi: false,tipoConto: {codice: 'CLM_MCA'},
    bicParty: 'ABAVCFDRETO',tipoParty: 'AAA',numeroConto: '00123',mcaDefFlag: TipoFlagEnum.NO, abi: 12345,flgMan: TipoFlagEnum.NO,dataApertura: '2021-01-01',dataChiusura: '2021-04-23',dataInizioValidita:'2021-01-01'});
    component.eliminazioneForm.get("dataChiusura").setValue({year: 2021, month: 4, day: 26});
    const req6 = httpTestingController.expectOne('/parties?search=bic==ABAVCFDRETO');
    const arr:  Party[]  = [{id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}, mfiCode: 'A', bic: 'ABAVCFDRETO', defaultAbi: 'AAAA', nome: 'BBB', dataApertura: '2021-01-01',
    categoriaEconomica: 12342,indicatoreResidenza:'AAA' ,dataChiusura: null,validFrom:'2021-01-01' ,validTo: '9999-12-31',tsModifica: null,utenteRichiesta:null , utenteValidazione: null}];
    req6.flush({
      totalElements: 1,
      content: arr});
    component.onSubmit();
    const req7 = httpTestingController.expectOne('/tasks/conto');
    expect(req7.request.method).toEqual('POST');
    req7.flush({idContoOrig: 1});

  });


  it('should not save if dataChiusura not valid', () => {
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    const req3 = httpTestingController.expectOne('/tipiConto');
    const req4 = httpTestingController.expectOne('/tipiTargetService');
    const req5 = httpTestingController.expectOne('/conti/1');
    req5.flush({idConto: 1,bic:'ABAVCFDRETO',targetService:'CSDY',descrizione: 'MODIFICA',pressoBdi: false,tipoConto: {codice: 'CLM_MCA'},
    bicParty: 'ABAVCFDRETO',tipoParty: 'AAA',numeroConto: '00123',mcaDefFlag: TipoFlagEnum.NO, abi: 12345,flgMan: TipoFlagEnum.NO,dataApertura: '2021-01-01',dataChiusura: '2021-04-23',dataInizioValidita:'2021-01-01'});
    component.eliminazioneForm.get("dataChiusura").setValue(null);
    const req6 = httpTestingController.expectOne('/parties?search=bic==ABAVCFDRETO');
    const arr:  Party[]  = [{id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}, mfiCode: 'A', bic: 'ABAVCFDRETO', defaultAbi: 'AAAA', nome: 'BBB', dataApertura: '2021-01-01',
    categoriaEconomica: 12342,indicatoreResidenza:'AAA' ,dataChiusura: null,validFrom:null ,validTo: '9999-12-31',tsModifica: null,utenteRichiesta:null , utenteValidazione: null}];
    req6.flush({
      totalElements: 1,
      content: arr});
    component.onSubmit();
    const req7 = httpTestingController.expectNone('/tasks/conto');

  });


  afterEach(() => {
		httpTestingController.verify();
	});

});
