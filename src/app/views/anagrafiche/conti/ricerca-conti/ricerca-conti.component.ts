import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {GenericTableModel} from '../../../../models/generic-table-model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Utils} from '../../../../utilities/util';
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {AbstractContiComponent} from '../abstract-conti.component';
import {ContoService} from '../../../../services/conto.service';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import {ActionRenderModel, ButtonModel} from '../../../../models/action-render-model';
import {catchError, filter, map, pairwise, switchMap, take, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {RoutingService} from '../../../../services/routing.service';
import {get} from 'lodash';
import {dateValidator} from "../../../../validators/date-validator";
import {SearchModel} from "../../../../models/search";

@Component({
    selector: 'app-ricerca-conti',
    templateUrl: './ricerca-conti.component.html',
    styleUrls: ['./ricerca-conti.component.scss']
})
export class RicercaContiComponent extends  AbstractContiComponent implements OnInit {

    contoModel: GenericTableModel;
    showTable = false;
    ricercaForm: FormGroup;
    util: Utils ;
    urlToManage: any [];

    constructor(
        protected router: Router,
        protected partyService: PartyService,
        protected filialeService: FilialeService,
        protected contoService: ContoService,
        protected securityService: SecurityService,
        protected userService: UserService,
        protected filterUtils: FilterUtils,
        protected formatterUtils: FormatterUtils,
        protected formBuilder: FormBuilder,
        protected rSQLUtils: RSQLUtils,
        protected utils: Utils,
        protected routingService: RoutingService,
        protected route: ActivatedRoute
    ) {
        super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
        this.util = utils;
    }

    ngOnInit() {
        super.ngOnInit();
        this.buildForm();
        this.buildModel();
        this.manageNavigation();
    }

    protected manageNavigation() {

        /*
        this.urlToManage = [
            {value: this.routingService.getRouteByKey(this.routingService.CONTO_DETAIL)},
            {value: this.routingService.getRouteByKey(this.routingService.CONTO_MODIFY)},
            {value: this.routingService.getRouteByKey(this.routingService.CONTO_DELETE)}];
        this.routingService.getPreviousUrl().pipe(
            tap (previousUrl => {
                console.log('PreviousUrl' + previousUrl);
                if (!!this.contoService.searchModel && this.urlToManage.some( u => u.value === previousUrl)) {
                    if (!!this.contoService.searchModel && this.contoService.searchModel.form) {
                        this.ricercaForm.setValue(this.contoService.searchModel.form);
                    }
                    this.submit(null, false);
                } else {
                    this.contoService.searchModel = this.initSearchModel();
                }
            })
        ).subscribe();
        */

        this.route.queryParams.subscribe(params => {
            if (!!params && !!get(params, this.BACK) && !!this.getSearcModel() ) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            } else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }

    protected buildForm() {
        this.ricercaForm = this.formBuilder.group({
            bicParty:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipoParty: new FormControl(null,   []),
            nomeParty: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            bicConto:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            targetService: new FormControl(null,   []),
            idConto: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            abi: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            tipoConto: new FormControl(null,   []),
            defaultMCA: new FormControl(null,   []),
            flagPressoBDI: new FormControl(null,   []),
            flagInserimentoManuale: new FormControl(null,   []),
            indResidenza: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            catEconomica: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            filiale: new FormControl(null,   []),
            dataAperturaDa: new FormControl(null, []   ),
            dataAperturaA: new FormControl(null, []   ),
            dataChiusuraDa: new FormControl(null, []   ),
            dataChiusuraA: new FormControl(null, []   ),
            dataInizioValiditaDa: new FormControl(null, []   ),
            dataInizioValiditaA: new FormControl(null, []   ),
            dataFineValiditaDa: new FormControl(null, []   ),
            dataFineValiditaA: new FormControl(null, []   ),
            utenteInserimento: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
        }, { validator: dateValidator( [
                {field1: 'dataAperturaDa', field2: 'dataAperturaA'},
                {field1: 'dataChiusuraDa', field2: 'dataChiusuraA'},
                {field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA'},
                {field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA'}
            ]) });
    }

    get bicParty() { return this.ricercaForm.get('bicParty'); }
    get tipoParty() { return this.ricercaForm.get('tipoParty'); }
    get nomeParty() { return this.ricercaForm.get('nomeParty'); }
    get bicConto() { return this.ricercaForm.get('bicConto'); }
    get targetService() { return this.ricercaForm.get('targetService'); }
    get idConto() { return this.ricercaForm.get('idConto'); }
    get abi() { return this.ricercaForm.get('abi'); }
    get tipoConto() { return this.ricercaForm.get('tipoConto'); }
    get defaultMCA() { return this.ricercaForm.get('defaultMCA'); }
    get flagPressoBDI() { return this.ricercaForm.get('flagPressoBDI'); }
    get flagInserimentoManuale() { return this.ricercaForm.get('flagInserimentoManuale'); }
    get indResidenza() { return this.ricercaForm.get('indResidenza'); }
    get catEconomica() { return this.ricercaForm.get('catEconomica'); }
    get filiale() { return this.ricercaForm.get('filiale'); }
    get dataAperturaDa() { return this.ricercaForm.get('dataAperturaDa'); }
    get dataAperturaA() { return this.ricercaForm.get('dataAperturaA'); }
    get dataChiusuraDa() { return this.ricercaForm.get('dataChiusuraDa'); }
    get dataChiusuraA() { return this.ricercaForm.get('dataChiusuraA'); }
    get dataInizioValiditaDa() { return this.ricercaForm.get('dataInizioValiditaDa'); }
    get dataInizioValiditaA() { return this.ricercaForm.get('dataInizioValiditaA'); }
    get dataFineValiditaDa() { return this.ricercaForm.get('dataFineValiditaDa'); }
    get dataFineValiditaA() { return this.ricercaForm.get('dataFineValiditaA'); }
    get utenteInserimento() { return this.ricercaForm.get('utenteInserimento'); }
    get utenteApprovatore() { return this.ricercaForm.get('utenteApprovatore'); }

    reset( field) {
        this.ricercaForm.get(field).setValue(null);
    }

    buildModel() {
        this.contoModel = {
            domLayout: 'autoHeight',
            gridOptions: {
                rowHeight: 30,
                paginationPageSize: 10,
                defaultColDef: {
                    sortable: true
                },
                context: {
                    componentParent: this
                },
                onGridReady: () => this.initializeGrid()
            },
            rowData: [],
            pagination: true,
            columnsFitAvailable: true,
            columnDefs: this.buildColumnDef(),
            enableCsvExport: true,
            enablePdfExport: true,
            enableColumnSelection: true,
        };
    }

    protected initializeGrid(): void {
        this.contoModel.gridOptions.api.sizeColumnsToFit();
        this.contoModel.gridOptions.onGridSizeChanged = evt =>  this.contoModel.gridOptions.api ?  this.contoModel.gridOptions.api.sizeColumnsToFit() : null;
    }

    protected buildColumnDef() {
        let order = 0;
        return  [
            {colId: ('id_' + order++), headerName: 'BIC CONTO',                 field: 'bic',                      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'ACCOUNT ID',                field: 'numeroConto',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'TARGET SERVICE',            field: 'targetService',            filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'TIPO CONTO',                field: 'tipoConto.descrizione',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'BIC PARTY',                 field: 'bicParty',                 filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'NOME PARTY',                field: 'nomeParty',                filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DEFAULT MCA',               field: 'mcaDefFlag',               filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.getBooleanAsString(data.data, 'mcaDefFlag'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'PRESSO BDI',                field: 'pressoBdi',                filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.getBooleanAsString(data.data, 'pressoBdi'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'FLAG INSERIMENTO MANUALE',  field: 'flgMan',                   filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.getBooleanAsString(data.data, 'flgMan'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA APERTURA',             field: 'dataApertura',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA CHIUSURA',             field: 'dataChiusura',             filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',         field: 'validFrom',                filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',           field: 'validTo',                  filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'AZIONI',                    field: '',                         resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
        ];
    }

    public buildActionRenderModel(data): ActionRenderModel {

        let detailButton =  null;

        if (this.userIsSpi || this.userIsBil || this.userIsVis) {
            detailButton = <ButtonModel>{
                label: 'Visualizza dettaglio Conto '.concat(data.numeroConto),
                routerLink: '/anagrafiche/conti/dettaglio',
                params: {idConto: data.id, backUrl: this.routingService.CONTI_SEARCH},
                enabled: true,
                sessionKey: this.routingService.CONTO_DETAIL
            };
        }

        let modifyButton =  null;
        let deleteButton =  null;

        if (this.userIsBil && this.isContoActive(data)) {
            modifyButton = <ButtonModel> {
                label: 'Modifica Conto '.concat(data.bic),
                routerLink: '/anagrafiche/conti/modifica',
                params: {idConto: data.id, backUrl: this.routingService.CONTI_SEARCH},
                enabled: true,
                sessionKey : this.routingService.CONTO_MODIFY
            };
        }

        if (this.userIsSpi && this.isContoActive(data)) {
            modifyButton = <ButtonModel> {
                label: 'Modifica Conto '.concat(data.bic),
                routerLink: '/anagrafiche/conti/modifica',
                params: {idConto: data.id, backUrl: this.routingService.CONTI_SEARCH},
                enabled: true,
                sessionKey : this.routingService.CONTO_MODIFY
            };
            deleteButton = <ButtonModel> {
                label: 'Elimina Conto '.concat(data.bic),
                routerLink: '/anagrafiche/conti/eliminazione-logica',
                params: {idConto: data.id, backUrl: this.routingService.CONTI_SEARCH},
                enabled: true,
                sessionKey : this.routingService.CONTO_DELETE
            };
        }

        return <ActionRenderModel> {
            detailButton: detailButton,
            modifyButton: modifyButton,
            deleteButton: deleteButton
        };
    }

    submit(targetEl: HTMLElement, resetPage: boolean) {

        this.showTable = false;
        this.resetError();
        this.contoModel.rowData = [];
        this.contoModel.enableMessageOnSizeResultLimit = false;

        this.manageSearchModel( this.contoModel, this.getSearcModel(), resetPage);

        if (!!this.ricercaForm.valid) {
            this.showSpinner();

            if (!this.getSearcModel()) {
                this.setSearcModel(this.initSearchModel());
            }
            this.getSearcModel().form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();

            this.contoService.getConti(searchString).pipe(

                tap( res => {
                    this.contoModel.enableMessageEmptyResult = true;
                    if (!!res && res.content.length > 0 ) {
                        this.contoModel.enableMessageEmptyResult = false;
                        this.contoModel.rowData = res.content;
                        this.contoModel.enableMessageOnSizeResultLimit = false;
                        this.contoModel.searchRecordLenght = res.content.length;
                        if ( res.totalElements > res.content.length) {
                            this.contoModel.enableMessageOnSizeResultLimit = true;
                            this.contoModel.searchRecordLenght = res.totalElements;
                        }
                    }
                }),

                tap ( res => {
                    this.showTable = true;
                    if (!!targetEl) {
                        this.scrollToResult(targetEl);
                    }
                    this.hideSpinner();
                }),

                catchError((error) => {
                    console.log ('Error - submit', error);
                    this.showTable = false;
                    this.setError(error);
                    this.hideSpinner();
                    return of(null);
                })
            ).subscribe();
        }
    }

    protected scrollToResult(targetEl: HTMLElement) {
        setTimeout(function() {
            console.log('Scrolling to table');
            targetEl.scrollIntoView({behavior: 'smooth'});
        }, 500);
    }

    protected buildRsqlSearchString() {

        const rSQLArray: string [] = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicParty.value, 'bicParty'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoParty.value, 'tipoParty'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.nomeParty.value, 'nomeParty '));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicConto.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.targetService.value, 'targetService'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.idConto.value, 'numeroConto'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.abi.value, 'abi'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.tipoConto.value, 'tipoConto'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.formatterUtils.getStringAsBoolean(this.defaultMCA.value), 'mcaDefFlag'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.formatterUtils.getStringAsBoolean(this.flagPressoBDI.value), 'pressoBdi'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect( this.formatterUtils.getStringAsBoolean(this.flagInserimentoManuale.value), 'flgMan'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.filiale.value, 'filialeRiferimento'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.indResidenza.value, 'effIndicatoreRes'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.catEconomica.value, 'effCatEconomica'));
        rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
        rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataChiusuraDa.value), this.formatterUtils.dateToString(this.dataChiusuraA.value), 'dataChiusura'));
        rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
        rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));

        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }

    goToInsertConto() {
        this.setSession(this.CONTO_INSERT_SESSION, {wizardSteps: [], prefixUrl: '/anagrafiche/conti/inserimento/'});
        this.router.navigate([this.routingService.getRouteByKey(this.routingService.CONTO_INSERT_STEP1)], {});
    }

    protected getSearcModel() {
        return this.contoService.searchModel;
    }

    protected setSearcModel(searchModel: SearchModel) {
        return this.contoService.searchModel = searchModel;
    }
}
