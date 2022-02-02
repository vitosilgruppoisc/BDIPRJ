(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conti-conti-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-edit\"></i> Chiusura Conto </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party Proprietario</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"eliminazioneForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <strong><i class=\"fal fa-info-square\"></i>Conto</strong>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"bicConto\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.bic\"/>\r\n                                </div>\r\n\r\n                                <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"tipoConto\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.tipoConto.descrizione\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"targetService\" class=\"col-2 col-form-label\">Target Service:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"targetService\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.tipoConto.descrizione\"/>\r\n                                </div>\r\n\r\n                                <label for=\"numeroConto\" class=\"col-2 col-form-label\">Account Id:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"numeroConto\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.numeroConto\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"descrizione\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.descrizione\"/>\r\n                                </div>\r\n\r\n                                <label for=\"abi\" class=\"col-2 col-form-label\">ABI:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"abi\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.abi\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"mcaDefFlag\" class=\"col-2 col-form-label\">Default MCA:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"mcaDefFlag\" class=\"form-control\" [readOnly]=\"true\" [value]=\"formatterUtils.getBooleanAsString(conto.mcaDefFlag)\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"pressoBdi\" class=\"col-2 col-form-label\">Presso BDI:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"pressoBdi\" class=\"form-control\" [readOnly]=\"true\" [value]=\"formatterUtils.getBooleanAsString(conto.pressoBdi)\"/>\r\n                                </div>\r\n\r\n                                <label for=\"flgMan\" class=\"col-2 col-form-label\">Flag Inserimento manuale:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"flgMan\" class=\"form-control\" [readOnly]=\"true\" [value]=\"formatterUtils.getBooleanAsString(conto.flgMan)\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"indResidenza\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.indicatoreResidenza\"/>\r\n                                </div>\r\n\r\n                                <label for=\"categoriaEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"categoriaEconomica\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.categoriaEconomica\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"dataApertura\" class=\"col-2 col-form-label\">Data Apertura:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"dataApertura\" class=\"form-control\" [readOnly]=\"true\" [value]=\"conto.dataApertura\"/>\r\n                                </div>\r\n\r\n                                <label for=\"dataChiusura\" class=\"col-2 col-form-label\">Data Chiusura<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataChiusuraT\">\r\n                                        <input id=\"dataChiusura\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusura\"  [class.is-invalid]=\"dataChiusura.invalid && form.submitted\" bdiDatepicker #datepickerDIV=\"bdiDatepicker\" maxlength=\"10\" readOnly=\"true\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIV.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"!!dataChiusura.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusura.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #dataChiusuraT>\r\n                                    <input class=\"form-control\" [value]=\"getDataChiusuraValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-edit\"></i> Modifica Conto <ng-container *ngIf=\"userIsBil\"> - Indicatori BIL</ng-container></strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party Proprietario</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"modificaForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <strong><i class=\"fal fa-info-square\"></i>Conto</strong>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && form.submitted\" formControlName=\"bicConto\" maxlength=\"11\" [readOnly]=\"!checkedbicConto.value || readonlyForm\"/>\r\n                                </div>\r\n                                <ng-container *ngIf=\"userIsSpi\">\r\n                                    <label for=\"checkedbicConto\" class=\"col-1 col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedbicConto\" type=\"checkbox\" formControlName=\"checkedbicConto\"  [attr.disabled]=\"true\"></label>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"!userIsSpi\">\r\n                                    <div class=\"col-1\"></div>\r\n                                </ng-container>\r\n\r\n                                <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <select *ngIf=\"(checkedtipoConto.value && !readonlyForm); else inputTipo\" id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && form.submitted\" formControlName=\"tipoConto\" (change)=\"setTargetService()\">\r\n                                        <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                        <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"tipoConto.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputTipo>\r\n                                    <input class=\"form-control\" [value]=\"getSelectValue(tipiConto, conto.tipoConto.codice)\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                <ng-container *ngIf=\"userIsSpi\">\r\n                                    <label for=\"checkedtipoConto\" class=\"col-1 col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedtipoConto\" type=\"checkbox\" formControlName=\"checkedtipoConto\" [attr.disabled]=\"true\"/></label>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"!userIsSpi\">\r\n                                    <div class=\"col-1\"></div>\r\n                                </ng-container>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"targetService\" class=\"col-2 col-form-label\">Target Service<span>*</span>:</label>\r\n                                <!--<div class=\"col-3\">\r\n                                    <select *ngIf=\"(checkedtargetService.value && !readonlyForm); else inputTarget\" id=\"targetService\" class=\"form-control\" [class.is-invalid]=\"targetService.invalid && form.submitted\" formControlName=\"targetService\">\r\n                                        <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                        <option *ngFor=\"let t of tipiTargetService\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"targetService.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputTarget>\r\n                                    <input class=\"form-control\" [value]=\"getSelectValue(tipiTargetService, conto.targetService)\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                -->\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"targetService\" class=\"form-control\" [value]=\"getSelectValue(tipiTargetService, conto.targetService)\" [readOnly]=\"true\"/>\r\n                                </div>\r\n                                <ng-container *ngIf=\"userIsSpi\">\r\n                                    <label for=\"checkedtargetService\" class=\"col-1 col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedtargetService\" type=\"checkbox\" formControlName=\"checkedtargetService\" [attr.disabled]=\"true\"/></label>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"!userIsSpi\">\r\n                                    <div class=\"col-1\"></div>\r\n                                </ng-container>\r\n\r\n                                <label for=\"numeroConto\" class=\"col-2 col-form-label\">Account Id<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"numeroConto\" class=\"form-control\" [class.is-invalid]=\"numeroConto.invalid && form.submitted\" formControlName=\"numeroConto\" maxlength=\"34\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"!checkednumeroConto.value || readonlyForm\"/>\r\n                                    <div *ngIf=\"numeroConto.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo non valido\r\n                                    </div>\r\n                                    <div *ngIf=\"numeroConto.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label for=\"checkednumeroConto\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkednumeroConto\" type=\"checkbox\" formControlName=\"checkednumeroConto\" (click)=\"manageCheckBox('numeroConto')\"/></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && form.submitted\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"!checkeddescrizione.value || readonlyForm\"/>\r\n                                    <div *ngIf=\"descrizione.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label for=\"checkeddescrizione\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkeddescrizione\" type=\"checkbox\" formControlName=\"checkeddescrizione\" (click)=\"manageCheckBox('descrizione')\"/></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n\r\n                                <label for=\"abi\" class=\"col-2 col-form-label\">ABI<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && form.submitted\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9]+$'\" [readOnly]=\"!checkedabi.value || readonlyForm\"/>\r\n                                    <div *ngIf=\"abi.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo non valido\r\n                                    </div>\r\n                                    <div *ngIf=\"abi.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label for=\"checkedabi\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedabi\" type=\"checkbox\" formControlName=\"checkedabi\" (click)=\"manageCheckBox('abi')\"></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"mcaDefFlag\" class=\"col-2 col-form-label\">Default MCA:</label>\r\n                                <div class=\"col-3\">\r\n                                    <select *ngIf=\"(checkedmcaDefFlag.value && !readonlyForm); else inputDefaultMCA\" id=\"mcaDefFlag\" class=\"form-control\" [class.is-invalid]=\"mcaDefFlag.invalid && form.submitted\" formControlName=\"mcaDefFlag\">\r\n                                        <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                        <option *ngFor=\"let t of tipiDefaultMCA\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"mcaDefFlag.errors?.value && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <ng-template #inputDefaultMCA>\r\n                                    <input class=\"form-control\" [value]=\"getSelectValue(tipiDefaultMCA, formatterUtils.getBooleanAsString(conto, 'mcaDefFlag'))\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label *ngIf=\"checkTipoConto(); else defaultMCADisabled\" for=\"checkedmcaDefFlag\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedmcaDefFlag\" type=\"checkbox\" formControlName=\"checkedmcaDefFlag\" (click)=\"manageCheckBox('mcaDefFlag')\"/></label>\r\n                                    </ng-container>\r\n                                    <ng-template #defaultMCADisabled>\r\n                                        <label for=\"checkeddefaultMCADis\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkeddefaultMCADis\" type=\"checkbox\" formControlName=\"checkedmcaDefFlag\" [attr.disabled]=\"true\"/></label>\r\n                                    </ng-template>\r\n\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"pressoBdi\" class=\"col-2 col-form-label\">Presso BDI <span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <select *ngIf=\"(checkedpressoBdi.value && !readonlyForm); else inputPressoBDI\" id=\"pressoBdi\" class=\"form-control\" [class.is-invalid]=\"pressoBdi.invalid && form.submitted\" formControlName=\"pressoBdi\">\r\n                                        <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                        <option *ngFor=\"let t of tipiPressoBDI\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"pressoBdi.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputPressoBDI>\r\n                                    <input class=\"form-control\" [value]=\"getSelectValue(tipiPressoBDI, formatterUtils.getBooleanAsString(conto, 'pressoBdi'))\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label for=\"checkedpressoBdi\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedpressoBdi\" type=\"checkbox\" formControlName=\"checkedpressoBdi\" (click)=\"manageCheckBox('pressoBdi')\"/></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n\r\n                                <label for=\"flgMan\" class=\"col-2 col-form-label\">Flag Inserimento manuale<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <select *ngIf=\"(checkedflgMan.value && !readonlyForm); else inputFlagMan\" id=\"flgMan\" class=\"form-control\" [class.is-invalid]=\"flgMan.invalid && form.submitted\" formControlName=\"flgMan\" (change)=\"checkenableModificatoriBIL()\">\r\n                                        <option [ngValue]=\"undefined\">Seleziona</option>\r\n                                        <option *ngFor=\"let t of tipiManuale\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"flgMan.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputFlagMan>\r\n                                    <input class=\"form-control\" [value]=\"getSelectValueFlgMan(tipiManuale, formatterUtils.getBooleanAsString(conto, 'flgMan'))\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"!this.userIsBil \">\r\n                                        <label for=\"checkedflgMan\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedflgMan\" type=\"checkbox\" formControlName=\"checkedflgMan\" [attr.disabled]=\"true\"></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!!this.userIsBil \">\r\n                                        <label for=\"checkedflgMan\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedflgMan\" type=\"checkbox\" formControlName=\"checkedflgMan\" (click)=\"manageFlagInserimentoForBil('flgMan')\"/></label>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"indResidenza\" class=\"form-control\" [class.is-invalid]=\"indicatoreResidenza.invalid && form.submitted\" formControlName=\"indicatoreResidenza\" [readOnly]=\"!checkedindicatoreResidenza.value || !!readonlyForm\" maxlength=\"5\" [pattern]=\"'^[0-9]+$'\"/>\r\n                                    <div *ngIf=\"indicatoreResidenza.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo non valido\r\n                                    </div>\r\n                                    <div *ngIf=\"indicatoreResidenza.errors?.value && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obblogatorio\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"!enableModificatoriBIL\">\r\n                                        <label for=\"checkedindResidenza\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedindResidenza\" type=\"checkbox\" formControlName=\"checkedindicatoreResidenza\" [attr.disabled]=\"true\"></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"enableModificatoriBIL\">\r\n                                        <label for=\"checkedindResidenzaBil\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedindResidenzaBil\" type=\"checkbox\" formControlName=\"checkedindicatoreResidenza\" (click)=\"manageCheckBox('indicatoreResidenza')\"/></label>\r\n                                    </ng-container>\r\n                                </div>\r\n\r\n                                <label for=\"categoriaEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                                <div class=\"col-3\">\r\n                                    <input id=\"categoriaEconomica\" class=\"form-control\" [class.is-invalid]=\"categoriaEconomica.invalid && form.submitted\" formControlName=\"categoriaEconomica\" [readOnly]=\"!checkedcategoriaEconomica.value || !!readonlyForm\" maxlength=\"5\" [pattern]=\"'^[0-9]+$'\"/>\r\n                                    <div *ngIf=\"categoriaEconomica.errors?.pattern && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo non valido\r\n                                    </div>\r\n                                    <div *ngIf=\"categoriaEconomica.errors?.value && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obblogatorio\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"!enableModificatoriBIL\">\r\n                                        <label for=\"checkedcatEconomica\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkedcatEconomica\" type=\"checkbox\" formControlName=\"checkedcategoriaEconomica\" [attr.disabled]=\"true\"></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"enableModificatoriBIL\">\r\n                                        <label for=\"checkedcatEconomicaBil\" class=\"col-form-label\">\r\n                                            <input *ngIf=\"!readonlyForm\" id=\"checkedcatEconomicaBil\" type=\"checkbox\" formControlName=\"checkedcategoriaEconomica\" (click)=\"manageCheckBox('categoriaEconomica')\"/>\r\n                                        </label>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"dataApertura\" class=\"col-2 col-form-label\">Data Apertura<span>*</span>:</label>\r\n                                <div class=\"col-3\">\r\n                                    <div class=\"input-group\" *ngIf=\"(checkeddataApertura.value && !readonlyForm); else inputDataApertura\">\r\n                                        <input id=\"dataApertura\" class=\"form-control\" [class.is-invalid]=\"dataApertura.invalid && form.submitted\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataApertura\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" readOnly=\"true\" style=\"background-color: #ffffff !important\" [minDate]=\"minDateDA\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                                                                                <span class=\"input-group-text\">\r\n                                                                                                    <i class=\"fa fa-calendar\"></i>\r\n                                                                                                </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataApertura.value\"  class=\"input-group-append\" (click)=\"reset('dataApertura')\" style=\"cursor: pointer;\">\r\n                                                                                                <span class=\"input-group-text\">\r\n                                                                                                    <i class=\"fas fa-trash-alt\"></i>\r\n                                                                                                </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"dataApertura.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputDataApertura>\r\n                                    <input class=\"form-control\" [value]=\"getDataAperturaValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label for=\"checkeddataApertura\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkeddataApertura\" type=\"checkbox\" formControlName=\"checkeddataApertura\" (click)=\"manageCheckBox('dataApertura', 'date')\"></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n\r\n                                <label for=\"dataChiusura\" class=\"col-2 col-form-label\">Data Chiusura:</label>\r\n                                <div class=\"col-3\">\r\n                                    <div class=\"input-group\" *ngIf=\"(checkeddataChiusura.value && !readonlyForm); else inputDataChiusura\">\r\n                                        <input id=\"dataChiusura\" class=\"form-control\" [class.is-invalid]=\"dataChiusura.invalid && form.submitted\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusura\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" readOnly=\"true\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                                                                                <span class=\"input-group-text\">\r\n                                                                                                    <i class=\"fa fa-calendar\"></i>\r\n                                                                                                </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataChiusura.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusura')\" style=\"cursor: pointer;\">\r\n                                                                                                <span class=\"input-group-text\">\r\n                                                                                                    <i class=\"fas fa-trash-alt\"></i>\r\n                                                                                                </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusura.errors?.value && form.submitted\" class=\"invalid-feedback\">\r\n                                            La data chiusura deve essere maggiore o uguale della data Apertura\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputDataChiusura>\r\n                                    <input class=\"form-control\" [value]=\"getDataChiusuraValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                <div class=\"col-1\">\r\n                                    <ng-container *ngIf=\"userIsSpi\">\r\n                                        <label for=\"checkeddataChiusura\" class=\"col-form-label\"><input *ngIf=\"!readonlyForm\" id=\"checkeddataChiusura\" type=\"checkbox\" formControlName=\"checkeddataChiusura\" [attr.disabled]=\"true\"></label>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!userIsSpi\">\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-6\"></div>\r\n                                <label for=\"dataInizioValidita\" class=\"col-2 col-form-label\">Data Inizio Validità:</label>\r\n                                <div class=\"col-3\">\r\n                                    <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataInizioValiditaT\">\r\n                                        <input id=\"dataInizioValidita\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValidita\"  bdiDatepicker #datepickerDIV=\"bdiDatepicker\" maxlength=\"10\" readOnly=\"true\" style=\"background-color: #ffffff !important\" [minDate]=\"minDateVF\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIV.toggle()\" style=\"cursor: pointer;\">\r\n                                                                                            <span class=\"input-group-text\">\r\n                                                                                                <i class=\"fa fa-calendar\"></i>\r\n                                                                                            </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"!!dataInizioValidita.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValidita')\" style=\"cursor: pointer;\">\r\n                                                                                            <span class=\"input-group-text\">\r\n                                                                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                                                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #dataInizioValiditaT>\r\n                                    <input class=\"form-control\" [value]=\"getDataInizioValiditaValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-info\" role=\"alert\" >\r\n                                <div [innerHTML]=utils.getModificaMessage()></div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-3\">\r\n                            <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                        </div>\r\n                        <div class=\"col-6\"></div>\r\n                        <div class=\"col-3\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </form>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/conti-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/conti-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContiRoutingModule", function() { return ContiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _ricerca_conti_ricerca_conti_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ricerca-conti/ricerca-conti.component */ "./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.ts");
/* harmony import */ var _modifica_conto_modifica_conto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifica-conto/modifica-conto.component */ "./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.ts");
/* harmony import */ var _eliminazione_logica_conto_eliminazione_logica_conto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eliminazione-logica-conto/eliminazione-logica-conto.component */ "./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.ts");








