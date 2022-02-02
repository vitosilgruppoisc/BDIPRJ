(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecc-transcoding-ingrosso-ecc-transcoding-ingrosso-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Eccezione Transcodifica Ingrosso </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Eccezione Transcodifica Ingrosso</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\"class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-times-circle\"></i> Chiusura Eccezione Transcodifica Ingrosso </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!isActive\">\r\n                    L'eccezione non risulta attiva e non può essere modificata.\r\n                </div>\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"eliminazioneForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.abi\"/>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"cab\" class=\"col-2 col-form-label\">Cab:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"cab\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.cab\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"tipoConto\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.tipoConto\"/>\r\n                        </div>\r\n\r\n                        <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicConto\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.bicConto\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"verso\" class=\"col-2 col-form-label\">Verso:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"verso\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.verso\"/>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.descrizione\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"dataInizioValidita\" class=\"form-control\" [readOnly]=\"true\" [value]=\"eccTransIngr.validFrom\"/>\r\n                        </div>\r\n\r\n                        <label for=\"dataFineValidita\" class=\"col-2 col-form-label\">Data Fine Validità<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataFineValiditaTempl\">\r\n                                <input id=\"dataFineValidita\" class=\"form-control\" [class.is-invalid]=\"dataFineValidita.invalid  && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\"placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValidita\"  bdiDatepicker #datepickerDIV=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div class=\"input-group-append\" (click)=\"datepickerDIV.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"!!dataFineValidita.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.dateformat  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <!--<div *ngIf=\"dataFineValidita.errors?.mindate  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Data inferiore al limite inferiore consentito (data inizio validità): {{formatterUtils.dateToString(minDate)}}\r\n                                </div>\r\n                                -->\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #dataFineValiditaTempl>\r\n                            <input class=\"form-control\" [value]=\"getDataFineValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuova Eccezione Transcodifica Ingrosso </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"inserimentoForm\" (ngSubmit)=\"saveEccTranscodingIngrosso()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (form.submitted || (abi.dirty || abi.touched))\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]{5}$'\" [readOnly]=\"readonlyForm \"/>\r\n                                <div *ngIf=\"abi.errors?.required && (form.submitted || (abi.dirty || abi.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"abi.errors?.pattern && (form.submitted || (abi.dirty || abi.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"cab\" class=\"col-2 col-form-label\">Cab<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"cab\" class=\"form-control\" [class.is-invalid]=\"cab.invalid && (form.submitted || (cab.dirty || cab.touched))\" formControlName=\"cab\" maxlength=\"5\" [readOnly]=\"readonlyForm || readonlyCab\"/>\r\n                                <div *ngIf=\"cab.errors?.required && (form.submitted || (cab.dirty || cab.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"cab.errors?.pattern && (form.submitted || (cab.dirty || cab.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"cab.errors?.ruleCab && (form.submitted || (cab.dirty || cab.touched))\" class=\"invalid-feedback\">\r\n                                    Il valore del Cab può essere diverso da zero se il verso è AB e il tipoConto è RTGS.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!readonlyForm; else inputTipo\" id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && (form.submitted || (tipoConto.dirty || tipoConto.touched))\" formControlName=\"tipoConto\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"tipoConto.errors?.required && (form.submitted || (tipoConto.dirty || tipoConto.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #inputTipo>\r\n                                <input class=\"form-control\" [value]=\"getTipoValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n\r\n                        <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && (form.submitted || (bicConto.dirty || bicConto.touched))\" formControlName=\"bicConto\" [readOnly]=\"readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bicConto.errors?.required && (form.submitted || (bicConto.dirty || bicConto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicConto.errors?.syntax && (form.submitted || (bicConto.dirty || bicConto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"verso\" class=\"col-2 col-form-label\">Verso<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!readonlyForm; else inputVerso\" id=\"verso\" class=\"form-control\" [class.is-invalid]=\"verso.invalid && (form.submitted || (verso.dirty || verso.touched))\" formControlName=\"verso\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipiVerso\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"verso.errors?.required && (form.submitted || (verso.dirty || verso.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #inputVerso>\r\n                                <input class=\"form-control\" [value]=\"getVersoValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"readonlyForm\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputdataInizioValidita\">\r\n                                <input id=\"dataInizioValidita\" class=\"form-control\" [class.is-invalid]=\"dataInizioValidita.invalid && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValidita\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataInizioValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataInizioValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"dataInizioValidita.errors?.required && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.dateformat && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.daterange && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataInizioValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataInizioValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                        <label for=\"dataFineValidita\" class=\"col-2 col-form-label\">Data Fine Validità:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputdataFineValidita\">\r\n                                <input id=\"dataFineValidita\" class=\"form-control\" [class.is-invalid]=\"dataFineValidita.invalid && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValidita\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataFineValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataFineValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.dateformat  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.daterange  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataFineValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataFineValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"!readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\">Salva</button>\r\n                        </div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"resetForm()\">Nuovo Inserimento</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-edit\"></i> Modifica Eccezione Transcodifica Ingrosso </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!isActive\">\r\n                    L'eccezione non risulta attiva e non può essere modificata.\r\n                </div>\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"modificaForm\" (ngSubmit)=\"modifyEccTranscodingIngrosso()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (form.submitted || (abi.dirty || abi.touched))\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]{5}$'\" [readOnly]=\"!checkedabi.value || readonlyForm \"/>\r\n                                <div *ngIf=\"abi.errors?.required && (form.submitted || (abi.dirty || abi.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"abi.errors?.pattern && (form.submitted || (abi.dirty || abi.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedabi\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedabi\" type=\"checkbox\" formControlName=\"checkedabi\" (click)=\"manageCheckBox('abi')\" [attr.disabled]=\"(verso.value === tipoVersoEnum.AB)?true:null\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"cab\" class=\"col-2 col-form-label\">Cab<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"cab\" class=\"form-control\" [class.is-invalid]=\"cab.invalid && (form.submitted || (cab.dirty || cab.touched))\" formControlName=\"cab\" maxlength=\"5\" [readOnly]=\"!checkedcab.value || readonlyForm\"/>\r\n                                <div *ngIf=\"cab.errors?.required && (form.submitted || (cab.dirty || cab.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"cab.errors?.pattern && (form.submitted || (cab.dirty || cab.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"cab.errors?.ruleCab && (form.submitted || (cab.dirty || cab.touched))\" class=\"invalid-feedback\">\r\n                                    Il valore del Cab può essere diverso da zero se il verso è AB e il tipoConto è RTGS.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedcab\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedcab\" type=\"checkbox\" formControlName=\"checkedcab\" (click)=\"manageCheckBox('cab')\" [attr.disabled]=\"(verso.value === tipoVersoEnum.AB)?true:null\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <select *ngIf=\"checkedtipoConto.value && !readonlyForm; else inputTipo\" id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && (form.submitted || (tipoConto.dirty || tipoConto.touched))\" formControlName=\"tipoConto\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"tipoConto.errors?.required && (form.submitted || (tipoConto.dirty || tipoConto.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #inputTipo>\r\n                                <input class=\"form-control\" [value]=\"getTipoValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedtipoConto\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedtipoConto\" type=\"checkbox\" formControlName=\"checkedtipoConto\" (click)=\"manageCheckBox('tipoConto')\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && (form.submitted || (bicConto.dirty || bicConto.touched))\" formControlName=\"bicConto\" [readOnly]=\"!checkedbicConto.value || readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bicConto.errors?.required && (form.submitted || (bicConto.dirty || bicConto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicConto.errors?.syntax && (form.submitted || (bicConto.dirty || bicConto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedbicConto\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedbicConto\" type=\"checkbox\" formControlName=\"checkedbicConto\" (click)=\"manageCheckBox('bicConto')\" [attr.disabled]=\"(verso.value === tipoVersoEnum.BA)?true:null\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"verso\" class=\"col-2 col-form-label\">Verso<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <select *ngIf=\"checkedverso.value && !readonlyForm; else inputVerso\" id=\"verso\" class=\"form-control\" [class.is-invalid]=\"verso.invalid && (form.submitted || (verso.dirty || verso.touched))\" formControlName=\"verso\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipiVerso\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"verso.errors?.required && (form.submitted || (verso.dirty || verso.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #inputVerso>\r\n                                <input class=\"form-control\" [value]=\"getVersoValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedverso\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedverso\" type=\"checkbox\" formControlName=\"checkedverso\" (click)=\"manageCheckBox('verso')\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"!checkeddescrizione.value || readonlyForm\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddescrizione\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddescrizione\" type=\"checkbox\" formControlName=\"checkeddescrizione\" (click)=\"manageCheckBox('descrizione')\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkeddataInizioValidita.value && !readonlyForm); else inputdataInizioValidita\">\r\n                                <input id=\"dataInizioValidita\" class=\"form-control\" [class.is-invalid]=\"dataInizioValidita.invalid && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValidita\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataInizioValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataInizioValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"dataInizioValidita.errors?.required && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.dateformat && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.mindate && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Data inferiore al limite minimo consentito (valore precedente di data inizio validità del record): {{formatterUtils.dateToString(minDate)}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataInizioValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataInizioValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddataInizioValidita\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddataInizioValidita\" type=\"checkbox\" formControlName=\"checkeddataInizioValidita\" (click)=\"manageCheckBox('dataInizioValidita', 'date')\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"dataFineValidita\" class=\"col-2 col-form-label\">Data Fine Validità:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkeddataFineValidita.value && !readonlyForm); else inputdataFineValidita\">\r\n                                <input id=\"dataFineValidita\" class=\"form-control\" [class.is-invalid]=\"dataFineValidita.invalid && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValidita\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataFineValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataFineValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataFineValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataFineValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddataFineValidita\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddataFineValidita\" type=\"checkbox\" formControlName=\"checkeddataFineValidita\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"alert alert-info\" role=\"alert\" >\r\n                        <div [innerHTML]=utils.getModificaMessage()></div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fa fa-users\"></i> Anagrafica Eccezioni Transcodifica Ingrosso </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"row mb-2\" *ngIf=\"userIsSpi\">\r\n                    <div class=\"col-3\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToInsertEccTranscodingIngrosso()\">Nuova Eccezione Transcodifica Ingrosso</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (abi.dirty || abi.touched)\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"abi.errors?.wildcard && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"abi.errors?.pattern && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Cab:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"cab\" class=\"form-control\" [class.is-invalid]=\"cab.invalid && (cab.dirty || cab.touched)\" formControlName=\"cab\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"cab.errors?.wildcard && (cab.dirty || cab.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"cab.errors?.pattern && (cab.dirty || cab.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && (tipoConto.dirty || tipoConto.touched)\" formControlName=\"tipoConto\">\r\n                                <option [ngValue]=\"null\">Tutte</option>\r\n                                <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && (bicConto.dirty || bicConto.touched)\" formControlName=\"bicConto\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicConto.errors?.wildcard && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicConto.errors?.syntax && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Verso:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"verso\" class=\"form-control\" [class.is-invalid]=\"verso.invalid && (verso.dirty || verso.touched)\" formControlName=\"verso\">\r\n                                <option [ngValue]=\"null\">Tutte</option>\r\n                                <option *ngFor=\"let t of tipiVerso\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"descrizione.errors?.wildcard && (descrizione.dirty || descrizione.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Inizio Validita-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Inizio Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaDa.invalid && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaDa\"  bdiDatepicker #datepickerDIVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.dateformat && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.daterange && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaA.invalid && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaA\"  bdiDatepicker #datepickerDIVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.dateformat && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.daterange && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Fine Validità:-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Fine Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaDa.invalid && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaDa\"  bdiDatepicker #datepickerDFVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.dateformat && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.daterange && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaA.invalid && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaA\"  bdiDatepicker #datepickerDFVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.dateformat && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.daterange && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target, true)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"eccTranscodingIngrossoModel\" (action)=\"onActionEvent($event)\" (colToDisplay)=\"onColToDisplayEvent($event, this.eccTranscodingIngrossoService.searchModel)\" (paginationChanged)=\"onPaginationEvent($event, this.eccTranscodingIngrossoService.searchModel)\" (sortChanged)=\"onSortEvent($event, this.eccTranscodingIngrossoService.searchModel)\" (filterChanged)=\"onFilterEvent($event, this.eccTranscodingIngrossoService.searchModel)\"></app-generic-table>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\">\r\n        <span class=\"input-group-text\">\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n        </div>\r\n    </ng-template>\r\n");

/***/ }),

/***/ "./src/app/services/ecc-transcoding-ingrosso.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/ecc-transcoding-ingrosso.service.ts ***!
  \**************************************************************/
/*! exports provided: EccTranscodingIngrossoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccTranscodingIngrossoService", function() { return EccTranscodingIngrossoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/enum */ "./src/app/models/enum.ts");









let EccTranscodingIngrossoService = class EccTranscodingIngrossoService {
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
    getEccezioniTranscodingIngrosso(searchString) {
        return this.http.get(`${this.apiEndpoint}/eccTranscodingIngrosso?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(res => console.log(res)));
    }
    getEccezioneTranscodingIngrosso(idEcc) {
        return this.http.get(`${this.apiEndpoint}/eccTranscodingIngrosso/${idEcc}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => {
            console.log('Error - getEccezioneTranscodingIngrosso', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
    }
    getTipiConto() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([{ codice: _models_enum__WEBPACK_IMPORTED_MODULE_8__["TipoContoEccTranscodingIngrossoEnum"].RTGS.valueOf(), descrizione: 'RTGS' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_8__["TipoContoEccTranscodingIngrossoEnum"].MCAD.valueOf(), descrizione: 'MCAD' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_8__["TipoContoEccTranscodingIngrossoEnum"].MCA.valueOf(), descrizione: 'MCA' }]);
    }
    getTipiVerso() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([{ codice: _models_enum__WEBPACK_IMPORTED_MODULE_8__["TipoVersoEnum"].AB.valueOf(), descrizione: 'AB' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_8__["TipoVersoEnum"].BA.valueOf(), descrizione: 'BA' }]);
    }
};
EccTranscodingIngrossoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_4__["RSQLUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__["FormatterUtils"] }
];
EccTranscodingIngrossoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"], _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_4__["RSQLUtils"], _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__["FormatterUtils"]])
], EccTranscodingIngrossoService);



/***/ }),

/***/ "./src/app/validators/ecc-trans-ingr-cab-validator.ts":
/*!************************************************************!*\
  !*** ./src/app/validators/ecc-trans-ingr-cab-validator.ts ***!
  \************************************************************/
/*! exports provided: eccTranscodingIngrossoVersoValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eccTranscodingIngrossoVersoValidator", function() { return eccTranscodingIngrossoVersoValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/enum */ "./src/app/models/enum.ts");


