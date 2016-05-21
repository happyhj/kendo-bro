System.register(['angular2/core', './control_value_accessor', 'angular2/src/facade/lang', 'angular2/src/facade/collection'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, control_value_accessor_1, lang_1, collection_1;
    var SELECT_VALUE_ACCESSOR, SelectControlValueAccessor, NgSelectOption;
    function _buildValueString(id, value) {
        if (lang_1.isBlank(id))
            return "" + value;
        if (!lang_1.isPrimitive(value))
            value = "Object";
        return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
    }
    function _extractId(valueString) {
        return valueString.split(":")[0];
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (control_value_accessor_1_1) {
                control_value_accessor_1 = control_value_accessor_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            }],
        execute: function() {
            SELECT_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }), multi: true }));
            /**
             * The accessor for writing a value and listening to changes on a select element.
             *
             * Note: We have to listen to the 'change' event because 'input' events aren't fired
             * for selects in Firefox and IE:
             * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
             * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
             *
             */
            SelectControlValueAccessor = (function () {
                function SelectControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /** @internal */
                    this._optionMap = new Map();
                    /** @internal */
                    this._idCounter = 0;
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                }
                SelectControlValueAccessor.prototype.writeValue = function (value) {
                    this.value = value;
                    var valueString = _buildValueString(this._getOptionId(value), value);
                    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
                };
                SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = function (valueString) { fn(_this._getOptionValue(valueString)); };
                };
                SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /** @internal */
                SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
                /** @internal */
                SelectControlValueAccessor.prototype._getOptionId = function (value) {
                    for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
                        var id = _a[_i];
                        if (lang_1.looseIdentical(this._optionMap.get(id), value))
                            return id;
                    }
                    return null;
                };
                /** @internal */
                SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    var value = this._optionMap.get(_extractId(valueString));
                    return lang_1.isPresent(value) ? value : valueString;
                };
                SelectControlValueAccessor = __decorate([
                    core_1.Directive({
                        selector: 'select[ngControl],select[ngFormControl],select[ngModel]',
                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [SELECT_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
                ], SelectControlValueAccessor);
                return SelectControlValueAccessor;
            }());
            exports_1("SelectControlValueAccessor", SelectControlValueAccessor);
            /**
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * ### Example
             *
             * ```
             * <select ngControl="city">
             *   <option *ngFor="#c of cities" [value]="c"></option>
             * </select>
             * ```
             */
            NgSelectOption = (function () {
                function NgSelectOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (lang_1.isPresent(this._select))
                        this.id = this._select._registerOption();
                }
                Object.defineProperty(NgSelectOption.prototype, "ngValue", {
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._select._optionMap.set(this.id, value);
                        this._setElementValue(_buildValueString(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgSelectOption.prototype, "value", {
                    set: function (value) {
                        this._setElementValue(value);
                        if (lang_1.isPresent(this._select))
                            this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /** @internal */
                NgSelectOption.prototype._setElementValue = function (value) {
                    this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
                };
                NgSelectOption.prototype.ngOnDestroy = function () {
                    if (lang_1.isPresent(this._select)) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                __decorate([
                    core_1.Input('ngValue'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], NgSelectOption.prototype, "ngValue", null);
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], NgSelectOption.prototype, "value", null);
                NgSelectOption = __decorate([
                    core_1.Directive({ selector: 'option' }),
                    __param(2, core_1.Optional()),
                    __param(2, core_1.Host()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, SelectControlValueAccessor])
                ], NgSelectOption);
                return NgSelectOption;
            }());
            exports_1("NgSelectOption", NgSelectOption);
        }
    }
});
//# sourceMappingURL=select_control_value_accessor.js.map