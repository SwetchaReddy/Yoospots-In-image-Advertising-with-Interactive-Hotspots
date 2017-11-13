webpackJsonp([9],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAmbassadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddAmbassadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAmbassadorPage = (function () {
    function AddAmbassadorPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    AddAmbassadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAmbassadorPage');
    };
    AddAmbassadorPage.prototype.addAmbassador = function () {
        this.navCtrl.pop();
        this.presentToast();
    };
    AddAmbassadorPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'The New Ambassador   was added successfully',
            duration: 3000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddAmbassadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-ambassador',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/add-ambassador/add-ambassador.html"*/`<!--\n  Generated template for the AddAmbassadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a New Ambassador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background">\n  <ion-card>\n    <ion-item>\n        <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Name : </b></ion-label> \n         <ion-input item-end type="search" [(ngModel)]="searchName"  placeholder="Enter Name"></ion-input>\n     </ion-item>\n     <ion-item>\n        <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Image : </b></ion-label> \n        <ion-thumbnail >\n            <img src={{selectedImage}} height="20" width="5">\n        </ion-thumbnail>\n        <ion-input item-end type="search"   placeholder="Enter URL"></ion-input>\n        <button class="filter-size" item-end ion-button icon-only (click)="addBrandLogo(abc)" >\n        <ion-icon name="md-add-circle"></ion-icon>\n        </button>     \n    </ion-item>\n     <ion-item>\n        <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Occupation : </b></ion-label> \n         <ion-input item-end type="search" [(ngModel)]="searchOccupation"  placeholder="Enter Occupation"></ion-input>\n     </ion-item>\n     <ion-item>\n        <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Description : </b></ion-label> \n         <ion-input item-end type="search" [(ngModel)]="searchDescription"  placeholder="Enter Description"></ion-input>\n     </ion-item>\n\n     </ion-card>\n\n     <ion-card>\n        <button ion-button block light item-height="80px" (click)="addAmbassador(abc)" [ngStyle]="{\'color\': \'white\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> Train Model</button>\n      </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/add-ambassador/add-ambassador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AddAmbassadorPage);
    return AddAmbassadorPage;
}());