function eccTranscodingIngrossoVersoValidator() {
    return (form) => {
        const verso = form.controls['verso'];
        const cab = form.controls['cab'];
        const tipoConto = form.controls['tipoConto'];
        if (!!cab && !!cab.value) {
            if (cab.value !== '0') {
                const pattern = '^[0-9%]{5}$';
                if (!new RegExp(pattern).test(cab.value)) {
                    cab.setErrors({ pattern: true });
                }
            }
        }
        if (!!verso && !!verso.value && !!cab && !!cab.value && !!tipoConto && !!tipoConto.value) {
            //Vedi mail del 3/09 da Ernesto ricci con oggetto Constraint su tabella ECC_INGROSSO
            if (!((cab.value === '0') ||
                (verso.value === _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoVersoEnum"].AB.valueOf() && tipoConto.value === _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoContoEccTranscodingIngrossoEnum"].RTGS.valueOf()))) {
                cab.setErrors({ ruleCab: true });
            }
        }
        return;
    };
}


/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AbstractEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEccTranscodingIngrossoComponent", function() { return AbstractEccTranscodingIngrossoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");



class AbstractEccTranscodingIngrossoComponent extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__["AbstractAnagraficheComponent"] {
    constructor(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingIngrossoService = eccTranscodingIngrossoService;
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
        this.eccTranscodingIngrossoService.getTipiConto().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => this.tipiConto = res)).subscribe();
        this.eccTranscodingIngrossoService.getTipiVerso().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => this.tipiVerso = res)).subscribe();
    }
}


