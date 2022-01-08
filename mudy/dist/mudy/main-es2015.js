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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-sidebar></app-sidebar>\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\">\r\n    <div class=\"form-group col-sm-4\" *ngFor=\"let sub of submersibles\">\r\n        <label>{{sub.description}}</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Rate\"\r\n            [(ngModel)]=\"sub.rate\">\r\n    </div>\r\n\r\n    <div class=\"form-group col-sm-12\">\r\n        <button (click)=\"updateCustomer()\" class=\"btn btn-primary\">\r\n            Update</button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <mat-tab-group (selectedTabChange)=\"getAllCustomers($event)\">\n        <mat-tab label=\"Add Customer\">\n            <div class=\"form\">\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputCustomerName\">Customer Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputCustomerName\" placeholder=\"Enter Name\"\n                        [(ngModel)]=\"customer.name\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputMobileNumber\">Mobile Number</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputMobileNumber\" placeholder=\"Enter Mobile Number\"\n                        [(ngModel)]=\"customer.mobileNumber\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputPanNo\">PAN No</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPanNo\" placeholder=\"Enter PAN no.\"\n                        [(ngModel)]=\"customer.pan\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputGstNo\">GST No</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputGstNo\" placeholder=\"Enter GST no.\"\n                        [(ngModel)]=\"customer.gst\">\n                </div>\n\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputCustomerAddress\">Customer Address</label>\n                    <textarea class=\"form-control\" id=\"inputCustomerAddress\" placeholder=\"Enter Customer Address\"\n                        [(ngModel)]=\"customer.address\"></textarea>\n                </div>\n\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputShippingAddress\">Shipping Address</label>\n                    <textarea class=\"form-control\" id=\"inputShippingAddress\" placeholder=\"Enter Customer Address\"\n                        [(ngModel)]=\"customer.shippingAddress\"></textarea>\n                </div>\n\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputState\">State</label>\n                    <select class=\"form-control\" [(ngModel)]=\"customer.state\" (change)=\"setStateCode($event.target.value)\" placeholder=\"Choose State\">\n                        <option selected>Open this select menu</option>\n                        <option *ngFor=\"let st of states\" [value]=\"st.state\">\n                            {{st.state}}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <label for=\"inputStateCode\">Code</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputStateCode\" placeholder=\"Enter State Code\"\n                        [(ngModel)]=\"customer.stateCode\" disabled>\n                </div>\n\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputBrand\">Brand</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputBrand\" placeholder=\"Enter Brand\"\n                        [(ngModel)]=\"customer.brand\">\n                </div>\n\n                <div class=\"form-group col-sm-3\">\n                    \n                </div>\n\n                <div class=\"form-group col-sm-4\" *ngFor=\"let sub of submersibles\">\n                    <label>{{sub.description}}</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Rate\"\n                        [(ngModel)]=\"sub.rate\">\n                </div>\n\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"addCustomer()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Add</button>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"View Customers\">\n            <div class=\"card-container\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Mobile</th>\n                            <th>Pan</th>\n                            <th>Gst</th>\n                            <th>Address</th>\n                            <th>State</th>\n                            <th>Brand</th>\n                            <th>Rates</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let customer of customers\">\n                            <td>{{customer.name}}</td>\n                            <td>{{customer.mobileNumber}}</td>\n                            <td>{{customer.pan}}</td>\n                            <td>{{customer.gst}}</td>\n                            <td>{{customer.address}}</td>\n                            <td>{{customer.state}}- {{customer.stateCode}}</td>\n                            <td>{{customer.brand}}</td>\n                            <td><div *ngFor=\"let rate of customer.subRates[customer.subRates.length-1]\">{{rate.name}}-{{rate.rate}}</div></td>\n                            <td>\n                                <button (click)=\"editCustomer(customer)\" class=\"btn btn-transparent\"><i class=\"fa fa-edit\"\n                                    aria-hidden=\"true\"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <img src=\"assets/logo.png\" alt=\"logo\" />\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <mat-tab-group (selectedTabChange)=\"getAllParts($event)\">\n        <mat-tab label=\"Add Inventory/Stocks\">\n            <div class=\"form\">\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"addStocks()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Add Stocks</button>\n                </div>\n\n                <div *ngIf=\"stocks.length > 0\">\n                    <div class=\"row m-10\" *ngFor=\"let stock of stocks; let i = index\">\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"inputPartType\">Choose Inventory</label>\n                            <select class=\"form-control\" [(ngModel)]=\"stock.id\">\n                                <option selected>Open this select menu</option>\n                                <option *ngFor=\"let inventory of inventories\" [value]=\"inventory._id\">\n                                    {{inventory.name}}- {{inventory.type}}\n                                </option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col-sm-3\">\n                            <label for=\"inputInventoryQuantity\">Quantity</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputInventoryQuantity\" placeholder=\"Quantity\"\n                                [(ngModel)]=\"stock.quantity\">\n                        </div>\n\n                        <button (click)=\"removeStocks(i)\" class=\"btn btn-link col-sm-1 mt-15\">\n                            <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"purchaseStocks()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Purchase</button>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Add Finish Goods in Stocks\">\n            <div class=\"form\">\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"addItems()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Add Items</button>\n                </div>\n\n                <div *ngIf=\"items.length > 0\">\n                    <div class=\"row m-10\" *ngFor=\"let item of items; let i = index\">\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"inputItemType\">Choose Items</label>\n                            <select class=\"form-control\" [(ngModel)]=\"item.id\">\n                                <option selected>Open this select menu</option>\n                                <option *ngFor=\"let sub of submersibles\" [value]=\"sub._id\">\n                                    {{sub.name}}\n                                </option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col-sm-3\">\n                            <label for=\"inputItemQuantity\">Quantity</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputItemQuantity\" placeholder=\"Quantity\"\n                                [(ngModel)]=\"item.quantity\">\n                        </div>\n\n                        <button (click)=\"removeItems(i)\" class=\"btn btn-link col-sm-1 mt-15\">\n                            <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"addFinishGoods()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Add</button>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Add Child Parts\">\n            <div class=\"form\">\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputPartType\">Stock Type</label>\n                    <select class=\"form-control\" [(ngModel)]=\"part.type\" id=\"inputPartType\" placeholder=\"Enter Type\">\n                        <option selected>Open this select menu</option>\n                        <option value=\"motor\">Motor </option>\n                        <option value=\"pump\">Pump </option>\n                    </select>\n                </div>\n\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputMoc\">MOC</label>\n                    <input type=\"number\" class=\"form-control\" id=\"inputMoc\" placeholder=\"MOC\" [(ngModel)]=\"part.moc\">\n                </div>\n\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputPartName\">Part Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPartName\" placeholder=\"Enter Name\"\n                        [(ngModel)]=\"part.name\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputPartNo\">Part Number</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPartNo\" placeholder=\"Enter Part no.\"\n                        [(ngModel)]=\"part.number\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputMaterial\">Material</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputMaterial\" placeholder=\"Enter Material\"\n                        [(ngModel)]=\"part.material\">\n                </div>\n\n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputDescription\">Description</label>\n                    <textarea class=\"form-control\" id=\"inputDescription\" placeholder=\"Enter Description\"\n                        [(ngModel)]=\"part.description\"></textarea>\n                </div>\n\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"createPart()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Create</button>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"View Inventory\">\n            <div class=\"card-container\">\n                <button class=\"btn btn-primary export-btn\" (click)=\"exportToExcel()\">Export To Excel</button>\n                <table class=\"table\" id=\"inventory-table\">\n                    <thead>\n                        <tr>\n                            <th>S.no</th>\n                            <th>Part Name</th>\n                            <th>Part Number</th>\n                            <th>Type</th>\n                            <th>Material</th>\n                            <th>Description</th>\n                            <th>MOC</th>\n                            <th class=\"bg-blue\">C/L 100</th>\n                            <th class=\"bg-pink\">C/L 150</th>\n                            <th class=\"bg-purple\">C/L 180</th>\n                            <th class=\"bg-yellow\">C/L 225</th>\n                            <th class=\"bg-green\">C/L 240</th>\n                            <th>Remaining</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of inventories; let i = index;\">\n                            <td>{{i + 1}}</td>\n                            <td>{{item.name}}</td>\n                            <td>{{item.number}}</td>\n                            <td>{{item.type}}</td>\n                            <td>{{item.material}}</td>\n                            <td>{{item.description}}</td>\n                            <td>{{item.moc}}</td>\n\n                            <td class=\"bg-blue\">\n                                <span\n                                    *ngIf=\"item.allowedSubType.indexOf(submersibles[0]._id) !== -1 || item.allowedSubType.indexOf(submersibles[1]._id) !== -1\">{{(submersibles[0].quantity\n                                    || submersibles[1].quantity )?\n                                    (submersibles[0].quantity + submersibles[1].quantity):0}}</span>\n                            </td>\n                            <td class=\"bg-pink\">\n                                <span\n                                    *ngIf=\"item.allowedSubType.indexOf(submersibles[2]._id) !== -1\">{{submersibles[2].quantity?\n                                    submersibles[2].quantity: 0}}</span>\n                            </td>\n                            <td class=\"bg-purple\">\n                                <span\n                                    *ngIf=\"item.allowedSubType.indexOf(submersibles[3]._id) !== -1 || item.allowedSubType.indexOf(submersibles[4]._id) !== -1\">{{(submersibles[3].quantity\n                                    || submersibles[4].quantity )?\n                                    (submersibles[3].quantity + submersibles[4].quantity):0}}</span>\n                            </td>\n                            <td class=\"bg-yellow\">\n                                <span *ngIf=\"item.allowedSubType.indexOf(submersibles[5]._id) !== -1\">\n                                    {{submersibles[5].quantity? submersibles[5].quantity: 0}}</span>\n                            </td>\n                            <td class=\"bg-green\"><span\n                                    *ngIf=\"item.allowedSubType.indexOf(submersibles[6]._id) !== -1\">{{submersibles[6].quantity?\n                                    submersibles[6].quantity: 0}}</span></td>\n\n                            <td>{{item.quantity}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"View Finish Goods in Stocks\">\n            <div class=\"card-container\">\n                <table class=\"table\" id=\"finish-goods-table\">\n                    <thead>\n                        <tr>\n                            <th>S.no</th>\n                            <th>Submersibles</th>\n                            <th>Quantity</th>\n                            <th>Description</th>\n                            <th>HsnSac</th>\n              \n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of submersibles; let i = index;\">\n                            <td>{{i + 1}}</td>\n                            <td>{{item.name}}</td>\n                            <td>{{item.quantity}}</td>\n                            <td>{{item.description}}</td>\n                            <td>{{item.hsnSac}}</td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoice-view.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoice-view.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"invoice-wrapper\" id=\"demo\">\r\n  <button class=\"btn btn-primary print-btn\" ngxPrint [useExistingCss]=\"true\" printSectionId=\"demo\">Print</button>\r\n  <h4 class=\"text-center\">Tax Invoice</h4>\r\n  <div class=\"flex-row\">\r\n    <div class=\"flex-left-column\">\r\n      <div class=\"fs-14\"><b>GST NO:</b> 08AOKPT4668R1ZO</div>\r\n      <div class=\"fs-14\"><b>PAN NO:</b> AOKPT4668R</div>\r\n    </div>\r\n    <small class=\"flex-center-column\">\r\n      ( For supply from factory/warehouse on payment of GST under Rule-7, Section-31 )\r\n    </small>\r\n    <small class=\"flex-right-column text-underline\">\r\n      Original for Recipient\r\n    </small>\r\n  </div>\r\n  <hr>\r\n  <div class=\"flex-row mb-20\">\r\n    <div class=\"flex-left-column\">\r\n      <img src=\"assets/logo.png\" alt=\"logo\" class=\"h-8vh\" />\r\n    </div>\r\n\r\n    <h2 class=\"flex-right-column w-70\">\r\n      Mudy Manufacturing Industries\r\n    </h2>\r\n  </div>\r\n  <div class=\"flex-row\">\r\n    <div class=\"col-sm-9\">\r\n      Manufacturer of: All kind of Submersible pump, Indusction motor and control panel\r\n      H1-488, RIICO Industrial area, Khushkhera, Alwar, Rajasthan, 301707\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div><b>State :</b> Rajasthan</div>\r\n      <div><b>Code :</b> 08</div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"flex-row mb-20\">\r\n    <div class=\"col-sm-6\">\r\n      <b>Customer Name:</b>\r\n      <div>{{customer.name}}</div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div><b>Invoice No :</b> </div>\r\n      <div><b>Challan No :</b> </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div><b>Date :</b> {{invoice.date | date: 'dd-MMM-yyyy'}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex-row align-up mb-20\">\r\n    <div class=\"col-sm-6\">\r\n      <div><b>Customer Address :</b> {{customer.address}}</div>\r\n      <br />\r\n      <div><b>GST :</b> {{customer.gst}}</div>\r\n      <div><b>PAN :</b> {{customer.pan}}</div>\r\n      <div><b>State :</b> {{customer.state}}</div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div><b>Shipping Address :</b> {{customer.shippingAddress}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex-row\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <th>S.No</th>\r\n        <th>Description Of Goods</th>\r\n        <th>HSN / SAC</th>\r\n        <th>Qty</th>\r\n        <th>Unit Price</th>\r\n        <th *ngIf=\"customer.state === 'Rajasthan'\">GST @ 12%</th>\r\n        <th *ngIf=\"customer.state !== 'Rajasthan'\">CGST @ 6%</th>\r\n        <th *ngIf=\"customer.state !== 'Rajasthan'\">SGST @ 6%</th>\r\n        <th>Total Amount</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let good of invoice.goods; let i = index\">\r\n          <td>{{i + 1}}</td>\r\n          <td>{{good.description}}-4{{customer.brand}}{{good.code}}S4</td>\r\n          <td>{{good.hsnSac}}</td>\r\n          <td>{{good.qty}}</td>\r\n          <td>{{good.price}}</td>\r\n          <td *ngIf=\"customer.state === 'Rajasthan'\">{{(good.price*12)/100}}</td>\r\n          <td *ngIf=\"customer.state !== 'Rajasthan'\">{{(good.price*6)/100}}</td>\r\n          <td *ngIf=\"customer.state !== 'Rajasthan'\">{{(good.price*6)/100}}</td>\r\n          <td>{{good.qty * good.price}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <hr>\r\n  <div class=\"text-right\">\r\n    <b>Total Amount:</b> {{totalAmt}}\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"row\">\r\n        <b>Declaration:</b>\r\n        <span>Certified that Perticulars given above are true and correct under GST Act 2017 and amount indicated\r\n          represent the price actualy charged and that there is no flow of additional consideration directly or\r\n          indirectly from buyer .\r\n        </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <b>Terms & Conditions :</b>\r\n        <ol type=\"1\">\r\n          <li>Interest @ 12 % P.A will be charged extra on all the bills outstnading if payment made after due date.</li>\r\n          <li>Goods once sold will not be accepted back.</li>\r\n          <li>Our Responsibility ceases as the goods leave our premises</li>\t\t                 \r\n        </ol>\r\n      </div>\r\n      <div class=\"row\">\r\n        <b>Cheque or RTGS / NEFT should be in Favour of :</b>\r\n        <ol type=\"1\">\r\n          <li>MUDY MANUFACTURING INDUSTRIES.</li>\r\n          <li>BANK A/C NO : \" 349405000431 \"</li>\r\n          <li>BANK NAME : ' ICICI BANK\"</li>\t\t \r\n          <li>IFSC CODE : \" ICIC0003494 \"</li>     \r\n          <li>BRANCH : \" BHIWADI ALWAR BYPASS\"</li>           \r\n        </ol>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row mb-20 space-between\">\r\n        <b>Taxable Amount roundoff :</b>\r\n        <span> {{totalAmt}}\r\n        </span>\r\n      </div>\r\n      <div class=\"row mb-20 space-between\">\r\n        <b>CGST@ 6% :</b>\r\n        <span *ngIf=\"customer.state === 'Rajasthan'\">\r\n          {{(totalAmt*6)/100}}\r\n        </span>\r\n      </div>\r\n      <div class=\"row mb-20 space-between\">\r\n        <b>SGST@ 6% :</b>\r\n        <span *ngIf=\"customer.state === 'Rajasthan'\"> \r\n          {{(totalAmt*6)/100}}\r\n        </span>\r\n      </div>\r\n      <div class=\"row mb-20 space-between\">\r\n        <b>IGST@ 12% :</b>\r\n        <span *ngIf=\"customer.state !== 'Rajasthan'\"> \r\n          {{(totalAmt*12)/100}}\r\n        </span>\r\n      </div>\r\n      <div class=\"row mb-20 space-between\">\r\n        <b>Grand Total :</b>\r\n        <span *ngIf=\"customer.state !== 'Rajasthan'\"> \r\n          {{totalAmt + ((totalAmt*12)/100)}}\r\n        </span>\r\n        <span *ngIf=\"customer.state === 'Rajasthan'\"> \r\n          {{totalAmt + ((totalAmt*6)/100) + ((totalAmt*6)/100)}}\r\n        </span>\r\n      </div>\r\n      <div class=\"row mb-20 space-between\">\r\n        <b>Grand Total Roundoff :</b>\r\n        <span *ngIf=\"customer.state !== 'Rajasthan'\"> \r\n          {{totalAmt + ((totalAmt*12)/100)}}\r\n        </span>\r\n        <span *ngIf=\"customer.state === 'Rajasthan'\"> \r\n          {{totalAmt + ((totalAmt*6)/100) + ((totalAmt*6)/100) |  number:'1.0-0'}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"flex-row\">\r\n    All Disputes Subjected to Bhiwadi Rajasthan Jurisdition only.\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <mat-tab-group (selectedTabChange)=\"getAllInvoices($event)\">\n        <mat-tab label=\"Create Invoice\">\n            <a href=\"/customers\" class=\"link\">+ Add New Customer</a>\n            <div class=\"form\">\n                <div class=\"form-group col-sm-9\">\n                    <label for=\"inputCustomerName\">Choose Existing Customer</label>\n                    <select class=\"form-control\" (change)=\"fillDetails(customer._id)\" [(ngModel)]=\"customer._id\">\n                        <option selected>Open this select menu</option>\n                        <option *ngFor=\"let customer of customers\" [value]=\"customer._id\">\n                            {{customer.name}}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputDate\">Date</label>\n                    <input type=\"date\" class=\"form-control\" id=\"inputDate\" placeholder=\"Enter Date\"\n                        [(ngModel)]=\"date\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputCustomerName\">Customer Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputCustomerName\" placeholder=\"Enter Name\"\n                        [(ngModel)]=\"customer.name\" disabled>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputPanNo\">PAN No</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPanNo\" placeholder=\"Enter PAN no.\"\n                        [(ngModel)]=\"customer.pan\" disabled>\n                </div>\n                <div class=\"form-group col-sm-4\">\n                    <label for=\"inputGstNo\">GST No</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputGstNo\" placeholder=\"Enter GST no.\"\n                        [(ngModel)]=\"customer.gst\" disabled>\n                </div>\n        \n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputCustomerAddress\">Customer Address</label>\n                    <textarea class=\"form-control\" id=\"inputCustomerAddress\" placeholder=\"Enter Customer Address\"\n                        [(ngModel)]=\"customer.address\" disabled></textarea>\n                </div>\n        \n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputShippingAddress\">Shipping Address</label>\n                    <textarea class=\"form-control\" id=\"inputShippingAddress\" placeholder=\"Enter Customer Address\"\n                        [(ngModel)]=\"customer.shippingAddress\"></textarea>\n                </div>\n        \n                <div class=\"form-group col-sm-6\">\n                    <label for=\"inputState\">State</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputState\" placeholder=\"Enter State\"\n                        [(ngModel)]=\"customer.state\" disabled>\n                </div>\n        \n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"addGoods()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                        Add Goods</button>\n                </div>\n        \n                <div *ngIf=\"goods.length > 0\">\n                    <div class=\"row m-10\" *ngFor=\"let good of goods; let i = index\">\n                        <div class=\"form-group col-sm-3\">\n                            <label>Description</label>\n                            <select class=\"form-control\" [(ngModel)]=\"good.description\" (change)=\"fillGoodsDetails(good.description, good)\">\n                                <option selected>Open this select menu</option>\n                                <option *ngFor=\"let sub of submersibles\" [value]=\"sub._id\">\n                                    {{sub.description}}\n                                </option>\n                            </select>\n                        </div>\n        \n                        <div class=\"form-group col-sm-2\">\n                            <label>HSN/SAC</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"HSN/SAC\" [(ngModel)]=\"good.hsnSac\" disabled>\n                        </div>\n                        \n                        <div class=\"form-group col-sm-2\">\n                            <label>Serial Number</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Serial Number\" [(ngModel)]=\"good.serialNumber\">\n                        </div>\n\n                        <div class=\"form-group col-sm-2\">\n                            <label>Qty</label>\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Qty\" [(ngModel)]=\"good.qty\">\n                        </div>\n        \n                        <div class=\"form-group col-sm-2\">\n                            <label>Unit Price</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Unit Price\" [(ngModel)]=\"good.price\" disabled>\n                        </div>\n        \n                        <button (click)=\"removeGoods(i)\" class=\"btn btn-link col-sm-1 mb-15\">\n                            <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n        \n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"createInvoice()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Create</button>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"View Invoice\">\n            <div class=\"card-container\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Date</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let invoice of invoices\">\n                            <td>{{invoice.name}}</td>\n                            <td>{{invoice.date}}</td>\n                            <td>\n                                <button class=\"btn btn-transparent p-0\" (click)=\"viewInvoice(invoice._id)\">\n                                    <i class=\"fa fa-eye\"></i>\n                                </button>\n                                <!-- <button class=\"btn btn-transparent danger p-0\" (click)=\"deleteInvoice(invoice._id)\">\n                                    <i class=\"fa fa-trash\"></i>\n                                </button> -->\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </mat-tab>\n    </mat-tab-group>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/payment-reminder-view.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/payment-reminder-view.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\" id=\"sales-table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Total Due</th>\r\n            <th>Total Recieved</th>\r\n            <th>Balance</th>\r\n            <th>Sales</th>\r\n            <th>Payment</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <td>{{data.totalBalance}}</td>\r\n            <td>{{data.totalRecieved}}</td>\r\n            <td>{{data.totalBalance - data.totalRecieved}}</td>\r\n            <td class=\"bg-pink\">\r\n                <div *ngFor=\"let bill of data.bills\">\r\n                    {{bill.date | date: 'dd-MMM-yyyy'}} {{bill.ammount}}\r\n                </div>\r\n            </td>\r\n            <td class=\"bg-green\">\r\n                <div *ngFor=\"let pay of data.payments\"\r\n                    [ngClass]=\"{'highlight': pay.mode === 'cheque'}\" (click)=\"openPaymnetModal(pay)\">\r\n                    {{pay.date | date: 'dd-MMM-yyyy'}} {{pay.ammount}}\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/payment-modal.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/payment-modal.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\r\n    <div class=\"flex\">\r\n        <label>Customer Name:</label>\r\n        <div>{{customer.name}}</div>\r\n    </div>\r\n    <div class=\"flex\">\r\n        <label>Ammount:</label>\r\n        <div>{{data.pay.ammount}}</div>\r\n    </div>\r\n    <div class=\"flex\">\r\n        <label>Mode:</label>\r\n        <div>{{data.pay.mode}}</div>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"updatePaymentStatus()\">Update cheque as cleared</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <mat-tab-group (selectedTabChange)=\"getAllPayments($event)\">\n        <mat-tab label=\"Add Payment\">\n            <div class=\"form\">\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputCustomerName\">Choose Customer</label>\n                    <select class=\"form-control\" [(ngModel)]=\"payment.customerId\">\n                        <option selected>Open this select menu</option>\n                        <option *ngFor=\"let customer of customers\" [value]=\"customer._id\">\n                            {{customer.name}}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputAmmount\">Ammount</label>\n                    <input type=\"number\" class=\"form-control\" id=\"inputAmmount\" placeholder=\"Enter Ammount\"\n                        [(ngModel)]=\"payment.ammount\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputDate\">Date</label>\n                    <input type=\"date\" class=\"form-control\" id=\"inputDate\" placeholder=\"Enter Date\"\n                        [(ngModel)]=\"payment.date\">\n                </div>\n                <div class=\"form-group col-sm-3\">\n                    <label for=\"inputMode\">Mode</label>\n                    <select class=\"form-control\" [(ngModel)]=\"payment.mode\">\n                        <option selected>Open this select menu</option>\n                        <option value=\"cheque\">\n                            Cheque\n                        </option>\n                        <option value=\"neft\">\n                            NEFT/RTGS\n                        </option>\n                        <option value=\"upi\">\n                            UPI\n                        </option>\n                    </select>\n                </div>\n\n                <div class=\"form-group col-sm-12\">\n                    <button (click)=\"addPayment()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\"\n                            aria-hidden=\"true\"></i>\n                        Add Payment</button>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"View Sales Report\">\n            <div class=\"card-container w-150\">\n                <button class=\"btn btn-primary export-btn\" (click)=\"exportToExcel()\">Export To Excel</button>\n                <!-- <div class=\"form-group col-sm-2 filter\">\n                    <select class=\"form-control\" [(ngModel)]=\"month\" (change)=\"filterTableData()\">\n                        <option selected>Open this select menu</option>\n                        <option *ngFor=\"let month of months\" [value]=\"month\">\n                            {{month}}\n                        </option>\n                    </select>\n                </div> -->\n                <hr />\n                <table class=\"table\" id=\"sales-table\">\n                    <thead>\n                        <tr>\n                            <th>Customer Name</th>\n                            <th>Location</th>\n                            <th>Total Due</th>\n                            <th>Total Recieved</th>\n                            <th>Balance</th>\n                            <th>Sales</th>\n                            <th>Payment</th>\n                            <div class=\"head\" *ngFor=\"let rate of numbers\">\n                                <th>1.0/8 | Rate</th>\n                                <th>1.0/10 | Rate</th>\n                                <th>1.0/15 | Rate</th>\n                                <th>1.5/12 | Rate</th>\n                                <th>2.0/12 | Rate</th>\n                                <th>2.0/15 | Rate</th>\n                                <th>2.0/18 | Rate</th>\n                            </div>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let customer of customers\">\n                            <td>{{customer.name}}</td>\n                            <td>{{customer.state}}</td>\n                            <td>{{customer.totalBalance}}</td>\n                            <td>{{customer.totalRecieved}}</td>\n                            <td>{{customer.totalBalance - customer.totalRecieved}}</td>\n                            <td class=\"bg-pink\">\n                                <div *ngFor=\"let bill of customer.bills\">\n                                    {{bill.date | date: 'dd-MMM-yyyy'}} {{bill.ammount}}\n                                </div>\n                            </td>\n                            <td class=\"bg-green\">\n                                <div *ngFor=\"let pay of customer.payments\"\n                                    [ngClass]=\"{'highlight': pay.mode === 'cheque'}\" (click)=\"openPaymnetModal(pay)\">\n                                    {{pay.date | date: 'dd-MMM-yyyy'}} {{pay.ammount}}\n                                </div>\n                            </td>\n\n                            <div class=\"head\" *ngFor=\"let rate of numbers.slice().reverse()\">\n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][0].items? customer.subRates[rate][0].items: 0}}</b>-\n                                    {{customer.subRates[rate][0].rate}}\n                                </td>\n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][1].items? customer.subRates[rate][1].items: 0}}</b>-\n                                    {{customer.subRates[rate][1].rate}}\n                                </td>\n    \n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][2].items? customer.subRates[rate][2].items: 0}}</b>-\n                                    {{customer.subRates[rate][2].rate}}\n                                </td>\n    \n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][3].items? customer.subRates[rate][3].items: 0}}</b>-\n                                    {{customer.subRates[rate][3].rate}}\n                                </td>\n    \n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][4].items? customer.subRates[rate][4].items: 0}}</b>-\n                                    {{customer.subRates[rate][4].rate}}\n                                </td>\n    \n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][5].items? customer.subRates[rate][5].items: 0}}</b>-\n                                    {{customer.subRates[rate][5].rate}}\n                                </td>\n    \n                                <td *ngIf=\"customer.subRates[rate] && customer.subRates[rate].length > 0\">\n                                    <b>{{customer.subRates[rate][6].items? customer.subRates[rate][6].items: 0}}</b>-\n                                    {{customer.subRates[rate][6].rate}}\n                                </td>\n                            </div>\n                            \n\n                        </tr>\n                        <!-- <tr>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td>Balance</td>\n                            <td>Sales</td>\n                            <td>Payment</td>\n                            <td>1.0/8 | Rate</td>\n                            <td>1.0/10 | Rate</td>\n                            <td>1.0/15 | Rate</td>\n                            <td>1.5/12 | Rate</td>\n                            <td>2.0/12 | Rate</td>\n                            <td>2.0/15 | Rate</td>\n                            <td>2.0/18 | Rate</td>\n                        </tr> -->\n                    </tbody>\n                </table>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-wrapper\">\n    <div class=\"item\">\n        <a href=\"/invoices\">\n            <i class=\"fa fa-dollar\" aria-hidden=\"true\"></i>\n            <span>Invoices</span>\n        </a>\n    </div>\n    <div class=\"item\">\n        <a href=\"/customers\">\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            <span>Customer</span>\n        </a>\n    </div>\n    <div class=\"item\">\n        <a href=\"/inventory\">\n            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n            <span>Inventory</span>\n        </a>\n    </div>\n    <div class=\"item\">\n        <a href=\"/sales\">\n            <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n            <span>Sales</span>\n        </a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");







