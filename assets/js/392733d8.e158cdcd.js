"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[5069],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||r;return n?o.createElement(m,i(i({ref:e},u),{},{components:n})):o.createElement(m,i({ref:e},u))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3919:function(t,e,n){function o(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!o(t)}n.d(e,{b:function(){return o},Z:function(){return a}})},4996:function(t,e,n){n.d(e,{C:function(){return r},Z:function(){return i}});var o=n(2263),a=n(3919);function r(){var t=(0,o.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return c?t+u:u}(r,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},6141:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(4996),s={sidebar_position:1},l="Custom Fonts",c={unversionedId:"custom-fonts/custom-fonts",id:"custom-fonts/custom-fonts",isDocsHomePage:!1,title:"Custom Fonts",description:"If you're building apps for clients, they will more often than not have a custom font for you to use. Let's see how to add custom fonts to your app.",source:"@site/docs/custom-fonts/custom-fonts.mdx",sourceDirName:"custom-fonts",slug:"/custom-fonts/custom-fonts",permalink:"/react-native-beyond-basics/docs/custom-fonts/custom-fonts",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/custom-fonts/custom-fonts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Solution",permalink:"/react-native-beyond-basics/docs/images-and-icons/solution"},next:{title:"Exercise",permalink:"/react-native-beyond-basics/docs/custom-fonts/exercise"}},u=[{value:"Using custom fonts",id:"using-custom-fonts",children:[]}],d={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-fonts"},"Custom Fonts"),(0,r.kt)("p",null,"If you're building apps for clients, they will more often than not have a custom font for you to use. Let's see how to add custom fonts to your app."),(0,r.kt)("p",null,"For free fonts to use in your app, check out ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/"},"Google Fonts"),"."),(0,r.kt)("p",null,"I've chosen ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Kalam"},"Kalam")," for this exercise. It is a Handwriting font, so it'll be really distinctive."),(0,r.kt)("p",null,'Feel free to choose a different font, but note that this font includes 3 styles: light, regular and bold. So far we have used "regular" and "bold" in the app so if you choose a different font, is must include both styles.'),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"One difficulty with fonts in React Native is that iOS and Android treat fonts differently. On Android, the ",(0,r.kt)("inlineCode",{parentName:"p"},"fontFamily")," you use in your styles will just use the name of the file."),(0,r.kt)("p",{parentName:"div"},"iOS apps however use the PostScript name of the font meaning that if your file name is different from the PostScript, your font will load on Android, but not on iOS. To check the PostScript name, double-click on the ",(0,r.kt)("inlineCode",{parentName:"p"},".tff")," file on a Mac"),(0,r.kt)("img",{src:(0,i.Z)("/img/custom-fonts/ios-alert.png"),alt:"Install font alert",width:"600"}),(0,r.kt)("p",{parentName:"div"},"Choose install font, then choose your new font and click on the i (information) icon at the top:"),(0,r.kt)("img",{src:(0,i.Z)("/img/custom-fonts/ios-postscript.png"),alt:"Install font alert"}),(0,r.kt)("p",{parentName:"div"},"You can see the PostScript name of the font at the top."),(0,r.kt)("p",{parentName:"div"},"For React Native, always ensure your font files are named after the PostScript name to ensure they work on both iOS and Android."))),(0,r.kt)("p",null,"Once you've chosen your font, download it and unzip it."),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets")," directory, create a new directory for ",(0,r.kt)("inlineCode",{parentName:"p"},"/fonts")," and add your font file(s) in there."),(0,r.kt)("p",null,"Create a new file at at the root of your project and call it ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native.config.js"),"."),(0,r.kt)("p",null,"Inside it, add a link to the fonts directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  assets: ['./assets/fonts'],\n};\n")),(0,r.kt)("p",null,"Now we'll need to link the project with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link\n")),(0,r.kt)("p",null,"If the linking has worked correctly, then you should be able to see the font files being copied over to both iOS and Android directories."),(0,r.kt)("p",null,"Finally, rebuild the app from XCode / Android Studio."),(0,r.kt)("h2",{id:"using-custom-fonts"},"Using custom fonts"),(0,r.kt)("p",null,"Unlike the web, you won't be able to apply a font globally, so each individual ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," element will need the font family style applied to it."),(0,r.kt)("p",null,"Let's start by adding the new fonts family to our ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/theme.ts"',title:'"src/theme.ts"'},"fontFamilyBold: 'Kalam-Bold',\nfontFamilyRegular: 'Kalam-Regular',\nfontFamilyLight: 'Kalam-Light',\n")),(0,r.kt)("p",null,"To add the font family to the screen titles, use ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitleStyle")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTabs.navigator.tsx"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"headerTitleStyle: { fontFamily: theme.fontFamilyBold },\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/MoodTracker/commit/86e7c7470e2223f1b0fc7cf5f8d51b2f214b44ba"},(0,r.kt)("strong",{parentName:"a"},"Add a custom font")," 86e7c7470e2223f1b0fc7cf5f8d51b2f214b44ba")))),(0,r.kt)("img",{src:(0,i.Z)("/img/custom-fonts/ios-title.png"),alt:"iOS custom font",width:"50%"}),(0,r.kt)("img",{src:(0,i.Z)("/img/custom-fonts/android-title.png"),alt:"Android custom font",width:"50%"}))}f.isMDXComponent=!0}}]);