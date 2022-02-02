import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { ConfigurationService, SecurityService, UserService } from '../../../../services';
import { ContoService } from '../../../../services/conto.service';
import { FilialeService } from '../../../../services/filiale.service';
import { PartyService } from '../../../../services/party.service';
import { GenericTableModule } from '../../generic-table/generic-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EUserRole } from '../../../../models';
import { RicercaContiComponent } from './ricerca-conti.component';
import { BDIDatepickerModule } from 'scam-bdi-uikit';
import { BDITooltipModule } from 'scam-bdi-uikit';
import { ActionRenderModel } from '../../../../models/action-render-model';

describe('RicercaContiComponent', () => {
  let component: RicercaContiComponent;
  let fixture: ComponentFixture<RicercaContiComponent>;
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
      declarations: [ RicercaContiComponent ],
      providers: [
        PartyService,
        FilialeService,
        ContoService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RicercaContiComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should not show buttons', () => {
    let model: ActionRenderModel = component.buildActionRenderModel({'id':1, 'validTo': new Date()});
    expect(model.detailButton).not.toBeNull();
    expect(model.modifyButton).toBeNull();
    expect(model.deleteButton).toBeNull();
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.expectOne('/tipiConto');
    const req3 = httpTestingController.expectOne('/tipiTargetService');
  });

  it('should show buttons', () => {
    let model: ActionRenderModel = component.buildActionRenderModel({'id':1, 'validTo': new Date('9999-12-31')});
    expect(model.detailButton).not.toBeNull();
    expect(model.modifyButton).not.toBeNull();
    expect(model.deleteButton).toBeNull();
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.expectOne('/tipiConto');
    const req3 = httpTestingController.expectOne('/tipiTargetService');
  });

  afterEach(() => {
		httpTestingController.verify();
	});

});
