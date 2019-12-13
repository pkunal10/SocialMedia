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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/frame-work/frame-work.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/frame-work/frame-work.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n    aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" routerLink=\"home\">Social Media</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/userProfile\" *ngIf=\"userService.isLogedin()\"><i class=\"far fa-user\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signup\" *ngIf=\"!userService.isLogedin()\"><i class=\"fas fa-user-plus\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"logOut()\" title=\"Log out\" *ngIf=\"userService.isLogedin()\"><i class=\"fa fa-sign-out\"></i></a>\n      </li>\n    </ul>\n    <div><img class=\"rounded-circle\" width=\"45\" src=\"/userImages/{{user.profilePic}}\" alt=\"\">  {{user.fName}} </div>&nbsp;&nbsp;&nbsp;&nbsp;\n    <form class=\"form-inline my-2 my-lg-0\" *ngIf=\"userService.isLogedin()\" class=\"searchBox\">      \n      <input class=\"form-control mr-sm-5\" [(ngModel)]=\"search.item\" (keyup)=\"keyPressSearch()\" [ngModelOptions]=\"{standalone:true}\" id='search'\n        type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\n      <div class='search-drop-down' *ngIf=\"isShowAutoComplete\">\n        <div *ngFor=\"let s of userNames | searchFilter: getSearchValue()\">\n          <span (click)=\"searchDropdownClick(s)\">{{s}}</span>\n        </div>\n      </div>\n    </form>\n    \n  </div>\n  \n</nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container martop\">\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"/userImages/{{user.profilePic}}\" class=\"rounded-circle profilePic\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">{{user.fName}} {{user.lName}}</h5>\n                    <p class=\"card-text text-center\">{{user.gender}}</p>\n                    <hr>\n                    <p><i class=\"fa fa-home\"></i> Lives in {{user.address.city}},{{user.address.state}}</p>\n                    <p class=\"card-text\"><strong>Followers</strong> {{user.followers.length}}</p>\n                    <p class=\"card-text\"><strong>Following</strong> {{user.following.length}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-8\">\n            <app-post-upload [user]=\"user\"></app-post-upload>\n            <app-posts-list [userId]=\"user._id\"></app-posts-list>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-upload/post-upload.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-upload/post-upload.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\n\n    <div class=\"container\">\n        <h2>Create Post</h2>\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#post\">Post</a></li>\n            <li><a data-toggle=\"tab\" href=\"#photovideo\">Photo/Video</a></li>\n        </ul>\n\n        <div class=\"tab-content\">\n            <div id=\"post\" class=\"tab-pane fade in active\">                \n                <textarea rows=\"4\" class=\"form-control\" id=\"caption\" placeholder=\"Write Something....\"></textarea>\n                <i class=\"btn btn-success fa fa-plus\" (click)=\"createPost()\"></i>\n            </div>\n            <div id=\"photovideo\" class=\"tab-pane fade\">                \n                <textarea rows=\"4\" class=\"form-control\" id=\"captionMedia\" placeholder=\"Write Something....\"></textarea>\n                <input type=\"file\" class=\"form-control\" id=\"media\">\n                <i class=\"btn btn-success fa fa-plus\" (click)=\"createPostWithMedia()\"></i>\n            </div>\n        </div>\n    </div>\n\n</div> -->\n\n\n<div class=\"card gedf-card\">\n    <div class=\"card-header\">\n        <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"posts-tab\" data-toggle=\"tab\" href=\"#posts\" role=\"tab\"\n                    aria-controls=\"posts\" aria-selected=\"true\">Create Post</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"images-tab\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"images\"\n                    aria-selected=\"false\" href=\"#imagevideo\">Image/Video</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"posts\" role=\"tabpanel\" aria-labelledby=\"posts-tab\">\n                <div class=\"form-group\">\n                    <label class=\"sr-only\" for=\"message\">post</label>\n                    <textarea class=\"form-control\" id=\"caption\" rows=\"3\"\n                        placeholder=\"What are you thinking?\"></textarea>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createPost()\">share</button>\n\n            </div>\n            <div class=\"tab-pane fade\" id=\"imagevideo\" role=\"tabpanel\" aria-labelledby=\"images-tab\">\n                <textarea class=\"form-control\" id=\"captionMedia\" rows=\"3\"\n                    placeholder=\"What are you thinking?\"></textarea>\n                <div class=\"form-group\">\n                    <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"media\">\n                        <label class=\"custom-file-label\" for=\"media\">Upload image / video</label>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"createPostWithMedia()\">share</button>\n                <div class=\"py-4\"></div>\n            </div>\n        </div>\n        <div class=\"btn-toolbar justify-content-between\">\n            <div class=\"btn-group\">\n                <!-- <button type=\"submit\" class=\"btn btn-primary\">share</button> -->\n            </div>\n            <div class=\"btn-group\">\n                <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-link dropdown-toggle\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fa fa-globe\"></i>\n                </button>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDrop1\">\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-globe\"></i> Public</a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-users\"></i> Friends</a>\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Just me</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts-list/posts-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts-list/posts-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card gedf-card\" *ngFor=\"let userPost of postsList\">\n    <div class=\"card-header\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"mr-2\">\n                    <img class=\"rounded-circle\" width=\"45\" src=\"/userImages/{{userPost.user.profilePic}}\" alt=\"\">\n                </div>\n                <div class=\"ml-2\">\n                    <div class=\"h5 m-0\">{{userPost.user.fName}} {{userPost.user.lName}}</div>\n                    <!-- <div class=\"h7 text-muted\">Miracles Lee Cross</div> -->\n                </div>\n            </div>\n            <div>\n                <div class=\"dropdown\">\n                    <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"gedf-drop1\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-ellipsis-h\"></i>\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"gedf-drop1\">\n                        <div class=\"h6 dropdown-header\">Configuration</div>\n                        <a class=\"dropdown-item\" href=\"#\">Save</a>\n                        <a class=\"dropdown-item\" href=\"#\">Hide</a>\n                        <a class=\"dropdown-item\" href=\"#\">Report</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"card-body\">\n        <div class=\"text-muted h7 mb-2\"> <i class=\"fa fa-clock-o\"></i>  {{userPost.datePosted | date:'medium'}}</div>\n        <!-- <a class=\"card-link\" href=\"#\">\n            <h5 class=\"card-title\">Lorem ipsum dolor sit amet, consectetur adip.</h5>\n        </a> -->\n\n        <p class=\"card-text\">\n            {{userPost.caption}}\n        </p>\n        <div *ngIf=\"userPost.media!=''&&userPost.mediaType=='Image'\"><img class=\"postImage\" src=\"/userPosts/{{userPost.media}}\"></div>\n        <div *ngIf=\"userPost.media!=''&&userPost.mediaType=='Video'\">\n            <video height=\"280\" controls class=\"postVideo\">\n                <source src=\"/userPosts/{{userPost.media}}\" type=\"video/mp4\">                \n                Your browser does not support the video tag.\n            </video>\n\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <a (click)=\"likeUnlikeClicked(userPost)\" class=\"card-link\"><i [ngClass]=\"userPost.class\"></i> {{userPost.likes.length}}</a>\n        <a href=\"#\" class=\"card-link\"><i class=\"fa fa-comment\"></i> Comment</a>\n        <a href=\"#\" class=\"card-link\"><i class=\"fa fa-mail-forward\"></i> Share</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-list/search-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-list/search-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"martop row\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-4\">\n        <div class=\"card gedf-card\" *ngFor=\"let user of searchList\">\n            <div class=\"card-header\" (click)=\"userClicked(user)\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <div class=\"mr-2\">\n                            <img class=\"rounded-circle\" width=\"45\" src=\"/userImages/{{user.profilePic}}\" alt=\"\">\n                        </div>\n                        <div class=\"ml-2\">\n                            <div class=\"h5 m-0\">{{user.fName}} {{user.lName}}</div>\n                            <!-- <div class=\"h7 text-muted\">Miracles Lee Cross</div> -->\n                            <p><i class=\"fa fa-home\"></i> Lives in {{user.address.city}},{{user.address.state}}</p>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"dropdown\">\n                            <div class=\"followingClassForSearch\"\n                                *ngIf=\"user._id!=loggedInUserId&&user.btnType=='none'\">Following</div>                            \n                            <button (click)=\"followBtnClick(user._id)\" *ngIf=\"user._id!=loggedInUserId&&user.btnType!='none'\" class=\"btn btn-primary\"\n                                type=\"button\">\n                                <span *ngIf=\"user.btnType=='follow back'\">Follow back</span>\n                                <span *ngIf=\"user.btnType=='follow'\">Follow</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"col-4\"></div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container martop\">\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"/userImages/{{user.profilePic}}\" class=\"rounded-circle profilePic\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">{{user.fName}} {{user.lName}}</h5>\n                    <p class=\"card-text text-center\">{{user.gender}}</p>\n                    <hr>\n                    <p><i class=\"fa fa-home\"></i> Lives in {{user.address.city}},{{user.address.state}}</p>\n                    <p class=\"card-text\"><strong>Followers</strong> {{user.followers.length}}</p>\n                    <p class=\"card-text\"><strong>Following</strong> {{user.following.length}}</p>\n\n                    <div class=\"followingClass\"\n                        *ngIf=\"user._id!=loggedInUserId&&user.btnType=='none'\">Following</div>\n                    <button (click)=\"followBtnClick('user._id')\" *ngIf=\"user._id!=loggedInUserId&&user.btnType!='none'\" class=\"btn btnFollow btn-primary\"\n                        type=\"button\">\n                        <span *ngIf=\"user.btnType=='follow back'\">Follow back</span>\n                        <span *ngIf=\"user.btnType=='follow'\">Follow</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-8\">\n            <app-posts-list [userId]=\"user._id\" [source]=\"'userProfile'\"></app-posts-list>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container martop\">\n    <div class=\"row\">\n        <div class=\"col-lg-5\">\n            <h2>Login</h2>\n\n            <form (ngSubmit)=\"loginform.valid&&login(model)\" #loginform=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"emailId\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" #emailId=\"ngModel\" [pattern]=\"emailRegex\" required\n                        id=\"emailId\" [(ngModel)]=\"model.emailId\" name=\"emailId\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter email\">\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone\n                        else.</small>\n                    <div class=\"text-danger\" *ngIf=\"loginform.submitted&&emailId.erroes?.pattern\">\n                        Invalid Email Address.\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" minlength=\"5\" #password=\"ngModel\" [(ngModel)]=\"model.password\"\n                        name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                </div>\n                <div class=\"text-danger\" *ngIf=\"loginform.submitted&&password.erroes?.minlength\">\n                    Password should be of atleast 5 character.\n                </div>\n                <!-- <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n                </div> -->\n                <button type=\"submit\" class=\"btn btn-primary\">Log in</button>\n            </form>\n\n        </div>\n        <div class=\"col-lg-7\">\n            <h2>Register</h2>\n\n            <form>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"fName\">First Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"fName\" placeholder=\"First Name\" name=\"fName\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"lName\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"lName\" placeholder=\"Last Name\" name=\"lName\">\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"emailIdReg\">Email Id</label>\n                        <input type=\"email\" class=\"form-control\" id=\"emailIdReg\" placeholder=\"Email Id\" name=\"emailIdReg\">\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"mobile\">Mobile</label>\n                        <input type=\"number\" class=\"form-control\" id=\"mobile\" placeholder=\"Mobile\" name=\"mobile\">\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"gender\">Gender</label>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" (change)=\"radioCheck('Male')\" type=\"radio\" checked\n                                name=\"gender\" id=\"gender\" value=\"Male\">\n                            <label class=\"form-check-label\" for=\"male\">Male</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"gender\" (change)=\"radioCheck('Female')\"\n                                id=\"gender\" value=\"Female\">\n                            <label class=\"form-check-label\" for=\"Female\">Female</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"line1\">Address</label>\n                    <input type=\"text\" class=\"form-control\" id=\"line1\" placeholder=\"Line 1\" name=\"line1\">\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"city\">City</label>\n                        <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\">\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"state\">State</label>\n                        <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\">\n                    </div>\n                    <div class=\"form-group col-md-2\">\n                        <label for=\"country\">Country</label>\n                        <input type=\"text\" class=\"form-control\" id=\"country\" name=\"country\">\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"passwordReg\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"passwordReg\" placeholder=\"Password\"\n                            name=\"passwordReg\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"profilePic\">Select Image</label>\n                        <input type=\"file\" class=\"form-control\" id=\"profilePic\" name=\"profilePic\">\n                    </div>\n                </div>\n                <button type=\"button\" (click)=\"register()\" class=\"btn btn-primary\">Sign Up</button>\n            </form>\n\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./frame-work/frame-work.component */ "./src/app/frame-work/frame-work.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _post_upload_post_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-upload/post-upload.component */ "./src/app/post-upload/post-upload.component.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "./src/app/posts-list/posts-list.component.ts");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-filter.pipe */ "./src/app/search-filter.pipe.ts");
/* harmony import */ var _search_list_search_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-list/search-list.component */ "./src/app/search-list/search-list.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_post_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-post.service */ "./src/app/user-post.service.ts");



