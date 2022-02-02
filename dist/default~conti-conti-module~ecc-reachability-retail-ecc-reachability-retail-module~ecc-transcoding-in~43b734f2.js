(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-table/generic-table.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-table/generic-table.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\r\n    <div class=\"col-12 text-left\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"model.errorCustomMessage\">\r\n            {{model.errorCustomMessage}}\r\n        </div>\r\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"model.enableMessageEmptyResult\">\r\n            La ricerca non ha restituito risultati.\r\n        </div>\r\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"model.enableMessageOnSizeResultLimit\">\r\n            La ricerca ha restituito {{model.rowData.length}} di {{model.searchRecordLenght}} risultati. Affinare la ricerca.\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!model.enableMessageEmptyResult && !model.errorCustomMessage\">\r\n    <div class=\"col-6 text-left\" *ngIf=\"!!model.enableColumnSelection\">\r\n        <div>\r\n            <button class=\"btn\" (click)=\"showDropDown=!showDropDown\">\r\n                <i class=\"fa fa-list\"></i>\r\n            </button>\r\n            <div class=\"drop-show column-selection\" *ngIf=\"showDropDown\">\r\n                    <label *ngFor=\"let a of columnToDisplay\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <input type=\"checkbox\" [(ngModel)]=\"a.checked\"\r\n                                       (change)=\"manageCheck(a.name, a.checked, a.colId)\" />\r\n                                <span>{{a.name}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-6 text-right\">\r\n        <button *ngIf=\"!!model.enablePdfExport\" class=\"btn btn-info btn-sm\" (click)=\"exportPdf()\">\r\n            <i class=\"far fa-file-pdf\"></i> Esporta in pdf\r\n        </button>\r\n        <button *ngIf=\"!!model.enableCsvExport\" class=\"btn btn-info btn-sm\" (click)=\"exportCsv()\">\r\n            <i class=\"fas fa-file-csv\"></i> Esporta in csv\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!model.enableMessageEmptyResult && !model.errorCustomMessage\">\r\n    <div class=\"col\">\r\n        <bdi-grid\r\n                [domLayout]=\"model.domLayout\"\r\n                [rowData]=\"model.rowData\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [pagination]=\"model.pagination\"\r\n                [gridOptions]=\"model.gridOptions\"\r\n                [columnsFitAvailable]=\"model.columnsFitAvailable\"\r\n                [suppressDragLeaveHidesColumns]=\"true\"\r\n                [suppressCellSelection]=\"false\"\r\n                [localeText]=\"localeText\"\r\n        >\r\n        </bdi-grid>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/info-panel/info-panel.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/info-panel/info-panel.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container *ngFor=\"let row of model.data\">\r\n    <div class=\"row\">\r\n        <ng-container *ngFor=\"let c of row\">\r\n            <div class=\"col-{{12/model.columnNumber}}\">\r\n                <ng-container *ngIf=\"!!c.button; else data\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2\">\r\n                            <button class=\" btn btn-block btn-primary\" type=\"button\" [disabled]=\"!c.button.enabled\" bdiTooltip=\"{{c.button.tooltip}}\" placement=\"right\"(click)=\"navigate(c.button.routerLink, c.button.params, c.button.sessionKey)\">\r\n                                <i class=\"{{c.button.icon}}\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n                <ng-template #data>\r\n                    <div class=\"row\">\r\n                        <label class=\"col-6 col-form-label\" *ngIf=\"!!c && !!c.label\"><b>{{c.label}}: </b></label>\r\n                        <div class=\"col-6 col-form-label\"><span bdiTooltip=\"{{c.tooltip?.value}}\" placement=\"{{c.tooltip?.placement}}\" [style.color]=\"c.style?.color\" [style.font-weight]=\"c.style?.fontweight\">{{c.value}}</span></div>\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</ng-container>\r\n\r\n");

/***/ }),

