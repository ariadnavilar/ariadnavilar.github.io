(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ariad\Coding\Angular\angular-rick-and-morty\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'https://rickandmortyapi.com/api/'
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

/***/ "CqKT":
/*!************************************************************!*\
  !*** ./src/app/shared/services/local/favorites.service.ts ***!
  \************************************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FavoritesService {
    constructor() {
        this.favorites = [];
    }
    addNewFavorite(newFavorite) {
        const isAdded = !!this.favorites.find(el => el.id === newFavorite.id && el.name === newFavorite.name);
        if (!isAdded) {
            this.favorites.push(newFavorite);
        }
    }
    deleteAddedFavorite(i) {
        this.favorites.splice(i, 1);
    }
    getFavorites() {
        return this.favorites;
    }
}
FavoritesService.ɵfac = function FavoritesService_Factory(t) { return new (t || FavoritesService)(); };
FavoritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavoritesService, factory: FavoritesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EY45":
/*!******************************************************************!*\
  !*** ./src/app/pages/locations-page/locations-page.component.ts ***!
  \******************************************************************/
/*! exports provided: LocationsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsPageComponent", function() { return LocationsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/locations.service */ "WIl3");
/* harmony import */ var _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/gallery/gallery.component */ "JQ9g");




class LocationsPageComponent {
    constructor(LocationsService) {
        this.LocationsService = LocationsService;
    }
    ngOnInit() {
        this.LocationsService.getLocations().subscribe((res) => {
            this.locations = res.results;
        });
    }
}
LocationsPageComponent.ɵfac = function LocationsPageComponent_Factory(t) { return new (t || LocationsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"])); };
LocationsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationsPageComponent, selectors: [["app-locations-page"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function LocationsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.locations);
    } }, directives: [_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9ucy1wYWdlL2xvY2F0aW9ucy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-locations-page',
                templateUrl: './locations-page.component.html',
                styleUrls: ['./locations-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"] }]; }, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 4, vars: 0, consts: [[1, "homepage"], ["src", "../../../assets/img/rickandmortyhomepage.png", "alt", "Rick and Morty", 1, "backgroundphoto"], [1, "maintitle"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rick and Morty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".homepage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.backgroundphoto[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 80%;\n  padding-top: 30px;\n}\n\n.maintitle[_ngcontent-%COMP%] {\n  font-size: 180px;\n  text-align: center;\n  color: #00AFC8;\n  -webkit-text-stroke: 0.5px #00AFC8;\n  text-shadow: -2px -2px 3px #000, 2px 2px 3px #000, -2px 2px 3px #000, 2px -2px 3px #000;\n  font-weight: bolder;\n  \n  \n  position: relative;\n}\n\n@media only screen and (min-width 992px) {\n  .backgroundphoto[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .maintitle[_ngcontent-%COMP%] {\n    font-size: 140px;\n    padding-top: 100px;\n  }\n\n  .backgroundphoto[_ngcontent-%COMP%] {\n    padding-top: 120px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .maintitle[_ngcontent-%COMP%] {\n    font-size: 90px;\n  }\n\n  .backgroundphoto[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    height: 60%;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .backgroundphoto[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    height: 40%;\n  }\n\n  .maintitle[_ngcontent-%COMP%] {\n    margin-top: 150px;\n    padding-top: 0;\n    font-size: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLHVGQUFBO0VBQ0EsbUJBQUE7RUFDRCw0Q0FBQTtFQUNDLHFDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBQUY7O0VBRUE7SUFDRSxrQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQUE7RUFBRjs7RUFFQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQUFGOztFQUdBO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kcGhvdG8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1haW50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMEFGQzg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggIzAwQUZDODtcclxuICB0ZXh0LXNoYWRvdzogLTJweCAtMnB4IDNweCAjMDAwLCAycHggMnB4IDNweCAjMDAwLCAtMnB4IDJweCAzcHggIzAwMCwgMnB4IC0ycHggM3B4ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuIC8qIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB5ZWxsb3dncmVlbjsqL1xyXG4gIC8qdGV4dC1zaGFkb3c6IDAgMCAycmVtIHllbGxvd2dyZWVuOyovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOTkycHgpIHtcclxuICAuYmFja2dyb3VuZHBob3RvIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWludGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB9XHJcbiAgLmJhY2tncm91bmRwaG90byB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1haW50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5kcGhvdG8ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmJhY2tncm91bmRwaG90byB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gIH1cclxuXHJcbiAgLm1haW50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JQ9g":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/gallery/gallery.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local/favorites.service */ "CqKT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function GalleryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addFavorite(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADD TO FAVORITES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addFavorite(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ADD TO FAVORITES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteFavorite(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DELETE FROM FAVORITES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figcaption", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/characters/", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image ? item_r1.image : "assets/img/earth.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class GalleryComponent {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
    }
    ngOnInit() {
    }
    addFavorite(character) {
        this.favoritesService.addNewFavorite(character);
    }
    deleteFavorite(character) {
        this.favoritesService.deleteAddedFavorite(character);
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { items: "items" }, decls: 3, vars: 1, consts: [[1, "gallery"], [1, "row"], ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "gallery__buttons"], ["routerLink", "/locations", "routerLinkActive", "gallery__btn__enabled", 1, "gallery__btn", 3, "click"], ["routerLink", "/characters", "routerLinkActive", "gallery__btn__enabled", 1, "gallery__btn", 3, "click"], ["routerLink", "/favorite", "routerLinkActive", "gallery__btn__enabled", 1, "gallery__btn", 3, "click"], [1, "gallery__figure", 3, "routerLink"], ["alt", "Rick and Morty image", 1, "gallery__img", 3, "src"], [1, "gallery__figcaption"], [1, "gallery__text"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_div_2_Template, 13, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".gallery__figure[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  text-align: center;\n}\n.gallery__img[_ngcontent-%COMP%] {\n  border: 0.5vh solid #00AFC8;\n  width: 100%;\n}\n.gallery__img[_ngcontent-%COMP%]:hover {\n  opacity: 60%;\n  cursor: pointer;\n}\n.gallery__figcaption[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gallery__text[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #00AFC8;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: table-cell;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 0;\n}\n.gallery__btn[_ngcontent-%COMP%] {\n  background-color: #00AFC8;\n  color: white;\n  font-weight: bold;\n  margin-top: 60px;\n  margin-bottom: 10px;\n  padding: 7px;\n  border: 3px solid #00AFC8;\n  padding: 10px;\n  cursor: pointer;\n  font-family: rickandmorty, \"sans-serif\";\n  font-weight: lighter;\n  font-size: 20px;\n  display: none;\n}\n.gallery__btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #00AFC8;\n  border: 3px solid #00AFC8;\n}\n.gallery__btn__enabled[_ngcontent-%COMP%] {\n  display: inline;\n}\n.gallery__buttons[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUROO0FBS0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFISjtBQUtFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFISjtBQUlJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFGTjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBTUU7RUFDRSxrQkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnkge1xyXG5cclxuICAmX19maWd1cmV7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBib3JkZXI6IDAuNXZoIHNvbGlkICMwMEFGQzg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiA2MCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ZpZ2NhcHRpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICZfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogIzAwQUZDODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgJl9fYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFGQzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwQUZDODtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogcmlja2FuZG1vcnR5LCAnc2Fucy1zZXJpZic7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAjMDBBRkM4O1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDBBRkM4O1xyXG4gICAgfVxyXG4gICAgJl9fZW5hYmxlZCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J1dHRvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.scss']
            }]
    }], function () { return [{ type: _services_local_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KDTj":
/*!******************************************************************!*\
  !*** ./src/app/pages/favorites-page/favorites-page.component.ts ***!
  \******************************************************************/
/*! exports provided: FavoritesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageComponent", function() { return FavoritesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_local_favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/local/favorites.service */ "CqKT");
/* harmony import */ var _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/gallery/gallery.component */ "JQ9g");




class FavoritesPageComponent {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
    }
    ngOnInit() {
        this.favorites = this.favoritesService.getFavorites();
    }
}
FavoritesPageComponent.ɵfac = function FavoritesPageComponent_Factory(t) { return new (t || FavoritesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_local_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"])); };
FavoritesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesPageComponent, selectors: [["app-favorites-page"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function FavoritesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.favorites);
    } }, directives: [_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy1wYWdlL2Zhdm9yaXRlcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites-page',
                templateUrl: './favorites-page.component.html',
                styleUrls: ['./favorites-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_local_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"] }]; }, null); })();


/***/ }),

/***/ "OEal":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 9, vars: 2, consts: [[1, "spacebetween"], ["routerLink", "/", "routerLinkActive", "menuactive", 3, "routerLinkActiveOptions"], ["routerLink", "/characters", "routerLinkActive", "menuactive"], ["routerLink", "/locations", "routerLinkActive", "menuactive"], ["routerLink", "/favorite", "routerLinkActive", "menuactive"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00AFC8;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: yellowgreen;\n}\n.spacebetween[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 400%;\n  padding-right: 8%;\n  padding-left: 8%;\n  padding-top: 2%;\n  padding-bottom: 5%;\n}\n@media only screen and (max-width: 1300px) {\n  .spacebetween[_ngcontent-%COMP%] {\n    font-size: 300%;\n  }\n}\n@media only screen and (max-width: 950px) {\n  .spacebetween[_ngcontent-%COMP%] {\n    font-size: 200%;\n  }\n}\n@media only screen and (max-width: 780px) {\n  .spacebetween[_ngcontent-%COMP%] {\n    font-size: 200%;\n    padding-left: 2%;\n    padding-right: 2%;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .spacebetween[_ngcontent-%COMP%] {\n    font-size: 130%;\n    padding-left: 2%;\n    padding-right: 2%;\n  }\n\n  a[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 370px) {\n  .spacebetween[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding-top: 5%;\n    padding-bottom: 5%;\n    font-size: 130%;\n    padding-left: 2%;\n    padding-right: 2%;\n  }\n}\n.menuactive[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #00AFC8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFERjtBQUNGO0FBSUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBRkY7O0VBSUE7SUFDRSxtQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLGdDQUFBO0FBSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgYSB7XHJcbiAgY29sb3I6ICMwMEFGQzg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLnNwYWNlYmV0d2VlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDQwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5zcGFjZWJldHdlZW4ge1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gIC5zcGFjZWJldHdlZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xyXG4gIC5zcGFjZWJldHdlZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5zcGFjZWJldHdlZW4ge1xyXG4gICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIH1cclxuICBhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgLnNwYWNlYmV0d2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnVhY3RpdmV7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMEFGQzg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ "OEal");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'angular-rick-and-morty';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WIl3":
/*!******************************************************!*\
  !*** ./src/app/shared/services/locations.service.ts ***!
  \******************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LocationsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getLocations() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'location');
    }
}
LocationsService.ɵfac = function LocationsService_Factory(t) { return new (t || LocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationsService, factory: LocationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/favorites-page/favorites-page.component */ "KDTj");
/* harmony import */ var _pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/locations-page/locations-page.component */ "EY45");
/* harmony import */ var _pages_characters_page_characters_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/characters-page/characters-page.component */ "v2TG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ "OEal");
/* harmony import */ var _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/gallery/gallery.component */ "JQ9g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_characters_page_pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/characters-page/pages/detail-page/detail-page.component */ "dzCE");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_characters_page_characters_page_component__WEBPACK_IMPORTED_MODULE_7__["CharactersPageComponent"], _pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_6__["LocationsPageComponent"], _pages_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageComponent"], _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"], _pages_characters_page_pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_characters_page_characters_page_component__WEBPACK_IMPORTED_MODULE_7__["CharactersPageComponent"], _pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_6__["LocationsPageComponent"], _pages_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageComponent"], _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"], _pages_characters_page_pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailPageComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dzCE":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/characters-page/pages/detail-page/detail-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_characters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/characters.service */ "gMLy");




