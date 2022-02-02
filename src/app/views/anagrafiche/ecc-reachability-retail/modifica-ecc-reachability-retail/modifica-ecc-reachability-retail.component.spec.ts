import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {BDIDatepickerModule} from "scam-bdi-uikit";
import {EUserRole} from "../../../../models";
import {RouterTestingModule} from "@angular/router/testing";
import {ModificaEccReachabilityRetailComponent} from "./modifica-ecc-reachability-retail.component";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {TipoFlagEnum} from "../../../../models/enum";

describe('ModificaEccReachabilityRetailComponent', () => {
  let component: ModificaEccReachabilityRetailComponent;
  let fixture: ComponentFixture<ModificaEccReachabilityRetailComponent>;
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
      declarations: [ModificaEccReachabilityRetailComponent],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
        FormBuilder,
        EccReachabilityRetailService,
        SecurityService,
        TaskService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    let params = {idEccRaggRet: 1, backUrl: 'ECC_RAGG_RET_SEARCH'};
    sessionStorage.setItem('ECC_RAGG_RET_MODIFY', JSON.stringify(params));
    fixture = TestBed.createComponent(ModificaEccReachabilityRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req1 = httpTestingController.expectOne('/eccReachabilityRetail/1');
    req1.flush({id: 1});
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    const req1 = httpTestingController.expectOne('/eccReachabilityRetail/1');
    req1.flush({id: 1, canale: {codice: 'STEP2'}});
    component.modifyEccReachabilityRetail();
    const req3 = httpTestingController.expectNone('/tasks/eccReachabilityRetail');
  });

  it('should save if valid', () => {
    const req1 = httpTestingController.expectOne('/eccReachabilityRetail/1');
    req1.flush({id: 1, bicInput: 'AAABBB11CCC', canale: {codice: 'STEP2'}});
    component.modificaForm.get('raggiungibile').setValue(TipoFlagEnum.NO);
    component.modificaForm.get('validFrom').setValue({year: 2021, month: 4, day: 23});
    component.modificaForm.get('validTo').setValue({year: 2021, month: 5, day: 23});
    expect(component.modificaForm.valid).toBeTruthy();
    component.modifyEccReachabilityRetail();
    const req3 = httpTestingController.expectOne('/tasks/eccReachabilityRetail');
    expect(req3.request.method).toEqual('POST');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
