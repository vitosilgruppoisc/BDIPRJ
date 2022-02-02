(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conti-sfruttamento-ansy-sfruttamento-ansy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-link\"></i> Associa Conto - Scelta Conto </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party ANSY</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Ricerca Conto</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n\r\n\r\n                        <form [formGroup]=\"ricercaContiForm\" (ngSubmit)=\"onSubmit(true)\" class=\"form-horizontal\" #form=\"ngForm\">\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && (bicConto.dirty || bicConto.touched)\" formControlName=\"bicConto\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                        <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                        <div *ngIf=\"bicConto.errors?.wildcard && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido per la ricerca con wildcard\r\n                                        </div>\r\n                                        <div *ngIf=\"bicConto.errors?.syntax && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                            Campo sintatticamente non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <label for=\"idConto\" class=\"col-2 col-form-label\">Account Id:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"idConto\" class=\"form-control\" [class.is-invalid]=\"idConto.invalid && (idConto.dirty || idConto.touched)\" formControlName=\"idConto\" maxlength=\"34\"/>\r\n                                        <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                        <div *ngIf=\"idConto.errors?.wildcard && (idConto.dirty || idConto.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido per la ricerca con wildcard\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"targetService\" class=\"col-2 col-form-label\">Target Service:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"targetService\" class=\"form-control\" formControlName=\"targetService\" [readOnly]=\"true\"/>\r\n                                </div>\r\n\r\n                                <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                                <div class=\"col-4\">\r\n                                    <select id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && form.submitted\" formControlName=\"tipoConto\" (change)=\"checkResetDataInizioSfruttamento()\">\r\n                                        <option [ngValue]=\"null\">Seleziona</option>\r\n                                        <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"tipoConto.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"abi\" class=\"col-2 col-form-label\">Abi:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (abi.dirty || abi.touched)\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                        <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                        <div *ngIf=\"abi.errors?.wildcard && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido per la ricerca con wildcard\r\n                                        </div>\r\n                                        <div *ngIf=\"abi.errors?.pattern && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"row\"><label class=\"col-12 col-form-label\">Data Inizio Sfruttamento:</label></div>\r\n                                    <div class=\"row\">\r\n                                        <label for=\"dataInizioSfruttamentoDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                        <div class=\"col-8\">\r\n                                            <div class=\"input-group\" *ngIf=\"checkTipoContoRTGS_SA(); else dataInizioSfruttamentoDaBlank\">\r\n                                                <input id=\"dataInizioSfruttamentoDa\" class=\"form-control\" [class.is-invalid]=\"dataInizioSfruttamentoDa.invalid && (form.submitted || (dataInizioSfruttamentoDa.dirty || dataInizioSfruttamentoDa.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioSfruttamentoDa\"  bdiDatepicker #datepickerDSda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                                <div class=\"input-group-append\" (click)=\"datepickerDSda.toggle()\" style=\"cursor: pointer;\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <i class=\"fa fa-calendar\"></i>\r\n                                                        </span>\r\n                                                </div>\r\n                                                <div  *ngIf=\"!!dataInizioSfruttamentoDa.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioSfruttamentoDa')\" style=\"cursor: pointer;\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                                        </span>\r\n                                                </div>\r\n                                                <div *ngIf=\"dataInizioSfruttamentoDa.errors?.value && (form.submitted || (dataInizioSfruttamentoDa.dirty || dataInizioSfruttamentoDa.touched))\" class=\"invalid-feedback\">\r\n                                                    Campo obbligatorio in caso di selezione di Sub Account\r\n                                                </div>\r\n                                                <div *ngIf=\"dataInizioSfruttamentoDa.errors?.dateformat && (form.submitted || (dataInizioSfruttamentoDa.dirty || dataInizioSfruttamentoDa.touched))\" class=\"invalid-feedback\">\r\n                                                    Campo non valido\r\n                                                </div>\r\n                                            </div>\r\n                                            <ng-template #dataInizioSfruttamentoDaBlank>\r\n                                                <input class=\"form-control\" [readOnly]=\"true\"/>\r\n                                            </ng-template>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <!--Data Apertura-->\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"row\"><label class=\"col-12 col-form-label\">Data Apertura:</label></div>\r\n                                    <div class=\"row\">\r\n                                        <label for=\"dataAperturaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                        <div class=\"col-8\">\r\n                                            <div class=\"input-group\">\r\n                                                <input id=\"dataAperturaDa\" class=\"form-control\" [class.is-invalid]=\"dataAperturaDa.invalid && (dataAperturaDa.dirty || dataAperturaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaDa\"  bdiDatepicker #datepickerDAda=\"bdiDatepicker\" maxlength=\"10\"  style=\"background-color: #ffffff !important\"/>\r\n                                                <div class=\"input-group-append\" (click)=\"datepickerDAda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                                </div>\r\n                                                <div  *ngIf=\"!!dataAperturaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"dataAperturaDa.errors?.dateformat && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                                    Campo non valido\r\n                                                </div>\r\n                                                <div *ngIf=\"dataAperturaDa.errors?.daterange && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                                    Intervallo non valido\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"row\">\r\n                                        <label for=\"dataAperturaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                        <div class=\"col-8\">\r\n                                            <div class=\"input-group\">\r\n                                                <input id=\"dataAperturaA\" class=\"form-control\" [class.is-invalid]=\"dataAperturaA.invalid && (dataAperturaA.dirty || dataAperturaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaA\"  bdiDatepicker #datepickerDAa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                                <div class=\"input-group-append\" (click)=\"datepickerDAa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                                </div>\r\n                                                <div  *ngIf=\"!!dataAperturaA.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"dataAperturaA.errors?.dateformat && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                                    Campo non valido\r\n                                                </div>\r\n                                                <div *ngIf=\"dataAperturaA.errors?.daterange && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                                    Intervallo non valido\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!--Data Chiusura-->\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"row\"><label class=\"col-12 col-form-label\">Data Chiusura:</label></div>\r\n                                    <div class=\"row\">\r\n                                        <label for=\"dataChiusuraDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                        <div class=\"col-8\">\r\n                                            <div class=\"input-group\">\r\n                                                <input id=\"dataChiusuraDa\" class=\"form-control\" [class.is-invalid]=\"dataChiusuraDa.invalid && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusuraDa\"  bdiDatepicker #datepickerDCda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                                <div class=\"input-group-append\" (click)=\"datepickerDCda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                                </div>\r\n                                                <div  *ngIf=\"!!dataChiusuraDa.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusuraDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"dataChiusuraDa.errors?.dateformat && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" class=\"invalid-feedback\">\r\n                                                    Campo non valido\r\n                                                </div>\r\n                                                <div *ngIf=\"dataChiusuraDa.errors?.daterange && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" class=\"invalid-feedback\">\r\n                                                    Intervallo non valido\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"row\">\r\n                                        <label for=\"dataChiusuraA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                        <div class=\"col-8\">\r\n                                            <div class=\"input-group\">\r\n                                                <input id=\"dataChiusuraA\" class=\"form-control\" [class.is-invalid]=\"dataChiusuraA.invalid && (dataChiusuraA.dirty || dataChiusuraA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusuraA\"  bdiDatepicker #datepickerDCa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                                <div class=\"input-group-append\" (click)=\"datepickerDCa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                                </div>\r\n                                                <div  *ngIf=\"!!dataChiusuraA.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusuraA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"dataChiusuraA.errors?.dateformat && (dataChiusuraA.dirty || dataChiusuraA.touched)\" class=\"invalid-feedback\">\r\n                                                    Campo non valido\r\n                                                </div>\r\n                                                <div *ngIf=\"dataChiusuraA.errors?.daterange && (dataChiusuraA.dirty || dataChiusuraA.touched)\" class=\"invalid-feedback\">\r\n                                                    Intervallo non valido\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                        <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                        <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido per la ricerca con wildcard\r\n                                        </div>\r\n                                        <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                        <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                        <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido per la ricerca con wildcard\r\n                                        </div>\r\n                                        <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-2 mx-auto\">\r\n                                    <button class=\"btn btn-block btn-primary\" type=\"submit\">Cerca</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n\r\n                        <div #target>\r\n                            <app-generic-table *ngIf=\"showTable\" [model]=\"contoModel\" (action)=\"onActionEvent($event)\" (colToDisplay)=\"onColToDisplayEvent($event, this.contiService.associaContosearchContoModel)\" (paginationChanged)=\"onPaginationEvent($event, this.contiService.associaContosearchContoModel)\" (sortChanged)=\"onSortEvent($event, this.contiService.associaContosearchContoModel)\" (filterChanged)=\"onFilterEvent($event, this.contiService.associaContosearchContoModel)\"></app-generic-table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\"  class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #wildcardTooltip>\r\n    <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\" >\r\n        <span class=\"input-group-text\" >\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-link\"></i> Associa Conto - Sfruttamento </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party ANSY</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelContoModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Conto {{isDCAorCB ? 'DCA' : 'Sub Account'}}</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelContoModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelContoModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Dati Associazione</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n\r\n                        <form [formGroup]=\"sfruttamentoForm\" (ngSubmit)=\"openModal()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"dataInizioSfruttamentoDa\" class=\"col-2 col-form-label\">Data Inizio Sfruttamento<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataInizioSfruttamentoDaT\">\r\n                                        <input id=\"dataInizioSfruttamentoDa\" class=\"form-control\" [class.is-invalid]=\"dataInizioSfruttamentoDa.invalid && ( form.submitted || (dataInizioSfruttamentoDa.dirty || dataInizioSfruttamentoDa.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioSfruttamentoDa\"  bdiDatepicker #datepickerDSda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                        <div  class=\"input-group-append\" (click)=\"datepickerDSda.toggle()\" style=\"cursor: pointer;\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <i class=\"fa fa-calendar\"></i>\r\n                                                        </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioSfruttamentoDa.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioSfruttamentoDa')\" style=\"cursor: pointer;\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                                        </span>\r\n                                        </div>\r\n                                        <ng-container *ngIf=\"!isDCAorCB && !!minDate\">\r\n                                            <ng-container *ngTemplateOutlet=\"dataSfruttamentoTooltip\"></ng-container>\r\n                                        </ng-container>\r\n                                        <div *ngIf=\"dataInizioSfruttamentoDa.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioSfruttamentoDa.errors?.dateformat && (dataInizioSfruttamentoDa.dirty || dataInizioSfruttamentoDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioSfruttamentoDa.errors?.mindate  && (dataInizioSfruttamentoDa.dirty || dataInizioSfruttamentoDa.touched)\" class=\"invalid-feedback\">\r\n                                            Data inferiore al limite inferiore consentito (data inizio sfruttamento): {{formatterUtils.dateToString(minDate)}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #dataInizioSfruttamentoDaT>\r\n                                    <input class=\"form-control\" [value]=\"getDataSfruttamentoValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n\r\n                                <ng-container *ngIf=\"!isDCAorCB\">\r\n                                    <label for=\"tipoSfruttamento\" class=\"col-2 col-form-label\">Tipo Sfruttamento<span>*</span>:</label>\r\n                                    <div class=\"col-4\">\r\n                                        <ng-container *ngIf=\"!readonlyForm; else tipoSfruttamentoT\">\r\n                                            <select id=\"tipoSfruttamento\" class=\"form-control\" [class.is-invalid]=\"tipoSfruttamento.invalid && form.submitted\" formControlName=\"tipoSfruttamento\">\r\n                                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                                <option *ngFor=\"let t of tipiSfruttamento\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                            </select>\r\n                                            <div *ngIf=\"tipoSfruttamento.errors?.value && form.submitted\" class=\"invalid-feedback\">\r\n                                                Campo obbligatorio\r\n                                            </div>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                    <ng-template #tipoSfruttamentoT>\r\n                                        <input class=\"form-control\" [value]=\"getTipoSfruttamentoValue()\" [readOnly]=\"true\"/>\r\n                                    </ng-template>\r\n                                </ng-container>\r\n                            </div>\r\n\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-4 mx-auto\">\r\n                                    <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Associa</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\"  class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #dataSfruttamentoTooltip>\r\n    <div class=\"input-group-append\" bdiTooltip=\"{{getDataSfruttamentoTooltip()}}\" placement=\"right\" >\r\n        <span class=\"input-group-text\" >\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #confirmModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Si sta confermando l'associazione. Procedere?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Conferma</button>\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-link\"></i> Eliminazione Sfruttamento </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party ANSY</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelContoModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Conto {{isDCAorCB ? 'DCA' : 'Sub Account'}}</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelContoModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelContoModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Dati Associazione</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n\r\n                        <form [formGroup]=\"sfruttamentoForm\" (ngSubmit)=\"openModal()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"dataFineSfruttamentoDa\" class=\"col-2 col-form-label\">Data Fine Sfruttamento<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\" *ngIf=\"!readonlyForm; else dataFineSfruttamentoDaT\">\r\n                                        <input id=\"dataFineSfruttamentoDa\" class=\"form-control\" [class.is-invalid]=\"dataFineSfruttamentoDa.invalid && (form.submitted || (dataFineSfruttamentoDa.dirty || dataFineSfruttamentoDa.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineSfruttamentoDa\"  bdiDatepicker #datepickerDSda=\"bdiDatepicker\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                        <div  class=\"input-group-append\" (click)=\"datepickerDSda.toggle()\" style=\"cursor: pointer;\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <i class=\"fa fa-calendar\"></i>\r\n                                                        </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineSfruttamentoDa.value\"  class=\"input-group-append\" (click)=\"reset('dataFineSfruttamentoDa')\" style=\"cursor: pointer;\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                                        </span>\r\n                                        </div>\r\n                                        <ng-container *ngIf=\"!isDCAorCB\">\r\n                                            <ng-container *ngTemplateOutlet=\"dataSfruttamentoTooltip\"></ng-container>\r\n                                        </ng-container>\r\n                                        <div *ngIf=\"dataFineSfruttamentoDa.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineSfruttamentoDa.errors?.dateformat && (dataFineSfruttamentoDa.dirty || dataFineSfruttamentoDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineSfruttamentoDa.errors?.mindate  && (dataFineSfruttamentoDa.dirty || dataFineSfruttamentoDa.touched)\" class=\"invalid-feedback\">\r\n                                            Data inferiore al limite inferiore consentito (data inizio sfruttamento): {{formatterUtils.dateToString(minDate)}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #dataFineSfruttamentoDaT>\r\n                                    <input class=\"form-control\" [value]=\"getDataFineSfruttamentoValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                            </div>\r\n\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-4 mx-auto\">\r\n                                    <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Rimuovi Sfruttamento</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #dataSfruttamentoTooltip>\r\n    <div class=\"input-group-append\" bdiTooltip=\"{{getDataSfruttamentoTooltip()}}\" placement=\"right\" >\r\n        <span class=\"input-group-text\" >\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #confirmModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Si sta confermando la rimozione dello sfruttamento. Procedere?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Conferma</button>\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/abstract-conti.component.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractContiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractContiComponent", function() { return AbstractContiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");




class AbstractContiComponent extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_3__["AbstractAnagraficheComponent"] {
    constructor(partyService, filialeService, contiService, securityService, userService, formatterUtils, routingService, route) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.contiService = contiService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildCombo();
    }
    buildCombo() {
        this.partyService.getTipiParties().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.tipiParty = res)).subscribe();
        this.filialeService.getFilialiRiferimento().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.filialiRiferimento = res)).subscribe();
        this.contiService.getTipiConto().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.tipiConto = res)).subscribe();
        this.contiService.getTipiTargetService().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.tipiTargetService = res)).subscribe();
        this.tipiPressoBDI = [{ codice: _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].SI.valueOf(), descrizione: 'SI' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].NO.valueOf(), descrizione: 'NO' }];
        this.tipiManuale = [{ codice: _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].SI.valueOf(), descrizione: 'SI' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].NO.valueOf(), descrizione: 'NO' }];
        this.tipiDefaultMCA = [{ codice: _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].SI.valueOf(), descrizione: 'SI' }, { codice: _models_enum__WEBPACK_IMPORTED_MODULE_1__["TipoFlagEnum"].NO.valueOf(), descrizione: 'NO' }];
    }
}


