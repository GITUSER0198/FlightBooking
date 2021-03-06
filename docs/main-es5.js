function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/airline/add-airline/add-airline.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/airline/add-airline/add-airline.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddAirlineComponent */

  /***/
  function srcAppAirlineAddAirlineAddAirlineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAirlineComponent", function () {
      return AddAirlineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddAirlineComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ID is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AddAirlineComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var AddAirlineComponent = /*#__PURE__*/function () {
      function AddAirlineComponent(fb, activeModal, dataService) {
        _classCallCheck(this, AddAirlineComponent);

        this.fb = fb;
        this.activeModal = activeModal;
        this.dataService = dataService;
      }

      _createClass(AddAirlineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addAirlineForm = this.createAddAirlineForm();
          this.addAirlineForm.patchValue({
            name: sessionStorage.getItem('username')
          });
        }
      }, {
        key: "createAddAirlineForm",
        value: function createAddAirlineForm() {
          return this.fb.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country: [''],
            slogan: [''],
            headQuaters: [''],
            website: [''],
            established: ['']
          });
        }
      }, {
        key: "addAirlineFormControl",
        get: function get() {
          return this.addAirlineForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dataService.postAirlineData(this.addAirlineForm.value);
        }
      }]);

      return AddAirlineComponent;
    }();

    AddAirlineComponent.??fac = function AddAirlineComponent_Factory(t) {
      return new (t || AddAirlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    AddAirlineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AddAirlineComponent,
      selectors: [["app-add-airline"]],
      decls: 32,
      vars: 4,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "number", "id", "id", "formControlName", "id", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["type", "text", "id", "country", "formControlName", "country", 1, "form-control"], ["type", "text", "id", "slogan", "formControlName", "slogan", 1, "form-control"], ["type", "text", "id", "headQuaters", "formControlName", "headQuaters", 1, "form-control"], ["type", "text", "id", "website", "formControlName", "website", 1, "form-control"], ["type", "number", "id", "established", "formControlName", "established", 1, "form-control"], [1, "btn", "btn-danger", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function AddAirlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "New Airline Details! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddAirlineComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddAirlineComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AddAirlineComponent_span_9_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AddAirlineComponent_span_13_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Slogan:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " HeadQuaters:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Website:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Established:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addAirlineForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addAirlineFormControl.id.touched && (ctx.addAirlineFormControl.id.errors == null ? null : ctx.addAirlineFormControl.id.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addAirlineFormControl.name.touched && (ctx.addAirlineFormControl.name.errors == null ? null : ctx.addAirlineFormControl.name.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.addAirlineForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FpcmxpbmUvYWRkLWFpcmxpbmUvYWRkLWFpcmxpbmUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddAirlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-airline',
          templateUrl: './add-airline.component.html',
          styleUrls: ['./add-airline.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/airline/airline-details/airline-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/airline/airline-details/airline-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AirlineDetailsComponent */

  /***/
  function srcAppAirlineAirlineDetailsAirlineDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineDetailsComponent", function () {
      return AirlineDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AirlineDetailsComponent = /*#__PURE__*/function () {
      function AirlineDetailsComponent(activeModal) {
        _classCallCheck(this, AirlineDetailsComponent);

        this.activeModal = activeModal;
      }

      _createClass(AirlineDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AirlineDetailsComponent;
    }();

    AirlineDetailsComponent.??fac = function AirlineDetailsComponent_Factory(t) {
      return new (t || AirlineDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    AirlineDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AirlineDetailsComponent,
      selectors: [["app-airline-details"]],
      decls: 24,
      vars: 8,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["alt", "", "width", "90px", 3, "src"], [1, "md-form"], ["type", "text", "id", "airlineId", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "airlineName", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "airlineCountry", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "airlineSlogan", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "airlineWebsite", "disabled", "", 1, "form-control", 3, "value"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
      template: function AirlineDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Airline Details! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AirlineDetailsComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Slogan:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Website:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AirlineDetailsComponent_Template_button_click_22_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"]("flag flag-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.airline.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.airline.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.airline.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.airline.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.airline.slogan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.airline.website);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FpcmxpbmUvYWlybGluZS1kZXRhaWxzL2FpcmxpbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AirlineDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-airline-details',
          templateUrl: './airline-details.component.html',
          styleUrls: ['./airline-details.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/airline/airline.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/airline/airline.component.ts ***!
    \**********************************************/

  /*! exports provided: AirlineComponent */

  /***/
  function srcAppAirlineAirlineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineComponent", function () {
      return AirlineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_airline_add_airline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-airline/add-airline.component */
    "./src/app/airline/add-airline/add-airline.component.ts");
    /* harmony import */


    var _airline_details_airline_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./airline-details/airline-details.component */
    "./src/app/airline/airline-details/airline-details.component.ts");
    /* harmony import */


    var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/airline-loader.service */
    "./src/app/services/airline-loader.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["table"];

    function AirlineComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AirlineComponent_div_14_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r6.id = $event;
        })("focus", function AirlineComponent_div_14_ng_template_3_Template_input_focus_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r8.clearOthers($event);
        })("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r9.searchId();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r10.name = $event;
        })("focus", function AirlineComponent_div_14_ng_template_3_Template_input_focus_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r11.clearOthers($event);
        })("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r12.searchName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r13.country = $event;
        })("focus", function AirlineComponent_div_14_ng_template_3_Template_input_focus_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r14.clearOthers($event);
        })("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r15.searchCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r16.slogan = $event;
        })("focus", function AirlineComponent_div_14_ng_template_3_Template_input_focus_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r17.clearOthers($event);
        })("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r18.searchSlogan();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r19.website = $event;
        })("focus", function AirlineComponent_div_14_ng_template_3_Template_input_focus_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r20.clearOthers($event);
        })("ngModelChange", function AirlineComponent_div_14_ng_template_3_Template_input_ngModelChange_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r21.searchWebsite();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "p-sortIcon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "p-sortIcon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Country ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "p-sortIcon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Slogan ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p-sortIcon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Slogan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Website ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p-sortIcon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Website");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.slogan);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.website);
      }
    }

    function AirlineComponent_div_14_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AirlineComponent_div_14_ng_template_4_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

          var airline_r22 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r23.openNewForm(airline_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var airline_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](airline_r22.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"]("flag flag-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", airline_r22.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](airline_r22.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](airline_r22.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](airline_r22.slogan);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](airline_r22.website);
      }
    }

    function AirlineComponent_div_14_ng_template_5_Template(rf, ctx) {}

    var _c1 = function _c1() {
      return [10, 25, 50];
    };

    function AirlineComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p-table", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AirlineComponent_div_14_ng_template_3_Template, 29, 5, "ng-template", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AirlineComponent_div_14_ng_template_4_Template, 13, 8, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AirlineComponent_div_14_ng_template_5_Template, 0, 0, "ng-template", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r1.filteredAirlines)("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1));
      }
    }

    var AirlineComponent = /*#__PURE__*/function () {
      function AirlineComponent(airlineLoader, modalService) {
        _classCallCheck(this, AirlineComponent);

        this.airlineLoader = airlineLoader;
        this.modalService = modalService;
      }

      _createClass(AirlineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.airlines = this.airlineLoader.airlines;
          this.filteredAirlines = this.airlines;
          setTimeout(function () {
            if (!_this.airlines) {
              _this.airlines = [{
                id: 1,
                name: 'Dummy data',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 2,
                name: 'a2',
                country: 'Quatar',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }, {
                id: 1,
                name: 'a1',
                country: 'Thailand',
                slogan: 'Smooth as Silk / I Fly THAI',
                website: 'www.thaiairways.com'
              }];
              _this.filteredAirlines = _this.airlines; // this.tstr.error('','API Down using dummy data!');
            }
          }, 1000);
        }
      }, {
        key: "openNewForm",
        value: function openNewForm(airline) {
          var modalRef = this.modalService.open(_airline_details_airline_details_component__WEBPACK_IMPORTED_MODULE_2__["AirlineDetailsComponent"]);
          modalRef.componentInstance.airline = airline;
        }
      }, {
        key: "addAirline",
        value: function addAirline() {
          var modalRef = this.modalService.open(_add_airline_add_airline_component__WEBPACK_IMPORTED_MODULE_1__["AddAirlineComponent"]);
        }
      }, {
        key: "searchId",
        value: function searchId() {
          var _this2 = this;

          console.log(this.airlines[0]);

          if (this.id === "") {
            this.filteredAirlines = this.airlines;
          } else {
            this.filteredAirlines = this.airlines.filter(function (res) {
              //   console.log(res.id.toString());
              //   console.log(this.id);
              var _a;

              return (_a = res.id) === null || _a === void 0 ? void 0 : _a.toString().match(_this2.id.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchName",
        value: function searchName() {
          var _this3 = this;

          if (this.name === "") {
            this.filteredAirlines = this.airlines;
          } else {
            this.filteredAirlines = this.airlines.filter(function (res) {
              return res.name.toLocaleLowerCase().match(_this3.name.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchCountry",
        value: function searchCountry() {
          var _this4 = this;

          if (this.country === "") {
            this.filteredAirlines = this.airlines;
          } else {
            this.filteredAirlines = this.airlines.filter(function (res) {
              var _a;

              return (_a = res.country) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().match(_this4.country.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchSlogan",
        value: function searchSlogan() {
          var _this5 = this;

          if (this.slogan === "") {
            this.filteredAirlines = this.airlines;
          } else {
            this.filteredAirlines = this.airlines.filter(function (res) {
              var _a;

              return (_a = res.slogan) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().match(_this5.slogan.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchWebsite",
        value: function searchWebsite() {
          var _this6 = this;

          if (this.website === "") {
            this.filteredAirlines = this.airlines;
          } else {
            this.filteredAirlines = this.airlines.filter(function (res) {
              var _a;

              return (_a = res.website) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().match(_this6.website.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "clearOthers",
        value: function clearOthers(event) {
          this.filteredAirlines = this.airlines;

          if (event.target.id === 'airlineId') {
            this.name = '';
            this.slogan = '';
            this.country = '';
            this.website = '';
          }

          if (event.target.id === 'airlineName') {
            this.id = '';
            this.slogan = '';
            this.country = '';
            this.website = '';
          }

          if (event.target.id === 'airlineSlogan') {
            this.id = '';
            this.name = '';
            this.country = '';
            this.website = '';
          }

          if (event.target.id === 'airlineCountry') {
            this.id = '';
            this.name = '';
            this.slogan = '';
            this.website = '';
          }

          if (event.target.id === 'airlineWebsite') {
            this.id = '';
            this.name = '';
            this.slogan = '';
            this.country = '';
          }
        }
      }]);

      return AirlineComponent;
    }();

    AirlineComponent.??fac = function AirlineComponent_Factory(t) {
      return new (t || AirlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_3__["AirlineLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    AirlineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AirlineComponent,
      selectors: [["app-airline"]],
      viewQuery: function AirlineComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 15,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], ["label", "Add", "icon", "pi pi-plus", 3, "click"], ["class", "card-body text-center", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "card-body", "text-center"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "card-body"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions"], ["table", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "paginatorright"], ["type", "text", "placeholder", "Search id", "id", "airlineId", 2, "width", "178px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search name", "id", "airlineName", 2, "width", "178px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search country", "id", "airlineCountry", 2, "width", "178px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search slogan", "id", "airlineSlogan", 2, "width", "178px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search website", "id", "airlineWebsite", 2, "width", "178px", 3, "ngModel", "ngModelChange", "focus"], ["pSortableColumn", "id", 2, "width", "7rem"], ["field", "id"], ["pSortableColumn", "name", 2, "width", "15rem"], ["field", "name"], ["pSortableColumn", "country", 2, "width", "10rem"], ["field", "country"], ["pSortableColumn", "slogan"], ["field", "slogan"], ["pSortableColumn", "website"], ["field", "website"], [1, "record", 3, "click"], ["alt", "", "height", "15px", 3, "src"]],
      template: function AirlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Admin dashboard!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Airlines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AirlineComponent_Template_p_button_click_12_listener() {
            return ctx.addAirline();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AirlineComponent_div_13_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AirlineComponent_div_14_Template, 6, 6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.filteredAirlines);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.filteredAirlines);
        }
      },
      directives: [primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["SortIcon"]],
      styles: ["tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n\r\np-button[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWlybGluZS9haXJsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FpcmxpbmUvYWlybGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHI+dGR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxucC1idXR0b257XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AirlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-airline',
          templateUrl: './airline.component.html',
          styleUrls: ['./airline.component.css']
        }]
      }], function () {
        return [{
          type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_3__["AirlineLoaderService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['table']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _airline_airline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./airline/airline.component */
    "./src/app/airline/airline.component.ts");
    /* harmony import */


    var _dashboard_student_dashboard_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-student/dashboard-student.component */
    "./src/app/dashboard-student/dashboard-student.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _display_data_display_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./display-data/display-data.component */
    "./src/app/display-data/display-data.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register-form/register-form.component */
    "./src/app/register-form/register-form.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_footer_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/footer/contact-us-page/contact-us-page.component */
    "./src/app/shared/footer/contact-us-page/contact-us-page.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, {
      path: 'input',
      component: _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__["RegisterFormComponent"]
    }, {
      path: 'display',
      component: _display_data_display_data_component__WEBPACK_IMPORTED_MODULE_5__["DisplayDataComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'dashboard-student',
      component: _dashboard_student_dashboard_student_component__WEBPACK_IMPORTED_MODULE_3__["DashboardStudentComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'airline',
      component: _airline_airline_component__WEBPACK_IMPORTED_MODULE_2__["AirlineComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'contact-us',
      component: _shared_footer_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsPageComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(translate) {
        _classCallCheck(this, AppComponent);

        this.translate = translate;
        this.title = 'Form1';
        translate.addLangs(['de', 'en']);
        var browserLang = this.getBrowserLang();
        translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
      }

      _createClass(AppComponent, [{
        key: "getBrowserLang",
        value: function getBrowserLang() {
          return this.translate.getDefaultLang() || 'en';
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      consts: [[1, "header"], ["role", "main", 1, "body"], [1, "footer"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: initApp, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initApp", function () {
      return initApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-form/register-form.component */
    "./src/app/register-form/register-form.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./display-data/display-data.component */
    "./src/app/display-data/display-data.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _appModules_lang_translate_lang_translate_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./appModules/lang-translate/lang-translate.module */
    "./src/app/appModules/lang-translate/lang-translate.module.ts");
    /* harmony import */


    var _dashboard_student_dashboard_student_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./dashboard-student/dashboard-student.component */
    "./src/app/dashboard-student/dashboard-student.component.ts");
    /* harmony import */


    var _airline_airline_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./airline/airline.component */
    "./src/app/airline/airline.component.ts");
    /* harmony import */


    var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/airline-loader.service */
    "./src/app/services/airline-loader.service.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _airline_airline_details_airline_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./airline/airline-details/airline-details.component */
    "./src/app/airline/airline-details/airline-details.component.ts");
    /* harmony import */


    var _dashboard_passenger_details_passenger_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dashboard/passenger-details/passenger-details.component */
    "./src/app/dashboard/passenger-details/passenger-details.component.ts");
    /* harmony import */


    var _dashboard_add_passenger_add_passenger_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./dashboard/add-passenger/add-passenger.component */
    "./src/app/dashboard/add-passenger/add-passenger.component.ts");
    /* harmony import */


    var _airline_add_airline_add_airline_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./airline/add-airline/add-airline.component */
    "./src/app/airline/add-airline/add-airline.component.ts");
    /* harmony import */


    var _dashboard_edit_passenger_edit_passenger_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./dashboard/edit-passenger/edit-passenger.component */
    "./src/app/dashboard/edit-passenger/edit-passenger.component.ts");
    /* harmony import */


    var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! angular-confirmation-popover */
    "./node_modules/angular-confirmation-popover/__ivy_ngcc__/fesm2015/angular-confirmation-popover.js");
    /* harmony import */


    var _shared_footer_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./shared/footer/contact-us-page/contact-us-page.component */
    "./src/app/shared/footer/contact-us-page/contact-us-page.component.ts");

    function initApp(dataLoader) {
      return function () {
        return dataLoader.loadAirlineData();
      };
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: initApp,
        deps: [_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_19__["AirlineLoaderService"]],
        multi: true
      }],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(), _appModules_lang_translate_lang_translate_module__WEBPACK_IMPORTED_MODULE_16__["LangTranslateModule"], primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_20__["TableModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_27__["ConfirmationPopoverModule"].forRoot({
        confirmButtonType: 'danger'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__["RegisterFormComponent"], _display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDataComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dashboard_student_dashboard_student_component__WEBPACK_IMPORTED_MODULE_17__["DashboardStudentComponent"], _airline_airline_component__WEBPACK_IMPORTED_MODULE_18__["AirlineComponent"], _airline_airline_details_airline_details_component__WEBPACK_IMPORTED_MODULE_22__["AirlineDetailsComponent"], _dashboard_passenger_details_passenger_details_component__WEBPACK_IMPORTED_MODULE_23__["PassengerDetail"], _dashboard_add_passenger_add_passenger_component__WEBPACK_IMPORTED_MODULE_24__["AddPassengerComponent"], _airline_add_airline_add_airline_component__WEBPACK_IMPORTED_MODULE_25__["AddAirlineComponent"], _dashboard_edit_passenger_edit_passenger_component__WEBPACK_IMPORTED_MODULE_26__["EditPassengerComponent"], _shared_footer_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_28__["ContactUsPageComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"], _appModules_lang_translate_lang_translate_module__WEBPACK_IMPORTED_MODULE_16__["LangTranslateModule"], primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_20__["TableModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_27__["ConfirmationPopoverModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__["RegisterFormComponent"], _display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDataComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dashboard_student_dashboard_student_component__WEBPACK_IMPORTED_MODULE_17__["DashboardStudentComponent"], _airline_airline_component__WEBPACK_IMPORTED_MODULE_18__["AirlineComponent"], _airline_airline_details_airline_details_component__WEBPACK_IMPORTED_MODULE_22__["AirlineDetailsComponent"], _dashboard_passenger_details_passenger_details_component__WEBPACK_IMPORTED_MODULE_23__["PassengerDetail"], _dashboard_add_passenger_add_passenger_component__WEBPACK_IMPORTED_MODULE_24__["AddPassengerComponent"], _airline_add_airline_add_airline_component__WEBPACK_IMPORTED_MODULE_25__["AddAirlineComponent"], _dashboard_edit_passenger_edit_passenger_component__WEBPACK_IMPORTED_MODULE_26__["EditPassengerComponent"], _shared_footer_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_28__["ContactUsPageComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(), _appModules_lang_translate_lang_translate_module__WEBPACK_IMPORTED_MODULE_16__["LangTranslateModule"], primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_20__["TableModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_27__["ConfirmationPopoverModule"].forRoot({
            confirmButtonType: 'danger'
          })],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: initApp,
            deps: [_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_19__["AirlineLoaderService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/appModules/lang-translate/lang-translate.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/appModules/lang-translate/lang-translate.module.ts ***!
    \********************************************************************/

  /*! exports provided: HttpLoaderFactory, LangTranslateModule */

  /***/
  function srcAppAppModulesLangTranslateLangTranslateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangTranslateModule", function () {
      return LangTranslateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-translate-multi-http-loader */
    "./node_modules/ngx-translate-multi-http-loader/__ivy_ngcc__/fesm2015/ngx-translate-multi-http-loader.js");

    function HttpLoaderFactory(http) {
      return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_4__["MultiTranslateHttpLoader"](http, [{
        prefix: './assets/translate/shared/header/',
        suffix: '.json'
      }]);
    }

    var LangTranslateModule = /*#__PURE__*/_createClass(function LangTranslateModule() {
      _classCallCheck(this, LangTranslateModule);
    });

    LangTranslateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: LangTranslateModule
    });
    LangTranslateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function LangTranslateModule_Factory(t) {
        return new (t || LangTranslateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      })], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LangTranslateModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LangTranslateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }
          })],
          exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard-student/dashboard-student.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dashboard-student/dashboard-student.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardStudentComponent */

  /***/
  function srcAppDashboardStudentDashboardStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardStudentComponent", function () {
      return DashboardStudentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types_FlightSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../types/FlightSchedule */
    "./src/app/types/FlightSchedule.ts");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.mjs");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    var _c0 = ["reader"];

    function DashboardStudentComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please select valid file ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DashboardStudentComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please select a file to load data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DashboardStudentComponent_div_19_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Flight ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "p-sortIcon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Airline Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "p-sortIcon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "IATA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "p-sortIcon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "ICAO ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "p-sortIcon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Country ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "p-sortIcon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Active ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "p-sortIcon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Passengers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "p-sortIcon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DashboardStudentComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var flightSchedule_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.airlineName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.iata);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.icao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](flightSchedule_r8.totalPassengers);
      }
    }

    function DashboardStudentComponent_div_19_ng_template_5_Template(rf, ctx) {}

    var _c1 = function _c1() {
      return [10, 25, 50];
    };

    function DashboardStudentComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p-table", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardStudentComponent_div_19_ng_template_3_Template, 22, 0, "ng-template", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardStudentComponent_div_19_ng_template_4_Template, 16, 7, "ng-template", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardStudentComponent_div_19_ng_template_5_Template, 0, 0, "ng-template", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r3.records)("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Total : ", ctx_r3.sumOfAllFlightPassengers, " ");
      }
    }

    var DashboardStudentComponent = /*#__PURE__*/function () {
      function DashboardStudentComponent(tstr) {
        _classCallCheck(this, DashboardStudentComponent);

        this.tstr = tstr;
        this.records = null;
        this.invalidFile = false;
      }

      _createClass(DashboardStudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadListener",
        value: function uploadListener($event) {
          console.log($event);
          var file = $event.srcElement.files[0];

          if (file) {
            this.sumOfAllFlightPassengers = 0;
            this.invalidFile = false;
          }

          if (this.isValidCSVFile(file)) {
            this.populateCSVData(file);
          } else if (this.isValidExcelFile(file)) {
            this.populateExcelData(file);
          } else {
            alert("Please import valid .csv or xlsx file.");
            this.fileReset();
          }
        }
      }, {
        key: "populateExcelData",
        value: function populateExcelData(file) {
          var _this7 = this;

          this.file = file;
          var fileReader = new FileReader();
          fileReader.readAsArrayBuffer(this.file);

          fileReader.onload = function (e) {
            _this7.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this7.arrayBuffer);
            var arr = new Array();

            for (var i = 0; i != data.length; ++i) {
              arr[i] = String.fromCharCode(data[i]);
            }

            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, {
              type: "binary"
            });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var recordsArray = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(worksheet, {
              header: 1
            });
            var allRecords = [];

            for (var _i = 0; _i < recordsArray.length; _i++) {
              var curruntRecord = recordsArray[_i];
              var headerLength = 7;

              if (Object.keys(curruntRecord).length == headerLength) {
                var excelRecord = new _types_FlightSchedule__WEBPACK_IMPORTED_MODULE_1__["FlightSchedule"]();
                excelRecord.id = curruntRecord[0];
                excelRecord.airlineName = curruntRecord[1];
                excelRecord.iata = curruntRecord[2];
                excelRecord.icao = curruntRecord[3];
                excelRecord.country = curruntRecord[4];
                excelRecord.active = curruntRecord[5];
                excelRecord.totalPassengers = curruntRecord[6];
                _this7.sumOfAllFlightPassengers += Number.parseInt(excelRecord.totalPassengers);
                allRecords.push(excelRecord);
              } else {
                _this7.showInvalidFileError();
              }
            }

            _this7.records = allRecords;
          };
        }
      }, {
        key: "populateCSVData",
        value: function populateCSVData(file) {
          var _this8 = this;

          var reader = new FileReader();
          reader.readAsText(file);

          reader.onload = function () {
            var csvData = reader.result;
            var csvRecordsArray = csvData.split(/\r\n|\n/);

            var headersRow = _this8.getHeaderArray(csvRecordsArray);

            _this8.records = _this8.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
          };

          reader.onerror = function () {
            console.log('error is occured while reading file!');
          };
        }
      }, {
        key: "getDataRecordsArrayFromCSVFile",
        value: function getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength) {
          var csvArr = [];

          for (var i = 0; i < csvRecordsArray.length; i++) {
            var curruntRecord = csvRecordsArray[i].split(',');

            if (curruntRecord.length == headerLength) {
              var csvRecord = new _types_FlightSchedule__WEBPACK_IMPORTED_MODULE_1__["FlightSchedule"]();
              csvRecord.id = curruntRecord[0].trim();
              csvRecord.airlineName = curruntRecord[1].trim();
              csvRecord.iata = curruntRecord[2].trim();
              csvRecord.icao = curruntRecord[3].trim();
              csvRecord.country = curruntRecord[4].trim();
              csvRecord.active = curruntRecord[5].trim();
              csvRecord.totalPassengers = curruntRecord[6].trim();
              this.sumOfAllFlightPassengers += Number.parseInt(csvRecord.totalPassengers);
              csvArr.push(csvRecord);
            } else {
              this.showInvalidFileError();
            }
          }

          return csvArr;
        }
      }, {
        key: "showInvalidFileError",
        value: function showInvalidFileError() {
          this.invalidFile = true;
          this.tstr.error('', 'Uploaded file is invalid!');
        }
      }, {
        key: "isValidCSVFile",
        value: function isValidCSVFile(file) {
          return file.name.endsWith(".csv");
        }
      }, {
        key: "isValidExcelFile",
        value: function isValidExcelFile(file) {
          return file.name.endsWith(".xlsx");
        }
      }, {
        key: "getHeaderArray",
        value: function getHeaderArray(csvRecordsArr) {
          var headers = csvRecordsArr[0].split(',');
          var headerArray = [];

          for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
          }

          return headerArray;
        }
      }, {
        key: "fileReset",
        value: function fileReset() {
          this.reader.nativeElement.value = "";
          this.records = [];
        }
      }]);

      return DashboardStudentComponent;
    }();

    DashboardStudentComponent.??fac = function DashboardStudentComponent_Factory(t) {
      return new (t || DashboardStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    DashboardStudentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DashboardStudentComponent,
      selectors: [["app-dashboard-student"]],
      viewQuery: function DashboardStudentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.reader = _t.first);
        }
      },
      decls: 20,
      vars: 3,
      consts: [[1, "student"], [1, "container"], [1, "row"], [1, "col-md-12", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], [1, "custom-file", 2, "width", "28%"], ["type", "file", "name", "Upload CSV", "id", "txtFileUpload", "accept", ".csv,.xlsx", 1, "custom-file-input", 3, "change"], ["reader", ""], ["for", "txtFileUpload", 1, "custom-file-label"], ["class", "error", 4, "ngIf"], [1, "card-body"], [4, "ngIf"], [1, "error"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions"], ["table", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "paginatorright"], [1, "passengerSum"], ["pSortableColumn", "id", 2, "width", "7rem"], ["field", "id"], ["pSortableColumn", "airlineName", 2, "width", "10rem"], ["field", "airlineName"], ["pSortableColumn", "iata"], ["field", "iata"], ["pSortableColumn", "icao"], ["field", "icao"], ["pSortableColumn", "country"], ["field", "country"], ["pSortableColumn", "active"], ["field", "active"], ["pSortableColumn", "totalPassengers", 2, "width", "10rem"], ["field", "totalPassengers"], [1, "record"]],
      template: function DashboardStudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Student dashboard!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Flight schedule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function DashboardStudentComponent_Template_input_change_12_listener($event) {
            return ctx.uploadListener($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DashboardStudentComponent_div_16_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, DashboardStudentComponent_div_18_Template, 3, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, DashboardStudentComponent_div_19_Template, 8, 7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalidFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.records);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.records);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"]],
      styles: [".passengerSum[_ngcontent-%COMP%]{\r\n  margin-left: 83%;\r\n}\r\n.student[_ngcontent-%COMP%]{\r\n margin-bottom: 43vh;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n  color:red;\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLXN0dWRlbnQvZGFzaGJvYXJkLXN0dWRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLXN0dWRlbnQvZGFzaGJvYXJkLXN0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzZW5nZXJTdW17XHJcbiAgbWFyZ2luLWxlZnQ6IDgzJTtcclxufVxyXG4uc3R1ZGVudHtcclxuIG1hcmdpbi1ib3R0b206IDQzdmg7XHJcbn1cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard-student',
          templateUrl: './dashboard-student.component.html',
          styleUrls: ['./dashboard-student.component.css']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, {
        reader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['reader']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/add-passenger/add-passenger.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dashboard/add-passenger/add-passenger.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddPassengerComponent */

  /***/
  function srcAppDashboardAddPassengerAddPassengerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPassengerComponent", function () {
      return AddPassengerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPassengerComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AddPassengerComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Trips is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AddPassengerComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Airline is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var AddPassengerComponent = /*#__PURE__*/function () {
      function AddPassengerComponent(activeModal, fb, dataService) {
        _classCallCheck(this, AddPassengerComponent);

        this.activeModal = activeModal;
        this.fb = fb;
        this.dataService = dataService;
      }

      _createClass(AddPassengerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addPassengerForm = this.createAddPassengerForm();
          this.addPassengerForm.patchValue({
            name: sessionStorage.getItem('username')
          });
        }
      }, {
        key: "createAddPassengerForm",
        value: function createAddPassengerForm() {
          return this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            trips: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            airline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "addPassengerFormControl",
        get: function get() {
          return this.addPassengerForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dataService.postPassengerData(this.addPassengerForm.value);
        }
      }]);

      return AddPassengerComponent;
    }();

    AddPassengerComponent.??fac = function AddPassengerComponent_Factory(t) {
      return new (t || AddPassengerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    AddPassengerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AddPassengerComponent,
      selectors: [["app-add-passenger"]],
      decls: 21,
      vars: 5,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "id", "passengerName", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "number", "id", "passengerTrips", "formControlName", "trips", 1, "form-control"], ["type", "number", "id", "passsengerAirline", "formControlName", "airline", 1, "form-control"], [1, "btn", "btn-danger", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function AddPassengerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "New Passenger Details! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddPassengerComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddPassengerComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AddPassengerComponent_span_9_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Trips:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AddPassengerComponent_span_13_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Airline:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, AddPassengerComponent_span_17_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addPassengerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addPassengerFormControl.name.touched && (ctx.addPassengerFormControl.name.errors == null ? null : ctx.addPassengerFormControl.name.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addPassengerFormControl.trips.touched && (ctx.addPassengerFormControl.trips.errors == null ? null : ctx.addPassengerFormControl.trips.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addPassengerFormControl.airline.touched && (ctx.addPassengerFormControl.airline.errors == null ? null : ctx.addPassengerFormControl.airline.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.addPassengerForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZGQtcGFzc2VuZ2VyL2FkZC1wYXNzZW5nZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddPassengerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-passenger',
          templateUrl: './add-passenger.component.html',
          styleUrls: ['./add-passenger.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_passenger_add_passenger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-passenger/add-passenger.component */
    "./src/app/dashboard/add-passenger/add-passenger.component.ts");
    /* harmony import */


    var _edit_passenger_edit_passenger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit-passenger/edit-passenger.component */
    "./src/app/dashboard/edit-passenger/edit-passenger.component.ts");
    /* harmony import */


    var _passenger_details_passenger_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./passenger-details/passenger-details.component */
    "./src/app/dashboard/passenger-details/passenger-details.component.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-confirmation-popover */
    "./node_modules/angular-confirmation-popover/__ivy_ngcc__/fesm2015/angular-confirmation-popover.js");

    function DashboardComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DashboardComponent_div_14_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r6.id = $event;
        })("focus", function DashboardComponent_div_14_ng_template_3_Template_input_focus_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r8.clearOthers($event);
        })("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r9.searchId();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r10.name = $event;
        })("focus", function DashboardComponent_div_14_ng_template_3_Template_input_focus_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r11.clearOthers($event);
        })("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r12.searchName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r13.trips = $event;
        })("focus", function DashboardComponent_div_14_ng_template_3_Template_input_focus_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r14.clearOthers($event);
        })("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r15.searchTrips();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r16.airline = $event;
        })("focus", function DashboardComponent_div_14_ng_template_3_Template_input_focus_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r17.clearOthers($event);
        })("ngModelChange", function DashboardComponent_div_14_ng_template_3_Template_input_ngModelChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r18.searchAirline();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_14_ng_template_3_Template_p_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r19.downloadPassengerData();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "p-sortIcon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "p-sortIcon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Trips ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "p-sortIcon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Airline ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "p-sortIcon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.trips);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.airline);
      }
    }

    function DashboardComponent_div_14_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_14_ng_template_4_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

          var passenger_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r21.showPassengerDetail(passenger_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_14_ng_template_4_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

          var passenger_r20 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r23.showPassengerDetail(passenger_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_14_ng_template_4_Template_td_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

          var passenger_r20 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r24.showPassengerDetail(passenger_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_14_ng_template_4_Template_td_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

          var passenger_r20 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r25.showPassengerDetail(passenger_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_14_ng_template_4_Template_i_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

          var passenger_r20 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r26.editPassengerDetail(passenger_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("confirm", function DashboardComponent_div_14_ng_template_4_Template_i_confirm_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

          var passenger_r20 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r27.deletePassenger(passenger_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var passenger_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](passenger_r20._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", passenger_r20.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](passenger_r20.trips);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](passenger_r20.airline[0].id);
      }
    }

    function DashboardComponent_div_14_ng_template_5_Template(rf, ctx) {}

    var _c0 = function _c0() {
      return [10, 25, 50];
    };

    function DashboardComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p-table", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardComponent_div_14_ng_template_3_Template, 26, 4, "ng-template", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardComponent_div_14_ng_template_4_Template, 12, 4, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_div_14_ng_template_5_Template, 0, 0, "ng-template", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r1.filteredPassengers)("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
      }
    } // import 'bootstrap';
    // import * as $ from 'jquery';
    // import { ToastrService } from 'ngx-toastr';


    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dataService, modalService) {
        _classCallCheck(this, DashboardComponent);

        this.dataService = dataService;
        this.modalService = modalService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.loadPassengerData();
          setTimeout(function () {
            if (!_this9.passengers) {
              _this9.passengers = [{
                _id: 1,
                name: "dummy data",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 2,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 3,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 4,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 5,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 6,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 7,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 8,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 9,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 10,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 11,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }, {
                _id: 12,
                name: "asd",
                trips: 20,
                airline: [{
                  id: 10
                }]
              }];
            }
          }, 1000); // this.tstr.error('','API Down using dummy data!');

          this.filteredPassengers = this.passengers;
        } // ngAfterViewChecked(){
        //   $(function () {
        //     $('[data-toggle="tooltip"]').tooltip()
        //       })
        // }

      }, {
        key: "loadPassengerData",
        value: function loadPassengerData() {
          var _this10 = this;

          this.dataService.loadPassengerData().subscribe(function (res) {
            _this10.passengers = res.data;
            _this10.filteredPassengers = _this10.passengers;
          });
        }
      }, {
        key: "showPassengerDetail",
        value: function showPassengerDetail(passenger) {
          var modalRef = this.modalService.open(_passenger_details_passenger_details_component__WEBPACK_IMPORTED_MODULE_3__["PassengerDetail"]);
          modalRef.componentInstance.passenger = passenger;
        }
      }, {
        key: "addPassenger",
        value: function addPassenger() {
          var modalRef = this.modalService.open(_add_passenger_add_passenger_component__WEBPACK_IMPORTED_MODULE_1__["AddPassengerComponent"]);
        }
      }, {
        key: "editPassengerDetail",
        value: function editPassengerDetail(passenger) {
          var _this11 = this;

          var modalRef = this.modalService.open(_edit_passenger_edit_passenger_component__WEBPACK_IMPORTED_MODULE_2__["EditPassengerComponent"]);
          modalRef.componentInstance.passenger = passenger;
          this.dataService.subject.subscribe(function (data) {
            if (data === 'Passenger|update') {
              _this11.loadPassengerData();
            }
          });
        }
      }, {
        key: "deletePassenger",
        value: function deletePassenger(passenger) {
          var _this12 = this;

          this.dataService.deletePassenger(passenger._id);
          this.dataService.subject.subscribe(function (data) {
            if (data === 'Passenger|delete') {
              _this12.loadPassengerData();
            }
          });
        }
      }, {
        key: "searchId",
        value: function searchId() {
          var _this13 = this;

          if (this.id === "") {
            this.filteredPassengers = this.passengers;
          } else {
            this.filteredPassengers = this.passengers.filter(function (res) {
              return res._id.toString().match(_this13.id.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchName",
        value: function searchName() {
          var _this14 = this;

          if (this.name === "") {
            this.filteredPassengers = this.passengers;
          } else {
            this.filteredPassengers = this.passengers.filter(function (res) {
              return res.name.toLocaleLowerCase().match(_this14.name.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchTrips",
        value: function searchTrips() {
          var _this15 = this;

          if (this.trips === "") {
            this.filteredPassengers = this.passengers;
          } else {
            this.filteredPassengers = this.passengers.filter(function (res) {
              return res.trips.toString().match(_this15.trips.toLocaleLowerCase());
            });
          }
        }
      }, {
        key: "searchAirline",
        value: function searchAirline() {
          var _this16 = this;

          if (this.airline === "") {
            this.filteredPassengers = this.passengers;
          } else {
            this.filteredPassengers = this.passengers.filter(function (res) {
              return res.airline[0].id.toString().match(_this16.airline);
            });
          }
        }
      }, {
        key: "clearOthers",
        value: function clearOthers(event) {
          this.filteredPassengers = this.passengers;

          if (event.target.id === 'passengerId') {
            this.name = '';
            this.trips = '';
            this.airline = '';
          }

          if (event.target.id === 'passengerName') {
            this.id = '';
            this.trips = '';
            this.airline = '';
          }

          if (event.target.id === 'passengerTrips') {
            this.id = '';
            this.name = '';
            this.airline = '';
          }

          if (event.target.id === 'passengerAirline') {
            this.id = '';
            this.name = '';
            this.trips = '';
          }
        }
      }, {
        key: "downloadPassengerData",
        value: function downloadPassengerData() {
          var data = [];
          this.passengers.forEach(function (element) {
            data.push(element._id + ',');
            data.push(element.airline[0].id + ',');
            data.push(element.name + ',');
            data.push(element.trips + '\r\n');
          });
          file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](new Blob(data, {
            type: 'text/plain;charset=utf-8'
          }), 'data.csv', {
            autoBom: false
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.??fac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
    };

    DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 15,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-md-10", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], ["label", "Add", "icon", "pi pi-plus", 3, "click"], ["class", "card-body text-center", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "card-body", "text-center"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "card-body"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions"], ["dt2", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "paginatorright"], ["type", "text", "placeholder", "Search Id", "id", "passengerId", 2, "width", "146px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search name", "id", "passengerName", 2, "width", "146px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search trips", "id", "passengerTrips", 2, "width", "146px", 3, "ngModel", "ngModelChange", "focus"], ["type", "text", "placeholder", "Search airline", "id", "passengerAirline", 2, "width", "146px", 3, "ngModel", "ngModelChange", "focus"], ["label", "Download", "icon", "pi pi-download\n                      ", 3, "click"], ["scope", "col", "pSortableColumn", "_id", 2, "width", "5rem"], ["field", "guid"], ["scope", "col", "pSortableColumn", "name", 2, "width", "5rem"], ["field", "name"], ["scope", "col", "pSortableColumn", "trips", 2, "width", "5rem"], ["field", "email"], ["scope", "col", 2, "width", "5rem"], [1, "record"], [1, "clickable", 3, "click"], ["title", "Edit", 1, "pi", "pi-pencil", "clickable", 3, "click"], ["title", "Delete", "mwlConfirmationPopover", "", "popoverTitle", "Are you sure?", "popoverMessage", "Are you really sure you want to Delete?", "placement", "right", "confirmText", "Delete", "cancelText", "Cancel", 1, "pi", "pi-ban", "clickable", 3, "confirm"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Admin dashboard!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Passengers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_p_button_click_12_listener() {
            return ctx.addPassenger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DashboardComponent_div_13_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DashboardComponent_div_14_Template, 6, 6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.filteredPassengers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.filteredPassengers);
        }
      },
      directives: [primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_10__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["SortIcon"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_12__["??c"]],
      styles: [".clickable[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\np-button[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n}\r\n\r\ni.pi[_ngcontent-%COMP%]{\r\n  margin-right: 10px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  \r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]{\r\n  flex-wrap: wrap;\r\n  display:  inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYzs7RUFFZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2thYmxle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxucC1idXR0b257XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmkucGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBkaXNwbGF5OiAgaW5saW5lO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/edit-passenger/edit-passenger.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/dashboard/edit-passenger/edit-passenger.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EditPassengerComponent */

  /***/
  function srcAppDashboardEditPassengerEditPassengerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPassengerComponent", function () {
      return EditPassengerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPassengerComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function EditPassengerComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Trips is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function EditPassengerComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Airline is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var EditPassengerComponent = /*#__PURE__*/function () {
      function EditPassengerComponent(fb, dataService, activeModal) {
        _classCallCheck(this, EditPassengerComponent);

        this.fb = fb;
        this.dataService = dataService;
        this.activeModal = activeModal;
      }

      _createClass(EditPassengerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editPassengerForm = this.createEditPassengerForm();
          this.editPassengerForm.patchValue({
            id: this.passenger._id,
            name: this.passenger.name,
            trips: this.passenger.trips,
            airline: this.passenger.airline[0].id
          });
        }
      }, {
        key: "editPassengerFormControl",
        get: function get() {
          return this.editPassengerForm.controls;
        }
      }, {
        key: "createEditPassengerForm",
        value: function createEditPassengerForm() {
          return this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            trips: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            airline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var passengerData = {
            name: this.editPassengerForm.value.name,
            airline: this.editPassengerForm.value.airline,
            trips: this.editPassengerForm.value.trips
          };
          this.dataService.updatePassengerData(passengerData, this.editPassengerForm.value.id);
        }
      }]);

      return EditPassengerComponent;
    }();

    EditPassengerComponent.??fac = function EditPassengerComponent_Factory(t) {
      return new (t || EditPassengerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]));
    };

    EditPassengerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: EditPassengerComponent,
      selectors: [["app-edit-passenger"]],
      decls: 24,
      vars: 6,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "id", "passengerId", "formControlName", "id", 1, "form-control"], ["type", "text", "id", "passengerName", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "number", "id", "passengerTrips", "formControlName", "trips", 1, "form-control"], ["type", "number", "id", "passsengerAirline", "formControlName", "airline", 1, "form-control"], [1, "btn", "btn-danger", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function EditPassengerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "New Passenger Details! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditPassengerComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EditPassengerComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, EditPassengerComponent_span_12_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Trips:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EditPassengerComponent_span_16_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Airline:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, EditPassengerComponent_span_20_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.editPassengerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editPassengerFormControl.name.touched && (ctx.editPassengerFormControl.name.errors == null ? null : ctx.editPassengerFormControl.name.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editPassengerFormControl.trips.touched && (ctx.editPassengerFormControl.trips.errors == null ? null : ctx.editPassengerFormControl.trips.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editPassengerFormControl.airline.touched && (ctx.editPassengerFormControl.airline.errors == null ? null : ctx.editPassengerFormControl.airline.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.editPassengerForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9lZGl0LXBhc3Nlbmdlci9lZGl0LXBhc3Nlbmdlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditPassengerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-passenger',
          templateUrl: './edit-passenger.component.html',
          styleUrls: ['./edit-passenger.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/passenger-details/passenger-details.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/dashboard/passenger-details/passenger-details.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PassengerDetail */

  /***/
  function srcAppDashboardPassengerDetailsPassengerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassengerDetail", function () {
      return PassengerDetail;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var PassengerDetail = /*#__PURE__*/function () {
      function PassengerDetail(activeModal) {
        _classCallCheck(this, PassengerDetail);

        this.activeModal = activeModal;
      }

      _createClass(PassengerDetail, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PassengerDetail;
    }();

    PassengerDetail.??fac = function PassengerDetail_Factory(t) {
      return new (t || PassengerDetail)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    PassengerDetail.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PassengerDetail,
      selectors: [["app-passenger-details"]],
      decls: 17,
      vars: 3,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "md-form"], ["type", "text", "id", "passengerId", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "passengerName", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "passengerEmail", "disabled", "", 1, "form-control", 3, "value"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
      template: function PassengerDetail_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Passenger Details!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PassengerDetail_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Trips:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PassengerDetail_Template_button_click_15_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.passenger._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.passenger.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.passenger.trips);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wYXNzZW5nZXItZGV0YWlscy9wYXNzZW5nZXItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PassengerDetail, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-passenger-details',
          templateUrl: './passenger-details.component.html',
          styleUrls: ['./passenger-details.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/display-data/display-data.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/display-data/display-data.component.ts ***!
    \********************************************************/

  /*! exports provided: DisplayDataComponent */

  /***/
  function srcAppDisplayDataDisplayDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayDataComponent", function () {
      return DisplayDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DisplayDataComponent = /*#__PURE__*/function () {
      function DisplayDataComponent(dataService) {
        _classCallCheck(this, DisplayDataComponent);

        this.dataService = dataService;
      }

      _createClass(DisplayDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerFormData = this.getFormDataFromService();
        }
      }, {
        key: "getFormDataFromService",
        value: function getFormDataFromService() {
          return this.dataService.registerFormData;
        }
      }]);

      return DisplayDataComponent;
    }();

    DisplayDataComponent.??fac = function DisplayDataComponent_Factory(t) {
      return new (t || DisplayDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    DisplayDataComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DisplayDataComponent,
      selectors: [["app-display-data"]],
      decls: 22,
      vars: 5,
      consts: [[1, "container"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], ["routerLink", "/input", 1, "btn", "btn-danger", "btn-block"], ["routerLink", "/login", 1, "btn", "btn-danger", "btn-block"]],
      template: function DisplayDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Form data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Name: ", ctx.registerFormData.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Email: ", ctx.registerFormData.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" User Name: ", ctx.registerFormData.username, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Mobile: ", ctx.registerFormData.mobile, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Profession: ", ctx.registerFormData.profession, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktZGF0YS9kaXNwbGF5LWRhdGEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DisplayDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-data',
          templateUrl: './display-data.component.html',
          styleUrls: ['./display-data.component.css']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isUserLoggedIn()) {
            return true;
          }

          this.router.navigate(['login']);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 1,
      vars: 0,
      consts: [[1, "home"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);
        }
      },
      styles: [".home[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "login.usernamerequired"), " ");
      }
    }

    function LoginComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "login.passwordrequired"), " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, auth, router, notification, translate, userService) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.notification = notification;
        this.translate = translate;
        this.userService = userService;
        var browserLang = translate.getDefaultLang() || 'en';
        translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.createLoginForm();
          this.userService.getUserDetails();
        }
      }, {
        key: "loginFormControl",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "createLoginForm",
        value: function createLoginForm() {
          return this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var user = this.auth.authenticate(username, password);

          if (user) {
            this.notification.success('', 'Login success', {
              timeOut: 1000
            });

            if (user.profession === 'Admin') {
              this.router.navigate(['dashboard']);
            } else {
              this.router.navigate(['dashboard-student']);
            }
          } else {
            this.notification.error('', 'Login failed', {
              timeOut: 1000
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.login(this.loginForm.value.username, this.loginForm.value.password);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 16,
      consts: [[1, "container"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "username", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "btn", "btn-danger", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, LoginComponent_span_15_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, LoginComponent_span_21_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 8, "login.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 10, "login.username"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginFormControl.username.touched && (ctx.loginFormControl.username.errors == null ? null : ctx.loginFormControl.username.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 12, "login.password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginFormControl.password.touched && (ctx.loginFormControl.password.errors == null ? null : ctx.loginFormControl.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loginForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 14, "login.submit"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n  height: 45.5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDQ1LjV2aDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register-form/register-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/register-form/register-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterFormComponent */

  /***/
  function srcAppRegisterFormRegisterFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function () {
      return RegisterFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/validations.service */
    "./src/app/services/validations.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function RegisterFormComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.namerequirederror"), " ");
      }
    }

    function RegisterFormComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.emailrequirederror"), " ");
      }
    }

    function RegisterFormComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.invalidemailerror"), " ");
      }
    }

    function RegisterFormComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.usernamerequirederror"), " ");
      }
    }

    function RegisterFormComponent_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.mobilerequirederror"), " ");
      }
    }

    function RegisterFormComponent_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.invalidmobileerror"), " ");
      }
    }

    function RegisterFormComponent_span_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.passwordrequirederror"), " ");
      }
    }

    function RegisterFormComponent_span_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.invalidpassworderror"), " ");
      }
    }

    function RegisterFormComponent_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.confirmpasswordrequirederror"), " ");
      }
    }

    function RegisterFormComponent_span_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.passwordmissmatcherror"), " ");
      }
    }

    function RegisterFormComponent_option_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var profession_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", profession_r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", profession_r12, " ");
      }
    }

    function RegisterFormComponent_span_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "register.professionrequirederror"), " ");
      }
    }

    var RegisterFormComponent = /*#__PURE__*/function () {
      function RegisterFormComponent(fb, customValidator, dataServce, tstr, userService) {
        _classCallCheck(this, RegisterFormComponent);

        this.fb = fb;
        this.customValidator = customValidator;
        this.dataServce = dataServce;
        this.tstr = tstr;
        this.userService = userService;
        this.professions = ['Admin', 'Student'];
      }

      _createClass(RegisterFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.createRegisterForm();
          this.userService.getUserDetails();
        }
      }, {
        key: "registerFormControl",
        get: function get() {
          return this.registerForm.controls;
        }
      }, {
        key: "saveToService",
        value: function saveToService() {
          this.dataServce.registerForm = this.registerForm;
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidator.patternValidator()])],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            profession: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validator: this.customValidator.MatchPassword('password', 'confirmPassword')
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.registerForm.valid) {
            this.dataServce.setFormData(this.registerForm.value);
            this.userService.registerUser(this.registerForm.value);
          }
        }
      }]);

      return RegisterFormComponent;
    }();

    RegisterFormComponent.??fac = function RegisterFormComponent_Factory(t) {
      return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    RegisterFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterFormComponent,
      selectors: [["app-input-form"]],
      decls: 63,
      vars: 41,
      consts: [[1, "container"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "username", "formControlName", "username", 1, "form-control"], ["type", "mobile", "formControlName", "mobile", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["formControlName", "profession", 1, "form-control"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", "btn-block", 3, "disabled"], [1, "text-danger"], [3, "value"]],
      template: function RegisterFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterFormComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, RegisterFormComponent_span_15_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, RegisterFormComponent_span_21_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, RegisterFormComponent_span_22_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, RegisterFormComponent_span_28_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, RegisterFormComponent_span_34_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, RegisterFormComponent_span_35_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, RegisterFormComponent_span_41_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, RegisterFormComponent_span_42_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, RegisterFormComponent_span_48_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, RegisterFormComponent_span_49_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](57, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, RegisterFormComponent_option_58_Template, 2, 2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, RegisterFormComponent_span_59_Template, 3, 3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 23, "register.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 25, "register.name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.name.touched && (ctx.registerFormControl.name.errors == null ? null : ctx.registerFormControl.name.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 27, "register.email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.email.touched && (ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.email.touched && (ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 29, "register.username"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.username.touched && (ctx.registerFormControl.username.errors == null ? null : ctx.registerFormControl.username.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](32, 31, "register.mobile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.mobile.touched && (ctx.registerFormControl.mobile.errors == null ? null : ctx.registerFormControl.mobile.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.mobile.touched && (ctx.registerFormControl.mobile.errors == null ? null : ctx.registerFormControl.mobile.errors.pattern));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](39, 33, "register.password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.password.touched && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.password.touched && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.invalidPassword));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 35, "register.confirmPassword"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.confirmPassword.touched && (ctx.registerFormControl.confirmPassword.errors == null ? null : ctx.registerFormControl.confirmPassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.confirmPassword.touched && (ctx.registerFormControl.confirmPassword.errors == null ? null : ctx.registerFormControl.confirmPassword.errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](53, 37, "register.profession"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](57, 39, "register.selectAnOption"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.professions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerFormControl.confirmPassword.touched && (ctx.registerFormControl.profession.errors == null ? null : ctx.registerFormControl.profession.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.registerForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-form',
          templateUrl: './register-form.component.html',
          styleUrls: ['./register-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/airline-loader.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/airline-loader.service.ts ***!
    \****************************************************/

  /*! exports provided: AirlineLoaderService */

  /***/
  function srcAppServicesAirlineLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineLoaderService", function () {
      return AirlineLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AirlineLoaderService = /*#__PURE__*/function () {
      function AirlineLoaderService(http) {
        _classCallCheck(this, AirlineLoaderService);

        this.http = http;
        this.AIRLINE_BASE_URL = 'https://api.instantwebtools.net/v1/airlines';
        this.isLoad = true;
      }

      _createClass(AirlineLoaderService, [{
        key: "getAirlines",
        value: function getAirlines() {
          return this.airlines;
        }
      }, {
        key: "loadAirlineData",
        value: function loadAirlineData() {
          var _this17 = this;

          console.log('Loading airlines data');

          if (this.isLoad) {
            this.isLoad = false;
            var $airlineData = this.http.get(this.AIRLINE_BASE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(3)).subscribe(function (data) {
              console.log('airlines loaded ');
              _this17.airlines = data;
            });
            return $airlineData;
          }
        }
      }]);

      return AirlineLoaderService;
    }();

    AirlineLoaderService.??fac = function AirlineLoaderService_Factory(t) {
      return new (t || AirlineLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AirlineLoaderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AirlineLoaderService,
      factory: AirlineLoaderService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AirlineLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(userService) {
        _classCallCheck(this, AuthService);

        this.userService = userService;
      }

      _createClass(AuthService, [{
        key: "authenticate",
        value: function authenticate(username, password) {
          var _a, _b;

          var user = (_b = (_a = this.userService) === null || _a === void 0 ? void 0 : _a.users) === null || _b === void 0 ? void 0 : _b.find(function (user) {
            return user.username === username && user.password === password;
          });

          if (user) {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('profession', user.profession);
            return user;
          } else {
            return false;
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('username');
          return !(user === null);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('username');
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http, tstr, modalService) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.tstr = tstr;
        this.modalService = modalService;
        this.STUDENT_BASE_URL = './assets/students.json';
        this.PASSENGER_BASE_URL = 'https://api.instantwebtools.net/v1/passenger';
        this.AIRLINE_BASE_URL = 'https://api.instantwebtools.net/v1/airlines';
        this.selectedAirline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.registerFormData = {
          name: '',
          email: '',
          mobile: '',
          username: '',
          password: '',
          profession: ''
        };
      }

      _createClass(DataService, [{
        key: "setFormData",
        value: function setFormData(values) {
          this.registerFormData.name = values.name;
          this.registerFormData.email = values.email;
          this.registerFormData.username = values.username;
          this.registerFormData.mobile = values.mobile;
          this.registerFormData.profession = values.profession;
        }
      }, {
        key: "loadStudentData",
        value: function loadStudentData() {
          return this.http.get(this.STUDENT_BASE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
        }
      }, {
        key: "loadPassengerData",
        value: function loadPassengerData() {
          console.log('Loading passenger data');
          return this.http.get("".concat(this.PASSENGER_BASE_URL, "?page=0&size=100")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
        }
      }, {
        key: "postPassengerData",
        value: function postPassengerData(passsengerData) {
          var _this18 = this;

          return this.http.post("".concat(this.PASSENGER_BASE_URL), passsengerData).subscribe(function (res) {
            console.log(res);

            _this18.tstr.success('', 'New passenger saved', {
              timeOut: 1000
            });

            _this18.modalService.dismissAll();
          }, function (err) {
            console.log(err);

            _this18.tstr.error('', 'Error, Please retry', {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "postAirlineData",
        value: function postAirlineData(airlineData) {
          var _this19 = this;

          return this.http.post("".concat(this.AIRLINE_BASE_URL), airlineData).subscribe(function (res) {
            console.log(res);

            _this19.tstr.success('', 'New airline saved', {
              timeOut: 1000
            });

            _this19.modalService.dismissAll();
          }, function (err) {
            console.log(err);

            if (err.error.message === "there is an airline registered under same id you've entered") {
              _this19.tstr.error('Please enter a different id', 'Airline already exists', {
                timeOut: 1000
              });
            } else {
              _this19.tstr.error('', 'Error, Please retry', {
                timeOut: 1000
              });
            }
          });
        }
      }, {
        key: "updatePassengerData",
        value: function updatePassengerData(passengerData, id) {
          var _this20 = this;

          console.log("".concat(this.PASSENGER_BASE_URL, "/").concat(id), passengerData);
          return this.http.put("".concat(this.PASSENGER_BASE_URL, "/").concat(id), passengerData).subscribe(function (res) {
            console.log(res);

            _this20.tstr.success('', 'Passenger details updated', {
              timeOut: 1000
            });

            _this20.modalService.dismissAll();

            _this20.subject.next('Passenger|update');
          }, function (err) {
            console.log(err);

            _this20.tstr.error('', 'Error, Please retry', {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "deletePassenger",
        value: function deletePassenger(id) {
          var _this21 = this;

          console.log("".concat(this.PASSENGER_BASE_URL, "/").concat(id), id);
          return this.http["delete"]("".concat(this.PASSENGER_BASE_URL, "/").concat(id)).subscribe(function (res) {
            console.log(res);

            _this21.tstr.success('', 'Passenger deleted', {
              timeOut: 1000
            });

            _this21.subject.next('Passenger|delete');
          }, function (err) {
            console.log(err);

            _this21.tstr.error('', 'Error, Please retry', {
              timeOut: 1000
            });
          });
        }
      }]);

      return DataService;
    }();

    DataService.??fac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]));
    };

    DataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: DataService,
      factory: DataService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, tstr, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.tstr = tstr;
        this.router = router;
        this.USER_BASE_URL = 'https://6242e274d126926d0c58f063.mockapi.io/api122121/users';
        this.users = [{
          name: 'admin',
          email: 'admin@gmail.com',
          mobile: '0000000000',
          password: 'admin',
          profession: 'Admin',
          username: 'admin'
        }, {
          name: 'student',
          email: 'student@gmail.com',
          mobile: '0000000000',
          password: 'student',
          profession: 'Student',
          username: 'student'
        }];
      }

      _createClass(UserService, [{
        key: "registerUser",
        value: function registerUser(registerFormData) {
          var _this22 = this;

          var userData = {
            name: registerFormData.name,
            email: registerFormData.email,
            username: registerFormData.username,
            password: registerFormData.password,
            profession: registerFormData.profession,
            mobile: registerFormData.mobile
          };

          if (this.checkIfDuplicateUser(this.users, userData)) {
            this.tstr.error('Provide unique username and email', 'User already exists.', {
              timeOut: 1000
            });
          } else {
            this.http.post("".concat(this.USER_BASE_URL), userData).subscribe(function (res) {
              _this22.tstr.success('', 'New user created', {
                timeOut: 1000
              });

              _this22.saveToFile(userData);

              _this22.router.navigate(['display']);
            }, function (err) {
              _this22.tstr.error('', 'Registration failed', {
                timeOut: 1000
              });

              console.log(err);
            });
          }
        }
      }, {
        key: "checkIfDuplicateUser",
        value: function checkIfDuplicateUser(users, userData) {
          return users.find(function (x) {
            return x.username === userData.username || x.email === userData.email;
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this23 = this;

          return this.http.get("".concat(this.USER_BASE_URL)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(3)).subscribe(function (res) {
            res.push({
              name: 'admin',
              email: 'admin@gmail.com',
              mobile: '0000000000',
              password: 'admin',
              profession: 'Admin',
              username: 'admin'
            }, {
              name: 'student',
              email: 'student@gmail.com',
              mobile: '0000000000',
              password: 'student',
              profession: 'Student',
              username: 'student'
            });
            console.log(res);
            _this23.users = res;
          }, function (err) {
            console.log(err);
            return err;
          });
        }
      }, {
        key: "saveToFile",
        value: function saveToFile(userData) {
          var data = '\r Name: ' + userData.name + ' \r\n ' + 'Email: ' + userData.email + ' \r\n ' + 'Username: ' + userData.username + ' \r\n ' + 'Mobile: ' + userData.mobile + ' \r\n ' + 'Profession: ' + userData.profession;
          file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](new Blob([data], {
            type: 'text/plain;charset=utf-8'
          }), 'data.txt', {
            autoBom: false
          });
        }
      }]);

      return UserService;
    }();

    UserService.??fac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UserService,
      factory: UserService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/validations.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/validations.service.ts ***!
    \*************************************************/

  /*! exports provided: ValidationsService */

  /***/
  function srcAppServicesValidationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationsService", function () {
      return ValidationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidationsService = /*#__PURE__*/function () {
      function ValidationsService() {
        _classCallCheck(this, ValidationsService);
      }

      _createClass(ValidationsService, [{
        key: "patternValidator",
        value: function patternValidator() {
          return function (control) {
            if (!control.value) {
              return null;
            }

            var regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            var valid = regex.test(control.value);
            return valid ? null : {
              invalidPassword: true
            };
          };
        }
      }, {
        key: "MatchPassword",
        value: function MatchPassword(password, confirmPassword) {
          return function (formGroup) {
            var passwordControl = formGroup.controls[password];
            var confirmPasswordControl = formGroup.controls[confirmPassword];

            if (!passwordControl || !confirmPasswordControl) {
              return null;
            }

            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
              return null;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
              confirmPasswordControl.setErrors({
                passwordMismatch: true
              });
            } else {
              confirmPasswordControl.setErrors(null);
            }
          };
        }
      }]);

      return ValidationsService;
    }();

    ValidationsService.??fac = function ValidationsService_Factory(t) {
      return new (t || ValidationsService)();
    };

    ValidationsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ValidationsService,
      factory: ValidationsService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ValidationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/contact-us-page/contact-us-page.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/footer/contact-us-page/contact-us-page.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ContactUsPageComponent */

  /***/
  function srcAppSharedFooterContactUsPageContactUsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageComponent", function () {
      return ContactUsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactUsPageComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ContactUsPageComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Enter a valid email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ContactUsPageComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ContactUsPageComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Message is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var ContactUsPageComponent = /*#__PURE__*/function () {
      function ContactUsPageComponent(fb, tstr) {
        _classCallCheck(this, ContactUsPageComponent);

        this.fb = fb;
        this.tstr = tstr;
      }

      _createClass(ContactUsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ContactusForm = this.createContactUsForm();
        }
      }, {
        key: "createContactUsForm",
        value: function createContactUsForm() {
          return this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "ContactusFormControl",
        get: function get() {
          return this.ContactusForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.tstr.success('', 'Message sent successfully', {
            timeOut: 1000
          });
          this.ContactusForm.reset();
        }
      }]);

      return ContactUsPageComponent;
    }();

    ContactUsPageComponent.??fac = function ContactUsPageComponent_Factory(t) {
      return new (t || ContactUsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    ContactUsPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactUsPageComponent,
      selectors: [["app-contact-us-page"]],
      decls: 31,
      vars: 6,
      consts: [[1, "main"], [1, "container"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], ["action", "https://formspree.io/f/mjvlalgj", "method", "POST", 1, "form-group", 3, "formGroup", "ngSubmit"], ["form", ""], [1, "form-group"], ["type", "text", "formControlName", "email", "name", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "name", "name", "name", 1, "form-control"], ["name", "message", "formControlName", "message", "name", "message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger", "btn-block", 3, "disabled", "click"], [1, "text-danger"]],
      template: function ContactUsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ContactUsPageComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ContactUsPageComponent_span_17_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ContactUsPageComponent_span_18_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ContactUsPageComponent_span_23_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Message:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ContactUsPageComponent_span_28_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContactUsPageComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

            return _r0.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.ContactusForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ContactusFormControl.email.touched && (ctx.ContactusFormControl.email.errors == null ? null : ctx.ContactusFormControl.email.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ContactusFormControl.email.touched && (ctx.ContactusFormControl.email.errors == null ? null : ctx.ContactusFormControl.email.errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ContactusFormControl.name.touched && (ctx.ContactusFormControl.name.errors == null ? null : ctx.ContactusFormControl.name.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ContactusFormControl.message.touched && (ctx.ContactusFormControl.message.errors == null ? null : ctx.ContactusFormControl.message.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.ContactusForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".main[_ngcontent-%COMP%]{\r\n  height: 68vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9jb250YWN0LXVzLXBhZ2UvY29udGFjdC11cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2NvbnRhY3QtdXMtcGFnZS9jb250YWN0LXVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIGhlaWdodDogNjh2aDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us-page',
          templateUrl: './contact-us-page.component.html',
          styleUrls: ['./contact-us-page.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 0,
      consts: [[1, "page-footer", "font-small", "blue"], [1, "footer-copyright", "text-center", "py-3"], ["routerLink", "contact-us"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\xA9 2022 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " DummyFooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["footer[_ngcontent-%COMP%]{\r\n  height: 80px;\r\n  background-color: #abc4ff;\r\n  margin-top: 30vh;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  color: blue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJjNGZmO1xyXG4gIG1hcmdpbi10b3A6IDMwdmg7XHJcbn1cclxuYXtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HeaderComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Hi, ", ctx_r0.user, "");
      }
    }

    function HeaderComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.passenger"));
      }
    }

    function HeaderComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.airline"));
      }
    }

    function HeaderComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.register"));
      }
    }

    function HeaderComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.login"));
      }
    }

    function HeaderComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_li_17_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r9.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.logout"));
      }
    }

    function HeaderComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_li_25_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r11.closeNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_li_25_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r13.closeNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.register"));
      }
    }

    function HeaderComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_li_26_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r14.closeNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.login"));
      }
    }

    function HeaderComponent_li_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_li_27_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r16.closeNav();
        })("click", function HeaderComponent_li_27_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r18.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "header.logout"));
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(auth, router, tstr, translate) {
        _classCallCheck(this, HeaderComponent);

        this.auth = auth;
        this.router = router;
        this.tstr = tstr;
        this.translate = translate;
        this.loggedin = false;
        this.isAdmin = false;
        this.opened = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.auth.isUserLoggedIn() ? this.loggedin = true : this.loggedin = false;
          this.isUserAdmin();
          this.user = sessionStorage.getItem('username');
        }
      }, {
        key: "changeLang",
        value: function changeLang(lang) {
          this.translate.setDefaultLang(lang);
          this.translate.use(lang.match(/de|en/) ? lang : 'en');
          this.lang = lang;
        }
      }, {
        key: "isUserAdmin",
        value: function isUserAdmin() {
          if (sessionStorage.getItem('profession') === 'Admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.auth.logOut();
          this.loggedin = false;
          this.tstr.success('', 'Logged out', {
            timeOut: 1000
          });
          this.router.navigate(['login']);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.opened = !this.opened;
        }
      }, {
        key: "openNav",
        value: function openNav() {
          document.getElementById("mySidebar").style.width = "250px";
        }
        /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */

      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidebar").style.width = "0";
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 62,
      vars: 11,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", 2, "background-color", "#abc4ff"], [1, "pi", "pi-bars", 2, "margin-right", "10px", 3, "click"], ["routerLink", "", 1, "navbar-brand"], [4, "ngIf"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item ", 4, "ngIf"], [1, "custom-select", 3, "change"], ["value", "en", 3, "selected"], ["value", "de", 3, "selected"], ["class", "nav-item", 4, "ngIf"], ["id", "mySidebar", 1, "sidebar"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "list-unstyled", "components"], ["routerLink", "contact-us", 3, "click"], [3, "click", 4, "ngIf"], [1, "active"], ["href", "#homeSubmenu", "data-toggle", "collapse", "aria-expanded", "false"], ["id", "homeSubmenu", 1, "collapse", "list-unstyled"], ["href", "#"], ["href", "#pageSubmenu", "data-toggle", "collapse", "aria-expanded", "false"], ["id", "pageSubmenu", 1, "collapse", "list-unstyled"], [1, "nav-item"], ["routerLinkActive", "['active']", "routerLink", "/dashboard", 1, "nav-link"], ["routerLinkActive", "['active']", "routerLink", "/airline", 1, "nav-link"], ["routerLinkActive", "['active']", "routerLink", "/input", 1, "nav-link"], ["routerLinkActive", "['active']", "routerLink", "/login", 1, "nav-link"], ["routerLinkActive", "['active']", 1, "nav-link", 3, "click"], [3, "click"], ["routerLinkActive", "['active']", "routerLink", "/input", 3, "click"], ["routerLinkActive", "['active']", "routerLink", "/login", 3, "click"], ["routerLinkActive", "['active']", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_i_click_1_listener() {
            return ctx.openNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Flight Booking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HeaderComponent_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HeaderComponent_li_7_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HeaderComponent_li_8_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function HeaderComponent_Template_select_change_10_listener($event) {
            return ctx.changeLang($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Deutsch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, HeaderComponent_li_15_Template, 4, 3, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, HeaderComponent_li_16_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, HeaderComponent_li_17_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_19_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_23_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, HeaderComponent_li_25_Template, 4, 3, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, HeaderComponent_li_26_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, HeaderComponent_li_27_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Home 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Home 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Home 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Page 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Page 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Page 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isAdmin && ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isAdmin && ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx.lang == "de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loggedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loggedin);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  margin-bottom: 8vh;\r\n}\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  height: 100%; \r\n  width: 0; \r\n  position: fixed; \r\n  z-index: 1; \r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111; \r\n  overflow-x: hidden; \r\n  padding-top: 60px; \r\n  transition: 0.5s; \r\n}\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  background: white;\r\n}\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidebar[_ngcontent-%COMP%] {padding-top: 15px;}\r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n}\r\n\r\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], a[aria-expanded=\"true\"][_ngcontent-%COMP%] {\r\n  border-left: 3px solid #009688;\r\n  color: #1d2129 !important;\r\n  background-color: #fff;\r\n  }\r\n\r\na[aria-expanded=\"false\"][_ngcontent-%COMP%]::before, a[aria-expanded=\"true\"][_ngcontent-%COMP%]::before {\r\n  content: '\\e259';\r\n  display: block;\r\n  position: absolute;\r\n  right: 20px;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-size: 0.6em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsdUVBQXVFOztBQUV2RTtFQUNFLFlBQVksRUFBRSxxQkFBcUI7RUFDbkMsUUFBUSxFQUFFLDBDQUEwQztFQUNwRCxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxnQkFBZ0I7RUFDNUIsTUFBTTtFQUNOLE9BQU87RUFDUCxzQkFBc0IsRUFBRSxTQUFTO0VBQ2pDLGtCQUFrQixFQUFFLDhCQUE4QjtFQUNsRCxpQkFBaUIsRUFBRSxvQ0FBb0M7RUFDdkQsZ0JBQWdCLEVBQUUseURBQXlEO0FBQzdFOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSxpRUFBaUU7O0FBQ2pFO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQSwyREFBMkQ7O0FBQzNEO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFLQSxnSUFBZ0k7O0FBQ2hJO0VBQ0UsVUFBVSxpQkFBaUIsQ0FBQztFQUM1QixZQUFZLGVBQWUsQ0FBQztBQUM5Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCOztBQUdBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEI7O0FBSUYsaUVBQWlFIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5uYXZ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHZoO1xyXG59XHJcblxyXG4vKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cclxuICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTsgLyogQmxhY2sqL1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXHJcbiAgdHJhbnNpdGlvbjogMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZWJhciAqL1xyXG59XHJcblxyXG4vKiBUaGUgc2lkZWJhciBsaW5rcyAqL1xyXG4uc2lkZWJhciBhIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXHJcbi5zaWRlYmFyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXHJcbi5zaWRlYmFyIC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZWJhciB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gIC5zaWRlYmFyIGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLCBhW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDk2ODg7XHJcbiAgY29sb3I6ICMxZDIxMjkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcblxyXG4gIGFbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOjpiZWZvcmUsIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl06OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTI1OSc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/types/FlightSchedule.ts":
  /*!*****************************************!*\
    !*** ./src/app/types/FlightSchedule.ts ***!
    \*****************************************/

  /*! exports provided: FlightSchedule */

  /***/
  function srcAppTypesFlightScheduleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightSchedule", function () {
      return FlightSchedule;
    });

    var FlightSchedule = /*#__PURE__*/_createClass(function FlightSchedule() {
      _classCallCheck(this, FlightSchedule);
    });
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular\Angular dummy1 deployed\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map