// import {FileSelectDirective} from 'ng2-file-upload';
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_7__["FrameWorkComponent"],
            _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _post_upload_post_upload_component__WEBPACK_IMPORTED_MODULE_13__["PostUploadComponent"],
            _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_14__["PostsListComponent"],
            _search_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchFilterPipe"],
            _search_list_search_list_component__WEBPACK_IMPORTED_MODULE_16__["SearchListComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"]
                },
                {
                    path: 'signup',
                    component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"]
                },
                // {
                //   path: 'home',
                //   component: HomeComponent, canActivate: [AuthGuard]
                // },
                // {
                //   path: 'search/:searchTerm',
                //   component: SearchListComponent, canActivate: [AuthGuard]
                // },
                // {
                //   path: 'userProfile',
                //   component: UserProfileComponent, canActivate: [AuthGuard]
                // },
                {
                    path: '',
                    component: _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_7__["FrameWorkComponent"],
                    children: [
                        {
                            path: 'home',
                            component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                        },
                        {
                            path: 'search/:searchTerm',
                            component: _search_list_search_list_component__WEBPACK_IMPORTED_MODULE_16__["SearchListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                        },
                        {
                            path: 'userProfile',
                            component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                        },
                    ]
                }
            ])
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
                multi: true
            }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _user_post_service__WEBPACK_IMPORTED_MODULE_18__["UserPostService"]],
        bootstrap: [_frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_7__["FrameWorkComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.userService.isLogedin()) {
            this.router.navigate(['signup']);
            this.userService.deleteToken();
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let AuthInterceptor = class AuthInterceptor {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    intercept(req, next) {
        if (req.headers.get('NoAuth')) {
            console.log(req);
            return next.handle(req.clone());
        }
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => { }, err => {
                if (err.error.auth == false) {
                    this.router.navigateByUrl('/login');
                }
            }));
        }
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/frame-work/frame-work.component.css":
/*!*****************************************************!*\
  !*** ./src/app/frame-work/frame-work.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1lLXdvcmsvZnJhbWUtd29yay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/frame-work/frame-work.component.ts":
/*!****************************************************!*\
  !*** ./src/app/frame-work/frame-work.component.ts ***!
  \****************************************************/
/*! exports provided: FrameWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameWorkComponent", function() { return FrameWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "../node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "../node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");


// import { Http, Response } from '@angular/http';






let FrameWorkComponent = class FrameWorkComponent {
    constructor(http, router, elementRef, userService) {
        this.http = http;
        this.router = router;
        this.elementRef = elementRef;
        this.userService = userService;
        this.userNames = [];
        this.isShowAutoComplete = false;
        this.search = {
            item: ''
        };
    }
    ngOnInit() {
        // this.userService.deleteToken();
        // this.search.item = "";
        // if (this.user==null) {
        //   let timer = Observable.timer(1000, 5000);
        //   timer.subscribe(() => 
        //   this.checkIsLoggedIn());
        // }
        this.isLoggedIn = this.userService.isLogedin();
        if (this.isLoggedIn) {
            this.getUserNames();
        }
        if (this.isLoggedIn) {
            this.userService.getUserById().subscribe(data => {
                this.postExecuteGetUserById(data);
            });
        }
    }
    checkIsLoggedIn() {
        this.isLoggedIn = this.userService.isLogedin();
        if (this.isLoggedIn) {
            this.userService.getUserById().subscribe(data => {
                this.postExecuteGetUserById(data);
            });
        }
    }
    postExecuteGetUserById(data) {
        this.user = data.data;
    }
    keyPressSearch() {
        if (this.search.item == "") {
            this.isShowAutoComplete = false;
        }
        else {
            this.isShowAutoComplete = true;
        }
    }
    getUserNames() {
        this.userService.getUSerNames().subscribe(data => {
            this.postExecuteGetUserNames(data);
        });
    }
    postExecuteGetUserNames(data) {
        data.data.forEach(itm => {
            this.userNames.push(itm.fName + " " + itm.lName);
        });
    }
    test(input) {
        console.log(input + " " + this.userService.isLogedin());
        this.isLoggedIn = this.userService.isLogedin();
        console.log(this.isLoggedIn);
    }
    // postExecute(res: any) {
    //   console.log(res.msg + "out subscribe");
    //   console.log(res.data.fName + "out subscribe");
    // }
    getSearchValue() {
        // let ipSearch = this.elementRef.nativeElement.querySelector('#search');
        // return ipSearch.value;
        return this.search.item;
    }
    searchDropdownClick(searchItem) {
        this.search.item = searchItem;
        this.isShowAutoComplete = false;
        this.router.navigate(['search/' + searchItem]);
    }
    logOut() {
        this.userService.deleteToken();
        this.router.navigate(['']);
    }
};
FrameWorkComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
FrameWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frame-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./frame-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/frame-work/frame-work.component.html")).default,
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./frame-work.component.css */ "./src/app/frame-work/frame-work.component.css")).default]
    })
], FrameWorkComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frame-work/frame-work.component */ "./src/app/frame-work/frame-work.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




