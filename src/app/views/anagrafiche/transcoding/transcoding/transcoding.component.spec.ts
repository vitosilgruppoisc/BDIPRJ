import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscodingComponent } from './transcoding.component';
import {RicercaEccReachabilityRetailComponent} from "../../ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EUserRole} from "../../../../models";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {GenericTableModule} from "../../generic-table/generic-table.module";
import {BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {CommonService} from "../../../../services/common.service";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {ActionRenderModel} from "../../../../models/action-render-model";
import {TranscodingService} from "../../../../services/transcoding.service";
import {InfoPanelModule} from "../../info-panel/info-panel.module";

describe('TranscodingComponent', () => {
  let component: TranscodingComponent;
  let fixture: ComponentFixture<TranscodingComponent>;
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
        InfoPanelModule,
        BDITooltipModule.forRoot(),
        HttpClientTestingModule,
        BDIDatepickerModule
      ],
      declarations: [ TranscodingComponent ],
      providers: [
        CommonService,
        TranscodingService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(TranscodingComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not search if not valid', () => {
    component.submit();
    const req = httpTestingController.expectNone('/transcoding/v1.0/public');
  });

  it('should search if valid', () => {
    component.ricercaForm.get('tipologia').setValue('IBAN');
    component.ricercaForm.get('data').setValue({year: 2021, month: 4, day: 23});
    component.ricercaForm.get('iban').setValue('IT60X0542811101000000123456')
    component.submit();
    const req = httpTestingController.expectOne('/transcoding/v1.0/public');
    expect(req.request.method).toEqual('POST');
  });
});
