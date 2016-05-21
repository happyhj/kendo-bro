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
    var BannersComponent;
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
            BannersComponent = (function () {
                function BannersComponent(_router, _itemService) {
                    this._router = _router;
                    this._itemService = _itemService;
                }
                BannersComponent.prototype.gotoCategory = function (category) {
                    this._router.navigate(['CategoryItems', {
                            'category': typeof category === 'number' ? item_1.Category[category] : category
                        }]);
                };
                BannersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._itemService.getBannerItems()
                        .then(function (bannerItems) { return _this.bannerItems = bannerItems; });
                    setTimeout(function () {
                        jQuery('.gallery-slidecontainer').slick({
                            draggable: false,
                            autoplay: true,
                            arrows: false,
                            autoplaySpeed: 5000
                        });
                    }, 0);
                };
                BannersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-banners',
                        template: "\n  \t<article class=\"hero-gallery evergreen\">\n  \t\n\t\t\t<div class=\"section-content\">\n\t\t\t\t<div class=\"gallery-slidecontainer\">\n\t\t\t\t\t<li *ngFor=\"#bannerItem of bannerItems\" (click)=\"gotoCategory(bannerItem.category)\" [style.backgroundImage]=\"'url('+ bannerItem.backgroundImageUrl+')'\">\n\t\t\t\t\t\t<div class=\"title\">{{bannerItem.title}}</div>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t</article>\n  ",
                        styles: ["\n  \t.gallery-slidecontainer {\n\t    position: absolute;\n\t    left: 0px;\n\t    top: 0px;\n\t    width: 100%;\n\t    height: 100%;\n\t  \tdisplay: none;\n  \t}\n\n  \t.gallery-slidecontainer li {\n\t  \theight: 100%;\n\t  \tbackground-position: center center;\n\t  \tbackground-size: contain;\n\t  \tbackground-repeat: no-repeat;\n  \t}\n  \t\n  \t.gallery-slidecontainer .title {\n  \t\tposition: relative;\n  \t\ttop: 50%;\n  \t\ttransform: translateY(-50%);\n\t  \tcolor: white;\n\t  \tfont-size: 100px;\n\t  \ttext-align: center;\n\t  \ttext-shadow: 0px 0px 16px rgba(0,0,0,.6);\n  \t}\n  \t\n  \t.gallery-slidecontainer.slick-initialized {\n\t  \tdisplay: block;\n  \t}\n  \t\n  \t\n\t.hero-gallery.evergreen {\n\t    height: calc(100% - 44px);\n\t    1min-height: 650px\n\t}\n\t\n\t@media only screen and (min-width: 1442px) {\n\t    .hero-gallery.evergreen {\n\t        1min-height:750px\n\t    }\n\t}\n\t\n\t@media only screen and (max-width: 1068px) {\n\t    .hero-gallery.evergreen {\n\t        1min-height:650px\n\t    }\n\t}\n\t\n\t@media only screen and (max-width: 735px) {\n\t    .hero-gallery.evergreen {\n\t        1height:50%;\n\t        1min-height: 391px\n\t    }\n\t}\n\t\n\t@media only screen and (max-width: 735px) and (orientation: portrait) {\n\t    .hero-gallery.evergreen {\n\t        1max-height:450px\n\t    }\n\t}\n\n  "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, item_service_1.ItemService])
                ], BannersComponent);
                return BannersComponent;
            }());
            exports_1("BannersComponent", BannersComponent);
        }
    }
});
//# sourceMappingURL=banners.component.js.map