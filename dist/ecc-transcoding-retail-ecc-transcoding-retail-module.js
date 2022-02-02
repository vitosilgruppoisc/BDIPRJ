(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecc-transcoding-retail-ecc-transcoding-retail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Eccezione Transcodifica Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Eccezione Transcodifica Dettaglio</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\"class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuova Eccezione Transcodifica Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"inserimentoForm\" (ngSubmit)=\"saveEccTranscodingRetail()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nsc\" class=\"col-2 col-form-label\">Nsc<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nsc\" class=\"form-control\" [class.is-invalid]=\"nsc.invalid && (form.submitted || (nsc.dirty || nsc.touched))\" formControlName=\"nsc\" maxlength=\"10\" [readOnly]=\"readonlyForm \"/>\r\n                                <div *ngIf=\"nsc.errors?.required && (form.submitted || (nsc.dirty || nsc.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"nsc.errors?.pattern && (form.submitted || (nsc.dirty || nsc.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"countryCode\" class=\"col-2 col-form-label\">Country Code<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!readonlyForm; else countryCodeTemp\" id=\"countryCode\" class=\"form-control\" [class.is-invalid]=\"countryCode.invalid && (form.submitted || (countryCode.dirty || countryCode.touched))\" formControlName=\"countryCode\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let c of countryCodeList\" [value]=\"c.codice\">{{c.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"countryCode.errors?.required && (form.submitted || (countryCode.dirty || countryCode.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #countryCodeTemp>\r\n                                <input class=\"form-control\" [value]=\"getCountryCodeValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && (form.submitted || (bic.dirty || bic.touched))\" formControlName=\"bic\" [readOnly]=\"readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bic.errors?.required && (form.submitted || (bic.dirty || bic.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bic.errors?.syntax && (form.submitted || (bic.dirty || bic.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"readonlyForm\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputdataInizioValidita\">\r\n                                <input id=\"dataInizioValidita\" class=\"form-control\" [class.is-invalid]=\"dataInizioValidita.invalid && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValidita\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataInizioValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataInizioValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"dataInizioValidita.errors?.required && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.dateformat && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.daterange && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataInizioValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataInizioValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                        <label for=\"dataFineValidita\" class=\"col-2 col-form-label\">Data Fine Validità<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputdataFineValidita\">\r\n                                <input id=\"dataFineValidita\" class=\"form-control\" [class.is-invalid]=\"dataFineValidita.invalid && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValidita\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataFineValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataFineValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.required && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.dateformat  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.daterange  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataFineValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataFineValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"!readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\">Salva</button>\r\n                        </div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"resetForm()\">Nuovo Inserimento</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-edit\"></i> Modifica Eccezione Transcodifica Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"modificaForm\" (ngSubmit)=\"modifyEccTranscodingRetail()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nsc\" class=\"col-2 col-form-label\">Nsc<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nsc\" class=\"form-control\" [class.is-invalid]=\"nsc.invalid && (form.submitted || (nsc.dirty || nsc.touched))\" formControlName=\"nsc\" maxlength=\"10\" [readOnly]=\"!checkednsc.value || readonlyForm \"/>\r\n                                <div *ngIf=\"nsc.errors?.required && (form.submitted || (nsc.dirty || nsc.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"nsc.errors?.pattern && (form.submitted || (nsc.dirty || nsc.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkednsc\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkednsc\" type=\"checkbox\" formControlName=\"checkednsc\" (click)=\"manageCheckBox('nsc')\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"countryCode\" class=\"col-2 col-form-label\">Country Code<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"countryCode\" class=\"form-control\" [value]=\"getCountryCodeValue()\" [readOnly]=\"true\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedcountryCode\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedcountryCode\" type=\"checkbox\" formControlName=\"checkedcountryCode\" (click)=\"manageCheckBox('countryCode')\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && (form.submitted || (bic.dirty || bic.touched))\" formControlName=\"bic\" [readOnly]=\"!checkedbic.value || readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bic.errors?.required && (form.submitted || (bic.dirty || bic.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bic.errors?.syntax && (form.submitted || (bic.dirty || bic.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedbic\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedbic\" type=\"checkbox\" formControlName=\"checkedbic\" (click)=\"manageCheckBox('bic')\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"!checkeddescrizione.value || readonlyForm\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddescrizione\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddescrizione\" type=\"checkbox\" formControlName=\"checkeddescrizione\" (click)=\"manageCheckBox('descrizione')\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"validFrom\" class=\"col-2 col-form-label\">Data Inizio Validità<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkedvalidFrom.value && !readonlyForm); else inputvalidFrom\">\r\n                                <input id=\"validFrom\" class=\"form-control\" [class.is-invalid]=\"validFrom.invalid && (form.submitted || (validFrom.dirty || validFrom.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"validFrom\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!validFrom.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('validFrom')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"validFrom.errors?.required && (form.submitted || (validFrom.dirty || validFrom.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"validFrom.errors?.dateformat && (form.submitted || (validFrom.dirty || validFrom.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"validFrom.errors?.daterange  && (validFrom.dirty || validFrom.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputvalidFrom>\r\n                            <input class=\"form-control\" [value]=\"getvalidFromValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedvalidFrom\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedvalidFrom\" type=\"checkbox\" formControlName=\"checkedvalidFrom\" (click)=\"manageCheckBox('validFrom', 'date')\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"validTo\" class=\"col-2 col-form-label\">Data Fine Validità<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkedvalidTo.value && !readonlyForm); else inputvalidTo\">\r\n                                <input id=\"validTo\" class=\"form-control\" [class.is-invalid]=\"validTo.invalid && (form.submitted || (validTo.dirty || validTo.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"validTo\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" />\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!validTo.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('validTo')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"validTo.errors?.required && (form.submitted || (validTo.dirty || validTo.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"validTo.errors?.dateformat && (form.submitted || (validTo.dirty || validTo.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"validTo.errors?.daterange  && (validTo.dirty || validTo.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputvalidTo>\r\n                            <input class=\"form-control\" [value]=\"getvalidToValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedvalidTo\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedvalidTo\" type=\"checkbox\" formControlName=\"checkedvalidTo\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fa fa-users\"></i> Anagrafica Eccezioni Transcodifica Dettaglio </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"row mb-2\" *ngIf=\"userIsDet\">\r\n                    <div class=\"col-3\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToInsertEccTranscodingRetail()\">Nuova Eccezione Transcodifica Dettaglio</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nsc\" class=\"col-2 col-form-label\">Nsc:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nsc\" class=\"form-control\" [class.is-invalid]=\"nsc.invalid && (nsc.dirty || nsc.touched)\" formControlName=\"nsc\" maxlength=\"15\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"nsc.errors?.wildcard && (nsc.dirty || nsc.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"nsc.errors?.pattern && (nsc.dirty || nsc.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"countryCode\" class=\"col-2 col-form-label\">Country Code:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"countryCode\" class=\"form-control\" [class.is-invalid]=\"countryCode.invalid && (countryCode.dirty || countryCode.touched)\" formControlName=\"countryCode\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of countryCodeList\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && (bic.dirty || bic.touched)\" formControlName=\"bic\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bic.errors?.wildcard && (bic.dirty || bic.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bic.errors?.syntax && (bic.dirty || bic.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"descrizione.errors?.wildcard && (descrizione.dirty || descrizione.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Inizio Validita-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Inizio Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaDa.invalid && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaDa\"  bdiDatepicker #datepickerDIVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.dateformat && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.daterange && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaA.invalid && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaA\"  bdiDatepicker #datepickerDIVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.dateformat && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.daterange && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Fine Validità:-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Fine Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaDa.invalid && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaDa\"  bdiDatepicker #datepickerDFVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.dateformat && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.daterange && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaA.invalid && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaA\"  bdiDatepicker #datepickerDFVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.dateformat && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.daterange && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target, true)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"eccTranscodingRetailModel\" (action)=\"onActionEvent($event)\" (colToDisplay)=\"onColToDisplayEvent($event, this.eccTranscodingRetailService.searchModel)\" (paginationChanged)=\"onPaginationEvent($event, this.eccTranscodingRetailService.searchModel)\" (sortChanged)=\"onSortEvent($event, this.eccTranscodingRetailService.searchModel)\" (filterChanged)=\"onFilterEvent($event, this.eccTranscodingRetailService.searchModel)\"></app-generic-table>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\">\r\n        <span class=\"input-group-text\">\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n        </div>\r\n    </ng-template>\r\n");

/***/ }),

/***/ "./src/app/services/ecc-transcoding-retail.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/ecc-transcoding-retail.service.ts ***!
  \************************************************************/
/*! exports provided: EccTranscodingRetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccTranscodingRetailService", function() { return EccTranscodingRetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");







let EccTranscodingRetailService = class EccTranscodingRetailService extends _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] {
    constructor(http, configurationService) {
        super(http, configurationService);
        this.http = http;
        this.configurationService = configurationService;
    }
    getEccezioniTranscodingRetail(searchString) {
        return this.http.get(`${this.apiEndpointU2A}/eccTranscodingRetail?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)));
    }
    getEccezioneTranscodingRetail(idEcc) {
        return this.http.get(`${this.apiEndpointU2A}/eccTranscodingRetail/${idEcc}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getEccezioneTranscodingRetail', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
EccTranscodingRetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
EccTranscodingRetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], EccTranscodingRetailService);



/***/ }),

/***/ "./src/app/validators/ecc-trans-ret-nsc-validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/validators/ecc-trans-ret-nsc-validator.ts ***!
  \***********************************************************/
/*! exports provided: eccTranscodingRetailNscValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eccTranscodingRetailNscValidator", function() { return eccTranscodingRetailNscValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/enum */ "./src/app/models/enum.ts");