/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9zZnJ1dHRhbWVudG8tYW5zeS9hc3NvY2F6aW9uZS1jb250by1zdGVwMS9hc3NvY2F6aW9uZS1jb250by1zdGVwMS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AssocazioneContoStep1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocazioneContoStep1Component", function() { return AssocazioneContoStep1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var rsql_builder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rsql-builder */ "./node_modules/rsql-builder/dist/index.js");
/* harmony import */ var rsql_builder__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(rsql_builder__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);




















let AssocazioneContoStep1Component = class AssocazioneContoStep1Component extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_16__["AbstractContiComponent"] {
    constructor(router, partyService, filialeService, contiService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route) {
        super(partyService, filialeService, contiService, securityService, userService, formatterUtils, routingService, route);
        this.router = router;
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.contiService = contiService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.utils = utils;
        this.routingService = routingService;
        this.route = route;
        this.showTable = false;
        this.util = utils;
    }
    ngOnInit() {
        this.buildCombo();
        this.checkUserSpi();
        this.manageNavigation();
    }
    manageNavigation() {
        this.route.queryParams.subscribe(params => {
            this.associaContoModel = this.getSession(this.CONTO_ASSOCIA_SESSION);
            if (!!this.associaContoModel) {
                this.loadSections();
                this.associaContoModel.wizardSteps = this.setStepForAssociaConto(this.associaContoModel, 'associa-step1');
                this.backUrl = this.getBackUrlForAssociaConto(this.associaContoModel, 'associa-step1');
            }
            else {
                this.setError();
            }
            this.buildModel();
            this.buildForm();
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_19__["get"])(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaContiForm.setValue(this.getSearcModel().form);
                this.onSubmit(false);
            }
            else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }
    loadSections() {
        this.showSpinner();
        this.partyService.getParty(this.associaContoModel.idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
            this.party = res;
            this.buildPartySection();
            this.tipiConto = this.buildTipoContoDCAOrCBorSubAccount();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
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
        this.infoPanelPartyModel = {
            columnNumber: 2,
            data: data
        };
    }
    buildForm() {
        this.ricercaContiForm = this.formBuilder.group({
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            targetService: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('RTGS', []),
            idConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [ /*Validators.required*/]),
            dataInizioSfruttamentoDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, []),
            dataAperturaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, []),
            dataAperturaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, []),
            dataChiusuraDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, []),
            dataChiusuraA: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_18__["dateValidator"])([
                { field1: 'dataAperturaDa', field2: 'dataAperturaA' },
                { field1: 'dataChiusuraDa', field2: 'dataChiusuraA' }
            ]) });
        //A valle dei test l'utente richiede di eliminare l'obbligatorietà della data inizio sfruttamento
        /*this.dataInizioSfruttamentoDa.setValidators([this.dataInizioSfruttamentoValidator.bind(this)]);
        this.tipoConto.valueChanges.subscribe(
            () => { this.dataInizioSfruttamentoDa.updateValueAndValidity(); }
        );*/
    }
    dataInizioSfruttamentoValidator(control) {
        if (this.checkTipoContoRTGS_SA()) {
            if (!(!!control && !!control.value)) {
                return { 'value': true };
            }
            else if (typeof control.value === 'string' || !this.checkDateFormat(control.value)) {
                return { dateformat: true };
            }
        }
        return null;
    }
    checkDateFormat(val) {
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
    checkTipoContoRTGS_SA() {
        return (!!this.ricercaContiForm.get('tipoConto') && !!this.ricercaContiForm.get('tipoConto').value && this.ricercaContiForm.get('tipoConto').value == 'RTGS_SA');
    }
    checkResetDataInizioSfruttamento() {
        if (!this.checkTipoContoRTGS_SA()) {
            this.reset('dataInizioSfruttamentoDa');
        }
    }
    get bicConto() { return this.ricercaContiForm.get('bicConto'); }
    get targetService() { return this.ricercaContiForm.get('targetService'); }
    get idConto() { return this.ricercaContiForm.get('idConto'); }
    get abi() { return this.ricercaContiForm.get('abi'); }
    get tipoConto() { return this.ricercaContiForm.get('tipoConto'); }
    get indResidenza() { return this.ricercaContiForm.get('indResidenza'); }
    get catEconomica() { return this.ricercaContiForm.get('catEconomica'); }
    get filiale() { return this.ricercaContiForm.get('filiale'); }
    get dataAperturaDa() { return this.ricercaContiForm.get('dataAperturaDa'); }
    get dataAperturaA() { return this.ricercaContiForm.get('dataAperturaA'); }
    get dataChiusuraDa() { return this.ricercaContiForm.get('dataChiusuraDa'); }
    get dataChiusuraA() { return this.ricercaContiForm.get('dataChiusuraA'); }
    get utenteInserimento() { return this.ricercaContiForm.get('utenteInserimento'); }
    get utenteApprovatore() { return this.ricercaContiForm.get('utenteApprovatore'); }
    get dataInizioSfruttamentoDa() { return this.ricercaContiForm.get('dataInizioSfruttamentoDa'); }
    reset(field) {
        this.ricercaContiForm.get(field).setValue(null);
    }
    buildModel() {
        this.contoModel = {
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
            enableCsvExport: false,
            enablePdfExport: false,
            enableColumnSelection: false
        };
    }
    initializeGrid() {
        this.contoModel.gridOptions.api.sizeColumnsToFit();
        this.contoModel.gridOptions.onGridSizeChanged = evt => this.contoModel.gridOptions.api ? this.contoModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'BIC CONTO', field: 'bic', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'ACCOUNT ID', field: 'numeroConto', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TARGET SERVICE', field: 'targetService', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TIPO CONTO', field: 'tipoConto.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'ABI', field: 'abi', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DESCRIZIONE', field: 'descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA APERTURA', field: 'dataApertura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA CHIUSURA', field: 'dataChiusura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_15__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        this.associaContoModel.dataInizioSfruttamento = this.dataInizioSfruttamentoDa.value;
        this.setSession(this.CONTO_ASSOCIA_SESSION, this.associaContoModel);
        const selectButton = {
            label: 'Seleziona Conto '.concat(data.numeroConto),
            routerLink: this.routingService.getRouteByKey(this.routingService.CONTO_ASSOCIA_STEP2),
            params: { idConto: data.id, idParty: this.associaContoModel.idParty },
            enabled: true,
            sessionKey: this.CONTO_ASSOCIA_SESSION
        };
        return {
            detailButton: null,
            modifyButton: null,
            deleteButton: null,
            selectButton: selectButton
        };
    }
    buildRsqlSearchString() {
        const today = new Date();
        const rSQLArray = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicConto.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.targetService.value, 'targetService'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.idConto.value, 'numeroConto'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.abi.value, 'abi'));
        if (!!this.tipoConto.value) {
            rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoConto.value, 'tipoConto'));
        }
        else {
            rSQLArray.push(this.rSQLUtils.manageIn(this.tipiConto.map(t => t.codice), 'tipoConto'));
        }
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value), null, 'validTo'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataChiusuraDa.value), this.formatterUtils.dateToString(this.dataChiusuraA.value), 'dataChiusura'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        //Ricerca solo conti attivi
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString({ day: today.getUTCDate(), month: (today.getUTCMonth() + 1), year: today.getFullYear() }), null, 'validTo'));
        //Data l’associazione 1:1, potranno essere selezionabili solo Subaccount NON sfruttati da un altro ANSY, oppure la cui associazione di sfruttamento risulti terminata alla data di inizio sfruttamento rispetto all’ANSY di cui si sta effettuando l’associazione
        if (!!this.checkTipoContoRTGS_SA() && !!this.dataInizioSfruttamentoDa.value) {
            const comparison1 = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["and"])('subTipoPtyAnsy'.concat('=isnull=null'), 'subBicPtyAnsy'.concat('=isnull=null'));
            const comparison2 = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["comparison"])('subTipoPtyAnsy', Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["eq"])(this.party.tipoParty.codice)), Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["comparison"])('subBicPtyAnsy', Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["eq"])(this.party.bic)), Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["comparison"])('validFrom', Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["lt"])(this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value))));
            const comparison3 = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_17__["or"])(comparison1, comparison2);
            rSQLArray.push(comparison3);
        }
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    onSubmit(resetPage) {
        if (!!this.ricercaContiForm.valid) {
            this.showSpinner();
            this.showTable = false;
            this.resetError();
            this.contoModel.rowData = [];
            this.contoModel.enableMessageOnSizeResultLimit = false;
            this.manageSearchModel(this.contoModel, this.getSearcModel(), resetPage);
            if (!!this.ricercaContiForm.valid) {
                this.showSpinner();
                if (!this.getSearcModel()) {
                    this.setSearcModel(this.initSearchModel());
                }
                this.getSearcModel().form = this.ricercaContiForm.value;
                const searchString = this.buildRsqlSearchString();
                this.contiService.getConti(searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
                    this.contoModel.enableMessageEmptyResult = true;
                    if (!!res && res.content.length > 0) {
                        this.contoModel.enableMessageEmptyResult = false;
                        this.contoModel.rowData = res.content;
                        this.contoModel.enableMessageOnSizeResultLimit = false;
                        this.contoModel.searchRecordLenght = res.content.length;
                        if (res.totalElements > res.content.length) {
                            this.contoModel.enableMessageOnSizeResultLimit = true;
                            this.contoModel.searchRecordLenght = res.totalElements;
                        }
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
                    this.showTable = true;
                    this.hideSpinner();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
                    console.log('Error - submit', error);
                    this.showTable = false;
                    this.setError(error);
                    this.hideSpinner();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
                })).subscribe();
            }
        }
    }
    getSearcModel() {
        return this.contiService.associaContosearchContoModel;
    }
    setSearcModel(searchModel) {
        return this.contiService.associaContosearchContoModel = searchModel;
    }
};
AssocazioneContoStep1Component.ctorParameters = () => [
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
AssocazioneContoStep1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assocazione-conto-step1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assocazione-conto-step1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assocazione-conto-step1.component.scss */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.scss")).default]
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
], AssocazioneContoStep1Component);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9zZnJ1dHRhbWVudG8tYW5zeS9hc3NvY2F6aW9uZS1jb250by1zdGVwMi9hc3NvY2F6aW9uZS1jb250by1zdGVwMi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AssocazioneContoStep2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocazioneContoStep2Component", function() { return AssocazioneContoStep2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");

















