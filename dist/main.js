(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/breadcrumb/loki-breadcrumb.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/breadcrumb/loki-breadcrumb.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb\">\r\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\r\n    <li class=\"breadcrumb-item\"\r\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\r\n        [ngClass]=\"{active: last}\">\r\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\r\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\r\n    </li>\r\n  </ng-template>\r\n  <ng-content></ng-content>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/default-layout/default-layout.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/default-layout/default-layout.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [navbarBrandRouterLink]=\"['/']\" [fixed]=\"true\"\r\n            [navbarBrandFull]=\"{src: 'assets/images/logo.png', width: 146, height: 41, alt: 'GEPA Anagrafiche Logo'}\"\r\n            [navbarBrandMinimized]=\"{src: 'assets/images/logo-small.png', width: 40, height: 40, alt: 'GEPA Anagrafiche Logo'}\"\r\n            [sidebarToggler]=\"'lg'\" [asideMenuToggler]=\"false\" [envNavbarColorClass]=\"envNavbarColorClass\">\r\n    <ul class=\"nav navbar-nav d-md-down-none\">\r\n        <!--\r\n        <li class=\"nav-item px-3\" *ngIf=\"dataOperativa\">\r\n            <a class=\"nav-link\" title=\"Data operativa\">\r\n                <i class=\"fas fa-calendar-alt\"></i>\r\n                <span class=\"user-text\"> Data operativa: {{ dataOperativa }}</span>\r\n            </a>\r\n        </li>\r\n        -->\r\n        <li class=\"nav-item px-3\" *ngIf=\"environment\">\r\n            <a class=\"nav-link\" title=\"Ambiente\">\r\n                <i class=\"fas fa-compass\"></i>\r\n                <span class=\"user-text\"> {{ environment }}</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav ml-auto\">\r\n        <li *ngIf=\"username\" class=\"nav-item rounded-pill border border-2 bg-dark\">\r\n            <a class=\"nav-link\">\r\n                <img [src]=\"getUserAvatarImage()\" class=\"img-avatar\" alt=\"User avatar\" />\r\n                <strong class=\"username\">{{username}}</strong>\r\n            </a>\r\n        </li>\r\n        <li *ngIf=\"roles\" class=\"nav-item\">\r\n            <a class=\"nav-link\" title=\"Ruoli utente corrente\">\r\n                <i class=\"fas fa-user-tag mr-3 ml-3\" aria-hidden=\"true\"></i>\r\n                <span *ngFor=\"let role of roles\" class=\"user-text\">{{role}} </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <!--\r\n            <a class=\"nav-link\" title=\"Informazioni sul Sistema\" (click)=\"openAppInfoDialog()\">\r\n                <i class=\"fa fa-info-circle mr-3\" id=\"appInfo\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            -->\r\n        </li>\r\n    </ul>\r\n</app-header>\r\n\r\n<div class=\"app-body\">\r\n    <app-sidebar [fixed]=\"true\" [display]=\"'lg'\">\r\n        <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"sidebarMinimized\"></app-sidebar-nav>\r\n        <app-sidebar-minimizer></app-sidebar-minimizer>\r\n    </app-sidebar>\r\n    <!-- Main content -->\r\n    <main class=\"main\">\r\n        <loki-breadcrumb>\r\n            <!-- Breadcrumb Menu-->\r\n        </loki-breadcrumb>\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div><!-- /.container-fluid -->\r\n    </main>\r\n</div>\r\n\r\n<gepa-footer>\r\n    <div class=\"footer-dark shadow-lg\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-1 item\">\r\n                    <img class=\"mt-2\" src=\"assets/images/logo-bdi.png\">\r\n                </div>\r\n                <div class=\"col-md-8 item text\">\r\n                    <h3>GEPA - Gestione Pagamenti</h3>\r\n                    <ul>\r\n                        <li><i class=\"fas fa-crown\"></i> Servizio Sistema dei Pagamenti</li>\r\n                        <li><i class=\"fas fa-laptop-code\"></i> Servizio Sviluppo Informatico - Divisione Applicazioni Istituzionali</li>\r\n                    </ul>\r\n                    <p></p>\r\n                </div>\r\n                <!--\r\n                <div class=\"col-sm-6 col-md-3 item\">\r\n                    <h3>Risorse Utili</h3>\r\n                    <ul>\r\n                        <li><a href=\"https://www.google.it\" target=\"_blank\">insert_any_here</a></li>\r\n                    </ul>\r\n                </div>\r\n                -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</gepa-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/app-header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/app-header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n    <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n        <span class=\"fas fa-bars\"></span>\r\n    </button>\r\n</ng-template>\r\n\r\n<a class=\"navbar-brand pt-0 env-navbar {{envNavbarColorClass}}\">\r\n    <img src=\"assets/images/bancaditalia.png\" height=\"45\" alt=\"Logo Banca d'Italia\" />\r\n</a>\r\n\r\n<a class=\"navbar-brand \" [routerLink]=\"navbarBrandRouterLink\">\r\n    <ng-template [ngIf]=\"navbarBrandImg\">\r\n        <img *ngIf=\"navbarBrand\" [appHtmlAttr]=\"navbarBrand\" [ngClass]=\"'navbar-brand'\">\r\n        <img *ngIf=\"navbarBrandFull\" [appHtmlAttr]=\"navbarBrandFull\" [ngClass]=\"'navbar-brand-full'\">\r\n        <img *ngIf=\"navbarBrandMinimized\" [appHtmlAttr]=\"navbarBrandMinimized\" [ngClass]=\"'navbar-brand-minimized'\">\r\n    </ng-template>\r\n    <ng-template [ngIf]=\"!navbarBrandImg\">\r\n        <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n        <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n    </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n    <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n        <span class=\"fas fa-bars\"></span>\r\n    </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n    <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n        <span class=\"fas fa-user-cog\"></span>\r\n    </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n    <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n        <span class=\"fas fa-user-cog\"></span>\r\n    </button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar-nav-items\r\n  class=\"nav\"\r\n  [items]=\"navItemsArray\">\r\n</app-sidebar-nav-items>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-label.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-label.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-link.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-link.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'external'\"\r\n    [ngClass]=\"getLinkClass()\"\r\n    href=\"{{item.url}}\"\r\n    [appHtmlAttr]=\"item.attributes\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"getLinkClass()\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [attr.disabled]=\"isDisabled()\"\r\n     (click)=\"hideMobile(item.url)\"\r\n     [routerLink]=\"\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n  </a>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-info/app-info.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-info/app-info.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h2><strong>Informazioni sul Sistema</strong></h2>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n    <h3 class=\"text-primary\"><strong>GEPA Conti Loro</strong></h3>\r\n\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-5\">System Owner</dt>\r\n        <dd class=\"col-sm-7\">Servizio Sistema dei pagamenti<br/>Divisione Servizi di pagamento e corrispondenza</dd>\r\n    </dl>\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-5\">Autore del Sistema</dt>\r\n        <dd class=\"col-sm-7\">Servizio Sviluppo informatico<br/>Divisione Applicazioni istituzionali</dd>\r\n    </dl>\r\n    <br/>\r\n\r\n    <h3 class=\"text-primary\"><strong>Componenti del Sistema</strong></h3>\r\n\r\n    <dl class=\"row text-info component-info\">\r\n        <dt class=\"col-sm-3\">nome</dt>\r\n        <dt class=\"col-sm-3\">versione</dt>\r\n        <dt class=\"col-sm-6\">build</dt>\r\n    </dl>\r\n    <dl class=\"row component-info\">\r\n        <dt class=\"col-sm-3\">{{frontend.name}}</dt>\r\n        <dd class=\"col-sm-3\">{{frontend.version}}</dd>\r\n        <dd class=\"col-sm-3\">{{frontend.build.timestamp}}</dd>\r\n        <dd class=\"col-sm-3\">{{frontend.build.type}}</dd>\r\n    </dl>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/401.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/401.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row justify-content-center\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"clearfix\">\r\n\t\t\t\t\t<h1 class=\"float-left display-3 mr-4\">401</h1>\r\n\t\t\t\t\t<h4 class=\"pt-3\">Accesso non autorizzato.</h4>\r\n\t\t\t\t\t<p class=\"text-muted\">Non sei autorizzato ad accedere a questa pagina.</p>\r\n\t\t\t\t\t<!--<button class=\"btn btn-block btn-secondary\" (click)=\"goHome()\"><i class=\"fas fa-home\"></i> Home Page</button>-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/403.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/403.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row justify-content-center\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"clearfix\">\r\n\t\t\t\t\t<h1 class=\"float-left display-3 mr-4\">403</h1>\r\n\t\t\t\t\t<h4 class=\"pt-3\">Accesso vietato.</h4>\r\n\t\t\t\t\t<p class=\"text-muted\">Utente non abilitato a nessuno dei gruuppi GEPA necessari per accedere alla risorsa richiesta.</p>\r\n\t\t\t\t\t<!--<button class=\"btn btn-block btn-secondary\" (click)=\"goHome()\"><i class=\"fas fa-home\"></i> Home Page</button>-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops!</h4>\r\n          <p class=\"text-muted\">La risorsa richiesta non è stata trovata.</p>\r\n        </div>\r\n        <!--<div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n        -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, abbiamo un problema!</h4>\r\n          <p class=\"text-muted\">Si è verifiato un errore gererico.</p>\r\n        </div>\r\n        <!--<div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n        -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    Benvenuto {{userService.user.username}}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_nav.ts":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");


const navItems = [
    {
        name: 'Home',
        url: '/home',
        icon: 'icon-home'
    },
    {
        name: 'Gepa Core',
        url: '/core',
        icon: 'far fa-address-card',
        requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_VALID, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_OPERATOR, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_TAV_OP1, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_TAV_OP2],
        children: [
            {
                name: 'Monitoraggio',
                url: '/core/monitoraggio',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_VALID, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_OPERATOR, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_TAV_OP1, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_TAV_OP2]
            },
            {
                name: 'Ricerca',
                url: '/core/ricerca',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_VALID, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_OPERATOR, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_TAV_OP1, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].CORE_TAV_OP2]
            }
        ]
    },
    {
        name: 'Anagrafiche',
        url: '/anagrafiche',
        icon: 'far fa-address-card',
        requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE],
        children: [
            {
                name: 'Party',
                url: '/anagrafiche/parties',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Conti',
                url: '/anagrafiche/conti',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Eccezioni Transcodifica Ingrosso',
                url: '/anagrafiche/ecctranscodingingrosso',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Eccezioni Transcodifica Dettaglio',
                url: '/anagrafiche/ecctranscodingretail',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Eccezioni Raggiungibilità Dettaglio',
                url: '/anagrafiche/eccreachabilityretail',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Task Queue',
                url: '/anagrafiche/taskqueue',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_BIL, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_DET]
            },
            {
                name: 'Transcodifica',
                url: '/anagrafiche/transcoding',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Raggiungibilità',
                url: '/anagrafiche/reachability',
                icon: '',
                indent: 1,
                requiredRoles: [_models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_SPI, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_DET, _models__WEBPACK_IMPORTED_MODULE_1__["EUserRole"].ANAGRAFICHE_VISUALIZZATORE]
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => window.scrollTo(0, 0));
    }
    ngOnDestroy() {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'loki-root',
        template: '<router-outlet></router-outlet>'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, initConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initConfiguration", function() { return initConfiguration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/it */ "./node_modules/@angular/common/locales/it.js");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout */ "./src/app/layout/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _views_error_401_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/error/401.component */ "./src/app/views/error/401.component.ts");
