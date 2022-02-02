(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conti-dettaglio-conto-dettaglio-conto-module"],{

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


/***/ })

}]);
//# sourceMappingURL=conti-dettaglio-conto-dettaglio-conto-module.js.map