"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@nimbos/core");

var _Label = _interopRequireDefault(require("./Label"));

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Text =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Text, _React$PureComponent);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, props));
    _this.state = {
      id: props.id || "Text-".concat((0, _v.default)())
    };
    return _this;
  }

  _createClass(Text, [{
    key: "handleIcon",
    value: function handleIcon(icon, onClick) {
      var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'right';
      if (!icon) return;
      var classIcon = (0, _core.css)('n-entry-icon', orientation, {
        'n-entry-icon-clicable': onClick
      }, icon);
      return _react.default.createElement("span", {
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

      var classInput = (0, _core.css)('n-entry', className);
      var Element = 'input';

      if (othersProps.type == 'textarea') {
        Element = 'textarea';
      }

      return _react.default.createElement("span", null, _react.default.createElement(Element, _extends({
        className: classInput,
        placeholder: placeholder,
        id: this.state.id
      }, othersProps)), this.handleIcon(iconLeft, onIconLeftClick, 'left'), this.handleIcon(iconRight, onIconRightClick, 'right'));
    }
  }, {
    key: "render",
    value: function render() {
      var classRoot = (0, _core.css)('n-entry-root');
      var classContainer = (0, _core.css)('n-entry-container', {
        'n-input-icon-left': this.props.iconLeft,
        'n-input-icon-right': this.props.iconRight
      });
      var _this$props2 = this.props,
          label = _this$props2.label,
          width = _this$props2.width;

      if ('label' in this.props) {
        return _react.default.createElement("div", {
          className: classRoot,
          style: {
            width: width
          }
        }, _react.default.createElement(_Label.default, {
          htmlFor: this.state.id
        }, label), _react.default.createElement("div", {
          className: classContainer
        }, this.renderInput()));
      } else {
        return _react.default.createElement("div", {
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
}(_react.default.PureComponent);

exports.default = Text;
Text.propTypes = {
  /** Rótulo do input. */
  label: _propTypes.default.PropTypes.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.node]),

  /** Placeholder do input. */
  placeholder: _propTypes.default.string,

  /** Input desabilitado. */
  disabled: _propTypes.default.bool,

  /** Tamanho horizontal do input. */
  width: _propTypes.default.string,

  /** Ícone no entry a esquerda. */
  iconLeft: _propTypes.default.string,

  /** Ícone no entry a direita. */
  iconRight: _propTypes.default.string
};
Text.defaultProps = {
  width: '100%'
};