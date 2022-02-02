(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecc-reachability-retail-ecc-reachability-retail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Eccezione Raggiungibilità Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Eccezione Transcodifica Dettaglio</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\"class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuova Eccezione Raggiungibilità Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"inserimentoForm\" (ngSubmit)=\"saveEccReachabilityRetail()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bicInput\" class=\"col-2 col-form-label\">Bic Input<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicInput\" class=\"form-control\" [class.is-invalid]=\"bicInput.invalid && (form.submitted || (bicInput.dirty || bicInput.touched))\" formControlName=\"bicInput\" [readOnly]=\"readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bicInput.errors?.required && (form.submitted || (bicInput.dirty || bicInput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicInput.errors?.bicInputSyntax && (form.submitted || (bicInput.dirty || bicInput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"canale\" class=\"col-2 col-form-label\">Canale<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!readonlyForm; else canaleTemp\" id=\"canale\" class=\"form-control\" [class.is-invalid]=\"canale.invalid && (form.submitted || (canale.dirty || canale.touched))\" formControlName=\"canale\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let c of canaliList\" [value]=\"c.codice\">{{c.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"canale.errors?.required && (form.submitted || (canale.dirty || canale.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #canaleTemp>\r\n                                <input class=\"form-control\" [value]=\"getCanaleValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n\r\n                        <label for=\"raggiungibile\" class=\"col-2 col-form-label\">Raggiungibile<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!readonlyForm; else raggiungibileTemp\" id=\"raggiungibile\" class=\"form-control\" [class.is-invalid]=\"raggiungibile.invalid &&  (form.submitted || (raggiungibile.dirty || raggiungibile.touched))\" formControlName=\"raggiungibile\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of raggiungibileList\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"raggiungibile.errors?.required && (form.submitted || (raggiungibile.dirty || raggiungibile.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #raggiungibileTemp>\r\n                                <input class=\"form-control\" [value]=\"getRaggiungibileValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"readonlyForm\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n\r\n                       <!--\r\n                       <label for=\"bicOutput\" class=\"col-2 col-form-label\">Bic Output:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicOutput\" class=\"form-control\" [class.is-invalid]=\"bicOutput.invalid && (form.submitted || (bicOutput.dirty || bicOutput.touched))\" formControlName=\"bicOutput\" [readOnly]=\"readonlyForm\" />\r\n                                <div *ngIf=\"bicOutput.errors?.required && (form.submitted || (bicOutput.dirty || bicOutput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicOutput.errors?.syntax && (form.submitted || (bicOutput.dirty || bicOutput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        -->\r\n                        <label for=\"bicDiretto\" class=\"col-2 col-form-label\">Bic Diretto:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicDiretto\" class=\"form-control\" [class.is-invalid]=\"bicDiretto.invalid && (form.submitted || (bicDiretto.dirty || bicDiretto.touched))\" formControlName=\"bicDiretto\" [readOnly]=\"readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bicDiretto.errors?.required && (form.submitted || (bicDiretto.dirty || bicDiretto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicDiretto.errors?.syntax && (form.submitted || (bicDiretto.dirty || bicDiretto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputdataInizioValidita\">\r\n                                <input id=\"dataInizioValidita\" class=\"form-control\" [class.is-invalid]=\"dataInizioValidita.invalid && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValidita\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataInizioValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataInizioValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"dataInizioValidita.errors?.required && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.dateformat && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.daterange && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataInizioValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataInizioValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                        <label for=\"dataFineValidita\" class=\"col-2 col-form-label\">Data Fine Validità<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputdataFineValidita\">\r\n                                <input id=\"dataFineValidita\" class=\"form-control\" [class.is-invalid]=\"dataFineValidita.invalid && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValidita\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataFineValidita.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataFineValidita')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.required && (form.submitted || (dataFineValidita.dirty || dataFineValidita.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.dateformat  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataFineValidita.errors?.daterange  && (dataFineValidita.dirty || dataFineValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputdataFineValidita>\r\n                            <input class=\"form-control\" [value]=\"getDataFineValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"!readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\">Salva</button>\r\n                        </div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"resetForm()\">Nuovo Inserimento</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-edit\"></i> Modifica Eccezione Raggiungibilità Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"modificaForm\" (ngSubmit)=\"modifyEccReachabilityRetail()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bicInput\" class=\"col-2 col-form-label\">Bic Input<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicInput\" class=\"form-control\" [class.is-invalid]=\"bicInput.invalid && (form.submitted || (bicInput.dirty || bicInput.touched))\" formControlName=\"bicInput\" [readOnly]=\"!checkedbicInput.value || readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bicInput.errors?.required && (form.submitted || (bicInput.dirty || bicInput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicInput.errors?.pattern && (form.submitted || (bicInput.dirty || bicInput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"bicInput.errors?.bicInputSyntax && (form.submitted || (bicInput.dirty || bicInput.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedbicInput\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedbicInput\" type=\"checkbox\" formControlName=\"checkedbicInput\" (click)=\"manageCheckBox('bicInput')\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"canale\" class=\"col-2 col-form-label\">Canale<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"canale\" class=\"form-control\" [value]=\"getCanaleValue()\" [readOnly]=\"true\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedcanale\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedcanale\" type=\"checkbox\" formControlName=\"checkedcanale\" (click)=\"manageCheckBox('canale')\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"raggiungibile\" class=\"col-2 col-form-label\">Raggiungibile<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <select *ngIf=\"(checkedraggiungibile.value && !readonlyForm); else raggiungibileTemp\" id=\"raggiungibile\" class=\"form-control\" [class.is-invalid]=\"raggiungibile.invalid &&  (form.submitted || (raggiungibile.dirty || raggiungibile.touched))\" formControlName=\"raggiungibile\">\r\n                                <option [ngValue]=\"null\">Seleziona</option>\r\n                                <option *ngFor=\"let t of raggiungibileList\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"raggiungibile.errors?.required && (form.submitted || (raggiungibile.dirty || raggiungibile.touched))\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <ng-template #raggiungibileTemp>\r\n                                <input class=\"form-control\" [value]=\"getRaggiungibileValue()\" [readOnly]=\"true\"/>\r\n                            </ng-template>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedraggiungibile\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedraggiungibile\" type=\"checkbox\" formControlName=\"checkedraggiungibile\" (click)=\"manageCheckBox('raggiungibile')\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"!checkeddescrizione.value || readonlyForm\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddescrizione\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddescrizione\" type=\"checkbox\" formControlName=\"checkeddescrizione\" (click)=\"manageCheckBox('descrizione')\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--\r\n                        <label for=\"bicOutput\" class=\"col-2 col-form-label\">Bic Output:</label>\r\n                            <div class=\"col-3\">\r\n                                <div class=\"input-group\">\r\n                                    <input id=\"bicOutput\" class=\"form-control\" [class.is-invalid]=\"bicOutput.invalid && (form.submitted || (bicOutput.dirty || bicOutput.touched))\" formControlName=\"bicOutput\" [readOnly]=\"!checkedbicOutput.value || readonlyForm\" />\r\n                                    <div *ngIf=\"bicOutput.errors?.required && (form.submitted || (bicOutput.dirty || bicOutput.touched))\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                    <div *ngIf=\"bicOutput.errors?.syntax && (form.submitted || (bicOutput.dirty || bicOutput.touched))\" class=\"invalid-feedback\">\r\n                                        Campo sintatticamente non valido\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1\">\r\n                                <label for=\"checkedbicOutput\" class=\"col-form-label\">\r\n                                    <input *ngIf=\"!readonlyForm\" id=\"checkedbicOutput\" type=\"checkbox\" formControlName=\"checkedbicOutput\" (click)=\"manageCheckBox('bicOutput')\"/>\r\n                                </label>\r\n                            </div>\r\n    -->\r\n                        <label for=\"bicDiretto\" class=\"col-2 col-form-label\">Bic Diretto:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicDiretto\" class=\"form-control\" [class.is-invalid]=\"bicDiretto.invalid && (form.submitted || (bicDiretto.dirty || bicDiretto.touched))\" formControlName=\"bicDiretto\" [readOnly]=\"!checkedbicDiretto.value || readonlyForm\" toUppercase/>\r\n                                <div *ngIf=\"bicDiretto.errors?.required && (form.submitted || (bicDiretto.dirty || bicDiretto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"bicDiretto.errors?.syntax && (form.submitted || (bicDiretto.dirty || bicDiretto.touched))\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedbicDiretto\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedbicDiretto\" type=\"checkbox\" formControlName=\"checkedbicDiretto\" (click)=\"manageCheckBox('bicDiretto')\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"validFrom\" class=\"col-2 col-form-label\">Data Inizio Validità<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkedvalidFrom.value && !readonlyForm); else inputvalidFrom\">\r\n                                <input id=\"validFrom\" class=\"form-control\" [class.is-invalid]=\"validFrom.invalid && (form.submitted || (validFrom.dirty || validFrom.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"validFrom\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!validFrom.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('validFrom')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"validFrom.errors?.required && (form.submitted || (validFrom.dirty || validFrom.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"validFrom.errors?.dateformat && (form.submitted || (validFrom.dirty || validFrom.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"validFrom.errors?.daterange  && (validFrom.dirty || validFrom.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputvalidFrom>\r\n                            <input class=\"form-control\" [value]=\"getvalidFromValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedvalidFrom\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedvalidFrom\" type=\"checkbox\" formControlName=\"checkedvalidFrom\" (click)=\"manageCheckBox('validFrom', 'date')\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"validTo\" class=\"col-2 col-form-label\">Data Fine Validità<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkedvalidTo.value && !readonlyForm); else inputvalidTo\">\r\n                                <input id=\"validTo\" class=\"form-control\" [class.is-invalid]=\"validTo.invalid && (form.submitted || (validTo.dirty || validTo.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"validTo\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" />\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!validTo.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('validTo')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"validTo.errors?.required && (form.submitted || (validTo.dirty || validTo.touched))\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"validTo.errors?.dateformat && (form.submitted || (validTo.dirty || validTo.touched))\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"validTo.errors?.daterange  && (validTo.dirty || validTo.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputvalidTo>\r\n                            <input class=\"form-control\" [value]=\"getvalidToValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedvalidTo\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedvalidTo\" type=\"checkbox\" formControlName=\"checkedvalidTo\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fa fa-users\"></i> Anagrafica Eccezioni Raggiungibilità Dettaglio </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"row mb-2\" *ngIf=\"userIsDet\">\r\n                    <div class=\"col-4\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToInsertEccReachabilityRetail()\">Nuova Eccezione Raggiungibilità Dettaglio</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bicInput\" class=\"col-2 col-form-label\">Bic Input:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicInput\" class=\"form-control\" [class.is-invalid]=\"bicInput.invalid && (bicInput.dirty || bicInput.touched)\" formControlName=\"bicInput\" maxlength=\"11\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicInput.errors?.wildcard && (bicInput.dirty || bicInput.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicInput.errors?.pattern && (bicInput.dirty || bicInput.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"canale\" class=\"col-2 col-form-label\">Canale:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"canale\" class=\"form-control\" [class.is-invalid]=\"canale.invalid && (canale.dirty || canale.touched)\" formControlName=\"canale\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of canaliList\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"raggiungibile\" class=\"col-2 col-form-label\">Raggiungibile:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"raggiungibile\" class=\"form-control\" [class.is-invalid]=\"raggiungibile.invalid && (raggiungibile.dirty || canale.touched)\" formControlName=\"raggiungibile\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of raggiungibileList\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && (descrizione.dirty || descrizione.touched)\" formControlName=\"descrizione\" maxlength=\"4000\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"descrizione.errors?.wildcard && (descrizione.dirty || descrizione.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--\r\n                        <label for=\"bicOutput\" class=\"col-2 col-form-label\">Bic Ouput:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicOutput\" class=\"form-control\" [class.is-invalid]=\"bicOutput.invalid && (bicOutput.dirty || bicOutput.touched)\" formControlName=\"bicOutput\" maxlength=\"11\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicOutput.errors?.wildcard && (bicOutput.dirty || bicOutput.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicOutput.errors?.pattern && (bicOutput.dirty || bicOutput.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        -->\r\n                        <label for=\"bicDiretto\" class=\"col-2 col-form-label\">Bic Diretto:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicDiretto\" class=\"form-control\" [class.is-invalid]=\"bicDiretto.invalid && (bicDiretto.dirty || bicDiretto.touched)\" formControlName=\"bicDiretto\" maxlength=\"11\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicDiretto.errors?.wildcard && (bicDiretto.dirty || bicDiretto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicDiretto.errors?.pattern && (bicDiretto.dirty || bicDiretto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Inizio Validita-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Inizio Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaDa.invalid && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaDa\"  bdiDatepicker #datepickerDIVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.dateformat && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.daterange && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaA.invalid && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaA\"  bdiDatepicker #datepickerDIVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.dateformat && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.daterange && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Fine Validità:-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Fine Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaDa.invalid && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaDa\"  bdiDatepicker #datepickerDFVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.dateformat && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.daterange && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaA.invalid && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaA\"  bdiDatepicker #datepickerDFVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.dateformat && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.daterange && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target, true)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"eccReachabilityRetailModel\" (action)=\"onActionEvent($event)\" (colToDisplay)=\"onColToDisplayEvent($event, this.eccReachabilityRetailService.searchModel)\" (paginationChanged)=\"onPaginationEvent($event, this.eccReachabilityRetailService.searchModel)\" (sortChanged)=\"onSortEvent($event, this.eccReachabilityRetailService.searchModel)\" (filterChanged)=\"onFilterEvent($event, this.eccReachabilityRetailService.searchModel)\"></app-generic-table>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\">\r\n        <span class=\"input-group-text\">\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n        </div>\r\n    </ng-template>\r\n");

/***/ }),

/***/ "./src/app/services/ecc-reachability-retail.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/ecc-reachability-retail.service.ts ***!
  \*************************************************************/
/*! exports provided: EccReachabilityRetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccReachabilityRetailService", function() { return EccReachabilityRetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");







let EccReachabilityRetailService = class EccReachabilityRetailService extends _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] {
    constructor(http, configurationService) {
        super(http, configurationService);
        this.http = http;
        this.configurationService = configurationService;
    }
    getEccezioniReachabilityRetail(searchString) {
        return this.http.get(`${this.apiEndpointU2A}/eccReachabilityRetail?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)));
    }
    getEccezioneReachabilityRetail(idEcc) {
        return this.http.get(`${this.apiEndpointU2A}/eccReachabilityRetail/${idEcc}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - getEccezioneReachabilityRetail', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
EccReachabilityRetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
EccReachabilityRetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], EccReachabilityRetailService);



/***/ }),

