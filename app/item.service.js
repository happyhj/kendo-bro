System.register(['./mock-items', './mock-bannerItems', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_items_1, mock_bannerItems_1, core_1;
    var ItemService;
    return {
        setters:[
            function (mock_items_1_1) {
                mock_items_1 = mock_items_1_1;
            },
            function (mock_bannerItems_1_1) {
                mock_bannerItems_1 = mock_bannerItems_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemService = (function () {
                function ItemService() {
                }
                ItemService.prototype.getBannerItems = function () {
                    return Promise.resolve(mock_bannerItems_1.BANNER_ITEMS);
                };
                ItemService.prototype.getItem = function (id) {
                    return Promise.resolve(mock_items_1.ITEMS).then(function (items) { return items.filter(function (item) { return item.id === id; })[0]; });
                };
                ItemService.prototype.getItems = function (category) {
                    if (category === void 0) { category = null; }
                    var pItems = Promise.resolve(mock_items_1.ITEMS);
                    return category !== null ? pItems.then(function (items) { return items.filter(function (item) { return item.category === category; }); }) : pItems;
                };
                ItemService.prototype.getItemsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_items_1.ITEMS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                ItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ItemService);
                return ItemService;
            }());
            exports_1("ItemService", ItemService);
        }
    }
});
//# sourceMappingURL=item.service.js.map