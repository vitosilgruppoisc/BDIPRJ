(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.actionRenderModel.detailButton\"   [disabled]=\"!this.actionRenderModel.detailButton.enabled\" [title]=\"this.actionRenderModel.detailButton.label\" (click)=\"navigate(this.actionRenderModel.detailButton.routerLink, this.actionRenderModel.detailButton.params, this.actionRenderModel.detailButton.sessionKey)\">\r\n        <i class=\"far fa-file-alt\"></i>\r\n    </button>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.actionRenderModel.modifyButton\"   [disabled]=\"!this.actionRenderModel.modifyButton.enabled\" [title]=\"this.actionRenderModel.modifyButton.label\" (click)=\"navigate(this.actionRenderModel.modifyButton.routerLink, this.actionRenderModel.modifyButton.params, this.actionRenderModel.modifyButton.sessionKey)\">\r\n        <i class=\"fas fa-edit\"></i>\r\n    </button>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.actionRenderModel.deleteButton\"   [disabled]=\"!this.actionRenderModel.deleteButton.enabled\" [title]=\"this.actionRenderModel.deleteButton.label\" (click)=\"navigate(this.actionRenderModel.deleteButton.routerLink, this.actionRenderModel.deleteButton.params, this.actionRenderModel.deleteButton.sessionKey)\">\r\n        <i class=\"far fa-times-circle\"></i>\r\n    </button>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.actionRenderModel.eraseButton\"   [disabled]=\"!this.actionRenderModel.eraseButton.enabled\" [title]=\"this.actionRenderModel.eraseButton.label\" (click)=\"navigate(this.actionRenderModel.eraseButton.routerLink, this.actionRenderModel.eraseButton.params, this.actionRenderModel.eraseButton.sessionKey)\">\r\n        <i class=\"fas fa-trash\"></i>\r\n    </button>\r\n    <button class=\"btn btn-sm btn-link p-1\" *ngIf=\"!!this.actionRenderModel.selectButton\"   [disabled]=\"!this.actionRenderModel.selectButton.enabled\" [title]=\"this.actionRenderModel.selectButton.label\" (click)=\"navigate(this.actionRenderModel.selectButton.routerLink, this.actionRenderModel.selectButton.params, this.actionRenderModel.selectButton.sessionKey)\">\r\n        <i class=\"fas fa-hand-pointer\"></i>\r\n    </button>\r\n</span>\r\n");

/***/ }),

/***/ "./node_modules/rsql-builder/dist/and.js":
/*!***********************************************!*\
  !*** ./node_modules/rsql-builder/dist/and.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const comparison_group_1 = __webpack_require__(/*! ./comparison-group */ "./node_modules/rsql-builder/dist/comparison-group.js");
function hasOrOperation(operation) {
    let insideBracket = false;
    for (const char of operation) {
        switch (char) {
            case '(':
                insideBracket = true;
                break;
            case ')':
                insideBracket = false;
                break;
            case comparison_group_1.GroupType.OR:
                if (!insideBracket) {
                    return true;
                }
                break;
        }
    }
    return false;
}
/**
 * Generate "and"-group of comparisons
 *
 * @param comparisons List of comparisons or strings (for comparision group)
 * @returns "and"-group string
 *
 * @example
 * import {and, comparison, eq, ge} from 'rsql-builder';
 *
 * const op = and(
 *   comparison('year', ge(1980)),
 *   comparision('director', eq('Quentin Tarantino'))
 * );  // 'year>=1980;director=="Quentin Tarantino"
 */
function and(...comparisons) {
    return comparisons
        .map((comparison) => typeof comparison === 'string' && hasOrOperation(comparison)
        ? `(${comparison})`
        : comparison)
        .join(comparison_group_1.GroupType.AND);
}
exports.default = and;
//# sourceMappingURL=and.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/comparison-group.js":
/*!************************************************************!*\
  !*** ./node_modules/rsql-builder/dist/comparison-group.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupType = void 0;
/**
 * Comparison groups delimeters
 */