/***/ "./src/app/validators/ecc-rag-ret-bic-validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/validators/ecc-rag-ret-bic-validator.ts ***!
  \*********************************************************/
/*! exports provided: eccReachabilityRetailBicValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eccReachabilityRetailBicValidator", function() { return eccReachabilityRetailBicValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/enum */ "./src/app/models/enum.ts");


function eccReachabilityRetailBicValidator() {
    return (form) => {
        const bicInput = form.controls['bicInput'];
        const raggiungibile = form.controls['raggiungibile'];
        if (!!bicInput && !!bicInput.value) {
            const pattern = '^([a-zA-Z]){6}([0-9a-zA-Z]){2}(([0-9a-zA-Z]{3})||([*]))?$';
            if (!new RegExp(pattern).test(bicInput.value)) {
                bicInput.setErrors({ bicInputSyntax: true });
            }
        }
        if (!!raggiungibile && raggiungibile.value) {
            if (raggiungibile.value == _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].SI) {
                //modifica a valle di mail del 21/10
                /*const bicOutput = form.controls['bicOutput'];
                if (!bicOutput || !bicOutput.value) {
                    bicOutput.setErrors({required: true});
                }*/
                const bicDiretto = form.controls['bicDiretto'];
                if (!bicDiretto || !bicDiretto.value) {
                    bicDiretto.setErrors({ required: true });
                }
            }
        }
        return;
    };
}