function eccTranscodingRetailNscValidator() {
    return (form) => {
        const nsc = form.controls['nsc'];
        const countryCode = form.controls['countryCode'];
        if (!!nsc && !!nsc.value) {
            let pattern = '^[0-9%]{10}$';
            if (!!countryCode && !!countryCode.value && Object.values(_models_enum__WEBPACK_IMPORTED_MODULE_1__["CountryCodeForNscRuleValidationEnum"]).includes(countryCode.value)) {
                pattern = '^[0-9%]{5}([0-9%]{5}|[*])$';
            }
            if (!new RegExp(pattern).test(nsc.value)) {
                nsc.setErrors({ pattern: true });
            }
        }
        return;
    };
}


/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/abstract-ecc-transcoding-retail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/abstract-ecc-transcoding-retail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AbstractEccTranscodingRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEccTranscodingRetailComponent", function() { return AbstractEccTranscodingRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");



class AbstractEccTranscodingRetailComponent extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__["AbstractAnagraficheComponent"] {
    constructor(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingRetailService = eccTranscodingRetailService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.routingService = routingService;
        this.route = route;
        this.isActive = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildCombo();
    }
    buildCombo() {
        this.eccTranscodingRetailService.getCountryCodes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => this.countryCodeList = res)).subscribe();
    }
}