/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.scss ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vZGV0dGFnbGlvLWVjYy10cmFuc2NvZGluZy1pbmdyb3Nzby9kZXR0YWdsaW8tZWNjLXRyYW5zY29kaW5nLWluZ3Jvc3NvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: DettaglioEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioEccTranscodingIngrossoComponent", function() { return DettaglioEccTranscodingIngrossoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-ingrosso.service */ "./src/app/services/ecc-transcoding-ingrosso.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let DettaglioEccTranscodingIngrossoComponent = class DettaglioEccTranscodingIngrossoComponent extends _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_6__["AbstractEccTranscodingIngrossoComponent"] {
    constructor(router, eccTranscodingIngrossoService, securityService, userService, formatterUtils, route, routingService) {
        super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
        this.router = router;
        this.eccTranscodingIngrossoService = eccTranscodingIngrossoService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.route = route;
        this.routingService = routingService;
    }
    ngOnInit() {
        this.checkUserSpi();
        this.route.queryParams.subscribe(params => {
            const detailEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_DETAIL);
            if (!!detailEccSessionObj) {
                this.loadSections(detailEccSessionObj.idEccTransIng);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idEccTransIng) {
        this.showSpinner();
        this.eccTranscodingIngrossoService.getEccezioneTranscodingIngrosso(idEccTransIng).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(res => {
            this.eccTransIngr = res;
            this.buildEccTransIngrSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
        })).subscribe();
    }
    buildEccTransIngrSection() {
        const data = [
            [this.buildInfoPanelElement('Abi', 'string', this.eccTransIngr, 'abi'), this.buildInfoPanelElement('Cab', 'string', this.eccTransIngr, 'cab')],
            [this.buildInfoPanelElement('Tipo Conto', 'string', this.eccTransIngr, 'tipoConto'), this.buildInfoPanelElement('Bic Conto', 'string', this.eccTransIngr, 'bicConto')],
            [this.buildInfoPanelElement('Verso', 'string', this.eccTransIngr, 'verso'), this.buildInfoPanelElement('Descrizione', 'string', this.eccTransIngr, 'descrizione')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.eccTransIngr, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.eccTransIngr, 'validTo')],
            [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.eccTransIngr, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.eccTransIngr, 'utenteValidazione')]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
    }
};
DettaglioEccTranscodingIngrossoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_7__["EccTranscodingIngrossoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__["FormatterUtils"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"] }
];
DettaglioEccTranscodingIngrossoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-ecc-transcoding-ingrosso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-ecc-transcoding-ingrosso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-ecc-transcoding-ingrosso.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_7__["EccTranscodingIngrossoService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__["FormatterUtils"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"]])
], DettaglioEccTranscodingIngrossoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ecc-transcoding-ingrosso-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ecc-transcoding-ingrosso-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EccTranscodingIngrossoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccTranscodingIngrossoRoutingModule", function() { return EccTranscodingIngrossoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _ricerca_ecc_transcoding_ingrosso_ricerca_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _inserimento_ecc_transcoding_ingrosso_inserimento_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _dettaglio_ecc_transcoding_ingrosso_dettaglio_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _modifica_ecc_transcoding_ingrosso_modifica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _eliminazione_logica_ecc_transcoding_ingrosso_eliminazione_logica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.ts");










