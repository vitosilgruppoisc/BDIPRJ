(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~conti-inserimento-conto-inserimento-conto-module~inserimento-conto-inserimento-conto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuovo Conto - Scelta Party </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bic\" class=\"col-2 col-form-label\">Bic:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bic\" class=\"form-control\" [class.is-invalid]=\"bic.invalid && (bic.dirty || bic.touched)\" formControlName=\"bic\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bic.errors?.wildcard && (bic.dirty || bic.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bic.errors?.syntax && (bic.dirty || bic.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"tipo\" class=\"col-2 col-form-label\">Tipo Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipo\" class=\"form-control\" [class.is-invalid]=\"tipo.invalid && (tipo.dirty || tipo.touched)\" formControlName=\"tipo\">\r\n                                <option [ngValue]=\"null\">Tutte</option>\r\n                                <option *ngFor=\"let t of tipiParty\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nome\" class=\"col-2 col-form-label\">Nome:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nome\" class=\"form-control\" [class.is-invalid]=\"nome.invalid && (nome.dirty || nome.touched)\" formControlName=\"nome\" maxlength=\"4000\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"nome.errors?.wildcard && (nome.dirty || nome.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (abi.dirty || abi.touched)\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"abi.errors?.wildcard && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"abi.errors?.pattern && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"filiale\" class=\"col-2 col-form-label\">Filiale:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"filiale\" class=\"form-control\" [class.is-invalid]=\"filiale.invalid && (filiale.dirty || filiale.touched)\" formControlName=\"filiale\">\r\n                                <option [ngValue]=\"null\">Tutte</option>\r\n                                <option *ngFor=\"let f of filialiRiferimento\" [value]=\"f.codice\">{{f.sigla}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"mfiCode\" class=\"col-2 col-form-label\">MFI Code:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"mfiCode\" class=\"form-control\" [class.is-invalid]=\"mfiCode.invalid && (mfiCode.dirty || mfiCode.touched)\" formControlName=\"mfiCode\" maxlength=\"160\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"mfiCode.errors?.wildcard && (mfiCode.dirty || mfiCode.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"mfiCode.errors?.pattern && (mfiCode.dirty || mfiCode.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"indResidenza\" class=\"form-control\" [class.is-invalid]=\"indResidenza.invalid && (indResidenza.dirty || indResidenza.touched)\" formControlName=\"indResidenza\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"indResidenza.errors?.wildcard && (indResidenza.dirty || indResidenza.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"indResidenza.errors?.pattern && (indResidenza.dirty || indResidenza.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"catEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"catEconomica\" class=\"form-control\" [class.is-invalid]=\"catEconomica.invalid && (catEconomica.dirty || catEconomica.touched)\" formControlName=\"catEconomica\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"catEconomica.errors?.wildcard && (catEconomica.dirty || catEconomica.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"catEconomica.errors?.pattern && (catEconomica.dirty || catEconomica.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Apertura-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Apertura:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataAperturaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataAperturaDa\" class=\"form-control\" [class.is-invalid]=\"dataAperturaDa.invalid && (dataAperturaDa.dirty || dataAperturaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaDa\"  bdiDatepicker #datepickerDAda=\"bdiDatepicker\" maxlength=\"10\"  style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataAperturaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataAperturaDa.errors?.dateformat && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataAperturaDa.errors?.daterange && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataAperturaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataAperturaA\" class=\"form-control\" [class.is-invalid]=\"dataAperturaA.invalid && (dataAperturaA.dirty || dataAperturaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaA\"  bdiDatepicker #datepickerDAa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataAperturaA.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataAperturaA.errors?.dateformat && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataAperturaA.errors?.daterange && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"partyModel\" (action)=\"onActionEvent($event)\" (colToDisplay)=\"onColToDisplayEvent($event, this.partyService.insertContoSearchPartyModel)\" (paginationChanged)=\"onPaginationEvent($event, this.partyService.insertContoSearchPartyModel)\" (sortChanged)=\"onSortEvent($event, this.partyService.insertContoSearchPartyModel)\" (filterChanged)=\"onFilterEvent($event, this.partyService.insertContoSearchPartyModel)\"></app-generic-table>\r\n                </div>\r\n            </ng-container>\r\n            <br/>\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-3\">\r\n                    <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                </div>\r\n                <div class=\"col-3 offset-md-6\">\r\n                    <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToStep2()\">Conto non Attestato presso Banca d'Italia</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\" >\r\n        <span class=\"input-group-text\" >\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuovo Conto - Scelta Tipo Conto </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party Proprietario</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Tipo Conto</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n\r\n                        <form [formGroup]=\"tipoContoform\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #form=\"ngForm\">\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                                <div class=\"col-10\">\r\n                                    <select id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && form.submitted\" formControlName=\"tipoConto\">\r\n                                        <option [ngValue]=\"undefined\">Tutti</option>\r\n                                        <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"tipoConto.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!--<div class=\"col-3 offset-md-3\">\r\n                                    <button class=\"btn btn-block btn-primary\" type=\"submit\">Avanti</button>\r\n                                </div>\r\n                                -->\r\n                            </div>\r\n\r\n                            <br/>\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-3\">\r\n                                    <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                                </div>\r\n                                <div class=\"col-3 offset-md-6\">\r\n                                    <button class=\"btn btn-block btn-primary\" type=\"submit\">Avanti</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuovo Conto - Scelta Conto DCA Padre </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bicParty\" class=\"col-2 col-form-label\">Bic Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicParty\" class=\"form-control\" [class.is-invalid]=\"bicParty.invalid && (bicParty.dirty || bicParty.touched)\" formControlName=\"bicParty\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicParty.errors?.wildcard && (bicParty.dirty || bicParty.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicParty.errors?.syntax && (bicParty.dirty || bicParty.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"tipoParty\" class=\"col-2 col-form-label\">Tipo Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipoParty\" class=\"form-control\" [class.is-invalid]=\"tipoParty.invalid && (tipoParty.dirty || tipoParty.touched)\" formControlName=\"tipoParty\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiParty\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nomeParty\" class=\"col-2 col-form-label\">Nome Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nomeParty\" class=\"form-control\" [class.is-invalid]=\"nomeParty.invalid && (nomeParty.dirty || nomeParty.touched)\" formControlName=\"nomeParty\" maxlength=\"4000\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"nomeParty.errors?.wildcard && (nomeParty.dirty || nomeParty.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && (bicConto.dirty || bicConto.touched)\" formControlName=\"bicConto\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicConto.errors?.wildcard && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicConto.errors?.syntax && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"targetService\" class=\"col-2 col-form-label\">Target Service:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"targetService\" class=\"form-control\" [class.is-invalid]=\"targetService.invalid && (targetService.dirty || targetService.touched)\" formControlName=\"targetService\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiTargetService\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"idConto\" class=\"col-2 col-form-label\">Account Id:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"idConto\" class=\"form-control\" [class.is-invalid]=\"idConto.invalid && (idConto.dirty || idConto.touched)\" formControlName=\"idConto\" maxlength=\"34\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"idConto.errors?.wildcard && (idConto.dirty || idConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (abi.dirty || abi.touched)\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"abi.errors?.wildcard && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"abi.errors?.pattern && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && (tipoConto.dirty || tipoConto.touched)\" formControlName=\"tipoConto\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiContoDCA_CB\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"defaultMCA\" class=\"col-2 col-form-label\">Default MCA:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"defaultMCA\" class=\"form-control\" [class.is-invalid]=\"defaultMCA.invalid && (defaultMCA.dirty || defaultMCA.touched)\" formControlName=\"defaultMCA\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiDefaultMCA\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"flagPressoBDI\" class=\"col-2 col-form-label\">Presso BDI:</label>\r\n                        <div class=\"col-4\">\r\n                            <input id=\"flagPressoBDI\" class=\"form-control\" [value]=\"getPressoBDIValue()\" [readOnly]=\"true\"/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"flagInserimentoManuale\" class=\"col-2 col-form-label\">Flag Inserimento Manuale:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"flagInserimentoManuale\" class=\"form-control\" [class.is-invalid]=\"flagInserimentoManuale.invalid && (flagInserimentoManuale.dirty || flagInserimentoManuale.touched)\" formControlName=\"flagInserimentoManuale\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiManuale\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"filiale\" class=\"col-2 col-form-label\">Filiale:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"filiale\" class=\"form-control\" [class.is-invalid]=\"filiale.invalid && (filiale.dirty || filiale.touched)\" formControlName=\"filiale\">\r\n                                <option [ngValue]=\"undefined\">Tutte</option>\r\n                                <option *ngFor=\"let f of filialiRiferimento\" [value]=\"f.codice\">{{f.sigla}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"indResidenza\" class=\"form-control\" [class.is-invalid]=\"indResidenza.invalid && (indResidenza.dirty || indResidenza.touched)\" formControlName=\"indResidenza\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"indResidenza.errors?.wildcard && (indResidenza.dirty || indResidenza.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"indResidenza.errors?.pattern && (indResidenza.dirty || indResidenza.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"catEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"catEconomica\" class=\"form-control\" [class.is-invalid]=\"catEconomica.invalid && (catEconomica.dirty || catEconomica.touched)\" formControlName=\"catEconomica\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"catEconomica.errors?.wildcard && (catEconomica.dirty || catEconomica.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"catEconomica.errors?.pattern && (catEconomica.dirty || catEconomica.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Apertura-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Apertura:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataAperturaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataAperturaDa\" class=\"form-control\" [class.is-invalid]=\"dataAperturaDa.invalid && (dataAperturaDa.dirty || dataAperturaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaDa\"  bdiDatepicker #datepickerDAda=\"bdiDatepicker\" maxlength=\"10\"  style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataAperturaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataAperturaDa.errors?.dateformat && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataAperturaDa.errors?.daterange && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataAperturaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataAperturaA\" class=\"form-control\" [class.is-invalid]=\"dataAperturaA.invalid && (dataAperturaA.dirty || dataAperturaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaA\"  bdiDatepicker #datepickerDAa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataAperturaA.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataAperturaA.errors?.dateformat && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataAperturaA.errors?.daterange && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Chiusura-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Chiusura:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataChiusuraDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataChiusuraDa\" class=\"form-control\" [class.is-invalid]=\"dataChiusuraDa.invalid && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusuraDa\"  bdiDatepicker #datepickerDCda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDCda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataChiusuraDa.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusuraDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataChiusuraDa.errors?.dateformat && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusuraDa.errors?.daterange && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataChiusuraA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataChiusuraA\" class=\"form-control\" [class.is-invalid]=\"dataChiusuraA.invalid && (dataChiusuraA.dirty || dataChiusuraA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusuraA\"  bdiDatepicker #datepickerDCa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDCa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataChiusuraA.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusuraA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataChiusuraA.errors?.dateformat && (dataChiusuraA.dirty || dataChiusuraA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusuraA.errors?.daterange && (dataChiusuraA.dirty || dataChiusuraA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"contoModel\" (action)=\"onActionEvent($event)\"></app-generic-table>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row mb-2\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\" >\r\n        <span class=\"input-group-text\" >\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n        </div>\r\n    </ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-plus-square\"></i> Nuovo Conto - Inserimento Conto </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelPartyModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Party Proprietario</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelPartyModel\"></app-info-panel>\r\n                        <br/>\r\n                        <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"!!infoPanelContoModel\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Conto DCA Padre</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <app-info-panel [model]=\"infoPanelContoModel\"></app-info-panel>\r\n                        <br/>\r\n                        <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <strong><i class=\"fal fa-info-square\"></i>Conto</strong>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n\r\n                        <form [formGroup]=\"inserimentoForm\" class=\"form-horizontal\" (ngSubmit)=\"openModal()\" #form=\"ngForm\">\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && form.submitted\" formControlName=\"bicConto\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"checkContoIsSubAccountByTipoCod(inserimentoContoModel.tipoConto) || readonlyForm\"/>\r\n                                        <div *ngIf=\"bicConto.errors?.bicReq && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                        <div *ngIf=\"bicConto.errors?.syntax && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo sintatticamente non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"tipoConto\" class=\"form-control\" [value]=\"getTipoValue()\" [readOnly]=\"true\"/>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"descrizione\" class=\"col-2 col-form-label\">Descrizione<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"descrizione\" class=\"form-control\" [class.is-invalid]=\"descrizione.invalid && form.submitted\" formControlName=\"descrizione\" maxlength=\"4000\" [readOnly]=\"readonlyForm\"/>\r\n                                        <div *ngIf=\"descrizione.errors?.required  && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                        <div *ngIf=\"descrizione.errors?.pattern  && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <label for=\"idConto\" class=\"col-2 col-form-label\">Account Id<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"idConto\" class=\"form-control\" [class.is-invalid]=\"idConto.invalid && form.submitted\" formControlName=\"idConto\" maxlength=\"34\" [pattern]=\"'^[a-zA-Z0-9]+$'\" [readOnly]=\"readonlyForm\"/>\r\n                                        <div *ngIf=\"idConto.errors?.required  && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                        <div *ngIf=\"idConto.errors?.pattern  && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"targetService\" class=\"col-2 col-form-label\">Target Service<span>*</span>:</label>\r\n                                <!--<div class=\"col-4\">\r\n                                    <select *ngIf=\"!readonlyForm; else inputTarget\" id=\"targetService\" class=\"form-control\" [class.is-invalid]=\"targetService.invalid && form.submitted\" formControlName=\"targetService\">\r\n                                        <option [ngValue]=\"undefined\">Tutti</option>\r\n                                        <option *ngFor=\"let t of tipiTargetService\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"targetService.errors?.required && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <ng-template #inputTarget>\r\n                                    <input class=\"form-control\" [value]=\"getTargetServiceValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n                                -->\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"targetService\" class=\"form-control\" [value]=\"getTargetServiceValue()\" [readOnly]=\"true\"/>\r\n                                </div>\r\n\r\n                                <label for=\"abi\" class=\"col-2 col-form-label\">Abi<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && form.submitted\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9]+$'\" [readOnly]=\"readonlyForm\"/>\r\n                                        <div *ngIf=\"abi.errors?.required  && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo obbligatorio\r\n                                        </div>\r\n                                        <div *ngIf=\"abi.errors?.pattern  && form.submitted\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\" *ngIf=\"checkTipoConto()\">\r\n\r\n                                <label for=\"defaultMCA\" class=\"col-2 col-form-label\">Default MCA<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <select id=\"defaultMCA\" class=\"form-control\" [class.is-invalid]=\"defaultMCA.invalid && form.submitted\" formControlName=\"defaultMCA\">\r\n                                        <option [ngValue]=\"undefined\">Tutti</option>\r\n                                        <option *ngFor=\"let t of tipiDefaultMCA\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"defaultMCA.errors?.value  && form.submitted\" class=\"invalid-feedback\">\r\n                                        Campo obbligatorio\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n\r\n                                <label for=\"flagPressoBDI\" class=\"col-2 col-form-label\">Presso BDI:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"flagPressoBDI\" class=\"form-control\" [value]=\"getPressoBDIValue()\" [readOnly]=\"true\"/>\r\n                                </div>\r\n\r\n                                <label for=\"flagInserimentoManuale\" class=\"col-2 col-form-label\">Flag Inserimento Manuale:</label>\r\n                                <div class=\"col-4\">\r\n                                    <input id=\"flagInserimentoManuale\" class=\"form-control\" [value]=\"getFlagInserimentoManualeValue()\" [readOnly]=\"true\"/>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"indResidenza\" class=\"form-control\" formControlName=\"indResidenza\" maxlength=\"5\" readonly=\"true\"/>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <label for=\"catEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"catEconomica\" class=\"form-control\" formControlName=\"catEconomica\" readonly=\"true\"/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"dataApertura\" class=\"col-2 col-form-label\">Data Apertura<span>*</span>:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputDataApertuta\">\r\n                                        <input id=\"dataApertura\" class=\"form-control\" [class.is-invalid]=\"dataApertura.invalid && (form.submitted || (dataApertura.dirty || dataApertura.touched))\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataApertura\"  bdiDatepicker #datepickerDA=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"/>\r\n                                        <div *ngIf=\"!readonlyForm\" class=\"input-group-append\" (click)=\"datepickerDA.toggle()\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataApertura.value && !readonlyForm\"  class=\"input-group-append\" (click)=\"reset('dataApertura')\" style=\"cursor: pointer;\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fas fa-trash-alt\"></i>\r\n                                        </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"dataApertura.errors?.dateformat && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataApertura.errors?.daterange && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataApertura.errors?.mindate  && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                            Data inferiore al limite inferiore consentito (data apertuta Party): {{formatterUtils.dateToString(minDate)}}\r\n                                        </div>\r\n                                        <div *ngIf=\"dataApertura.errors?.maxdate  && (dataApertura.dirty || dataApertura.touched)\" class=\"invalid-feedback\">\r\n                                            Data superiore al limite superiore consentito (data chiusura Party): {{formatterUtils.dateToString(maxDate)}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputDataApertuta>\r\n                                    <input class=\"form-control\" [value]=\"getDataAperturaValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n\r\n                                <label for=\"dataChiusura\" class=\"col-2 col-form-label\">Data Chiusura:</label>\r\n                                <div class=\"col-4\">\r\n                                    <div class=\"input-group\" *ngIf=\"!readonlyForm; else inputDataChiusura\" >\r\n                                        <input id=\"dataChiusura\" class=\"form-control\" [class.is-invalid]=\"dataChiusura.invalid && (form.submitted || (dataChiusura.dirty || dataChiusura.touched))\"  placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusura\"  bdiDatepicker #datepickerDC=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\" [minDate]=\"minDate\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDC.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataChiusura.value\"  class=\"input-group-append\" [class.is-invalid]=\"dataChiusura.invalid && form.submitted\" (click)=\"reset('dataChiusura')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusura.errors?.dateformat && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusura.errors?.daterange && (dataChiusura.dirty || dataChiusura.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #inputDataChiusura>\r\n                                    <input class=\"form-control\" [value]=\"getDataChiusuraValue()\" [readOnly]=\"true\"/>\r\n                                </ng-template>\r\n\r\n                            </div>\r\n\r\n\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-3\">\r\n                                    <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\" [disabled]=\"readonlyForm\">Indietro</button>\r\n                                </div>\r\n                                <div class=\"col-6\"></div>\r\n\r\n                                <div class=\"col-3\">\r\n                                    <button class=\"btn btn-block btn-primary\" type=\"submit\" [disabled]=\"readonlyForm\">Salva</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #waiting>\r\n        <gepa-spinning-loader></gepa-spinning-loader>\r\n    </ng-template>\r\n</div>\r\n\r\n<ng-template #confirmModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Si sta confermando l'inserimento. Procedere?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Conferma</button>\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: InserimentoContoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoContoRoutingModule", function() { return InserimentoContoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _inserimento_conto_step1_inserimento_conto_step1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inserimento-conto-step1/inserimento-conto-step1.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.ts");
/* harmony import */ var _inserimento_conto_step2_inserimento_conto_step2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserimento-conto-step2/inserimento-conto-step2.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.ts");
/* harmony import */ var _inserimento_conto_step3_inserimento_conto_step3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inserimento-conto-step3/inserimento-conto-step3.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.ts");
/* harmony import */ var _inserimento_conto_step4_inserimento_conto_step4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inserimento-conto-step4/inserimento-conto-step4.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.ts");









const routes = [
    {
        path: '',
        data: {
            title: 'Nuovo Conto',
        },
        children: [
            {
                path: 'step1',
                component: _inserimento_conto_step1_inserimento_conto_step1_component__WEBPACK_IMPORTED_MODULE_5__["InserimentoContoStep1Component"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'step2',
                component: _inserimento_conto_step2_inserimento_conto_step2_component__WEBPACK_IMPORTED_MODULE_6__["InserimentoContoStep2Component"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'step3',
                component: _inserimento_conto_step3_inserimento_conto_step3_component__WEBPACK_IMPORTED_MODULE_7__["InserimentoContoStep3Component"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            },
            {
                path: 'step4',
                component: _inserimento_conto_step4_inserimento_conto_step4_component__WEBPACK_IMPORTED_MODULE_8__["InserimentoContoStep4Component"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]],
            }
        ]
    }
];
let InserimentoContoRoutingModule = class InserimentoContoRoutingModule {
};
InserimentoContoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InserimentoContoRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9pbnNlcmltZW50by1jb250by9pbnNlcmltZW50by1jb250by1zdGVwMS9pbnNlcmltZW50by1jb250by1zdGVwMS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: InserimentoContoStep1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoContoStep1Component", function() { return InserimentoContoStep1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _parties_ricerca_parties_ricerca_parties_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../parties/ricerca-parties/ricerca-parties.component */ "./src/app/views/anagrafiche/parties/ricerca-parties/ricerca-parties.component.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
















let InserimentoContoStep1Component = class InserimentoContoStep1Component extends _parties_ricerca_parties_ricerca_parties_component__WEBPACK_IMPORTED_MODULE_13__["RicercaPartiesComponent"] {
    constructor(router, partyService, filialeService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, route, routingService) {
        super(router, partyService, filialeService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, route, routingService);
        this.router = router;
        this.partyService = partyService;
        this.filialeService = filialeService;
        this.securityService = securityService;
        this.userService = userService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.utils = utils;
        this.route = route;
        this.routingService = routingService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    manageNavigation() {
        this.route.queryParams.subscribe(params => {
            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step1');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step1');
            }
            else {
                this.setError();
            }
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            }
            else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }
    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            filiale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            mfiCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            catEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            dataAperturaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataAperturaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_14__["dateValidator"])([
                { field1: 'dataAperturaDa', field2: 'dataAperturaA' }
            ]) });
    }
    buildModel() {
        this.partyModel = {
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
        this.partyModel.gridOptions.api.sizeColumnsToFit();
        this.partyModel.gridOptions.onGridSizeChanged = evt => this.partyModel.gridOptions.api ? this.partyModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'BIC', field: 'bic', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TIPO', field: 'tipoParty.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'NOME', field: 'nome', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'ABI', field: 'defaultAbi', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'CATEGORIA ECONOMICA', field: 'categoriaEconomica', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INDICATORE RESIDENZA', field: 'indicatoreResidenza', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA APERTURA', field: 'dataApertura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA CHIUSURA', field: 'dataChiusura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_12__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        const selectButton = {
            label: 'Seleziona Party '.concat(data.bic),
            routerLink: this.buildRouterLinkStep2(),
            params: this.buildQueryParamStep2(data.id, true),
            enabled: true,
            sessionKey: this.CONTO_INSERT_SESSION
        };
        return {
            detailButton: null,
            modifyButton: null,
            deleteButton: null,
            selectButton: selectButton
        };
    }
    buildRsqlSearchString() {
        const rSQLArray = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bic.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipo.value, 'tipoParty'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.nome.value, 'nome'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.abi.value, 'defaultAbi'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.filiale.value, 'filialeRiferimento'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.mfiCode.value, 'mfiCode'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.indResidenza.value, 'indicatoreResidenza'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.catEconomica.value, 'categoriaEconomica'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    goToStep2() {
        const route = this.buildRouterLinkStep2();
        this.setSession(this.CONTO_INSERT_SESSION, this.buildQueryParamStep2(null, false));
        this.router.navigate([route], {});
    }
    buildRouterLinkStep2() {
        return this.inserimentoContoModel.prefixUrl.concat('step2');
    }
    buildQueryParamStep2(id, pressoBDI) {
        return {
            idParty: id,
            pressoBDI: pressoBDI,
            prefixUrl: this.inserimentoContoModel.prefixUrl,
            wizardSteps: this.inserimentoContoModel.wizardSteps
        };
        //Nel wizard mantengo i valori solo sull'indietro; sull'avanti l'utente deve rifare la scelta
        /*this.inserimentoContoModel.idParty = id;
        this.inserimentoContoModel.pressoBDI = pressoBDI;
        return this.inserimentoContoModel;*/
    }
    getSearcModel() {
        return this.partyService.insertContoSearchPartyModel;
    }
    setSearcModel(searchModel) {
        return this.partyService.insertContoSearchPartyModel = searchModel;
    }
};
InserimentoContoStep1Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_3__["Utils"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"] }
];
InserimentoContoStep1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-conto-step1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-conto-step1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-conto-step1.component.scss */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_3__["Utils"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"]])
], InserimentoContoStep1Component);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9pbnNlcmltZW50by1jb250by9pbnNlcmltZW50by1jb250by1zdGVwMi9pbnNlcmltZW50by1jb250by1zdGVwMi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: InserimentoContoStep2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoContoStep2Component", function() { return InserimentoContoStep2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../models/enum */ "./src/app/models/enum.ts");

















let InserimentoContoStep2Component = class InserimentoContoStep2Component extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_2__["AbstractContiComponent"] {
    constructor(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route) {
        super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
        this.router = router;
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
    }
    ngOnInit() {
        this.checkUserSpi();
        this.tipoContoform = this.formBuilder.group({
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
        });
        this.route.queryParams.subscribe(params => {
            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                if (!!this.inserimentoContoModel.idParty) {
                    this.loadSections(this.inserimentoContoModel.idParty);
                }
                else {
                    this.buildTipoContoSection();
                }
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step2');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step2');
                if (!!this.inserimentoContoModel && this.inserimentoContoModel.tipoConto) {
                    return this.tipoContoform.get('tipoConto').setValue(this.inserimentoContoModel.tipoConto);
                }
            }
            else {
                this.setError();
            }
        });
    }
    get tipoConto() { return this.tipoContoform.get('tipoConto'); }
    loadSections(idParty) {
        this.showSpinner();
        this.partyService.getParty(idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
            this.party = res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
            this.buildPartySection();
            this.buildTipoContoSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
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
    buildTipoContoSection() {
        if (!!this.party) {
            this.contoService.getTipiConto(this.party.tipoParty.codice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.tipiConto = res)).subscribe();
        }
        else {
            this.tipiConto = this.buildTipoContoDCAOrCBorSubAccount();
        }
    }
    onSubmit() {
        if (this.tipoContoform.valid) {
            this.inserimentoContoModel.tipoConto = this.tipoConto.value;
            if (this.inserimentoContoModel.tipoConto == _models_enum__WEBPACK_IMPORTED_MODULE_16__["TipoContoEnum"].RTGS_SA) {
                this.goToStep3();
            }
            else {
                this.goToStep4();
            }
        }
    }
    goToStep3() {
        const route = this.inserimentoContoModel.prefixUrl.concat('step3');
        this.setSession(this.CONTO_INSERT_SESSION, this.inserimentoContoModel);
        this.router.navigate([route], {});
    }
    goToStep4() {
        const route = this.inserimentoContoModel.prefixUrl.concat('step4');
        this.setSession(this.CONTO_INSERT_SESSION, this.inserimentoContoModel);
        this.router.navigate([route], {});
    }
};
InserimentoContoStep2Component.ctorParameters = () => [
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
InserimentoContoStep2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-conto-step2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-conto-step2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-conto-step2.component.scss */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.scss")).default]
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
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], InserimentoContoStep2Component);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9pbnNlcmltZW50by1jb250by9pbnNlcmltZW50by1jb250by1zdGVwMy9pbnNlcmltZW50by1jb250by1zdGVwMy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: InserimentoContoStep3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoContoStep3Component", function() { return InserimentoContoStep3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ricerca_conti_ricerca_conti_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ricerca-conti/ricerca-conti.component */ "./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");


















let InserimentoContoStep3Component = class InserimentoContoStep3Component extends _ricerca_conti_ricerca_conti_component__WEBPACK_IMPORTED_MODULE_2__["RicercaContiComponent"] {
    constructor(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route) {
        super(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route);
        this.router = router;
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
    }
    ngOnInit() {
        this.buildCombo();
        this.checkUserSpi();
        this.manageNavigation();
    }
    manageNavigation() {
        this.route.queryParams.subscribe(params => {
            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                this.tipiContoDCA_CB = this.buildTipoContoDCAOrCB();
                this.buildForm();
                this.buildModel();
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step3');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step3');
            }
            else {
                this.setError();
            }
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_16__["get"])(params, this.BACK) && !!this.getSearcModel()) {
                this.ricercaForm.setValue(this.getSearcModel().form);
                this.submit(null, false);
            }
            else {
                this.setSearcModel(this.initSearchModel());
            }
        });
    }
    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            bicParty: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipoParty: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            nomeParty: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            targetService: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            idConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            defaultMCA: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            flagPressoBDI: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]((!!this.inserimentoContoModel.pressoBDI ? 1 : 0), []),
            flagInserimentoManuale: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            catEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            filiale: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            dataAperturaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            dataAperturaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            dataChiusuraDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            dataChiusuraA: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_17__["dateValidator"])([
                { field1: 'dataAperturaDa', field2: 'dataAperturaA' },
                { field1: 'dataChiusuraDa', field2: 'dataChiusuraA' },
                { field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA' },
                { field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA' }
            ]) });
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
            { colId: ('id_' + order++), headerName: 'ID_CONTO', field: 'id', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TARGET SERVICE', field: 'targetService', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'TIPO CONTO', field: 'tipoConto.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'BIC PARTY', field: 'bicParty', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'NOME PARTY', field: 'nomeParty', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DEFAULT MCA', field: 'mcaDefFlag', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.getBooleanAsString(data.data, 'mcaDefFlag'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'PRESSO BDI', field: 'pressoBDI', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.getBooleanAsString(data.data, 'pressoBDI'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA APERTURA', field: 'dataApertura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA CHIUSURA', field: 'dataChiusura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_14__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        this.inserimentoContoModel.contoDCAPadre = data.id;
        const selectButton = {
            label: 'Seleziona Conto '.concat(data.nunmeroConto),
            routerLink: this.inserimentoContoModel.prefixUrl.concat('step4'),
            params: this.inserimentoContoModel,
            enabled: true,
            sessionKey: this.CONTO_INSERT_SESSION
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
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicParty.value, 'bicParty'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoParty.value, 'tipoParty'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.nomeParty.value, 'nomeParty '));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicConto.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.targetService.value, 'targetService'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.idConto.value, 'numeroConto'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.abi.value, 'abi'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoConto.value, 'tipoConto'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.formatterUtils.getStringAsBoolean(this.defaultMCA.value), 'mcaDefFlag'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.flagPressoBDI.value, 'pressoBdi'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.formatterUtils.getStringAsBoolean(this.flagInserimentoManuale.value), 'flgMan'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.filiale.value, 'filialeRiferimento'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.indResidenza.value, 'effIndicatoreRes'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.catEconomica.value, 'effCatEconomica'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataChiusuraDa.value), this.formatterUtils.dateToString(this.dataChiusuraA.value), 'dataChiusura'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString({ day: today.getUTCDate(), month: (today.getUTCMonth() + 1), year: today.getFullYear() }), this.formatterUtils.dateToString({ day: 31, month: 12, year: 9999 }), 'validTo'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    getTipoContoValue() {
        return this.tipiConto.find(f => f.codice == this.tipoConto.value).descrizione;
    }
    getPressoBDIValue() {
        const val = (!!this.inserimentoContoModel.pressoBDI ? _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoFlagEnum"].SI : _models_enum__WEBPACK_IMPORTED_MODULE_15__["TipoFlagEnum"].NO);
        return this.tipiPressoBDI.find(t => t.codice == val).descrizione;
    }
    getSearcModel() {
        return this.contoService.insertContosearchContoPadreModel;
    }
    setSearcModel(searchModel) {
        return this.contoService.insertContosearchContoPadreModel = searchModel;
    }
};
InserimentoContoStep3Component.ctorParameters = () => [
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
InserimentoContoStep3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-conto-step3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-conto-step3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-conto-step3.component.scss */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.scss")).default]
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
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], InserimentoContoStep3Component);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9pbnNlcmltZW50by1jb250by9pbnNlcmltZW50by1jb250by1zdGVwNC9pbnNlcmltZW50by1jb250by1zdGVwNC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: InserimentoContoStep4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoContoStep4Component", function() { return InserimentoContoStep4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");




















