import React from 'react';
import { css } from '@nimbos/core';

function Sidebar({ children }) {
  return <div className="n-layout-sidebar">{children}</div>;
}

function Topbar({ children }) {
  return <div className="n-layout-topbar">{children}</div>;
}

function Container({ children }) {
  return <div className="n-layout-container">{children}</div>;
}

function Layout({ children, sidebarExpanded }) {
  const classes = css('n-layout', {
    'n-layout-sidebar-expanded': sidebarExpanded
  });

  return <div className={classes}>{children}</div>;
}

Layout.Topbar = Topbar;
Layout.Sidebar = Sidebar;
Layout.Container = Container;

export default Layout;