const routes = [
    {
        path: 'sales',
        component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_6__["SalesComponent"]
    },
    {
        path: 'invoices',
        component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_5__["InvoicesComponent"]
    },
    {
        path: 'customers',
        component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"]
    },
    {
        path: 'inventory',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-wrapper {\n  margin-left: 100px;\n  padding: 20px;\n  margin-top: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvTGVub3ZvL0Rvd25sb2Fkcy9tdWR5bmV3LW1haW4vbXVkeS9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59IiwiLmNvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbiJdfQ== */");

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
    constructor() {
        this.title = 'mudy';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
            _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__["SalesComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__["CustomersComponent"],
            _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_16__["InvoiceViewComponent"],
            _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_15__["InventoryComponent"],
            _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_16__["InvoicesComponent"],
            _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__["PaymentModalComponent"],
            _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_16__["PaymentReminderModalComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__["CustomerEditComponent"]
        ],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_17__["NgxPrintModule"]
        ],
        entryComponents: [_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_16__["InvoiceViewComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__["PaymentModalComponent"], _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_16__["PaymentReminderModalComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__["CustomerEditComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
        this.customer = {};
    }
    getCustomers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/customers')
            .map(res => res);
    }
    getAllStates() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/states')
            .map(res => res);
    }
    addCustomer(newCustomer) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/customer', newCustomer, { headers: headers1 })
            .map(res => res);
    }
    updateCustomer(id, sub) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/updateCustomer/' + id, { subRates: sub }, { headers: headers1 })
            .map(res => res);
    }
    updateMaxRateChanges(id, num) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/updateMaxRateChanges/' + id, { number: num }, { headers: headers1 })
            .map(res => res);
    }
    deleteCustomer(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/customer/' + id)
            .map(res => res);
    }
    getCustomerById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/customer/' + id)
            .map(res => res);
    }
    getInvoices() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/invoices')
            .map(res => res);
    }
    getInvoiceById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/invoice/' + id)
            .map(res => res);
    }
    addInvoice(name, customerId, items, invoiceDate) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        const filename = name + '-' + invoiceDate;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/invoice', { name: filename, id: customerId, goods: items, date: invoiceDate }, { headers: headers1 })
            .map(res => res);
    }
    deleteInvoice(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/invoice/' + id)
            .map(res => res);
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/customers/customers.component.less":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding: 20px;\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.form table td {\n  max-width: 20vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL0M6L1VzZXJzL0xlbm92by9Eb3dubG9hZHMvbXVkeW5ldy1tYWluL211ZHkvc3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FESkE7RUFNUSxlQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHRhYmxle1xuICAgICAgICB0ZCB7XG4gICAgICAgIG1heC13aWR0aDogMjB2dztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZm9ybSB0YWJsZSB0ZCB7XG4gIG1heC13aWR0aDogMjB2dztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent, CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");