var GroupType;
(function (GroupType) {
    GroupType["AND"] = ";";
    GroupType["OR"] = ",";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
//# sourceMappingURL=comparison-group.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/comparison.js":
/*!******************************************************!*\
  !*** ./node_modules/rsql-builder/dist/comparison.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Comparison = void 0;
class Comparison {
    constructor(selector, operation) {
        this._selector = selector;
        this._operation = operation;
    }
    toString() {
        return `${this._selector}${this._operation}`;
    }
}
exports.Comparison = Comparison;
/**
 * Create comparison object
 *
 * @param selector Field name
 * @param operation Operation-instance
 * @returns Instance of Comparison
 *
 * @example
 * import {comparison, eq} from 'rsql-builder';
 *
 * const comp = comparison('field1', eq(200));  // 'field1==200'
 */
function comparison(selector, operation) {
    return new Comparison(selector, operation);
}
exports.default = comparison;
//# sourceMappingURL=comparison.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/eq.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/eq.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create equal operation
 *
 * @param argument Operation argument
 * @returns Equal operation
 *
 * @example
 * import {eq} from 'rsql-builder';
 *
 * const op1 = eq(300);  // '==300'
 * const op2 = eq('Taran*');  // '==Tarant*'
 * const op3 = eq('John Travolta');  // '=="John Travolta"'
 */
function eq(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.EQUAL);
}
exports.default = eq;
//# sourceMappingURL=eq.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/escape-value.js":
/*!********************************************************!*\
  !*** ./node_modules/rsql-builder/dist/escape-value.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EscapedValue = void 0;
const CHARS_TO_ESCAPE = /["'();,=!~<>\s]/;
class EscapedValue {
    constructor(val) {
        this.val = val;
    }
    toString() {
        return this.val;
    }
}
exports.EscapedValue = EscapedValue;
/**
 * Escape string value
 *
 * @param value Value to escape
 * @returns EscapedValue instance
 */
function escapeValue(value) {
    if (value instanceof EscapedValue) {
        return value;
    }
    let val;
    if (typeof value !== 'string') {
        val = value.toString();
    }
    else {
        val = value;
    }
    if (CHARS_TO_ESCAPE.test(val) || val.length === 0) {
        return new EscapedValue(`"${val.replace(/"/g, '\\"')}"`);
    }
    else {
        return new EscapedValue(val);
    }
}
exports.default = escapeValue;
//# sourceMappingURL=escape-value.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/ge.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/ge.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create greater-or-equal operation
 *
 * @param argument Operation argument
 * @returns Greater-or-equal operation
 *
 * @example
 * import {ge} from 'rsql-builder';
 *
 * const op1 = ge(300);  // '>=300'
 * const op2 = ge('Taran*');  // '>=Tarant*'
 * const op3 = ge('John Travolta');  // '>="John Travolta"'
 */
function ge(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.GREATER_OR_EQUAL);
}
exports.default = ge;
//# sourceMappingURL=ge.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/gt.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/gt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create greater-than operation
 *
 * @param argument Operation argument
 * @returns Greater-than operation
 *
 * @example
 * import {gt} from 'rsql-builder';
 *
 * const op1 = gt(300);  // '>300'
 * const op2 = gt('Taran*');  // '>Tarant*'
 * const op3 = gt('John Travolta');  // '>"John Travolta"'
 */
function gt(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.GREATER_THAN);
}
exports.default = gt;
//# sourceMappingURL=gt.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/in-list.js":
/*!***************************************************!*\
  !*** ./node_modules/rsql-builder/dist/in-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_value_1 = __importStar(__webpack_require__(/*! ./escape-value */ "./node_modules/rsql-builder/dist/escape-value.js"));
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create in-list operation
 *
 * @param args Operation argument
 * @returns In-list operation
 *
 * @example
 * import {inList} from 'rsql-builder';
 *
 * const op = inList(
 *  300,
 *  'Taran*',
 *  'John Travolta'
 * );  // '=in=(300,Taran*,"John Travolta")'
 */
