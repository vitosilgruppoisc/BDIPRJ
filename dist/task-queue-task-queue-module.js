(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-queue-task-queue-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Task Conto </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div *ngIf=\"!!infoPanelModel\">\r\n                    <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                    <div class=\"col-3\"></div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonConferma\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"conferma()\" [disabled]=\"readonlyForm\">Conferma</button>\r\n                    </div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonRifiuta\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"openModal()\" [disabled]=\"readonlyForm\">Rifiuta</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <br/>\r\n                <div>\r\n                    <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noteModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma Rifiuto</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <textarea id=\"note\" rows=\"3\" maxlength=\"4000\" class=\"form-control\" [(ngModel)]=\"note\"></textarea>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rifiuta()\">Rifiuta</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Task Eccezione Raggiungibilità Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div *ngIf=\"!!infoPanelModel\">\r\n                    <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                    <div class=\"col-3\"></div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonConferma\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"conferma()\" [disabled]=\"readonlyForm\">Conferma</button>\r\n                    </div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonRifiuta\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"openModal()\" [disabled]=\"readonlyForm\">Rifiuta</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <br/>\r\n                <div>\r\n                    <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noteModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma Rifiuto</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <textarea id=\"note\" rows=\"3\" maxlength=\"4000\" class=\"form-control\" [(ngModel)]=\"note\"></textarea>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rifiuta()\">Rifiuta</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Task Eccezione Transcodifica Ingrosso </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div *ngIf=\"!!infoPanelModel\">\r\n                    <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                    <div class=\"col-3\"></div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonConferma\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"conferma()\" [disabled]=\"readonlyForm\">Conferma</button>\r\n                    </div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonRifiuta\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"openModal()\" [disabled]=\"readonlyForm\">Rifiuta</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <br/>\r\n                <div>\r\n                    <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noteModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma Rifiuto</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <textarea id=\"note\" rows=\"3\" maxlength=\"4000\" class=\"form-control\" [(ngModel)]=\"note\"></textarea>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rifiuta()\">Rifiuta</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Task Eccezione Transcodifica Dettaglio </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div *ngIf=\"!!infoPanelModel\">\r\n                    <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                    <div class=\"col-3\"></div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonConferma\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"conferma()\" [disabled]=\"readonlyForm\">Conferma</button>\r\n                    </div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonRifiuta\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"openModal()\" [disabled]=\"readonlyForm\">Rifiuta</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <br/>\r\n                <div>\r\n                    <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noteModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma Rifiuto</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <textarea id=\"note\" rows=\"3\" maxlength=\"4000\" class=\"form-control\" [(ngModel)]=\"note\"></textarea>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rifiuta()\">Rifiuta</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Task Party </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div *ngIf=\"!!infoPanelModel\">\r\n                    <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                    <div class=\"col-3\"></div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonConferma\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"conferma()\" [disabled]=\"readonlyForm\">Conferma</button>\r\n                    </div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonRifiuta\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"openModal()\" [disabled]=\"readonlyForm\">Rifiuta</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <br/>\r\n                <div>\r\n                    <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noteModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma Rifiuto</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <textarea id=\"note\" rows=\"3\" maxlength=\"4000\" class=\"form-control\" [(ngModel)]=\"note\"></textarea>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rifiuta()\">Rifiuta</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-info-circle\"></i> Dettaglio Task Sfruttamento ANSY DCA </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isResultOk\">\r\n                    Operazione correttamente effettuata.\r\n                </div>\r\n\r\n                <div *ngIf=\"!!infoPanelModel\">\r\n                    <app-info-panel [model]=\"infoPanelModel\"></app-info-panel>\r\n                </div>\r\n\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <button routerLink=\"{{backUrl}}\" [queryParams]=\"{back:true}\" class=\"btn btn-block btn-primary\" type=\"button\">Indietro</button>\r\n                    </div>\r\n                    <div class=\"col-3\"></div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonConferma\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"conferma()\" [disabled]=\"readonlyForm\">Conferma</button>\r\n                    </div>\r\n                    <div class=\"col-3 float-right ml-auto\" *ngIf=\"showButtonRifiuta\">\r\n                        <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"openModal()\" [disabled]=\"readonlyForm\">Rifiuta</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <br/>\r\n                <div>\r\n                    <span><b>{{NOT_DEFINED}}</b> indica campo non valorizzato </span>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #waiting>\r\n                <gepa-spinning-loader></gepa-spinning-loader>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noteModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mfiModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Conferma Rifiuto</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <textarea id=\"note\" rows=\"3\" maxlength=\"4000\" class=\"form-control\" [(ngModel)]=\"note\"></textarea>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Annulla</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rifiuta()\">Rifiuta</button>\r\n    </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card card-accent-primary shadow\">\r\n        <div class=\"card-header\">\r\n            <strong><i class=\"fas fa-wrench\"></i> Task Queue </strong>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <ng-container *ngIf=\"!(showSpinner$ | async); else waiting\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                    {{ messageError }}\r\n                </div>\r\n\r\n                <form [formGroup]=\"ricercaForm\" class=\"form-horizontal\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"tipoAnagrafica\" class=\"col-2 col-form-label\">Tipo Anagrafica:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"tipoAnagrafica\" class=\"form-control\" [class.is-invalid]=\"tipoAnagrafica.invalid && (tipoAnagrafica.dirty || tipoAnagrafica.touched)\" formControlName=\"tipoAnagrafica\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiAnagrafica\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"operazione\" class=\"col-2 col-form-label\">Operazione:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"operazione\" class=\"form-control\" [class.is-invalid]=\"operazione.invalid && (operazione.dirty || operazione.touched)\" formControlName=\"operazione\">\r\n                                <option [ngValue]=\"undefined\">Tutti</option>\r\n                                <option *ngFor=\"let t of tipiOperazione\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"recordId\" class=\"col-2 col-form-label\">Record Id:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"recordId\" class=\"form-control\" [class.is-invalid]=\"recordId.invalid && (recordId.dirty || recordId.touched)\" formControlName=\"recordId\"/>\r\n                                <div *ngIf=\"recordId.errors?.pattern && (recordId.dirty || recordId.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"stato\" class=\"col-2 col-form-label\">Stato:</label>\r\n                        <div class=\"col-4\">\r\n                            <select id=\"stato\" class=\"form-control\" [class.is-invalid]=\"stato.invalid && (stato.dirty || stato.touched)\" formControlName=\"stato\">\r\n                                <option [ngValue]=\"null\">Tutti</option>\r\n                                <option *ngFor=\"let t of stati\" [value]=\"t.codice\">{{t.descrizione}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <!--Data Richiesta-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Richiesta:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataRichiestaDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataRichiestaDa\" class=\"form-control\" [class.is-invalid]=\"dataRichiestaDa.invalid && (dataRichiestaDa.dirty || dataRichiestaDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataRichiestaDa\"  bdiDatepicker #datepickerDAda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataRichiestaDa.value\"  class=\"input-group-append\" (click)=\"reset('dataRichiestaDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataRichiestaDa.errors?.dateformat && (dataRichiestaDa.dirty || dataRichiestaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataRichiestaDa.errors?.daterange && (dataRichiestaDa.dirty || dataRichiestaDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataRichiestaA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataRichiestaA\" class=\"form-control\" [class.is-invalid]=\"dataRichiestaA.invalid && (dataRichiestaA.dirty || dataRichiestaA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataRichiestaA\"  bdiDatepicker #datepickerDAa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDAa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataRichiestaA.value\"  class=\"input-group-append\" (click)=\"reset('dataRichiestaA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataRichiestaA.errors?.dateformat && (dataRichiestaA.dirty || dataRichiestaA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataRichiestaA.errors?.daterange && (dataRichiestaA.dirty || dataRichiestaA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--Data Validazione-->\r\n                        <div class=\"col-6\">\r\n                            <div class=\"row\"><label class=\"col-12 col-form-label\">Data Validazione:</label></div>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataValidazioneDa\" class=\"col-4 col-form-label text-right\">Da:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataValidazioneDa\" class=\"form-control\" [class.is-invalid]=\"dataValidazioneDa.invalid && (dataValidazioneDa.dirty || dataValidazioneDa.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataValidazioneDa\"  bdiDatepicker #datepickerDCda=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDCda.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataValidazioneDa.value\"  class=\"input-group-append\" (click)=\"reset('dataValidazioneDa')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataValidazioneDa.errors?.dateformat && (dataValidazioneDa.dirty || dataValidazioneDa.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataValidazioneDa.errors?.daterange && (dataValidazioneDa.dirty || dataValidazioneDa.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br/>\r\n                            <div class=\"row\">\r\n                                <label for=\"dataValidazioneA\" class=\"col-4 col-form-label text-right\">A:</label>\r\n                                <div class=\"col-8\">\r\n                                    <div class=\"input-group\">\r\n                                        <input id=\"dataValidazioneA\" class=\"form-control\" [class.is-invalid]=\"dataValidazioneA.invalid && (dataValidazioneA.dirty || dataValidazioneA.touched)\" placeholder=\"yyyy-mm-dd\" formControlName=\"dataValidazioneA\"  bdiDatepicker #datepickerDCa=\"bdiDatepicker\" maxlength=\"10\" style=\"background-color: #ffffff !important\"/>\r\n                                        <div class=\"input-group-append\" (click)=\"datepickerDCa.toggle()\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-calendar\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div  *ngIf=\"!!dataValidazioneA.value\"  class=\"input-group-append\" (click)=\"reset('dataValidazioneA')\" style=\"cursor: pointer;\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fas fa-trash-alt\"></i>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"dataValidazioneA.errors?.dateformat && (dataValidazioneA.dirty || dataValidazioneA.touched)\" class=\"invalid-feedback\">\r\n                                            Campo non valido\r\n                                        </div>\r\n                                        <div *ngIf=\"dataValidazioneA.errors?.daterange && (dataValidazioneA.dirty || dataValidazioneA.touched)\" class=\"invalid-feedback\">\r\n                                            Intervallo non valido\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"utenteRichiesta\" class=\"col-2 col-form-label\">Utente Richiesta:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteRichiesta\" class=\"form-control\" [class.is-invalid]=\"utenteRichiesta.invalid && (utenteRichiesta.dirty || utenteRichiesta.touched)\" formControlName=\"utenteRichiesta\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteRichiesta.errors?.wildcard && (utenteRichiesta.dirty || utenteRichiesta.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteRichiesta.errors?.pattern && (utenteRichiesta.dirty || utenteRichiesta.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <label for=\"utenteValidazione\" class=\"col-2 col-form-label\">Utente Validatore:</label>\r\n                        <div class=\"col-4\">\r\n                            <div class=\"input-group\">\r\n                                <input id=\"utenteValidazione\" class=\"form-control\" [class.is-invalid]=\"utenteValidazione.invalid && (utenteValidazione.dirty || utenteValidazione.touched)\" formControlName=\"utenteValidazione\" maxlength=\"4000\" [pattern]=\"'^[a-zA-Z0-9%]+$'\"/>\r\n                                <ng-container *ngTemplateOutlet=\"wildcardTooltip\"></ng-container>\r\n                                <div *ngIf=\"utenteValidazione.errors?.wildcard && (utenteValidazione.dirty || utenteValidazione.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido per la ricerca con wildcard\r\n                                </div>\r\n                                <div *ngIf=\"utenteValidazione.errors?.pattern && (utenteValidazione.dirty || utenteValidazione.touched)\" class=\"invalid-feedback\">\r\n                                    Campo non valido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-2 mx-auto\">\r\n                            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"submit(target, true)\">Cerca</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <div #target>\r\n                    <app-generic-table *ngIf=\"showTable\" [model]=\"taskModel\" (action)=\"onActionEvent($event)\"(colToDisplay)=\"onColToDisplayEvent($event, this.taskService.searchModel)\" (paginationChanged)=\"onPaginationEvent($event, this.taskService.searchModel)\" (sortChanged)=\"onSortEvent($event, this.taskService.searchModel)\" (filterChanged)=\"onFilterEvent($event, this.taskService.searchModel)\"></app-generic-table>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <ng-template #waiting>\r\n            <gepa-spinning-loader></gepa-spinning-loader>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #wildcardTooltip>\r\n        <div class=\"input-group-append\" bdiTooltip=\"{{util.getWildcardTooltip()}}\" placement=\"right\" >\r\n            <span class=\"input-group-text\" >\r\n                <i class=\"fas fa-info-circle\"></i>\r\n            </span>\r\n        </div>\r\n    </ng-template>\r\n");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AbstractDettaglioTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDettaglioTaskComponent", function() { return AbstractDettaglioTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _abstract_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-task.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class AbstractDettaglioTaskComponent extends _abstract_task_component__WEBPACK_IMPORTED_MODULE_3__["AbstractTaskComponent"] {
    constructor(securityService, userService, modalService, formatterUtils, routingService, route) {
        super(securityService, userService, formatterUtils, modalService, routingService, route);
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.formatterUtils = formatterUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        this.checkUserSpi();
    }
    buildInfoPanelElement(label, type, entity, field, fieldOrig) {
        let value = null;
        let valueOrig = null;
        if (type == 'string') {
            value = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(entity, field);
            valueOrig = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(entity, (!!fieldOrig ? fieldOrig : field.concat('Orig')));
        }
        if (type == 'date') {
            value = this.formatterUtils.formatDate(entity, field);
            valueOrig = this.formatterUtils.formatDate(entity, (!!fieldOrig ? fieldOrig : field.concat('Orig')));
        }
        if (type == 'boolean') {
            value = this.formatterUtils.getBooleanAsString(entity, field);
            valueOrig = this.formatterUtils.getBooleanAsString(entity, field.concat('Orig'));
        }
        return this.buildModel(label, value, valueOrig, entity);
    }
    buildModel(label, value, valueOrig, entity) {
        let tooltip = null;
        let style = null;
        value = this.manageEmpty(value);
        valueOrig = this.manageEmpty(valueOrig);
        if (!this.isInsert(entity.operazione) && !!this.isDaApprovare(entity.stato)) {
            if (value !== valueOrig) {
                tooltip = {
                    value: valueOrig,
                    placement: 'right'
                };
                style = {
                    color: 'red',
                    fontweight: 'bold'
                };
            }
        }
        return { label: label, value: value, tooltip: tooltip, style: style };
    }
    conferma() {
        this.resetError();
        this.isResultOk = false;
        this.readonlyForm = false;
        this.showSpinner();
        const task = this.buildTask(this.getId(), _models_enum__WEBPACK_IMPORTED_MODULE_2__["StatoTaskEnum"].APPROVED);
        this.getConferma(task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => this.loadSections(this.getId())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => {
            this.isResultOk = true;
            this.readonlyForm = true;
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - conferma', error);
            this.setError(error);
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        })).subscribe();
    }
    rifiuta() {
        this.resetError();
        this.isResultOk = false;
        this.readonlyForm = false;
        this.showSpinner();
        const task = this.buildTask(this.getId(), _models_enum__WEBPACK_IMPORTED_MODULE_2__["StatoTaskEnum"].REJECTED, this.note);
        this.getRifiuta(task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => this.loadSections(this.getId())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => {
            this.isResultOk = true;
            this.closeModal();
            this.readonlyForm = true;
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('Error - rifiuta', error);
            this.setError(error);
            this.closeModal();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        })).subscribe();
    }
    buildTask(id, stato, note) {
        return {
            id: id,
            stato: {
                codice: stato
            },
            noteRifiuto: (!!note ? note : null)
        };
    }
}


