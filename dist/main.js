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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header text-center mb-3\">\r\n  <div class=\"pb-5 pt-5\">\r\n    <h1>ng2-adsense</h1>\r\n    <p class=\"lead mb-4\">Angular AdSense Component</p>\r\n    <mdo-github-button\r\n      size=\"large\"\r\n      count=\"true\"\r\n      user=\"scttcper\"\r\n      repo=\"ng2-adsense\"\r\n      >\r\n    </mdo-github-button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container mb-3\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-12 col-lg-10 col-xl-9\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Demo</h4>\r\n          <h6 class=\"card-subtitle mb-2 text-danger\">Disable Adblock</h6>\r\n          <p class=\"card-text\">\r\n            Shows AdSense Ad loading on route change.\r\n            Sometimes a blank or identical AdSense ad is displayed.\r\n          </p>\r\n          <ul>\r\n            <li><strong>Page 1</strong> - responsive ads</li>\r\n            <li><strong>Page 2</strong> - ads with specified width</li>\r\n            <li><strong>Page 3 and 4</strong> - same component but w/ setTimeout when the params are changed\r\n            to refresh the ads</li>\r\n          </ul>\r\n          <hr>\r\n          <ul class=\"nav nav-pills nav-fill\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Page 1</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/2\" routerLinkActive=\"active\">Page 2</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/ads/3\" routerLinkActive=\"active\">Page 3</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/ads/4\" routerLinkActive=\"active\">Page 4</a>\r\n            </li>\r\n          </ul>\r\n          <hr>\r\n          <div class=\"mt-3\" style=\"min-height:220px\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"footer\">\r\n  <div class=\"container text-center pt-3 pb-3\">\r\n    <small class=\"text-muted\">\r\n      Demo using Angular {{ version.full }}\r\n      <br>\r\n      Not affiliated with Google AdSense\r\n    </small>\r\n    <br>\r\n    <small class=\"text-muted\">\r\n      <a href=\"https://github.com/scttcper/ng2-adsense/\">GitHub</a>\r\n    </small>\r\n  </div>\r\n</footer>\r\n"

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
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ctrl_ngx_github_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-github-buttons */ "./node_modules/@ctrl/ngx-github-buttons/fesm5/ctrl-ngx-github-buttons.js");
/* harmony import */ var _lib_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/public_api */ "./src/lib/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.component */ "./src/app/page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"] },
    { path: '2', component: _page_component__WEBPACK_IMPORTED_MODULE_6__["OtherPageComponent"] },
    { path: 'ads/:id', component: _page_component__WEBPACK_IMPORTED_MODULE_6__["ReloadPageComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
                _page_component__WEBPACK_IMPORTED_MODULE_6__["OtherPageComponent"],
                _page_component__WEBPACK_IMPORTED_MODULE_6__["ReloadPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),
                _lib_public_api__WEBPACK_IMPORTED_MODULE_4__["AdsenseModule"].forRoot({
                    adClient: 'ca-pub-7640562161899788',
                    adSlot: 2930227358,
                }),
                _ctrl_ngx_github_buttons__WEBPACK_IMPORTED_MODULE_3__["MdoButtonModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page.component.ts":
/*!***********************************!*\
  !*** ./src/app/page.component.ts ***!
  \***********************************/
/*! exports provided: PageComponent, OtherPageComponent, ReloadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPageComponent", function() { return OtherPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadPageComponent", function() { return ReloadPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Uses global values
 */
var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.title = 'Page 1';
    }
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-page-1',
            template: "\n  <p class=\"text-center\">\n    <strong>Current View: {{ title }}</strong>\n  </p>\n  <ng-adsense></ng-adsense>\n  <ng-adsense></ng-adsense>\n  ",
        })
    ], PageComponent);
    return PageComponent;
}());

/**
 * Uses local ad values
 */