/***/ "./src/app/services/routing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/routing.service.ts ***!
  \*********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RoutingService = class RoutingService {
    constructor(router) {
        this.router = router;
        this.DASHBOARD_MONITORAGGIO = 'ANAGRAFICHE_MONITORAGGIO';
        this.PARTY_SEARCH = 'PARTY_SEARCH';
        this.PARTY_DETAIL = 'PARTY_DETAIL';
        this.PARTY_INSERT = 'PARTY_INSERT';
        this.PARTY_MODIFY = 'PARTY_MODIFY';
        this.PARTY_DELETE = 'PARTY_DELETE';
        this.CONTO_ASSOCIA_STEP1 = 'CONTO_ASSOCIA_STEP1';
        this.CONTO_ASSOCIA_STEP2 = 'CONTO_ASSOCIA_STEP2';
        this.CONTO_ELIMINA_ASSOCIAZIONE = 'CONTO_ELIMINA_ASSOCIAZIONE';
        this.CONTI_SEARCH = 'CONTI_SEARCH';
        this.CONTO_DETAIL = 'CONTO_DETAIL';
        this.CONTO_INSERT_STEP1 = 'CONTO_INSERT_STEP1';
        this.CONTO_INSERT_STEP2 = 'CONTO_INSERT_STEP2';
        this.CONTO_INSERT_STEP3 = 'CONTO_INSERT_STEP3';
        this.CONTO_INSERT_STEP4 = 'CONTO_INSERT_STEP4';
        this.CONTO_MODIFY = 'CONTO_MODIFY';
        this.CONTO_DELETE = 'CONTO_DELETE';
        this.ECC_TRANS_INGR_SEARCH = 'ECC_TRANS_INGR_SEARCH';
        this.ECC_TRANS_INGR_DETAIL = 'ECC_TRANS_INGR_DETAIL';
        this.ECC_TRANS_INGR_INSERT = 'ECC_TRANS_INGR_INSERT';
        this.ECC_TRANS_INGR_MODIFY = 'ECC_TRANS_INGR_MODIFY';
        this.ECC_TRANS_INGR_DELETE = 'ECC_TRANS_INGR_DELETE';
        this.ECC_TRANS_RET_SEARCH = 'ECC_TRANS_RET_SEARCH';
        this.ECC_TRANS_RET_DETAIL = 'ECC_TRANS_RET_DETAIL';
        this.ECC_TRANS_RET_INSERT = 'ECC_TRANS_RET_INSERT';
        this.ECC_TRANS_RET_MODIFY = 'ECC_TRANS_RET_MODIFY';
        this.ECC_RAGG_RET_SEARCH = 'ECC_RAGG_RET_SEARCH';
        this.ECC_RAGG_RET_DETAIL = 'ECC_RAGG_RET_DETAIL';
        this.ECC_RAGG_RET_INSERT = 'ECC_RAGG_RET_INSERT';
        this.ECC_RAGG_RET_MODIFY = 'ECC_RAGG_RET_MODIFY';
        this.TASK_SEARCH = 'TASK_SEARCH';
        this.TASK_PARTY_DETAIL = 'TASK_PARTY_DETAIL';
        this.TASK_CONTO_DETAIL = 'TASK_CONTO_DETAIL';
        this.TASK_SFRUTTAMENTO_DETAIL = 'TASK_SFRUTTAMENTO_DETAIL';
        this.TASK_ECC_TRANS_INGR_DETAIL = 'TASK_ECC_TRANS_INGR_DETAIL';
        this.TASK_ECC_TRANS_RET_DETAIL = 'TASK_ECC_TRANS_RET_DETAIL';
        this.TASK_ECC_RAGG_RET_DETAIL = 'TASK_ECC_RAGG_RET_DETAIL';
        this.routeMap = new Map([
            [this.DASHBOARD_MONITORAGGIO, '/dashboard/monitoraggio'],
            [this.PARTY_SEARCH, '/anagrafiche/parties'],
            [this.PARTY_DETAIL, '/anagrafiche/parties/dettaglio'],
            [this.PARTY_MODIFY, '/anagrafiche/parties/modifica'],
            [this.PARTY_DELETE, '/anagrafiche/parties/eliminazione-logica'],
            [this.CONTO_ASSOCIA_STEP1, '/anagrafiche/parties/dettaglio/sfruttamento/associa-step1'],
            [this.CONTO_ASSOCIA_STEP2, '/anagrafiche/parties/dettaglio/sfruttamento/associa-step2'],
            [this.CONTO_ELIMINA_ASSOCIAZIONE, '/anagrafiche/parties/dettaglio/sfruttamento/eliminazione-logica'],
            [this.CONTI_SEARCH, '/anagrafiche/conti'],
            [this.CONTO_DETAIL, '/anagrafiche/conti/dettaglio'],
            [this.CONTO_MODIFY, '/anagrafiche/conti/modifica'],
            [this.CONTO_DELETE, '/anagrafiche/conti/eliminazione-logica'],
            [this.CONTO_INSERT_STEP1, '/anagrafiche/conti/inserimento/step1'],
            [this.CONTO_INSERT_STEP2, '/anagrafiche/conti/inserimento/step2'],
            [this.CONTO_INSERT_STEP3, '/anagrafiche/conti/inserimento/step3'],
            [this.CONTO_INSERT_STEP4, '/anagrafiche/conti/inserimento/step4'],
            [this.ECC_TRANS_INGR_SEARCH, '/anagrafiche/ecctranscodingingrosso'],
            [this.ECC_TRANS_INGR_DETAIL, '/anagrafiche/ecctranscodingingrosso/dettaglio'],
            [this.ECC_TRANS_INGR_MODIFY, '/anagrafiche/ecctranscodingingrosso/modifica'],
            [this.ECC_TRANS_INGR_DELETE, '/anagrafiche/ecctranscodingingrosso/eliminazione-logica'],
            [this.ECC_TRANS_RET_SEARCH, '/anagrafiche/ecctranscodingretail'],
            [this.ECC_TRANS_RET_DETAIL, '/anagrafiche/ecctranscodingretail/dettaglio'],
            [this.ECC_TRANS_RET_MODIFY, '/anagrafiche/ecctranscodingretail/modifica'],
            [this.ECC_RAGG_RET_SEARCH, '/anagrafiche/eccreachabilityretail'],
            [this.ECC_RAGG_RET_DETAIL, '/anagrafiche/eccreachabilityretail/dettaglio'],
            [this.ECC_RAGG_RET_MODIFY, '/anagrafiche/eccreachabilityretail/modifica'],
            [this.TASK_SEARCH, '/anagrafiche/taskqueue'],
            [this.TASK_PARTY_DETAIL, '/anagrafiche/taskqueue/dettaglio-party'],
            [this.TASK_CONTO_DETAIL, '/anagrafiche/taskqueue/dettaglio-conto'],
            [this.TASK_SFRUTTAMENTO_DETAIL, '/anagrafiche/taskqueue/dettaglio-sfruttamento'],
            [this.TASK_ECC_TRANS_INGR_DETAIL, '/anagrafiche/taskqueue/dettaglio-ecctranscodingingrosso'],
            [this.TASK_ECC_TRANS_RET_DETAIL, '/anagrafiche/taskqueue/dettaglio-ecctranscodingretail'],
            [this.TASK_ECC_RAGG_RET_DETAIL, '/anagrafiche/taskqueue/dettaglio-eccreachabilityretail']
        ]);
    }
    getRouteByKey(key) {
        return this.routeMap.get(key);
    }
    getPreviousUrl() {
        return this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            console.log('P' + res[0].urlAfterRedirects);
            console.log('C' + res[1].urlAfterRedirects);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res[0].urlAfterRedirects));
    }
};
RoutingService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RoutingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RoutingService);



