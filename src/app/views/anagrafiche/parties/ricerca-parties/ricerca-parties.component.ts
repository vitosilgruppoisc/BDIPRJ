import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {PartyService} from '../../../../services/party.service';
import {catchError, tap} from 'rxjs/operators';
import {GenericTableModel} from '../../../../models/generic-table-model';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import {ActionRenderModel, ButtonModel} from '../../../../models/action-render-model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FilialeService} from '../../../../services/filiale.service';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {of} from 'rxjs';
import {AbstractPartyComponent} from '../abstract-party.component';
import {Utils} from '../../../../utilities/util';
import {RoutingService} from '../../../../services/routing.service';
import {get} from 'lodash';
import {dateValidator} from "../../../../validators/date-validator";
import {SearchModel} from "../../../../models/search";

@Component({
    selector: 'app-ricerca-parties',
    templateUrl: './ricerca-parties.component.html',
    //styleUrls: ['./ricerca-parties.component.scss']
})
export class RicercaPartiesComponent extends AbstractPartyComponent implements OnInit {

    partyModel: GenericTableModel;
    showTable = false;
    ricercaForm: FormGroup;
    util: Utils ;

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
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
        this.util = utils;
    }

    ngOnInit() {
        super.ngOnInit();
        this.buildForm();
        this.buildModel();
        this.manageNavigation();
    }

    protected manageNavigation() {
        this.route.queryParams.subscribe(params => {
            if (!!params && !!get(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            } else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }

    protected buildForm() {
        this.ricercaForm = this.formBuilder.group({
            bic:  new FormControl(null,   [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipo: new FormControl(null,   []),
            nome: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            abi: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            filiale: new FormControl(null,   []),
            mfiCode: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            indResidenza: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            catEconomica: new FormControl(null,   [this.wildcard2Validator.bind(this)]),
            dataAperturaDa: new FormControl(null, []),
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

    get bic() { return this.ricercaForm.get('bic'); }
    get tipo() { return this.ricercaForm.get('tipo'); }
    get nome() { return this.ricercaForm.get('nome'); }
    get abi() { return this.ricercaForm.get('abi'); }
    get filiale() { return this.ricercaForm.get('filiale'); }
    get mfiCode() { return this.ricercaForm.get('mfiCode'); }
    get indResidenza() { return this.ricercaForm.get('indResidenza'); }
    get catEconomica() { return this.ricercaForm.get('catEconomica'); }
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
            enableCsvExport: true,
            enablePdfExport: true,
            enableColumnSelection: true
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
            {colId: ('id_' + order++), headerName: 'FILIALE',                field: 'filialeRiferimento.sigla',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'ABI',                    field: 'defaultAbi',    filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA APERTURA',          field: 'dataApertura',  filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA CHIUSURA',          field: 'dataChiusura',  filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'',      field: 'validFrom',     filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',        field: 'validTo',       filter: true, sortable: true, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'AZIONI',                 field: '',              resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModel.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, pinned: 'right', minWidth: 150}
        ];
    }

    public buildActionRenderModel(data): ActionRenderModel {

        let detailButton =  null;

        if (this.userIsSpi || this.userIsBil || this.userIsVis) {
            detailButton = <ButtonModel> {
                label: 'Visualizza dettaglio Party '.concat(data.bic),
                routerLink: this.routingService.getRouteByKey(this.routingService.PARTY_DETAIL),
                params: {idParty: data.id, backUrl: this.routingService.PARTY_SEARCH},
                enabled: true,
                sessionKey : this.routingService.PARTY_DETAIL
            };
        }

        let modifyButton =  null;
        let deleteButton =  null;

        if (this.userIsSpi && this.isPartyActive(data)) {
            modifyButton = <ButtonModel> {
                label: 'Modifica Party '.concat(data.bic),
                routerLink: '/anagrafiche/parties/modifica',
                params: {idParty: data.id, backUrl: this.routingService.PARTY_SEARCH},
                enabled: true,
                sessionKey : this.routingService.PARTY_MODIFY
            };
            deleteButton = <ButtonModel> {
                label: 'Elimina Party '.concat(data.bic),
                routerLink: '/anagrafiche/parties/eliminazione-logica',
                params: {idParty: data.id, backUrl: this.routingService.PARTY_SEARCH},
                enabled: true,
                sessionKey : this.routingService.PARTY_DELETE
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
        this.partyModel.rowData = [];
        this.partyModel.enableMessageOnSizeResultLimit = false;

        this.manageSearchModel( this.partyModel, this.getSearcModel(), resetPage);

        if (!!this.ricercaForm.valid) {
            this.showSpinner();

            if (!this.getSearcModel()) {
                this.setSearcModel(this.initSearchModel());
            }
            this.getSearcModel().form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();

            this.partyService.getParties(searchString).pipe(

                tap( res => {
                    this.partyModel.enableMessageEmptyResult = true;
                    if (!!res && res.content.length > 0 ) {
                        this.partyModel.enableMessageEmptyResult = false;
                        this.partyModel.rowData = res.content;
                        this.partyModel.enableMessageOnSizeResultLimit = false;
                        this.partyModel.searchRecordLenght = res.content.length;
                        if ( res.totalElements > res.content.length) {
                            this.partyModel.enableMessageOnSizeResultLimit = true;
                            this.partyModel.searchRecordLenght = res.totalElements;
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
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.bic.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.tipo.value, 'tipoParty'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.nome.value, 'nome'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.abi.value, 'defaultAbi'));
        rSQLArray.push(this.rSQLUtils.manageSelect( this.filiale.value, 'filialeRiferimento'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.mfiCode.value, 'mfiCode'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.indResidenza.value, 'indicatoreResidenza'));
        rSQLArray.push(this.rSQLUtils.manageWildcard( this.catEconomica.value, 'categoriaEconomica'));
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

    goToInsertParty() {
        this.setSession(this.routingService.PARTY_INSERT, {backUrl: this.routingService.PARTY_SEARCH});
        this.router.navigate(['/anagrafiche/parties/inserimento'], {});
    }

    protected getSearcModel() {
        return this.partyService.searchModel;
    }

    protected setSearcModel(searchModel: SearchModel) {
        return this.partyService.searchModel = searchModel;
    }
}
