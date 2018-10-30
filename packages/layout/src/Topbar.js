import React from 'react';

function Topbar({ children }) {
  return <div className="n-topbar">{children}</div>;
}

function TopbarLeft({ children }) {
  return <div className="n-topbar-left">{children}</div>;
}

function TopbarRight({ children }) {
  return <div className="n-topbar-right">{children}</div>;
}

function TopbarDivider() {
  return <div className="n-topbar-divider" />;
}

Topbar.Left = TopbarLeft;
Topbar.Right = TopbarRight;
Topbar.Divider = TopbarDivider;

export default Topbar;