/***/ }),

/***/ "./src/app/utilities/formatterUtils.ts":
/*!*********************************************!*\
  !*** ./src/app/utilities/formatterUtils.ts ***!
  \*********************************************/
/*! exports provided: FormatterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatterUtils", function() { return FormatterUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-es6 */ "./node_modules/moment-es6/index.js");
/* harmony import */ var moment_es6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_es6__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let FormatterUtils = class FormatterUtils {
    constructor() {
        this.INPUT_DATE_PATTERN = 'YYYY-MM-DD';
        this.OUPTU_DATE_PATTERN = 'YYYY-MM-DD';
        this.INPUT_DATETIME_PATTERN = 'YYYY-MM-DD HH:mm:ss';
        this.OUPTU_DATETIME_PATTERN = 'YYYY-MM-DD HH:mm:ss';
    }
    formatDate(rowData, field) {
        let val = null;
        if (!!field) {
            val = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(rowData, field);
        }
        else {
            val = rowData;
        }
        if (!!val) {
            return moment_es6__WEBPACK_IMPORTED_MODULE_2___default()(val, this.INPUT_DATE_PATTERN).format(this.OUPTU_DATE_PATTERN);
        }
        return null;
    }
    formatDateTime(rowData, field) {
        const result = this.format(this.INPUT_DATETIME_PATTERN, this.OUPTU_DATETIME_PATTERN, rowData, field);
        console.log(result);
        return result;
    }
    format(inputPattern, outputPatter, rowData, field) {
        let val = null;
        if (!!field) {
            val = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(rowData, field);
        }
        else {
            val = rowData;
        }
        if (!!val) {
            return moment_es6__WEBPACK_IMPORTED_MODULE_2___default()(val, inputPattern).format(outputPatter);
        }
        return null;
    }
    dateToString(date) {
        if (!!date) {
            return date.year + '-' + this.leftpad(date.month, 2) + '-' + this.leftpad(date.day, 2);
        }
        return null;
    }
    dateToStringWithTime(date, end) {
        let hour = '.00:00:00';
        if (!!end) {
            hour = '.23:59:59';
        }
        if (!!date) {
            return date.year + '-' + this.leftpad(date.month, 2) + '-' + this.leftpad(date.day, 2) + hour;
        }
        return null;
    }
    getNestedProperty(rowData, field) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(rowData, field);
    }
    getBooleanAsString(data, field) {
        const val = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data, field);
        return (!!val ? 'SI' : 'NO');
    }
    getStringAsBoolean(val) {
        if (!!val && val === 'SI') {
            return 1;
        }
        if (!!val && val === 'NO') {
            return 0;
        }
        return null;
    }
    leftpad(val, resultLength = 2, leftpadChar = '0') {
        return (String(leftpadChar).repeat(resultLength)
            + String(val)).slice(String(val).length);
    }
    hasWildcard(val) {
        return (val.indexOf('%') !== -1);
    }
    getValueForDateinDatePickerFormat(data) {
        const d = new Date(data);
        return { year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
    }
};
FormatterUtils = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormatterUtils);



/***/ }),

/***/ "./src/app/validators/date-validator.ts":
/*!**********************************************!*\
  !*** ./src/app/validators/date-validator.ts ***!
  \**********************************************/
