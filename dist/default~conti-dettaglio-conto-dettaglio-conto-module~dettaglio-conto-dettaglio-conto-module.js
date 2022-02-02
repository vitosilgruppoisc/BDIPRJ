(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~conti-dettaglio-conto-dettaglio-conto-module~dettaglio-conto-dettaglio-conto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Conto </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party Proprietario</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelContoModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Conto</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelContoModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <ng-container *ngIf=\"sfruttamentiSistemaAncillareModel.length > 0\">\r\n                    <ng-container *ngFor=\"let infoPanelSistemaAncillareModel of sfruttamentiSistemaAncillareModel\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                                <strong><i class=\"fal fa-info-square\"></i>{{infoPanelSistemaAncillareModel.title}}</strong>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <app-info-panel [model]=\"infoPanelSistemaAncillareModel\"></app-info-panel>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DettaglioContoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioContoRoutingModule", function() { return DettaglioContoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _dettaglio_conto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dettaglio-conto.component */ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.ts");






const routes = [
    {
        path: '',
        data: {
            title: '',
        },
        children: [
            {
                path: '',
                component: _dettaglio_conto_component__WEBPACK_IMPORTED_MODULE_5__["DettaglioContoComponent"],
                data: {
                    title: 'Dettaglio Conto',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            }
        ]
    }
];
let DettaglioContoRoutingModule = class DettaglioContoRoutingModule {
};
DettaglioContoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DettaglioContoRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9kZXR0YWdsaW8tY29udG8vZGV0dGFnbGlvLWNvbnRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DettaglioContoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioContoComponent", function() { return DettaglioContoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
















let DettaglioContoComponent = class DettaglioContoComponent extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_13__["AbstractContiComponent"] {
    constructor(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route) {
        super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.contoService = contoService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.utils = utils;
        this.routingService = routingService;
        this.route = route;
        //infoPanelSistemaAncillareModel: InfoPanelModel;
        this.sfruttamentiSistemaAncillare = [];
        this.sfruttamentiSistemaAncillareModel = [];
    }
    ngOnInit() {
        this.checkUserSpi();
        this.route.queryParams.subscribe(params => {
            const detailContoSessionObj = this.getSession(this.routingService.CONTO_DETAIL);
            if (!!detailContoSessionObj) {
                this.loadSections(detailContoSessionObj.idConto);
                this.backUrl = this.routingService.getRouteByKey(detailContoSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idConto) {
        this.showSpinner();
        this.contiService.getConto(idConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(res => this.conto = res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(res => this.partyService.getPartyByBicAndTipo(this.conto.subBicPtyAnsy, { codice: this.conto.subTipoPtyAnsy })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(res => { this.partyAnsy = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(res => this.partyService.getPartyByBicAndTipo(this.conto.bicParty, this.conto.tipoParty)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(res => { this.party = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(res => this.contoService.getSfruttamentoPartyConto(this.conto.id, (!!this.party ? this.party.id : null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])((res) => { this.sfruttamentiSistemaAncillare = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(res => {
            this.buildContoSection();
            if (!!this.party) {
                this.buildPartySection();
            }
            this.buildSistemaAncillareSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        })).subscribe();
    }
    buildContoSection() {
        const data = [
            [this.buildInfoPanelElement('Bic', 'string', this.conto, 'bic'), this.buildInfoPanelElement('Target Service', 'string', this.conto, 'targetService')],
            [this.buildInfoPanelElement('Account Id', 'string', this.conto, 'numeroConto'), this.buildInfoPanelElement('ABI', 'string', this.conto, 'abi')],
            [this.buildInfoPanelElement('Tipo Conto', 'string', this.conto, 'tipoConto.descrizione'), this.buildInfoPanelElement('Descrizione', 'string', this.conto, 'descrizione')],
            [this.buildInfoPanelElement('Default MCA', 'boolean', this.conto, 'mcaDefFlag'), this.buildInfoPanelElement('Presso BDI', 'boolean', this.conto, 'pressoBdi')],
            [this.buildInfoPanelElement('Flag Inserimento Manuale', 'boolean', this.conto, 'flgMan'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.conto, 'indicatoreResidenza')],
            [this.buildInfoPanelElement('Categoria Economica', 'string', this.conto, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura', 'date', this.conto, 'dataApertura')],
            [this.buildInfoPanelElement('Data Chiusura', 'date', this.conto, 'dataChiusura'), this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.conto, 'validFrom')],
            [this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.conto, 'validTo'), this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.conto, 'utenteRichiesta')],
            [this.buildInfoPanelElement('Utente Approvatore', 'string', this.conto, 'utenteValidazione'), {}]
        ];
        this.infoPanelContoModel = {
            columnNumber: 2,
            data: data
        };
    }
    buildSistemaAncillareSection() {
        if (!!this.partyAnsy) {
            const data = [
                [this.buildInfoPanelElement('Party Bic', 'string', this.partyAnsy, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.partyAnsy, 'tipoParty.descrizione')],
                [this.buildInfoPanelElement('Nome Party', 'string', this.partyAnsy, 'nome'), { label: 'Tipo Sfruttamento', value: this.getTipoSfruttamento(this.conto.subTipoSfruttAnsy) }],
                [this.buildInfoPanelElement('Data Inizio Validità Sfruttamento', 'date', this.conto, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Sfruttamento', 'date', this.conto, 'validTo')],
            ];
            this.sfruttamentiSistemaAncillareModel.push({
                columnNumber: 2,
                data: data,
                title: 'Sistema Ancillare ' + this.partyAnsy.bic + ' - ' + this.conto.numeroConto
            });
        }
        if (!!this.sfruttamentiSistemaAncillare && this.sfruttamentiSistemaAncillare.length > 0) {
            this.sfruttamentiSistemaAncillare.forEach(s => {
                const data = [
                    [this.buildInfoPanelElement('Party Bic', 'string', s.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', s.party, 'tipoParty.descrizione')],
                    [this.buildInfoPanelElement('Nome Party', 'string', s.party, 'nome'), { label: 'Tipo Sfruttamento', value: this.NOT_DEFINED }],
                    [this.buildInfoPanelElement('Data Inizio Validità Sfruttamento', 'date', s.sfruttamentoDca, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Sfruttamento', 'date', s.sfruttamentoDca, 'validTo')],
                ];
                this.sfruttamentiSistemaAncillareModel.push({
                    columnNumber: 2,
                    data: data,
                    title: 'Sistema Ancillare ' + s.party.bic + ' - ' + s.conto.numeroConto
                });
            });
        }
    }
    getTipoSfruttamento(tipoSfruttamento) {
        const tipiSfruttamento = this.buildTipiSfruttamento();
        return tipiSfruttamento.find(t => t.codice == tipoSfruttamento).descrizione;
    }
    buildPartySection() {
        const data = [
            [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
            [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza')],
            [this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura')],
            [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura'), this.buildDetailButton()],
        ];
        this.infoPanelPartyModel = {
            columnNumber: 2,
            data: data
        };
    }
    buildDetailButton() {
        const button = {
            icon: 'far fa-file-alt',
            tooltip: 'Visualizza Party',
            routerLink: this.routingService.getRouteByKey(this.routingService.PARTY_DETAIL),
            params: { idParty: this.party.id, backUrl: this.routingService.CONTO_DETAIL },
            enabled: true,
            sessionKey: this.routingService.PARTY_DETAIL
        };
        return { button: button };
    }
};
DettaglioContoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_3__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_4__["FilialeService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_5__["ContoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_11__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_12__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DettaglioContoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-conto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-conto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-conto.component.scss */ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_3__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_4__["FilialeService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_5__["ContoService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_11__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_12__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DettaglioContoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DettaglioContoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioContoModule", function() { return DettaglioContoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dettaglio_conto_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dettaglio-conto-routing.module */ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto-routing.module.ts");
/* harmony import */ var _dettaglio_conto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dettaglio-conto.component */ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");













let DettaglioContoModule = class DettaglioContoModule {
};
DettaglioContoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dettaglio_conto_component__WEBPACK_IMPORTED_MODULE_4__["DettaglioContoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dettaglio_conto_routing_module__WEBPACK_IMPORTED_MODULE_3__["DettaglioContoRoutingModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__["GepaGuiCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIDatagridModule"].withComponents([
                _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__["GenericActionRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDITooltipModule"].forRoot(),
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_11__["GenericActionRenderModule"]
        ]
    })
], DettaglioContoModule);



/***/ })

}]);
//# sourceMappingURL=default~conti-dettaglio-conto-dettaglio-conto-module~dettaglio-conto-dettaglio-conto-module.js.map