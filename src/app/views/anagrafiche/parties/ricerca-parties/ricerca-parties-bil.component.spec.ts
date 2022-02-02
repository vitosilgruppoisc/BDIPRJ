import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GepaGuiCommonModule } from '../../../../common/gepagui-common.module';
import { ConfigurationService, SecurityService, UserService } from '../../../../services';
import { FilialeService } from '../../../../services/filiale.service';
import { PartyService } from '../../../../services/party.service';
import { GenericTableModule } from '../../generic-table/generic-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EUserRole, IUser } from '../../../../models';
import { RicercaPartiesComponent } from './ricerca-parties.component';
import { BDIDatepickerModule } from 'scam-bdi-uikit';
import { BDITooltipModule } from 'scam-bdi-uikit';
import {ActionRenderModel, ButtonModel} from '../../../../models/action-render-model';

describe('RicercaPartiesComponent', () => {
  let component: RicercaPartiesComponent;
  let fixture: ComponentFixture<RicercaPartiesComponent>;
  let httpTestingController: HttpTestingController;
  let el: HTMLElement;

  const mockUserService = {
    getRoles: () =>  [EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE],
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
      declarations: [ RicercaPartiesComponent ],
      providers: [
        PartyService,
        FilialeService,
        SecurityService,
        {provide: UserService, useValue: mockUserService},
        ConfigurationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RicercaPartiesComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should not show buttons', () => {
    let model: ActionRenderModel = component.buildActionRenderModel({'id':1, 'validTo': new Date('9999-12-31')});
    expect(model.detailButton).not.toBeNull();
    expect(model.modifyButton).toBeNull();
    expect(model.deleteButton).toBeNull();
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
  });

  afterEach(() => {
		httpTestingController.verify();
	});

});