class DetailPageComponent {
    constructor(route, charactersService) {
        this.route = route;
        this.charactersService = charactersService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const characterId = params.get('characterId');
            this.charactersService.getDetail(characterId).subscribe(character => {
                this.character = character;
            });
        });
    }
}
DetailPageComponent.ɵfac = function DetailPageComponent_Factory(t) { return new (t || DetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_characters_service__WEBPACK_IMPORTED_MODULE_2__["CharactersService"])); };
DetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPageComponent, selectors: [["app-detail-page"]], decls: 19, vars: 5, consts: [[1, "detailinfo"], [1, "row", "justify-content-center", "col-12"], [1, "col-6"], [1, "gallery__img", 3, "src"]], template: function DetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NAME:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "STATUS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GENDER:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SPECIE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.species);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.character.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".gallery__figure[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  text-align: center;\n}\n.gallery__img[_ngcontent-%COMP%] {\n  border: 0.5vh solid #00AFC8;\n  width: 100%;\n}\n.gallery__img[_ngcontent-%COMP%]:hover {\n  opacity: 60%;\n  cursor: pointer;\n}\n.gallery__figcaption[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gallery__text[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #00AFC8;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: table-cell;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 0;\n}\n.gallery__btn[_ngcontent-%COMP%] {\n  background-color: #00AFC8;\n  color: white;\n  font-weight: bold;\n  margin-top: 60px;\n  margin-bottom: 10px;\n  padding: 7px;\n  border: 3px solid #00AFC8;\n  padding: 10px;\n  cursor: pointer;\n  font-family: rickandmorty, \"sans-serif\";\n  font-weight: lighter;\n  font-size: 20px;\n  display: none;\n}\n.gallery__btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #00AFC8;\n  border: 3px solid #00AFC8;\n}\n.gallery__btn__enabled[_ngcontent-%COMP%] {\n  display: inline;\n}\n.gallery__buttons[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.detailinfo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #00AFC8;\n  font-size: 35px;\n}\n.detailinfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n.gallery__img[_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzLXBhZ2UvcGFnZXMvZGV0YWlsLXBhZ2UvZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0FDRko7QURHSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDRE47QURLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0hKO0FES0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0hKO0FES0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0hKO0FESUk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0ZOO0FESUk7RUFDRSxlQUFBO0FDRk47QURNRTtFQUNFLGtCQUFBO0FDSko7QUFyREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF3REY7QUF2REU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUF5REo7QUFwREU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUF1REoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzLXBhZ2UvcGFnZXMvZGV0YWlsLXBhZ2UvZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XHJcblxyXG4gICZfX2ZpZ3VyZXtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIGJvcmRlcjogMC41dmggc29saWQgIzAwQUZDODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDYwJTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZmlnY2FwdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgJl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjMDBBRkM4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAmX19idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUZDODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDBBRkM4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiByaWNrYW5kbW9ydHksICdzYW5zLXNlcmlmJztcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6ICMwMEFGQzg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMEFGQzg7XHJcbiAgICB9XHJcbiAgICAmX19lbmFibGVkIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5nYWxsZXJ5X19maWd1cmUge1xuICBtYXJnaW46IDE2cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdhbGxlcnlfX2ltZyB7XG4gIGJvcmRlcjogMC41dmggc29saWQgIzAwQUZDODtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ2FsbGVyeV9faW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogNjAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2FsbGVyeV9fZmlnY2FwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nYWxsZXJ5X190ZXh0IHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzAwQUZDODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4uZ2FsbGVyeV9fYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUZDODtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDBBRkM4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiByaWNrYW5kbW9ydHksIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdhbGxlcnlfX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwQUZDODtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwQUZDODtcbn1cbi5nYWxsZXJ5X19idG5fX2VuYWJsZWQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uZ2FsbGVyeV9fYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRldGFpbGluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMEFGQzg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5kZXRhaWxpbmZvIHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdhbGxlcnlfX2ltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-page',
                templateUrl: './detail-page.component.html',
                styleUrls: ['./detail-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_services_characters_service__WEBPACK_IMPORTED_MODULE_2__["CharactersService"] }]; }, null); })();


/***/ }),

