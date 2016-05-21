System.register(['angular2/src/facade/lang', './test_injector', './matchers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1, test_injector_1;
    var _global, afterEach, describe, ddescribe, fdescribe, xdescribe, jsmBeforeEach, jsmIt, jsmIIt, jsmXIt, testInjector;
    /**
     * Allows overriding default providers of the test injector,
     * which are defined in test_injector.js.
     *
     * The given function must return a list of DI providers.
     *
     * ## Example:
     *
     * {@example testing/ts/testing.ts region='beforeEachProviders'}
     */
    function beforeEachProviders(fn) {
        jsmBeforeEach(function () {
            var providers = fn();
            if (!providers)
                return;
            try {
                testInjector.addProviders(providers);
            }
            catch (e) {
                throw new Error('beforeEachProviders was called after the injector had ' +
                    'been used in a beforeEach or it block. This invalidates the ' +
                    'test injector');
            }
        });
    }
    exports_1("beforeEachProviders", beforeEachProviders);
    function runInAsyncTestZone(fnToExecute, finishCallback, failCallback, testName) {
        if (testName === void 0) { testName = ''; }
        var AsyncTestZoneSpec = Zone['AsyncTestZoneSpec'];
        var testZoneSpec = new AsyncTestZoneSpec(finishCallback, failCallback, testName);
        var testZone = Zone.current.fork(testZoneSpec);
        return testZone.run(fnToExecute);
    }
    function _isPromiseLike(input) {
        return input && !!(input.then);
    }
    function _it(jsmFn, name, testFn, testTimeOut) {
        var timeOut = testTimeOut;
        if (testFn instanceof test_injector_1.FunctionWithParamTokens) {
            var testFnT_1 = testFn;
            jsmFn(name, function (done) {
                if (testFnT_1.isAsync) {
                    runInAsyncTestZone(function () { return testInjector.execute(testFnT_1); }, done, done.fail, name);
                }
                else {
                    testInjector.execute(testFnT_1);
                    done();
                }
            }, timeOut);
        }
        else {
            // The test case doesn't use inject(). ie `it('test', (done) => { ... }));`
            jsmFn(name, testFn, timeOut);
        }
    }
    /**
     * Wrapper around Jasmine beforeEach function.
     *
     * beforeEach may be used with the `inject` function to fetch dependencies.
     *
     * See http://jasmine.github.io/ for more details.
     *
     * ## Example:
     *
     * {@example testing/ts/testing.ts region='beforeEach'}
     */
    function beforeEach(fn) {
        if (fn instanceof test_injector_1.FunctionWithParamTokens) {
            // The test case uses inject(). ie `beforeEach(inject([ClassA], (a) => { ...
            // }));`
            var fnT_1 = fn;
            jsmBeforeEach(function (done) {
                if (fnT_1.isAsync) {
                    runInAsyncTestZone(function () { return testInjector.execute(fnT_1); }, done, done.fail, 'beforeEach');
                }
                else {
                    testInjector.execute(fnT_1);
                    done();
                }
            });
        }
        else {
            // The test case doesn't use inject(). ie `beforeEach((done) => { ... }));`
            if (fn.length === 0) {
                jsmBeforeEach(function () { fn(); });
            }
            else {
                jsmBeforeEach(function (done) { fn(done); });
            }
        }
    }
    exports_1("beforeEach", beforeEach);
    /**
     * Define a single test case with the given test name and execution function.
     *
     * The test function can be either a synchronous function, the result of {@link async},
     * or an injected function created via {@link inject}.
     *
     * Wrapper around Jasmine it function. See http://jasmine.github.io/ for more details.
     *
     * ## Example:
     *
     * {@example testing/ts/testing.ts region='describeIt'}
     */
    function it(name, fn, timeOut) {
        if (timeOut === void 0) { timeOut = null; }
        return _it(jsmIt, name, fn, timeOut);
    }
    exports_1("it", it);
    /**
     * Like {@link it}, but instructs the test runner to exclude this test
     * entirely. Useful for debugging or for excluding broken tests until
     * they can be fixed.
     *
     * Wrapper around Jasmine xit function. See http://jasmine.github.io/ for more details.
     *
     * ## Example:
     *
     * {@example testing/ts/testing.ts region='xit'}
     */
    function xit(name, fn, timeOut) {
        if (timeOut === void 0) { timeOut = null; }
        return _it(jsmXIt, name, fn, timeOut);
    }
    exports_1("xit", xit);
    /**
     * See {@link fit}.
     */
    function iit(name, fn, timeOut) {
        if (timeOut === void 0) { timeOut = null; }
        return _it(jsmIIt, name, fn, timeOut);
    }
    exports_1("iit", iit);
    /**
     * Like {@link it}, but instructs the test runner to only run this test.
     * Useful for debugging.
     *
     * Wrapper around Jasmine fit function. See http://jasmine.github.io/ for more details.
     *
     * ## Example:
     *
     * {@example testing/ts/testing.ts region='fit'}
     */
    function fit(name, fn, timeOut) {
        if (timeOut === void 0) { timeOut = null; }
        return _it(jsmIIt, name, fn, timeOut);
    }
    exports_1("fit", fit);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (test_injector_1_1) {
                test_injector_1 = test_injector_1_1;
                exports_1({
                    "inject": test_injector_1_1["inject"],
                    "async": test_injector_1_1["async"],
                    "injectAsync": test_injector_1_1["injectAsync"]
                });
            },
            function (matchers_1_1) {
                exports_1({
                    "expect": matchers_1_1["expect"],
                    "NgMatchers": matchers_1_1["NgMatchers"]
                });
            }],
        execute: function() {
            _global = (typeof window === 'undefined' ? lang_1.global : window);
            /**
             * Run a function (with an optional asynchronous callback) after each test case.
             *
             * See http://jasmine.github.io/ for more details.
             *
             * ## Example:
             *
             * {@example testing/ts/testing.ts region='afterEach'}
             */
            exports_1("afterEach", afterEach = _global.afterEach);
            /**
             * Group test cases together under a common description prefix.
             *
             * See http://jasmine.github.io/ for more details.
             *
             * ## Example:
             *
             * {@example testing/ts/testing.ts region='describeIt'}
             */
            exports_1("describe", describe = _global.describe);
            /**
             * See {@link fdescribe}.
             */
            exports_1("ddescribe", ddescribe = _global.fdescribe);
            /**
             * Like {@link describe}, but instructs the test runner to only run
             * the test cases in this group. This is useful for debugging.
             *
             * See http://jasmine.github.io/ for more details.
             *
             * ## Example:
             *
             * {@example testing/ts/testing.ts region='fdescribe'}
             */
            exports_1("fdescribe", fdescribe = _global.fdescribe);
            /**
             * Like {@link describe}, but instructs the test runner to exclude
             * this group of test cases from execution. This is useful for
             * debugging, or for excluding broken tests until they can be fixed.
             *
             * See http://jasmine.github.io/ for more details.
             *
             * ## Example:
             *
             * {@example testing/ts/testing.ts region='xdescribe'}
             */
            exports_1("xdescribe", xdescribe = _global.xdescribe);
            jsmBeforeEach = _global.beforeEach;
            jsmIt = _global.it;
            jsmIIt = _global.fit;
            jsmXIt = _global.xit;
            testInjector = test_injector_1.getTestInjector();
            // Reset the test providers before each test.
            jsmBeforeEach(function () { testInjector.reset(); });
        }
    }
});
//# sourceMappingURL=testing.js.map