/* harmony import */ var _views_error_403_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/error/403.component */ "./src/app/views/error/403.component.ts");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/error/404.component */ "./src/app/views/error/404.component.ts");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/error/500.component */ "./src/app/views/error/500.component.ts");
/* harmony import */ var _views_app_info_app_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/app-info/app-info.component */ "./src/app/views/app-info/app-info.component.ts");



















Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_6___default.a);
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// Import containers
const APP_CONTAINERS = [
    _layout__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutComponent"]
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _layout__WEBPACK_IMPORTED_MODULE_12__["AppAsideModule"],
            _layout__WEBPACK_IMPORTED_MODULE_12__["AppBreadcrumbModule"].forRoot(),
            _layout__WEBPACK_IMPORTED_MODULE_12__["AppFooterModule"],
            _layout__WEBPACK_IMPORTED_MODULE_12__["AppHeaderModule"],
            _layout__WEBPACK_IMPORTED_MODULE_12__["AppSidebarModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIDropdownModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDITabViewModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIDatagridModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIModalModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIPopoverModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDITooltipModule"].forRoot(),
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["BDIMultiselectModule"].forRoot(),
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            ...APP_CONTAINERS,
            _views_error_401_component__WEBPACK_IMPORTED_MODULE_14__["P401Component"],
            _views_error_403_component__WEBPACK_IMPORTED_MODULE_15__["P403Component"],
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_16__["P404Component"],
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_17__["P500Component"],
            _views_app_info_app_info_component__WEBPACK_IMPORTED_MODULE_18__["AppInfoComponent"]
        ],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_13__["AppInitializerService"],
            _services__WEBPACK_IMPORTED_MODULE_13__["ConfigurationService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: initConfiguration,
                deps: [_services__WEBPACK_IMPORTED_MODULE_13__["AppInitializerService"]],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _services__WEBPACK_IMPORTED_MODULE_13__["LokiHttpInterceptor"],
                multi: true
            },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'it' }
        ],
        exports: [scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"]],
        entryComponents: [_views_app_info_app_info_component__WEBPACK_IMPORTED_MODULE_18__["AppInfoComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);

function initConfiguration(appInitializer) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
    return () => appInitializer.initialize();
}


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/app/layout/index.ts");
/* harmony import */ var _views_error_401_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/401.component */ "./src/app/views/error/401.component.ts");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/404.component */ "./src/app/views/error/404.component.ts");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/error/500.component */ "./src/app/views/error/500.component.ts");
/* harmony import */ var _views_error_403_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/error/403.component */ "./src/app/views/error/403.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/home/home.module */ "./src/app/views/home/home.module.ts");



// Import Containers







const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'error/401',
        component: _views_error_401_component__WEBPACK_IMPORTED_MODULE_4__["P401Component"],
        data: {
            title: 'Accesso non Autorizzato'
        }
    },
    {
        path: 'error/403',
        component: _views_error_403_component__WEBPACK_IMPORTED_MODULE_7__["P403Component"],
        data: {
            title: 'Accesso vietato'
        }
    },
    {
        path: 'error/404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"],
        data: {
            title: 'Risorsa non trovata'
        }
    },
    {
        path: 'error/500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_6__["P500Component"],
        data: {
            title: 'Errore generico'
        }
    },
    {
        path: '',
        component: _layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                data: {
                    title: 'Home'
                },
                component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            },
            {
                path: 'core',
                data: {
                    title: 'Gepa - Core'
                },
                loadChildren: () => Promise.all(/*! import() | views-dashboard-core-routing-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("views-dashboard-core-routing-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/core-routing.module */ "./src/app/views/dashboard/core-routing.module.ts")).then(m => m.CoreRoutingModule)
            },
            {
                path: 'anagrafiche',
                data: {
                    title: 'Anagrafiche'
                },
                loadChildren: () => __webpack_require__.e(/*! import() | views-anagrafiche-anagrafiche-routing-module */ "views-anagrafiche-anagrafiche-routing-module").then(__webpack_require__.bind(null, /*! ./views/anagrafiche/anagrafiche-routing.module */ "./src/app/views/anagrafiche/anagrafiche-routing.module.ts")).then(m => m.AnagraficheRoutingModule)
            }
        ]
    },
    { path: '**', component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }), _views_home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/layout/aside/app-aside.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/aside/app-aside.component.ts ***!
  \*****************************************************/