var OtherPageComponent = /** @class */ (function (_super) {
    __extends(OtherPageComponent, _super);
    function OtherPageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'Page 2';
        return _this;
    }
    OtherPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-page-2',
            template: "\n  <p class=\"text-center\">\n    <strong>Current View: {{ title }}</strong>\n  </p>\n  <ng2-adsense\n    [adClient]=\"'ca-pub-7640562161899788'\"\n    [adSlot]=\"2930227358\" [width]=\"320\" [height]=\"108\">\n  </ng2-adsense>\n  <ng2-adsense\n    [display]=\"'inline-block'\"\n    [width]=\"320\" [height]=\"108\">\n  </ng2-adsense>\n  ",
        })
    ], OtherPageComponent);
    return OtherPageComponent;
}(PageComponent));

/**
 * Refreshes ads on params changes
 */
var ReloadPageComponent = /** @class */ (function () {
    function ReloadPageComponent(route) {
        this.route = route;
        this.title = 'Page 3';
        this.loading = true;
    }
    ReloadPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.title = "Page " + params['id'];
            _this.loading = true;
            setTimeout(function () { return (_this.loading = false); }, 200);
        });
    };
    ReloadPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-page-3',
            template: "\n  <p class=\"text-center\">\n    <strong>Current View: {{ title }}</strong>\n  </p>\n  <ng2-adsense *ngIf=\"!loading\"></ng2-adsense>\n  <ng2-adsense *ngIf=\"!loading\"></ng2-adsense>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReloadPageComponent);
    return ReloadPageComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/lib/adsense-config.ts":
/*!***********************************!*\
  !*** ./src/lib/adsense-config.ts ***!
  \***********************************/
/*! exports provided: ADSENSE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADSENSE_TOKEN", function() { return ADSENSE_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ADSENSE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AdsenseConfig');


/***/ }),

/***/ "./src/lib/adsense.component.ts":
/*!**************************************!*\
  !*** ./src/lib/adsense.component.ts ***!
  \**************************************/
/*! exports provided: AdsenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsenseComponent", function() { return AdsenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adsense_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adsense-config */ "./src/lib/adsense-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AdsenseComponent = /** @class */ (function () {
    function AdsenseComponent(config) {
        this.config = config;
        /** can be manually set if you need all ads on a page to have same id page-xxx */
        this.adRegion = 'page-' + Math.floor(Math.random() * 10000) + 1;
    }
    AdsenseComponent.prototype.ngOnInit = function () {
        var config = this.config;
        function use(source, defaultValue) {
            return config && source !== undefined ? source : defaultValue;
        }
        this.adClient = use(this.adClient, config.adClient);
        this.adSlot = use(this.adSlot, config.adSlot);
        this.adFormat = use(this.adFormat, config.adFormat || 'auto');
        this.display = use(this.display, config.display || 'block');
        this.width = use(this.width, config.width);
        this.height = use(this.height, config.height);
        this.layout = use(this.layout, config.layout);
        this.layoutKey = use(this.layoutKey, config.layoutKey);
        this.pageLevelAds = use(this.pageLevelAds, config.pageLevelAds);
        this.timeOutRetry = use(this.timeOutRetry, config.timeOutRetry || 200);
        this.adtest = use(this.adtest, config.adtest);
        this.fullWidthResponsive = use(this.fullWidthResponsive, config.fullWidthResponsive);
    };
    AdsenseComponent.prototype.ngOnDestroy = function () {
        var iframe = this.ins.nativeElement.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            iframe.src = 'about:blank';
            iframe.remove();
        }
    };
    /**
     * attempts to push the ad twice. Usually if one doesn't work the other
     * will depeding on if the browser has the adsense code cached and
     * if its the first page to be loaded
     */
    AdsenseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var res = this.push();
        if (res instanceof TypeError) {
            setTimeout(function () { return _this.push(); }, this.timeOutRetry);
        }
    };
    AdsenseComponent.prototype.push = function () {
        var p = {};
        if (this.pageLevelAds) {
            p.google_ad_client = this.adClient;
            p.enable_page_level_ads = true;
        }
        try {
            var adsbygoogle = window['adsbygoogle'];
            adsbygoogle.push(p);
            return true;
        }
        catch (e) {
            return e;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AdsenseComponent.prototype, "adClient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdsenseComponent.prototype, "adSlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AdsenseComponent.prototype, "adFormat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdsenseComponent.prototype, "adRegion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AdsenseComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AdsenseComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AdsenseComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AdsenseComponent.prototype, "layout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AdsenseComponent.prototype, "layoutKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdsenseComponent.prototype, "pageLevelAds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AdsenseComponent.prototype, "timeOutRetry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AdsenseComponent.prototype, "adtest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdsenseComponent.prototype, "fullWidthResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ins'),
        __metadata("design:type", Object)
    ], AdsenseComponent.prototype, "ins", void 0);
    AdsenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-adsense,ng-adsense',
            template: "\n  <ins #ins class=\"adsbygoogle\"\n    [ngStyle]=\"{'display': display, 'width.px': width, 'height.px': height }\"\n    [attr.data-ad-client]=\"adClient\"\n    [attr.data-ad-slot]=\"adSlot\"\n    [attr.data-ad-format]=\"adFormat\"\n    [attr.data-ad-region]=\"adRegion\"\n    [attr.data-layout]=\"layout\"\n    [attr.data-adtest]=\"adtest\"\n    [attr.data-layout-key]=\"layoutKey\"\n    [attr.data-full-width-responsive]=\"fullWidthResponsive\">\n  </ins>\n  ",
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_adsense_config__WEBPACK_IMPORTED_MODULE_1__["ADSENSE_TOKEN"])),
        __metadata("design:paramtypes", [Object])
    ], AdsenseComponent);
    return AdsenseComponent;
}());