let HomeComponent = class HomeComponent {
    constructor(frameWorkComponent, userService) {
        this.frameWorkComponent = frameWorkComponent;
        this.userService = userService;
    }
    ngOnInit() {
        // this.frameWorkComponent.isLoggedIn = this.userService.isLogedin();
        // debugger
        // this.frameWorkComponent.test("i am in homee");
        this.loadUserProfile();
    }
    loadUserProfile() {
        this.userService.getUserById().subscribe(data => {
            this.postExecute(data);
        });
    }
    postExecute(data) {
        if (data.status == "success") {
            this.user = data.data;
        }
        else {
            alert(data.msg);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_2__["FrameWorkComponent"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        providers: [_frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_2__["FrameWorkComponent"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/post-upload/post-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/post-upload/post-upload.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtdXBsb2FkL3Bvc3QtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/post-upload/post-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/post-upload/post-upload.component.ts ***!
  \******************************************************/
/*! exports provided: PostUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostUploadComponent", function() { return PostUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-post.service */ "./src/app/user-post.service.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts-list/posts-list.component */ "./src/app/posts-list/posts-list.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PostUploadComponent = class PostUploadComponent {
    constructor(elementRef, router, postListComponent, userPostServive, userService) {
        this.elementRef = elementRef;
        this.router = router;
        this.postListComponent = postListComponent;
        this.userPostServive = userPostServive;
        this.userService = userService;
        this.postData = {
            userId: '',
            caption: ''
        };
    }
    ngOnInit() {
    }
    createPost() {
        this.captionInput = this.elementRef.nativeElement.querySelector("#caption");
        if (this.captionInput.value == "") {
            alert("Please write something");
        }
        else {
            // this.postData.userId = this.user._id;
            this.postData.userId = this.userService.getUserPayload().userId;
            this.postData.caption = this.captionInput.value;
            this.userPostServive.createpost(this.postData).subscribe(data => {
                this.postExecuteCreatePost(data);
            });
        }
    }
    postExecuteCreatePost(data) {
        if (data.status == "error") {
            alert(data.msg);
        }
        else {
            this.userPostServive.setRefreshNeed(true);
            alert("posted");
            this.captionInput.value = "";
            // debugger
            // this.router.navigate(['home']);
            // this.router.navigate(['home']);
            // this.router.navigateByUrl('userProfile', { skipLocationChange: true });
            // this.router.navigate(['home']);
            // this.postListComponent.displayUserPosts();
        }
    }
    createPostWithMedia() {
        this.captionInputWithMedia = this.elementRef.nativeElement.querySelector("#captionMedia");
        this.mediaInput = this.elementRef.nativeElement.querySelector("#media");
        let formData = new FormData();
        if (this.captionInputWithMedia.value == "") {
            alert("Please write something");
        }
        else if (this.mediaInput.files.length <= 0) {
            alert("Please slect any media");
        }
        else {
            formData.append('media', this.mediaInput.files.item(0));
            // formData.append('userId', this.user._id);
            formData.append('userId', this.userService.getUserPayload().userId);
            formData.append('caption', this.captionInputWithMedia.value);
            this.userPostServive.createpostWithMedia(formData).subscribe(data => {
                this.postExecuteCreatePostWithMedia(data);
            });
        }
    }
    postExecuteCreatePostWithMedia(data) {
        if (data.status == "error") {
            alert(data.msg);
        }
        else {
            this.userPostServive.setRefreshNeed(true);
            alert("posted");
            this.captionInputWithMedia.value = "";
            this.mediaInput.value = "";
        }
    }
};
PostUploadComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__["PostsListComponent"] },
    { type: _user_post_service__WEBPACK_IMPORTED_MODULE_2__["UserPostService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostUploadComponent.prototype, "user", void 0);
PostUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-upload/post-upload.component.html")).default,
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__["PostsListComponent"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-upload.component.css */ "./src/app/post-upload/post-upload.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_user_post_service__WEBPACK_IMPORTED_MODULE_2__["UserPostService"]]
    })
], PostUploadComponent);



/***/ }),

/***/ "./src/app/posts-list/posts-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/posts-list/posts-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/posts-list/posts-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/posts-list/posts-list.component.ts ***!
  \****************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-post.service */ "./src/app/user-post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "../node_modules/rxjs-compat/_esm2015/Rx.js");





let PostsListComponent = class PostsListComponent {
    constructor(userPostService, userService) {
        this.userPostService = userPostService;
        this.userService = userService;
        this.source = "";
        this.postsList = [];
        this.likeUnlikeData = {
            userId: '',
            postId: ''
        };
    }
    ngOnInit() {
        console.log(this.userId + "from post list");
        let timer = rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].timer(1000, 5000);
        timer.subscribe(() => {
            if (this.userPostService.getRefreshNeed()) {
                this.displayUserPosts();
                this.userPostService.setRefreshNeed(false);
            }
        });
        // this.userPostService.refreshNeeded$.subscribe(()=>{
        //   this.displayUserPosts();
        // })
        this.displayUserPosts();
    }
    displayUserPosts() {
        this.postsListByUserId();
        if (this.source != "userProfile") {
            this.postsListByFollowingIds();
        }
        ;
    }
    setClasses() {
        this.postsList.forEach(post => {
            if (post.likes.length <= 0) {
                post.class = "far fa-heart";
            }
            post.likes.forEach(id => {
                if (id == this.userService.getUserPayload().userId) {
                    post.class = "fas fa-heart";
                }
                else {
                    post.class = "far fa-heart";
                }
            });
        });
    }
    likeUnlikeClicked(post) {
        this.likeUnlikeData.userId = this.userService.getUserPayload().userId;
        this.likeUnlikeData.postId = post._id;
        this.userPostService.likeUnlike(this.likeUnlikeData).subscribe((data) => {
            if (data.status == "success") {
                // this.postsList.length=0;
                // this.displayUserPosts();       
                this.postsList.find(item => item._id == post._id).likes = data.data.likes;
                this.setClasses();
            }
        });
        // this.userPostService.likeUnlike(this.likeUnlikeData);
    }
    // postExecuteGetUserByIdForPostList(data:any)
    // {
    // }
    postsListByUserId() {
        // this.userPostService.getPostsByUserId(this.userService.getUserPayload().userId).subscribe(data => {
        this.userPostService.getPostsByUserId(this.userId).subscribe(data => {
            this.postExecutePostsListByUserId(data);
        });
    }
    postExecutePostsListByUserId(data) {
        // this.postsList = data.data;
        data.data.forEach(userPost => {
            this.userService.getUserByIdParam(userPost.userId).subscribe((data) => {
                userPost.user = data.data;
            });
            this.postsList.push(userPost);
            this.setClasses();
        });
    }
    postsListByFollowingIds() {
        // this.userPostService.getPostsByFollowingIds(this.userService.getUserPayload().userId).subscribe(data => {
        this.userPostService.getPostsByFollowingIds(this.userId).subscribe(data => {
            this.postExecutePostsListByFollowignIds(data);
        });
    }
    postExecutePostsListByFollowignIds(data) {
        data.data.forEach(userPost => {
            this.userService.getUserByIdParam(userPost.userId).subscribe((data) => {
                console.log(data);
                userPost.user = data.data;
            });
            this.postsList.push(userPost);
        });
        this.postsList.sort((val1, val2) => {
            return new Date(val2.datePosted).getTime() - new Date(val1.datePosted).getTime();
        });
        this.setClasses();
    }
};
PostsListComponent.ctorParameters = () => [
    { type: _user_post_service__WEBPACK_IMPORTED_MODULE_2__["UserPostService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostsListComponent.prototype, "userId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostsListComponent.prototype, "source", void 0);
PostsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts-list/posts-list.component.html")).default,
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-list.component.css */ "./src/app/posts-list/posts-list.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_user_post_service__WEBPACK_IMPORTED_MODULE_2__["UserPostService"]]
    })
], PostsListComponent);



