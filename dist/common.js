(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.resultRenderModel.okResult\"   [disabled]=\"!this.resultRenderModel.okResult.enabled\" >\r\n        <i class=\"fas fa-check-circle\" style=\"color:green\"></i>\r\n    </button>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.resultRenderModel.koResult\"   [disabled]=\"!this.resultRenderModel.koResult.enabled\" [title]=\"this.resultRenderModel.koResult.message\">\r\n       <i class=\"fas fa-times-circle\" style=\"color:red\"></i>\r\n    </button>\r\n</span>\r\n");

/***/ }),

/***/ "./src/app/directive/directive.module.ts":
/*!***********************************************!*\
  !*** ./src/app/directive/directive.module.ts ***!
  \***********************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _uppercase_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uppercase.directive */ "./src/app/directive/uppercase.directive.ts");




let DirectiveModule = class DirectiveModule {
};
DirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_uppercase_directive__WEBPACK_IMPORTED_MODULE_3__["UppercaseDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_uppercase_directive__WEBPACK_IMPORTED_MODULE_3__["UppercaseDirective"]]
    })
], DirectiveModule);



/***/ }),

/***/ "./src/app/directive/uppercase.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/uppercase.directive.ts ***!
  \**************************************************/
/*! exports provided: UppercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function() { return UppercaseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var UppercaseDirective_1;


let UppercaseDirective = UppercaseDirective_1 = class UppercaseDirective {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    onKeyDown(evt) {
        this.manageEvent(evt);
    }
    onBlur(evt) {
        this._touched();
    }
    writeValue(value) {
        this._renderer.setProperty(this._el.nativeElement, 'value', value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._touched = fn;
    }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    }
    manageEvent(evt) {
        const value = this._el.nativeElement.value.toUpperCase();
        this._renderer.setProperty(this._el.nativeElement, 'value', value);
        this._onChange(value);
        evt.preventDefault();
    }
};
UppercaseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], UppercaseDirective.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], UppercaseDirective.prototype, "onBlur", null);
UppercaseDirective = UppercaseDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[toUppercase]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => UppercaseDirective_1),
                multi: true,
            },
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], UppercaseDirective);



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/enum */ "./src/app/models/enum.ts");







let CommonService = class CommonService {
    constructor(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.apiEndpointU2A = '';
        this.apiEndpointA2A = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpointU2A = config.gepaAnagraficheU2AEndpoint;
            this.apiEndpointA2A = config.gepaAnagraficheA2AEndpoint;
        });
    }
    getCountryCodes() {
        return this.http.get(`${this.apiEndpointU2A}/countryCode`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getCountryCodes', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    getCanali() {
        const canali = [
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["CanaleEnum"].STEP2, descrizione: 'Step2' },
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["CanaleEnum"].T2, descrizione: 'T2' }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(canali);
    }
    getCircuiti() {
        const circuitiList = [
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["CircuitoEnum"].TARGET2.valueOf(), descrizione: 'TARGET2' },
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["CircuitoEnum"].SEPA.valueOf(), descrizione: 'SEPA' }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(circuitiList);
    }
    getTipologia(addBic) {
        const tipologiaList = [];
        if (!!addBic) {
            tipologiaList.push({ codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["TipologiaRichiestaTrRaEnum"].BIC.valueOf(), descrizione: 'BIC' });
        }
        tipologiaList.push({ codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["TipologiaRichiestaTrRaEnum"].IBAN.valueOf(), descrizione: 'IBAN' });
        tipologiaList.push({ codice: _models_enum__WEBPACK_IMPORTED_MODULE_6__["TipologiaRichiestaTrRaEnum"].NSC_CC.valueOf(), descrizione: 'NSC e Cuntry Code' });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tipologiaList);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], CommonService);



/***/ }),

/***/ "./src/app/services/conto.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/conto.service.ts ***!
  \*******************************************/
/*! exports provided: ContoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContoService", function() { return ContoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ContoService = class ContoService {
    constructor(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.apiEndpoint = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }
    getTipiConto(tipoParty) {
        let url = `${this.apiEndpoint}/tipiConto`;
        if (!!tipoParty) {
            url = `${this.apiEndpoint}/tipiConto?tipoParty=${tipoParty}`;
        }
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getTipiConto', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    getTipiTargetService() {
        return this.http.get(`${this.apiEndpoint}/tipiTargetService`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getTipiTargetService', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    getContiOfParty(idParty) {
        return this.http.get(`${this.apiEndpoint}/parties/${idParty}/conti`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getContiOfParty', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    getContiAsSettlmentBankOfParty(idParty) {
        return this.http.get(`${this.apiEndpoint}/parties/${idParty}/contiAncillary`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)));
    }
    getConti(searchString) {
        return this.http.get(`${this.apiEndpoint}/conti?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)));
    }
    getConto(idConto) {
        return this.http.get(`${this.apiEndpoint}/conti/${idConto}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)));
    }
    getSfruttamentoPartyConto(idConto, idParty) {
        let url = `${this.apiEndpoint}/sfruttamentiDca?contoId=${idConto}`;
        if (!!idParty) {
            url = url.concat(`&partyId=${idParty}`);
        }
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)));
    }
};
ContoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
ContoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], ContoService);



/***/ }),

