"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Topbar(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "n-topbar"
  }, children);
}

function TopbarLeft(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "n-topbar-left"
  }, children);
}

function TopbarRight(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("div", {
    className: "n-topbar-right"
  }, children);
}

function TopbarDivider() {
  return _react.default.createElement("div", {
    className: "n-topbar-divider"
  });
}

Topbar.Left = TopbarLeft;
Topbar.Right = TopbarRight;
Topbar.Divider = TopbarDivider;
var _default = Topbar;
exports.default = _default;