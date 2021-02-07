(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Turbo\work\CV\frontend\src\main.ts */"zUnb");


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
    baseURL: 'https://flashly.azurewebsites.net/api/'
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

/***/ "G/ev":
/*!***************************************************************!*\
  !*** ./src/app/header/desktop-menu/desktop-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: DesktopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopMenuComponent", function() { return DesktopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "Haw6");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_shared_srcollElements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/srcollElements.service */ "cEWg");







gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
class DesktopMenuComponent {
    constructor(translateService, decimalPipe, scrollElementsService) {
        this.translateService = translateService;
        this.decimalPipe = decimalPipe;
        this.scrollElementsService = scrollElementsService;
        this.reachedTheEnd = false;
    }
    ngOnInit() {
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(".menu", {
            scrollTrigger: {
                onUpdate: (options) => {
                    if (options instanceof gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]) {
                        const value = Number(this.decimalPipe.transform(options.progress, '1.2-2'));
                        this.reachedTheEnd = value > .99;
                        this.scrollElementsService.setValueForEnd(this.reachedTheEnd);
                    }
                }
            }
        });
    }
    changeLanguage(lang) {
        this.translateService.use(lang);
    }
    moveToSection(section) {
        const yOffset = -100;
        const element = document.querySelector(section);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
DesktopMenuComponent.ɵfac = function DesktopMenuComponent_Factory(t) { return new (t || DesktopMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_srcollElements_service__WEBPACK_IMPORTED_MODULE_5__["scrollElements"])); };
DesktopMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesktopMenuComponent, selectors: [["app-desktop-menu"]], decls: 30, vars: 15, consts: [[1, "container", "wrapper"], ["href", "https://devduo.pro/", 1, "logo"], [1, "menu"], [1, "menu__item", 3, "click"], [2, "margin-left", "auto"], [1, "switch-button", 3, "click"]], template: function DesktopMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DevDuo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_li_click_4_listener() { return ctx.moveToSection("#hero"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_li_click_8_listener() { return ctx.moveToSection("#skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_li_click_12_listener() { return ctx.moveToSection("#projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_li_click_16_listener() { return ctx.moveToSection("#offer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_li_click_20_listener() { return ctx.moveToSection("#contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_button_click_25_listener() { return ctx.changeLanguage("pl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "pl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_button_click_28_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "we"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "offer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 13, "contact"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@media (max-width: 1230px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 80px;\n  }\n}\n@media (max-width: 736px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n  max-height: 100px;\n  z-index: 999;\n  background: none;\n  overflow: hidden;\n  max-height: 100px;\n  height: 100%;\n  background: #FFF;\n  padding: 45px 0px 25px;\n  transition: all ease 0.5s;\n  padding: 0 40px;\n}\n.wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #c8d6df;\n  display: inline-block;\n  font-family: \"Stolzl\";\n  transform: translateX(-20px);\n  transition: all 0.65s cubic-bezier(0.62, 0.02, 0.34, 1);\n  text-decoration: none;\n}\n.wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  color: #2d6ae3;\n}\n.wrapper[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  list-style: none;\n  margin: 0;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  cursor: pointer;\n  font-family: \"Stolzl\";\n  position: relative;\n  text-decoration: none;\n}\n.wrapper[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background-color: #2d6ae3;\n  pointer-events: none;\n  transform: scale3d(0, 1, 1);\n  transform-origin: 0% 50%;\n  transition: transform 0.5s;\n  transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);\n}\n.wrapper[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]:hover::after {\n  transform: scale3d(1, 1, 1);\n}\n.wrapper[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  letter-spacing: -0.6px;\n  font-size: 14px;\n  color: #092545;\n}\n.switch-button[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n  background-color: #fff;\n  font-family: \"Stolzl\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXNrdG9wLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLGVBQUE7RUFETjtBQUNGO0FBR0E7RUFDSTtJQUNJLHdCQUFBO0VBRE47QUFDRjtBQUdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBREo7QUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdURBQUE7RUFDQSxxQkFBQTtBQUFSO0FBQ1E7RUFDSSxjQ3BDQztBRHFDYjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBRFI7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtBQURaO0FBRVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFFQSx5QkMzREg7RUQ0REcsb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3REFBQTtBQURoQjtBQUdZO0VBQ0ksMkJBQUE7QUFEaEI7QUFHWTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURoQjtBQVFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBTEoiLCJmaWxlIjoiZGVza3RvcC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcyc7XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMjMwcHgpIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAgIC53cmFwcGVyIHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgcGFkZGluZzogNDVweCAwcHggMjVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjYzhkNmRmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LWZhbWlseTogJ1N0b2x6bCc7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjY1cyBjdWJpYy1iZXppZXIoLjYyLCAuMDIsIC4zNCwgMSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3RvbHpsJztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LDAsMC4yLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLDEsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwOTI1NDU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3dpdGNoLWJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU3RvbHpsJztcclxufSIsIiRvcmFuZ2UtY29sb3I6ICNmZjYwMjE7XHJcbiRwaW5rLWNvbG9yOiAjZjE1Yjc0O1xyXG4kYmx1ZS1jb2xvcjogIzJkNmFlMztcclxuJHNtb290aC1ibHVlLWNvbG9yOiAjNDk3M2EyO1xyXG4kZGFyay1ibHVlLWNvbG9yOiAjMDkyNTQ1O1xyXG4kZ3JheS1jb2xvcjogI2M4ZDZkZjsgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesktopMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-desktop-menu',
                templateUrl: './desktop-menu.component.html',
                styleUrls: ['./desktop-menu.component.scss'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }, { type: src_shared_srcollElements_service__WEBPACK_IMPORTED_MODULE_5__["scrollElements"] }]; }, null); })();


/***/ }),

/***/ "H3wb":
/*!************************************************************!*\
  !*** ./src/app/skills-section/skills-section.component.ts ***!
  \************************************************************/