/*! exports provided: AppAsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAsideComponent", function() { return AppAsideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/layout/shared/index.ts");




let AppAsideComponent = class AppAsideComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'aside-menu-fixed';
        renderer.addClass(hostElement.nativeElement, 'aside-menu');
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = this.display ? `aside-menu-${this.display}-show` : _shared__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"][0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
};
AppAsideComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppAsideComponent.prototype, "display", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppAsideComponent.prototype, "fixed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppAsideComponent.prototype, "offCanvas", void 0);
AppAsideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside, cui-aside',
        template: `<ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppAsideComponent);



/***/ }),

/***/ "./src/app/layout/aside/app-aside.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/aside/app-aside.module.ts ***!
  \**************************************************/
/*! exports provided: AppAsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAsideModule", function() { return AppAsideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/layout/layout.module */ "./src/app/layout/shared/layout/layout.module.ts");
/* harmony import */ var _app_aside_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-aside.component */ "./src/app/layout/aside/app-aside.component.ts");





let AppAsideModule = class AppAsideModule {
};
AppAsideModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
        ],
        exports: [
            _app_aside_component__WEBPACK_IMPORTED_MODULE_4__["AppAsideComponent"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
        ],
        declarations: [
            _app_aside_component__WEBPACK_IMPORTED_MODULE_4__["AppAsideComponent"]
        ]
    })
], AppAsideModule);



/***/ }),

/***/ "./src/app/layout/aside/index.ts":
/*!***************************************!*\
  !*** ./src/app/layout/aside/index.ts ***!
  \***************************************/
/*! exports provided: AppAsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_aside_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-aside.module */ "./src/app/layout/aside/app-aside.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAsideModule", function() { return _app_aside_module__WEBPACK_IMPORTED_MODULE_1__["AppAsideModule"]; });





/***/ }),

/***/ "./src/app/layout/breadcrumb/app-breadcrumb.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/breadcrumb/app-breadcrumb.module.ts ***!
  \************************************************************/
/*! exports provided: AppBreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbModule", function() { return AppBreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-breadcrumb.service */ "./src/app/layout/breadcrumb/app-breadcrumb.service.ts");
/* harmony import */ var _loki_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loki-breadcrumb.component */ "./src/app/layout/breadcrumb/loki-breadcrumb.component.ts");

var AppBreadcrumbModule_1;



// App Breadcrumb Component


// @dynamic
let AppBreadcrumbModule = AppBreadcrumbModule_1 = class AppBreadcrumbModule {
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule_1,
            providers: [
                _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
            ]
        };
    }
};
AppBreadcrumbModule = AppBreadcrumbModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_loki_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["LokiBreadcrumbComponent"]],
        declarations: [_loki_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["LokiBreadcrumbComponent"]]
    })
], AppBreadcrumbModule);



/***/ }),

/***/ "./src/app/layout/breadcrumb/app-breadcrumb.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/breadcrumb/app-breadcrumb.service.ts ***!
  \*************************************************************/
/*! exports provided: AppBreadcrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbService", function() { return AppBreadcrumbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppBreadcrumbService = class AppBreadcrumbService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this._breadcrumbs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((event) => {
            const breadcrumbs = [];
            let currentRoute = this.route.root, url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
};
AppBreadcrumbService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AppBreadcrumbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AppBreadcrumbService);



/***/ }),

/***/ "./src/app/layout/breadcrumb/index.ts":
/*!********************************************!*\
  !*** ./src/app/layout/breadcrumb/index.ts ***!
  \********************************************/
/*! exports provided: AppBreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-breadcrumb.module */ "./src/app/layout/breadcrumb/app-breadcrumb.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbModule", function() { return _app_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__["AppBreadcrumbModule"]; });





/***/ }),

/***/ "./src/app/layout/breadcrumb/loki-breadcrumb.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/breadcrumb/loki-breadcrumb.component.ts ***!
  \****************************************************************/
/*! exports provided: LokiBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokiBreadcrumbComponent", function() { return LokiBreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-breadcrumb.service */ "./src/app/layout/breadcrumb/app-breadcrumb.service.ts");




let LokiBreadcrumbComponent = class LokiBreadcrumbComponent {
    constructor(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
LokiBreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], LokiBreadcrumbComponent.prototype, "fixed", void 0);
LokiBreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'loki-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loki-breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/breadcrumb/loki-breadcrumb.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]])
], LokiBreadcrumbComponent);



/***/ }),

/***/ "./src/app/layout/default-layout/default-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/default-layout/default-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_nav */ "./src/app/_nav.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");





let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor(userService, configurationService, renderer, _document) {
        this.userService = userService;
        this.configurationService = configurationService;
        this.renderer = renderer;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        this.sidebarMinimized = true;
        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
        this.configSubscription = this.configurationService.config$.subscribe(config => {
            this.dataOperativa = config.dataOperativa;
            this.environment = config.environment;
            this.setEnvNavbarColorClass();
        });
        this.username = this.userService.getUsername();
        this.roles = this.userService.getAppRoles();
    }
    getUserAvatarImage() {
        if ("Anonymous" === this.userService.getUsername()) {
            return "assets/images/avatars/anonymous.png";
        }
        return "assets/images/avatars/user.png";
    }
    ngOnDestroy() {
        this.changes.disconnect();
        this.configSubscription.unsubscribe();
    }
    openAppInfoDialog() {
    }
    setEnvNavbarColorClass() {
        let colorClass = 'env-navbar-blue';
        if (this.environment !== 'PRODUCTION') {
            colorClass = 'env-navbar-green';
        }
        this.envNavbarColorClass = colorClass;
    }
};
DefaultLayoutComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
DefaultLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/default-layout/default-layout.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
], DefaultLayoutComponent);



/***/ }),

/***/ "./src/app/layout/default-layout/index.ts":
/*!************************************************!*\
  !*** ./src/app/layout/default-layout/index.ts ***!
  \************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-layout.component */ "./src/app/layout/default-layout/default-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutComponent"]; });





/***/ }),

