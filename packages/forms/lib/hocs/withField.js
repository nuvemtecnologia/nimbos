function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { FormDataConsumer, FormHandlerConsumer } from '../helpers/form-context';
import { fromRenderProps, compose, mapProps, setDisplayName, wrapDisplayName, pure } from 'recompose';
export var withFormDataContext = fromRenderProps(FormDataConsumer, function (data) {
  return {
    formData: data
  };
});
export var withFormHandlersContext = fromRenderProps(FormHandlerConsumer, function (handlers) {
  return {
    formHandlers: handlers
  };
});
export var mapDataToField = mapProps(function (props) {
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
export function withField() {
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
    hocs.push(pure);
    hocs.push.apply(hocs, extraHocs);
    return compose.apply(void 0, hocs)(component);
  };
}