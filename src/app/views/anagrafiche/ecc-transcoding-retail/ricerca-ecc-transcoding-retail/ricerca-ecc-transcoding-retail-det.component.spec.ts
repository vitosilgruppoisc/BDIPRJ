import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {GenericTableModule} from "../../generic-table/generic-table.module";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ActionRenderModel} from "../../../../models/action-render-model";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {CommonService} from "../../../../services/common.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";
import {EUserRole} from "../../../../models";
import {RicercaEccTranscodingRetailComponent} from "./ricerca-ecc-transcoding-retail.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('RicercaEccTranscodingRetailComponent', () => {
  let component: RicercaEccTranscodingRetailComponent;
  let fixture: ComponentFixture<RicercaEccTranscodingRetailComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_DET],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        GepaGuiCommonModule,
        RouterTestingModule,
        GenericTableModule,
        BDITooltipModule.forRoot(),
        HttpClientTestingModule,
        BDIDatepickerModule
      ],
      declarations: [ RicercaEccTranscodingRetailComponent ],
      providers: [
        CommonService,
        EccTranscodingRetailService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RicercaEccTranscodingRetailComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not search if not valid', () => {
    component.bic.setValue('A');
    component.submit(el, true);
    const req = httpTestingController.expectNone('/eccTranscodingRetail');
  });

  it('should search if valid', () => {
    component.submit(el, true);
    const req = httpTestingController.expectOne('/eccTranscodingRetail?');
    expect(req.request.method).toEqual('GET');
  });

  it('should show buttons', () => {
    let model: ActionRenderModel = component.buildActionRenderModel({'id':1, 'validTo': new Date('9999-12-31')});
    expect(model.detailButton).not.toBeNull();
    expect(model.modifyButton).not.toBeNull();
  });
});
