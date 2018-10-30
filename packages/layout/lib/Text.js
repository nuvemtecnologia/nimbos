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
import Label from './Label';
import uuid from 'uuid/v4';

var Text =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Text, _React$PureComponent);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, props));
    _this.state = {
      id: props.id || "Text-".concat(uuid())
    };
    return _this;
  }

  _createClass(Text, [{
    key: "handleIcon",
    value: function handleIcon(icon, onClick) {
      var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'right';
      if (!icon) return;
      var classIcon = css('n-entry-icon', orientation, {
        'n-entry-icon-clicable': onClick
      }, icon);
      return React.createElement("span", {
        onClick: onClick,
        className: classIcon
      });
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props = this.props,
          children = _this$props.children,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          width = _this$props.width,
          iconRight = _this$props.iconRight,
          iconLeft = _this$props.iconLeft,
          className = _this$props.className,
          onIconRightClick = _this$props.onIconRightClick,
          onIconLeftClick = _this$props.onIconLeftClick,
          othersProps = _objectWithoutProperties(_this$props, ["children", "placeholder", "label", "width", "iconRight", "iconLeft", "className", "onIconRightClick", "onIconLeftClick"]);

      var classInput = css('n-entry', className);
      return React.createElement("span", null, React.createElement("input", _extends({
        className: classInput,
        placeholder: placeholder,
        id: this.state.id
      }, othersProps)), this.handleIcon(iconLeft, onIconLeftClick, 'left'), this.handleIcon(iconRight, onIconRightClick, 'right'));
    }
  }, {
    key: "render",
    value: function render() {
      var classRoot = css('n-entry-root');
      var classContainer = css('n-entry-container', {
        'n-input-icon-left': this.props.iconLeft,
        'n-input-icon-right': this.props.iconRight
      });
      var _this$props2 = this.props,
          label = _this$props2.label,
          width = _this$props2.width;

      if ('label' in this.props) {
        return React.createElement("div", {
          className: classRoot,
          style: {
            width: width
          }
        }, React.createElement(Label, {
          htmlFor: this.state.id
        }, label), React.createElement("div", {
          className: classContainer
        }, this.renderInput()));
      } else {
        return React.createElement("div", {
          style: {
            width: width,
            boxSizing: 'border-box'
          },
          className: classRoot
        }, this.renderInput());
      }
    }
  }]);

  return Text;
}(React.PureComponent);

export { Text as default };
Text.propTypes = {
  /** Rótulo do input. */
  label: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Placeholder do input. */
  placeholder: PropTypes.string,

  /** Input desabilitado. */
  disabled: PropTypes.bool,

  /** Tamanho horizontal do input. */
  width: PropTypes.string,

  /** Ícone no entry a esquerda. */
  iconLeft: PropTypes.string,

  /** Ícone no entry a direita. */
  iconRight: PropTypes.string
};
Text.defaultProps = {
  width: '100%'
};