import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIDatepickerModule, BDITooltipModule, ModalService} from 'scam-bdi-uikit';
import { GepaGuiCommonModule } from '../../../../../common/gepagui-common.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {ConfigurationService, SecurityService, UserService} from '../../../../../services';
import {PartyService} from '../../../../../services/party.service';
import {FilialeService} from '../../../../../services/filiale.service';
import {TaskService} from '../../../../../services/task.service';
import {EUserRole} from '../../../../../models';
import { InserimentoContoStep4Component } from './inserimento-conto-step4.component';
import { ContoService } from '../../../../../services/conto.service';
import { InfoPanelModule } from '../../../info-panel/info-panel.module';
import { TipoFlagEnum } from '../../../../../models/enum';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('InserimentoContoStep4Component', () => {
  let component: InserimentoContoStep4Component;
  let fixture: ComponentFixture<InserimentoContoStep4Component>;
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
        InfoPanelModule,
        RouterTestingModule,
        NgbModalModule,
        BDITooltipModule
      ],
      declarations: [InserimentoContoStep4Component],
      providers: [
        ConfigurationService,
        {provide: UserService, useValue: mockUserService},
        PartyService,
        FilialeService,
        SecurityService,
        TaskService,
        ContoService,
        ModalService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    let params = {idParty: 1, pressoBDI: TipoFlagEnum.SI, contoDCAPadre: 1, backUrl: '', prefixUrl: ''};
    sessionStorage.setItem('CONTO_INSERT_SESSION', JSON.stringify(params));
    fixture = TestBed.createComponent(InserimentoContoStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.match('/tipiConto'); expect(req2.length).toBe(2);
    const req3 = httpTestingController.expectOne('/tipiTargetService');
    const req4 = httpTestingController.expectOne('/parties/1');
    const req5 = httpTestingController.expectOne('/conti/1');
    expect(component).toBeTruthy();
  });

  it('should not submit if not valid', () => {
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.match('/tipiConto'); expect(req2.length).toBe(2);
    req2[0].flush({});
    req2[1].flush({});
    const req3 = httpTestingController.expectOne('/tipiTargetService');
    const req4 = httpTestingController.expectOne('/parties/1');
    req4.flush({id: 1});
    const req5 = httpTestingController.expectOne('/conti/1');
    req5.flush({id: 1});
    component.openModal();
    expect(component.confirmModalReference).toBeUndefined();
  });

  it('should submit if valid', () => {
    const req = httpTestingController.expectOne('/tipiParty');
    const req1 = httpTestingController.expectOne('/filiali');
    const req2 = httpTestingController.match('/tipiConto'); expect(req2.length).toBe(2);
    req2[0].flush({});
    req2[1].flush({});
    const req3 = httpTestingController.expectOne('/tipiTargetService');
    const req4 = httpTestingController.expectOne('/parties/1');
    req4.flush({id: 1});
    const req5 = httpTestingController.expectOne('/conti/1');
    req5.flush({id: 1});

    expect(component.inserimentoForm).toBeDefined();
    component.inserimentoForm.get('bicConto').setValue('AAAAAAAAAAA');
    component.inserimentoForm.get('tipoConto').setValue('CASH');
    component.inserimentoForm.get('descrizione').setValue('A');
    component.inserimentoForm.get('idConto').setValue(1);
    component.inserimentoForm.get('abi').setValue('12345');
    component.inserimentoForm.get('targetService').setValue('A');
    component.inserimentoForm.get('dataApertura').setValue({year: 2021, month: 4, day: 22});
    component.openModal();
    expect(component.confirmModalReference).not.toBeNull();
    component.confirm();
    const req6 = httpTestingController.expectOne('/tasks/conto');
    expect(req6.request.method).toEqual('POST');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
