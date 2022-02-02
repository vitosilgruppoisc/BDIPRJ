import {ModificaEccTranscodingRetailComponent} from "./modifica-ecc-transcoding-retail.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {BDIDatepickerModule} from "scam-bdi-uikit";
import {EUserRole} from "../../../../models";
import {RouterTestingModule} from "@angular/router/testing";
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";

describe('ModificaEccTranscodingRetailComponent', () => {
  let component: ModificaEccTranscodingRetailComponent;
  let fixture: ComponentFixture<ModificaEccTranscodingRetailComponent>;
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
      declarations: [ModificaEccTranscodingRetailComponent],
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
    let params = {idEccTransRet: 1, backUrl: 'ECC_TRANS_RET_SEARCH'};
    sessionStorage.setItem('ECC_TRANS_RET_MODIFY', JSON.stringify(params));
    fixture = TestBed.createComponent(ModificaEccTranscodingRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req1 = httpTestingController.expectOne('/eccTranscodingRetail/1');
    req1.flush({id: 1, countryCode: {codice: 'IT'}});
    const req2 = httpTestingController.expectOne('/countryCode');
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    const req1 = httpTestingController.expectOne('/eccTranscodingRetail/1');
    req1.flush({id: 1, countryCode: {codice: 'IT'}});
    const req2 = httpTestingController.expectOne('/countryCode');
    component.modifyEccTranscodingRetail();
    const req3 = httpTestingController.expectNone('/tasks/eccTranscodingRetail');
  });

  it('should save if valid', () => {
    const req1 = httpTestingController.expectOne('/eccTranscodingRetail/1');
    req1.flush({id: 1, countryCode: {codice: 'IT'}});
    const req2 = httpTestingController.expectOne('/countryCode');
    component.modificaForm.get('nsc').setValue('01000');
    component.modificaForm.get('bic').setValue('AAABBB11CCC');
    component.modificaForm.get('validFrom').setValue({year: 2021, month: 4, day: 23});
    component.modificaForm.get('validTo').setValue({year: 2021, month: 5, day: 23});
    expect(component.modificaForm.valid).toBeTruthy();
    component.modifyEccTranscodingRetail();
    const req3 = httpTestingController.expectOne('/tasks/eccTranscodingRetail');
    expect(req3.request.method).toEqual('POST');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
