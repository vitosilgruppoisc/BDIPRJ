(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parties-parties-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-times-circle\"></i> Chiusura Party </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!isActive\">\r\n                    Il party non risulta attivo e non può essere modificato.\r\n                </div>\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"eliminazioneForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">BIC: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"bic\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.bic\"/>\r\n                        </div>\r\n\r\n                        <label for=\"tipo\" class=\"col-2 col-form-label\">Tipo: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"tipo\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.tipoParty.descrizione\"/>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nome\" class=\"col-2 col-form-label\">Nome: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"nome\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.nome\"/>\r\n                        </div>\r\n\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">ABI: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"abi\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.defaultAbi\"/>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"filiale\" class=\"col-2 col-form-label\">Filiale: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"filiale\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.filialeRiferimento.descrizione\"/>\r\n                        </div>\r\n\r\n                        <label for=\"mfiCode\" class=\"col-2 col-form-label\">MFI Code: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"mfiCode\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.mfiCode\"/>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"indResidenza\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.indicatoreResidenza\"/>\r\n                        </div>\r\n\r\n                        <label for=\"catEconomica\" class=\"col-2 col-form-label\">Categoria Ecnomica: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"catEconomica\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.categoriaEconomica\"/>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataApertura\" class=\"col-2 col-form-label\">Data Apertura: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"dataApertura\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.dataApertura\"/>\r\n                        </div>\r\n\r\n                        <label for=\"dataChiusura\" class=\"col-2 col-form-label\">Data Chiusura<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataChiusuraT\">\r\n                                <input id=\"dataChiusura\" class=\"form-control\" [class.is-invalid]=\"dataChiusura.invalid  && (form.submitted || (dataChiusura.dirty || dataChiusura.touched))\"placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusura\"  bdiDatepicker #datepickerDIV=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div class=\"input-group-append\" (click)=\"datepickerDIV.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"!!dataChiusura.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataChiusura.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataChiusura.errors?.dateformat  && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataChiusura.errors?.mindate  && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                    Data inferiore al limite inferiore consentito ({{minDateField}}): {{formatterUtils.dateToString(minDate)}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #dataChiusuraT>\r\n                            <input class=\"form-control\" [value]=\"getDataChiusuraValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità: </label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"dataInizioValidita\" class=\"form-control\" [readOnly]=\"true\" [value]=\"party.validFrom\"/>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuovo Party </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"inserimentoForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && form.submitted\" formControlName=\"bic\" maxlength=\"11\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"readonlyForm\"/>\r\n                            <div *ngIf=\"bic.errors?.required\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <div *ngIf=\"bic.errors?.syntax && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo non valido\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <label for=\"tipo\" class=\"col-2 col-form-label\">Tipo Party<span>*</span>:</label>\r\n\r\n                        <div class=\"col-4\" >\r\n                            <select *ngIf=\"!readonlyForm; else inputTipo\" id=\"tipo\" class=\"form-control\" [class.is-invalid]=\"tipo.invalid && form.submitted\" formControlName=\"tipo\">\r\n                                <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipiParty\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"tipo.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputTipo>\r\n                            <input class=\"form-control\" [value]=\"getTipoValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nome\" class=\"col-2 col-form-label\">Nome<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"nome\" class=\"form-control\" [class.is-invalid]=\"nome.invalid && form.submitted\" formControlName=\"nome\" maxlength=\"4000\" [readOnly]=\"readonlyForm\"/>\r\n                            <div *ngIf=\"nome.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && form.submitted\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^([0-9]){5}$'\" [readOnly]=\"readonlyForm\"/>\r\n                            <div *ngIf=\"abi.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo non valido\r\n                            </div>\r\n                            <div *ngIf=\"abi.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"filiale\" class=\"col-2 col-form-label\">Filiale<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <select *ngIf=\"!readonlyForm; else inputFiliale\" id=\"filiale\" class=\"form-control\" [class.is-invalid]=\"filiale.invalid && form.submitted\" formControlName=\"filiale\" >\r\n                                <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                <option *ngFor=\"let f of filialiRiferimento\" [value]=\"f.codice\">{{f.sigla}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"filiale.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputFiliale>\r\n                            <input class=\"form-control\" [value]=\"getFilialeValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                        <label for=\"mfiCode\" class=\"col-2 col-form-label\">MFI Code<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"mfiCode\" class=\"form-control\" [class.is-invalid]=\"mfiCode.invalid && form.submitted\" formControlName=\"mfiCode\" maxlength=\"160\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"readonlyForm\"/>\r\n                            <div *ngIf=\"mfiCode.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo non valido\r\n                            </div>\r\n                            <div *ngIf=\"mfiCode.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"indResidenza\" class=\"form-control\" [class.is-invalid]=\"indResidenza.invalid && (indResidenza.dirty || indResidenza.touched)\" formControlName=\"indResidenza\" [readOnly]=\"true\"/>\r\n                        </div>\r\n\r\n                        <label for=\"catEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"catEconomica\" class=\"form-control\" [class.is-invalid]=\"catEconomica.invalid && (catEconomica.dirty || catEconomica.touched)\" formControlName=\"catEconomica\" [readOnly]=\"true\"/>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataApertura\" class=\"col-2 col-form-label\">Data Apertura<span>*</span>:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputDataApertura\">\r\n                                <input id=\"dataApertura\" class=\"form-control\" [class.is-invalid]=\"dataApertura.invalid && (form.submitted || (dataApertura.dirty || dataApertura.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataApertura\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataApertura.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataApertura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"dataApertura.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataApertura.errors?.dateformat && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataApertura.errors?.daterange && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputDataApertura>\r\n                            <input class=\"form-control\" [value]=\"getDataAperturaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n\r\n                        <label for=\"dataChiusura\" class=\"col-2 col-form-label\">Data Chiusura:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputDataChiusura\">\r\n                                <input id=\"dataChiusura\" class=\"form-control\" [class.is-invalid]=\"dataChiusura.invalid && (form.submitted || (dataChiusura.dirty || dataChiusura.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusura\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataChiusura.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataChiusura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataChiusura.errors?.dateformat  && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataChiusura.errors?.daterange  && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                    Intervallo non valido\r\n                                </div>\r\n                                <div *ngIf=\"dataChiusura.errors?.mindate  && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                    Data inferiore al limite inferiore consentito (data odierna): {{formatterUtils.dateToString(minDate)}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputDataChiusura>\r\n                            <input class=\"form-control\" [value]=\"getDataChiusuraValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"!readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\">Salva</button>\r\n                        </div>\r\n\r\n                        <div class=\"col-3\" *ngIf=\"readonlyForm\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"resetForm()\">Nuovo Inserimento</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #mfiModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Attenzione!</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Il codice MFI inserito non è stato riscontrato su Infostat.<br/>\r\n            Procedere comunque con l'inserimento?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmModal()\">OK</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-edit\"></i> Modifica Party </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!isActive\">\r\n                    Il party non risulta attivo e non può essere modificato.\r\n                </div>\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <form [formGroup]=\"modificaForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && form.submitted\" formControlName=\"bic\" maxlength=\"11\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"!checkedbic.value || readonlyForm\"/>\r\n                            <div *ngIf=\"bic.errors?.required\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                            <div *ngIf=\"bic.errors?.syntax && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo non valido\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedbic\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedbic\" type=\"checkbox\" formControlName=\"checkedbic\"  [attr.disabled]=\"true\">\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"tipo\" class=\"col-2 col-form-label\">Tipo Party<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <select *ngIf=\"(checkedtipo.value && !readonlyForm); else inputTipo\" id=\"tipo\" class=\"form-control\" [class.is-invalid]=\"tipo.invalid && form.submitted\" formControlName=\"tipo\">\r\n                                <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                <option *ngFor=\"let t of tipiParty\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"tipo.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputTipo>\r\n                            <input class=\"form-control\" [value]=\"getTipoValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedtipo\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedtipo\" type=\"checkbox\" formControlName=\"checkedtipo\" [attr.disabled]=\"true\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nome\" class=\"col-2 col-form-label\">Nome<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <input id=\"nome\" class=\"form-control\" [class.is-invalid]=\"nome.invalid && form.submitted\" formControlName=\"nome\" maxlength=\"4000\" [readOnly]=\"!checkednome.value || readonlyForm\"/>\r\n                            <div *ngIf=\"nome.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkednome\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkednome\" type=\"checkbox\" formControlName=\"checkednome\" (click)=\"manageCheckBox('nome')\"/>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"defaultAbi.invalid && form.submitted\" formControlName=\"defaultAbi\" maxlength=\"5\" [pattern]=\"'^([0-9]){5}$'\" [readOnly]=\"!checkeddefaultAbi.value || readonlyForm\"/>\r\n                            <div *ngIf=\"defaultAbi.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo non valido\r\n                            </div>\r\n                            <div *ngIf=\"defaultAbi.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddefaultAbi\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddefaultAbi\" type=\"checkbox\" formControlName=\"checkeddefaultAbi\" (click)=\"manageCheckBox('defaultAbi')\"/>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"filiale\" class=\"col-2 col-form-label\">Filiale<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <select *ngIf=\"(checkedfiliale.value &&!readonlyForm); else inputFiliale\" id=\"filiale\" class=\"form-control\" [class.is-invalid]=\"filiale.invalid && form.submitted\" formControlName=\"filiale\">\r\n                                <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                <option *ngFor=\"let f of filialiRiferimento\" [value]=\"f.codice\">{{f.sigla}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"filiale.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputFiliale>\r\n                            <input class=\"form-control\" [value]=\"getFilialeValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedfiliale\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedfiliale\" type=\"checkbox\" formControlName=\"checkedfiliale\" (click)=\"manageCheckBox('filialeRiferimento')\" >\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"mfiCode\" class=\"col-2 col-form-label\">MFI Code<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <input id=\"mfiCode\" class=\"form-control\" [class.is-invalid]=\"mfiCode.invalid && form.submitted\" formControlName=\"mfiCode\" maxlength=\"160\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"!checkedmfiCode.value || readonlyForm\"/>\r\n                            <div *ngIf=\"mfiCode.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo non valido\r\n                            </div>\r\n                            <div *ngIf=\"mfiCode.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                Campo obbligatorio\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedmfiCode\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedmfiCode\" type=\"checkbox\" formControlName=\"checkedmfiCode\" (click)=\"manageCheckBox('mfiCode')\">\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"indicatoreResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                        <div class=\"col-3\">\r\n                            <input id=\"indicatoreResidenza\" class=\"form-control\" [class.is-invalid]=\"indicatoreResidenza.invalid && (indicatoreResidenza.dirty || indicatoreResidenza.touched)\" formControlName=\"indicatoreResidenza\" [readOnly]=\"!checkedindicatoreResidenza.value\"/>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedindicatoreResidenza\" class=\"ol-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedindicatoreResidenza\" type=\"checkbox\" formControlName=\"checkedindicatoreResidenza\" [attr.disabled]=\"true\">\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"categoriaEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                        <div class=\"col-3\">\r\n                            <input id=\"categoriaEconomica\" class=\"form-control\" [class.is-invalid]=\"categoriaEconomica.invalid && (categoriaEconomica.dirty || categoriaEconomica.touched)\" formControlName=\"categoriaEconomica\" [readOnly]=\"!checkedcategoriaEconomica.value\"/>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkedcategoriaEconomica\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkedcategoriaEconomica\" type=\"checkbox\" formControlName=\"checkedcategoriaEconomica\" [attr.disabled]=\"true\">\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"dataApertura\" class=\"col-2 col-form-label\">Data Apertura<span>*</span>:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkeddataApertura.value && !readonlyForm); else inputDataApertura\">\r\n                                <input id=\"dataApertura\" class=\"form-control\" [class.is-invalid]=\"dataApertura.invalid && (form.submitted || (dataApertura.dirty || dataApertura.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataApertura\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [maxDate]=\"maxDate\"/>\r\n                                <div class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataApertura.value\"  class=\"input-group-append\" (click)=\"reset('dataApertura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataApertura.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                    Campo obbligatorio\r\n                                </div>\r\n                                <div *ngIf=\"dataApertura.errors?.maxdate  && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                    Data superiore al limite massimo consentito (data chiusura): {{formatterUtils.dateToString(maxDate)}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputDataApertura>\r\n                            <input class=\"form-control\" [value]=\"getDataAperturaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddataApertura\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddataApertura\" type=\"checkbox\" formControlName=\"checkeddataApertura\" (click)=\"manageCheckBox('dataApertura', 'date')\">\r\n                            </label>\r\n                        </div>\r\n\r\n                        <label for=\"dataChiusura\" class=\"col-2 col-form-label\">Data Chiusura:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"(checkeddataChiusura.value && !readonlyForm); else inputDataChiusura\">\r\n                                <input id=\"dataChiusura\" class=\"form-control\" [class.is-invalid]=\"dataChiusura.invalid && form.submitted\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusura\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" readOnly=\"true\" style=\"background-color: #ffffff !important\"/>\r\n                                <div class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                </div>\r\n                                <div  *ngIf=\"!!dataChiusura.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #inputDataChiusura>\r\n                            <input class=\"form-control\" [value]=\"getDataChiusuraValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                        <div class=\"col-1\">\r\n                            <label for=\"checkeddataChiusura\" class=\"col-form-label\">\r\n                                <input *ngIf=\"!readonlyForm\" id=\"checkeddataChiusura\" type=\"checkbox\" formControlName=\"checkeddataChiusura\" [attr.disabled]=\"true\">\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-6\"></div>\r\n                        <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità:</label>\r\n                        <div class=\"col-3\">\r\n                            <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataInizioValiditaT\">\r\n                                <input id=\"dataInizioValidita\" class=\"form-control\" [class.is-invalid]=\"dataInizioValidita.invalid && (form.submitted || (dataInizioValidita.dirty || dataInizioValidita.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValidita\"  bdiDatepicker #datepickerDIV=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"/>\r\n                                <div class=\"input-group-append\" (click)=\"datepickerDIV.toggle()\" style=\"cursor: pointer;\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div *ngIf=\"!!dataInizioValidita.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValidita')\" style=\"cursor: pointer;\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <i class=\"fas fa-trash-alt\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.mindate  && (dataInizioValidita.dirty || dataInizioValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Data inferiore al limite inferiore consentito (data apertura): {{formatterUtils.dateToString(minDate)}}\r\n                                </div>\r\n                                <div *ngIf=\"dataInizioValidita.errors?.maxdate  && (dataInizioValidita.dirty || dataInizioValidita.touched)\" class=\"invalid-feedback\">\r\n                                    Data superiore al limite massimo consentito (data chiusura): {{formatterUtils.dateToString(maxDate)}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-template #dataInizioValiditaT>\r\n                            <input class=\"form-control\" [value]=\"getDataInizioValiditaValue()\" [readOnly]=\"true\"/>\r\n                        </ng-template>\r\n                    </div>\r\n\r\n                    <div class=\"alert alert-info\" role=\"alert\" >\r\n                        <div [innerHTML]=utils.getModificaMessage()></div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #mfiModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Attenzione!</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Il codice MFI inserito non è stato riscontrato su Infostat.<br/>\r\n            Procedere comunque con la modifica?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmModal()\">OK</button>\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/services/infostat.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/infostat.service.ts ***!
  \**********************************************/
/*! exports provided: InfostatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfostatService", function() { return InfostatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");




let InfostatService = class InfostatService {
    constructor(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.apiEndpoint = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }
    getInfostatValue(mfiCode) {
        return this.http.get(`${this.apiEndpoint}/soggettiInfostat/${mfiCode}`).pipe();
    }
};
InfostatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
InfostatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], InfostatService);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9wYXJ0aWVzL2VsaW1pbmF6aW9uZS1sb2dpY2EtcGFydHkvZWxpbWluYXppb25lLWxvZ2ljYS1wYXJ0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EliminazioneLogicaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminazioneLogicaPartyComponent", function() { return EliminazioneLogicaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_party_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-party.component */ "./src/app/views/anagrafiche/parties/abstract-party.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_infostat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/infostat.service */ "./src/app/services/infostat.service.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");


















let EliminazioneLogicaPartyComponent = class EliminazioneLogicaPartyComponent extends _abstract_party_component__WEBPACK_IMPORTED_MODULE_2__["AbstractPartyComponent"] {
    constructor(router, partyService, filialeService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, infostatService, modalService, route, routingService) {
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.infostatService = infostatService;
        this.modalService = modalService;
        this.route = route;
        this.routingService = routingService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const deletePartySessionObj = this.getSession(this.routingService.PARTY_DELETE);
            if (!!deletePartySessionObj) {
                this.load(deletePartySessionObj.idParty);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(deletePartySessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idParty) {
        this.showSpinner();
        this.partyService.getParty(idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
            this.party = res;
            this.setMinDate();
            this.isActive = this.isPartyActive(this.party);
            const dc = new Date(this.party.dataChiusura);
            this.eliminazioneForm = this.formBuilder.group({
                dataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: dc.getFullYear(), month: (dc.getUTCMonth() + 1), day: dc.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_17__["dateValidator"])([
                    { field1: 'dataChiusura', minDate1: this.minDate }
                ]) });
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
            console.log('Error - loadParty', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        })).subscribe();
    }
    get dataChiusura() { return this.eliminazioneForm.get('dataChiusura'); }
    setMinDate() {
        const d1 = new Date(this.party.dataApertura);
        d1.setDate(d1.getDate() + 1);
        const d2 = new Date(this.party.validFrom);
        /*if (d1 >= d2 ) {
          this.minDate =  {day: d1.getUTCDate(), month: (d1.getUTCMonth() + 1), year: d1.getFullYear()};
          this.minDateField = 'data apertura';
        } else {
          this.minDate = {day: d2.getUTCDate(), month: (d2.getUTCMonth() + 1), year: d2.getFullYear()};
          this.minDateField = 'data inizio validità';
        }*/
        //Poichè la data inizio validità deve essere sempre >= della data apertura allora vale il seguente
        this.minDate = { day: d2.getUTCDate(), month: (d2.getUTCMonth() + 1), year: d2.getFullYear() };
        this.minDateField = 'data inizio validità';
    }
    reset(field) {
        this.eliminazioneForm.get(field).setValue(undefined);
    }
    onSubmit() {
        this.resetError();
        this.isResultOk = false;
        if (this.eliminazioneForm.valid) {
            this.showSpinner();
            const taskPartyReq = this.buildTaskParty();
            this.taskService.saveTaskParty(taskPartyReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
                this.eliminazioneForm.get('dataChiusura').setValue(res.dataChiusura);
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
                console.log('Error - onSubmit', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
            })).subscribe();
        }
    }
    buildTaskParty() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoOperazioneEnum"].DEL
            },
            dataChiusura: this.formatterUtils.dateToString(this.dataChiusura.value),
            idPartyOrig: this.party.id
        };
    }
    getDataChiusuraValue() {
        return this.eliminazioneForm.get('dataChiusura').value;
    }
};
EliminazioneLogicaPartyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"] },
    { type: _services_infostat_service__WEBPACK_IMPORTED_MODULE_11__["InfostatService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_12__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"] }
];
EliminazioneLogicaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eliminazione-logica-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminazione-logica-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminazione-logica-party.component.scss */ "./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"],
        _services_infostat_service__WEBPACK_IMPORTED_MODULE_11__["InfostatService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_12__["ModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"]])
], EliminazioneLogicaPartyComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InserimentoPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoPartyComponent", function() { return InserimentoPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _abstract_party_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract-party.component */ "./src/app/views/anagrafiche/parties/abstract-party.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _services_infostat_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/infostat.service */ "./src/app/services/infostat.service.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");


