let InserimentoContoStep4Component = class InserimentoContoStep4Component extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_2__["AbstractContiComponent"] {
    constructor(router, partyService, filialeService, contoService, securityService, userService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route, modalService, taskService) {
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
        this.modalService = modalService;
        this.taskService = taskService;
        this.util = utils;
    }
    ngOnInit() {
        this.checkUserSpi();
        this.route.queryParams.subscribe(params => {
            const inserimentoContoSessionObj = this.getSession(this.CONTO_INSERT_SESSION);
            if (!!inserimentoContoSessionObj) {
                this.inserimentoContoModel = inserimentoContoSessionObj;
                this.buildCombo();
                this.loadSections();
                this.inserimentoContoModel.wizardSteps = this.setStepForInsertConto(this.inserimentoContoModel, 'step4');
                this.backUrl = this.getBackUrlForInsertConto(this.inserimentoContoModel, 'step4');
            }
            else {
                this.setError();
            }
        });
    }
    loadSections() {
        this.showSpinner();
        const calls = [];
        if (!!this.inserimentoContoModel.idParty) {
            const getPartyProprietario = this.partyService.getParty(this.inserimentoContoModel.idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.partyProprietario = res));
            calls.push(getPartyProprietario);
        }
        if (!!this.inserimentoContoModel.contoDCAPadre) {
            const getContoDCAPadre = this.contiService.getConto(this.inserimentoContoModel.contoDCAPadre).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.contoDCAPadre = res));
            calls.push(getContoDCAPadre);
        }
        if (!!calls && calls.length) {
            const getTipiConto = this.contiService.getTipiConto().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.tipiConto = res));
            calls.push(getTipiConto);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["forkJoin"])(calls).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
                this.buildPartyProprietarioSection();
                this.buildContoDCAPadreSection();
                this.buildForm();
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
                console.log('Error - loadSections', error);
                this.setError();
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
            })).subscribe();
        }
        else {
            this.contiService.getTipiConto().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => this.tipiConto = res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
                this.buildForm();
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
                console.log('Error - loadSections', error);
                this.setError();
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
            })).subscribe();
        }
    }
    buildPartyProprietarioSection() {
        if (!!this.partyProprietario) {
            const data = [
                [this.buildInfoPanelElement('Party Bic', 'string', this.partyProprietario, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.partyProprietario, 'tipoParty.descrizione')],
                [this.buildInfoPanelElement('Nome Party', 'string', this.partyProprietario, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.partyProprietario, 'defaultAbi')],
                [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.partyProprietario, 'filialeRiferimento.descrizione'), this.buildInfoPanelElement('MFI COde', 'string', this.partyProprietario, 'mfiCode')],
                [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.partyProprietario, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.partyProprietario, 'categoriaEconomica')],
                [this.buildInfoPanelElement('Data Apertura Party', 'date', this.partyProprietario, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura Party', 'date', this.partyProprietario, 'dataChiusura')],
                [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.partyProprietario, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.partyProprietario, 'validTo')],
                [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.partyProprietario, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.partyProprietario, 'utenteValidazione')]
            ];
            this.infoPanelPartyModel = {
                columnNumber: 2,
                data: data
            };
        }
    }
    buildContoDCAPadreSection() {
        if (!!this.contoDCAPadre) {
            const data = [
                [this.buildInfoPanelElement('Bic', 'string', this.contoDCAPadre, 'bic'), this.buildInfoPanelElement('Target Service', 'string', this.contoDCAPadre, 'targetService')],
                [this.buildInfoPanelElement('Account Id', 'string', this.contoDCAPadre, 'numeroConto'), this.buildInfoPanelElement('ABI', 'string', this.contoDCAPadre, 'abi')],
                [this.buildInfoPanelElement('Tipo Conto', 'string', this.contoDCAPadre, 'tipoConto.descrizione'), this.buildInfoPanelElement('Descrizione', 'string', this.contoDCAPadre, 'descrizione')],
                [this.buildInfoPanelElement('Default MCA', 'boolean', this.contoDCAPadre, 'mcaDefFlag'), this.buildInfoPanelElement('Presso BDI', 'boolean', this.contoDCAPadre, 'pressoBDI')],
                [this.buildInfoPanelElement('Flag Inserimento Manuale', 'boolean', this.contoDCAPadre, 'flgMan'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.contoDCAPadre, 'indicatoreResidenza')],
                [this.buildInfoPanelElement('Categoria Economica', 'string', this.contoDCAPadre, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.contoDCAPadre, 'dataApertura')],
                [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.contoDCAPadre, 'dataChiusura'), this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.contoDCAPadre, 'validFrom')],
                [this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.contoDCAPadre, 'validTo'), this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.contoDCAPadre, 'utenteRichiesta')],
                [this.buildInfoPanelElement('Utente Approvatore', 'string', this.contoDCAPadre, 'utenteValidazione'), {}]
            ];
            this.infoPanelContoModel = {
                columnNumber: 2,
                data: data
            };
        }
    }
    buildForm() {
        /*this.contiService.getTipiConto().pipe(
            tap( res => this.tipiConto = res)
        ).subscribe( res => {*/
        if (!!this.partyProprietario) {
            const da = new Date(this.partyProprietario.dataApertura);
            const dc = new Date(this.partyProprietario.dataChiusura);
            this.minDate = { day: da.getUTCDate(), month: (da.getUTCMonth() + 1), year: da.getFullYear() };
            this.maxDate = { day: dc.getUTCDate(), month: (dc.getUTCMonth() + 1), year: dc.getFullYear() };
        }
        this.inserimentoForm = this.formBuilder.group({
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.requiredBicValidator.bind(this), this.bicValidator.bind(this)]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.inserimentoContoModel.tipoConto, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            idConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]((!!this.partyProprietario ? this.partyProprietario.defaultAbi : null), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            targetService: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            defaultMCA: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [this.defaultMCAValueValidator.bind(this)]),
            flagPressoBDI: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]((!!this.inserimentoContoModel.pressoBDI ? 1 : 0), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            flagInserimentoManuale: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            dataApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            dataChiusura: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, []),
            indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]((!!this.partyProprietario ? this.partyProprietario.indicatoreResidenza : null), []),
            catEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]((!!this.partyProprietario ? this.partyProprietario.categoriaEconomica : null), []),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_19__["dateValidator"])([
                { field1: 'dataApertura', minDate1: this.minDate, maxDate1: this.maxDate, field2: 'dataChiusura' }
            ]) });
        this.inserimentoForm.get('targetService').setValue(this.tipiConto.find(t => t.codice == this.inserimentoContoModel.tipoConto).targetService);
        //});
    }
    requiredBicValidator(control) {
        if (!!this.inserimentoForm &&
            !this.checkContoIsSubAccountByTipoCod(this.inserimentoContoModel.tipoConto) &&
            !this.inserimentoForm.get('bicConto').value) {
            return { 'bicReq': true };
        }
        return null;
    }
    defaultMCAValueValidator(control) {
        if (!!this.inserimentoForm &&
            this.checkTipoConto() &&
            !this.inserimentoForm.get('defaultMCA').value) {
            return { 'value': true };
        }
        return null;
    }
    get bicConto() { return this.inserimentoForm.get('bicConto'); }
    get targetService() { return this.inserimentoForm.get('targetService'); }
    get descrizione() { return this.inserimentoForm.get('descrizione'); }
    get idConto() { return this.inserimentoForm.get('idConto'); }
    get abi() { return this.inserimentoForm.get('abi'); }
    get tipoConto() { return this.inserimentoForm.get('tipoConto'); }
    get defaultMCA() { return this.inserimentoForm.get('defaultMCA'); }
    get flagPressoBDI() { return this.inserimentoForm.get('flagPressoBDI'); }
    get flagInserimentoManuale() { return this.inserimentoForm.get('flagInserimentoManuale'); }
    get indResidenza() { return this.inserimentoForm.get('indResidenza'); }
    get catEconomica() { return this.inserimentoForm.get('catEconomica'); }
    get dataApertura() { return this.inserimentoForm.get('dataApertura'); }
    get dataChiusura() { return this.inserimentoForm.get('dataChiusura'); }
    reset(field) {
        this.inserimentoForm.get(field).setValue(null);
    }
    checkTipoConto() {
        return (this.tipoConto.value == 'CLM_MCA' || this.tipoConto.value == 'CLM_CB');
    }
    getTipoValue() {
        return this.tipiConto.find(t => t.codice == this.tipoConto.value).descrizione;
    }
    getPressoBDIValue() {
        const val = (!!this.inserimentoContoModel.pressoBDI ? _models_enum__WEBPACK_IMPORTED_MODULE_16__["TipoFlagEnum"].SI : _models_enum__WEBPACK_IMPORTED_MODULE_16__["TipoFlagEnum"].NO);
        return this.tipiPressoBDI.find(t => t.codice == val).descrizione;
    }
    getTargetServiceValue() {
        if (!!this.targetService.value) {
            return this.tipiTargetService.find(t => t.codice == this.targetService.value).descrizione;
        }
    }
    getFlagInserimentoManualeValue() {
        const val = _models_enum__WEBPACK_IMPORTED_MODULE_16__["TipoFlagEnum"].NO;
        return this.tipiPressoBDI.find(t => t.codice == val).descrizione;
    }
    getDataAperturaValue() {
        return this.formatterUtils.dateToString(this.dataApertura.value);
    }
    getDataChiusuraValue() {
        return this.formatterUtils.dateToString(this.dataChiusura.value);
    }
    openModal() {
        if (!!this.inserimentoForm.valid) {
            this.confirmModalReference = this.modalService.open(this.confirmModal);
        }
    }
    closeModal() {
        this.confirmModalReference.close();
    }
    confirm() {
        this.confirmModalReference.close();
        this.saveConto();
    }
    saveConto() {
        this.resetError();
        this.showSpinner();
        const taskConto = this.buildTaskConto();
        this.taskService.saveTaskConto(taskConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
            this.isResultOk = true;
            const d = new Date(res.dataChiusura);
            this.inserimentoForm.get('dataChiusura').setValue({ year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() });
            this.hideSpinner();
            this.readonlyForm = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
            console.log('Error - saveConto', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
        })).subscribe();
    }
    buildTaskConto() {
        //NB: i campi categoriaEconomica, indicatoreResidenza, flgMan sono valorizzati lato BE
        return {
            operazione: {
                codice: _models_enum__WEBPACK_IMPORTED_MODULE_16__["TipoOperazioneEnum"].INS
            },
            abi: this.abi.value,
            bic: this.bicConto.value,
            bicParty: (!!this.partyProprietario ? this.partyProprietario.bic : null),
            categoriaEconomica: null,
            descrizione: this.descrizione.value,
            flgMan: null,
            indicatoreResidenza: null,
            mcaDefFlag: (!!this.defaultMCA.value ? ((this.defaultMCA.value == _models_enum__WEBPACK_IMPORTED_MODULE_16__["TipoFlagEnum"].SI) ? true : false) : null),
            numeroConto: this.idConto.value,
            pressoBdi: this.inserimentoContoModel.pressoBDI,
            subParBicDca: (!!this.contoDCAPadre ? this.contoDCAPadre.bic : null),
            subParTsDca: (!!this.contoDCAPadre ? this.contoDCAPadre.targetService : null),
            targetService: this.targetService.value,
            tipoConto: {
                codice: this.tipoConto.value
            },
            tipoParty: (!!this.partyProprietario ? this.partyProprietario.tipoParty : null),
            dataApertura: this.formatterUtils.dateToString(this.dataApertura.value),
            dataChiusura: this.formatterUtils.dateToString((!!this.dataChiusura.value ? this.dataChiusura.value : { year: 9999, month: 12, day: 31 }))
        };
    }
};
InserimentoContoStep4Component.ctorParameters = () => [
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
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_17__["ModalService"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_18__["TaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmModal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], InserimentoContoStep4Component.prototype, "confirmModal", void 0);
InserimentoContoStep4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inserimento-conto-step4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inserimento-conto-step4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inserimento-conto-step4.component.scss */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.scss")).default]
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
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_17__["ModalService"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_18__["TaskService"]])
], InserimentoContoStep4Component);