/***/ "./src/app/layout/footer/app-footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/footer/app-footer.component.ts ***!
  \*******************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AppFooterComponent = class AppFooterComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'footer-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-footer');
    }
    ngOnInit() {
        this.isFixed(this.fixed);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
AppFooterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppFooterComponent.prototype, "fixed", void 0);
AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gepa-footer',
        template: `<ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppFooterComponent);



/***/ }),

/***/ "./src/app/layout/footer/app-footer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/app-footer.module.ts ***!
  \****************************************************/
/*! exports provided: AppFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterModule", function() { return AppFooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-footer.component */ "./src/app/layout/footer/app-footer.component.ts");




let AppFooterModule = class AppFooterModule {
};
AppFooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_app_footer_component__WEBPACK_IMPORTED_MODULE_3__["AppFooterComponent"]],
        declarations: [_app_footer_component__WEBPACK_IMPORTED_MODULE_3__["AppFooterComponent"]]
    })
], AppFooterModule);



/***/ }),

/***/ "./src/app/layout/footer/index.ts":
/*!****************************************!*\
  !*** ./src/app/layout/footer/index.ts ***!
  \****************************************/
/*! exports provided: AppFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-footer.module */ "./src/app/layout/footer/app-footer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooterModule", function() { return _app_footer_module__WEBPACK_IMPORTED_MODULE_1__["AppFooterModule"]; });





/***/ }),

/***/ "./src/app/layout/header/app-header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/header/app-header.component.ts ***!
  \*******************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AppHeaderComponent = class AppHeaderComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        this.navbarBrandRouterLink = '';
        this.fixedClass = 'header-fixed';
        this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
        this.sidebarTogglerClass = 'd-none d-md-block';
        this.sidebarTogglerMobileClass = 'd-lg-none';
        this.asideTogglerClass = 'd-none d-md-block';
        this.asideTogglerMobileClass = 'd-lg-none';
        renderer.addClass(hostElement.nativeElement, 'app-header');
        renderer.addClass(hostElement.nativeElement, 'navbar');
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : '/';
        this.sidebarTogglerClass = this.setToggerBreakpointClass(this.sidebarToggler);
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(this.sidebarToggler);
        this.asideTogglerClass = this.setToggerBreakpointClass(this.asideMenuToggler);
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(this.asideMenuToggler);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    setToggerBreakpointClass(breakpoint = 'md') {
        let togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            const breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = `d-none d-${breakpoint}-block`;
        }
        return togglerClass;
    }
    setToggerMobileBreakpointClass(breakpoint = 'lg') {
        let togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = `d-${breakpoint}-none`;
        }
        return togglerClass;
    }
};
AppHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppHeaderComponent.prototype, "fixed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandFull", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandMinimized", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandRouterLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "sidebarToggler", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileSidebarToggler", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppHeaderComponent.prototype, "asideMenuToggler", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileAsideMenuToggler", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AppHeaderComponent.prototype, "envNavbarColorClass", void 0);
AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header, cui-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/app-header.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/layout/header/app-header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/header/app-header.module.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderModule", function() { return AppHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/layout/layout.module */ "./src/app/layout/shared/layout/layout.module.ts");
/* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-header.component */ "./src/app/layout/header/app-header.component.ts");






let AppHeaderModule = class AppHeaderModule {
};
AppHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
        ],
        exports: [
            _app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
        ],
        declarations: [
            _app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"]
        ]
    })
], AppHeaderModule);



/***/ }),

/***/ "./src/app/layout/header/index.ts":
/*!****************************************!*\
  !*** ./src/app/layout/header/index.ts ***!
  \****************************************/
/*! exports provided: AppHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header.module */ "./src/app/layout/header/app-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderModule", function() { return _app_header_module__WEBPACK_IMPORTED_MODULE_1__["AppHeaderModule"]; });





/***/ }),

/***/ "./src/app/layout/index.ts":
/*!*********************************!*\
  !*** ./src/app/layout/index.ts ***!
  \*********************************/
/*! exports provided: AppAsideModule, AppBreadcrumbModule, DefaultLayoutComponent, AppFooterModule, AppHeaderModule, AppSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/app/layout/aside/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAsideModule", function() { return _aside__WEBPACK_IMPORTED_MODULE_1__["AppAsideModule"]; });

/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb */ "./src/app/layout/breadcrumb/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbModule", function() { return _breadcrumb__WEBPACK_IMPORTED_MODULE_2__["AppBreadcrumbModule"]; });

/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-layout */ "./src/app/layout/default-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/app/layout/footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooterModule", function() { return _footer__WEBPACK_IMPORTED_MODULE_4__["AppFooterModule"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/app/layout/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderModule", function() { return _header__WEBPACK_IMPORTED_MODULE_5__["AppHeaderModule"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar */ "./src/app/layout/sidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarModule", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_6__["AppSidebarModule"]; });










/***/ }),

/***/ "./src/app/layout/shared/classes.ts":
/*!******************************************!*\
  !*** ./src/app/layout/shared/classes.ts ***!
  \******************************************/
/*! exports provided: sidebarCssClasses, asideMenuCssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarCssClasses", function() { return sidebarCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asideMenuCssClasses", function() { return asideMenuCssClasses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
const asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];


/***/ }),

/***/ "./src/app/layout/shared/index.ts":
/*!****************************************!*\
  !*** ./src/app/layout/shared/index.ts ***!
  \****************************************/
/*! exports provided: sidebarCssClasses, asideMenuCssClasses, LayoutModule, Replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/app/layout/shared/classes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarCssClasses", function() { return _classes__WEBPACK_IMPORTED_MODULE_1__["sidebarCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asideMenuCssClasses", function() { return _classes__WEBPACK_IMPORTED_MODULE_1__["asideMenuCssClasses"]; });

/* harmony import */ var _layout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/index */ "./src/app/layout/shared/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return _layout_index__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]; });

/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace */ "./src/app/layout/shared/replace.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replace", function() { return _replace__WEBPACK_IMPORTED_MODULE_3__["Replace"]; });







/***/ }),

/***/ "./src/app/layout/shared/layout/index.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/shared/layout/index.ts ***!
  \***********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.module */ "./src/app/layout/shared/layout/layout.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return _layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]; });





/***/ }),

/***/ "./src/app/layout/shared/layout/layout.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/shared/layout/layout.directive.ts ***!
  \**********************************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, BrandMinimizeDirective, AsideToggleDirective, HtmlAttributesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return SidebarMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return SidebarOffCanvasCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return BrandMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return AsideToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlAttributesDirective", function() { return HtmlAttributesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes */ "./src/app/layout/shared/classes.ts");
/* harmony import */ var _toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-classes */ "./src/app/layout/shared/toggle-classes.ts");





/**
* Allows the sidebar to be toggled via click.
*/
let SidebarToggleDirective = class SidebarToggleDirective {
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const cssClass = this.bp ? `sidebar-${this.bp}-show` : _classes__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"][0];
        this.classToggler.toggleClasses(cssClass, _classes__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"]);
    }
};
SidebarToggleDirective.ctorParameters = () => [
    { type: _toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appSidebarToggler'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SidebarToggleDirective.prototype, "breakpoint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSidebarToggler]',
        providers: [_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"]])
], SidebarToggleDirective);

let SidebarMinimizeDirective = class SidebarMinimizeDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
    }
};
SidebarMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarMinimizeDirective.prototype, "toggleOpen", null);
SidebarMinimizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSidebarMinimizer]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], SidebarMinimizeDirective);

let MobileSidebarToggleDirective = class MobileSidebarToggleDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
    }
};
MobileSidebarToggleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appMobileSidebarToggler]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], MobileSidebarToggleDirective);

/**
* Allows the off-canvas sidebar to be closed via click.
*/
let SidebarOffCanvasCloseDirective = class SidebarOffCanvasCloseDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    }
};
SidebarOffCanvasCloseDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSidebarClose]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], SidebarOffCanvasCloseDirective);

let BrandMinimizeDirective = class BrandMinimizeDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    }
};
BrandMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], BrandMinimizeDirective.prototype, "toggleOpen", null);
BrandMinimizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appBrandMinimizer]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], BrandMinimizeDirective);

/**
* Allows the aside to be toggled via click.
*/
let AsideToggleDirective = class AsideToggleDirective {
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const cssClass = this.bp ? `aside-menu-${this.bp}-show` : _classes__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"][0];
        this.classToggler.toggleClasses(cssClass, _classes__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"]);
    }
};
AsideToggleDirective.ctorParameters = () => [
    { type: _toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appAsideMenuToggler'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AsideToggleDirective.prototype, "breakpoint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAsideMenuToggler]',
        providers: [_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"]])
], AsideToggleDirective);

let HtmlAttributesDirective = class HtmlAttributesDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        const attribs = this.appHtmlAttr;
        for (const attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    }
    setStyle(styles) {
        for (const style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    }
    addClass(classes) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(this.el.nativeElement, element);
        });
    }
    setAttrib(key, value) {
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    }
};
HtmlAttributesDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HtmlAttributesDirective.prototype, "appHtmlAttr", void 0);
HtmlAttributesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHtmlAttr]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], HtmlAttributesDirective);



/***/ }),

/***/ "./src/app/layout/shared/layout/layout.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/shared/layout/layout.module.ts ***!
  \*******************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.directive */ "./src/app/layout/shared/layout/layout.directive.ts");
/* harmony import */ var _toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-classes */ "./src/app/layout/shared/toggle-classes.ts");





let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        exports: [
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["AsideToggleDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["BrandMinimizeDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["MobileSidebarToggleDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarToggleDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarMinimizeDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarOffCanvasCloseDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["HtmlAttributesDirective"]
        ],
        declarations: [
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["AsideToggleDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["BrandMinimizeDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["MobileSidebarToggleDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarToggleDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarMinimizeDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarOffCanvasCloseDirective"],
            _layout_directive__WEBPACK_IMPORTED_MODULE_3__["HtmlAttributesDirective"]
        ],
        providers: [
            _toggle_classes__WEBPACK_IMPORTED_MODULE_4__["ClassToggler"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/shared/replace.ts":
/*!******************************************!*\
  !*** ./src/app/layout/shared/replace.ts ***!
  \******************************************/
/*! exports provided: Replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replace", function() { return Replace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function Replace(el) {
    const nativeElement = el.nativeElement;
    const parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}


/***/ }),

/***/ "./src/app/layout/shared/toggle-classes.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/shared/toggle-classes.ts ***!
  \*************************************************/
/*! exports provided: ToggleClasses, ClassToggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClasses", function() { return ToggleClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassToggler", function() { return ClassToggler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



const RemoveClasses = (NewClassNames) => {
    const MatchClasses = NewClassNames.map((Class) => document.body.classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
};
const ToggleClasses = (Toggle, ClassNames) => {
    const Level = ClassNames.indexOf(Toggle);
    const NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map((Class) => document.body.classList.remove(Class));
    }
    else {
        document.body.classList.add(Toggle);
    }
};
let ClassToggler = class ClassToggler {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    removeClasses(NewClassNames) {
        const MatchClasses = NewClassNames.map((Class) => this.document.body.classList.contains(Class));
        return MatchClasses.indexOf(true) !== -1;
    }
    toggleClasses(Toggle, ClassNames) {
        const Level = ClassNames.indexOf(Toggle);
        const NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((Class) => this.renderer.removeClass(this.document.body, Class));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    }
};
ClassToggler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ClassToggler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ClassToggler);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: AppSidebarFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooterComponent", function() { return AppSidebarFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarFooterComponent = class AppSidebarFooterComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'app-sidebar-footer');
    }
    ngOnInit() { }
};
AppSidebarFooterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AppSidebarFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-footer',
        template: `<ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppSidebarFooterComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-form.component.ts ***!
  \**************************************************************/