//# sourceMappingURL=add-ambassador.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBrandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_brands_data_brands_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddBrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddBrandPage = (function () {
    function AddBrandPage(navCtrl, navParams, imagePicker, brandsProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.brandsProvider = brandsProvider;
        this.toastCtrl = toastCtrl;
        this.selectedImage = '';
        this.options = {
            maximumImagesCount: 1,
            width: 40,
            height: 40
        };
        this.selectedName = null;
        this.selectedAddress = null;
        this.selectedDesc = null;
        this.selectedAmbName = null;
        this.selectedAmbDesc = null;
        this.selectedAmbOccu = null;
        this.selectedAmbImgURL = null;
    }
    AddBrandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddBrandPage');
    };
    AddBrandPage.prototype.addBrandLogo = function (abc) {
        var _this = this;
        this.imagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.selectedImage = results[i];
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    AddBrandPage.prototype.addBrand = function () {
        var objectToAdd = {};
        objectToAdd['name'] = this.selectedName;
        objectToAdd['imgURL'] = "assets/logoImgs/logo9.png";
        objectToAdd['description'] = this.selectedDesc;
        objectToAdd['address'] = this.selectedAddress;
        objectToAdd['ambassador'] = this.selectedAmbName;
        objectToAdd['amb_desc'] = this.selectedAmbDesc;
        objectToAdd['amb_occup'] = this.selectedAmbOccu;
        objectToAdd['amb_imgURL'] = "assets/logoImgs/logo10.png";
        var result = this.brandsProvider.saveBrand(objectToAdd);
        if (result.status == true) {
            this.presentToast();
            //if this show message success
            console.log("YEAH SAVED");
        }
        else {
            console.log("NOT SAVED");
            //Show message failure try again.
        }
        this.navCtrl.pop();
    };
    AddBrandPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'The new Brand  ' + this.selectedName + '  was added successfully',
            duration: 3000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddBrandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-brand',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/add-brand/add-brand.html"*/`<!--\n  Generated template for the AddBrandPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a New Brand</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background">\n  <ion-card>\n      <ion-item color="black">\n             <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Name : </b></ion-label> \n              <ion-input item-end type="search" [(ngModel)]="selectedName"  placeholder="Enter Brand Name"></ion-input>\n      </ion-item>\n  <ion-item>\n            <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Logo : </b></ion-label> \n          <ion-thumbnail >\n            <img src={{selectedImage}} height="20" width="5">\n         </ion-thumbnail>\n         <ion-input item-end type="search"   placeholder="Enter URL"></ion-input>\n      <button class="filter-size" item-end ion-button icon-only (click)="addBrandLogo(abc)" ><ion-icon name="md-add-circle"></ion-icon></button>\n     </ion-item>\n \n     <ion-item>\n         <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Address:  </b></ion-label> \n          <ion-input item-end type="search" [(ngModel)]="selectedAddress"  placeholder="Enter Address"></ion-input>\n      </ion-item>\n        <ion-item>\n        <ion-label [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}" ><b>Description : </b></ion-label>\n        <ion-textarea [(ngModel)]="selectedDesc" placeholder="Enter Description"></ion-textarea>\n      </ion-item>\n  \n  </ion-card>\n\n\n<ion-card>\n <ion-item>\n         <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Ambassador Name : </b></ion-label> \n          <ion-input item-end type="search" [(ngModel)]="selectedAmbName"  placeholder="Enter Name"></ion-input>\n  </ion-item>  \n  <ion-item>\n      <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b> Description : </b></ion-label> \n       <ion-input item-end type="search" [(ngModel)]="selectedAmbDesc"  placeholder="Enter Description"></ion-input>\n</ion-item>  \n<ion-item>\n    <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b> Occupation : </b></ion-label> \n     <ion-input item-end type="search" [(ngModel)]="selectedAmbOccu"  placeholder="Enter Occupatiom"></ion-input>\n</ion-item>  \n</ion-card>\n  <ion-card>\n      <ion-item>\n          <ion-label item-start [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> <b>Advertisements: </b></ion-label> \n        <ion-thumbnail >\n          <img src={{selectedImage}} height="20" width="5">\n       </ion-thumbnail>\n    <button class="filter-size" item-end ion-button icon-only (click)="addBrandLogo(abc)" ><ion-icon name="md-add-circle"></ion-icon></button>\n   </ion-item>\n  </ion-card>\n\n  <ion-card>\n      <button ion-button block light item-height="80px" (click)="addBrand(abc)" [ngStyle]="{\'color\': \'white\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}" > Train Model</button>\n    </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/add-brand/add-brand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_3__providers_brands_data_brands_data__["a" /* BrandsDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AddBrandPage);
    return AddBrandPage;
}());

//# sourceMappingURL=add-brand.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmbassadorDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AmbassadorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AmbassadorDetailsPage = (function () {
    function AmbassadorDetailsPage(navCtrl, navParams, brandsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brandsProvider = brandsProvider;
        this.ambassadorId = navParams.get('details');
        this.ambassadors = [];
        this.ambassadorInfo = null;
        this.ambassadors = this.getAmbassadorDetails(this.ambassadorId);
    }
    AmbassadorDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AmbassadorDetailsPage');
    };
    AmbassadorDetailsPage.prototype.getAmbassadorDetails = function (ambassadorId) {
        var _this = this;
        this.brandsProvider.getBrandsData()
            .then(function (data) {
            _this.ambassadors = data;
            _this.ambassadors.forEach(function (element) {
                if (element.id == ambassadorId) {
                    _this.ambassadorInfo = element;
                }
            });
        });
    };
    AmbassadorDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ambassador-details',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/ambassador-details/ambassador-details.html"*/`<!--\n  Generated template for the AmbassadorDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  >\n\n  <ion-navbar>\n    <ion-title>AmbassadorDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background">\n    <ion-card>\n        <ion-card-header id="card-header" ><b>{{ambassadorInfo.ambassador}}</b></ion-card-header>\n    </ion-card>\n    <ion-card [ngStyle]="{\'height\': \'180px\'}">\n        \n          <ion-thumbnail item-start>\n            <img src={{ambassadorInfo.amb_imgURL}} height="180px" width="30">\n          </ion-thumbnail>\n      \n      </ion-card>\n      <ion-card>\n          <div></div>\n          <ion-item>\n            <div><b>Occupation: </b>{{ambassadorInfo.amb_occup}}</div>\n            <div><b>Description: </b>{{ambassadorInfo.amb_desc}}</div>\n          </ion-item>\n        \n      </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/ambassador-details/ambassador-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__["a" /* BrandsDataProvider */]])
    ], AmbassadorDetailsPage);
    return AmbassadorDetailsPage;
}());

