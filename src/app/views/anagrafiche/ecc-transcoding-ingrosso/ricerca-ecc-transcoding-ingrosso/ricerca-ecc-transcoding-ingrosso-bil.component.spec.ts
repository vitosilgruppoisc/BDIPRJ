import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaEccTranscodingIngrossoComponent } from './ricerca-ecc-transcoding-ingrosso.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EUserRole} from "../../../../models";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GepaGuiCommonModule} from "../../../../common/gepagui-common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {GenericTableModule} from "../../generic-table/generic-table.module";
import {BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {ConfigurationService, SecurityService, UserService} from "../../../../services";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {ActionRenderModel} from "../../../../models/action-render-model";

describe('RicercaEccTranscodingIngrossoComponent', () => {
  let component: RicercaEccTranscodingIngrossoComponent;
  let fixture: ComponentFixture<RicercaEccTranscodingIngrossoComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_BIL],
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
      declarations: [ RicercaEccTranscodingIngrossoComponent ],
      providers: [
        EccTranscodingIngrossoService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RicercaEccTranscodingIngrossoComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show buttons', () => {
    let model: ActionRenderModel = component.buildActionRenderModel({'id':1, 'validTo': new Date('9999-12-31')});
    expect(model.detailButton).not.toBeNull();
    expect(model.modifyButton).toBeNull();
    expect(model.deleteButton).toBeNull();
  });
});
