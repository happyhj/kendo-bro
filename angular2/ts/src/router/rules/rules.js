System.register(['angular2/src/facade/lang', 'angular2/src/facade/exceptions', 'angular2/src/facade/promise', 'angular2/src/facade/collection', '../url_parser', '../instruction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var lang_1, exceptions_1, promise_1, collection_1, url_parser_1, instruction_1;
    var RouteMatch, PathMatch, RedirectMatch, RedirectRule, RouteRule;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (promise_1_1) {
                promise_1 = promise_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (url_parser_1_1) {
                url_parser_1 = url_parser_1_1;
            },
            function (instruction_1_1) {
                instruction_1 = instruction_1_1;
            }],
        execute: function() {
            // RouteMatch objects hold information about a match between a rule and a URL
            RouteMatch = (function () {
                function RouteMatch() {
                }
                return RouteMatch;
            }());
            exports_1("RouteMatch", RouteMatch);
            PathMatch = (function (_super) {
                __extends(PathMatch, _super);
                function PathMatch(instruction, remaining, remainingAux) {
                    _super.call(this);
                    this.instruction = instruction;
                    this.remaining = remaining;
                    this.remainingAux = remainingAux;
                }
                return PathMatch;
            }(RouteMatch));
            exports_1("PathMatch", PathMatch);
            RedirectMatch = (function (_super) {
                __extends(RedirectMatch, _super);
                function RedirectMatch(redirectTo, specificity) {
                    _super.call(this);
                    this.redirectTo = redirectTo;
                    this.specificity = specificity;
                }
                return RedirectMatch;
            }(RouteMatch));
            exports_1("RedirectMatch", RedirectMatch);
            RedirectRule = (function () {
                function RedirectRule(_pathRecognizer, redirectTo) {
                    this._pathRecognizer = _pathRecognizer;
                    this.redirectTo = redirectTo;
                    this.hash = this._pathRecognizer.hash;
                }
                Object.defineProperty(RedirectRule.prototype, "path", {
                    get: function () { return this._pathRecognizer.toString(); },
                    set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RedirectRule directly'); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns `null` or a `ParsedUrl` representing the new path to match
                 */
                RedirectRule.prototype.recognize = function (beginningSegment) {
                    var match = null;
                    if (lang_1.isPresent(this._pathRecognizer.matchUrl(beginningSegment))) {
                        match = new RedirectMatch(this.redirectTo, this._pathRecognizer.specificity);
                    }
                    return promise_1.PromiseWrapper.resolve(match);
                };
                RedirectRule.prototype.generate = function (params) {
                    throw new exceptions_1.BaseException("Tried to generate a redirect.");
                };
                return RedirectRule;
            }());
            exports_1("RedirectRule", RedirectRule);
            // represents something like '/foo/:bar'
            RouteRule = (function () {
                // TODO: cache component instruction instances by params and by ParsedUrl instance
                function RouteRule(_routePath, handler, _routeName) {
                    this._routePath = _routePath;
                    this.handler = handler;
                    this._routeName = _routeName;
                    this._cache = new collection_1.Map();
                    this.specificity = this._routePath.specificity;
                    this.hash = this._routePath.hash;
                    this.terminal = this._routePath.terminal;
                }
                Object.defineProperty(RouteRule.prototype, "path", {
                    get: function () { return this._routePath.toString(); },
                    set: function (val) { throw new exceptions_1.BaseException('you cannot set the path of a RouteRule directly'); },
                    enumerable: true,
                    configurable: true
                });
                RouteRule.prototype.recognize = function (beginningSegment) {
                    var _this = this;
                    var res = this._routePath.matchUrl(beginningSegment);
                    if (lang_1.isBlank(res)) {
                        return null;
                    }
                    return this.handler.resolveComponentType().then(function (_) {
                        var componentInstruction = _this._getInstruction(res.urlPath, res.urlParams, res.allParams);
                        return new PathMatch(componentInstruction, res.rest, res.auxiliary);
                    });
                };
                RouteRule.prototype.generate = function (params) {
                    var generated = this._routePath.generateUrl(params);
                    var urlPath = generated.urlPath;
                    var urlParams = generated.urlParams;
                    return this._getInstruction(urlPath, url_parser_1.convertUrlParamsToArray(urlParams), params);
                };
                RouteRule.prototype.generateComponentPathValues = function (params) {
                    return this._routePath.generateUrl(params);
                };
                RouteRule.prototype._getInstruction = function (urlPath, urlParams, params) {
                    if (lang_1.isBlank(this.handler.componentType)) {
                        throw new exceptions_1.BaseException("Tried to get instruction before the type was loaded.");
                    }
                    var hashKey = urlPath + '?' + urlParams.join('&');
                    if (this._cache.has(hashKey)) {
                        return this._cache.get(hashKey);
                    }
                    var instruction = new instruction_1.ComponentInstruction(urlPath, urlParams, this.handler.data, this.handler.componentType, this.terminal, this.specificity, params, this._routeName);
                    this._cache.set(hashKey, instruction);
                    return instruction;
                };
                return RouteRule;
            }());
            exports_1("RouteRule", RouteRule);
        }
    }
});
//# sourceMappingURL=rules.js.map