/*! exports provided: SkillsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsSectionComponent", function() { return SkillsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_scroll_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-scroll-animations */ "zgLI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class SkillsSectionComponent {
    moveToSection(section) {
        const yOffset = -100;
        const element = document.querySelector(section);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
SkillsSectionComponent.ɵfac = function SkillsSectionComponent_Factory(t) { return new (t || SkillsSectionComponent)(); };
SkillsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsSectionComponent, selectors: [["app-skills-section"]], decls: 67, vars: 21, consts: [["id", "skills", 1, "container-fluid1", "mt-5"], ["animateOnScroll", "", "startAnimation", "faded-out", "endAnimation", "released", 1, "skills-header", "col-lg-12", 3, "scrollOffset", "timeOffset"], [1, "skills-skills"], ["animateOnScroll", "", "startAnimation", "faded-out-right", "endAnimation", "released-to-position", 1, "card-container", 3, "scrollOffset", "timeOffset"], [1, "card-container__pro"], ["src", "../../assets/icons/be_avatar.svg", "alt", "user", 1, "card-container__image"], [1, "card-container__header"], [1, "card-container__description", 3, "innerHtml"], [1, "card-container__buttons-group"], [1, "primary-button", 3, "click"], [1, "skills"], [1, "skills__header"], [1, "skills__list"], [1, "skills__list__item"], ["src", "../../assets/icons/fe_avatar.svg", "alt", "user", 1, "card-container__image"]], template: function SkillsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jakub Kawa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsSectionComponent_Template_button_click_14_listener() { return ctx.moveToSection("#contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Back End Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MSSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "WEB API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Serverless");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Adrian Turbi\u0144ski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsSectionComponent_Template_button_click_44_listener() { return ctx.moveToSection("#contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "UI / UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Front End Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollOffset", 600)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "knowledge_Skills"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollOffset", 650)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, "cloud_logical"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 15, "skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollOffset", 650)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 17, "designer_development"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 19, "skills"));
    } }, directives: [angular_scroll_animations__WEBPACK_IMPORTED_MODULE_1__["ScrollAnimateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container-fluid1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 1200px;\n  margin: 0 auto;\n  height: auto;\n}\n\n.container-fluid1[_ngcontent-%COMP%]   .skills-header[_ngcontent-%COMP%] {\n  font-family: \"Stolzl\";\n  margin-bottom: 40px;\n  margin-top: 100px;\n  padding: 0;\n  transition: 2s ease;\n}\n\n.container-fluid1[_ngcontent-%COMP%]   .skills-skills[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 1rem;\n}\n\n@media (min-width: 900px) {\n  .container-fluid1[_ngcontent-%COMP%]   .skills-skills[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.card-container[_ngcontent-%COMP%] {\n  font-family: \"Stolzl\";\n  background-color: #092545;\n  border-radius: 25px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.35);\n  color: #b3b8cd;\n  padding: 30px 0 0;\n  justify-self: center;\n  position: relative;\n  min-width: 300px;\n  max-width: 400px;\n  text-align: center;\n  margin: 0 10px 0 10px;\n  overflow: hidden;\n  transition: 0.7s ease;\n}\n\n.card-container__pro[_ngcontent-%COMP%] {\n  color: #231e39;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  border-radius: 3px;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 3px 7px;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n\n.card-container__image[_ngcontent-%COMP%] {\n  border: 1px solid #2d6ae3;\n  border-radius: 50%;\n  padding: 7px;\n  height: 150px;\n  width: 150px;\n}\n\n.card-container__header[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.card-container__description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.card-container[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #2d6ae3;\n  border: 1px solid #2d6ae3;\n  border-radius: 3px;\n  color: #fff;\n  font-family: \"Stolzl\";\n  font-weight: 500;\n  padding: 10px 25px;\n}\n\n.card-container[_ngcontent-%COMP%]   .primary-button--ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #2d6ae3;\n}\n\n.skills[_ngcontent-%COMP%] {\n  background-color: #1f1a36;\n  height: 40%;\n  text-align: left;\n  padding: 15px;\n  margin-top: 30px;\n}\n\n.skills__list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.skills__list__item[_ngcontent-%COMP%] {\n  border: 2px solid #092545;\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 12px;\n  margin: 0 7px 7px 0;\n  padding: 7px;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin: 5px 0 10px 0;\n  text-transform: uppercase;\n}\n\n.faded-out[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-30px);\n}\n\n.released[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.faded-out-right[_ngcontent-%COMP%] {\n  transform: translateX(50px);\n  opacity: 0;\n}\n\n.faded-out-left[_ngcontent-%COMP%] {\n  transform: translateX(-50px);\n  opacity: 0;\n}\n\n.released-to-position[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlFO0VBQ0U7SUFBaUIscUNBQUE7RUFEbkI7QUFDRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EseUJDakNnQjtFRGtDaEIsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSko7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EseUJDOUVTO0VEK0VULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBTUk7RUFDRSw2QkFBQTtFQUNBLGNDdkZPO0FEbUZiOztBQVNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFOSjs7QUFPSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMTjs7QUFVQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7QUFQRjs7QUFVQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtBQVBGOztBQVVBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FBUEY7O0FBVUE7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVdBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBUkYiLCJmaWxlIjoic2tpbGxzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3ZhcmlhYmxlc1wiO1xyXG5cclxuKiwgKjo6YWZ0ZXIsICo6OmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkMSB7XHJcbiAgXHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAuc2tpbGxzLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJTdG9semxcIjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnNraWxscy1za2lsbHMge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuc2tpbGxzLXNraWxscyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogXCJTdG9semxcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICBjb2xvcjogI2IzYjhjZDtcclxuICBwYWRkaW5nOiAzMHB4IDAgMDtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4OztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogLjdzIGVhc2U7XHJcbiAgJl9fcHJvIHtcclxuICAgIGNvbG9yOiAjMjMxZTM5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJsdWUtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICYtLWdob3N0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5za2lsbHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFhMzY7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICZfX2xpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFyay1ibHVlLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDAgN3B4IDdweCAwO1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5oNiB7XHJcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZhZGVkLW91dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG59XHJcblxyXG4ucmVsZWFzZWQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uZmFkZWQtb3V0LXJpZ2h0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZhZGVkLW91dC1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcblxyXG4ucmVsZWFzZWQtdG8tcG9zaXRpb24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59IiwiJG9yYW5nZS1jb2xvcjogI2ZmNjAyMTtcclxuJHBpbmstY29sb3I6ICNmMTViNzQ7XHJcbiRibHVlLWNvbG9yOiAjMmQ2YWUzO1xyXG4kc21vb3RoLWJsdWUtY29sb3I6ICM0OTczYTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMwOTI1NDU7XHJcbiRncmF5LWNvbG9yOiAjYzhkNmRmOyAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-section',
                templateUrl: './skills-section.component.html',
                styleUrls: ['./skills-section.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Qpqk":
/*!**************************************************!*\
  !*** ./src/app/hero-part/hero-part.component.ts ***!
  \**************************************************/
/*! exports provided: HeroPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroPartComponent", function() { return HeroPartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");




class HeroPartComponent {
    constructor(translate) {
        this.translate = translate;
        this.translationKeys = ['development', 'managment', 'cloud_solutions', 'user_interfaces'];
        this.list = [];
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.list = this.translationKeys.map((text) => this.translate.instant(text));
            console.log(this.list);
        });
    }
    moveToSection(section) {
        const yOffset = -100;
        const element = document.querySelector(section);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
HeroPartComponent.ɵfac = function HeroPartComponent_Factory(t) { return new (t || HeroPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
HeroPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroPartComponent, selectors: [["app-hero-part"]], decls: 17, vars: 14, consts: [[1, "container"], ["col-lg-8", "", "col-md-6", "", 1, "hero-content"], [1, "hero-text"], [3, "StringList", "speed"], [1, "hero-header", 3, "innerHtml"], [1, "hero-description"], [1, "hero-button", 3, "click"], ["col-lg-4", "", "col-md-6", "", 1, "hero-image"], ["src", "../assets/icons/hero-image.png", "alt", "", 1, "img-fluid"]], template: function HeroPartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngtypewriter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroPartComponent_Template_button_click_12_listener() { return ctx.moveToSection("#skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("StringList", ctx.list)("speed", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "developer"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "nice_to_meet_you"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "hi_we_are_Adrian_and_Jakub"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "scroll_down"));
    } }, directives: [angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["TypewriterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  animation: example 0.7s;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 1rem;\n  overflow: hidden;\n}\n\n@media (min-width: 900px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    height: 100vh;\n  }\n}\n\n@media (max-width: 900px) {\n  .hero-content[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .hero-header[_ngcontent-%COMP%] {\n    font-size: 55px !important;\n    margin-bottom: 7px;\n    line-height: 40px !important;\n  }\n\n  .hero-text[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n}\n\n@media (max-width: 496px) {\n  .hero-image[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 600px) {\n  .hero-image[_ngcontent-%COMP%] {\n    left: 30px;\n  }\n}\n\n@media (max-width: 1200px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 0 80px;\n  }\n}\n\n.hero-image[_ngcontent-%COMP%], .hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  padding: 0;\n  margin-top: 100px;\n  min-height: 300px;\n  max-height: 500px;\n  height: auto;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  top: 30px;\n  min-width: 150px;\n  width: 90%;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  font-family: \"Stolzl\";\n  margin-left: 15%;\n  min-width: 300px;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%] {\n  letter-spacing: -7px;\n  line-height: 110px;\n  margin-bottom: 30px;\n  text-indent: -3px;\n  margin-left: -6px;\n  padding: 20px 0px 10px 0px;\n  letter-spacing: -3px;\n  line-height: 72px;\n  font-size: 100px;\n  font-family: \"Stolzl Bold\";\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  word-wrap: wrap;\n}\n\n@media (max-width: 900px) {\n  .hero-content[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-family: \"Stolzl light\";\n  margin-bottom: 30px;\n  line-height: 30px;\n  height: 80px;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 60px;\n  padding: 7px 12px 7px 20px;\n  font-family: \"Stolzl book\";\n  text-align: left;\n  position: relative;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  overflow: hidden;\n  color: white;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-color: #144096;\n  z-index: -1;\n  transform: translate3D(0, -100%, 0);\n  transition: all 0.3s;\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]:hover::before {\n  transform: translate3D(0, 0%, 0);\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: #2d6ae3;\n  z-index: -1;\n  transform: translate3D(0, 0%, 0);\n  \n  transition: all 0.3s;\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]:hover::after {\n  transform: translate3D(0, 100%, 0);\n}\n\n@keyframes example {\n  from {\n    opacity: 0;\n    transform: translateY(-130px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlcm8tcGFydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLGFBQUE7RUFERjtBQUNGOztBQUdBO0VBQ0U7SUFDRSx1QkFBQTtFQURGOztFQUlBO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VBREY7O0VBSUE7SUFDRSwwQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLHVCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsVUFBQTtFQUhGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGVBQUE7RUFIRjtBQUNGOztBQU1BOztFQUVFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVJGOztBQVVBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBU0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBS0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUU7RUFDRTtJQUNFLGVBQUE7RUFSSjtBQUNGOztBQVdFO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVRKOztBQVdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFUSjs7QUFVSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFSTjs7QUFVSTtFQUNFLGdDQUFBO0FBUk47O0FBVUk7RUFDRSw2QkFBQTtBQVJOOztBQVVJO0VBQ0UsV0FBQTtFQUNBLHlCQ2hLTztFRGtLUCxXQUFBO0VBQ0EsZ0NBQUE7RUFJRyw4REFBQTtFQUNILG9CQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFaTjs7QUFjSTtFQUNFLGtDQUFBO0FBWk47O0FBaUJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7RUFkRjtFQWdCQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQWRGO0FBQ0YiLCJmaWxlIjoiaGVyby1wYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMDtcclxuICBhbmltYXRpb246IGV4YW1wbGUgMC43cztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5oZXJvLWNvbnRlbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGVyby1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0OTZweCkge1xyXG4gIC5oZXJvLWltYWdlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhlcm8taW1hZ2Uge1xyXG4gICAgbGVmdDogMzBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMCA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8taW1hZ2UsXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaGVyby10ZXh0IHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICAvLyBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICAvLyBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICAuaGVyby1oZWFkZXIge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC03cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1pbmRlbnQ6IC0zcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJTdG9semwgQm9sZFwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB3b3JkLXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5oZXJvLWhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bCBsaWdodFwiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAuaGVyby1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogN3B4IDEycHggN3B4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJTdG9semwgYm9va1wiO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJsdWUtY29sb3IsIDIwJSk7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41MiwgMS42NCwgMC4zNywgMC42Nik7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG5cclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwJSxcclxuICAgICAgICAwXHJcbiAgICAgICk7IC8qIG1vdmUgZWxlbWVudHMgYWJvdmUgYnV0dG9uIHNvIHRoZXkgZG9uJ3QgYXBwZWFyIGluaXRpYWxseSAqL1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUyLCAxLjY0LCAwLjM3LCAwLjY2KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTMwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIiRvcmFuZ2UtY29sb3I6ICNmZjYwMjE7XHJcbiRwaW5rLWNvbG9yOiAjZjE1Yjc0O1xyXG4kYmx1ZS1jb2xvcjogIzJkNmFlMztcclxuJHNtb290aC1ibHVlLWNvbG9yOiAjNDk3M2EyO1xyXG4kZGFyay1ibHVlLWNvbG9yOiAjMDkyNTQ1O1xyXG4kZ3JheS1jb2xvcjogI2M4ZDZkZjsgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroPartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-part',
                templateUrl: './hero-part.component.html',
                styleUrls: ['./hero-part.component.scss'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "RHET":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-in-viewport */ "Wuvc");
/* harmony import */ var angular_scroll_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-scroll-animations */ "zgLI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class OfferComponent {
    constructor(_document, renderer) {
        this._document = _document;
        this.renderer = renderer;
        this.onload = 0;
    }
    action(event) {
        console.log(event);
    }
    onIntersection({ target, visible, }) {
        var _a, _b;
        const bodyClasslist = this._document.body.classList;
        const typeWriterClasslist = (_a = this._document.querySelector('.hero-text')) === null || _a === void 0 ? void 0 : _a.classList;
        const descriptionClassList = (_b = this._document.querySelector('.hero-description')) === null || _b === void 0 ? void 0 : _b.classList;
        this.onload++;
        if (this.onload === 1)
            return 0;
        if (bodyClasslist.contains('bodybg-color')) {
            this.renderer.removeClass(this._document.body, 'bodybg-color');
            typeWriterClasslist === null || typeWriterClasslist === void 0 ? void 0 : typeWriterClasslist.remove('white-text');
            descriptionClassList === null || descriptionClassList === void 0 ? void 0 : descriptionClassList.remove('white-text');
        }
        else {
            this.renderer.addClass(this._document.body, 'bodybg-color');
            typeWriterClasslist === null || typeWriterClasslist === void 0 ? void 0 : typeWriterClasslist.add('white-text');
            descriptionClassList === null || descriptionClassList === void 0 ? void 0 : descriptionClassList.add('white-text');
        }
    }
}
OfferComponent.ɵfac = function OfferComponent_Factory(t) { return new (t || OfferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
OfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OfferComponent, selectors: [["app-offer"]], decls: 149, vars: 43, consts: [["id", "offer", "inViewport", "", 1, "container-fluid1", 3, "inViewportAction"], [1, "container-fluid1__header"], [1, "container-fluid1__description"], [1, "container"], ["animateOnScroll", "", "startAnimation", "faded-out-left", "endAnimation", "released-to-right", 1, "wrapper", 3, "scrollOffset", "timeOffset"], [1, "tile"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M472.208,201.712c9.271-9.037,12.544-22.3,8.544-34.613c-4.001-12.313-14.445-21.118-27.257-22.979l-112.03-16.279 c-2.199-0.319-4.1-1.7-5.084-3.694L286.28,22.632c-5.729-11.61-17.331-18.822-30.278-18.822c-12.947,0-24.549,7.212-30.278,18.822 l-50.101,101.516c-0.985,1.993-2.885,3.374-5.085,3.694L58.51,144.12c-12.812,1.861-23.255,10.666-27.257,22.979 c-4.002,12.313-0.728,25.576,8.544,34.613l81.065,79.019c1.591,1.552,2.318,3.787,1.942,5.978l-19.137,111.576 c-2.188,12.761,2.958,25.414,13.432,33.024c10.474,7.612,24.102,8.595,35.56,2.572l100.201-52.679 c1.968-1.035,4.317-1.035,6.286,0l100.202,52.679c4.984,2.62,10.377,3.915,15.744,3.914c6.97,0,13.896-2.184,19.813-6.487 c10.474-7.611,15.621-20.265,13.432-33.024l-19.137-111.576c-0.375-2.191,0.351-4.426,1.942-5.978L472.208,201.712z M362.579,291.276l19.137,111.578c0.64,3.734-1.665,5.863-2.686,6.604c-1.022,0.74-3.76,2.277-7.112,0.513l-100.202-52.679 c-4.919-2.585-10.315-3.879-15.712-3.879c-5.397,0-10.794,1.294-15.712,3.878l-100.201,52.678 c-3.354,1.763-6.091,0.228-7.112-0.513c-1.021-0.741-3.327-2.87-2.686-6.604l19.137-111.576 c1.879-10.955-1.75-22.127-9.711-29.886l-81.065-79.019c-2.713-2.646-2.099-5.723-1.708-6.923 c0.389-1.201,1.702-4.052,5.451-4.596l112.027-16.279c10.999-1.598,20.504-8.502,25.424-18.471l50.101-101.516 c1.677-3.397,4.793-3.764,6.056-3.764c1.261,0,4.377,0.366,6.055,3.764v0.001l50.101,101.516 c4.919,9.969,14.423,16.873,25.422,18.471l112.029,16.279c3.749,0.544,5.061,3.395,5.451,4.596 c0.39,1.201,1.005,4.279-1.709,6.923l-81.065,79.019C364.329,269.149,360.7,280.321,362.579,291.276z"], ["d", "M413.783,22.625c-6.036-4.384-14.481-3.046-18.865,2.988l-14.337,19.732c-4.384,6.034-3.047,14.481,2.988,18.865 c2.399,1.741,5.176,2.58,7.928,2.58c4.177,0,8.295-1.931,10.937-5.567l14.337-19.732 C421.155,35.456,419.818,27.009,413.783,22.625z"], ["d", "M131.36,45.265l-14.337-19.732c-4.383-6.032-12.829-7.37-18.865-2.988c-6.034,4.384-7.372,12.831-2.988,18.865 l14.337,19.732c2.643,3.639,6.761,5.569,10.939,5.569c2.753,0,5.531-0.839,7.927-2.581C134.407,59.747,135.745,51.3,131.36,45.265 z"], ["d", "M49.552,306.829c-2.305-7.093-9.924-10.976-17.019-8.671l-23.197,7.538c-7.095,2.305-10.976,9.926-8.671,17.019 c1.854,5.709,7.149,9.337,12.842,9.337c1.383,0,2.79-0.215,4.177-0.666l23.197-7.538 C47.975,321.543,51.857,313.924,49.552,306.829z"], ["d", "M256.005,456.786c-7.459,0-13.506,6.047-13.506,13.506v24.392c0,7.459,6.047,13.506,13.506,13.506 c7.459,0,13.506-6.047,13.506-13.506v-24.392C269.511,462.832,263.465,456.786,256.005,456.786z"], ["d", "M502.664,305.715l-23.197-7.538c-7.092-2.303-14.714,1.577-17.019,8.672c-2.305,7.095,1.576,14.714,8.671,17.019 l23.197,7.538c1.387,0.45,2.793,0.664,4.176,0.664c5.694,0,10.989-3.629,12.843-9.337 C513.64,315.639,509.758,308.02,502.664,305.715z"], [1, "tile__info"], [1, "tile__info__header"], [1, "tile__info__description"], ["animateOnScroll", "", "startAnimation", "faded-out-right", "endAnimation", "released-to-left", 1, "wrapper", 3, "scrollOffset", "timeOffset"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512.001 512.001", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512.001 512.001"], ["d", "M190.213,202.49c-2.937-4.678-9.107-6.09-13.786-3.153l-43.226,27.132c-4.678,2.936-6.09,9.108-3.153,13.786 c1.899,3.026,5.152,4.685,8.479,4.685c1.816,0,3.654-0.495,5.307-1.532l43.226-27.132 C191.738,213.34,193.15,207.168,190.213,202.49z"], ["d", "M122.662,244.91c-2.932-4.679-9.099-6.098-13.783-3.168l-0.201,0.126c-4.681,2.932-6.099,9.102-3.168,13.783 c1.898,3.031,5.154,4.694,8.485,4.694c1.813,0,3.648-0.493,5.298-1.526l0.201-0.126 C124.175,255.761,125.593,249.591,122.662,244.91z"], ["d", "M510.296,4.42c-2.809-4.177-8.286-5.615-12.784-3.355L201.488,149.712c-3.343,1.678-5.469,5.081-5.512,8.821 c-0.044,3.74,2.003,7.191,5.306,8.946l58.313,30.993L126.561,281.98c-3.024,1.898-4.806,5.263-4.677,8.83 c0.128,3.567,2.148,6.795,5.3,8.47l64.794,34.438L3.515,494.39c-3.91,3.333-4.658,9.086-1.731,13.308 c1.93,2.782,5.041,4.303,8.225,4.303c1.648,0,3.314-0.407,4.846-1.257L318.83,342.065c3.205-1.779,5.18-5.169,5.147-8.835 c-0.033-3.665-2.069-7.02-5.307-8.74l-59.226-31.48l138.164-88.938c2.995-1.928,4.738-5.305,4.576-8.864 c-0.162-3.559-2.205-6.763-5.363-8.411l-51.146-26.685l162.91-142.586C512.373,14.211,513.107,8.597,510.296,4.42z M321.503,154.692c-2.484,2.174-3.735,5.435-3.344,8.712c0.393,3.278,2.377,6.151,5.304,7.678l48.851,25.487l-138.037,88.856 c-2.983,1.921-4.727,5.28-4.578,8.826c0.147,3.546,2.164,6.748,5.298,8.413l58.031,30.845L92.579,444.741l123.563-105.342 c2.52-2.148,3.813-5.404,3.454-8.695c-0.359-3.292-2.324-6.191-5.248-7.745l-62.517-33.228l133.035-83.51 c3.023-1.898,4.806-5.263,4.677-8.83c-0.128-3.567-2.148-6.795-5.3-8.47L227.758,158.9L436.39,54.137L321.503,154.692z"], ["d", "M379.28,347.402c-2.685-4.828-8.777-6.562-13.6-3.878l-0.208,0.116c-4.826,2.685-6.563,8.774-3.877,13.601 c1.828,3.287,5.235,5.14,8.747,5.14c1.646,0,3.314-0.407,4.853-1.263l0.208-0.116C380.229,358.317,381.966,352.228,379.28,347.402 z"], ["d", "M353.955,361.462c-2.681-4.829-8.769-6.572-13.597-3.891l-44.624,24.764c-4.829,2.68-6.571,8.767-3.892,13.596 c1.827,3.292,5.237,5.149,8.753,5.149c1.642,0,3.307-0.405,4.844-1.258l44.624-24.764 C354.892,372.378,356.634,366.291,353.955,361.462z"], ["d", "M405.333,213.874V106.667c0-23.531-19.135-42.667-42.667-42.667h-320C19.135,64,0,83.135,0,106.667V320 c0,23.531,19.135,42.667,42.667,42.667h239.215C295.858,411.84,341.073,448,394.667,448c20.625,0,40.906-5.427,58.677-15.708 c5.094-2.948,6.844-9.469,3.885-14.573c-2.948-5.104-9.479-6.865-14.573-3.885c-14.521,8.396-31.115,12.833-47.99,12.833 c-52.938,0-96-43.063-96-96s43.063-96,96-96s96,43.063,96,96v10.667c0,11.76-9.573,21.333-21.333,21.333 c-11.76,0-21.333-9.573-21.333-21.333v-42.667c0-5.896-4.771-10.667-10.667-10.667c-2.869,0-5.447,1.161-7.362,3 c-9.428-8.401-21.714-13.667-35.305-13.667c-29.406,0-53.333,23.927-53.333,53.333S365.26,384,394.667,384 c15.896,0,30.03-7.131,39.81-18.202c7.727,10.977,20.44,18.202,34.857,18.202C492.865,384,512,364.865,512,341.333v-10.667 C512,269.569,465.044,219.288,405.333,213.874z M42.667,85.333h320c0.444,0,0.816,0.227,1.254,0.254L211.438,210.75 c-5.427,3.417-13.292,2.708-16.823,0.542L41.426,85.585C41.859,85.559,42.227,85.333,42.667,85.333z M384,213.874 c-59.711,5.414-106.667,55.695-106.667,116.793c0,3.6,0.221,7.148,0.54,10.667H42.667c-11.76,0-21.333-9.573-21.333-21.333 V106.667c0-3.021,0.667-5.874,1.805-8.48l158.883,130.293c6.208,4.052,13.344,6.188,20.646,6.188 c7.021,0,13.885-1.979,19.927-5.729c0.604-0.323,1.177-0.708,1.719-1.156l157.88-129.598c1.139,2.608,1.807,5.461,1.807,8.483 V213.874z M394.667,362.667c-17.646,0-32-14.354-32-32c0-17.646,14.354-32,32-32s32,14.354,32,32 C426.667,348.313,412.313,362.667,394.667,362.667z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 60 60", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 60 60"], ["d", "M59.989,21c-0.099-1.711-2.134-3.048-6.204-4.068c0.137-0.3,0.214-0.612,0.215-0.936V9h-0.017C53.625,3.172,29.743,3,27,3 S0.375,3.172,0.017,9H0v0.13v0v0l0,6.869c0.005,1.9,2.457,3.387,6.105,4.494c-0.05,0.166-0.08,0.335-0.09,0.507H6v0.13v0v0l0,6.857 C2.07,28.999,0.107,30.317,0.01,32H0v0.13v0v0l0,6.869c0.003,1.323,1.196,2.445,3.148,3.38c-0.074,0.203-0.12,0.41-0.133,0.622H3 v0.13v0v0l0,6.869c0.008,3.326,7.497,5.391,15.818,6.355c0.061,0.012,0.117,0.037,0.182,0.037c0.019,0,0.035-0.01,0.054-0.011 c1.604,0.181,3.234,0.322,4.847,0.423c0.034,0.004,0.064,0.02,0.099,0.02c0.019,0,0.034-0.01,0.052-0.011 C26.1,56.937,28.115,57,30,57c1.885,0,3.9-0.063,5.948-0.188c0.018,0.001,0.034,0.011,0.052,0.011c0.035,0,0.065-0.017,0.099-0.02 c1.613-0.101,3.243-0.241,4.847-0.423C40.965,56.38,40.981,56.39,41,56.39c0.065,0,0.121-0.025,0.182-0.037 c8.321-0.964,15.809-3.03,15.818-6.357V43h-0.016c-0.07-1.226-1.115-2.249-3.179-3.104c0.126-0.289,0.195-0.589,0.195-0.9V32.46 c3.59-1.104,5.995-2.581,6-4.464V21H59.989z M51.892,39.321l-0.341,0.299C51.026,40.083,50.151,40.55,49,41v-4.768 c1.189-0.414,2.201-0.873,3-1.376v4.138C52,39.097,51.962,39.207,51.892,39.321z M29.526,43.968 c-0.146,0.004-0.293,0.006-0.44,0.009c-0.357,0.007-0.723,0.009-1.085,0.012v-4.995c0.275-0.003,0.55-0.007,0.825-0.012 c0.053-0.001,0.106-0.002,0.159-0.003c1.007-0.019,2.014-0.05,3.016-0.096v4.993c-0.214,0.011-0.429,0.021-0.646,0.03 C30.753,43.933,30.145,43.953,29.526,43.968z M25.159,43.982c-0.458-0.008-0.914-0.019-1.367-0.033 c-0.056-0.002-0.112-0.004-0.168-0.006c-0.545-0.018-1.086-0.041-1.623-0.067v-4.992c1.002,0.047,2.009,0.078,3.016,0.096 c0.053,0.001,0.106,0.002,0.158,0.003c0.275,0.005,0.55,0.009,0.825,0.012v4.998c-0.194-0.002-0.388-0.002-0.581-0.005 C25.331,43.986,25.246,43.983,25.159,43.982z M7.097,41.702C7.064,41.692,7.033,41.683,7,41.674v-4.831 c0.934,0.252,1.938,0.482,3,0.691v4.881c-0.918-0.195-1.765-0.4-2.536-0.61C7.342,41.77,7.216,41.737,7.097,41.702z M28.175,49.983 c0.275,0.005,0.55,0.009,0.825,0.012v4.999c-1.382-0.013-2.716-0.053-4-0.116v-4.993c1.002,0.047,2.009,0.078,3.016,0.096 C28.069,49.981,28.122,49.982,28.175,49.983z M31.984,49.98c1.007-0.019,2.014-0.05,3.016-0.096v4.993 c-1.284,0.063-2.618,0.103-4,0.116v-4.999c0.275-0.003,0.55-0.007,0.825-0.012C31.878,49.982,31.931,49.981,31.984,49.98z M40,49.528v4.966c-0.961,0.101-1.961,0.19-3,0.263v-4.987C38.014,49.704,39.016,49.623,40,49.528z M42,49.312 c1.031-0.124,2.032-0.265,3-0.422v4.91c-0.942,0.166-1.943,0.319-3,0.458V49.312z M47,48.533c1.062-0.209,2.066-0.439,3-0.691v4.831 c-0.891,0.257-1.894,0.506-3,0.741V48.533z M13,48.533v4.881c-1.106-0.235-2.109-0.484-3-0.741v-4.831 C10.934,48.094,11.938,48.325,13,48.533z M15,48.891c0.968,0.157,1.969,0.298,3,0.422v4.946c-1.057-0.139-2.058-0.292-3-0.458 V48.891z M20,49.528c0.984,0.095,1.986,0.176,3,0.243v4.987c-1.039-0.073-2.039-0.162-3-0.263V49.528z M17.519,43.548 c-0.102-0.01-0.203-0.021-0.304-0.031c-0.072-0.007-0.143-0.016-0.215-0.023v-4.965c0.984,0.095,1.986,0.176,3,0.243v4.983 C19.16,43.695,18.33,43.627,17.519,43.548z M15,38.312v4.946c-1.057-0.139-2.058-0.292-3-0.458v-4.91 C12.968,38.047,13.969,38.189,15,38.312z M34.666,43.708c-0.22,0.017-0.442,0.034-0.666,0.05v-4.987 c1.014-0.067,2.016-0.147,3-0.243v4.966c-0.618,0.065-1.25,0.126-1.899,0.179C34.956,43.686,34.811,43.697,34.666,43.708z M39,43.258v-4.946c1.031-0.124,2.032-0.265,3-0.422v4.91C41.058,42.966,40.057,43.12,39,43.258z M44,37.533 c1.062-0.209,2.066-0.439,3-0.691v4.831c-0.891,0.257-1.894,0.506-3,0.741V37.533z M30.325,32.965 c-0.752-0.019-1.487-0.048-2.209-0.083c-0.039-0.002-0.078-0.004-0.116-0.005v-4.993c1.002,0.047,2.009,0.078,3.016,0.096 c0.053,0.001,0.106,0.002,0.158,0.003c0.275,0.005,0.55,0.009,0.825,0.012v4.993c-0.487-0.005-0.978-0.007-1.453-0.018 C30.473,32.968,30.398,32.967,30.325,32.965z M7,18.674v-4.831c0.934,0.252,1.938,0.482,3,0.691v4.881 c-0.123-0.026-0.25-0.052-0.37-0.078c-0.532-0.117-1.051-0.239-1.547-0.368C7.705,18.872,7.346,18.773,7,18.674z M25.175,15.983 c0.275,0.005,0.55,0.009,0.825,0.012v4.993c-1.346-0.013-2.684-0.048-4-0.114v-4.989c1.002,0.047,2.009,0.078,3.016,0.096 C25.069,15.981,25.122,15.982,25.175,15.983z M28.984,15.98c1.007-0.019,2.014-0.05,3.016-0.096v4.989 c-0.17,0.008-0.333,0.02-0.504,0.028c-0.014,0.001-0.028,0.001-0.043,0.002c-0.671,0.03-1.355,0.052-2.048,0.068 c-0.108,0.003-0.216,0.004-0.324,0.007c-0.356,0.007-0.72,0.008-1.081,0.012v-4.995c0.275-0.003,0.55-0.007,0.825-0.012 C28.878,15.982,28.931,15.981,28.984,15.98z M51.771,16.482l-0.028-0.006l-0.364,0.283C50.851,17.17,50.04,17.586,49,17.988v-4.757 c1.189-0.414,2.201-0.873,3-1.376v4.138C52,16.145,51.92,16.309,51.771,16.482z M39,20.252v-4.94c1.031-0.124,2.032-0.265,3-0.422 v4.902C41.052,19.96,40.054,20.114,39,20.252z M44,19.407v-4.873c1.062-0.209,2.066-0.439,3-0.691v4.82 C46.104,18.924,45.095,19.173,44,19.407z M37,15.528v4.96c-0.966,0.102-1.966,0.191-3,0.265v-4.982 C35.014,15.704,36.016,15.623,37,15.528z M17,20.49v-4.962c0.984,0.095,1.986,0.176,3,0.243v4.978 C18.982,20.676,17.978,20.593,17,20.49z M15,15.312v4.941c-0.198-0.026-0.404-0.047-0.6-0.074c-0.128-0.018-0.25-0.037-0.376-0.055 c-0.578-0.083-1.143-0.172-1.697-0.265C12.216,19.84,12.109,19.82,12,19.801v-4.91C12.968,15.047,13.969,15.189,15,15.312z M25.752,32.739c-0.135-0.01-0.271-0.02-0.405-0.03c-0.64-0.05-1.265-0.105-1.875-0.166c-0.131-0.013-0.262-0.027-0.392-0.04 C23.053,32.5,23.027,32.496,23,32.494v-4.966c0.984,0.095,1.986,0.176,3,0.243v4.984C25.919,32.749,25.833,32.745,25.752,32.739z M19.145,31.992c-0.396-0.063-0.768-0.131-1.145-0.197v-4.904c0.968,0.157,1.969,0.298,3,0.422v4.946 c-0.612-0.081-1.211-0.165-1.786-0.255C19.191,31.999,19.168,31.995,19.145,31.992z M16,26.533v4.873 c-1.105-0.237-2.107-0.489-3-0.751v-4.813C13.934,26.094,14.938,26.325,16,26.533z M11,25.231v4.751 c-1.572-0.607-2.586-1.227-2.916-1.779l-0.067-0.112C8.011,28.06,8.001,28.027,8,27.996l0-4.141 C8.799,24.358,9.811,24.817,11,25.231z M34.984,27.98c1.007-0.019,2.014-0.05,3.016-0.096v4.988c-1.314,0.065-2.65,0.101-4,0.115 v-4.992c0.275-0.003,0.55-0.007,0.825-0.012C34.878,27.982,34.931,27.981,34.984,27.98z M47.907,31.817 c-0.439,0.076-0.882,0.151-1.337,0.22c-0.261,0.04-0.528,0.078-0.796,0.116c-0.253,0.036-0.516,0.067-0.773,0.1v-4.941 c1.031-0.124,2.032-0.265,3-0.422v4.91C47.969,31.806,47.938,31.812,47.907,31.817z M41.136,32.671 c-0.373,0.031-0.758,0.051-1.136,0.078v-4.978c1.014-0.067,2.016-0.147,3-0.243v4.961c-0.581,0.061-1.161,0.122-1.758,0.172 C41.206,32.664,41.172,32.668,41.136,32.671z M52.564,30.796c-0.498,0.139-1.025,0.269-1.563,0.396 c-0.249,0.058-0.503,0.116-0.763,0.172c-0.077,0.017-0.159,0.032-0.237,0.049v-4.879c1.062-0.209,2.066-0.439,3-0.691v4.831 C52.857,30.714,52.712,30.755,52.564,30.796z M57.989,21.065c-0.092,0.679-1.631,1.582-4.378,2.431l0,0 c-3.538,1.093-9.074,2.094-16.09,2.404c-0.359,0.015-0.717,0.03-1.083,0.042c-0.299,0.01-0.599,0.019-0.904,0.027 C34.706,25.987,33.866,26,33,26s-1.706-0.013-2.534-0.032c-0.304-0.007-0.604-0.017-0.904-0.027 c-0.367-0.011-0.725-0.027-1.083-0.042c-7.016-0.31-12.553-1.311-16.09-2.404l0,0c-2.725-0.842-4.261-1.738-4.375-2.414 c0.005-0.019,0.005-0.035,0.017-0.059c0.068,0.017,0.144,0.031,0.213,0.048c0.391,0.093,0.792,0.183,1.2,0.269 c1.987,0.428,4.189,0.779,6.535,1.047c0.008,0,0.014,0.004,0.021,0.004c0.002,0,0.004-0.001,0.005-0.001 c1.598,0.182,3.256,0.325,4.958,0.426c0.013,0,0.024,0.007,0.037,0.007c0.007,0,0.012-0.004,0.019-0.004 c1.225,0.072,2.466,0.125,3.722,0.153C25.51,22.99,26.265,23,27,23c0.525,0,1.063-0.006,1.606-0.016 c7.266-0.112,14-0.976,18.686-2.315c0.216-0.061,0.427-0.124,0.635-0.187c0.127-0.039,0.257-0.077,0.38-0.116 c0.362-0.116,0.709-0.235,1.044-0.359c0.058-0.022,0.113-0.044,0.171-0.066c0.283-0.107,0.555-0.218,0.815-0.331 c0.075-0.033,0.152-0.065,0.225-0.098c0.277-0.125,0.545-0.253,0.793-0.386c0.112-0.059,0.209-0.12,0.314-0.18 c0.12-0.069,0.24-0.139,0.351-0.21c0.063-0.04,0.138-0.078,0.198-0.118C56.695,19.589,57.875,20.651,57.989,21.065z M27,5 c16.489,0,24.829,2.596,24.985,4.086c-0.121,0.676-1.656,1.569-4.374,2.409l0,0c-3.538,1.093-9.074,2.094-16.09,2.404 c-0.359,0.015-0.717,0.03-1.083,0.042c-0.299,0.01-0.599,0.019-0.904,0.027C28.706,13.987,27.866,14,27,14s-1.706-0.013-2.534-0.032 c-0.304-0.007-0.604-0.017-0.904-0.027c-0.367-0.011-0.725-0.027-1.083-0.042c-7.016-0.31-12.553-1.311-16.09-2.404l0,0 c-2.719-0.84-4.253-1.733-4.374-2.409C2.171,7.596,10.511,5,27,5z M2,15.996l0-4.141c0.799,0.503,1.811,0.962,3,1.376v4.788 C3.055,17.29,2.002,16.559,2,15.996z M6.844,29.835c0.015,0.016,0.038,0.03,0.053,0.046c1.369,1.382,4.204,2.468,7.733,3.278 c0.081,0.019,0.167,0.037,0.249,0.056c0.259,0.058,0.522,0.115,0.788,0.17c3.241,0.69,7.11,1.189,11.325,1.436 c0.003,0,0.005,0.001,0.007,0.001c0.002,0,0.003-0.001,0.004-0.001c1.354,0.079,2.739,0.134,4.153,0.158 C31.782,34.992,32.398,35,33,35c0.69,0,1.398-0.008,2.118-0.025c1.308-0.027,2.597-0.081,3.868-0.155 c0.005,0,0.009,0.003,0.014,0.003c0.009,0,0.016-0.005,0.025-0.005c4.226-0.249,8.191-0.753,11.544-1.478 c-0.726,0.38-1.72,0.773-2.958,1.156l0,0c-3.735,1.154-9.7,2.205-17.281,2.449c-0.225,0.007-0.447,0.015-0.675,0.021 c-0.245,0.006-0.494,0.01-0.743,0.015C28.283,36.991,27.65,37,27,37c-0.866,0-1.706-0.013-2.534-0.032 c-0.304-0.007-0.604-0.017-0.904-0.027c-0.367-0.011-0.725-0.027-1.083-0.042c-7.016-0.31-12.553-1.311-16.09-2.404l0,0 c-2.75-0.85-4.289-1.754-4.378-2.433C2.122,31.686,3.133,30.745,6.844,29.835z M2,38.996l0-4.141c0.799,0.503,1.811,0.962,3,1.376 v4.769l-0.571-0.222L4.417,40.79C2.847,40.139,2.002,39.5,2,38.996z M5,49.996l0-4.141c0.799,0.503,1.811,0.962,3,1.376v4.788 C6.055,51.29,5.002,50.559,5,49.996z M52,52.019v-4.787c1.189-0.414,2.201-0.873,3-1.376v4.138 C54.999,50.557,53.945,51.289,52,52.019z M54.987,43.077c-0.109,0.677-1.645,1.575-4.376,2.419l0,0 c-3.538,1.093-9.074,2.094-16.09,2.404c-0.359,0.015-0.717,0.03-1.083,0.042c-0.299,0.01-0.599,0.019-0.904,0.027 C31.706,47.987,30.866,48,30,48c-0.866,0-1.707-0.013-2.536-0.032c-0.301-0.007-0.598-0.017-0.895-0.027 c-0.369-0.012-0.729-0.027-1.09-0.042c-7.016-0.31-12.552-1.311-16.09-2.404l0,0c-2.645-0.817-4.173-1.685-4.365-2.355 c0.298,0.104,0.607,0.205,0.924,0.304c0.032,0.01,0.064,0.02,0.096,0.029c0.27,0.083,0.546,0.163,0.829,0.241 c0.107,0.03,0.215,0.06,0.324,0.089c0.16,0.043,0.324,0.084,0.488,0.126c3.642,0.933,8.291,1.594,13.31,1.891 c0.002,0,0.003,0.001,0.005,0.001c0.001,0,0.002-0.001,0.003-0.001c1.55,0.092,3.133,0.149,4.733,0.168 C26.162,45.996,26.585,46,27,46c0.551,0,1.115-0.007,1.686-0.017c1.459-0.024,2.899-0.078,4.307-0.162 c0.003,0,0.005,0.002,0.008,0.002c0.005,0,0.008-0.003,0.013-0.003c1.715-0.103,3.375-0.25,4.97-0.433 c0.006,0,0.011,0.003,0.017,0.003c0.022,0,0.04-0.011,0.062-0.013c1.776-0.205,3.46-0.457,5.023-0.75 c0.322-0.059,0.639-0.12,0.953-0.183c0.07-0.014,0.14-0.028,0.21-0.043c2.953-0.606,5.509-1.391,7.263-2.364 c0.096-0.052,0.186-0.106,0.277-0.159c0.111-0.066,0.217-0.133,0.32-0.201c0.096-0.062,0.207-0.122,0.295-0.185 C54.378,42.196,54.922,42.826,54.987,43.077z M55,30.019v-4.787c1.189-0.414,2.201-0.873,3-1.376v4.138 C57.999,28.557,56.945,29.289,55,30.019z"], [1, "container-fluid1__question"]], template: function OfferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewportAction", function OfferComponent_Template_div_inViewportAction_0_listener($event) { return ctx.onIntersection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 21, "offer")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 23, "why_we"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollOffset", 300)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 25, "top_notch_quality"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 27, "top_notch_description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollOffset", 300)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 29, "speed_turn_around"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 31, "speed_description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollOffset", 300)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](116, 33, "email_Availability"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](119, 35, "email_description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollOffset", 300)("timeOffset", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](142, 37, "affordable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](145, 39, "affordable_description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](148, 41, "agree_or_disagree_to_any_of_the_above"));
    } }, directives: [ng_in_viewport__WEBPACK_IMPORTED_MODULE_2__["InViewportDirective"], angular_scroll_animations__WEBPACK_IMPORTED_MODULE_3__["ScrollAnimateDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".container-fluid1[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  overflow: hidden;\n  margin: 0 auto 80px auto;\n  padding-left: 10px;\n  height: auto;\n  margin-top: 80px;\n}\n.container-fluid1__header[_ngcontent-%COMP%] {\n  font-size: 150px;\n  letter-spacing: -7px;\n  margin-bottom: 30px;\n  text-indent: -3px;\n  padding: 30px 0px 10px 0px;\n  letter-spacing: -3px;\n  line-height: 85px;\n  font-size: 100px;\n  font-family: \"Stolzl Bold\";\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  word-wrap: wrap;\n}\n@media (max-width: 900px) {\n  .container-fluid1[_ngcontent-%COMP%]   .container-fluid1__header[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n.container-fluid1__description[_ngcontent-%COMP%] {\n  width: 280px;\n  font-family: \"Stolzl\";\n  color: #4973a2;\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n}\n@media (min-width: 930px) {\n  .container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: flex-end;\n    margin-right: 5%;\n  }\n  .container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:nth-child(3) {\n    justify-self: center;\n    margin-left: 15%;\n  }\n  .container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:nth-child(4) {\n    margin-left: 7%;\n  }\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  transition: 0.7s linear;\n  display: flex;\n  min-width: 300px;\n  max-width: 500px;\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 500px;\n  width: 90%;\n  background-color: #0d2d52;\n  font-family: \"Stolzl\";\n  padding: 20px;\n  display: flex;\n  margin-bottom: 40px;\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile__info__header[_ngcontent-%COMP%] {\n  color: white;\n  font-family: inherit;\n  display: inline-block;\n  position: relative;\n  margin-bottom: 10px;\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile__info__header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 50%;\n  height: 3px;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile__info__description[_ngcontent-%COMP%] {\n  color: #4973a2;\n}\n.container-fluid1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #f15b74;\n  width: 180px;\n  margin-right: 15px;\n}\n.container-fluid1__question[_ngcontent-%COMP%] {\n  color: #4973a2;\n  font-family: \"Stolzl\";\n}\n.faded-out-right[_ngcontent-%COMP%] {\n  transform: translateX(100px);\n  opacity: 0;\n}\n.released-to-left[_ngcontent-%COMP%] {\n  transform: translateX(0px);\n  opacity: 1;\n}\n.faded-out-left[_ngcontent-%COMP%] {\n  transform: translateX(-100px);\n  opacity: 0;\n}\n.released-to-right[_ngcontent-%COMP%] {\n  transform: translateX(0px);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9mZmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBS0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFO0lBQ0UsZUFBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNDckNnQjtBRG1DcEI7QUFLRTtFQUNFLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGFBQUE7QUFKSjtBQU1JO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VBSk47RUFPSTtJQUNFLG9CQUFBO0lBQ0EsZ0JBQUE7RUFMTjtFQVFJO0lBQ0UsZUFBQTtFQU5OO0FBQ0Y7QUFRSTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVFNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOWjtBQU9ZO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQXFCQSw4REFBQTtBQXJCZDtBQTRCVTtFQUNFLGNDdEhRO0FENEZwQjtBQThCUTtFQUNFLGFDN0hHO0VEOEhILFlBQUE7RUFDQSxrQkFBQTtBQTVCVjtBQWlDRTtFQUNFLGNDbklnQjtFRG9JaEIscUJBQUE7QUEvQko7QUFtQ0E7RUFDRSw0QkFBQTtFQUNBLFVBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSwwQkFBQTtFQUNBLFVBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSwwQkFBQTtFQUNBLFVBQUE7QUFoQ0YiLCJmaWxlIjoib2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhaW5lci1mbHVpZDEge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG8gODBweCBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICAmX19oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtaW5kZW50OiAtM3B4O1xyXG4gICAgcGFkZGluZzogMzBweCAwcHggMTBweCAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bCBCb2xkXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHdvcmQtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZDFfX2hlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bFwiO1xyXG4gICAgY29sb3I6ICRzbW9vdGgtYmx1ZS1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiA5MzBweCkge1xyXG4gICAgICAmIC53cmFwcGVyOm50aC1jaGlsZCgxKXtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJiAud3JhcHBlcjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmIC53cmFwcGVyOm50aC1jaGlsZCg0KXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogMC43cyBsaW5lYXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAudGlsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmQ1MjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTdG9semxcIjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAmX19pbmZvIHtcclxuICAgICAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICAkcGluay1jb2xvcixcclxuICAgICAgICAgICAgICAgICRvcmFuZ2UtY29sb3JcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgICRwaW5rLWNvbG9yLFxyXG4gICAgICAgICAgICAgICAgJG9yYW5nZS1jb2xvclxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICAkcGluay1jb2xvcixcclxuICAgICAgICAgICAgICAgICRvcmFuZ2UtY29sb3JcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICAkcGluay1jb2xvcixcclxuICAgICAgICAgICAgICAgICRvcmFuZ2UtY29sb3JcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICRwaW5rLWNvbG9yLFxyXG4gICAgICAgICAgICAgICAgJG9yYW5nZS1jb2xvclxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRzbW9vdGgtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBmaWxsOiAkcGluay1jb2xvcjtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fcXVlc3Rpb24ge1xyXG4gICAgY29sb3I6ICRzbW9vdGgtYmx1ZS1jb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bFwiO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVkLW91dC1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucmVsZWFzZWQtdG8tbGVmdCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZhZGVkLW91dC1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucmVsZWFzZWQtdG8tcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiJG9yYW5nZS1jb2xvcjogI2ZmNjAyMTtcclxuJHBpbmstY29sb3I6ICNmMTViNzQ7XHJcbiRibHVlLWNvbG9yOiAjMmQ2YWUzO1xyXG4kc21vb3RoLWJsdWUtY29sb3I6ICM0OTczYTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMwOTI1NDU7XHJcbiRncmF5LWNvbG9yOiAjYzhkNmRmOyAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-offer',
                templateUrl: './offer.component.html',
                styleUrls: ['./offer.component.scss'],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, null); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hero_part_hero_part_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-part/hero-part.component */ "Qpqk");
/* harmony import */ var _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-section/skills-section.component */ "H3wb");
/* harmony import */ var _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-section/projects-section.component */ "vEoE");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offer/offer.component */ "RHET");
/* harmony import */ var _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-section/contact-section.component */ "inje");










