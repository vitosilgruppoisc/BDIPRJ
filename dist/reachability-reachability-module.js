(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reachability-reachability-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/reachability/reachability/reachability.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/reachability/reachability/reachability.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Raggiungibilità </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\" (ngSubmit)=\"submit()\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipologia\" class=\"col-2 col-form-label\">Tipologia<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipologia\" class=\"form-control\" [class.is-invalid]=\"tipologia.invalid && (form.submitted || (tipologia.dirty || tipologia.touched))\" formControlName=\"tipologia\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipologiaList\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"tipologia.errors?.required && (form.submitted || (tipologia.dirty || tipologia.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"data\" class=\"col-2 col-form-label\">Data<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" >\r\n                                <input id=\"data\" class=\"form-control\" [class.is-invalid]=\"data.invalid && (form.submitted || (data.dirty || data.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"data\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!data.value\"  class=\"input-group-append\" (click)=\"reset('data')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"data.errors?.required && (form.submitted || (data.dirty || data.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"data.errors?.dateformat && (form.submitted || (data.dirty || data.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nsc\" class=\"col-2 col-form-label\">Nsc:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nsc\" class=\"form-control\" [class.is-invalid]=\"nsc.invalid && (form.submitted || (nsc.dirty || nsc.touched))\" formControlName=\"nsc\" maxlength=\"10\" [readOnly]=\"!!nscCCReadonly\">\r\n                                <div *ngIf=\"nsc.errors?.required && (form.submitted || (nsc.dirty || nsc.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"countryCode\" class=\"col-2 col-form-label\">Country Code:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!nscCCReadonly; else countryCodeTemp\" id=\"countryCode\" class=\"form-control\" [class.is-invalid]=\"countryCode.invalid && (form.submitted || (countryCode.dirty || countryCode.touched))\" formControlName=\"countryCode\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let c of countryCodeList\" [value]=\"c.codice\">{{c.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"countryCode.errors?.required && (form.submitted || (countryCode.dirty || countryCode.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #countryCodeTemp>\r\n                            <input class=\"form-control\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"iban\" class=\"col-2 col-form-label\">Iban:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"iban\" class=\"form-control\" [class.is-invalid]=\"iban.invalid && (form.submitted || (iban.dirty || iban.touched))\" formControlName=\"iban\" maxlength=\"35\" [readOnly]=\"!!ibanReadonly\">\r\n                                <div *ngIf=\"iban.errors?.required && (form.submitted || (iban.dirty || iban.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && (form.submitted || (bic.dirty || bic.touched))\" formControlName=\"bic\" maxlength=\"11\" [readOnly]=\"!!bicReadonly\">\r\n                                <div *ngIf=\"bic.errors?.required && (form.submitted || (bic.dirty || bic.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"circuito\" class=\"col-2 col-form-label\">Circuito:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"circuito\" class=\"form-control\" [class.is-invalid]=\"circuito.invalid && (form.submitted || (circuito.dirty || circuito.touched))\" formControlName=\"circuito\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let c of circuitiList\" [value]=\"c.codice\">{{c.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"circuito.errors?.required && (form.submitted || (circuito.dirty || circuito.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\">Calcola Raggiungibilità</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <br/>\r\n                <div>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"reachabilityModel\"></app-generic-table>\r\n                    <br/>\r\n                    <span *ngIf=\"!reachabilityModel.errorCustomMessage\"><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n");

/***/ }),

/***/ "./src/app/services/reachability.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/reachability.service.ts ***!
  \**************************************************/
/*! exports provided: ReachabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachabilityService", function() { return ReachabilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");





let ReachabilityService = class ReachabilityService extends _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] {
    constructor(http, configurationService) {
        super(http, configurationService);
        this.http = http;
        this.configurationService = configurationService;
    }
    getReachability(reachabilityRequest) {
        const url = `${this.apiEndpointA2A}/reachability/v1.0/public`;
        return this.http.post(url, reachabilityRequest);
    }
};
ReachabilityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }
];
ReachabilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]])
], ReachabilityService);



/***/ }),

/***/ "./src/app/views/anagrafiche/reachability/reachability-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/anagrafiche/reachability/reachability-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReachabilityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachabilityRoutingModule", function() { return ReachabilityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _reachability_reachability_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reachability/reachability.component */ "./src/app/views/anagrafiche/reachability/reachability/reachability.component.ts");






const routes = [
    {
        path: '',
        data: {
            title: 'Raggiungibilità',
        },
        children: [
            {
                path: '',
                component: _reachability_reachability_component__WEBPACK_IMPORTED_MODULE_5__["ReachabilityComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            }
        ]
    }
];
let ReachabilityRoutingModule = class ReachabilityRoutingModule {
};
ReachabilityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReachabilityRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/reachability/reachability.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/anagrafiche/reachability/reachability.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReachabilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachabilityModule", function() { return ReachabilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reachability_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reachability-routing.module */ "./src/app/views/anagrafiche/reachability/reachability-routing.module.ts");
/* harmony import */ var _reachability_reachability_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reachability/reachability.component */ "./src/app/views/anagrafiche/reachability/reachability/reachability.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_result_render_generic_result_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generic-result-render/generic-result-render.component */ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.ts");
/* harmony import */ var _generic_result_render_generic_result_render_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../generic-result-render/generic-result-render.module */ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.module.ts");












let ReachabilityModule = class ReachabilityModule {
};
ReachabilityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reachability_reachability_component__WEBPACK_IMPORTED_MODULE_4__["ReachabilityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__["GepaGuiCommonModule"],
            _reachability_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReachabilityRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIDatagridModule"].withComponents([
                _generic_result_render_generic_result_render_component__WEBPACK_IMPORTED_MODULE_10__["GenericResultRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDITooltipModule"].forRoot(),
            _generic_result_render_generic_result_render_module__WEBPACK_IMPORTED_MODULE_11__["GenericResultRenderModule"]
        ],
    })
], ReachabilityModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/reachability/reachability/reachability.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/reachability/reachability/reachability.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9yZWFjaGFiaWxpdHkvcmVhY2hhYmlsaXR5L3JlYWNoYWJpbGl0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/reachability/reachability/reachability.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/reachability/reachability/reachability.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ReachabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachabilityComponent", function() { return ReachabilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _validators_trans_ragg_tipologia_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../validators/trans-ragg-tipologia-validator */ "./src/app/validators/trans-ragg-tipologia-validator.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_reachability_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/reachability.service */ "./src/app/services/reachability.service.ts");
/* harmony import */ var _generic_result_render_generic_result_render_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../generic-result-render/generic-result-render.component */ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.ts");















