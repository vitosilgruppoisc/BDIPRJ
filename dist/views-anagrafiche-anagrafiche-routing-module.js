(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-anagrafiche-anagrafiche-routing-module"],{

/***/ "./src/app/views/anagrafiche/anagrafiche-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/anagrafiche/anagrafiche-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AnagraficheRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagraficheRoutingModule", function() { return AnagraficheRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche'
        },
        children: [
            {
                path: 'parties',
                loadChildren: () => Promise.all(/*! import() | parties-parties-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"), __webpack_require__.e("default~inserimento-conto-inserimento-conto-module~parties-parties-module"), __webpack_require__.e("common"), __webpack_require__.e("parties-parties-module")]).then(__webpack_require__.bind(null, /*! ./parties/parties.module */ "./src/app/views/anagrafiche/parties/parties.module.ts")).then(m => m.PartiesModule)
            },
            {
                path: 'conti',
                data: {
                    title: 'Parties'
                },
                loadChildren: () => Promise.all(/*! import() | conti-conti-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"), __webpack_require__.e("default~conti-conti-module~conti-inserimento-conto-inserimento-conto-module"), __webpack_require__.e("common"), __webpack_require__.e("conti-conti-module")]).then(__webpack_require__.bind(null, /*! ./conti/conti.module */ "./src/app/views/anagrafiche/conti/conti.module.ts")).then(m => m.ContiModule)
            },
            {
                path: 'ecctranscodingingrosso',
                data: {
                    title: 'Eccezioni Transcodifica Ingrosso'
                },
                loadChildren: () => Promise.all(/*! import() | ecc-transcoding-ingrosso-ecc-transcoding-ingrosso-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"), __webpack_require__.e("common"), __webpack_require__.e("ecc-transcoding-ingrosso-ecc-transcoding-ingrosso-module")]).then(__webpack_require__.bind(null, /*! ./ecc-transcoding-ingrosso/ecc-transcoding-ingrosso.module */ "./src/app/views/anagrafiche/ecc-transcoding-ingrosso/ecc-transcoding-ingrosso.module.ts")).then(m => m.EccTranscodingIngrossoModule)
            },
            {
                path: 'ecctranscodingretail',
                data: {
                    title: 'Eccezioni Transcodifica Dettaglio'
                },
                loadChildren: () => Promise.all(/*! import() | ecc-transcoding-retail-ecc-transcoding-retail-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"), __webpack_require__.e("common"), __webpack_require__.e("ecc-transcoding-retail-ecc-transcoding-retail-module")]).then(__webpack_require__.bind(null, /*! ./ecc-transcoding-retail/ecc-transcoding-retail.module */ "./src/app/views/anagrafiche/ecc-transcoding-retail/ecc-transcoding-retail.module.ts")).then(m => m.EccTranscodingRetailModule)
            },
            {
                path: 'eccreachabilityretail',
                data: {
                    title: 'Eccezioni Raggiungibilità Dettaglio'
                },
                loadChildren: () => Promise.all(/*! import() | ecc-reachability-retail-ecc-reachability-retail-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"), __webpack_require__.e("common"), __webpack_require__.e("ecc-reachability-retail-ecc-reachability-retail-module")]).then(__webpack_require__.bind(null, /*! ./ecc-reachability-retail/ecc-reachability-retail.module */ "./src/app/views/anagrafiche/ecc-reachability-retail/ecc-reachability-retail.module.ts")).then(m => m.EccReachabilityRetailModule)
            },
            {
                path: 'taskqueue',
                data: {
                    title: 'Task Queue'
                },
                loadChildren: () => Promise.all(/*! import() | task-queue-task-queue-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"), __webpack_require__.e("task-queue-task-queue-module")]).then(__webpack_require__.bind(null, /*! ./task-queue/task-queue.module */ "./src/app/views/anagrafiche/task-queue/task-queue.module.ts")).then(m => m.TaskQueueModule)
            },
            {
                path: 'transcoding',
                data: {
                    title: 'Transcodifica'
                },
                loadChildren: () => Promise.all(/*! import() | transcoding-transcoding-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("common"), __webpack_require__.e("transcoding-transcoding-module")]).then(__webpack_require__.bind(null, /*! ./transcoding/transcoding.module */ "./src/app/views/anagrafiche/transcoding/transcoding.module.ts")).then(m => m.TranscodingModule)
            },
            {
                path: 'reachability',
                data: {
                    title: 'Raggiungibilità'
                },
                loadChildren: () => Promise.all(/*! import() | reachability-reachability-module */[__webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~2739f870"), __webpack_require__.e("default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~43b734f2"), __webpack_require__.e("common"), __webpack_require__.e("reachability-reachability-module")]).then(__webpack_require__.bind(null, /*! ./reachability/reachability.module */ "./src/app/views/anagrafiche/reachability/reachability.module.ts")).then(m => m.ReachabilityModule)
            }
        ]
    }
];
let AnagraficheRoutingModule = class AnagraficheRoutingModule {
};
AnagraficheRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AnagraficheRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-anagrafiche-anagrafiche-routing-module.js.map