/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctcmV0YWlsL2RldHRhZ2xpby1lY2MtdHJhbnNjb2RpbmctcmV0YWlsL2RldHRhZ2xpby1lY2MtdHJhbnNjb2RpbmctcmV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DettaglioEccTranscodingRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioEccTranscodingRetailComponent", function() { return DettaglioEccTranscodingRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/abstract-ecc-transcoding-retail.component.ts");
/* harmony import */ var _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-retail.service */ "./src/app/services/ecc-transcoding-retail.service.ts");










let DettaglioEccTranscodingRetailComponent = class DettaglioEccTranscodingRetailComponent extends _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_8__["AbstractEccTranscodingRetailComponent"] {
    constructor(router, eccTranscodingRetailService, securityService, userService, formatterUtils, route, routingService) {
        super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
        this.router = router;
        this.eccTranscodingRetailService = eccTranscodingRetailService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.route = route;
        this.routingService = routingService;
    }
    ngOnInit() {
        this.checkUserDet();
        this.route.queryParams.subscribe(params => {
            const detailEccSessionObj = this.getSession(this.routingService.ECC_TRANS_RET_DETAIL);
            if (!!detailEccSessionObj) {
                this.loadSections(detailEccSessionObj.idEccTransRet);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idEccTransRet) {
        this.showSpinner();
        this.eccTranscodingRetailService.getEccezioneTranscodingRetail(idEccTransRet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(res => {
            this.eccTransRet = res;
            this.buildEccTransRetSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        })).subscribe();
    }
    buildEccTransRetSection() {
        const data = [
            [this.buildInfoPanelElement('Nsc', 'string', this.eccTransRet, 'nsc'), this.buildInfoPanelElement('Country Code', 'string', this.eccTransRet, 'countryCode.descrizione')],
            [this.buildInfoPanelElement('Bic', 'string', this.eccTransRet, 'bic'), this.buildInfoPanelElement('Descrizione', 'string', this.eccTransRet, 'descrizione')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.eccTransRet, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.eccTransRet, 'validTo')],
            [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.eccTransRet, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.eccTransRet, 'utenteValidazione')]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
    }
};
DettaglioEccTranscodingRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_9__["EccTranscodingRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__["FormatterUtils"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"] }
];
DettaglioEccTranscodingRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-ecc-transcoding-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-ecc-transcoding-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-ecc-transcoding-retail.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_9__["EccTranscodingRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__["FormatterUtils"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"]])
], DettaglioEccTranscodingRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/ecc-transcoding-retail-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/ecc-transcoding-retail-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: EccTranscodingRetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccTranscodingRetailRoutingModule", function() { return EccTranscodingRetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modifica_ecc_transcoding_retail_modifica_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.ts");
/* harmony import */ var _ricerca_ecc_transcoding_retail_ricerca_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dettaglio_ecc_transcoding_retail_dettaglio_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inserimento_ecc_transcoding_retail_inserimento_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");