let ReachabilityComponent = class ReachabilityComponent extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__["AbstractAnagraficheComponent"] {
    constructor(reachabilityService, securityService, userService, formBuilder, formatterUtils, routingService, route) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.reachabilityService = reachabilityService;
        this.securityService = securityService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.formatterUtils = formatterUtils;
        this.routingService = routingService;
        this.route = route;
        this.showTable = false;
        this.nscCCReadonly = true;
        this.ibanReadonly = true;
        this.bicReadonly = true;
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildCombo();
        this.buildForm();
        this.buildModel();
    }
    buildCombo() {
        this.reachabilityService.getCountryCodes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => this.countryCodeList = res)).subscribe();
        this.reachabilityService.getCircuiti().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => this.circuitiList = res)).subscribe();
        this.reachabilityService.getTipologia(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => this.tipologiaList = res)).subscribe();
    }
    buildForm() {
        const today = new Date();
        this.ricercaForm = this.formBuilder.group({
            tipologia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: today.getFullYear(), month: (today.getUTCMonth() + 1), day: today.getUTCDate() }, []),
            nsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            circuito: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_10__["dateValidator"])([{ field1: 'data', required1: true }]),
                Object(_validators_trans_ragg_tipologia_validator__WEBPACK_IMPORTED_MODULE_11__["transcodingReachabilityTipologiaValidator"])()
            ]) });
        this.tipologia.valueChanges.subscribe(() => {
            this.manageTipologia();
        });
    }
    manageTipologia() {
        this.nscCCReadonly = true;
        this.ibanReadonly = true;
        this.bicReadonly = true;
        if (this.tipologia.value == _models_enum__WEBPACK_IMPORTED_MODULE_9__["TipologiaRichiestaTrRaEnum"].NSC_CC) {
            this.reset('iban');
            this.reset('bic');
            this.nscCCReadonly = false;
        }
        if (this.tipologia.value == _models_enum__WEBPACK_IMPORTED_MODULE_9__["TipologiaRichiestaTrRaEnum"].IBAN) {
            this.reset('nsc');
            this.reset('countryCode');
            this.reset('bic');
            this.ibanReadonly = false;
        }
        if (this.tipologia.value == _models_enum__WEBPACK_IMPORTED_MODULE_9__["TipologiaRichiestaTrRaEnum"].BIC) {
            this.reset('nsc');
            this.reset('countryCode');
            this.reset('iban');
            this.bicReadonly = false;
        }
        this.nsc.updateValueAndValidity();
        this.countryCode.updateValueAndValidity();
        this.iban.updateValueAndValidity();
        this.bic.updateValueAndValidity();
    }
    get tipologia() { return this.ricercaForm.get('tipologia'); }
    get data() { return this.ricercaForm.get('data'); }
    get nsc() { return this.ricercaForm.get('nsc'); }
    get countryCode() { return this.ricercaForm.get('countryCode'); }
    get iban() { return this.ricercaForm.get('iban'); }
    get circuito() { return this.ricercaForm.get('circuito'); }
    get bic() { return this.ricercaForm.get('bic'); }
    reset(field) {
        this.ricercaForm.get(field).setValue(null);
    }
    buildModel() {
        this.reachabilityModel = {
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
    initializeGrid() {
        this.reachabilityModel.gridOptions.api.sizeColumnsToFit();
        this.reachabilityModel.gridOptions.onGridSizeChanged = evt => this.reachabilityModel.gridOptions.api ? this.reachabilityModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: '', field: '', resizable: true, cellRendererFramework: _generic_result_render_generic_result_render_component__WEBPACK_IMPORTED_MODULE_14__["GenericResultRenderComponent"], cellRendererParams: { modelFn: this.buildResultRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'left', minWidth: 30, maxWidth: 50 },
            { colId: ('id_' + order++), headerName: 'CIRCUITO', field: 'circuito', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'CANALE', field: 'canale', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            //{colId: ('id_' + order++), headerName: 'REACHABLE BIC',               field: 'reachableBic',      filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            { colId: ('id_' + order++), headerName: 'BIC PARTECIPANTE DIRETTO', field: 'bic', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
        ];
    }
    submit() {
        this.showTable = false;
        this.resetError();
        this.reachabilityModel.rowData = [];
        this.reachabilityModel.enableMessageOnSizeResultLimit = false;
        this.reachabilityModel.enableMessageEmptyResult = false;
        if (!!this.ricercaForm.valid) {
            this.showSpinner();
            const request = this.buildRequest();
            this.reachabilityService.getReachability(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => {
                this.reachabilityModel.errorCustomMessage = 'Si è verificato un errore nel calcolo della raggiungibilità.';
                if (!!res &&
                    res.responseList.length > 0 &&
                    res.responseList[0].itemStatusCode == 200 &&
                    !!res.responseList[0].circuiti &&
                    res.responseList[0].circuiti.length > 0) {
                    const bicList = this.buildBicList(res.responseList[0].circuiti);
                    this.reachabilityModel.errorCustomMessage = null;
                    this.reachabilityModel.rowData = bicList;
                }
                else if (!!res &&
                    res.responseList.length > 0 &&
                    res.responseList[0].itemStatusCode !== 200) {
                    this.reachabilityModel.errorCustomMessage = 'Si è verificato un errore nel calcolo della raggiungibilità: '.concat(res.responseList[0].itemErrorMessage);
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => {
                this.showTable = true;
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
                console.log('Error - submit', error);
                this.showTable = false;
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            })).subscribe();
        }
    }
    buildRequest() {
        return {
            requestList: [{
                    dataRif: this.formatterUtils.dateToString(this.data.value),
                    nsc: this.nsc.value,
                    countryCode: this.countryCode.value,
                    iban: this.iban.value,
                    bic: this.bic.value,
                    circuito: this.circuito.value
                }]
        };
    }
    buildResultRenderModel(data) {
        let okResult = null;
        let koResult = null;
        if (data.circuitoStatusCode == 200) {
            okResult = {
                enabled: true
            };
        }
        else {
            koResult = {
                enabled: true,
                message: data.circuitoErrorMessage
            };
        }
        return {
            okResult: okResult,
            koResult: koResult
        };
    }
    buildBicList(circuiti) {
        const bicList = [];
        circuiti.forEach(c => {
            if (c.canaliList != null && c.canaliList.length > 0) {
                c.canaliList.forEach(ca => {
                    if (c.circuitoStatusCode != 200) {
                        bicList.push({
                            circuito: c.circuito,
                            bic: this.NOT_DEFINED,
                            canale: this.NOT_DEFINED,
                            circuitoStatusCode: c.circuitoStatusCode,
                            circuitoErrorMessage: c.circuitoErrorMessage
                        });
                    }
                    else {
                        bicList.push({
                            circuito: c.circuito,
                            bic: ca.bicPartDiretto,
                            canale: ca.canale,
                            circuitoStatusCode: c.circuitoStatusCode,
                            circuitoErrorMessage: c.circuitoErrorMessage
                        });
                    }
                });
            }
        });
        return bicList;
    }
};
ReachabilityComponent.ctorParameters = () => [
    { type: _services_reachability_service__WEBPACK_IMPORTED_MODULE_13__["ReachabilityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__["FormatterUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_6__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ReachabilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reachability',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reachability.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/reachability/reachability/reachability.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reachability.component.scss */ "./src/app/views/anagrafiche/reachability/reachability/reachability.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_reachability_service__WEBPACK_IMPORTED_MODULE_13__["ReachabilityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__["FormatterUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_6__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], ReachabilityComponent);



/***/ })

}]);
//# sourceMappingURL=reachability-reachability-module.js.map