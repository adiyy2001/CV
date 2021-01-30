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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class DesktopMenuComponent {
    constructor(translateService) {
        this.translateService = translateService;
    }
    ngOnInit() {
    }
    changeLanguage(lang) {
        this.translateService.use(lang);
    }
}
DesktopMenuComponent.ɵfac = function DesktopMenuComponent_Factory(t) { return new (t || DesktopMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
DesktopMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesktopMenuComponent, selectors: [["app-desktop-menu"]], decls: 29, vars: 12, consts: [[1, "container"], ["href", "http://localhost:4200", 1, "logo"], [1, "menu"], [1, "menu__item"], ["href", "#"], [2, "margin-left", "auto"], [1, "switch-button", 3, "click"]], template: function DesktopMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DevDuo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_button_click_24_listener() { return ctx.changeLanguage("pl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "pl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesktopMenuComponent_Template_button_click_27_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "we"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, "contact"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 1200px;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #c8d6df;\n  display: inline-block;\n  font-family: \"Stolzl\";\n  transform: translateX(-20px);\n  transition: all 0.65s cubic-bezier(0.62, 0.02, 0.34, 1);\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  color: #2d6ae3;\n}\n.container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  cursor: pointer;\n  font-family: \"Stolzl\";\n  position: relative;\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  background-color: #2d6ae3;\n  pointer-events: none;\n  transform: scale3d(0, 1, 1);\n  transform-origin: 0% 50%;\n  transition: transform 0.5s;\n  transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);\n}\n.container[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]:hover::after {\n  transform: scale3d(1, 1, 1);\n}\n.container[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  letter-spacing: -0.6px;\n  font-size: 14px;\n  color: #092545;\n}\n.switch-button[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n  background-color: #fff;\n  font-family: \"Stolzl\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXNrdG9wLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdURBQUE7RUFDQSxxQkFBQTtBQUFSO0FBQ1E7RUFDSSxjQ2JDO0FEY2I7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FBRFo7QUFFWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkNuQ0g7RURvQ0csb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3REFBQTtBQUFoQjtBQUVZO0VBQ0ksMkJBQUE7QUFBaEI7QUFFWTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFoQjtBQU9BO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSkoiLCJmaWxlIjoiZGVza3RvcC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICNjOGQ2ZGY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3RvbHpsJztcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNjVzIGN1YmljLWJlemllciguNjIsIC4wMiwgLjM0LCAxKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1N0b2x6bCc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwwLDAuMiwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwxLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDkyNTQ1O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN3aXRjaC1idXR0b24ge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ1N0b2x6bCc7XHJcbn0iLCIkb3JhbmdlLWNvbG9yOiAjZmY2MDIxO1xyXG4kcGluay1jb2xvcjogI2YxNWI3NDtcclxuJGJsdWUtY29sb3I6ICMyZDZhZTM7XHJcbiRzbW9vdGgtYmx1ZS1jb2xvcjogIzQ5NzNhMjtcclxuJGRhcmstYmx1ZS1jb2xvcjogIzA5MjU0NTtcclxuJGdyYXktY29sb3I6ICNjOGQ2ZGY7ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesktopMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-desktop-menu',
                templateUrl: './desktop-menu.component.html',
                styleUrls: ['./desktop-menu.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class SkillsSectionComponent {
}
SkillsSectionComponent.ɵfac = function SkillsSectionComponent_Factory(t) { return new (t || SkillsSectionComponent)(); };
SkillsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsSectionComponent, selectors: [["app-skills-section"]], decls: 72, vars: 15, consts: [[1, "container"], [1, "skills-header", "col-lg-12"], [1, "skills-skills", "row"], [1, "card-container"], [1, "card-container__pro"], ["src", "../../assets/be_avatar.svg", "alt", "user", 1, "card-container__image"], [1, "card-container__header"], [1, "card-container__description", 3, "innerHtml"], [1, "card-container__buttons-group"], [1, "primary-button"], [1, "primary-button", "primary-button--ghost"], [1, "skills"], [1, "skills__header"], [1, "skills__list"], [1, "skills__list__item"], [1, "col-lg-2"], ["src", "../../assets/fe_avatar.svg", "alt", "user", 1, "card-container__image"]], template: function SkillsSectionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back End Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "MSSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "WEB API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Serverless");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Adrian Turbi\u0144ski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "UI / UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Front End Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "RxJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "knowledge_Skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "cloud_logical"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 9, "skills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 11, "designer_development"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 13, "skills"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 1200px;\n  height: 800px;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%]   .skills-header[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Stolzl\";\n  margin-bottom: 40px;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%]   .skills-skills[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 550px;\n}\n.card-container[_ngcontent-%COMP%] {\n  font-family: \"Stolzl\";\n  background-color: #092545;\n  border-radius: 25px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.35);\n  color: #b3b8cd;\n  padding: 30px 0 0;\n  position: relative;\n  width: 350px;\n  max-width: 100%;\n  text-align: center;\n  margin: 20px 0;\n  overflow: hidden;\n}\n.card-container__pro[_ngcontent-%COMP%] {\n  color: #231e39;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  border-radius: 3px;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 3px 7px;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n.card-container__image[_ngcontent-%COMP%] {\n  border: 1px solid #2d6ae3;\n  border-radius: 50%;\n  padding: 7px;\n  height: 150px;\n  width: 150px;\n}\n.card-container__header[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.card-container__description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n}\n.card-container[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  background-color: #2d6ae3;\n  border: 1px solid #2d6ae3;\n  border-radius: 3px;\n  color: #fff;\n  font-family: \"Stolzl\";\n  font-weight: 500;\n  padding: 10px 25px;\n}\n.card-container[_ngcontent-%COMP%]   .primary-button--ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #2d6ae3;\n}\n.skills[_ngcontent-%COMP%] {\n  background-color: #1f1a36;\n  height: 40%;\n  text-align: left;\n  padding: 15px;\n  margin-top: 30px;\n}\n.skills__list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.skills__list__item[_ngcontent-%COMP%] {\n  border: 2px solid #092545;\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 12px;\n  margin: 0 7px 7px 0;\n  padding: 7px;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 5px 0 10px 0;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBREY7QUFFRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBREo7QUFPQTtFQUNFLHFCQUFBO0VBQ0EseUJDckJnQjtFRHNCaEIsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpGO0FBS0U7RUFDRSxjQUFBO0VBQ0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhKO0FBTUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLGNBQUE7QUFMSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTEo7QUFRRTtFQUNFLHlCQy9EUztFRGdFVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5KO0FBT0k7RUFDRSw2QkFBQTtFQUNBLGNDeEVPO0FEbUViO0FBVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVBGO0FBU0U7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUEo7QUFRSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOTjtBQVdBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtBQVJGIiwiZmlsZSI6InNraWxscy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC5za2lsbHMtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5za2lsbHMtc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgY29sb3I6ICNiM2I4Y2Q7XHJcbiAgcGFkZGluZzogMzBweCAwIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJl9fcHJvIHtcclxuICAgIGNvbG9yOiAjMjMxZTM5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgJi0tZ2hvc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWEzNjtcclxuICBoZWlnaHQ6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrLWJsdWUtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbjogMCA3cHggN3B4IDA7XHJcbiAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmg2IHtcclxuICBtYXJnaW46IDVweCAwIDEwcHggMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IiwiJG9yYW5nZS1jb2xvcjogI2ZmNjAyMTtcclxuJHBpbmstY29sb3I6ICNmMTViNzQ7XHJcbiRibHVlLWNvbG9yOiAjMmQ2YWUzO1xyXG4kc21vb3RoLWJsdWUtY29sb3I6ICM0OTczYTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMwOTI1NDU7XHJcbiRncmF5LWNvbG9yOiAjYzhkNmRmOyAiXX0= */"] });
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
        this.list = ['development', 'managment', 'cloud_solutions', 'user_interfaces'];
    }
    ngOnInit() {
    }
    // translatation() {
    //   fromEvent(this.translate.currentLang, 'ch')
    // }
    ngOnChanges(simpleChanges) {
    }
}
HeroPartComponent.ɵfac = function HeroPartComponent_Factory(t) { return new (t || HeroPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
HeroPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroPartComponent, selectors: [["app-hero-part"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 14, consts: [[1, "container"], ["col-lg-8", "", "col-md-6", "", 1, "hero-content"], [1, "hero-text"], [3, "StringList", "speed"], [1, "hero-header", 3, "innerHtml"], [1, "hero-description"], [1, "hero-button"], ["col-lg-4", "", "col-md-6", "", 1, "hero-image"], ["src", "../assets/hero-image.png", "alt", "", 1, "img-fluid"]], template: function HeroPartComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["TypewriterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n\n.hero-image[_ngcontent-%COMP%], .hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  padding: 0;\n  height: calc(100vh - 100px);\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  position: relative;\n  align-items: center;\n  top: 30px;\n  left: 30px;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  font-family: \"Stolzl\";\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%] {\n  font-size: 150px;\n  letter-spacing: -7px;\n  line-height: 110px;\n  margin-bottom: 30px;\n  text-indent: -3px;\n  margin-left: -6px;\n  padding: 20px 0px 10px 0px;\n  letter-spacing: -3px;\n  line-height: 72px;\n  font-size: 100px;\n  font-family: \"Stolzl Bold\";\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  word-wrap: wrap;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-family: \"Stolzl light\";\n  margin-bottom: 30px;\n  line-height: 30px;\n  height: 80px;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 60px;\n  padding: 7px 12px 7px 20px;\n  font-family: \"Stolzl book\";\n  text-align: left;\n  position: relative;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  overflow: hidden;\n  color: white;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-color: #144096;\n  z-index: -1;\n  transform: translate3D(0, -100%, 0);\n  transition: all 0.3s;\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]:hover::before {\n  transform: translate3D(0, 0%, 0);\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: #2d6ae3;\n  z-index: -1;\n  transform: translate3D(0, 0%, 0);\n  \n  transition: all 0.3s;\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%]:hover::after {\n  transform: translate3D(0, 100%, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlcm8tcGFydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQURGOztBQUdBOztFQUVFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFLQSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBQ0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ047O0FBQ0k7RUFDRSxnQ0FBQTtBQUNOOztBQUNJO0VBQ0UsNkJBQUE7QUFDTjs7QUFDSTtFQUNFLFdBQUE7RUFDQSx5QkN4Rk87RUQwRlAsV0FBQTtFQUNBLGdDQUFBO0VBSUcsOERBQUE7RUFDSCxvQkFBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBSE47O0FBS0k7RUFDRSxrQ0FBQTtBQUhOIiwiZmlsZSI6Imhlcm8tcGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmhlcm8taW1hZ2UsXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG59XHJcblxyXG4uaGVyby1pbWFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuLmhlcm8tY29udGVudCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogXCJTdG9semxcIjtcclxuXHJcbiAgLmhlcm8taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWluZGVudDogLTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMTBweCAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bCBCb2xkXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHdvcmQtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5oZXJvLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bCBsaWdodFwiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAuaGVyby1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogN3B4IDEycHggN3B4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJTdG9semwgYm9va1wiO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJsdWUtY29sb3IsIDIwJSk7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41MiwgMS42NCwgMC4zNywgMC42Nik7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG5cclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwJSxcclxuICAgICAgICAwXHJcbiAgICAgICk7IC8qIG1vdmUgZWxlbWVudHMgYWJvdmUgYnV0dG9uIHNvIHRoZXkgZG9uJ3QgYXBwZWFyIGluaXRpYWxseSAqL1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUyLCAxLjY0LCAwLjM3LCAwLjY2KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRvcmFuZ2UtY29sb3I6ICNmZjYwMjE7XHJcbiRwaW5rLWNvbG9yOiAjZjE1Yjc0O1xyXG4kYmx1ZS1jb2xvcjogIzJkNmFlMztcclxuJHNtb290aC1ibHVlLWNvbG9yOiAjNDk3M2EyO1xyXG4kZGFyay1ibHVlLWNvbG9yOiAjMDkyNTQ1O1xyXG4kZ3JheS1jb2xvcjogI2M4ZDZkZjsgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroPartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-part',
                templateUrl: './hero-part.component.html',
                styleUrls: ['./hero-part.component.scss']
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class OfferComponent {
}
OfferComponent.ɵfac = function OfferComponent_Factory(t) { return new (t || OfferComponent)(); };
OfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfferComponent, selectors: [["app-offer"]], decls: 146, vars: 23, consts: [[1, "container"], [1, "container__header"], [1, "container__description"], [1, "row"], [1, "wrapper", "offset-md-5", "col-md-5"], [1, "tile"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M472.208,201.712c9.271-9.037,12.544-22.3,8.544-34.613c-4.001-12.313-14.445-21.118-27.257-22.979l-112.03-16.279 c-2.199-0.319-4.1-1.7-5.084-3.694L286.28,22.632c-5.729-11.61-17.331-18.822-30.278-18.822c-12.947,0-24.549,7.212-30.278,18.822 l-50.101,101.516c-0.985,1.993-2.885,3.374-5.085,3.694L58.51,144.12c-12.812,1.861-23.255,10.666-27.257,22.979 c-4.002,12.313-0.728,25.576,8.544,34.613l81.065,79.019c1.591,1.552,2.318,3.787,1.942,5.978l-19.137,111.576 c-2.188,12.761,2.958,25.414,13.432,33.024c10.474,7.612,24.102,8.595,35.56,2.572l100.201-52.679 c1.968-1.035,4.317-1.035,6.286,0l100.202,52.679c4.984,2.62,10.377,3.915,15.744,3.914c6.97,0,13.896-2.184,19.813-6.487 c10.474-7.611,15.621-20.265,13.432-33.024l-19.137-111.576c-0.375-2.191,0.351-4.426,1.942-5.978L472.208,201.712z M362.579,291.276l19.137,111.578c0.64,3.734-1.665,5.863-2.686,6.604c-1.022,0.74-3.76,2.277-7.112,0.513l-100.202-52.679 c-4.919-2.585-10.315-3.879-15.712-3.879c-5.397,0-10.794,1.294-15.712,3.878l-100.201,52.678 c-3.354,1.763-6.091,0.228-7.112-0.513c-1.021-0.741-3.327-2.87-2.686-6.604l19.137-111.576 c1.879-10.955-1.75-22.127-9.711-29.886l-81.065-79.019c-2.713-2.646-2.099-5.723-1.708-6.923 c0.389-1.201,1.702-4.052,5.451-4.596l112.027-16.279c10.999-1.598,20.504-8.502,25.424-18.471l50.101-101.516 c1.677-3.397,4.793-3.764,6.056-3.764c1.261,0,4.377,0.366,6.055,3.764v0.001l50.101,101.516 c4.919,9.969,14.423,16.873,25.422,18.471l112.029,16.279c3.749,0.544,5.061,3.395,5.451,4.596 c0.39,1.201,1.005,4.279-1.709,6.923l-81.065,79.019C364.329,269.149,360.7,280.321,362.579,291.276z"], ["d", "M413.783,22.625c-6.036-4.384-14.481-3.046-18.865,2.988l-14.337,19.732c-4.384,6.034-3.047,14.481,2.988,18.865 c2.399,1.741,5.176,2.58,7.928,2.58c4.177,0,8.295-1.931,10.937-5.567l14.337-19.732 C421.155,35.456,419.818,27.009,413.783,22.625z"], ["d", "M131.36,45.265l-14.337-19.732c-4.383-6.032-12.829-7.37-18.865-2.988c-6.034,4.384-7.372,12.831-2.988,18.865 l14.337,19.732c2.643,3.639,6.761,5.569,10.939,5.569c2.753,0,5.531-0.839,7.927-2.581C134.407,59.747,135.745,51.3,131.36,45.265 z"], ["d", "M49.552,306.829c-2.305-7.093-9.924-10.976-17.019-8.671l-23.197,7.538c-7.095,2.305-10.976,9.926-8.671,17.019 c1.854,5.709,7.149,9.337,12.842,9.337c1.383,0,2.79-0.215,4.177-0.666l23.197-7.538 C47.975,321.543,51.857,313.924,49.552,306.829z"], ["d", "M256.005,456.786c-7.459,0-13.506,6.047-13.506,13.506v24.392c0,7.459,6.047,13.506,13.506,13.506 c7.459,0,13.506-6.047,13.506-13.506v-24.392C269.511,462.832,263.465,456.786,256.005,456.786z"], ["d", "M502.664,305.715l-23.197-7.538c-7.092-2.303-14.714,1.577-17.019,8.672c-2.305,7.095,1.576,14.714,8.671,17.019 l23.197,7.538c1.387,0.45,2.793,0.664,4.176,0.664c5.694,0,10.989-3.629,12.843-9.337 C513.64,315.639,509.758,308.02,502.664,305.715z"], [1, "tile__info"], [1, "tile__info__header"], [1, "tile__info__description"], [1, "wrapper", "col-md-6"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512.001 512.001", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512.001 512.001"], ["d", "M190.213,202.49c-2.937-4.678-9.107-6.09-13.786-3.153l-43.226,27.132c-4.678,2.936-6.09,9.108-3.153,13.786 c1.899,3.026,5.152,4.685,8.479,4.685c1.816,0,3.654-0.495,5.307-1.532l43.226-27.132 C191.738,213.34,193.15,207.168,190.213,202.49z"], ["d", "M122.662,244.91c-2.932-4.679-9.099-6.098-13.783-3.168l-0.201,0.126c-4.681,2.932-6.099,9.102-3.168,13.783 c1.898,3.031,5.154,4.694,8.485,4.694c1.813,0,3.648-0.493,5.298-1.526l0.201-0.126 C124.175,255.761,125.593,249.591,122.662,244.91z"], ["d", "M510.296,4.42c-2.809-4.177-8.286-5.615-12.784-3.355L201.488,149.712c-3.343,1.678-5.469,5.081-5.512,8.821 c-0.044,3.74,2.003,7.191,5.306,8.946l58.313,30.993L126.561,281.98c-3.024,1.898-4.806,5.263-4.677,8.83 c0.128,3.567,2.148,6.795,5.3,8.47l64.794,34.438L3.515,494.39c-3.91,3.333-4.658,9.086-1.731,13.308 c1.93,2.782,5.041,4.303,8.225,4.303c1.648,0,3.314-0.407,4.846-1.257L318.83,342.065c3.205-1.779,5.18-5.169,5.147-8.835 c-0.033-3.665-2.069-7.02-5.307-8.74l-59.226-31.48l138.164-88.938c2.995-1.928,4.738-5.305,4.576-8.864 c-0.162-3.559-2.205-6.763-5.363-8.411l-51.146-26.685l162.91-142.586C512.373,14.211,513.107,8.597,510.296,4.42z M321.503,154.692c-2.484,2.174-3.735,5.435-3.344,8.712c0.393,3.278,2.377,6.151,5.304,7.678l48.851,25.487l-138.037,88.856 c-2.983,1.921-4.727,5.28-4.578,8.826c0.147,3.546,2.164,6.748,5.298,8.413l58.031,30.845L92.579,444.741l123.563-105.342 c2.52-2.148,3.813-5.404,3.454-8.695c-0.359-3.292-2.324-6.191-5.248-7.745l-62.517-33.228l133.035-83.51 c3.023-1.898,4.806-5.263,4.677-8.83c-0.128-3.567-2.148-6.795-5.3-8.47L227.758,158.9L436.39,54.137L321.503,154.692z"], ["d", "M379.28,347.402c-2.685-4.828-8.777-6.562-13.6-3.878l-0.208,0.116c-4.826,2.685-6.563,8.774-3.877,13.601 c1.828,3.287,5.235,5.14,8.747,5.14c1.646,0,3.314-0.407,4.853-1.263l0.208-0.116C380.229,358.317,381.966,352.228,379.28,347.402 z"], ["d", "M353.955,361.462c-2.681-4.829-8.769-6.572-13.597-3.891l-44.624,24.764c-4.829,2.68-6.571,8.767-3.892,13.596 c1.827,3.292,5.237,5.149,8.753,5.149c1.642,0,3.307-0.405,4.844-1.258l44.624-24.764 C354.892,372.378,356.634,366.291,353.955,361.462z"], [1, "wrapper", "offset-md-4", "col-md-8"], ["d", "M405.333,213.874V106.667c0-23.531-19.135-42.667-42.667-42.667h-320C19.135,64,0,83.135,0,106.667V320 c0,23.531,19.135,42.667,42.667,42.667h239.215C295.858,411.84,341.073,448,394.667,448c20.625,0,40.906-5.427,58.677-15.708 c5.094-2.948,6.844-9.469,3.885-14.573c-2.948-5.104-9.479-6.865-14.573-3.885c-14.521,8.396-31.115,12.833-47.99,12.833 c-52.938,0-96-43.063-96-96s43.063-96,96-96s96,43.063,96,96v10.667c0,11.76-9.573,21.333-21.333,21.333 c-11.76,0-21.333-9.573-21.333-21.333v-42.667c0-5.896-4.771-10.667-10.667-10.667c-2.869,0-5.447,1.161-7.362,3 c-9.428-8.401-21.714-13.667-35.305-13.667c-29.406,0-53.333,23.927-53.333,53.333S365.26,384,394.667,384 c15.896,0,30.03-7.131,39.81-18.202c7.727,10.977,20.44,18.202,34.857,18.202C492.865,384,512,364.865,512,341.333v-10.667 C512,269.569,465.044,219.288,405.333,213.874z M42.667,85.333h320c0.444,0,0.816,0.227,1.254,0.254L211.438,210.75 c-5.427,3.417-13.292,2.708-16.823,0.542L41.426,85.585C41.859,85.559,42.227,85.333,42.667,85.333z M384,213.874 c-59.711,5.414-106.667,55.695-106.667,116.793c0,3.6,0.221,7.148,0.54,10.667H42.667c-11.76,0-21.333-9.573-21.333-21.333 V106.667c0-3.021,0.667-5.874,1.805-8.48l158.883,130.293c6.208,4.052,13.344,6.188,20.646,6.188 c7.021,0,13.885-1.979,19.927-5.729c0.604-0.323,1.177-0.708,1.719-1.156l157.88-129.598c1.139,2.608,1.807,5.461,1.807,8.483 V213.874z M394.667,362.667c-17.646,0-32-14.354-32-32c0-17.646,14.354-32,32-32s32,14.354,32,32 C426.667,348.313,412.313,362.667,394.667,362.667z"], [1, "wrapper", "offset-md-1", "col-md-6"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 60 60", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 60 60"], ["d", "M59.989,21c-0.099-1.711-2.134-3.048-6.204-4.068c0.137-0.3,0.214-0.612,0.215-0.936V9h-0.017C53.625,3.172,29.743,3,27,3 S0.375,3.172,0.017,9H0v0.13v0v0l0,6.869c0.005,1.9,2.457,3.387,6.105,4.494c-0.05,0.166-0.08,0.335-0.09,0.507H6v0.13v0v0l0,6.857 C2.07,28.999,0.107,30.317,0.01,32H0v0.13v0v0l0,6.869c0.003,1.323,1.196,2.445,3.148,3.38c-0.074,0.203-0.12,0.41-0.133,0.622H3 v0.13v0v0l0,6.869c0.008,3.326,7.497,5.391,15.818,6.355c0.061,0.012,0.117,0.037,0.182,0.037c0.019,0,0.035-0.01,0.054-0.011 c1.604,0.181,3.234,0.322,4.847,0.423c0.034,0.004,0.064,0.02,0.099,0.02c0.019,0,0.034-0.01,0.052-0.011 C26.1,56.937,28.115,57,30,57c1.885,0,3.9-0.063,5.948-0.188c0.018,0.001,0.034,0.011,0.052,0.011c0.035,0,0.065-0.017,0.099-0.02 c1.613-0.101,3.243-0.241,4.847-0.423C40.965,56.38,40.981,56.39,41,56.39c0.065,0,0.121-0.025,0.182-0.037 c8.321-0.964,15.809-3.03,15.818-6.357V43h-0.016c-0.07-1.226-1.115-2.249-3.179-3.104c0.126-0.289,0.195-0.589,0.195-0.9V32.46 c3.59-1.104,5.995-2.581,6-4.464V21H59.989z M51.892,39.321l-0.341,0.299C51.026,40.083,50.151,40.55,49,41v-4.768 c1.189-0.414,2.201-0.873,3-1.376v4.138C52,39.097,51.962,39.207,51.892,39.321z M29.526,43.968 c-0.146,0.004-0.293,0.006-0.44,0.009c-0.357,0.007-0.723,0.009-1.085,0.012v-4.995c0.275-0.003,0.55-0.007,0.825-0.012 c0.053-0.001,0.106-0.002,0.159-0.003c1.007-0.019,2.014-0.05,3.016-0.096v4.993c-0.214,0.011-0.429,0.021-0.646,0.03 C30.753,43.933,30.145,43.953,29.526,43.968z M25.159,43.982c-0.458-0.008-0.914-0.019-1.367-0.033 c-0.056-0.002-0.112-0.004-0.168-0.006c-0.545-0.018-1.086-0.041-1.623-0.067v-4.992c1.002,0.047,2.009,0.078,3.016,0.096 c0.053,0.001,0.106,0.002,0.158,0.003c0.275,0.005,0.55,0.009,0.825,0.012v4.998c-0.194-0.002-0.388-0.002-0.581-0.005 C25.331,43.986,25.246,43.983,25.159,43.982z M7.097,41.702C7.064,41.692,7.033,41.683,7,41.674v-4.831 c0.934,0.252,1.938,0.482,3,0.691v4.881c-0.918-0.195-1.765-0.4-2.536-0.61C7.342,41.77,7.216,41.737,7.097,41.702z M28.175,49.983 c0.275,0.005,0.55,0.009,0.825,0.012v4.999c-1.382-0.013-2.716-0.053-4-0.116v-4.993c1.002,0.047,2.009,0.078,3.016,0.096 C28.069,49.981,28.122,49.982,28.175,49.983z M31.984,49.98c1.007-0.019,2.014-0.05,3.016-0.096v4.993 c-1.284,0.063-2.618,0.103-4,0.116v-4.999c0.275-0.003,0.55-0.007,0.825-0.012C31.878,49.982,31.931,49.981,31.984,49.98z M40,49.528v4.966c-0.961,0.101-1.961,0.19-3,0.263v-4.987C38.014,49.704,39.016,49.623,40,49.528z M42,49.312 c1.031-0.124,2.032-0.265,3-0.422v4.91c-0.942,0.166-1.943,0.319-3,0.458V49.312z M47,48.533c1.062-0.209,2.066-0.439,3-0.691v4.831 c-0.891,0.257-1.894,0.506-3,0.741V48.533z M13,48.533v4.881c-1.106-0.235-2.109-0.484-3-0.741v-4.831 C10.934,48.094,11.938,48.325,13,48.533z M15,48.891c0.968,0.157,1.969,0.298,3,0.422v4.946c-1.057-0.139-2.058-0.292-3-0.458 V48.891z M20,49.528c0.984,0.095,1.986,0.176,3,0.243v4.987c-1.039-0.073-2.039-0.162-3-0.263V49.528z M17.519,43.548 c-0.102-0.01-0.203-0.021-0.304-0.031c-0.072-0.007-0.143-0.016-0.215-0.023v-4.965c0.984,0.095,1.986,0.176,3,0.243v4.983 C19.16,43.695,18.33,43.627,17.519,43.548z M15,38.312v4.946c-1.057-0.139-2.058-0.292-3-0.458v-4.91 C12.968,38.047,13.969,38.189,15,38.312z M34.666,43.708c-0.22,0.017-0.442,0.034-0.666,0.05v-4.987 c1.014-0.067,2.016-0.147,3-0.243v4.966c-0.618,0.065-1.25,0.126-1.899,0.179C34.956,43.686,34.811,43.697,34.666,43.708z M39,43.258v-4.946c1.031-0.124,2.032-0.265,3-0.422v4.91C41.058,42.966,40.057,43.12,39,43.258z M44,37.533 c1.062-0.209,2.066-0.439,3-0.691v4.831c-0.891,0.257-1.894,0.506-3,0.741V37.533z M30.325,32.965 c-0.752-0.019-1.487-0.048-2.209-0.083c-0.039-0.002-0.078-0.004-0.116-0.005v-4.993c1.002,0.047,2.009,0.078,3.016,0.096 c0.053,0.001,0.106,0.002,0.158,0.003c0.275,0.005,0.55,0.009,0.825,0.012v4.993c-0.487-0.005-0.978-0.007-1.453-0.018 C30.473,32.968,30.398,32.967,30.325,32.965z M7,18.674v-4.831c0.934,0.252,1.938,0.482,3,0.691v4.881 c-0.123-0.026-0.25-0.052-0.37-0.078c-0.532-0.117-1.051-0.239-1.547-0.368C7.705,18.872,7.346,18.773,7,18.674z M25.175,15.983 c0.275,0.005,0.55,0.009,0.825,0.012v4.993c-1.346-0.013-2.684-0.048-4-0.114v-4.989c1.002,0.047,2.009,0.078,3.016,0.096 C25.069,15.981,25.122,15.982,25.175,15.983z M28.984,15.98c1.007-0.019,2.014-0.05,3.016-0.096v4.989 c-0.17,0.008-0.333,0.02-0.504,0.028c-0.014,0.001-0.028,0.001-0.043,0.002c-0.671,0.03-1.355,0.052-2.048,0.068 c-0.108,0.003-0.216,0.004-0.324,0.007c-0.356,0.007-0.72,0.008-1.081,0.012v-4.995c0.275-0.003,0.55-0.007,0.825-0.012 C28.878,15.982,28.931,15.981,28.984,15.98z M51.771,16.482l-0.028-0.006l-0.364,0.283C50.851,17.17,50.04,17.586,49,17.988v-4.757 c1.189-0.414,2.201-0.873,3-1.376v4.138C52,16.145,51.92,16.309,51.771,16.482z M39,20.252v-4.94c1.031-0.124,2.032-0.265,3-0.422 v4.902C41.052,19.96,40.054,20.114,39,20.252z M44,19.407v-4.873c1.062-0.209,2.066-0.439,3-0.691v4.82 C46.104,18.924,45.095,19.173,44,19.407z M37,15.528v4.96c-0.966,0.102-1.966,0.191-3,0.265v-4.982 C35.014,15.704,36.016,15.623,37,15.528z M17,20.49v-4.962c0.984,0.095,1.986,0.176,3,0.243v4.978 C18.982,20.676,17.978,20.593,17,20.49z M15,15.312v4.941c-0.198-0.026-0.404-0.047-0.6-0.074c-0.128-0.018-0.25-0.037-0.376-0.055 c-0.578-0.083-1.143-0.172-1.697-0.265C12.216,19.84,12.109,19.82,12,19.801v-4.91C12.968,15.047,13.969,15.189,15,15.312z M25.752,32.739c-0.135-0.01-0.271-0.02-0.405-0.03c-0.64-0.05-1.265-0.105-1.875-0.166c-0.131-0.013-0.262-0.027-0.392-0.04 C23.053,32.5,23.027,32.496,23,32.494v-4.966c0.984,0.095,1.986,0.176,3,0.243v4.984C25.919,32.749,25.833,32.745,25.752,32.739z M19.145,31.992c-0.396-0.063-0.768-0.131-1.145-0.197v-4.904c0.968,0.157,1.969,0.298,3,0.422v4.946 c-0.612-0.081-1.211-0.165-1.786-0.255C19.191,31.999,19.168,31.995,19.145,31.992z M16,26.533v4.873 c-1.105-0.237-2.107-0.489-3-0.751v-4.813C13.934,26.094,14.938,26.325,16,26.533z M11,25.231v4.751 c-1.572-0.607-2.586-1.227-2.916-1.779l-0.067-0.112C8.011,28.06,8.001,28.027,8,27.996l0-4.141 C8.799,24.358,9.811,24.817,11,25.231z M34.984,27.98c1.007-0.019,2.014-0.05,3.016-0.096v4.988c-1.314,0.065-2.65,0.101-4,0.115 v-4.992c0.275-0.003,0.55-0.007,0.825-0.012C34.878,27.982,34.931,27.981,34.984,27.98z M47.907,31.817 c-0.439,0.076-0.882,0.151-1.337,0.22c-0.261,0.04-0.528,0.078-0.796,0.116c-0.253,0.036-0.516,0.067-0.773,0.1v-4.941 c1.031-0.124,2.032-0.265,3-0.422v4.91C47.969,31.806,47.938,31.812,47.907,31.817z M41.136,32.671 c-0.373,0.031-0.758,0.051-1.136,0.078v-4.978c1.014-0.067,2.016-0.147,3-0.243v4.961c-0.581,0.061-1.161,0.122-1.758,0.172 C41.206,32.664,41.172,32.668,41.136,32.671z M52.564,30.796c-0.498,0.139-1.025,0.269-1.563,0.396 c-0.249,0.058-0.503,0.116-0.763,0.172c-0.077,0.017-0.159,0.032-0.237,0.049v-4.879c1.062-0.209,2.066-0.439,3-0.691v4.831 C52.857,30.714,52.712,30.755,52.564,30.796z M57.989,21.065c-0.092,0.679-1.631,1.582-4.378,2.431l0,0 c-3.538,1.093-9.074,2.094-16.09,2.404c-0.359,0.015-0.717,0.03-1.083,0.042c-0.299,0.01-0.599,0.019-0.904,0.027 C34.706,25.987,33.866,26,33,26s-1.706-0.013-2.534-0.032c-0.304-0.007-0.604-0.017-0.904-0.027 c-0.367-0.011-0.725-0.027-1.083-0.042c-7.016-0.31-12.553-1.311-16.09-2.404l0,0c-2.725-0.842-4.261-1.738-4.375-2.414 c0.005-0.019,0.005-0.035,0.017-0.059c0.068,0.017,0.144,0.031,0.213,0.048c0.391,0.093,0.792,0.183,1.2,0.269 c1.987,0.428,4.189,0.779,6.535,1.047c0.008,0,0.014,0.004,0.021,0.004c0.002,0,0.004-0.001,0.005-0.001 c1.598,0.182,3.256,0.325,4.958,0.426c0.013,0,0.024,0.007,0.037,0.007c0.007,0,0.012-0.004,0.019-0.004 c1.225,0.072,2.466,0.125,3.722,0.153C25.51,22.99,26.265,23,27,23c0.525,0,1.063-0.006,1.606-0.016 c7.266-0.112,14-0.976,18.686-2.315c0.216-0.061,0.427-0.124,0.635-0.187c0.127-0.039,0.257-0.077,0.38-0.116 c0.362-0.116,0.709-0.235,1.044-0.359c0.058-0.022,0.113-0.044,0.171-0.066c0.283-0.107,0.555-0.218,0.815-0.331 c0.075-0.033,0.152-0.065,0.225-0.098c0.277-0.125,0.545-0.253,0.793-0.386c0.112-0.059,0.209-0.12,0.314-0.18 c0.12-0.069,0.24-0.139,0.351-0.21c0.063-0.04,0.138-0.078,0.198-0.118C56.695,19.589,57.875,20.651,57.989,21.065z M27,5 c16.489,0,24.829,2.596,24.985,4.086c-0.121,0.676-1.656,1.569-4.374,2.409l0,0c-3.538,1.093-9.074,2.094-16.09,2.404 c-0.359,0.015-0.717,0.03-1.083,0.042c-0.299,0.01-0.599,0.019-0.904,0.027C28.706,13.987,27.866,14,27,14s-1.706-0.013-2.534-0.032 c-0.304-0.007-0.604-0.017-0.904-0.027c-0.367-0.011-0.725-0.027-1.083-0.042c-7.016-0.31-12.553-1.311-16.09-2.404l0,0 c-2.719-0.84-4.253-1.733-4.374-2.409C2.171,7.596,10.511,5,27,5z M2,15.996l0-4.141c0.799,0.503,1.811,0.962,3,1.376v4.788 C3.055,17.29,2.002,16.559,2,15.996z M6.844,29.835c0.015,0.016,0.038,0.03,0.053,0.046c1.369,1.382,4.204,2.468,7.733,3.278 c0.081,0.019,0.167,0.037,0.249,0.056c0.259,0.058,0.522,0.115,0.788,0.17c3.241,0.69,7.11,1.189,11.325,1.436 c0.003,0,0.005,0.001,0.007,0.001c0.002,0,0.003-0.001,0.004-0.001c1.354,0.079,2.739,0.134,4.153,0.158 C31.782,34.992,32.398,35,33,35c0.69,0,1.398-0.008,2.118-0.025c1.308-0.027,2.597-0.081,3.868-0.155 c0.005,0,0.009,0.003,0.014,0.003c0.009,0,0.016-0.005,0.025-0.005c4.226-0.249,8.191-0.753,11.544-1.478 c-0.726,0.38-1.72,0.773-2.958,1.156l0,0c-3.735,1.154-9.7,2.205-17.281,2.449c-0.225,0.007-0.447,0.015-0.675,0.021 c-0.245,0.006-0.494,0.01-0.743,0.015C28.283,36.991,27.65,37,27,37c-0.866,0-1.706-0.013-2.534-0.032 c-0.304-0.007-0.604-0.017-0.904-0.027c-0.367-0.011-0.725-0.027-1.083-0.042c-7.016-0.31-12.553-1.311-16.09-2.404l0,0 c-2.75-0.85-4.289-1.754-4.378-2.433C2.122,31.686,3.133,30.745,6.844,29.835z M2,38.996l0-4.141c0.799,0.503,1.811,0.962,3,1.376 v4.769l-0.571-0.222L4.417,40.79C2.847,40.139,2.002,39.5,2,38.996z M5,49.996l0-4.141c0.799,0.503,1.811,0.962,3,1.376v4.788 C6.055,51.29,5.002,50.559,5,49.996z M52,52.019v-4.787c1.189-0.414,2.201-0.873,3-1.376v4.138 C54.999,50.557,53.945,51.289,52,52.019z M54.987,43.077c-0.109,0.677-1.645,1.575-4.376,2.419l0,0 c-3.538,1.093-9.074,2.094-16.09,2.404c-0.359,0.015-0.717,0.03-1.083,0.042c-0.299,0.01-0.599,0.019-0.904,0.027 C31.706,47.987,30.866,48,30,48c-0.866,0-1.707-0.013-2.536-0.032c-0.301-0.007-0.598-0.017-0.895-0.027 c-0.369-0.012-0.729-0.027-1.09-0.042c-7.016-0.31-12.552-1.311-16.09-2.404l0,0c-2.645-0.817-4.173-1.685-4.365-2.355 c0.298,0.104,0.607,0.205,0.924,0.304c0.032,0.01,0.064,0.02,0.096,0.029c0.27,0.083,0.546,0.163,0.829,0.241 c0.107,0.03,0.215,0.06,0.324,0.089c0.16,0.043,0.324,0.084,0.488,0.126c3.642,0.933,8.291,1.594,13.31,1.891 c0.002,0,0.003,0.001,0.005,0.001c0.001,0,0.002-0.001,0.003-0.001c1.55,0.092,3.133,0.149,4.733,0.168 C26.162,45.996,26.585,46,27,46c0.551,0,1.115-0.007,1.686-0.017c1.459-0.024,2.899-0.078,4.307-0.162 c0.003,0,0.005,0.002,0.008,0.002c0.005,0,0.008-0.003,0.013-0.003c1.715-0.103,3.375-0.25,4.97-0.433 c0.006,0,0.011,0.003,0.017,0.003c0.022,0,0.04-0.011,0.062-0.013c1.776-0.205,3.46-0.457,5.023-0.75 c0.322-0.059,0.639-0.12,0.953-0.183c0.07-0.014,0.14-0.028,0.21-0.043c2.953-0.606,5.509-1.391,7.263-2.364 c0.096-0.052,0.186-0.106,0.277-0.159c0.111-0.066,0.217-0.133,0.32-0.201c0.096-0.062,0.207-0.122,0.295-0.185 C54.378,42.196,54.922,42.826,54.987,43.077z M55,30.019v-4.787c1.189-0.414,2.201-0.873,3-1.376v4.138 C57.999,28.557,56.945,29.289,55,30.019z"], [1, "container__question"]], template: function OfferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, saepe delectus voluptate quas vero tenetur ea aspernatur maxime illum? Enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, saepe delectus voluptate quas vero tenetur ea aspernatur maxime illum? Enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, saepe delectus voluptate quas vero tenetur ea aspernatur maxime illum? Enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, saepe delectus voluptate quas vero tenetur ea aspernatur maxime illum? Enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "offer")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "why_we"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 13, "top_notch_quality"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 15, "speed_turn_around"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 17, "email_Availability"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](140, 19, "affordable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](145, 21, "agree_or_disagree_to_any_of_the_above"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 1200px;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .container__header[_ngcontent-%COMP%] {\n  font-size: 150px;\n  letter-spacing: -7px;\n  margin-bottom: 30px;\n  text-indent: -3px;\n  margin-left: -6px;\n  padding: 20px 0px 10px 0px;\n  letter-spacing: -3px;\n  line-height: 85px;\n  font-size: 100px;\n  font-family: \"Stolzl Bold\";\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  word-wrap: wrap;\n}\n.container__description[_ngcontent-%COMP%] {\n  width: 280px;\n  font-family: \"Stolzl\";\n  color: #4973a2;\n}\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  min-height: 900px;\n}\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n  width: 500px;\n  background-color: #0d2d52;\n  font-family: \"Stolzl\";\n  padding: 20px;\n  display: flex;\n  margin-bottom: 40px;\n}\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile__info__header[_ngcontent-%COMP%] {\n  color: white;\n  font-family: inherit;\n  display: inline-block;\n  position: relative;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile__info__header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 50%;\n  height: 3px;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n}\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile__info__description[_ngcontent-%COMP%] {\n  color: #4973a2;\n}\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #f15b74;\n  width: 180px;\n  margin-right: 15px;\n}\n.container__question[_ngcontent-%COMP%] {\n  color: #4973a2;\n  font-family: \"Stolzl\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9mZmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBREY7QUFFRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFLQSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0M1QmdCO0FEMkJwQjtBQUlFO0VBQ0UsaUJBQUE7QUFGSjtBQUtRO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSFY7QUFLWTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhkO0FBSWM7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBS0EsOERBQUE7QUFGaEI7QUFLWTtFQUNFLGNDaEVNO0FENkRwQjtBQU9VO0VBQ0UsYUN2RUM7RUR3RUQsWUFBQTtFQUNBLGtCQUFBO0FBTFo7QUFXRTtFQUNFLGNDOUVnQjtFRCtFaEIscUJBQUE7QUFUSiIsImZpbGUiOiJvZmZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICAuY29udGFpbmVyX19oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtaW5kZW50OiAtM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDg1cHg7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3RvbHpsIEJvbGRcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJHBpbmstY29sb3IsICRvcmFuZ2UtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgd29yZC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbiAgICBjb2xvcjogJHNtb290aC1ibHVlLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA5MDBweDtcclxuICAgIC5yb3cge1xyXG4gICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgLnRpbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMmQ1MjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bFwiO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgJl9faW5mbyB7XHJcbiAgICAgICAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHNtb290aC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgZmlsbDogJHBpbmstY29sb3I7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19xdWVzdGlvbiB7XHJcbiAgICBjb2xvcjogJHNtb290aC1ibHVlLWNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTdG9semwnO1xyXG4gIH1cclxufVxyXG4iLCIkb3JhbmdlLWNvbG9yOiAjZmY2MDIxO1xyXG4kcGluay1jb2xvcjogI2YxNWI3NDtcclxuJGJsdWUtY29sb3I6ICMyZDZhZTM7XHJcbiRzbW9vdGgtYmx1ZS1jb2xvcjogIzQ5NzNhMjtcclxuJGRhcmstYmx1ZS1jb2xvcjogIzA5MjU0NTtcclxuJGdyYXktY29sb3I6ICNjOGQ2ZGY7ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offer',
                templateUrl: './offer.component.html',
                styleUrls: ['./offer.component.scss'],
            }]
    }], null, null); })();


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hero_part_hero_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-part/hero-part.component */ "Qpqk");
/* harmony import */ var _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills-section/skills-section.component */ "H3wb");
/* harmony import */ var _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-section/projects-section.component */ "vEoE");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer/offer.component */ "RHET");
/* harmony import */ var _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-section/contact-section.component */ "inje");









class AppComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.title = 'frontend';
    }
    ngOnInit() {
        this.translateService.use('en');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero-part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skills-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-section");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _hero_part_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"], _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_4__["SkillsSectionComponent"], _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsSectionComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__["OfferComponent"], _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_7__["ContactSectionComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #FFF;\n  font-family: \"HelveticaNeue\";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: normal;\n  font-size: 17px;\n  color: #092545;\n  transition: background 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBREY7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQURKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3NoYXJlZC92YXJpYWJsZXMnO1xyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMDkyNTQ1O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


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







class HeroPartModule {
}
HeroPartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeroPartModule });
HeroPartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeroPartModule_Factory(t) { return new (t || HeroPartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["AngularTypewriterEffectModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeroPartModule, { declarations: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["AngularTypewriterEffectModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroPartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_hero_part_component__WEBPACK_IMPORTED_MODULE_3__["HeroPartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_2__["AngularTypewriterEffectModule"],
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
/* harmony import */ var _translation_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./translation-http-loader */ "i49M");



















function HttpLoaderFactory(httpClient) {
    return new _translation_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslationHttpLoader"](httpClient);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _hero_part_hero_part_module__WEBPACK_IMPORTED_MODULE_7__["HeroPartModule"],
            _header_headers_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]],
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
        _header_headers_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _skills_section_skills_section_component__WEBPACK_IMPORTED_MODULE_9__["SkillsSectionComponent"],
                    _projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsSectionComponent"],
                    _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__["OfferComponent"],
                    _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_12__["ContactSectionComponent"],
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
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]],
                        },
                    }),
                ],
                providers: [],
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
/* harmony import */ var _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-menu/desktop-menu.component */ "G/ev");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_3__["DesktopMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_3__["DesktopMenuComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ]
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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "main-header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-desktop-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_desktop_menu_desktop_menu_component__WEBPACK_IMPORTED_MODULE_1__["DesktopMenuComponent"]], styles: [".main-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  max-height: 100px;\n  z-index: 999;\n  width: 100%;\n  background: none;\n  overflow: hidden;\n  background: #FFF;\n  padding: 45px 0px 25px;\n  transition: all ease 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDBweCAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "i49M":
/*!********************************************!*\
  !*** ./src/app/translation-http-loader.ts ***!
  \********************************************/
