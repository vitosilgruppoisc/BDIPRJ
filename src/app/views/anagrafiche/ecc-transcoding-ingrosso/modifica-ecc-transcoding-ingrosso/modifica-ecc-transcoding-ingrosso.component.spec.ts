import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEccTranscodingIngrossoComponent } from './modifica-ecc-transcoding-ingrosso.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EUserRole} from "../../../../models";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIDatepickerModule} from "scam-bdi-uikit";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {TaskService} from "../../../../services/task.service";

describe('ModificaEccTranscodingIngrossoComponent', () => {
  let component: ModificaEccTranscodingIngrossoComponent;
  let fixture: ComponentFixture<ModificaEccTranscodingIngrossoComponent>;
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
      declarations: [ModificaEccTranscodingIngrossoComponent],
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
    let params = {idEccTransIng: 1, backUrl: 'ECC_TRANS_INGR_SEARCH'};
    sessionStorage.setItem('ECC_TRANS_INGR_MODIFY', JSON.stringify(params));
    fixture = TestBed.createComponent(ModificaEccTranscodingIngrossoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('/eccTranscodingIngrosso/1');
    req.flush({id: 1});
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    const req = httpTestingController.expectOne('/eccTranscodingIngrosso/1');
    req.flush({id: 1});
    component.modifyEccTranscodingIngrosso();
    const req1 = httpTestingController.expectNone('/tasks/eccTranscodingIngrosso');
  });

  it('should save if valid', () => {
    const req = httpTestingController.expectOne('/eccTranscodingIngrosso/1');
    req.flush({id: 1});
    component.modificaForm.get('abi').setValue('01000');
    component.modificaForm.get('cab').setValue('02000');
    component.modificaForm.get('tipoConto').setValue('RTGS');
    component.modificaForm.get('bicConto').setValue('AAABBB11CCC');
    component.modificaForm.get('verso').setValue('AB');
    component.modificaForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    expect(component.modificaForm.valid).toBeTruthy();
    component.modifyEccTranscodingIngrosso();
    const req1 = httpTestingController.expectOne('/tasks/eccTranscodingIngrosso');
    expect(req1.request.method).toEqual('POST');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
