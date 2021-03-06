webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.components = [
            "home",
            "bills",
            "utilities",
            "people",
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-root',
            template: "\n    <main class=\"container\">\n      <div class=\"header\">\n        <h2>Roommate Bill Tracker</h2>\n      </div>\n      <nav class=\"navigation\">\n        <ul class=\"main\">\n          <a *ngFor=\"let component of components\" routerLink=\"/{{component}}\" routerLinkActive=\"active\">\n            <li>{{ component | uppercase }}</li>\n          </a>\n        </ul>\n      </nav>\n      <div class=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"footer\">\n        <p>&copy; Andrew Piper</p>\n      </div>\n    </main>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_bill_module__ = __webpack_require__("../../../../../src/app/modules/bill.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_app_routing_module__ = __webpack_require__("../../../../../src/app/routes/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_notfound_component__["a" /* NotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__routes_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__modules_bill_module__["a" /* BillModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/bill-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BillDetailInlineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bill__ = __webpack_require__("../../../../../src/app/models/bill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillDetailInlineComponent = (function () {
    function BillDetailInlineComponent() {
    }
    BillDetailInlineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */])
    ], BillDetailInlineComponent.prototype, "bill", void 0);
    BillDetailInlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'bill-detail-inline-cmp',
            template: "\n    <div class=\"bill-details\">\n      <a routerLink=\"/bills/{{ bill.id }}\">\n        <div class=\"left\">\n          <span class=\"paid-to\">\n            <a routerLink=\"/utilities/{{ bill.paid_to.id }}\" >\n              {{ bill.paid_to.name | titlecase }}\n            </a>\n          </span>\n          <span class=\"due-date\">\n            Due: {{ bill.due_date }}\n          </span>\n        </div>\n        <div class=\"amount right\">\n          <div>\n            <span>Bill Total Amount: {{ bill.amount | currency:'USD' }}</span>\n          </div>\n          <div >\n            <span>Bill Split Amount: {{ bill.split_amount | currency: 'USD' }}</span>\n          </div>\n        </div>\n      </a>\n    </div>\n  ",
            styles: ["\n    :host {\n      flex: 1;\n    }\n    .bill-details {\n      display: flex;\n      flex: 1 1 100%;\n      margin: 5px 0;\n    }\n    .bill-details > a {\n      text-decoration: none;\n      display: flex;\n      background-color: var(--color-gray-light);\n      color: var(--color-gray-dark);\n      justify-content: space-between;\n      padding: 10px;\n      width: 100%;\n    }\n    .bill-details > a:hover {\n      background-color: rgba(0,0,0,0.25);\n    }\n  "],
        })
    ], BillDetailInlineComponent);
    return BillDetailInlineComponent;
}());