const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Eccezioni Transcodifica Ingrosso',
        },
        children: [
            {
                path: '',
                component: _ricerca_ecc_transcoding_ingrosso_ricerca_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_5__["RicercaEccTranscodingIngrossoComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio',
                component: _dettaglio_ecc_transcoding_ingrosso_dettaglio_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_7__["DettaglioEccTranscodingIngrossoComponent"],
                data: {
                    title: 'Dettaglio Eccezione Transcodifica Ingrosso',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'inserimento',
                component: _inserimento_ecc_transcoding_ingrosso_inserimento_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_6__["InserimentoEccTranscodingIngrossoComponent"],
                data: {
                    title: 'Nuova Eccezione Transcodifica Ingrosso',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'modifica',
                component: _modifica_ecc_transcoding_ingrosso_modifica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_8__["ModificaEccTranscodingIngrossoComponent"],
                data: {
                    title: 'Modifica Eccezione Transcodifica Ingrosso',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'eliminazione-logica',
                component: _eliminazione_logica_ecc_transcoding_ingrosso_eliminazione_logica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_9__["EliminazioneLogicaEccTranscodingIngrossoComponent"],
                data: {
                    title: 'Eliminazione Logica Eccezione Transcodifica Ingrosso',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            }
        ]
    }
];
let EccTranscodingIngrossoRoutingModule = class EccTranscodingIngrossoRoutingModule {
};
EccTranscodingIngrossoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EccTranscodingIngrossoRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ecc-transcoding-ingrosso.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ecc-transcoding-ingrosso.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: EccTranscodingIngrossoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccTranscodingIngrossoModule", function() { return EccTranscodingIngrossoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ecc_transcoding_ingrosso_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecc-transcoding-ingrosso-routing.module */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ecc-transcoding-ingrosso-routing.module.ts");
/* harmony import */ var _ricerca_ecc_transcoding_ingrosso_ricerca_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _dettaglio_ecc_transcoding_ingrosso_dettaglio_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _inserimento_ecc_transcoding_ingrosso_inserimento_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _modifica_ecc_transcoding_ingrosso_modifica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _eliminazione_logica_ecc_transcoding_ingrosso_eliminazione_logica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../directive/directive.module */ "./src/app/directive/directive.module.ts");

















let EccTranscodingIngrossoModule = class EccTranscodingIngrossoModule {
};
EccTranscodingIngrossoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ricerca_ecc_transcoding_ingrosso_ricerca_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_4__["RicercaEccTranscodingIngrossoComponent"], _dettaglio_ecc_transcoding_ingrosso_dettaglio_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_12__["DettaglioEccTranscodingIngrossoComponent"], _inserimento_ecc_transcoding_ingrosso_inserimento_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_13__["InserimentoEccTranscodingIngrossoComponent"], _modifica_ecc_transcoding_ingrosso_modifica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_14__["ModificaEccTranscodingIngrossoComponent"], _eliminazione_logica_ecc_transcoding_ingrosso_eliminazione_logica_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_15__["EliminazioneLogicaEccTranscodingIngrossoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__["GepaGuiCommonModule"],
            _ecc_transcoding_ingrosso_routing_module__WEBPACK_IMPORTED_MODULE_3__["EccTranscodingIngrossoRoutingModule"],
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
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_11__["GenericActionRenderModule"],
            _directive_directive_module__WEBPACK_IMPORTED_MODULE_16__["DirectiveModule"]
        ],
        entryComponents: [_generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__["GenericActionRenderComponent"]],
    })
], EccTranscodingIngrossoModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.scss ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vZWxpbWluYXppb25lLWxvZ2ljYS1lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vZWxpbWluYXppb25lLWxvZ2ljYS1lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: EliminazioneLogicaEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminazioneLogicaEccTranscodingIngrossoComponent", function() { return EliminazioneLogicaEccTranscodingIngrossoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-ingrosso.service */ "./src/app/services/ecc-transcoding-ingrosso.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");