/***/ }),

/***/ "./src/app/search-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/search-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterPipe = class SearchFilterPipe {
    transform(value, search) {
        if (!search) {
            return value;
        }
        let solution = value.filter(v => {
            if (!v) {
                return;
            }
            return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return solution;
    }
};
SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchFilter'
    })
], SearchFilterPipe);



/***/ }),

/***/ "./src/app/search-list/search-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-list/search-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1saXN0L3NlYXJjaC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/search-list/search-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-list/search-list.component.ts ***!
  \******************************************************/
/*! exports provided: SearchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchListComponent", function() { return SearchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");





let SearchListComponent = class SearchListComponent {
    constructor(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.searchTerm = "";
        this.searchList = [_user__WEBPACK_IMPORTED_MODULE_4__["User"]];
        this.sepratedSearchTerm = {
            fName: '',
            lName: ''
        };
        this.followBtnData = {
            loggedInUserId: '',
            clickedUserId: ''
        };
    }
    ngOnInit() {
        this.loggedInUserId = this.userService.getUserPayload().userId;
        this.getSearchList();
    }
    getSearchList() {
        this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
        this.sepratedSearchTerm.fName = this.searchTerm.split(" ")[0];
        this.sepratedSearchTerm.lName = this.searchTerm.split(" ")[1];
        this.userService.getSearchList(this.sepratedSearchTerm).subscribe(data => {
            this.postExecuteGetSearchList(data);
        });
    }
    postExecuteGetSearchList(data) {
        if (data.status == "success") {
            data.data.forEach((itm) => {
                itm.btnType = "follow";
                itm.followers.forEach(follower => {
                    if (this.loggedInUserId == follower) {
                        itm.btnType = "none";
                    }
                });
                itm.following.forEach(following => {
                    if (this.loggedInUserId == following && itm.btnType == "follow") {
                        itm.btnType = "follow back";
                    }
                });
            });
            this.searchList = data.data;
        }
        else if (data.status == "No User") {
        }
        else {
            alert(data.msg);
        }
    }
    userClicked(user) {
        // this.router.navigate(['/userProfile/' + user]);
        console.log(user.fName);
        this.userService.setUser(user);
        this.router.navigate(['userProfile']);
    }
    followBtnClick(clickedUserId) {
        debugger;
        this.followBtnData.loggedInUserId = this.loggedInUserId;
        this.followBtnData.clickedUserId = clickedUserId;
        this.userService.followBtnClick(this.followBtnData).subscribe(data => {
            this.postExecuteFollowBtnClick(data);
        });
    }
    postExecuteFollowBtnClick(data) {
        if (data.status == "success") {
            this.router.navigate(['home']);
        }
        else {
            alert(data.msg);
        }
    }
};
SearchListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
SearchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-list/search-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-list.component.css */ "./src/app/search-list/search-list.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
    })
], SearchListComponent);