var BillDetailComponent = (function () {
    function BillDetailComponent(route, router, billService, personService, utilityService) {
        this.route = route;
        this.router = router;
        this.billService = billService;
        this.personService = personService;
        this.utilityService = utilityService;
    }
    BillDetailComponent.prototype.ngOnInit = function () {
        this.getBill();
    };
    BillDetailComponent.prototype.getBill = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.billService.getBill(id).then(function (res) {
            if (res.status_code === 404) {
                _this.router.navigate(['/404']);
            }
            _this.bill = res;
        });
    };
    BillDetailComponent.prototype.togglePersonPaid = function (person) {
        if (!this.bill.paid_partial.includes(person)) {
            this.bill.paid_partial.push(person);
            this.bill.paid_partial_ids.push(person.id);
        }
        else {
            var i = this.bill.paid_partial.findIndex(function (v) { return v.id === person.id; });
            this.bill.paid_partial.splice(i, 1);
            i = this.bill.paid_partial_ids.indexOf(person.id);
            this.bill.paid_partial_ids.splice(i, 1);
        }
        if (this.bill.paid_partial.length === this.bill.split_by.length) {
            this.bill.paid_full = true;
            this.utilityService.updatePayments(this.bill.amount, this.bill.paid_to.id);
        }
        this.billService.updateBill(this.bill);
        this.personService.updatePaymentsMade(this.bill.split_amount, person.id);
    };
    BillDetailComponent.prototype.deleteBill = function () {
        var choice = confirm("Are You Sure You Want to Delete This Bill?");
        if (choice) {
            this.billService.deleteBill(this.bill.id);
            this.router.navigate(['/bills']);
        }
    };
    BillDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'bill-detail-cmp',
            template: "\n    <div class=\"bill-details\">\n      <div class=\"paid-to\">\n        <h3>\n          <a routerLink=\"/utilities/{{ bill?.paid_to.id }}\"> \n            {{ bill?.paid_to.name | titlecase }}\n          </a>\n        </h3>\n      </div>\n      <div class=\"amount\">\n        <span class=\"label\">Total Amount Due: </span>\n        <span class=\"value\">{{ bill?.amount | currency:'USD' }}</span>\n      </div>\n      <div class=\"due-date\">\n        <span class=\"label\">Bill Due: </span>\n        <span class=\"value\">{{ bill?.due_date }}</span>\n      </div>\n      <div class=\"split-by\">\n        <h4>Split By:</h4>\n        <div *ngFor=\"let person of bill?.split_by\">\n          <div *ngIf=\"bill.paid_partial_ids.includes(person.id); then paid else unpaid\">\n          </div>\n          <a routerLink=\"/person/{{ person.id }}\">\n            <span>{{ person.name }}</span>\n          </a>\n          <ng-template #paid>\n            <span class=\"\">\n              <button class=\"unmark-person-paid\" disabled>\n                <span class=\"checkmark\"></span>\n              </button>\n            </span>\n            <span class=\"person-paid\">Paid</span>\n          </ng-template>\n          <ng-template #unpaid>\n            <span class=\"person-unpaid\">\n              <button class=\"mark-person-paid toggle alert\" (click)=\"togglePersonPaid(person)\">\n                Mark As Paid\n              </button>\n            </span>\n            <span>Unpaid</span>\n          </ng-template>\n        </div>\n      </div>\n      <div *ngIf=\"bill?.notes\" class=\"notes\">\n        <h4>Bill Notes:</h4>\n        <p>{{ bill?.notes }}</p>\n      </div>\n      <div class=\"delete right\">\n        <span class=\"\">\n          <button class=\"alert\" (click)=\"deleteBill()\">Delete</button>\n        </span>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      width: 100%;\n    }\n    .paid-to {\n      font-weight: bold;\n    }\n    .amount .label,\n    .amount .value {\n      font-size: 14pt;\n      font-weight: bold;\n    }\n    .amount .value {\n      color: var(--color-red);\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_bill_service__["a" /* BillService */],
            __WEBPACK_IMPORTED_MODULE_4__services_person_service__["b" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_utility_service__["b" /* UtilityService */]])
    ], BillDetailComponent);
    return BillDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bill-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_bill__ = __webpack_require__("../../../../../src/app/models/bill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_utility__ = __webpack_require__("../../../../../src/app/models/utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillFormComponent = (function () {
    function BillFormComponent(billService, utilityService, personService, route, fb) {
        this.billService = billService;
        this.utilityService = utilityService;
        this.personService = personService;
        this.route = route;
        this.fb = fb;
        this.addedBill = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    BillFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.utilities = data.utilities;
            _this.persons = data.persons;
            _this.createForm();
        });
        this.setPosition();
    };
    BillFormComponent.prototype.createForm = function () {
        var _this = this;
        this.personsArray = this.fb.array(this.persons.map(function (v) {
            return _this.fb.control(false);
        }));
        this.billForm = this.fb.group({
            due_date: [new Date().toLocaleDateString(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            amount: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].min(0.01), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            paid_to: [__WEBPACK_IMPORTED_MODULE_4__models_utility__["a" /* Utility */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            split_by: this.personsArray,
            notes: '',
        });
    };
    BillFormComponent.prototype.datePicked = function (d) {
        console.log(d);
    };
    BillFormComponent.prototype.prepareSaveBill = function () {
        var _this = this;
        var bf = this.billForm.value;
        var u_id = this.utilities.findIndex(function (v) { return v.id === +bf.paid_to; });
        var p = [];
        bf.split_by.forEach(function (v, i) {
            if (v) {
                p.push(_this.persons[i]);
            }
        });
        if (p.length === 0) {
            return;
        }
        var b = new __WEBPACK_IMPORTED_MODULE_3__models_bill__["a" /* Bill */]({
            due_date: this.billForm.value.due_date,
            amount: +this.billForm.value.amount,
            paid_to: this.utilities[u_id],
            split_by: p,
            notes: this.billForm.value.notes,
        });
        return b;
    };
    BillFormComponent.prototype.saveBill = function () {
        if (this.billForm.valid) {
            var b = this.prepareSaveBill();
            if (!b) {
                this.addedBill.emit(false);
                return false;
            }
            this.billService.saveBill(b);
            this.addedBill.emit(b);
        }
    };
    BillFormComponent.prototype.cancel = function () {
        this.addedBill.emit(false);
    };
    BillFormComponent.prototype.onSubmit = function () {
        this.saveBill();
    };
    BillFormComponent.prototype.setPosition = function () {
        var h = this.container.nativeElement.offsetHeight;
        var w = this.container.nativeElement.offsetWidth;
        h = (this.container.nativeElement.parentElement.offsetHeight / 2) - (h / 2);
        w = (this.container.nativeElement.parentElement.offsetWidth / 2) - (w / 2);
        this.formPosition = {
            top: h + "px",
            left: w + "px",
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BillFormComponent.prototype, "addedBill", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BillFormComponent.prototype, "container", void 0);
    BillFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'bill-form',
            template: "\n    <div class=\"form-container\" [ngStyle]=\"formPosition\" #container>\n      <h3>Add New Bill</h3>\n      <form [formGroup]=\"billForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group due-date\">\n          <label>Due Date:\n            <date-picker \n              [extraClass]=\"'test'\" \n              [name]=\"'due_date'\"\n              (datePicked)=\"datePicked($event)\">\n            </date-picker>\n          </label>\n        </div>\n        <div class=\"form-group amount\">\n          <label>Amount:\n            <input type=\"number\" class=\"form-control\" formControlName=\"amount\">\n          </label>\n        </div>\n        <div class=\"form-group paid-to\">\n          <label>Utility:\n            <select class=\"form-control\" formControlName=\"paid_to\">\n              <option *ngFor=\"let utility of utilities\" [value]=\"utility.id\">{{ utility.name | uppercase }}</option>\n            </select>\n          </label>\n        </div>\n        <div class=\"form-group split-by\">\n          <label>Roommates:\n            <div class=\"split-by-checkboxes\" *ngFor=\"let person of persons; let i = index\" formArrayName=\"split_by\">\n              <label>\n                <input type=\"checkbox\" [formControlName]=\"i\"  [id]=\"person.name\" [value]=\"person.id\">\n                {{ person.name | uppercase }}\n              </label>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group notes\">\n          <label>notes:\n            <textarea class=\"form-control\" formcontrolname=\"notes\" rows=\"5\"></textarea>\n          </label>\n        </div>\n        <div class=\"buttons\">\n          <button (click)=\"cancel()\">cancel</button>\n          <button >submit</button>\n        </div>\n      </form>\n    </div>\n  ",
            styles: ["\n    :host {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      background-color: rgba(0,0,0,0.5);\n    }\n    .form-container {\n      width: auto;\n      height: auto;\n      position: absolute;\n      background-color: var(--color-gray-light);\n      padding: 25px;\n    }\n    .form-container h3 {\n      margin-top: 0;\n      text-decoration: underline;\n    }\n    .form-container form {\n    }\n    .form-group {\n      margin: 5px;\n    }\n    .form-group,\n    .form-control,\n    label {\n      width: 100%;\n    }\n    .split-by-checkboxes label {\n      display: inline-block;\n      width: 90%;\n    }\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 5px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_bill_service__["a" /* BillService */],
            __WEBPACK_IMPORTED_MODULE_6__services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_7__services_person_service__["b" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], BillFormComponent);
    return BillFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BillComponent = (function () {
    function BillComponent(billService, router) {
        this.billService = billService;
        this.router = router;
        this.paid_bills = [];
        this.unpaid_bills = [];
        this.showForm = false;
    }
    BillComponent.prototype.ngOnInit = function () {
        this.paid_bills;
        this.unpaid_bills;
        this.getBills();
    };
    BillComponent.prototype.getBills = function () {
        var _this = this;
        this.billService.getBills().then(function (bills) {
            //this.bills = bills;
            bills.forEach(function (v, i) {
                if (v.paid_full) {
                    _this.paid_bills.push(v);
                }
                else {
                    _this.unpaid_bills.push(v);
                }
            });
        });
    };
    BillComponent.prototype.addBill = function () {
        this.showForm = !this.showForm;
    };
    BillComponent.prototype.updateBills = function (bill) {
        if (bill) {
            this.unpaid_bills.push(bill);
        }
        this.showForm = false;
    };
    BillComponent.prototype.closeForm = function (evt) {
        if (evt.target.nodeName === 'BILL-FORM') {
            this.showForm = false;
        }
    };
    BillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'bill-cmp',
            template: "\n    <div class=\"bills-header\">\n      <h3>Bills</h3>\n      <div class=\"add-bill\">\n        <span>\n          <button (click)=\"addBill()\">Add New Bill</button>\n        </span>\n      </div>\n    </div>\n    <div *ngIf=\"unpaid_bills?.length === 0; then no_bills else list_bills\"></div>\n    <ng-template #no_bills>\n      <p>There are no active bills.</p>\n    </ng-template>\n    <ng-template #list_bills>\n      <div class=\"bills-list\" >\n        <h3>Currently Unpaid Bills</h3>\n        <bill-detail-inline-cmp *ngFor=\"let bill of unpaid_bills\" [bill]=\"bill\">\n        </bill-detail-inline-cmp>\n      </div>\n    </ng-template>\n    <div class=\"bills-list\">\n      <h3>Paid Bills</h3>\n      <bill-detail-inline-cmp *ngFor=\"let bill of paid_bills\" [bill]=\"bill\">\n      </bill-detail-inline-cmp>\n    </div>\n    <bill-form *ngIf=\"showForm\" (addedBill)=\"updateBills($event)\" (click)=\"closeForm($event)\"></bill-form>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex: 1 0 100%;\n      flex-direction: column;\n    }\n    .bills-header {\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_bill_service__["a" /* BillService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { Router, ActivatedRoute } from '@angular/router';
import { animate, keyframes, trigger, transition, style, state } from '@angular/animations';*/

var ChartComponent = (function () {
    function ChartComponent() {
        this.chartid = 'default';
        this.settings = {
            width: 800,
            height: 225,
            margin: 30,
            radius: 3,
        };
        this.values = [];
        this.x_labels = [];
        this.y_labels = [];
        this.scales = {
            x: undefined,
            y: undefined,
        };
    }
    ChartComponent.prototype.ngOnInit = function () {
        if (this.user_settings) {
            console.log('uesr-settins', this.user_settings);
        }
    };
    ChartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.data) {
            this.data.forEach(function (v, i) {
                _this.values.push(v.amount);
                _this.x_labels.push(v.due_date);
            });
            this.drawChart();
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.createSVG();
    };
    ChartComponent.prototype.createSVG = function () {
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* select */]("#" + this.chartid)
            .append('svg')
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("x", 0)
            .attr("y", 0)
            .attr("viewBox", "0 0 " + this.settings.width + " " + this.settings.height)
            .attr("preserveAspectRatio", "none")
            .append("g")
            .attr('transform', "translate(" + this.settings.margin + ", 0)");
    };
    ChartComponent.prototype.drawChart = function () {
        this.drawAxis();
        this.drawLines();
        this.drawPoints();
        this.addHoverBar();
    };
    ChartComponent.prototype.drawPoints = function () {
        var _this = this;
        this.svg.append('g').selectAll('circle')
            .data(this.values).enter()
            .append('circle')
            .attr('class', 'data-point')
            .attr('r', this.settings.radius)
            .attr('cx', function (d, i) { return _this.scales.x(_this.x_labels[i]) + _this.scales.x.step() / 2; })
            .attr('cy', function (d) { return _this.scales.y(d); });
    };
    ChartComponent.prototype.drawLines = function () {
        var _this = this;
        this.svg.append('g').selectAll('line')
            .data(this.values.slice(0, this.values.length - 1)).enter()
            .append('line')
            .attr('class', 'data-line')
            .attr('x1', function (d, i) { return _this.scales.x(_this.x_labels[i]) + _this.scales.x.step() / 2; })
            .attr('y1', function (d) { return _this.scales.y(d); })
            .attr('x2', function (d, i) { return _this.scales.x(_this.x_labels[i + 1]) + _this.scales.x.step() / 2; })
            .attr('y2', function (d, i) { return _this.scales.y(_this.values[i + 1]); });
    };
    ChartComponent.prototype.drawAxis = function () {
        this.scales.x = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* scaleBand */]().domain(this.x_labels)
            .range([0, (this.settings.width - 2 * this.settings.margin)]);
        this.scales.y = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* scaleLinear */]().domain([0, (__WEBPACK_IMPORTED_MODULE_1_d3__["c" /* max */](this.values) * 1.1)]) // multiply by 1.1 for 10% of padding above largest value.
            .range([(this.settings.height - this.settings.margin), 0]);
        var x_axis = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisBottom */](this.scales.x)
            .ticks(this.x_labels.length);
        var y_axis = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisLeft */](this.scales.y)
            .ticks(5);
        this.svg.append('g')
            .attr('transform', "translate(0, " + (this.settings.height - this.settings.margin) + ")")
            .attr('class', 'x-axis axis')
            .call(x_axis);
        this.svg.append('g')
            .attr('class', 'y-axis axis')
            .call(y_axis);
    };
    ChartComponent.prototype.addHoverBar = function () {
        var _this = this;
        var g = this.svg.append('g').selectAll('g')
            .data(this.values).enter()
            .append('g')
            .attr('class', 'hover-g');
        // highlight bar over the height of the point.
        g.append('rect')
            .attr('class', 'hover-bar')
            .attr('x', function (d, i) { return _this.scales.x(_this.x_labels[i]) + _this.scales.x.step() / 2 - 10; })
            .attr('y', function (d) { return _this.scales.y(d) - 10; })
            .attr('width', 20)
            .attr('height', function (d, i) { return (_this.settings.height - _this.settings.margin) - _this.scales.y(d) + 10; });
        // box to 'contain' the y-value of the point
        g.append('rect')
            .attr('class', 'hover-value-rect')
            .attr('x', function (d, i) {
            var x = _this.scales.x(_this.x_labels[i]) + (_this.scales.x.step() / 2);
            return x - ((d.toString().length * 10 + 10) + 15);
        })
            .attr('y', function (d) { return (_this.settings.height - _this.settings.margin) / 2; })
            .attr('width', function (d) { return d.toString().length * 10 + 10; })
            .attr('height', 20);
        // y-value of the point.
        g.append('text')
            .attr('class', 'hover-value')
            .attr('x', function (d, i) {
            var x = _this.scales.x(_this.x_labels[i]) + (_this.scales.x.step() / 2);
            return x - ((d.toString().length * 10) + 5 + 15);
        })
            .attr('y', function (d) { return ((_this.settings.height - _this.settings.margin) / 2) + 15; }) // this.scales.y(d) - 20)
            .text(function (d) { return '$' + d; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChartComponent.prototype, "chartid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "user_settings", void 0);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'chart-cmp',
            template: "\n    <div class=\"chart\" [id]=\"chartid\">\n    </div>\n  ",
            styles: ["\n    .axis path,\n    .axis line,\n    .axis text {\n      stroke-width: 1px;\n      font-size: 8pt;\n    }\n    .data-point {\n      fill: #4caf50;\n    }\n    .data-line {\n      stroke: black;\n    }\n    .hover-g {\n      fill-opacity: 0;\n      stroke-opacity: 0;\n    }\n    .hover-bar {\n      fill: var(--color-gray-dark);\n      stroke: var(--color-gray-dark);\n    }\n    .hover-value-rect {\n      fill: var(--color-gray-dark);\n    }\n    .hover-value {\n      fill: black;\n      font-size: 10pt;\n      font-family: \"Courier New\", Courier, monospace;\n    }\n    .hover-g:hover .hover-bar,\n    .hover-g:hover .hover-value-rect {\n      stroke-opacity: 0.75;\n      fill-opacity: 0.25;\n    }\n    .hover-g:hover .hover-value {\n      fill-opacity: 1;\n    }\n  "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/date-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePicker = (function () {
    function DatePicker() {
        this.month = { name: '', index: 0 };
        this.position = {};
        this.names = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.show = false;
        this.datePicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    DatePicker.prototype.ngOnInit = function () {
        this.today = new Date();
        this.days = this.getMonthArray(this.today);
        this.month = {
            name: this.names[this.today.getUTCMonth()],
            index: this.today.getUTCMonth(),
        };
        this.position = {
            top: this.datePickerInput.nativeElement.offsetHeight + "px",
            width: this.datePickerInput.nativeElement.offsetWidth + "px"
        };
    };
    DatePicker.prototype.showCalendar = function () {
        this.show = true;
    };
    DatePicker.prototype.hideCalendar = function (evt) {
        this.show = false;
    };
    DatePicker.prototype.setDayStyles = function (d) {
        var styles = {
            left: (100 / 7) * d.date.getDay() + "%",
            top: d.rowValue * 20 + "px",
        };
        return styles;
    };
    DatePicker.prototype.chooseDate = function (evt, d) {
        evt.preventDefault();
        evt.stopPropagation();
        this.datePickerInput.nativeElement.value = d.date.toLocaleDateString();
        this.datePicked.emit(d.date);
        this.hideCalendar(evt);
    };
    DatePicker.prototype.nextMonth = function (month_index) {
        var d = new Date(this.today.getUTCFullYear(), month_index, 1);
        this.days = this.getMonthArray(d);
        this.month = {
            name: this.names[d.getUTCMonth()],
            index: month_index,
        };
    };
    DatePicker.prototype.prevMonth = function (month_index) {
        var d = new Date(this.today.getUTCFullYear(), month_index, 1);
        this.days = this.getMonthArray(d);
        this.month = {
            name: this.names[d.getUTCMonth()],
            index: month_index,
        };
    };
    DatePicker.prototype.getMonthArray = function (d) {
        var _this = this;
        var l = new Date(d.getUTCFullYear(), d.getUTCMonth() + 1, 0);
        var s = new Date(d.getUTCFullYear(), d.getUTCMonth(), 1);
        var lastRow = 1;
        var a = [];
        if (s.getDay() !== 0) {
            for (var i = 1; i <= s.getDay(); i++) {
                a.push({
                    date: new Date(s.getUTCFullYear(), s.getUTCMonth(), i - s.getDay()),
                    rowValue: lastRow,
                    classes: 'extra',
                });
            }
        }
        var m = Array(l.getDate())
            .fill(1, 0, l.getDate())
            .map(function (v, i) {
            var day = new Date(d.getUTCFullYear(), d.getUTCMonth(), i + 1);
            lastRow = Math.abs(Math.floor((day.getDay() - day.getDate()) / 7)) + 1;
            if (day.toDateString() === _this.today.toDateString()) {
                return { date: day, rowValue: lastRow, classes: 'today' };
            }
            return { date: day, rowValue: lastRow, classes: '' };
        });
        var b = [];
        if (l.getDay() !== 6) {
            for (var i = 1; i < 7 - l.getDay(); i++) {
                b.push({
                    date: new Date(l.getUTCFullYear(), l.getUTCMonth() + 1, i),
                    rowValue: lastRow,
                    classes: 'extra',
                });
            }
        }
        return a.concat(m, b);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DatePicker.prototype, "extraClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DatePicker.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('datePicker'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DatePicker.prototype, "datePickerInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DatePicker.prototype, "datePicked", void 0);
    DatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'date-picker',
            template: "\n    <div class=\"date-picker-container\">\n      <input \n        autocomplete=\"off\"\n        #datePicker \n        class=\"date-picker\" \n        [ngClass]=\"extraClass\"\n        name=\"name\"\n        type=\"text\" \n        (focus)=\"showCalendar()\"\n        [value]=\"today.toLocaleDateString()\">\n      <div class=\"date-picker-calendar\" *ngIf=\"show\" [ngStyle]=\"position\">\n        <div class=\"date-picker-header\">\n          <span class=\"date-picker-prev\" (mousedown)=\"prevMonth(month.index - 1)\"><</span>\n          <span>{{ month.name }}</span>\n          <span class=\"date-picker-next\" (mousedown)=\"nextMonth(month.index + 1)\">></span>\n        </div>\n        <div \n          *ngFor=\"let d of days\"\n          class=\"date-picker-day\" \n          [ngStyle]=\"setDayStyles(d)\"\n          [ngClass]=\"d.classes\"\n          (mousedown)=\"chooseDate($event, d)\">\n          {{ d.date.getDate() }}\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .date-picker-container,\n    .date-picker-calendar,\n    .date-picker-header,\n    .date-picker-day,\n    .date-picker-next,\n    .date-picker-prev {\n      box-sizing: border-box;\n    }\n    .date-picker-container {\n      position: relative;\n    }\n    .date-picker {\n      width: 100%;\n    }\n    .date-picker-calendar {\n      position: absolute;\n      left: 0;\n      z-index: 100;\n      background-color: #ddd;\n      width: 100%;\n      height: auto;\n    }\n    .date-picker-header,\n    .date-picker-day {\n      text-align: center;\n      background-color: #ddd;\n      height: 20px;\n      padding: 2px;\n    }\n    .date-picker-header {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .date-picker-day {\n      position: absolute;\n      width: 14.28%;\n    }\n    .date-picker-day.extra {\n      color: #888;\n    }\n    .date-picker-day.today {\n      color: #a33;\n    }\n    .date-picker-next,\n    .date-picker-prev {\n      width: 10%;\n    }\n    .date-picker-day:hover,\n    .date-picker-next:hover,\n    .date-picker-prev:hover {\n      cursor: pointer;\n      background-color: rgba(76, 175, 80, 1);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [])
    ], DatePicker);
    return DatePicker;
}());



/***/ }),

/***/ "../../../../../src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(billService) {
        this.billService = billService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getActiveBills();
    };
    HomeComponent.prototype.getActiveBills = function () {
        var _this = this;
        this.billService.getBills().then(function (res) {
            _this.bills = res.filter(function (v) { return !v.paid_full; });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'home-cmp',
            template: "\n    <div class=\"active-bills\">\n      <div class=\"bill\" *ngFor=\"let bill of bills\">\n        <bill-detail-inline-cmp [bill]=\"bill\"></bill-detail-inline-cmp>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex: 1 1 100%;\n      flex-wrap: wrap;\n      align-items: flex-start;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_bill_service__["a" /* BillService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'not-found',
            template: "\n    <div>\n      <h3>404 - Page Not Found</h3>\n      <p>\n      Oops. Looks like that page doesn't exist.\n      </p>\n    </div>\n  ",
            styles: [],
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PersonDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_person__ = __webpack_require__("../../../../../src/app/models/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonComponent = (function () {
    function PersonComponent(personService) {
        this.personService = personService;
        this.no_name = false;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
        this.addPersonObj = new __WEBPACK_IMPORTED_MODULE_3__models_person__["a" /* Person */]({ name: '' });
    };
    PersonComponent.prototype.addPerson = function (name) {
        if (name.length !== 0) {
            this.addPersonObj.name = name;
            this.personService.savePerson(this.addPersonObj);
            this.getPersons();
            this.no_name = false;
        }
        else {
            this.inputEl.nativeElement.focus();
            this.no_name = true;
        }
    };
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().then(function (res) {
            _this.persons = res;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('personName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PersonComponent.prototype, "inputEl", void 0);
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'person-cmp',
            template: "\n    <div class=\"persons-header\">\n      <h3>Roommates</h3>\n      <div class=\"add-person\">\n        <span *ngIf=\"no_name\" class=\"alert\">\n          No name entered\n        </span>\n        <input #personName type=\"text\" placeholder=\"Person's name\" \n          (keyup.enter)=\"addPerson(personName.value); personName.value=''\">\n        <button (click)=\"addPerson(personName.value); personName.value=''\" >Add Person</button>\n      </div>\n    </div>\n    <div class=\"persons\">\n      <div *ngFor=\"let person of persons\">\n        <a routerLink=\"/persons/{{ person.id }}\">{{ person.name }}</a>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      width: 100%;\n      flex: 1 1 100%;\n    }\n    .persons-header,\n    .add-person {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .persons-header h3 {\n      flex: 2;\n    }\n    .add-person {\n      flex: 3;\n      justify-content: space-evenly;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_person_service__["b" /* PersonService */]])
    ], PersonComponent);
    return PersonComponent;
}());

var PersonDetailComponent = (function () {
    function PersonDetailComponent(route, router, personService, billService) {
        this.route = route;
        this.router = router;
        this.personService = personService;
        this.billService = billService;
        this.totalPaid = 0.0;
        this.showPaidBills = false;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getPerson();
        this.getActiveBills();
    };
    PersonDetailComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson(this.id).then(function (response) {
            if (response.status_code === 404) {
                _this.router.navigate(["/404"]);
            }
            _this.person = response;
        });
    };
    PersonDetailComponent.prototype.getActiveBills = function () {
        var _this = this;
        this.billService.getBills().then(function (response) {
            _this.unpaid_bills = response.filter(function (v) { return (v.split_by_ids.includes(_this.id) && !v.paid_partial_ids.includes(_this.id)); });
            _this.paid_bills = response.filter(function (v) { return (v.split_by_ids.includes(_this.id) && v.paid_partial_ids.includes(_this.id)); });
        });
    };
    PersonDetailComponent.prototype.personNotFound = function () {
    };
    PersonDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'person-detail-cmp',
            template: "\n    <div class=\"person-details\">\n      <h3>{{ person?.name }}</h3>\n      <span class=\"total-paid right\">\n        <span>Total Paid</span>\n        <span>{{ person?.payments_made | currency:'USD' }}</span>\n      </span>\n    </div>\n    <div class=\"active-bills\" *ngIf=\"unpaid_bills\">\n      <h4>Currently Unpaid Bills</h4>\n      <div *ngFor=\"let bill of unpaid_bills\" class=\"bill-detail\">\n        <bill-detail-inline-cmp [bill]=\"bill\">\n        </bill-detail-inline-cmp>\n      </div>\n    </div>\n    <div class=\"paid-bills\" (click)=\"showPaidBills = !showPaidBills\">\n      <span class=\"label\">\n        <h4>Paid Bills</h4>\n        <span [class]=\"showPaidBills ? 'chevron up' : 'chevron'\"></span>\n      </span>\n      <div *ngIf=\"showPaidBills\" @animateBills>\n        <div *ngFor=\"let bill of paid_bills\" class=\"bill-detail\">\n          <bill-detail-inline-cmp [bill]=\"bill\">\n          </bill-detail-inline-cmp>\n        </div>\n      </div>\n    </div>\n  ",
            styles: [],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('animateBills', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-15%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.5s ease-in')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-25%)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.5s ease-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_person_service__["b" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_4__services_bill_service__["a" /* BillService */]])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/utility.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UtilityDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_utility__ = __webpack_require__("../../../../../src/app/models/utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UtilityComponent = (function () {
    function UtilityComponent(utilityService) {
        this.utilityService = utilityService;
        this.no_name = false;
    }
    UtilityComponent.prototype.ngOnInit = function () {
        this.getUtilities();
        this.addUtilityObj = new __WEBPACK_IMPORTED_MODULE_4__models_utility__["a" /* Utility */]({ name: '' });
    };
    UtilityComponent.prototype.addUtility = function (name) {
        if (name.length !== 0) {
            this.addUtilityObj.name = name;
            this.utilityService.saveUtility(this.addUtilityObj);
            this.getUtilities();
            this.no_name = false;
        }
        else {
            this.inputEl.nativeElement.focus();
            this.no_name = true;
        }
    };
    UtilityComponent.prototype.getUtilities = function () {
        var _this = this;
        this.utilityService.getUtilities().then(function (res) {
            _this.utilities = res;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('utilityName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], UtilityComponent.prototype, "inputEl", void 0);
    UtilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'utility-cmp',
            template: "\n    <div class=\"utilities-header\">\n      <h3>Utility</h3>\n      <div class=\"add-utility\">\n        <span *ngIf=\"no_name\" class=\"alert\">\n          No name entered\n        </span>\n        <input #utilityName type=\"text\" placeholder=\"Utility\"\n          (keyup.enter)=\"addUtility(utilityName.value); utilityName.value=''\">\n        <button (click)=\"addUtility(utilityName.value); utilityName.value=''\" >Add Utility</button>\n      </div>\n    </div>\n    <div class=\"utilities\">\n      <div *ngFor=\"let utility of utilities\">\n        <a routerLink=\"/utilities/{{ utility.id }}\">{{ utility.name }}</a>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      width: 100%;\n      flex: 1 1 100%;\n    }\n    .utilities-header,\n    .add-utility {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .utilities-header h3 {\n      flex: 2;\n    }\n    .add-utility {\n      flex: 3;\n      justify-content: space-evenly;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_utility_service__["b" /* UtilityService */]])
    ], UtilityComponent);
    return UtilityComponent;
}());

var UtilityDetailComponent = (function () {
    function UtilityDetailComponent(route, router, utilityService, billService) {
        this.route = route;
        this.router = router;
        this.utilityService = utilityService;
        this.billService = billService;
        this.showPaidBills = false;
    }
    UtilityDetailComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getUtility();
        this.getBills();
    };
    UtilityDetailComponent.prototype.getUtility = function () {
        var _this = this;
        this.utilityService.getUtility(this.id).then(function (res) {
            if (res.status_code === 404) {
                _this.router.navigate(['/404']);
            }
            _this.utility = res;
        });
    };
    UtilityDetailComponent.prototype.getBills = function () {
        var _this = this;
        this.billService.getBills().then(function (response) {
            _this.unpaid_bills = response.filter(function (v) { return (v.paid_to.id === _this.id && !v.paid_full); });
            _this.paid_bills = response.filter(function (v) { return (v.paid_to.id === _this.id && v.paid_full); });
        });
    };
    UtilityDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'utility-detail-cmp',
            template: "\n    <div class=\"utility-details\">\n      <h2>{{ utility?.name }}</h2>\n      <span class=\"right\">\n        <span class=\"label\">Total Payments</span>\n        <span class=\"value\">{{ utility?.payments | currency: 'USD' }}</span>\n      </span>\n    </div>\n    <div class=\"payment-graph\">\n      <h4>Bill History</h4>\n      <div>\n        <chart-cmp [data]=\"paid_bills\" chartid=\"utilitychart\">\n        </chart-cmp>\n      </div>\n    </div>\n    <div class=\"active-bills\">\n      <h3>Currently Unpaid Bills</h3>\n      <div *ngFor=\"let bill of unpaid_bills\" class=\"bill-detail\">\n        <bill-detail-inline-cmp [bill]=\"bill\">\n        </bill-detail-inline-cmp>\n      </div>\n    </div>\n    <div class=\"paid-bills\" (click)=\"showPaidBills = !showPaidBills\">\n      <span class=\"label\">\n        <h3>Paid Bills</h3>\n        <span [class]=\"showPaidBills ? 'chevron up': 'chevron'\"></span>\n      </span>\n      <div *ngIf=\"showPaidBills\" @animateBills>\n        <div *ngFor=\"let bill of paid_bills\" class=\"bill-detail\">\n          <bill-detail-inline-cmp [bill]=\"bill\">\n          </bill-detail-inline-cmp>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      width: 100%;\n    }\n  "],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('animateBills', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-15%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.5s ease-in')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-25%)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.5s ease-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_3__services_bill_service__["a" /* BillService */]])
    ], UtilityDetailComponent);
    return UtilityDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/bill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bill; });
var Bill = (function () {
    function Bill(billInfo) {
        var _this = this;
        this.split_by_ids = [];
        this.paid_partial_ids = [];
        this.id = billInfo.id;
        this.due_date = billInfo.due_date;
        this.amount = billInfo.amount;
        this.paid_to = billInfo.paid_to;
        this.split_by = billInfo.split_by;
        this.split_by.forEach(function (v) { return _this.split_by_ids.push(v.id); });
        // calculated values from the above.
        this.split_count = billInfo.split_by.length;
        this.split_amount = billInfo.amount / billInfo.split_by.length;
        this.paid_partial = (billInfo.paid_partial) ? billInfo.paid_partial : [];
        this.paid_partial.forEach(function (v) { return _this.paid_partial_ids.push(v.id); });
        this.paid_full = (billInfo.paid_full) ? billInfo.paid_full : false;
        this.paid_date = (billInfo.paid_date) ? billInfo.paid_full : undefined;
        this.notes = (billInfo.notes) ? billInfo.notes : undefined;
    }
    return Bill;
}());



/***/ }),

/***/ "../../../../../src/app/models/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = (function () {
    function Person(data) {
        this.id = data.id;
        this.name = data.name;
        this.payments_made = (data.payments_made) ? data.payments_made : 0;
    }
    return Person;
}());



/***/ }),

