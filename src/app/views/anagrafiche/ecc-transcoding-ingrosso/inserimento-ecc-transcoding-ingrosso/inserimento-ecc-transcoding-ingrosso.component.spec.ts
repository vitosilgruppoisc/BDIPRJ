import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoEccTranscodingIngrossoComponent } from './inserimento-ecc-transcoding-ingrosso.component';
import {EUserRole} from "../../../../models";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIDatepickerModule, ModalService} from "scam-bdi-uikit";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {InserimentoPartyComponent} from "../../parties/inserimento-party/inserimento-party.component";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {PartyService} from "../../../../services/party.service";
import {FilialeService} from "../../../../services/filiale.service";
import {TaskService} from "../../../../services/task.service";
import {InfostatService} from "../../../../services/infostat.service";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";

describe('InserimentoEccTranscodingIngrossoComponent', () => {
  let component: InserimentoEccTranscodingIngrossoComponent;
  let fixture: ComponentFixture<InserimentoEccTranscodingIngrossoComponent>;
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
      declarations: [InserimentoEccTranscodingIngrossoComponent],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
        FormBuilder,
        EccTranscodingIngrossoService,
        SecurityService,
        TaskService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(InserimentoEccTranscodingIngrossoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    component.inserimentoForm.get('abi').setValue('01000');
    component.inserimentoForm.get('cab').setValue('02000');
    component.inserimentoForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    component.saveEccTranscodingIngrosso();
    const req1 = httpTestingController.expectNone('/tasks/eccTranscodingIngrosso');
  });

  it('should save if valid', () => {
    component.inserimentoForm.get('abi').setValue('01000');
    component.inserimentoForm.get('cab').setValue('02000');
    component.inserimentoForm.get('tipoConto').setValue('RTGS');
    component.inserimentoForm.get('bicConto').setValue('AAABBB11CCC');
    component.inserimentoForm.get('verso').setValue('AB');
    component.inserimentoForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    expect(component.inserimentoForm.valid).toBeTruthy();
    component.saveEccTranscodingIngrosso();
    const req1 = httpTestingController.expectOne('/tasks/eccTranscodingIngrosso');
    expect(req1.request.method).toEqual('POST');
    req1.flush({idEcc: 1});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