/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/abstract-ecc-reachability-retail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/abstract-ecc-reachability-retail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AbstractEccReachabilityRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEccReachabilityRetailComponent", function() { return AbstractEccReachabilityRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/enum */ "./src/app/models/enum.ts");




class AbstractEccReachabilityRetailComponent extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_2__["AbstractAnagraficheComponent"] {
    constructor(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.eccReachabilityRetailService = eccReachabilityRetailService;
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
        this.eccReachabilityRetailService.getCanali().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => this.canaliList = res)).subscribe();
        this.raggiungibileList = [{ codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoFlagEnum"].SI.valueOf(), descrizione: 'SI' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_3__["TipoFlagEnum"].NO.valueOf(), descrizione: 'NO' }];
    }
}


/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC9kZXR0YWdsaW8tZWNjLXJlYWNoYWJpbGl0eS1yZXRhaWwvZGV0dGFnbGlvLWVjYy1yZWFjaGFiaWxpdHktcmV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DettaglioEccReachabilityRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioEccReachabilityRetailComponent", function() { return DettaglioEccReachabilityRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/abstract-ecc-reachability-retail.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/ecc-reachability-retail.service */ "./src/app/services/ecc-reachability-retail.service.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let DettaglioEccReachabilityRetailComponent = class DettaglioEccReachabilityRetailComponent extends _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_1__["AbstractEccReachabilityRetailComponent"] {
    constructor(router, eccReachabilityRetailService, securityService, userService, formatterUtils, route, routingService) {
        super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
        this.router = router;
        this.eccReachabilityRetailService = eccReachabilityRetailService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.route = route;
        this.routingService = routingService;
    }
    ngOnInit() {
        this.checkUserDet();
        this.route.queryParams.subscribe(params => {
            const detailEccSessionObj = this.getSession(this.routingService.ECC_RAGG_RET_DETAIL);
            if (!!detailEccSessionObj) {
                this.loadSections(detailEccSessionObj.idEccRaggRet);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idEccRaggRet) {
        this.showSpinner();
        this.eccReachabilityRetailService.getEccezioneReachabilityRetail(idEccRaggRet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.eccRaggRet = res;
            this.buildeccRaggRetSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
        })).subscribe();
    }
    buildeccRaggRetSection() {
        const data = [
            [this.buildInfoPanelElement('Bic Input', 'string', this.eccRaggRet, 'bicInput'), this.buildInfoPanelElement('Canale', 'string', this.eccRaggRet, 'canale.descrizione')],
            [this.buildInfoPanelElement('Raggiungibile', 'boolean', this.eccRaggRet, 'raggiungibile'), this.buildInfoPanelElement('Descrizione', 'string', this.eccRaggRet, 'descrizione')],
            [/*this.buildInfoPanelElement('Bic Output', 'string',  this.eccRaggRet, 'bicOutput'),*/ this.buildInfoPanelElement('Bic Diretto', 'string', this.eccRaggRet, 'bicDiretto'), {}],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.eccRaggRet, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.eccRaggRet, 'validTo')],
            [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.eccRaggRet, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.eccRaggRet, 'utenteValidazione')]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
    }
};
DettaglioEccReachabilityRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_7__["EccReachabilityRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"] }
];
DettaglioEccReachabilityRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-dettaglio-ecc-reachability-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-ecc-reachability-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-ecc-reachability-retail.component.scss */ "./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_7__["EccReachabilityRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"]])
], DettaglioEccReachabilityRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/ecc-reachability-retail-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/ecc-reachability-retail-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EccReachabilityRetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccReachabilityRetailRoutingModule", function() { return EccReachabilityRetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ricerca_ecc_reachability_retail_ricerca_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.ts");
/* harmony import */ var _inserimento_ecc_reachability_retail_inserimento_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _modifica_ecc_reachability_retail_modifica_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dettaglio_ecc_reachability_retail_dettaglio_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");









