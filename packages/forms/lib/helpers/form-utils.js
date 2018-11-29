function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import uniq from 'lodash.uniq';
import concat from 'lodash.concat';
import { shallowEqual } from 'recompose';
export function notEmpty(value) {
  return typeof value !== 'undefined';
}
export function unwrapFormData(data) {
  var values = {};
  var errors = {};
  var touched = {};
  var fields = {};

  for (var name in data) {
    if (notEmpty(data[name].value)) values[name] = data[name].value;
    if (notEmpty(data[name].error)) errors[name] = data[name].error;
    if (notEmpty(data[name].touched)) touched[name] = data[name].touched;
    if (notEmpty(data[name].field)) fields[name] = data[name].field;
  }

  return {
    values: values,
    errors: errors,
    touched: touched,
    fields: fields
  };
}
export function wrapFormData(props) {
  var _props$values = props.values,
      values = _props$values === void 0 ? {} : _props$values,
      _props$errors = props.errors,
      errors = _props$errors === void 0 ? {} : _props$errors,
      _props$touched = props.touched,
      touched = _props$touched === void 0 ? {} : _props$touched,
      _props$fields = props.fields,
      fields = _props$fields === void 0 ? {} : _props$fields;
  var data = {};
  var names = uniq(concat(Object.keys(values || {}), Object.keys(errors || {}), Object.keys(touched || {}), Object.keys(fields || {})));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;
      data[name] = {};
      if (notEmpty(values[name])) data[name].value = values[name];
      if (notEmpty(errors[name])) data[name].error = errors[name];
      if (notEmpty(touched[name])) data[name].touched = touched[name];
      if (notEmpty(fields[name])) data[name].field = fields[name];
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

  return data;
}
export function mapFormSimpleProps(props) {
  var data = props.data,
      onChange = props.onChange,
      p = _objectWithoutProperties(props, ["data", "onChange"]);

  var rawData = wrapFormData(data);

  var rawOnChange = function rawOnChange(data) {
    return onChange(data);
  };

  return _objectSpread({}, p, {
    data: rawData,
    onChange: rawOnChange
  });
}
export function mapFormProps(props) {
  var values = props.values,
      errors = props.errors,
      touched = props.touched,
      fields = props.fields,
      onChangeValues = props.onChangeValues,
      onChangeErrors = props.onChangeErrors,
      onChangeTouched = props.onChangeTouched,
      onChangeFields = props.onChangeFields,
      p = _objectWithoutProperties(props, ["values", "errors", "touched", "fields", "onChangeValues", "onChangeErrors", "onChangeTouched", "onChangeFields"]);

  var arg = {
    values: values,
    errors: errors,
    touched: touched,
    fields: fields
  };
  var events = {
    onChangeValues: onChangeValues,
    onChangeErrors: onChangeErrors,
    onChangeTouched: onChangeTouched,
    onChangeFields: onChangeFields
  };
  var data = wrapFormData(arg);
  var onChange = onFormChange(arg, events);
  return _objectSpread({}, p, {
    data: data,
    onChange: onChange
  });
}
export function onFormChange(prevData, events) {
  return function (data) {
    var nextData = unwrapFormData(data);

    if (!shallowEqual(prevData.values || {}, nextData.values || {})) {
      events.onChangeValues(nextData.values);
    }

    if (!shallowEqual(prevData.errors || {}, nextData.errors || {})) {
      events.onChangeErrors(nextData.errors);
    }

    if (!shallowEqual(prevData.touched || {}, nextData.touched || {})) {
      events.onChangeTouched(nextData.touched);
    }

    if (!shallowEqual(prevData.fields || {}, nextData.fields || {})) {
      events.onChangeFields(nextData.fields);
    }
  };
}