/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/abstract-task.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/abstract-task.component.ts ***!
  \*************************************************************************/
/*! exports provided: AbstractTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTaskComponent", function() { return AbstractTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-anagrafiche.component */ "./src/app/views/anagrafiche/abstract-anagrafiche.component.ts");




class AbstractTaskComponent extends _abstract_anagrafiche_component__WEBPACK_IMPORTED_MODULE_3__["AbstractAnagraficheComponent"] {
    constructor(securityService, userService, formatterUtils, modalService, routingService, route) {
        super(securityService, userService, formatterUtils, routingService, route);
        this.securityService = securityService;
        this.userService = userService;
        this.formatterUtils = formatterUtils;
        this.modalService = modalService;
        this.routingService = routingService;
        this.route = route;
        this.showButtonConferma = false;
        this.showButtonRifiuta = false;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    isInsert(operazione) {
        return operazione.codice === _models_enum__WEBPACK_IMPORTED_MODULE_2__["TipoOperazioneEnum"].INS;
    }
    manageButton(stato, utenteRichiesta, roles) {
        this.showButtonConferma = false;
        this.showButtonRifiuta = false;
        const hasRole = this.securityService.checkPermissions(roles);
        if (!!hasRole && !!this.isDaApprovare(stato)) {
            this.showButtonRifiuta = true;
            this.showButtonConferma = !this.checkCurrentUserIsUserReq(utenteRichiesta);
        }
    }
    isDaApprovare(stato) {
        return stato.codice === _models_enum__WEBPACK_IMPORTED_MODULE_2__["StatoTaskEnum"].CREATED;
    }
    checkCurrentUserIsUserReq(utenteRichiesta) {
        return this.userService.getUsername() == utenteRichiesta;
    }
    openModal() {
        this.noteModalReference = this.modalService.open(this.noteModal);
    }
    closeModal() {
        this.noteModalReference.close();
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noteModal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], AbstractTaskComponent.prototype, "noteModal", void 0);


/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL2RldHRhZ2xpby10YXNrLWNvbnRvL2RldHRhZ2xpby10YXNrLWNvbnRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DettaglioTaskContoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioTaskContoComponent", function() { return DettaglioTaskContoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dettaglio-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
















let DettaglioTaskContoComponent = class DettaglioTaskContoComponent extends _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDettaglioTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, routingService, route) {
        super(securityService, userService, modalService, formatterUtils, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const detailContoSessionObj = this.getSession(this.routingService.TASK_CONTO_DETAIL);
            if (!!detailContoSessionObj) {
                this.loadSections(detailContoSessionObj.idTask);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailContoSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idTask) {
        this.showSpinner();
        this.taskService.getTaskConto(idTask).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(res => {
            this.taskConto = res;
            this.buildTaskContoSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
        })).subscribe();
    }
    buildTaskContoSection() {
        const data = [
            [{ label: 'Tipo Intervento', value: this.taskConto.operazione.descrizione }, {}],
            [this.buildInfoPanelElement('Bic', 'string', this.taskConto, 'bic'), this.buildInfoPanelElement('Target Service', 'string', this.taskConto, 'targetService')],
            [this.buildInfoPanelElement('Account Id', 'string', this.taskConto, 'numeroConto'), this.buildInfoPanelElement('ABI', 'string', this.taskConto, 'abi')],
            [this.buildInfoPanelElement('Tipo Conto', 'string', this.taskConto, 'tipoConto.descrizione', 'tipoContoOrig.descrizione'), this.buildInfoPanelElement('Descrizione', 'string', this.taskConto, 'descrizione')],
            [this.buildInfoPanelElement('Default MCA', 'boolean', this.taskConto, 'mcaDefFlag'), this.buildInfoPanelElement('Presso BDI', 'boolean', this.taskConto, 'pressoBdi')],
            [this.buildInfoPanelElement('Flag Inserimento Manuale', 'boolean', this.taskConto, 'flgMan'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.taskConto, 'indicatoreResidenza')],
        ];
        if (!!this.checkTaskContoIsSubAccount(this.taskConto)) {
            const tipiSfruttamento = this.buildTipiSfruttamento();
            const tipoSfruttamentoItem = tipiSfruttamento.find(e => e.codice == this.taskConto.subTipoSfruttAnsy);
            const tipoSfruttamento = (!!tipoSfruttamentoItem ? tipoSfruttamentoItem.descrizione : null);
            const tipoSfruttamentoOrigItem = tipiSfruttamento.find(e => e.codice == this.taskConto.subTipoSfruttAnsyOrig);
            const tipoSfruttamentoOrig = (!!tipoSfruttamentoOrigItem ? tipoSfruttamentoOrigItem.descrizione : null);
            data.push([this.buildInfoPanelElement('Categoria Economica', 'string', this.taskConto, 'categoriaEconomica'), this.buildInfoPanelElement('Bic Conto DCA/CB', 'string', this.taskConto, 'subParBicDca')], [this.buildInfoPanelElement('Bic Party ANSY', 'string', this.taskConto, 'subBicPtyAnsy'), this.buildModel('Tipo Sfruttamento', tipoSfruttamento, tipoSfruttamentoOrig, this.taskConto)]);
        }
        else {
            data.push([this.buildInfoPanelElement('Categoria Economica', 'string', this.taskConto, 'categoriaEconomica'), {}]);
        }
        data.push([this.buildInfoPanelElement('Data Apertura', 'date', this.taskConto, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura', 'date', this.taskConto, 'dataChiusura')], [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.taskConto, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.taskConto, 'validTo')], [this.buildModel('Utente Richiesta', this.taskConto.userReq, this.taskConto.utenteRichiestaOrig, this.taskConto), this.buildModel('Utente Approvatore', this.taskConto.userValidate, this.taskConto.utenteValidazioneOrig, this.taskConto)]);
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        this.manageButton(this.taskConto.stato, this.taskConto.userReq, [_models__WEBPACK_IMPORTED_MODULE_15__["EUserRole"].ANAGRAFICHE_SPI]);
    }
    checkTaskContoIsSubAccount(taskConto) {
        return taskConto.tipoConto.codice == _models_enum__WEBPACK_IMPORTED_MODULE_14__["TipoContoEnum"].RTGS_SA;
    }
    getConferma(task) {
        return this.taskService.confermaTaskConto(task);
    }
    getRifiuta(task) {
        return this.taskService.rifiutaTaskConto(task);
    }
    getId() {
        return this.taskConto.id;
    }
};
DettaglioTaskContoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DettaglioTaskContoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-task-conto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-task-conto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-task-conto.component.scss */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DettaglioTaskContoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL2RldHRhZ2xpby10YXNrLWVjYy1yZWFjaGFiaWxpdHktcmV0YWlsL2RldHRhZ2xpby10YXNrLWVjYy1yZWFjaGFiaWxpdHktcmV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DettaglioTaskEccReachabilityRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioTaskEccReachabilityRetailComponent", function() { return DettaglioTaskEccReachabilityRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dettaglio-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");















let DettaglioTaskEccReachabilityRetailComponent = class DettaglioTaskEccReachabilityRetailComponent extends _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDettaglioTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, routingService, route) {
        super(securityService, userService, modalService, formatterUtils, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const detailEccSessionObj = this.getSession(this.routingService.TASK_ECC_RAGG_RET_DETAIL);
            if (!!detailEccSessionObj) {
                this.loadSections(detailEccSessionObj.idTask);
                this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idEcc) {
        this.showSpinner();
        this.taskService.getTaskEccReachabilityRetail(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(res => {
            this.taskEccReachabilityRetail = res;
            this.buildTaskEccReachabilityRetailSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
        })).subscribe();
    }
    buildTaskEccReachabilityRetailSection() {
        const data = [
            [{ label: 'Tipo Intervento', value: this.taskEccReachabilityRetail.operazione.descrizione }, {}],
            [this.buildInfoPanelElement('Bic Input', 'string', this.taskEccReachabilityRetail, 'bicInput'), this.buildInfoPanelElement('Canale', 'string', this.taskEccReachabilityRetail, 'canale.descrizione', 'canaleOrig.descrizione')],
            [this.buildInfoPanelElement('Raggiungibile', 'boolean', this.taskEccReachabilityRetail, 'raggiungibile'), this.buildInfoPanelElement('Descrizione', 'string', this.taskEccReachabilityRetail, 'descrizione')],
            [/*this.buildInfoPanelElement('Bic Output', 'string', this.taskEccReachabilityRetail, 'bicOutput'),*/ this.buildInfoPanelElement('Bic Diretto', 'string', this.taskEccReachabilityRetail, 'bicDiretto'), {}],
            [this.buildInfoPanelElement('Data Inizio Validità', 'date', this.taskEccReachabilityRetail, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità', 'date', this.taskEccReachabilityRetail, 'validTo')],
            [this.buildModel('Utente Richiesta', this.taskEccReachabilityRetail.userReq, this.taskEccReachabilityRetail.utenteRichiestaOrig, this.taskEccReachabilityRetail), this.buildModel('Utente Approvatore', this.taskEccReachabilityRetail.userValidate, this.taskEccReachabilityRetail.utenteValidazioneOrig, this.taskEccReachabilityRetail)]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        this.manageButton(this.taskEccReachabilityRetail.stato, this.taskEccReachabilityRetail.userReq, [_models__WEBPACK_IMPORTED_MODULE_14__["EUserRole"].ANAGRAFICHE_DET]);
    }
    getConferma(task) {
        return this.taskService.confermaTaskEccReachabilityRetail(task);
    }
    getRifiuta(task) {
        return this.taskService.rifiutaTaskEccReachabilityRetail(task);
    }
    getId() {
        return this.taskEccReachabilityRetail.id;
    }
};
DettaglioTaskEccReachabilityRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DettaglioTaskEccReachabilityRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-task-ecc-reachability-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-task-ecc-reachability-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-task-ecc-reachability-retail.component.scss */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DettaglioTaskEccReachabilityRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL2RldHRhZ2xpby10YXNrLWVjYy10cmFuc2NvZGluZy1pbmdyb3Nzby9kZXR0YWdsaW8tdGFzay1lY2MtdHJhbnNjb2RpbmctaW5ncm9zc28uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: DettaglioTaskEccTranscodingIngrossoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioTaskEccTranscodingIngrossoComponent", function() { return DettaglioTaskEccTranscodingIngrossoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dettaglio-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");















let DettaglioTaskEccTranscodingIngrossoComponent = class DettaglioTaskEccTranscodingIngrossoComponent extends _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDettaglioTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, routingService, route) {
        super(securityService, userService, modalService, formatterUtils, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const detailEccSessionObj = this.getSession(this.routingService.TASK_ECC_TRANS_INGR_DETAIL);
            if (!!detailEccSessionObj) {
                this.loadSections(detailEccSessionObj.idTask);
                this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idEcc) {
        this.showSpinner();
        this.taskService.getTaskEccTranscodingIngrosso(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(res => {
            this.taskEccTranscodingIngrosso = res;
            this.buildTaskEccTranscodingIngrossoSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
        })).subscribe();
    }
    buildTaskEccTranscodingIngrossoSection() {
        const data = [
            [{ label: 'Tipo Intervento', value: this.taskEccTranscodingIngrosso.operazione.descrizione }, {}],
            [this.buildInfoPanelElement('Abi', 'string', this.taskEccTranscodingIngrosso, 'abi'), this.buildInfoPanelElement('Cab', 'string', this.taskEccTranscodingIngrosso, 'cab')],
            [this.buildInfoPanelElement('Tipo Conto', 'string', this.taskEccTranscodingIngrosso, 'tipoConto'), this.buildInfoPanelElement('Bic Conto', 'string', this.taskEccTranscodingIngrosso, 'bicConto')],
            [this.buildInfoPanelElement('Verso', 'string', this.taskEccTranscodingIngrosso, 'verso'), this.buildInfoPanelElement('Descrizione', 'string', this.taskEccTranscodingIngrosso, 'descrizione')],
            [this.buildInfoPanelElement('Data Inizio Validità', 'date', this.taskEccTranscodingIngrosso, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità', 'date', this.taskEccTranscodingIngrosso, 'validTo')],
            [this.buildModel('Utente Richiesta', this.taskEccTranscodingIngrosso.userReq, this.taskEccTranscodingIngrosso.utenteRichiestaOrig, this.taskEccTranscodingIngrosso), this.buildModel('Utente Approvatore', this.taskEccTranscodingIngrosso.userValidate, this.taskEccTranscodingIngrosso.utenteValidazioneOrig, this.taskEccTranscodingIngrosso)]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        this.manageButton(this.taskEccTranscodingIngrosso.stato, this.taskEccTranscodingIngrosso.userReq, [_models__WEBPACK_IMPORTED_MODULE_14__["EUserRole"].ANAGRAFICHE_SPI]);
    }
    getConferma(task) {
        return this.taskService.confermaTaskEccTranscodingIngrosso(task);
    }
    getRifiuta(task) {
        return this.taskService.rifiutaTaskEccTranscodingIngrosso(task);
    }
    getId() {
        return this.taskEccTranscodingIngrosso.id;
    }
};
DettaglioTaskEccTranscodingIngrossoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DettaglioTaskEccTranscodingIngrossoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-task-ecc-transcoding-ingrosso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-task-ecc-transcoding-ingrosso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-task-ecc-transcoding-ingrosso.component.scss */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DettaglioTaskEccTranscodingIngrossoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL2RldHRhZ2xpby10YXNrLWVjYy10cmFuc2NvZGluZy1yZXRhaWwvZGV0dGFnbGlvLXRhc2stZWNjLXRyYW5zY29kaW5nLXJldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: DettaglioTaskEccTranscodingRetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioTaskEccTranscodingRetailComponent", function() { return DettaglioTaskEccTranscodingRetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dettaglio-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");















let DettaglioTaskEccTranscodingRetailComponent = class DettaglioTaskEccTranscodingRetailComponent extends _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDettaglioTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, routingService, route) {
        super(securityService, userService, modalService, formatterUtils, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const detailEccSessionObj = this.getSession(this.routingService.TASK_ECC_TRANS_RET_DETAIL);
            if (!!detailEccSessionObj) {
                this.loadSections(detailEccSessionObj.idTask);
                this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idEcc) {
        this.showSpinner();
        this.taskService.getTaskEccTranscodingRetail(idEcc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.taskEccTranscodingRetail = res;
            this.buildTaskEccTranscodingRetailSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
        })).subscribe();
    }
    buildTaskEccTranscodingRetailSection() {
        const data = [
            [{ label: 'Tipo Intervento', value: this.taskEccTranscodingRetail.operazione.descrizione }, {}],
            [this.buildInfoPanelElement('Nsc', 'string', this.taskEccTranscodingRetail, 'nsc'), this.buildInfoPanelElement('Country Code', 'string', this.taskEccTranscodingRetail, 'countryCode.descrizione', 'countryCodeOrig.descrizione')],
            [this.buildInfoPanelElement('Bic', 'string', this.taskEccTranscodingRetail, 'bic'), this.buildInfoPanelElement('Descrizione', 'string', this.taskEccTranscodingRetail, 'descrizione')],
            [this.buildInfoPanelElement('Data Inizio Validità', 'date', this.taskEccTranscodingRetail, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità', 'date', this.taskEccTranscodingRetail, 'validTo')],
            [this.buildModel('Utente Richiesta', this.taskEccTranscodingRetail.userReq, this.taskEccTranscodingRetail.utenteRichiestaOrig, this.taskEccTranscodingRetail), this.buildModel('Utente Approvatore', this.taskEccTranscodingRetail.userValidate, this.taskEccTranscodingRetail.utenteValidazioneOrig, this.taskEccTranscodingRetail)]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        this.manageButton(this.taskEccTranscodingRetail.stato, this.taskEccTranscodingRetail.userReq, [_models__WEBPACK_IMPORTED_MODULE_10__["EUserRole"].ANAGRAFICHE_DET]);
    }
    getConferma(task) {
        return this.taskService.confermaTaskEccTranscodingRetail(task);
    }
    getRifiuta(task) {
        return this.taskService.rifiutaTaskEccTranscodingRetail(task);
    }
    getId() {
        return this.taskEccTranscodingRetail.id;
    }
};
DettaglioTaskEccTranscodingRetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_12__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_9__["RSQLUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_6__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
DettaglioTaskEccTranscodingRetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-dettaglio-task-ecc-transcoding-retail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-task-ecc-transcoding-retail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-task-ecc-transcoding-retail.component.scss */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_12__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_9__["RSQLUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_6__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
], DettaglioTaskEccTranscodingRetailComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL2RldHRhZ2xpby10YXNrLXBhcnR5L2RldHRhZ2xpby10YXNrLXBhcnR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DettaglioTaskPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioTaskPartyComponent", function() { return DettaglioTaskPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../abstract-dettaglio-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");















let DettaglioTaskPartyComponent = class DettaglioTaskPartyComponent extends _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_13__["AbstractDettaglioTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, routingService, route) {
        super(securityService, userService, modalService, formatterUtils, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const detailPartySessionObj = this.getSession(this.routingService.TASK_PARTY_DETAIL);
            if (!!detailPartySessionObj) {
                this.loadSections(detailPartySessionObj.idTask);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailPartySessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idParty) {
        this.showSpinner();
        this.taskService.getTaskParty(idParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(res => {
            this.taskParty = res;
            this.buildTaskPartySection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
        })).subscribe();
    }
    buildTaskPartySection() {
        const data = [
            [{ label: 'Tipo Intervento', value: this.taskParty.operazione.descrizione }, {}],
            [this.buildInfoPanelElement('Party Bic', 'string', this.taskParty, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.taskParty, 'tipoParty.descrizione', 'tipoPartyOrig.descrizione')],
            [this.buildInfoPanelElement('Nome Party', 'string', this.taskParty, 'nome'), this.buildInfoPanelElement('ABI', 'string', this.taskParty, 'defaultAbi')],
            [this.buildInfoPanelElement('Filiale Riferimento', 'string', this.taskParty, 'filialeRiferimento.descrizione', 'filialeRiferimentoOrig.descrizione'), this.buildInfoPanelElement('MFI Code', 'string', this.taskParty, 'mfiCode')],
            [this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.taskParty, 'indicatoreResidenza'), this.buildInfoPanelElement('Categoria Economica', 'string', this.taskParty, 'categoriaEconomica')],
            [this.buildInfoPanelElement('Data Apertura', 'date', this.taskParty, 'dataApertura'), this.buildInfoPanelElement('Data Chiusura', 'date', this.taskParty, 'dataChiusura')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.taskParty, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.taskParty, 'validTo')],
            [this.buildModel('Utente Richiesta', this.taskParty.userReq, this.taskParty.utenteRichiestaOrig, this.taskParty), this.buildModel('Utente Approvatore', this.taskParty.userValidate, this.taskParty.utenteValidazioneOrig, this.taskParty)]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        this.manageButton(this.taskParty.stato, this.taskParty.userReq, [_models__WEBPACK_IMPORTED_MODULE_14__["EUserRole"].ANAGRAFICHE_SPI]);
    }
    getConferma(task) {
        return this.taskService.confermaTaskParty(task);
    }
    getRifiuta(task) {
        return this.taskService.rifiutaTaskParty(task);
    }
    getId() {
        return this.taskParty.id;
    }
};
DettaglioTaskPartyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_11__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_8__["RSQLUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_12__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DettaglioTaskPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-task-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-task-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-task-party.component.scss */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_11__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_6__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_8__["RSQLUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_12__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DettaglioTaskPartyComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL2RldHRhZ2xpby10YXNrLXNmcnV0dGFtZW50by9kZXR0YWdsaW8tdGFzay1zZnJ1dHRhbWVudG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DettaglioTaskSfruttamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioTaskSfruttamentoComponent", function() { return DettaglioTaskSfruttamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-dettaglio-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-dettaglio-task.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");















let DettaglioTaskSfruttamentoComponent = class DettaglioTaskSfruttamentoComponent extends _abstract_dettaglio_task_component__WEBPACK_IMPORTED_MODULE_2__["AbstractDettaglioTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, routingService, route) {
        super(securityService, userService, modalService, formatterUtils, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
        this.filterUtils = filterUtils;
        this.formatterUtils = formatterUtils;
        this.formBuilder = formBuilder;
        this.rSQLUtils = rSQLUtils;
        this.routingService = routingService;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const detailSfruttamentoSessionObj = this.getSession(this.routingService.TASK_SFRUTTAMENTO_DETAIL);
            if (!!detailSfruttamentoSessionObj) {
                this.loadSections(detailSfruttamentoSessionObj.idTask);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailSfruttamentoSessionObj.backUrl);
            }
            else {
                this.setError();
            }
        });
    }
    loadSections(idSfruttamento) {
        this.showSpinner();
        this.taskService.getTaskSfruttamentoAnsyDca(idSfruttamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(res => {
            this.taskSfruttamentoAnsyDca = res;
            this.buildTaskSfruttamentoAnsyDcaSection();
            this.hideSpinner();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((error) => {
            console.log('Error - loadSections', error);
            this.setError();
            this.hideSpinner();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
        })).subscribe();
    }
    buildTaskSfruttamentoAnsyDcaSection() {
        const data = [
            [{ label: 'Tipo Intervento', value: this.taskSfruttamentoAnsyDca.operazione.descrizione }, {}],
            [this.buildInfoPanelElement('Party Bic', 'string', this.taskSfruttamentoAnsyDca, 'bicParty'), this.buildInfoPanelElement('Tipo Party', 'string', this.taskSfruttamentoAnsyDca, 'tipoParty.descrizione', 'tipoPartyOrig.descrizione')],
            [this.buildInfoPanelElement('Bic Conto', 'string', this.taskSfruttamentoAnsyDca, 'bicConto'), this.buildInfoPanelElement('Target Service', 'string', this.taskSfruttamentoAnsyDca, 'targetServiceConto')],
            [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.taskSfruttamentoAnsyDca, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.taskSfruttamentoAnsyDca, 'validTo')],
            [this.buildModel('Utente Richiesta', this.taskSfruttamentoAnsyDca.userReq, this.taskSfruttamentoAnsyDca.utenteRichiestaOrig, this.taskSfruttamentoAnsyDca), this.buildModel('Utente Approvatore', this.taskSfruttamentoAnsyDca.userValidate, this.taskSfruttamentoAnsyDca.utenteValidazioneOrig, this.taskSfruttamentoAnsyDca)]
        ];
        this.infoPanelModel = {
            columnNumber: 2,
            data: data
        };
        this.manageButton(this.taskSfruttamentoAnsyDca.stato, this.taskSfruttamentoAnsyDca.userReq, [_models__WEBPACK_IMPORTED_MODULE_14__["EUserRole"].ANAGRAFICHE_SPI]);
    }
    getConferma(task) {
        return this.taskService.confermaTaskSfruttamentoAnsyDca(task);
    }
    getRifiuta(task) {
        return this.taskService.rifiutaTaskSfruttamentoAnsyDca(task);
    }
    getId() {
        return this.taskSfruttamentoAnsyDca.id;
    }
};
DettaglioTaskSfruttamentoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DettaglioTaskSfruttamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dettaglio-task-sfruttamento',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dettaglio-task-sfruttamento.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dettaglio-task-sfruttamento.component.scss */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_8__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_10__["RSQLUtils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_11__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DettaglioTaskSfruttamentoComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS90YXNrLXF1ZXVlL3JpY2VyY2EtdGFzay1xdWV1ZS9yaWNlcmNhLXRhc2stcXVldWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RicercaTaskQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicercaTaskQueueComponent", function() { return RicercaTaskQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/rsqlUtil */ "./src/app/utilities/rsqlUtil.ts");
/* harmony import */ var _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utilities/formatterUtils */ "./src/app/utilities/formatterUtils.ts");
/* harmony import */ var _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/filterUtils */ "./src/app/utilities/filterUtils.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _abstract_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract-task.component */ "./src/app/views/anagrafiche/task-queue/abstract-task.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _models_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../models/enum */ "./src/app/models/enum.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _utilities_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utilities/util */ "./src/app/utilities/util.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _validators_date_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../validators/date-validator */ "./src/app/validators/date-validator.ts");



















let RicercaTaskQueueComponent = class RicercaTaskQueueComponent extends _abstract_task_component__WEBPACK_IMPORTED_MODULE_8__["AbstractTaskComponent"] {
    constructor(router, taskService, securityService, userService, modalService, filterUtils, formatterUtils, formBuilder, rSQLUtils, utils, routingService, route) {
        super(securityService, userService, formatterUtils, modalService, routingService, route);
        this.taskService = taskService;
        this.securityService = securityService;
        this.userService = userService;
        this.modalService = modalService;
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
        this.buildCombo();
        this.buildForm();
        this.buildModel();
        this.manageNavigation();
    }
    manageNavigation() {
        this.route.queryParams.subscribe(params => {
            if (!!params && !!Object(lodash__WEBPACK_IMPORTED_MODULE_17__["get"])(params, this.BACK) && !!this.taskService.searchModel) {
                this.ricercaForm.setValue(this.taskService.searchModel.form);
                this.submit(null, false);
            }
            else {
                this.taskService.searchModel = this.initSearchModel();
            }
        });
    }
    buildCombo() {
        this.taskService.getTipoTask().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => this.tipiAnagrafica = res)).subscribe();
        this.taskService.getOperazione().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => this.tipiOperazione = res)).subscribe();
        this.taskService.getStatoTask().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => this.stati = res)).subscribe();
    }
    buildForm() {
        this.ricercaForm = this.formBuilder.group({
            tipoAnagrafica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            operazione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            recordId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            utenteRichiesta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            stato: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            utenteValidazione: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [this.wildcard2Validator.bind(this)]),
            dataRichiestaDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataRichiestaA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataValidazioneDa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            dataValidazioneA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        }, { validator: Object(_validators_date_validator__WEBPACK_IMPORTED_MODULE_18__["dateValidator"])([
                { field1: 'dataRichiestaDa', field2: 'dataRichiestaA' },
                { field1: 'dataValidazioneDa', field2: 'dataValidazioneA' }
            ]) });
        this.ricercaForm.get('stato').setValue(_models_enum__WEBPACK_IMPORTED_MODULE_13__["StatoTaskEnum"].CREATED);
    }
    get tipoAnagrafica() { return this.ricercaForm.get('tipoAnagrafica'); }
    get operazione() { return this.ricercaForm.get('operazione'); }
    get recordId() { return this.ricercaForm.get('recordId'); }
    get utenteRichiesta() { return this.ricercaForm.get('utenteRichiesta'); }
    get stato() { return this.ricercaForm.get('stato'); }
    get utenteValidazione() { return this.ricercaForm.get('utenteValidazione'); }
    get dataRichiestaDa() { return this.ricercaForm.get('dataRichiestaDa'); }
    get dataRichiestaA() { return this.ricercaForm.get('dataRichiestaA'); }
    get dataValidazioneDa() { return this.ricercaForm.get('dataValidazioneDa'); }
    get dataValidazioneA() { return this.ricercaForm.get('dataValidazioneA'); }
    reset(field) {
        this.ricercaForm.get(field).setValue(null);
    }
    buildModel() {
        this.taskModel = {
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
        this.taskModel.gridOptions.api.sizeColumnsToFit();
        this.taskModel.gridOptions.onGridSizeChanged = evt => this.taskModel.gridOptions.api ? this.taskModel.gridOptions.api.sizeColumnsToFit() : null;
    }
    buildColumnDef() {
        let order = 0;
        return [
            { colId: ('id_' + order++), headerName: 'TIPO ANAGRAFICA', field: 'tipoTask.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'RECORD ID', field: 'recordId', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'OPERAZIONE', field: 'operazione.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'UTENTE RICHIESTA', field: 'userReq', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'STATO', field: 'stato.descrizione', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'UTENTE VALIDATORE', field: 'userValidate', filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA RICHIESTA', field: 'tsInserimento', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDateTime(data.data, 'tsInserimento'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'DATA VALIDAZIONE', field: 'tsValidate', filter: true, sortable: true, resizable: true, valueGetter: (data) => this.formatterUtils.formatDateTime(data.data, 'tsValidate'), exportOptions: { skipColumn: false } },
            { colId: ('id_' + order++), headerName: 'AZIONI', field: '', resizable: true, cellRendererFramework: _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_9__["GenericActionRenderComponent"], cellRendererParams: { modelFn: this.buildActionRenderModel.bind(this) }, sortable: false, exportOptions: { skipColumn: true }, pinned: 'right', minWidth: 150 }
        ];
    }
    buildActionRenderModel(data) {
        let detailButton = null;
        if (this.userIsSpi || this.userIsBil || this.userIsVis) {
            if (data.tipoTask.codice == _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoTaskEnum"].PARTY) {
                detailButton = {
                    label: 'Visualizza dettaglio Party',
                    routerLink: this.routingService.getRouteByKey(this.routingService.TASK_PARTY_DETAIL),
                    params: { idTask: data.id, backUrl: this.routingService.TASK_SEARCH },
                    enabled: true,
                    sessionKey: this.routingService.TASK_PARTY_DETAIL
                };
            }
            if (data.tipoTask.codice == _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoTaskEnum"].CONTO) {
                detailButton = {
                    label: 'Visualizza dettaglio Conto',
                    routerLink: this.routingService.getRouteByKey(this.routingService.TASK_CONTO_DETAIL),
                    params: { idTask: data.id, backUrl: this.routingService.TASK_SEARCH },
                    enabled: true,
                    sessionKey: this.routingService.TASK_CONTO_DETAIL
                };
            }
            if (data.tipoTask.codice == _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoTaskEnum"].SFRUTTAMENTO) {
                detailButton = {
                    label: 'Visualizza dettaglio Sfruttamento',
                    routerLink: this.routingService.getRouteByKey(this.routingService.TASK_SFRUTTAMENTO_DETAIL),
                    params: { idTask: data.id, backUrl: this.routingService.TASK_SEARCH },
                    enabled: true,
                    sessionKey: this.routingService.TASK_SFRUTTAMENTO_DETAIL
                };
            }
            if (data.tipoTask.codice == _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoTaskEnum"].ECC_TRANSCODIFICA_INGROSSO) {
                detailButton = {
                    label: 'Visualizza dettaglio Eccezione',
                    routerLink: this.routingService.getRouteByKey(this.routingService.TASK_ECC_TRANS_INGR_DETAIL),
                    params: { idTask: data.id, backUrl: this.routingService.TASK_SEARCH },
                    enabled: true,
                    sessionKey: this.routingService.TASK_ECC_TRANS_INGR_DETAIL
                };
            }
        }
        if (this.userIsDet || this.userIsVis) {
            if (data.tipoTask.codice == _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoTaskEnum"].ECC_TRANSCODIFICA_DETTAGLIO) {
                detailButton = {
                    label: 'Visualizza dettaglio Eccezione',
                    routerLink: this.routingService.getRouteByKey(this.routingService.TASK_ECC_TRANS_RET_DETAIL),
                    params: { idTask: data.id, backUrl: this.routingService.TASK_SEARCH },
                    enabled: true,
                    sessionKey: this.routingService.TASK_ECC_TRANS_RET_DETAIL
                };
            }
            if (data.tipoTask.codice == _models_enum__WEBPACK_IMPORTED_MODULE_13__["TipoTaskEnum"].ECC_RAGGIUNGIBILITA_DETTAGLIO) {
                detailButton = {
                    label: 'Visualizza dettaglio Eccezione',
                    routerLink: this.routingService.getRouteByKey(this.routingService.TASK_ECC_RAGG_RET_DETAIL),
                    params: { idTask: data.id, backUrl: this.routingService.TASK_SEARCH },
                    enabled: true,
                    sessionKey: this.routingService.TASK_ECC_RAGG_RET_DETAIL
                };
            }
        }
        const modifyButton = null;
        const deleteButton = null;
        return {
            detailButton: detailButton,
            modifyButton: modifyButton,
            deleteButton: deleteButton
        };
    }
    submit(targetEl, resetPage) {
        this.showTable = false;
        this.resetError();
        this.taskModel.rowData = [];
        this.taskModel.enableMessageOnSizeResultLimit = false;
        this.manageSearchModel(this.taskModel, this.taskService.searchModel, resetPage);
        if (!!this.ricercaForm.valid) {
            this.showSpinner();
            if (!this.taskService.searchModel) {
                this.taskService.searchModel = this.initSearchModel();
            }
            this.taskService.searchModel.form = this.ricercaForm.value;
            const searchString = this.buildRsqlSearchString();
            this.taskService.getTasks(searchString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => {
                this.taskModel.enableMessageEmptyResult = true;
                if (!!res && res.content.length > 0) {
                    this.taskModel.enableMessageEmptyResult = false;
                    this.taskModel.rowData = res.content;
                    this.taskModel.enableMessageOnSizeResultLimit = false;
                    this.taskModel.searchRecordLenght = res.content.length;
                    if (res.totalElements > res.content.length) {
                        this.taskModel.enableMessageOnSizeResultLimit = true;
                        this.taskModel.searchRecordLenght = res.totalElements;
                    }
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(res => {
                this.showTable = true;
                if (!!targetEl) {
                    this.scrollToResult(targetEl);
                }
                this.hideSpinner();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])((error) => {
                console.log('Error - submit', error);
                this.showTable = false;
                this.setError(error);
                this.hideSpinner();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null);
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
        rSQLArray.push(this.rSQLUtils.manageSelect(this.tipoAnagrafica.value, 'tipoTask'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.operazione.value, 'operazione'));
        rSQLArray.push(this.rSQLUtils.manageSelect(this.stato.value, 'stato'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteRichiesta.value, 'userReq'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.utenteValidazione.value, 'userValidate'));
        rSQLArray.push(this.rSQLUtils.manageWildcard(this.recordId.value, 'recordId'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToStringWithTime(this.dataRichiestaDa.value), this.formatterUtils.dateToStringWithTime(this.dataRichiestaA.value, true), 'tsInserimento'));
        rSQLArray.push(this.rSQLUtils.managerRange(this.formatterUtils.dateToStringWithTime(this.dataValidazioneDa.value), this.formatterUtils.dateToStringWithTime(this.dataValidazioneA.value, true), 'tsValidate'));
        const searchString = this.rSQLUtils.getSearchString(rSQLArray);
        console.log('RSQL searchString:' + searchString);
        return searchString;
    }
};
RicercaTaskQueueComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__["ModalService"] },
    { type: _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"] },
    { type: _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__["FormatterUtils"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_4__["RSQLUtils"] },
    { type: _utilities_util__WEBPACK_IMPORTED_MODULE_15__["Utils"] },
    { type: _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RicercaTaskQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ricerca-task-queue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ricerca-task-queue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ricerca-task-queue.component.scss */ "./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["SecurityService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_14__["ModalService"],
        _utilities_filterUtils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"],
        _utilities_formatterUtils__WEBPACK_IMPORTED_MODULE_5__["FormatterUtils"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _utilities_rsqlUtil__WEBPACK_IMPORTED_MODULE_4__["RSQLUtils"],
        _utilities_util__WEBPACK_IMPORTED_MODULE_15__["Utils"],
        _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], RicercaTaskQueueComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/task-queue-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/task-queue-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TaskQueueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskQueueRoutingModule", function() { return TaskQueueRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _ricerca_task_queue_ricerca_task_queue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ricerca-task-queue/ricerca-task-queue.component */ "./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.ts");
/* harmony import */ var _dettaglio_task_party_dettaglio_task_party_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dettaglio-task-party/dettaglio-task-party.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.ts");
/* harmony import */ var _dettaglio_task_conto_dettaglio_task_conto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dettaglio-task-conto/dettaglio-task-conto.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.ts");
/* harmony import */ var _dettaglio_task_sfruttamento_dettaglio_task_sfruttamento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.ts");
/* harmony import */ var _dettaglio_task_ecc_transcoding_ingrosso_dettaglio_task_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _dettaglio_task_ecc_transcoding_retail_dettaglio_task_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.ts");
/* harmony import */ var _dettaglio_task_ecc_reachability_retail_dettaglio_task_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.ts");












const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Task Queue',
        },
        children: [
            {
                path: '',
                component: _ricerca_task_queue_ricerca_task_queue_component__WEBPACK_IMPORTED_MODULE_5__["RicercaTaskQueueComponent"],
                data: {
                    title: '',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_DET]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio-party',
                component: _dettaglio_task_party_dettaglio_task_party_component__WEBPACK_IMPORTED_MODULE_6__["DettaglioTaskPartyComponent"],
                data: {
                    title: 'Dettaglio Party',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio-conto',
                component: _dettaglio_task_conto_dettaglio_task_conto_component__WEBPACK_IMPORTED_MODULE_7__["DettaglioTaskContoComponent"],
                data: {
                    title: 'Dettaglio Conto',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio-sfruttamento',
                component: _dettaglio_task_sfruttamento_dettaglio_task_sfruttamento_component__WEBPACK_IMPORTED_MODULE_8__["DettaglioTaskSfruttamentoComponent"],
                data: {
                    title: 'Dettaglio Sfruttamento',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio-ecctranscodingingrosso',
                component: _dettaglio_task_ecc_transcoding_ingrosso_dettaglio_task_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_9__["DettaglioTaskEccTranscodingIngrossoComponent"],
                data: {
                    title: 'Dettaglio Eccezione Transcodifica Ingrosso',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio-ecctranscodingretail',
                component: _dettaglio_task_ecc_transcoding_retail_dettaglio_task_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_10__["DettaglioTaskEccTranscodingRetailComponent"],
                data: {
                    title: 'Dettaglio Eccezione Transcodifica Retail',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            },
            {
                path: 'dettaglio-eccreachabilityretail',
                component: _dettaglio_task_ecc_reachability_retail_dettaglio_task_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_11__["DettaglioTaskEccReachabilityRetailComponent"],
                data: {
                    title: 'Dettaglio Eccezione Raggiungibilità Retail',
                    roles: [_models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_3__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]]
            }
        ]
    }
];
let TaskQueueRoutingModule = class TaskQueueRoutingModule {
};
TaskQueueRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TaskQueueRoutingModule);



/***/ }),

/***/ "./src/app/views/anagrafiche/task-queue/task-queue.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/anagrafiche/task-queue/task-queue.module.ts ***!
  \*******************************************************************/
/*! exports provided: TaskQueueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskQueueModule", function() { return TaskQueueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _task_queue_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-queue-routing.module */ "./src/app/views/anagrafiche/task-queue/task-queue-routing.module.ts");
/* harmony import */ var _ricerca_task_queue_ricerca_task_queue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ricerca-task-queue/ricerca-task-queue.component */ "./src/app/views/anagrafiche/task-queue/ricerca-task-queue/ricerca-task-queue.component.ts");
/* harmony import */ var _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/gepagui-common.module */ "./src/app/common/gepagui-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var _generic_table_generic_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generic-table/generic-table.module */ "./src/app/views/anagrafiche/generic-table/generic-table.module.ts");
/* harmony import */ var _info_panel_info_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-panel/info-panel.module */ "./src/app/views/anagrafiche/info-panel/info-panel.module.ts");
/* harmony import */ var _generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var _generic_action_render_generic_action_render_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../generic-action-render/generic-action-render.module */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts");
/* harmony import */ var _dettaglio_task_party_dettaglio_task_party_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dettaglio-task-party/dettaglio-task-party.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-party/dettaglio-task-party.component.ts");
/* harmony import */ var _dettaglio_task_conto_dettaglio_task_conto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dettaglio-task-conto/dettaglio-task-conto.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-conto/dettaglio-task-conto.component.ts");
/* harmony import */ var _dettaglio_task_sfruttamento_dettaglio_task_sfruttamento_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component.ts");
/* harmony import */ var _dettaglio_task_ecc_transcoding_ingrosso_dettaglio_task_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component.ts");
/* harmony import */ var _dettaglio_task_ecc_transcoding_retail_dettaglio_task_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component.ts");
/* harmony import */ var _dettaglio_task_ecc_reachability_retail_dettaglio_task_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component */ "./src/app/views/anagrafiche/task-queue/dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component.ts");



















let TaskQueueModule = class TaskQueueModule {
};
TaskQueueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ricerca_task_queue_ricerca_task_queue_component__WEBPACK_IMPORTED_MODULE_4__["RicercaTaskQueueComponent"], _dettaglio_task_party_dettaglio_task_party_component__WEBPACK_IMPORTED_MODULE_12__["DettaglioTaskPartyComponent"], _dettaglio_task_conto_dettaglio_task_conto_component__WEBPACK_IMPORTED_MODULE_13__["DettaglioTaskContoComponent"], _dettaglio_task_sfruttamento_dettaglio_task_sfruttamento_component__WEBPACK_IMPORTED_MODULE_14__["DettaglioTaskSfruttamentoComponent"], _dettaglio_task_ecc_transcoding_ingrosso_dettaglio_task_ecc_transcoding_ingrosso_component__WEBPACK_IMPORTED_MODULE_15__["DettaglioTaskEccTranscodingIngrossoComponent"], _dettaglio_task_ecc_transcoding_retail_dettaglio_task_ecc_transcoding_retail_component__WEBPACK_IMPORTED_MODULE_16__["DettaglioTaskEccTranscodingRetailComponent"], _dettaglio_task_ecc_reachability_retail_dettaglio_task_ecc_reachability_retail_component__WEBPACK_IMPORTED_MODULE_17__["DettaglioTaskEccReachabilityRetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_gepagui_common_module__WEBPACK_IMPORTED_MODULE_5__["GepaGuiCommonModule"],
            _task_queue_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaskQueueRoutingModule"],
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
        ],
        entryComponents: [_generic_action_render_generic_action_render_component__WEBPACK_IMPORTED_MODULE_10__["GenericActionRenderComponent"]]
    })
], TaskQueueModule);



/***/ })

}]);
//# sourceMappingURL=task-queue-task-queue-module.js.map