const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Eccezioni Raggiungibilità Dettaglio',
        },
        children: [
            {
                path: '',
                component: _ricerca_ecc_reachability_retail_ricerca_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_1__["RicercaEccReachabilityRetailComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio',
                component: _dettaglio_ecc_reachability_retail_dettaglio_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_7__["DettaglioEccReachabilityRetailComponent"],
                data: {
                    title: 'Dettaglio Eccezione Raggiungibilità Dettaglio',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'inserimento',
                component: _inserimento_ecc_reachability_retail_inserimento_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_2__["InserimentoEccReachabilityRetailComponent"],
                data: {
                    title: 'Nuova Eccezione Raggiungibilità Dettaglio',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'modifica',
                component: _modifica_ecc_reachability_retail_modifica_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_5__["ModificaEccReachabilityRetailComponent"],
                data: {
                    title: 'Modifica Eccezione Raggiungibilità Dettaglio',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_8__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
        ]
    }
];
let EccReachabilityRetailRoutingModule = class EccReachabilityRetailRoutingModule {
};
EccReachabilityRetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], EccReachabilityRetailRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/ecc-reachability-retail.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/ecc-reachability-retail.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EccReachabilityRetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EccReachabilityRetailModule", function() { return EccReachabilityRetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ecc_reachability_retail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecc-reachability-retail-routing.module */ "./src/app/views/anagrafiche/ecc-reachability-retail/ecc-reachability-retail-routing.module.ts");
/* harmony import */ var _ricerca_ecc_reachability_retail_ricerca_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.ts");
/* harmony import */ var _dettaglio_ecc_reachability_retail_dettaglio_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component.ts");
/* harmony import */ var _inserimento_ecc_reachability_retail_inserimento_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.ts");
/* harmony import */ var _modifica_ecc_reachability_retail_modifica_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../directive/directive.module */ "./src/app/directive/directive.module.ts");
















let EccReachabilityRetailModule = class EccReachabilityRetailModule {
};
EccReachabilityRetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ricerca_ecc_reachability_retail_ricerca_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_4__["RicercaEccReachabilityRetailComponent"], _dettaglio_ecc_reachability_retail_dettaglio_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_5__["DettaglioEccReachabilityRetailComponent"], _inserimento_ecc_reachability_retail_inserimento_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_6__["InserimentoEccReachabilityRetailComponent"], _modifica_ecc_reachability_retail_modifica_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_7__["ModificaEccReachabilityRetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_8__["GepaGuiCommonModule"],
            _ecc_reachability_retail_routing_module__WEBPACK_IMPORTED_MODULE_3__["EccReachabilityRetailRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_11__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_12__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__["BDIDatagridModule"].withComponents([
                _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_13__["GenericActionRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__["BDITooltipModule"].forRoot(),
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_14__["GenericActionRenderModule"],
            _directive_directive_module__WEBPACK_IMPORTED_MODULE_15__["DirectiveModule"]
        ],
        entryComponents: [_generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_13__["GenericActionRenderComponent"]],
    })
], EccReachabilityRetailModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC9pbnNlcmltZW50by1lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC9pbnNlcmltZW50by1lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: InserimentoEccReachabilityRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoEccReachabilityRetailComponent", function() { return InserimentoEccReachabilityRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/abstract-ecc-reachability-retail.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/ecc-reachability-retail.service */ "./src/app/services/ecc-reachability-retail.service.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _validators_ecc_rag_ret_bic_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../validators/ecc-rag-ret-bic-validator */ "./src/app/validators/ecc-rag-ret-bic-validator.ts");
















