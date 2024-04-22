"use strict";
(self["webpackChunkcurriculum"] = self["webpackChunkcurriculum"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [["role", "main", 1, "content"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div class=\"content\" role=\"main\">\r\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\r\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\r\n  </svg>\r\n</div>"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2016);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ 3881);
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ 7949);
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer/footer.component */ 5177);
/* harmony import */ var _pages_languages_languages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/languages/languages.component */ 2945);
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/experience/experience.component */ 367);
/* harmony import */ var _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/curriculum/curriculum.component */ 3114);
/* harmony import */ var _pages_certification_certification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/certification/certification.component */ 5717);
/* harmony import */ var _pages_specialization_specialization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/specialization/specialization.component */ 6160);
/* harmony import */ var _pages_personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/personal-projects/personal-projects.component */ 8387);
/* harmony import */ var _pages_professional_info_professional_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/professional-info/professional-info.component */ 1062);
/* harmony import */ var _pages_academic_education_academic_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/academic-education/academic-education.component */ 7396);
/* harmony import */ var _pages_professional_skills_professional_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/professional-skills/professional-skills.component */ 9656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);

















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _pages_academic_education_academic_education_component__WEBPACK_IMPORTED_MODULE_12__.AcademicEducationComponent, _pages_certification_certification_component__WEBPACK_IMPORTED_MODULE_8__.CertificationComponent, _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_7__.CurriculumComponent, _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceComponent, _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _pages_languages_languages_component__WEBPACK_IMPORTED_MODULE_5__.LanguagesComponent, _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _pages_professional_info_professional_info_component__WEBPACK_IMPORTED_MODULE_11__.ProfessionalInfoComponent, _pages_professional_skills_professional_skills_component__WEBPACK_IMPORTED_MODULE_13__.ProfessionalSkillsComponent, _pages_specialization_specialization_component__WEBPACK_IMPORTED_MODULE_9__.SpecializationComponent, _pages_personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_10__.PersonalProjectsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgOptimizedImage]
  });
})();

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/curriculum/curriculum.component */ 3114);
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/experience/experience.component */ 367);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ 3881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: '',
  component: _pages_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_0__.CurriculumComponent
}, {
  path: 'experiencia',
  component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent
}, {
  path: 'sobre',
  component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 3881:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 5177);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ 7949);



class AboutComponent {
  constructor() {
    this.about = 'Sobre';
    this.descriptionResume = `
        Como Arquiteta de Software, estou em constante busca pelo sucesso profissional, alimentada pela minha dedicação, paixão pelo aprendizado e pela minha exigência pessoal.
        Sou uma estudiosa incansável, sempre pronta para mergulhar em novas tecnologias e encarar desafios estimulantes.
        A cada obstáculo, vejo uma oportunidade de crescimento e superação.
        Determinada e comprometida, estou pronta para enfrentar qualquer desafio que a carreira me apresentar.
    `;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-pages-about"]],
    decls: 12,
    vars: 2,
    consts: [[1, "container"], [1, "jumbotron"], [1, "row"], [1, "col-md-12"], [1, "recuo"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-pages-navbar")(1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-pages-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.descriptionResume, " ");
      }
    },
    dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
    styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  align-items: center;\n  line-height: 20px;\n  display: flex;\n}\n\nimg.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.recuo[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  text-align: justify;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUlKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBpbWcubG9nb3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLnJlY3VvIHsgXG4gICAgdGV4dC1pbmRlbnQ6MmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgaW1ne1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7396:
/*!**************************************************************************!*\
  !*** ./src/app/pages/academic-education/academic-education.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcademicEducationComponent: () => (/* binding */ AcademicEducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_service_academic_education_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/academic-education.service */ 1789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 5177);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ 7949);
/* harmony import */ var _specialization_specialization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../specialization/specialization.component */ 6160);






function AcademicEducationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-pages-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AcademicEducationComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const education_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](education_r3.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](education_r3.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](education_r3.course);
  }
}
function AcademicEducationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-pages-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class AcademicEducationComponent {
  constructor(academicEducationService) {
    this.academicEducationService = academicEducationService;
    this.canShow = true;
    this.academicEducations = [];
    this.academicEducation = 'Formação Acadêmica';
  }
  ngOnInit() {
    this.academicEducations = this.academicEducationService.getAcademicEducations();
  }
  static #_ = this.ɵfac = function AcademicEducationComponent_Factory(t) {
    return new (t || AcademicEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_academic_education_service__WEBPACK_IMPORTED_MODULE_0__.AcademicEducationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AcademicEducationComponent,
    selectors: [["app-pages-academic-education"]],
    inputs: {
      canShow: "canShow"
    },
    decls: 11,
    vars: 4,
    consts: [[4, "ngIf"], [1, "container", "academic-education-container"], [1, "jumbotron"], [1, "row"], [1, "academic-education-header"], [1, "education-list"], ["class", "education-item", 4, "ngFor", "ngForOf"], [1, "education-item"], [1, "education-period"], [1, "education-institution"], [1, "education-course"]],
    template: function AcademicEducationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AcademicEducationComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AcademicEducationComponent_li_8_Template, 7, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-pages-specialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AcademicEducationComponent_div_10_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.canShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.academicEducation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.academicEducations);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.canShow);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _specialization_specialization_component__WEBPACK_IMPORTED_MODULE_3__.SpecializationComponent],
    styles: [".academic-education-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.academic-education-header[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.education-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.education-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 15px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n}\n\n.education-period[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.education-institution[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n.education-course[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.education-link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.education-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWNhZGVtaWMtZWR1Y2F0aW9uL2FjYWRlbWljLWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmFjYWRlbWljLWVkdWNhdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hY2FkZW1pYy1lZHVjYXRpb24taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVkdWNhdGlvbi1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5lZHVjYXRpb24taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZWR1Y2F0aW9uLXBlcmlvZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZWR1Y2F0aW9uLWluc3RpdHV0aW9uIHtcbiAgICBjb2xvcjogIzY2Njtcbn1cblxuLmVkdWNhdGlvbi1jb3Vyc2Uge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmVkdWNhdGlvbi1saW5rIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5lZHVjYXRpb24tbGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5717:
/*!****************************************************************!*\
  !*** ./src/app/pages/certification/certification.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificationComponent: () => (/* binding */ CertificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_service_certification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/certification.service */ 3941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function CertificationComponent_li_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6)(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const certification_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](certification_r3.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](certification_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", certification_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CertificationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CertificationComponent_li_5_li_4_Template, 8, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const yearGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](yearGroup_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.certifications);
  }
}
class CertificationComponent {
  constructor(certificationService) {
    this.certificationService = certificationService;
    this.certification = 'Certificação';
    this.certifications = [];
  }
  ngOnInit() {
    this.certifications = this.certificationService.getCertificationsCerts();
  }
  static #_ = this.ɵfac = function CertificationComponent_Factory(t) {
    return new (t || CertificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_certification_service__WEBPACK_IMPORTED_MODULE_0__.CertificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CertificationComponent,
    selectors: [["app-pages-certification"]],
    decls: 6,
    vars: 2,
    consts: [[1, "col-sm-12"], [1, "section-title"], [1, "certification-list"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], ["class", "certification-item", 4, "ngFor", "ngForOf"], [1, "certification-item"], ["target", "_blank", 3, "href"]],
    template: function CertificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CertificationComponent_li_5_Template, 5, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.certification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.certifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  margin-bottom: 20px;\n}\n\n.certification-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.certification-item[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 10px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.certification-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.certification-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.certification-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.certification-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2VydGlmaWNhdGlvbi9jZXJ0aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2VydGlmaWNhdGlvbi1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jZXJ0aWZpY2F0aW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNlcnRpZmljYXRpb24taXRlbSBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jZXJ0aWZpY2F0aW9uLWl0ZW0gc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlcnRpZmljYXRpb24taXRlbSBhIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jZXJ0aWZpY2F0aW9uLWl0ZW0gYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3114:
/*!**********************************************************!*\
  !*** ./src/app/pages/curriculum/curriculum.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurriculumComponent: () => (/* binding */ CurriculumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _academic_education_academic_education_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../academic-education/academic-education.component */ 7396);
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../certification/certification.component */ 5717);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experience/experience.component */ 367);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 5177);
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../languages/languages.component */ 2945);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ 7949);
/* harmony import */ var _professional_info_professional_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../professional-info/professional-info.component */ 1062);
/* harmony import */ var _professional_skills_professional_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../professional-skills/professional-skills.component */ 9656);









