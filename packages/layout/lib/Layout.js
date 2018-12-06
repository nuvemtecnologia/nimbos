import React from 'react';
import { css } from '@nimbos/core';

function Sidebar(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "n-layout-sidebar"
  }, children);
}

function Topbar(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: "n-layout-topbar"
  }, children);
}

function Container(_ref3) {
  var children = _ref3.children;
  return React.createElement("div", {
    className: "n-layout-container"
  }, children);
}

function Layout(_ref4) {
  var children = _ref4.children,
      sidebarExpanded = _ref4.sidebarExpanded;
  var classes = css('n-layout', {
    'n-layout-sidebar-expanded': sidebarExpanded
  });
  return React.createElement("div", {
    className: classes
  }, children);
}

Layout.Topbar = Topbar;
Layout.Sidebar = Sidebar;
Layout.Container = Container;
export default Layout;