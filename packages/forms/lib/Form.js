"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSimple = exports.Form = exports.FormHash = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _formContext = require("./helpers/form-context");

var _formUtils = require("./helpers/form-utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var FormComponent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormComponent, _PureComponent);

  function FormComponent(props) {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this, props));
    _this.state = {
      listeners: {
        '*': []
      }
    };
    _this.setField = _this.setField.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.appendField = _this.appendField.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.subscribe = _this.subscribe.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlers = {
      setField: _this.setField,
      appendField: _this.appendField,
      subscribe: _this.subscribe
    };
    _this.initialized = false;
    _this.queueValidations = [];
    return _this;
  }

  _createClass(FormComponent, [{
    key: "subscribe",
    value: function subscribe(names, fn) {
      var _this2 = this;

      var names = [].concat(names);
      var unsubscribes = [];
      var listeners = this.state.listeners;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var name = _step.value;
          listeners[name] = listeners[name] || [];
          listeners[name].push(fn);
          unsubscribes.push(function (listeners) {
            listeners[name] = listeners[name].filter(function (x) {
              return x != fn;
            });
            return listeners;
          });
        };

        for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return function () {
        _this2.setState(function () {
          var listeners = _this2.state.listeners;

          for (var uns in unsubscribes) {
            if (typeof uns === 'function') {
              listeners = uns(listeners);
            }
          }

          return {
            listeners: listeners
          };
        });
      };
    }
  }, {
    key: "setField",
    value: function setField(name, fieldData) {
      var validate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _this$props = this.props,
          data = _this$props.data,
          onChange = _this$props.onChange;

      var newData = _objectSpread({}, data, _defineProperty({}, name, fieldData));

      onChange(newData);

      if (validate) {
        this.validate(name, newData);
      }
    }
  }, {
    key: "validate",
    value: function validate(name, data) {
      var _this3 = this;

      var listeners = this.state.listeners[name] || [];
      listeners = listeners.concat(this.state.listeners['*'] || []);
      var updateFields = {};
      var result = null;

      var setField = function setField(key) {
        return updateFields[key] = true;
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = listeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var listener = _step2.value;

          if (listener.onlyField) {
            result = listener(name, data[name] || {});

            if (result) {
              updateFields[name] = true;
              data = _objectSpread({}, data, _defineProperty({}, name, _objectSpread({}, data[name], result)));
            }
          } else {
            result = listener(name, data || {});

            if (result) {
              Object.keys(result).forEach(setField);
              data = _objectSpread({}, data, result);
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      updateFields = Object.keys(updateFields);

      if (updateFields.length) {
        updateFields.filter(function (key) {
          return data[key];
        }).forEach(function (key) {
          return _this3.setField(key, data[key], false);
        });
      }

      return data;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initValidations();
    }
  }, {
    key: "initValidations",
    value: function initValidations() {
      var data = this.props.data;

      for (var name in this.state.listeners) {
        data = this.validate(name, data);
      }

      this.props.onChange(data);
    }
  }, {
    key: "appendField",
    value: function appendField(name, fieldData) {
      var data = this.props.data;
      var originalFieldData = data[name] || {};
      this.setField(name, _objectSpread({}, originalFieldData, fieldData));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          children = _this$props2.children;

      if (!this.initialized) {
        this.initialized = true;
        setTimeout(function () {
          return _this4.initValidations();
        });
      }

      return _react.default.createElement(_formContext.FormHandlerProvider, {
        value: this.handlers
      }, _react.default.createElement(_formContext.FormDataProvider, {
        value: data
      }, children));
    }
  }]);

  return FormComponent;
}(_react.PureComponent);

var FormHash = (0, _recompose.setDisplayName)('FormHash')(FormComponent);
exports.FormHash = FormHash;
var Form = (0, _recompose.mapProps)(_formUtils.mapFormProps)(FormComponent);
exports.Form = Form;
var FormSimple = (0, _recompose.compose)((0, _recompose.setDisplayName)('FormSimple'), (0, _recompose.mapProps)(_formUtils.mapFormSimpleProps))(FormComponent);
exports.FormSimple = FormSimple;