function inList(...args) {
    return new operation_1.Operation(new escape_value_1.EscapedValue(`(${args.map(escape_value_1.default)})`), operation_1.Operators.IN);
}
exports.default = inList;
//# sourceMappingURL=in-list.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rsql-builder/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var and_1 = __webpack_require__(/*! ./and */ "./node_modules/rsql-builder/dist/and.js");
Object.defineProperty(exports, "and", { enumerable: true, get: function () { return and_1.default; } });
var comparison_1 = __webpack_require__(/*! ./comparison */ "./node_modules/rsql-builder/dist/comparison.js");
Object.defineProperty(exports, "comparison", { enumerable: true, get: function () { return comparison_1.default; } });
var eq_1 = __webpack_require__(/*! ./eq */ "./node_modules/rsql-builder/dist/eq.js");
Object.defineProperty(exports, "eq", { enumerable: true, get: function () { return eq_1.default; } });
var ge_1 = __webpack_require__(/*! ./ge */ "./node_modules/rsql-builder/dist/ge.js");
Object.defineProperty(exports, "ge", { enumerable: true, get: function () { return ge_1.default; } });
var gt_1 = __webpack_require__(/*! ./gt */ "./node_modules/rsql-builder/dist/gt.js");
Object.defineProperty(exports, "gt", { enumerable: true, get: function () { return gt_1.default; } });
var in_list_1 = __webpack_require__(/*! ./in-list */ "./node_modules/rsql-builder/dist/in-list.js");
Object.defineProperty(exports, "inList", { enumerable: true, get: function () { return in_list_1.default; } });
var le_1 = __webpack_require__(/*! ./le */ "./node_modules/rsql-builder/dist/le.js");
Object.defineProperty(exports, "le", { enumerable: true, get: function () { return le_1.default; } });
var lt_1 = __webpack_require__(/*! ./lt */ "./node_modules/rsql-builder/dist/lt.js");
Object.defineProperty(exports, "lt", { enumerable: true, get: function () { return lt_1.default; } });
var ne_1 = __webpack_require__(/*! ./ne */ "./node_modules/rsql-builder/dist/ne.js");
Object.defineProperty(exports, "ne", { enumerable: true, get: function () { return ne_1.default; } });
var or_1 = __webpack_require__(/*! ./or */ "./node_modules/rsql-builder/dist/or.js");
Object.defineProperty(exports, "or", { enumerable: true, get: function () { return or_1.default; } });
var out_list_1 = __webpack_require__(/*! ./out-list */ "./node_modules/rsql-builder/dist/out-list.js");
Object.defineProperty(exports, "outList", { enumerable: true, get: function () { return out_list_1.default; } });
var operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
Object.defineProperty(exports, "Operation", { enumerable: true, get: function () { return operation_1.Operation; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/le.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/le.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create less-or-equal operation
 *
 * @param argument Operation argument
 * @returns Less-or-equal operation
 *
 * @example
 * import {le} from 'rsql-builder';
 *
 * const op1 = le(300);  // '<=300'
 * const op2 = le('Taran*');  // '<=Tarant*'
 * const op3 = le('John Travolta');  // '<="John Travolta"'
 */
function le(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.LESS_OR_EQUAL);
}
exports.default = le;
//# sourceMappingURL=le.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/lt.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/lt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create less-than operation
 *
 * @param argument Operation argument
 * @returns Less-than operation
 *
 * @example
 * import {lt} from 'rsql-builder';
 *
 * const op1 = lt(300);  // '<300'
 * const op2 = lt('Taran*');  // '<Tarant*'
 * const op3 = lt('John Travolta');  // '<"John Travolta"'
 */
function lt(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.LESS_THAN);
}
exports.default = lt;
//# sourceMappingURL=lt.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/ne.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/ne.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create not-equal operation
 *
 * @param argument Operation argument
 * @returns Not-equal operation
 *
 * @example
 * import {ne} from 'rsql-builder';
 *
 * const op1 = ne(300);  // '!=300'
 * const op2 = ne('Taran*');  // '!=Tarant*'
 * const op3 = ne('John Travolta');  // '!="John Travolta"'
 */
function ne(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.NOT_EQUAL);
}
exports.default = ne;
//# sourceMappingURL=ne.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/operation.js":
/*!*****************************************************!*\
  !*** ./node_modules/rsql-builder/dist/operation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = exports.Operators = void 0;
const escape_value_1 = __importDefault(__webpack_require__(/*! ./escape-value */ "./node_modules/rsql-builder/dist/escape-value.js"));
/**
 * Operators signs
 */
var Operators;
(function (Operators) {
    Operators["EQUAL"] = "==";
    Operators["NOT_EQUAL"] = "!=";
    Operators["LESS_THAN"] = "<";
    Operators["LESS_OR_EQUAL"] = "<=";
    Operators["GREATER_THAN"] = ">";
    Operators["GREATER_OR_EQUAL"] = ">=";
    Operators["IN"] = "=in=";
    Operators["OUT"] = "=out=";
})(Operators = exports.Operators || (exports.Operators = {}));
class Operation {
    constructor(args, operator = Operators.EQUAL) {
        this._args = args;
        this._operator = operator;
    }
    toString() {
        return `${this._operator}${escape_value_1.default(this._args)}`;
    }
}
exports.Operation = Operation;
//# sourceMappingURL=operation.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/or.js":
/*!**********************************************!*\
  !*** ./node_modules/rsql-builder/dist/or.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const comparison_group_1 = __webpack_require__(/*! ./comparison-group */ "./node_modules/rsql-builder/dist/comparison-group.js");