class AppComponent {
    constructor(translate, changeDetectorRef, media) {
        this.translate = translate;
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    moveToSection(section) {
        const yOffset = -100;
        const element = document.querySelector(section);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    changeLanguage(lang) {
        this.translate.use(lang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 15, consts: [["role", "navigation"], ["id", "menuToggle"], ["type", "checkbox"], ["id", "menu"], [1, "container", "wrapper"], ["href", "https://devduo.pro/", 1, "logo"], [1, "menu"], [1, "menu__item", 3, "click"], [2, "margin-left", "auto"], [1, "switch-button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DevDuo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_11_listener() { return ctx.moveToSection("#hero"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_15_listener() { return ctx.moveToSection("#skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_19_listener() { return ctx.moveToSection("#projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_23_listener() { return ctx.moveToSection("#offer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_27_listener() { return ctx.moveToSection("#contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener() { return ctx.changeLanguage("pl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "pl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_35_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-hero-part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-skills-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-projects-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-contact-section");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "we"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 9, "projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 11, "offer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 13, "contact"));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _hero_part_hero_part_component__WEBPACK_IMPORTED_MODULE_4__["HeroPartComponent"], _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_5__["SkillsSectionComponent"], _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsSectionComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"], _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_8__["ContactSectionComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".menu[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  list-style: none;\n  margin: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.menu__item[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  cursor: pointer;\n  font-family: \"Stolzl\";\n  position: relative;\n  font-size: 22px !important;\n  text-decoration: none;\n}\n.menu__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background-color: #2d6ae3;\n  pointer-events: none;\n  transform: scale3d(0, 1, 1);\n  transform-origin: 0% 50%;\n  transition: transform 0.5s;\n  transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);\n}\n.menu__item[_ngcontent-%COMP%]:hover::after {\n  transform: scale3d(1, 1, 1);\n}\n.menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  letter-spacing: -0.6px;\n  font-size: 22px;\n  color: #092545;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #c8d6df;\n  display: inline-block;\n  font-family: \"Stolzl\";\n  transform: translateX(-20px);\n  transition: all 0.65s cubic-bezier(0.62, 0.02, 0.34, 1);\n  text-decoration: none;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  color: #2d6ae3;\n}\n.switch-button[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n  background-color: #fff;\n  font-family: \"Stolzl\";\n}\nnav[_ngcontent-%COMP%] {\n  background-color: #1E1E23;\n  height: 65px;\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n}\n@media (min-width: 736px) {\n  nav[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n#menuToggle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  top: 25px;\n  left: 25px;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n}\n#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  width: 29px;\n  height: 2px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 3px;\n  z-index: 1;\n  transform-origin: 5px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  transform-origin: 0% 0%;\n}\n#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: rotate(45deg) translate(-3px, -1px);\n  background: #36383F;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(2) {\n  transform: rotate(-45deg) translate(0, -1px);\n}\n#menu[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 180px;\n  height: 110vh;\n  box-shadow: 0 0 10px #fff;\n  margin: -50px 0 0 -50px;\n  padding: 50px;\n  padding-top: 125px;\n  background-color: #F5F6FA;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(-100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n  transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUVFO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFBTjtBQUNNO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEseUJDdEJHO0VEdUJILG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0RBQUE7QUFBVjtBQUVNO0VBQ0ksMkJBQUE7QUFBVjtBQUVNO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQVY7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdURBQUE7RUFDQSxxQkFBQTtBQUhGO0FBSUU7RUFDSSxjQ25ETztBRGlEYjtBQU1BO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSEY7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFMRjtBQVFBO0VBQ0U7SUFDSSx3QkFBQTtFQUxKO0FBQ0Y7QUFTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBVUE7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQVJGO0FBV0E7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGlJQUFBO0FBVEY7QUFjQTtFQUVFLHVCQUFBO0FBWkY7QUFlQTtFQUVFLHlCQUFBO0FBYkY7QUFnQkE7RUFFRSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQWRGO0FBZ0JBO0VBRUUsVUFBQTtFQUNBLHVDQUFBO0FBZEY7QUFpQkE7RUFFRSw0Q0FBQTtBQWZGO0FBa0JBO0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkRBQUE7QUFoQkY7QUFtQkE7RUFFRSxlQUFBO0FBakJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4ubWVudSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgJl9faXRlbSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ1N0b2x6bCc7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwwLDAuMiwxKTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwxLDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDkyNTQ1O1xyXG5cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogI2M4ZDZkZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTdG9semwnO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC42NXMgY3ViaWMtYmV6aWVyKC42MiwgLjAyLCAuMzQsIDEpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLnN3aXRjaC1idXR0b24ge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdTdG9semwnO1xyXG59XHJcblxyXG5cclxuXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUyMztcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzM2cHgpIHtcclxuICBuYXYgeyBcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiNtZW51VG9nZ2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgaW5wdXRcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4jbWVudVRvZ2dsZSBzcGFuXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyOXB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1cHggMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXHJcbiAgICAgICAgICAgICAgb3BhY2l0eSAwLjU1cyBlYXNlO1xyXG59XHJcblxyXG4jbWVudVRvZ2dsZSBzcGFuOmZpcnN0LWNoaWxkXHJcbntcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKVxyXG57XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW5cclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtM3B4LCAtMXB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMzYzODNGO1xyXG59XHJcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpXHJcbntcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMilcclxue1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDAsIC0xcHgpO1xyXG59XHJcblxyXG4jbWVudVxyXG57XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDExMHZoO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmY7XHJcbiAgbWFyZ2luOiAtNTBweCAwIDAgLTUwcHg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGQTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKTtcclxufVxyXG5cclxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsXHJcbntcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbn0iLCIkb3JhbmdlLWNvbG9yOiAjZmY2MDIxO1xyXG4kcGluay1jb2xvcjogI2YxNWI3NDtcclxuJGJsdWUtY29sb3I6ICMyZDZhZTM7XHJcbiRzbW9vdGgtYmx1ZS1jb2xvcjogIzQ5NzNhMjtcclxuJGRhcmstYmx1ZS1jb2xvcjogIzA5MjU0NTtcclxuJGdyYXktY29sb3I6ICNjOGQ2ZGY7ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }]; }, null); })();


/***/ }),

/***/ "XdQA":
/*!***********************************************!*\
  !*** ./src/app/hero-part/hero-part.module.ts ***!
  \***********************************************/
/*! exports provided: HeroPartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroPartModule", function() { return HeroPartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _hero_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-part.component */ "Qpqk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var angular_scroll_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-scroll-animations */ "zgLI");








class HeroPartModule {
}
HeroPartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeroPartModule });
HeroPartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeroPartModule_Factory(t) { return new (t || HeroPartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["AngularTypewriterEffectModule"],
            angular_scroll_animations__WEBPACK_IMPORTED_MODULE_5__["AngularScrollAnimationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeroPartModule, { declarations: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["AngularTypewriterEffectModule"],
        angular_scroll_animations__WEBPACK_IMPORTED_MODULE_5__["AngularScrollAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroPartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["AngularTypewriterEffectModule"],
                    angular_scroll_animations__WEBPACK_IMPORTED_MODULE_5__["AngularScrollAnimationsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
                ],
                exports: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _header_headers_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/headers.module */ "amO+");
/* harmony import */ var _hero_part_hero_part_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-part/hero-part.module */ "XdQA");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills-section/skills-section.component */ "H3wb");
/* harmony import */ var _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects-section/projects-section.component */ "vEoE");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./offer/offer.component */ "RHET");
/* harmony import */ var _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-section/contact-section.component */ "inje");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var angular_scroll_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-scroll-animations */ "zgLI");
/* harmony import */ var src_shared_appear_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/shared/appear.directive */ "wpqf");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-in-viewport */ "Wuvc");






















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, "/assets/i18n/", ".json");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_shared_appear_directive__WEBPACK_IMPORTED_MODULE_17__["InView"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _hero_part_hero_part_module__WEBPACK_IMPORTED_MODULE_7__["HeroPartModule"],
            _header_headers_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            angular_scroll_animations__WEBPACK_IMPORTED_MODULE_16__["AngularScrollAnimationsModule"],
            ng_in_viewport__WEBPACK_IMPORTED_MODULE_18__["InViewportModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_9__["SkillsSectionComponent"],
        _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsSectionComponent"],
        _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__["OfferComponent"],
        _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_12__["ContactSectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _hero_part_hero_part_module__WEBPACK_IMPORTED_MODULE_7__["HeroPartModule"],
        _header_headers_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
        angular_scroll_animations__WEBPACK_IMPORTED_MODULE_16__["AngularScrollAnimationsModule"],
        ng_in_viewport__WEBPACK_IMPORTED_MODULE_18__["InViewportModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_9__["SkillsSectionComponent"],
                    _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsSectionComponent"],
                    _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__["OfferComponent"],
                    _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_12__["ContactSectionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _hero_part_hero_part_module__WEBPACK_IMPORTED_MODULE_7__["HeroPartModule"],
                    _header_headers_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                    angular_scroll_animations__WEBPACK_IMPORTED_MODULE_16__["AngularScrollAnimationsModule"],
                    ng_in_viewport__WEBPACK_IMPORTED_MODULE_18__["InViewportModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                        },
                    }),
                ],
                providers: [src_shared_appear_directive__WEBPACK_IMPORTED_MODULE_17__["InView"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "amO+":
/*!******************************************!*\
  !*** ./src/app/header/headers.module.ts ***!
  \******************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "fECr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop-menu/desktop-menu.component */ "G/ev");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");








class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({
                extend: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_4__["DesktopMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_4__["DesktopMenuComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({
                        extend: true
                    })
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cEWg":
/*!**********************************************!*\
  !*** ./src/shared/srcollElements.service.ts ***!
  \**********************************************/
/*! exports provided: scrollElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollElements", function() { return scrollElements; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class scrollElements {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setValueForEnd(message) {
        this.subject.next({ text: message });
    }
    getValueForEnd() {
        return this.subject.asObservable();
    }
}
scrollElements.ɵfac = function scrollElements_Factory(t) { return new (t || scrollElements)(); };
scrollElements.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: scrollElements, factory: scrollElements.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](scrollElements, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-menu/desktop-menu.component */ "G/ev");



class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "container", "main-header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-desktop-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_1__["DesktopMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "inje":
/*!**************************************************************!*\
  !*** ./src/app/contact-section/contact-section.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSectionComponent", function() { return ContactSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_srcollElements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/srcollElements.service */ "cEWg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function ContactSectionComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSectionComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { visible: a0, hidden: a1 }; };
class ContactSectionComponent {
    constructor(http, scrollElementsService) {
        this.http = http;
        this.scrollElementsService = scrollElementsService;
        this.scrollElementsService.getValueForEnd().subscribe(val => {
            this.reachedTheEnd = val.text;
        });
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    hasError(controlName, errorName) {
        return this.contactForm.controls[controlName].hasError(errorName);
    }
    sendEmail(data) {
        const { message, title, email } = data.value;
        const formData = new FormData();
        formData.append('body', message);
        formData.append('subject', title);
        formData.append('from', email);
        this.http
            .post('https://api.devduo.pro/portfolio/v1/sendemail', formData)
            .subscribe((_) => {
            console.log(_);
            this.contactForm.reset();
        });
    }
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
ContactSectionComponent.ɵfac = function ContactSectionComponent_Factory(t) { return new (t || ContactSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_srcollElements_service__WEBPACK_IMPORTED_MODULE_3__["scrollElements"])); };
ContactSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactSectionComponent, selectors: [["app-contact-section"]], decls: 63, vars: 21, consts: [["id", "contact", 1, "container1"], [1, "row"], [1, "form__container", "justify-content-center", "col-md-8"], [1, "header"], ["autocomplete", "off", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-md-5"], ["matInput", "", "type", "text", "formControlName", "email", 3, "placeholder"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "title", "maxlength", "40", 3, "placeholder"], [1, "col-md-10"], ["matInput", "", "placeholder", "Message", "rows", "6", "formControlName", "message", "maxlength", "250"], ["align", "end"], [1, "w-100", "d-none", "d-md-block"], ["type", "submit", 1, "contact-form-btn", "offset-md-1", 3, "disabled"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 485 485", 0, "xml", "space", "preserve", 1, "chevron", 2, "enable-background", "new 0 0 485 485", 3, "ngClass", "click"], ["d", "M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"], ["points", "114.411,270.524 135.589,291.772 242.5,185.209 349.411,291.772 370.589,270.524 242.5,142.852 \t"]], template: function ContactSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactSectionComponent_Template_form_ngSubmit_6_listener() { return ctx.sendEmail(ctx.contactForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactSectionComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactSectionComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactSectionComponent_Template__svg_svg_click_44_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "polygon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "contact_us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("email", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("email", "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contactForm.controls.message.value == null ? null : ctx.contactForm.controls.message.value.length, " / 250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 16, "submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.reachedTheEnd, !ctx.reachedTheEnd));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n.container1[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  max-width: 1200px;\n  height: 500px;\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n}\n.container1[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%] {\n  margin: 0 40px;\n  max-width: 600px;\n  min-width: 300px;\n  height: 400px;\n  background-color: #fff;\n  position: relative;\n  background-clip: padding-box;\n  \n  border: solid 5px transparent;\n  \n  border-radius: 1em;\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin: 20px 55px;\n  font-family: \"Stolzl\";\n  display: inline-block;\n}\n@media (max-width: 630px) {\n  .container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -5px;\n  \n  border-radius: inherit;\n  \n  background: linear-gradient(to bottom, #f15b74, #ff6021);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: auto;\n  border: none;\n  display: flex;\n  align-items: center;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 50px;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  border-radius: 25px;\n  font-family: \"Stolzl\";\n  font-size: 16px;\n  color: #fff;\n  line-height: 1.2;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -moz-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -webkit-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -o-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -ms-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  fill: #fff;\n  margin-left: 10px;\n  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > svg[_ngcontent-%COMP%] {\n  transform: translateX(10px);\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.container1[_ngcontent-%COMP%]   .form__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  background-color: gray;\n}\n.container1[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  width: 40px;\n  position: absolute;\n  right: 0;\n  bottom: 22%;\n  fill: #c8d6df;\n  transition: fill 0.3s cubic-bezier(0.47, 0, 0.745, 0.715), opacity 0.8s cubic-bezier(0.47, 0, 0.745, 0.715);\n  cursor: pointer;\n}\n.container1[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]:hover {\n  fill: #2d6ae3;\n}\n@media (max-width: 500px) {\n  .container1[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n    bottom: 10%;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUE4QixnQkFBQTtFQUM5Qiw2QkFBQTtFQUErQixnQkFBQTtFQUMvQixrQkFBQTtBQUdKO0FBRkk7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFJTjtBQUZJO0VBQ0U7SUFDRSxlQUFBO0VBSU47QUFDRjtBQUZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQWMsZ0JBQUE7RUFDZCxzQkFBQTtFQUF3QixnQkFBQTtFQUN4Qix3REFBQTtFQUNBLDJDQUFBO0FBTU47QUFISTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS047QUFKTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4REFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBSUEsb0JBQUE7RUFDQSxrREFBQTtFQUNBLHVEQUFBO0VBQ0EsMERBQUE7RUFDQSxxREFBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7QUFNUjtBQUxRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO0FBT1Y7QUFMUTtFQUNFLDJCQUFBO0FBT1Y7QUFMUTtFQUNFLDJCQUFBO0FBT1Y7QUFMUTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUFPVjtBQURFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQ3ZHUztFRHdHVCwyR0FBQTtFQUNBLGVBQUE7QUFHSjtBQUZJO0VBQ0UsYUM5R087QURrSGI7QUFERTtFQUNFO0lBQ0UsV0FBQTtFQUdKO0FBQ0Y7QUFDQTtFQUNFLFVBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtBQUVGIiwiZmlsZSI6ImNvbnRhY3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIxIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyMSAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyMSAuZm9ybV9fY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDQwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLyogIWltcG9ydGFudMOpICovXG4gIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICAvKiAhaW1wb3J0YW50w6kgKi9cbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuLmNvbnRhaW5lcjEgLmZvcm1fX2NvbnRhaW5lciAuaGVhZGVyIHtcbiAgbWFyZ2luOiAyMHB4IDU1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlN0b2x6bFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgLmNvbnRhaW5lcjEgLmZvcm1fX2NvbnRhaW5lciAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIxIC5mb3JtX19jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW46IC01cHg7XG4gIC8qICFpbXBvcnRhbnTDqSAqL1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAvKiAhaW1wb3J0YW50w6kgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YxNWI3NCwgI2ZmNjAyMSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uY29udGFpbmVyMSAuZm9ybV9fY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIxIC5mb3JtX19jb250YWluZXIgLnJvdyBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YxNWI3NCwgI2ZmNjAyMSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlN0b2x6bFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDI1NSwgNzUsIDkwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDI1NSwgNzUsIDkwLCAwLjUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDI1NSwgNzUsIDkwLCAwLjUpO1xuICAtby1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgyNTUsIDc1LCA5MCwgMC41KTtcbiAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDI1NSwgNzUsIDkwLCAwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5jb250YWluZXIxIC5mb3JtX19jb250YWluZXIgLnJvdyBidXR0b24gc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGZpbGw6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5jb250YWluZXIxIC5mb3JtX19jb250YWluZXIgLnJvdyBidXR0b246aG92ZXIgPiBzdmcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG4uY29udGFpbmVyMSAuZm9ybV9fY29udGFpbmVyIC5yb3cgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xufVxuLmNvbnRhaW5lcjEgLmZvcm1fX2NvbnRhaW5lciAucm93IGJ1dHRvbjpkaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lcjEgLmNoZXZyb24ge1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAyMiU7XG4gIGZpbGw6ICNjOGQ2ZGY7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSwgb3BhY2l0eSAwLjhzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyMSAuY2hldnJvbjpob3ZlciB7XG4gIGZpbGw6ICMyZDZhZTM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lcjEgLmNoZXZyb24ge1xuICAgIGJvdHRvbTogMTAlO1xuICB9XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59IiwiJG9yYW5nZS1jb2xvcjogI2ZmNjAyMTtcclxuJHBpbmstY29sb3I6ICNmMTViNzQ7XHJcbiRibHVlLWNvbG9yOiAjMmQ2YWUzO1xyXG4kc21vb3RoLWJsdWUtY29sb3I6ICM0OTczYTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMwOTI1NDU7XHJcbiRncmF5LWNvbG9yOiAjYzhkNmRmOyAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-section',
                templateUrl: './contact-section.component.html',
                styleUrls: ['./contact-section.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_srcollElements_service__WEBPACK_IMPORTED_MODULE_3__["scrollElements"] }]; }, null); })();


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: MODULES, AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULES", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











const MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[...MODULES], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...MODULES],
                exports: [...MODULES],
            }]
    }], null, null); })();


/***/ }),

/***/ "vEoE":
/*!****************************************************************!*\
  !*** ./src/app/projects-section/projects-section.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsSectionComponent", function() { return ProjectsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_scroll_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-scroll-animations */ "zgLI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class ProjectsSectionComponent {
}
ProjectsSectionComponent.ɵfac = function ProjectsSectionComponent_Factory(t) { return new (t || ProjectsSectionComponent)(); };
ProjectsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsSectionComponent, selectors: [["app-projects-section"]], decls: 22, vars: 13, consts: [[1, "container"], ["id", "projects", 1, "container__header", 3, "innerHTML"], [1, "container__projects"], ["animateOnScroll", "", "startAnimation", "faded-out-bottom", "endAnimation", "released-to-position", 1, "wrapper", 3, "scrollOffset", "timeOffset"], [1, "project__card", "project__card--blue"], [1, "project__card__title", "white-color"], [1, "project__card__sub-title", "white-color"], [1, "project__card__preview"], ["src", "../../assets/icons/FREEHC.png", "alt", ""], [1, "project__card", "project__card--purple"], ["src", "../../assets/icons/modular.png", "alt", ""]], template: function ProjectsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FREEHC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, "showcase"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollOffset", 1200)("timeOffset", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "MCProject"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollOffset", 600)("timeOffset", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "chimneyProject"), " ");
    } }, directives: [angular_scroll_animations__WEBPACK_IMPORTED_MODULE_1__["ScrollAnimateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .container__header[_ngcontent-%COMP%] {\n  font-size: 150px;\n  letter-spacing: -7px;\n  text-indent: -3px;\n  margin: 40px 0 30px -6px;\n  padding: 20px 0px 10px 0px;\n  letter-spacing: -3px;\n  line-height: 85px;\n  font-size: 100px;\n  font-family: \"Stolzl Bold\";\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  word-wrap: wrap;\n}\n@media (max-width: 750px) {\n  .container[_ngcontent-%COMP%]   .container__header[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    font-size: 80px;\n  }\n}\n@media (min-width: 750px) {\n  .container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:nth-child(odd) {\n    position: relative;\n    top: 70px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  min-height: 500px;\n  display: grid;\n  margin: 0 auto;\n  grid-column-gap: 1rem;\n  grid-row-gap: 3rem;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n  max-width: 500px;\n  transition: 2s ease;\n  justify-self: center;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover    > .project__card[_ngcontent-%COMP%] {\n  transform: scale(0.85);\n  overflow: visible;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover    > .project__card[_ngcontent-%COMP%]    > .project__card__preview[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  transform: scale(1.25) translateX(50px);\n  z-index: 999;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 602px;\n  min-height: 400px;\n  margin-bottom: 60px;\n  padding: 40px 30px;\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__title[_ngcontent-%COMP%] {\n  font-family: \"Stolzl Bold\";\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__sub-title[_ngcontent-%COMP%] {\n  font-family: \"Stolzl\";\n  width: 80%;\n  font-size: 22px;\n}\n@media (max-width: 740px) {\n  .container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__sub-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__preview[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 500px;\n  position: absolute;\n  bottom: 40px;\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card--blue[_ngcontent-%COMP%] {\n  background-color: #2d6ae3;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card--purple[_ngcontent-%COMP%] {\n  background-color: #7e42e1;\n}\n.container[_ngcontent-%COMP%]   .container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card--gray[_ngcontent-%COMP%] {\n  background-color: #e5e8ee;\n}\n.white-color[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.black-color[_ngcontent-%COMP%] {\n  color: #092545;\n}\n.faded-out-bottom[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  opacity: 0;\n}\n.released-to-position[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.faded-out-bottom[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  opacity: 0;\n}\n.released-to-position[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.faded-out-bottom[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  opacity: 0;\n}\n.released-to-position[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBS0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBREo7QUFHRTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBREo7QUFDRjtBQUlFO0VBQ0U7SUFDRSxxQ0FBQTtFQUZKO0VBS0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFKTjtBQUtNO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQUhSO0FBS007RUFDRSx1Q0FBQTtFQUNBLFlBQUE7QUFIUjtBQUtNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhSO0FBSVE7RUFDRSwwQkFBQTtBQUZWO0FBSVE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRlY7QUFHVTtFQUpGO0lBS0ksZUFBQTtFQUFWO0FBQ0Y7QUFFUTtFQUNFLFVBQUE7QUFBVjtBQUNVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FBQVo7QUFHUTtFQUNFLHlCQ25HRztBRGtHYjtBQUdRO0VBQ0UseUJBQUE7QUFEVjtBQUdRO0VBQ0UseUJBQUE7QUFEVjtBQVFBO0VBQ0UsV0FBQTtBQUxGO0FBUUE7RUFDRSxjQ25IZ0I7QUQ4R2xCO0FBU0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFORjtBQVNBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBTkY7QUFXQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQVJGO0FBWUE7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFURjtBQWNBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBWEY7QUFlQTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQVpGIiwiZmlsZSI6InByb2plY3RzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAuY29udGFpbmVyX19oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtN3B4O1xyXG4gICAgdGV4dC1pbmRlbnQ6IC0zcHg7XHJcbiAgICBtYXJnaW46IDQwcHggMCAzMHB4IC02cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDg1cHg7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3RvbHpsIEJvbGRcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgd29yZC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBAbWVkaWEobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLmNvbnRhaW5lcl9faGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuY29udGFpbmVyX19wcm9qZWN0cyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcl9fcHJvamVjdHMgLndyYXBwZXI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogNzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXJfX3Byb2plY3RzIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbiAgICBncmlkLXJvdy1nYXA6IDNyZW07XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMnMgZWFzZTtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgJjpob3ZlciA+IC5wcm9qZWN0X19jYXJkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIgPiAucHJvamVjdF9fY2FyZCA+IC5wcm9qZWN0X19jYXJkX19wcmV2aWV3ID4gaW1nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9qZWN0X19jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjAycHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bCBCb2xkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTdG9semxcIjtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3ByZXZpZXcge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLWJsdWUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLXB1cnBsZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U0MmUxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1ncmF5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU4ZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud2hpdGUtY29sb3Ige1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmxhY2stY29sb3Ige1xyXG4gIGNvbG9yOiAkZGFyay1ibHVlLWNvbG9yO1xyXG59XHJcblxyXG4vLyBhbmltYXRpb25zXHJcbi5mYWRlZC1vdXQtYm90dG9tIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnJlbGVhc2VkLXRvLXBvc2l0aW9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi8vIGFuaW1hdGlvbnNcclxuLmZhZGVkLW91dC1ib3R0b20ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5cclxuLnJlbGVhc2VkLXRvLXBvc2l0aW9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi8vIGFuaW1hdGlvbnNcclxuLmZhZGVkLW91dC1ib3R0b20ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5cclxuLnJlbGVhc2VkLXRvLXBvc2l0aW9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIkb3JhbmdlLWNvbG9yOiAjZmY2MDIxO1xyXG4kcGluay1jb2xvcjogI2YxNWI3NDtcclxuJGJsdWUtY29sb3I6ICMyZDZhZTM7XHJcbiRzbW9vdGgtYmx1ZS1jb2xvcjogIzQ5NzNhMjtcclxuJGRhcmstYmx1ZS1jb2xvcjogIzA5MjU0NTtcclxuJGdyYXktY29sb3I6ICNjOGQ2ZGY7ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-section',
                templateUrl: './projects-section.component.html',
                styleUrls: ['./projects-section.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "wpqf":
/*!****************************************!*\
  !*** ./src/shared/appear.directive.ts ***!
  \****************************************/
/*! exports provided: InView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InView", function() { return InView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InView {
    constructor(vcRef, tplRef) {
        this.vcRef = vcRef;
        this.tplRef = tplRef;
    }
    ngAfterViewInit() {
        const commentEl = this.vcRef.element.nativeElement; // template
        const elToObserve = commentEl.parentElement;
        this.setMinWidthHeight(elToObserve);
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                this.renderContents(entry.isIntersecting);
            });
        }, { threshold: [0, .1, .9, 1] });
        observer.observe(elToObserve);
    }
    renderContents(isInView) {
        if (isInView && !this.alreadyRendered) {
            this.vcRef.clear();
            this.vcRef.createEmbeddedView(this.tplRef);
            this.alreadyRendered = true;
        }
    }
    setMinWidthHeight(el) {
        const style = window.getComputedStyle(el);
        const [width, height] = [parseInt(style.width), parseInt(style.height)];
        !width && (el.style.minWidth = '40px');
        !height && (el.style.minHeight = '40px');
    }
}
InView.ɵfac = function InView_Factory(t) { return new (t || InView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
InView.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InView, selectors: [["", "inView", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[inView]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();


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
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


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