/***/ "./src/app/services/filiale.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/filiale.service.ts ***!
  \*********************************************/
/*! exports provided: FilialeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialeService", function() { return FilialeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FilialeService = class FilialeService {
    constructor(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.apiEndpoint = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }
    getFilialiRiferimento() {
        return this.http.get(`${this.apiEndpoint}/filiali`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getFilialiRiferimento', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
FilialeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
FilialeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], FilialeService);



/***/ }),

/***/ "./src/app/services/party.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/party.service.ts ***!
  \*******************************************/
/*! exports provided: PartyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyService", function() { return PartyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");








let PartyService = class PartyService {
    constructor(http, configurationService, rSQLUtils, formatterUtils) {
        this.http = http;
        this.configurationService = configurationService;
        this.rSQLUtils = rSQLUtils;
        this.formatterUtils = formatterUtils;
        this.apiEndpoint = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }
    getTipiParties() {
        return this.http.get(`${this.apiEndpoint}/tipiParty`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log('Error - getTipiParties', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
    getParties(searchString) {
        return this.http.get(`${this.apiEndpoint}/parties?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getParty(idParty) {
        return this.http.get(`${this.apiEndpoint}/parties/${idParty}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log('Error - getParty', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
    getPartyByBicAndTipo(bicParty, tipoParty) {
        if (!!bicParty && !!tipoParty) {
            const searchString = this.buildSearchStringForParty(bicParty, tipoParty);
            return this.http.get(`${this.apiEndpoint}/parties?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((res) => res.content), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((p) => (this.isPartyActive(p))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('Error - getPartyByBicAndTipo', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
    }
    buildSearchStringForParty(bicParty, tipoParty) {
        const rSQLArray = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard(bicParty, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect(tipoParty.codice, 'tipoParty'));
        return this.rSQLUtils.getSearchString(rSQLArray);
    }
    isPartyActive(data) {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }
};
PartyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_6__["RSQLUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_7__["FormatterUtils"] }
];
PartyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"], _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_6__["RSQLUtils"], _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_7__["FormatterUtils"]])
], PartyService);



/***/ }),

/***/ "./src/app/validators/trans-ragg-tipologia-validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/validators/trans-ragg-tipologia-validator.ts ***!
  \**************************************************************/
/*! exports provided: transcodingReachabilityTipologiaValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transcodingReachabilityTipologiaValidator", function() { return transcodingReachabilityTipologiaValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/enum */ "./src/app/models/enum.ts");


function transcodingReachabilityTipologiaValidator() {
    return (form) => {
        const tipologia = form.controls['tipologia'];
        if (!!tipologia) {
            if (!!tipologia.value) {
                if (tipologia.value === _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipologiaRichiestaTrRaEnum"].NSC_CC.valueOf()) {
                    const nsc = form.controls['nsc'];
                    if (!nsc || !nsc.value) {
                        nsc.setErrors({ required: true });
                    }
                    const countryCode = form.controls['countryCode'];
                    if (!countryCode || !countryCode.value) {
                        countryCode.setErrors({ required: true });
                    }
                }
                if (tipologia.value === _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipologiaRichiestaTrRaEnum"].IBAN.valueOf()) {
                    const iban = form.controls['iban'];
                    if (!iban || !iban.value) {
                        iban.setErrors({ required: true });
                    }
                }
                if (tipologia.value === _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipologiaRichiestaTrRaEnum"].BIC.valueOf()) {
                    const bic = form.controls['bic'];
                    if (!bic || !bic.value) {
                        bic.setErrors({ required: true });
                    }
                }
            }
            else {
                tipologia.setErrors({ required: true });
            }
        }
        return;
    };
}


/***/ }),

/***/ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9nZW5lcmljLXJlc3VsdC1yZW5kZXIvZ2VuZXJpYy1yZXN1bHQtcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GenericResultRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericResultRenderComponent", function() { return GenericResultRenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let GenericResultRenderComponent = class GenericResultRenderComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
    }
    agInit(params) {
        this.params = params;
        this.resultRenderModel = this.params.modelFn(this.params.node.data);
    }
    refresh() {
        return false;
    }
};
GenericResultRenderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GenericResultRenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-result-render',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generic-result-render.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./generic-result-render.component.scss */ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GenericResultRenderComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-result-render/generic-result-render.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: GenericResultRenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericResultRenderModule", function() { return GenericResultRenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _generic_result_render_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-result-render.component */ "./src/app/views/anagrafiche/generic-result-render/generic-result-render.component.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");





let GenericResultRenderModule = class GenericResultRenderModule {
};
GenericResultRenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_generic_result_render_component__WEBPACK_IMPORTED_MODULE_3__["GenericResultRenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__["BDIDatagridModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__["BDITooltipModule"].forRoot(),
        ],
        exports: [_generic_result_render_component__WEBPACK_IMPORTED_MODULE_3__["GenericResultRenderComponent"]],
    })
], GenericResultRenderModule);



/***/ })

}]);
//# sourceMappingURL=common.js.map