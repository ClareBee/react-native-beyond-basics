(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4260:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={sidebar_position:10},s={unversionedId:"custom-fonts",id:"custom-fonts",isDocsHomePage:!1,title:"Custom fonts",description:"Most apps you might build for work or for client will use a custom font instead of the default one. Let's see how to add a custom font to your app.",source:"@site/docs/custom-fonts.md",sourceDirName:".",slug:"/custom-fonts",permalink:"/docs/custom-fonts",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/custom-fonts.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Vector Icons",permalink:"/docs/vector-icons"},next:{title:"App Icons",permalink:"/docs/app-icons"}},l=[{value:"Using custom fonts",id:"using-custom-fonts",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Most apps you might build for work or for client will use a custom font instead of the default one. Let's see how to add a custom font to your app."),(0,a.kt)("p",null,"For free fonts, check out ",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/"},"Google Fonts"),"."),(0,a.kt)("p",null,"I'm going to choose ",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Kalam"},"Kalam")),(0,a.kt)("p",null,'Note that this font includes 3 styles: light, regular and bold. So far we have used "light" and "regular" in the app so your chosen font must include both styles.'),(0,a.kt)("p",null,"Once you've chosen your font, download it and unzip it."),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets")," directory, create a new directory for ",(0,a.kt)("inlineCode",{parentName:"p"},"/fonts")," and add your font file(s) in there."),(0,a.kt)("p",null,"Create a new file at at the root of your project and call it ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native.config.js"),"."),(0,a.kt)("p",null,"Inside it, add a link to the fonts directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  assets: ["./src/assets/fonts"],\n};\n')),(0,a.kt)("p",null,"Now we'll need to link the project with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native link\n")),(0,a.kt)("p",null,"If the linking has worked correctly, then you should be able to see the font files being copied over to both iOS and Android directories."),(0,a.kt)("p",null,"Finally, rebuild the app from XCode / Android Studio."),(0,a.kt)("h2",{id:"using-custom-fonts"},"Using custom fonts"),(0,a.kt)("p",null,"To use the new FontFamily, pass it in as a style on a Text component, e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fontFamily: 'Kalam-Bold',\n")),(0,a.kt)("p",null,"Unlike the web, you won't be able to apply a font globally, so each individual ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," element will need the font family style applied to it."),(0,a.kt)("p",null,"To add the font family to the screen titles, use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerTitleStyle")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomTabs.navigator.tsx"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"headerTitleStyle: { fontFamily: 'Kalam-Bold' },\n")),(0,a.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/4b88f65f5246a2b86e4f0b7f9400fc409e5449f9"},(0,a.kt)("strong",{parentName:"a"},"Add a custom font")," 4b88f65f5246a2b86e4f0b7f9400fc409e5449f9")),(0,a.kt)("img",{src:"/img/custom-fonts/ios.png",alt:"iOS custom font",width:"50%"}),(0,a.kt)("img",{src:"/img/custom-fonts/android.png",alt:"Android custom font",width:"50%"}))}u.isMDXComponent=!0}}]);