/**
 * Create "or"-group operation
 *
 * @param argument Operation argument
 * @returns Less-or-equal operation
 *
 * @example
 * import {comparison, eq, ge, or} from 'rsql-builder';
 *
 * const op = or(
 *   comparison('year', ge(1980)),
 *   comparision('director', eq('*Nolan'))
 * );  // 'year>=1980,director==*Nolan
 */
function or(...comparisons) {
    return comparisons.join(comparison_group_1.GroupType.OR);
}
exports.default = or;
//# sourceMappingURL=or.js.map

/***/ }),

/***/ "./node_modules/rsql-builder/dist/out-list.js":
/*!****************************************************!*\
  !*** ./node_modules/rsql-builder/dist/out-list.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_value_1 = __importStar(__webpack_require__(/*! ./escape-value */ "./node_modules/rsql-builder/dist/escape-value.js"));
const operation_1 = __webpack_require__(/*! ./operation */ "./node_modules/rsql-builder/dist/operation.js");
/**
 * Create out-list operation
 *
 * @param args Operation argument
 * @returns out-list operation
 *
 * @example
 * import {outList} from 'rsql-builder';
 *
 * const op = outList(
 *  300,
 *  'Taran*',
 *  'John Travolta'
 * );  // '=out=(300,Taran*,"John Travolta")'
 */
function outList(...args) {
    return new operation_1.Operation(new escape_value_1.EscapedValue(`(${args.map(escape_value_1.default)})`), operation_1.Operators.OUT);
}
exports.default = outList;
//# sourceMappingURL=out-list.js.map

