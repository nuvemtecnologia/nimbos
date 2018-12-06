function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';
import CheckboxGroupContext from './CheckboxGroupContext';
import CheckboxGroup from './CheckboxGroup';

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "renderText",
    value: function renderText() {
      var text = this.props.text;
      if (!text) return null;
      return React.createElement("span", {
        className: "n-checkbox-text-content"
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          text = _this$props.text,
          children = _this$props.children,
          value = _this$props.value,
          othersProps = _objectWithoutProperties(_this$props, ["disabled", "text", "children", "value"]);

      var _this$context = this.context,
          selectedValue = _this$context.selectedValue,
          changeValue = _this$context.changeValue,
          parentName = _this$context.parentName,
          mapItemProps = _this$context.mapItemProps;
      var currentValues = selectedValue || [];
      var checked = currentValues.includes(value);
      var classList = css('n-checkbox', {
        'n-checkbox-disabled': disabled,
        'n-checkbox-text': text
      });
      return React.createElement("label", {
        className: classList
      }, React.createElement("input", _extends({
        type: "checkbox",
        disabled: disabled,
        value: value,
        onClick: function onClick() {
          return changeValue(value, !checked);
        },
        "data-test-id": "checkbox-".concat(parentName || 'unique', "-").concat(value)
      }, (mapItemProps || function () {
        return {};
      })(this.props), othersProps)), this.renderText());
    }
  }]);

  return Checkbox;
}(React.PureComponent);

export { Checkbox as default };
Checkbox.contextType = CheckboxGroupContext;
Checkbox.propTypes = {
  /** Dispara a função onChange. */
  onChange: PropTypes.func,

  /** Checkbox se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Label para o Checkbox. */
  text: PropTypes.bool
};
Checkbox.Group = CheckboxGroup;
Checkbox.defaultProps = {};