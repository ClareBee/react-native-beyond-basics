"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[6885],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(4996),{sidebar_position:1}),c="Mood Picker",s={unversionedId:"basic-components/mood-picker",id:"basic-components/mood-picker",isDocsHomePage:!1,title:"Mood Picker",description:"In the next couple of sections we'll be building the UI for our mood picker.",source:"@site/docs/basic-components/mood-picker.mdx",sourceDirName:"basic-components",slug:"/basic-components/mood-picker",permalink:"/react-native-beyond-basics/docs/basic-components/mood-picker",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/basic-components/mood-picker.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Solution",permalink:"/react-native-beyond-basics/docs/bottom-navigation/solution"},next:{title:"View and Text",permalink:"/react-native-beyond-basics/docs/basic-components/view-and-text"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mood-picker"},"Mood Picker"),(0,i.kt)("p",null,"In the next couple of sections we'll be building the UI for our mood picker."),(0,i.kt)("p",null,"We do this using basic UI elements: ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useCallback")," React hooks. We'll style the components using inline styles with ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," and we'll install a JavaScript library - ",(0,i.kt)("inlineCode",{parentName:"p"},"date-fns")," - for formatting the date."),(0,i.kt)("p",null,"If you fancy testing your knowledge, feel free to implement the UI based on this design, without looking at the next sections."))}p.isMDXComponent=!0}}]);