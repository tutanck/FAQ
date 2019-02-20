(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/src/advanced/configuration.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g});var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function i(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function p(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=p(this,s(n).call(this,e))).layout=null,a}var a,t,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"configuration"}},"Configuration"),o.a.createElement(r.MDXTag,{name:"p",components:n},"FAQ is a multi-tenancy application with multi services. (Read ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/advanced/multi-tenancy"}},"this documentation page")," for more information about multi-tenancy in FAQ)"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Each of these service has a configuration in the database."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The configuration is in the form of the following ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Configuration")," graphql type:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-graphql"}},"type Configuration {\n  id: ID! @unique\n\n  name: String! @unique\n  title: String!\n\n  algoliaAppId: String\n  algoliaApiKey: String\n  algoliaSynonyms: Json\n\n  auth0Domain: String!\n  auth0ClientId: String!\n\n  mailgunDomain: String\n  mailgunApiKey: String\n\n  slackChannelHook: String\n\n  tags: Json\n}\n")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Note: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"auth0Domain")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"auth0ClientId")," are required fields")),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can have multiple ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Configuration")," object, but only the one with the name ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},'"default"')," will be used by the backend and frontend."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"creating-a-configuration"}},"Creating a configuration"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Execute this mutation in your ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Prisma service Playground"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-graphql"}},'mutation {\n  createConfiguration(\n    data: {\n      name: "default"\n      auth0Domain: ""\n      ...\n    }\n  ) {\n    id\n    name\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Important note:")," The configuration is cached by the backend. You will need to restart it after you create/update a configuration!"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"See below for a ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#configuration-variables"}},"list of configuration variables"))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"updating-a-configuration"}},"Updating a configuration"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Execute this mutation in your ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Prisma service Playground"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-graphql"}},'mutation {\n  updateConfiguration(\n    where: {\n      name: "default"\n    }\n    data: {\n      auth0Domain: ""\n      auth0ApiKey: ""\n      ...\n    }\n  ) {\n    id\n    name\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Important note:")," The configuration is cached by the backend. You will need to restart it after you create/update a configuration!"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"See below for a ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#configuration-variables"}},"list of configuration variables"))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"configuration-variables"}},"Configuration variables"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"name")),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can use any name you want, but only the configuration with the name ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"default")," will be used by the application."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"title")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is the title of your service, shown in the navbar."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"algoliaAppId, algoliaApiKey and algoliaSynonyms")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Configuration for Algolia. See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/advanced/backing-services"}},"Backing services")," for more information."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"auth0Domain and auth0ClientId")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Configuration for Auth0. See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/advanced/backing-services"}},"Backing services")," for more information."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"mailgunDomain and mailgunApiKey")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Configuration for Mailgun. See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/advanced/backing-services"}},"Backing services")," for more information."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"slackChannelHook")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Configuration for the Slack integration. See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/advanced/integrations"}},"Integrations")," for more information."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"tags")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is a JSON Object representing your tags. It must follow this schema:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "categorie1": ["tag1", "tag2", "tag3"],\n  "categorie2": ["tag4", "tag5"]\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "services": [\n    "paie",\n    "ops",\n    "recrutement",\n    "marketing",\n    "rh",\n    "dsi",\n    "dt",\n    "compta",\n    "formation",\n    "ce"\n  ],\n  "agency": ["nantes", "paris", "rennes", "lyon", "lille", "bordeaux", "singapour", "montr\xe9al"],\n  "theme": [\n    "nouvel arrivant",\n    "formateur",\n    "fin du mois",\n    "mission",\n    "tutoriel",\n    "mat\xe9riel",\n    "meta"\n  ]\n}\n')),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"settings-page"}},"Settings page"),o.a.createElement(r.MDXTag,{name:"p",components:n},"If a user has the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"admin")," attribute set to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true"),", he will have access to a ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Settings page")," where he will be able to manually change some of the configuration."))}}])&&i(a.prototype,t),m&&i(a,m),n}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-src-advanced-configuration.3c20eb5c79dcc9a25e78.js.map