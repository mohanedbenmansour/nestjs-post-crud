(self["webpackChunkionic_crud"] = self["webpackChunkionic_crud"] || []).push([["src_app_list_list_module_ts"],{

/***/ 5932:
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 4777);




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPageRoutingModule);



/***/ }),

/***/ 2130:
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 5932);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 4777);







let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPageRoutingModule
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage]
    })
], ListPageModule);



/***/ }),

/***/ 4777:
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list.page.html */ 4875);
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss */ 1678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_post_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post-crud.service */ 5971);





let ListPage = class ListPage {
    constructor(postService) {
        this.postService = postService;
        this.posts = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.postService.getPosts().subscribe((response) => {
            this.posts = response;
        });
    }
    removePost(post, i) {
        if (window.confirm('Are you sure')) {
            this.postService.deletePost(post._id)
                .subscribe(() => {
                this.posts.splice(i, 1);
                console.log('post deleted!');
            });
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _services_post_crud_service__WEBPACK_IMPORTED_MODULE_2__.PostCrudService }
];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-list',
        template: _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListPage);



/***/ }),

/***/ 1678:
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4875:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let post of posts; let i = index\">\n      <ion-label>\n        <h2>{{post.title}}</h2>\n        <h3>{{post.content}}</h3>\n        <h3>{{post.uploadTime}}</h3>\n      </ion-label>\n\n      <div class=\"item-note\" item-end>\n        <ion-button [routerLink]=\"['/update/', post._id]\">\n          <ion-icon name=\"create\" style=\"zoom: 1\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"removePost(post, i)\">\n          <ion-icon name=\"trash\" style=\"zoom: 1\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_list_list_module_ts.js.map