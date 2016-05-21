System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Item, Banner, Category, QualitycClass;
    return {
        setters:[],
        execute: function() {
            Item = (function () {
                function Item() {
                }
                return Item;
            }());
            exports_1("Item", Item);
            Banner = (function () {
                function Banner() {
                }
                return Banner;
            }());
            exports_1("Banner", Banner);
            (function (Category) {
                Category[Category["Bogu"] = 0] = "Bogu";
                Category[Category["Men"] = 1] = "Men";
                Category[Category["Kote"] = 2] = "Kote";
                Category[Category["Do"] = 3] = "Do";
                Category[Category["Tare"] = 4] = "Tare";
            })(Category || (Category = {}));
            exports_1("Category", Category);
            //  Gi, Hakama, Accessory
            (function (QualitycClass) {
                QualitycClass[QualitycClass["Bronze"] = 0] = "Bronze";
                QualitycClass[QualitycClass["Silver"] = 1] = "Silver";
                QualitycClass[QualitycClass["Gold"] = 2] = "Gold";
            })(QualitycClass || (QualitycClass = {}));
            exports_1("QualitycClass", QualitycClass);
        }
    }
});
//# sourceMappingURL=item.js.map