(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+FsF":
/*!****************************************************************!*\
  !*** ./src/app/accidenTracking/services/supervisor.service.ts ***!
  \****************************************************************/
/*! exports provided: SupervisorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorService", function() { return SupervisorService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "TBG0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SupervisorService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(http) {
        super('supervisor', http);
    }
}
SupervisorService.ɵfac = function SupervisorService_Factory(t) { return new (t || SupervisorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SupervisorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SupervisorService, factory: SupervisorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+I5I":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/accident-tracking/create-accident-tracking/create-accident-tracking.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CreateAccidentTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccidentTrackingComponent", function() { return CreateAccidentTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_accidenTracking_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/accidenTracking/services/upload.service */ "regq");
/* harmony import */ var src_app_accidenTracking_services_accident_tracking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/accidenTracking/services/accident-tracking.service */ "VdgT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function CreateAccidentTrackingComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateAccidentTrackingComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateAccidentTrackingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateAccidentTrackingComponent_form_4_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.name);
} }
function CreateAccidentTrackingComponent_form_4_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.name);
} }
function CreateAccidentTrackingComponent_form_4_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r17.name, " ");
} }
function CreateAccidentTrackingComponent_form_4_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r18._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r18.name);
} }
function CreateAccidentTrackingComponent_form_4_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r19._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.name);
} }
function CreateAccidentTrackingComponent_form_4_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r20._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r20.name);
} }
function CreateAccidentTrackingComponent_form_4_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r21._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r21.name);
} }
function CreateAccidentTrackingComponent_form_4_div_54_div_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r27._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r27.name);
} }
function CreateAccidentTrackingComponent_form_4_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Plan de accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateAccidentTrackingComponent_form_4_div_54_div_1_mat_option_5_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "mat-datepicker-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-datepicker", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateAccidentTrackingComponent_form_4_div_54_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.removeActionPlan(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r24.groupActionPlan(i_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r24.data.typeActionPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r26);
} }
function CreateAccidentTrackingComponent_form_4_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CreateAccidentTrackingComponent_form_4_div_54_div_1_Template, 16, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.loading);
} }
function CreateAccidentTrackingComponent_form_4_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Evidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("href", ctx_r14.user.pdf, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CreateAccidentTrackingComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Fecha del reporte de seguimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CreateAccidentTrackingComponent_form_4_mat_option_12_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Empresa Involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Andres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CreateAccidentTrackingComponent_form_4_mat_option_19_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CreateAccidentTrackingComponent_form_4_mat_option_24_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Actividad involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CreateAccidentTrackingComponent_form_4_mat_option_33_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Clasificacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CreateAccidentTrackingComponent_form_4_mat_option_38_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Parte del cuerpo involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CreateAccidentTrackingComponent_form_4_mat_option_43_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Tipo de lesion/da\u00F1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, CreateAccidentTrackingComponent_form_4_mat_option_48_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Plan de accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateAccidentTrackingComponent_form_4_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.addActionPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Agregar plan de accion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, CreateAccidentTrackingComponent_form_4_div_54_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Evidencia .pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, CreateAccidentTrackingComponent_form_4_div_60_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateAccidentTrackingComponent_form_4_Template_input_change_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.fileSeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateAccidentTrackingComponent_form_4_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.OnSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.accidentTrackingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.contractors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.companyInvolveds);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.areas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.activityInvolveds);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.classifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.injuredBodyParts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.injuredTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.actionPlanArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.accidentTrackingForm.valid);
} }
class CreateAccidentTrackingComponent {
    constructor(_fb, router, uploadService, _accidentTrackingService) {
        this._fb = _fb;
        this.router = router;
        this.uploadService = uploadService;
        this._accidentTrackingService = _accidentTrackingService;
        this.allowDelete = false;
        this.loading = true;
        this.maxActionPlan = true;
        this.accidentTrackingForm = this._fb.group({
            date: [Date.now(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contractor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyInvolved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            activityInvolved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            classification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            injuredBodyPart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            injuredType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionPlanArray: this._fb.array([
                this._fb.group({
                    actionPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    dateCompliance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    number: [''],
                }),
            ]),
        });
        this.title = 'Crear seguimiento de accidente';
        this._accidentTrackingService.getInfoForCreate().subscribe((data) => {
            this.data = data;
            this.loading = false;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err, 'error');
        });
    }
    get actionPlanArray() {
        return this.accidentTrackingForm.get('actionPlanArray');
    }
    groupActionPlan(i) {
        return this.actionPlanArray.controls[i];
    }
    addActionPlan() {
        this.actionPlanArray.push(this._fb.group({
            actionPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateCompliance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            number: [''],
        }));
        if (this.actionPlanArray.length >= 7) {
            this.maxActionPlan = true;
        }
    }
    removeActionPlan(item) {
        this.actionPlanArray.removeAt(item);
    }
    fileSeleted(event) {
        this.file = event.target.files[0];
    }
    OnSubmit() {
        const data = this.accidentTrackingForm.value;
        this._accidentTrackingService.create(data).subscribe((d) => {
            if (this.file) {
                this.uploadService.uploadPdf(this.file).subscribe((url) => {
                    const complete = d;
                    complete.pdf = url.msg;
                    const { _id } = complete, dataRes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(complete, ["_id"]);
                    this._accidentTrackingService.update(_id, dataRes).subscribe((p) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.close();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
                    });
                }, err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
                    this.router.navigateByUrl('/accidentes/seguimientoAccidentes');
                });
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    delete() { }
    download() { }
}
CreateAccidentTrackingComponent.ɵfac = function CreateAccidentTrackingComponent_Factory(t) { return new (t || CreateAccidentTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_accident_tracking_service__WEBPACK_IMPORTED_MODULE_6__["AccidentTrackingService"])); };
CreateAccidentTrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateAccidentTrackingComponent, selectors: [["app-create-accident-tracking"]], decls: 5, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "spinner-container", 4, "ngIf"], ["class", "example-form", 3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "spinner-container"], [1, "example-form", 3, "formGroup"], ["appearance", "fill"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "contractor"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "companyInvolved", "placeholder", "Empresa involucrada"], ["value", "jose"], ["formControlName", "area"], [1, "example-full-width"], ["matInput", "", "formControlName", "description"], ["formControlName", "activityInvolved"], ["formControlName", "classification"], ["formControlName", "injuredBodyPart"], ["formControlName", "injuredType"], ["formArrayName", "actionPlanArray"], ["mat-flat-button", "", "color", "primary", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["placeholder", "Placeholder", "type", "file", "accept", ".pdf", 3, "change"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [3, "value"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["formControlName", "actionPlan"], ["matInput", "", "formControlName", "dateCompliance", 3, "matDatepicker"], ["mat-fab", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "target", "_blank"]], template: function CreateAccidentTrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreateAccidentTrackingComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateAccidentTrackingComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CreateAccidentTrackingComponent_form_4_Template, 64, 13, "form", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hY2NpZGVudC10cmFja2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiY3JlYXRlLWFjY2lkZW50LXRyYWNraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "+ekv":
/*!*******************************************************************************!*\
  !*** ./src/app/accidenTracking/components/contractor/contractor.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContractorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorComponent", function() { return ContractorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ContractorComponent {
}
ContractorComponent.ɵfac = function ContractorComponent_Factory(t) { return new (t || ContractorComponent)(); };
ContractorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContractorComponent, selectors: [["app-contractor"]], decls: 1, vars: 0, template: function ContractorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "+mlw":
/*!********************************************************************!*\
  !*** ./src/app/accidenTracking/services/evidenceReport.service.ts ***!
  \********************************************************************/
/*! exports provided: EvidenceReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReportService", function() { return EvidenceReportService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "TBG0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EvidenceReportService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(http) {
        super('evidenceReport', http);
    }
    getInfoForCreate() {
        return this.http.get(this.baseUrl + '/create');
    }
}
EvidenceReportService.ɵfac = function EvidenceReportService_Factory(t) { return new (t || EvidenceReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EvidenceReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvidenceReportService, factory: EvidenceReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "//SH":
/*!***********************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/activity-involved/create/create-activity-involved.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CreateActivityInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActivityInvolvedComponent", function() { return CreateActivityInvolvedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_activity_involved_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/activity-involved.service */ "hknc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = ["class", "component"];
function CreateActivityInvolvedComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateActivityInvolvedComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateActivityInvolvedComponent {
    constructor(activityInvolvedService, fb) {
        this.activityInvolvedService = activityInvolvedService;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Crear actividad involucrada';
        this.contractors = [];
        this.activityInvolvedService.get().subscribe((data) => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.activityInvolvedService.create(data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() { }
    delete() { }
}
CreateActivityInvolvedComponent.ɵfac = function CreateActivityInvolvedComponent_Factory(t) { return new (t || CreateActivityInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_activity_involved_service__WEBPACK_IMPORTED_MODULE_3__["ActivityInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateActivityInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateActivityInvolvedComponent, selectors: [["app-create-activity-involved", 8, "component"]], attrs: _c0, decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateActivityInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateActivityInvolvedComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateActivityInvolvedComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "/xDQ":
/*!*******************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/company-involved/index/index-company-involved.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: IndexCompanyInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexCompanyInvolvedComponent", function() { return IndexCompanyInvolvedComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_company_involved_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company-involved.service */ "GuJl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexCompanyInvolvedComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Empresa Involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexCompanyInvolvedComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexCompanyInvolvedComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexCompanyInvolvedComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexCompanyInvolvedComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexCompanyInvolvedComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexCompanyInvolvedComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexCompanyInvolvedComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexCompanyInvolvedComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexCompanyInvolvedComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexCompanyInvolvedComponent {
    constructor(companyInvolvedService, _router) {
        this.companyInvolvedService = companyInvolvedService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Empresa involucrada';
        this.displayedColumns = ['Empresa Involucrada'];
        this.companyInvolvedService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.companyInvolvedService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.companyInvolvedService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/empresaInvolucrada/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexCompanyInvolvedComponent.ɵfac = function IndexCompanyInvolvedComponent_Factory(t) { return new (t || IndexCompanyInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_company_involved_service__WEBPACK_IMPORTED_MODULE_2__["CompanyInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexCompanyInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexCompanyInvolvedComponent, selectors: [["app-index-activity-involved"]], viewQuery: function IndexCompanyInvolvedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Empresa Involucrada"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexCompanyInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexCompanyInvolvedComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexCompanyInvolvedComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexCompanyInvolvedComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWNvbXBhbnktaW52b2x2ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoiaW5kZXgtY29tcGFueS1pbnZvbHZlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\Work\HSE\Project\frotend\src\main.ts */"zUnb");


/***/ }),

/***/ "0S4W":
/*!*********************************************************************!*\
  !*** ./src/app/accidenTracking/components/areas/areas.component.ts ***!
  \*********************************************************************/
/*! exports provided: AreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasComponent", function() { return AreasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AreasComponent {
}
AreasComponent.ɵfac = function AreasComponent_Factory(t) { return new (t || AreasComponent)(); };
AreasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreasComponent, selectors: [["app-areas"]], decls: 1, vars: 0, template: function AreasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "1frv":
/*!*******************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/activity-involved/edit/edit-activity-involved.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditActivityInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActivityInvolvedComponent", function() { return EditActivityInvolvedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_activity_involved_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/activity-involved.service */ "hknc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditActivityInvolvedComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditActivityInvolvedComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditActivityInvolvedComponent {
    constructor(activityInvolvedService, fb, route, router) {
        this.activityInvolvedService = activityInvolvedService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar plan de accion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.activityInvolvedService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.activityInvolvedService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.activityInvolvedService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditActivityInvolvedComponent.ɵfac = function EditActivityInvolvedComponent_Factory(t) { return new (t || EditActivityInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_activity_involved_service__WEBPACK_IMPORTED_MODULE_3__["ActivityInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditActivityInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditActivityInvolvedComponent, selectors: [["app-create-activity-involved"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditActivityInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditActivityInvolvedComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditActivityInvolvedComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "2DHX":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/type-injury/edit/edit-type-injury.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditTypeInjuryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTypeInjuryComponent", function() { return EditTypeInjuryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_injured_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/injured-type.service */ "5CqF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditTypeInjuryComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTypeInjuryComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditTypeInjuryComponent {
    constructor(service, fb, route, router) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar tipo de lesion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.service.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.service.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditTypeInjuryComponent.ɵfac = function EditTypeInjuryComponent_Factory(t) { return new (t || EditTypeInjuryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_injured_type_service__WEBPACK_IMPORTED_MODULE_3__["InjuredTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditTypeInjuryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditTypeInjuryComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditTypeInjuryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditTypeInjuryComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditTypeInjuryComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "2Dms":
/*!***************************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/evidenceReport/editEvidenceReport/edit-evidenceReport.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditEvidenceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEvidenceReportComponent", function() { return EditEvidenceReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_evidenceReport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/accidenTracking/services/evidenceReport.service */ "+mlw");
/* harmony import */ var src_app_accidenTracking_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/accidenTracking/services/upload.service */ "regq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function EditEvidenceReportComponent_form_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.name);
} }
function EditEvidenceReportComponent_form_2_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.name);
} }
function EditEvidenceReportComponent_form_2_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r12._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12.name);
} }
function EditEvidenceReportComponent_form_2_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r13.name);
} }
function EditEvidenceReportComponent_form_2_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.name);
} }
function EditEvidenceReportComponent_form_2_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.name);
} }
function EditEvidenceReportComponent_form_2_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.name);
} }
function EditEvidenceReportComponent_form_2_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("src", ctx_r9.dataActual.photoUnsafeCondition, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EditEvidenceReportComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EditEvidenceReportComponent_form_2_mat_option_5_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Empresa observada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditEvidenceReportComponent_form_2_mat_option_10_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EditEvidenceReportComponent_form_2_mat_option_15_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EditEvidenceReportComponent_form_2_mat_option_20_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Observacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Potencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EditEvidenceReportComponent_form_2_mat_option_29_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Actividad involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, EditEvidenceReportComponent_form_2_mat_option_34_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, EditEvidenceReportComponent_form_2_mat_option_39_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Fecha de cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "mat-datepicker", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Registro Fotografico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, EditEvidenceReportComponent_form_2_div_52_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EditEvidenceReportComponent_form_2_Template_input_change_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.fileSeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Abierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Cerrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Observaciones (Comentarios)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEvidenceReportComponent_form_2_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.OnSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.supervisor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.companyObserved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.contractor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.potential);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.activityInvolved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
} }
class EditEvidenceReportComponent {
    constructor(fb, service, uploadService, route) {
        this.fb = fb;
        this.service = service;
        this.uploadService = uploadService;
        this.route = route;
        this.edit = true;
        this.idActual = this.route.snapshot.params.id;
        this.title = 'Reporte de evidencia';
        this.loading = true;
        this.service.getInfoForCreate().subscribe((data) => {
            this.dataForm = data.items;
            this.service.getById(this.idActual).subscribe(dataActual => {
                this.dataActual = dataActual.items;
                this.initForm();
            });
        });
    }
    fileSeleted(event) {
        this.file = event.target.files[0];
    }
    initForm() {
        this.form = this.fb.group({
            supervisor: [this.dataActual.supervisor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyObserved: [this.dataActual.companyObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contractor: [this.dataActual.contractor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            area: [this.dataActual.area, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observation: [this.dataActual.observation, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            potential: [this.dataActual.potential, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            activityInvolved: [this.dataActual.activityInvolved, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: [this.dataActual.city, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            closingDate: [this.dataActual.closingDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observations: [this.dataActual.observations,],
            status: [this.dataActual.status, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            imgOld: [this.dataActual.photoUnsafeCondition,]
        });
        this.loading = false;
    }
    OnSubmit() {
        this.service.update(this.idActual, this.form.value).subscribe((data) => {
            if (this.file) {
                let imgOld = this.form.value.imgOld.split('/');
                imgOld = imgOld[imgOld.length - 1];
                this.uploadService.updateImage(imgOld, this.file).subscribe((url) => {
                    const _a = data.items, { _id } = _a, resData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["_id"]);
                    resData.photoUnsafeCondition = url.msg;
                    this.service.update(_id, resData).subscribe((dataUpdated) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
                    });
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
}
EditEvidenceReportComponent.ɵfac = function EditEvidenceReportComponent_Factory(t) { return new (t || EditEvidenceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_evidenceReport_service__WEBPACK_IMPORTED_MODULE_4__["EvidenceReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
EditEvidenceReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditEvidenceReportComponent, selectors: [["app-edit-evidenceReport"]], decls: 3, vars: 2, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "supervisor"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "companyObserved"], ["formControlName", "contractor"], ["formControlName", "area"], ["matInput", "", "formControlName", "observation"], ["formControlName", "potential"], ["formControlName", "activityInvolved"], ["formControlName", "city"], ["matInput", "", "formControlName", "closingDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["placeholder", "Placeholder", "type", "file", "accept", ".jpg,.jpeg,.png", 3, "change"], ["formControlName", "status"], ["value", "ABIERTO"], ["value", "CERRADO"], ["matInput", "", "formControlName", "observations"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [3, "value"], ["mat-card-image", ""]], template: function EditEvidenceReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditEvidenceReportComponent_form_2_Template, 69, 12, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]], encapsulation: 2 });


/***/ }),

/***/ "2Q4G":
/*!****************************************************************!*\
  !*** ./src/app/accidenTracking/services/contractor.service.ts ***!
  \****************************************************************/
/*! exports provided: ContractorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorService", function() { return ContractorService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ContractorService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/contractor';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
ContractorService.ɵfac = function ContractorService_Factory(t) { return new (t || ContractorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContractorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContractorService, factory: ContractorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2tYg":
/*!**********************************************************************!*\
  !*** ./src/app/accidenTracking/services/type-action-plan.service.ts ***!
  \**********************************************************************/
/*! exports provided: TypeActionPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeActionPlanService", function() { return TypeActionPlanService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TypeActionPlanService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/typeActionPlan';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        const url = `${this.baseUrl}/id/${id}`;
        return this._http.get(url);
    }
    update(id, data) {
        const url = `${this.baseUrl}/update/${id}`;
        return this._http.put(url, data);
    }
    delete(id) {
        const url = `${this.baseUrl}/delete/${id}`;
        return this._http.delete(url);
    }
}
TypeActionPlanService.ɵfac = function TypeActionPlanService_Factory(t) { return new (t || TypeActionPlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TypeActionPlanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TypeActionPlanService, factory: TypeActionPlanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4WCL":
/*!***********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/action-plan/create/create-action-plan.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateActionPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActionPlanComponent", function() { return CreateActionPlanComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_type_action_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/type-action-plan.service */ "2tYg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateActionPlanComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateActionPlanComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateActionPlanComponent {
    constructor(actionPlanService, fb) {
        this.actionPlanService = actionPlanService;
        this.fb = fb;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.allowDelete = false;
        this.title = 'Crear plan de accion';
        this.contractors = [];
        this.actionPlanService.get().subscribe((data) => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.actionPlanService.create(data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() { }
    delete() { }
}
CreateActionPlanComponent.ɵfac = function CreateActionPlanComponent_Factory(t) { return new (t || CreateActionPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_type_action_plan_service__WEBPACK_IMPORTED_MODULE_3__["TypeActionPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateActionPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateActionPlanComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateActionPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateActionPlanComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateActionPlanComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "4mXE":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/action-plan/index/index-action-plan.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IndexActionPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexActionPlanComponent", function() { return IndexActionPlanComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_type_action_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/accidenTracking/services/type-action-plan.service */ "2tYg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexActionPlanComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Plan de accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexActionPlanComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexActionPlanComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexActionPlanComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexActionPlanComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexActionPlanComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexActionPlanComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexActionPlanComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexActionPlanComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexActionPlanComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexActionPlanComponent {
    constructor(actionPlanService, _router) {
        this.actionPlanService = actionPlanService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Plan de accion';
        this.displayedColumns = ['Plan de accion'];
        this.actionPlanService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.actionPlanService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.actionPlanService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/planesAccion/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexActionPlanComponent.ɵfac = function IndexActionPlanComponent_Factory(t) { return new (t || IndexActionPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_accidenTracking_services_type_action_plan_service__WEBPACK_IMPORTED_MODULE_2__["TypeActionPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexActionPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexActionPlanComponent, selectors: [["index-action-plan"]], viewQuery: function IndexActionPlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Plan de accion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexActionPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexActionPlanComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexActionPlanComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexActionPlanComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWFjdGlvbi1wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6ImluZGV4LWFjdGlvbi1wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "5CqF":
/*!******************************************************************!*\
  !*** ./src/app/accidenTracking/services/injured-type.service.ts ***!
  \******************************************************************/
/*! exports provided: InjuredTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjuredTypeService", function() { return InjuredTypeService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class InjuredTypeService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/injuredType';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
InjuredTypeService.ɵfac = function InjuredTypeService_Factory(t) { return new (t || InjuredTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InjuredTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InjuredTypeService, factory: InjuredTypeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'auth', component: _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"] }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "77V7":
/*!***************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/evidenceReport/evidenceReport.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EvidenceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceReportComponent", function() { return EvidenceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class EvidenceReportComponent {
    constructor() { }
    ngOnInit() { }
}
EvidenceReportComponent.ɵfac = function EvidenceReportComponent_Factory(t) { return new (t || EvidenceReportComponent)(); };
EvidenceReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvidenceReportComponent, selectors: [["app-evidenceReport"]], decls: 1, vars: 0, template: function EvidenceReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "900B":
/*!*******************************************************************!*\
  !*** ./src/app/accidenTracking/interceptors/token.interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");


class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        const token = this.auth.getToken();
        // const headers = new HttpHeaders ({
        //   'Authorization': token
        // });
        const reqClone = req.clone({
            setHeaders: {
                'Authorization': token
            }
        });
        return next.handle(reqClone);
        // const token = localStorage.getItem('token');
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Awwe":
/*!*******************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/classifications/create/create-classifications.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreateClassificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassificationComponent", function() { return CreateClassificationComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/classification.service */ "K9x0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateClassificationComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateClassificationComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateClassificationComponent {
    constructor(classificationServices, fb) {
        this.classificationServices = classificationServices;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear clasificacion';
        this.contractors = [];
        this.classificationServices.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.classificationServices.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
    delete() { }
}
CreateClassificationComponent.ɵfac = function CreateClassificationComponent_Factory(t) { return new (t || CreateClassificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_classification_service__WEBPACK_IMPORTED_MODULE_3__["ClassificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateClassificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateClassificationComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateClassificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateClassificationComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateClassificationComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "AygM":
/*!***************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/potential/edit/edit-potential.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditPotentialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPotentialComponent", function() { return EditPotentialComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_potential_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/potential.service */ "dfiA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditPotentialComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPotentialComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditPotentialComponent {
    constructor(service, fb, route, router) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.title = 'Editar plan de accion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.service.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name,
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.service.disable(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    ngOnInit() { }
}
EditPotentialComponent.ɵfac = function EditPotentialComponent_Factory(t) { return new (t || EditPotentialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_potential_service__WEBPACK_IMPORTED_MODULE_3__["PotentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditPotentialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditPotentialComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditPotentialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPotentialComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPotentialComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


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
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://127.0.0.1:3000/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ClHd":
/*!*********************************************************************************!*\
  !*** ./src/app/accidenTracking/components/city/create/create-city.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCityComponent", function() { return CreateCityComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/city.service */ "u8bl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateCityComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateCityComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateCityComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.allowDelete = false;
        this.title = 'Crear ciudad';
        this.contractors = [];
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.create(data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() { }
    delete() { }
}
CreateCityComponent.ɵfac = function CreateCityComponent_Factory(t) { return new (t || CreateCityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateCityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateCityComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateCityComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateCityComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "CzPM":
/*!*****************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/classifications/classifications.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClassificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationsComponent", function() { return ClassificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ClassificationsComponent {
}
ClassificationsComponent.ɵfac = function ClassificationsComponent_Factory(t) { return new (t || ClassificationsComponent)(); };
ClassificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassificationsComponent, selectors: [["app-classifications"]], decls: 1, vars: 0, template: function ClassificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "FwT2":
/*!*****************************************************************************!*\
  !*** ./src/app/accidenTracking/components/potential/potential.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PotentialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PotentialComponent", function() { return PotentialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PotentialComponent {
    constructor() { }
    ngOnInit() { }
}
PotentialComponent.ɵfac = function PotentialComponent_Factory(t) { return new (t || PotentialComponent)(); };
PotentialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PotentialComponent, selectors: [["app-potential"]], decls: 1, vars: 0, template: function PotentialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "GuJl":
/*!**********************************************************************!*\
  !*** ./src/app/accidenTracking/services/company-involved.service.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyInvolvedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInvolvedService", function() { return CompanyInvolvedService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CompanyInvolvedService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/companyInvolved';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
CompanyInvolvedService.ɵfac = function CompanyInvolvedService_Factory(t) { return new (t || CompanyInvolvedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompanyInvolvedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyInvolvedService, factory: CompanyInvolvedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H/Wm":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/supervisor/search/search.supervisor.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SearchSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSupervisorComponent", function() { return SearchSupervisorComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_supervisor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/accidenTracking/services/supervisor.service */ "+FsF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function SearchSupervisorComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Supervisores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchSupervisorComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function SearchSupervisorComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function SearchSupervisorComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchSupervisorComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchSupervisorComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchSupervisorComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchSupervisorComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchSupervisorComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchSupervisorComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class SearchSupervisorComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Supervisores';
        this.displayedColumns = ['Supervisores'];
        this.service.get('').subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.service.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.service.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/supervisor/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
SearchSupervisorComponent.ɵfac = function SearchSupervisorComponent_Factory(t) { return new (t || SearchSupervisorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_accidenTracking_services_supervisor_service__WEBPACK_IMPORTED_MODULE_2__["SupervisorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchSupervisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchSupervisorComponent, selectors: [["index-action-plan"]], viewQuery: function SearchSupervisorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Supervisores"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function SearchSupervisorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchSupervisorComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function SearchSupervisorComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchSupervisorComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5zdXBlcnZpc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6InNlYXJjaC5zdXBlcnZpc29yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "IG7+":
/*!********************************************************************!*\
  !*** ./src/app/accidenTracking/components/users/user.component.ts ***!
  \********************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserComponent {
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 1, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "K9x0":
/*!********************************************************************!*\
  !*** ./src/app/accidenTracking/services/classification.service.ts ***!
  \********************************************************************/
/*! exports provided: ClassificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationService", function() { return ClassificationService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ClassificationService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/classification';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
ClassificationService.ɵfac = function ClassificationService_Factory(t) { return new (t || ClassificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ClassificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClassificationService, factory: ClassificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KKh8":
/*!********************************************************************************!*\
  !*** ./src/app/accidenTracking/components/areas/index/index-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: IndexAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexAreaComponent", function() { return IndexAreaComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/area.service */ "scAG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexAreaComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexAreaComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexAreaComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexAreaComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexAreaComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexAreaComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexAreaComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexAreaComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexAreaComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexAreaComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexAreaComponent {
    constructor(areaService, _router) {
        this.areaService = areaService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Areas';
        this.displayedColumns = ['Areas'];
        this.areaService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.areaService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.areaService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/area/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexAreaComponent.ɵfac = function IndexAreaComponent_Factory(t) { return new (t || IndexAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexAreaComponent, selectors: [["app-index-area"]], viewQuery: function IndexAreaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Areas"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexAreaComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexAreaComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexAreaComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoiaW5kZXgtYXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");




class AuthComponent {
    constructor(changeDetectorRef, media) {
        this.cols = {
            big: {
                total: 8,
                image: 6,
                side: 2
            },
            small: {
                total: 8,
                image: 0,
                side: 8
            }
        };
        this.mobileQuery = media.matchMedia('(max-width:1100px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 5, consts: [["rowHeight", "51%", 3, "cols"], [3, "colspan", "rowspan"], ["src", "../../../assets/img/20200807_093344.jpg", "alt", "", 1, "img-fluid"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.mobileQuery.matches ? ctx.cols.small.total : ctx.cols.big.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.mobileQuery.matches ? ctx.cols.small.image : ctx.cols.big.image)("rowspan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.mobileQuery.matches ? ctx.cols.small.side : ctx.cols.big.side)("rowspan", 2);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n}\r\n\r\n.welcome-img[_ngcontent-%COMP%] {\r\n    background-image: url('20200807_091923.jpg');\r\n    object-fit: scale-down;\r\n}\r\n\r\n.card-login[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE2RDtJQUM3RCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLndlbGNvbWUtaW1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy8yMDIwMDgwN18wOTE5MjMuanBnJyk7XHJcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG59XHJcblxyXG4uY2FyZC1sb2dpbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "MNlx":
/*!************************************************!*\
  !*** ./src/app/index/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/auth"]; };
class IndexComponent {
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 61, vars: 2, consts: [["color", "primary", 1, "fixed-top"], ["id", "myCarousel", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/img/20200807_091923.jpg", "alt", "", "width", "100%", "height", "100%", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", 1, "bd-placeholder-img"], [1, "container"], [1, "carousel-caption", "text-start"], ["href", "#", 1, "btn", "btn-lg", "btn-primary"], [1, "carousel-item"], [1, "carousel-caption"], ["src", "../../../assets/img/20200807_093344.jpg", "alt", "", "width", "100%", "height", "100%", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", 1, "bd-placeholder-img"], [1, "carousel-caption", "text-end"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "px-4", "py-5", "my-5", "text-center"], ["src", "../assets/brand/bootstrap-logo.svg", "alt", "", "width", "72", "height", "57", 1, "d-block", "mx-auto", "mb-4"], [1, "display-5", "fw-bold"], [1, "col-lg-6", "mx-auto"], [1, "lead", "mb-4"], [1, "d-grid", "gap-1", "d-sm-flex", "justify-content-sm-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "px-4", "gap-3", 3, "routerLink"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grupo HSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Example headline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Some representative placeholder content for the first slide of the carousel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign up today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Another example headline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Some representative placeholder content for the second slide of the carousel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "One more for good measure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Some representative placeholder content for the third slide of this carousel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Browse gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Seguimiento de accidentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Quickly design and customize responsive mobile-first sites with Bootstrap, the world\u2019s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".carousel[_ngcontent-%COMP%] {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    height: 32rem;\r\n}\r\n\r\n\r\n.carousel-item[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    height: 32rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-bottom: 1.25rem;\r\n        font-size: 1.25rem;\r\n        line-height: 1.4;\r\n    }\r\n    .featurette-heading[_ngcontent-%COMP%] {\r\n        font-size: 50px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 62em) {\r\n    .featurette-heading[_ngcontent-%COMP%] {\r\n        margin-top: 7rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0RBQ29EOzs7QUFHcEQsd0JBQXdCOzs7QUFFeEI7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBLGlFQUFpRTs7O0FBRWpFO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBR0EsMERBQTBEOzs7QUFFMUQ7SUFDSSxhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWU7SUFDZixhQUFhO0FBQ2pCOzs7QUFHQTtvREFDb0Q7OztBQUVwRDtJQUNJLHFDQUFxQztJQUNyQztRQUNJLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ1VTVE9NSVpFIFRIRSBDQVJPVVNFTFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbi8qIENhcm91c2VsIGJhc2UgY2xhc3MgKi9cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG5cclxuLyogU2luY2UgcG9zaXRpb25pbmcgdGhlIGltYWdlLCB3ZSBuZWVkIHRvIGhlbHAgb3V0IHRoZSBjYXB0aW9uICovXHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBib3R0b206IDNyZW07XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuXHJcbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMycmVtO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbT5pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycmVtO1xyXG59XHJcblxyXG5cclxuLyogUkVTUE9OU0lWRSBDU1NcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XHJcbiAgICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xyXG4gICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "NoW4":
/*!*****************************************************************************!*\
  !*** ./src/app/accidenTracking/components/dashboard/dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]] }); })();


/***/ }),

/***/ "QSsp":
/*!************************************************************!*\
  !*** ./src/app/accidenTracking/acciden-tracking.module.ts ***!
  \************************************************************/
/*! exports provided: AccidenTrackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidenTrackingModule", function() { return AccidenTrackingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _accident_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./accident.component */ "x/4r");
/* harmony import */ var _components_accident_tracking_accident_tracking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/accident-tracking/accident-tracking.component */ "SeKk");
/* harmony import */ var _components_accident_tracking_create_accident_tracking_create_accident_tracking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/accident-tracking/create-accident-tracking/create-accident-tracking.component */ "+I5I");
/* harmony import */ var _components_action_plan_create_create_action_plan_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/action-plan/create/create-action-plan.component */ "4WCL");
/* harmony import */ var _components_activity_involved_activity_involved_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/activity-involved/activity-involved.component */ "WSBI");
/* harmony import */ var _components_areas_areas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/areas/areas.component */ "0S4W");
/* harmony import */ var _components_body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/body-parts/body-parts.component */ "tZLD");
/* harmony import */ var _components_classifications_classifications_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/classifications/classifications.component */ "CzPM");
/* harmony import */ var _components_company_involved_company_involved_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/company-involved/company-involved.component */ "sWkM");
/* harmony import */ var _components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/contractor/contractor.component */ "+ekv");
/* harmony import */ var _components_type_injury_type_injury_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/type-injury/type-injury.component */ "uAIU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "NoW4");
/* harmony import */ var _components_accident_tracking_edit_accident_tracking_edit_accident_tracking_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/accident-tracking/edit-accident-tracking/edit-accident-tracking.component */ "XiEC");
/* harmony import */ var _components_accident_tracking_search_acciden_tracking_search_acciden_tracking_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/accident-tracking/search-acciden-tracking/search-acciden-tracking.component */ "a9qY");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "900B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_users_user_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/users/user.component */ "IG7+");
/* harmony import */ var _components_users_create_create_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/users/create/create.component */ "Uj6d");
/* harmony import */ var _components_users_index_user_index_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/users/index-user/index-user.component */ "aInU");
/* harmony import */ var _components_users_edit_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/users/edit/edit.component */ "lThu");
/* harmony import */ var _components_action_plan_actionplan_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/action-plan/actionplan.component */ "jIpB");
/* harmony import */ var _components_action_plan_index_index_action_plan_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/action-plan/index/index-action-plan.component */ "4mXE");
/* harmony import */ var _components_activity_involved_create_create_activity_involved_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/activity-involved/create/create-activity-involved.component */ "//SH");
/* harmony import */ var _components_activity_involved_edit_edit_activity_involved_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/activity-involved/edit/edit-activity-involved.component */ "1frv");
/* harmony import */ var _components_activity_involved_index_index_activity_involved_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/activity-involved/index/index-activity-involved.component */ "x7qh");
/* harmony import */ var _components_areas_index_index_area_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/areas/index/index-area.component */ "KKh8");
/* harmony import */ var _components_areas_edit_edit_area_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/areas/edit/edit-area.component */ "zrXT");
/* harmony import */ var _components_areas_create_create_area_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/areas/create/create-area.component */ "p4q3");
/* harmony import */ var _components_body_parts_index_index_body_parts_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/body-parts/index/index-body-parts.component */ "WZJG");
/* harmony import */ var _components_body_parts_edit_edit_body_parts_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/body-parts/edit/edit-body-parts.component */ "am0r");
/* harmony import */ var _components_classifications_create_create_classifications_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/classifications/create/create-classifications.component */ "Awwe");
/* harmony import */ var _components_classifications_index_index_classifications_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/classifications/index/index-classifications.component */ "qbTv");
/* harmony import */ var _components_classifications_edit_edit_classifications_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/classifications/edit/edit-classifications.component */ "jZ8C");
/* harmony import */ var _components_company_involved_create_create_company_involved_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/company-involved/create/create-company-involved.component */ "bojr");
/* harmony import */ var _components_company_involved_index_index_company_involved_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/company-involved/index/index-company-involved.component */ "/xDQ");
/* harmony import */ var _components_company_involved_edit_edit_company_involved_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/company-involved/edit/edit-company-involved.component */ "q6/r");
/* harmony import */ var _components_contractor_create_create_contractor_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/contractor/create/create-contractor.component */ "QdH5");
/* harmony import */ var _components_contractor_edit_edit_contractor_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/contractor/edit/edit-contractor.component */ "rMZo");
/* harmony import */ var _components_contractor_index_index_contractor_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/contractor/index/index-contractor.component */ "viIs");
/* harmony import */ var _components_body_parts_create_create_body_parts_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/body-parts/create/create-body-parts.component */ "Xcuq");
/* harmony import */ var _components_action_plan_edit_edit_action_plan_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/action-plan/edit/edit-action-plan.component */ "eXq3");
/* harmony import */ var _components_type_injury_create_create_type_injury_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/type-injury/create/create-type-injury.component */ "o+8Q");
/* harmony import */ var _components_type_injury_edit_edit_type_injury_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/type-injury/edit/edit-type-injury.component */ "2DHX");
/* harmony import */ var _components_type_injury_index_index_type_injury_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/type-injury/index/index-type-injury.component */ "tknz");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_evidenceReport_editEvidenceReport_edit_evidenceReport_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/evidenceReport/editEvidenceReport/edit-evidenceReport.component */ "2Dms");
/* harmony import */ var _components_evidenceReport_createEvidenceReport_create_evidenceReport_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/evidenceReport/createEvidenceReport/create-evidenceReport.component */ "aEM9");
/* harmony import */ var _components_evidenceReport_searchEvidenceReport_search_evidenceReport_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/evidenceReport/searchEvidenceReport/search-evidenceReport.component */ "hUmc");
/* harmony import */ var _components_evidenceReport_evidenceReport_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/evidenceReport/evidenceReport.component */ "77V7");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/city/city.component */ "tfzD");
/* harmony import */ var _components_city_search_search_city_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/city/search/search-city.component */ "k51n");
/* harmony import */ var _components_city_create_create_city_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/city/create/create-city.component */ "ClHd");
/* harmony import */ var _components_city_edit_edit_city_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/city/edit/edit-city.component */ "njZv");
/* harmony import */ var _components_potential_create_create_potential_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/potential/create/create-potential.component */ "vcca");
/* harmony import */ var _components_potential_edit_edit_potential_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/potential/edit/edit-potential.component */ "AygM");
/* harmony import */ var _components_potential_search_search_potential_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/potential/search/search-potential.component */ "mUMo");
/* harmony import */ var _components_potential_potential_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/potential/potential.component */ "FwT2");
/* harmony import */ var _components_supervisor_index_supervisor_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/supervisor/index-supervisor.component */ "bVWu");
/* harmony import */ var _components_supervisor_create_create_supervisor_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/supervisor/create/create-supervisor.component */ "ygha");
/* harmony import */ var _components_supervisor_edit_edit_supervisor_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/supervisor/edit/edit-supervisor.component */ "wwFi");
/* harmony import */ var _components_supervisor_search_search_supervisor_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/supervisor/search/search.supervisor.component */ "H/Wm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/core */ "fXoL");


















































































