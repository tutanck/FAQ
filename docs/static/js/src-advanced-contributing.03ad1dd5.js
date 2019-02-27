(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/advanced/contributing.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,i(n).call(this,e))).layout=null,t}var t,a,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"contributing"}},"Contributing"),o.a.createElement(r.MDXTag,{name:"p",components:n},"So you want to contribute to this project? Awesome!"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Below are some useful information in order to get you started."),o.a.createElement(r.MDXTag,{name:"p",components:n},"You will need to follow the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/advanced/getting-started"}},"installation process")," first."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"contributing-process"}},"Contributing process"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"You found a bug? You have a suggestion? Great! ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/Zenika/FAQ/issues"}},"Open an issue")," so we can discuss it"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"You want to implement changes to the code? Awesome! ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/Zenika/FAQ/pulls"}},"Open a pull request")," so we can review it")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"documentation"}},"Documentation"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The documentation is generated using ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://docz.site"}},"docz"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Run the development script:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"# Path: ./FAQ/docs\nnpm run start\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Build the documentation:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"# Path: ./FAQ/docs\nnpm run build\n")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Remember to rebuild the documentation before pushing")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"tests"}},"Tests"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"There is currently no tests for this project")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"linting"}},"Linting"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can use the following commands either in the frontend (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./client"),") or the backend (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./server"),")"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm run lint           #Check with eslint\nnpm run lint:fix       #Fix with eslint\nnpm run prettier:check #Check with prettier\nnpm run prettier:write #Fix with prettier\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"bundle-size"}},"Bundle size"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We try to minimize the size of the js bundle. You can use the webpack analyzer to check if new dependencies are lightweight or not."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm run stats\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This commands generate a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"stats.json")," file which you can vizualize on this ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://chrisbateman.github.io/webpack-visualizer/"}},"website")))}}])&&p(t.prototype,a),c&&p(t,c),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-advanced-contributing.d3c2ee75edcf539281cd.js.map