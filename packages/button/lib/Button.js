"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@nimbos/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      return _react.default.createElement("span", {
        className: "n-btn-icon-element ".concat(icon)
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var children = this.props.children;
      if (!children) return null;
      return _react.default.createElement("span", {
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
          testName = _this$props2.testName,
          testPrefix = _this$props2.testPrefix,
          icon = _this$props2.icon,
          iconRight = _this$props2.iconRight,
          withIconBackground = _this$props2.withIconBackground,
          othersProps = _objectWithoutProperties(_this$props2, ["children", "flavor", "outlined", "flat", "testName", "testPrefix", "icon", "iconRight", "withIconBackground"]);

      var props = othersProps;
      var classList = (0, _core.css)('n-btn', (_css = {}, _defineProperty(_css, "n-btn-".concat(flavor), !!flavor), _defineProperty(_css, 'n-btn-outlined', outlined), _defineProperty(_css, 'n-btn-flat', flat), _defineProperty(_css, 'n-btn-icon', icon), _defineProperty(_css, 'n-btn-icon-right', iconRight), _defineProperty(_css, 'with-icon-background', withIconBackground), _css));

      if (!children) {
        classList += ' n-btn-childrenless';
      }

      if (testName) {
        props = _objectSpread({}, othersProps, {
          testName: testName,
          'data-test-id': "".concat(testPrefix, "-").concat(testName)
        });
      }

      return _react.default.createElement("button", _extends({
        className: classList
      }, props), this.renderIcon('left'), this.renderText(), this.renderIcon('right'));
    }
  }]);

  return Button;
}(_react.default.PureComponent);

exports.default = Button;
Button.propTypes = {
  /** Conteudo do botão. */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),

  /** Dispara a função onClick. */
  onClick: _propTypes.default.func,

  /** Estilo de intenção do botão. */
  flavor: _propTypes.default.oneOfType([_propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info'])]),

  /** Botão se torna desabilitado. */
  disabled: _propTypes.default.bool,

  /** Botão se torna estilo flat. */
  flat: _propTypes.default.bool,

  /** Botão se torna estilo outlined. */
  outlined: _propTypes.default.bool,

  /** Botão usa ícone. */
  icon: _propTypes.default.string,

  /** Ícone no lado direito do botão. */
  iconRight: _propTypes.default.bool,
  testPrefix: _propTypes.default.string,
  testName: _propTypes.default.string
};
Button.defaultProps = {
  testPrefix: 'button'
};