/*! exports provided: TranslationHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationHttpLoader", function() { return TranslationHttpLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





// APP_INITILAZATION improvment
class TranslationHttpLoader {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTranslation(lang) {
        if (lang == null) {
            lang == 'en';
        }
        const urls = {
            pl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL}translation/PL`,
            en: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL}translation/EN`,
        };
        const observer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.httpClient.get(urls[lang]).subscribe((data) => {
                console.log(data.value);
                observer.next(data.value[0]);
                observer.complete();
            }, (error) => {
                console.log(error);
            });
        });
        return observer;
    }
}
TranslationHttpLoader.ɵfac = function TranslationHttpLoader_Factory(t) { return new (t || TranslationHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TranslationHttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationHttpLoader, factory: TranslationHttpLoader.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationHttpLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









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
class ContactSectionComponent {
    constructor(http) {
        this.http = http;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    hasError(controlName, errorName) {
        return this.contactForm.controls[controlName].hasError(errorName);
    }
    sendEmail(data) {
        const formData = new FormData();
        formData.append('body', data.value.message);
        formData.append('subject', data.value.title);
        formData.append('from', data.value.email);
        console.log({
            from: data.value.email,
            subject: data.value.title,
            body: data.value.message
        });
        this.http.post('https://flashly.azurewebsites.net/api/SendEmail', formData).subscribe(_ => {
            console.log(_);
            this.contactForm.reset();
        });
    }
}
ContactSectionComponent.ɵfac = function ContactSectionComponent_Factory(t) { return new (t || ContactSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactSectionComponent, selectors: [["app-contact-section"]], decls: 44, vars: 17, consts: [[1, "container"], [1, "row"], [1, "form__wrapper", "col-md-8"], [1, "header"], ["autocomplete", "off", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-md-5"], ["matInput", "", "type", "text", "formControlName", "email", 3, "placeholder"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "title", "maxlength", "40", 3, "placeholder"], [1, "col-md-10"], ["matInput", "", "placeholder", "Message", "rows", "6", "formControlName", "message", "maxlength", "250"], ["align", "end"], [1, "w-100", "d-none", "d-md-block"], ["type", "submit", 1, "contact-form-btn", "offset-md-1", 3, "disabled"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"]], template: function ContactSectionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "contact_us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("email", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("email", "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contactForm.controls.message.value == null ? null : ctx.contactForm.controls.message.value.length, " / 250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, "submit"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  width: 1200px;\n  height: 500px;\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 600px;\n  height: 400px;\n  background-color: #fff;\n  position: relative;\n  background-clip: padding-box;\n  \n  border: solid 5px transparent;\n  \n  border-radius: 1em;\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 55px;\n  font-family: \"Stolzl\";\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -5px;\n  \n  border-radius: inherit;\n  \n  background: linear-gradient(to bottom, #f15b74, #ff6021);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: auto;\n  border: none;\n  display: flex;\n  align-items: center;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 50px;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  border-radius: 25px;\n  font-family: \"Stolzl\";\n  font-size: 16px;\n  color: #fff;\n  line-height: 1.2;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -moz-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -webkit-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -o-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  -ms-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);\n  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  fill: #fff;\n  margin-left: 10px;\n  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > svg[_ngcontent-%COMP%] {\n  transform: translateX(10px);\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.container[_ngcontent-%COMP%]   .form__wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFBRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQThCLGdCQUFBO0VBQzlCLDZCQUFBO0VBQStCLGdCQUFBO0VBQy9CLGtCQUFBO0FBR0o7QUFGSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSU47QUFGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUFjLGdCQUFBO0VBQ2Qsc0JBQUE7RUFBd0IsZ0JBQUE7RUFDeEIsd0RBQUE7RUFDQSwyQ0FBQTtBQU1OO0FBSEk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtOO0FBSk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBS0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUlBLG9CQUFBO0VBQ0Esa0RBQUE7RUFDQSx1REFBQTtFQUNBLDBEQUFBO0VBQ0EscURBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0FBTVI7QUFMUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx3REFBQTtBQU9WO0FBTFE7RUFDRSwyQkFBQTtBQU9WO0FBTFE7RUFDRSwyQkFBQTtBQU9WO0FBTFE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FBT1YiLCJmaWxlIjoiY29udGFjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbi5jb250YWluZXIgLmZvcm1fX3dyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qICFpbXBvcnRhbnTDqSAqL1xuICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgLyogIWltcG9ydGFudMOpICovXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbi5jb250YWluZXIgLmZvcm1fX3dyYXBwZXIgLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggNTVweDtcbiAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XG59XG4uY29udGFpbmVyIC5mb3JtX193cmFwcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luOiAtNXB4O1xuICAvKiAhaW1wb3J0YW50w6kgKi9cbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgLyogIWltcG9ydGFudMOpICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMTViNzQsICNmZjYwMjEpO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNvbnRhaW5lciAuZm9ybV9fd3JhcHBlciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5mb3JtX193cmFwcGVyIC5yb3cgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMTViNzQsICNmZjYwMjEpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJTdG9semxcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgyNTUsIDc1LCA5MCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgyNTUsIDc1LCA5MCwgMC41KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgyNTUsIDc1LCA5MCwgMC41KTtcbiAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMjU1LCA3NSwgOTAsIDAuNSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgyNTUsIDc1LCA5MCwgMC41KTtcbiAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uY29udGFpbmVyIC5mb3JtX193cmFwcGVyIC5yb3cgYnV0dG9uIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBmaWxsOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uY29udGFpbmVyIC5mb3JtX193cmFwcGVyIC5yb3cgYnV0dG9uOmhvdmVyID4gc3ZnIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xufVxuLmNvbnRhaW5lciAuZm9ybV9fd3JhcHBlciAucm93IGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbn1cbi5jb250YWluZXIgLmZvcm1fX3dyYXBwZXIgLnJvdyBidXR0b246ZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-section',
                templateUrl: './contact-section.component.html',
                styleUrls: ['./contact-section.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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








const MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[...MODULES], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]] }); })();
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class ProjectsSectionComponent {
}
ProjectsSectionComponent.ɵfac = function ProjectsSectionComponent_Factory(t) { return new (t || ProjectsSectionComponent)(); };
ProjectsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsSectionComponent, selectors: [["app-projects-section"]], decls: 27, vars: 3, consts: [[1, "container"], [1, "container__header", 3, "innerHTML"], [1, "container__projects"], [1, "col-lg-6", "container__projects__left"], [1, "wrapper"], [1, "project__card", "project__card--blue"], [1, "project__card__title", "white-color"], [1, "project__card__sub-title", "white-color"], [1, "project__card__preview"], [1, "col-lg-6", "container__projects__right"], [1, "project__card", "project__card--purple"], [1, "project__card", "project__card--gray"], [1, "project__card__title", "black-color"], [1, "project__card__sub-title", "black-color"]], template: function ProjectsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Content Management System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fianance managment app ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "E-commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "showcase"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 1200px;\n}\n.container[_ngcontent-%COMP%]   .container__header[_ngcontent-%COMP%] {\n  font-size: 150px;\n  letter-spacing: -7px;\n  margin-bottom: 30px;\n  text-indent: -3px;\n  margin-left: -6px;\n  padding: 20px 0px 10px 0px;\n  letter-spacing: -3px;\n  line-height: 85px;\n  font-size: 100px;\n  font-family: \"Stolzl Bold\";\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #f15b74, #ff6021);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  word-wrap: wrap;\n}\n.container__projects[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.container__projects__left[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  position: relative;\n  top: 80px;\n}\n.container__projects__right[_ngcontent-%COMP%] {\n  height: 1400px;\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover    > .project__card[_ngcontent-%COMP%] {\n  transform: scale(0.85);\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 602px;\n  margin-bottom: 60px;\n  padding: 40px 30px;\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__title[_ngcontent-%COMP%] {\n  font-family: \"Stolzl Bold\";\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card__sub-title[_ngcontent-%COMP%] {\n  font-family: \"Stolzl\";\n  width: 80%;\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card--blue[_ngcontent-%COMP%] {\n  background-color: #2d6ae3;\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card--purple[_ngcontent-%COMP%] {\n  background-color: #7e42e1;\n}\n.container__projects[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .project__card--gray[_ngcontent-%COMP%] {\n  background-color: #e5e8ee;\n}\n.white-color[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.black-color[_ngcontent-%COMP%] {\n  color: #092545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBS0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQURKO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUROO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFLUTtFQUNJLHNCQUFBO0FBSFo7QUFLUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0VBQ0EsZUFBQTtBQUhaO0FBSVk7RUFDRSwwQkFBQTtBQUZkO0FBSVk7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFGZDtBQUlZO0VBQ0UseUJDekREO0FEdURiO0FBSVk7RUFDRSx5QkFBQTtBQUZkO0FBSVk7RUFDRSx5QkFBQTtBQUZkO0FBU0E7RUFDSSxXQUFBO0FBTko7QUFTQTtFQUNJLGNDekVjO0FEbUVsQiIsImZpbGUiOiJwcm9qZWN0cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgLmNvbnRhaW5lcl9faGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWluZGVudDogLTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMTBweCAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN0b2x6bCBCb2xkXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRwaW5rLWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcGluay1jb2xvciwgJG9yYW5nZS1jb2xvcik7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHdvcmQtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gICZfX3Byb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgJl9fbGVmdCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogODBweDtcclxuICAgIH1cclxuICAgICZfX3JpZ2h0IHtcclxuICAgICAgaGVpZ2h0OiAxNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgICY6aG92ZXIgPiAucHJvamVjdF9fY2FyZCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjg1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2plY3RfX2NhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAzMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJTdG9semwgQm9sZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU3RvbHpsXCI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLS1ibHVlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLS1wdXJwbGUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTQyZTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi0tZ3JheSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZThlZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndoaXRlLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmxhY2stY29sb3Ige1xyXG4gICAgY29sb3I6ICRkYXJrLWJsdWUtY29sb3I7XHJcbn1cclxuIiwiJG9yYW5nZS1jb2xvcjogI2ZmNjAyMTtcclxuJHBpbmstY29sb3I6ICNmMTViNzQ7XHJcbiRibHVlLWNvbG9yOiAjMmQ2YWUzO1xyXG4kc21vb3RoLWJsdWUtY29sb3I6ICM0OTczYTI7XHJcbiRkYXJrLWJsdWUtY29sb3I6ICMwOTI1NDU7XHJcbiRncmF5LWNvbG9yOiAjYzhkNmRmOyAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-section',
                templateUrl: './projects-section.component.html',
                styleUrls: ['./projects-section.component.scss']
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