const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Eccezioni Transcodifica Dettaglio',
        },
        children: [
            {
                path: '',
                component: _ricerca_ecc_transcoding_retail_ricerca_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_2__["RicercaEccTranscodingRetailComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]]
            },
            {
                path: 'dettaglio',
                component: _dettaglio_ecc_transcoding_retail_dettaglio_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_4__["DettaglioEccTranscodingRetailComponent"],
                data: {
                    title: 'Dettaglio Eccezione Transcodifica Dettaglio',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]],
            },
            {
                path: 'inserimento',
                component: _inserimento_ecc_transcoding_retail_inserimento_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_7__["InserimentoEccTranscodingRetailComponent"],
                data: {
                    title: 'Nuova Eccezione Transcodifica Dettaglio',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]],
            },
            {
                path: 'modifica',
                component: _modifica_ecc_transcoding_retail_modifica_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_1__["ModificaEccTranscodingRetailComponent"],
                data: {
                    title: 'Modifica Eccezione Transcodifica Dettaglio',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"]],
            },
        ]
    }
];
let EccTranscodingRetailRoutingModule = class EccTranscodingRetailRoutingModule {
};
EccTranscodingRetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], EccTranscodingRetailRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/ecc-transcoding-retail.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/ecc-transcoding-retail.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EccTranscodingRetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccTranscodingRetailModule", function() { return EccTranscodingRetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _ecc_transcoding_retail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecc-transcoding-retail-routing.module */ "./src/app/views/anagrafiche/ecc-transcoding-retail/ecc-transcoding-retail-routing.module.ts");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ricerca_ecc_transcoding_retail_ricerca_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.ts");
/* harmony import */ var _modifica_ecc_transcoding_retail_modifica_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.ts");
/* harmony import */ var _dettaglio_ecc_transcoding_retail_dettaglio_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _inserimento_ecc_transcoding_retail_inserimento_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../directive/directive.module */ "./src/app/directive/directive.module.ts");
















let EccTranscodingRetailModule = class EccTranscodingRetailModule {
};
EccTranscodingRetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [_ricerca_ecc_transcoding_retail_ricerca_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_9__["RicercaEccTranscodingRetailComponent"], _dettaglio_ecc_transcoding_retail_dettaglio_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_11__["DettaglioEccTranscodingRetailComponent"], _modifica_ecc_transcoding_retail_modifica_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_10__["ModificaEccTranscodingRetailComponent"], _inserimento_ecc_transcoding_retail_inserimento_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_14__["InserimentoEccTranscodingRetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__["GepaGuiCommonModule"],
            _ecc_transcoding_retail_routing_module__WEBPACK_IMPORTED_MODULE_2__["EccTranscodingRetailRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_3__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_12__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["BDIDatagridModule"].withComponents([
                _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_1__["GenericActionRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["BDITooltipModule"].forRoot(),
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_13__["GenericActionRenderModule"],
            _directive_directive_module__WEBPACK_IMPORTED_MODULE_15__["DirectiveModule"]
        ],
        entryComponents: [_generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_1__["GenericActionRenderComponent"]],
    })
], EccTranscodingRetailModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctcmV0YWlsL2luc2VyaW1lbnRvLWVjYy10cmFuc2NvZGluZy1yZXRhaWwvaW5zZXJpbWVudG8tZWNjLXRyYW5zY29kaW5nLXJldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: InserimentoEccTranscodingRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoEccTranscodingRetailComponent", function() { return InserimentoEccTranscodingRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../abstract-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/abstract-ecc-transcoding-retail.component.ts");
/* harmony import */ var _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-retail.service */ "./src/app/services/ecc-transcoding-retail.service.ts");
/* harmony import */ var _validators_ecc_trans_ret_nsc_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../validators/ecc-trans-ret-nsc-validator */ "./src/app/validators/ecc-trans-ret-nsc-validator.ts");
















