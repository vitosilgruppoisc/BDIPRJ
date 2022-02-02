import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachabilityComponent } from './reachability.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EUserRole} from "../../../../models";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {GenericTableModule} from "../../generic-table/generic-table.module";
import {BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {CommonService} from "../../../../services/common.service";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {ReachabilityService} from "../../../../services/reachability.service";

describe('ReachabilityComponent', () => {
  let component: ReachabilityComponent;
  let fixture: ComponentFixture<ReachabilityComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const mockUserService = {
    getRoles: () => [EUserRole.ANAGRAFICHE_DET],
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
      declarations: [ReachabilityComponent],
      providers: [
        CommonService,
        ReachabilityService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(ReachabilityComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not search if not valid', () => {
    component.submit();
    const req = httpTestingController.expectNone('/reachability/v1.0/public');
  });

  it('should search if valid', () => {
    component.ricercaForm.get('tipologia').setValue('IBAN');
    component.ricercaForm.get('data').setValue({year: 2021, month: 4, day: 23});
    component.ricercaForm.get('iban').setValue('IT60X0542811101000000123456')
    component.submit();
    const req = httpTestingController.expectOne('/reachability/v1.0/public');
    expect(req.request.method).toEqual('POST');
  });

});