let InserimentoPartyComponent = class InserimentoPartyComponent extends _abstract_party_component__WEBPACK_IMPORTED_MODULE_9__["AbstractPartyComponent"] {
    constructor(router, partyService, filialeService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, infostatService, modalService, routingService, route) {
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.infostatService = infostatService;
        this.modalService = modalService;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const insertPartySessionObj = this.getSession(this.routingService.PARTY_INSERT);
            if (!!insertPartySessionObj) {
                this.backUrl = this.routingService.getRouteByKey(insertPartySessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
        super.ngOnInit();
        this.buildForm();
    }
    buildForm() {
        const today = new Date();
        this.minDate = { day: today.getUTCDate(), month: (today.getUTCMonth() + 1), year: today.getFullYear() };
        this.inserimentoForm = this.formBuilder.group({
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.bic11Validator.bind(this)]),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            filiale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mfiCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            catEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_17__["dateValidator"])([
                { field1: 'dataApertura', field2: 'dataChiusura', minDate2: this.minDate }
            ]) });
    }
    bic11Validator(control) {
        const bicRegex = new RegExp('^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})$');
        if (!!control &&
            !!control.value &&
            !bicRegex.test(control.value)) {
            return { 'syntax': true };
        }
        return null;
    }
    get bic() { return this.inserimentoForm.get('bic'); }
    get tipo() { return this.inserimentoForm.get('tipo'); }
    get nome() { return this.inserimentoForm.get('nome'); }
    get abi() { return this.inserimentoForm.get('abi'); }
    get filiale() { return this.inserimentoForm.get('filiale'); }
    get mfiCode() { return this.inserimentoForm.get('mfiCode'); }
    get indResidenza() { return this.inserimentoForm.get('indResidenza'); }
    get catEconomica() { return this.inserimentoForm.get('catEconomica'); }
    get dataApertura() { return this.inserimentoForm.get('dataApertura'); }
    get dataChiusura() { return this.inserimentoForm.get('dataChiusura'); }
    reset(field) {
        this.inserimentoForm.get(field).setValue(undefined);
    }
    onSubmit() {
        this.resetError();
        this.isResultOk = false;
        if (this.inserimentoForm.valid) {
            this.showSpinner();
            this.infostatService.getInfostatValue(this.mfiCode.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
                if (!!res) {
                    this.saveParty();
                }
                else {
                    this.openModal();
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
                console.log('Error - getInfostatValue', error);
                this.hideSpinner();
                this.openModal();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            })).subscribe();
        }
    }
    openModal() {
        this.mfiModalReference = this.modalService.open(this.mfiModal);
    }
    closeModal() {
        this.mfiModalReference.close();
    }
    confirmModal() {
        this.mfiModalReference.close();
        this.saveParty();
    }
    saveParty() {
        const taskParty = this.buildTaskParty();
        this.taskService.saveTaskParty(taskParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
            const d = new Date(res.dataChiusura);
            this.inserimentoForm.get('indResidenza').setValue(res.indicatoreResidenza);
            this.inserimentoForm.get('catEconomica').setValue(res.categoriaEconomica);
            this.inserimentoForm.get('dataChiusura').setValue({ year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() });
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
            console.log('Error - saveParty', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        })).subscribe();
    }
    buildTaskParty() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoOperazioneEnum"].INS
            },
            bic: this.bic.value,
            tipoParty: {
                codice: this.tipo.value
            },
            defaultAbi: this.abi.value,
            nome: this.nome.value,
            filialeRiferimento: {
                codice: this.filiale.value,
            },
            mfiCode: this.mfiCode.value,
            categoriaEconomica: this.catEconomica.value,
            indicatoreResidenza: this.indResidenza.value,
            dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
            dataChiusura: this.formatterUtils.dateToString((!!this.dataChiusura.value ? this.dataChiusura.value : { year: 9999, month: 12, day: 31 }))
        };
    }
    resetForm() {
        this.readonlyForm = false;
        this.isResultOk = false;
        this.buildForm();
    }
    getTipoValue() {
        return this.tipiParty.find(t => t.codice == this.tipo.value).descrizione;
    }
    getFilialeValue() {
        return this.filialiRiferimento.find(f => f.codice == this.filiale.value).descrizione;
    }
    getDataAperturaValue() {
        return this.formatterUtils.dateToString(this.dataApertura.value);
    }
    getDataChiusuraValue() {
        return this.formatterUtils.dateToString(this.dataChiusura.value);
    }
};
InserimentoPartyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"] },
    { type: _services_infostat_service__WEBPACK_IMPORTED_MODULE_14__["InfostatService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_15__["ModalService"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mfiModal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], InserimentoPartyComponent.prototype, "mfiModal", void 0);
InserimentoPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"],
        _services_infostat_service__WEBPACK_IMPORTED_MODULE_14__["InfostatService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_15__["ModalService"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], InserimentoPartyComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".align-center {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2FuYWdyYWZpY2hlL3BhcnRpZXMvbW9kaWZpY2EtcGFydHkvQzpcXFVzZXJzXFxJU0MwNzRcXERvd25sb2Fkc1xcd2V0cmFuc2Zlcl9nZXBhLWNvbnRpLWxvcm8temlwXzIwMjItMDItMDFfMTMxMlxcd2ViYXBwXFxzcmNcXGFwcFxcY29tbW9uXFx0YWIvLi5cXC4uXFx2aWV3c1xcYW5hZ3JhZmljaGVcXHBhcnRpZXNcXG1vZGlmaWNhLXBhcnR5XFxtb2RpZmljYS1wYXJ0eS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3ZpZXdzL2FuYWdyYWZpY2hlL3BhcnRpZXMvbW9kaWZpY2EtcGFydHkvbW9kaWZpY2EtcGFydHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoiLi4vLi4vdmlld3MvYW5hZ3JhZmljaGUvcGFydGllcy9tb2RpZmljYS1wYXJ0eS9tb2RpZmljYS1wYXJ0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1jZW50ZXJ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcbiIsIi5hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ModificaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaPartyComponent", function() { return ModificaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_party_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-party.component */ "./src/app/views/anagrafiche/parties/abstract-party.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_infostat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/infostat.service */ "./src/app/services/infostat.service.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");




















let ModificaPartyComponent = class ModificaPartyComponent extends _abstract_party_component__WEBPACK_IMPORTED_MODULE_2__["AbstractPartyComponent"] {
    constructor(router, partyService, filialeService, securityService, userService, filterUtils, formatterUtils, formBuilder, taskService, infostatService, modalService, route, routingService, utils) {
        super(partyService, filialeService, securityService, userService, formatterUtils, routingService, route);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.infostatService = infostatService;
        this.modalService = modalService;
        this.route = route;
        this.routingService = routingService;
        this.utils = utils;
        this.utils = utils;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const modifyPartySessionObj = this.getSession(this.routingService.PARTY_MODIFY);
            if (!!modifyPartySessionObj) {
                this.load(modifyPartySessionObj.idParty);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyPartySessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idParty) {
        this.showSpinner();
        this.partyService.getParty(idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
            this.party = res;
            this.isActive = this.isPartyActive(this.party);
            if (!this.isActive) {
                this.readonlyForm = true;
            }
            this.buildForm();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
            console.log('Error - loadParty', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        })).subscribe();
    }
    buildForm() {
        const da = new Date(this.party.dataApertura);
        const dc = new Date(this.party.dataChiusura);
        const vf = new Date(this.party.validFrom);
        vf.setDate(vf.getDate() + 1);
        this.minDate = { day: vf.getUTCDate(), month: (vf.getUTCMonth() + 1), year: vf.getFullYear() };
        this.maxDate = { day: dc.getUTCDate(), month: (dc.getUTCMonth() + 1), year: dc.getFullYear() };
        this.modificaForm = this.formBuilder.group({
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.bic, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.bic11Validator.bind(this)]),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.tipoParty.codice, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            defaultAbi: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.defaultAbi, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            filiale: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.filialeRiferimento.codice, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            mfiCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.mfiCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            indicatoreResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.indicatoreResidenza, []),
            categoriaEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.party.categoriaEconomica, []),
            dataApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: da.getFullYear(), month: (da.getUTCMonth() + 1), day: da.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            dataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ year: dc.getFullYear(), month: (dc.getUTCMonth() + 1), day: dc.getUTCDate() }, []),
            checkedbic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedtipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkednome: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkeddefaultAbi: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedfiliale: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedmfiCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedindicatoreResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkedcategoriaEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkeddataApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            checkeddataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, []),
            dataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [])
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_18__["dateValidator"])([
                { field1: 'dataApertura', maxDate1: this.maxDate },
                { field1: 'dataInizioValidita', minDate1: this.minDate, maxDate1: this.maxDate }
            ]) });
    }
    bic11Validator(control) {
        const bicRegex = new RegExp('^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})$');
        if (!!control &&
            !!control.value &&
            !bicRegex.test(control.value)) {
            return { 'syntax': true };
        }
        return null;
    }
    get bic() { return this.modificaForm.get('bic'); }
    get tipo() { return this.modificaForm.get('tipo'); }
    get nome() { return this.modificaForm.get('nome'); }
    get defaultAbi() { return this.modificaForm.get('defaultAbi'); }
    get filiale() { return this.modificaForm.get('filiale'); }
    get mfiCode() { return this.modificaForm.get('mfiCode'); }
    get indicatoreResidenza() { return this.modificaForm.get('indicatoreResidenza'); }
    get categoriaEconomica() { return this.modificaForm.get('categoriaEconomica'); }
    get dataApertura() { return this.modificaForm.get('dataApertura'); }
    get dataChiusura() { return this.modificaForm.get('dataChiusura'); }
    get checkedbic() { return this.modificaForm.get('checkedbic'); }
    get checkedtipo() { return this.modificaForm.get('checkedtipo'); }
    get checkednome() { return this.modificaForm.get('checkednome'); }
    get checkeddefaultAbi() { return this.modificaForm.get('checkeddefaultAbi'); }
    get checkedfiliale() { return this.modificaForm.get('checkedfiliale'); }
    get checkedmfiCode() { return this.modificaForm.get('checkedmfiCode'); }
    get checkedindicatoreResidenza() { return this.modificaForm.get('checkedindicatoreResidenza'); }
    get checkedcategoriaEconomica() { return this.modificaForm.get('checkedcategoriaEconomica'); }
    get checkeddataApertura() { return this.modificaForm.get('checkeddataApertura'); }
    get checkeddataChiusura() { return this.modificaForm.get('checkeddataChiusura'); }
    get dataInizioValidita() { return this.modificaForm.get('dataInizioValidita'); }
    reset(field) {
        this.modificaForm.get(field).setValue(undefined);
    }
    manageCheckBox(field, type) {
        if (this.modificaForm.get('checked'.concat(field)).value) {
            let val = Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(this.party, field);
            if (!!type && type == 'date') {
                val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
            }
            this.modificaForm.get(field).setValue(val);
        }
        else {
            //this.modificaForm.get(field).setValue(null);
        }
    }
    onSubmit() {
        this.resetError();
        this.isResultOk = false;
        if (this.modificaForm.valid) {
            this.showSpinner();
            if (!this.checkedmfiCode.value) {
                this.modifyParty();
            }
            else {
                this.infostatService.getInfostatValue(this.mfiCode.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
                    if (!!res) {
                        this.modifyParty();
                    }
                    else {
                        this.openModal();
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
                    console.log('Error - getInfostatValue', error);
                    this.hideSpinner();
                    this.openModal();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
                })).subscribe();
            }
        }
    }
    openModal() {
        this.mfiModalReference = this.modalService.open(this.mfiModal);
    }
    closeModal() {
        this.mfiModalReference.close();
    }
    confirmModal() {
        this.mfiModalReference.close();
        this.modifyParty();
    }
    modifyParty() {
        const taskPartyReq = this.buildTaskParty();
        console.log(taskPartyReq);
        this.taskService.saveTaskParty(taskPartyReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
            if (!!res) {
                this.party.dataApertura = res.dataApertura;
                this.party.dataChiusura = res.dataChiusura;
                this.party.filialeRiferimento = res.filialeRiferimento;
                this.modificaForm.get('indicatoreResidenza').setValue(res.indicatoreResidenza);
                this.modificaForm.get('categoriaEconomica').setValue(res.categoriaEconomica);
            }
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
            console.log('Error - modifyParty', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        })).subscribe();
    }
    buildTaskParty() {
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
            bic: this.bic.value,
            tipoParty: {
                codice: this.tipo.value
            },
            defaultAbi: this.defaultAbi.value,
            nome: this.nome.value,
            filialeRiferimento: {
                codice: this.filiale.value
            },
            mfiCode: this.mfiCode.value,
            categoriaEconomica: null,
            indicatoreResidenza: null,
            dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
            dataChiusura: this.formatterUtils.dateToString(this.dataChiusura.value),
            validFrom: (!!this.dataInizioValidita.value ? this.formatterUtils.dateToString(this.dataInizioValidita.value) : null),
            validTo: null,
            tsModifica: null,
            utenteRichiesta: null,
            utenteValidazione: null,
            bicToEdit: this.checkedbic.value,
            tipoPartyToEdit: this.checkedtipo.value,
            defaultAbiToEdit: this.checkeddefaultAbi.value,
            nomeToEdit: this.checkednome.value,
            filialeRiferimentoToEdit: this.checkedfiliale.value,
            mfiCodeToEdit: this.checkedmfiCode.value,
            categoriaEconomicaToEdit: this.checkedcategoriaEconomica.value,
            indicatoreResidenzaToEdit: this.checkedindicatoreResidenza.value,
            dataAperturaToEdit: this.checkeddataApertura.value,
            dataChiusuraToEdit: this.checkeddataChiusura.value,
            validFromToEdit: (!!this.dataInizioValidita.value ? true : false),
            validToToEdit: false,
            tsModificaToEdit: false,
            utenteRichiestaToEdit: true,
            utenteValidazioneToEdit: false,
            idPartyOrig: this.party.id,
            bicOrig: null,
            tipoPartyOrig: null,
            defaultAbiOrig: null,
            nomeOrig: null,
            filialeRiferimentoOrig: null,
            mfiCodeOrig: null,
            categoriaEconomicaOrig: null,
            indicatoreResidenzaOrig: null,
            dataAperturaOrig: null,
            dataChiusuraOrig: null,
            validFromOrig: null,
            validToOrig: null,
            tsModificaOrig: null,
            utenteRichiestaOrig: null,
            utenteValidazioneOrig: null
        };
    }
    getTipoValue() {
        return this.tipiParty.find(t => t.codice == this.party.tipoParty.codice).descrizione;
    }
    getFilialeValue() {
        return this.filialiRiferimento.find(f => f.codice == this.party.filialeRiferimento.codice).descrizione;
    }
    getDataAperturaValue() {
        return this.party.dataApertura;
    }
    getDataChiusuraValue() {
        return this.party.dataChiusura;
    }
    getDataInizioValiditaValue() {
        return this.party.validFrom;
    }
};
ModificaPartyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"] },
    { type: _services_infostat_service__WEBPACK_IMPORTED_MODULE_11__["InfostatService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_12__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_17__["RoutingService"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_19__["Utils"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mfiModal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], ModificaPartyComponent.prototype, "mfiModal", void 0);
ModificaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifica-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-party.component.scss */ "./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_10__["TaskService"],
        _services_infostat_service__WEBPACK_IMPORTED_MODULE_11__["InfostatService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_12__["ModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_17__["RoutingService"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_19__["Utils"]])
], ModificaPartyComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/parties-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/parties-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PartiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartiesRoutingModule", function() { return PartiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ricerca_parties_ricerca_parties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ricerca-parties/ricerca-parties.component */ "./src/app/views/anagrafiche/parties/ricerca-parties/ricerca-parties.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _inserimento_party_inserimento_party_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserimento-party/inserimento-party.component */ "./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.ts");
/* harmony import */ var _eliminazione_logica_party_eliminazione_logica_party_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eliminazione-logica-party/eliminazione-logica-party.component */ "./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.ts");
/* harmony import */ var _modifica_party_modifica_party_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifica-party/modifica-party.component */ "./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.ts");









