(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[508],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return r}});var a=n(2263),i=n(3919);function o(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3528:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(4996),s={sidebar_position:8},l={unversionedId:"images",id:"images",isDocsHomePage:!1,title:"Images",description:"Let's spice up our app with some images!",source:"@site/docs/images.mdx",sourceDirName:".",slug:"/images",permalink:"/react-native-beyond-basics/docs/images",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/images.mdx",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Persisting Data",permalink:"/react-native-beyond-basics/docs/persist-data"},next:{title:"Vector Icons",permalink:"/react-native-beyond-basics/docs/vector-icons"}},c=[{value:"Local images",id:"local-images",children:[{value:"Adapting to Screen Sizes",id:"adapting-to-screen-sizes",children:[]},{value:"Sizing images",id:"sizing-images",children:[]}]},{value:"Checkpoint",id:"checkpoint",children:[]},{value:"Images from url",id:"images-from-url",children:[{value:"Note on production usage",id:"note-on-production-usage",children:[]}]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]},{value:"Sources",id:"sources",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's spice up our app with some images!"),(0,o.kt)("h2",{id:"local-images"},"Local images"),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets")," folder inside your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"/src")," directory. This is a place to keep all your non-code files (images, icons, fonts etc)."),(0,o.kt)("p",null,"Then add an ",(0,o.kt)("inlineCode",{parentName:"p"},"/images")," folder inside ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets")," to store all your app images."),(0,o.kt)("p",null,'Right click -> "Save Image As", and save the image in your ',(0,o.kt)("inlineCode",{parentName:"p"},"/images")," folder."),(0,o.kt)("img",{src:(0,r.Z)("/img/images/ying-yang.png"),alt:"Ying Yang image"}),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeTab.screen.tsx")," and at the top of the file, add the image source. In React Native, you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," to get the path for a local image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n-import { StyleSheet, View } from 'react-native';\n+import { StyleSheet, View, Image } from 'react-native';\nimport { useAppContext } from '~src/App.provider';\nimport { MoodPicker } from '~src/components/MoodPicker';\n\n+const imageSrc = require('~src/assets/images/ying-yang.png');\n\nexport const HomeTab = () => {\n  const { handleAddMood } = useAppContext();\n\n  return (\n    <View style={styles.container}>\n+      <Image source={imageSrc} style={styles.image} />\n      <MoodPicker onAddMood={handleAddMood} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n+  image: {\n+    alignSelf: 'center',\n+    marginBottom: 20,\n+  },\n});\n\n")),(0,o.kt)("p",null,"And voila, you have rendered an image!"),(0,o.kt)("h3",{id:"adapting-to-screen-sizes"},"Adapting to Screen Sizes"),(0,o.kt)("p",null,'You would have noticed that when doing styling in React Native, we don\'t really use "pixels" or "ems" or "rems", but just "points". This is because the "points" are relative depending on the screen size.'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pixel_density"},"pixel density")," of a screen denotes how many pixels a screen has per a inch or cm. What it comes down to is this: ",(0,o.kt)("inlineCode",{parentName:"p"},"width: 10")," in React Native ",(0,o.kt)("em",{parentName:"p"},"is not")," the same as ",(0,o.kt)("inlineCode",{parentName:"p"},'width: "10px"')," on the web. It actually means ",(0,o.kt)("inlineCode",{parentName:"p"},"width: (10 * pixel_density)px"),"."),(0,o.kt)("p",null,'An increased pixel density makes the displays looks more crisp and smooth, which is why the "retina displays" for mac and iPhone look so good. For a retina display, the pixel density is 3x a regular display. This makes for a wonderful user experience, but as developers, we will need to ensure that our image assets are large enough to support this high resolution. So e.g. if we wanted to display a ',(0,o.kt)("inlineCode",{parentName:"p"},"100x100")," image on a retina display then really to make it as crisp as possible, the actual file included needs to be 3x larger than the point density on the screen, so ",(0,o.kt)("inlineCode",{parentName:"p"},"300px x 300px"),"."),(0,o.kt)("p",null,"To make things more complicated, in the mobile world you need to support all kinds of devices and screens."),(0,o.kt)("p",null,"As a result, when including ",(0,o.kt)("inlineCode",{parentName:"p"},".png")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".jpeg")," images in mobile application, it is standard practice to include the same image in 3 sizes to account for the different screen resolutions."),(0,o.kt)("p",null,"Here are the 2x and 3x versions of the same ying yang image. Download and add them to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets")," directory."),(0,o.kt)("img",{src:(0,r.Z)("/img/images/ying-yang@2x.png"),alt:"Ying Yang image"}),(0,o.kt)("img",{src:(0,r.Z)("/img/images/ying-yang@3x.png"),alt:"Ying Yang image"}),(0,o.kt)("p",null,"That's it! You don't actually have to do anything else here. React Native will determine the how large to make the image from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cactus.png")," and will automatically select the ",(0,o.kt)("inlineCode",{parentName:"p"},"2x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"3x")," files based on the pixel density of the current device."),(0,o.kt)("h3",{id:"sizing-images"},"Sizing images"),(0,o.kt)("p",null,"By default, the images will be sized based on the resolution of the main image file. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"aspectRatio")," to size the image, e.g. to render an image that is 100pt tall and twice as high:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"height: 100,\naspectRatio: 2,\n")),(0,o.kt)("p",null,"Using aspect ratio is handy, but sometimes you may want to give the image a fixed width and height, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"height: 100,\nwidth: 300,\n")),(0,o.kt)("p",null,"In this case you'll notice that the image gets cropped which may or may not what you want. In our case, cropping doesn't look the best. We can use the ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/image#resizemode"},"resizeMode")," prop on the image component to tell React Native how we want to handle image sizing. In the above case, ",(0,o.kt)("inlineCode",{parentName:"p"},'resizeMode="contain"')," comes in handy, as it ensures that given the ",(0,o.kt)("inlineCode",{parentName:"p"},"300x100pt"),' window we have for the image, we maintain the aspect ratio of the image and keep it "contained" within it.'),(0,o.kt)("h2",{id:"checkpoint"},"Checkpoint"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/442cf524f2c41a6f839875d2cf6d9b32ee5cb138"},(0,o.kt)("strong",{parentName:"a"},"Add local image")," 442cf524f2c41a6f839875d2cf6d9b32ee5cb138")),(0,o.kt)("img",{src:(0,r.Z)("/img/images/ios-local-image.png"),alt:"iOS local image",width:"50%"}),(0,o.kt)("img",{src:(0,r.Z)("/img/images/android-local-image.png"),alt:"Android local image",width:"50%"}),(0,o.kt)("h2",{id:"images-from-url"},"Images from url"),(0,o.kt)("p",null,"In order to render images from a url, let's display this peaceful smokey background for our ying yang:"),(0,o.kt)("img",{src:(0,r.Z)("https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"),width:"500"}),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeTab.screen.tsx")," fine again, and add a constant at the top of the file for the image url:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const networkImageUrl =\n  "https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";\n')),(0,o.kt)("p",null,"Now let's add an image component on top of the existing one"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Image source={{ uri: networkImageUrl }} />\n")),(0,o.kt)("p",null,"And... nothing renders! That's because for network images, we also need to explicitly tell it how large to make the image. In out case, let's make it 200 pt high:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"networkImage: {\n  height: 200,\n},\n")),(0,o.kt)("p",null,"Voila! Finally, let's move the image to the back of the page so that the whole page is wrapped in the image. Unfortunately the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component doesn't allow child components. So in order to do that we must replace it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageBackground")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { StyleSheet, Image, ImageBackground } from "react-native";\nimport { useAppContext } from "~src/App.provider";\nimport { MoodPicker } from "~src/components/MoodPicker";\n\nconst imageSrc = require("~src/assets/images/ying-yang.png");\nconst networkImageUrl =\n  "https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";\n\nexport const HomeTab = () => {\n  const { handleAddMood } = useAppContext();\n\n  return (\n    <ImageBackground style={styles.container} source={{ uri: networkImageUrl }}>\n      <Image source={imageSrc} style={styles.image} />\n      <MoodPicker onAddMood={handleAddMood} />\n    </ImageBackground>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  image: {\n    alignSelf: "center",\n    marginTop: 50,\n    marginBottom: 20,\n  },\n});\n')),(0,o.kt)("h3",{id:"note-on-production-usage"},"Note on production usage"),(0,o.kt)("p",null,"For production apps, it is recommended to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DylanVann/react-native-fast-image"},"react-native-fast-image")," for images that are loaded via url - it's a drop-in replacement for the React Native image component, and it adds a lot of performance optimisations the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageBackground")," component are missing."),(0,o.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/07908e87de8a1951e0eec12c9d676e4c8463eed7"},(0,o.kt)("strong",{parentName:"a"},"Use ImageBackground for the background image")," 07908e87de8a1951e0eec12c9d676e4c8463eed7")),(0,o.kt)("img",{src:(0,r.Z)("/img/images/ios-bg-image.png"),alt:"iOS bg image",width:"50%"}),(0,o.kt)("img",{src:(0,r.Z)("/img/images/android-bg-image.png"),alt:"Android bg image",width:"50%"}),(0,o.kt)("h2",{id:"sources"},"Sources"),(0,o.kt)("p",null,"The Ying Yang image is from ",(0,o.kt)("a",{parentName:"p",href:"https://www.flaticon.com/free-icon/ying-yang_1390877?related_id=1390877"},"FlatIcon"),"."),(0,o.kt)("p",null,"The smoky background image if rom ",(0,o.kt)("a",{parentName:"p",href:"https://unsplash.com/photos/LS0CWcXo1dw"},"Unsplash")))}d.isMDXComponent=!0}}]);