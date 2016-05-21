System.register(['angular2/core', 'angular2/router', './item', './item.service', './banners.component', './category-items.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, item_1, item_service_1, banners_component_1, category_items_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (banners_component_1_1) {
                banners_component_1 = banners_component_1_1;
            },
            function (category_items_component_1_1) {
                category_items_component_1 = category_items_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _itemService) {
                    this._router = _router;
                    this._itemService = _itemService;
                    this.title = 'Kendo Bro';
                }
                AppComponent.prototype.onSelect = function (category) {
                };
                AppComponent.prototype.gotoCategory = function (category) {
                    this._router.navigate(['CategoryItems', { 'category': category }]);
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.categories = Object.keys(item_1.Category)
                        .filter(function (v) { return isNaN(parseInt(v, 10)); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<nav class=\"globalnav\">\n\t\t\t<div class=\"gn-content\">\n\t\t\t    <ul class=\"gn-list\">\n\t\t\t\t    <li class=\"\" [routerLink]=\"['Banners']\">\n\t\t\t\t    \t<span class=\"\">Kendo Bro</span>\n\t\t\t\t    </li>\n\t\t\t        <li class=\"\" *ngFor=\"#category of categories\" (click)=\"gotoCategory(category)\">\n\t\t\t        \t<span class=\"\">{{category}}</span>\n\t\t\t\t\t</li>\n\t\t\t    </ul>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class=\"main\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.globalnav {\n\t\t    background-color: rgb(51, 51, 51);\n\t        position: relative;\n\t\t    z-index: 2;\n\n\t\t\t1color: white;\t\t\t\n\t\t}\n\t\t\n\t\t.globalnav > .gn-content {\n\t\t    margin: 0 auto;\n\t\t    max-width: 980px;\n\t\t\tpadding: 0 22px;\n   \t\t    position: relative;\n\t\t    text-align: center;    \n\t\t}\n\n\t\t.gn-list:after {\n\t\t    content: \"\";\n\t\t    display: inline-block;\n\t\t    width: 100%;    \n\n\t\t    /* if you need IE6/7 support */\n\t\t    *display: inline;\n\t\t    zoom: 1    \n\t\t}\n\n\t\t.gn-list {\n\t\t    cursor: default;\n\t\t    padding: 0;\n\t\t\tmargin: 0;\n\t\t    width: auto;\n\t\t    text-align: justify;\n\t\t    -ms-text-justify: distribute-all-lines;\n\t\t    text-justify: distribute-all-lines;\n\t\t    -webkit-user-select: none;\n\t\t    -moz-user-select: none;\n\t\t    -ms-user-select: none;\n\t\t    user-select: none;\t\n\t        list-style-type: none;\n\n\t\t}\n\t\t.gn-list > li {\n\t\t\tcursor: default;\n\t\t\tdisplay: inline\n\t\t}\n\t\t\n\t\t.gn-list > li > span {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\t\t\t\n\t\t.gn-content > * {\n\t\t    height: 44px;\n\t\t    line-height: 44px;\n\t\t    vertical-align: top;\n\t\t}\n\n\t"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            item_service_1.ItemService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Banners',
                            component: banners_component_1.BannersComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/category/:category',
                            name: 'CategoryItems',
                            component: category_items_component_1.CategoryItemsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, item_service_1.ItemService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map