let InserimentoEccTranscodingRetailComponent = class InserimentoEccTranscodingRetailComponent extends _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_13__["AbstractEccTranscodingRetailComponent"] {
    constructor(router, eccTranscodingRetailService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route) {
        super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingRetailService = eccTranscodingRetailService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const insertEccSessionObj = this.getSession(this.routingService.ECC_TRANS_RET_INSERT);
            if (!!insertEccSessionObj) {
                this.backUrl = this.routingService.getRouteByKey(insertEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
        super.ngOnInit();
        this.buildForm();
    }
    buildForm() {
        this.inserimentoForm = this.formBuilder.group({
            nsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.bicValidator.bind(this)]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dataFineValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_9__["dateValidator"])([{ field1: 'dataInizioValidita', required1: true, field2: 'dataFineValidita', required2: true }]),
                Object(_validators_ecc_trans_ret_nsc_validator__WEBPACK_IMPORTED_MODULE_15__["eccTranscodingRetailNscValidator"])()
            ]) });
        this.countryCode.valueChanges.subscribe(() => {
            this.manageCountryCode();
        });
    }
    manageCountryCode() {
        this.nsc.updateValueAndValidity();
    }
    get nsc() { return this.inserimentoForm.get('nsc'); }
    get countryCode() { return this.inserimentoForm.get('countryCode'); }
    get bic() { return this.inserimentoForm.get('bic'); }
    get descrizione() { return this.inserimentoForm.get('descrizione'); }
    get dataInizioValidita() { return this.inserimentoForm.get('dataInizioValidita'); }
    get dataFineValidita() { return this.inserimentoForm.get('dataFineValidita'); }
    reset(field) {
        this.inserimentoForm.get(field).setValue(undefined);
    }
    saveEccTranscodingRetail() {
        this.resetError();
        this.isResultOk = false;
        if (this.inserimentoForm.valid) {
            this.showSpinner();
            const taskEccTranscodingRetail = this.buildTaskEccTranscodingRetail();
            this.taskService.saveTaskEccTranscodingRetail(taskEccTranscodingRetail).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
                const d = new Date(res.validTo);
                this.inserimentoForm.get('dataFineValidita').setValue({ year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() });
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
                console.log('Error - saveEccTranscodingRetail', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccTranscodingRetail() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_10__["TipoOperazioneEnum"].INS
            },
            nsc: this.nsc.value,
            countryCode: {
                codice: this.countryCode.value
            },
            bic: this.bic.value,
            descrizione: this.descrizione.value,
            validFrom: this.formatterUtils.dateToString(this.dataInizioValidita.value),
            validTo: this.formatterUtils.dateToString((!!this.dataFineValidita.value ? this.dataFineValidita.value : { year: 9999, month: 12, day: 31 }))
        };
    }
    resetForm() {
        this.readonlyForm = false;
        this.isResultOk = false;
        this.buildForm();
    }
    getCountryCodeValue() {
        return this.countryCodeList.find(t => t.codice == this.countryCode.value).descrizione;
    }
    getDataInizioValiditaValue() {
        return this.formatterUtils.dateToString(this.dataInizioValidita.value);
    }
    getDataFineValiditaValue() {
        return this.formatterUtils.dateToString(this.dataFineValidita.value);
    }
};
InserimentoEccTranscodingRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_14__["EccTranscodingRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
InserimentoEccTranscodingRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-ecc-transcoding-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-ecc-transcoding-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-ecc-transcoding-retail.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-retail/inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_14__["EccTranscodingRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], InserimentoEccTranscodingRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctcmV0YWlsL21vZGlmaWNhLWVjYy10cmFuc2NvZGluZy1yZXRhaWwvbW9kaWZpY2EtZWNjLXRyYW5zY29kaW5nLXJldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: ModificaEccTranscodingRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaEccTranscodingRetailComponent", function() { return ModificaEccTranscodingRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-retail.service */ "./src/app/services/ecc-transcoding-retail.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/abstract-ecc-transcoding-retail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");

















let ModificaEccTranscodingRetailComponent = class ModificaEccTranscodingRetailComponent extends _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_6__["AbstractEccTranscodingRetailComponent"] {
    constructor(router, eccTranscodingRetailService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route, utils) {
        super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingRetailService = eccTranscodingRetailService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.routingService = routingService;
        this.route = route;
        this.utils = utils;
        this.utils = utils;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const modifyEccSessionObj = this.getSession(this.routingService.ECC_TRANS_RET_MODIFY);
            if (!!modifyEccSessionObj) {
                this.load(modifyEccSessionObj.idEccTransRet);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idEcc) {
        this.showSpinner();
        this.eccTranscodingRetailService.getEccezioneTranscodingRetail(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => {
            this.eccTransRet = res;
            this.buildForm();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            console.log('Error - load', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
        })).subscribe();
    }
    buildForm() {
        const validFrom = new Date(this.eccTransRet.validFrom);
        const validTo = new Date(this.eccTransRet.validTo);
        this.modificaForm = this.formBuilder.group({
            nsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.eccTransRet.nsc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.eccTransRet.countryCode.codice, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.eccTransRet.bic, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.bicValidator.bind(this)]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.eccTransRet.descrizione, []),
            validFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: validFrom.getFullYear(), month: (validFrom.getUTCMonth() + 1), day: validFrom.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            validTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate() }, []),
            checkednsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedcountryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedbic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkeddescrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedvalidFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedvalidTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, [])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_11__["dateValidator"])([{ field1: 'validFrom', required1: true, field2: 'validTo', required2: true }])
            ]) });
    }
    get nsc() { return this.modificaForm.get('nsc'); }
    get countryCode() { return this.modificaForm.get('countryCode'); }
    get bic() { return this.modificaForm.get('bic'); }
    get descrizione() { return this.modificaForm.get('descrizione'); }
    get validFrom() { return this.modificaForm.get('validFrom'); }
    get validTo() { return this.modificaForm.get('validTo'); }
    get checkednsc() { return this.modificaForm.get('checkednsc'); }
    get checkedcountryCode() { return this.modificaForm.get('checkedcountryCode'); }
    get checkedbic() { return this.modificaForm.get('checkedbic'); }
    get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
    get checkedvalidFrom() { return this.modificaForm.get('checkedvalidFrom'); }
    get checkedvalidTo() { return this.modificaForm.get('checkedvalidTo'); }
    reset(field) {
        this.modificaForm.get(field).setValue(undefined);
    }
    manageCheckBox(field, type) {
        if (this.modificaForm.get('checked'.concat(field)).value) {
            let val = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(this.eccTransRet, field);
            if (!!type && type == 'date') {
                val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
            }
            this.modificaForm.get(field).setValue(val);
        }
        else {
            //this.modificaForm.get(field).setValue(null);
        }
    }
    modifyEccTranscodingRetail() {
        this.resetError();
        this.isResultOk = false;
        if (this.modificaForm.valid) {
            this.showSpinner();
            const taskEccTranscodingReatilReq = this.buildTaskEccTranscodingRetail();
            this.taskService.saveTaskEccTranscodingRetail(taskEccTranscodingReatilReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => {
                if (!!res) {
                    this.eccTransRet.validFrom = res.validFrom;
                    this.eccTransRet.countryCode = res.countryCode;
                }
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
                console.log('Error - modifyEccTranscodingRetail', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccTranscodingRetail() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_4__["TipoOperazioneEnum"].UPD
            },
            tipoTask: null,
            stato: null,
            tsInserimento: null,
            userReq: null,
            tsValidate: null,
            userValidate: null,
            noteRifiuto: null,
            nsc: this.nsc.value,
            countryCode: {
                codice: this.countryCode.value,
            },
            bic: this.bic.value,
            descrizione: this.descrizione.value,
            validFrom: this.formatterUtils.dateToString(this.validFrom.value),
            validTo: this.formatterUtils.dateToString(this.validTo.value),
            tsModifica: null,
            utenteRichiesta: null,
            utenteValidazione: null,
            nscToEdit: this.checkednsc.value,
            countryCodeToEdit: this.checkedcountryCode.value,
            bicToEdit: this.checkedbic.value,
            descrizioneToEdit: this.checkeddescrizione.value,
            validFromToEdit: this.checkedvalidFrom.value,
            validToToEdit: this.checkedvalidTo.value,
            tsModificaToEdit: false,
            utenteRichiestaToEdit: true,
            utenteValidazioneToEdit: false,
            idEccOrig: this.eccTransRet.id,
            nscOrig: null,
            countryCodeOrig: null,
            bicOrig: null,
            descrizioneOrig: null,
            validFromOrig: null,
            validToOrig: null,
            tsModificaOrig: null,
            utenteRichiestaOrig: null,
            utenteValidazioneOrig: null
        };
    }
    getCountryCodeValue() {
        return this.countryCodeList.find(t => t.codice == this.countryCode.value).descrizione;
    }
    getvalidFromValue() {
        return this.formatterUtils.dateToString(this.validFrom.value);
    }
    getvalidToValue() {
        return this.formatterUtils.dateToString(this.validTo.value);
    }
};
ModificaEccTranscodingRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_2__["EccTranscodingRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_14__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_15__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_13__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_16__["Utils"] }
];
ModificaEccTranscodingRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-modifica-ecc-transcoding-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-ecc-transcoding-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-ecc-transcoding-retail.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-retail/modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_2__["EccTranscodingRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_9__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_14__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_15__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_13__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_16__["Utils"]])
], ModificaEccTranscodingRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctcmV0YWlsL3JpY2VyY2EtZWNjLXRyYW5zY29kaW5nLXJldGFpbC9yaWNlcmNhLWVjYy10cmFuc2NvZGluZy1yZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: RicercaEccTranscodingRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicercaEccTranscodingRetailComponent", function() { return RicercaEccTranscodingRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../abstract-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/ecc-transcoding-retail/abstract-ecc-transcoding-retail.component.ts");
/* harmony import */ var _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-retail.service */ "./src/app/services/ecc-transcoding-retail.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);

