let CustomersComponent = class CustomersComponent {
    constructor(customerService, inventoryService, snackBar, dialog) {
        this.customerService = customerService;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.customer = {
            name: '',
            mobileNumber: '',
            pan: '',
            gst: '',
            state: '',
            stateCode: '',
            address: '',
            shippingAddress: '',
            brand: '',
            subRates: []
        };
        this.states = [];
        this.customers = [];
        this.submersibles = [];
    }
    ngOnInit() {
        this.getAllStates();
        this.getAllSubmersibles();
    }
    getAllStates() {
        this.customerService.getAllStates().subscribe(resp => {
            this.states = resp;
        }, err => {
            this.snackBar.open(err, 'Error');
        });
    }
    setStateCode(val) {
        this.states.forEach(element => {
            if (element.state === val) {
                this.customer.stateCode = element.stateCode;
            }
        });
    }
    getAllCustomers(tab) {
        if (tab.index === 1) {
            this.customerService.getCustomers().subscribe(resp => {
                this.customers = resp;
            }, (err) => {
                this.snackBar.open(err, 'Error');
            });
        }
    }
    getAllSubmersibles() {
        this.inventoryService.getAllSubmersibles().subscribe(resp => {
            this.submersibles = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    addCustomer() {
        const rates = [];
        this.submersibles.forEach(element => {
            rates.push({
                name: element.name,
                id: element._id,
                rate: element.rate,
                description: element.description
            });
        });
        this.customer.subRates[0] = rates;
        this.customerService.addCustomer(this.customer).subscribe(resp => {
            this.customer = {
                name: '',
                mobileNumber: '',
                pan: '',
                gst: '',
                state: '',
                stateCode: '',
                address: '',
                shippingAddress: '',
                brand: '',
                subRates: []
            };
            this.snackBar.open('Customer Create', 'Success');
        }, (error) => {
            this.snackBar.open(error, 'Error');
        });
    }
    editCustomer(val) {
        const dialogRef = this.dialog.open(CustomerEditComponent, {
            width: '50vw',
            height: '70vh',
            data: { customer: val }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    deleteCustomer(id) {
        this.customerService.deleteCustomer(id).subscribe(resp => {
            this.snackBar.open('Customer Deleted', 'Success');
            this.customerService.getCustomers().subscribe(res => {
                this.customers = res;
            }, (err) => {
                this.snackBar.open(err, 'Error');
            });
        }, (error) => {
            this.snackBar.open(error, 'Error');
        });
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.less */ "./src/app/customers/customers.component.less")).default]
    })
], CustomersComponent);

let CustomerEditComponent = class CustomerEditComponent {
    constructor(dialogRef, customerService, inventoryService, snackBar, dialog, data) {
        this.dialogRef = dialogRef;
        this.customerService = customerService;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.submersibles = [];
    }
    ngOnInit() {
        this.customer = this.data.customer;
        this.getAllSubmersibles();
    }
    getAllSubmersibles() {
        this.inventoryService.getAllSubmersibles().subscribe(resp => {
            this.submersibles = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    updateCustomer() {
        const rates = [];
        this.submersibles.forEach(element => {
            rates.push({
                name: element.name,
                id: element._id,
                rate: element.rate,
                description: element.description
            });
        });
        this.customer.subRates.push(rates);
        this.customerService.updateCustomer(this.customer._id, this.customer.subRates).subscribe(resp => {
            this.inventoryService.getMaxRateChange().subscribe(res => {
                const num = res[0].number + 1;
                this.customerService.updateMaxRateChanges(res[0]._id, num).subscribe(response => {
                    this.snackBar.open('Updated Succesfully', 'Success');
                    this.dialogRef.close();
                });
            });
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
};
CustomerEditComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.less */ "./src/app/customers/customers.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CustomerEditComponent);



/***/ }),

/***/ "./src/app/header/header.component.less":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fff;\n  margin: 0;\n  padding: 10px;\n  align-items: center;\n  height: 70px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n}\nheader img {\n  width: 15%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6L1VzZXJzL0xlbm92by9Eb3dubG9hZHMvbXVkeW5ldy1tYWluL211ZHkvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRFpBO0VBYVEsVUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgIH1cbn0iLCJoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmhlYWRlciBpbWcge1xuICB3aWR0aDogMTUlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.less */ "./src/app/header/header.component.less")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/inventory.service.ts":
/*!**************************************!*\
  !*** ./src/app/inventory.service.ts ***!
  \**************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let InventoryService = class InventoryService {
    constructor(http) {
        this.http = http;
    }
    addPart(inventory) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/part', inventory, { headers: headers1 })
            .map(res => res);
    }
    getAllParts() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/parts')
            .map(res => res);
    }
    getAllSubmersibles() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/submersibles')
            .map(res => res);
    }
    getMaxRateChange() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/maxRateChange')
            .map(res => res);
    }
    getSubmersibleById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/submersible/' + id)
            .map(res => res);
    }
    addSubmersibleQuantity(id, qty) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/updateSubmersible/' + id, { quantity: qty }, { headers: headers1 })
            .map(res => res);
    }
    getPartById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/stock/' + id)
            .map(res => res);
    }
    updateStockQty(id, qty) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/updateStock/' + id, { quantity: qty }, { headers: headers1 })
            .map(res => res);
    }
    updateFinishGoods(id, qty) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/updateFinishGoods/' + id, { quantity: qty }, { headers: headers1 })
            .map(res => res);
    }
    addPayment(payment) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/payment/', payment, { headers: headers1 })
            .map(res => res);
    }
    getAllPayments() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/payments')
            .map(res => res);
    }
    getPaymentsByCustomerId(customerId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/paymentByCustomer/' + customerId)
            .map(res => res);
    }
    updatePayment(id) {
        const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/javascript');
        headers1.append('Access-Control-Allow-Origin', '*');
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/updatePayment/' + id, { headers: headers1 })
            .map(res => res);
    }
    getInvoicesByCustomerId(customerId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/invoiceByCustomer/' + customerId)
            .map(res => res);
    }
};
InventoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventoryService);



/***/ }),

/***/ "./src/app/inventory/inventory.component.less":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding: 20px;\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.export-btn {\n  float: right;\n  margin: 10px;\n  z-index: 999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L0M6L1VzZXJzL0xlbm92by9Eb3dubG9hZHMvbXVkeW5ldy1tYWluL211ZHkvc3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZXhwb3J0LWJ0biB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG59IiwiLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmV4cG9ydC1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);





let InventoryComponent = class InventoryComponent {
    constructor(inventoryService, snackBar) {
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.part = {
            type: '',
            name: '',
            number: '',
            material: '',
            description: '',
            moc: 0,
            _id: '',
            quantity: 0,
            allowedSubType: ['1.0/8', '1.0/10', '1.5/12', '1.5/15', '2.0/12', '2.0/15', '2.0/18']
        };
        this.stocks = [{
                id: '',
                moc: 0,
                quantity: 0
            }];
        this.items = [{
                id: '',
                moc: 0,
                quantity: 0
            }];
        this.inventories = [];
        this.submersibles = [];
    }
    ngOnInit() {
        this.getAllParts(0);
        this.getAllSubmersibles();
    }
    getAllParts(tab) {
        if (tab.index === 4) {
            this.inventoryService.getAllSubmersibles().subscribe(res => {
                this.submersibles = res;
            }, err => {
                this.snackBar.open(err, 'Error');
            });
        }
        else {
            this.inventoryService.getAllParts().subscribe(resp => {
                this.inventories = resp;
            }, (err) => {
                this.snackBar.open(err, 'Error');
            });
        }
    }
    getAllSubmersibles() {
        this.inventoryService.getAllSubmersibles().subscribe(resp => {
            this.submersibles = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    addStocks() {
        this.stocks.push({
            id: '',
            moc: 0,
            quantity: 0
        });
    }
    removeStocks(index) {
        this.stocks.splice(index, 1);
    }
    purchaseStocks() {
        this.stocks.forEach(element => {
            this.inventoryService.getPartById(element.id).subscribe(resp => {
                let newQty;
                if (resp[0].quantity > 0) {
                    console.log(typeof (resp[0].quantity), typeof (element.quantity), resp[0].quantity, element.quantity);
                    newQty = resp[0].quantity + element.quantity;
                    this.inventoryService.updateStockQty(element.id, newQty).subscribe(res => {
                        this.stocks = [{
                                id: '',
                                moc: 0,
                                quantity: 0
                            }];
                    }, (err) => {
                        this.snackBar.open(err, 'Error');
                    });
                }
                else {
                    newQty = element.quantity;
                    this.inventoryService.updateStockQty(element.id, newQty).subscribe(res => {
                        this.stocks = [{
                                id: '',
                                moc: 0,
                                quantity: 0
                            }];
                    }, (err) => {
                        this.snackBar.open(err, 'Error');
                    });
                }
            }, (error) => {
                this.snackBar.open(error, 'Error');
            });
        });
    }
    addItems() {
        this.items.push({
            id: '',
            moc: 0,
            quantity: 0
        });
    }
    removeItems(index) {
        this.items.splice(index, 1);
    }
    addFinishGoods() {
        this.getAllParts(0);
        this.items.forEach(element => {
            this.inventories.forEach(part => {
                if (part.allowedSubType.indexOf(element.id) !== -1) {
                    this.inventoryService.getPartById(part._id).subscribe(resp => {
                        const newQty = resp[0].quantity - (part.moc * element.quantity);
                        this.inventoryService.updateStockQty(part._id, newQty).subscribe(res => {
                            this.items = [{
                                    id: '',
                                    moc: 0,
                                    quantity: 0
                                }];
                        }, (err) => {
                            this.snackBar.open(err, 'Error');
                        });
                    });
                }
            });
            this.inventoryService.getSubmersibleById(element.id).subscribe(resp => {
                let newQty;
                if (resp[0].quantity > 0) {
                    console.log(typeof (resp[0].quantity), typeof (element.quantity), resp[0].quantity, element.quantity);
                    newQty = resp[0].quantity + element.quantity;
                    this.inventoryService.addSubmersibleQuantity(element.id, newQty).subscribe(res => {
                        this.items = [{
                                id: '',
                                moc: 0,
                                quantity: 0
                            }];
                    }, (err) => {
                        this.snackBar.open(err, 'Error');
                    });
                }
                else {
                    newQty = element.quantity;
                    this.inventoryService.addSubmersibleQuantity(element.id, newQty).subscribe(res => {
                        this.items = [{
                                id: '',
                                moc: 0,
                                quantity: 0
                            }];
                    }, (err) => {
                        this.snackBar.open(err, 'Error');
                    });
                }
            }, (error) => {
                this.snackBar.open(error, 'Error');
            });
        });
    }
    createPart() {
        this.inventoryService.addPart(this.part).subscribe(resp => {
            this.part = {
                type: '',
                name: '',
                number: '',
                material: '',
                description: '',
                moc: 0,
                _id: '',
                quantity: 0,
                allowedSubType: ['1.0/8', '1.0/10', '1.5/12', '1.5/15', '2.0/12', '2.0/15', '2.0/18']
            };
            this.snackBar.open('Part Create', 'Success');
        }, (error) => {
            this.snackBar.open(error, 'Error');
        });
    }
    exportToExcel() {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].table_to_sheet(document.getElementById('inventory-table'));
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](wb, 'inventory.xlsx');
    }
};
InventoryComponent.ctorParameters = () => [
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory.component.less */ "./src/app/inventory/inventory.component.less")).default]
    })
], InventoryComponent);