let EliminazioneLogicaEccTranscodingIngrossoComponent = class EliminazioneLogicaEccTranscodingIngrossoComponent extends _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_2__["AbstractEccTranscodingIngrossoComponent"] {
    constructor(router, eccTranscodingIngrossoService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route) {
        super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingIngrossoService = eccTranscodingIngrossoService;
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
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const deleteEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_DELETE);
            if (!!deleteEccSessionObj) {
                this.load(deleteEccSessionObj.idEccTransIng);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(deleteEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idEcc) {
        this.showSpinner();
        this.eccTranscodingIngrossoService.getEccezioneTranscodingIngrosso(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
            this.eccTransIngr = res;
            this.isActive = this.isEccTranscodingIngrossoActive(this.eccTransIngr);
            if (!this.isActive) {
                this.readonlyForm = true;
            }
            const validFrom = new Date(this.eccTransIngr.validFrom);
            const validTo = new Date(this.eccTransIngr.validTo);
            //this.minDate = {day: validFrom.getUTCDate(), month: (validFrom.getUTCMonth() + 1), year: validFrom.getFullYear()};
            this.eliminazioneForm = this.formBuilder.group({
                dataFineValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_13__["dateValidator"])([
                    { field1: 'dataFineValidita', /*minDate1: this.minDate,*/ required1: true }
                ]) });
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
            console.log('Error - load', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        })).subscribe();
    }
    get dataFineValidita() { return this.eliminazioneForm.get('dataFineValidita'); }
    reset(field) {
        this.eliminazioneForm.get(field).setValue(undefined);
    }
    onSubmit() {
        this.resetError();
        this.isResultOk = false;
        if (this.eliminazioneForm.valid) {
            this.showSpinner();
            const taskEccTranscodingIngrossoReq = this.buildTaskEccTranscodingIngrosso();
            this.taskService.saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrossoReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
                this.eliminazioneForm.get('dataFineValidita').setValue(res.validTo);
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
                console.log('Error - onSubmit', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccTranscodingIngrosso() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_14__["TipoOperazioneEnum"].DEL
            },
            validTo: this.formatterUtils.dateToString(this.dataFineValidita.value),
            idEccOrig: this.eccTransIngr.id
        };
    }
    getDataFineValiditaValue() {
        return this.eliminazioneForm.get('dataFineValidita').value;
    }
};
EliminazioneLogicaEccTranscodingIngrossoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_5__["EccTranscodingIngrossoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_10__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EliminazioneLogicaEccTranscodingIngrossoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eliminazione-logica-ecc-transcoding-ingrosso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminazione-logica-ecc-transcoding-ingrosso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminazione-logica-ecc-transcoding-ingrosso.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_5__["EccTranscodingIngrossoService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_10__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], EliminazioneLogicaEccTranscodingIngrossoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vaW5zZXJpbWVudG8tZWNjLXRyYW5zY29kaW5nLWluZ3Jvc3NvL2luc2VyaW1lbnRvLWVjYy10cmFuc2NvZGluZy1pbmdyb3Nzby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: InserimentoEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoEccTranscodingIngrossoComponent", function() { return InserimentoEccTranscodingIngrossoComponent; });
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
/* harmony import */ var _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../abstract-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-ingrosso.service */ "./src/app/services/ecc-transcoding-ingrosso.service.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _validators_ecc_trans_ingr_cab_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../validators/ecc-trans-ingr-cab-validator */ "./src/app/validators/ecc-trans-ingr-cab-validator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
