/*! exports provided: AppSidebarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFormComponent", function() { return AppSidebarFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarFormComponent = class AppSidebarFormComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-form');
    }
    ngOnInit() { }
};
AppSidebarFormComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AppSidebarFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-form',
        template: `<ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppSidebarFormComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-header.component.ts ***!
  \****************************************************************/
/*! exports provided: AppSidebarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeaderComponent", function() { return AppSidebarHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarHeaderComponent = class AppSidebarHeaderComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-header');
    }
    ngOnInit() { }
};
AppSidebarHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AppSidebarHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-header',
        template: `<ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppSidebarHeaderComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-minimizer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-minimizer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppSidebarMinimizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarMinimizerComponent", function() { return AppSidebarMinimizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AppSidebarMinimizerComponent = class AppSidebarMinimizerComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'button';
        renderer.addClass(hostElement.nativeElement, 'sidebar-minimizer');
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    }
    ngOnInit() { }
};
AppSidebarMinimizerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarMinimizerComponent.prototype, "role", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppSidebarMinimizerComponent.prototype, "toggleOpen", null);
AppSidebarMinimizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-minimizer',
        template: ``,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppSidebarMinimizerComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav.component.ts ***!
  \*************************************************************/
/*! exports provided: AppSidebarNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavComponent", function() { return AppSidebarNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppSidebarNavComponent = class AppSidebarNavComponent {
    constructor(router, renderer, hostElement) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'nav';
        renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
    }
    ngOnChanges(changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
    }
};
AppSidebarNavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AppSidebarNavComponent.prototype, "navItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarNavComponent.prototype, "role", void 0);
AppSidebarNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-sidebar-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppSidebarNavComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav.directive.ts ***!
  \*************************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return NavDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return NavDropdownToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavDropdownDirective = class NavDropdownDirective {
    constructor(el) {
        this.el = el;
    }
    toggle() {
        this.el.nativeElement.classList.toggle('open');
    }
};
NavDropdownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NavDropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNavDropdown]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], NavDropdownDirective);

/**
 * Allows the dropdown to be toggled via click.
 */
let NavDropdownToggleDirective = class NavDropdownToggleDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    }
};
NavDropdownToggleDirective.ctorParameters = () => [
    { type: NavDropdownDirective }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNavDropdownToggle]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav.service.ts ***!
  \***********************************************************/
/*! exports provided: SidebarNavHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavHelper", function() { return SidebarNavHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SidebarNavHelper {
    constructor() {
        this.hasBadge = (item) => Boolean(item.badge);
        this.hasIcon = (item) => Boolean(item.icon);
    }
    itemType(item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children) {
            return 'dropdown';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    }
    getClass(item) {
        const itemType = this.itemType(item);
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
    isActive(router, item) {
        //return router.isActive(item.url, false);
        if (item.url) {
            return router.isActive(item.url, false);
        }
        else {
            for (let i = 0; i < item.children.length; i++) {
                if (item.children[i].url && router.isActive(item.children[i].url, false)) {
                    return true;
                }
            }
            return false;
        }
    }
    getIconClass(item) {
        const classes = {
            'nav-icon': true
        };
        const icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    }
    getBadgeClass(item) {
        const classes = {
            'badge': true
        };
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        return classes;
    }
}


/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-badge.pipe.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-badge.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: AppSidebarNavBadgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavBadgePipe", function() { return AppSidebarNavBadgePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarNavBadgePipe = class AppSidebarNavBadgePipe {
    transform(item, args) {
        const classes = {
            'badge': true
        };
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        return classes;
    }
};
AppSidebarNavBadgePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appSidebarNavBadge'
    })
], AppSidebarNavBadgePipe);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-divider.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-divider.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AppSidebarNavDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavDividerComponent", function() { return AppSidebarNavDividerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarNavDividerComponent = class AppSidebarNavDividerComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarNavDividerComponent.prototype, "item", void 0);
AppSidebarNavDividerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav-divider',
        template: ``
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppSidebarNavDividerComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-dropdown.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-dropdown.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AppSidebarNavDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavDropdownComponent", function() { return AppSidebarNavDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-sidebar-nav.service */ "./src/app/layout/sidebar/app-sidebar-nav.service.ts");



let AppSidebarNavDropdownComponent = class AppSidebarNavDropdownComponent {
    constructor(helper) {
        this.helper = helper;
    }
};
AppSidebarNavDropdownComponent.ctorParameters = () => [
    { type: _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__["SidebarNavHelper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarNavDropdownComponent.prototype, "item", void 0);
AppSidebarNavDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav-dropdown',
        template: `
    <a class="nav-link nav-dropdown-toggle"
       appNavDropdownToggle
       [appHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="helper.getIconClass(item)"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="helper.getBadgeClass(item)">{{ item.badge.text }}</span>
    </a>
    <app-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children">
    </app-sidebar-nav-items>
  `,
        providers: [_app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__["SidebarNavHelper"]],
        styles: [".nav-dropdown-toggle { cursor: pointer; }", ".nav-dropdown-items { display: block; }"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__["SidebarNavHelper"]])
], AppSidebarNavDropdownComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-icon.pipe.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-icon.pipe.ts ***!
  \*****************************************************************************/
/*! exports provided: AppSidebarNavIconPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavIconPipe", function() { return AppSidebarNavIconPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarNavIconPipe = class AppSidebarNavIconPipe {
    transform(item, args) {
        const classes = {
            'nav-icon': true
        };
        const icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    }
};
AppSidebarNavIconPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appSidebarNavIcon'
    })
], AppSidebarNavIconPipe);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-items.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-items.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AppSidebarNavItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavItemsComponent", function() { return AppSidebarNavItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-sidebar-nav.service */ "./src/app/layout/sidebar/app-sidebar-nav.service.ts");