let AssocazioneContoStep2Component = class AssocazioneContoStep2Component extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_3__["AbstractAnagraficheComponent"] {
    constructor(partyService, filialeService, contiService, securityService, userService, formatterUtils, formBuilder, routingService, route, modalService, taskService) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.contiService = contiService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.routingService = routingService;
        this.route = route;
        this.modalService = modalService;
        this.taskService = taskService;
        this.isDCAorCB = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.idConto = params.idConto;
            this.idParty = params.idParty;
            this.sfruttamentoModel = this.getSession(this.CONTO_ASSOCIA_SESSION);
            if (!!this.sfruttamentoModel) {
                this.loadSections();
                this.minDate = this.sfruttamentoModel.dataInizioSfruttamento;
                this.sfruttamentoModel.wizardSteps = this.setStepForAssociaConto(this.sfruttamentoModel, 'associa-step2');
                this.backUrl = this.getBackUrlForAssociaConto(this.sfruttamentoModel, 'associa-step2');
            }
            else {
                this.setError();
            }
        });
    }
    loadSections() {
        this.showSpinner();
        const getParty = this.partyService.getParty(this.idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => this.party = res));
        const getConto = this.contiService.getConto(this.idConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => this.conto = res));
        const calls = [getParty, getConto];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["forkJoin"])(calls).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => {
            this.buildPartySection();
            this.buildContoSection();
            this.tipiSfruttamento = this.buildTipiSfruttamento();
            this.buildForm();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null);
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
        this.infoPanelPartyModel = {
            columnNumber: 2,
            data: data
        };
    }
    buildContoSection() {
        const data = [
            [this.buildInfoPanelElement('Bic', 'string', this.conto, 'bic'), this.buildInfoPanelElement('Account Id', 'string', this.conto, 'numeroConto')],
            [this.buildInfoPanelElement('Target Service', 'string', this.conto, 'targetService'), this.buildInfoPanelElement('Tipo Conto', 'string', this.conto, 'tipoConto.descrizione')],
            [this.buildInfoPanelElement('ABI', 'string', this.conto, 'abi'), this.buildInfoPanelElement('Descrizione', 'string', this.conto, 'descrizione')],
            [this.buildInfoPanelElement('Data Apertura', 'date', this.conto, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura', 'date', this.conto, 'dataChiusura')]
        ];
        this.infoPanelContoModel = {
            columnNumber: 2,
            data: data
        };
        this.isDCAorCB = (this.checkContoIsDCA(this.conto) || this.checkContoIsCB(this.conto));
    }
    buildForm() {
        this.sfruttamentoForm = this.formBuilder.group({
            dataInizioSfruttamentoDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
            tipoSfruttamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](null, [this.tipoSfruttamentoValidator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_16__["dateValidator"])([
                { field1: 'dataInizioSfruttamentoDa', minDate1: this.minDate, required1: true }
            ]) });
    }
    tipoSfruttamentoValidator(control) {
        if (!this.isDCAorCB &&
            !(!!control && !!control.value)) {
            return { 'value': true };
        }
        return null;
    }
    get dataInizioSfruttamentoDa() { return this.sfruttamentoForm.get('dataInizioSfruttamentoDa'); }
    get tipoSfruttamento() { return this.sfruttamentoForm.get('tipoSfruttamento'); }
    reset(field) {
        this.sfruttamentoForm.get(field).setValue(null);
    }
    getDataSfruttamentoTooltip() {
        return 'La data inizio sfruttamento non può essere minore di quella impostata in fase di ricerca e pari a ' + this.formatterUtils.dateToString(this.minDate);
    }
    openModal() {
        if (!!this.sfruttamentoForm.valid) {
            this.confirmModalReference = this.modalService.open(this.confirmModal);
        }
    }
    closeModal() {
        this.confirmModalReference.close();
    }
    confirm() {
        this.confirmModalReference.close();
        if (this.isDCAorCB) {
            this.saveAssociazioneSfruttamentoAnsyDca();
        }
        else {
            this.saveAssociazioneSfruttamentoSubAccount();
        }
    }
    saveAssociazioneSfruttamentoAnsyDca() {
        this.resetError();
        this.showSpinner();
        const taskSfruttamentoAnsyDca = this.buildTaskSfruttamentoAnsyDca();
        this.taskService.saveTaskSfruttamentoAnsyDca(taskSfruttamentoAnsyDca).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => {
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])((error) => {
            console.log('Error - saveAssociazioneSfruttamentoAnsyDca', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null);
        })).subscribe();
    }
    buildTaskSfruttamentoAnsyDca() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoOperazioneEnum"].INS
            },
            bicConto: this.conto.bic,
            targetServiceConto: this.conto.targetService,
            bicParty: this.party.bic,
            tipoParty: this.party.tipoParty,
            validFrom: this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value)
        };
    }
    saveAssociazioneSfruttamentoSubAccount() {
        this.resetError();
        this.showSpinner();
        const taskConto = this.buildTaskConto();
        this.taskService.saveTaskConto(taskConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => {
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])((error) => {
            console.log('Error - saveAssociazioneSfruttamentoSubAccount', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null);
        })).subscribe();
    }
    buildTaskConto() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoOperazioneEnum"].UPD
            },
            idConto: this.conto.id,
            subBicPtyAnsy: this.party.bic,
            subTipoPtyAnsy: this.party.tipoParty.codice,
            subTipoSfruttAnsy: this.tipoSfruttamento.value,
            validFrom: this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value),
            abiToEdit: false,
            //bicPartyToEdit: false,
            //bicToEdit: false,
            categoriaEconomicaToEdit: false,
            dataAperturaToEdit: false,
            //dataChiusuraToEdit: false,
            descrizioneToEdit: false,
            flgManToEdit: false,
            indicatoreResidenzaToEdit: false,
            mcaDefFlagToEdit: false,
            numeroContoToEdit: false,
            pressoBdiToEdit: false,
            subParBicDcaToEdit: false,
            subParTsDcaToEdit: false,
            subBicPtyAnsyToEdit: true,
            subTipoPtyAnsyToEdit: true,
            subTipoSfruttAnsyToEdit: true,
            targetServiceToEdit: false,
            tipoContoToEdit: false,
            tipoPartyToEdit: false,
            /*tsModificaToEdit: false,
            utenteRichiestaToEdit: false,
            utenteValidazioneToEdit: false,*/
            validFromToEdit: true,
            //validToToEdit: false
            idContoOrig: this.conto.id
        };
    }
    getTipoSfruttamentoValue() {
        return this.tipiSfruttamento.find(t => t.codice == this.tipoSfruttamento.value).descrizione;
    }
    getDataSfruttamentoValue() {
        return this.formatterUtils.dateToString(this.dataInizioSfruttamentoDa.value);
    }
};
AssocazioneContoStep2Component.ctorParameters = () => [
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_6__["ContoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__["ModalService"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_15__["TaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmModal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], AssocazioneContoStep2Component.prototype, "confirmModal", void 0);
AssocazioneContoStep2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assocazione-conto-step2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assocazione-conto-step2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assocazione-conto-step2.component.scss */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_party_service__WEBPACK_IMPORTED_MODULE_4__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__["FilialeService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_6__["ContoService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__["ModalService"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_15__["TaskService"]])
], AssocazioneContoStep2Component);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.scss ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9zZnJ1dHRhbWVudG8tYW5zeS9lbGltaW5hemlvbmUtbG9naWNhLWFzc29jaWF6aW9uZS1jb250by9lbGltaW5hemlvbmUtbG9naWNhLWFzc29jaWF6aW9uZS1jb250by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: EliminazioneLogicaAssociazioneContoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminazioneLogicaAssociazioneContoComponent", function() { return EliminazioneLogicaAssociazioneContoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _assocazione_conto_step2_assocazione_conto_step2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assocazione-conto-step2/assocazione-conto-step2.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");

















