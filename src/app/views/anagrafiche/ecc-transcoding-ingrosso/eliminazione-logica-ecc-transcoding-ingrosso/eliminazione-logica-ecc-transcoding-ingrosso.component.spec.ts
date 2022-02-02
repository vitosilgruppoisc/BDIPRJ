import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EUserRole} from "../../../../models";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIDatepickerModule} from "scam-bdi-uikit";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {TaskService} from "../../../../services/task.service";
import {EliminazioneLogicaEccTranscodingIngrossoComponent} from "./eliminazione-logica-ecc-transcoding-ingrosso.component";

describe('EliminazioneLogicaEccTranscodingIngrossoComponent', () => {
  let component: EliminazioneLogicaEccTranscodingIngrossoComponent;
  let fixture: ComponentFixture<EliminazioneLogicaEccTranscodingIngrossoComponent>;
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
      declarations: [EliminazioneLogicaEccTranscodingIngrossoComponent],
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
    sessionStorage.setItem('ECC_TRANS_INGR_DELETE', JSON.stringify(params));
    fixture = TestBed.createComponent(EliminazioneLogicaEccTranscodingIngrossoComponent);
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
    component.eliminazioneForm.get('dataFineValidita').setValue(null);
    component.onSubmit();
    const req1 = httpTestingController.expectNone('/tasks/eccTranscodingIngrosso');
  });

  it('should save if valid', () => {
    const req = httpTestingController.expectOne('/eccTranscodingIngrosso/1');
    req.flush({id: 1});
    this.minDate = {year: 2021, month: 5, day: 23};
    component.eliminazioneForm.get('dataFineValidita').setValue({year: 2021, month: 6, day: 23});
    component.onSubmit();
    expect(component.eliminazioneForm.valid).toBeTruthy();
    const req1 = httpTestingController.expectOne('/tasks/eccTranscodingIngrosso');
    expect(req1.request.method).toEqual('POST');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