let AppSidebarNavItemsComponent = class AppSidebarNavItemsComponent {
    constructor(helper, router, // Used for template binding, do not remove
    securityService) {
        this.helper = helper;
        this.router = router;
        this.securityService = securityService;
    }
    isVisible(item) {
        if (item.requiredRoles) {
            return this.securityService.checkPermissions(item.requiredRoles);
        }
        // else no restriction
        return true;
    }
};
AppSidebarNavItemsComponent.ctorParameters = () => [
    { type: _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__["SidebarNavHelper"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AppSidebarNavItemsComponent.prototype, "items", void 0);
AppSidebarNavItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav-items',
        template: `
    <ng-container *ngFor="let item of items">
      <ng-container *ngIf="isVisible(item)" [ngSwitch]="helper.itemType(item)">
        <app-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="helper.getClass(item)"
          appNavDropdown
          routerLinkActive="open">
        </app-sidebar-nav-dropdown>
        <app-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-divider>
        <app-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-title>
        <app-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </app-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <app-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </app-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__["SidebarNavHelper"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]])
], AppSidebarNavItemsComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-label.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-label.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AppSidebarNavLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavLabelComponent", function() { return AppSidebarNavLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-sidebar-nav.service */ "./src/app/layout/sidebar/app-sidebar-nav.service.ts");



let AppSidebarNavLabelComponent = class AppSidebarNavLabelComponent {
    constructor(helper) {
        this.helper = helper;
        this.classes = {
            'nav-label': true,
            'active': true
        };
        this.iconClasses = {};
    }
    ngOnInit() {
        this.iconClasses = this.helper.getIconClass(this.item);
    }
    getItemClass() {
        const itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    }
    getLabelIconClass() {
        const variant = `text-${this.item.label.variant}`;
        this.iconClasses[variant] = !!this.item.label.variant;
        const labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    }
};
AppSidebarNavLabelComponent.ctorParameters = () => [
    { type: _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__["SidebarNavHelper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarNavLabelComponent.prototype, "item", void 0);
AppSidebarNavLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav-label',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-sidebar-nav-label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-label.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_2__["SidebarNavHelper"]])
], AppSidebarNavLabelComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-link.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-link.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AppSidebarNavLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavLinkComponent", function() { return AppSidebarNavLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-sidebar-nav.service */ "./src/app/layout/sidebar/app-sidebar-nav.service.ts");





let AppSidebarNavLinkComponent = class AppSidebarNavLinkComponent {
    constructor(document, renderer, helper, router) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
        this.router = router;
        this.classes = { 'nav-link': true };
    }
    ngOnInit() {
        this.linkType = this.isExternalLink() ? 'external' : 'link';
        this.href = this.isDisabled() ? '' : this.item.url;
    }
    getLinkClass() {
        const disabled = this.isDisabled();
        this.classes['disabled'] = disabled;
        this.classes['btn-link'] = disabled;
        if (this.hasVariant()) {
            const variant = `nav-link-${this.item.variant}`;
            this.classes[variant] = true;
        }
        if (this.item.indent && this.item.indent > 0) {
            this.classes[`nav-pad-${this.item.indent}`] = true;
        }
        return this.classes;
    }
    getLinkType() {
        return this.linkType;
    }
    hasVariant() {
        return !!this.item.variant;
    }
    isDisabled() {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    }
    isExternalLink() {
        return this.item.url.substring(0, 4) === 'http';
    }
    hideMobile(uri) {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
        this.redirectTo(uri);
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/app', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
};
AppSidebarNavLinkComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__["SidebarNavHelper"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarNavLinkComponent.prototype, "item", void 0);
AppSidebarNavLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav-link',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-sidebar-nav-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-link.component.html")).default,
        providers: [_app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__["SidebarNavHelper"]],
        styles: ["\n\t\t\t.nav-pad-1 {\n\t\t\t\tpadding-left: 2rem;\n\t\t\t}\n\t\t\t.nav-pad-2 {\n\t\t\t\tpadding-left: 3rem;\n\t\t\t}\n\t\t\t.nav-pad-3 {\n\t\t\t\tpadding-left: 4rem;\n\t\t\t}\n\t\t"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_4__["SidebarNavHelper"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppSidebarNavLinkComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-title.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-title.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AppSidebarNavTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavTitleComponent", function() { return AppSidebarNavTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppSidebarNavTitleComponent = class AppSidebarNavTitleComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        const nativeElement = this.el.nativeElement;
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    addAttribs(attribs, element) {
        if (attribs) {
            for (const attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    }
    setStyle(styles, el) {
        for (const style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    }
    addClass(classes, el) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(el, element);
        });
    }
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
};
AppSidebarNavTitleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarNavTitleComponent.prototype, "item", void 0);
AppSidebarNavTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-nav-title',
        template: '',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], AppSidebarNavTitleComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/layout/shared/index.ts");




let AppSidebarComponent = class AppSidebarComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar');
    }
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    }
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    isMinimized(minimized = this.minimized) {
        if (minimized) {
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        }
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = display ? `sidebar-${display}-show` : _shared__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"][0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
};
AppSidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppSidebarComponent.prototype, "compact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppSidebarComponent.prototype, "display", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppSidebarComponent.prototype, "fixed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppSidebarComponent.prototype, "minimized", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AppSidebarComponent.prototype, "offCanvas", void 0);
AppSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: `<ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppSidebarComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/app-sidebar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar/app-sidebar.module.ts ***!
  \******************************************************/
/*! exports provided: AppSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarModule", function() { return AppSidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/layout/layout.module */ "./src/app/layout/shared/layout/layout.module.ts");
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-sidebar.component */ "./src/app/layout/sidebar/app-sidebar.component.ts");
/* harmony import */ var _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-sidebar-footer.component */ "./src/app/layout/sidebar/app-sidebar-footer.component.ts");
/* harmony import */ var _app_sidebar_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-sidebar-form.component */ "./src/app/layout/sidebar/app-sidebar-form.component.ts");
/* harmony import */ var _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-sidebar-header.component */ "./src/app/layout/sidebar/app-sidebar-header.component.ts");
/* harmony import */ var _app_sidebar_minimizer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-sidebar-minimizer.component */ "./src/app/layout/sidebar/app-sidebar-minimizer.component.ts");
/* harmony import */ var _app_sidebar_nav_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-sidebar-nav.directive */ "./src/app/layout/sidebar/app-sidebar-nav.directive.ts");
/* harmony import */ var _app_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-sidebar-nav.component */ "./src/app/layout/sidebar/app-sidebar-nav.component.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_divider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-divider.component */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-divider.component.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-dropdown.component */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-dropdown.component.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_items_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-items.component */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-items.component.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-link.component */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-link.component.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_title_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-title.component */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-title.component.ts");
/* harmony import */ var _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-sidebar-nav.service */ "./src/app/layout/sidebar/app-sidebar-nav.service.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_label_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-label.component */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-label.component.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_icon_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-icon.pipe */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-icon.pipe.ts");
/* harmony import */ var _app_sidebar_nav_app_sidebar_nav_badge_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-sidebar-nav/app-sidebar-nav-badge.pipe */ "./src/app/layout/sidebar/app-sidebar-nav/app-sidebar-nav-badge.pipe.ts");





// App Sidebar Component





// App SidebarNav Component