/***/ }),

/***/ "./src/app/user-post.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-post.service.ts ***!
  \**************************************/
/*! exports provided: UserPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostService", function() { return UserPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let UserPostService = class UserPostService {
    constructor(http) {
        this.http = http;
        this._refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.refreshNeed = false;
        this.URLCREATEPOST = "http://localhost:3000/api/postwithoutmedia";
        this.URLCREATEPOSTWITHMEDIA = "http://localhost:3000/api/postwithmedia";
        this.URL_GET_POSTS_BY_USERID = "http://localhost:3000/api/getPostsByUserId";
        this.URL_GET_POSTS_BY_FOLLOWINGIDS = "http://localhost:3000/api/getPostsByFollowingIds";
        this.URL_LIKE_UNLIKE = "http://localhost:3000/api/likeUnlike";
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    setRefreshNeed(isNeed) {
        this.refreshNeed = isNeed;
    }
    getRefreshNeed() {
        return this.refreshNeed;
    }
    get refreshNeeded$() {
        return this._refreshNeeded$;
    }
    createpost(postData) {
        return this.http.post(this.URLCREATEPOST, postData);
    }
    createpostWithMedia(formdata) {
        return this.http.post(this.URLCREATEPOSTWITHMEDIA, formdata);
    }
    getPostsByUserId(userId) {
        // return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId).pipe(tap(() => {
        //   this.refreshNeeded$.next();
        // }))
        return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId);
    }
    getPostsByFollowingIds(userId) {
        // return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId).pipe(tap(() => {
        //   this.refreshNeeded$.next();
        // }))
        return this.http.get(this.URL_GET_POSTS_BY_FOLLOWINGIDS + "/" + userId);
    }
    likeUnlike(data) {
        return this.http.post(this.URL_LIKE_UNLIKE, data);
    }
};
UserPostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserPostService);



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _user_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-post.service */ "./src/app/user-post.service.ts");





