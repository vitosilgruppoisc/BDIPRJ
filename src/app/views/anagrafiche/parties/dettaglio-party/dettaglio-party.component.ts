import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InfoPanelElement, InfoPanelModel, Style, Tooltip} from '../../../../models/info-panel-model';
import {AbstractPartyComponent} from '../abstract-party.component';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {FormBuilder} from '@angular/forms';
import {TaskService} from '../../../../services/task.service';
import {ModalService} from 'scam-bdi-uikit';
import {forkJoin, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ContoService} from '../../../../services/conto.service';
import {Party} from '../../../../models/party';
import {GenericTableModel} from '../../../../models/generic-table-model';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import {ActionRenderModel, ButtonModel} from '../../../../models/action-render-model';
import {Conto, InserimentoContoModel} from '../../../../models/conto';
import {get} from 'lodash';
import {RoutingService} from '../../../../services/routing.service';
import {TipoContoEnum, TipoPartyEnum} from '../../../../models/enum';
import {ContoAsSettlmentBank} from '../../../../models/sfruttamento-dca';

@Component({
    selector: 'app-dettaglio-party',
    templateUrl: './dettaglio-party.component.html',
    styleUrls: ['./dettaglio-party.component.scss']
})
export class DettaglioPartyComponent extends AbstractPartyComponent implements OnInit {

    infoPanelModel: InfoPanelModel;
    contiModel: GenericTableModel;
    contiAsSettlemnetBankModel: GenericTableModel;
    showTableConti = false;
    showTableContiAsSettlemnetBank = false;
    showButtonAggiungiConto = false;
    showButtonAssociaConto = false;
    party: Party;
    isAnsy: boolean = false;

    constructor(
        private router: Router,
        protected partyService: PartyService,
        protected filialeService: FilialeService,
        protected securityService: SecurityService,
        protected userService: UserService,
        private contiService: ContoService,
        private filterUtils: FilterUtils,
        protected formatterUtils: FormatterUtils,
        private formBuilder: FormBuilder,
        private taskService: TaskService,
        private modalService: ModalService,
        protected route: ActivatedRoute,
        protected routingService: RoutingService
    ) {
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
    }