let AppSidebarModule = class AppSidebarModule {
};
AppSidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
        ],
        exports: [
            _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_6__["AppSidebarFooterComponent"],
            _app_sidebar_form_component__WEBPACK_IMPORTED_MODULE_7__["AppSidebarFormComponent"],
            _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_8__["AppSidebarHeaderComponent"],
            _app_sidebar_minimizer_component__WEBPACK_IMPORTED_MODULE_9__["AppSidebarMinimizerComponent"],
            _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["AppSidebarComponent"],
            _app_sidebar_nav_app_sidebar_nav_items_component__WEBPACK_IMPORTED_MODULE_14__["AppSidebarNavItemsComponent"],
            _app_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarNavComponent"],
            _app_sidebar_nav_app_sidebar_nav_divider_component__WEBPACK_IMPORTED_MODULE_12__["AppSidebarNavDividerComponent"],
            _app_sidebar_nav_app_sidebar_nav_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["AppSidebarNavDropdownComponent"],
            _app_sidebar_nav_app_sidebar_nav_link_component__WEBPACK_IMPORTED_MODULE_15__["AppSidebarNavLinkComponent"],
            _app_sidebar_nav_app_sidebar_nav_title_component__WEBPACK_IMPORTED_MODULE_16__["AppSidebarNavTitleComponent"],
            _app_sidebar_nav_directive__WEBPACK_IMPORTED_MODULE_10__["NavDropdownDirective"],
            _app_sidebar_nav_directive__WEBPACK_IMPORTED_MODULE_10__["NavDropdownToggleDirective"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
        ],
        declarations: [
            _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_6__["AppSidebarFooterComponent"],
            _app_sidebar_form_component__WEBPACK_IMPORTED_MODULE_7__["AppSidebarFormComponent"],
            _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_8__["AppSidebarHeaderComponent"],
            _app_sidebar_minimizer_component__WEBPACK_IMPORTED_MODULE_9__["AppSidebarMinimizerComponent"],
            _app_sidebar_minimizer_component__WEBPACK_IMPORTED_MODULE_9__["AppSidebarMinimizerComponent"],
            _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["AppSidebarComponent"],
            _app_sidebar_nav_app_sidebar_nav_items_component__WEBPACK_IMPORTED_MODULE_14__["AppSidebarNavItemsComponent"],
            _app_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarNavComponent"],
            _app_sidebar_nav_app_sidebar_nav_divider_component__WEBPACK_IMPORTED_MODULE_12__["AppSidebarNavDividerComponent"],
            _app_sidebar_nav_app_sidebar_nav_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["AppSidebarNavDropdownComponent"],
            _app_sidebar_nav_app_sidebar_nav_link_component__WEBPACK_IMPORTED_MODULE_15__["AppSidebarNavLinkComponent"],
            _app_sidebar_nav_app_sidebar_nav_title_component__WEBPACK_IMPORTED_MODULE_16__["AppSidebarNavTitleComponent"],
            _app_sidebar_nav_directive__WEBPACK_IMPORTED_MODULE_10__["NavDropdownDirective"],
            _app_sidebar_nav_directive__WEBPACK_IMPORTED_MODULE_10__["NavDropdownToggleDirective"],
            _app_sidebar_nav_app_sidebar_nav_label_component__WEBPACK_IMPORTED_MODULE_18__["AppSidebarNavLabelComponent"],
            _app_sidebar_nav_app_sidebar_nav_icon_pipe__WEBPACK_IMPORTED_MODULE_19__["AppSidebarNavIconPipe"],
            _app_sidebar_nav_app_sidebar_nav_badge_pipe__WEBPACK_IMPORTED_MODULE_20__["AppSidebarNavBadgePipe"]
        ],
        providers: [
            _app_sidebar_nav_service__WEBPACK_IMPORTED_MODULE_17__["SidebarNavHelper"]
        ]
    })
], AppSidebarModule);



/***/ }),

/***/ "./src/app/layout/sidebar/index.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/sidebar/index.ts ***!
  \*****************************************/
/*! exports provided: AppSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar.module */ "./src/app/layout/sidebar/app-sidebar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarModule", function() { return _app_sidebar_module__WEBPACK_IMPORTED_MODULE_1__["AppSidebarModule"]; });





/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: DEFAULT_BUILD, DEFAULT_VERSION, EUserRole, localeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _userroles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userroles */ "./src/app/models/userroles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EUserRole", function() { return _userroles__WEBPACK_IMPORTED_MODULE_1__["EUserRole"]; });

/* harmony import */ var _version_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version-model */ "./src/app/models/version-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BUILD", function() { return _version_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BUILD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VERSION", function() { return _version_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_VERSION"]; });

/* harmony import */ var _locale_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-text */ "./src/app/models/locale-text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeText", function() { return _locale_text__WEBPACK_IMPORTED_MODULE_3__["localeText"]; });







/***/ }),

/***/ "./src/app/models/locale-text.ts":
/*!***************************************!*\
  !*** ./src/app/models/locale-text.ts ***!
  \***************************************/
/*! exports provided: localeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeText", function() { return localeText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const localeText = {
    // for filter panel
    page: 'Pagina',
    more: 'più',
    to: 'a',
    of: 'di',
    next: 'successiva',
    last: 'ultima',
    first: 'prima',
    previous: 'precedente',
    loadingOoo: 'caricamento',
    // for set filter
    selectAll: 'seleziona tutto',
    searchOoo: 'cerca...',
    blanks: 'vuota',
    // for number filter and text filter
    filterOoo: 'filtra...',
    equals: 'uguale a',
    notEqual: 'diversa da',
    // for the date filter
    dateFormatOoo: 'dd/mm/yyyy',
    // for number filter
    lessThan: 'minore di',
    greaterThan: 'maggiore di',
    lessThanOrEqual: 'minore o uguale a',
    greaterThanOrEqual: 'maggiore o uguale a',
    inRange: 'nell\'intervallo',
    inRangeStart: 'da',
    inRangeEnd: 'a',
    // for text filter
    contains: 'contiene',
    notContains: 'non contiene',
    startsWith: 'inizia per',
    endsWith: 'finisce per',
    // filter conditions
    andCondition: 'e',
    orCondition: 'o',
    // filter buttons
    applyFilter: 'applica',
    resetFilter: 'reset',
    clearFilter: 'pulisci',
    // the header of the default group column
    group: 'gruppo',
    // tool panel
    columns: 'colonne',
    filters: 'filtri',
    // other
    noRowsToShow: 'lista vuota',
    enabled: 'abilitato',
};


/***/ }),

/***/ "./src/app/models/userroles.ts":
/*!*************************************!*\
  !*** ./src/app/models/userroles.ts ***!
  \*************************************/
/*! exports provided: EUserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUserRole", function() { return EUserRole; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EUserRole;
(function (EUserRole) {
    EUserRole["ANAGRAFICHE_SPI"] = "ROLE_GEPA-ANAGRAFICHE_INGROSSO";
    EUserRole["ANAGRAFICHE_VISUALIZZATORE"] = "ROLE_GEPA-ANAGRAFICHE_MONITOR";
    EUserRole["ANAGRAFICHE_BIL"] = "ROLE_GEPA-ANAGRAFICHE_BILANCIO";
    EUserRole["ANAGRAFICHE_DET"] = "ROLE_GEPA-ANAGRAFICHE_DETTAGLIO";
    EUserRole["CORE_TAV_OP1"] = "ROLE_GEPA-CORE_TVOP1";
    EUserRole["CORE_TAV_OP2"] = "ROLE_GEPA-CORE_TVOP2";
    EUserRole["CORE_OPERATOR"] = "ROLE_GEPA-CORE_OPER";
    EUserRole["CORE_VALID"] = "ROLE_GEPA-CORE_VALID";
})(EUserRole || (EUserRole = {}));


/***/ }),

/***/ "./src/app/models/version-model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/version-model.ts ***!
  \*****************************************/
/*! exports provided: DEFAULT_BUILD, DEFAULT_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BUILD", function() { return DEFAULT_BUILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VERSION", function() { return DEFAULT_VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DEFAULT_BUILD = {
    timestamp: '-',
    type: '-'
};
const DEFAULT_VERSION = {
    name: 'y',
    version: 'x',
    build: DEFAULT_BUILD
};


/***/ }),

/***/ "./src/app/services/appinitializer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/appinitializer.service.ts ***!
  \****************************************************/
/*! exports provided: AppInitializerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitializerService", function() { return AppInitializerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let AppInitializerService = class AppInitializerService {
    constructor(http, userService, configurationService) {
        this.http = http;
        this.userService = userService;
        this.configurationService = configurationService;
    }
    initialize() {
        // initialize config with environment static data and then overload it with server side data
        let appConfig = Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]);
        const promise = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["zip"])(this.http.get(`${appConfig.apiEndpoint}/userprofile`), this.http.get(`${appConfig.apiEndpoint}/applicationconfig`)).toPromise();
        promise.then((results) => {
            const user = results[0];
            console.log('Setting User with ', user);
            this.userService.setUser(user);
            appConfig = Object.assign(appConfig, results[1]);
            console.log('Setting ApplicationConfiguration with ', appConfig);
            this.configurationService.setConfig(appConfig);
        });
        return promise;
    }
};
AppInitializerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }
];
AppInitializerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]])
], AppInitializerService);



/***/ }),