/***/ }),

/***/ "./src/app/invoices/invoices.component.less":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoices.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding: 20px;\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.link {\n  position: absolute;\n  right: 30px;\n  top: 10px;\n  text-decoration: none;\n}\ntd button i {\n  padding: 0 10px;\n}\n.invoice-wrapper {\n  position: relative;\n}\n.invoice-wrapper .print-btn {\n  position: absolute;\n  right: 10px;\n}\n.fs-14 {\n  font-size: 14px;\n}\n.flex-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.w-70 {\n  width: 70%;\n}\n.h-8vh {\n  height: 8vh;\n}\n.align-up {\n  align-items: flex-start;\n}\n.text-right {\n  width: 100%;\n  text-align: right;\n}\n.space-between {\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXMvQzovVXNlcnMvTGVub3ZvL0Rvd25sb2Fkcy9tdWR5bmV3LW1haW4vbXVkeS9zcmMvYXBwL2ludm9pY2VzL2ludm9pY2VzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9pbnZvaWNlcy9pbnZvaWNlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7QUNBSjtBRERBO0VBR1Esa0JBQUE7RUFDQSxXQUFBO0FDQ1I7QURFQTtFQUNJLGVBQUE7QUNBSjtBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVBO0VBQ0ksMEJBQUE7QUNBSjtBREVBO0VBQ0ksVUFBQTtBQ0FKO0FERUE7RUFDSSxXQUFBO0FDQUo7QURFQTtFQUNJLHVCQUFBO0FDQUo7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VzL2ludm9pY2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmxpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxudGQgYnV0dG9uIGkge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmludm9pY2Utd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5wcmludC1idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbi5mcy0xNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZsZXgtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRleHQtdW5kZXJsaW5lIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi53LTcwIHtcbiAgICB3aWR0aDogNzAlO1xufVxuLmgtOHZoIHtcbiAgICBoZWlnaHQ6IDh2aDtcbn1cbi5hbGlnbi11cCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4udGV4dC1yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn0iLCIuZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxudGQgYnV0dG9uIGkge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaW52b2ljZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmludm9pY2Utd3JhcHBlciAucHJpbnQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cbi5mcy0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mbGV4LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0LXVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnctNzAge1xuICB3aWR0aDogNzAlO1xufVxuLmgtOHZoIHtcbiAgaGVpZ2h0OiA4dmg7XG59XG4uYWxpZ24tdXAge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/invoices/invoices.component.ts":
/*!************************************************!*\
  !*** ./src/app/invoices/invoices.component.ts ***!
  \************************************************/
/*! exports provided: InvoicesComponent, InvoiceViewComponent, PaymentReminderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewComponent", function() { return InvoiceViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReminderModalComponent", function() { return PaymentReminderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");






let InvoicesComponent = class InvoicesComponent {
    constructor(customerService, snackBar, inventoryService, dialog) {
        this.customerService = customerService;
        this.snackBar = snackBar;
        this.inventoryService = inventoryService;
        this.dialog = dialog;
        this.goods = [];
        this.customers = [];
        this.invoices = [];
        this.customer = {
            name: '',
            _id: '',
            mobileNumber: '',
            stateCode: '',
            pan: '',
            gst: '',
            state: '',
            address: '',
            shippingAddress: '',
            brand: ''
        };
        this.submersibles = [];
    }
    ngOnInit() {
        this.getAllCustomers();
        this.getAllSubmersibles();
    }
    getAllSubmersibles() {
        this.inventoryService.getAllSubmersibles().subscribe(resp => {
            this.submersibles = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    addGoods() {
        this.goods.push({
            description: '',
            price: 0,
            qty: 0,
            hsnSac: '',
            serialNumber: '',
            code: ''
        });
    }
    removeGoods(index) {
        this.goods.splice(index, 1);
    }
    getAllCustomers() {
        this.customerService.getCustomers().subscribe(resp => {
            this.customers = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    fillDetails(id) {
        this.customers.forEach(element => {
            if (element._id === id) {
                this.customer = element;
            }
        });
    }
    createInvoice() {
        this.customerService.addInvoice(this.customer.name, this.customer._id, this.goods, this.date).subscribe(res => {
            let totalAmt = 0;
            res.goods.forEach(element => {
                totalAmt = totalAmt + (element.price * element.qty);
            });
            this.getAllCustomers();
            this.customer = {
                name: '',
                mobileNumber: '',
                stateCode: '',
                _id: '',
                pan: '',
                gst: '',
                state: '',
                address: '',
                shippingAddress: '',
                brand: ''
            };
            this.date = '';
            this.snackBar.open('Invoice Create', 'Success');
            this.goods.forEach(ele => {
                this.submersibles.forEach(item => {
                    console.log(item.quantity, ele.qty, item._id, ele.description);
                    if (item._id === ele.description) {
                        ele.qty = item.quantity - ele.qty;
                    }
                    this.inventoryService.updateFinishGoods(ele.description, ele.qty).subscribe(resp => {
                        this.goods = [];
                    }, (error) => {
                        this.snackBar.open(error, 'Error');
                    });
                });
            });
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    getAllInvoices(tab) {
        if (tab.index === 1) {
            this.customerService.getInvoices().subscribe(resp => {
                this.invoices = resp;
            }, (err) => {
                this.snackBar.open(err, 'Error');
            });
        }
    }
    viewInvoice(id) {
        const dialogRef = this.dialog.open(InvoiceViewComponent, {
            width: '80vw',
            height: '80vh',
            data: { invoiceId: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    deleteInvoice(id) {
        this.customerService.deleteInvoice(id).subscribe(resp => {
            this.snackBar.open('Invoice Deleted', 'Success');
            this.customerService.getInvoices().subscribe(res => {
                this.invoices = res;
            }, (err) => {
                this.snackBar.open(err, 'Error');
            });
        }, (error) => {
            this.snackBar.open(error, 'Error');
        });
    }
    fillGoodsDetails(subId, good) {
        this.submersibles.forEach(ele => {
            if (ele._id === subId) {
                good.hsnSac = ele.hsnSac;
            }
            this.customer.subRates[this.customer.subRates.length - 1].forEach(element => {
                console.log(element.id, subId);
                if (element.id === subId) {
                    good.price = element.rate;
                }
            });
        });
    }
};
InvoicesComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InvoicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoices',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoices.component.less */ "./src/app/invoices/invoices.component.less")).default]
    })
], InvoicesComponent);