const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Conti',
        },
        children: [
            {
                path: '',
                component: _ricerca_conti_ricerca_conti_component__WEBPACK_IMPORTED_MODULE_5__["RicercaContiComponent"],
                data: {
                    title: 'Anagrafiche Conti',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio',
                loadChildren: () => __webpack_require__.e(/*! import() | dettaglio-conto-dettaglio-conto-module */ "default~conti-dettaglio-conto-dettaglio-conto-module~dettaglio-conto-dettaglio-conto-module").then(__webpack_require__.bind(null, /*! ./dettaglio-conto/dettaglio-conto.module */ "./src/app/views/anagrafiche/conti/dettaglio-conto/dettaglio-conto.module.ts")).then(m => m.DettaglioContoModule)
            },
            {
                path: 'inserimento',
                loadChildren: () => Promise.all(/*! import() | inserimento-conto-inserimento-conto-module */[__webpack_require__.e("default~conti-inserimento-conto-inserimento-conto-module~inserimento-conto-inserimento-conto-module"), __webpack_require__.e("default~inserimento-conto-inserimento-conto-module~parties-parties-module")]).then(__webpack_require__.bind(null, /*! ./inserimento-conto/inserimento-conto.module */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto.module.ts")).then(m => m.InserimentoContoModule)
            },
            {
                path: 'modifica',
                component: _modifica_conto_modifica_conto_component__WEBPACK_IMPORTED_MODULE_6__["ModificaContoComponent"],
                data: {
                    title: 'Modifica Conto',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'eliminazione-logica',
                component: _eliminazione_logica_conto_eliminazione_logica_conto_component__WEBPACK_IMPORTED_MODULE_7__["EliminazioneLogicaContoComponent"],
                data: {
                    title: 'Eliminazione Logica Conto',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            }
        ]
    }
];
let ContiRoutingModule = class ContiRoutingModule {
};
ContiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContiRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/conti.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/conti.module.ts ***!
  \*********************************************************/
/*! exports provided: ContiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContiModule", function() { return ContiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _conti_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conti-routing.module */ "./src/app/views/anagrafiche/conti/conti-routing.module.ts");
/* harmony import */ var _ricerca_conti_ricerca_conti_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ricerca-conti/ricerca-conti.component */ "./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _modifica_conto_modifica_conto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifica-conto/modifica-conto.component */ "./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.ts");
/* harmony import */ var _eliminazione_logica_conto_eliminazione_logica_conto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eliminazione-logica-conto/eliminazione-logica-conto.component */ "./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.ts");















let ContiModule = class ContiModule {
};
ContiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ricerca_conti_ricerca_conti_component__WEBPACK_IMPORTED_MODULE_4__["RicercaContiComponent"], _modifica_conto_modifica_conto_component__WEBPACK_IMPORTED_MODULE_12__["ModificaContoComponent"], _eliminazione_logica_conto_eliminazione_logica_conto_component__WEBPACK_IMPORTED_MODULE_13__["EliminazioneLogicaContoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__["GepaGuiCommonModule"],
            _conti_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContiRoutingModule"],
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
], ContiModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9lbGltaW5hemlvbmUtbG9naWNhLWNvbnRvL2VsaW1pbmF6aW9uZS1sb2dpY2EtY29udG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EliminazioneLogicaContoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminazioneLogicaContoComponent", function() { return EliminazioneLogicaContoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");


