let UserProfileComponent = class UserProfileComponent {
    constructor(userService, userPostService, route, router) {
        this.userService = userService;
        this.userPostService = userPostService;
        this.route = route;
        this.router = router;
        this.followBtnData = {
            loggedInUserId: '',
            clickedUserId: ''
        };
    }
    ngOnInit() {
        debugger;
        this.loggedInUserId = this.userService.getUserPayload().userId;
        // this.user=this.route.snapshot.paramMap.get('user');
        this.user = this.userService.getUser();
        console.log(this.user + "selected user");
    }
    followBtnClick(clickedUserId) {
        this.followBtnData.loggedInUserId = this.loggedInUserId;
        this.followBtnData.clickedUserId = clickedUserId;
        this.userService.followBtnClick(this.followBtnData).subscribe(data => {
            this.postExecuteFollowBtnClick(data);
        });
    }
    postExecuteFollowBtnClick(data) {
        if (data.status == "success") {
            this.router.navigate(['home']);
        }
        else {
            alert(data.msg);
        }
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _user_post_service__WEBPACK_IMPORTED_MODULE_4__["UserPostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
        // providers:[UserPostService,UserService]
        providers: [_user_post_service__WEBPACK_IMPORTED_MODULE_4__["UserPostService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/user-register/user-register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-register/user-register.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-register/user-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-register/user-register.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frame-work/frame-work.component */ "./src/app/frame-work/frame-work.component.ts");



// import {Http} from '@angular/http';



let UserRegisterComponent = class UserRegisterComponent {
    constructor(http, frameWorkComponent, router, elementRef, userService) {
        this.http = http;
        this.frameWorkComponent = frameWorkComponent;
        this.router = router;
        this.elementRef = elementRef;
        this.userService = userService;
        this.slectedGender = "Male";
        this.isExist = "";
        this.model = {
            emailId: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
    }
    radioCheck(gender) {
        this.slectedGender = gender;
        //  alert(this.slectedGender);
    }
    register() {
        //locate the file element meant for the file upload.
        this.inputEl = this.elementRef.nativeElement.querySelector('#profilePic');
        this.inputFname = this.elementRef.nativeElement.querySelector('#fName');
        this.inputLname = this.elementRef.nativeElement.querySelector('#lName');
        this.inputEmailId = this.elementRef.nativeElement.querySelector('#emailIdReg');
        this.inputMobile = this.elementRef.nativeElement.querySelector('#mobile');
        this.inputLine1 = this.elementRef.nativeElement.querySelector('#line1');
        this.inputCity = this.elementRef.nativeElement.querySelector('#city');
        this.inputState = this.elementRef.nativeElement.querySelector('#state');
        this.inputCountry = this.elementRef.nativeElement.querySelector('#country');
        this.inputPassword = this.elementRef.nativeElement.querySelector('#passwordReg');
        //get the total amount of files attached to the file input.
        let fileCount = this.inputEl.files.length;
        debugger;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected      
            formData.append('userImage', this.inputEl.files.item(0));
            formData.append('fName', this.inputFname.value);
            formData.append('lName', this.inputLname.value);
            formData.append('emailId', this.inputEmailId.value);
            formData.append('mobile', this.inputMobile.value);
            formData.append('gender', this.slectedGender);
            formData.append('line1', this.inputLine1.value);
            formData.append('city', this.inputCity.value);
            formData.append('state', this.inputState.value);
            formData.append('country', this.inputCountry.value);
            formData.append('password', this.inputPassword.value);
            this.userService.createUser(formData).subscribe(data => {
                this.postExecute(data);
            });
            // console.log(this.res,"success")
            // }
            // else {
            //   alert("Email id already exist.")
            // }
        }
        else {
            alert('Select profile pic.');
        }
    }
    postExecute(res) {
        if (res.status == "success") {
            alert(res.msg);
            this.clear();
        }
        else {
            alert(res.msg);
        }
    }
    clear() {
        this.inputEl.value = "";
        this.inputFname.value = "";
        this.inputLname.value = "";
        this.inputEmailId.value = "";
        this.inputMobile.value = "";
        this.inputLine1.value = "";
        this.inputCity.value = "";
        this.inputState.value = "";
        this.inputCountry.value = "";
        this.inputPassword.value = "";
    }
    login(model) {
        this.userService.login(model).subscribe(data => {
            this.postLogin(data);
        });
    }
    postLogin(res) {
        if (res.status == "success") {
            this.userService.setToken(res.token);
            this.router.navigate(['home']);
        }
        else {
            alert(res.msg);
        }
    }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_5__["FrameWorkComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-register/user-register.component.html")).default,
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _frame_work_frame_work_component__WEBPACK_IMPORTED_MODULE_5__["FrameWorkComponent"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-register.component.css */ "./src/app/user-register/user-register.component.css")).default]
    })
], UserRegisterComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// import { Http } from '@angular/http';

