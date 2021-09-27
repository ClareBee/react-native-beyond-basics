"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[7685],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=a(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||l[d]||i;return n?r.createElement(m,c(c({ref:t},f),{},{components:n})):r.createElement(m,c({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return c}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,s=void 0!==c&&c,u=i.absolute,a=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+f:f}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9541:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return f},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=n(4996),s={sidebar_position:2},u="Exercise",a={unversionedId:"custom-fonts/exercise",id:"custom-fonts/exercise",isDocsHomePage:!1,title:"Exercise",description:"Convert all the text in your app to use your new custom font!",source:"@site/docs/custom-fonts/exercise.mdx",sourceDirName:"custom-fonts",slug:"/custom-fonts/exercise",permalink:"/react-native-beyond-basics/docs/custom-fonts/exercise",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/custom-fonts/exercise.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Custom Fonts",permalink:"/react-native-beyond-basics/docs/custom-fonts/custom-fonts"},next:{title:"Solution",permalink:"/react-native-beyond-basics/docs/custom-fonts/solution"}},f=[],l={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercise"},"Exercise"),(0,i.kt)("p",null,"Convert all the text in your app to use your new custom font!"),(0,i.kt)("img",{src:(0,c.Z)("/img/custom-fonts/ios.png"),alt:"iOS custom font",width:"50%"}),(0,i.kt)("img",{src:(0,c.Z)("/img/custom-fonts/android.png"),alt:"Android custom font",width:"50%"}))}p.isMDXComponent=!0}}]);