let EliminazioneLogicaAssociazioneContoComponent = class EliminazioneLogicaAssociazioneContoComponent extends _assocazione_conto_step2_assocazione_conto_step2_component__WEBPACK_IMPORTED_MODULE_12__["AssocazioneContoStep2Component"] {
    constructor(partyService, filialeService, contiService, securityService, userService, formatterUtils, formBuilder, routingService, route, modalService, taskService) {
        super(partyService, filialeService, contiService, securityService, userService, formatterUtils, formBuilder, routingService, route, modalService, taskService);
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.contiService = contiService;
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.routingService = routingService;
        this.route = route;
        this.modalService = modalService;
        this.taskService = taskService;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.idConto = params.idConto;
            this.idParty = params.idParty;
            this.sfruttamentoModel = this.getSession(this.CONTO_ELIMINA_ASSOCIA_SESSION);
            if (!!this.sfruttamentoModel) {
                this.loadSections();
                this.minDate = this.formatterUtils.getValueForDateinDatePickerFormat(this.sfruttamentoModel.dataInizioSfruttamento);
                this.backUrl = '/anagrafiche/parties/dettaglio';
            }
            else {
                this.setError();
            }
        });
    }
    buildForm() {
        this.sfruttamentoForm = this.formBuilder.group({
            dataFineSfruttamentoDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_16__["dateValidator"])([
                { field1: 'dataFineSfruttamentoDa', minDate1: this.minDate, required1: true }
            ]) });
    }
    confirm() {
        this.confirmModalReference.close();
        if (this.isDCAorCB) {
            this.saveEliminazioneSfruttamentoAnsyDca();
        }
        else {
            this.saveEliminazioneSfuttamentoSubAccount();
        }
    }
    saveEliminazioneSfruttamentoAnsyDca() {
        this.resetError();
        this.showSpinner();
        const taskSfruttamentoAnsyDca = this.buildEliminazioneTaskSfruttamentoAnsyDca();
        this.taskService.saveTaskSfruttamentoAnsyDca(taskSfruttamentoAnsyDca).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
            console.log('Error - saveEliminazioneSfruttamentoAnsyDca', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        })).subscribe();
    }
    buildEliminazioneTaskSfruttamentoAnsyDca() {
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoOperazioneEnum"].DEL
            },
            validTo: this.formatterUtils.dateToString(this.dataFineSfruttamentoDa.value),
            idSfruttamentoDcaOrig: this.sfruttamentoModel.idSfruttamento
        };
    }
    saveEliminazioneSfuttamentoSubAccount() {
        this.resetError();
        this.showSpinner();
        const taskConto = this.buildEliminazioneTaskConto();
        this.taskService.saveTaskConto(taskConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(res => {
            this.isResultOk = true;
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
            console.log('Error - saveEliminazioneSfuttamentoSubAccount', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
        })).subscribe();
    }
    buildEliminazioneTaskConto() {
        const dfs = this.dataFineSfruttamentoDa.value;
        const d = new Date(dfs.year, dfs.month - 1, dfs.day);
        d.setDate(d.getDate() + 1);
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoOperazioneEnum"].UPD
            },
            idConto: this.conto.id,
            subBicPtyAnsy: null,
            subTipoPtyAnsy: null,
            subTipoSfruttAnsy: null,
            validFrom: this.formatterUtils.formatDate(d),
            abiToEdit: false,
            //bicPartyToEdit: false,
            //bicToEdit: false,
            categoriaEconomicaToEdit: false,
            dataAperturaToEdit: false,
            //dataChiusuraToEdit: false,
            descrizioneToEdit: false,
            flgManToEdit: false,
            indicatoreResidenzaToEdit: false,
            mcaDefFlagToEdit: false,
            numeroContoToEdit: false,
            pressoBdiToEdit: false,
            subParBicDcaToEdit: false,
            subParTsDcaToEdit: false,
            subBicPtyAnsyToEdit: true,
            subTipoPtyAnsyToEdit: true,
            subTipoSfruttAnsyToEdit: true,
            targetServiceToEdit: false,
            tipoContoToEdit: false,
            tipoPartyToEdit: false,
            /*tsModificaToEdit: false,
            utenteRichiestaToEdit: false,
            utenteValidazioneToEdit: false,*/
            validFromToEdit: true,
            //validToToEdit: false
            idContoOrig: this.conto.id
        };
    }
    get dataFineSfruttamentoDa() { return this.sfruttamentoForm.get('dataFineSfruttamentoDa'); }
    getDataFineSfruttamentoValue() {
        return this.formatterUtils.dateToString(this.dataFineSfruttamentoDa.value);
    }
    getDataSfruttamentoTooltip() {
        return 'La data fine sfruttamento non può essere minore di quella inizio sfruttamento e pari a ' + this.formatterUtils.dateToString(this.minDate);
    }
};
EliminazioneLogicaAssociazioneContoComponent.ctorParameters = () => [
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_2__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_3__["FilialeService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_4__["ContoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__["ModalService"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"] }
];
EliminazioneLogicaAssociazioneContoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eliminazione-logica-associazione-conto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminazione-logica-associazione-conto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminazione-logica-associazione-conto.component.scss */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_party_service__WEBPACK_IMPORTED_MODULE_2__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_3__["FilialeService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_4__["ContoService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__["ModalService"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"]])
], EliminazioneLogicaAssociazioneContoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/sfruttamento-ansy-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/sfruttamento-ansy-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SfruttamentoAnsyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SfruttamentoAnsyRoutingModule", function() { return SfruttamentoAnsyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _assocazione_conto_step1_assocazione_conto_step1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assocazione-conto-step1/assocazione-conto-step1.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.ts");
/* harmony import */ var _assocazione_conto_step2_assocazione_conto_step2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assocazione-conto-step2/assocazione-conto-step2.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.ts");
/* harmony import */ var _eliminazione_logica_associazione_conto_eliminazione_logica_associazione_conto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.ts");








const routes = [
    {
        path: '',
        data: {
            title: '',
        },
        children: [
            {
                path: 'associa-step1',
                component: _assocazione_conto_step1_assocazione_conto_step1_component__WEBPACK_IMPORTED_MODULE_5__["AssocazioneContoStep1Component"],
                data: {
                    title: 'Associazione Conto',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'associa-step2',
                component: _assocazione_conto_step2_assocazione_conto_step2_component__WEBPACK_IMPORTED_MODULE_6__["AssocazioneContoStep2Component"],
                data: {
                    title: 'Associazione Conto',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            }
        ]
    },
    {
        path: 'eliminazione-logica',
        component: _eliminazione_logica_associazione_conto_eliminazione_logica_associazione_conto_component__WEBPACK_IMPORTED_MODULE_7__["EliminazioneLogicaAssociazioneContoComponent"],
        data: {
            title: 'Eliminazione Sfruttamento Conto',
            roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
        },
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
    }
];
let SfruttamentoAnsyRoutingModule = class SfruttamentoAnsyRoutingModule {
};
SfruttamentoAnsyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SfruttamentoAnsyRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/sfruttamento-ansy.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/sfruttamento-ansy/sfruttamento-ansy.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SfruttamentoAnsyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SfruttamentoAnsyModule", function() { return SfruttamentoAnsyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sfruttamento_ansy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sfruttamento-ansy-routing.module */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/sfruttamento-ansy-routing.module.ts");
/* harmony import */ var _assocazione_conto_step1_assocazione_conto_step1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assocazione-conto-step1/assocazione-conto-step1.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component.ts");
/* harmony import */ var _assocazione_conto_step2_assocazione_conto_step2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assocazione-conto-step2/assocazione-conto-step2.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _eliminazione_logica_associazione_conto_eliminazione_logica_associazione_conto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component */ "./src/app/views/anagrafiche/conti/sfruttamento-ansy/eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component.ts");















let SfruttamentoAnsyModule = class SfruttamentoAnsyModule {
};
SfruttamentoAnsyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assocazione_conto_step1_assocazione_conto_step1_component__WEBPACK_IMPORTED_MODULE_4__["AssocazioneContoStep1Component"], _assocazione_conto_step2_assocazione_conto_step2_component__WEBPACK_IMPORTED_MODULE_5__["AssocazioneContoStep2Component"], _eliminazione_logica_associazione_conto_eliminazione_logica_associazione_conto_component__WEBPACK_IMPORTED_MODULE_13__["EliminazioneLogicaAssociazioneContoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_6__["GepaGuiCommonModule"],
            _sfruttamento_ansy_routing_module__WEBPACK_IMPORTED_MODULE_3__["SfruttamentoAnsyRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_8__["BDIAlertModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_8__["BDIDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_9__["GenericTableModule"],
            _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_10__["InfoPanelModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_8__["BDIDatagridModule"].withComponents([
                _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_11__["GenericActionRenderComponent"],
            ]),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_8__["BDITooltipModule"].forRoot(),
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_12__["GenericActionRenderModule"]
        ]
    })
], SfruttamentoAnsyModule);



/***/ })

}]);
//# sourceMappingURL=conti-sfruttamento-ansy-sfruttamento-ansy-module.js.map