class AccidenTrackingModule {
}
AccidenTrackingModule.ɵfac = function AccidenTrackingModule_Factory(t) { return new (t || AccidenTrackingModule)(); };
AccidenTrackingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_81__["ɵɵdefineNgModule"]({ type: AccidenTrackingModule, bootstrap: [_accident_component__WEBPACK_IMPORTED_MODULE_18__["AccidentComponent"]] });
AccidenTrackingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_81__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_33__["TokenInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_34__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_63__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_64__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_81__["ɵɵsetNgModuleScope"](AccidenTrackingModule, { declarations: [_accident_component__WEBPACK_IMPORTED_MODULE_18__["AccidentComponent"],
        _components_accident_tracking_accident_tracking_component__WEBPACK_IMPORTED_MODULE_19__["AccidentTrackingComponent"],
        _components_accident_tracking_create_accident_tracking_create_accident_tracking_component__WEBPACK_IMPORTED_MODULE_20__["CreateAccidentTrackingComponent"],
        _components_activity_involved_activity_involved_component__WEBPACK_IMPORTED_MODULE_22__["ActivityInvolvedComponent"],
        _components_areas_areas_component__WEBPACK_IMPORTED_MODULE_23__["AreasComponent"],
        _components_body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_24__["BodyPartsComponent"],
        _components_classifications_classifications_component__WEBPACK_IMPORTED_MODULE_25__["ClassificationsComponent"],
        _components_company_involved_company_involved_component__WEBPACK_IMPORTED_MODULE_26__["CompanyInvolvedComponent"],
        _components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_27__["ContractorComponent"],
        _components_type_injury_type_injury_component__WEBPACK_IMPORTED_MODULE_28__["TypeInjuryComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
        _components_users_edit_edit_component__WEBPACK_IMPORTED_MODULE_38__["EditUserComponent"],
        _components_accident_tracking_edit_accident_tracking_edit_accident_tracking_component__WEBPACK_IMPORTED_MODULE_31__["EditAccidentTrackingComponent"],
        _components_accident_tracking_search_acciden_tracking_search_acciden_tracking_component__WEBPACK_IMPORTED_MODULE_32__["SearchAccidenTrackingComponent"],
        _components_users_user_component__WEBPACK_IMPORTED_MODULE_35__["UserComponent"],
        _components_users_create_create_component__WEBPACK_IMPORTED_MODULE_36__["CreateUserComponent"],
        _components_users_index_user_index_user_component__WEBPACK_IMPORTED_MODULE_37__["IndexUserComponent"],
        _components_action_plan_actionplan_component__WEBPACK_IMPORTED_MODULE_39__["ActionPlanComponent"],
        _components_action_plan_create_create_action_plan_component__WEBPACK_IMPORTED_MODULE_21__["CreateActionPlanComponent"],
        _components_action_plan_index_index_action_plan_component__WEBPACK_IMPORTED_MODULE_40__["IndexActionPlanComponent"],
        _components_activity_involved_create_create_activity_involved_component__WEBPACK_IMPORTED_MODULE_41__["CreateActivityInvolvedComponent"],
        _components_activity_involved_edit_edit_activity_involved_component__WEBPACK_IMPORTED_MODULE_42__["EditActivityInvolvedComponent"],
        _components_activity_involved_index_index_activity_involved_component__WEBPACK_IMPORTED_MODULE_43__["IndexActivityInvolvedComponent"],
        _components_areas_index_index_area_component__WEBPACK_IMPORTED_MODULE_44__["IndexAreaComponent"],
        _components_areas_edit_edit_area_component__WEBPACK_IMPORTED_MODULE_45__["EditAreaComponent"],
        _components_areas_create_create_area_component__WEBPACK_IMPORTED_MODULE_46__["CreateAreaComponent"],
        _components_body_parts_index_index_body_parts_component__WEBPACK_IMPORTED_MODULE_47__["IndexBodyPartComponent"],
        _components_body_parts_edit_edit_body_parts_component__WEBPACK_IMPORTED_MODULE_48__["EditBodyPartComponent"],
        _components_classifications_create_create_classifications_component__WEBPACK_IMPORTED_MODULE_49__["CreateClassificationComponent"],
        _components_classifications_index_index_classifications_component__WEBPACK_IMPORTED_MODULE_50__["IndexClassificationsComponent"],
        _components_classifications_edit_edit_classifications_component__WEBPACK_IMPORTED_MODULE_51__["EditClassificationComponent"],
        _components_company_involved_create_create_company_involved_component__WEBPACK_IMPORTED_MODULE_52__["CreateCompanyInvolvedComponent"],
        _components_company_involved_index_index_company_involved_component__WEBPACK_IMPORTED_MODULE_53__["IndexCompanyInvolvedComponent"],
        _components_company_involved_edit_edit_company_involved_component__WEBPACK_IMPORTED_MODULE_54__["EditCompanyInvolvedComponent"],
        _components_contractor_create_create_contractor_component__WEBPACK_IMPORTED_MODULE_55__["CreateContractorComponent"],
        _components_contractor_edit_edit_contractor_component__WEBPACK_IMPORTED_MODULE_56__["EditContractorComponent"],
        _components_contractor_index_index_contractor_component__WEBPACK_IMPORTED_MODULE_57__["IndexContractorComponent"],
        _components_body_parts_create_create_body_parts_component__WEBPACK_IMPORTED_MODULE_58__["CreateBodyPartComponent"],
        _components_action_plan_edit_edit_action_plan_component__WEBPACK_IMPORTED_MODULE_59__["EditActionPlanComponent"],
        _components_type_injury_create_create_type_injury_component__WEBPACK_IMPORTED_MODULE_60__["CreateTypeInjuryComponent"],
        _components_type_injury_edit_edit_type_injury_component__WEBPACK_IMPORTED_MODULE_61__["EditTypeInjuryComponent"],
        _components_type_injury_index_index_type_injury_component__WEBPACK_IMPORTED_MODULE_62__["IndexTypeInjuryComponent"],
        _components_evidenceReport_editEvidenceReport_edit_evidenceReport_component__WEBPACK_IMPORTED_MODULE_65__["EditEvidenceReportComponent"],
        _components_evidenceReport_createEvidenceReport_create_evidenceReport_component__WEBPACK_IMPORTED_MODULE_66__["CreateEvidenceReportComponent"],
        _components_evidenceReport_searchEvidenceReport_search_evidenceReport_component__WEBPACK_IMPORTED_MODULE_67__["SearchEvidenceReportComponent"],
        _components_evidenceReport_evidenceReport_component__WEBPACK_IMPORTED_MODULE_68__["EvidenceReportComponent"],
        _components_city_city_component__WEBPACK_IMPORTED_MODULE_69__["CityComponent"], _components_city_search_search_city_component__WEBPACK_IMPORTED_MODULE_70__["SearchCityComponent"], _components_city_create_create_city_component__WEBPACK_IMPORTED_MODULE_71__["CreateCityComponent"],
        _components_city_edit_edit_city_component__WEBPACK_IMPORTED_MODULE_72__["EditCityComponent"],
        _components_potential_search_search_potential_component__WEBPACK_IMPORTED_MODULE_75__["SearchPotentialComponent"], _components_potential_create_create_potential_component__WEBPACK_IMPORTED_MODULE_73__["CreatePotentialComponent"], _components_potential_edit_edit_potential_component__WEBPACK_IMPORTED_MODULE_74__["EditPotentialComponent"], _components_potential_potential_component__WEBPACK_IMPORTED_MODULE_76__["PotentialComponent"],
        _components_supervisor_search_search_supervisor_component__WEBPACK_IMPORTED_MODULE_80__["SearchSupervisorComponent"], _components_supervisor_create_create_supervisor_component__WEBPACK_IMPORTED_MODULE_78__["CreateSupervisorComponent"], _components_supervisor_edit_edit_supervisor_component__WEBPACK_IMPORTED_MODULE_79__["EditSupervisorComponent"], _components_supervisor_index_supervisor_component__WEBPACK_IMPORTED_MODULE_77__["SupervisorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_34__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_63__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_64__["MatCardModule"]] }); })();


/***/ }),

/***/ "QdH5":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/contractor/create/create-contractor.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateContractorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContractorComponent", function() { return CreateContractorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contractor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/contractor.service */ "2Q4G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateContractorComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateContractorComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateContractorComponent {
    constructor(contractorService, fb) {
        this.contractorService = contractorService;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear contratista';
        this.contractors = [];
        this.contractorService.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.contractorService.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
    delete() { }
}
CreateContractorComponent.ɵfac = function CreateContractorComponent_Factory(t) { return new (t || CreateContractorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_contractor_service__WEBPACK_IMPORTED_MODULE_3__["ContractorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateContractorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateContractorComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateContractorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateContractorComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateContractorComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "SeKk":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/accident-tracking/accident-tracking.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AccidentTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentTrackingComponent", function() { return AccidentTrackingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AccidentTrackingComponent {
}
AccidentTrackingComponent.ɵfac = function AccidentTrackingComponent_Factory(t) { return new (t || AccidentTrackingComponent)(); };
AccidentTrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccidentTrackingComponent, selectors: [["app-accident-tracking"]], decls: 1, vars: 0, template: function AccidentTrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "SvUc":
/*!********************************************************************!*\
  !*** ./src/app/accidenTracking/acciden-tracking-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AccidenTrackingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidenTrackingRoutingModule", function() { return AccidenTrackingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth.guard */ "UTcu");
/* harmony import */ var _accident_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accident.component */ "x/4r");
/* harmony import */ var _components_accident_tracking_accident_tracking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accident-tracking/accident-tracking.component */ "SeKk");
/* harmony import */ var _components_action_plan_create_create_action_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action-plan/create/create-action-plan.component */ "4WCL");
/* harmony import */ var _components_activity_involved_activity_involved_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/activity-involved/activity-involved.component */ "WSBI");
/* harmony import */ var _components_areas_areas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/areas/areas.component */ "0S4W");
/* harmony import */ var _components_body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/body-parts/body-parts.component */ "tZLD");
/* harmony import */ var _components_classifications_classifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/classifications/classifications.component */ "CzPM");
/* harmony import */ var _components_company_involved_company_involved_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company-involved/company-involved.component */ "sWkM");
/* harmony import */ var _components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contractor/contractor.component */ "+ekv");
/* harmony import */ var _components_type_injury_type_injury_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/type-injury/type-injury.component */ "uAIU");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "NoW4");
/* harmony import */ var _components_accident_tracking_create_accident_tracking_create_accident_tracking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/accident-tracking/create-accident-tracking/create-accident-tracking.component */ "+I5I");
/* harmony import */ var _components_accident_tracking_edit_accident_tracking_edit_accident_tracking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/accident-tracking/edit-accident-tracking/edit-accident-tracking.component */ "XiEC");
/* harmony import */ var _components_accident_tracking_search_acciden_tracking_search_acciden_tracking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/accident-tracking/search-acciden-tracking/search-acciden-tracking.component */ "a9qY");
/* harmony import */ var _components_users_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/users/user.component */ "IG7+");
/* harmony import */ var _components_users_create_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/users/create/create.component */ "Uj6d");
/* harmony import */ var _components_users_index_user_index_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/index-user/index-user.component */ "aInU");
/* harmony import */ var _components_users_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users/edit/edit.component */ "lThu");
/* harmony import */ var _components_action_plan_index_index_action_plan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/action-plan/index/index-action-plan.component */ "4mXE");
/* harmony import */ var _components_action_plan_edit_edit_action_plan_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/action-plan/edit/edit-action-plan.component */ "eXq3");
/* harmony import */ var _components_activity_involved_edit_edit_activity_involved_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/activity-involved/edit/edit-activity-involved.component */ "1frv");
/* harmony import */ var _components_activity_involved_create_create_activity_involved_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/activity-involved/create/create-activity-involved.component */ "//SH");
/* harmony import */ var _components_areas_index_index_area_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/areas/index/index-area.component */ "KKh8");
/* harmony import */ var _components_areas_edit_edit_area_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/areas/edit/edit-area.component */ "zrXT");
/* harmony import */ var _components_areas_create_create_area_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/areas/create/create-area.component */ "p4q3");
/* harmony import */ var _components_contractor_index_index_contractor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/contractor/index/index-contractor.component */ "viIs");
/* harmony import */ var _components_contractor_create_create_contractor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/contractor/create/create-contractor.component */ "QdH5");
/* harmony import */ var _components_contractor_edit_edit_contractor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/contractor/edit/edit-contractor.component */ "rMZo");
/* harmony import */ var _components_company_involved_index_index_company_involved_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/company-involved/index/index-company-involved.component */ "/xDQ");
/* harmony import */ var _components_company_involved_create_create_company_involved_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/company-involved/create/create-company-involved.component */ "bojr");
/* harmony import */ var _components_company_involved_edit_edit_company_involved_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/company-involved/edit/edit-company-involved.component */ "q6/r");
/* harmony import */ var _components_activity_involved_index_index_activity_involved_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/activity-involved/index/index-activity-involved.component */ "x7qh");
/* harmony import */ var _components_classifications_index_index_classifications_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/classifications/index/index-classifications.component */ "qbTv");
/* harmony import */ var _components_classifications_edit_edit_classifications_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/classifications/edit/edit-classifications.component */ "jZ8C");
/* harmony import */ var _components_classifications_create_create_classifications_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/classifications/create/create-classifications.component */ "Awwe");
/* harmony import */ var _components_body_parts_index_index_body_parts_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/body-parts/index/index-body-parts.component */ "WZJG");
/* harmony import */ var _components_body_parts_edit_edit_body_parts_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/body-parts/edit/edit-body-parts.component */ "am0r");
/* harmony import */ var _components_body_parts_create_create_body_parts_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/body-parts/create/create-body-parts.component */ "Xcuq");
/* harmony import */ var _components_type_injury_index_index_type_injury_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/type-injury/index/index-type-injury.component */ "tknz");
/* harmony import */ var _components_type_injury_edit_edit_type_injury_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/type-injury/edit/edit-type-injury.component */ "2DHX");
/* harmony import */ var _components_type_injury_create_create_type_injury_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/type-injury/create/create-type-injury.component */ "o+8Q");
/* harmony import */ var _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../guards/is-admin.guard */ "dR12");
/* harmony import */ var _components_evidenceReport_createEvidenceReport_create_evidenceReport_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/evidenceReport/createEvidenceReport/create-evidenceReport.component */ "aEM9");
/* harmony import */ var _components_evidenceReport_searchEvidenceReport_search_evidenceReport_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/evidenceReport/searchEvidenceReport/search-evidenceReport.component */ "hUmc");
/* harmony import */ var _components_evidenceReport_editEvidenceReport_edit_evidenceReport_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/evidenceReport/editEvidenceReport/edit-evidenceReport.component */ "2Dms");
/* harmony import */ var _components_evidenceReport_evidenceReport_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/evidenceReport/evidenceReport.component */ "77V7");
/* harmony import */ var _components_city_search_search_city_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/city/search/search-city.component */ "k51n");
/* harmony import */ var _components_city_create_create_city_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/city/create/create-city.component */ "ClHd");
/* harmony import */ var _components_city_edit_edit_city_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/city/edit/edit-city.component */ "njZv");
/* harmony import */ var _components_potential_potential_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/potential/potential.component */ "FwT2");
/* harmony import */ var _components_potential_search_search_potential_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/potential/search/search-potential.component */ "mUMo");
/* harmony import */ var _components_potential_create_create_potential_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/potential/create/create-potential.component */ "vcca");
/* harmony import */ var _components_potential_edit_edit_potential_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/potential/edit/edit-potential.component */ "AygM");
/* harmony import */ var _components_supervisor_index_supervisor_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/supervisor/index-supervisor.component */ "bVWu");
/* harmony import */ var _components_supervisor_search_search_supervisor_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/supervisor/search/search.supervisor.component */ "H/Wm");
/* harmony import */ var _components_supervisor_create_create_supervisor_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/supervisor/create/create-supervisor.component */ "ygha");
/* harmony import */ var _components_supervisor_edit_edit_supervisor_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/supervisor/edit/edit-supervisor.component */ "wwFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/core */ "fXoL");





























