/***/ "./src/app/services/configuration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/configuration.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ConfigurationService = class ConfigurationService {
    constructor() {
        this.configSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.config$ = this.configSource$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(config => !!config));
    } // tslint:disable-line
    setConfig(config) {
        this.configSource$.next(config);
    }
};
ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfigurationService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AppInitializerService, ConfigurationService, LokiHttpInterceptor, SecurityService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _appinitializer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appinitializer.service */ "./src/app/services/appinitializer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppInitializerService", function() { return _appinitializer_service__WEBPACK_IMPORTED_MODULE_1__["AppInitializerService"]; });

/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]; });

/* harmony import */ var _lokihttpinterceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lokihttpinterceptor.service */ "./src/app/services/lokihttpinterceptor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LokiHttpInterceptor", function() { return _lokihttpinterceptor_service__WEBPACK_IMPORTED_MODULE_3__["LokiHttpInterceptor"]; });

/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.service */ "./src/app/services/security.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]; });









/***/ }),

/***/ "./src/app/services/lokihttpinterceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/lokihttpinterceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: LokiHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokiHttpInterceptor", function() { return LokiHttpInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");



let LokiHttpInterceptor = class LokiHttpInterceptor {
    constructor(configurationService) {
        this.configurationService = configurationService;
        this.apiEndpoint = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.apiEndpoint;
            // N.B: In questo caso il BE si può trovare su due endpoint [anagrafiche e pagamenti] per cui
            // deve essere onere del servizio includere la base url
            this.apiEndpoint = '';
        });
    }
    intercept(req, next) {
        // Get the auth header from the service.
        // Clone the request to add the authentication header and the base uri.
        let url;
        // req = req.clone({
        //     withCredentials: true
        // });
        if (req.url.endsWith('.json') || req.url.endsWith('.md')) {
            url = req.url;
        }
        else {
            url = `${this.apiEndpoint}${req.url}`;
        }
        console.log('Injected withCredentials=true for ' + req.url);
        let headers = req.headers;
        // for local basic auth
        // if (localAuth.authToken) {
        //     console.log('adding authToken to request');
        //     headers = headers.set('Authorization', localAuth.authToken);
        // }
        const authReq = req.clone({ url, headers });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    }
};
LokiHttpInterceptor.ctorParameters = () => [
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
];
LokiHttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
], LokiHttpInterceptor);



/***/ }),

/***/ "./src/app/services/security.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/security.service.ts ***!
  \**********************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




let SecurityService = class SecurityService {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.grantedRoles = userService.getRoles();
    }
    /**
     * Questo handler e' invocato dal Router Angular ogni volta che l'utente richiede l'attivazione di una nuova rotta
     * (ad esempio clickando un link del menu' o inserendo direttamente un indirizzo nella barra di navigazione del browser)
     * L'handler verifica, qualora la rotta in questione dichiari una restrizione di accesso basata sui ruoli, che l'utente
     * disponga dei necessari permessi
     **/
    canActivate(route, state) {
        // Verifica se la rotta richiesta presenta delle restrizioni di ruolo.
        // Le restrizioni sono espresse tramite il campo data dell'oggetto Route nei RoutingModule dei singoli moduli
        // (vedi la dichiarazione della rotta /admin nel file app.module.ts)
        if (route.data.roles) {
            const requiredRoles = route.data.roles;
            // Ritorno true e consento la navigazione se l'utente ha i privilegi richiesti
            if (this.checkPermissions(requiredRoles)) {
                return true;
            }
            // L'utente non dispone di permessi sufficienti
            // Posso redirezionare l'utente alla home page o ad un'altra pagina (es. pagina accesso negato o pagina login)
            this.router.navigate(['/error/401'], { queryParams: { returnUrl: state.url }, skipLocationChange: true });
            // In definitiva devo comunque bloccare la navigazione verso la rotta richiesta restituendo false.
            return false;
        }
        // La rotta non richiede permessi particolari, proseguo nella navigazione
        return true;
    }
    checkPermissions(requiredRoles) {
        // Verifico che l'utente disponga di almeno uno dei ruoli richiesti per l'accesso
        if (this.grantedRoles) {
            const intersection = this.grantedRoles.filter(userRole => requiredRoles.includes(userRole));
            if (intersection.length > 0) {
                // L'utente possiede il ruolo richiesto, la guardia restituisce true e la navigazione prosegue
                return true;
            }
        }
        return false;
    }
};
SecurityService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
SecurityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], SecurityService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");



let UserService = class UserService {
    constructor() { }
    setUser(user) {
        this.user = user;
    }
    getUsername() {
        return this.user.username;
    }
    getAuth() {
        if (!!this.user) {
            return window.btoa(this.user.username + ':' + this.user.password);
        }
        return null;
    }
    getRoles() {
        return this.user.roles;
    }
    getAppRoles() {
        return this.user.roles.filter(r => {
            return Object.keys(_models__WEBPACK_IMPORTED_MODULE_2__["EUserRole"]).some((v) => _models__WEBPACK_IMPORTED_MODULE_2__["EUserRole"][v] === r);
        });
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserService);



/***/ }),

/***/ "./src/app/views/app-info/app-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/app-info/app-info.component.ts ***!
  \******************************************************/
/*! exports provided: AppInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoComponent", function() { return AppInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_version_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/version-model */ "./src/app/models/version-model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");




let AppInfoComponent = class AppInfoComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.frontend = _models_version_model__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_VERSION"];
    }
    ngOnInit() { }
};
AppInfoComponent.ctorParameters = () => [
    { type: scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_3__["ActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppInfoComponent.prototype, "frontend", void 0);
AppInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-info/app-info.component.html")).default,
        providers: [scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_3__["ActiveModal"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_3__["ActiveModal"]])
], AppInfoComponent);



/***/ }),

/***/ "./src/app/views/error/401.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/error/401.component.ts ***!
  \**********************************************/
/*! exports provided: P401Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P401Component", function() { return P401Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let P401Component = class P401Component {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log('got returnUrl ' + this.returnUrl);
    }
    goHome() {
        this.router.navigate(['/']);
    }
};
P401Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
P401Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./401.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/401.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], P401Component);



/***/ }),

/***/ "./src/app/views/error/403.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/error/403.component.ts ***!
  \**********************************************/
/*! exports provided: P403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P403Component", function() { return P403Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let P403Component = class P403Component {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log('got returnUrl ' + this.returnUrl);
    }
    goHome() {
        this.router.navigate(['/']);
    }
};
P403Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
P403Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./403.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/403.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], P403Component);



/***/ }),

/***/ "./src/app/views/error/404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let P404Component = class P404Component {
    constructor() { }
};
P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], P404Component);



/***/ }),

/***/ "./src/app/views/error/500.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let P500Component = class P500Component {
    constructor() { }
};
P500Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./500.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], P500Component);



/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");




let HomeComponent = class HomeComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        console.log(userService.getUsername());
        console.log(userService.getRoles());
    }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");




let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    apiEndpoint: 'http://localhost:4289',
    stompBrokerEndpoint: '<spring-managed>',
    production: false,
    activeProfile: '<spring-managed>',
    dataOperativa: '<spring-managed>',
    environment: '<spring-managed>',
    gepaCoreEndpoint: '<spring-managed>',
    gepaMonitoraggioU2AEndpoint: '<spring-managed>',
    gepaProcedureU2AEndpoint: '<spring-managed>',
    gepaAnagraficheU2AEndpoint: '<spring-managed>',
    gepaAnagraficheA2AEndpoint: '<spring-managed>',
    debug: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ISC074\Downloads\wetransfer_gepa-conti-loro-zip_2022-02-01_1312\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map