let InserimentoEccReachabilityRetailComponent = class InserimentoEccReachabilityRetailComponent extends _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_3__["AbstractEccReachabilityRetailComponent"] {
    constructor(router, eccReachabilityRetailService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route) {
        super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
        this.eccReachabilityRetailService = eccReachabilityRetailService;
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
            const insertEccSessionObj = this.getSession(this.routingService.ECC_RAGG_RET_INSERT);
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
            bicInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            canale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            raggiungibile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            //bicOutput: new FormControl(null,    [this.bicValidator.bind(this)]),
            bicDiretto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.bicValidator.bind(this)]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dataFineValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_1__["dateValidator"])([{ field1: 'dataInizioValidita', required1: true, field2: 'dataFineValidita', required2: true }]),
                Object(_validators_ecc_rag_ret_bic_validator__WEBPACK_IMPORTED_MODULE_15__["eccReachabilityRetailBicValidator"])()
            ]) });
        this.raggiungibile.valueChanges.subscribe(() => {
            this.manageRaggiungibile();
        });
    }
    manageRaggiungibile() {
        //this.bicOutput.updateValueAndValidity();
        this.bicDiretto.updateValueAndValidity();
    }
    get bicInput() { return this.inserimentoForm.get('bicInput'); }
    get canale() { return this.inserimentoForm.get('canale'); }
    get raggiungibile() { return this.inserimentoForm.get('raggiungibile'); }
    //get bicOutput() { return this.inserimentoForm.get('bicOutput'); }
    get bicDiretto() { return this.inserimentoForm.get('bicDiretto'); }
    get descrizione() { return this.inserimentoForm.get('descrizione'); }
    get dataInizioValidita() { return this.inserimentoForm.get('dataInizioValidita'); }
    get dataFineValidita() { return this.inserimentoForm.get('dataFineValidita'); }
    reset(field) {
        this.inserimentoForm.get(field).setValue(undefined);
    }
    saveEccReachabilityRetail() {
        this.resetError();
        this.isResultOk = false;
        if (this.inserimentoForm.valid) {
            this.showSpinner();
            const taskEccReachabilityRetail = this.buildTaskEccReachabilityRetail();
            this.taskService.saveTaskEccReachabilityRetail(taskEccReachabilityRetail).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
                const d = new Date(res.validTo);
                this.inserimentoForm.get('dataFineValidita').setValue({ year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() });
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('Error - saveEccReachabilityRetail', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccReachabilityRetail() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_10__["TipoOperazioneEnum"].INS
            },
            bicInput: this.bicInput.value,
            canale: {
                codice: this.canale.value
            },
            raggiungibile: (!!this.raggiungibile.value ? ((this.raggiungibile.value == _models_enum__WEBPACK_IMPORTED_MODULE_10__["TipoFlagEnum"].SI) ? true : false) : null),
            //bicOutput: this.bicOutput.value,
            bicDiretto: this.bicDiretto.value,
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
    getCanaleValue() {
        return this.canaliList.find(t => t.codice == this.canale.value).descrizione;
    }
    getRaggiungibileValue() {
        const val = ((this.raggiungibile.value == _models_enum__WEBPACK_IMPORTED_MODULE_10__["TipoFlagEnum"].SI) ? _models_enum__WEBPACK_IMPORTED_MODULE_10__["TipoFlagEnum"].SI : _models_enum__WEBPACK_IMPORTED_MODULE_10__["TipoFlagEnum"].NO);
        return this.raggiungibileList.find(t => t.codice == val).descrizione;
    }
    getDataInizioValiditaValue() {
        return this.formatterUtils.dateToString(this.dataInizioValidita.value);
    }
    getDataFineValiditaValue() {
        return this.formatterUtils.dateToString(this.dataFineValidita.value);
    }
};
InserimentoEccReachabilityRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_12__["EccReachabilityRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_13__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_7__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
InserimentoEccReachabilityRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-inserimento-ecc-reachability-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-ecc-reachability-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-ecc-reachability-retail.component.scss */ "./src/app/views/anagrafiche/ecc-reachability-retail/inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_12__["EccReachabilityRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_13__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_7__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
], InserimentoEccReachabilityRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC9tb2RpZmljYS1lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC9tb2RpZmljYS1lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ModificaEccReachabilityRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaEccReachabilityRetailComponent", function() { return ModificaEccReachabilityRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _validators_ecc_rag_ret_bic_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../validators/ecc-rag-ret-bic-validator */ "./src/app/validators/ecc-rag-ret-bic-validator.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/ecc-reachability-retail.service */ "./src/app/services/ecc-reachability-retail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../abstract-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/abstract-ecc-reachability-retail.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");


















