(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<body>\n\n  <!----  sec -1 ------->\n<div>\n  <section class=\"about\">\n    <article class=\"abt-l-1 col-lg-6 col-md-6  col-sm-12 align-top\">\n      <div class=\"shape-l-2   d-inline-block\"></div>\n      <div class=\"shape-l-3   d-inline-block\"></div>\n     <div class=\"mp d-inline-block\">\n      <img class=\"mypic col-lg-10 col-sm-8\" [src]=\"mypic\" alt=\"\">\n     </div>\n      <div class=\"shape-l-4\"></div>\n    </article>\n    <article class=\"abt-r-1 col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"abttitletxt\">{{abouttitletxt}}</div>\n      <div class='text-left abtbiotxt col-lg-11'>{{aboutbiotxt}}</div>\n      <div class=\"shape-r-3 text-center m-auto\"></div>\n    </article>\n  </section>\n</div>\n  <!----  sec -2 ------->\n\n\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-home></app-home>\r\n<app-about></app-about>\r\n<app-skills></app-skills>\r\n<app-works></app-works>\r\n<app-contact></app-contact>\r\n<app-footer></app-footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-us\">\n<div class=\"hire-me\">\n  <h1>Work together with me ?</h1>\n  <p>Simple call or drop a message</p>\n  <div>\n    <button class=\"hire-btn\">HIRE ME</button>\n  </div>\n  <div class=\"c-details\">\n    <ul>\n      <li class=\"list-unstyled \">\n        <ul>\n          <li class=\"list-unstyled d-inline-block\">\n            <img src=\"../../assets/hire-me/mail.png\" alt=\"\">\n          </li>\n          <li class=\"list-unstyled d-inline-block ml-3\"><a href=\"mailto:mandavishnu23@gmial.com\">mandavishnu23@gmail.com</a></li>\n        </ul>\n      </li>\n      <li class=\"list-unstyled mt-4\">\n        <ul>\n          <li class=\"list-unstyled d-inline-block\">\n            <img src=\"../../assets/hire-me/mobile.png\" alt=\"\">\n          </li>\n          <li class=\"list-unstyled d-inline-block ml-3\"><a href=\"tel:+917416898381\">+917416898381</a></li>\n        </ul>\n      </li>\n\n      <li class=\"list-unstyled mt-4\">\n        <ul>\n          <li class=\"list-unstyled d-inline-block\">\n            <img src=\"../../assets/hire-me/location.png\" alt=\"\">\n          </li>\n          <li class=\"list-unstyled d-inline-block ml-3\">\n            <a href=\"https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4128084,78.1278398,10z/data\n            =!3m1!4b1!4m5!3m4!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671\n              \" TARGET=\"_blank\">\n              Hyderabad, INDIA</a>\n          </li>\n        </ul>\n      </li>\n\n    </ul>\n\n\n  </div>\n\n</div>\n  <div class=\"hire-details\">\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <fieldset>\n    <legend>Filter Products</legend>\n    <div class=\"from-group\">\n      <input type=\"radio\" [(ngModel)]=\"SelectedCategoryValue\"\n      value=\"All\" name=\"choose\"\n             (change)=\"onCategoryChanged()\">All\n\n      <input type=\"radio\" [(ngModel)]=\"SelectedCategoryValue\"\n      value=\"Development\" name=\"choose\"\n       (change)=\"onCategoryChanged()\">\n      Development  {{Development}}\n\n      <input type=\"radio\" [(ngModel)]=\"SelectedCategoryValue\"\n             value=\"Design\" name=\"choose\"\n             (change)=\"onCategoryChanged()\">\n      Design {{Design}}\n    </div>\n  </fieldset>\n\n\n</div>\n<div>\n  <ul>\n    <li>\n      <label>\n        <input type=\"radio\" value=\"Development\" [(ngModel)]=\"SelectedCategoryValue\" (change)=\"onCategoryChanged()\">    Development\n      </label>\n\n    </li>\n\n\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div>\n    <ul>\n      <li class=\"list-unstyled d-lg-inline-block\"><a href=\"\" class=\"\"><i class=\"fab fa-facebook\"></i><span class=\"ml-3\">Facebook</span></a></li>\n      <li class=\"list-unstyled ml-lg-5 d-lg-inline-block\"><a href=\"\" class=\"\"><i class=\"fab fa-instagram\"></i><span class=\"ml-3\">Instagram</span></a></li>\n      <li class=\"list-unstyled ml-lg-5 d-lg-inline-block\"><a href=\"\" class=\"\"><i class=\"fab fa-linkedin\"></i><span class=\"ml-3\">Instagram</span></a></li>\n    </ul>\n  </div>\n  <div class=\"cpr\">\n    <p>© 2019 Vishnu Manda All rights reserved.</p>\n  </div>\n\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"home\" [ngStyle]=\"{'background-image': bgImg(), 'height' : '720px', 'max-width': '100%' }\">\r\n    <div class=\"home-txt-sec ml-5\">\r\n        <div class=\"portfolio-text\">\r\n          <ul>\r\n            <li class=\"h-p-shape align-middle\"></li>\r\n            <li class=\"h-p-s ml-4\">Portfolio</li>\r\n          </ul>\r\n        </div>\r\n\r\n      <div class=\"h-txt\">\r\n       <ul>\r\n         <li class=\"hi\">Hi, I am</li>\r\n         <li class=\"name h2\">VISHNU <h3>MANDA</h3></li>\r\n         <li class=\"role\">Front-End Developer & UI Designer</li>\r\n       </ul>\r\n      </div>\r\n      <div class=\"start\">\r\n        <ul>\r\n          <li><button class=\"btn o-gd-bg-clr text-white\">HIRE ME</button></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"h-social\">\r\n     <ul>\r\n       <li>\r\n         <a href=\"\"><i class=\"fab fa-behance\"></i></a>\r\n         <a href=\"\"><i class=\"fab fa-dribbble ml-5\"></i></a>\r\n         <a href=\"https://github.com/vishnumanda\"><i class=\"fab fa-github ml-5\"></i></a>\r\n       </li>\r\n\r\n     </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-filter\n  [All]=\"All\"\n  [Development]=\"Development\"\n  [Design]=\"Design\"\n  (ComponentChanged)=\"onCategoryChanged($event)\">\n  </app-filter>\n\n <div>\n\n   <h2>Products List</h2>\n   <table class=\"table table-hover\">\n     <thead>\n     <th>Name</th>\n     <th>Price</th>\n     <th>Category</th>\n     </thead>\n   </table>\n   <tbody>\n    <ng-container *ngFor=\"let product of data\">\n      <tr class=\"card\" *ngIf=\"SelectedValue == 'All'\n      || SelectedValue == product.Category \">\n      <td>{{product.Name}}</td>\n      <td>{{product.Price}}</td>\n      <td>{{product.Category}}</td>\n      </tr>\n    </ng-container>\n   </tbody>\n </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<div>\n  <!-- skills -->\n  <div class=\"\">\n    <ul class=\"ul-1\">\n      <li class=\"shape-1 arrow-up\"></li>\n    </ul>\n  </div>\n  <div >\n    <ul class=\"ul-2\">\n      <li class=\"shape-2 bg\"></li>\n      <li class=\"dsgt-shape d-i-b bg\" ><span ></span></li>\n      <li class=\"skillstitle d-i-b ml-4\"><span class=\"dsg\">Design</span><span>and</span><span class=\"dev\">Development Skills</span></li>\n      <li class=\"myskbg ml-5 bg\">MY SKILLS</li>\n      <li class=\"shape-3 align-items-end align-self-end align-bottom bg\"></li>\n    </ul>\n  </div>\n  <div>\n    <ul>\n      <li class=\"shape-4 bg \"></li>\n    </ul>\n  </div>\n  <!-- Skils -->\n  <div class=\"myskills\">\n    <table cellpadding=\"10\">\n      <tr *ngFor=\"let skill of skills; let i=index;\">\n        <td class=\"icons\"><img class=\"icon\" [src]=\"skill.img\" alt=\"\"></td>\n        <td class=\"s-name \">{{skill.title}}</td>\n        <td  class=\"s-list\">{{skill.skillsList}}</td>\n      </tr>\n    </table>\n  </div>\n</div>\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/workdetails/workdetails.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workdetails/workdetails.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"myWorks\">\n\n  <!-- nav list begin--->\n <div class=\"text-center\">\n    <div class=\"works-nav\">\n      <ul>\n        <li class=\"nav-link  d-lg-inline-block\"><a class=\"nav-item active\" href=\"#\">ALL</a></li>\n        <li class=\"nav-link d-lg-inline-block\"><a class=\"nav-item\" href=\"#\">FRONT-END</a></li>\n        <li class=\"nav-link d-lg-inline-block\"><a class=\"nav-item\" href=\"#\">UI DESIGN</a></li>\n        <li class=\"nav-link d-lg-i'7nline-block\" [ngModel]=\"changeToFrontEnd()\"><a class=\"nav-item\" href=\"#\">GRAPHIC DESIGN</a></li>\n      </ul>\n    </div>\n  </div>\n  <!-- nav list end--->\n  <div class=\"text-center\">\n    <div class=\"img-list\">\n      <div class=\"img m-auto\">\n        <div class=\"card works-gallery\" *ngFor=\"let work of worksData\" >\n          <div class=\"img\">\n            <div class=\"imgBox\">\n              <img [src]=\"work.img\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"content\">\n                <h2>Lorem ipsum dolor sit amet.</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at consectetur doloremque itaque laborum provident quam, sint sunt unde voluptatibus!\n                </p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!----  explore more works --->\n  <div class=\"text-center mt-5\">\n    <button class=\"btn v-al\">\n      <i class=\"fas fa-chevron-circle-right\"></i>\n      <a href=\"\" class=\"text-white ml-2\">View all</a>\n    </button>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/works/works.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/works/works.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"myWorks\">\r\n\r\n<section>\r\n<table>\r\n\r\n  <tr class=\"text-lg-left\">\r\n    <td><h1 class=\"wks-title\">Works</h1></td>\r\n    <td>\r\n      <a class=\"viw-al \" href=\"\">\r\n        <img class=\"viw-al-icon\" src=\"../../assets/works/view-all-works.png\" alt=\"\">\r\n\r\n        <img class=\"viw-al-icon-25 d-n-b\" src=\"../../assets/works/view-all-works-25px.png\" alt=\"\">\r\n        <span class=\"ml-lg-3 ml-md-2 ml-sm-2 d-n-b viw-al-text\">View all works</span></a>\r\n    </td>\r\n  </tr>\r\n\r\n  <tr>\r\n    <td class=\"img-1\">\r\n      <img src=\"../../assets/works/img-2.png\" alt=\"\">\r\n    </td>\r\n  </tr>\r\n\r\n  <tr class=\"img-2\">\r\n    <td><img src=\"../../assets/works/img-3.png\" alt=\"\"></td>\r\n    <td><img src=\"../../assets/works/img-4.png\" alt=\"\"></td>\r\n  </tr>\r\n</table>\r\n</section>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n  background: #f4eeea;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\narticle{\r\n  display: inline-block;\r\n}\r\nli{\r\n  list-style: none;\r\n}\r\n.abt-l-1{\r\n  background: #f6ede8;\r\n  padding-top: 100px;\r\n}\r\n.shape-l-1{\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n  border-top: 25px solid #eec482;\r\n  margin-left: 50px;\r\n  }\r\n.shape-l-2{\r\n  width: 100px;\r\n  height: 100px;\r\n  background: #a773c3;\r\n  border-radius: 50px;\r\n  vertical-align: bottom;\r\n}\r\n.shape-l-3{\r\n  width: 22px;\r\n  height: 22px;\r\n  background: #f6cf19;\r\n  border-radius: 10px;\r\n}\r\n.shape-l-4{\r\n  background: #73aaec;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: relative;\r\n  -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-top: 60px;\r\n  margin-bottom: 100px;\r\n}\r\n.mp{\r\n  margin-left: 60px;\r\n}\r\n.mp:before{\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n  border-top: 25px solid #b69ff1;\r\n  margin-left: 50px;\r\n}\r\n.mp::after{\r\n  content: '';\r\n  float: right;\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  width: 22px;\r\n  height: 22px;\r\n  background: #f68119;\r\n  border-radius: 10px;\r\n}\r\n.abttitletxt{\r\n  font-size: 40px;\r\n  color: #833da9;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n  text-align: center;\r\n  margin-left: -50px;\r\n  margin-top: 100px;\r\n}\r\n.abttitletxt:before{\r\n  content: '';\r\n  display: block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: transparent;\r\n  border: 5px solid #b69ff1;\r\n  border-radius: 25px;\r\n}\r\n.abtbiotxt{\r\n  font-size: 18px;\r\n  color: #8687a6;\r\n  line-height: 30px;\r\n  letter-spacing: 2px;\r\n  text-align: left;\r\n  margin-top: 30px;\r\n  -webkit-animation: slideup 1.5s ease-in-out;\r\n          animation: slideup 1.5s ease-in-out;\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s;\r\n}\r\n.abtbiotxt:before{\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  background: transparent;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: #714dfa 4px solid;\r\n  transform: rotate(25deg);\r\n  float: right;\r\n}\r\n.abtbiotxt:after{\r\n  content: '';\r\n  display: block;\r\n  width: 90px;\r\n  height: 90px;\r\n  background: #f29268;\r\n  position: relative;\r\n  border-radius: 50px;\r\n  float: right;\r\n}\r\n.shape-r-3{\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n  border-bottom: 15px solid #f6b019;\r\n  transform: rotate(70deg);\r\n  margin-top: 30px;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  .mp{\r\n    margin-left: 0;\r\n  }\r\n  .shape-l-2{\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .abttitletxt:before{\r\n    transform: translateX(100px);\r\n  }\r\n}\r\n@media only screen and (max-width: 1033px) {\r\n  .mypic{\r\n    width: 70%;\r\n    margin-left: 100px;\r\n  }\r\n  .shape-l-2{\r\n    width: 50px;\r\n    height: 50px;\r\n    transform: translateY(200px);\r\n  }\r\n  .abttitletxt:before{\r\n    transform: translateX(100px);\r\n  }\r\n  .abtbiotxt:after{\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .shape-l-3{\r\n    visibility: hidden;\r\n  }\r\n}\r\n@media only screen and (max-width: 998px) {\r\n  .abtbiotxt{\r\n    font-size: 14px;\r\n    letter-spacing: 1.5px;\r\n    line-height: 25px;\r\n  }\r\n  .abtbiotxt:after{\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n  .abttitletxt{\r\n    font-size: 36px;\r\n    margin-top: 100px;\r\n  }\r\n  .abttitletxt:before{\r\n    transform: translateX(100px);\r\n  }\r\n  .abt-l-1{\r\n    padding-top: 50px;\r\n  }\r\n  .shape-l-4{\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .about{\r\n    text-align: center;\r\n  }\r\n  .mypic{\r\n    margin: 0 auto;\r\n  }\r\n  .abt-l-1{\r\n    width: 100%;\r\n  }\r\n  .abt-r-1{\r\n    margin-top: 0;\r\n    padding-bottom: 50px;\r\n  }\r\n  .shape-l-2{\r\n    visibility: hidden;\r\n  }\r\n  .shape-l-3{\r\n    visibility: visible;\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n  .shape-l-4{\r\n    width: 20px;\r\n    height: 20px;\r\n    transform: translateY(-30px);\r\n    margin-bottom: 20px;\r\n  }\r\n  .mp:after{\r\n    width: 20px;\r\n    height: 20px;\r\n    background: none;\r\n    border: solid 5px #f68119;\r\n    top: 0;\r\n  }\r\n  .abttitletxt{\r\n    font-size: 20px;\r\n    margin-top: 100px;\r\n  }\r\n  .abttitletxt:before{\r\n    transform: translateX(100px);\r\n  }\r\n  .abtbiotxt{\r\n    font-size: 12px;\r\n  }\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .abt-l-1{\r\n    padding-bottom: 0;\r\n  }\r\n  .about{\r\n    text-align: center;\r\n  }\r\n  .abttitletxt{\r\n    margin-left: 0px;\r\n    font-size: 20px;\r\n    margin-top: 30px;\r\n  }\r\n  .mypic{\r\n    margin: 0;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .mp:after{\r\n    width: 10px;\r\n    height: 10px;\r\n    background: transparent;\r\n    border: 3px solid #f68119;\r\n  }\r\n  .abttitletxt{\r\n    margin-top: -10px;\r\n    text-align: center;\r\n  }\r\n  .abt-r-1{\r\n    padding-top: 50px;\r\n  }\r\n}\r\n@media only screen and (max-width: 375px) {\r\n  .about{\r\n    text-align: center;\r\n  }\r\n  .mypic{\r\n    margin: 0;\r\n  }\r\n  .abttitletxt{\r\n    font-size: 15px;\r\n  }\r\n  .abtbiotxt{\r\n    margin-top: 10px;\r\n    font-size: 12px;\r\n    line-height: 25px;\r\n  }\r\n}\r\n@media screen and (max-width: 175px) {\r\n  .abttitletxt{\r\n    font-size: 15px;\r\n  }\r\n  .abtbiotxt{\r\n    margin-top: 10px;\r\n    font-size: 9px;\r\n    line-height: 15px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCO0FBQ0Y7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwRkFBa0Y7VUFBbEYsa0ZBQWtGO0VBQ2xGLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxX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b3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQ6ICNmNGVlZWE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuYXJ0aWNsZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uYWJ0LWwtMXtcclxuICBiYWNrZ3JvdW5kOiAjZjZlZGU4O1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4uc2hhcGUtbC0xe1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgI2VlYzQ4MjtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbi5zaGFwZS1sLTJ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2E3NzNjMztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuLnNoYXBlLWwtM3tcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogI2Y2Y2YxOTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zaGFwZS1sLTR7XHJcbiAgYmFja2dyb3VuZDogIzczYWFlYztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDkwJSAyMCUsIDEwMCUgNjAlLCA3NSUgMTAwJSwgMjUlIDEwMCUsIDAlIDYwJSwgMTAlIDIwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5tcHtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG4ubXA6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3A6IDI1cHggc29saWQgI2I2OWZmMTtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4ubXA6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjY4MTE5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmFidHRpdGxldHh0e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogIzgzM2RhOTtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5IFNlbWlCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4uYWJ0dGl0bGV0eHQ6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjYjY5ZmYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmFidGJpb3R4dHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM4Njg3YTY7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZXVwIDEuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcbi5hYnRiaW90eHQ6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAjNzE0ZGZhIDRweCBzb2xpZDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5hYnRiaW90eHQ6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMjkyNjg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zaGFwZS1yLTN7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZjZiMDE5O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm1we1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5zaGFwZS1sLTJ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLmFidHRpdGxldHh0OmJlZm9yZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzM3B4KSB7XHJcbiAgLm15cGlje1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICB9XHJcbiAgLnNoYXBlLWwtMntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcclxuICB9XHJcbiAgLmFidHRpdGxldHh0OmJlZm9yZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgfVxyXG4gIC5hYnRiaW90eHQ6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLnNoYXBlLWwtM3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OThweCkge1xyXG4gIC5hYnRiaW90eHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbiAgLmFidGJpb3R4dDphZnRlcntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuYWJ0dGl0bGV0eHR7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbiAgLmFidHRpdGxldHh0OmJlZm9yZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgfVxyXG4gIC5hYnQtbC0xe1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5zaGFwZS1sLTR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5hYm91dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm15cGlje1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5hYnQtbC0xe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hYnQtci0xe1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAuc2hhcGUtbC0ye1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAuc2hhcGUtbC0ze1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuc2hhcGUtbC00e1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLm1wOmFmdGVye1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggI2Y2ODExOTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLmFidHRpdGxldHh0e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIC5hYnR0aXRsZXR4dDpiZWZvcmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gIH1cclxuICAuYWJ0YmlvdHh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmFidC1sLTF7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmFib3V0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYWJ0dGl0bGV0eHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLm15cGlje1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLm1wOmFmdGVye1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNjgxMTk7XHJcbiAgfVxyXG4gIC5hYnR0aXRsZXR4dHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYWJ0LXItMXtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmFib3V0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubXlwaWN7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5hYnR0aXRsZXR4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmFidGJpb3R4dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc1cHgpIHtcclxuICAuYWJ0dGl0bGV0eHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5hYnRiaW90eHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.mypic = 'assets/vishnu-b&w.png';
        this.abouttitletxt = 'About Me';
        this.aboutbiotxt = 'Experienced User Interface Designer with a demonstrated history of working in the' +
            ' information technology and services industry. Skilled in AutoCAD, HTML, Adobe Photoshop, After Effects,' +
            ' and Bootstrap. Strong arts and design professional with a Bachelor of Technology - BTech focused in Civil Engineering' +
            ' from Jawaharlal Nehru Technological University, Kakinada. ';
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _workdetails_workdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workdetails/workdetails.component */ "./src/app/workdetails/workdetails.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
            _works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"],
            _workdetails_workdetails_component__WEBPACK_IMPORTED_MODULE_9__["WorkdetailsComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-us{\r\n}\r\n.hire-me div{\r\n  display: inline-block;\r\n  justify-content: center;\r\n  vertical-align: center;\r\n}\r\n.hire-me{\r\n  background: linear-gradient(to right, #fa8d72, #fa8c84, #fb7888, #fb4c67);\r\n  text-align: center;\r\n  color: white;\r\n  padding: 100px 0 100px 0;\r\n  width: 100%;\r\n}\r\n.hire-me div{\r\n  display: block;\r\n}\r\n.hire-btn{\r\n  padding: 7px 30px 7px 30px;\r\n  border-radius: 30px 0 30px 0;\r\n  color: white;\r\n  background: #ff7272;\r\n  outline: none;\r\n  border: none;\r\n  margin-top: 30px;\r\n}\r\n.c-details{\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n.c-details ul li {\r\n  display: inline-block;\r\n    margin-left: 30px;\r\n}\r\na{\r\n  color: white;\r\n}\r\n@media only screen and (max-width: 720px) {\r\n  .c-details{\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n  .c-details ul li {\r\n    display: block;\r\n    margin-left: 0;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlFQUF5RTtFQUN6RSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11c3tcclxufVxyXG4uaGlyZS1tZSBkaXZ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhpcmUtbWV7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmE4ZDcyLCAjZmE4Yzg0LCAjZmI3ODg4LCAjZmI0YzY3KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDAgMTAwcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGlyZS1tZSBkaXZ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmhpcmUtYnRue1xyXG4gIHBhZGRpbmc6IDdweCAzMHB4IDdweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMCAzMHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmZjcyNzI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uYy1kZXRhaWxze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jLWRldGFpbHMgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmMtZGV0YWlsc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmMtZGV0YWlscyB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterComponent = class FilterComponent {
    constructor() {
        this.All = 0;
        this.Development = 0;
        this.Design = 0;
        this.SelectedCategoryValue = 'All';
        this.ComponentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onCategoryChanged() {
        this.ComponentChanged.emit(this.SelectedCategoryValue);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterComponent.prototype, "All", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterComponent.prototype, "Development", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterComponent.prototype, "Design", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterComponent.prototype, "ComponentChanged", void 0);
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")).default]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\r\n  background: #110c0d;\r\n  padding: 50px;\r\n}\r\ndiv{\r\n  vertical-align: center;\r\n}\r\n.cpr{\r\n  float: right;\r\n  vertical-align: center;\r\n}\r\nfooter li, footer div{\r\n  display: inline-block;\r\n}\r\nfooter span, footer i/*, footer div p a*/{\r\n  color: #9d9999;\r\n}\r\nfooter span:hover, footer a:hover{\r\n  color: #fa9078;\r\n  text-decoration: none;\r\n}\r\nfooter a:hover>i{\r\n  color: #fa9078;\r\n}\r\n.cpr p {\r\n  cursor: default;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzExMGMwZDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbmRpdntcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jcHJ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZm9vdGVyIGxpLCBmb290ZXIgZGl2e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5mb290ZXIgc3BhbiwgZm9vdGVyIGkvKiwgZm9vdGVyIGRpdiBwIGEqL3tcclxuICBjb2xvcjogIzlkOTk5OTtcclxufVxyXG5mb290ZXIgc3Bhbjpob3ZlciwgZm9vdGVyIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNmYTkwNzg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmZvb3RlciBhOmhvdmVyPml7XHJcbiAgY29sb3I6ICNmYTkwNzg7XHJcbn1cclxuLmNwciBwIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li{\r\n  list-style: none;\r\n}\r\n.home{\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-position: inherit;\r\n  -moz-background-size: cover;\r\n}\r\n.home-txt-sec{\r\n  text-align: left;\r\n  align-content: flex-start;\r\n  alignment: left;\r\n  padding-top: 50px;\r\n}\r\n.h-p-shape p{\r\n  font-size: 20px;\r\n}\r\n.h-p-shape{\r\n  display: block;\r\n  background: black;\r\n  width: 70px;\r\n  height: 2px;\r\n}\r\n.h-p-s, .portfolio-text ul li{\r\n  display: inline-block;\r\n}\r\n.h-social i{\r\n  font-size: 20px;\r\n  background: whitesmoke;\r\n  padding: 10px;\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  margin-top:40px;\r\n}\r\n.fab.fa-behance{\r\n  color: #4b46ac;\r\n  box-shadow: 0 10px 12px rgba(75,70,172,0.5);\r\n}\r\n.fab.fa-behance:hover{\r\n  background:#4b46ac ;\r\n  color: white;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fab.fa-dribbble{\r\n  color: #fb727c;\r\n  box-shadow: 0 10px 12px rgba(251,114,124,0.5);\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fab.fa-dribbble:hover{\r\n  background: #fb727c;\r\n  color: white;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.fab.fa-github{\r\n  color: #534f4f;\r\n  box-shadow: 0 10px 12px rgba(83,79,79,0.5);\r\n}\r\n.fab.fa-github:hover{\r\n  background: #534f4f;\r\n  color: white;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.o-gd-bg-clr{\r\n  background: linear-gradient(to right, #f9a27b, #fa8c7b, #fb727c);\r\n}\r\n.start .o-gd-bg-clr{\r\n  padding: 10px  30px 10px 30px;\r\n  border-radius: 5px;\r\n  font-family: \"Open Sans SemiBold\", sans-serif;\r\n  letter-spacing: 1.5px;\r\n  color: #ffffff;\r\n  box-shadow: 0 4px 7px #fb737c;\r\n  margin-top:30px;\r\n}\r\n.start .o-gd-bg-clr:hover{\r\n  box-shadow: 0 4px 15px #fb737c;\r\n}\r\n.btn, .btn:focus, .btn:hover, .btn::-moz-selection, .o-gd-bg-clr, .o-gd-bg-clr:focus{\r\n  outline: none;\r\n  border: none;\r\n}\r\n.btn, .btn:focus, .btn:hover, .btn::selection, .o-gd-bg-clr, .o-gd-bg-clr:focus{\r\n  outline: none;\r\n  border: none;\r\n}\r\n.hi{\r\n  color: rgb(251,113,124);\r\n  font-size: 24px;\r\n  margin-top:80px;\r\n  font-family: \"Raleway Medium\", sans-serif;\r\n}\r\n.name{\r\n  font-size: 60px;\r\n  letter-spacing: 10px;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n  margin-top:10px;\r\n}\r\n.name h3{\r\n  font-size: 42px;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n  letter-spacing: 1px;\r\n  margin-top:10px;\r\n}\r\n.role{\r\n  font-size: 15px;\r\n  color: #8f8f8f;\r\n  letter-spacing: 1px;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGdFQUFnRTtBQUNsRTtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBSEE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uaG9tZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdDtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmhvbWUtdHh0LXNlY3tcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ25tZW50OiBsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5oLXAtc2hhcGUgcHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmgtcC1zaGFwZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDJweDtcclxufVxyXG4uaC1wLXMsIC5wb3J0Zm9saW8tdGV4dCB1bCBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmgtc29jaWFsIGl7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuLmZhYi5mYS1iZWhhbmNle1xyXG4gIGNvbG9yOiAjNGI0NmFjO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMnB4IHJnYmEoNzUsNzAsMTcyLDAuNSk7XHJcbn1cclxuLmZhYi5mYS1iZWhhbmNlOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IzRiNDZhYyA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmZhYi5mYS1kcmliYmJsZXtcclxuICBjb2xvcjogI2ZiNzI3YztcclxuICBib3gtc2hhZG93OiAwIDEwcHggMTJweCByZ2JhKDI1MSwxMTQsMTI0LDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uZmFiLmZhLWRyaWJiYmxlOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNmYjcyN2M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmZhYi5mYS1naXRodWJ7XHJcbiAgY29sb3I6ICM1MzRmNGY7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEycHggcmdiYSg4Myw3OSw3OSwwLjUpO1xyXG59XHJcbi5mYWIuZmEtZ2l0aHViOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM1MzRmNGY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm8tZ2QtYmctY2xye1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y5YTI3YiwgI2ZhOGM3YiwgI2ZiNzI3Yyk7XHJcbn1cclxuLnN0YXJ0IC5vLWdkLWJnLWNscntcclxuICBwYWRkaW5nOiAxMHB4ICAzMHB4IDEwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFNlbWlCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDdweCAjZmI3MzdjO1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxufVxyXG4uc3RhcnQgLm8tZ2QtYmctY2xyOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggI2ZiNzM3YztcclxufVxyXG4uYnRuLCAuYnRuOmZvY3VzLCAuYnRuOmhvdmVyLCAuYnRuOjpzZWxlY3Rpb24sIC5vLWdkLWJnLWNsciwgLm8tZ2QtYmctY2xyOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5oaXtcclxuICBjb2xvcjogcmdiKDI1MSwxMTMsMTI0KTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hbWV7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgU2VtaUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuLm5hbWUgaDN7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgU2VtaUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4ucm9sZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5IFNlbWlCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    bgImg() {
        return 'url(assets/landing-page-cover.jpg.png)';
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n  background: #fb727c;\r\n  display: inline-block;\r\n  margin-left: 30px;\r\n  padding: 30px;\r\n  -webkit-animation: fade 1s ease-in-out;\r\n          animation: fade 1s ease-in-out;\r\n}\r\n@-webkit-keyframes fade {\r\n  from{\r\n    opacity: 0;\r\n  }\r\n  to{\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fade {\r\n  from{\r\n    opacity: 0;\r\n  }\r\n  to{\r\n    opacity: 1;\r\n  }\r\n}\r\ntr, td{\r\n  transition: 1s ease-in-out;\r\n}\r\ntd\r\n{\r\n  display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBiYWNrZ3JvdW5kOiAjZmI3MjdjO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGFuaW1hdGlvbjogZmFkZSAxcyBlYXNlLWluLW91dDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb217XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0b3tcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbnRyLCB0ZHtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxufVxyXG50ZFxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    constructor() {
        this.data = [
            { Name: 'Samsung Tv', Price: 45000, Category: 'Development' },
            { Name: 'Nike Casuals', Price: 5000, Category: 'Design' },
            { Name: 'Samsung Tv', Price: 45000, Category: 'Electronics' },
            { Name: 'Nike Casuals', Price: 5000, Category: 'Shoes' },
            { Name: 'Samsung Tv', Price: 45000, Category: 'Electronics' },
            { Name: 'Nike Casuals', Price: 5000, Category: 'Shoes' },
            { Name: 'Samsung Tv', Price: 45000, Category: 'Electronics' },
            { Name: 'Nike Casuals', Price: 5000, Category: 'Shoes' },
        ];
        this.SelectedValue = 'All';
        this.All = 'this.data.length';
        /* total category products length */
        this.Development = this.data.filter(x => x.Category === 'Development').length;
        this.Design = this.data.filter(x => x.Category === 'Design').length;
    }
    onCategoryChanged(selectedValue) {
        this.SelectedValue = selectedValue;
    }
    ngOnInit() {
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n  background:#f4f4f4\r\n}\r\n.skills{\r\n  margin-bottom: 100px;\r\n}\r\n.skillstitle{\r\n  color: #51504c;\r\n  font-size: 30px;\r\n  vertical-align: top;\r\n  line-height: 40px;\r\n}\r\n.dsgt-shape{\r\n  background: #f2a663;\r\n  width: 5px;\r\n  height: 200px;\r\n  margin-left: 50px;\r\n  border-radius: 10px;\r\n}\r\n.dsg, .dev{\r\n  font-size: 40px;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n.dsg{\r\n  color: #5d50c6;\r\n  margin-top: 35px;\r\n}\r\n.dev{\r\n  color: #f85e9f;\r\n}\r\ndiv span{\r\n  display: block;\r\n}\r\n.d-i-b{\r\n  display: inline-block;\r\n}\r\nli{\r\n  list-style: none;\r\n}\r\n.arrow-up {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n  border-bottom: 30px solid #f6b019;\r\n}\r\n.arrow-up:before{\r\n  content: '';\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n  border-left: 8px solid transparent;\r\n  border-right: 8px solid transparent;\r\n  border-bottom: 18px solid #f4f4f4;\r\n  left: -7.5px;\r\n  top: 8px;\r\n}\r\n.shape-2{\r\n  width: 18px;\r\n  height: 18px;\r\n  background: transparent;\r\n  border: #fb7b7c 5.5px solid;\r\n  border-radius: 50px;\r\n}\r\n.ul-2 li{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n.ul-1{\r\n  padding-top: 8%;\r\n  text-align: center;\r\n  position: relative;\r\n  margin-left: 45%;\r\n}\r\n.myskbg{\r\n  color: rgba(0,0,0,0.03);\r\n  font-size: 100px;\r\n  font-weight: bold;\r\n  letter-spacing: 10px;\r\n  vertical-align: center;\r\n}\r\n.shape-3{\r\n  background: #f85e9f;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: relative;\r\n  -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n}\r\n.shape-3:before{\r\n  content: '';\r\n  position: absolute;\r\n  background: #f4f4f4;\r\n  width: 21px;\r\n  height: 21px;\r\n  top: 4.5px;\r\n  left: 4.5px;\r\n  -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n  transform-origin: center center;\r\n}\r\n.shape-4{\r\n  width: 18px;\r\n  height: 18px;\r\n  background: transparent;\r\n  border: #714dfa 5.5px solid;\r\n  border-radius: 50px;\r\n  margin-left: 65%;\r\n}\r\n.myskills{\r\n  padding-bottom: 100px;\r\n}\r\ntable{\r\n  margin: 0 auto;\r\n  width: 95%;\r\n  text-align: center;\r\n}\r\ntr{\r\n  display: inline-block;\r\n  margin-left: 30px;\r\n  margin-top: 20px;\r\n  vertical-align: top;\r\n  text-align: left;\r\n}\r\ntr td{\r\n  display: block;\r\n  margin: 0;\r\n  vertical-align: top;\r\n}\r\n.icons{\r\n  display: inline-block;\r\n  margin-top: 30px;\r\n}\r\n.s-name{\r\n  color: #5d39e1;\r\n  font-size: 22px;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n  padding-top: 10px;\r\n  padding-bottom: 25px;\r\n  vertical-align: top;\r\n}\r\n.s-list{\r\n  width: 350px;\r\n  font-size: 14px;\r\n  color: #a3a1aa;\r\n  margin-bottom: 100px;\r\n}\r\n/*  res 1200px --*/\r\n@media only screen and (max-width: 1200px) {\r\n  .skillstitle{\r\n      font-size: 24px;\r\n  }\r\n  .dsg, .dev{\r\n    font-size: 35px;\r\n  }\r\n  .dsgt-shape{\r\n    height: 180px;\r\n  }\r\n  .dsg{\r\n    margin-top: 25px;\r\n  }\r\n  tr {\r\n    margin-left: 0;\r\n  }\r\n  .icon{\r\n    width: 23%;\r\n  }\r\n  .s-list{\r\n    width: 300px;\r\n  }\r\n  .myskbg{\r\n    font-size: 80px;\r\n    letter-spacing: 8px;\r\n  }\r\n}\r\n@media only screen and (max-width: 992px) {\r\n  .skillstitle{\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n  }\r\n  .arrow-up {\r\n    border-left: 10px solid transparent;\r\n    border-right: 10px solid transparent;\r\n    border-bottom: 20px solid #f6b019;\r\n  }\r\n  .arrow-up:before{\r\n    position: absolute;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-bottom: 10px solid #f4f4f4;\r\n    left: -5.5px;\r\n    top: 7px;\r\n  }\r\n  .shape-2{\r\n    margin-left: -20px;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 5px solid #fb7b7c;\r\n  }\r\n  .shape-3{\r\n    background: #f85e9f;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: relative;\r\n    -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n            clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n  }\r\n  .shape-3:before{\r\n    content: '';\r\n    position: absolute;\r\n    background: #f4f4f4;\r\n    width: 15px;\r\n    height: 15px;\r\n    top: 2.5px;\r\n    left: 2.5px;\r\n    -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n            clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);\r\n    transform-origin: center center;\r\n  }\r\n  .shape-4{\r\n    width: 12px;\r\n    height: 12px;\r\n    background: transparent;\r\n    border: #714dfa 3.5px solid;\r\n    border-radius: 50px;\r\n    margin-left: 65%;\r\n  }\r\n  .dsgt-shape{\r\n    height: 145px;\r\n    margin-left: 30px;\r\n  }\r\n  .dsg, .dev{\r\n    font-size: 25px;\r\n  }\r\n  table{\r\n    text-align: center;\r\n  }\r\n  tr {\r\n    margin-left: 0;\r\n    text-align: left;\r\n  }\r\n  td{\r\n    text-align: left;\r\n  }\r\n  .s-name{\r\n    font-size: 18px;\r\n  }\r\n    .s-list{\r\n      width: 230px;\r\n      font-size: 12px;\r\n    }\r\n  .icon{\r\n    width: 30%;\r\n  }\r\n  .myskbg{\r\n    font-size: 60px;\r\n    letter-spacing: 5px;\r\n  }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  body{\r\n\r\n  }\r\n  .dsgt-shape{\r\n    margin-left: 10px;\r\n    height: 120px;\r\n    width: 4px;\r\n  }\r\n  table{\r\n    width: 70% ;\r\n    text-align: center;\r\n  }\r\n  .s-name, .s-list, .icons{\r\n    text-align: center;\r\n  }\r\n  .skillstitle{\r\n    line-height: 25px;\r\n    transform: translateX(-10px);\r\n  }\r\n  .dsg, .dev{\r\n    font-size: 20px;\r\n  }\r\n  .myskbg{\r\n    font-size: 30px;\r\n    letter-spacing: 5px;\r\n  }\r\n  .icon{\r\n    width: 18%;\r\n  }\r\n  .s-list{\r\n    width: 400px;\r\n    font-size: 12px;\r\n  }\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  body{\r\n\r\n  }\r\n  .dsgt-shape{\r\n    margin-left: 10px;\r\n    height: 120px;\r\n    width: 4px;\r\n  }\r\n  table{\r\n    width: 70% ;\r\n    text-align: center;\r\n  }\r\n  .s-name, .s-list, .icons{\r\n    text-align: center;\r\n  }\r\n  .skillstitle{\r\n    line-height: 25px;\r\n    transform: translateX(-10px);\r\n  }\r\n  .dsg, .dev{\r\n    font-size: 20px;\r\n  }\r\n  .myskbg{\r\n    font-size: 25px;\r\n    letter-spacing: 2px;\r\n  }\r\n  .icon{\r\n    width: 30%;\r\n  }\r\n  .s-list{\r\n    width: 250px;\r\n    font-size: 12px;\r\n  }\r\n}\r\n@media only screen and (max-width: 465px) {\r\n  .myskbg{\r\n    margin-left: -100px;\r\n    transform: translateX(-50px);\r\n  }\r\n}\r\n@media only screen and (max-width: 443px) {\r\n  .myskbg{\r\n    margin: 0;\r\n    transform: translateX(-100px);\r\n  }\r\n}\r\n@media only screen and (max-width: 442px) {\r\n  .myskbg{\r\n    padding-left: 150px;\r\n    transform: translateY(-100px);\r\n  }\r\n}\r\n@media only screen and (max-width: 388px) {\r\n  .dsgt-shape{\r\n    width: 3px;\r\n    height: 100px;\r\n  }\r\n  .arrow-up {\r\n    border-left: 7px solid transparent;\r\n    border-right: 7px solid transparent;\r\n    border-bottom: 15px solid #f6b019;\r\n  }\r\n  .arrow-up:before{\r\n    position: absolute;\r\n    border-left: 3px solid transparent;\r\n    border-right: 3px solid transparent;\r\n    border-bottom: 7px solid #f4f4f4;\r\n    left: -3px;\r\n    top: 5px;\r\n  }\r\n  .shape-2{\r\n    margin-left: -20px;\r\n    width: 8px;\r\n    height: 8px;\r\n    border: 2px solid #fb7b7c;\r\n  }\r\n  .shape-3{\r\n    background: #f85e9f;\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n  .shape-3:before{\r\n    width: 5px;\r\n    height: 5px;\r\n    top: 2.5px;\r\n    left: 2.5px;\r\n  }\r\n  .shape-4{\r\n    width: 12px;\r\n    height: 12px;\r\n    background: transparent;\r\n    border: #714dfa 3.5px solid;\r\n    border-radius: 50px;\r\n    margin-left: 65%;\r\n  }\r\n  .skillstitle{\r\n    transform: translateX(-15px);\r\n    margin-top: -5px;\r\n    line-height: 20px;\r\n  }\r\n  .dsg, .dev{\r\n    font-size: 18px;\r\n  }\r\n  .myskbg{\r\n    padding-left: 70px;\r\n    transform: translateY(-100px);\r\n  }\r\n  .s-list{\r\n    width: 200px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .myskbg{\r\n    font-size: 20px;\r\n    padding-left: 10px;\r\n    transform: translateY(-110px);\r\n  }\r\n}\r\n@media only screen and (max-width: 228px) {\r\n  body{\r\n\r\n  }\r\n  .bg{\r\n    display: none;\r\n  }\r\n  .skillstitle{\r\n     font-size: 12px;\r\n   }\r\n  .dev, .dsg{\r\n    font-size: 15px;\r\n  }\r\n  .s-name{\r\n    font-size: 12px;\r\n  }\r\n  .s-list{\r\n    width: 150px;\r\n    font-size: 9px;\r\n  }\r\n}\r\n@media only screen and (max-width: 190px) {\r\n  .bg{\r\n    display: none;\r\n  }\r\n  .skillstitle{\r\n    font-size: 12px;\r\n  }\r\n  .dev, .dsg{\r\n    font-size: 15px;\r\n  }\r\n  .s-name{\r\n    font-size: 12px;\r\n  }\r\n  .s-list{\r\n    width: 100px;\r\n    font-size: 9px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osUUFBUTtBQUNWO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtF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QkFBNkI7RUFDL0I7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkJBQTZCO0VBQy9CO0FBQ0Y7QUFDQTtFQUNFOztFQUVBO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtLQUNHLGVBQWU7R0FDakI7RUFDRDtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBiYWNrZ3JvdW5kOiNmNGY0ZjRcclxufVxyXG4uc2tpbGxze1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5za2lsbHN0aXRsZXtcclxuICBjb2xvcjogIzUxNTA0YztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4uZHNndC1zaGFwZXtcclxuICBiYWNrZ3JvdW5kOiAjZjJhNjYzO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5kc2csIC5kZXZ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgU2VtaUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5kc2d7XHJcbiAgY29sb3I6ICM1ZDUwYzY7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG4uZGV2e1xyXG4gIGNvbG9yOiAjZjg1ZTlmO1xyXG59XHJcbmRpdiBzcGFue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5kLWktYntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uYXJyb3ctdXAge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgI2Y2YjAxOTtcclxufVxyXG4uYXJyb3ctdXA6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxOHB4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgbGVmdDogLTcuNXB4O1xyXG4gIHRvcDogOHB4O1xyXG59XHJcbi5zaGFwZS0ye1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6ICNmYjdiN2MgNS41cHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4udWwtMiBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4udWwtMXtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogNDUlO1xyXG59XHJcbi5teXNrYmd7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaGFwZS0ze1xyXG4gIGJhY2tncm91bmQ6ICNmODVlOWY7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA5MCUgMjAlLCAxMDAlIDYwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA2MCUsIDEwJSAyMCUpO1xyXG59XHJcbi5zaGFwZS0zOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICB3aWR0aDogMjFweDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgdG9wOiA0LjVweDtcclxuICBsZWZ0OiA0LjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA5MCUgMjAlLCAxMDAlIDYwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA2MCUsIDEwJSAyMCUpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuLnNoYXBlLTR7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogIzcxNGRmYSA1LjVweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbn1cclxuLm15c2tpbGxze1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG50YWJsZXtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50cntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxudHIgdGR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmljb25ze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5zLW5hbWV7XHJcbiAgY29sb3I6ICM1ZDM5ZTE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgU2VtaUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5zLWxpc3R7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2EzYTFhYTtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG4vKiAgcmVzIDEyMDBweCAtLSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnNraWxsc3RpdGxle1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIC5kc2csIC5kZXZ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG4gIC5kc2d0LXNoYXBle1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcbiAgLmRzZ3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIHRyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAuaWNvbntcclxuICAgIHdpZHRoOiAyMyU7XHJcbiAgfVxyXG4gIC5zLWxpc3R7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC5teXNrYmd7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5za2lsbHN0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAuYXJyb3ctdXAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNmNmIwMTk7XHJcbiAgfVxyXG4gIC5hcnJvdy11cDpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgICBsZWZ0OiAtNS41cHg7XHJcbiAgICB0b3A6IDdweDtcclxuICB9XHJcbiAgLnNoYXBlLTJ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmYjdiN2M7XHJcbiAgfVxyXG4gIC5zaGFwZS0ze1xyXG4gICAgYmFja2dyb3VuZDogI2Y4NWU5ZjtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgOTAlIDIwJSwgMTAwJSA2MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNjAlLCAxMCUgMjAlKTtcclxuICB9XHJcbiAgLnNoYXBlLTM6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDIuNXB4O1xyXG4gICAgbGVmdDogMi41cHg7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA5MCUgMjAlLCAxMDAlIDYwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA2MCUsIDEwJSAyMCUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICB9XHJcbiAgLnNoYXBlLTR7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAjNzE0ZGZhIDMuNXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgfVxyXG4gIC5kc2d0LXNoYXBle1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAuZHNnLCAuZGV2e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgdHIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICB0ZHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5zLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gICAgLnMtbGlzdHtcclxuICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgLmljb257XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAubXlza2Jne1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGJvZHl7XHJcblxyXG4gIH1cclxuICAuZHNndC1zaGFwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgfVxyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDcwJSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zLW5hbWUsIC5zLWxpc3QsIC5pY29uc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNraWxsc3RpdGxle1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gIH1cclxuICAuZHNnLCAuZGV2e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAubXlza2Jne1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB9XHJcbiAgLmljb257XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuICAucy1saXN0e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgYm9keXtcclxuXHJcbiAgfVxyXG4gIC5kc2d0LXNoYXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICB9XHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogNzAlIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnMtbmFtZSwgLnMtbGlzdCwgLmljb25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2tpbGxzdGl0bGV7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgfVxyXG4gIC5kc2csIC5kZXZ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5teXNrYmd7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuICAuaWNvbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5zLWxpc3R7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XHJcbiAgLm15c2tiZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0M3B4KSB7XHJcbiAgLm15c2tiZ3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDJweCkge1xyXG4gIC5teXNrYmd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg4cHgpIHtcclxuICAuZHNndC1zaGFwZXtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAuYXJyb3ctdXAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZjZiMDE5O1xyXG4gIH1cclxuICAuYXJyb3ctdXA6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgICBsZWZ0OiAtM3B4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5zaGFwZS0ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZiN2I3YztcclxuICB9XHJcbiAgLnNoYXBlLTN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjg1ZTlmO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5zaGFwZS0zOmJlZm9yZXtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHRvcDogMi41cHg7XHJcbiAgICBsZWZ0OiAyLjVweDtcclxuICB9XHJcbiAgLnNoYXBlLTR7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAjNzE0ZGZhIDMuNXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgfVxyXG4gIC5za2lsbHN0aXRsZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5kc2csIC5kZXZ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5teXNrYmd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcclxuICB9XHJcbiAgLnMtbGlzdHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5teXNrYmd7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMjhweCkge1xyXG4gIGJvZHl7XHJcblxyXG4gIH1cclxuICAuYmd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc2tpbGxzdGl0bGV7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICB9XHJcbiAgLmRldiwgLmRzZ3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnMtbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnMtbGlzdHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTBweCkge1xyXG4gIC5iZ3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5za2lsbHN0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmRldiwgLmRzZ3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnMtbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnMtbGlzdHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() {
        this.skills = [
            // --- Graphic Design --- //
            { img: 'assets/graphic-icon.png', title: 'Graphic Design', skillsList: 'Adobe Photoshop, Adobe Illustrator, Adobe After Effects,' +
                    ' Adobe XD, Visual Design, Interaction Design, 2D animation, Icons, Posters, Brochures' },
            // --- User Interface Design --- //
            { img: 'assets/ui-icon.png', title: 'UI Design', skillsList: 'Wireframes, Mobile Apps UI Design (iOS, Android),' +
                    ' Responsive Web Apps UI Design' },
            { img: 'assets/development-icon.png', title: 'UI Development', skillsList: 'HTML, CSS, Bootstrap, Javascript, JQuery, Typescript,' +
                    ' Angular 8' }
            // --- UI Development --- //
        ];
    }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/workdetails/workdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/workdetails/workdetails.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.works-nav{\r\n  background: white;\r\n}\r\n.nav-item{\r\n  color: #a1a1a1;\r\n}\r\n.active{\r\n  color: #fb727c;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n}\r\n.myWorks{\r\n  background: #ffd3b6;\r\n  padding-top:50px;\r\n  padding-bottom: 50px;\r\n}\r\n.works-gallery{\r\n  max-width: 90%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n.works-gallery .img{\r\n  position: relative;\r\n  max-width: 30%;\r\n  background: #ff0;\r\n  margin: 10px;\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.works-gallery .img .imgBox{\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.works-gallery .img .imgBox img{\r\n  max-width: 100%;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.works-gallery .img:hover .imgBox {\r\n  transform: scale(1.2);\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.works-gallery .img .details{\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 100%;\r\n  background: rgba(255,243,227,0.9);\r\n  opacity: 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.works-gallery .img:hover .details{\r\n  opacity: 1;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n.works-gallery .img .details .content{\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  text-align: center;\r\n  padding: 25px;\r\n  color: black;\r\n}\r\n.card{\r\n  display: inline-block;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.card + .card{\r\n  margin-left: 30px;\r\n}\r\n.v-al{\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n  background: #ffa41b;\r\n}\r\n.v-al i{\r\n  color: #ffffff;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .myWorks{\r\n    padding: 10%;\r\n  }\r\n  .works-gallery .img{\r\n    display: block;\r\n    max-width: 100%;\r\n    margin-top: 30px;\r\n  }\r\n  .card{\r\n    max-width: 100%;\r\n    display: block;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2RldGFpbHMvd29ya2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDO0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFLQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC93b3JrZGV0YWlscy93b3JrZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ud29ya3MtbmF2e1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5uYXYtaXRlbXtcclxuICBjb2xvcjogI2ExYTFhMTtcclxufVxyXG4uYWN0aXZle1xyXG4gIGNvbG9yOiAjZmI3MjdjO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgU2VtaUJvbGRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5teVdvcmtze1xyXG4gIGJhY2tncm91bmQ6ICNmZmQzYjY7XHJcbiAgcGFkZGluZy10b3A6NTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG4ud29ya3MtZ2FsbGVyeXtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi53b3Jrcy1nYWxsZXJ5IC5pbWd7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMzAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZjA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4ud29ya3MtZ2FsbGVyeSAuaW1nIC5pbWdCb3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4ud29ya3MtZ2FsbGVyeSAuaW1nIC5pbWdCb3ggaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi53b3Jrcy1nYWxsZXJ5IC5pbWc6aG92ZXIgLmltZ0JveCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLndvcmtzLWdhbGxlcnkgLmltZyAuZGV0YWlsc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI0MywyMjcsMC45KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLndvcmtzLWdhbGxlcnkgLmltZzpob3ZlciAuZGV0YWlsc3tcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLndvcmtzLWdhbGxlcnkgLmltZyAuZGV0YWlscyAuY29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2FyZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uY2FyZCArIC5jYXJke1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi52LWFse1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmE0MWI7XHJcbn1cclxuLnYtYWwgaXtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubXlXb3Jrc3tcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICB9XHJcbiAgLndvcmtzLWdhbGxlcnkgLmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/workdetails/workdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/workdetails/workdetails.component.ts ***!
  \******************************************************/
/*! exports provided: WorkdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkdetailsComponent", function() { return WorkdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkdetailsComponent = class WorkdetailsComponent {
    constructor() {
        this.worksData = [
            { id: 1, ctg_name: 'Development', title: 'Dashboard', description: '', img: '../../assets/works/interaction-1.gif' },
            { id: 1, ctg_name: 'Ui Design', title: 'Dashboard', description: '', img: '../../assets/works/interaction-2.gif' },
            { id: 1, ctg_name: 'Graphic_Design', title: 'Dashboard', description: '', img: '../../assets/works/interaction-3.gif' },
        ];
        this.FrontEnd = this.worksData.filter(x => x.ctg_name == 'UI Design').length;
    }
    changeToFrontEnd() {
        this.worksData.filter(x => x.ctg_name === 'Development');
    }
    ngOnInit() {
    }
};
WorkdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/workdetails/workdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workdetails.component.css */ "./src/app/workdetails/workdetails.component.css")).default]
    })
], WorkdetailsComponent);