let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        this.URLUSER = 'http://localhost:3000/api/user';
        this.URLEMAILEXIST = 'http://localhost:3000/api/isEmailExist/';
        this.LOGIN = 'http://localhost:3000/api/login';
        this.URL_GETUSERNAMES = 'http://localhost:3000/api/getUserNames';
        this.URL_GET_SEARCH_LIST = 'http://localhost:3000/api/getSearchList';
        this.URL_FOLLOW_BTN_CLICK = 'http://localhost:3000/api/followBtnClicked';
    }
    createUser(formdata) {
        return this.http.post(this.URLUSER, formdata, this.noAuthHeader);
    }
    getUserById() {
        return this.http.get(this.URLUSER + "/" + this.getUserPayload().userId);
    }
    getUserByIdParam(userId) {
        return this.http.get(this.URLUSER + "/" + userId);
    }
    // isEmailExist(email: string) {    
    //   return this.http.get(this.URLEMAILEXIST + email);
    // }
    login(credential) {
        return this.http.post(this.LOGIN, credential, this.noAuthHeader);
    }
    setToken(token) {
        localStorage.setItem("token", token);
    }
    getToken() {
        return localStorage.getItem("token");
    }
    deleteToken() {
        localStorage.removeItem("token");
    }
    getUserPayload() {
        if (localStorage.getItem("token")) {
            var payload = atob(localStorage.getItem("token").split('.')[1]);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLogedin() {
        var userayLoad = this.getUserPayload();
        if (userayLoad) {
            return userayLoad.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    getUSerNames() {
        return this.http.get(this.URL_GETUSERNAMES);
    }
    getSearchList(data) {
        return this.http.post(this.URL_GET_SEARCH_LIST, data);
    }
    followBtnClick(data) {
        return this.http.post(this.URL_FOLLOW_BTN_CLICK, data);
    }
    setUser(selectedUser) {
        this.user = selectedUser;
    }
    getUser() {
        return this.user;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
        // for angular side
        this.btnType = "follow";
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MEAN Project\SocialMedia\APP_PUBLIC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map