//# sourceMappingURL=ambassador-details.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmbassadorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_ambassador_add_ambassador__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ambassador_details_ambassador_details__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_brands_data_brands_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AmbassadorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AmbassadorsPage = (function () {
    function AmbassadorsPage(navCtrl, navParams, brandsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brandsProvider = brandsProvider;
        this.ambassadors = [];
        this.getAmbassadors();
        this.backAmbassadors = [];
    }
    AmbassadorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AmbassadorsPage');
    };
    AmbassadorsPage.prototype.getAmbassadors = function () {
        var _this = this;
        this.brandsProvider.getBrandsData()
            .then(function (data) {
            _this.ambassadors = data;
            _this.backAmbassadors = data;
        });
    };
    AmbassadorsPage.prototype.onInputChange = function (value) {
        if (value == "") {
            this.ambassadors = this.backAmbassadors;
        }
    };
    AmbassadorsPage.prototype.filterData = function (searchInput) {
        console.log("Entered the method");
        console.log(searchInput);
        this.ambassadors = this.ambassadors.filter(function (ambassador) {
            console.log(searchInput);
            // console.log(resto.restaurant.cuisines);
            if (ambassador.name.indexOf(searchInput) !== -1) {
                return true;
            }
            else {
                return false;
            }
            // return resto.restaurant.cuisines == searchInput;
            //return resto.restaurant.average_cost_for_two > searchInput;
        });
    };
    AmbassadorsPage.prototype.addAmbassador = function (input) {
        console.log("In HERE", input);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_ambassador_add_ambassador__["a" /* AddAmbassadorPage */]);
    };
    AmbassadorsPage.prototype.viewAmbassadorDetails = function (ambassadorId) {
        console.log("Ambassador ID is:", ambassadorId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ambassador_details_ambassador_details__["a" /* AmbassadorDetailsPage */], {
            details: ambassadorId
        });
    };
    AmbassadorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ambassadors',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/ambassadors/ambassadors.html"*/`<!--\n  Generated template for the AmbassadorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ambassadors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background">\n  <ion-card>\n    <ion-item>\n        <ion-input type="search" [(ngModel)]="searchInput"  placeholder="Enter Filter" (input)=\'onInputChange($event.target.value)\'></ion-input>\n        <button class="filter-size" item-end ion-button icon-only (click)="filterData(searchInput)" ><ion-icon name="funnel"></ion-icon></button>\n        <button class="filter-size" item-end ion-button icon-only (click)="addAmbassador(abc)" ><ion-icon name="md-add-circle"></ion-icon></button>\n    </ion-item>\n  </ion-card>\n    <ion-list>\n      <button ion-item *ngFor="let ambassador of ambassadors" (click)="viewAmbassadorDetails(ambassador.id)" >\n          <ion-thumbnail item-start>\n              <img src={{ambassador.amb_imgURL}} height="35" width="40">\n          </ion-thumbnail>\n          <h2>{{ambassador.ambassador}}</h2>  \n      </button>\n    </ion-list>  \n</ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/ambassadors/ambassadors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_brands_data_brands_data__["a" /* BrandsDataProvider */]])
    ], AmbassadorsPage);
    return AmbassadorsPage;
}());

