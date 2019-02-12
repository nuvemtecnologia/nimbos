"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@nimbos/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "n-layout-sidebar"
  }, children);
}

function Topbar(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "n-layout-topbar"
  }, children);
}

function Container(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("div", {
    className: "n-layout-container"
  }, children);
}

function Layout(_ref4) {
  var children = _ref4.children,
      sidebarExpanded = _ref4.sidebarExpanded;
  var classes = (0, _core.css)('n-layout', {
    'n-layout-sidebar-expanded': sidebarExpanded
  });
  return _react.default.createElement("div", {
    className: classes
  }, children);
}

Layout.Topbar = Topbar;
Layout.Sidebar = Sidebar;
Layout.Container = Container;
var _default = Layout;
exports.default = _default;