let ModificaEccReachabilityRetailComponent = class ModificaEccReachabilityRetailComponent extends _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_12__["AbstractEccReachabilityRetailComponent"] {
    constructor(router, eccReachabilityRetailService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, routingService, route, utils) {
        super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
        this.eccReachabilityRetailService = eccReachabilityRetailService;
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
            const modifyEccSessionObj = this.getSession(this.routingService.ECC_RAGG_RET_MODIFY);
            if (!!modifyEccSessionObj) {
                this.load(modifyEccSessionObj.idEccRaggRet);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idEcc) {
        this.showSpinner();
        this.eccReachabilityRetailService.getEccezioneReachabilityRetail(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => {
            this.eccRaggRet = res;
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
        const validFrom = new Date(this.eccRaggRet.validFrom);
        const validTo = new Date(this.eccRaggRet.validTo);
        this.modificaForm = this.formBuilder.group({
            bicInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccRaggRet.bicInput, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            canale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccRaggRet.canale.codice, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            raggiungibile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.formatterUtils.getBooleanAsString(this.eccRaggRet, 'raggiungibile'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            //bicOutput: new FormControl(this.eccRaggRet.bicOutput,    [this.bicValidator.bind(this)]),
            bicDiretto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccRaggRet.bicDiretto, [this.bicValidator.bind(this)]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.eccRaggRet.descrizione, []),
            validFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ year: validFrom.getFullYear(), month: (validFrom.getUTCMonth() + 1), day: validFrom.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            validTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate() }, []),
            checkedbicInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedcanale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedraggiungibile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            //checkedbicOutput:  new FormControl(false,   []),
            checkedbicDiretto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkeddescrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedvalidFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            checkedvalidTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_11__["dateValidator"])([{ field1: 'validFrom', required1: true, field2: 'validTo', required2: true }]),
                Object(_validators_ecc_rag_ret_bic_validator__WEBPACK_IMPORTED_MODULE_3__["eccReachabilityRetailBicValidator"])()
            ]) });
        this.raggiungibile.valueChanges.subscribe(() => {
            this.manageRaggiungibile();
        });
    }
    manageRaggiungibile() {
        //this.bicOutput.updateValueAndValidity();
        this.bicDiretto.updateValueAndValidity();
    }
    get bicInput() { return this.modificaForm.get('bicInput'); }
    get canale() { return this.modificaForm.get('canale'); }
    get raggiungibile() { return this.modificaForm.get('raggiungibile'); }
    //get bicOutput() { return this.modificaForm.get('bicOutput'); }
    get bicDiretto() { return this.modificaForm.get('bicDiretto'); }
    get descrizione() { return this.modificaForm.get('descrizione'); }
    get validFrom() { return this.modificaForm.get('validFrom'); }
    get validTo() { return this.modificaForm.get('validTo'); }
    get checkedbicInput() { return this.modificaForm.get('checkedbicInput'); }
    get checkedcanale() { return this.modificaForm.get('checkedcanale'); }
    get checkedraggiungibile() { return this.modificaForm.get('checkedraggiungibile'); }
    //get checkedbicOutput() { return this.modificaForm.get('checkedbicOutput'); }
    get checkedbicDiretto() { return this.modificaForm.get('checkedbicDiretto'); }
    get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
    get checkedvalidFrom() { return this.modificaForm.get('checkedvalidFrom'); }
    get checkedvalidTo() { return this.modificaForm.get('checkedvalidTo'); }
    reset(field) {
        this.modificaForm.get(field).setValue(undefined);
    }
    manageCheckBox(field, type) {
        if (this.modificaForm.get('checked'.concat(field)).value) {
            let val = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(this.eccRaggRet, field);
            if (!!type && type == 'date') {
                val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
            }
            this.modificaForm.get(field).setValue(val);
        }
        else {
            //this.modificaForm.get(field).setValue(null);
        }
    }
    modifyEccReachabilityRetail() {
        this.resetError();
        this.isResultOk = false;
        if (this.modificaForm.valid) {
            this.showSpinner();
            const taskEccReachabilityReatilReq = this.buildTaskEccReachabilityRetail();
            this.taskService.saveTaskEccReachabilityRetail(taskEccReachabilityReatilReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(res => {
                if (!!res) {
                    this.eccRaggRet.validFrom = res.validFrom;
                    this.eccRaggRet.canale = res.canale;
                }
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
                console.log('Error - modifyEccReachabilityRetail', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskEccReachabilityRetail() {
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
            bicInput: this.bicInput.value,
            canale: {
                codice: this.canale.value,
            },
            raggiungibile: (!!this.raggiungibile.value ? ((this.raggiungibile.value == _models_enum__WEBPACK_IMPORTED_MODULE_4__["TipoFlagEnum"].SI) ? true : false) : null),
            //bicOutput: this.bicOutput.value,
            bicDiretto: this.bicDiretto.value,
            descrizione: this.descrizione.value,
            validFrom: this.formatterUtils.dateToString(this.validFrom.value),
            validTo: this.formatterUtils.dateToString(this.validTo.value),
            tsModifica: null,
            utenteRichiesta: null,
            utenteValidazione: null,
            bicInputToEdit: this.checkedbicInput.value,
            canaleToEdit: this.checkedcanale.value,
            raggiungibileToEdit: this.checkedraggiungibile.value,
            //bicOutputToEdit: this.checkedbicOutput.value,
            bicDirettoToEdit: this.checkedbicDiretto.value,
            descrizioneToEdit: this.checkeddescrizione.value,
            validFromToEdit: this.checkedvalidFrom.value,
            validToToEdit: this.checkedvalidTo.value,
            tsModificaToEdit: false,
            utenteRichiestaToEdit: true,
            utenteValidazioneToEdit: false,
            idEccOrig: this.eccRaggRet.id,
            bicOrig: null,
            canaleOrig: null,
            raggiungibileOrig: null,
            //bicOutputOrig: null,
            bicDirettoOrig: null,
            descrizioneOrig: null,
            validFromOrig: null,
            validToOrig: null,
            tsModificaOrig: null,
            utenteRichiestaOrig: null,
            utenteValidazioneOrig: null
        };
    }
    getCanaleValue() {
        return this.canaliList.find(t => t.codice == this.canale.value).descrizione;
    }
    getRaggiungibileValue() {
        const val = ((this.raggiungibile.value == _models_enum__WEBPACK_IMPORTED_MODULE_4__["TipoFlagEnum"].SI) ? _models_enum__WEBPACK_IMPORTED_MODULE_4__["TipoFlagEnum"].SI : _models_enum__WEBPACK_IMPORTED_MODULE_4__["TipoFlagEnum"].NO);
        return this.raggiungibileList.find(t => t.codice == val).descrizione;
    }
    getvalidFromValue() {
        return this.formatterUtils.dateToString(this.validFrom.value);
    }
    getvalidToValue() {
        return this.formatterUtils.dateToString(this.validTo.value);
    }
};
ModificaEccReachabilityRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_6__["EccReachabilityRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_15__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_16__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_13__["TaskService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_14__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_17__["Utils"] }
];
ModificaEccReachabilityRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-modifica-ecc-reachability-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-ecc-reachability-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-ecc-reachability-retail.component.scss */ "./src/app/views/anagrafiche/ecc-reachability-retail/modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_6__["EccReachabilityRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_9__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_15__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_16__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_13__["TaskService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_14__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_17__["Utils"]])
], ModificaEccReachabilityRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9lY2MtcmVhY2hhYmlsaXR5LXJldGFpbC9yaWNlcmNhLWVjYy1yZWFjaGFiaWxpdHktcmV0YWlsL3JpY2VyY2EtZWNjLXJlYWNoYWJpbGl0eS1yZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: RicercaEccReachabilityRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicercaEccReachabilityRetailComponent", function() { return RicercaEccReachabilityRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ecc-reachability-retail.service */ "./src/app/services/ecc-reachability-retail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../abstract-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/ecc-reachability-retail/abstract-ecc-reachability-retail.component.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");

















let RicercaEccReachabilityRetailComponent = class RicercaEccReachabilityRetailComponent extends _abstract_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_10__["AbstractEccReachabilityRetailComponent"] {
    constructor(eccReachabilityRetailService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route, router) {
        super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
        this.eccReachabilityRetailService = eccReachabilityRetailService;
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
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            }
            else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }
    getSearcModel() {
        return this.eccReachabilityRetailService.searchModel;
    }
    setSearcModel(searchModel) {
        return this.eccReachabilityRetailService.searchModel = searchModel;
    }
    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            bicInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            canale: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
            raggiungibile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
            //bicOutput: new FormControl(null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)] ),
            bicDiretto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            dataInizioValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
            dataInizioValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
            dataFineValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
            dataFineValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_8__["dateValidator"])([
                { field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA' },
                { field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA' }
            ]) });
    }
    get bicInput() { return this.ricercaForm.get('bicInput'); }
    get canale() { return this.ricercaForm.get('canale'); }
    get raggiungibile() { return this.ricercaForm.get('raggiungibile'); }
    //get bicOutput() { return this.ricercaForm.get('bicOutput'); }
    get bicDiretto() { return this.ricercaForm.get('bicDiretto'); }
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
        this.eccReachabilityRetailModel = {
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
        this.eccReachabilityRetailModel.gridOptions.api.sizeColumnsToFit();
        this.eccReachabilityRetailModel.gridOptions.onGridSizeChanged = evt => this.eccReachabilityRetailModel.gridOptions.api ? this.eccReachabilityRetailModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'BIC INPUT', field: 'bicInput', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'CANALE', field: 'canale.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'RAGGIUNGIBILE', field: 'raggiungibile', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.getBooleanAsString(data.data, 'raggiungibile'), exportOptions: { skipColumn: false } },
            //{colId: ('id_' + order++), headerName: 'BIC OUTPUT',             field: 'bicOutput',              filter: true, sortable: true, resizable: true, exportOptions: {skipColumn: false}},
            { colId: ('id_' + order++), headerName: 'BIC DIRETTO', field: 'bicDiretto', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        let detailButton = null;
        if (this.userIsDet || this.userIsVis) {
            detailButton = {
                label: 'Visualizza dettaglio Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_RAGG_RET_DETAIL),
                params: { idEccRaggRet: data.id, backUrl: this.routingService.ECC_RAGG_RET_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_RAGG_RET_DETAIL
            };
        }
        let modifyButton = null;
        const deleteButton = null;
        //La condizione che il record debba essere attivo è statta modificata da Ernesto sul DRF: cfr mail del 20/09/21
        if (this.userIsDet /*&& this.isEccReachabilityRetailActive(data)*/) {
            modifyButton = {
                label: 'Modifica Eccezione ',
                routerLink: this.routingService.getRouteByKey(this.routingService.ECC_RAGG_RET_MODIFY),
                params: { idEccRaggRet: data.id, backUrl: this.routingService.ECC_RAGG_RET_SEARCH },
                enabled: true,
                sessionKey: this.routingService.ECC_RAGG_RET_MODIFY
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
        this.eccReachabilityRetailModel.rowData = [];
        this.eccReachabilityRetailModel.enableMessageOnSizeResultLimit = false;
        this.manageSearchModel(this.eccReachabilityRetailModel, this.getSearcModel(), resetPage);
        if (!!this.ricercaForm.valid) {
            this.showSpinner();
            if (!this.getSearcModel()) {
                this.setSearcModel(this.initSearchModel());
            }
            this.getSearcModel().form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();
            this.eccReachabilityRetailService.getEccezioniReachabilityRetail(searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => {
                this.eccReachabilityRetailModel.enableMessageEmptyResult = true;
                if (!!res && res.content.length > 0) {
                    this.eccReachabilityRetailModel.enableMessageEmptyResult = false;
                    this.eccReachabilityRetailModel.rowData = res.content;
                    this.eccReachabilityRetailModel.enableMessageOnSizeResultLimit = false;
                    this.eccReachabilityRetailModel.searchRecordLenght = res.content.length;
                    if (res.totalElements > res.content.length) {
                        this.eccReachabilityRetailModel.enableMessageOnSizeResultLimit = true;
                        this.eccReachabilityRetailModel.searchRecordLenght = res.totalElements;
                    }
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => {
                this.showTable = true;
                if (!!targetEl) {
                    this.scrollToResult(targetEl);
                }
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
                console.log('Error - submit', error);
                this.showTable = false;
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
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
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicInput.value, 'bicInput'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.canale.value, 'canale'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.formatterUtils.getStringAsBoolean(this.raggiungibile.value), 'raggiungibile'));
        //rSQLArray.push(this.rSQLUtils.manageWildcard( this.bicOutput.value, 'bicOutput'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicDiretto.value, 'bicDiretto'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.descrizione.value, 'descrizione'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    goToInsertEccReachabilityRetail() {
        this.setSession(this.routingService.ECC_RAGG_RET_INSERT, { backUrl: this.routingService.ECC_RAGG_RET_SEARCH });
        this.router.navigate(['/anagrafiche/eccreachabilityretail/inserimento'], {});
    }
};
RicercaEccReachabilityRetailComponent.ctorParameters = () => [
    { type: _services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_3__["EccReachabilityRetailService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_12__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_14__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_13__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_16__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RicercaEccReachabilityRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ricerca-ecc-reachability-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ricerca-ecc-reachability-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ricerca-ecc-reachability-retail.component.scss */ "./src/app/views/anagrafiche/ecc-reachability-retail/ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ecc_reachability_retail_service__WEBPACK_IMPORTED_MODULE_3__["EccReachabilityRetailService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_12__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_14__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_13__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_16__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RicercaEccReachabilityRetailComponent);



/***/ })

}]);
//# sourceMappingURL=ecc-reachability-retail-ecc-reachability-retail-module.js.map