//# sourceMappingURL=ambassadors.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdsPage = (function () {
    function AdsPage(navCtrl, navParams, brandsProvider, imagePicker, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brandsProvider = brandsProvider;
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.ads = [];
        this.getAds();
        this.selectedImage = '';
        this.options = {
            maximumImagesCount: 1,
            width: 40,
            height: 40
        };
    }
    AdsPage.prototype.getAds = function () {
        var _this = this;
        console.log("Entered Ads.");
        this.brandsProvider.getBrandsData()
            .then(function (data) {
            _this.ads = data;
            console.log(_this.ads);
        });
    };
    AdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdsPage');
    };
    AdsPage.prototype.addAds = function (abc) {
        var _this = this;
        this.imagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.selectedImage = results[i];
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    AdsPage.prototype.trainAds = function (abc) {
        this.presentToast();
    };
    AdsPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Ad was added successfully',
            duration: 3000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ads',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/ads/ads.html"*/`<!--\n  Generated template for the AdsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a New Advertisement.</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background">\n\n  \n\n    <ion-item>\n        <ion-label [ngStyle]="{\'color\': \'black\', \'font-size\': \'18px\', \'font-weight\': \'bold\'}">Logo : </ion-label>\n        <ion-select [(ngModel)]="selectLogo">\n        <ion-option *ngFor="let ad of ads">{{ad.name}}</ion-option>\n          <!-- <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option> -->\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label item-start [ngStyle]="{\'color\': \'black\', \'font-size\': \'18px\', \'font-weight\': \'bold\'}"> <b>Upload : </b></ion-label> \n        <ion-thumbnail >\n          <img src={{selectedImage}} height="20" width="5">\n       </ion-thumbnail>\n       <ion-input item-end type="search"   placeholder="Enter URL"></ion-input>\n    <button class="filter-size" item-end ion-button icon-only (click)="addAds(abc)" ><ion-icon name="md-add-circle"></ion-icon></button>\n   </ion-item>\n\n   <ion-item>\n      <ion-label [ngStyle]="{\'color\': \'black\', \'font-size\': \'18px\', \'font-weight\': \'bold\'}">Select Country :</ion-label>\n      <ion-select [(ngModel)]="selectCountry">\n          <ion-option value="usa"> USA </ion-option>\n          <ion-option value="india"> India </ion-option>\n      </ion-select>\n   </ion-item>\n   <ion-item>\n      <ion-label [ngStyle]="{\'color\': \'black\', \'font-size\': \'18px\', \'font-weight\': \'bold\'}">Select Type : </ion-label>\n      <ion-select [(ngModel)]="selectTpye">\n          <ion-option value="img">Image</ion-option>\n          <ion-option value="video">Video</ion-option>\n          <ion-option value="text">Text</ion-option>\n          <ion-option value="web">Web URL</ion-option>\n          </ion-select>\n   </ion-item>\n\n   <ion-item>\n      <ion-label [ngStyle]="{\'color\': \'black\', \'font-size\': \'18px\', \'font-weight\': \'bold\'}">Select Priority : </ion-label>\n      <ion-select [(ngModel)]="selectPriority">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          </ion-select>\n   \n     \n  </ion-item>\n\n  <ion-card>\n      <button ion-button block light item-height="80px" (click)="trainAds(abc)" [ngStyle]="{\'color\': \'white\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}"> Train Model</button>\n    </ion-card>\n  </ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/ads/ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__["a" /* BrandsDataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BrandDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrandDetailsPage = (function () {
    function BrandDetailsPage(navCtrl, navParams, brandsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brandsProvider = brandsProvider;
        this.brandId = navParams.get('details');
        this.brands = [];
        this.brandInfo = null;
        console.log("Brand ID:", this.brandId);
        this.brands = this.getBrandDetails(this.brandId);
    }
    BrandDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrandDetailsPage');
    };
    BrandDetailsPage.prototype.getBrandDetails = function (brandId) {
        var _this = this;
        this.brandsProvider.getBrandsData()
            .then(function (data) {
            _this.brands = data;
            _this.brands.forEach(function (element) {
                if (element.id == brandId) {
                    _this.brandInfo = element;
                }
            });
        });
    };
    BrandDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-brand-details',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/brand-details/brand-details.html"*/`<!--\n  Generated template for the BrandDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BrandDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background">\n  <ion-card>\n    <ion-card-header id="card-header" ><b>{{brandInfo.name}}</b></ion-card-header>\n    </ion-card>\n    <ion-card [ngStyle]="{\'height\': \'180px\'}">\n      <ion-thumbnail item-start>\n        <img src={{brandInfo.imgURL}} height="180px" width="30">\n      </ion-thumbnail>\n     \n      </ion-card>\n      <ion-card>\n          <div></div>\n      <ion-item>\n        <div><b>Description: </b>{{brandInfo.description}}</div>\n        <div><b>Address: </b>{{brandInfo.address}}</div>            \n      </ion-item>\n  </ion-card>\n  <!-- <ion-card>\n    <ion-item>\n    <b>Advertisements: </b>\n      <button class="filter-size" item-end ion-button icon-only (click)="addBrand(abc)" ><ion-icon name="md-add-circle"></ion-icon></button>\n    </ion-item>\n    </ion-card> -->\n</ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/brand-details/brand-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__["a" /* BrandsDataProvider */]])
    ], BrandDetailsPage);
    return BrandDetailsPage;
}());

