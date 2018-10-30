(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./packages/layout/docs/layout.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),i=a("./node_modules/@mdx-js/tag/dist/index.js"),o=(a("./packages/styles/scss/theme.scss"),a("./packages/i18n/lib/index.js"),a("./node_modules/docz/dist/index.m.js")),c=a("./packages/core/lib/index.js");function l(e){var n=e.children,a=e.sidebarExpanded,t=Object(c.a)("n-layout",{"n-layout-sidebar-expanded":a});return r.a.createElement("div",{className:t},n)}l.Topbar=function(e){var n=e.children;return r.a.createElement("div",{className:"n-layout-topbar"},n)},l.Sidebar=function(e){var n=e.children;return r.a.createElement("div",{className:"n-layout-sidebar"},n)},l.Container=function(e){var n=e.children;return r.a.createElement("div",{className:"n-layout-container"},n)};var s=l;l.__docgenInfo={description:"",methods:[],displayName:"Layout"};var m=r.a.createContext({}),u=m.Consumer,d=m.Provider;function p(e){var n=e.children,a=e.inner,t=e.open,i=e.pinned,o=e.onMenuToggle,l=e.onPinToggle,s=e.onOverlayClick,m=e.className,u=Object(c.a)("n-sidemenu",{"n-sidemenu-open":t,"n-sidemenu-pinned":i,"n-sidemenu-inner-opened":a&&a.open},m),p=a&&a.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{open:!i&&t||p,onClick:function(){return s&&s(!1)}}),r.a.createElement(d,{value:{open:t,pinned:i,onMenuToggle:o,onPinToggle:l}},r.a.createElement("div",{className:u},n)),r.a.createElement(g,Object.assign({},a,{parentOpen:t})))}function f(e){var n=e.open,a=e.onClick,t=Object(c.a)("n-sidemenu-overlay",{"n-sidemenu-open":n});return r.a.createElement("div",{className:t,onClick:a})}function b(e){var n=e.icon,a=e.label,t=e.expanded,i=e.onSelect,o=Object(c.a)("n-sidemenu-list-item",{expanded:t});return r.a.createElement("li",{className:o,onClick:i},r.a.createElement("span",{className:"n-sidemenu-list-item-icon"},r.a.createElement("i",{className:n})),r.a.createElement("span",{className:"n-sidemenu-list-item-text"}," ",a," "))}function g(e){var n=e.items,a=e.title,t=e.className,i=e.open,o=e.parentOpen,l=e.onSelect,s=Object(c.a)("n-sidemenu-inner",{"n-sidemenu-open":o,"n-sidemenu-inner-open":i},t);return r.a.createElement("div",{className:s},r.a.createElement("h1",{className:"n-sidemenu-inner-title"},a),r.a.createElement("ul",{className:"n-sidemenu-inner-list"},n&&n.map(function(e){return r.a.createElement(v,Object.assign({},e,{onSelect:function(){return l&&l(e)}}))})))}function v(e){var n=e.label,a=e.onSelect,t=Object(c.a)("n-sidemenu-inner-list-item");return r.a.createElement("li",{className:t,onClick:a},r.a.createElement("span",{className:"n-sidemenu-inner-list-item-text"}," ",n," "))}p.Header=function(e){var n=e.iconPin,a=e.iconMenu;return r.a.createElement(u,null,function(e){var t=e.open,i=e.pinned,o=e.onMenuToggle,c=e.onPinToggle;return r.a.createElement("div",{className:"n-sidemenu-header"},r.a.createElement("button",{onClick:function(){return o(!t)},className:"n-sidemenu-header-toggle"},r.a.createElement("i",{className:a})),r.a.createElement("button",{onClick:function(){return c(!i)},className:"n-sidemenu-header-pin"},r.a.createElement("i",{className:n})))})},p.List=function(e){var n=e.items,a=e.expanded,t=e.onSelect;return r.a.createElement("ul",{className:"n-sidemenu-list"},n&&n.map(function(e){return r.a.createElement(b,Object.assign({},e,{onSelect:function(){return t&&t(e)},expanded:a==e}))}))},p.Inner=g;function E(e){var n=e.children;return r.a.createElement("div",{className:"n-topbar"},n)}p.__docgenInfo={description:"",methods:[],displayName:"SideMenu"},E.Left=function(e){var n=e.children;return r.a.createElement("div",{className:"n-topbar-left"},n)},E.Right=function(e){var n=e.children;return r.a.createElement("div",{className:"n-topbar-right"},n)},E.Divider=function(){return r.a.createElement("div",{className:"n-topbar-divider"})};E.__docgenInfo={description:"",methods:[],displayName:"Topbar"};var y=s;function N(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components;N(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"layout"}},r.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"h1"},"Layout")),r.a.createElement(o.PropsTable,{of:y}),r.a.createElement(i.MDXTag,{name:"pre",components:n},r.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},'    import Layout, { SideMenu, Topbar } from \'@nimbos/layout\';\n\n    <Layout>\n        <Layout.Topbar>\n            <Topbar>\n                <Topbar.Left> \n                    I`m a left content\n                </Topbar.Left>\n            </Topbar>\n        </Layout.Topbar>\n        <Layout.Sidebar>\n            <SideMenu>\n                    <SideMenu \n                        onMenuToggle={this.handleToggleMenu}\n                        onPinToggle={this.handlePinMenu}\n                        onOverlayClick={this.handleOverlayClick}\n                        open={menuOpen}\n                        pinned={pinned}\n                    >\n                    <SideMenu.Header iconMenu="fa fa-bars" iconPin="fas fa-thumbtack" />\n                    <SideMenu.List onSelect={this.handleMenuSelected} items={menuItems} />\n                </SideMenu>\n            </SideMenu>\n        </Layout.Sidebar>\n        <Layout.Container>\n            I\'m a Content\n        </Layout.Container>\n    </Layout>\n')))}}}]);