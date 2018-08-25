(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    // Get Indicator Lists
    ApiService.prototype.getIndicatorList = function () {
        return this.http.get(this.baseUrl + '/getIndicatorList');
    };
    // create indicator list
    ApiService.prototype.createIndicatorList = function (list) {
        return this.http.post(this.baseUrl + '/createIndicatorList', list);
    };
    // delete indicator list
    ApiService.prototype.deleteIndicatorList = function (obj) {
        return this.http.post(this.baseUrl + '/deleteIndicatorList', obj);
    };
    // update indicator list
    ApiService.prototype.updateIndicatorList = function (obj) {
        return this.http.post(this.baseUrl + '/updateIndicatorList', obj);
    };
    // update indicator list
    ApiService.prototype.disableIndicatorList = function (obj) {
        return this.http.post(this.baseUrl + '/disableIndicatorList', obj);
    };
    // Get Indicator Lists
    ApiService.prototype.getEventList = function () {
        return this.http.get(this.baseUrl + '/getEventList');
    };
    // create indicator list
    ApiService.prototype.createEventList = function (list) {
        return this.http.post(this.baseUrl + '/createEventList', list);
    };
    // delete indicator list
    ApiService.prototype.deleteEventList = function (obj) {
        return this.http.post(this.baseUrl + '/deleteEventList', obj);
    };
    // update indicator list
    ApiService.prototype.updateEventList = function (obj) {
        return this.http.post(this.baseUrl + '/updateEventList', obj);
    };
    // update indicator list
    ApiService.prototype.disableEventList = function (obj) {
        return this.http.post(this.baseUrl + '/disableEventList', obj);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/indicators/indicators.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_10__["EventComponent"],
                _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_11__["IndicatorsComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"home\">\n\t<div class=\"loader_div\" *ngIf=\"loader\">\n\t\t<img src=\"assets/images/loader.svg\" class=\"img-responsive\" alt=\"Image\">\n\t</div>\n\t<h2 class=\"text-left\">{{home.name}}</h2>\n\t<!-- List all the users -->\n\t<div class=\"repeater list_users\" id=\"myRepeater\" *ngIf=\"showUsers\">\n        <div class=\"repeater-header\">\n        \t<div class=\"repeater-header-left\">\n                <div class=\"form-group\" data-resize=\"auto\">\n                \t<button type=\"button\" class=\"btn btn-default\" (click)=\"createIndicator()\"><!-- <span class=\"glyphicon glyphicon-plus-sign\"></span> --> <img src=\"assets/images/create.png\" class=\"img-responsive\" alt=\"Image\"> Create</button>\n\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"createIndicator()\"><span class=\"glyphicon glyphicon-pencil hidden\"></span> <img src=\"assets/images/edit.gif\" class=\"img-responsive\" alt=\"Image\"> Edit</button> -->\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"disableStatus()\" [disabled]=\"!currObj\"><!-- <span class=\"glyphicon glyphicon-close\"></span> --> <img src=\"assets/images/disable.png\" class=\"img-responsive\" alt=\"Image\"> Disable</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"deleteUsers()\" [disabled]=\"!currObj\"><span class=\"glyphicon glyphicon-trash\"></span> Delete</button>\n                </div>\n            </div>\n            <div class=\"repeater-header-right\">\n                <div class=\"repeater-search\">\n                    <div class=\"search disabled input-group\">\n                        <input type=\"search\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchText\"/>\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <span class=\"glyphicon glyphicon-search\"></span>\n                                <span class=\"sr-only\">Search</span>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"repeater-viewport\">\n            <div class=\"repeater-canvas table-responsive\">\n            \t<table class=\"table table-default table-striped\">\n            \t\t<thead>\n            \t\t\t<tr>\n            \t\t\t\t<th>\n        \t\t\t\t\t\t<div class=\"form-group\">\n        \t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\">\n        \t\t\t\t\t\t</div>\n                \t\t\t</th>\n                \t\t\t<th>Name</th>\n                \t\t\t<th>Description</th>\n                \t\t\t<th>Status</th>\n                \t\t\t<th>Output Destination</th>\n            \t\t\t</tr>\n            \t\t</thead>\n            \t\t<tbody>\n            \t\t\t<h3 class=\"text-center error\" *ngIf=\"error\">No Data Found</h3>\n            \t\t\t<tr *ngFor=\"let user of userObj | search : searchText; let i = index\">\n            \t\t\t\t<td>\n            \t\t\t\t\t<div class=\"form-group\">\n        \t\t\t\t\t\t\t<!-- <input type=\"checkbox\" [(ngModel)]=\"currObj\" (change)=\"getCheckObj(user, currObj)\" [value]=\"i\"> -->\n        \t\t\t\t\t\t\t<input type=\"checkbox\" [formControl]=\"checkedObj\" (change)=\"getCheckObj(user, i)\">\n        \t\t\t\t\t\t</div>\n            \t\t\t\t</td>\n            \t\t\t\t<td class=\"onclick\" (click)=\"goToSummary(user, user.id)\">{{user.event_name}}</td>\n            \t\t\t\t<td>{{user.description}}</td>\n            \t\t\t\t<td>{{user.status}}</td>\n            \t\t\t\t<td>{{user.output_destination}}</td>\n            \t\t\t</tr>\n            \t\t</tbody>\n            \t</table>\n            </div>\n            <div class=\"loader repeater-loader\"></div>\n        </div>\n    </div>\n    <!-- Create Users -->\n    <div class=\"create_users\" *ngIf=\"createUsers\">\n    \t<div class=\"header\" *ngIf=\"summaryObj\">\n    \t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"editIndicator()\"><span class=\"glyphicon glyphicon-pencil hidden\"></span> <img src=\"assets/images/edit.gif\" class=\"img-responsive\" alt=\"Image\"> Edit</button>\n    \t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Go Back</button>\n    \t</div>\n    \t<form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\n        \t<div class=\"panel-group\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t    <p (click)=\"isCollapsed1 = !isCollapsed1\" [attr.aria-expanded]=\"!isCollapsed1\" aria-controls=\"generalCollapse\" class=\"section-heading\">\n\t\t\t\t\t    <img src=\"assets/images/plus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"isCollapsed1\"><img src=\"assets/images/minus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"!isCollapsed1\"> <span>General Details</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div id=\"generalCollapse\" class=\"section_content\" [ngbCollapse]=\"isCollapsed1\">\n\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"name\" class=\"col-sm-3 col-form-label text-right\">Event Id</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"event_id\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t      <span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.event_id}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"name\" class=\"col-sm-3 col-form-label text-right\">Event Name</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"event_name\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t      <span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.event_name}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"description\" class=\"col-sm-3 col-form-label text-right\">Description</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<textarea name=\"\" id=\"description\" class=\"form-control\" rows=\"3\" formControlName=\"description\" *ngIf=\"!summaryObj\"></textarea>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.description}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"status\" class=\"col-sm-3 col-form-label text-right\">Status</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"status\" class=\"form-control\" formControlName=\"status\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t\t<option [value]=\"status\" *ngFor=\"let status of status\">{{status}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.status}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"panel panel-default\">\n\t\t\t\t    <p (click)=\"isCollapsed2 = !isCollapsed2\" [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"indicatorTypeCollapse\" class=\"section-heading\">\n\t\t\t\t\t    <img src=\"assets/images/plus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"isCollapsed2\"><img src=\"assets/images/minus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"!isCollapsed2\"> <span>Event Configurations</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div id=\"indicatorTypeCollapse\" class=\"section_content indicator_logic\" [ngbCollapse]=\"isCollapsed2\">\n\t\t\t\t\t  \t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"startDate\" class=\"col-sm-3 col-form-label text-right\">Validity Start Date</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<input type=\"date\" name=\"\" id=\"startDate\" class=\"form-control\" formControlName=\"validity_start_date\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.validity_start_date}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"endDate\" class=\"col-sm-3 col-form-label text-right\">Validity End Date</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<input type=\"date\" name=\"\" id=\"endDate\" class=\"form-control\" formControlName=\"validity_end_date\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.validity_end_date}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"output_destination\" class=\"col-sm-3 col-form-label text-right\">Event Output Destination</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"output_destination\" class=\"form-control\" formControlName=\"output_destination\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t\t<option [value]=\"output_destination\" *ngFor=\"let output_destination of outputDestination\">{{output_destination}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.output_destination}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"payloads\" class=\"col-sm-3 col-form-label text-right\">Payloads</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"payloads\" class=\"form-control\" formControlName=\"payloads\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t\t<option [value]=\"payloads\" *ngFor=\"let payloads of indicatorList\">{{payloads}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.payloads}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t  \t</div>\n\t\t\t</div>\n\t\t\t<!-- Save / cancel button -->\n\t\t\t<div class=\"buttons\" *ngIf=\"!summaryObj\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n\t\t\t</div>\n\t\t</form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/event/event.component.scss":
/*!********************************************!*\
  !*** ./src/app/event/event.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // Updated for Angular 6/RxJS 6
var EventComponent = /** @class */ (function () {
    function EventComponent(localStorage, _apiService) {
        this.localStorage = localStorage;
        this._apiService = _apiService;
        this.showUsers = true;
        this.createUsers = false;
        this.currObj = false;
        this.editUser = false;
        this.loader = false;
        this.user_id = [];
        // status
        this.status = ['Active', 'Inactive'];
        // output destination
        this.outputDestination = ['SO', 'Simulator', 'Programs', 'Event Only Simulator'];
        // indicator list
        this.indicatorList = ['Voice_TimeSeries', 'Data_TimeSeries', 'SMS_TimeSeries'];
        this.checkedObj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        // let userObj: userObj = [];
        this.newUserObj = [];
        // event form
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            event_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            event_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Active'),
            validity_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            validity_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            output_destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('SO'),
            payloads: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Voice_TimeSeries')
        });
    }
    EventComponent.prototype.ngOnInit = function () {
        this.getUserObj();
        this.localStorage.clear().subscribe(function () { });
    };
    // reset form control
    EventComponent.prototype.resetForm = function () {
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            event_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            event_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Active'),
            validity_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            validity_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            output_destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('SO'),
            payloads: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Voice_TimeSeries')
        });
    };
    // Create Indicator
    EventComponent.prototype.createIndicator = function () {
        this.resetForm();
        this.summaryObj = null;
        this.showUsers = false;
        this.createUsers = true;
    };
    // Edit Indicator
    EventComponent.prototype.editIndicator = function () {
        this.editUser = true;
        if (this.summaryObj.MasterIndicator) {
            this.summaryObj.MasterIndicator = this.summaryObj.MasterIndicator.id;
        }
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            event_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.event_id),
            event_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.event_name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.description),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.status),
            validity_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.validity_start_date),
            validity_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.validity_end_date),
            output_destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.output_destination),
            payloads: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.payloads)
        });
        this.summaryObj = null;
    };
    // cancel
    EventComponent.prototype.cancel = function () {
        this.showUsers = true;
        this.createUsers = false;
        this.editUser = false;
        this.error = false;
    };
    // get User Object
    EventComponent.prototype.getUserObj = function () {
        var _this = this;
        this.loader = true;
        this._apiService.getEventList().subscribe(function (data) {
            // refresh the list
            console.log(data, 'data');
            if (data) {
                _this.userObj = data;
                _this.master_indicator = data;
            }
            else {
                _this.error = true;
            }
            _this.loader = false;
            return true;
        }, function (error) {
            console.error("No Data Found");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
        });
    };
    // get checked object
    EventComponent.prototype.getCheckObj = function (data, index) {
        this.currObj = true;
        if (this.checkedObj.value == true) {
            this.newUserObj.push(data);
        }
        else {
            this.newUserObj.pop();
        }
        if (this.newUserObj.length > 0) {
            this.currObj = true;
        }
        else {
            this.currObj = false;
        }
        console.log(index);
    };
    // disable status
    EventComponent.prototype.disableStatus = function () {
        var _this = this;
        this.loader = true;
        for (var _i = 0, _a = this.newUserObj; _i < _a.length; _i++) {
            var user = _a[_i];
            this.user_id.push(user.id);
        }
        this._apiService.disableEventList(this.user_id).subscribe(function (data) {
            // refresh the list
            console.log(data, 'data');
            _this.dataObj = data;
            if (_this.dataObj.status == true) {
                _this.userObj = _this.dataObj.response;
            }
            _this.loader = false;
            return true;
        }, function (error) {
            console.error("No Data Found");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
        });
        // this.localStorage.setItem('userObj', this.userObj).subscribe(() => {});
        this.newUserObj = [];
        this.currObj = false;
        this.checkedObj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    };
    // delete users
    EventComponent.prototype.deleteUsers = function () {
        var _this = this;
        this.loader = true;
        for (var _i = 0, _a = this.newUserObj; _i < _a.length; _i++) {
            var user = _a[_i];
            this.user_id.push(user.id);
        }
        this._apiService.deleteEventList(this.user_id).subscribe(function (data) {
            // refresh the list
            console.log(data, 'data');
            _this.dataObj = data;
            if (_this.dataObj.status == true) {
                _this.userObj = _this.dataObj.response;
            }
            _this.loader = false;
            return true;
        }, function (error) {
            console.error("No Data Found");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
        });
        this.newUserObj = [];
        this.currObj = false;
        this.checkedObj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    };
    // go to summary page
    EventComponent.prototype.goToSummary = function (user, index) {
        this.summaryObj = user;
        this.userIndex = index;
        this.showUsers = false;
        this.createUsers = true;
    };
    // form submit
    EventComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loader = true;
        this.summaryData = this.eventForm.value;
        // TODO: Use EventEmitter with form value
        if (this.eventForm.value.master_indicator == "") {
            this.eventForm.value.master_indicator = 0;
        }
        console.warn(this.eventForm.value);
        if (this.editUser == true) {
            this._apiService.updateEventList({ "obj": this.eventForm.value, "id": this.userIndex }).subscribe(function (data) {
                // refresh the list
                console.log(data, 'data');
                _this.dataObj = data;
                if (_this.dataObj.status == true) {
                    _this.userObj = _this.dataObj.response;
                    _this.goToSummary(_this.summaryData, _this.summaryData.id);
                }
                _this.loader = false;
                return true;
            }, function (error) {
                _this.loader = false;
                console.error("No Data Found");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
            });
        }
        else {
            this._apiService.createEventList(this.eventForm.value).subscribe(function (data) {
                // refresh the list
                console.log(data, 'data');
                _this.dataObj = data;
                if (_this.dataObj.status == true) {
                    _this.userObj = _this.dataObj.response;
                    _this.goToSummary(_this.summaryData, _this.summaryData.id);
                }
                _this.loader = false;
                return true;
            }, function (error) {
                _this.loader = false;
                console.error("No Data Found");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"])
    ], EventComponent.prototype, "home", void 0);
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main section start -->\r\n<section id=\"home\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<!-- Side menu -->\r\n\t\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<h2 class=\"text-left\">Admin</h2>\r\n\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t    <p (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"adminCollapse\" class=\"section-heading\" [ngClass]=\"{'active': !isCollapsed}\">\r\n\t\t\t\t\t\t\t    <img src=\"assets/images/plus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"isCollapsed\"><img src=\"assets/images/minus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"!isCollapsed\"> <span>Sift Admin</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div id=\"adminCollapse\" [ngbCollapse]=\"isCollapsed\">\r\n\t\t\t\t\t\t\t  <ul>\r\n\t\t\t\t\t\t\t  \t<li *ngFor=\"let list of folders\" (click)=\"showUser(list)\">{{list.name}}</li>\r\n\t\t\t\t\t\t\t  </ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  \t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- Sift admin users -->\r\n\t\t\t<div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 admin_details\" *ngIf=\"listId\">\r\n\t\t\t\t<app-event [home]=\"selectedUser\" *ngIf=\"listId == 3\"></app-event>\r\n\t\t\t\t<app-indicators [home]=\"selectedUser\" *ngIf=\"listId == 2\"></app-indicators>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n<!-- Main section end -->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(localStorage, _apiService) {
        this.localStorage = localStorage;
        this._apiService = _apiService;
        this.isCollapsed = false;
        this.showUsers = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.siftAdmin();
    };
    // get sift admin folder
    HomeComponent.prototype.siftAdmin = function () {
        this.folders = [
            {
                "id": 1,
                "name": "Data Source Mapping",
                "type": "item"
            },
            {
                "id": 2,
                "name": "Indicators",
                "type": "item"
            },
            {
                "id": 3,
                "name": "Events",
                "type": "item"
            }
        ];
    };
    // show list of users
    HomeComponent.prototype.showUser = function (list) {
        this.listId = list.id;
        this.selectedUser = {
            "id": list.id,
            "name": list.name,
            "type": "item"
        };
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/indicators/indicators.component.html":
/*!******************************************************!*\
  !*** ./src/app/indicators/indicators.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"home\">\n\t<div class=\"loader_div\" *ngIf=\"loader\">\n\t\t<img src=\"assets/images/loader.svg\" class=\"img-responsive\" alt=\"Image\">\n\t</div>\n\t<h2 class=\"text-left\">{{home.name}}</h2>\n\t<!-- List all the users -->\n\t<div class=\"repeater list_users\" id=\"myRepeater\" *ngIf=\"showUsers\">\n        <div class=\"repeater-header\">\n        \t<div class=\"repeater-header-left\">\n                <div class=\"form-group\" data-resize=\"auto\">\n                \t<button type=\"button\" class=\"btn btn-default\" (click)=\"createIndicator()\"><!-- <span class=\"glyphicon glyphicon-plus-sign\"></span> --> <img src=\"assets/images/create.png\" class=\"img-responsive\" alt=\"Image\"> Create</button>\n\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"createIndicator()\"><span class=\"glyphicon glyphicon-pencil hidden\"></span> <img src=\"assets/images/edit.gif\" class=\"img-responsive\" alt=\"Image\"> Edit</button> -->\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"disableStatus()\" [disabled]=\"!currObj\"><!-- <span class=\"glyphicon glyphicon-close\"></span> --> <img src=\"assets/images/disable.png\" class=\"img-responsive\" alt=\"Image\"> Disable</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"deleteUsers()\" [disabled]=\"!currObj\"><span class=\"glyphicon glyphicon-trash\"></span> Delete</button>\n                </div>\n            </div>\n            <div class=\"repeater-header-right\">\n                <div class=\"repeater-search\">\n                    <div class=\"search disabled input-group\">\n                        <input type=\"search\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchText\"/>\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <span class=\"glyphicon glyphicon-search\"></span>\n                                <span class=\"sr-only\">Search</span>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"repeater-viewport\">\n            <div class=\"repeater-canvas table-responsive\">\n            \t<table class=\"table table-default table-striped\">\n            \t\t<thead>\n            \t\t\t<tr>\n            \t\t\t\t<th>\n        \t\t\t\t\t\t<div class=\"form-group\">\n        \t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\">\n        \t\t\t\t\t\t</div>\n                \t\t\t</th>\n                \t\t\t<th>Name</th>\n                \t\t\t<th>Description</th>\n                \t\t\t<th>Measurement Type</th>\n                \t\t\t<th>Indicator Type</th>\n                \t\t\t<th>Status</th>\n                \t\t\t<th>Return Data Type</th>\n            \t\t\t</tr>\n            \t\t</thead>\n            \t\t<tbody>\n            \t\t\t<h3 class=\"text-center error\" *ngIf=\"error\">No Data Found</h3>\n            \t\t\t<tr *ngFor=\"let user of userObj | search : searchText; let i = index\">\n            \t\t\t\t<td>\n            \t\t\t\t\t<div class=\"form-group\">\n        \t\t\t\t\t\t\t<!-- <input type=\"checkbox\" [(ngModel)]=\"currObj\" (change)=\"getCheckObj(user, currObj)\" [value]=\"i\"> -->\n        \t\t\t\t\t\t\t<input type=\"checkbox\" [formControl]=\"checkedObj\" (change)=\"getCheckObj(user, i)\">\n        \t\t\t\t\t\t</div>\n            \t\t\t\t</td>\n            \t\t\t\t<td class=\"onclick\" (click)=\"goToSummary(user, user.id)\">{{user.indicator_name}}</td>\n            \t\t\t\t<td>{{user.description}}</td>\n            \t\t\t\t<td>{{user.measurement_type}}</td>\n            \t\t\t\t<td>{{user.indicator_type}}</td>\n            \t\t\t\t<td>{{user.status}}</td>\n            \t\t\t\t<td>{{user.data_type}}</td>\n            \t\t\t</tr>\n            \t\t</tbody>\n            \t</table>\n            </div>\n            <div class=\"loader repeater-loader\"></div>\n        </div>\n    </div>\n    <!-- Create Users -->\n    <div class=\"create_users\" *ngIf=\"createUsers\">\n    \t<div class=\"header\" *ngIf=\"summaryObj\">\n    \t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"editIndicator()\"><span class=\"glyphicon glyphicon-pencil hidden\"></span> <img src=\"assets/images/edit.gif\" class=\"img-responsive\" alt=\"Image\"> Edit</button>\n    \t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Go Back</button>\n    \t</div>\n    \t<form [formGroup]=\"indicatorForm\" (ngSubmit)=\"onSubmit()\">\n        \t<div class=\"panel-group\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t    <p (click)=\"isCollapsed1 = !isCollapsed1\" [attr.aria-expanded]=\"!isCollapsed1\" aria-controls=\"generalCollapse\" class=\"section-heading\">\n\t\t\t\t\t    <img src=\"assets/images/plus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"isCollapsed1\"><img src=\"assets/images/minus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"!isCollapsed1\"> <span>General Details</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div id=\"generalCollapse\" class=\"section_content\" [ngbCollapse]=\"isCollapsed1\">\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"name\" class=\"col-sm-3 col-form-label text-right\">Indicator Name</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"indicator_name\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t      <span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.indicator_name}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"description\" class=\"col-sm-3 col-form-label text-right\">Description</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<textarea name=\"\" id=\"description\" class=\"form-control\" rows=\"3\" formControlName=\"description\" *ngIf=\"!summaryObj\"></textarea>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.description}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"status\" class=\"col-sm-3 col-form-label text-right\">Status</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"status\" class=\"form-control\" formControlName=\"status\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t\t<option [value]=\"status\" *ngFor=\"let status of status\">{{status}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.status}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"returnData\" class=\"col-sm-3 col-form-label text-right\">Return Data Type</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"returnData\" class=\"form-control\" formControlName=\"data_type\" *ngIf=\"!summaryObj\">\t\n\t\t\t\t\t\t    \t\t<option [value]=\"type\" *ngFor=\"let type of dataType\">{{type}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.data_type}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"panel panel-default\">\n\t\t\t\t    <p (click)=\"isCollapsed2 = !isCollapsed2\" [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"indicatorTypeCollapse\" class=\"section-heading\">\n\t\t\t\t\t    <img src=\"assets/images/plus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"isCollapsed2\"><img src=\"assets/images/minus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"!isCollapsed2\"> <span>Indicator Type</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div id=\"indicatorTypeCollapse\" class=\"section_content indicator_logic\" [ngbCollapse]=\"isCollapsed2\">\n\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"description\" class=\"col-sm-3 col-form-label text-right\">Indicator Type</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t<div class=\"form-check form-check-inline\" *ngFor=\"let indicator of indicatorType\">\n\t\t\t\t\t\t\t\t  <input class=\"form-check-input\" type=\"radio\" id=\"{{indicator}}\" [value]=\"indicator\" formControlName=\"indicator_type\" (click)=\"getIndicator(indicator)\">\n\t\t\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"{{indicator}}\" (click)=\"getIndicator(indicator)\">{{indicator}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-sm-6\" *ngIf=\"summaryObj\">\n\t\t\t\t\t\t\t\t<span class=\"info-text\">{{summaryObj.indicator_type}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"form-group row\" *ngIf=\"showDate\">\n\t\t\t\t\t\t    <label for=\"startDate\" class=\"col-sm-3 col-form-label text-right\">Start Date</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<input type=\"date\" name=\"\" id=\"startDate\" class=\"form-control\" formControlName=\"start_date\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.start_date}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"form-group row\" *ngIf=\"showDate\">\n\t\t\t\t\t\t    <label for=\"endDate\" class=\"col-sm-3 col-form-label text-right\">End Date</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<input type=\"date\" name=\"\" id=\"endDate\" class=\"form-control\" formControlName=\"end_date\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.end_date}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t</div>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"panel panel-default\">\n\t\t\t\t    <p (click)=\"isCollapsed3 = !isCollapsed3\" [attr.aria-expanded]=\"!isCollapsed3\" aria-controls=\"indicatorCollapse\" class=\"section-heading\">\n\t\t\t\t\t    <img src=\"assets/images/plus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"isCollapsed3\"><img src=\"assets/images/minus.gif\" class=\"img-responsive\" alt=\"Image\" *ngIf=\"!isCollapsed3\"> <span>Indicator Logic</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div id=\"indicatorCollapse\" class=\"section_content indicator_logic\" [ngbCollapse]=\"isCollapsed3\">\n\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"master_indicator\" class=\"col-sm-3 col-form-label text-right\">Master Indicator</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<ng-select [items]=\"indicatorList\"\n\t\t\t\t\t\t\t\t           formControlName=\"master_indicator\" \n\t\t\t\t\t\t\t\t           bindLabel=\"indicator_name\"\n\t\t\t\t\t\t\t\t           bindValue=\"id\"\n\t\t\t\t\t\t\t\t           *ngIf=\"!summaryObj\"\n\t\t\t\t\t\t\t\t           class=\"custom\">\n\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t    \t<!-- <span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.MasterIndicator ? summaryObj.MasterIndicator.indicator_name : summaryObj.MasterIndicator}}</span> -->\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.master_indicator}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"measurementType\" class=\"col-sm-3 col-form-label text-right\">Measurement Type</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"measurementType\" class=\"form-control\" formControlName=\"measurement_type\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t\t<option [value]=\"measurement\" *ngFor=\"let measurement of measurementType\">{{measurement}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.measurement_type}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"measurementFrequency\" class=\"col-sm-3 col-form-label text-right\">Measurement Frequency</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<select name=\"\" id=\"measurementFrequency\" class=\"form-control\" formControlName=\"measurement_frequency\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t\t<option [value]=\"freq\" *ngFor=\"let freq of measurementFrequency\">{{freq}}</option>\n\t\t\t\t\t\t    \t</select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.measurement_frequency}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-sm-2\">\n\t\t\t\t\t\t    \t<input type=\"text\" name=\"measurementValue\" id=\"measurementValue\" formControlName=\"measurement_value\" class=\"form-control\" value=\"\" placeholder=\"Enter Value\" *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.measurement_value}}</span>\t\t\t\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"form-group row\">\n\t\t\t\t\t\t    <label for=\"siftFunction\" class=\"col-sm-3 col-form-label text-right\">Sift Function</label>\n\t\t\t\t\t\t    <div class=\"col-sm-6\">\n\t\t\t\t\t\t    \t<ng-select class=\"custom\"\n\t\t\t\t\t\t    \t\t\t\t[items]=\"siftFunction\"\n\t\t\t\t\t    \t\t\t\t\tbindLabel=\"function\"\n\t\t\t\t\t    \t\t\t\t\tbindValue=\"function\"\n\t\t\t\t\t\t\t\t           formControlName=\"sift_function\"\n\t\t\t\t\t\t\t\t           placeholder=\"Select Function\"\n\t\t\t\t\t\t\t\t           *ngIf=\"!summaryObj\">\n\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t    \t<span class=\"info-text\" *ngIf=\"summaryObj\">{{summaryObj.sift_function}}</span>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t</div>\n\t\t\t  \t</div>\n\t\t\t</div>\n\t\t\t<!-- Save / cancel button -->\n\t\t\t<div class=\"buttons\" *ngIf=\"!summaryObj\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n\t\t\t</div>\n\t\t</form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/indicators/indicators.component.scss":
/*!******************************************************!*\
  !*** ./src/app/indicators/indicators.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/indicators/indicators.component.ts":
/*!****************************************************!*\
  !*** ./src/app/indicators/indicators.component.ts ***!
  \****************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // Updated for Angular 6/RxJS 6
var IndicatorsComponent = /** @class */ (function () {
    function IndicatorsComponent(localStorage, _apiService) {
        this.localStorage = localStorage;
        this._apiService = _apiService;
        this.showUsers = true;
        this.createUsers = false;
        this.currObj = false;
        this.editUser = false;
        this.loader = false;
        this.user_id = [];
        // measurement type
        this.measurementType = ['Count', 'Value', 'Volume'];
        // status
        this.status = ['Active', 'Inactive'];
        // data type
        this.dataType = ['Integer', 'Long', 'Double', 'Boolean'];
        // indicator typs
        this.indicatorType = ['Session', 'Monitored'];
        // measurement frequency
        this.measurementFrequency = ['Hourly', 'Daily', 'Weekly', 'Monthly'];
        // indicator list
        this.indicatorList = ['Voice_TimeSeries', 'Data_TimeSeries', 'SMS_TimeSeries'];
        // Sift Functions
        this.siftFunction = [
            {
                id: 1,
                function: 'getContactCount(java.lang.String category, java.lang.String offer, java.lang.String channel, int start, int duration) ( Integer )'
            },
            {
                id: 2,
                function: 'getNthRecharge( int start, int numDays, double value, int nthRecharge ) (Boolean)'
            },
            {
                id: 3,
                function: 'getAverageRecharge( int startDay, int numDays ) (Double)'
            },
            {
                id: 4,
                function: 'getAvgHistoricalScore( String level, String value, int count )(Double)'
            },
            {
                id: 5,
                function: 'getThresholdBurnerRate( String bundleName, int range )(String)'
            },
            {
                id: 6,
                function: 'getValueRemaining( String bundleType, String value )(Double)'
            },
            {
                id: 7,
                function: 'isBundleValid( String level, String bundleName )(Boolean)'
            },
            {
                id: 8,
                function: 'getBurnerRate( String bundleType, String value )(Double)'
            },
            {
                id: 9,
                function: 'getDaysSinceLastContact( java.lang.String category, java.lang.String offer, java.lang.String channel )(Integer)'
            },
            {
                id: 10,
                function: 'getActivityCalendarFactor( String factor )(Integer)'
            },
            {
                id: 11,
                function: 'getFulfillmentCount(java.lang.String category, java.lang.String offer, java.lang.String channel, int start, int duration )(Integer)'
            },
            {
                id: 12,
                function: 'getAvgHistoricalScore( String level, String value, int count )(Double)'
            },
            {
                id: 13,
                function: 'getPercentBalLeft( String level, String value )(Double)'
            }
        ];
        this.checkedObj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        // let userObj: userObj = [];
        this.newUserObj = [];
        // indicator form
        this.indicatorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            indicator_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            measurement_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Count'),
            indicator_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Active'),
            data_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Integer'),
            master_indicator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            measurement_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Hourly'),
            measurement_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sift_function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.siftFunction[0].function)
        });
    }
    IndicatorsComponent.prototype.ngOnInit = function () {
        this.getUserObj();
        this.localStorage.clear().subscribe(function () { });
    };
    // reset form control
    IndicatorsComponent.prototype.resetForm = function () {
        this.indicatorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            indicator_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            measurement_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Count'),
            indicator_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Active'),
            data_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Integer'),
            master_indicator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            measurement_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Hourly'),
            measurement_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sift_function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.siftFunction[0].function)
        });
    };
    // Create Indicator
    IndicatorsComponent.prototype.createIndicator = function () {
        this.resetForm();
        this.summaryObj = null;
        this.showUsers = false;
        this.createUsers = true;
    };
    // Edit Indicator
    IndicatorsComponent.prototype.editIndicator = function () {
        this.editUser = true;
        // if(this.summaryObj.MasterIndicator) {
        //   this.summaryObj.MasterIndicator = this.summaryObj.MasterIndicator.id;
        // }
        this.indicatorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            indicator_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.indicator_name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.description),
            measurement_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.measurement_type),
            indicator_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.indicator_type),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.start_date),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.end_date),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.status),
            data_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.data_type),
            master_indicator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.master_indicator),
            measurement_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.measurement_frequency),
            measurement_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.measurement_value),
            sift_function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.summaryObj.sift_function)
        });
        this.summaryObj = null;
    };
    // cancel
    IndicatorsComponent.prototype.cancel = function () {
        this.showUsers = true;
        this.createUsers = false;
        this.editUser = false;
    };
    // show list of users
    IndicatorsComponent.prototype.showUser = function (list) {
        this.listId = list.id;
        this.indicatorName = list.name;
        this.showUsers = true;
        this.createUsers = false;
        this.currObj = false;
        this.editUser = false;
        this.selectedUser = {
            "id": list.id,
            "name": list.name,
            "type": "item"
        };
    };
    // get indicator 
    IndicatorsComponent.prototype.getIndicator = function (val) {
        if (val == "Session") {
            this.showDate = true;
        }
        else {
            this.showDate = false;
        }
    };
    // get User Object
    IndicatorsComponent.prototype.getUserObj = function () {
        var _this = this;
        this.loader = true;
        this._apiService.getIndicatorList().subscribe(function (data) {
            // refresh the list
            console.log(data, 'data');
            if (data) {
                _this.userObj = data;
                _this.master_indicator = data;
            }
            else {
                _this.error = true;
            }
            _this.loader = false;
            return true;
        }, function (error) {
            console.error("No Data Found");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
        });
    };
    // get checked object
    IndicatorsComponent.prototype.getCheckObj = function (data, index) {
        this.currObj = true;
        if (this.checkedObj.value == true) {
            this.newUserObj.push(data);
        }
        else {
            this.newUserObj.pop();
        }
        if (this.newUserObj.length > 0) {
            this.currObj = true;
        }
        else {
            this.currObj = false;
        }
        console.log(index);
    };
    // disable status
    IndicatorsComponent.prototype.disableStatus = function () {
        var _this = this;
        // for(let obj of this.newUserObj) {
        //     for(let obj1 of this.userObj) {
        //       if(obj == obj1) {
        //         if(obj1.status == "Active") {
        //           obj1.status = "Inactive";
        //         }
        //       }
        //     }
        // }
        this.loader = true;
        for (var _i = 0, _a = this.newUserObj; _i < _a.length; _i++) {
            var user = _a[_i];
            this.user_id.push(user.id);
        }
        this._apiService.disableIndicatorList(this.user_id).subscribe(function (data) {
            // refresh the list
            console.log(data, 'data');
            _this.dataObj = data;
            if (_this.dataObj.status == true) {
                _this.userObj = _this.dataObj.response;
            }
            _this.loader = false;
            return true;
        }, function (error) {
            console.error("No Data Found");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
        });
        // this.localStorage.setItem('userObj', this.userObj).subscribe(() => {});
        this.newUserObj = [];
        this.currObj = false;
        this.checkedObj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    };
    // delete users
    IndicatorsComponent.prototype.deleteUsers = function () {
        var _this = this;
        this.loader = true;
        for (var _i = 0, _a = this.newUserObj; _i < _a.length; _i++) {
            var user = _a[_i];
            this.user_id.push(user.id);
        }
        this._apiService.deleteIndicatorList(this.user_id).subscribe(function (data) {
            // refresh the list
            console.log(data, 'data');
            _this.dataObj = data;
            if (_this.dataObj.status == true) {
                _this.userObj = _this.dataObj.response;
            }
            _this.loader = false;
            return true;
        }, function (error) {
            console.error("No Data Found");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
        });
        // for(let obj of this.newUserObj) {
        //     this.userObj = this.userObj.filter((element1) => {
        //       return element1 !== obj;
        //     })
        // }
        // this.localStorage.setItem('userObj', this.userObj).subscribe(() => {});
        this.newUserObj = [];
        this.currObj = false;
        this.checkedObj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    };
    // go to summary page
    IndicatorsComponent.prototype.goToSummary = function (user, index) {
        this.summaryObj = user;
        this.userIndex = index;
        this.showUsers = false;
        this.createUsers = true;
        this.showDate = true;
    };
    // form submit
    IndicatorsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loader = true;
        this.summaryData = this.indicatorForm.value;
        // TODO: Use EventEmitter with form value
        if (this.indicatorForm.value.master_indicator == "") {
            this.indicatorForm.value.master_indicator = 0;
        }
        console.warn(this.indicatorForm.value);
        if (this.editUser == true) {
            this._apiService.updateIndicatorList({ "obj": this.indicatorForm.value, "id": this.userIndex }).subscribe(function (data) {
                // refresh the list
                console.log(data, 'data');
                _this.dataObj = data;
                if (_this.dataObj.status == true) {
                    _this.userObj = _this.dataObj.response;
                    _this.goToSummary(_this.summaryData, _this.summaryData.id);
                }
                _this.loader = false;
                return true;
            }, function (error) {
                _this.loader = false;
                console.error("No Data Found");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
            });
        }
        else {
            this._apiService.createIndicatorList(this.indicatorForm.value).subscribe(function (data) {
                // refresh the list
                console.log(data, 'data');
                _this.dataObj = data;
                if (_this.dataObj.status == true) {
                    _this.userObj = _this.dataObj.response;
                    _this.goToSummary(_this.summaryData, _this.summaryData.id);
                }
                _this.loader = false;
                return true;
            }, function (error) {
                _this.loader = false;
                console.error("No Data Found");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error); // Angular 6/RxJS 6
            });
        }
        // if(this.editUser == true) {
        //   this.userObj[this.userIndex] = this.indicatorForm.value;
        // } else {
        //   this.userObj.push(this.indicatorForm.value);
        // }
        // this.localStorage.setItem('userObj', this.userObj).subscribe(() => {});
    };
    // toggle group
    IndicatorsComponent.prototype.toggleGroup = function (id) {
        if (this.isGroupShown(id)) {
            this.show = null;
        }
        else {
            this.show = id;
        }
    };
    // group shown
    IndicatorsComponent.prototype.isGroupShown = function (id) {
        return this.show == id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"])
    ], IndicatorsComponent.prototype, "home", void 0);
    IndicatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indicators',
            template: __webpack_require__(/*! ./indicators.component.html */ "./src/app/indicators/indicators.component.html"),
            styles: [__webpack_require__(/*! ./indicators.component.scss */ "./src/app/indicators/indicators.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], IndicatorsComponent);
    return IndicatorsComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        // return items.filter(item =&amp;gt; item.name.indexOf(searchText) !== -1);
        return items.filter(function (it) {
            if (it.indicator_name) {
                return it.indicator_name.toLowerCase().includes(searchText);
            }
            else {
                return it.event_name.toLowerCase().includes(searchText);
            }
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // baseUrl: "http://localhost:3000"
    baseUrl: "https://kw-sfdemo-kwapp3.herokuapp.com"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webapp\kw-sfdemo-kwapp3\public\ixn\activities\sift-indicators\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map