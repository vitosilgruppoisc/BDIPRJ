import { OnInit } from '@angular/core';
import {EUserRole} from '../../models';
import {SecurityService, UserService} from '../../services';
import {of} from 'rxjs';
import {SpinnerEventEnum, TipoContoEnum, TipoSfruttamentoEnum} from '../../models/enum';
import {FormatterUtils} from '../../utilities/formatterUtils';
import {RoutingService} from '../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {InfoPanelElement} from '../../models/info-panel-model';
import {get} from 'lodash';
import {FormControl, FormGroup} from '@angular/forms';
import {Conto, InserimentoContoModel, SfruttamentoModel, TipoConto} from '../../models/conto';
import {SearchModel} from "../../models/search";
import {GenericTableModel} from "../../models/generic-table-model";
import {IDatepickerModel} from "scam-bdi-uikit/lib/datepicker/datepicker-model";

export abstract class AbstractDashboardComponent implements OnInit {

    readonly NOT_DEFINED = 'N.D.';
    readonly BACK = 'back';
    readonly CONTO_INSERT_SESSION = 'CONTO_INSERT_SESSION';
    readonly CONTO_ASSOCIA_SESSION = 'CONTO_ASSOCIA_SESSION';
    readonly CONTO_ELIMINA_ASSOCIA_SESSION = 'CONTO_ELIMINA_ASSOCIA_SESSION';

    userIsSpi: boolean = false;
    userIsBil: boolean = false;
    userIsVis: boolean = false;
    userIsDet: boolean = false;
    isError: boolean = false;
    messageError: string;
    isResultOk: boolean = false;
    showSpinner$ = of(false);
    readonlyForm: boolean = false;
    backUrl: string;

    constructor(
        protected securityService: SecurityService,
        protected userService: UserService,
        protected formatterUtils: FormatterUtils,
        protected routingService: RoutingService,
        protected route: ActivatedRoute) {
    }

    ngOnInit() {
        this.checkUserSpi();
        this.checkUserDet();
        this.checkUserBil();
        this.checkUserVis();
    }

    protected checkUserSpi() {
        this.userIsSpi = this.securityService.checkPermissions([EUserRole.ANAGRAFICHE_SPI]);
    }

    protected checkUserBil() {
        this.userIsBil = this.securityService.checkPermissions([EUserRole.ANAGRAFICHE_BIL]);
    }

    protected checkUserVis() {
        this.userIsVis = this.securityService.checkPermissions([EUserRole.ANAGRAFICHE_VISUALIZZATORE]);
    }

    protected checkUserDet() {
        this.userIsDet = this.securityService.checkPermissions([EUserRole.ANAGRAFICHE_DET]);
    }

    protected onActionEvent(event: any): void {
        switch (event) {
            case SpinnerEventEnum.SHOW: {
                this.showSpinner()
                break;
            }
            case SpinnerEventEnum.HIDE: {
                this.hideSpinner();
                break;
            }
            default: {
                break;
            }
        }
    }

    protected showSpinner() {
        this.showSpinner$ = of(true);
    }

    protected hideSpinner() {
        this.showSpinner$ = of(false);
    }

    protected resetError() {
        this.isError = false;
        this.messageError = null;
    }

    protected setError(error?: any) {
        this.isError = true;
        this.messageError = 'Si è verificato un errore.';
        if (!!error && !!error.error && !!error.error.message) {
            this.messageError = error.error.message;
        }
    }

    protected buildInfoPanelElement(label: string, type: string, entity: any, field: string): InfoPanelElement {
        let value = null;

        if ( type == 'value') {
            value = entity;
        }

        if ( type == 'string') {
            value = get(entity, field);
        }

        if ( type == 'date') {
            value = this.formatterUtils.formatDate(entity, field);
        }

        if ( type == 'boolean') {
            value = this.formatterUtils.getBooleanAsString(entity, field);
        }

        value = this.manageEmpty(value);

        return <InfoPanelElement> { label: label, value: value};
    }

    protected manageEmpty (value: any): string {
        if (!(!!value) && !(typeof (value) === 'number' && value === 0)) {
            return this.NOT_DEFINED;
        }
        return value;
    }

    bicValidator (control: FormControl): {[s: string]: boolean } {
        const bicRegex = new RegExp('^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$');
        if ( !!control &&
            !!control.value &&
            (control.value.indexOf('%') === -1) &&
            !bicRegex.test(control.value)) {
            return {'syntax': true};
        }
        return null;
    }

    wildcard2Validator(control: FormControl): {[s: string]: boolean } {
        const wildcardRegex = new RegExp('^[%]{0,1}[a-zA-Z0-9]{2,}[%]{0,1}$');
        if ( !!control &&
            !!control.value &&
            (control.value.indexOf('%') !== -1) &&
            !wildcardRegex.test(control.value)) {
            return {'wildcard': true};
        }
        return null;
    }


