import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GetPartiesResponse, Party, TipoParty} from '../../../../models/party';
import {Observable, of} from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { ConfigurationService, SecurityService, UserService } from '../../../../services';
import { ContoService } from '../../../../services/conto.service';
import { FilialeService } from '../../../../services/filiale.service';
import { PartyService } from '../../../../services/party.service';
import { GenericTableModule } from '../../generic-table/generic-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EUserRole, IUser } from '../../../../models';
import { ModificaContoComponent } from './modifica-conto.component';
import { BDIDatepickerModule } from 'scam-bdi-uikit';
import { BDITooltipModule } from 'scam-bdi-uikit';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import {TipoFlagEnum, TipoOperazioneEnum} from '../../../../models/enum';

describe('ModificaContoComponent', () => {
  let component: ModificaContoComponent;
  let fixture: ComponentFixture<ModificaContoComponent>;
  let httpTestingController: HttpTestingController;

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_BIL],
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
      declarations: [ModificaContoComponent],
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
    let params = {idConto:1,  backUrl: 'CONTO_MODIFY'};
    sessionStorage.setItem('CONTO_MODIFY', JSON.stringify(params));
    fixture = TestBed.createComponent(ModificaContoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.expectOne('/tipiConto');
    const req3 = httpTestingController.expectOne('/tipiTargetService');
    const req4 = httpTestingController.expectOne('/conti/1');
    expect(component).toBeTruthy();
  });

  it('should save if valid', () => {
    const req = httpTestingController.expectOne('/conti/1');
    req.flush({idConto: 1,bic:'ABAVCFDRETO',targetService:'CSDY',descrizione: 'MODIFICA',pressoBdi: false,tipoConto: {codice: 'CLM_MCA'},categoriaEconomica: 12342,
    indicatoreResidenza:'AAA',bicParty: 'ABAVCFDRETO',tipoParty: 'AAA',numeroConto: '00123',mcaDefFlag: TipoFlagEnum.NO, abi: 12345,flgMan: TipoFlagEnum.SI,dataApertura: '2021-01-01',idContoOrig: '1', categoriaEconomicaToEdit: true,indicatoreResidenzaToEdit: true});
    const req1 = httpTestingController.expectOne('/tipiParty');
    const req2 = httpTestingController.expectOne('/filiali');
    const req3 = httpTestingController.expectOne('/tipiConto');
    const req4 = httpTestingController.expectOne('/tipiTargetService');
    component.modificaForm.get('checkedflgMan').setValue(true);
    component.modificaForm.get("dataChiusura").setValue({year: 2021, month: 4, day: 22});
    component.onSubmit();
    const req5 = httpTestingController.expectOne('/tasks/conto');
    expect(req5.request.method).toEqual('POST');
    req5.flush({idContoOrig: 1});
    const req5bis = httpTestingController.expectOne('/conti/1');
    expect(req5bis.request.method).toEqual('GET');
    req5bis.flush({idConto: 1,bic:'ABAVCFDRETO',targetService:'CSDY',descrizione: 'MODIFICA',pressoBdi: false,tipoConto: {codice: 'CLM_MCA'},categoriaEconomica: 12342, indicatoreResidenza:'AAA',bicParty: 'ABAVCFDRETO',tipoParty: 'AAA',numeroConto: '00123',mcaDefFlag: TipoFlagEnum.NO, abi: 12345,flgMan: TipoFlagEnum.SI,dataApertura: '2021-01-01',idContoOrig: '1', categoriaEconomicaToEdit: true,indicatoreResidenzaToEdit: true});
    const req6 = httpTestingController.expectOne('/parties?search=bic==ABAVCFDRETO');
    const arr:  Party[]  = [{id: 1, tipoParty: {codice: '1'}, filialeRiferimento: {codice: '1'}, mfiCode: 'A', bic: 'ABAVCFDRETO', defaultAbi: 'AAAA', nome: 'BBB', dataApertura: '2021-01-01',
    categoriaEconomica: 12342,indicatoreResidenza:'AAA' ,dataChiusura: null,validFrom:null ,validTo: '9999-12-31',tsModifica: null,utenteRichiesta:null , utenteValidazione: null}];
    req6.flush({
      totalElements: 1,
      content: arr});

  });


  afterEach(() => {
		httpTestingController.verify();
	});

});