/***/ "../../../../../src/app/models/utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utility; });
var Utility = (function () {
    function Utility(data) {
        this.id = data.id;
        this.name = data.name;
        this.payments = (data.payments) ? data.payments : 0;
    }
    return Utility;
}());



/***/ }),

/***/ "../../../../../src/app/modules/bill.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bill_component__ = __webpack_require__("../../../../../src/app/components/bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_bill_detail_component__ = __webpack_require__("../../../../../src/app/components/bill-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_bill_form_component__ = __webpack_require__("../../../../../src/app/components/bill-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_utility_component__ = __webpack_require__("../../../../../src/app/components/utility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_person_component__ = __webpack_require__("../../../../../src/app/components/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_bill_service__ = __webpack_require__("../../../../../src/app/services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_bill_routing_module__ = __webpack_require__("../../../../../src/app/routes/bill-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_date_picker_component__ = __webpack_require__("../../../../../src/app/components/date-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chart_component__ = __webpack_require__("../../../../../src/app/components/chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var BillModule = (function () {
    function BillModule() {
    }
    BillModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__routes_bill_routing_module__["a" /* BillRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_bill_component__["a" /* BillComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_bill_detail_component__["a" /* BillDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_bill_detail_component__["b" /* BillDetailInlineComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_bill_form_component__["a" /* BillFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_utility_component__["a" /* UtilityComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_utility_component__["b" /* UtilityDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_person_component__["b" /* PersonDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_date_picker_component__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_13__components_chart_component__["a" /* ChartComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_bill_service__["a" /* BillService */],
                __WEBPACK_IMPORTED_MODULE_9__services_utility_service__["b" /* UtilityService */],
                __WEBPACK_IMPORTED_MODULE_10__services_person_service__["b" /* PersonService */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__components_bill_detail_component__["b" /* BillDetailInlineComponent */],
            ]
        })
    ], BillModule);
    return BillModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_3__components_notfound_component__["a" /* NotFoundComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/bill-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bill_component__ = __webpack_require__("../../../../../src/app/components/bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bill_detail_component__ = __webpack_require__("../../../../../src/app/components/bill-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_person_component__ = __webpack_require__("../../../../../src/app/components/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_utility_component__ = __webpack_require__("../../../../../src/app/components/utility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var billRoutes = [
    {
        path: 'bills',
        component: __WEBPACK_IMPORTED_MODULE_2__components_bill_component__["a" /* BillComponent */],
        resolve: {
            utilities: __WEBPACK_IMPORTED_MODULE_7__services_utility_service__["a" /* UtilityResolver */],
            persons: __WEBPACK_IMPORTED_MODULE_6__services_person_service__["a" /* PersonResolver */],
        },
    },
    {
        path: 'bills/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__components_bill_detail_component__["a" /* BillDetailComponent */],
    },
    {
        path: 'people',
        redirectTo: '/persons',
        pathMatch: 'full',
    },
    {
        path: 'persons',
        component: __WEBPACK_IMPORTED_MODULE_4__components_person_component__["a" /* PersonComponent */],
    },
    {
        path: 'person/:id',
        redirectTo: 'persons/:id',
        pathMatch: 'full',
    },
    {
        path: 'persons/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_person_component__["b" /* PersonDetailComponent */],
    },
    {
        path: 'utilities',
        component: __WEBPACK_IMPORTED_MODULE_5__components_utility_component__["a" /* UtilityComponent */],
    },
    {
        path: 'utilities/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_utility_component__["b" /* UtilityDetailComponent */],
    },
];
var BillRoutingModule = (function () {
    function BillRoutingModule() {
    }
    BillRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(billRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_utility_service__["a" /* UtilityResolver */], __WEBPACK_IMPORTED_MODULE_6__services_person_service__["a" /* PersonResolver */]]
        })
    ], BillRoutingModule);
    return BillRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/bill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_bill__ = __webpack_require__("../../../../../src/app/models/bill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillService = (function () {
    function BillService(http) {
        this.http = http;
        this.local = true;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.url !== '') {
            this.local = false;
            this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.url; // api key
        }
    }
    BillService.prototype.getBills = function () {
        var _this = this;
        if (this.local) {
            var bills_1 = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngbills');
            bills_1.forEach(function (v, i) {
                bills_1[i] = new __WEBPACK_IMPORTED_MODULE_4__models_bill__["a" /* Bill */](v);
            });
            return Promise.resolve(bills_1);
        }
        else {
            return this.http.get(this.url + "/bills/")
                .toPromise()
                .then(function (res) { return res.json().map(function (v) { return new __WEBPACK_IMPORTED_MODULE_4__models_bill__["a" /* Bill */](v); }); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    BillService.prototype.getBill = function (id) {
        var _this = this;
        if (this.local) {
            var bills = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngbills');
            // id's are 1 indexed.
            var idx = bills.findIndex(function (v) { return v.id === id; });
            if (idx === -1) {
                return Promise.resolve({ status_code: 404, status_message: 'Bill not found' });
            }
            return Promise.resolve(bills[idx]);
        }
        else {
            return this.http.get(this.url + "/bills/" + id + "/")
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    BillService.prototype.saveBill = function (bill) {
        var _this = this;
        if (this.local) {
            var bills = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngbills');
            var last_bill = 0;
            if (bills.length > 0) {
                last_bill = bills[bills.length - 1].id;
            }
            bill['id'] = last_bill + 1;
            bills.push(bill);
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngbills', bills);
            return Promise.resolve(bill);
        }
        else {
            return this.http.put(this.url + "/bills/", JSON.stringify(bill), { headers: this.headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    BillService.prototype.updateBill = function (bill) {
        var _this = this;
        if (this.local) {
            var bills = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngbills');
            var idx = bills.findIndex(function (v) { return v.id === bill.id; });
            bills[idx] = bill;
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngbills', bills);
            return Promise.resolve(bills);
        }
        else {
            return this.http.put(this.url + "/bills/" + bill.id, JSON.stringify(bill), { headers: this.headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    BillService.prototype.deleteBill = function (id) {
        var _this = this;
        if (this.local) {
            var bills = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngbills');
            var idx = bills.findIndex(function (v) { return v.id === id; });
            bills.splice(idx, 1);
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngbills', bills);
            return Promise.resolve(id);
        }
        else {
            return this.http.delete(this.url + "/bills/" + id)
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    BillService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    BillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BillService);
    return BillService;
}());



/***/ }),

/***/ "../../../../../src/app/services/local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveLocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_person__ = __webpack_require__("../../../../../src/app/models/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_utility__ = __webpack_require__("../../../../../src/app/models/utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bill__ = __webpack_require__("../../../../../src/app/models/bill.ts");



/*
 * DEMO Data
 */
var utilities = [
    new __WEBPACK_IMPORTED_MODULE_1__models_utility__["a" /* Utility */]({ name: "Internet Company", id: 1, payments: 50 }),
    new __WEBPACK_IMPORTED_MODULE_1__models_utility__["a" /* Utility */]({ name: "Water Company", id: 2 }),
    new __WEBPACK_IMPORTED_MODULE_1__models_utility__["a" /* Utility */]({ name: "Electric Company", id: 3 }),
];
var persons = [
    new __WEBPACK_IMPORTED_MODULE_0__models_person__["a" /* Person */]({ name: "Roommate 1", id: 1, payments_made: 16.67 }),
    new __WEBPACK_IMPORTED_MODULE_0__models_person__["a" /* Person */]({ name: "Roommate 2", id: 2, payments_made: 16.67 }),
    new __WEBPACK_IMPORTED_MODULE_0__models_person__["a" /* Person */]({ name: "Roommate 3", id: 3, payments_made: 16.67 }),
];
var bills = [
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 6,
        due_date: "9/27/2017",
        amount: 173.34,
        paid_to: utilities[1],
        split_by: persons,
        paid_full: true,
        paid_partial: persons,
        paid_date: "9/23/2017",
        notes: "This is an internet bill",
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 7,
        due_date: "11/27/2017",
        amount: 157.62,
        paid_to: utilities[1],
        split_by: persons,
        paid_full: true,
        paid_partial: persons,
        paid_date: "10/20/2017",
        notes: "This is an internet bill",
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 8,
        due_date: "11/23/2017",
        amount: 193.24,
        paid_to: utilities[1],
        split_by: persons,
        paid_full: true,
        paid_partial: persons,
        paid_date: "11/21/2017",
        notes: "This is an internet bill",
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 9,
        due_date: "12/28/2017",
        amount: 138,
        paid_to: utilities[1],
        split_by: persons,
        paid_full: true,
        paid_partial: persons,
        paid_date: "12/24/2017",
        notes: "This is an internet bill",
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 10,
        due_date: "1/27/2018",
        amount: 153,
        paid_to: utilities[1],
        split_by: persons,
        paid_full: true,
        paid_partial: persons,
        paid_date: "1/26/2018",
        notes: "This is an internet bill",
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 1,
        due_date: "2/27/2018",
        amount: 50,
        paid_to: utilities[0],
        split_by: persons,
        paid_full: true,
        paid_partial: persons,
        paid_date: "2/26/2018",
        notes: "This is an internet bill",
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 2,
        due_date: "4/7/2018",
        amount: 150,
        paid_to: utilities[2],
        split_by: persons,
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 3,
        due_date: "3/20/2018",
        amount: 83,
        paid_to: utilities[1],
        split_by: persons,
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 4,
        due_date: "5/17/2018",
        amount: 282,
        paid_to: utilities[1],
        split_by: persons,
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_bill__["a" /* Bill */]({
        id: 5,
        due_date: "3/27/2018",
        amount: 50,
        paid_to: utilities[0],
        split_by: persons,
    })
];
saveLocalStorage("ngpersons", persons);
saveLocalStorage("ngutilities", utilities);
saveLocalStorage("ngbills", bills);
function getLocalStorage(key) {
    var ls = localStorage.getItem(key);
    if (!ls) {
        return [];
    }
    return JSON.parse(ls);
}
function saveLocalStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}



/***/ }),

/***/ "../../../../../src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PersonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_person__ = __webpack_require__("../../../../../src/app/models/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.local = true;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.url !== '') {
            this.local = false;
            this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.url; // api key
        }
    }
    PersonService.prototype.getPersons = function () {
        var _this = this;
        if (this.local) {
            var persons_1 = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngpersons');
            persons_1.forEach(function (v, i) {
                persons_1[i] = new __WEBPACK_IMPORTED_MODULE_4__models_person__["a" /* Person */](v);
            });
            return Promise.resolve(persons_1);
        }
        else {
            return this.http.get(this.url + "/persons/")
                .toPromise()
                .then(function (res) { return res.json().map(function (v) { return new __WEBPACK_IMPORTED_MODULE_4__models_person__["a" /* Person */](v); }); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    PersonService.prototype.getPerson = function (id) {
        var _this = this;
        if (this.local) {
            var persons = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngpersons');
            // id's are 1 indexed.
            var idx = persons.findIndex(function (v) { return v.id === id; });
            if (idx === -1) {
                return Promise.resolve({ status_code: 404, status_message: 'No person found' });
            }
            return Promise.resolve(persons[idx]);
        }
        else {
            return this.http.get(this.url + "/persons/" + id + "/")
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    PersonService.prototype.savePerson = function (person) {
        var _this = this;
        if (this.local) {
            var persons = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngpersons');
            var last_person = 0;
            if (persons.length > 0) {
                last_person = persons[persons.length - 1].id;
            }
            person['id'] = last_person + 1;
            persons.push(person);
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngpersons', persons);
            return Promise.resolve(persons);
        }
        else {
            return this.http.put(this.url + "/persons/", JSON.stringify(person), { headers: this.headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    PersonService.prototype.updatePaymentsMade = function (val, id) {
        var _this = this;
        if (this.local) {
            var persons = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngpersons');
            var idx = persons.findIndex(function (v) { return v.id === id; });
            persons[idx].payments_made += val;
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngpersons', persons);
            return Promise.resolve(persons);
        }
        else {
            return this.http.put(this.url + "/persons/" + id, JSON.stringify(val), { headers: this.headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    PersonService.prototype.deletePerson = function (id) {
        var _this = this;
        if (this.local) {
            var persons = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngpersons');
            var idx = persons.findIndex(function (v) { return v.id === id; });
            persons.splice(id, 1);
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngpersons', persons);
            return Promise.resolve(id);
        }
        else {
            return this.http.delete(this.url + "/persons/" + id)
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    PersonService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PersonService);
    return PersonService;
}());

var PersonResolver = (function () {
    function PersonResolver(personService) {
        this.personService = personService;
    }
    PersonResolver.prototype.resolve = function (route) {
        return this.personService.getPersons();
    };
    PersonResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [PersonService])
    ], PersonResolver);
    return PersonResolver;
}());



/***/ }),

/***/ "../../../../../src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UtilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_utility__ = __webpack_require__("../../../../../src/app/models/utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UtilityService = (function () {
    function UtilityService(http) {
        this.http = http;
        this.local = true;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.url !== '') {
            this.local = false;
            this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.url; // api key
        }
    }
    UtilityService.prototype.getUtilities = function () {
        var _this = this;
        if (this.local) {
            var utils_1 = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngutilities');
            utils_1.forEach(function (v, i) {
                utils_1[i] = new __WEBPACK_IMPORTED_MODULE_4__models_utility__["a" /* Utility */](v);
            });
            return Promise.resolve(utils_1);
        }
        else {
            return this.http.get(this.url + "/utilities/")
                .toPromise()
                .then(function (res) { return res.json().map(function (v) { return new __WEBPACK_IMPORTED_MODULE_4__models_utility__["a" /* Utility */](v); }); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    UtilityService.prototype.getUtility = function (id) {
        var _this = this;
        if (this.local) {
            var utils = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngutilities');
            // id's are 1 indexed.
            var u = ((id - 1) < utils.length) ? utils[id - 1] : undefined;
            if (u) {
                u = new __WEBPACK_IMPORTED_MODULE_4__models_utility__["a" /* Utility */](u);
            }
            else {
                u = { status_code: 404, status_message: 'Utility not found' };
            }
            return Promise.resolve(u);
        }
        else {
            return this.http.get(this.url + "/utilities/" + id + "/")
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    UtilityService.prototype.saveUtility = function (utility) {
        var _this = this;
        if (this.local) {
            var utils = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngutilities');
            // id's are 1 indexed.
            utility['id'] = utils.length + 1;
            utils.push(utility);
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngutilities', utils);
            return Promise.resolve(utility);
        }
        else {
            return this.http.put(this.url + "/utilities/", JSON.stringify(utility), { headers: this.headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    UtilityService.prototype.updatePayments = function (val, id) {
        var _this = this;
        if (this.local) {
            var utilities = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngutilities');
            var idx = utilities.findIndex(function (v) { return v.id === id; });
            utilities[idx].payments += val;
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngutilities', utilities);
            return Promise.resolve(utilities);
        }
        else {
            return this.http.put(this.url + "/utilities/" + id, JSON.stringify(val), { headers: this.headers })
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(function (response) { return _this.handleError(response); });
        }
    };
    UtilityService.prototype.deleteUtility = function (id) {
        var _this = this;
        if (this.local) {
            var utils = Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* getLS */])('ngutilities');
            utils.splice(1, (id - 1));
            Object(__WEBPACK_IMPORTED_MODULE_5__local_service__["b" /* saveLS */])('ngutilities', utils);
            return Promise.resolve(id);
        }
        else {
            return this.http.delete(this.url + "/utilities/" + id)
                .toPromise()
                .then(function (res) { return res.json(); })
                .catch(function (res) { return _this.handleError(res); });
        }
    };
    UtilityService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UtilityService);
    return UtilityService;
}());

var UtilityResolver = (function () {
    function UtilityResolver(utilityService) {
        this.utilityService = utilityService;
    }
    UtilityResolver.prototype.resolve = function (route) {
        return this.utilityService.getUtilities();
    };
    UtilityResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [UtilityService])
    ], UtilityResolver);
    return UtilityResolver;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: {
        url: '',
        key: '',
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map