class CurriculumComponent {
  constructor() {
    this.language = 'Idiomas';
    this.name = 'Ayslla Caroline Prates Gomes';
    this.photoUrl = '../../assets/images/professional/Aysh_Caroline.png';
    this.phone = '(61) 98207-2218';
    this.email = 'ayslla.gomes@outlook.com';
    this.address = 'Planaltina/GO';
    this.resume = 'Resumo';
    this.descriptionResume = `
        Como Arquiteta de Software, estou em constante busca pelo sucesso profissional, alimentada pela minha dedicação, paixão pelo aprendizado e pela minha exigência pessoal.
        Sou uma estudiosa incansável, sempre pronta para mergulhar em novas tecnologias e encarar desafios estimulantes.
        A cada obstáculo, vejo uma oportunidade de crescimento e superação.
        Determinada e comprometida, estou pronta para enfrentar qualquer desafio que a carreira me apresentar.
    `;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function CurriculumComponent_Factory(t) {
    return new (t || CurriculumComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CurriculumComponent,
    selectors: [["app-pages-curriculum"]],
    decls: 25,
    vars: 10,
    consts: [[1, "container"], [1, "jumbotron"], [1, "row"], [1, "header", "col-md-12"], [3, "name", "photoUrl", "phone", "email", "address"], [1, "main-content", "col-sm-8"], [1, "col-sm-12"], [1, "recuo"], [3, "canShow", "canShowPersonalProjects"], [3, "canShow"], [1, "sidebar", "col-sm-4"]],
    template: function CurriculumComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-pages-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-pages-professional-info", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-pages-experience", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-pages-academic-education", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 10)(20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "app-pages-professional-skills")(22, "app-pages-languages")(23, "app-pages-certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "app-pages-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx.name)("photoUrl", ctx.photoUrl)("phone", ctx.phone)("email", ctx.email)("address", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.resume);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.descriptionResume, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("canShow", false)("canShowPersonalProjects", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("canShow", false);
      }
    },
    dependencies: [_academic_education_academic_education_component__WEBPACK_IMPORTED_MODULE_0__.AcademicEducationComponent, _certification_certification_component__WEBPACK_IMPORTED_MODULE_1__.CertificationComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _languages_languages_component__WEBPACK_IMPORTED_MODULE_4__.LanguagesComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _professional_info_professional_info_component__WEBPACK_IMPORTED_MODULE_6__.ProfessionalInfoComponent, _professional_skills_professional_skills_component__WEBPACK_IMPORTED_MODULE_7__.ProfessionalSkillsComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.font18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.recuo[_ngcontent-%COMP%] {\n  text-indent: 4em;\n  margin-top: 10px;\n  text-align: justify;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY3VycmljdWx1bS9jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5qdW1ib3Ryb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9udDE4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWN0LWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJlY3VvIHtcbiAgICB0ZXh0LWluZGVudDo0ZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 367:
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_service_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/company.service */ 7814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 5177);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ 7949);
/* harmony import */ var _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../personal-projects/personal-projects.component */ 8387);






function ExperienceComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-pages-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExperienceComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 3)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10)(6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSrc", experience_r4.logoUrl)("height", experience_r4.logoHeight)("width", experience_r4.logoWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r4.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r4.position);
  }
}
function ExperienceComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-pages-personal-projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExperienceComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-pages-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class ExperienceComponent {
  constructor(companyService) {
    this.companyService = companyService;
    this.canShow = true;
    this.canShowPersonalProjects = true;
    this.experiences = 'Experiências';
    this.experiencesList = [];
  }
  ngOnInit() {
    this.experiencesList = this.companyService.getCompanies();
  }
  static #_ = this.ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_company_service__WEBPACK_IMPORTED_MODULE_0__.CompanyService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-pages-experience"]],
    inputs: {
      canShow: "canShow",
      canShowPersonalProjects: "canShowPersonalProjects"
    },
    decls: 11,
    vars: 5,
    consts: [[4, "ngIf"], [1, "container"], [1, "jumbotron"], [1, "row"], ["class", "col-sm-12", 4, "ngFor", "ngForOf"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-12"], [1, "experience"], [1, "col-sm-3"], ["alt", "Logo Empresa", 1, "logo", "rounded-circle", 3, "ngSrc", "height", "width"], [1, "col-sm-9"], [1, "company"], [1, "date"], [1, "position"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExperienceComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExperienceComponent_div_8_Template, 13, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExperienceComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExperienceComponent_div_10_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.canShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.experiencesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.canShowPersonalProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.canShow);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgOptimizedImage, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_3__.PersonalProjectsComponent],
    styles: ["@charset \"UTF-8\";\n.experiences-container[_ngcontent-%COMP%] {\n  background-color: #f2f2f2; \n\n  padding: 20px; \n\n  border-radius: 10px; \n\n  margin-bottom: 20px; \n\n}\n\n.experience[_ngcontent-%COMP%] {\n  margin-bottom: 20px; \n\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 100%; \n\n  height: auto; \n\n  border-radius: 5px; \n\n}\n\n.company[_ngcontent-%COMP%] {\n  margin-top: 10px; \n\n}\n\n.date[_ngcontent-%COMP%] {\n  font-style: italic; \n\n  color: #888; \n\n}\n\n.position[_ngcontent-%COMP%] {\n  margin-top: 10px; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHlCQUFBLEVBQUEsdUJBQUE7RUFDQSxhQUFBLEVBQUEsNEJBQUE7RUFDQSxtQkFBQSxFQUFBLGlDQUFBO0VBQ0EsbUJBQUEsRUFBQSx5REFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUEsRUFBQSwyQ0FBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQSxFQUFBLDJEQUFBO0VBQ0EsWUFBQSxFQUFBLGlDQUFBO0VBQ0Esa0JBQUEsRUFBQSw0Q0FBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUEsRUFBQSx1REFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUEsRUFBQSw0QkFBQTtFQUNBLFdBQUEsRUFBQSwwQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUEsRUFBQSwyQ0FBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2VzLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgLyogQ29yIGRlIGZ1bmRvIGNpbnphICovXG4gICAgcGFkZGluZzogMjBweDsgLyogQWRpY2lvbmEgZXNwYcODwqdvIGludGVybm8gKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBBZGljaW9uYSBib3JkYXMgYXJyZWRvbmRhZGFzICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRpY2lvbmEgZXNwYcODwqdvIGVudHJlIG8gY29udMODwqppbmVyIGUgb3V0cm9zIGVsZW1lbnRvcyAqL1xufVxuXG4uZXhwZXJpZW5jZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRpY2lvbmEgZXNwYcODwqdvIGVudHJlIGNhZGEgZXhwZXJpw4PCqm5jaWEgKi9cbn1cblxuLmxvZ28ge1xuICAgIG1heC13aWR0aDogMTAwJTsgLyogR2FyYW50ZSBxdWUgYSBsYXJndXJhIGRhIGltYWdlbSBuw4PCo28gZXhjZWRhIG8gY29udGFpbmVyICovXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBNYW50w4PCqW0gYSBwcm9wb3LDg8Knw4PCo28gZGEgaW1hZ2VtICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBBZGljaW9uYSB1bWEgYm9yZGEgYXJyZWRvbmRhZGEgw4PCoCBpbWFnZW0gKi9cbn1cblxuLmNvbXBhbnkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IC8qIEFkaWNpb25hIGVzcGHDg8KnbyBlbnRyZSBvIG5vbWUgZGEgZW1wcmVzYSBlIGEgaW1hZ2VtICovXG59XG5cbi5kYXRlIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IC8qIERlaXhhIGEgZGF0YSBlbSBpdMODwqFsaWNvICovXG4gICAgY29sb3I6ICM4ODg7IC8qIENvciBjaW56YSBwYXJhIGEgZGF0YSAqL1xufVxuXG4ucG9zaXRpb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IC8qIEFkaWNpb25hIGVzcGHDg8KnbyBlbnRyZSBvIGNhcmdvIGUgYSBkYXRhICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5177:
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-pages-footer"]],
    decls: 12,
    vars: 0,
    consts: [[1, "footer", "col-sm-12"], ["rel", "stylesheet", "href", "https://www.linkedin.com/in/ayslla-gomes/", "target", "_blank"], ["ngSrc", "../../../assets/images/logo/linkedin.svg", "alt", "LinkedIn", "height", "16", "width", "16", 1, "logo"], ["href", "https://github.com/AysllaGomes", "target", "_blank"], ["ngSrc", "../../../assets/images/logo/github.svg", "alt", "GitHub", "height", "16", "width", "16", 1, "logo"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Todos os direitos reservados para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u20A2 Ayslla Caroline Prates Gomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgOptimizedImage],
    styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  align-items: center;\n  line-height: 20px;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.font18[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 28px;\n  border-bottom: burlywood 1px;\n}\n\n.cor[_ngcontent-%COMP%] {\n  color: #5b5bce;\n}\n\nimg.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.recuo[_ngcontent-%COMP%] {\n  text-indent: 2em;\n  text-justify: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBSEU7RUFDRSxjQUFBO0FBTUo7O0FBSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVFKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIGg0IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbi5mb250MTh7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBib3JkZXItYm90dG9tOiBidXJseXdvb2QgMXB4O1xuICB9XG4gIC5jb3J7XG4gICAgY29sb3I6ICM1YjViY2U7XG4gIH1cbiAgaW1nLmxvZ297XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5yZWN1byB7IFxuICAgIHRleHQtaW5kZW50OjJlbTtcbiAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2945:
/*!********************************************************!*\
  !*** ./src/app/pages/languages/languages.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagesComponent: () => (/* binding */ LanguagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function LanguagesComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4)(1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r1.nameLevel);
  }
}
class LanguagesComponent {
  constructor() {
    this.language = 'Idiomas';
    this.languages = [{
      name: "Português",
      nameLevel: "Nativo",
      level: 'C2'
    }, {
      name: "Inglês",
      nameLevel: "Intermediário",
      level: 'B1'
    }, {
      name: "Espanhol",
      nameLevel: "Intermediário",
      level: 'B1'
    }, {
      name: "Francês",
      nameLevel: "Básico",
      level: 'A1'
    }, {
      name: "Eslovaco",
      nameLevel: "Básico",
      level: 'A1'
    }];
  }
  ngOnInit() {
    this.languages.sort((a, b) => {
      const levels = {
        'C2': 6,
        'C1': 5,
        'B2': 4,
        'B1': 3,
        'A2': 2,
        'A1': 1
      };
      const levelComparison = levels[b.level] - levels[a.level];
      if (levelComparison === 0) {
        return a.nameLevel.localeCompare(b.nameLevel);
      }
      return levelComparison;
    });
  }
  static #_ = this.ɵfac = function LanguagesComponent_Factory(t) {
    return new (t || LanguagesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LanguagesComponent,
    selectors: [["app-pages-languages"]],
    decls: 6,
    vars: 2,
    consts: [[1, "col-sm-12"], [1, "section-title"], [1, "language-list"], ["class", "language-item", 4, "ngFor", "ngForOf"], [1, "language-item"], [1, "language-info"], [1, "language-name"], [1, "language-level"]],
    template: function LanguagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LanguagesComponent_li_5_Template, 6, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".section-title[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.language-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.language-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.language-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.language-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.language-level[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFuZ3VhZ2UtbGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5sYW5ndWFnZS1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFuZ3VhZ2UtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sYW5ndWFnZS1uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxhbmd1YWdlLWxldmVsIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7949:
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NavbarComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-pages-navbar"]],
    decls: 12,
    vars: 0,
    consts: [[1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/", 1, "nav-link"], ["href", "/experiencia", 1, "nav-link"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Curr\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Experi\u00EAncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["@charset \"UTF-8\";\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: none; \n\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-color: #333; \n\n}\n\n\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #333; \n\n  transition: color 0.3s; \n\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #007bff; \n\n}\n\n\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  background-color: #f8f9fa; \n\n  border-top: 1px solid #dee2e6; \n\n  padding-top: 10px; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxZQUFBLEVBQUEsMkJBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBLEVBQUEsMEJBQUE7QUFFSjs7QUFDQSwrQ0FBQTtBQUNBO0VBQ0ksV0FBQSxFQUFBLGtCQUFBO0VBQ0Esc0JBQUEsRUFBQSxrQ0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQSxFQUFBLGtDQUFBO0FBRUo7O0FBQ0EsK0RBQUE7QUFDQTtFQUNJLHlCQUFBLEVBQUEsaUJBQUE7RUFDQSw2QkFBQSxFQUFBLGlDQUFBO0VBQ0EsaUJBQUEsRUFBQSxzQ0FBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlciBhIGJvcmRhIHBhZHLDg8KjbyAqL1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBDb3IgZG8gw4PCrWNvbmUgZG8gYm90w4PCo28gKi9cclxufVxyXG5cclxuLyogRXN0aWxvIHBhcmEgb3MgbGlua3MgbmEgYmFycmEgZGUgbmF2ZWdhw4PCp8ODwqNvICovXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogIzMzMzsgLyogQ29yIGRvcyBsaW5rcyAqL1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zczsgLyogQWRpY2lvbmFyIHVtYSB0cmFuc2nDg8Knw4PCo28gc3VhdmUgKi9cclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmOyAvKiBDb3IgZG8gbGluayBhbyBwYXNzYXIgbyBtb3VzZSAqL1xyXG59XHJcblxyXG4vKiBFc3RpbG8gcGFyYSBvIGZ1bmRvIGRhIGJhcnJhIGRlIG5hdmVnYcODwqfDg8KjbyBxdWFuZG8gZXhwYW5kaWRhICovXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgLyogQ29yIGRlIGZ1bmRvICovXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjsgLyogQWRpY2lvbmFyIHVtYSBib3JkYSBzdXBlcmlvciAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IC8qIEFkaWNpb25hciB1bSBlc3Bhw4PCp2FtZW50byBzdXBlcmlvciAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8387:
/*!************************************************************************!*\
  !*** ./src/app/pages/personal-projects/personal-projects.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalProjectsComponent: () => (/* binding */ PersonalProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_service_personal_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/personal-project.service */ 7474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function PersonalProjectsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ver projeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class PersonalProjectsComponent {
  constructor(personalProjectService) {
    this.personalProjectService = personalProjectService;
    this.canShowPersonalProjects = true;
    this.personalProjects = 'Projetos Pessoais';
    this.personalProjectsList = [];
  }
  ngOnInit() {
    this.personalProjectsList = this.personalProjectService.getPersonalProjects();
  }
  static #_ = this.ɵfac = function PersonalProjectsComponent_Factory(t) {
    return new (t || PersonalProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_personal_project_service__WEBPACK_IMPORTED_MODULE_0__.PersonalProjectService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PersonalProjectsComponent,
    selectors: [["app-pages-personal-projects"]],
    inputs: {
      canShowPersonalProjects: "canShowPersonalProjects"
    },
    decls: 6,
    vars: 2,
    consts: [[1, "container"], [1, "row"], ["class", "col-sm-12", "style", "margin-bottom: 20px;", 4, "ngFor", "ngForOf"], [1, "col-sm-12", 2, "margin-bottom", "20px"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"]],
    template: function PersonalProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0)(4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PersonalProjectsComponent_div_5_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.personalProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.personalProjectsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 10px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #b8b9b9;\n  border-color: #b8b9b9;\n  color: black;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #b8b9b9;\n  border-color: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGVyc29uYWwtcHJvamVjdHMvcGVyc29uYWwtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICBjb2xvcjogIzY2Njtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjliOTtcbiAgICBib3JkZXItY29sb3I6ICNiOGI5Yjk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOWI5O1xuICAgIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1062:
/*!************************************************************************!*\
  !*** ./src/app/pages/professional-info/professional-info.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfessionalInfoComponent: () => (/* binding */ ProfessionalInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


class ProfessionalInfoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ProfessionalInfoComponent_Factory(t) {
    return new (t || ProfessionalInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfessionalInfoComponent,
    selectors: [["app-pages-professional-info"]],
    inputs: {
      name: "name",
      photoUrl: "photoUrl",
      phone: "phone",
      email: "email",
      address: "address"
    },
    decls: 20,
    vars: 7,
    consts: [[1, "col-md-12"], [1, "row"], [1, "col-sm-3"], ["alt", "Foto de perfil", 1, "profile-photo", 3, "ngSrc", "width", "height"], [1, "col-sm-9", "align-self-center"], [1, "font18"], [1, "contact-info"]],
    template: function ProfessionalInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "p")(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Celular:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p")(13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p")(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Endere\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSrc", ctx.photoUrl)("width", 200)("height", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.address, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgOptimizedImage],
    styles: [".profile-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-right: 20px;\n  margin-bottom: 10px;\n}\n\n.font18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.contact-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.contact-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmVzc2lvbmFsLWluZm8vcHJvZmVzc2lvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waG90byB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9udDE4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWN0LWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvbnRhY3QtaW5mbyBzdHJvbmcge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uY29udGFjdC1pbmZvIHNwYW4ge1xuICAgIGNvbG9yOiAjNjY2O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9656:
/*!****************************************************************************!*\
  !*** ./src/app/pages/professional-skills/professional-skills.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfessionalSkillsComponent: () => (/* binding */ ProfessionalSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function ProfessionalSkillsComponent_li_4_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
  }
}
function ProfessionalSkillsComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfessionalSkillsComponent_li_4_li_4_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skillGroup_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skillGroup_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skillGroup_r1.skills);
  }
}
class ProfessionalSkillsComponent {
  constructor() {
    this.professionalSkills = 'Competências Profissionais';
    this.skillGroups = [{
      title: 'Linguagens',
      skills: ['PhP', 'Java', 'C#', 'CSS3', 'SASS', 'HTML5', 'JavaScript', 'TypeScript', 'GraphQL', 'Kotlin']
    }, {
      title: 'Frameworks',
      skills: ['Symfony', 'Laravel', 'Spring', 'Angular 2+', 'Angular JS', 'PrimeNg', 'PrimeFaces', 'Angular Material', 'React', 'Zend', 'Vue']
    }, {
      title: 'Tecnologia',
      skills: ['Docker', 'Maven', 'Jenkins', 'iReport', 'Liquibase', 'Bootsrap', 'MySQL', 'MongoDB', 'PostgreSQL', 'Oracle Database', 'Microsoft SQL Server', 'Android Studio', 'Rancher', 'Node.js', 'Grafeno', 'Kafka', 'RabbitMQ', 'Kubernetes']
    }, {
      title: 'Design',
      skills: ['Frontend', 'Reponsive', 'CodeDesign', 'UX/UI']
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ProfessionalSkillsComponent_Factory(t) {
    return new (t || ProfessionalSkillsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfessionalSkillsComponent,
    selectors: [["app-pages-professional-skills"]],
    decls: 5,
    vars: 2,
    consts: [[1, "section-title"], [1, "skill-groups"], ["class", "skill-group", 4, "ngFor", "ngForOf"], [1, "skill-group"], [1, "group-title"], [1, "skills"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"]],
    template: function ProfessionalSkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfessionalSkillsComponent_li_4_Template, 5, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.professionalSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillGroups);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".section-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n}\n\n.skill-groups[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.skill-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.group-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: #666;\n}\n\n.skills[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.skill[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 5px;\n  display: inline-block;\n  padding: 5px 10px;\n  background-color: #f0f0f0;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmVzc2lvbmFsLXNraWxscy9wcm9mZXNzaW9uYWwtc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uc2tpbGwtZ3JvdXBzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5za2lsbC1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmdyb3VwLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi5za2lsbHMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNraWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6160:
/*!******************************************************************!*\
  !*** ./src/app/pages/specialization/specialization.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecializationComponent: () => (/* binding */ SpecializationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_service_certification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/certification.service */ 3941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function SpecializationComponent_div_3_li_2_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const certification_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](certification_r5.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](certification_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", certification_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    "d-none": a0
  };
};
function SpecializationComponent_div_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpecializationComponent_div_3_li_2_Template_h6_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const yearGroup_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.toggleCollapse(yearGroup_r3.year));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SpecializationComponent_div_3_li_2_li_4_Template, 8, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const yearGroup_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](yearGroup_r3.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, !yearGroup_r3.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", yearGroup_r3.certifications);
  }
}
function SpecializationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpecializationComponent_div_3_li_2_Template, 5, 5, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.groupedCertifications);
  }
}
function SpecializationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nenhuma especializa\u00E7\u00E3o encontrada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class SpecializationComponent {
  constructor(certificationService) {
    this.certificationService = certificationService;
    this.specialization = 'Especializações';
    this.certifications = [];
    this.groupedCertifications = [];
  }
  ngOnInit() {
    this.certifications = this.certificationService.getCertifications();
    this.groupedCertifications = this.groupCertificationsByYear(this.certifications);
  }
  groupCertificationsByYear(certifications) {
    const groupedCertifications = [];
    certifications.forEach(certification => {
      const year = certification.year;
      const existingGroup = groupedCertifications.find(group => group.year === year);
      if (existingGroup) {
        existingGroup.certifications.push(certification);
      } else {
        groupedCertifications.push({
          year: year,
          certifications: [certification]
        });
      }
    });
    groupedCertifications.sort((a, b) => b.year - a.year);
    return groupedCertifications;
  }
  toggleCollapse(year) {
    this.groupedCertifications.forEach(group => {
      if (group.year === year) {
        group.expanded = !group.expanded;
      } else {
        group.expanded = false;
      }
    });
  }
  static #_ = this.ɵfac = function SpecializationComponent_Factory(t) {
    return new (t || SpecializationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_certification_service__WEBPACK_IMPORTED_MODULE_0__.CertificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SpecializationComponent,
    selectors: [["app-pages-specialization"]],
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "cursor-pointer", 3, "click"], [3, "ngClass"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"]],
    template: function SpecializationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SpecializationComponent_div_3_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SpecializationComponent_div_4_Template, 3, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.specialization);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.certifications.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.certifications.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n  margin-bottom: 20px;\n}\n\n.timeline-item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -10px;\n  width: 4px;\n  height: 100%;\n  background-color: #007bff; \n\n}\n\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.timeline-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.timeline-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.timeline-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff; \n\n  text-decoration: none;\n}\n\n.timeline-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3BlY2lhbGl6YXRpb24vc3BlY2lhbGl6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQSxFQUFBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQSxFQUFBLGdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50aW1lbGluZS1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZWxpbmUtaXRlbTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBDb3IgZGEgbGluaGEgZGEgdGltZWxpbmUgKi9cbn1cblxuLnRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpbWVsaW5lLWl0ZW0gcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGltZWxpbmUtaXRlbSBoNiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRpbWVsaW5lLWl0ZW0gYSB7XG4gICAgY29sb3I6ICMwMDdiZmY7IC8qIENvciBkbyBsaW5rICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGltZWxpbmUtaXRlbSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1789:
/*!**************************************************************!*\
  !*** ./src/app/shared/service/academic-education.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcademicEducationService: () => (/* binding */ AcademicEducationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AcademicEducationService {
  getAcademicEducations() {
    return [{
      period: '2018 - 2022',
      institution: 'Centro Universitário do Distrito Federal | UDF',
      course: 'Sistemas de Informação',
      url: 'https://example.com/sistemas-de-informacao'
    }];
  }
  static #_ = this.ɵfac = function AcademicEducationService_Factory(t) {
    return new (t || AcademicEducationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AcademicEducationService,
    factory: AcademicEducationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3941:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/certification.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificationService: () => (/* binding */ CertificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CertificationService {
  getCertifications() {
    return [{
      year: 2012,
      provider: 'Kadoche',
      title: 'Corel Draw X4 e AUTOCAD',
      url: '../../../assets/certifications/Kadoche/Win7_Digitacao_PackOffice_CorelDraw_3DSMax_AutoCAD.pdf'
    }, {
      year: 2013,
      provider: 'Kadoche',
      title: 'Montagem e Configuração de Microcomputadores & Configurações de Softwares',
      url: '../../../assets/certifications/Kadoche/Montagem_e_Configuracao_de_Microcomputadores_e_Instalacoes_de_Softwares.pdf'
    }, {
      year: 2018,
      provider: 'Udemy',
      title: 'HTML5, CCS3 e Javascript',
      url: '../../../assets/certifications/Udemy/HTML_5_CSS_3_Javascript.pdf'
    }, {
      year: 2019,
      provider: 'Udemy',
      title: 'Firebase',
      url: '../../../assets/certifications/Udemy/Firebase.pdf'
    }, {
      year: 2019,
      provider: 'CertiProf',
      title: 'SCRUM Foundation',
      url: '../../../assets/certifications/CertiProf/Certificate_SCRUM.pdf'
    }, {
      year: 2021,
      provider: 'Origamid',
      title: 'Automação Front com o NPM',
      url: '../../../assets/certifications/Origamid/Automacao_Front_End_com_NPM.pdf'
    }, {
      year: 2021,
      provider: 'Origamid',
      title: 'CSS com SASS',
      url: '../../../assets/certifications/Origamid/CSS_SASS.pdf'
    }, {
      year: 2021,
      provider: 'Origamid',
      title: 'CSS Flexbox',
      url: '../../../assets/certifications/Origamid/CSS_Flexbox.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'CSS Avançado - Posicionamento',
      url: '../../../assets/certifications/Origamid/CSS_Avancado_Posicionamento.pdf'
    }, {
      year: 2022,
      provider: 'Udemy',
      title: 'Angular, .NET Core Web API e Angular Material',
      url: '../../../assets/certifications/Udemy/Angular_.NET_Core_Web_API_e_Angular_Material.pdf'
    }, {
      year: 2022,
      provider: 'Udemy',
      title: 'Visual Basic .NET',
      url: '../../../assets/certifications/Udemy/Visual_Basic_.NET.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'CSS Grid Layout',
      url: '../../../assets/certifications/Origamid/CSS_Grid_Layout.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'JavaScript 6',
      url: '../../../assets/certifications/Origamid/JavaScript_ES6.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'Tipografia Avançada',
      url: '../../../assets/certifications/Origamid/Tipografia_Avancada.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'UI Design Avançado',
      url: '../../../assets/certifications/Origamid/UI_Design_Avancado.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'UX Design Heurísticas',
      url: '../../../assets/certifications/Origamid/UX_Design_Heuristicas.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'Vue.js 2',
      url: '../../../assets/certifications/Origamid/Vuejs.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'WordPress Como CMS',
      url: '../../../assets/certifications/Origamid/WordPress_CMS.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'WordPress REST API',
      url: '../../../assets/certifications/Origamid/WordPress_REST_API.pdf'
    }, {
      year: 2022,
      provider: 'Origamid',
      title: 'Web Design Completo',
      url: '../../../assets/certifications/Origamid/Web_Design_Completo.pdf'
    }, {
      year: 2024,
      provider: 'Udemy',
      title: 'OutSystems Reactive',
      url: '../../../assets/certifications/Udemy/Ayslla_Gomes_Udemy_OutSystems_Reactive.pdf'
    }];
  }
  getCertificationsCerts() {
    return [{
      year: 2019,
      provider: 'CertiProf',
      title: 'SCRUM Foundation',
      url: '../../../assets/certifications/CertiProf/Certificate_SCRUM.pdf'
    }];
  }
  static #_ = this.ɵfac = function CertificationService_Factory(t) {
    return new (t || CertificationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CertificationService,
    factory: CertificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7814:
/*!***************************************************!*\
  !*** ./src/app/shared/service/company.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyService: () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CompanyService {
  getCompanies() {
    return [{
      company: 'IBM',
      date: 'Junho 2022 - Atualmente',
      position: 'Banco do Brasil',
      logoUrl: '../../../assets/images/logo/ibm.svg',
      logoHeight: 100,
      logoWidth: 100
    }, {
      company: 'EngeSoftware Tecnologia S/A',
      date: 'Junho 2022 - Dezembro 2020',
      position: 'Banco do Brasil',
      logoUrl: '../../../assets/images/logo/engesoftware.jpeg',
      logoHeight: 100,
      logoWidth: 100
    }, {
      company: 'Life Tecnologia e Consultoria LTDA',
      date: 'Fevereiro 2019 - Junho 2021',
      position: 'Ministério da Economia',
      logoUrl: '../../../assets/images/logo/life_consultoria_tecnologia.webp',
      logoHeight: 100,
      logoWidth: 100
    }, {
      company: 'Basis Tecnologia da Informação LTDA',
      date: 'Setembro 2018 - Fevereiro 2019',
      position: 'MDIC, MPOG, FNDE, MCID, MTE',
      logoUrl: '../../../assets/images/logo/basis_tecnologia.jpeg',
      logoHeight: 100,
      logoWidth: 100
    }];
  }
  static #_ = this.ɵfac = function CompanyService_Factory(t) {
    return new (t || CompanyService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CompanyService,
    factory: CompanyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7474:
/*!************************************************************!*\
  !*** ./src/app/shared/service/personal-project.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalProjectService: () => (/* binding */ PersonalProjectService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PersonalProjectService {
  getPersonalProjects() {
    return [{
      name: 'Interstate Mobility Center',
      description: 'Interstate',
      url: 'https://github.com/AysllaGomes/interstate-mobility-center'
    }, {
      name: 'React Hooks',
      description: 'O ojetivo do projeto é realizar customizações com o ciclo de vida do React, deixando-o mais bem perfomático possível. E agregar mais conhecimento para futuras aplicações.',
      url: 'https://github.com/AysllaGomes/react-hooks'
    }, {
      name: 'UI Controle Financeiro',
      url: 'https://github.com/AysllaGomes/financeiro-ui'
    }, {
      name: 'Controle Financeiro',
      url: 'https://github.com/AysllaGomes/controle-financeiro'
    }, {
      name: 'Red Switch',
      url: 'https://github.com/AysllaGomes/red-switch-realistic'
    }, {
      name: 'API PetShop',
      url: 'https://github.com/AysllaGomes/petshop'
    }, {
      name: 'Ceep',
      description: 'Aplicativo de notas para Android',
      url: 'https://github.com/AysllaGomes/ceep'
    }, {
      name: 'Agenda',
      description: 'Aplicativo de agenda para Android',
      url: 'https://github.com/AysllaGomes/agenda'
    }];
  }
  static #_ = this.ɵfac = function PersonalProjectService_Factory(t) {
    return new (t || PersonalProjectService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PersonalProjectService,
    factory: PersonalProjectService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map