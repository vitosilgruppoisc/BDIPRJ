import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EUserRole} from "../../../../models";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIDatepickerModule} from "scam-bdi-uikit";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {InserimentoEccTranscodingRetailComponent} from "./inserimento-ecc-transcoding-retail.component";
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";

describe('InserimentoEccTranscodingRetailComponent', () => {
  let component: InserimentoEccTranscodingRetailComponent;
  let fixture: ComponentFixture<InserimentoEccTranscodingRetailComponent>;
  let httpTestingController: HttpTestingController;

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_DET],
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
      declarations: [InserimentoEccTranscodingRetailComponent],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
        FormBuilder,
        EccTranscodingRetailService,
        SecurityService,
        TaskService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(InserimentoEccTranscodingRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    const req1 = httpTestingController.expectOne('/countryCode');
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    component.inserimentoForm.get('nsc').setValue('01000*');
    component.inserimentoForm.get('countryCode').setValue('FR');
    component.inserimentoForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    const req1 = httpTestingController.expectOne('/countryCode');
    component.saveEccTranscodingRetail();
    const req2 = httpTestingController.expectNone('/tasks/eccTranscodingRetail');
  });

  it('should save if valid', () => {
    component.inserimentoForm.get('nsc').setValue('01000*');
    component.inserimentoForm.get('countryCode').setValue('IT');
    component.inserimentoForm.get('bic').setValue('AAABBB11CCC');
    component.inserimentoForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    component.inserimentoForm.get('dataFineValidita').setValue({year: 2021, month: 4, day: 25});
    const req1 = httpTestingController.expectOne('/countryCode');

    expect(component.inserimentoForm.valid).toBeTruthy();
    component.saveEccTranscodingRetail();
    const req2 = httpTestingController.expectOne('/tasks/eccTranscodingRetail');
    expect(req2.request.method).toEqual('POST');
    req2.flush({idEcc: 1});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
