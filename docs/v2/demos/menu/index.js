var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var Page1 = (function () {
    function Page1() {
    }
    Page1 = __decorate([
        ionic_1.Page({ templateUrl: 'page1.html' }), 
        __metadata('design:paramtypes', [])
    ], Page1);
    return Page1;
})();
var Page2 = (function () {
    function Page2() {
    }
    Page2 = __decorate([
        ionic_1.Page({ templateUrl: 'page2.html' }), 
        __metadata('design:paramtypes', [])
    ], Page2);
    return Page2;
})();
var E2EApp = (function () {
    function E2EApp(app) {
        this.app = app;
        this.rootView = Page1;
        this.pages = [
            { title: 'Page 1', component: Page1 },
            { title: 'Page 2', component: Page2 },
        ];
    }
    E2EApp.prototype.openPage = function (menu, page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    E2EApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object])
    ], E2EApp);
    return E2EApp;
    var _a;
})();