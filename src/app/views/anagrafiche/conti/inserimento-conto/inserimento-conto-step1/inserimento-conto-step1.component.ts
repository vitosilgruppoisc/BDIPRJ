import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Utils} from '../../../../../utilities/util';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {PartyService} from '../../../../../services/party.service';
import {FilialeService} from '../../../../../services/filiale.service';
import {SecurityService, UserService} from '../../../../../services';
import {FilterUtils} from '../../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../../utilities/formatterUtils';
import {RSQLUtils} from '../../../../../utilities/rsqlUtil';
import {RoutingService} from '../../../../../services/routing.service';
import {GenericActionRenderComponent} from '../../../generic-action-render/generic-action-render.component';
import {ActionRenderModel, ButtonModel} from '../../../../../models/action-render-model';
import {RicercaPartiesComponent} from '../../../parties/ricerca-parties/ricerca-parties.component';
import {InserimentoContoModel} from '../../../../../models/conto';
import {dateValidator} from "../../../../../validators/date-validator";
import {get} from 'lodash';
import {SearchModel} from "../../../../../models/search";

@Component({
    selector: 'app-inserimento-conto-step1',
    templateUrl: './inserimento-conto-step1.component.html',
    styleUrls: ['./inserimento-conto-step1.component.scss']
})
export class InserimentoContoStep1Component extends RicercaPartiesComponent implements OnInit {

    inserimentoContoModel: InserimentoContoModel;

    constructor(
        protected router: Router,
        protected partyService: PartyService,
        protected filialeService: FilialeService,
        protected securityService: SecurityService,
        protected userService: UserService,
        protected filterUtils: FilterUtils,
        protected formatterUtils: FormatterUtils,
        protected formBuilder: FormBuilder,
        protected rSQLUtils: RSQLUtils,
        protected utils: Utils,
        protected route: ActivatedRoute,
        protected routingService: RoutingService
    ) {
        super ( router, partyService, filialeService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, route, routingService);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    protected manageNavigation() {
        this.route.queryParams.subscribe(params => {

            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step1');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step1');
            } else {
                this.setError();
            }

            if (!!params && !!get(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            } else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }

    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            bic:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipo: new FormControl(null,   []),
            nome: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            abi: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            filiale: new FormControl(null,   []),
            mfiCode: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            indResidenza: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            catEconomica: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            dataAperturaDa: new FormControl(null, []   ),
            dataAperturaA: new FormControl(null, []   ),
            utenteInserimento: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
        }, { validator: dateValidator( [
                {field1: 'dataAperturaDa', field2: 'dataAperturaA'}
            ]) });
    }

    buildModel() {
        this.partyModel = {
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
            enableCsvExport: false,
            enablePdfExport: false,
            enableColumnSelection: false
        };
    }

    protected initializeGrid(): void {
        this.partyModel.gridOptions.api.sizeColumnsToFit();
        this.partyModel.gridOptions.onGridSizeChanged = evt =>  this.partyModel.gridOptions.api ?  this.partyModel.gridOptions.api.sizeColumnsToFit() : null;
    }

    protected buildColumnDef() {
        let order = 0;
        return  [
            {colId: ('id_' + order++), headerName: 'BIC',                    field: 'bic',           filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'TIPO',                   field: 'tipoParty.descrizione',          filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'NOME',                   field: 'nome',          filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'ABI',                    field: 'defaultAbi',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'CATEGORIA ECONOMICA',    field: 'categoriaEconomica',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'INDICATORE RESIDENZA',   field: 'indicatoreResidenza',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA APERTURA',          field: 'dataApertura',  filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA CHIUSURA',          field: 'dataChiusura',  filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',      field: 'validFrom',     filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',        field: 'validTo',       filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',              resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
        ];
    }

    buildActionRenderModel(data): ActionRenderModel {
        const selectButton = <ButtonModel> {
            label: 'Seleziona Party '.concat(data.bic),
            routerLink: this.buildRouterLinkStep2(),
            params: this.buildQueryParamStep2(data.id, true),
            enabled: true,
            sessionKey: this.CONTO_INSERT_SESSION
        };

        return <ActionRenderModel> {
            detailButton: null,
            modifyButton: null,
            deleteButton: null,
            selectButton: selectButton
        };
    }

    protected buildRsqlSearchString() {

        const rSQLArray: string [] = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.bic.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.tipo.value, 'tipoParty'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.nome.value, 'nome'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.abi.value, 'defaultAbi'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.filiale.value, 'filialeRiferimento'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.mfiCode.value, 'mfiCode'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.indResidenza.value, 'indicatoreResidenza'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.catEconomica.value, 'categoriaEconomica'));
        rSQLArray.push(this.rSQLUtils.managerRange( this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.utenteApprovatore.value, 'utenteValidazione'));

        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }

    goToStep2() {
        const route = this.buildRouterLinkStep2();
        this.setSession(this.CONTO_INSERT_SESSION, this.buildQueryParamStep2(null, false));
        this.router.navigate([route], {});
    }

    private buildRouterLinkStep2(): string {
        return this.inserimentoContoModel.prefixUrl.concat('step2');
    }

    private buildQueryParamStep2( id: any, pressoBDI: boolean): InserimentoContoModel {
        return <InserimentoContoModel> {
            idParty: id,
            pressoBDI: pressoBDI,
            prefixUrl: this.inserimentoContoModel.prefixUrl,
            wizardSteps: this.inserimentoContoModel.wizardSteps
        };
        //Nel wizard mantengo i valori solo sull'indietro; sull'avanti l'utente deve rifare la scelta
        /*this.inserimentoContoModel.idParty = id;
        this.inserimentoContoModel.pressoBDI = pressoBDI;
        return this.inserimentoContoModel;*/
    }

    protected getSearcModel() {
        return this.partyService.insertContoSearchPartyModel;
    }

    protected setSearcModel(searchModel: SearchModel) {
        return this.partyService.insertContoSearchPartyModel = searchModel;
    }
}
