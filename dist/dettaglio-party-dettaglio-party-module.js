(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dettaglio-party-dettaglio-party-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Party </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Lista dei Conti del Party</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-generic-table *ngIf=\"showTableConti\" [model]=\"contiModel\"></app-generic-table>\r\n                        <br/>\r\n                        <div class=\"row\" *ngIf=\"showButtonAggiungiConto\">\r\n                            <div class=\"col-9\"></div>\r\n                            <div class=\"col-3\">\r\n                                <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToInserimentoConto()\">Aggiungi Conto</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!isAnsy\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Lista dei Conti del Party As Settlment Bank</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-generic-table *ngIf=\"showTableContiAsSettlemnetBank\" [model]=\"contiAsSettlemnetBankModel\"></app-generic-table>\r\n                        <br/>\r\n                        <div class=\"row\" *ngIf=\"showButtonAssociaConto\">\r\n                            <div class=\"col-9\"></div>\r\n                            <div class=\"col-3\">\r\n                                <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToAssociaConto()\">Associa Conto</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\"class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: DettaglioPartyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioPartyRoutingModule", function() { return DettaglioPartyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _dettaglio_party_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dettaglio-party.component */ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.ts");






const routes = [
    {
        path: '',
        data: {
            title: 'Dettaglio Party',
        },
        children: [
            {
                path: '',
                component: _dettaglio_party_component__WEBPACK_IMPORTED_MODULE_5__["DettaglioPartyComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'dettaglio-conto',
                loadChildren: () => Promise.all(/*! import() | conti-dettaglio-conto-dettaglio-conto-module */[__webpack_require__.e("default~conti-dettaglio-conto-dettaglio-conto-module~dettaglio-conto-dettaglio-conto-module"), __webpack_require__.e("conti-dettaglio-conto-dettaglio-conto-module")]).then(__webpack_require__.bind(null, /*! ./../../conti/dettaglio-conto/dettaglio-conto.module */ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.module.ts")).then(m => m.DettaglioContoModule)
            },
            {
                path: 'sfruttamento',
                loadChildren: () => __webpack_require__.e(/*! import() | conti-sfruttamento-ansy-sfruttamento-ansy-module */ "conti-sfruttamento-ansy-sfruttamento-ansy-module").then(__webpack_require__.bind(null, /*! ../../conti/sfruttamento-ansy/sfruttamento-ansy.module */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/sfruttamento-ansy.module.ts")).then(m => m.SfruttamentoAnsyModule)
            },
            {
                path: 'inserimento-conto',
                loadChildren: () => Promise.all(/*! import() | conti-inserimento-conto-inserimento-conto-module */[__webpack_require__.e("default~conti-inserimento-conto-inserimento-conto-module~inserimento-conto-inserimento-conto-module"), __webpack_require__.e("default~conti-conti-module~conti-inserimento-conto-inserimento-conto-module")]).then(__webpack_require__.bind(null, /*! ../../conti/inserimento-conto/inserimento-conto.module */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto.module.ts")).then(m => m.InserimentoContoModule)
            }
        ]
    }
];
let DettaglioPartyRoutingModule = class DettaglioPartyRoutingModule {
};
DettaglioPartyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DettaglioPartyRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9wYXJ0aWVzL2RldHRhZ2xpby1wYXJ0eS9kZXR0YWdsaW8tcGFydHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DettaglioPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioPartyComponent", function() { return DettaglioPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_party_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-party.component */ "./src/app/views/anagrafiche/parties/abstract-party.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");


















let DettaglioPartyComponent = class DettaglioPartyComponent extends _abstract_party_component__WEBPACK_IMPORTED_MODULE_2__["AbstractPartyComponent"] {
    constructor(router, partyService, filialeService, securityService, userService, contiService, filterUtils, formatterUtils, formBuilder, taskService, modalService, route, routingService) {
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
        this.router = router;
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.securityService = securityService;
        this.userService = userService;
        this.contiService = contiService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.modalService = modalService;
        this.route = route;
        this.routingService = routingService;
        this.showTableConti = false;
        this.showTableContiAsSettlemnetBank = false;
        this.showButtonAggiungiConto = false;
        this.showButtonAssociaConto = false;
        this.isAnsy = false;
    }
    ngOnInit() {
        this.checkUserSpi();
        this.route.queryParams.subscribe(params => {
            const detailPartySessionObj = this.getSession(this.routingService.PARTY_DETAIL);
            if (!!detailPartySessionObj) {
                this.loadSections(detailPartySessionObj.idParty);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailPartySessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idParty) {
        this.showSpinner();
        const getParty = this.partyService.getParty(idParty).pipe();
        const getConti = this.contiService.getContiOfParty(idParty);
        const getContiAsSettlmentBank = this.contiService.getContiAsSettlmentBankOfParty(idParty);
        const calls = [getParty, getConti, getContiAsSettlmentBank];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(calls).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
            this.party = res[0];
            const conti = res[1];
            const contiAsSettlmentBank = res[2];
            this.buildPartySection();
            if (!!conti && conti.length > 0) {
                this.buildContiSection(conti);
            }
            if (!!contiAsSettlmentBank && contiAsSettlmentBank.length > 0) {
                this.buildContiAsSettlementBankSection(contiAsSettlmentBank);
            }
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        })).subscribe();
    }
    buildPartySection() {
        const data = [
            [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
            [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.party, 'defaultAbi')],
            [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.party, 'filialeRiferimento.descrizione'), this.buildInfoPanelElement('MFI COde', 'string', this.party, 'mfiCode')],
            [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica')],
            [this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.party, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.party, 'validTo')],
            [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.party, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.party, 'utenteValidazione')]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        if (this.isPartyActive(this.party)) {
            this.showButtonAggiungiConto = this.userIsSpi;
            this.showButtonAssociaConto = this.userIsSpi;
        }
        if (this.party.tipoParty.codice == _models_enum__WEBPACK_IMPORTED_MODULE_17__["TipoPartyEnum"].ANSY) {
            this.isAnsy = true;
        }
    }
    buildContiSection(conti) {
        this.contiModel = this.buildModelConti();
        this.contiModel.gridOptions.onGridReady = () => this.initializeGridConti();
        this.contiModel.rowData = conti;
        this.showTableConti = true;
    }
    buildContiAsSettlementBankSection(conti) {
        this.contiAsSettlemnetBankModel = this.buildModelConti();
        this.contiAsSettlemnetBankModel.gridOptions.onGridReady = () => this.initializeGridContiAsSettlmentBank();
        this.contiAsSettlemnetBankModel.rowData = this.flat(conti);
        this.showTableContiAsSettlemnetBank = true;
    }
    flat(conti) {
        const flattenConti = [];
        conti.forEach((c) => flattenConti.push(Object.assign({}, c.conto, { idSfruttamento: (!!c.sfruttamentoDca ? c.sfruttamentoDca.id : null), validToSfruttamento: (!!c.sfruttamentoDca ? c.sfruttamentoDca.validTo : null) })));
        return flattenConti;
    }
    buildModelConti() {
        return {
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
    initializeGridConti() {
        this.contiModel.gridOptions.api.sizeColumnsToFit();
        this.contiModel.gridOptions.onGridSizeChanged = evt => this.contiModel.gridOptions.api ? this.contiModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    initializeGridContiAsSettlmentBank() {
        this.contiAsSettlemnetBankModel.gridOptions.api.sizeColumnsToFit();
        this.contiAsSettlemnetBankModel.gridOptions.onGridSizeChanged = evt => this.contiAsSettlemnetBankModel.gridOptions.api ? this.contiAsSettlemnetBankModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDefConti() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'BIC', field: 'bic', filter: false, sortable: false, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TARGET SERVICE', field: 'targetService', filter: false, sortable: false, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TIPO ', field: 'tipoConto.descrizione', filter: false, sortable: false, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DESCRIZIONE', field: 'descrizione', filter: false, sortable: false, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'ACCOUNT ID', field: 'numeroConto', filter: false, sortable: false, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'ABI', field: 'abi', filter: false, sortable: false, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA APERTURA', field: 'dataApertura', filter: false, sortable: false, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA CHIUSURA', field: 'dataChiusura', filter: false, sortable: false, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_15__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModelConti.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, minWidth: 150 }
        ];
    }
    buildActionRenderModelConti(data) {
        const detailButton = {
            label: 'Visualizza dettaglio Conto '.concat(data.numeroConto),
            routerLink: '/anagrafiche/parties/dettaglio/dettaglio-conto',
            params: { idConto: data.id, backUrl: this.routingService.PARTY_DETAIL },
            enabled: true,
            sessionKey: this.routingService.CONTO_DETAIL
        };
        let deleteButton = null;
        if ((((this.checkContoIsDCA(data) || this.checkContoIsCB(data)) && this.checkSfruttamentoDcaCbActive(data)) || (this.checkContoIsSubAccount(data) && this.checkSfruttamentoSubAccountActive(data))) && this.userIsSpi) {
            deleteButton = {
                label: 'Elimina Associazione Sfruttamento '.concat(data.numeroConto),
                routerLink: this.routingService.getRouteByKey(this.routingService.CONTO_ELIMINA_ASSOCIAZIONE),
                params: { idParty: this.party.id, idConto: data.id, idSfruttamento: data.idSfruttamento, dataInizioSfruttamento: data.validFrom, wizardSteps: [] },
                enabled: this.isContoActive(data),
                sessionKey: this.CONTO_ELIMINA_ASSOCIA_SESSION
            };
        }
        return {
            detailButton: detailButton,
            modifyButton: null,
            deleteButton: deleteButton
        };
    }
    checkSfruttamentoDcaCbActive(conto) {
        const validTo = new Date(this.formatterUtils.formatDate(conto, 'validToSfruttamento'));
        const today = new Date();
        return (validTo >= today);
    }
    checkSfruttamentoSubAccountActive(conto) {
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
        const associaContoModel = { idParty: this.party.id, wizardSteps: [] };
        this.setSession(this.routingService.PARTY_DETAIL, { idParty: this.party.id });
        this.setSession(this.CONTO_ASSOCIA_SESSION, associaContoModel);
        const route = this.routingService.getRouteByKey(this.routingService.CONTO_ASSOCIA_STEP1);
        this.router.navigate([route], {});
    }
};
DettaglioPartyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_14__["ContoService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_11__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"] }
];
DettaglioPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-party.component.scss */ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_14__["ContoService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_11__["ModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"]])
], DettaglioPartyComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DettaglioPartyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioPartyModule", function() { return DettaglioPartyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dettaglio_party_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dettaglio-party-routing.module */ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _dettaglio_party_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dettaglio-party.component */ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");













let DettaglioPartyModule = class DettaglioPartyModule {
};
DettaglioPartyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dettaglio_party_component__WEBPACK_IMPORTED_MODULE_10__["DettaglioPartyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dettaglio_party_routing_module__WEBPACK_IMPORTED_MODULE_3__["DettaglioPartyRoutingModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_11__["GepaGuiCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_6__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_7__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDIDatagridModule"].withComponents([
                _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_8__["GenericActionRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDITooltipModule"].forRoot(),
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_9__["GenericActionRenderModule"]
        ]
    })
], DettaglioPartyModule);



/***/ })

}]);
//# sourceMappingURL=dettaglio-party-dettaglio-party-module.js.map