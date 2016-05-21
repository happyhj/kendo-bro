System.register(['angular2/src/facade/lang', 'angular2/src/facade/collection', '../output/output_ast', './constants', './compile_query', './compile_method', './compile_pipe', 'angular2/src/core/linker/view_type', '../compile_metadata', './util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1, collection_1, o, constants_1, compile_query_1, compile_method_1, compile_pipe_1, view_type_1, compile_metadata_1, util_1;
    var CompileView;
    function getViewType(component, embeddedTemplateIndex) {
        if (embeddedTemplateIndex > 0) {
            return view_type_1.ViewType.EMBEDDED;
        }
        else if (component.type.isHost) {
            return view_type_1.ViewType.HOST;
        }
        else {
            return view_type_1.ViewType.COMPONENT;
        }
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (o_1) {
                o = o_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (compile_query_1_1) {
                compile_query_1 = compile_query_1_1;
            },
            function (compile_method_1_1) {
                compile_method_1 = compile_method_1_1;
            },
            function (compile_pipe_1_1) {
                compile_pipe_1 = compile_pipe_1_1;
            },
            function (view_type_1_1) {
                view_type_1 = view_type_1_1;
            },
            function (compile_metadata_1_1) {
                compile_metadata_1 = compile_metadata_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            CompileView = (function () {
                function CompileView(component, genConfig, pipeMetas, styles, viewIndex, declarationElement, templateVariableBindings) {
                    var _this = this;
                    this.component = component;
                    this.genConfig = genConfig;
                    this.pipeMetas = pipeMetas;
                    this.styles = styles;
                    this.viewIndex = viewIndex;
                    this.declarationElement = declarationElement;
                    this.templateVariableBindings = templateVariableBindings;
                    this.nodes = [];
                    // root nodes or AppElements for ViewContainers
                    this.rootNodesOrAppElements = [];
                    this.bindings = [];
                    this.classStatements = [];
                    this.eventHandlerMethods = [];
                    this.fields = [];
                    this.getters = [];
                    this.disposables = [];
                    this.subscriptions = [];
                    this.purePipes = new Map();
                    this.pipes = [];
                    this.variables = new Map();
                    this.literalArrayCount = 0;
                    this.literalMapCount = 0;
                    this.pipeCount = 0;
                    this.createMethod = new compile_method_1.CompileMethod(this);
                    this.injectorGetMethod = new compile_method_1.CompileMethod(this);
                    this.updateContentQueriesMethod = new compile_method_1.CompileMethod(this);
                    this.dirtyParentQueriesMethod = new compile_method_1.CompileMethod(this);
                    this.updateViewQueriesMethod = new compile_method_1.CompileMethod(this);
                    this.detectChangesInInputsMethod = new compile_method_1.CompileMethod(this);
                    this.detectChangesRenderPropertiesMethod = new compile_method_1.CompileMethod(this);
                    this.afterContentLifecycleCallbacksMethod = new compile_method_1.CompileMethod(this);
                    this.afterViewLifecycleCallbacksMethod = new compile_method_1.CompileMethod(this);
                    this.destroyMethod = new compile_method_1.CompileMethod(this);
                    this.viewType = getViewType(component, viewIndex);
                    this.className = "_View_" + component.type.name + viewIndex;
                    this.classType = o.importType(new compile_metadata_1.CompileIdentifierMetadata({ name: this.className }));
                    this.viewFactory = o.variable(util_1.getViewFactoryName(component, viewIndex));
                    if (this.viewType === view_type_1.ViewType.COMPONENT || this.viewType === view_type_1.ViewType.HOST) {
                        this.componentView = this;
                    }
                    else {
                        this.componentView = this.declarationElement.view.componentView;
                    }
                    var viewQueries = new compile_metadata_1.CompileTokenMap();
                    if (this.viewType === view_type_1.ViewType.COMPONENT) {
                        var directiveInstance = o.THIS_EXPR.prop('context');
                        collection_1.ListWrapper.forEachWithIndex(this.component.viewQueries, function (queryMeta, queryIndex) {
                            var propName = "_viewQuery_" + queryMeta.selectors[0].name + "_" + queryIndex;
                            var queryList = compile_query_1.createQueryList(queryMeta, directiveInstance, propName, _this);
                            var query = new compile_query_1.CompileQuery(queryMeta, queryList, directiveInstance, _this);
                            compile_query_1.addQueryToTokenMap(viewQueries, query);
                        });
                        var constructorViewQueryCount = 0;
                        this.component.type.diDeps.forEach(function (dep) {
                            if (lang_1.isPresent(dep.viewQuery)) {
                                var queryList = o.THIS_EXPR.prop('declarationAppElement')
                                    .prop('componentConstructorViewQueries')
                                    .key(o.literal(constructorViewQueryCount++));
                                var query = new compile_query_1.CompileQuery(dep.viewQuery, queryList, null, _this);
                                compile_query_1.addQueryToTokenMap(viewQueries, query);
                            }
                        });
                    }
                    this.viewQueries = viewQueries;
                    templateVariableBindings.forEach(function (entry) {
                        _this.variables.set(entry[1], o.THIS_EXPR.prop('locals').key(o.literal(entry[0])));
                    });
                    if (!this.declarationElement.isNull()) {
                        this.declarationElement.setEmbeddedView(this);
                    }
                }
                CompileView.prototype.callPipe = function (name, input, args) {
                    var compView = this.componentView;
                    var pipe = compView.purePipes.get(name);
                    if (lang_1.isBlank(pipe)) {
                        pipe = new compile_pipe_1.CompilePipe(compView, name);
                        if (pipe.pure) {
                            compView.purePipes.set(name, pipe);
                        }
                        compView.pipes.push(pipe);
                    }
                    return pipe.call(this, [input].concat(args));
                };
                CompileView.prototype.getVariable = function (name) {
                    if (name == constants_1.EventHandlerVars.event.name) {
                        return constants_1.EventHandlerVars.event;
                    }
                    var currView = this;
                    var result = currView.variables.get(name);
                    while (lang_1.isBlank(result) && lang_1.isPresent(currView.declarationElement.view)) {
                        currView = currView.declarationElement.view;
                        result = currView.variables.get(name);
                    }
                    if (lang_1.isPresent(result)) {
                        return util_1.getPropertyInView(result, this, currView);
                    }
                    else {
                        return null;
                    }
                };
                CompileView.prototype.createLiteralArray = function (values) {
                    var proxyExpr = o.THIS_EXPR.prop("_arr_" + this.literalArrayCount++);
                    var proxyParams = [];
                    var proxyReturnEntries = [];
                    for (var i = 0; i < values.length; i++) {
                        var paramName = "p" + i;
                        proxyParams.push(new o.FnParam(paramName));
                        proxyReturnEntries.push(o.variable(paramName));
                    }
                    util_1.createPureProxy(o.fn(proxyParams, [new o.ReturnStatement(o.literalArr(proxyReturnEntries))]), values.length, proxyExpr, this);
                    return proxyExpr.callFn(values);
                };
                CompileView.prototype.createLiteralMap = function (entries) {
                    var proxyExpr = o.THIS_EXPR.prop("_map_" + this.literalMapCount++);
                    var proxyParams = [];
                    var proxyReturnEntries = [];
                    var values = [];
                    for (var i = 0; i < entries.length; i++) {
                        var paramName = "p" + i;
                        proxyParams.push(new o.FnParam(paramName));
                        proxyReturnEntries.push([entries[i][0], o.variable(paramName)]);
                        values.push(entries[i][1]);
                    }
                    util_1.createPureProxy(o.fn(proxyParams, [new o.ReturnStatement(o.literalMap(proxyReturnEntries))]), entries.length, proxyExpr, this);
                    return proxyExpr.callFn(values);
                };
                CompileView.prototype.afterNodes = function () {
                    var _this = this;
                    this.pipes.forEach(function (pipe) { return pipe.create(); });
                    this.viewQueries.values().forEach(function (queries) { return queries.forEach(function (query) { return query.afterChildren(_this.updateViewQueriesMethod); }); });
                };
                return CompileView;
            }());
            exports_1("CompileView", CompileView);
        }
    }
});
//# sourceMappingURL=compile_view.js.map