let EliminazioneLogicaContoComponent = class EliminazioneLogicaContoComponent extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_14__["AbstractContiComponent"] {
    constructor(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route, taskService) {
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
        this.taskService = taskService;
        this.isActive = false;
        this.utils = utils;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const deleteContoSessionObj = this.getSession(this.routingService.CONTO_DELETE);
            if (!!deleteContoSessionObj) {
                this.load(deleteContoSessionObj.idConto);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(deleteContoSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    load(idConto) {
        this.showSpinner();
        this.contoService.getConto(idConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
            this.conto = res;
            this.setMinDate();
            this.isActive = this.isContoActive(this.conto);
            this.eliminazioneForm = this.formBuilder.group({
                dataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(res => this.partyService.getPartyByBicAndTipo(this.conto.bicParty, this.conto.tipoParty)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => { this.party = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
            if (!!this.party) {
                this.buildPartySection();
            }
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((error) => {
            console.log('Error - load', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        })).subscribe();
    }
    buildPartySection() {
        const data = [
            [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
            [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza')],
            [this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura')],
            [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
        ];
        this.infoPanelPartyModel = {
            columnNumber: 2,
            data: data
        };
    }
    get dataChiusura() { return this.eliminazioneForm.get('dataChiusura'); }
    setMinDate() {
        const d1 = new Date(this.conto.dataApertura);
        d1.setDate(d1.getDate() + 1);
        const d2 = new Date(this.conto.validFrom);
        if (d1 >= d2) {
            this.minDate = { day: d1.getUTCDate(), month: (d1.getUTCMonth() + 1), year: d1.getFullYear() };
        }
        else {
            this.minDate = { day: d2.getUTCDate(), month: (d2.getUTCMonth() + 1), year: d2.getFullYear() };
        }
    }
    reset(field) {
        this.eliminazioneForm.get(field).setValue(undefined);
    }
    onSubmit() {
        this.resetError();
        this.isResultOk = false;
        if (this.eliminazioneForm.valid) {
            this.showSpinner();
            const taskContoReq = this.buildTaskConto();
            this.taskService.saveTaskConto(taskContoReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(res => {
                this.eliminazioneForm.get('dataChiusura').setValue(res.dataChiusura);
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
    buildTaskConto() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_17__["TipoOperazioneEnum"].DEL
            },
            dataChiusura: this.formatterUtils.dateToString(this.dataChiusura.value),
            idContoOrig: this.conto.id
        };
    }
    getDataChiusuraValue() {
        return this.eliminazioneForm.get('dataChiusura').value;
    }
};
EliminazioneLogicaContoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_13__["ContoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_15__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_16__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_10__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] }
];
EliminazioneLogicaContoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eliminazione-logica-conto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminazione-logica-conto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminazione-logica-conto.component.scss */ "./src/app/views/anagrafiche/conti/eliminazione-logica-conto/eliminazione-logica-conto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_13__["ContoService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_15__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_16__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_10__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"]])
], EliminazioneLogicaContoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9tb2RpZmljYS1jb250by9tb2RpZmljYS1jb250by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.ts ***!
  \************************************************************************************/
/*! exports provided: ModificaContoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaContoComponent", function() { return ModificaContoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");



















let ModificaContoComponent = class ModificaContoComponent extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_2__["AbstractContiComponent"] {
    constructor(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route, taskService) {
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
        this.taskService = taskService;
        this.enableModificatoriBIL = false;
        this.utils = utils;
    }
    ngOnInit() {
        this.checkUserSpi();
        if (!this.userIsSpi) {
            this.checkUserBil();
        }
        this.route.queryParams.subscribe(params => {
            const modifyContoSessionObj = this.getSession(this.routingService.CONTO_MODIFY);
            if (!!modifyContoSessionObj) {
                this.loadSections(modifyContoSessionObj.idConto);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(modifyContoSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idConto) {
        this.showSpinner();
        this.buildCombo();
        this.contoService.getConto(idConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.conto = res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.buildForm()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(res => this.partyService.getPartyByBicAndTipo(this.conto.bicParty, this.conto.tipoParty)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => { this.party = res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
            if (!!this.party) {
                this.buildPartySection();
            }
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
        })).subscribe();
    }
    buildPartySection() {
        if (!!this.party) {
            const dap = new Date(this.party.dataApertura);
            this.minDateDA = { day: dap.getUTCDate(), month: (dap.getUTCMonth() + 1), year: dap.getFullYear() };
            const data = [
                [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
                [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza')],
                [this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura')],
                [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura')],
            ];
            this.infoPanelPartyModel = {
                columnNumber: 2,
                data: data
            };
        }
    }
    buildForm() {
        const da = new Date(this.conto.dataApertura);
        const dc = new Date(this.conto.dataChiusura);
        const vf = new Date(this.conto.validFrom);
        vf.setDate(vf.getDate() + 1);
        this.minDateVF = { day: vf.getUTCDate(), month: (vf.getUTCMonth() + 1), year: vf.getFullYear() };
        this.modificaForm = this.formBuilder.group({
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.bic, []),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.tipoConto.codice, []),
            targetService: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.targetService, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.descrizione, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            numeroConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.numeroConto, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.abi, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            mcaDefFlag: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.formatterUtils.getBooleanAsString(this.conto, 'mcaDefFlag'), [this.defaultMCAValueValidator.bind(this)]),
            pressoBdi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.formatterUtils.getBooleanAsString(this.conto, 'pressoBdi'), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            flgMan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.formatterUtils.getBooleanAsString(this.conto, 'flgMan'), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            indicatoreResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.indicatoreResidenza, [this.bilValidator.bind(this)]),
            categoriaEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.conto.categoriaEconomica, [this.bilValidator.bind(this)]),
            dataApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]({ year: da.getFullYear(), month: (da.getUTCMonth() + 1), day: da.getUTCDate() }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            dataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]({ year: dc.getFullYear(), month: (dc.getUTCMonth() + 1), day: dc.getUTCDate() }, [this.dateValueValidator.bind(this)]),
            checkedbicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedtipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedtargetService: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkeddescrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkednumeroConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedabi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedmcaDefFlag: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedpressoBdi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedflgMan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedindicatoreResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkedcategoriaEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkeddataApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            checkeddataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](false, []),
            dataInizioValidita: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [])
        });
        this.flgMan.valueChanges.subscribe(() => {
            this.categoriaEconomica.updateValueAndValidity();
            this.indicatoreResidenza.updateValueAndValidity();
        });
        this.checkedflgMan.valueChanges.subscribe(() => {
            this.categoriaEconomica.updateValueAndValidity();
            this.indicatoreResidenza.updateValueAndValidity();
        });
        if (!!this.userIsBil && !!this.conto.flgMan) {
            this.enableModificatoriBIL = true;
        }
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
    bilValidator(control) {
        if (!!this.modificaForm &&
            this.checkBilValidator() &&
            (!control ||
                !control.value)) {
            return { 'value': true };
        }
        return null;
    }
    checkBilValidator() {
        const flg = this.flgMan.value;
        if (!!this.userIsBil &&
            (!!this.formatterUtils.getStringAsBoolean(flg) || (typeof flg === 'boolean' && !!flg))) {
            return true;
        }
        return false;
    }
    defaultMCAValueValidator(control) {
        if (!!this.modificaForm &&
            this.checkTipoConto() &&
            !this.modificaForm.get('mcaDefFlag').value) {
            return { 'value': true };
        }
        return null;
    }
    dateValueValidator(control) {
        if (!!this.modificaForm &&
            !!this.modificaForm.get('dataApertura').value &&
            !!this.modificaForm.get('dataChiusura').value) {
            const d1 = new Date(this.formatterUtils.dateToString(this.modificaForm.get('dataApertura').value));
            const d2 = new Date(this.formatterUtils.dateToString(this.modificaForm.get('dataChiusura').value));
            if (d1 > d2) {
                return { 'value': true };
            }
        }
        return null;
    }
    get bicConto() { return this.modificaForm.get('bicConto'); }
    get tipoConto() { return this.modificaForm.get('tipoConto'); }
    get targetService() { return this.modificaForm.get('targetService'); }
    get descrizione() { return this.modificaForm.get('descrizione'); }
    get numeroConto() { return this.modificaForm.get('numeroConto'); }
    get abi() { return this.modificaForm.get('abi'); }
    get mcaDefFlag() { return this.modificaForm.get('mcaDefFlag'); }
    get pressoBdi() { return this.modificaForm.get('pressoBdi'); }
    get flgMan() { return this.modificaForm.get('flgMan'); }
    get indicatoreResidenza() { return this.modificaForm.get('indicatoreResidenza'); }
    get categoriaEconomica() { return this.modificaForm.get('categoriaEconomica'); }
    get dataApertura() { return this.modificaForm.get('dataApertura'); }
    get dataChiusura() { return this.modificaForm.get('dataChiusura'); }
    get checkedbicConto() { return this.modificaForm.get('checkedbicConto'); }
    get checkedtipoConto() { return this.modificaForm.get('checkedtipoConto'); }
    get checkedtargetService() { return this.modificaForm.get('checkedtargetService'); }
    get checkeddescrizione() { return this.modificaForm.get('checkeddescrizione'); }
    get checkednumeroConto() { return this.modificaForm.get('checkednumeroConto'); }
    get checkedabi() { return this.modificaForm.get('checkedabi'); }
    get checkedmcaDefFlag() { return this.modificaForm.get('checkedmcaDefFlag'); }
    get checkedpressoBdi() { return this.modificaForm.get('checkedpressoBdi'); }
    get checkedflgMan() { return this.modificaForm.get('checkedflgMan'); }
    get checkedindicatoreResidenza() { return this.modificaForm.get('checkedindicatoreResidenza'); }
    get checkedcategoriaEconomica() { return this.modificaForm.get('checkedcategoriaEconomica'); }
    get checkeddataApertura() { return this.modificaForm.get('checkeddataApertura'); }
    get checkeddataChiusura() { return this.modificaForm.get('checkeddataChiusura'); }
    get dataInizioValidita() { return this.modificaForm.get('dataInizioValidita'); }
    checkTipoConto() {
        return (this.tipoConto.value == 'CLM_MCA' || this.tipoConto.value == 'CLM_CB');
    }
    reset(field) {
        this.modificaForm.get(field).setValue(undefined);
    }
    manageCheckBox(field, type) {
        if (this.modificaForm.get('checked'.concat(field)).value) {
            let val = Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(this.conto, field);
            if (!!type && type == 'date') {
                val = this.formatterUtils.getValueForDateinDatePickerFormat(val);
            }
            this.modificaForm.get(field).setValue(val);
        }
        else {
            //this.modificaForm.get(field).setValue(null);
        }
    }
    setTargetService() {
        this.modificaForm.get('targetService').setValue(this.tipiConto.find(t => t.codice == this.tipoConto.value).targetService);
    }
    manageFlagInserimentoForBil(field) {
        this.manageCheckBox(field);
        this.checkenableModificatoriBIL();
    }
    checkenableModificatoriBIL() {
        if (this.checkBilValidator()) {
            this.enableModificatoriBIL = true;
        }
        else {
            this.enableModificatoriBIL = false;
            this.manageCheckBox('indicatoreResidenza');
            this.modificaForm.get('checkedindicatoreResidenza').setValue(false);
            this.manageCheckBox('categoriaEconomica');
            this.modificaForm.get('checkedcategoriaEconomica').setValue(false);
        }
    }
    onSubmit() {
        this.resetError();
        this.isResultOk = false;
        if (this.modificaForm.valid) {
            this.showSpinner();
            const taskconto = this.buildTaskConto();
            this.taskService.saveTaskConto(taskconto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(res => this.contoService.getConto(String(res.idContoOrig))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
                if (!!res) {
                    this.conto.flgMan = res.flgMan;
                    this.conto.indicatoreResidenza = res.indicatoreResidenza;
                    this.modificaForm.get('indicatoreResidenza').setValue(this.conto.indicatoreResidenza);
                    this.conto.categoriaEconomica = res.categoriaEconomica;
                    this.modificaForm.get('categoriaEconomica').setValue(this.conto.categoriaEconomica);
                    this.conto.dataApertura = res.dataApertura;
                    this.conto.validFrom = res.validFrom;
                    const d = new Date(res.dataChiusura);
                    this.modificaForm.get('dataChiusura').setValue({ year: d.getFullYear(), month: d.getUTCMonth(), day: d.getUTCDate() });
                }
                this.isResultOk = true;
                this.hideSpinner();
                this.readonlyForm = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
                console.log('Error - saveTaskConto', error);
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
            })).subscribe();
        }
        else {
            this.getFormValidationErrors();
        }
    }
    buildTaskConto() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_18__["TipoOperazioneEnum"].UPD
            },
            bic: this.bicConto.value,
            tipoConto: {
                codice: this.tipoConto.value
            },
            targetService: this.targetService.value,
            numeroConto: this.numeroConto.value,
            descrizione: this.descrizione.value,
            abi: this.abi.value,
            mcaDefFlag: (!!this.mcaDefFlag.value ? ((this.mcaDefFlag.value == _models_enum__WEBPACK_IMPORTED_MODULE_18__["TipoFlagEnum"].SI) ? true : false) : null),
            flgMan: (!!this.flgMan.value ? ((this.flgMan.value == _models_enum__WEBPACK_IMPORTED_MODULE_18__["TipoFlagEnum"].SI) ? true : false) : null),
            pressoBdi: (!!this.pressoBdi.value ? ((this.pressoBdi.value == _models_enum__WEBPACK_IMPORTED_MODULE_18__["TipoFlagEnum"].SI) ? true : false) : null),
            categoriaEconomica: (!!this.checkedcategoriaEconomica.value ? this.categoriaEconomica.value : null),
            indicatoreResidenza: (!!this.checkedindicatoreResidenza.value ? this.indicatoreResidenza.value : null),
            dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
            dataChiusura: this.formatterUtils.dateToString((!!this.dataChiusura.value ? this.dataChiusura.value : { year: 9999, month: 12, day: 31 })),
            validFrom: (!!this.dataInizioValidita.value ? this.formatterUtils.dateToString(this.dataInizioValidita.value) : null),
            abiToEdit: this.checkedabi.value,
            //bicPartyToEdit: false,
            //bicToEdit: this.checkedbicConto.value,
            categoriaEconomicaToEdit: this.checkedcategoriaEconomica.value,
            dataAperturaToEdit: this.checkeddataApertura.value,
            //dataChiusuraToEdit: this.checkeddataChiusura.value,
            descrizioneToEdit: this.checkeddescrizione.value,
            flgManToEdit: this.checkedflgMan.value,
            indicatoreResidenzaToEdit: this.checkedindicatoreResidenza.value,
            mcaDefFlagToEdit: this.checkedmcaDefFlag.value,
            numeroContoToEdit: this.checkednumeroConto.value,
            pressoBdiToEdit: this.checkedpressoBdi.value,
            subBicPtyAnsyToEdit: false,
            subParBicDcaToEdit: false,
            subParTsDcaToEdit: false,
            subTipoPtyAnsyToEdit: false,
            subTipoSfruttAnsyToEdit: false,
            //targetServiceToEdit: this.checkedtargetService.value,
            tipoContoToEdit: this.checkedtipoConto.value,
            tipoPartyToEdit: false,
            /*tsModificaToEdit: false,
            utenteRichiestaToEdit: false,
            utenteValidazioneToEdit: false,
            validFromToEdit: (!!this.dataInizioValidita.value ? true : false),
            validToToEdit: false*/
            idContoOrig: this.conto.id
        };
    }
    getSelectValue(list, field) {
        return list.find(t => t.codice == field).descrizione;
    }
    getSelectValueFlgMan(list, field) {
        return list.find(t => t.codice == field).descrizione;
    }
    getDataAperturaValue() {
        return this.conto.dataApertura;
    }
    getDataChiusuraValue() {
        return this.conto.dataChiusura;
    }
    getDataInizioValiditaValue() {
        return this.conto.validFrom;
    }
    getFormValidationErrors() {
        Object.keys(this.modificaForm.controls).forEach(key => {
            const controlErrors = this.modificaForm.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                });
            }
        });
    }
};
ModificaContoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_6__["ContoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_11__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_12__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_13__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_17__["TaskService"] }
];
ModificaContoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifica-conto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifica-conto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifica-conto.component.scss */ "./src/app/views/anagrafiche/conti/modifica-conto/modifica-conto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_6__["ContoService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_11__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_12__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_13__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_17__["TaskService"]])
], ModificaContoComponent);



/***/ })

}]);
//# sourceMappingURL=conti-conti-module.js.map