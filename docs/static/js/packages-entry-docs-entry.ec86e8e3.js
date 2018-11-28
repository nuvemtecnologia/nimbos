(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./packages/entry/docs/entry.mdx":function(e,o,n){"use strict";n.r(o),n.d(o,"default",function(){return f});var t=n("./node_modules/react/index.js"),l=n.n(t),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=(n("./packages/styles/scss/theme.scss"),n("./packages/i18n/lib/index.js")),r=n("./node_modules/react-grid-system/build/index.js"),m=n("./node_modules/docz/dist/index.m.js"),p=n("./packages/entry/src/index.js");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,o){if(null==e)return{};var n,t,l=function(e,o){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(l[n]=e[n]);return l}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function i(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function b(e,o){return!o||"object"!==d(o)&&"function"!==typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,o){return(u=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var f=function(e){function o(e){var n;return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(n=b(this,h(o).call(this,e))).layout=null,n}var n,t,d;return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&u(e,o)}(o,l.a.Component),n=o,(t=[{key:"render",value:function(){var e=this.props,o=e.components,n=s(e,["components"]);return l.a.createElement(a.MDXTag,{name:"wrapper",components:o},l.a.createElement(a.MDXTag,{name:"h1",components:o,props:{id:"entry"}},l.a.createElement(a.MDXTag,{name:"strong",components:o,parentName:"h1"},"Entry")),l.a.createElement(m.PropsTable,{of:p.b}),l.a.createElement(a.MDXTag,{name:"h2",components:o,props:{id:"text-entry"}},"Text Entry"),l.a.createElement(a.MDXTag,{name:"h3",components:o,props:{id:"exemplo-simples"}},"Exemplo Simples"),l.a.createElement(m.Playground,{__codesandbox:"undefined",__position:1,__code:"<Text label={t('common.label')} placeholder={t('common.placeholder')} />",__scope:{props:this?this.props:n,t:c.a,Row:r.Row,Col:r.Col,Text:p.b}},l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder")})),l.a.createElement(a.MDXTag,{name:"h3",components:o,props:{id:"exemplos-label"}},"Exemplos Label"),l.a.createElement(m.Playground,{__codesandbox:"undefined",__position:2,__code:"<Row>\n  <Col md={4}>\n    <Text label={t('common.label')} placeholder={t('common.placeholder')} />\n  </Col>\n  <Col md={4}>\n    <Text label placeholder={t('common.placeholder')} />\n  </Col>\n\n  <Col md={4}>\n    <Text placeholder={t('common.placeholder')} />\n  </Col>\n</Row>",__scope:{props:this?this.props:n,t:c.a,Row:r.Row,Col:r.Col,Text:p.b}},l.a.createElement(r.Row,null,l.a.createElement(r.Col,{md:4},l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder")})),l.a.createElement(r.Col,{md:4},l.a.createElement(p.b,{label:!0,placeholder:Object(c.a)("common.placeholder")})),l.a.createElement(r.Col,{md:4},l.a.createElement(p.b,{placeholder:Object(c.a)("common.placeholder")})))),l.a.createElement(a.MDXTag,{name:"h3",components:o,props:{id:"exemplos-disabled"}},"Exemplos Disabled"),l.a.createElement(m.Playground,{__codesandbox:"undefined",__position:3,__code:"<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  disabled\n/>",__scope:{props:this?this.props:n,t:c.a,Row:r.Row,Col:r.Col,Text:p.b}},l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),disabled:!0})),l.a.createElement(a.MDXTag,{name:"h3",components:o,props:{id:"exemplos-width"}},"Exemplos Width"),l.a.createElement(m.Playground,{__codesandbox:"undefined",__position:4,__code:"<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  width=\"50%\"\n/>\n<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  width=\"392px\"\n/>\n<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  width=\"49rem\"\n/>",__scope:{props:this?this.props:n,t:c.a,Row:r.Row,Col:r.Col,Text:p.b}},l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),width:"50%"}),l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),width:"392px"}),l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),width:"49rem"})),l.a.createElement(a.MDXTag,{name:"h3",components:o,props:{id:"exemplos-icon"}},"Exemplos Icon"),l.a.createElement(m.Playground,{__codesandbox:"undefined",__position:5,__code:"<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  iconLeft=\"fas fa-cloud\"\n/>\n<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  iconRight=\"fas fa-cloud\"\n/>\n<Text\n  label={t('common.label')}\n  placeholder={t('common.placeholder')}\n  iconRight=\"fas fa-cloud\"\n  iconLeft=\"fas fa-cloud\"\n/>",__scope:{props:this?this.props:n,t:c.a,Row:r.Row,Col:r.Col,Text:p.b}},l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),iconLeft:"fas fa-cloud"}),l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),iconRight:"fas fa-cloud"}),l.a.createElement(p.b,{label:Object(c.a)("common.label"),placeholder:Object(c.a)("common.placeholder"),iconRight:"fas fa-cloud",iconLeft:"fas fa-cloud"})))}}])&&i(n.prototype,t),d&&i(n,d),o}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-entry-docs-entry.24852f2c504a49133bfc.js.map