    ngOnInit() {
        this.checkUserSpi();

        this.route.queryParams.subscribe(params => {
            const detailPartySessionObj = this.getSession(this.routingService.PARTY_DETAIL);
            if (!!detailPartySessionObj) {
                this.loadSections(detailPartySessionObj.idParty);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailPartySessionObj.backUrl);
            } else {
                this.setError();
            }
        });
    }

    private loadSections (idParty: string) {
        this.showSpinner();

        const getParty = this.partyService.getParty(idParty).pipe();
        const getConti = this.contiService.getContiOfParty(idParty);
        const getContiAsSettlmentBank = this.contiService.getContiAsSettlmentBankOfParty(idParty);
        const calls = [getParty, getConti, getContiAsSettlmentBank];

        forkJoin(calls).pipe (
            tap( res => {
                this.party = <Party> res [0];
                const conti = <Conto[]> res [1];
                const contiAsSettlmentBank = <ContoAsSettlmentBank[]> res [2];

                this.buildPartySection();
                if (!!conti && conti.length > 0 ) {
                    this.buildContiSection(conti);
                }
                if (!!contiAsSettlmentBank && contiAsSettlmentBank.length > 0 ) {
                    this.buildContiAsSettlementBankSection(contiAsSettlmentBank);
                }
                this.hideSpinner();
            }),
            catchError((error) => {
                console.log ('Error - loadSections', error);
                this.setError();
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildPartySection() {
        const data = [
            [this.buildInfoPanelElement('Party Bic', 'string',  this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
            [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.party, 'defaultAbi')],
            [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.party, 'filialeRiferimento.descrizione'), this.buildInfoPanelElement('MFI COde', 'string', this.party, 'mfiCode' )],
            [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica')],
            [this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.party, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.party, 'validTo')],
            [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.party, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.party, 'utenteValidazione')]
        ];

        this.infoPanelModel = <InfoPanelModel> {
            columnNumber: 2,
            data: data
        };

        if (this.isPartyActive(this.party)) {
            this.showButtonAggiungiConto =  this.userIsSpi;
            this.showButtonAssociaConto = this.userIsSpi;
        }

        if (this.party.tipoParty.codice == TipoPartyEnum.ANSY) {
            this.isAnsy = true;
        }
    }

    private buildContiSection(conti: Conto[]) {
        this.contiModel = this.buildModelConti();
        this.contiModel.gridOptions.onGridReady = () => this.initializeGridConti();
        this.contiModel.rowData = conti;
        this.showTableConti = true;
    }

    private buildContiAsSettlementBankSection(conti: ContoAsSettlmentBank[]) {
        this.contiAsSettlemnetBankModel = this.buildModelConti();
        this.contiAsSettlemnetBankModel.gridOptions.onGridReady = () => this.initializeGridContiAsSettlmentBank();
        this.contiAsSettlemnetBankModel.rowData = this.flat(conti);
        this.showTableContiAsSettlemnetBank = true;
    }

    private flat (conti: ContoAsSettlmentBank[]) {
        const flattenConti = [];
        conti.forEach( (c: ContoAsSettlmentBank) => flattenConti.push( { ...c.conto, idSfruttamento: ( !!c.sfruttamentoDca ? c.sfruttamentoDca.id : null), validToSfruttamento: ( !!c.sfruttamentoDca ? c.sfruttamentoDca.validTo : null)}));
        return flattenConti;
    }

    private buildModelConti() {
        return <GenericTableModel> {
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
                onGridReady: () => this.initializeGridConti()
            },
            rowData: [],
            pagination: true,
            columnsFitAvailable: true,
            columnDefs: this.buildColumnDefConti(),
            enableCsvExport: false,
            enablePdfExport: false,
            enableColumnSelection: false,
            enableMessageEmptyResult: false
        };
    }

    private initializeGridConti(): void {
        this.contiModel.gridOptions.api.sizeColumnsToFit();
        this.contiModel.gridOptions.onGridSizeChanged = evt =>  this.contiModel.gridOptions.api ?  this.contiModel.gridOptions.api.sizeColumnsToFit() : null;
    }

    private initializeGridContiAsSettlmentBank(): void {
        this.contiAsSettlemnetBankModel.gridOptions.api.sizeColumnsToFit();
        this.contiAsSettlemnetBankModel.gridOptions.onGridSizeChanged = evt =>  this.contiAsSettlemnetBankModel.gridOptions.api ?  this.contiAsSettlemnetBankModel.gridOptions.api.sizeColumnsToFit() : null;
    }

    private buildColumnDefConti() {
        let order = 0;
        return  [
            {colId: ('id_' + order++), headerName: 'BIC',               field: 'bic',                     filter: false, sortable: false, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'TARGET SERVICE',    field: 'targetService',           filter: false, sortable: false, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'TIPO ',             field: 'tipoConto.descrizione',   filter: false, sortable: false, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DESCRIZIONE',       field: 'descrizione',             filter: false, sortable: false, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'ACCOUNT ID',        field: 'numeroConto',             filter: false, sortable: false, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'ABI',               field: 'abi',                     filter: false, sortable: false, resizable: true, exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA APERTURA',     field: 'dataApertura',            filter: false, sortable: false, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'DATA CHIUSURA',     field: 'dataChiusura',            filter: false, sortable: false, resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom',               filter: true,  sortable: true,  resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'FINE VALIDITA\'',   field: 'validTo',                 filter: true,  sortable: true,  resizable: true, valueGetter: (data)  => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: {skipColumn: false}},
            {colId: ('id_' + order++), headerName: 'AZIONI',            field: '',                        resizable: true, cellRendererFramework: GenericActionRenderComponent, cellRendererParams: {modelFn: this.buildActionRenderModelConti.bind(this)}, sortable: false, exportOptions: {skipColumn: true}, minWidth: 150}
        ];
    }

    private buildActionRenderModelConti(data): ActionRenderModel {
        const detailButton = <ButtonModel> {
            label: 'Visualizza dettaglio Conto '.concat(data.numeroConto),
            routerLink: '/anagrafiche/parties/dettaglio/dettaglio-conto',
            params: {idConto: data.id, backUrl: this.routingService.PARTY_DETAIL},
            enabled: true,
            sessionKey : this.routingService.CONTO_DETAIL
        };

        let deleteButton = null;
        if ((((this.checkContoIsDCA(data) || this.checkContoIsCB(data)) && this.checkSfruttamentoDcaCbActive(data)) || (this.checkContoIsSubAccount(data) && this.checkSfruttamentoSubAccountActive(data))) && this.userIsSpi) {
            deleteButton = <ButtonModel> {
                label: 'Elimina Associazione Sfruttamento '.concat(data.numeroConto),
                routerLink: this.routingService.getRouteByKey(this.routingService.CONTO_ELIMINA_ASSOCIAZIONE),
                params: {idParty: this.party.id, idConto: data.id, idSfruttamento: data.idSfruttamento, dataInizioSfruttamento: data.validFrom, wizardSteps: []},
                enabled: this.isContoActive(data),
                sessionKey : this.CONTO_ELIMINA_ASSOCIA_SESSION
            };
        }

        return <ActionRenderModel> {
            detailButton: detailButton,
            modifyButton: null,
            deleteButton: deleteButton
        };
    }

    checkSfruttamentoDcaCbActive(conto): boolean {
        const validTo = new Date(this.formatterUtils.formatDate(conto, 'validToSfruttamento'));
        const today = new Date();
        return (validTo >= today);
    }

    checkSfruttamentoSubAccountActive(conto): boolean {
        const validTo = new Date(this.formatterUtils.formatDate(conto, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }

    goToInserimentoConto() {
        const route = '/anagrafiche/parties/dettaglio/inserimento-conto/step2';
        const inserimentoContoModel = {
            idParty: this.party.id,
            pressoBDI: true,
            prefixUrl: '/anagrafiche/parties/dettaglio/inserimento-conto/',
            wizardSteps: []
        };
        this.setSession(this.CONTO_INSERT_SESSION, inserimentoContoModel);
        this.router.navigate([route], {});
    }

    goToAssociaConto() {
        const associaContoModel = {idParty: this.party.id, wizardSteps: []};
        this.setSession(this.routingService.PARTY_DETAIL, {idParty: this.party.id} );
        this.setSession(this.CONTO_ASSOCIA_SESSION, associaContoModel);
        const route = this.routingService.getRouteByKey(this.routingService.CONTO_ASSOCIA_STEP1);
        this.router.navigate([route], {});
    }
}