/*! exports provided: dateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateValidator", function() { return dateValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");


function dateValidator(pairToCompare) {
    return (form) => {
        const formatterUtils = new _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_1__["FormatterUtils"]();
        pairToCompare.forEach(p => {
            const field1 = form.controls[p.field1];
            if (!!field1) {
                field1.setErrors(null);
                if (!!p.required1 && !field1.value) {
                    field1.setErrors({ required: true });
                }
                if (!!field1.value) {
                    if (typeof field1.value === 'string' || !checkDateFormat(field1.value)) {
                        field1.setErrors({ dateformat: true });
                    }
                    const d1 = new Date(formatterUtils.dateToString(field1.value));
                    if (!!p.minDate1) {
                        const minDate1 = new Date(formatterUtils.dateToString(p.minDate1));
                        if (d1 < minDate1) {
                            field1.setErrors({ mindate: true });
                        }
                    }
                    if (!!p.maxDate1) {
                        const maxDate1 = new Date(formatterUtils.dateToString(p.maxDate1));
                        if (d1 > maxDate1) {
                            field1.setErrors({ maxdate: true });
                        }
                    }
                }
            }
            const field2 = form.controls[p.field2];
            if (!!field2) {
                field2.setErrors(null);
                if (!!p.required2 && !field2.value) {
                    field2.setErrors({ required: true });
                }
                if (!!field2.value) {
                    if (typeof field2.value === 'string' || !checkDateFormat(field2.value)) {
                        field2.setErrors({ dateformat: true });
                    }
                    const d2 = new Date(formatterUtils.dateToString(field2.value));
                    if (!!p.minDate2) {
                        const minDate2 = new Date(formatterUtils.dateToString(p.minDate2));
                        if (d2 < minDate2) {
                            field2.setErrors({ mindate: true });
                        }
                    }
                    if (!!p.maxDate2) {
                        const maxDate2 = new Date(formatterUtils.dateToString(p.maxDate2));
                        if (d2 > maxDate2) {
                            field2.setErrors({ maxdate: true });
                        }
                    }
                }
            }
            if (!!field1 && !!field1.value && !!field2 && !!field2.value) {
                const d1 = new Date(formatterUtils.dateToString(field1.value));
                const d2 = new Date(formatterUtils.dateToString(field2.value));
                if (d1 > d2) {
                    field1.setErrors({ daterange: true });
                    field2.setErrors({ daterange: true });
                }
            }
        });
        return;
    };
}
function checkDateFormat(val) {
    if (!val.year || val.year < 1000) {
        return false;
    }
    if (!val.month || val.month > 12 || val.month < 1) {
        return false;
    }
    if (!val.day || val.day > 31 || val.day < 1) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/anagrafiche/abstract-anagrafiche.component.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractAnagraficheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractAnagraficheComponent", function() { return AbstractAnagraficheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





class AbstractAnagraficheComponent {
    constructor(securityService, userService, formatterUtils, routingService, route) {
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.routingService = routingService;
        this.route = route;
        this.NOT_DEFINED = 'N.D.';
        this.BACK = 'back';
        this.CONTO_INSERT_SESSION = 'CONTO_INSERT_SESSION';
        this.CONTO_ASSOCIA_SESSION = 'CONTO_ASSOCIA_SESSION';
        this.CONTO_ELIMINA_ASSOCIA_SESSION = 'CONTO_ELIMINA_ASSOCIA_SESSION';
        this.userIsSpi = false;
        this.userIsBil = false;
        this.userIsVis = false;
        this.userIsDet = false;
        this.isError = false;
        this.isResultOk = false;
        this.showSpinner$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        this.readonlyForm = false;
    }
    ngOnInit() {
        this.checkUserSpi();
        this.checkUserDet();
        this.checkUserBil();
        this.checkUserVis();
    }
    checkUserSpi() {
        this.userIsSpi = this.securityService.checkPermissions([_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI]);
    }
    checkUserBil() {
        this.userIsBil = this.securityService.checkPermissions([_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_BIL]);
    }
    checkUserVis() {
        this.userIsVis = this.securityService.checkPermissions([_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]);
    }
    checkUserDet() {
        this.userIsDet = this.securityService.checkPermissions([_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_DET]);
    }
    onActionEvent(event) {
        switch (event) {
            case _models_enum__WEBPACK_IMPORTED_MODULE_3__["SpinnerEventEnum"].SHOW: {
                this.showSpinner();
                break;
            }
            case _models_enum__WEBPACK_IMPORTED_MODULE_3__["SpinnerEventEnum"].HIDE: {
                this.hideSpinner();
                break;
            }
            default: {
                break;
            }
        }
    }
    showSpinner() {
        this.showSpinner$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    hideSpinner() {
        this.showSpinner$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    }
    resetError() {
        this.isError = false;
        this.messageError = null;
    }
    setError(error) {
        this.isError = true;
        this.messageError = 'Si è verificato un errore.';
        if (!!error && !!error.error && !!error.error.message) {
            this.messageError = error.error.message;
        }
    }
    buildInfoPanelElement(label, type, entity, field) {
        let value = null;
        if (type == 'value') {
            value = entity;
        }
        if (type == 'string') {
            value = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(entity, field);
        }
        if (type == 'date') {
            value = this.formatterUtils.formatDate(entity, field);
        }
        if (type == 'boolean') {
            value = this.formatterUtils.getBooleanAsString(entity, field);
        }
        value = this.manageEmpty(value);
        return { label: label, value: value };
    }
    manageEmpty(value) {
        if (!(!!value) && !(typeof (value) === 'number' && value === 0)) {
            return this.NOT_DEFINED;
        }
        return value;
    }
    bicValidator(control) {
        const bicRegex = new RegExp('^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$');
        if (!!control &&
            !!control.value &&
            (control.value.indexOf('%') === -1) &&
            !bicRegex.test(control.value)) {
            return { 'syntax': true };
        }
        return null;
    }
    wildcard2Validator(control) {
        const wildcardRegex = new RegExp('^[%]{0,1}[a-zA-Z0-9]{2,}[%]{0,1}$');
        if (!!control &&
            !!control.value &&
            (control.value.indexOf('%') !== -1) &&
            !wildcardRegex.test(control.value)) {
            return { 'wildcard': true };
        }
        return null;
    }
    setSession(key, value) {
        this.clearSession(key);
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    getSession(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    clearSession(key) {
        sessionStorage.removeItem(key);
    }
    isPartyActive(data) {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }
    isContoActive(data) {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }
    isEccTranscodingIngrossoActive(data) {
        const validFrom = new Date(this.formatterUtils.formatDate(data, 'validFrom'));
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return ((validTo >= today) && (validFrom <= validTo));
    }
    isEccTranscodingRetailActive(data) {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }
    checkContoIsDCA(conto) {
        return conto.tipoConto.codice == _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoContoEnum"].RTGS_DCA;
    }
    checkContoIsCB(conto) {
        return conto.tipoConto.codice == _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoContoEnum"].RTGS_CB;
    }
    checkContoIsSubAccountByTipoCod(tipo) {
        return tipo == _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoContoEnum"].RTGS_SA;
    }
    checkContoIsSubAccount(conto) {
        return this.checkContoIsSubAccountByTipoCod(conto.tipoConto.codice);
    }
    buildTipoContoDCAOrCBorSubAccount() {
        const tipiConto = this.buildTipoContoDCAOrCB();
        tipiConto.push({ codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoContoEnum"].RTGS_SA, descrizione: 'RTGS Sub-account' });
        return tipiConto;
    }
    buildTipoContoDCAOrCB() {
        return [
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoContoEnum"].RTGS_DCA, descrizione: 'RTGS DCA' },
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoContoEnum"].RTGS_CB, descrizione: 'RTGS CB Account' }
        ];
    }
    buildTipiSfruttamento() {
        return [
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoSfruttamentoEnum"].BICOMP, descrizione: 'BICOMP notturno' },
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoSfruttamentoEnum"].SDD_SCT, descrizione: 'Tramitazione Step 2 SDD SCT' },
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoSfruttamentoEnum"].SDD_B2B, descrizione: 'Tramitazione Step 2 SDD B2B' },
            { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoSfruttamentoEnum"].SDD_CORE, descrizione: 'Tramitazione Step 2 SDD Core' }
        ];
    }
    onColToDisplayEvent(event, searchModel) {
        searchModel.columnToDisplay = event.columnToDisplay;
    }
    onPaginationEvent(event, searchModel) {
        searchModel.currentPage = event;
    }
    onSortEvent(event, searchModel) {
        searchModel.sortModel = event;
    }
    onFilterEvent(event, searchModel) {
        searchModel.filterModel = event;
    }
    manageSearchModel(model, searchModel, resetPage) {
        if (!!resetPage) {
            if (!!model) {
                model.currentPage = null;
                model.columnToDisplay = null;
                model.sortModel = null;
                model.filterModel = null;
            }
        }
        else {
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
    initSearchModel() {
        return {
            form: null,
            currentPage: null,
            columnToDisplay: null,
            sortModel: null,
            filterModel: null
        };
    }
    setStepForInsertConto(model, currentStep) {
        if (!!model && !!model.wizardSteps) {
            if (!model.wizardSteps.some(s => s === currentStep)) {
                model.wizardSteps.push(currentStep);
            }
        }
        return model.wizardSteps;
    }
    getBackUrlForInsertConto(model, currentStep) {
        let backUrl = null;
        if (currentStep === 'step1') {
            backUrl = '/anagrafiche/conti';
        }
        else {
            let previousStep = null;
            let index = -1;
            if (!!model && !!model.wizardSteps) {
                index = model.wizardSteps.findIndex(s => s === currentStep);
                previousStep = model.wizardSteps[index - 1];
            }
            if (index > 0) {
                backUrl = '/anagrafiche/conti/inserimento/'.concat(previousStep);
            }
            else {
                backUrl = '/anagrafiche/conti';
                if (currentStep === 'step2') {
                    backUrl = '/anagrafiche/parties/dettaglio';
                }
            }
        }
        return backUrl;
    }
    setStepForAssociaConto(model, currentStep) {
        if (!!model && !!model.wizardSteps) {
            if (!model.wizardSteps.some(s => s === currentStep)) {
                model.wizardSteps.push(currentStep);
            }
        }
        return model.wizardSteps;
    }
    getBackUrlForAssociaConto(model, currentStep) {
        let backUrl = null;
        if (currentStep === 'associa-step1') {
            backUrl = '/anagrafiche/parties/dettaglio';
        }
        else {
            let previousStep = null;
            let index = -1;
            if (!!model && !!model.wizardSteps) {
                index = model.wizardSteps.findIndex(s => s === currentStep);
                previousStep = model.wizardSteps[index - 1];
            }
            if (index > 0) {
                backUrl = '/anagrafiche/parties/dettaglio/sfruttamento/'.concat(previousStep);
            }
            else {
                backUrl = '/anagrafiche/parties/dettaglio';
            }
        }
        return backUrl;
    }
}


/***/ }),

