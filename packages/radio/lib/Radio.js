"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@nimbos/core");

var _RadioGroupContext = _interopRequireDefault(require("./RadioGroupContext"));

var _RadioGroup = _interopRequireDefault(require("./RadioGroup"));

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

var Radio =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Radio).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: "renderText",
    value: function renderText() {
      var text = this.props.text;
      if (!text) return null;
      return _react.default.createElement("span", {
        className: "n-radio-text-content"
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
      var checked = selectedValue == value;
      var classList = (0, _core.css)('n-radio', {
        'n-radio-disabled': disabled,
        'n-radio-text': text
      });
      return _react.default.createElement("label", {
        className: classList
      }, _react.default.createElement("input", _extends({
        type: "radio",
        disabled: disabled,
        value: value,
        onClick: function onClick() {
          return changeValue(value);
        },
        checked: checked,
        "data-test-id": "radio-".concat(parentName || 'unique', "-").concat(value)
      }, (mapItemProps || function () {
        return {};
      })(this.props), othersProps)), this.renderText());
    }
  }]);

  return Radio;
}(_react.default.PureComponent);

exports.default = Radio;
Radio.contextType = _RadioGroupContext.default;
Radio.propTypes = {
  /** Dispara a função onChange. */
  onChange: _propTypes.default.func,

  /** Radio se torna desabilitado. */
  disabled: _propTypes.default.bool,

  /** Label para o Radio. */
  text: _propTypes.default.bool
};
Radio.Group = _RadioGroup.default;
Radio.defaultProps = {};