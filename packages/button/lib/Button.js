function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "renderIcon",
    value: function renderIcon(position) {
      var _this$props = this.props,
          icon = _this$props.icon,
          iconRight = _this$props.iconRight;
      if (!icon) return null;
      if (position == 'right' && !iconRight) return null;
      if (position == 'left' && iconRight) return null;
      return React.createElement("span", {
        className: "n-btn-icon-element ".concat(icon)
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var children = this.props.children;
      if (!children) return null;
      return React.createElement("span", {
        className: "n-btn-text-content",
        children: children
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _css;

      var _this$props2 = this.props,
          children = _this$props2.children,
          flavor = _this$props2.flavor,
          outlined = _this$props2.outlined,
          flat = _this$props2.flat,
          icon = _this$props2.icon,
          iconRight = _this$props2.iconRight,
          withIconBackground = _this$props2.withIconBackground,
          othersProps = _objectWithoutProperties(_this$props2, ["children", "flavor", "outlined", "flat", "icon", "iconRight", "withIconBackground"]);

      var classList = css('n-btn', (_css = {}, _defineProperty(_css, "n-btn-".concat(flavor), !!flavor), _defineProperty(_css, 'n-btn-outlined', outlined), _defineProperty(_css, 'n-btn-flat', flat), _defineProperty(_css, 'n-btn-icon', icon), _defineProperty(_css, 'n-btn-icon-right', iconRight), _defineProperty(_css, 'with-icon-background', withIconBackground), _css));

      if (!children) {
        classList += ' n-btn-childrenless';
      }

      return React.createElement("button", _extends({
        className: classList
      }, othersProps), this.renderIcon('left'), this.renderText(), this.renderIcon('right'));
    }
  }]);

  return Button;
}(React.PureComponent);

export { Button as default };
Button.propTypes = {
  /** Conteudo do botão. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),

  /** Dispara a função onClick. */
  onClick: PropTypes.func,

  /** Estilo de intenção do botão. */
  flavor: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info'])]),

  /** Botão se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Botão se torna estilo flat. */
  flat: PropTypes.bool,

  /** Botão se torna estilo outlined. */
  outlined: PropTypes.bool,

  /** Botão usa ícone. */
  icon: PropTypes.string,

  /** Ícone no lado direito do botão. */
  iconRight: PropTypes.bool
};
Button.defaultProps = {};