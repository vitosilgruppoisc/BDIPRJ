(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~conti-conti-module~conti-inserimento-conto-inserimento-conto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fa fa-users\"></i> Anagrafica Conto </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"row mb-2\" *ngIf=\"userIsSpi\">\r\n                    <div class=\"col-2\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"goToInsertConto()\">Nuovo Conto</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"bicParty\" class=\"col-2 col-form-label\">Bic Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicParty\" class=\"form-control\" [class.is-invalid]=\"bicParty.invalid && (bicParty.dirty || bicParty.touched)\" formControlName=\"bicParty\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicParty.errors?.wildcard && (bicParty.dirty || bicParty.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicParty.errors?.syntax && (bicParty.dirty || bicParty.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"tipoParty\" class=\"col-2 col-form-label\">Tipo Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipoParty\" class=\"form-control\" [class.is-invalid]=\"tipoParty.invalid && (tipoParty.dirty || tipoParty.touched)\" formControlName=\"tipoParty\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiParty\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nomeParty\" class=\"col-2 col-form-label\">Nome Party:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"nomeParty\" class=\"form-control\" [class.is-invalid]=\"nomeParty.invalid && (nomeParty.dirty || nomeParty.touched)\" formControlName=\"nomeParty\" maxlength=\"4000\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"nomeParty.errors?.wildcard && (nomeParty.dirty || nomeParty.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"bicConto\" class=\"col-2 col-form-label\">Bic Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"bicConto\" class=\"form-control\" [class.is-invalid]=\"bicConto.invalid && (bicConto.dirty || bicConto.touched)\" formControlName=\"bicConto\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"bicConto.errors?.wildcard && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"bicConto.errors?.syntax && (bicConto.dirty || bicConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo sintatticamente non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"targetService\" class=\"col-2 col-form-label\">Target Service:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"targetService\" class=\"form-control\" [class.is-invalid]=\"targetService.invalid && (targetService.dirty || targetService.touched)\" formControlName=\"targetService\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiTargetService\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"idConto\" class=\"col-2 col-form-label\">Account Id:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"idConto\" class=\"form-control\" [class.is-invalid]=\"idConto.invalid && (idConto.dirty || idConto.touched)\" formControlName=\"idConto\" maxlength=\"34\">\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"idConto.errors?.wildcard && (idConto.dirty || idConto.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"abi\" class=\"col-2 col-form-label\">Abi:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"abi\" class=\"form-control\" [class.is-invalid]=\"abi.invalid && (abi.dirty || abi.touched)\" formControlName=\"abi\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"abi.errors?.wildcard && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"abi.errors?.pattern && (abi.dirty || abi.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"tipoConto\" class=\"col-2 col-form-label\">Tipo Conto:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipoConto\" class=\"form-control\" [class.is-invalid]=\"tipoConto.invalid && (tipoConto.dirty || tipoConto.touched)\" formControlName=\"tipoConto\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiConto\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"defaultMCA\" class=\"col-2 col-form-label\">Default MCA:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"defaultMCA\" class=\"form-control\" [class.is-invalid]=\"defaultMCA.invalid && (defaultMCA.dirty || defaultMCA.touched)\" formControlName=\"defaultMCA\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiDefaultMCA\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"flagPressoBDI\" class=\"col-2 col-form-label\">Presso BDI:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"flagPressoBDI\" class=\"form-control\" [class.is-invalid]=\"flagPressoBDI.invalid && (flagPressoBDI.dirty || flagPressoBDI.touched)\" formControlName=\"flagPressoBDI\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiPressoBDI\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"flagInserimentoManuale\" class=\"col-2 col-form-label\">Flag Inserimento Manuale:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"flagInserimentoManuale\" class=\"form-control\" [class.is-invalid]=\"flagInserimentoManuale.invalid && (flagInserimentoManuale.dirty || flagInserimentoManuale.touched)\" formControlName=\"flagInserimentoManuale\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiManuale\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"filiale\" class=\"col-2 col-form-label\">Filiale:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"filiale\" class=\"form-control\" [class.is-invalid]=\"filiale.invalid && (filiale.dirty || filiale.touched)\" formControlName=\"filiale\">\r\n                                <option [ngValue]=\"null\">Tutte</option>\r\n                                <option *ngFor=\"let f of filialiRiferimento\" [value]=\"f.codice\">{{f.sigla}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"indResidenza\" class=\"col-2 col-form-label\">Indicatore di Residenza:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"indResidenza\" class=\"form-control\" [class.is-invalid]=\"indResidenza.invalid && (indResidenza.dirty || indResidenza.touched)\" formControlName=\"indResidenza\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"indResidenza.errors?.wildcard && (indResidenza.dirty || indResidenza.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"indResidenza.errors?.pattern && (indResidenza.dirty || indResidenza.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"catEconomica\" class=\"col-2 col-form-label\">Categoria Economica:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"catEconomica\" class=\"form-control\" [class.is-invalid]=\"catEconomica.invalid && (catEconomica.dirty || catEconomica.touched)\" formControlName=\"catEconomica\" maxlength=\"5\" [pattern]=\"'^[0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"catEconomica.errors?.wildcard && (catEconomica.dirty || catEconomica.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"catEconomica.errors?.pattern && (catEconomica.dirty || catEconomica.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Apertura-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Apertura:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataAperturaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataAperturaDa\" class=\"form-control\" [class.is-invalid]=\"dataAperturaDa.invalid && (dataAperturaDa.dirty || dataAperturaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaDa\"  bdiDatepicker #datepickerDAda=\"bdiDatepicker\" maxlength=\"10\"  style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataAperturaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataAperturaDa.errors?.dateformat && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataAperturaDa.errors?.daterange && (dataAperturaDa.dirty || dataAperturaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataAperturaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataAperturaA\" class=\"form-control\" [class.is-invalid]=\"dataAperturaA.invalid && (dataAperturaA.dirty || dataAperturaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataAperturaA\"  bdiDatepicker #datepickerDAa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataAperturaA.value\"  class=\"input-group-append\" (click)=\"reset('dataAperturaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataAperturaA.errors?.dateformat && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataAperturaA.errors?.daterange && (dataAperturaA.dirty || dataAperturaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Chiusura-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Chiusura:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataChiusuraDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataChiusuraDa\" class=\"form-control\" [class.is-invalid]=\"dataChiusuraDa.invalid && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusuraDa\"  bdiDatepicker #datepickerDCda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDCda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataChiusuraDa.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusuraDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataChiusuraDa.errors?.dateformat && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusuraDa.errors?.daterange && (dataChiusuraDa.dirty || dataChiusuraDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataChiusuraA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataChiusuraA\" class=\"form-control\" [class.is-invalid]=\"dataChiusuraA.invalid && (dataChiusuraA.dirty || dataChiusuraA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataChiusuraA\"  bdiDatepicker #datepickerDCa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDCa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataChiusuraA.value\"  class=\"input-group-append\" (click)=\"reset('dataChiusuraA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataChiusuraA.errors?.dateformat && (dataChiusuraA.dirty || dataChiusuraA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataChiusuraA.errors?.daterange && (dataChiusuraA.dirty || dataChiusuraA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Inizio Validita-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Inizio Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaDa.invalid && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaDa\"  bdiDatepicker #datepickerDIVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.dateformat && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaDa.errors?.daterange && (dataInizioValiditaDa.dirty || dataInizioValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataInizioValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataInizioValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataInizioValiditaA.invalid && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataInizioValiditaA\"  bdiDatepicker #datepickerDIVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDIVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataInizioValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataInizioValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.dateformat && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataInizioValiditaA.errors?.daterange && (dataInizioValiditaA.dirty || dataInizioValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Fine Validità:-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Fine Validità:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaDa\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaDa.invalid && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaDa\"  bdiDatepicker #datepickerDFVda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.dateformat && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaDa.errors?.daterange && (dataFineValiditaDa.dirty || dataFineValiditaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataFineValiditaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataFineValiditaA\" class=\"form-control\" [class.is-invalid]=\"dataFineValiditaA.invalid && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataFineValiditaA\"  bdiDatepicker #datepickerDFVa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDFVa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataFineValiditaA.value\"  class=\"input-group-append\" (click)=\"reset('dataFineValiditaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.dateformat && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataFineValiditaA.errors?.daterange && (dataFineValiditaA.dirty || dataFineValiditaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteInserimento\" class=\"col-2 col-form-label\">Utente Inserimento:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteInserimento\" class=\"form-control\" [class.is-invalid]=\"utenteInserimento.invalid && (utenteInserimento.dirty || utenteInserimento.touched)\" formControlName=\"utenteInserimento\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteInserimento.errors?.wildcard && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteInserimento.errors?.pattern && (utenteInserimento.dirty || utenteInserimento.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteApprovatore\" class=\"col-2 col-form-label\">Utente Approvatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteApprovatore\" class=\"form-control\" [class.is-invalid]=\"utenteApprovatore.invalid && (utenteApprovatore.dirty || utenteApprovatore.touched)\" formControlName=\"utenteApprovatore\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.wildcard && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteApprovatore.errors?.pattern && (utenteApprovatore.dirty || utenteApprovatore.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target, true)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"contoModel\" (action)=\"onActionEvent($event)\" (colToDisplay)=\"onColToDisplayEvent($event, this.contoService.searchModel)\" (paginationChanged)=\"onPaginationEvent($event, this.contoService.searchModel)\" (sortChanged)=\"onSortEvent($event, this.contoService.searchModel)\" (filterChanged)=\"onFilterEvent($event, this.contoService.searchModel)\"></app-generic-table>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\" >\r\n        <span class=\"input-group-text\" >\r\n            <i class=\"fas fa-info-circle\"></i>\r\n        </span>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n");

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

/***/ "./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9jb250aS9yaWNlcmNhLWNvbnRpL3JpY2VyY2EtY29udGkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RicercaContiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicercaContiComponent", function() { return RicercaContiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_party_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/party.service */ "./src/app/services/party.service.ts");
/* harmony import */ var _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/filiale.service */ "./src/app/services/filiale.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _abstract_conti_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../abstract-conti.component */ "./src/app/views/anagrafiche/conti/abstract-conti.component.ts");
/* harmony import */ var _services_conto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/conto.service */ "./src/app/services/conto.service.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");



















let RicercaContiComponent = class RicercaContiComponent extends _abstract_conti_component__WEBPACK_IMPORTED_MODULE_11__["AbstractContiComponent"] {
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
        /*
        this.urlToManage = [
            {value: this.routingService.getRouteByKey(this.routingService.CONTO_DETAIL)},
            {value: this.routingService.getRouteByKey(this.routingService.CONTO_MODIFY)},
            {value: this.routingService.getRouteByKey(this.routingService.CONTO_DELETE)}];
        this.routingService.getPreviousUrl().pipe(
            tap (previousUrl => {
                console.log('PreviousUrl' + previousUrl);
                if (!!this.contoService.searchModel && this.urlToManage.some( u => u.value === previousUrl)) {
                    if (!!this.contoService.searchModel && this.contoService.searchModel.form) {
                        this.ricercaForm.setValue(this.contoService.searchModel.form);
                    }
                    this.submit(null, false);
                } else {
                    this.contoService.searchModel = this.initSearchModel();
                }
            })
        ).subscribe();
        */
        this.route.queryParams.subscribe(params => {
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_17__["get"])(params, this.BACK) && !!this.getSearcModel()) {
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
            bicParty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            tipoParty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            nomeParty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            bicConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this), this.bicValidator.bind(this)]),
            targetService: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            idConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            abi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            tipoConto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            defaultMCA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            flagPressoBDI: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            flagInserimentoManuale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            catEconomica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            filiale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataAperturaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataAperturaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataChiusuraDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataChiusuraA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataInizioValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataInizioValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataFineValiditaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataFineValiditaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            utenteInserimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            utenteApprovatore: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_18__["dateValidator"])([
                { field1: 'dataAperturaDa', field2: 'dataAperturaA' },
                { field1: 'dataChiusuraDa', field2: 'dataChiusuraA' },
                { field1: 'dataInizioValiditaDa', field2: 'dataInizioValiditaA' },
                { field1: 'dataFineValiditaDa', field2: 'dataFineValiditaA' }
            ]) });
    }
    get bicParty() { return this.ricercaForm.get('bicParty'); }
    get tipoParty() { return this.ricercaForm.get('tipoParty'); }
    get nomeParty() { return this.ricercaForm.get('nomeParty'); }
    get bicConto() { return this.ricercaForm.get('bicConto'); }
    get targetService() { return this.ricercaForm.get('targetService'); }
    get idConto() { return this.ricercaForm.get('idConto'); }
    get abi() { return this.ricercaForm.get('abi'); }
    get tipoConto() { return this.ricercaForm.get('tipoConto'); }
    get defaultMCA() { return this.ricercaForm.get('defaultMCA'); }
    get flagPressoBDI() { return this.ricercaForm.get('flagPressoBDI'); }
    get flagInserimentoManuale() { return this.ricercaForm.get('flagInserimentoManuale'); }
    get indResidenza() { return this.ricercaForm.get('indResidenza'); }
    get catEconomica() { return this.ricercaForm.get('catEconomica'); }
    get filiale() { return this.ricercaForm.get('filiale'); }
    get dataAperturaDa() { return this.ricercaForm.get('dataAperturaDa'); }
    get dataAperturaA() { return this.ricercaForm.get('dataAperturaA'); }
    get dataChiusuraDa() { return this.ricercaForm.get('dataChiusuraDa'); }
    get dataChiusuraA() { return this.ricercaForm.get('dataChiusuraA'); }
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
            enableCsvExport: true,
            enablePdfExport: true,
            enableColumnSelection: true,
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
            { colId: ('id_' + order++), headerName: 'BIC PARTY', field: 'bicParty', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'NOME PARTY', field: 'nomeParty', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DEFAULT MCA', field: 'mcaDefFlag', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.getBooleanAsString(data.data, 'mcaDefFlag'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'PRESSO BDI', field: 'pressoBdi', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.getBooleanAsString(data.data, 'pressoBdi'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FLAG INSERIMENTO MANUALE', field: 'flgMan', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.getBooleanAsString(data.data, 'flgMan'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA APERTURA', field: 'dataApertura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataApertura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA CHIUSURA', field: 'dataChiusura', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'dataChiusura'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'INIZIO VALIDITA\'', field: 'validFrom', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validFrom'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'FINE VALIDITA\'', field: 'validTo', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDate(data.data, 'validTo'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_13__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        let detailButton = null;
        if (this.userIsSpi || this.userIsBil || this.userIsVis) {
            detailButton = {
                label: 'Visualizza dettaglio Conto '.concat(data.numeroConto),
                routerLink: '/anagrafiche/conti/dettaglio',
                params: { idConto: data.id, backUrl: this.routingService.CONTI_SEARCH },
                enabled: true,
                sessionKey: this.routingService.CONTO_DETAIL
            };
        }
        let modifyButton = null;
        let deleteButton = null;
        if (this.userIsBil && this.isContoActive(data)) {
            modifyButton = {
                label: 'Modifica Conto '.concat(data.bic),
                routerLink: '/anagrafiche/conti/modifica',
                params: { idConto: data.id, backUrl: this.routingService.CONTI_SEARCH },
                enabled: true,
                sessionKey: this.routingService.CONTO_MODIFY
            };
        }
        if (this.userIsSpi && this.isContoActive(data)) {
            modifyButton = {
                label: 'Modifica Conto '.concat(data.bic),
                routerLink: '/anagrafiche/conti/modifica',
                params: { idConto: data.id, backUrl: this.routingService.CONTI_SEARCH },
                enabled: true,
                sessionKey: this.routingService.CONTO_MODIFY
            };
            deleteButton = {
                label: 'Elimina Conto '.concat(data.bic),
                routerLink: '/anagrafiche/conti/eliminazione-logica',
                params: { idConto: data.id, backUrl: this.routingService.CONTI_SEARCH },
                enabled: true,
                sessionKey: this.routingService.CONTO_DELETE
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
        this.contoModel.rowData = [];
        this.contoModel.enableMessageOnSizeResultLimit = false;
        this.manageSearchModel(this.contoModel, this.getSearcModel(), resetPage);
        if (!!this.ricercaForm.valid) {
            this.showSpinner();
            if (!this.getSearcModel()) {
                this.setSearcModel(this.initSearchModel());
            }
            this.getSearcModel().form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();
            this.contoService.getConti(searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(res => {
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
                if (!!targetEl) {
                    this.scrollToResult(targetEl);
                }
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])((error) => {
                console.log('Error - submit', error);
                this.showTable = false;
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
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
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicParty.value, 'bicParty'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoParty.value, 'tipoParty'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.nomeParty.value, 'nomeParty '));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.bicConto.value, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.targetService.value, 'targetService'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.idConto.value, 'numeroConto'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.abi.value, 'abi'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoConto.value, 'tipoConto'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.formatterUtils.getStringAsBoolean(this.defaultMCA.value), 'mcaDefFlag'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.formatterUtils.getStringAsBoolean(this.flagPressoBDI.value), 'pressoBdi'));
        rSQLArray.push(this.rSQLUtils.manageBooleanSelect(this.formatterUtils.getStringAsBoolean(this.flagInserimentoManuale.value), 'flgMan'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.filiale.value, 'filialeRiferimento'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.indResidenza.value, 'effIndicatoreRes'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.catEconomica.value, 'effCatEconomica'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataAperturaDa.value), this.formatterUtils.dateToString(this.dataAperturaA.value), 'dataApertura'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataChiusuraDa.value), this.formatterUtils.dateToString(this.dataChiusuraA.value), 'dataChiusura'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataInizioValiditaDa.value), this.formatterUtils.dateToString(this.dataInizioValiditaA.value), 'validFrom'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToString(this.dataFineValiditaDa.value), this.formatterUtils.dateToString(this.dataFineValiditaA.value), 'validTo'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteInserimento.value, 'utenteRichiesta'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteApprovatore.value, 'utenteValidazione'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
    goToInsertConto() {
        this.setSession(this.CONTO_INSERT_SESSION, { wizardSteps: [], prefixUrl: '/anagrafiche/conti/inserimento/' });
        this.router.navigate([this.routingService.getRouteByKey(this.routingService.CONTO_INSERT_STEP1)], {});
    }
    getSearcModel() {
        return this.contoService.searchModel;
    }
    setSearcModel(searchModel) {
        return this.contoService.searchModel = searchModel;
    }
};
RicercaContiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"] },
    { type: _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"] },
    { type: _services_conto_service__WEBPACK_IMPORTED_MODULE_12__["ContoService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_3__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RicercaContiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ricerca-conti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ricerca-conti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ricerca-conti.component.scss */ "./src/app/views/anagrafiche/conti/ricerca-conti/ricerca-conti.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_party_service__WEBPACK_IMPORTED_MODULE_5__["PartyService"],
        _services_filiale_service__WEBPACK_IMPORTED_MODULE_6__["FilialeService"],
        _services_conto_service__WEBPACK_IMPORTED_MODULE_12__["ContoService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_8__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_9__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_3__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], RicercaContiComponent);



/***/ })

}]);
//# sourceMappingURL=default~conti-conti-module~conti-inserimento-conto-inserimento-conto-module.js.map