/***/ "gMLy":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/characters.service.ts ***!
  \*******************************************************/
/*! exports provided: CharactersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersService", function() { return CharactersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CharactersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCharacters() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'character');
    }
    getDetail(characterId) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'character/' + characterId);
    }
    getCharactersFiltered(filter) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'character/?name' + filter);
    }
}
CharactersService.ɵfac = function CharactersService_Factory(t) { return new (t || CharactersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CharactersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharactersService, factory: CharactersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharactersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v2TG":
/*!********************************************************************!*\
  !*** ./src/app/pages/characters-page/characters-page.component.ts ***!
  \********************************************************************/
/*! exports provided: CharactersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageComponent", function() { return CharactersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_characters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/characters.service */ "gMLy");
/* harmony import */ var _shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/gallery/gallery.component */ "JQ9g");




class CharactersPageComponent {
    constructor(charactersService) {
        this.charactersService = charactersService;
        this.actualPage = 1;
    }
    ngOnInit() {
        /*  this.getPage();
          this.getData(this.actualPage);
        }
    
        getPage() {
          this.actualPage = Number(this.activatedRoute.snapshot.paramMap.get('page'));
        }
    
        getData(actualPage) {
          this.location.replaceState(actualPage);
          */
        this.charactersService.getCharacters().subscribe((res) => {
            this.characters = res.results;
        });
    }
}
CharactersPageComponent.ɵfac = function CharactersPageComponent_Factory(t) { return new (t || CharactersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_characters_service__WEBPACK_IMPORTED_MODULE_1__["CharactersService"])); };
CharactersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharactersPageComponent, selectors: [["app-characters-page"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function CharactersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.characters);
    } }, directives: [_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMtcGFnZS9jaGFyYWN0ZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharactersPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-characters-page',
                templateUrl: './characters-page.component.html',
                styleUrls: ['./characters-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_characters_service__WEBPACK_IMPORTED_MODULE_1__["CharactersService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_characters_page_characters_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/characters-page/characters-page.component */ "v2TG");
/* harmony import */ var _pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/locations-page/locations-page.component */ "EY45");
/* harmony import */ var _pages_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/favorites-page/favorites-page.component */ "KDTj");
/* harmony import */ var _pages_characters_page_pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/characters-page/pages/detail-page/detail-page.component */ "dzCE");









const routes = [{
        path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], pathMatch: 'full'
    }, {
        path: 'characters', component: _pages_characters_page_characters_page_component__WEBPACK_IMPORTED_MODULE_3__["CharactersPageComponent"]
    }, {
        path: 'locations', component: _pages_locations_page_locations_page_component__WEBPACK_IMPORTED_MODULE_4__["LocationsPageComponent"]
    }, {
        path: 'favorite', component: _pages_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageComponent"]
    }, {
        path: 'characters/:characterId', component: _pages_characters_page_pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailPageComponent"]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map