let InserimentoEccTranscodingIngrossoComponent = class InserimentoEccTranscodingIngrossoComponent extends _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_10__["AbstractEccTranscodingIngrossoComponent"] {
    constructor(router, eccTranscodingIngrossoService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route) {
        super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingIngrossoService = eccTranscodingIngrossoService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.routingService = routingService;
        this.route = route;
        this.readonlyCab = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const insertEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_INSERT);
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
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cab: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.bicValidator.bind(this)]),
            verso: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dataFineValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_9__["dateValidator"])([{ field1: 'dataInizioValidita', required1: true, field2: 'dataFineValidita' }]),
                Object(_validators_ecc_trans_ingr_cab_validator__WEBPACK_IMPORTED_MODULE_13__["eccTranscodingIngrossoVersoValidator"])()
            ]) });
        this.verso.valueChanges.subscribe(() => {
            this.manageVerso();
        });
        this.tipoConto.valueChanges.subscribe(() => {
            this.manageVerso();
        });
    }
    manageVerso() {
        //this.manageRuleOnCab();
        this.cab.updateValueAndValidity();
    }
    manageRuleOnCab() {
        this.readonlyCab = false;
        if (!!this.verso && !!this.verso.value && !!this.tipoConto && !!this.tipoConto.value) {
            if (!(this.verso.value === _models_enum__WEBPACK_IMPORTED_MODULE_12__["TipoVersoEnum"].AB.valueOf() && this.tipoConto.value === _models_enum__WEBPACK_IMPORTED_MODULE_12__["TipoContoEccTranscodingIngrossoEnum"].RTGS.valueOf())) {
                this.cab.setValue(0);
                this.readonlyCab = true;
            }
        }
    }
    get abi() { return this.inserimentoForm.get('abi'); }
    get cab() { return this.inserimentoForm.get('cab'); }
    get bicConto() { return this.inserimentoForm.get('bicConto'); }
    get tipoConto() { return this.inserimentoForm.get('tipoConto'); }
    get verso() { return this.inserimentoForm.get('verso'); }
    get descrizione() { return this.inserimentoForm.get('descrizione'); }
    get dataInizioValidita() { return this.inserimentoForm.get('dataInizioValidita'); }
    get dataFineValidita() { return this.inserimentoForm.get('dataFineValidita'); }
    reset(field) {
        this.inserimentoForm.get(field).setValue(undefined);
    }
    saveEccTranscodingIngrosso() {
        this.resetError();
        this.isResultOk = false;
        if (this.inserimentoForm.valid) {
            this.showSpinner();
            const taskEccTranscodingIngrosso = this.buildTaskEccTranscodingIngrosso();
            this.taskService.saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrosso).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
                const d = new Date(res.validTo);
                this.inserimentoForm.get('dataFineValidita').setValue({ year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() });
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
                console.log('Error - saveEccTranscodingIngrosso', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccTranscodingIngrosso() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_12__["TipoOperazioneEnum"].INS
            },
            abi: this.abi.value,
            cab: this.cab.value,
            bicConto: this.bicConto.value,
            tipoConto: this.tipoConto.value,
            verso: this.verso.value,
            descrizione: this.descrizione.value,
            validFrom: this.formatterUtils.dateToString(this.dataInizioValidita.value),
            validTo: this.formatterUtils.dateToString((!!this.dataFineValidita.value ? this.dataFineValidita.value : { year: 9999, month: 12, day: 31 }))
        };
    }
    resetForm() {
        this.readonlyForm = false;
        this.isResultOk = false;
        this.readonlyCab = false;
        this.buildForm();
    }
    getTipoValue() {
        return this.tipiConto.find(t => t.codice == this.tipoConto.value).descrizione;
    }
    getVersoValue() {
        return this.tipiVerso.find(f => f.codice == this.verso.value).descrizione;
    }
    getDataInizioValiditaValue() {
        return this.formatterUtils.dateToString(this.dataInizioValidita.value);
    }
    getDataFineValiditaValue() {
        return this.formatterUtils.dateToString(this.dataFineValidita.value);
    }
};
InserimentoEccTranscodingIngrossoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_11__["EccTranscodingIngrossoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
InserimentoEccTranscodingIngrossoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-ecc-transcoding-ingrosso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-ecc-transcoding-ingrosso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-ecc-transcoding-ingrosso.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_11__["EccTranscodingIngrossoService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], InserimentoEccTranscodingIngrossoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vbW9kaWZpY2EtZWNjLXRyYW5zY29kaW5nLWluZ3Jvc3NvL21vZGlmaWNhLWVjYy10cmFuc2NvZGluZy1pbmdyb3Nzby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ModificaEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaEccTranscodingIngrossoComponent", function() { return ModificaEccTranscodingIngrossoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-ingrosso.service */ "./src/app/services/ecc-transcoding-ingrosso.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _validators_ecc_trans_ingr_cab_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../validators/ecc-trans-ingr-cab-validator */ "./src/app/validators/ecc-trans-ingr-cab-validator.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");


















let ModificaEccTranscodingIngrossoComponent = class ModificaEccTranscodingIngrossoComponent extends _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_9__["AbstractEccTranscodingIngrossoComponent"] {
    constructor(router, eccTranscodingIngrossoService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route, utils) {
        super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingIngrossoService = eccTranscodingIngrossoService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.routingService = routingService;
        this.route = route;
        this.utils = utils;
        this.tipoVersoEnum = _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoVersoEnum"];
        this.utils = utils;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const modifyEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_MODIFY);
            if (!!modifyEccSessionObj) {
                this.load(modifyEccSessionObj.idEccTransIng);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idEcc) {
        this.showSpinner();
        this.eccTranscodingIngrossoService.getEccezioneTranscodingIngrosso(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
            this.eccTransIngr = res;
            this.isActive = this.isEccTranscodingIngrossoActive(this.eccTransIngr);
            if (!this.isActive) {
                this.readonlyForm = true;
            }
            this.buildForm();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
            console.log('Error - load', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        })).subscribe();
    }
    buildForm() {
        const validFrom = new Date(this.eccTransIngr.validFrom);
        const validTo = new Date(this.eccTransIngr.validTo);
        this.minDate = { day: validFrom.getUTCDate(), month: (validFrom.getUTCMonth() + 1), year: validFrom.getFullYear() };
        this.modificaForm = this.formBuilder.group({
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccTransIngr.abi, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cab: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccTransIngr.cab, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccTransIngr.tipoConto, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccTransIngr.bicConto, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.bicValidator.bind(this)]),
            verso: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccTransIngr.verso, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccTransIngr.descrizione, []),
            dataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ year: validFrom.getFullYear(), month: (validFrom.getUTCMonth() + 1), day: validFrom.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dataFineValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate() }, []),
            checkedabi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedcab: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedtipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedbicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedverso: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkeddescrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkeddataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkeddataFineValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_13__["dateValidator"])([{ field1: 'dataInizioValidita', minDate1: this.minDate }]),
                Object(_validators_ecc_trans_ingr_cab_validator__WEBPACK_IMPORTED_MODULE_14__["eccTranscodingIngrossoVersoValidator"])()
            ]) });
        this.verso.valueChanges.subscribe(() => {
            this.manageVerso();
        });
        this.tipoConto.valueChanges.subscribe(() => {
            this.manageVerso();
        });
    }
    manageVerso() {
        this.cab.updateValueAndValidity();
    }
    get abi() { return this.modificaForm.get('abi'); }
    get cab() { return this.modificaForm.get('cab'); }
    get bicConto() { return this.modificaForm.get('bicConto'); }
    get tipoConto() { return this.modificaForm.get('tipoConto'); }
    get verso() { return this.modificaForm.get('verso'); }
    get descrizione() { return this.modificaForm.get('descrizione'); }
    get dataInizioValidita() { return this.modificaForm.get('dataInizioValidita'); }
    get dataFineValidita() { return this.modificaForm.get('dataFineValidita'); }
    get checkedabi() { return this.modificaForm.get('checkedabi'); }
    get checkedcab() { return this.modificaForm.get('checkedcab'); }
    get checkedbicConto() { return this.modificaForm.get('checkedbicConto'); }
    get checkedtipoConto() { return this.modificaForm.get('checkedtipoConto'); }
    get checkedverso() { return this.modificaForm.get('checkedverso'); }
    get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
    get checkeddataInizioValidita() { return this.modificaForm.get('checkeddataInizioValidita'); }
    get checkeddataFineValidita() { return this.modificaForm.get('checkeddataFineValidita'); }
    reset(field) {
        this.modificaForm.get(field).setValue(undefined);
    }
    manageCheckBox(field, type) {
        if (this.modificaForm.get('checked'.concat(field)).value) {
            let val = Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(this.eccTransIngr, field);
            if (!!type && type == 'date') {
                val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
            }
            this.modificaForm.get(field).setValue(val);
        }
        else {
            //this.modificaForm.get(field).setValue(null);
        }
    }
    modifyEccTranscodingIngrosso() {
        this.resetError();
        this.isResultOk = false;
        if (this.modificaForm.valid) {
            this.showSpinner();
            const taskEccTranscodingIngrossoReq = this.buildTaskEccTranscodingIngrosso();
            this.taskService.saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrossoReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
                if (!!res) {
                    this.eccTransIngr.validFrom = res.validFrom;
                    this.eccTransIngr.verso = res.verso;
                    this.eccTransIngr.tipoConto = res.tipoConto;
                }
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
                console.log('Error - modifyEccTranscodingIngrosso', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccTranscodingIngrosso() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoOperazioneEnum"].UPD
            },
            tipoTask: null,
            stato: null,
            tsInserimento: null,
            userReq: null,
            tsValidate: null,
            userValidate: null,
            noteRifiuto: null,
            abi: this.abi.value,
            cab: this.cab.value,
            bicConto: this.bicConto.value,
            tipoConto: this.tipoConto.value,
            verso: this.verso.value,
            descrizione: this.descrizione.value,
            validFrom: (!!this.dataInizioValidita.value ? this.formatterUtils.dateToString(this.dataInizioValidita.value) : null),
            validTo: null,
            tsModifica: null,
            utenteRichiesta: null,
            utenteValidazione: null,
            abiToEdit: this.checkedabi.value,
            cabToEdit: this.checkedcab.value,
            bicContoToEdit: this.checkedbicConto.value,
            tipoContoToEdit: this.checkedtipoConto.value,
            versoToEdit: this.checkedverso.value,
            descrizioneToEdit: this.checkeddescrizione.value,
            validFromToEdit: (!!this.dataInizioValidita.value ? true : false),
            validToToEdit: false,
            tsModificaToEdit: false,
            utenteRichiestaToEdit: true,
            utenteValidazioneToEdit: false,
            idEccOrig: this.eccTransIngr.id,
            abiOrig: null,
            cabOrig: null,
            bicOrig: null,
            tipoOrig: null,
            versoOrig: null,
            descrizioneOrig: null,
            validFromOrig: null,
            validToOrig: null,
            tsModificaOrig: null,
            utenteRichiestaOrig: null,
            utenteValidazioneOrig: null
        };
    }
    getTipoValue() {
        return this.tipiConto.find(t => t.codice == this.tipoConto.value).descrizione;
    }
    getVersoValue() {
        return this.tipiVerso.find(f => f.codice == this.verso.value).descrizione;
    }
    getDataInizioValiditaValue() {
        return this.formatterUtils.dateToString(this.dataInizioValidita.value);
    }
    getDataFineValiditaValue() {
        return this.formatterUtils.dateToString(this.dataFineValidita.value);
    }
};
ModificaEccTranscodingIngrossoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_10__["EccTranscodingIngrossoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_17__["Utils"] }
];
ModificaEccTranscodingIngrossoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifica-ecc-transcoding-ingrosso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-ecc-transcoding-ingrosso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-ecc-transcoding-ingrosso.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_10__["EccTranscodingIngrossoService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_17__["Utils"]])
], ModificaEccTranscodingIngrossoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vcmljZXJjYS1lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28vcmljZXJjYS1lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: RicercaEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicercaEccTranscodingIngrossoComponent", function() { return RicercaEccTranscodingIngrossoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ecc-transcoding-ingrosso.service */ "./src/app/services/ecc-transcoding-ingrosso.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

