/***/ "./src/app/views/anagrafiche/generic-table/generic-table.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-table/generic-table.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drop-show {\n  padding: 4px;\n  width: 222px;\n  background-color: #FFF;\n  border: 1px solid #BABABA;\n  position: absolute;\n  z-index: 100;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);\n  margin-left: 1px;\n}\n\n.drop-show label {\n  display: block;\n  font-size: 10px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.drop-show label input {\n  vertical-align: top;\n}\n\n.drop-show label span {\n  display: inline-block;\n}\n\n.column-selection {\n  z-index: 20;\n}\n\n/*adattamento ag grid in card*/\n\n.ag-layout-auto-height .ag-center-cols-clipper, .ag-layout-auto-height .ag-center-cols-container, .ag-layout-print .ag-center-cols-clipper, .ag-layout-print .ag-center-cols-container {\n  min-height: 45px !important;\n}\n\n.ag-center-cols-viewport {\n  width: 100%;\n  overflow-x: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2FuYWdyYWZpY2hlL2dlbmVyaWMtdGFibGUvQzpcXFVzZXJzXFxJU0MwNzRcXERvd25sb2Fkc1xcd2V0cmFuc2Zlcl9nZXBhLWNvbnRpLWxvcm8temlwXzIwMjItMDItMDFfMTMxMlxcd2ViYXBwXFxzcmNcXGFwcFxcY29tbW9uXFx0YWIvLi5cXC4uXFx2aWV3c1xcYW5hZ3JhZmljaGVcXGdlbmVyaWMtdGFibGVcXGdlbmVyaWMtdGFibGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9nZW5lcmljLXRhYmxlL2dlbmVyaWMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FEREEsOEJBQUE7O0FBQ0E7RUFDRSwyQkFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FDSUYiLCJmaWxlIjoiLi4vLi4vdmlld3MvYW5hZ3JhZmljaGUvZ2VuZXJpYy10YWJsZS9nZW5lcmljLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Atc2hvdyB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIHdpZHRoOiAyMjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQUJBQkE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsMCwwLC4xNSk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsMCwwLC4xNSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG4uZHJvcC1zaG93IGxhYmVse1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgZm9udC1zaXplOjEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiByZ2IoMCwwLDAsIDAuNSk7XHJcbn1cclxuLmRyb3Atc2hvdyBsYWJlbCBpbnB1dHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5kcm9wLXNob3cgbGFiZWwgc3BhbntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbHVtbi1zZWxlY3Rpb257XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi8qYWRhdHRhbWVudG8gYWcgZ3JpZCBpbiBjYXJkKi9cclxuLmFnLWxheW91dC1hdXRvLWhlaWdodCAuYWctY2VudGVyLWNvbHMtY2xpcHBlciwgLmFnLWxheW91dC1hdXRvLWhlaWdodCAuYWctY2VudGVyLWNvbHMtY29udGFpbmVyLCAuYWctbGF5b3V0LXByaW50IC5hZy1jZW50ZXItY29scy1jbGlwcGVyLCAuYWctbGF5b3V0LXByaW50IC5hZy1jZW50ZXItY29scy1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFnLWNlbnRlci1jb2xzLXZpZXdwb3J0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iLCIuZHJvcC1zaG93IHtcbiAgcGFkZGluZzogNHB4O1xuICB3aWR0aDogMjIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQUJBQkE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuLmRyb3Atc2hvdyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmRyb3Atc2hvdyBsYWJlbCBpbnB1dCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kcm9wLXNob3cgbGFiZWwgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbHVtbi1zZWxlY3Rpb24ge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLyphZGF0dGFtZW50byBhZyBncmlkIGluIGNhcmQqL1xuLmFnLWxheW91dC1hdXRvLWhlaWdodCAuYWctY2VudGVyLWNvbHMtY2xpcHBlciwgLmFnLWxheW91dC1hdXRvLWhlaWdodCAuYWctY2VudGVyLWNvbHMtY29udGFpbmVyLCAuYWctbGF5b3V0LXByaW50IC5hZy1jZW50ZXItY29scy1jbGlwcGVyLCAuYWctbGF5b3V0LXByaW50IC5hZy1jZW50ZXItY29scy1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZy1jZW50ZXItY29scy12aWV3cG9ydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/generic-table/generic-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-table/generic-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: GenericTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericTableComponent", function() { return GenericTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _utilities_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/export */ "./src/app/utilities/export.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/enum */ "./src/app/models/enum.ts");





let GenericTableComponent = class GenericTableComponent {
    constructor() {
        this.localeText = _models__WEBPACK_IMPORTED_MODULE_2__["localeText"];
        this.showDropDown = false;
        this.columnToDisplay = [];
        this.columnDefs = [];
        this.actionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paginationChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.colToDisplayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set modelValue(value) {
        this.model = value;
        this.buildColumnToDisplayForSelection();
        this.buildColumnDefToDisplay();
        this.pageSize = this.model.gridOptions.paginationPageSize;
    }
    ngOnInit() {
        const page = (!!this.model.currentPage ? this.model.currentPage : 0);
        if (!!this.pageSize) {
            this.model.gridOptions = {
                onGridReady: () => {
                    this.model.gridOptions.api.paginationSetPageSize(this.pageSize);
                    this.model.gridOptions.api.paginationGoToPage(page);
                    if (!!this.model.columnToDisplay) {
                        this.columnToDisplay = this.model.columnToDisplay;
                        this.columnToDisplay.forEach(ctd => {
                            const colId = ctd.colId;
                            const checked = ctd.checked;
                            const columnState = this.model.gridOptions.columnApi.getColumnState();
                            columnState.find(c => c.colId == colId).hide = !checked;
                            this.model.gridOptions.columnApi.setColumnState(columnState);
                            const colDef = this.model.gridOptions.columnApi.getColumn(colId).getColDef();
                            colDef.exportOptions.skipColumn = !checked;
                            this.model.gridOptions.api.sizeColumnsToFit();
                        });
                    }
                    if (!!this.model.sortModel) {
                        this.model.gridOptions.api.setSortModel(this.model.sortModel);
                    }
                    if (!!this.model.filterModel) {
                        this.model.gridOptions.api.setFilterModel(this.model.filterModel);
                    }
                    const onPaginationChanged = () => {
                        console.log('onPaginationChanged' + this.model.gridOptions.api.paginationGetCurrentPage());
                        this.paginationChanged.emit(this.model.gridOptions.api.paginationGetCurrentPage());
                    };
                    this.model.gridOptions.onPaginationChanged = onPaginationChanged;
                    const onSortChanged = () => {
                        console.log('onSortChanged' + this.model.gridOptions.api.getSortModel());
                        this.sortChanged.emit(this.model.gridOptions.api.getSortModel());
                    };
                    this.model.gridOptions.onSortChanged = onSortChanged;
                    const onFilterChanged = () => {
                        console.log('onFilterChanged' + this.model.gridOptions.api.getFilterModel());
                        this.filterChanged.emit(this.model.gridOptions.api.getFilterModel());
                    };
                    this.model.gridOptions.onFilterChanged = onFilterChanged;
                }
            };
        }
    }
    buildColumnToDisplayForSelection() {
        this.model.columnDefs.forEach(c => {
            if (c.headerName !== 'AZIONI' && c.headerName !== '') {
                this.columnToDisplay.push({ name: c.headerName, checked: true, colId: c.colId });
            }
        });
    }
    buildColumnDefToDisplay() {
        this.columnDefs = [];
        this.model.columnDefs.forEach(cd => {
            const current_ctd = this.columnToDisplay.find(ctd => ctd.name === cd.headerName);
            if ((!!current_ctd && !!current_ctd.checked) || cd.headerName === 'AZIONI' || cd.headerName === '') {
                this.columnDefs.push(cd);
            }
        });
    }
    manageCheck(name, checked, colId) {
        this.columnToDisplay.find(ctd => ctd.name === name).checked = checked;
        if (!!this.model.gridOptions.api) {
            const columnState = this.model.gridOptions.columnApi.getColumnState();
            columnState.find(c => c.colId == colId).hide = !checked;
            this.model.gridOptions.columnApi.setColumnState(columnState);
            const colDef = this.model.gridOptions.columnApi.getColumn(colId).getColDef();
            colDef.exportOptions.skipColumn = !checked;
            this.model.gridOptions.api.sizeColumnsToFit();
        }
        this.colToDisplayEmitter.emit({ columnToDisplay: this.columnToDisplay });
    }
    exportCsv() {
        try {
            this.showSpinner();
            const printParams = this.buildPrintParamsCsv();
            const rowData = this.model.rowData;
            console.log(rowData);
            const gridApi = this.model.gridOptions.api;
            const columnApi = this.model.gridOptions.columnApi;
            Object(_utilities_export__WEBPACK_IMPORTED_MODULE_3__["exportToCsv"])(printParams, gridApi, columnApi);
            this.hideSpinner();
        }
        catch (e) {
            this.hideSpinner();
        }
    }
    buildPrintParamsCsv() {
        const printParams = {
            CSV_FILE_NAME: 'export.csv'
        };
        return printParams;
    }
    exportPdf() {
        try {
            this.showSpinner();
            const printParams = this.buildPrintParamsPdf();
            const gridApi = this.model.gridOptions.api;
            const columnApi = this.model.gridOptions.columnApi;
            Object(_utilities_export__WEBPACK_IMPORTED_MODULE_3__["exportToPdf"])(printParams, gridApi, columnApi);
            this.hideSpinner();
        }
        catch (e) {
            this.hideSpinner();
        }
    }
    buildPrintParamsPdf() {
        const printParams = {
            PDF_HEADER_COLOR: '#f8f8f8',
            PDF_INNER_BORDER_COLOR: '#dde2eb',
            PDF_OUTER_BORDER_COLOR: '#babfc7',
            PDF_LOGO: location.origin + '/assets/images/logo-bdi.png',
            PDF_PAGE_ORITENTATION: 'landscape',
            PDF_WITH_HEADER_IMAGE: false,
            PDF_WITH_FOOTER_PAGE_COUNT: true,
            PDF_HEADER_HEIGHT: 25,
            PDF_ROW_HEIGHT: 15,
            PDF_ODD_BKG_COLOR: '#fcfcfc',
            PDF_EVEN_BKG_COLOR: '#ffffff',
            PDF_WITH_CELL_FORMATTING: true,
            PDF_WITH_COLUMNS_AS_LINKS: true,
            PDF_SELECTED_ROWS_ONLY: false,
            PDF_FILE_NAME: 'export.pdf'
        };
        return printParams;
    }
    showSpinner() {
        this.actionEmitter.emit(_models_enum__WEBPACK_IMPORTED_MODULE_4__["SpinnerEventEnum"].SHOW);
    }
    hideSpinner() {
        this.actionEmitter.emit(_models_enum__WEBPACK_IMPORTED_MODULE_4__["SpinnerEventEnum"].HIDE);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('model'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], GenericTableComponent.prototype, "modelValue", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('action'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GenericTableComponent.prototype, "actionEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationChanged'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GenericTableComponent.prototype, "paginationChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('sortChanged'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GenericTableComponent.prototype, "sortChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('filterChanged'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GenericTableComponent.prototype, "filterChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('colToDisplay'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GenericTableComponent.prototype, "colToDisplayEmitter", void 0);
GenericTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generic-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-table/generic-table.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./generic-table.component.scss */ "./src/app/views/anagrafiche/generic-table/generic-table.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GenericTableComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-table/generic-table.module.ts ***!
  \*************************************************************************/
/*! exports provided: GenericTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericTableModule", function() { return GenericTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _generic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-table.component */ "./src/app/views/anagrafiche/generic-table/generic-table.component.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let GenericTableModule = class GenericTableModule {
};
GenericTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_generic_table_component__WEBPACK_IMPORTED_MODULE_3__["GenericTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__["BDIDatagridModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ],
        exports: [_generic_table_component__WEBPACK_IMPORTED_MODULE_3__["GenericTableComponent"]]
    })
], GenericTableModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/info-panel/info-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/anagrafiche/info-panel/info-panel.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9pbmZvLXBhbmVsL2luZm8tcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/info-panel/info-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/anagrafiche/info-panel/info-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPanelComponent", function() { return InfoPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InfoPanelComponent = class InfoPanelComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
    }
    set modelValue(value) {
        console.log('value', value);
        this.model = value;
    }
    ngOnInit() {
    }
    navigate(route, routeParam, sessionKey) {
        this.ngZone.run(() => {
            let navigationExtras = {};
            if (!!sessionKey) {
                sessionStorage.setItem(sessionKey, JSON.stringify(routeParam));
            }
            else {
                navigationExtras = {
                    queryParams: routeParam
                };
            }
            this.router.navigate([route], navigationExtras);
        });
    }
};
InfoPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('model'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], InfoPanelComponent.prototype, "modelValue", null);
InfoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/info-panel/info-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-panel.component.scss */ "./src/app/views/anagrafiche/info-panel/info-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InfoPanelComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/anagrafiche/info-panel/info-panel.module.ts ***!
  \*******************************************************************/
/*! exports provided: InfoPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPanelModule", function() { return InfoPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _info_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-panel.component */ "./src/app/views/anagrafiche/info-panel/info-panel.component.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");





let InfoPanelModule = class InfoPanelModule {
};
InfoPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_info_panel_component__WEBPACK_IMPORTED_MODULE_3__["InfoPanelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__["BDITooltipModule"].forRoot()
        ],
        exports: [_info_panel_component__WEBPACK_IMPORTED_MODULE_3__["InfoPanelComponent"]]
    })
], InfoPanelModule);



/***/ })

}]);
//# sourceMappingURL=default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2.js.map