/***/ }),

/***/ "./src/app/works/works.component.css":
/*!*******************************************!*\
  !*** ./src/app/works/works.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myWorks{\r\n background-image: url('works-bg.png');\r\n  padding-top:100px;\r\n  padding-bottom: 100px;\r\n}\r\ntable{\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\ntr{\r\n  display: inline-block;\r\n}\r\ntd{\r\n  display: block;\r\n}\r\ntr + tr{\r\n  margin-left: 50px;\r\n}\r\n.img-2 td + td{\r\n  margin-top: 25px;\r\n}\r\ntd img{\r\n  max-width: 100%;\r\n}\r\n.img-1 img, .img-2 img{\r\n  box-shadow: rgba(0,0,0,0.2) 0 15px 25px;\r\n  cursor: pointer;\r\n}\r\n.wks-title{\r\n  font-size: 100px;\r\n  font-family: \"Raleway SemiBold\", sans-serif;\r\n  display: block;\r\n}\r\n.viw-al{\r\n  font-size: 16px;\r\n  color: #141414;\r\n  font-family: \"Raleway Medium\", sans-serif;\r\n}\r\n.viw-al-icon{\r\n  max-width: 100%;\r\n  box-shadow: rgba(240,56,96,0.5) 0 11px 21px;\r\n  border-radius: 100%;\r\n}\r\n.viw-al-icon-25{\r\n  display: none;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .img-1 img{\r\n      max-width:80%;\r\n  }\r\n  .img-2 td + td{\r\n    margin-top: 0;\r\n    margin-left: 50px;\r\n  }\r\n  .img-2 td{\r\n    display: inline-block;\r\n  }\r\n  .img-2{\r\n    margin-top: 50px;\r\n  }\r\n}\r\n@media screen and (max-width:998px) {\r\n  .wks-title{\r\n    font-size: 80px;\r\n  }\r\n\r\n}\r\n@media screen and (max-width:850px) {\r\n  .wks-title{\r\n    font-size: 60px;\r\n  }\r\n\r\n}\r\n@media screen and (max-width:768px) {\r\n  .wks-title{\r\n    font-size: 45px;\r\n  }\r\n  .viw-al-text{\r\n    font-size: 14px;\r\n  }\r\n  .viw-al-icon{\r\n   display: none;\r\n  }\r\n  .viw-al-icon-25{\r\n    display: flex;\r\n  }\r\n  .d-n-b{\r\n    display: inline-block;\r\n  }\r\n  .viw-al-text{\r\n    margin-left: 5px;\r\n  }\r\n  tr + tr{\r\n     margin-left: 0;\r\n   }\r\n\r\n}\r\n@media screen and (max-width:700px) {\r\n  .myWorks{\r\n    padding: 50px 20px 50px 20px;\r\n  }\r\n    table tr, .img-2 td{\r\n      display: block;\r\n    }\r\n    td, tr, img{\r\n      margin: 0 auto;\r\n    }\r\n  .img-2 td + td{\r\n    margin-top: 50px;\r\n    margin-left: 0;\r\n  }\r\n  .img-1{\r\n    margin-top: 50px;\r\n  }\r\n}\r\n@media screen and (max-width:300px) {\r\n  .wks-title{\r\n    font-size: 30px;\r\n  }\r\n  .img-1 img{\r\n    max-width:100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3Mvd29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFDQUF3RDtFQUN2RCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFLQTtFQUNFO01BQ0ksYUFBYTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0FBRUY7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0dBQ0MsYUFBYTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7S0FDRyxjQUFjO0dBQ2hCOztBQUVIO0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtJQUNFO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsY0FBYztJQUNoQjtFQUNGO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlXb3Jrc3tcclxuIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy93b3Jrcy93b3Jrcy1iZy5wbmdcIik7XHJcbiAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG50cntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxudGR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudHIgKyB0cntcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4uaW1nLTIgdGQgKyB0ZHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbnRkIGltZ3tcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZy0xIGltZywgLmltZy0yIGltZ3tcclxuICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMikgMCAxNXB4IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi53a3MtdGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5IFNlbWlCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnZpdy1hbHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMxNDE0MTQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheSBNZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxufVxyXG4udml3LWFsLWljb257XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjQwLDU2LDk2LDAuNSkgMCAxMXB4IDIxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4udml3LWFsLWljb24tMjV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmltZy0xIGltZ3tcclxuICAgICAgbWF4LXdpZHRoOjgwJTtcclxuICB9XHJcbiAgLmltZy0yIHRkICsgdGR7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5pbWctMiB0ZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmltZy0ye1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OThweCkge1xyXG4gIC53a3MtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XHJcbiAgLndrcy10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAud2tzLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gIH1cclxuICAudml3LWFsLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC52aXctYWwtaWNvbntcclxuICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnZpdy1hbC1pY29uLTI1e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmQtbi1ie1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAudml3LWFsLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICB0ciArIHRye1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpIHtcclxuICAubXlXb3Jrc3tcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCA1MHB4IDIwcHg7XHJcbiAgfVxyXG4gICAgdGFibGUgdHIsIC5pbWctMiB0ZHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB0ZCwgdHIsIGltZ3tcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgLmltZy0yIHRkICsgdGR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5pbWctMXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzAwcHgpIHtcclxuICAud2tzLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuaW1nLTEgaW1ne1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorksComponent = class WorksComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-works',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/works/works.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./works.component.css */ "./src/app/works/works.component.css")).default]
    })
], WorksComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Vishnu Manda\Works\My Works\UI Development\Angular\vishnumanda\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map