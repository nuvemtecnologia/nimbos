(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./packages/card/docs/Card.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js"),d=(n("./packages/styles/scss/theme.scss"),n("./packages/i18n/lib/index.js")),i=n("./node_modules/docz/dist/index.m.js"),l=n("./node_modules/@nimbos/core/lib/index.js");function s(e){var t=e.children,n=e.className,a=e.divided,r=Object(l.a)("n-card-title",{"n-card-title-divided":a},n);return o.a.createElement("div",{className:r,children:t})}s.Right=function(e){var t=e.className,n=e.children,a=Object(l.a)("n-card-title-right",t);return o.a.createElement("div",{className:a,children:n})},s.defaultProps={divided:!1,className:null};var c=s;function p(e){var t=e.children,n=e.className,a=Object(l.a)("n-card-body",{},n);return o.a.createElement("div",{className:a,children:t})}s.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{divided:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Adiciona linha inferior no titulo"},className:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}},p.defaultProps={className:null};var u=p;function m(e){var t=e.children,n=e.className,a=Object(l.a)("n-card",{},n);return o.a.createElement("div",{className:a,children:t})}p.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{className:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}},m.Title=c,m.Body=u,m.defaultProps={className:null};var f=m;m.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}};var y=f,h=n("./packages/button/src/index.js");function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return T});var T=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=C(this,E(t).call(this,e))).layout=null,n}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=b(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"card"}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"h1"},"Card")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"propriedades"}},"Propriedades"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"card-properties"}},"Card Properties"),o.a.createElement(i.PropsTable,{of:y}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"cardbody-properties"}},"Card.Body Properties"),o.a.createElement(i.PropsTable,{of:y.Body}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"cardtitle-properties"}},"Card.Title Properties"),o.a.createElement(i.PropsTable,{of:y.Title}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"exemplos"}},"Exemplos"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"simples"}},"Simples"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:3,__code:"<Card>Os cards sozinhos n\xe3o tem padding</Card>",__scope:{props:this?this.props:n,t:d.a,Card:y,Button:h.a}},o.a.createElement(y,null,"Os cards sozinhos n\xe3o tem padding")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"corpo-body"}},"Corpo (Body)"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:4,__code:"<Card>\n  <Card.Body>O Card.Body tem padding</Card.Body>\n</Card>",__scope:{props:this?this.props:n,t:d.a,Card:y,Button:h.a}},o.a.createElement(y,null,o.a.createElement(y.Body,null,"O Card.Body tem padding"))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"titulo"}},"Titulo"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:5,__code:"<Card>\n  <Card.Title>Sou um card</Card.Title>\n  <Card.Body>O Card.Body tem padding</Card.Body>\n</Card>",__scope:{props:this?this.props:n,t:d.a,Card:y,Button:h.a}},o.a.createElement(y,null,o.a.createElement(y.Title,null,"Sou um card"),o.a.createElement(y.Body,null,"O Card.Body tem padding"))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"titulo-sublinhado"}},"Titulo Sublinhado"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:6,__code:"<Card>\n  <Card.Title divided>Sou um card</Card.Title>\n  <Card.Body>O Card.Body tem padding</Card.Body>\n</Card>",__scope:{props:this?this.props:n,t:d.a,Card:y,Button:h.a}},o.a.createElement(y,null,o.a.createElement(y.Title,{divided:!0},"Sou um card"),o.a.createElement(y.Body,null,"O Card.Body tem padding"))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"bot\xe3o-no-titulo"}},"Bot\xe3o no Titulo"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:7,__code:"<Card>\n  <Card.Title divided>\n    Sou um card\n    <Card.Title.Right>\n      <Button flat flavor=\"success\" icon=\"mdi mdi-plus-box\">\n        {' '}\n        Novo Item{' '}\n      </Button>\n    </Card.Title.Right>\n  </Card.Title>\n  <Card.Body>O Card.Body tem padding</Card.Body>\n</Card>",__scope:{props:this?this.props:n,t:d.a,Card:y,Button:h.a}},o.a.createElement(y,null,o.a.createElement(y.Title,{divided:!0},"Sou um card",o.a.createElement(y.Title.Right,null,o.a.createElement(h.a,{flat:!0,flavor:"success",icon:"mdi mdi-plus-box"}," Novo Item "))),o.a.createElement(y.Body,null,"O Card.Body tem padding"))))}}])&&g(n.prototype,a),l&&g(n,l),t}();T.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-card-docs-card.3cb8c82ffe656e2e93a8.js.map