    setSession(key: any, value: any) {
        this.clearSession(key);
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getSession(key: any): any {
        return JSON.parse(sessionStorage.getItem(key));
    }

    clearSession(key: any): any {
        sessionStorage.removeItem(key);
    }

    public isPartyActive (data): boolean {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }

    public isContoActive (data): boolean {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }

    public isEccTranscodingIngrossoActive (data): boolean {
        const validFrom = new Date(this.formatterUtils.formatDate(data, 'validFrom'));
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return ((validTo >= today) && (validFrom <= validTo));
    }

    public isEccTranscodingRetailActive (data): boolean {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }

    public checkContoIsDCA(conto: Conto) {
        return conto.tipoConto.codice == TipoContoEnum.RTGS_DCA;
    }

    public checkContoIsCB(conto: Conto) {
        return conto.tipoConto.codice == TipoContoEnum.RTGS_CB;
    }

    public checkContoIsSubAccountByTipoCod(tipo: any) {
        return tipo == TipoContoEnum.RTGS_SA;
    }

    public checkContoIsSubAccount(conto: Conto) {
        return this.checkContoIsSubAccountByTipoCod(conto.tipoConto.codice);
    }

    public buildTipoContoDCAOrCBorSubAccount(): TipoConto [] {
        const tipiConto = this.buildTipoContoDCAOrCB();
        tipiConto.push({codice: TipoContoEnum.RTGS_SA, descrizione: 'RTGS Sub-account'});
        return tipiConto;
    }

    public buildTipoContoDCAOrCB(): TipoConto [] {
        return [
            {codice: TipoContoEnum.RTGS_DCA, descrizione: 'RTGS DCA'},
            {codice: TipoContoEnum.RTGS_CB, descrizione: 'RTGS CB Account'}
        ];
    }

    public buildTipiSfruttamento() {
        return  [
            {codice: TipoSfruttamentoEnum.BICOMP, descrizione: 'BICOMP notturno'},
            {codice: TipoSfruttamentoEnum.SDD_SCT, descrizione: 'Tramitazione Step 2 SDD SCT'},
            {codice: TipoSfruttamentoEnum.SDD_B2B, descrizione: 'Tramitazione Step 2 SDD B2B'},
            {codice: TipoSfruttamentoEnum.SDD_CORE, descrizione: 'Tramitazione Step 2 SDD Core'}
        ];
    }


    protected onColToDisplayEvent(event: any, searchModel: SearchModel): void {
        searchModel.columnToDisplay = event.columnToDisplay;
    }

    protected onPaginationEvent(event: any, searchModel: SearchModel): void {
        searchModel.currentPage = event;
    }

    protected onSortEvent(event: any, searchModel: SearchModel): void {
        searchModel.sortModel = event;
    }

    protected onFilterEvent(event: any, searchModel: SearchModel): void {
        searchModel.filterModel = event;
    }

    protected manageSearchModel (model: GenericTableModel, searchModel: SearchModel, resetPage: boolean): void {
        if (!!resetPage) {
            if (!!model) {
                model.currentPage = null;
                model.columnToDisplay = null;
                model.sortModel = null;
                model.filterModel = null;
            }
        } else {
            if (!!searchModel) {
                if (!!searchModel.currentPage) {
                    model.currentPage = searchModel.currentPage;
                }
                if (!!searchModel.sortModel) {
                    model.sortModel = searchModel.sortModel;
                }
                if (!!searchModel.filterModel) {
                    model.filterModel = searchModel.filterModel;
                }
                if (!!searchModel.columnToDisplay) {
                    model.columnToDisplay = searchModel.columnToDisplay;
                }
            }
        }
    }

    protected initSearchModel(): SearchModel {
        return {
            form: null,
            currentPage: null,
            columnToDisplay: null,
            sortModel: null,
            filterModel: null
        };
    }

    protected setStepForInsertConto(model: InserimentoContoModel, currentStep: string): string [] {
        if (!!model && !!model.wizardSteps) {
            if (!model.wizardSteps.some( s => s === currentStep)) {
                model.wizardSteps.push(currentStep);
            }
        }
        return model.wizardSteps;
    }

    protected getBackUrlForInsertConto (model: InserimentoContoModel, currentStep: string) {
        let backUrl = null;

        if (currentStep === 'step1') {
            backUrl = '/anagrafiche/conti';
        } else {
            let previousStep = null;
            let index = -1;

            if (!!model && !!model.wizardSteps) {
                index = model.wizardSteps.findIndex(s => s === currentStep);
                previousStep = model.wizardSteps[index - 1];
            }

            if (index > 0) {
                backUrl = '/anagrafiche/conti/inserimento/'.concat(previousStep);
            } else {
                backUrl = '/anagrafiche/conti';
                if (currentStep === 'step2') {
                    backUrl = '/anagrafiche/parties/dettaglio';
                }
            }
        }
        return backUrl;
    }

    protected setStepForAssociaConto(model: SfruttamentoModel, currentStep: string): string [] {
        if (!!model && !!model.wizardSteps){
            if (!model.wizardSteps.some( s => s === currentStep)) {
                model.wizardSteps.push(currentStep);
            }
        }
        return model.wizardSteps;
    }

    protected getBackUrlForAssociaConto (model: SfruttamentoModel, currentStep: string) {
        let backUrl = null;

        if (currentStep === 'associa-step1') {
            backUrl = '/anagrafiche/parties/dettaglio';
        } else {
            let previousStep = null;
            let index = -1;

            if (!!model && !!model.wizardSteps) {
                index = model.wizardSteps.findIndex(s => s === currentStep);
                previousStep = model.wizardSteps[index - 1];
            }

            if (index > 0) {
                backUrl = '/anagrafiche/parties/dettaglio/sfruttamento/'.concat(previousStep);
            } else {
                backUrl = '/anagrafiche/parties/dettaglio';
            }
        }
        return backUrl;
    }
}