/***/ }),

/***/ "./src/lib/adsense.module.ts":
/*!***********************************!*\
  !*** ./src/lib/adsense.module.ts ***!
  \***********************************/
/*! exports provided: AdsenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsenseModule", function() { return AdsenseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adsense_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adsense-config */ "./src/lib/adsense-config.ts");
/* harmony import */ var _adsense_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adsense.component */ "./src/lib/adsense.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdsenseModule = /** @class */ (function () {
    function AdsenseModule() {
    }
    AdsenseModule_1 = AdsenseModule;
    AdsenseModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: AdsenseModule_1,
            providers: [{ provide: _adsense_config__WEBPACK_IMPORTED_MODULE_2__["ADSENSE_TOKEN"], useValue: config }],
        };
    };
    var AdsenseModule_1;
    AdsenseModule = AdsenseModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [_adsense_component__WEBPACK_IMPORTED_MODULE_3__["AdsenseComponent"]],
            declarations: [_adsense_component__WEBPACK_IMPORTED_MODULE_3__["AdsenseComponent"]],
        })
    ], AdsenseModule);
    return AdsenseModule;
}());



/***/ }),

/***/ "./src/lib/public_api.ts":
/*!*******************************!*\
  !*** ./src/lib/public_api.ts ***!
  \*******************************/
/*! exports provided: AdsenseComponent, AdsenseModule, ADSENSE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adsense_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adsense.component */ "./src/lib/adsense.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdsenseComponent", function() { return _adsense_component__WEBPACK_IMPORTED_MODULE_0__["AdsenseComponent"]; });

/* harmony import */ var _adsense_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adsense.module */ "./src/lib/adsense.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdsenseModule", function() { return _adsense_module__WEBPACK_IMPORTED_MODULE_1__["AdsenseModule"]; });

/* harmony import */ var _adsense_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adsense-config */ "./src/lib/adsense-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADSENSE_TOKEN", function() { return _adsense_config__WEBPACK_IMPORTED_MODULE_2__["ADSENSE_TOKEN"]; });






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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    preserveWhitespaces: false,
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tejas.sule.QMCPL\Desktop\ng2-adsense\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map