//# sourceMappingURL=brand-details.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsPage = (function () {
    function StatisticsPage(navCtrl, brandsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.brandsProvider = brandsProvider;
        this.navParams = navParams;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Frequency' },
            { data: [2, 4, 5, 6, 3, 2, 8], label: 'Average Time Spent' }
        ];
        this.lineChartLabels = [2, 5, 8, 9, 13, 16, 19];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // backgroundColor: 'rgba(148,159,177,0.2)',
                // borderColor: 'rgba(148,159,177,1)',
                // pointBackgroundColor: 'rgba(148,159,177,1)',
                // pointBorderColor: '#fff',
                // pointHoverBackgroundColor: '#fff',
                // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                backgroundColor: 'rgba(255, 202, 51 ,0.2)',
                borderColor: 'rgba(255, 202, 51 ,1)',
                pointBackgroundColor: 'rgba(255, 202, 51  ,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 202, 51  ,0.8)'
            },
            {
                // backgroundColor: 'rgba(77,83,96,0.2)',
                // borderColor: 'rgba(77,83,96,1)',
                // pointBackgroundColor: 'rgba(77,83,96,1)',
                // pointBorderColor: '#fff',
                // pointHoverBackgroundColor: '#fff',
                // pointHoverBorderColor: 'rgba(77,83,96,1)'
                backgroundColor: 'rgba( 51, 249, 255 ,0.2)',
                borderColor: 'rgba( 51, 249, 255 ,1)',
                pointBackgroundColor: 'rgba( 51, 249, 255 ,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba( 51, 249, 255 ,1)'
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.getAds();
        this.selectAd = false;
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
    };
    StatisticsPage.prototype.getAds = function () {
        var _this = this;
        console.log("Entered Ads.");
        this.brandsProvider.getBrandsData()
            .then(function (data) {
            _this.ads = data;
            console.log(_this.ads);
        });
    };
    StatisticsPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    StatisticsPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StatisticsPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistics',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/statistics/statistics.html"*/`<!--\n  Generated template for the StatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Statistics </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- \n<ion-content padding>\n    <ion-item>\n        <ion-input type="search" [(ngModel)]="searchInput"  placeholder="Enter Filter" (input)=\'onInputChange($event.target.value)\'></ion-input>\n        <button class="filter-size" item-end ion-button icon-only (click)="filterData(searchInput)" ><ion-icon name="funnel"></ion-icon></button>        \n    </ion-item>\n    <ion-list>\n      <button ion-item *ngFor="let stat of statistics" >\n          <ion-thumbnail item-start>\n              <img src={{stat.imageURL}} height="40" width="40">\n          </ion-thumbnail>\n          <h2>{{stat.clickCount}}</h2>  \n      </button>\n    </ion-list>  \n</ion-content> -->\n\n<ion-content padding class="card-background">\n\n    <ion-item [ngStyle]="{\'color\': \'black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}">\n        <ion-label [ngStyle]="{\'color\': \'black\', \'font-size\': \'20px\', \'font-weight\': \'bold\'}">Select a Brand: </ion-label>\n        <ion-select [(ngModel)]="selectLogo">\n        <ion-option *ngFor="let ad of ads">{{ad.name}} </ion-option>\n        </ion-select>\n      </ion-item>\n\n  <ion-card *ngIf="selectLogo">\n    <div class="row" >\n      <div class="col-md-6">\n        <div style="display: block;">\n        <canvas baseChart width="300" height="400"\n                    [datasets]="lineChartData"\n                    [labels]="lineChartLabels"\n                    [options]="lineChartOptions"\n                    [colors]="lineChartColors"\n                    [legend]="lineChartLegend"\n                    [chartType]="lineChartType"\n                    (chartHover)="chartHovered($event)"\n                    (chartClick)="chartClicked($event)"></canvas>\n        </div>\n      </div>\n    </div>\n      </ion-card>\n  </ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_brands_data_brands_data__["a" /* BrandsDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brands_brands__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.navCtrl.setRoot('TabsPage'); 
    }
    LoginPage.prototype.login = function (email, password) {
        console.log("First Time");
        this.goToBrandsPage();
        console.log("Second Time");
        //this.navCtrl.setRoot('TabsPage');
    };
    LoginPage.prototype.goToBrandsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__brands_brands__["a" /* BrandsPage */], {});
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/login/login.html"*/`<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar id="card-background">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="false" class="card-background item item-divider center-text">\n    \n      <ion-card-header>\n       <b> ADMIN LOGIN </b>\n      </ion-card-header>\n<ion-card  [ngStyle]="{\'height\': \'80px\',\'width\': \'100px\' ,\'align-items\': \'center\', \'margin\': \'auto\'}">\n    <img src=\'assets/logoImgs/logo6.png\' height="80px" width="10px" align-items="center"  >\n</ion-card>\n\n      <ion-card-content>\n        <ion-list no-line>\n          <ion-item>\n            <ion-input type="text" placeholder="Username" [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Password"[(ngModel)]="password"></ion-input>\n          </ion-item>\n          <button ion-button block outline color="light" [ngStyle]="{\'color\': \'Black\', \'font-size\': \'20px\', \'font-weight\': \'bold\',\'background-color\' : \'#659EC7\'}" (click)="login(email,password)">Log in</button>\n        </ion-list>\n  \n      </ion-card-content>\n\n    \n    <button  ion-item>Don\'t have an account? Sign up</button>\n  </ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-ambassador/add-ambassador.module": [
		462,
		8
	],
	"../pages/add-brand/add-brand.module": [
		463,
		7
	],
	"../pages/ads/ads.module": [
		466,
		6
	],
	"../pages/ambassador-details/ambassador-details.module": [
		464,
		5
	],
	"../pages/ambassadors/ambassadors.module": [
		465,
		4
	],
	"../pages/brand-details/brand-details.module": [
		467,
		3
	],
	"../pages/brands/brands.module": [
		468,
		2
	],
	"../pages/login/login.module": [
		470,
		1
	],
	"../pages/statistics/statistics.module": [
		469,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ambassadors_ambassadors__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brands_brands__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistics_statistics__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ads_ads__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__brands_brands__["a" /* BrandsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__ambassadors_ambassadors__["a" /* AmbassadorsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__ads_ads__["a" /* AdsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__statistics_statistics__["a" /* StatisticsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Login" tabIcon="md-contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Brands" tabIcon="md-cube"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ambassadors" tabIcon="md-contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Ads" tabIcon="md-easel"></ion-tab>  \n  <ion-tab [root]="tab5Root" tabTitle="Statistics" tabIcon="stats"></ion-tab>  \n</ion-tabs>`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the BrandsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BrandsDataProvider = (function () {
    function BrandsDataProvider(http, file) {
        this.http = http;
        this.file = file;
        console.log('Hello BrandsDataProvider Provider');
        this.data = null;
        this.apiURL = "assets/brands.json";
        this.pushArray = [];
        this.persistentData = this.getData();
    }
    BrandsDataProvider.prototype.getData = function () {
        var _this = this;
        console.log("API URL : " + this.apiURL);
        if (this.persistentData) {
            return Promise.resolve(this.persistentData);
        }
        var opt;
        var myheaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // this.key='16a979934d2da2dbd8dd6cc21483e354';
        myheaders.append('Accept', 'application/json');
        // myheaders.append('user-key', this.key);
        opt = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: myheaders
        });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiURL, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                console.log("SERVICE RESPONSE :" + JSON.stringify(data));
                // this.data = data.appData;
                resolve(data.appData);
            });
        });
    };
    BrandsDataProvider.prototype.getBrandsData = function () {
        if (!this.persistentData) {
            this.persistentData = this.getData();
        }
        return this.persistentData;
    };
    BrandsDataProvider.prototype.saveBrand = function (objectToSave) {
        console.log("API URL : " + JSON.stringify(objectToSave));
        if (this.persistentData) {
            this.persistentData.then(function (data) {
                data.push(objectToSave);
            });
        }
        return {
            "data": this.persistentData,
            "status": true
        };
    };
    BrandsDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], BrandsDataProvider);
    return BrandsDataProvider;
}());

//# sourceMappingURL=brands-data.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_brands_brands__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_brand_add_brand__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_brand_details_brand_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ambassadors_ambassadors__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_ambassador_add_ambassador__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ambassador_details_ambassador_details__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_brands_data_brands_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ads_ads__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__ = __webpack_require__(173);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_brands_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_brand_add_brand__["a" /* AddBrandPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_brand_details_brand_details__["a" /* BrandDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ambassadors_ambassadors__["a" /* AmbassadorsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_ambassador_add_ambassador__["a" /* AddAmbassadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ambassador_details_ambassador_details__["a" /* AmbassadorDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ads_ads__["a" /* AdsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"],
                // IonicModule.forRoot(MyApp),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                    links: [
                        { loadChildren: '../pages/add-ambassador/add-ambassador.module#AddAmbassadorPageModule', name: 'AddAmbassadorPage', segment: 'add-ambassador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-brand/add-brand.module#AddBrandPageModule', name: 'AddBrandPage', segment: 'add-brand', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ambassador-details/ambassador-details.module#AmbassadorDetailsPageModule', name: 'AmbassadorDetailsPage', segment: 'ambassador-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ambassadors/ambassadors.module#AmbassadorsPageModule', name: 'AmbassadorsPage', segment: 'ambassadors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ads/ads.module#AdsPageModule', name: 'AdsPage', segment: 'ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brand-details/brand-details.module#BrandDetailsPageModule', name: 'BrandDetailsPage', segment: 'brand-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brands/brands.module#BrandsPageModule', name: 'BrandsPage', segment: 'brands', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_brands_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_brand_add_brand__["a" /* AddBrandPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_brand_details_brand_details__["a" /* BrandDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ambassadors_ambassadors__["a" /* AmbassadorsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_ambassador_add_ambassador__["a" /* AddAmbassadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ambassador_details_ambassador_details__["a" /* AmbassadorDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__["a" /* StatisticsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_ads_ads__["a" /* AdsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_brands_data_brands_data__["a" /* BrandsDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es.js": 252,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 444;

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_brand_add_brand__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brand_details_brand_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_brands_data_brands_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrandsPage = (function () {
    function BrandsPage(navCtrl, navParams, brandsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brandsProvider = brandsProvider;
        this.brands = [];
        this.backupBrands = [];
        this.getBrands();
    }
    BrandsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrandsPage');
    };
    BrandsPage.prototype.getBrands = function () {
        var _this = this;
        this.brandsProvider.getBrandsData()
            .then(function (data) {
            _this.brands = data;
            _this.backupBrands = data;
        });
    };
    BrandsPage.prototype.onInputChange = function (value) {
        if (value == "") {
            this.brands = this.backupBrands;
        }
    };
    BrandsPage.prototype.filterData = function (searchInput) {
        console.log("Entered the method");
        console.log(searchInput);
        this.brands = this.brands.filter(function (brand) {
            console.log(searchInput);
            // console.log(resto.restaurant.cuisines);
            if (brand.name.indexOf(searchInput) !== -1) {
                // return resto.restaurant.cuisines == searchInput;
                return true;
            }
            else {
                return false;
            }
            // return resto.restaurant.cuisines == searchInput;
            //return resto.restaurant.average_cost_for_two > searchInput;
        });
    };
    BrandsPage.prototype.addBrand = function (input) {
        console.log("In HERE", input);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_brand_add_brand__["a" /* AddBrandPage */]);
    };
    BrandsPage.prototype.viewBrandDetails = function (brandId) {
        console.log("Brand ID is:", brandId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__brand_details_brand_details__["a" /* BrandDetailsPage */], {
            details: brandId
        });
    };
    BrandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-brands',template:/*ion-inline-start:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/brands/brands.html"*/`<!--\n  Generated template for the BrandsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar>\n    <ion-title>Brands</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background" >\n  <ion-card>\n  <ion-item>\n      <ion-input type="search" [(ngModel)]="searchInput"  placeholder="Enter Filter" (input)=\'onInputChange($event.target.value)\'></ion-input>\n      <button class="filter-size" item-end ion-button icon-only (click)="filterData(searchInput)" ><ion-icon name="funnel"></ion-icon></button>\n      <button class="filter-size" item-end ion-button icon-only (click)="addBrand(abc)" ><ion-icon name="md-add-circle"></ion-icon></button>\n  </ion-item>\n</ion-card>\n\n  <ion-list>\n    <button ion-item *ngFor="let brand of brands" (click)="viewBrandDetails(brand.id)" >\n        <ion-thumbnail item-start>\n            <img src={{brand.imgURL}} height="35" width="40">\n        </ion-thumbnail>\n        <h2>{{brand.name}}</h2>  \n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/shriniketsarkar/_umkcProject/Hackathon/Yoodle/src/pages/brands/brands.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_brands_data_brands_data__["a" /* BrandsDataProvider */]])
    ], BrandsPage);
    return BrandsPage;
}());

//# sourceMappingURL=brands.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map