/***/ }),

/***/ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto.module.ts ***!
  \***************************************************************************************/
/*! exports provided: InserimentoContoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoContoModule", function() { return InserimentoContoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inserimento_conto_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inserimento-conto-routing.module */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-routing.module.ts");
/* harmony import */ var _inserimento_conto_step1_inserimento_conto_step1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inserimento-conto-step1/inserimento-conto-step1.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component.ts");
/* harmony import */ var _inserimento_conto_step2_inserimento_conto_step2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inserimento-conto-step2/inserimento-conto-step2.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component.ts");
/* harmony import */ var _inserimento_conto_step3_inserimento_conto_step3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserimento-conto-step3/inserimento-conto-step3.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component.ts");
/* harmony import */ var _inserimento_conto_step4_inserimento_conto_step4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inserimento-conto-step4/inserimento-conto-step4.component */ "./src/app/views/anagrafiche/conti/inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
















let InserimentoContoModule = class InserimentoContoModule {
};
InserimentoContoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inserimento_conto_step1_inserimento_conto_step1_component__WEBPACK_IMPORTED_MODULE_4__["InserimentoContoStep1Component"], _inserimento_conto_step2_inserimento_conto_step2_component__WEBPACK_IMPORTED_MODULE_5__["InserimentoContoStep2Component"], _inserimento_conto_step3_inserimento_conto_step3_component__WEBPACK_IMPORTED_MODULE_6__["InserimentoContoStep3Component"], _inserimento_conto_step4_inserimento_conto_step4_component__WEBPACK_IMPORTED_MODULE_7__["InserimentoContoStep4Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_8__["GepaGuiCommonModule"],
            _inserimento_conto_routing_module__WEBPACK_IMPORTED_MODULE_3__["InserimentoContoRoutingModule"],
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
            _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_14__["GenericActionRenderModule"]
        ]
    })
], InserimentoContoModule);



/***/ })

}]);
//# sourceMappingURL=default~conti-inserimento-conto-inserimento-conto-module~inserimento-conto-inserimento-conto-module.js.map