System.register(['./item'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var item_1;
    var BANNER_ITEMS;
    return {
        setters:[
            function (item_1_1) {
                item_1 = item_1_1;
            }],
        execute: function() {
            exports_1("BANNER_ITEMS", BANNER_ITEMS = [
                {
                    category: item_1.Category.Bogu,
                    title: "Bogu",
                    description: "Top quality Bogu ",
                    backgroundImageUrl: "/img/TSS/TSS_0001.JPG"
                },
                {
                    category: item_1.Category.Men,
                    title: "Men",
                    description: "Top quality Men",
                    backgroundImageUrl: "/img/SLM-G/SLM-G_010_1.JPG"
                },
                {
                    category: item_1.Category.Kote,
                    title: "Kote",
                    description: "Top quality Kote",
                    backgroundImageUrl: "/img/TSS/TSS_020.JPG"
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-bannerItems.js.map