let RicercaEccTranscodingRetailComponent = class RicercaEccTranscodingRetailComponent extends _abstract_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_14__["AbstractEccTranscodingRetailComponent"] {
    constructor(eccTranscodingRetailService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route, router) {
        super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingRetailService = eccTranscodingRetailService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.utils = utils;
        this.routingService = routingService;
        this.route = route;
        this.router = router;
        this.showTable = false;
        this.util = utils;
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildForm();
        this.buildModel();
        this.manageNavigation();
    }
    manageNavigation() {
        this.route.queryParams.subscribe(params => {
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            }
            else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }
    getSearcModel() {
        return this.eccTranscodingRetailService.searchModel;
    }
    setSearcModel(searchModel) {
        return this.eccTranscodingRetailService.searchModel = searchModel;
    }
    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            nsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            dataInizioValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataInizioValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataFineValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataFineValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_10__["dateValidator"])([
                { field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA' },
                { field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA' }
            ]) });
    }
    get nsc() { return this.ricercaForm.get('nsc'); }
    get countryCode() { return this.ricercaForm.get('countryCode'); }
    get bic() { return this.ricercaForm.get('bic'); }
    get descrizione() { return this.ricercaForm.get('descrizione'); }
    get dataInizioValiditaDa() { return this.ricercaForm.get('dataInizioValiditaDa'); }
    get dataInizioValiditaA() { return this.ricercaForm.get('dataInizioValiditaA'); }
    get dataFineValiditaDa() { return this.ricercaForm.get('dataFineValiditaDa'); }
    get dataFineValiditaA() { return this.ricercaForm.get('dataFineValiditaA'); }
    get utenteInserimento() { return this.ricercaForm.get('utenteInserimento'); }
    get utenteApprovatore() { return this.ricercaForm.get('utenteApprovatore'); }
    reset(field) {
        this.ricercaForm.get(field).setValue(null);
    }
    buildModel() {
        this.eccTranscodingRetailModel = {
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
        this.eccTranscodingRetailModel.gridOptions.api.sizeColumnsToFit();
        this.eccTranscodingRetailModel.gridOptions.onGridSizeChanged = evt => this.eccTranscodingRetailModel.gridOptions.api ? this.eccTranscodingRetailModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'NSC', field: 'nsc', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'COUNTRY CODE', field: 'countryCode.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'BIC', field: 'bic', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DESCRIZIONE', field: 'descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_11__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        let detailButton = null;
        if (this.userIsDet || this.userIsVis) {
            detailButton = {
                label: 'Visualizza dettaglio Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_RET_DETAIL),
                params: { idEccTransRet: data.id, backUrl: this.routingService.ECC_TRANS_RET_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_TRANS_RET_DETAIL
            };
        }
        let modifyButton = null;
        let deleteButton = null;
        //La condizione che il record debba essere attivo è statta modificata da Ernesto sul DRF: cfr mail del 20/09/21
        if (this.userIsDet /*&& this.isEccTranscodingRetailActive(data)*/) {
            modifyButton = {
                label: 'Modifica Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_RET_MODIFY),
                params: { idEccTransRet: data.id, backUrl: this.routingService.ECC_TRANS_RET_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_TRANS_RET_MODIFY
            };
        }
        return {
            detailButton: detailButton,
            modifyButton: modifyButton,
            deleteButton: deleteButton
        };
    }
    submit(targetEl, resetPage) {
        this.showTable = false;
        this.resetError();
        this.eccTranscodingRetailModel.rowData = [];
        this.eccTranscodingRetailModel.enableMessageOnSizeResultLimit = false;
        this.manageSearchModel(this.eccTranscodingRetailModel, this.getSearcModel(), resetPage);
        if (!!this.ricercaForm.valid) {
            this.showSpinner();
            if (!this.getSearcModel()) {
                this.setSearcModel(this.initSearchModel());
            }
            this.getSearcModel().form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();
            this.eccTranscodingRetailService.getEccezioniTranscodingRetail(searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(res => {
                this.eccTranscodingRetailModel.enableMessageEmptyResult = true;
                if (!!res && res.content.length > 0) {
                    this.eccTranscodingRetailModel.enableMessageEmptyResult = false;
                    this.eccTranscodingRetailModel.rowData = res.content;
                    this.eccTranscodingRetailModel.enableMessageOnSizeResultLimit = false;
                    this.eccTranscodingRetailModel.searchRecordLenght = res.content.length;
                    if (res.totalElements > res.content.length) {
                        this.eccTranscodingRetailModel.enableMessageOnSizeResultLimit = true;
                        this.eccTranscodingRetailModel.searchRecordLenght = res.totalElements;
                    }
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(res => {
                this.showTable = true;
                if (!!targetEl) {
                    this.scrollToResult(targetEl);
                }
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((error) => {
                console.log('Error - submit', error);
                this.showTable = false;
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            })).subscribe();
        }
    }
    scrollToResult(targetEl) {
        setTimeout(function () {
            console.log('Scrolling to table');
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }
    buildRsqlSearchString() {
        const rSQLArray = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.nsc.value, 'nsc'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.countryCode.value, 'countryCode'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bic.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.descrizione.value, 'descrizione'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    goToInsertEccTranscodingRetail() {
        this.setSession(this.routingService.ECC_TRANS_RET_INSERT, { backUrl: this.routingService.ECC_TRANS_RET_SEARCH });
        this.router.navigate(['/anagrafiche/ecctranscodingretail/inserimento'], {});
    }
};
RicercaEccTranscodingRetailComponent.ctorParameters = () => [
    { type: _services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_15__["EccTranscodingRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_7__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_3__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
RicercaEccTranscodingRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ricerca-ecc-transcoding-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ricerca-ecc-transcoding-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ricerca-ecc-transcoding-retail.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-retail/ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ecc_transcoding_retail_service__WEBPACK_IMPORTED_MODULE_15__["EccTranscodingRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_7__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_3__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], RicercaEccTranscodingRetailComponent);



/***/ })

}]);
//# sourceMappingURL=ecc-transcoding-retail-ecc-transcoding-retail-module.js.map