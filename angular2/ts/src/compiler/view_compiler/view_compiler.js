System.register(['angular2/src/core/di', './compile_element', './compile_view', './view_builder', '../config'], function(exports_1, context_1) {
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
    var di_1, compile_element_1, compile_view_1, view_builder_1, config_1;
    var ViewCompileResult, ViewCompiler;
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (compile_element_1_1) {
                compile_element_1 = compile_element_1_1;
            },
            function (compile_view_1_1) {
                compile_view_1 = compile_view_1_1;
            },
            function (view_builder_1_1) {
                view_builder_1 = view_builder_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ViewCompileResult = (function () {
                function ViewCompileResult(statements, viewFactoryVar, dependencies) {
                    this.statements = statements;
                    this.viewFactoryVar = viewFactoryVar;
                    this.dependencies = dependencies;
                }
                return ViewCompileResult;
            }());
            exports_1("ViewCompileResult", ViewCompileResult);
            ViewCompiler = (function () {
                function ViewCompiler(_genConfig) {
                    this._genConfig = _genConfig;
                }
                ViewCompiler.prototype.compileComponent = function (component, template, styles, pipes) {
                    var statements = [];
                    var dependencies = [];
                    var view = new compile_view_1.CompileView(component, this._genConfig, pipes, styles, 0, compile_element_1.CompileElement.createNull(), []);
                    view_builder_1.buildView(view, template, dependencies, statements);
                    return new ViewCompileResult(statements, view.viewFactory.name, dependencies);
                };
                ViewCompiler = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [config_1.CompilerConfig])
                ], ViewCompiler);
                return ViewCompiler;
            }());
            exports_1("ViewCompiler", ViewCompiler);
        }
    }
});
//# sourceMappingURL=view_compiler.js.map