let RicercaEccTranscodingIngrossoComponent = class RicercaEccTranscodingIngrossoComponent extends _abstract_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_7__["AbstractEccTranscodingIngrossoComponent"] {
    constructor(eccTranscodingIngrossoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route, router) {
        super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
        this.eccTranscodingIngrossoService = eccTranscodingIngrossoService;
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
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_11__["get"])(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            }
            else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }
    getSearcModel() {
        return this.eccTranscodingIngrossoService.searchModel;
    }
    setSearcModel(searchModel) {
        return this.eccTranscodingIngrossoService.searchModel = searchModel;
    }
    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            cab: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            verso: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            dataInizioValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            dataInizioValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            dataFineValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            dataFineValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_10__["dateValidator"])([
                { field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA' },
                { field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA' }
            ]) });
    }
    get abi() { return this.ricercaForm.get('abi'); }
    get cab() { return this.ricercaForm.get('cab'); }
    get bicConto() { return this.ricercaForm.get('bicConto'); }
    get tipoConto() { return this.ricercaForm.get('tipoConto'); }
    get verso() { return this.ricercaForm.get('verso'); }
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
        this.eccTranscodingIngrossoModel = {
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
        this.eccTranscodingIngrossoModel.gridOptions.api.sizeColumnsToFit();
        this.eccTranscodingIngrossoModel.gridOptions.onGridSizeChanged = evt => this.eccTranscodingIngrossoModel.gridOptions.api ? this.eccTranscodingIngrossoModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'ABI', field: 'abi', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'CAB', field: 'cab', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'VERSO', field: 'verso', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'BIC CONTO', field: 'bicConto', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TIPO CONTO', field: 'tipoConto', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_14__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        let detailButton = null;
        if (this.userIsSpi || this.userIsBil || this.userIsVis) {
            detailButton = {
                label: 'Visualizza dettaglio Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_INGR_DETAIL),
                params: { idEccTransIng: data.id, backUrl: this.routingService.ECC_TRANS_INGR_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_TRANS_INGR_DETAIL
            };
        }
        let modifyButton = null;
        let deleteButton = null;
        if (this.userIsSpi && this.isEccTranscodingIngrossoActive(data)) {
            modifyButton = {
                label: 'Modifica Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_INGR_MODIFY),
                params: { idEccTransIng: data.id, backUrl: this.routingService.ECC_TRANS_INGR_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_TRANS_INGR_MODIFY
            };
            deleteButton = {
                label: 'Cancellazione Logica Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_TRANS_INGR_DELETE),
                params: { idEccTransIng: data.id, backUrl: this.routingService.ECC_TRANS_INGR_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_TRANS_INGR_DELETE
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
        this.eccTranscodingIngrossoModel.rowData = [];
        this.eccTranscodingIngrossoModel.enableMessageOnSizeResultLimit = false;
        this.manageSearchModel(this.eccTranscodingIngrossoModel, this.getSearcModel(), resetPage);
        if (!!this.ricercaForm.valid) {
            this.showSpinner();
            if (!this.getSearcModel()) {
                this.setSearcModel(this.initSearchModel());
            }
            this.getSearcModel().form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();
            this.eccTranscodingIngrossoService.getEccezioniTranscodingIngrosso(searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(res => {
                this.eccTranscodingIngrossoModel.enableMessageEmptyResult = true;
                if (!!res && res.content.length > 0) {
                    this.eccTranscodingIngrossoModel.enableMessageEmptyResult = false;
                    this.eccTranscodingIngrossoModel.rowData = res.content;
                    this.eccTranscodingIngrossoModel.enableMessageOnSizeResultLimit = false;
                    this.eccTranscodingIngrossoModel.searchRecordLenght = res.content.length;
                    if (res.totalElements > res.content.length) {
                        this.eccTranscodingIngrossoModel.enableMessageOnSizeResultLimit = true;
                        this.eccTranscodingIngrossoModel.searchRecordLenght = res.totalElements;
                    }
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(res => {
                this.showTable = true;
                if (!!targetEl) {
                    this.scrollToResult(targetEl);
                }
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["catchError"])((error) => {
                console.log('Error - submit', error);
                this.showTable = false;
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])(null);
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
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.abi.value, 'abi'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.cab.value, 'cab'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoConto.value, 'tipoConto'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicConto.value, 'bicConto'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.verso.value, 'verso'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.descrizione.value, 'descrizione'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    goToInsertEccTranscodingIngrosso() {
        this.setSession(this.routingService.ECC_TRANS_INGR_INSERT, { backUrl: this.routingService.ECC_TRANS_INGR_SEARCH });
        this.router.navigate(['/anagrafiche/ecctranscodingingrosso/inserimento'], {});
    }
};
RicercaEccTranscodingIngrossoComponent.ctorParameters = () => [
    { type: _services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_2__["EccTranscodingIngrossoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_13__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_12__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_9__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RicercaEccTranscodingIngrossoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ricerca-ecc-transcoding-ingrosso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ricerca-ecc-transcoding-ingrosso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ricerca-ecc-transcoding-ingrosso.component.scss */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ecc_transcoding_ingrosso_service__WEBPACK_IMPORTED_MODULE_2__["EccTranscodingIngrossoService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_13__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_4__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_12__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_9__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], RicercaEccTranscodingIngrossoComponent);



/***/ })

}]);
//# sourceMappingURL=ecc-transcoding-ingrosso-ecc-transcoding-ingrosso-module.js.map