const routes = [
    {
        path: 'accidentes',
        component: _accident_component__WEBPACK_IMPORTED_MODULE_2__["AccidentComponent"],
        children: [
            {
                path: '',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            },
            {
                path: 'dashboard',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            },
            {
                path: 'seguimientoAccidentes',
                component: _components_accident_tracking_accident_tracking_component__WEBPACK_IMPORTED_MODULE_3__["AccidentTrackingComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_accident_tracking_search_acciden_tracking_search_acciden_tracking_component__WEBPACK_IMPORTED_MODULE_15__["SearchAccidenTrackingComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                    {
                        path: 'crear',
                        component: _components_accident_tracking_create_accident_tracking_create_accident_tracking_component__WEBPACK_IMPORTED_MODULE_13__["CreateAccidentTrackingComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]],
                    },
                    {
                        path: 'editar/:id',
                        component: _components_accident_tracking_edit_accident_tracking_edit_accident_tracking_component__WEBPACK_IMPORTED_MODULE_14__["EditAccidentTrackingComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                ],
            },
            {
                path: 'contratista',
                component: _components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_10__["ContractorComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_contractor_index_index_contractor_component__WEBPACK_IMPORTED_MODULE_27__["IndexContractorComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                    {
                        path: 'crear',
                        component: _components_contractor_create_create_contractor_component__WEBPACK_IMPORTED_MODULE_28__["CreateContractorComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]],
                    },
                    {
                        path: 'editar/:id',
                        component: _components_contractor_edit_edit_contractor_component__WEBPACK_IMPORTED_MODULE_29__["EditContractorComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                ],
            },
            {
                path: 'empresaInvolucrada',
                component: _components_company_involved_company_involved_component__WEBPACK_IMPORTED_MODULE_9__["CompanyInvolvedComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_company_involved_index_index_company_involved_component__WEBPACK_IMPORTED_MODULE_30__["IndexCompanyInvolvedComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                    {
                        path: 'crear',
                        component: _components_company_involved_create_create_company_involved_component__WEBPACK_IMPORTED_MODULE_31__["CreateCompanyInvolvedComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]],
                    },
                    {
                        path: 'editar/:id',
                        component: _components_company_involved_edit_edit_company_involved_component__WEBPACK_IMPORTED_MODULE_32__["EditCompanyInvolvedComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                ],
            },
            {
                path: 'area',
                component: _components_areas_areas_component__WEBPACK_IMPORTED_MODULE_6__["AreasComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_areas_index_index_area_component__WEBPACK_IMPORTED_MODULE_24__["IndexAreaComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                    {
                        path: 'editar/:id',
                        component: _components_areas_edit_edit_area_component__WEBPACK_IMPORTED_MODULE_25__["EditAreaComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                    },
                    {
                        path: 'crear',
                        component: _components_areas_create_create_area_component__WEBPACK_IMPORTED_MODULE_26__["CreateAreaComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    }
                ]
            },
            {
                path: 'actividadaInvolucrada',
                component: _components_activity_involved_activity_involved_component__WEBPACK_IMPORTED_MODULE_5__["ActivityInvolvedComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_activity_involved_index_index_activity_involved_component__WEBPACK_IMPORTED_MODULE_33__["IndexActivityInvolvedComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_activity_involved_edit_edit_activity_involved_component__WEBPACK_IMPORTED_MODULE_22__["EditActivityInvolvedComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
                    },
                    {
                        path: 'crear',
                        component: _components_activity_involved_create_create_activity_involved_component__WEBPACK_IMPORTED_MODULE_23__["CreateActivityInvolvedComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                ],
            },
            {
                path: 'clasificaciones',
                component: _components_classifications_classifications_component__WEBPACK_IMPORTED_MODULE_8__["ClassificationsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_classifications_index_index_classifications_component__WEBPACK_IMPORTED_MODULE_34__["IndexClassificationsComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_classifications_edit_edit_classifications_component__WEBPACK_IMPORTED_MODULE_35__["EditClassificationComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_classifications_create_create_classifications_component__WEBPACK_IMPORTED_MODULE_36__["CreateClassificationComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                ],
            },
            {
                path: 'partesCuerpo',
                component: _components_body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_7__["BodyPartsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_body_parts_index_index_body_parts_component__WEBPACK_IMPORTED_MODULE_37__["IndexBodyPartComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_body_parts_edit_edit_body_parts_component__WEBPACK_IMPORTED_MODULE_38__["EditBodyPartComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_body_parts_create_create_body_parts_component__WEBPACK_IMPORTED_MODULE_39__["CreateBodyPartComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                ],
            },
            {
                path: 'tiposLesion',
                component: _components_type_injury_type_injury_component__WEBPACK_IMPORTED_MODULE_11__["TypeInjuryComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_type_injury_index_index_type_injury_component__WEBPACK_IMPORTED_MODULE_40__["IndexTypeInjuryComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_type_injury_edit_edit_type_injury_component__WEBPACK_IMPORTED_MODULE_41__["EditTypeInjuryComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_type_injury_create_create_type_injury_component__WEBPACK_IMPORTED_MODULE_42__["CreateTypeInjuryComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                ],
            },
            {
                path: 'planesAccion',
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_action_plan_index_index_action_plan_component__WEBPACK_IMPORTED_MODULE_20__["IndexActionPlanComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_action_plan_create_create_action_plan_component__WEBPACK_IMPORTED_MODULE_4__["CreateActionPlanComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_action_plan_edit_edit_action_plan_component__WEBPACK_IMPORTED_MODULE_21__["EditActionPlanComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                ],
            },
            {
                path: 'usuarios',
                component: _components_users_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]],
                children: [
                    {
                        path: '',
                        component: _components_users_index_user_index_user_component__WEBPACK_IMPORTED_MODULE_18__["IndexUserComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                    {
                        path: 'crear',
                        component: _components_users_create_create_component__WEBPACK_IMPORTED_MODULE_17__["CreateUserComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_users_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__["EditUserComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_43__["IsAdminGuard"]]
                    },
                ],
            },
            {
                path: 'reporteEvidencia',
                component: _components_evidenceReport_evidenceReport_component__WEBPACK_IMPORTED_MODULE_47__["EvidenceReportComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],],
                children: [
                    {
                        path: '',
                        component: _components_evidenceReport_searchEvidenceReport_search_evidenceReport_component__WEBPACK_IMPORTED_MODULE_45__["SearchEvidenceReportComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_evidenceReport_createEvidenceReport_create_evidenceReport_component__WEBPACK_IMPORTED_MODULE_44__["CreateEvidenceReportComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_evidenceReport_editEvidenceReport_edit_evidenceReport_component__WEBPACK_IMPORTED_MODULE_46__["EditEvidenceReportComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                ],
            },
            {
                path: 'ciudad',
                component: _components_evidenceReport_evidenceReport_component__WEBPACK_IMPORTED_MODULE_47__["EvidenceReportComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],],
                children: [
                    {
                        path: '',
                        component: _components_city_search_search_city_component__WEBPACK_IMPORTED_MODULE_48__["SearchCityComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_city_create_create_city_component__WEBPACK_IMPORTED_MODULE_49__["CreateCityComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_city_edit_edit_city_component__WEBPACK_IMPORTED_MODULE_50__["EditCityComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                ],
            },
            {
                path: 'potencial',
                component: _components_potential_potential_component__WEBPACK_IMPORTED_MODULE_51__["PotentialComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],],
                children: [
                    {
                        path: '',
                        component: _components_potential_search_search_potential_component__WEBPACK_IMPORTED_MODULE_52__["SearchPotentialComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_potential_create_create_potential_component__WEBPACK_IMPORTED_MODULE_53__["CreatePotentialComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_potential_edit_edit_potential_component__WEBPACK_IMPORTED_MODULE_54__["EditPotentialComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                ],
            }, {
                path: 'supervisor',
                component: _components_supervisor_index_supervisor_component__WEBPACK_IMPORTED_MODULE_55__["SupervisorComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],],
                children: [
                    {
                        path: '',
                        component: _components_supervisor_search_search_supervisor_component__WEBPACK_IMPORTED_MODULE_56__["SearchSupervisorComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'crear',
                        component: _components_supervisor_create_create_supervisor_component__WEBPACK_IMPORTED_MODULE_57__["CreateSupervisorComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                    {
                        path: 'editar/:id',
                        component: _components_supervisor_edit_edit_supervisor_component__WEBPACK_IMPORTED_MODULE_58__["EditSupervisorComponent"],
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],]
                    },
                ],
            },
            { path: '', redirectTo: 'accidentes', pathMatch: 'full', },
        ],
    },
    { path: '', redirectTo: 'accidentes', pathMatch: 'full', },
];
class AccidenTrackingRoutingModule {
}
AccidenTrackingRoutingModule.ɵfac = function AccidenTrackingRoutingModule_Factory(t) { return new (t || AccidenTrackingRoutingModule)(); };
AccidenTrackingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵdefineNgModule"]({ type: AccidenTrackingRoutingModule });
AccidenTrackingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵsetNgModuleScope"](AccidenTrackingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");



class AppComponent {
    constructor() {
        this.title = 'hse-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".spacer-btns-nav[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.global-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.example-container[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 85%;\n}\n\n.logout[_ngcontent-%COMP%] {\n    background-color: #df1e6e;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlci1idG5zLW5hdiB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5nbG9iYWwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg1JTtcbn1cblxuLmxvZ291dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmMWU2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ "TBG0":
/*!**********************************************************!*\
  !*** ./src/app/accidenTracking/services/base.service.ts ***!
  \**********************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BaseService {
    constructor(sufix, http) {
        this.sufix = sufix;
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/' + this.sufix;
    }
    getById(id) {
        return this.http.get(this.baseUrl + `/id/${id}`);
    }
    get(mean, skip = 0, limit = 30) {
        return this.http
            .get(this.baseUrl +
            `/?mean=${mean}&skip=${skip}&limit=${limit}`);
        // .pipe(map((res:any) => res['items']));
    }
    create(data) {
        return this.http.post(this.baseUrl, data);
    }
    update(id, data) {
        return this.http.put(this.baseUrl + `/${id}`, data);
    }
    disable(id) {
        return this.http.put(this.baseUrl + `/disable/${id}`);
    }
    delete(id) {
        return this.http.put(this.baseUrl + `/${id}`);
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Uj6d":
/*!*****************************************************************************!*\
  !*** ./src/app/accidenTracking/components/users/create/create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/user.service */ "kglH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");












function CreateUserComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateUserComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateUserComponent {
    constructor(_fb, userService) {
        this._fb = _fb;
        this.userService = userService;
        this.allowDelete = false;
        this.title = "Crear usuario";
        this.form = this._fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.userService.create(this.form.value).subscribe(token => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            const error = err.error.msg[0].msg || err;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', error, 'error');
        });
    }
    delete() { }
}
CreateUserComponent.ɵfac = function CreateUserComponent_Factory(t) { return new (t || CreateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
CreateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateUserComponent, selectors: [["app-create"]], decls: 23, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "username"], ["type", "text", "matInput", "", "formControlName", "password"], ["formControlName", "role"], ["value", "ADMIN"], ["value", "NORMAL"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["role", "list"], ["mat-raised-button", "", 3, "click"]], template: function CreateUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateUserComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateUserComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Rol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-list", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VdgT":
/*!***********************************************************************!*\
  !*** ./src/app/accidenTracking/services/accident-tracking.service.ts ***!
  \***********************************************************************/
/*! exports provided: AccidentTrackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentTrackingService", function() { return AccidentTrackingService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AccidentTrackingService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/accidentTracking';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    // {{url}}/accidentTracking/?mean=&from=0&limit=30
    get(mean, skip = 0, limit = 30) {
        return this._http
            .get(this.baseUrl + '?mean=&skip=0&limit=30')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => res['items']));
    }
    getInfoForCreate() {
        return this._http.get(this.baseUrl + '/get');
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
    getCSV(ids) {
        return this._http.post(this.baseUrl + '/csv/', { ids }, { responseType: 'blob' });
    }
}
AccidentTrackingService.ɵfac = function AccidentTrackingService_Factory(t) { return new (t || AccidentTrackingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AccidentTrackingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccidentTrackingService, factory: AccidentTrackingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WSBI":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/activity-involved/activity-involved.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ActivityInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityInvolvedComponent", function() { return ActivityInvolvedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ActivityInvolvedComponent {
}
ActivityInvolvedComponent.ɵfac = function ActivityInvolvedComponent_Factory(t) { return new (t || ActivityInvolvedComponent)(); };
ActivityInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityInvolvedComponent, selectors: [["app-activity-involved"]], decls: 1, vars: 0, template: function ActivityInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "WZJG":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/body-parts/index/index-body-parts.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IndexBodyPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBodyPartComponent", function() { return IndexBodyPartComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/injured-body-part.service */ "eIIX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexBodyPartComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexBodyPartComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexBodyPartComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexBodyPartComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexBodyPartComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexBodyPartComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexBodyPartComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexBodyPartComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexBodyPartComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexBodyPartComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexBodyPartComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Partes del cuerpo';
        this.displayedColumns = ['Areas'];
        this.service.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.service.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.service.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/partesCuerpo/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexBodyPartComponent.ɵfac = function IndexBodyPartComponent_Factory(t) { return new (t || IndexBodyPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_2__["InjuredBodyPartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexBodyPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexBodyPartComponent, selectors: [["app-index-body-parts"]], viewQuery: function IndexBodyPartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Areas"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexBodyPartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexBodyPartComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexBodyPartComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexBodyPartComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWJvZHktcGFydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoiaW5kZXgtYm9keS1wYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Xcuq":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/body-parts/create/create-body-parts.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateBodyPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBodyPartComponent", function() { return CreateBodyPartComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/injured-body-part.service */ "eIIX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateBodyPartComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateBodyPartComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateBodyPartComponent {
    constructor(areaServices, fb) {
        this.areaServices = areaServices;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear parte del cuerpo';
        this.contractors = [];
        this.areaServices.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.areaServices.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
    delete() { }
}
CreateBodyPartComponent.ɵfac = function CreateBodyPartComponent_Factory(t) { return new (t || CreateBodyPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_3__["InjuredBodyPartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateBodyPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateBodyPartComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateBodyPartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateBodyPartComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateBodyPartComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "XiEC":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/accident-tracking/edit-accident-tracking/edit-accident-tracking.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: EditAccidentTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccidentTrackingComponent", function() { return EditAccidentTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_accidenTracking_services_action_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/accidenTracking/services/action-plan.service */ "hxjb");
/* harmony import */ var src_app_accidenTracking_services_accident_tracking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/accidenTracking/services/accident-tracking.service */ "VdgT");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function EditAccidentTrackingComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditAccidentTrackingComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditAccidentTrackingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditAccidentTrackingComponent_form_4_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.name);
} }
function EditAccidentTrackingComponent_form_4_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.name);
} }
function EditAccidentTrackingComponent_form_4_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r17.name, " ");
} }
function EditAccidentTrackingComponent_form_4_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r18._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r18.name);
} }
function EditAccidentTrackingComponent_form_4_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r19._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.name);
} }
function EditAccidentTrackingComponent_form_4_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r20._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r20.name);
} }
function EditAccidentTrackingComponent_form_4_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r21._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r21.name);
} }
function EditAccidentTrackingComponent_form_4_div_54_div_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r27._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r27.name);
} }
function EditAccidentTrackingComponent_form_4_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Plan de accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EditAccidentTrackingComponent_form_4_div_54_div_1_mat_option_5_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "mat-datepicker-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-datepicker", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditAccidentTrackingComponent_form_4_div_54_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.removeActionPlan(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r24.groupActionPlan(i_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r24.data.typeActionPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r26);
} }
function EditAccidentTrackingComponent_form_4_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditAccidentTrackingComponent_form_4_div_54_div_1_Template, 16, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.loading);
} }
function EditAccidentTrackingComponent_form_4_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Evidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("href", ctx_r14.user.pdf, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EditAccidentTrackingComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Fecha del reporte de seguimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditAccidentTrackingComponent_form_4_mat_option_12_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Empresa Involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Andres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EditAccidentTrackingComponent_form_4_mat_option_19_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EditAccidentTrackingComponent_form_4_mat_option_24_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Actividad involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, EditAccidentTrackingComponent_form_4_mat_option_33_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Clasificacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, EditAccidentTrackingComponent_form_4_mat_option_38_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Parte del cuerpo involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, EditAccidentTrackingComponent_form_4_mat_option_43_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Tipo de lesion/da\u00F1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, EditAccidentTrackingComponent_form_4_mat_option_48_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Plan de accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditAccidentTrackingComponent_form_4_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.addActionPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Agregar plan de accion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, EditAccidentTrackingComponent_form_4_div_54_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Evidencia .pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, EditAccidentTrackingComponent_form_4_div_60_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EditAccidentTrackingComponent_form_4_Template_input_change_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.fileSeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditAccidentTrackingComponent_form_4_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.OnSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.accidentTrackingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.contractors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.companyInvolveds);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.areas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.activityInvolveds);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.classifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.injuredBodyParts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data.injuredTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.actionPlanArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.accidentTrackingForm.valid);
} }
class EditAccidentTrackingComponent {
    constructor(_fb, _route, _actionPlanService, _accidentTrackingService, authService, router) {
        this._fb = _fb;
        this._route = _route;
        this._actionPlanService = _actionPlanService;
        this._accidentTrackingService = _accidentTrackingService;
        this.authService = authService;
        this.router = router;
        this.allowDelete = true;
        this.loading = true;
        this.edit = true;
        this.startDate = new Date(1990, 0, 1);
        this.accidentTrackingForm = this._fb.group({
            date: [Date.now(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contractor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyInvolved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            activityInvolved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            classification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            injuredBodyPart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            injuredType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionPlanArray: this._fb.array([]),
        });
        this.id = this._route.snapshot.params.id;
        this.maxActionPlan = true;
        this._accidentTrackingService.getInfoForCreate().subscribe((dataForCreateForm) => {
            this.data = dataForCreateForm;
            this._accidentTrackingService.getById(this.id).subscribe((dataAcc) => {
                this.user = dataAcc.items;
                this._actionPlanService.getByAccident(this.id).subscribe((dataAct) => {
                    this.user.actionPlanArray = dataAct.items;
                    this.setValues(this.user);
                });
            });
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err, 'error');
        });
        this.title = 'Editar seguimiento de accidente';
    }
    setValues(data) {
        this.accidentTrackingForm.patchValue({
            date: this.user.date,
            contractor: this.user.contractor._id,
            companyInvolved: this.user.companyInvolved._id,
            area: this.user.area._id,
            description: this.user.description,
            activityInvolved: this.user.activityInvolved._id,
            classification: this.user.classification._id,
            injuredBodyPart: this.user.injuredBodyPart._id,
            injuredType: this.user.injuredType._id,
        });
        this.user.actionPlanArray.forEach((actionPlan) => {
            this.addActionPlanWithData(actionPlan);
        });
        this.loading = false;
    }
    addActionPlanWithData(data) {
        this.actionPlanArray.push(this._fb.group({
            id: data._id,
            actionPlan: [data.actionPlan, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateCompliance: [data.dateCompliance, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            number: [data.number],
        }));
        if (this.actionPlanArray.length >= 7) {
            this.maxActionPlan = true;
        }
    }
    get actionPlanArray() {
        return this.accidentTrackingForm.get('actionPlanArray');
    }
    groupActionPlan(i) {
        return this.actionPlanArray.controls[i];
    }
    addActionPlan() {
        this.actionPlanArray.push(this._fb.group({
            actionPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateCompliance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            number: [''],
        }));
        if (this.actionPlanArray.length >= 7) {
            this.maxActionPlan = true;
        }
    }
    removeActionPlan(item) {
        this.actionPlanArray.removeAt(item);
    }
    OnSubmit() {
        const _a = this.accidentTrackingForm.value, { actionPlanArray } = _a, data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["actionPlanArray"]);
        actionPlanArray.forEach((el, index) => {
            el.number = index;
        });
        this._accidentTrackingService.update(this.user._id, data).subscribe((d) => {
            this._actionPlanService.updateArray(this.user._id, actionPlanArray).subscribe((resp) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
                this.router.navigateByUrl('/accidentes/seguimientoAccidentes');
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
            });
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    delete() {
        let isAdmin;
        this.authService.isAdmin().subscribe(d => {
            isAdmin = d;
        });
        if (isAdmin) {
            this._accidentTrackingService.delete(this.id).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Eliminado', 'success');
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
            });
        }
    }
    download() { }
}
EditAccidentTrackingComponent.ɵfac = function EditAccidentTrackingComponent_Factory(t) { return new (t || EditAccidentTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_action_plan_service__WEBPACK_IMPORTED_MODULE_5__["ActionPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_accident_tracking_service__WEBPACK_IMPORTED_MODULE_6__["AccidentTrackingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditAccidentTrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditAccidentTrackingComponent, selectors: [["app-edit-accident-tracking"]], decls: 5, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "spinner-container", 4, "ngIf"], ["class", "example-form", 3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "spinner-container"], [1, "example-form", 3, "formGroup"], ["appearance", "fill"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "contractor"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "companyInvolved", "placeholder", "Empresa involucrada"], ["value", "jose"], ["formControlName", "area"], [1, "example-full-width"], ["matInput", "", "formControlName", "description"], ["formControlName", "activityInvolved"], ["formControlName", "classification"], ["formControlName", "injuredBodyPart"], ["formControlName", "injuredType"], ["formArrayName", "actionPlanArray"], ["mat-flat-button", "", "color", "primary", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["placeholder", "Placeholder", "type", "file", "accept", ".pdf", 3, "change"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [3, "value"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["formControlName", "actionPlan"], ["matInput", "", "formControlName", "dateCompliance", 3, "matDatepicker"], ["mat-fab", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "target", "_blank"]], template: function EditAccidentTrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditAccidentTrackingComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EditAccidentTrackingComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EditAccidentTrackingComponent_form_4_Template, 64, 13, "form", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"]], encapsulation: 2 });


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]], exports: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]] }); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _index_index_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.module */ "rSti");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _accidenTracking_acciden_tracking_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accidenTracking/acciden-tracking.module */ "QSsp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _accidenTracking_acciden_tracking_module__WEBPACK_IMPORTED_MODULE_10__["AccidenTrackingModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _index_index_module__WEBPACK_IMPORTED_MODULE_3__["IndexModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _accidenTracking_acciden_tracking_module__WEBPACK_IMPORTED_MODULE_10__["AccidenTrackingModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
        _index_index_module__WEBPACK_IMPORTED_MODULE_3__["IndexModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "Zawe":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 4, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ERROR: 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pagina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "a9qY":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/accident-tracking/search-acciden-tracking/search-acciden-tracking.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SearchAccidenTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAccidenTrackingComponent", function() { return SearchAccidenTrackingComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_accident_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/accident-tracking.service */ "VdgT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");










function SearchAccidenTrackingComponent_table_6_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SearchAccidenTrackingComponent_table_6_th_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return $event ? ctx_r15.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function SearchAccidenTrackingComponent_table_6_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchAccidenTrackingComponent_table_6_td_3_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function SearchAccidenTrackingComponent_table_6_td_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const row_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return $event ? ctx_r19.selection.toggle(row_r17) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r17))("aria-label", ctx_r2.checkboxLabel(row_r17));
} }
function SearchAccidenTrackingComponent_table_6_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Fecha de registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchAccidenTrackingComponent_table_6_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r21.dataRegistration);
} }
function SearchAccidenTrackingComponent_table_6_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchAccidenTrackingComponent_table_6_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r22.contractor.name);
} }
function SearchAccidenTrackingComponent_table_6_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Compa\u00F1ia involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchAccidenTrackingComponent_table_6_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r23.companyInvolved.name);
} }
function SearchAccidenTrackingComponent_table_6_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchAccidenTrackingComponent_table_6_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r24.area.name);
} }
function SearchAccidenTrackingComponent_table_6_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tipo de lesion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchAccidenTrackingComponent_table_6_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r25.injuredType.name);
} }
function SearchAccidenTrackingComponent_table_6_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
} }
function SearchAccidenTrackingComponent_table_6_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchAccidenTrackingComponent_table_6_tr_20_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const row_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.clickRow(row_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchAccidenTrackingComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchAccidenTrackingComponent_table_6_th_2_Template, 2, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchAccidenTrackingComponent_table_6_td_3_Template, 2, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchAccidenTrackingComponent_table_6_th_5_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchAccidenTrackingComponent_table_6_td_6_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchAccidenTrackingComponent_table_6_th_8_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SearchAccidenTrackingComponent_table_6_td_9_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SearchAccidenTrackingComponent_table_6_th_11_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SearchAccidenTrackingComponent_table_6_td_12_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SearchAccidenTrackingComponent_table_6_th_14_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SearchAccidenTrackingComponent_table_6_td_15_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SearchAccidenTrackingComponent_table_6_th_17_Template, 2, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SearchAccidenTrackingComponent_table_6_td_18_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SearchAccidenTrackingComponent_table_6_tr_19_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SearchAccidenTrackingComponent_table_6_tr_20_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class SearchAccidenTrackingComponent {
    constructor(accidentService, _router) {
        this.accidentService = accidentService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        //checkbox
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
        this.totalPages = 0;
        this.title = 'Seguimiento de Accidentes';
        this.displayedColumns = ["Seleccionar", 'Fecha de registro', "Compañia involucrada", "Contratista", "Area", "Tipo de lesion"];
        this.edit = true;
        this.accidentService.get('').subscribe((data) => {
            this.data = data;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    ;
    applyFilter(event) {
        this.accidentService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.accidentService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/seguimientoAccidentes/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.data);
    }
    download() {
        let ids = [];
        this.selection.selected.forEach(d => {
            ids.push(d._id);
        });
        this.accidentService.getCSV(ids).subscribe((data) => {
            this.downloadFile(data);
        }, (err) => {
        });
    }
    downloadFile(data) {
        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
SearchAccidenTrackingComponent.ɵfac = function SearchAccidenTrackingComponent_Factory(t) { return new (t || SearchAccidenTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_accident_tracking_service__WEBPACK_IMPORTED_MODULE_3__["AccidentTrackingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchAccidenTrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchAccidenTrackingComponent, selectors: [["app-search-acciden-tracking"]], viewQuery: function SearchAccidenTrackingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 8, vars: 6, consts: [["mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", 3, "click"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Seleccionar"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Fecha de registro"], ["matColumnDef", "Contratista"], ["matColumnDef", "Compa\u00F1ia involucrada"], ["matColumnDef", "Area"], ["matColumnDef", "Tipo de lesion"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function SearchAccidenTrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchAccidenTrackingComponent_Template_a_click_4_listener() { return ctx.download(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchAccidenTrackingComponent_table_6_Template, 21, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-paginator", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.example-table-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 200px;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.example-loading-shade[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 56px;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.15);\r\n    z-index: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.example-rate-limit-reached[_ngcontent-%COMP%] {\r\n    max-width: 360px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\r\n    max-width: 64px;\r\n}\r\n\r\n.mat-column-created[_ngcontent-%COMP%] {\r\n    max-width: 124px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1hY2NpZGVuLXRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYzs7QUFFZDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osUUFBUTtJQUNSLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBLGtCQUFrQjs7QUFFbEI7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzZWFyY2gtYWNjaWRlbi10cmFja2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiA1NnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XHJcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogQ29sdW1uIFdpZHRocyAqL1xyXG5cclxuLm1hdC1jb2x1bW4tbnVtYmVyLFxyXG4ubWF0LWNvbHVtbi1zdGF0ZSB7XHJcbiAgICBtYXgtd2lkdGg6IDY0cHg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNyZWF0ZWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjRweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "aEM9":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/evidenceReport/createEvidenceReport/create-evidenceReport.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CreateEvidenceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEvidenceReportComponent", function() { return CreateEvidenceReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_evidenceReport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/accidenTracking/services/evidenceReport.service */ "+mlw");
/* harmony import */ var src_app_accidenTracking_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/accidenTracking/services/upload.service */ "regq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function CreateEvidenceReportComponent_form_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.name);
} }
function CreateEvidenceReportComponent_form_2_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.name);
} }
function CreateEvidenceReportComponent_form_2_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r12._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12.name);
} }
function CreateEvidenceReportComponent_form_2_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r13.name);
} }
function CreateEvidenceReportComponent_form_2_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.name);
} }
function CreateEvidenceReportComponent_form_2_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.name);
} }
function CreateEvidenceReportComponent_form_2_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.name);
} }
function CreateEvidenceReportComponent_form_2_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("src", ctx_r9.dataActual.photoUnsafeCondition, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CreateEvidenceReportComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateEvidenceReportComponent_form_2_mat_option_5_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Empresa observada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CreateEvidenceReportComponent_form_2_mat_option_10_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreateEvidenceReportComponent_form_2_mat_option_15_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CreateEvidenceReportComponent_form_2_mat_option_20_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Observacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Potencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, CreateEvidenceReportComponent_form_2_mat_option_29_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Actividad involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CreateEvidenceReportComponent_form_2_mat_option_34_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, CreateEvidenceReportComponent_form_2_mat_option_39_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Fecha de cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "mat-datepicker", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Registro Fotografico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, CreateEvidenceReportComponent_form_2_div_52_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateEvidenceReportComponent_form_2_Template_input_change_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.fileSeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Abierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Cerrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Observaciones (Comentarios)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEvidenceReportComponent_form_2_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.OnSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.supervisor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.companyObserved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.contractor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.potential);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.activityInvolved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dataForm.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
} }
class CreateEvidenceReportComponent {
    constructor(fb, service, uploadService) {
        this.fb = fb;
        this.service = service;
        this.uploadService = uploadService;
        this.edit = false;
        this.title = 'Reporte de evidencia';
        this.loading = true;
        this.service.getInfoForCreate().subscribe((data) => {
            this.dataForm = data.items;
            this.initForm();
        });
    }
    fileSeleted(event) {
        this.file = event.target.files[0];
    }
    initForm() {
        // FormControl
        // FormGroup
        // FormArray
        // Formbuild.group
        this.form = this.fb.group({
            supervisor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contractor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            potential: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            activityInvolved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            closingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observations: [''],
        });
        this.loading = false;
    }
    OnSubmit() {
        this.service.create(this.form.value).subscribe((data) => {
            if (this.file) {
                this.uploadService.uploadImage(this.file).subscribe((url) => {
                    const _a = data.items, { _id } = _a, resData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["_id"]);
                    resData.photoUnsafeCondition = url.msg;
                    this.service.update(_id, resData).subscribe((dataUpdated) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
                    });
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Perfecto...', 'Registrado', 'success');
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
}
CreateEvidenceReportComponent.ɵfac = function CreateEvidenceReportComponent_Factory(t) { return new (t || CreateEvidenceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_evidenceReport_service__WEBPACK_IMPORTED_MODULE_4__["EvidenceReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_accidenTracking_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"])); };
CreateEvidenceReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateEvidenceReportComponent, selectors: [["app-evidenceReport"]], decls: 3, vars: 2, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "supervisor"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "companyObserved"], ["formControlName", "contractor"], ["formControlName", "area"], ["matInput", "", "formControlName", "observation"], ["formControlName", "potential"], ["formControlName", "activityInvolved"], ["formControlName", "city"], ["matInput", "", "formControlName", "closingDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["placeholder", "Placeholder", "type", "file", "accept", ".jpg,.jpeg,.png", 3, "change"], ["formControlName", "status"], ["value", "ABIERTO"], ["value", "CERRADO"], ["matInput", "", "formControlName", "observations"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [3, "value"], ["mat-card-image", ""]], template: function CreateEvidenceReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreateEvidenceReportComponent_form_2_Template, 69, 12, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXZpZGVuY2VSZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "aInU":
/*!*************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/users/index-user/index-user.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IndexUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexUserComponent", function() { return IndexUserComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/accidenTracking/services/user.service */ "kglH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexUserComponent_table_10_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexUserComponent_table_10_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.username);
} }
function IndexUserComponent_table_10_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexUserComponent_table_10_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexUserComponent_table_10_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexUserComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexUserComponent_table_10_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexUserComponent_table_10_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexUserComponent_table_10_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexUserComponent_table_10_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexUserComponent {
    constructor(userService, _router) {
        this.userService = userService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Usuarios';
        this.displayedColumns = ['usuario'];
        this.userService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.userService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.userService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/usuarios/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexUserComponent.ɵfac = function IndexUserComponent_Factory(t) { return new (t || IndexUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_accidenTracking_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexUserComponent, selectors: [["app-index-user"]], viewQuery: function IndexUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 12, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "usuario"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexUserComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexUserComponent_Template_input_ngModelChange_8_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, IndexUserComponent_table_10_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoiaW5kZXgtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "am0r":
/*!*****************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/body-parts/edit/edit-body-parts.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditBodyPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBodyPartComponent", function() { return EditBodyPartComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/injured-body-part.service */ "eIIX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditBodyPartComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditBodyPartComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditBodyPartComponent {
    constructor(bodyPartService, fb, route, router) {
        this.bodyPartService = bodyPartService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar parte del cuerpo';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.bodyPartService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.bodyPartService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.bodyPartService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditBodyPartComponent.ɵfac = function EditBodyPartComponent_Factory(t) { return new (t || EditBodyPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_3__["InjuredBodyPartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditBodyPartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditBodyPartComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditBodyPartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditBodyPartComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditBodyPartComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "bVWu":
/*!*************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/supervisor/index-supervisor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorComponent", function() { return SupervisorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SupervisorComponent {
    constructor() { }
    ngOnInit() { }
}
SupervisorComponent.ɵfac = function SupervisorComponent_Factory(t) { return new (t || SupervisorComponent)(); };
SupervisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupervisorComponent, selectors: [["app-supervisor"]], decls: 1, vars: 0, template: function SupervisorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "bojr":
/*!*********************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/company-involved/create/create-company-involved.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateCompanyInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyInvolvedComponent", function() { return CreateCompanyInvolvedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_company_involved_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/company-involved.service */ "GuJl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateCompanyInvolvedComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateCompanyInvolvedComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateCompanyInvolvedComponent {
    constructor(companyInvolvedService, fb) {
        this.companyInvolvedService = companyInvolvedService;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear empresa involucrada';
        this.contractors = [];
        this.companyInvolvedService.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.companyInvolvedService.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
    delete() { }
}
CreateCompanyInvolvedComponent.ɵfac = function CreateCompanyInvolvedComponent_Factory(t) { return new (t || CreateCompanyInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_company_involved_service__WEBPACK_IMPORTED_MODULE_3__["CompanyInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateCompanyInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateCompanyInvolvedComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateCompanyInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateCompanyInvolvedComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateCompanyInvolvedComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.isLoggedIn = true;
        this.rememberme = false;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        if (localStorage.getItem('username')) {
            this.loginForm.setValue({
                username: localStorage.getItem('username'),
                password: ''
            });
        }
    }
    OnSubmit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            allowOutsideClick: false,
            text: 'Espere por favor',
            icon: 'info',
            confirmButtonText: 'Cool',
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
        this.authService.login(this.loginForm.value).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.close();
            if (this.rememberme) {
                localStorage.setItem('username', this.loginForm.value.username);
            }
            this.authService.isAdmin().subscribe(data => {
            }, err => {
            });
            this.router.navigateByUrl('/accidentes');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 6, consts: [[3, "formGroup"], [1, "row", "text-center"], [1, "row"], ["appearance", "fill", "floatLabel", "always"], ["matInput", "", "type", "text", "formControlName", "username", 1, "example-right-align"], ["matPrefix", ""], ["appearance", "fill"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Ingresa tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "vpn_key");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dR12":
/*!******************************************!*\
  !*** ./src/app/guards/is-admin.guard.ts ***!
  \******************************************/
/*! exports provided: IsAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminGuard", function() { return IsAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");


class IsAdminGuard {
    constructor(authSerivce) {
        this.authSerivce = authSerivce;
        this.isAdmin = false;
    }
    canActivate() {
        this.authSerivce.isAdmin().subscribe(data => {
            this.isAdmin = true;
        }, err => {
            this.isAdmin = false;
        });
        return this.isAdmin;
    }
}
IsAdminGuard.ɵfac = function IsAdminGuard_Factory(t) { return new (t || IsAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
IsAdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsAdminGuard, factory: IsAdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dfiA":
/*!***************************************************************!*\
  !*** ./src/app/accidenTracking/services/potential.service.ts ***!
  \***************************************************************/
/*! exports provided: PotentialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PotentialService", function() { return PotentialService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "TBG0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PotentialService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(http) {
        super('potential', http);
    }
}
PotentialService.ɵfac = function PotentialService_Factory(t) { return new (t || PotentialService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PotentialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PotentialService, factory: PotentialService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eIIX":
/*!***********************************************************************!*\
  !*** ./src/app/accidenTracking/services/injured-body-part.service.ts ***!
  \***********************************************************************/
/*! exports provided: InjuredBodyPartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjuredBodyPartService", function() { return InjuredBodyPartService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class InjuredBodyPartService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/injuredBodyPart';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
InjuredBodyPartService.ɵfac = function InjuredBodyPartService_Factory(t) { return new (t || InjuredBodyPartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InjuredBodyPartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InjuredBodyPartService, factory: InjuredBodyPartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eXq3":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/action-plan/edit/edit-action-plan.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditActionPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActionPlanComponent", function() { return EditActionPlanComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_type_action_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/type-action-plan.service */ "2tYg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditActionPlanComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditActionPlanComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditActionPlanComponent {
    constructor(actionPlanService, fb, route, router) {
        this.actionPlanService = actionPlanService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar plan de accion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.actionPlanService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.result.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.actionPlanService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.actionPlanService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    ngOnInit() { }
}
EditActionPlanComponent.ɵfac = function EditActionPlanComponent_Factory(t) { return new (t || EditActionPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_type_action_plan_service__WEBPACK_IMPORTED_MODULE_3__["TypeActionPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditActionPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditActionPlanComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditActionPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditActionPlanComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditActionPlanComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "hUmc":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/evidenceReport/searchEvidenceReport/search-evidenceReport.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SearchEvidenceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEvidenceReportComponent", function() { return SearchEvidenceReportComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_evidenceReport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/accidenTracking/services/evidenceReport.service */ "+mlw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function SearchEvidenceReportComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Actividad involucrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r20.activityInvolved.name);
} }
function SearchEvidenceReportComponent_table_9_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r21.area.name);
} }
function SearchEvidenceReportComponent_table_9_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r22.city.name);
} }
function SearchEvidenceReportComponent_table_9_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha de cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r23.closingDate);
} }
function SearchEvidenceReportComponent_table_9_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Empresa observada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r24.companyObserved.name);
} }
function SearchEvidenceReportComponent_table_9_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r25.contractor.name);
} }
function SearchEvidenceReportComponent_table_9_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Potencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r26.potential.name);
} }
function SearchEvidenceReportComponent_table_9_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r27.supervisor.name);
} }
function SearchEvidenceReportComponent_table_9_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
} }
function SearchEvidenceReportComponent_table_9_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchEvidenceReportComponent_table_9_tr_26_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const row_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.clickRow(row_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchEvidenceReportComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchEvidenceReportComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchEvidenceReportComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchEvidenceReportComponent_table_9_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchEvidenceReportComponent_table_9_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchEvidenceReportComponent_table_9_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchEvidenceReportComponent_table_9_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchEvidenceReportComponent_table_9_th_11_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchEvidenceReportComponent_table_9_td_12_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SearchEvidenceReportComponent_table_9_th_14_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SearchEvidenceReportComponent_table_9_td_15_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SearchEvidenceReportComponent_table_9_th_17_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchEvidenceReportComponent_table_9_td_18_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SearchEvidenceReportComponent_table_9_th_20_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SearchEvidenceReportComponent_table_9_td_21_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SearchEvidenceReportComponent_table_9_th_23_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SearchEvidenceReportComponent_table_9_td_24_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SearchEvidenceReportComponent_table_9_tr_25_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SearchEvidenceReportComponent_table_9_tr_26_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class SearchEvidenceReportComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Reporte de evidencias';
        this.displayedColumns = ['Actividad involucrada', 'Area', 'Ciudad', 'Fecha de cierre', 'Empresa observada', 'Contratista', 'Potencial', 'Supervisor',];
        this.service.get('').subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.service.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.service.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/reporteEvidencia/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
SearchEvidenceReportComponent.ɵfac = function SearchEvidenceReportComponent_Factory(t) { return new (t || SearchEvidenceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_accidenTracking_services_evidenceReport_service__WEBPACK_IMPORTED_MODULE_2__["EvidenceReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchEvidenceReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchEvidenceReportComponent, selectors: [["app-search-evidenceReport"]], viewQuery: function SearchEvidenceReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Actividad involucrada"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Area"], ["matColumnDef", "Ciudad"], ["matColumnDef", "Fecha de cierre"], ["matColumnDef", "Empresa observada"], ["matColumnDef", "Contratista"], ["matColumnDef", "Potencial"], ["matColumnDef", "Supervisor"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function SearchEvidenceReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchEvidenceReportComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function SearchEvidenceReportComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchEvidenceReportComponent_table_9_Template, 27, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1ldmlkZW5jZVJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZiIsImZpbGUiOiJzZWFyY2gtZXZpZGVuY2VSZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "hknc":
/*!***********************************************************************!*\
  !*** ./src/app/accidenTracking/services/activity-involved.service.ts ***!
  \***********************************************************************/
/*! exports provided: ActivityInvolvedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityInvolvedService", function() { return ActivityInvolvedService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ActivityInvolvedService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/activityInvolved';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
ActivityInvolvedService.ɵfac = function ActivityInvolvedService_Factory(t) { return new (t || ActivityInvolvedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ActivityInvolvedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActivityInvolvedService, factory: ActivityInvolvedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hxjb":
/*!*****************************************************************!*\
  !*** ./src/app/accidenTracking/services/action-plan.service.ts ***!
  \*****************************************************************/
/*! exports provided: ActionPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPlanService", function() { return ActionPlanService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ActionPlanService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
    }
    // create(data) :Observable<any>{
    //   return this._http.post(this.baseUrl+'/typeActionPlan',data);
    // }
    // get() :Observable<any>{
    //   return this._http.get(this.baseUrl+'/typeActionPlan');
    // }
    getByAccident(id) {
        return this._http.get(this.baseUrl + '/actionPlan/accident/' + id);
    }
    updateArray(id, data) {
        return this._http.put(this.baseUrl + '/update/array/' + id, { actionPlanArray: data });
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
}
ActionPlanService.ɵfac = function ActionPlanService_Factory(t) { return new (t || ActionPlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ActionPlanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActionPlanService, factory: ActionPlanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jIpB":
/*!********************************************************************************!*\
  !*** ./src/app/accidenTracking/components/action-plan/actionplan.component.ts ***!
  \********************************************************************************/
/*! exports provided: ActionPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPlanComponent", function() { return ActionPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ActionPlanComponent {
    constructor() { }
    ngOnInit() { }
}
ActionPlanComponent.ɵfac = function ActionPlanComponent_Factory(t) { return new (t || ActionPlanComponent)(); };
ActionPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionPlanComponent, selectors: [["app-actioplan"]], decls: 1, vars: 0, template: function ActionPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], ["href", "https://github.com/Crisfon6", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Desarrollador por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crisfon6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtBQUNaIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "jZ8C":
/*!***************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/classifications/edit/edit-classifications.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditClassificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassificationComponent", function() { return EditClassificationComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/classification.service */ "K9x0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditClassificationComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditClassificationComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditClassificationComponent {
    constructor(classificationService, fb, route, router) {
        this.classificationService = classificationService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar plan de accion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.classificationService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.classificationService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.classificationService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditClassificationComponent.ɵfac = function EditClassificationComponent_Factory(t) { return new (t || EditClassificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_classification_service__WEBPACK_IMPORTED_MODULE_3__["ClassificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditClassificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditClassificationComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditClassificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditClassificationComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditClassificationComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "k51n":
/*!*********************************************************************************!*\
  !*** ./src/app/accidenTracking/components/city/search/search-city.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCityComponent", function() { return SearchCityComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/city.service */ "u8bl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function SearchCityComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ciudades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchCityComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function SearchCityComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function SearchCityComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchCityComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchCityComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchCityComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchCityComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchCityComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchCityComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class SearchCityComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Ciudades';
        this.displayedColumns = ['Ciudades'];
        this.service.get('').subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.service.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.service.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/ciudad/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
SearchCityComponent.ɵfac = function SearchCityComponent_Factory(t) { return new (t || SearchCityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchCityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchCityComponent, selectors: [["search-city"]], viewQuery: function SearchCityComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Ciudades"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function SearchCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchCityComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function SearchCityComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchCityComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6InNlYXJjaC1jaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "kglH":
/*!**********************************************************!*\
  !*** ./src/app/accidenTracking/services/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    get(mean = '', skip = 0, limit = 30) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            skip: String(skip),
            limit: String(limit),
            mean,
        });
        return this._http.get(this.baseUrl + `/user/?mean=${mean}&skip=${skip}&limit=${limit}`, { headers });
    }
    getById(id) {
        const url = `${this.baseUrl}/user/id/${id}`;
        return this._http.get(url);
    }
    delete(id) {
        const url = `${this.baseUrl}/user/delete/${id}`;
        return this._http.delete(url);
    }
    create(data) {
        return this._http.post(this.baseUrl + '/user', data);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(http) {
        this.http = http;
        this.userToken = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/auth';
        this.readToken();
    }
    logout() {
        localStorage.removeItem('token');
        this.userToken = '';
    }
    login(data) {
        return this.http.post(this.baseUrl + '/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((resp) => {
            this.saveToken(String(resp['token']));
            return resp;
        }));
    }
    saveToken(idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
    }
    readToken() {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token') || '';
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    }
    isAuthenticated() {
        return this.userToken.length > 2;
    }
    isAdmin() {
        return this.http.get(this.baseUrl + '/isAdmin');
        // .pipe(
        //   map((resp:any) => {
        //     this.isAdmin =true;
        //     return resp;
        //   }
        //   )
        // );
    }
    getToken() { return this.userToken; }
    ;
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lThu":
/*!*************************************************************************!*\
  !*** ./src/app/accidenTracking/components/users/edit/edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/user.service */ "kglH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");













function EditUserComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditUserComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditUserComponent {
    constructor(_fb, userService, route, router) {
        this._fb = _fb;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.title = "Editar Usuario";
        this.form = this._fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.id = this.route.snapshot.params.id;
        this.userService.getById(this.id).subscribe(user => {
            this.form.setValue({
                username: user.user.username,
                password: ''
            });
        });
    }
    delete() {
        this.userService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["edit-user"]], decls: 23, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "username"], ["type", "text", "matInput", "", "formControlName", "password"], ["formControlName", "role"], ["value", "ADMIN"], ["value", "NORMAL"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["role", "list"], ["mat-raised-button", "", 3, "click"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditUserComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditUserComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Rol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-list", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "mUMo":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/potential/search/search-potential.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchPotentialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPotentialComponent", function() { return SearchPotentialComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_potential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/accidenTracking/services/potential.service */ "dfiA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function SearchPotentialComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Potencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPotentialComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function SearchPotentialComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function SearchPotentialComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPotentialComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchPotentialComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchPotentialComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchPotentialComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchPotentialComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchPotentialComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class SearchPotentialComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Potencial';
        this.displayedColumns = ['Potencial'];
        this.service.get('').subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.service.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.service.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/potencial/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
SearchPotentialComponent.ɵfac = function SearchPotentialComponent_Factory(t) { return new (t || SearchPotentialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_accidenTracking_services_potential_service__WEBPACK_IMPORTED_MODULE_2__["PotentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchPotentialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchPotentialComponent, selectors: [["potential-action-plan"]], viewQuery: function SearchPotentialComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Potencial"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function SearchPotentialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchPotentialComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function SearchPotentialComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchPotentialComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1wb3RlbnRpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoic2VhcmNoLXBvdGVudGlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "nR/L":
/*!***********************************************!*\
  !*** ./src/app/index/index-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "MNlx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: 'inicio', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"] },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },];
class IndexRoutingModule {
}
IndexRoutingModule.ɵfac = function IndexRoutingModule_Factory(t) { return new (t || IndexRoutingModule)(); };
IndexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IndexRoutingModule });
IndexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IndexRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "njZv":
/*!*****************************************************************************!*\
  !*** ./src/app/accidenTracking/components/city/edit/edit-city.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCityComponent", function() { return EditCityComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/city.service */ "u8bl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditCityComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCityComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditCityComponent {
    constructor(service, fb, route, router) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.title = 'Editar plan de accion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.service.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name,
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.service.disable(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    ngOnInit() { }
}
EditCityComponent.ɵfac = function EditCityComponent_Factory(t) { return new (t || EditCityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditCityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCityComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditCityComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditCityComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "o+8Q":
/*!***********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/type-injury/create/create-type-injury.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateTypeInjuryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTypeInjuryComponent", function() { return CreateTypeInjuryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_injured_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/injured-type.service */ "5CqF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateTypeInjuryComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateTypeInjuryComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateTypeInjuryComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear tipo de lesion';
        this.contractors = [];
        this.service.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
    delete() { }
}
CreateTypeInjuryComponent.ɵfac = function CreateTypeInjuryComponent_Factory(t) { return new (t || CreateTypeInjuryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_injured_type_service__WEBPACK_IMPORTED_MODULE_3__["InjuredTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateTypeInjuryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateTypeInjuryComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateTypeInjuryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateTypeInjuryComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateTypeInjuryComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "p4q3":
/*!**********************************************************************************!*\
  !*** ./src/app/accidenTracking/components/areas/create/create-area.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAreaComponent", function() { return CreateAreaComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/area.service */ "scAG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateAreaComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateAreaComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateAreaComponent {
    constructor(areaServices, fb) {
        this.areaServices = areaServices;
        this.fb = fb;
        this.allowDelete = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear area';
        this.contractors = [];
        this.areaServices.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.areaServices.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
    delete() { }
}
CreateAreaComponent.ɵfac = function CreateAreaComponent_Factory(t) { return new (t || CreateAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateAreaComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateAreaComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateAreaComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "q6/r":
/*!*****************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/company-involved/edit/edit-company-involved.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditCompanyInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyInvolvedComponent", function() { return EditCompanyInvolvedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_company_involved_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/company-involved.service */ "GuJl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditCompanyInvolvedComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCompanyInvolvedComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditCompanyInvolvedComponent {
    constructor(companyInvolvedService, fb, route, router) {
        this.companyInvolvedService = companyInvolvedService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar empresa involucrada';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.companyInvolvedService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.companyInvolvedService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.companyInvolvedService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditCompanyInvolvedComponent.ɵfac = function EditCompanyInvolvedComponent_Factory(t) { return new (t || EditCompanyInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_company_involved_service__WEBPACK_IMPORTED_MODULE_3__["CompanyInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditCompanyInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCompanyInvolvedComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditCompanyInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditCompanyInvolvedComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditCompanyInvolvedComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "qbTv":
/*!*****************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/classifications/index/index-classifications.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: IndexClassificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexClassificationsComponent", function() { return IndexClassificationsComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_classification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/accidenTracking/services/classification.service */ "K9x0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexClassificationsComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Clasificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexClassificationsComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexClassificationsComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexClassificationsComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexClassificationsComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexClassificationsComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexClassificationsComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexClassificationsComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexClassificationsComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexClassificationsComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexClassificationsComponent {
    constructor(classificationService, _router) {
        this.classificationService = classificationService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Clasificaciones';
        this.displayedColumns = ['Clasificaciones'];
        this.classificationService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.classificationService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.classificationService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/clasificaciones/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexClassificationsComponent.ɵfac = function IndexClassificationsComponent_Factory(t) { return new (t || IndexClassificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_accidenTracking_services_classification_service__WEBPACK_IMPORTED_MODULE_2__["ClassificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexClassificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexClassificationsComponent, selectors: [["app-index-activity-involved"]], viewQuery: function IndexClassificationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Clasificaciones"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexClassificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexClassificationsComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexClassificationsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexClassificationsComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWNsYXNzaWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZiIsImZpbGUiOiJpbmRleC1jbGFzc2lmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rMZo":
/*!*****************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/contractor/edit/edit-contractor.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditContractorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContractorComponent", function() { return EditContractorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contractor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/contractor.service */ "2Q4G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditContractorComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditContractorComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditContractorComponent {
    constructor(contractorService, fb, route, router) {
        this.contractorService = contractorService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar contratista';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.contractorService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.contractorService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.contractorService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditContractorComponent.ɵfac = function EditContractorComponent_Factory(t) { return new (t || EditContractorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_contractor_service__WEBPACK_IMPORTED_MODULE_3__["ContractorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditContractorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditContractorComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditContractorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditContractorComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditContractorComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "rSti":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "MNlx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class IndexModule {
}
IndexModule.ɵfac = function IndexModule_Factory(t) { return new (t || IndexModule)(); };
IndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: IndexModule });
IndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](IndexModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]] }); })();


/***/ }),

/***/ "regq":
/*!************************************************************!*\
  !*** ./src/app/accidenTracking/services/upload.service.ts ***!
  \************************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UploadService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/uploads';
    }
    uploadImage(img) {
        const fd = new FormData();
        fd.append('file', img);
        return this.http.post(this.baseUrl + '/img', fd);
    }
    uploadPdf(pdf) {
        const fd = new FormData();
        fd.append('file', pdf);
        return this.http.post(this.baseUrl + '/pdf', fd);
    }
    updateImage(imgOld, img) {
        const fd = new FormData();
        fd.append('file', img);
        return this.http.put(this.baseUrl + '/update/img/' + imgOld, fd);
    }
    updatePdf(pdfOld, pdf) {
        const fd = new FormData();
        fd.append('file', pdf);
        return this.http.put(this.baseUrl + '/update/pdf/' + pdfOld, fd);
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sWkM":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/company-involved/company-involved.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CompanyInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInvolvedComponent", function() { return CompanyInvolvedComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_company_involved_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company-involved.service */ "GuJl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class CompanyInvolvedComponent {
    constructor(companyInvolvedService, fb) {
        this.companyInvolvedService = companyInvolvedService;
        this.fb = fb;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.title = 'Crear empresa involucrada';
        this.contractors = [];
        this.companyInvolvedService.get().subscribe(data => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.companyInvolvedService.create(data).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() {
    }
}
CompanyInvolvedComponent.ɵfac = function CompanyInvolvedComponent_Factory(t) { return new (t || CompanyInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_company_involved_service__WEBPACK_IMPORTED_MODULE_3__["CompanyInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CompanyInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyInvolvedComponent, selectors: [["app-company-involved"]], decls: 1, vars: 0, template: function CompanyInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "scAG":
/*!**********************************************************!*\
  !*** ./src/app/accidenTracking/services/area.service.ts ***!
  \**********************************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AreaService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/area';
    }
    create(data) {
        return this._http.post(this.baseUrl, data);
    }
    get(mean = '', skip = 0, limit = 30) {
        return this._http.get(this.baseUrl + `/?mean=${mean}&skip=${skip}&limit=${limit}`);
    }
    getById(id) {
        return this._http.get(this.baseUrl + '/id/' + id);
    }
    update(id, data) {
        return this._http.put(this.baseUrl + '/update/' + id, data);
    }
    delete(id) {
        return this._http.delete(this.baseUrl + '/delete/' + id);
    }
}
AreaService.ɵfac = function AreaService_Factory(t) { return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AreaService, factory: AreaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tZLD":
/*!*******************************************************************************!*\
  !*** ./src/app/accidenTracking/components/body-parts/body-parts.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BodyPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyPartsComponent", function() { return BodyPartsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/injured-body-part.service */ "eIIX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class BodyPartsComponent {
    constructor(injuredBodyPartService, fb) {
        this.injuredBodyPartService = injuredBodyPartService;
        this.fb = fb;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Crear parte del cuerpo afectada';
        this.contractors = [];
        this.injuredBodyPartService.get().subscribe((data) => {
            this.contractors = data.items;
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.injuredBodyPartService.create(data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() { }
}
BodyPartsComponent.ɵfac = function BodyPartsComponent_Factory(t) { return new (t || BodyPartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_injured_body_part_service__WEBPACK_IMPORTED_MODULE_3__["InjuredBodyPartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
BodyPartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BodyPartsComponent, selectors: [["app-body-parts"]], decls: 1, vars: 0, template: function BodyPartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "tfzD":
/*!*******************************************************************!*\
  !*** ./src/app/accidenTracking/components/city/city.component.ts ***!
  \*******************************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class CityComponent {
    constructor() { }
    ngOnInit() { }
}
CityComponent.ɵfac = function CityComponent_Factory(t) { return new (t || CityComponent)(); };
CityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityComponent, selectors: [["app-city"]], decls: 1, vars: 0, template: function CityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "tknz":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/type-injury/index/index-type-injury.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IndexTypeInjuryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexTypeInjuryComponent", function() { return IndexTypeInjuryComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_injured_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/injured-type.service */ "5CqF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexTypeInjuryComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexTypeInjuryComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexTypeInjuryComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexTypeInjuryComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexTypeInjuryComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexTypeInjuryComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexTypeInjuryComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexTypeInjuryComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexTypeInjuryComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexTypeInjuryComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexTypeInjuryComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Tipos de lesion';
        this.displayedColumns = ['Contratista'];
        this.service.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.service.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.service.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/tiposLesion/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexTypeInjuryComponent.ɵfac = function IndexTypeInjuryComponent_Factory(t) { return new (t || IndexTypeInjuryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_injured_type_service__WEBPACK_IMPORTED_MODULE_2__["InjuredTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexTypeInjuryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexTypeInjuryComponent, selectors: [["app-index-activity-involved"]], viewQuery: function IndexTypeInjuryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Contratista"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexTypeInjuryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexTypeInjuryComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexTypeInjuryComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexTypeInjuryComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LXR5cGUtaW5qdXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6ImluZGV4LXR5cGUtaW5qdXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "u8bl":
/*!**********************************************************!*\
  !*** ./src/app/accidenTracking/services/city.service.ts ***!
  \**********************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "TBG0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CityService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(http) {
        super('city', http);
    }
}
CityService.ɵfac = function CityService_Factory(t) { return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CityService, factory: CityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uAIU":
/*!*********************************************************************************!*\
  !*** ./src/app/accidenTracking/components/type-injury/type-injury.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TypeInjuryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInjuryComponent", function() { return TypeInjuryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TypeInjuryComponent {
}
TypeInjuryComponent.ɵfac = function TypeInjuryComponent_Factory(t) { return new (t || TypeInjuryComponent)(); };
TypeInjuryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypeInjuryComponent, selectors: [["app-type-injury"]], decls: 1, vars: 0, template: function TypeInjuryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");
/* harmony import */ var _index_index_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index-routing.module */ "nR/L");
/* harmony import */ var _accidenTracking_acciden_tracking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accidenTracking/acciden-tracking-routing.module */ "SvUc");
/* harmony import */ var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-routing.module */ "6epW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const ROUTES = [
    // {path:'inicio',component:IndexComponent},
    { path: '', redirectTo: 'accidentes', pathMatch: 'full' },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__["Page404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _index_index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"], _accidenTracking_acciden_tracking_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccidenTrackingRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES),]
        // exports: [RouterModule],
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"], _index_index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"], _accidenTracking_acciden_tracking_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccidenTrackingRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vcca":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/potential/create/create-potential.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreatePotentialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePotentialComponent", function() { return CreatePotentialComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_potential_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/potential.service */ "dfiA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreatePotentialComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePotentialComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreatePotentialComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.allowDelete = false;
        this.title = 'Crear potencial';
        this.contractors = [];
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.create(data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() { }
    delete() { }
}
CreatePotentialComponent.ɵfac = function CreatePotentialComponent_Factory(t) { return new (t || CreatePotentialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_potential_service__WEBPACK_IMPORTED_MODULE_3__["PotentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreatePotentialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreatePotentialComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreatePotentialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreatePotentialComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreatePotentialComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "viIs":
/*!*******************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/contractor/index/index-contractor.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IndexContractorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexContractorComponent", function() { return IndexContractorComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contractor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/contractor.service */ "2Q4G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexContractorComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contratista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexContractorComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexContractorComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexContractorComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexContractorComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexContractorComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexContractorComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexContractorComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexContractorComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexContractorComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexContractorComponent {
    constructor(contractorService, _router) {
        this.contractorService = contractorService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Contratistas';
        this.displayedColumns = ['Contratista'];
        this.contractorService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.contractorService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.contractorService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `accidentes/contratista/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexContractorComponent.ɵfac = function IndexContractorComponent_Factory(t) { return new (t || IndexContractorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contractor_service__WEBPACK_IMPORTED_MODULE_2__["ContractorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexContractorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexContractorComponent, selectors: [["app-index-activity-involved"]], viewQuery: function IndexContractorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Contratista"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexContractorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexContractorComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexContractorComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexContractorComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWNvbnRyYWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoiaW5kZXgtY29udHJhY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "wwFi":
/*!*****************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/supervisor/edit/edit-supervisor.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSupervisorComponent", function() { return EditSupervisorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_accidenTracking_services_supervisor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/accidenTracking/services/supervisor.service */ "+FsF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditSupervisorComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditSupervisorComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditSupervisorComponent {
    constructor(service, fb, route, router) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.title = 'Editar plan de accion';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.service.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name,
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.service.disable(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
    ngOnInit() { }
}
EditSupervisorComponent.ɵfac = function EditSupervisorComponent_Factory(t) { return new (t || EditSupervisorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_accidenTracking_services_supervisor_service__WEBPACK_IMPORTED_MODULE_3__["SupervisorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditSupervisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditSupervisorComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditSupervisorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditSupervisorComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditSupervisorComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "x/4r":
/*!*******************************************************!*\
  !*** ./src/app/accidenTracking/accident.component.ts ***!
  \*******************************************************/
/*! exports provided: AccidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentComponent", function() { return AccidentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");









const _c0 = function () { return ["dashboard"]; };
const _c1 = function () { return ["seguimientoAccidentes"]; };
const _c2 = function () { return ["reporteEvidencia"]; };
const _c3 = function () { return ["ciudad"]; };
const _c4 = function () { return ["supervisor"]; };
const _c5 = function () { return ["potencial"]; };
const _c6 = function () { return ["contratista"]; };
const _c7 = function () { return ["empresaInvolucrada"]; };
const _c8 = function () { return ["area"]; };
const _c9 = function () { return ["actividadaInvolucrada"]; };
const _c10 = function () { return ["clasificaciones"]; };
const _c11 = function () { return ["partesCuerpo"]; };
const _c12 = function () { return ["tiposLesion"]; };
const _c13 = function () { return ["planesAccion"]; };
const _c14 = function () { return ["usuarios"]; };
class AccidentComponent {
    constructor(changeDetectorRef, media, authService, _router) {
        this.authService = authService;
        this._router = _router;
        this.mobileQuery = media.matchMedia('(max-width:600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    logout() {
        this.authService.logout();
        this._router.navigateByUrl('/inicio');
    }
}
AccidentComponent.ɵfac = function AccidentComponent_Factory(t) { return new (t || AccidentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AccidentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccidentComponent, selectors: [["accident-root"]], decls: 46, vars: 34, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], [1, "spacer-btns-nav"], [1, "example-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["sidenav", ""], ["mat-list-item", "", "role", "listitem", "routerLinkActive", "active", 3, "routerLink"], ["mat-list-item", "", "role", "listitem", 1, "logout", 3, "click"]], template: function AccidentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccidentComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Grupo HSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "DashBoard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Seguimiento de Accidentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reporte de evidencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ciudades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Potencial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contratistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Empresa Involucrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Actividad Involucrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Clasificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Partes del cuerpo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tipo de lesion/da\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Planes de accion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccidentComponent_Template_a_click_42_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cerrar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c14));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".spacer-btns-nav[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.global-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 85%;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%] {\r\n    background-color: #df1e6e;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2lkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWNjaWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXItYnRucy1uYXYge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5nbG9iYWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmMWU2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "x7qh":
/*!*********************************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/activity-involved/index/index-activity-involved.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: IndexActivityInvolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexActivityInvolvedComponent", function() { return IndexActivityInvolvedComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_activity_involved_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/activity-involved.service */ "hknc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function IndexActivityInvolvedComponent_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Actividad Envuelta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexActivityInvolvedComponent_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.name);
} }
function IndexActivityInvolvedComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function IndexActivityInvolvedComponent_table_9_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexActivityInvolvedComponent_table_9_tr_5_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.clickRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IndexActivityInvolvedComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexActivityInvolvedComponent_table_9_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexActivityInvolvedComponent_table_9_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexActivityInvolvedComponent_table_9_tr_4_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, IndexActivityInvolvedComponent_table_9_tr_5_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function () { return ["crear"]; };
class IndexActivityInvolvedComponent {
    constructor(activityInvolvedService, _router) {
        this.activityInvolvedService = activityInvolvedService;
        this._router = _router;
        this.isLoading = true;
        this.filter = '';
        this.paginator = '';
        this.pageSize = 30;
        this.totalPages = 0;
        this.title = 'Actividad Envuelta';
        this.displayedColumns = ['Actividad Envuelta'];
        this.activityInvolvedService.get().subscribe((data) => {
            this.data = data.items;
            this.totalPages = Math.floor(data.total / this.pageSize);
            this.isLoading = false;
        });
    }
    ngOnInit() { }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.activityInvolvedService.get(this.filter).subscribe((data) => {
            this.data = data.items;
        });
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe((data) => {
            this.activityInvolvedService.get(this.filter, (data.pageIndex * this.pageSize), ((data.pageIndex + 1) * this.pageSize));
        });
    }
    clickRow(row) {
        const url = `/accidentes/actividadaInvolucrada/editar/${row._id}`;
        this._router.navigateByUrl(url);
    }
}
IndexActivityInvolvedComponent.ɵfac = function IndexActivityInvolvedComponent_Factory(t) { return new (t || IndexActivityInvolvedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activity_involved_service__WEBPACK_IMPORTED_MODULE_2__["ActivityInvolvedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndexActivityInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexActivityInvolvedComponent, selectors: [["app-index-activity-involved"]], viewQuery: function IndexActivityInvolvedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 7, consts: [["mat-raised-button", "", 3, "routerLink"], ["matInput", "", "placeholder", "Ex. Mia", 3, "ngModel", "keyup", "ngModelChange"], ["input", ""], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSize", "length"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Actividad Envuelta"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function IndexActivityInvolvedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IndexActivityInvolvedComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); })("ngModelChange", function IndexActivityInvolvedComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IndexActivityInvolvedComponent_table_9_Template, 6, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize)("length", ctx.totalPages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWFjdGl2aXR5LWludm9sdmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6ImluZGV4LWFjdGl2aXR5LWludm9sdmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "ygha":
/*!*********************************************************************************************!*\
  !*** ./src/app/accidenTracking/components/supervisor/create/create-supervisor.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSupervisorComponent", function() { return CreateSupervisorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_supervisor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supervisor.service */ "+FsF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CreateSupervisorComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateSupervisorComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateSupervisorComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.allowDelete = false;
        this.title = 'Crear potencial';
        this.contractors = [];
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.service.create(data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Registrado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    ngOnInit() { }
    delete() { }
}
CreateSupervisorComponent.ɵfac = function CreateSupervisorComponent_Factory(t) { return new (t || CreateSupervisorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_supervisor_service__WEBPACK_IMPORTED_MODULE_3__["SupervisorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateSupervisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateSupervisorComponent, selectors: [["app-action-plan"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function CreateSupervisorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateSupervisorComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateSupervisorComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ }),

/***/ "zrXT":
/*!******************************************************************************!*\
  !*** ./src/app/accidenTracking/components/areas/edit/edit-area.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAreaComponent", function() { return EditAreaComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/area.service */ "scAG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EditAreaComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditAreaComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditAreaComponent {
    constructor(areaService, fb, route, router) {
        this.areaService = areaService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.allowDelete = true;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.title = 'Editar area';
        this.contractors = [];
        this.id = this.route.snapshot.params.id;
        this.areaService.getById(this.id).subscribe((data) => {
            this.form.setValue({
                name: data.items.name
            });
        });
    }
    onSubmit() {
        const data = this.form.value;
        this.areaService.update(this.id, data).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Actualizado', 'success');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg, 'error');
        });
    }
    delete() {
        this.areaService.delete(this.id).subscribe(d => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Perfecto...', 'Eliminado', 'success');
            this.router.navigateByUrl('/accidentes');
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', err.error.msg[0].msg, 'error');
        });
    }
}
EditAreaComponent.ɵfac = function EditAreaComponent_Factory(t) { return new (t || EditAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditAreaComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "name"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", 3, "click"]], template: function EditAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditAreaComponent_a_2_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditAreaComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], encapsulation: 2 });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map