/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/app/services/configuration.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TaskService = class TaskService {
    constructor(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.apiEndpoint = '';
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }
    getTipoTask() {
        return this.http.get(`${this.apiEndpoint}/tipiTask`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getOperazione() {
        return this.http.get(`${this.apiEndpoint}/tipiOperazione`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getStatoTask() {
        return this.http.get(`${this.apiEndpoint}/statiStaging`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTasks(searchString) {
        return this.http.get(`${this.apiEndpoint}/tasks?${searchString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTaskParty(id) {
        return this.http.get(`${this.apiEndpoint}/tasks/${id}/party`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    saveTaskParty(taskParty) {
        return this.http.post(`${this.apiEndpoint}/tasks/party`, taskParty).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    confermaTaskParty(task) {
        return this.patchTaskParty(task);
    }
    rifiutaTaskParty(task) {
        return this.patchTaskParty(task);
    }
    patchTaskParty(task) {
        return this.http.patch(`${this.apiEndpoint}/tasks/${task.id}/party`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTaskConto(id) {
        return this.http.get(`${this.apiEndpoint}/tasks/${id}/conto`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    saveTaskConto(taskConto) {
        return this.http.post(`${this.apiEndpoint}/tasks/conto`, taskConto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    confermaTaskConto(task) {
        return this.patchTaskConto(task);
    }
    rifiutaTaskConto(task) {
        return this.patchTaskConto(task);
    }
    patchTaskConto(task) {
        return this.http.patch(`${this.apiEndpoint}/tasks/${task.id}/conto`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTaskSfruttamentoAnsyDca(id) {
        return this.http.get(`${this.apiEndpoint}/tasks/${id}/sfruttamentoDca`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    saveTaskSfruttamentoAnsyDca(taskSfruttamentoAnsyDca) {
        return this.http.post(`${this.apiEndpoint}/tasks/sfruttamentoDca`, taskSfruttamentoAnsyDca).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    confermaTaskSfruttamentoAnsyDca(task) {
        return this.patchTaskSfruttamentoAnsyDca(task);
    }
    rifiutaTaskSfruttamentoAnsyDca(task) {
        return this.patchTaskSfruttamentoAnsyDca(task);
    }
    patchTaskSfruttamentoAnsyDca(task) {
        return this.http.patch(`${this.apiEndpoint}/tasks/${task.id}/sfruttamentoDca`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTaskEccTranscodingIngrosso(id) {
        return this.http.get(`${this.apiEndpoint}/tasks/${id}/eccTranscodingIngrosso`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrosso) {
        return this.http.post(`${this.apiEndpoint}/tasks/eccTranscodingIngrosso`, taskEccTranscodingIngrosso).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    confermaTaskEccTranscodingIngrosso(task) {
        return this.patchTaskEccTranscodingIngrosso(task);
    }
    rifiutaTaskEccTranscodingIngrosso(task) {
        return this.patchTaskEccTranscodingIngrosso(task);
    }
    patchTaskEccTranscodingIngrosso(task) {
        return this.http.patch(`${this.apiEndpoint}/tasks/${task.id}/eccTranscodingIngrosso`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    saveTaskEccTranscodingRetail(taskEccTranscodingRetail) {
        return this.http.post(`${this.apiEndpoint}/tasks/eccTranscodingRetail`, taskEccTranscodingRetail).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTaskEccTranscodingRetail(id) {
        return this.http.get(`${this.apiEndpoint}/tasks/${id}/eccTranscodingRetail`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    confermaTaskEccTranscodingRetail(task) {
        return this.patchTaskEccTranscodingRetail(task);
    }
    rifiutaTaskEccTranscodingRetail(task) {
        return this.patchTaskEccTranscodingRetail(task);
    }
    patchTaskEccTranscodingRetail(task) {
        return this.http.patch(`${this.apiEndpoint}/tasks/${task.id}/eccTranscodingRetail`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    saveTaskEccReachabilityRetail(taskEccReachabilityRetail) {
        return this.http.post(`${this.apiEndpoint}/tasks/eccReachabilityRetail`, taskEccReachabilityRetail).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    getTaskEccReachabilityRetail(id) {
        return this.http.get(`${this.apiEndpoint}/tasks/${id}/eccReachabilityRetail`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    confermaTaskEccReachabilityRetail(task) {
        return this.patchTaskEccReachabilityRetail(task);
    }
    rifiutaTaskEccReachabilityRetail(task) {
        return this.patchTaskEccReachabilityRetail(task);
    }
    patchTaskEccReachabilityRetail(task) {
        return this.http.patch(`${this.apiEndpoint}/tasks/${task.id}/eccReachabilityRetail`, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], TaskService);



/***/ }),

/***/ "./src/app/utilities/filterUtils.ts":
/*!******************************************!*\
  !*** ./src/app/utilities/filterUtils.ts ***!
  \******************************************/
/*! exports provided: FilterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return FilterUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterUtils = class FilterUtils {
    getFilters(gridOptions) {
        let array = [];
        gridOptions.api.forEachNodeAfterFilterAndSort(function (node) {
            array.push(node.data);
        });
        let newFilters = [];
        array.forEach(keys => {
            let idfiltrato = keys.id;
            if (idfiltrato != null || idfiltrato != undefined) {
                newFilters.push({ 'id': idfiltrato });
            }
        });
        return array;
    }
};
FilterUtils = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilterUtils);



/***/ }),

/***/ "./src/app/utilities/rsqlUtil.ts":
/*!***************************************!*\
  !*** ./src/app/utilities/rsqlUtil.ts ***!
  \***************************************/
/*! exports provided: RSQLUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSQLUtils", function() { return RSQLUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rsql_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rsql-builder */ "./node_modules/rsql-builder/dist/index.js");
/* harmony import */ var rsql_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rsql_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let RSQLUtils = class RSQLUtils {
    constructor() { }
    manageWildcard(value, field) {
        let searchString = '';
        if (!!value) {
            if (this.hasWildcard(value)) {
                searchString = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, new rsql_builder__WEBPACK_IMPORTED_MODULE_1__["Operation"](value.replace(/%/g, '*'), '==')));
            }
            else {
                searchString = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["eq"])(value)));
            }
        }
        return searchString;
    }
    manageSelect(value, field) {
        let searchString = '';
        if (!!value) {
            searchString = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["eq"])(value)));
        }
        return searchString;
    }
    manageBooleanSelect(value, field) {
        let searchString = '';
        if (!!value || (typeof (value) === 'number' && (value === 0 || value === 1))) {
            if (value === 1) {
                searchString = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["eq"])(value)));
            }
            if (value === 0) {
                searchString = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["or"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["eq"])(value)), field.concat('=isnull=null'));
            }
        }
        return searchString;
    }
    manageIn(values, field) {
        let searchString = '';
        if (!!values && values.length > 0) {
            searchString = field.concat('=in=(');
            values.forEach(v => {
                searchString = searchString.concat(v).concat(',');
            });
            searchString = searchString.substring(0, searchString.length - 1);
            searchString = searchString.concat(')');
        }
        return searchString;
    }
    managerRange(value1, value2, field) {
        let searchString = '';
        if (!!value1) {
            searchString = Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["ge"])(value1)));
        }
        if (!!value2) {
            if (!!value1) {
                searchString = searchString.concat(';');
            }
            searchString.concat();
            searchString = searchString.concat(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["comparison"])(field, Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["le"])(value2))));
        }
        return searchString;
    }
    hasWildcard(val) {
        return (val.indexOf('%') !== -1);
    }
    getSearchString(rSQLArrayInput) {
        let searchString = '';
        const rSQLArray = rSQLArrayInput.filter(r => r !== '');
        if (!!rSQLArray && rSQLArray.length > 0) {
            searchString = searchString.concat(Object(rsql_builder__WEBPACK_IMPORTED_MODULE_1__["and"])(...rSQLArray));
        }
        if (!!searchString) {
            searchString = 'search='.concat(searchString);
        }
        return searchString;
    }
};
RSQLUtils = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RSQLUtils);



/***/ }),

/***/ "./src/app/utilities/util.ts":
/*!***********************************!*\
  !*** ./src/app/utilities/util.ts ***!
  \***********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Utils = class Utils {
    constructor() { }
    getWildcardTooltip() {
        return 'Sul campo è abilitata la ricerca per wildcard (ad es. %xx%). La wildcard può essere utilizzata sia all’inizio che alla fine della stringa. Se la ricerca è con wildcard, dovranno essere inseriti almeno 2 caratteri, caratteri di wildcard esclusi.';
    }
    getModificaMessage() {
        return 'Attenzione il comportamento dell\'applicazione è differente a seconda che si valorizzi o meno la data di inizio validità: \<ul\>\<li\>\<b\>Se valorizzata\<\/b\>: la modifica chiude il record corrente e ne inserisce uno con i dati aggiornati\<li\><b\>Se non valorizzata\<\/b\>: la modifica aggiorna direttamente il record corrente\<\/li\>\<\/ul\>';
    }
};
Utils = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Utils);



/***/ }),

/***/ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi92aWV3cy9hbmFncmFmaWNoZS9nZW5lcmljLWFjdGlvbi1yZW5kZXIvZ2VuZXJpYy1hY3Rpb24tcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GenericActionRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericActionRenderComponent", function() { return GenericActionRenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let GenericActionRenderComponent = class GenericActionRenderComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
    }
    agInit(params) {
        this.params = params;
        this.actionRenderModel = this.params.modelFn(this.params.node.data);
    }
    navigate(route, routeParam, sessionKey) {
        this.ngZone.run(() => {
            let navigationExtras = {};
            if (!!sessionKey) {
                sessionStorage.setItem(sessionKey, JSON.stringify(routeParam));
            }
            if (!!routeParam) {
                navigationExtras = {
                    queryParams: routeParam
                };
            }
            this.router.navigate([route], navigationExtras);
        });
    }
    refresh() {
        return false;
    }
};
GenericActionRenderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GenericActionRenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generic-action-render',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generic-action-render.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./generic-action-render.component.scss */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GenericActionRenderComponent);



/***/ }),

/***/ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/anagrafiche/generic-action-render/generic-action-render.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: GenericActionRenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericActionRenderModule", function() { return GenericActionRenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _generic_action_render_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-action-render.component */ "./src/app/views/anagrafiche/generic-action-render/generic-action-render.component.ts");
/* harmony import */ var scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scam-bdi-uikit */ "./node_modules/scam-bdi-uikit/fesm2015/scam-bdi-uikit.js");





let GenericActionRenderModule = class GenericActionRenderModule {
};
GenericActionRenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_generic_action_render_component__WEBPACK_IMPORTED_MODULE_3__["GenericActionRenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__["BDIDatagridModule"].forRoot(),
            scam_bdi_uikit__WEBPACK_IMPORTED_MODULE_4__["BDITooltipModule"].forRoot(),
        ],
        exports: [_generic_action_render_component__WEBPACK_IMPORTED_MODULE_3__["GenericActionRenderComponent"]],
    })
], GenericActionRenderModule);



/***/ })

}]);
//# sourceMappingURL=default~conti-conti-module~ecc-reachability-retail-ecc-reachability-retail-module~ecc-transcoding-in~7a9aeb87.js.map