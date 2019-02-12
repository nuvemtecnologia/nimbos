function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { css } from '@nimbos/core';
var context = React.createContext({});
var SideMenuContext = context.Consumer,
    SideMenuProvider = context.Provider;

function SideMenu(_ref) {
  var children = _ref.children,
      inner = _ref.inner,
      open = _ref.open,
      pinned = _ref.pinned,
      onMenuToggle = _ref.onMenuToggle,
      onPinToggle = _ref.onPinToggle,
      onOverlayClick = _ref.onOverlayClick,
      className = _ref.className;
  var classes = css('n-sidemenu', {
    'n-sidemenu-open': open,
    'n-sidemenu-pinned': pinned,
    'n-sidemenu-inner-opened': inner && inner.open
  }, className);
  var innerOpen = inner && inner.open;
  return React.createElement(React.Fragment, null, React.createElement(SideMenuOverlay, {
    open: !pinned && open || innerOpen,
    onClick: function onClick() {
      return onOverlayClick && onOverlayClick(false);
    }
  }), React.createElement(SideMenuProvider, {
    value: {
      open: open,
      pinned: pinned,
      onMenuToggle: onMenuToggle,
      onPinToggle: onPinToggle
    }
  }, React.createElement("div", {
    className: classes
  }, children)), React.createElement(SideMenuInner, _extends({}, inner, {
    parentOpen: open
  })));
}

function SideMenuOverlay(_ref2) {
  var open = _ref2.open,
      onClick = _ref2.onClick;
  var classes = css('n-sidemenu-overlay', {
    'n-sidemenu-open': open
  });
  return React.createElement("div", {
    className: classes,
    onClick: onClick
  });
}

function SideMenuHeader(_ref3) {
  var iconPin = _ref3.iconPin,
      iconMenu = _ref3.iconMenu;
  return React.createElement(SideMenuContext, null, function (_ref4) {
    var open = _ref4.open,
        pinned = _ref4.pinned,
        onMenuToggle = _ref4.onMenuToggle,
        onPinToggle = _ref4.onPinToggle;
    return React.createElement("div", {
      className: "n-sidemenu-header"
    }, React.createElement("button", {
      onClick: function onClick() {
        return onMenuToggle(!open);
      },
      className: "n-sidemenu-header-toggle"
    }, React.createElement("i", {
      className: iconMenu
    })), React.createElement("button", {
      onClick: function onClick() {
        return onPinToggle(!pinned);
      },
      className: "n-sidemenu-header-pin"
    }, React.createElement("i", {
      className: iconPin
    })));
  });
}

function SideMenuList(_ref5) {
  var items = _ref5.items,
      expanded = _ref5.expanded,
      _onSelect = _ref5.onSelect;
  return React.createElement("ul", {
    className: "n-sidemenu-list"
  }, items && items.map(function (item, i) {
    return React.createElement(SideMenuListItem, _extends({}, item, {
      key: i,
      onSelect: function onSelect() {
        return _onSelect && _onSelect(item);
      },
      expanded: expanded == item
    }));
  }));
}

function SideMenuListItem(_ref6) {
  var icon = _ref6.icon,
      label = _ref6.label,
      expanded = _ref6.expanded,
      onSelect = _ref6.onSelect;
  var classes = css('n-sidemenu-list-item', {
    expanded: expanded
  });
  return React.createElement("li", {
    className: classes,
    onClick: onSelect
  }, React.createElement("span", {
    className: "n-sidemenu-list-item-icon"
  }, React.createElement("i", {
    className: icon
  })), React.createElement("span", {
    className: "n-sidemenu-list-item-text"
  }, " ", label, " "));
}

function SideMenuInner(_ref7) {
  var items = _ref7.items,
      title = _ref7.title,
      className = _ref7.className,
      open = _ref7.open,
      parentOpen = _ref7.parentOpen,
      _onSelect2 = _ref7.onSelect;
  var classes = css('n-sidemenu-inner', {
    'n-sidemenu-open': parentOpen,
    'n-sidemenu-inner-open': open
  }, className);
  return React.createElement("div", {
    className: classes
  }, React.createElement("h1", {
    className: "n-sidemenu-inner-title"
  }, title), React.createElement("ul", {
    className: "n-sidemenu-inner-list"
  }, items && items.map(function (item, i) {
    return React.createElement(SideMenuInnerListItem, _extends({}, item, {
      key: i,
      onSelect: function onSelect() {
        return _onSelect2 && _onSelect2(item);
      }
    }));
  })));
}

function SideMenuInnerListItem(_ref8) {
  var label = _ref8.label,
      onSelect = _ref8.onSelect;
  var classes = css('n-sidemenu-inner-list-item');
  return React.createElement("li", {
    className: classes,
    onClick: onSelect
  }, React.createElement("span", {
    className: "n-sidemenu-inner-list-item-text"
  }, " ", label, " "));
}

SideMenu.Header = SideMenuHeader;
SideMenu.List = SideMenuList;
SideMenu.Inner = SideMenuInner;
SideMenu.SideMenuContext = context;
export default SideMenu;