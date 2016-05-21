System.register(['angular2/core', 'angular2/router', './item', './item.service'], function(exports_1, context_1) {
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
    var core_1, router_1, item_1, item_service_1;
    var CategoryItemsComponent;
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
            }],
        execute: function() {
            CategoryItemsComponent = (function () {
                function CategoryItemsComponent(_routeParams, _itemService) {
                    this._routeParams = _routeParams;
                    this._itemService = _itemService;
                }
                CategoryItemsComponent.prototype.onSelect = function (category) { this.selectedCategory = category; };
                CategoryItemsComponent.prototype.getItems = function () {
                    var _this = this;
                    this._itemService.getItems().then(function (items) { return _this.items = items; });
                };
                CategoryItemsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.categoryName = this._routeParams.get('category');
                    this.selectedCategory = item_1.Category[this.categoryName];
                    console.log(this.categoryName, this.selectedCategory);
                    this._itemService.getItems(this.selectedCategory)
                        .then(function (items) { return _this.items = items; });
                };
                CategoryItemsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-category-items',
                        template: "\n\t\t<nav class=\"localnav\">\n\t\t\t<div class=\"ln-wrapper\">\n\t\t\t\t<div class=\"ln-content\">\n\t\t\t\t\t<h2 class=\"ln-title\">\n\t\t\t\t\t\t<a>{{categoryName}}</a>\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t</nav>\n\t\t<div class=\"main\">\n\t\t\t<section class=\"section\">\n\t\t\t<div class=\"max-width\">\n\t\t\t<div class=\"section-content\">\n\t\t\t\n\t\t\t\t<div class=\"modelselect\">\n\t\t\t\t\t<div class=\"modelselect-grid\">\n\t\t\t\t\t\t<ul class=\"modelselect-list row\">\n\t\t\t\t\t\t\t<li *ngFor=\"#item of items; #odd = odd;\" class=\"column modelselect-item large-6 {{odd ? '' : 'odd'}}\">\n\t\t\t\t\t\t    \t<div class=\"modelselect-producttile\">\n\t\t\t\t\t\t\t\t\t<div class=\"modelselect-productimg\" [style.backgroundImage]=\"'url('+ item.imageUrl +')'\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"modelselect-productdesc\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"modelselect-producttitle\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.localnav {\n\t\t    position: relative;\n\t\t    top: 0;\n\t\t    left: 0;\n\t\t    width: 100%;\n\t\t    min-width: 1024px;\n\t\t    z-index: 9997;\n\t\t}\n\t\t\n\t\t@media only screen and (max-width: 1044px) {\n\t\t\t.localnav {\n\t\t\t    min-width: 320px;\n\t\t\t}\n\t\t}\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t.localnav {\n\t\t        1height:48px\n\t\t    }\n\t\t}\n\n\t\t.localnav .ln-wrapper {\n\t\t    1position: absolute;\n\t\t    top: 0;\n\t\t    left: 0;\n\t\t    width: 100%;\n\t\t    1height: auto;\n\t\t    1min-height: 100%;\n\t\t    z-index: 1;\n\t\t    \n\t\t\tborder-bottom: 1px solid rgba(0,0,0,.3);\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t.localnav .ln-content {\n\t\t    margin: 0 auto;\n\t\t    max-width: 980px;\n\t\t    padding: 0 22px;\n\t\t    position: relative;\n\t\t    z-index: 2;\n\t\t}\n\n\t\t.localnav .ln-title {\n\t\t    1margin-left: 3px;\n\t\t    height: 52px;\n\t\t}\n\t\t\n\t\t.ln-title a {\n\t\t\tline-height: 52px;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\t\n.modelselect-grid {\n    -webkit-transition: opacity .5s;\n    transition: opacity .5s;\n    opacity: 1;\n    -ms-filter: \"none\";\n}\t\t\n.modelselect-list {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.row {\n    position: relative;\n    z-index: 1;\n}\n.row:before, .row:after {\n    content: ' ';\n    display: table;\n}\t\t\n.modelselect-item.odd {\n    clear: both;\n}\n.column {\n    position: relative;\n    z-index: 1;\n    min-height: 2px;\n    margin: 0;\n    padding: 0;\n    float: left;\n}\n.large-6 {\n\twidth: 50%;\n}\n.modelselect-producttile {\n    margin: 0 auto;\n    width: 100%;;\n}\n.modelselect-producttile {\n    text-align: center;\n    margin-bottom: 65px;\n    -webkit-tap-highlight-color: transparent;\n}\n.modelselect-productimg {\n    cursor: pointer;\n    margin-bottom: 15px;\n    \n    height: 392px;\n\n  \tbackground-position: center center;\n  \tbackground-size: contain;\n   \tbackground-repeat: no-repeat;\n \t\n}\n.modelselect-productdesc {\n    position: relative;\n    padding: 0 116px;\n}\n.modelselect-producttile {\n    text-align: center;\n    margin-bottom: 65px;\n    -webkit-tap-highlight-color: transparent;\n}\n.modelselect-producttile .label {\n    font-size: 16px;\n    line-height: 1.5625;\n    font-weight: 400;\n    letter-spacing: normal;\n    color: #333;\n    width: 100%;\n}\n@media only screen and (max-width: 735px) {\n\t.modelselect-productdesc {\n\t    padding: 0;\n\t}\n\t\n\t.modelselect-productimg {\n\t\theight: 260px;\n\t}\n\t\n\t.modelselect-producttile {\n \t   margin-bottom: 15px;\t\t\n\t}\n}\n\n\t"]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, item_service_1.ItemService])
                ], CategoryItemsComponent);
                return CategoryItemsComponent;
            }());
            exports_1("CategoryItemsComponent", CategoryItemsComponent);
        }
    }
});
//# sourceMappingURL=category-items.component.js.map