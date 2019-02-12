"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withField = withField;
exports.mapDataToField = exports.withFormHandlersContext = exports.withFormDataContext = void 0;

var _formContext = require("../helpers/form-context");

var _recompose = require("recompose");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withFormDataContext = (0, _recompose.fromRenderProps)(_formContext.FormDataConsumer, function (data) {
  return {
    formData: data
  };
});
exports.withFormDataContext = withFormDataContext;
var withFormHandlersContext = (0, _recompose.fromRenderProps)(_formContext.FormHandlerConsumer, function (handlers) {
  return {
    formHandlers: handlers
  };
});
exports.withFormHandlersContext = withFormHandlersContext;
var mapDataToField = (0, _recompose.mapProps)(function (props) {
  var formData = props.formData,
      p = _objectWithoutProperties(props, ["formData"]);

  if (props.name) {
    var defaultData = '*' in formData ? formData['*'] : null;
    return _objectSpread({}, p, formData[props.name], {
      defaultData: defaultData
    });
  }

  return props;
});
exports.mapDataToField = mapDataToField;

function withField() {
  var withHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  for (var _len = arguments.length, extraHocs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extraHocs[_key - 1] = arguments[_key];
  }

  return function (component) {
    var hocs = [];

    if (withHandlers) {
      hocs.push(withFormHandlersContext);
    }

    hocs.push(withFormDataContext);
    hocs.push(mapDataToField);
    hocs.push(_recompose.pure);
    hocs.push.apply(hocs, extraHocs);
    return _recompose.compose.apply(void 0, hocs)(component);
  };
}