const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Parties',
        },
        children: [
            {
                path: '',
                component: _ricerca_parties_ricerca_parties_component__WEBPACK_IMPORTED_MODULE_3__["RicercaPartiesComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_5__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_5__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_5__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'inserimento',
                component: _inserimento_party_inserimento_party_component__WEBPACK_IMPORTED_MODULE_6__["InserimentoPartyComponent"],
                data: {
                    title: 'Nuovo Party',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_5__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'dettaglio',
                loadChildren: () => Promise.all(/*! import() | dettaglio-party-dettaglio-party-module */[__webpack_require__.e("common"), __webpack_require__.e("dettaglio-party-dettaglio-party-module")]).then(__webpack_require__.bind(null, /*! ./dettaglio-party/dettaglio-party.module */ "./src/app/views/anagrafiche/parties/dettaglio-party/dettaglio-party.module.ts")).then(m => m.DettaglioPartyModule)
            },
            {
                path: 'modifica',
                component: _modifica_party_modifica_party_component__WEBPACK_IMPORTED_MODULE_8__["ModificaPartyComponent"],
                data: {
                    title: 'Modifica Party',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_5__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'eliminazione-logica',
                component: _eliminazione_logica_party_eliminazione_logica_party_component__WEBPACK_IMPORTED_MODULE_7__["EliminazioneLogicaPartyComponent"],
                data: {
                    title: 'Eliminazione Logica Party',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_5__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            }
        ]
    },
];
let PartiesRoutingModule = class PartiesRoutingModule {
};
PartiesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PartiesRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/parties/parties.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/anagrafiche/parties/parties.module.ts ***!
  \*************************************************************/
/*! exports provided: PartiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartiesModule", function() { return PartiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _parties_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parties-routing.module */ "./src/app/views/anagrafiche/parties/parties-routing.module.ts");
/* harmony import */ var _ricerca_parties_ricerca_parties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ricerca-parties/ricerca-parties.component */ "./src/app/views/anagrafiche/parties/ricerca-parties/ricerca-parties.component.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _inserimento_party_inserimento_party_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inserimento-party/inserimento-party.component */ "./src/app/views/anagrafiche/parties/inserimento-party/inserimento-party.component.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _eliminazione_logica_party_eliminazione_logica_party_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./eliminazione-logica-party/eliminazione-logica-party.component */ "./src/app/views/anagrafiche/parties/eliminazione-logica-party/eliminazione-logica-party.component.ts");
/* harmony import */ var _modifica_party_modifica_party_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modifica-party/modifica-party.component */ "./src/app/views/anagrafiche/parties/modifica-party/modifica-party.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
















let PartiesModule = class PartiesModule {
};
PartiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ricerca_parties_ricerca_parties_component__WEBPACK_IMPORTED_MODULE_4__["RicercaPartiesComponent"], _inserimento_party_inserimento_party_component__WEBPACK_IMPORTED_MODULE_10__["InserimentoPartyComponent"], /*DettaglioPartyComponent,*/ _eliminazione_logica_party_eliminazione_logica_party_component__WEBPACK_IMPORTED_MODULE_12__["EliminazioneLogicaPartyComponent"], _modifica_party_modifica_party_component__WEBPACK_IMPORTED_MODULE_13__["ModificaPartyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_7__["GepaGuiCommonModule"],
            _parties_routing_module__WEBPACK_IMPORTED_MODULE_3__["PartiesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_11__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDIDatagridModule"].withComponents([
                _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__["GenericActionRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_5__["BDITooltipModule"].forRoot(),
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_14__["GenericActionRenderModule"]
        ],
        entryComponents: [_generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__["GenericActionRenderComponent"]],
    })
], PartiesModule);



/***/ })

}]);
//# sourceMappingURL=parties-parties-module.js.map