let InvoiceViewComponent = class InvoiceViewComponent {
    constructor(dialogRef, customerService, inventoryService, snackBar, dialog, data) {
        this.dialogRef = dialogRef;
        this.customerService = customerService;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.totalAmt = 0;
        this.submersibles = [];
    }
    ngOnInit() {
        this.getAllSubmersibles();
        this.customerService.getInvoiceById(this.data.invoiceId).subscribe(resp => {
            this.invoice = resp[0];
            this.invoice.goods.forEach(element => {
                this.submersibles.forEach(sub => {
                    if (element.description === sub._id) {
                        element.description = sub.description;
                        element.code = sub.code;
                    }
                });
                this.totalAmt = this.totalAmt + (element.price * element.qty);
            });
            this.customerService.getCustomerById(this.invoice.customer).subscribe(res => {
                this.customer = res[0];
                console.log(this.customer);
                const dialogRef = this.dialog.open(PaymentReminderModalComponent, {
                    width: '50vw',
                    height: '50vh',
                    data: { id: this.customer._id }
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                });
            });
        }, error => {
            this.snackBar.open(error, 'Error');
        });
    }
    getAllSubmersibles() {
        this.inventoryService.getAllSubmersibles().subscribe(resp => {
            this.submersibles = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    printToPdf() {
    }
};
InvoiceViewComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
InvoiceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-view.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoice-view.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoices.component.less */ "./src/app/invoices/invoices.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InvoiceViewComponent);

let PaymentReminderModalComponent = class PaymentReminderModalComponent {
    constructor(dialogRef, customerService, inventoryService, snackBar, data) {
        this.dialogRef = dialogRef;
        this.customerService = customerService;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.data = data;
    }
    ngOnInit() {
        this.data.totalBalance = 0;
        this.data.totalRecieved = 0;
        this.inventoryService.getPaymentsByCustomerId(this.data.id).subscribe(resp => {
            this.data.payments = resp;
            this.data.payments.forEach(element => {
                this.data.totalRecieved = this.data.totalRecieved + element.ammount;
            });
        });
        this.inventoryService.getInvoicesByCustomerId(this.data.id).subscribe((resp) => {
            this.data.bills = resp;
            this.data.subs = [];
            this.data.bills.forEach(element => {
                element.ammount = 0;
                element.goods.forEach(item => {
                    this.data.subs.push(item);
                    element.ammount = element.ammount + (item.qty * item.price);
                    this.data.totalBalance = this.data.totalBalance + (item.qty * item.price);
                });
            });
        });
        console.log(this.data);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
PaymentReminderModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PaymentReminderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-reminder-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-reminder-view.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/payment-reminder-view.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoices.component.less */ "./src/app/invoices/invoices.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PaymentReminderModalComponent);



/***/ }),

/***/ "./src/app/sales/sales.component.less":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.less ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding: 20px;\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.highlight {\n  background-color: yellow;\n}\n.w-150 {\n  width: 150vw;\n}\n.export-btn {\n  margin: 10px;\n  z-index: 999;\n}\n.flex {\n  display: flex;\n}\n.flex label {\n  margin-right: 10px;\n}\nthead .head,\ntbody .head {\n  display: table-cell;\n  padding: 0.75rem;\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.head th,\n.head td {\n  border: 0px;\n  min-width: 120px;\n}\nth {\n  border-top: 0px;\n}\n.filter {\n  position: absolute;\n  right: 0;\n  top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvQzovVXNlcnMvTGVub3ZvL0Rvd25sb2Fkcy9tdWR5bmV3LW1haW4vbXVkeS9zcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zYWxlcy9zYWxlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksd0JBQUE7QUNDSjtBRENBO0VBQ0ksWUFBQTtBQ0NKO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxhQUFBO0FDQ0o7QURGQTtFQUdRLGtCQUFBO0FDRVI7QURDQTs7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0VKO0FEQUE7O0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDR0o7QUREQTtFQUNJLGVBQUE7QUNHSjtBRERBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4udy0xNTAge1xuICAgIHdpZHRoOiAxNTB2dztcbn1cbi5leHBvcnQtYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxudGhlYWQgLmhlYWQsIHRib2R5IC5oZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbn1cbi5oZWFkIHRoLCAuaGVhZCB0ZCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbn1cbnRoIHtcbiAgICBib3JkZXItdG9wOiAwcHg7XG59XG4uZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMHB4O1xufSIsIi5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4udy0xNTAge1xuICB3aWR0aDogMTUwdnc7XG59XG4uZXhwb3J0LWJ0biB7XG4gIG1hcmdpbjogMTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXggbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG50aGVhZCAuaGVhZCxcbnRib2R5IC5oZWFkIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG59XG4uaGVhZCB0aCxcbi5oZWFkIHRkIHtcbiAgYm9yZGVyOiAwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG50aCB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi5maWx0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent, PaymentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModalComponent", function() { return PaymentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);






let SalesComponent = class SalesComponent {
    constructor(customerService, inventoryService, snackBar, dialog) {
        this.customerService = customerService;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.customers = [];
        this.payment = {
            customerId: '',
            date: new Date(),
            ammount: 0,
            mode: ''
        };
        this.submersibles = [];
        this.goods = [];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    ngOnInit() {
        this.getAllCustomers();
        this.getAllSubmersibles();
        this.getMaxRateChanges();
    }
    fillDetails(id) {
        this.customers.forEach(element => {
            if (element._id === id) {
                this.customer = element;
            }
        });
    }
    filterTableData() {
        console.log(this.month);
    }
    getMaxRateChanges() {
        this.inventoryService.getMaxRateChange().subscribe(resp => {
            this.numberOfChange = resp[0].number;
            this.numbers = Array(this.numberOfChange).fill(0).map((x, i) => i);
            console.log(this.numbers, this.numberOfChange, 'num');
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    getAllSubmersibles() {
        this.inventoryService.getAllSubmersibles().subscribe(resp => {
            this.submersibles = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    addGoods() {
        this.goods.push({
            description: '',
            price: 0,
            qty: 0,
            hsnSac: '',
            serialNumber: '',
            code: ''
        });
    }
    removeGoods(index) {
        this.goods.splice(index, 1);
    }
    getAllPayments(tab) {
        if (tab.index === 1) {
            this.customers.forEach(customer => {
                customer.totalBalance = 0;
                customer.totalRecieved = 0;
                this.inventoryService.getInvoicesByCustomerId(customer._id).subscribe(resp => {
                    customer.bills = resp;
                    customer.subs = [];
                    customer.bills.forEach(element => {
                        element.ammount = 0;
                        element.goods.forEach(item => {
                            customer.subs.push(item);
                            element.ammount = element.ammount + (item.qty * item.price);
                            customer.totalBalance = customer.totalBalance + (item.qty * item.price);
                        });
                        console.log(customer);
                    });
                    customer.subs.forEach(it => {
                        customer.subRates[0].forEach(ele => {
                            if (ele.id === it.description) {
                                ele.items = ele.items ? (ele.items + it.qty) : it.qty;
                            }
                        });
                    });
                }, (err) => {
                    this.snackBar.open(err, 'Error');
                });
                this.inventoryService.getPaymentsByCustomerId(customer._id).subscribe(resp => {
                    customer.payments = resp;
                    customer.payments.forEach(element => {
                        customer.totalRecieved = customer.totalRecieved + element.ammount;
                    });
                }, (err) => {
                    this.snackBar.open(err, 'Error');
                });
            });
        }
    }
    getAllCustomers() {
        this.customerService.getCustomers().subscribe(resp => {
            this.customers = resp;
        }, (err) => {
            this.snackBar.open(err, 'Error');
        });
    }
    addPayment() {
        this.inventoryService.addPayment(this.payment).subscribe(resp => {
            this.snackBar.open('Payment Added Success', 'Success');
            this.payment = {
                customerId: '',
                date: new Date(),
                ammount: 0,
                mode: ''
            };
        }, err => {
            this.snackBar.open(err, 'Error');
        });
    }
    exportToExcel() {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].table_to_sheet(document.getElementById('sales-table'));
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_5__["writeFile"](wb, 'sales.xlsx');
    }
    openPaymnetModal(data) {
        if (data.mode === 'cheque') {
            const dialogRef = this.dialog.open(PaymentModalComponent, {
                width: '50vw',
                data: { pay: data }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed', result);
                if (result === 'success') {
                    window.location.reload();
                }
            });
        }
    }
};
SalesComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales.component.less */ "./src/app/sales/sales.component.less")).default]
    })
], SalesComponent);

let PaymentModalComponent = class PaymentModalComponent {
    constructor(dialogRef, customerService, inventoryService, snackBar, data) {
        this.dialogRef = dialogRef;
        this.customerService = customerService;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.data = data;
    }
    ngOnInit() {
        this.customerService.getCustomerById(this.data.pay.customerId).subscribe(res => {
            this.customer = res[0];
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    updatePaymentStatus() {
        this.inventoryService.getPaymentsByCustomerId(this.data.pay.customerId).subscribe(res => {
            console.log(res);
            res.forEach(element => {
                if (element._id === this.data.pay._id) {
                    this.inventoryService.updatePayment(element._id).subscribe(resp => {
                        this.snackBar.open(resp.msg, 'Success');
                        this.dialogRef.close('success');
                    }, err => {
                        this.snackBar.open(err, 'Error');
                    });
                }
            });
        });
    }
};
PaymentModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PaymentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/payment-modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales.component.less */ "./src/app/sales/sales.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PaymentModalComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.less":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.less ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-wrapper {\n  width: 100px;\n  height: calc(100vh - 70px);\n  background-color: #fff;\n  box-shadow: 0px 23px 21px 5px #aaa;\n  position: fixed;\n  top: 70px;\n}\n.sidebar-wrapper .item {\n  padding: 20px;\n  border-bottom: 1px solid #ddd;\n}\n.sidebar-wrapper .item a {\n  color: #000;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n}\n.sidebar-wrapper .item a i {\n  display: block;\n  font-size: 27px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9DOi9Vc2Vycy9MZW5vdm8vRG93bmxvYWRzL211ZHluZXctbWFpbi9tdWR5L3NyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNDSjtBRFBBO0VBUVEsYUFBQTtFQUNBLDZCQUFBO0FDRVI7QURYQTtFQVdZLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0daO0FEakJBO0VBZ0JnQixjQUFBO0VBQ0EsZUFBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAyM3B4IDIxcHggNXB4ICNhYWE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNzBweDtcbiAgICAuaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnNpZGViYXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAyM3B4IDIxcHggNXB4ICNhYWE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3MHB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuaXRlbSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLnNpZGViYXItd3JhcHBlciAuaXRlbSBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLml0ZW0gYSBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.less */ "./src/app/sidebar/sidebar.component.less")).default]
    })
], SidebarComponent);



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
    production: false,
    apiUrl: 'http://18.188.153.24'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Downloads\mudynew-main\mudy\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map