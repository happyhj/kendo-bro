System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CompileBinding;
    return {
        setters:[],
        execute: function() {
            CompileBinding = (function () {
                function CompileBinding(node, sourceAst) {
                    this.node = node;
                    this.sourceAst = sourceAst;
                }
                return CompileBinding;
            }());
            exports_1("CompileBinding", CompileBinding);
        }
    }
});
//# sourceMappingURL=compile_binding.js.map