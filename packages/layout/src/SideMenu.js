import React from 'react';
import { css } from '@nimbos/core';
const { Consumer: SideMenuContext, Provider: SideMenuProvider } = React.createContext({});

function SideMenu({ children, inner, open, pinned, onMenuToggle, onPinToggle, onOverlayClick, className }) {
  const classes = css(
    'n-sidemenu',
    {
      'n-sidemenu-open': open,
      'n-sidemenu-pinned': pinned,
      'n-sidemenu-inner-opened': inner && inner.open
    },
    className
  );

  const innerOpen = inner && inner.open;

  return (
    <React.Fragment>
      <SideMenuOverlay open={(!pinned && open) || innerOpen} onClick={() => onOverlayClick && onOverlayClick(false)} />
      <SideMenuProvider value={{ open, pinned, onMenuToggle, onPinToggle }}>
        <div className={classes}>{children}</div>
      </SideMenuProvider>
      <SideMenuInner {...inner} parentOpen={open} />
    </React.Fragment>
  );
}

function SideMenuOverlay({ open, onClick }) {
  const classes = css('n-sidemenu-overlay', {
    'n-sidemenu-open': open
  });

  return <div className={classes} onClick={onClick} />;
}

function SideMenuHeader({ iconPin, iconMenu }) {
  return (
    <SideMenuContext>
      {({ open, pinned, onMenuToggle, onPinToggle }) => (
        <div className="n-sidemenu-header">
          <button onClick={() => onMenuToggle(!open)} className="n-sidemenu-header-toggle">
            <i className={iconMenu} />
          </button>

          <button onClick={() => onPinToggle(!pinned)} className="n-sidemenu-header-pin">
            <i className={iconPin} />
          </button>
        </div>
      )}
    </SideMenuContext>
  );
}

function SideMenuList({ items, expanded, onSelect }) {
  return (
    <ul className="n-sidemenu-list">
      {items &&
        items.map(item => (
          <SideMenuListItem {...item} onSelect={() => onSelect && onSelect(item)} expanded={expanded == item} />
        ))}
    </ul>
  );
}

function SideMenuListItem({ icon, label, expanded, onSelect }) {
  const classes = css('n-sidemenu-list-item', {
    expanded: expanded
  });

  return (
    <li className={classes} onClick={onSelect}>
      <span className="n-sidemenu-list-item-icon">
        <i className={icon} />
      </span>
      <span className="n-sidemenu-list-item-text"> {label} </span>
    </li>
  );
}

function SideMenuInner({ items, title, className, open, parentOpen, onSelect }) {
  const classes = css(
    'n-sidemenu-inner',
    {
      'n-sidemenu-open': parentOpen,
      'n-sidemenu-inner-open': open
    },
    className
  );

  return (
    <div className={classes}>
      <h1 className="n-sidemenu-inner-title">{title}</h1>
      <ul className="n-sidemenu-inner-list">
        {items && items.map(item => <SideMenuInnerListItem {...item} onSelect={() => onSelect && onSelect(item)} />)}
      </ul>
    </div>
  );
}

function SideMenuInnerListItem({ label, onSelect }) {
  const classes = css('n-sidemenu-inner-list-item');

  return (
    <li className={classes} onClick={onSelect}>
      <span className="n-sidemenu-inner-list-item-text"> {label} </span>
    </li>
  );
}

SideMenu.Header = SideMenuHeader;
SideMenu.List = SideMenuList;
SideMenu.Inner = SideMenuInner;

export default SideMenu;
