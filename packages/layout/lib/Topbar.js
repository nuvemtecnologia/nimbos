import React from 'react';

function Topbar(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "n-topbar"
  }, children);
}

function TopbarLeft(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: "n-topbar-left"
  }, children);
}

function TopbarRight(_ref3) {
  var children = _ref3.children;
  return React.createElement("div", {
    className: "n-topbar-right"
  }, children);
}

function TopbarDivider() {
  return React.createElement("div", {
    className: "n-topbar-divider"
  });
}

Topbar.Left = TopbarLeft;
Topbar.Right = TopbarRight;
Topbar.Divider = TopbarDivider;
export default Topbar;