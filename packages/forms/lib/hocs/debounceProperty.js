"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceFieldProperty = debounceFieldProperty;

var _react = _interopRequireDefault(require("react"));

var _debounce = _interopRequireDefault(require("debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function update(props, name, updates) {
  props.formHandlers.appendField(name, updates);
}

function debounceFieldProperty() {
  var delayMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 150;
  var stateName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
  var onChangeName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'onChange';
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$PureComponent) {
        _inherits(_class2, _React$PureComponent);

        function _class2(props) {
          var _this;

          _classCallCheck(this, _class2);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, props));

          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (value) {
            var name = _this.props.name;

            _this.setState(function () {
              _this.update(_this.props, name, _defineProperty({}, stateName, value));

              return {
                value: value
              };
            });
          });

          _this.state = _defineProperty({}, stateName, null);
          _this.update = (0, _debounce.default)(update, delayMs);
          return _this;
        }

        _createClass(_class2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.setState(_defineProperty({}, stateName, this.props.value));
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (prevProps.value !== this.props.value) {
              this.setState(_defineProperty({}, stateName, this.props.value));
            }
          }
        }, {
          key: "render",
          value: function render() {
            var extraProps = {};
            extraProps[stateName] = this.state[stateName];
            extraProps[onChangeName] = this.handleChange;
            return _react.default.createElement(Component, _extends({}, this.props, extraProps));
          }
        }]);

        return _class2;
      }(_react.default.PureComponent)
    );
  };
}