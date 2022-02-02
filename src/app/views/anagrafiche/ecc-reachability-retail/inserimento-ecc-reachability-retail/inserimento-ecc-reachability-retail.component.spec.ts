import {InserimentoEccReachabilityRetailComponent} from "./inserimento-ecc-reachability-retail.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {TaskService} from "../../../../services/task.service";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {BDIDatepickerModule} from "scam-bdi-uikit";
import {EUserRole} from "../../../../models";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {RouterTestingModule} from "@angular/router/testing";
import {TipoFlagEnum} from "../../../../models/enum";


describe('InserimentoEccReachabilityRetailComponent', () => {
  let component: InserimentoEccReachabilityRetailComponent;
  let fixture: ComponentFixture<InserimentoEccReachabilityRetailComponent>;
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
      declarations: [InserimentoEccReachabilityRetailComponent],
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
    fixture = TestBed.createComponent(InserimentoEccReachabilityRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    component.inserimentoForm.get('bicInput').setValue('AAABBB01*');
    component.inserimentoForm.get('canale').setValue('STEP2');
    component.inserimentoForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    component.saveEccReachabilityRetail();
    const req2 = httpTestingController.expectNone('/tasks/eccReachabilityRetail');
  });

  it('should save if valid', () => {
    component.inserimentoForm.get('bicInput').setValue('AAABBB01*');
    component.inserimentoForm.get('canale').setValue('STEP2');
    component.inserimentoForm.get('raggiungibile').setValue(TipoFlagEnum.NO);
    component.inserimentoForm.get('dataInizioValidita').setValue({year: 2021, month: 4, day: 23});
    component.inserimentoForm.get('dataFineValidita').setValue({year: 2021, month: 4, day: 25});

    expect(component.inserimentoForm.valid).toBeTruthy();
    component.saveEccReachabilityRetail();
    const req2 = httpTestingController.expectOne('/tasks/eccReachabilityRetail');
    expect(req2.request.method).toEqual('POST');
    req2.flush({idEcc: 1});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
