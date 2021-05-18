(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[274],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(t),m=o,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8800:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i={sidebar_position:9},c={unversionedId:"vector-icons",id:"vector-icons",isDocsHomePage:!1,title:"Vector Icons",description:"The main advantage of using svg - Scalable Vector Graphics - is that they are scalable as the name suggests. This means that the same vector image will look absolutely crisp on any size display. This is extremely appealing when building mobile applications, because we need to consider support for devices with all kinds of pixel density. You will also be able to change the color of the icon dynamically, without needing to create several versions of the icon.",source:"@site/docs/vector-icons.md",sourceDirName:".",slug:"/vector-icons",permalink:"/docs/vector-icons",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/vector-icons.md",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/docs/images"},next:{title:"Custom fonts",permalink:"/docs/custom-fonts"}},l=[{value:"Install react-native-svg",id:"install-react-native-svg",children:[]},{value:"Adding an .svg icon",id:"adding-an-svg-icon",children:[]},{value:"Use the icons in the bottom tab",id:"use-the-icons-in-the-bottom-tab",children:[]},{value:"Updating tab title",id:"updating-tab-title",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]}],s={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The main advantage of using ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," - Scalable Vector Graphics - is that they are scalable as the name suggests. This means that the same vector image will look absolutely crisp on any size display. This is extremely appealing when building mobile applications, because we need to consider support for devices with all kinds of pixel density. You will also be able to change the color of the icon dynamically, without needing to create several versions of the icon."),(0,r.kt)("p",null,"Let's use vector icons for our home, history and analytics tabs."),(0,r.kt)("p",null,"I've chosen the ",(0,r.kt)("a",{parentName:"p",href:"https://www.flaticon.com/free-icon/home_1946488"},"Home")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.flaticon.com/free-icon/list_151917"},"List")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.flaticon.com/free-icon/analytics_633606"},"Analytics")," icons from FlatIcon."),(0,r.kt)("h2",{id:"install-react-native-svg"},"Install react-native-svg"),(0,r.kt)("p",null,"For rendering ",(0,r.kt)("inlineCode",{parentName:"p"},".svg"),"s, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-svg/react-native-svg"},"react-native-svg"),"."),(0,r.kt)("p",null,"First, install the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add react-native-svg\n")),(0,r.kt)("p",null,"Then, install the iOS native dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios && pod install\n")),(0,r.kt)("p",null,"And finally, rebuild your app from XCode or Android Studio."),(0,r.kt)("h2",{id:"adding-an-svg-icon"},"Adding an .svg icon"),(0,r.kt)("p",null,"First, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Home.icon.tsx")," component in your ",(0,r.kt)("inlineCode",{parentName:"p"},"/components")," directory."),(0,r.kt)("p",null,"Take this ",(0,r.kt)("inlineCode",{parentName:"p"},"svg")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-svg"},'<svg width="511pt" height="511pt" viewBox="0 1 511 511.999">\n  <path\n    d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"\n  />\n</svg>\n')),(0,r.kt)("p",null,"and convert it into a React component. To do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"import { Svg, Path } from 'react-native-svg'")),(0,r.kt)("li",{parentName:"ol"},"replace ",(0,r.kt)("inlineCode",{parentName:"li"},"svg")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Svg")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Path")),(0,r.kt)("li",{parentName:"ol"},"add a default ",(0,r.kt)("inlineCode",{parentName:"li"},"fill")," color to the ",(0,r.kt)("inlineCode",{parentName:"li"},"svg")),(0,r.kt)("li",{parentName:"ol"},"add a default ",(0,r.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"height")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"svg"))),(0,r.kt)("p",null,"It should end up looking something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { Svg, Path } from "react-native-svg";\n\nexport const HomeIcon: React.FC = () => {\n  return (\n    <Svg height={40} width={40} viewBox="0 1 511 511.999" fill="teal">\n      <Path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0" />\n    </Svg>\n  );\n};\n')),(0,r.kt)("p",null,"Finally, in order so support arbitrary colors of the icon, pass the color in as a prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type HomeIconProps = {\n  color: string;\n  size: number;\n};\n\nexport const HomeIcon: React.FC<HomeIconProps> = ({\n  color = 'teal',\n  size = 40,\n}) => {\n ---\n}\n")),(0,r.kt)("p",null,"Repeat the process with the List and Analytics icons:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-svg",metastring:'title="list.svg"',title:'"list.svg"'},'<svg viewBox="0 0 60.123 60.123">\n  <g>\n    <path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z" />\n    <path\n      d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3\n    C60.124,31.719,58.781,33.062,57.124,33.062z"\n    />\n    <path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z" />\n    <circle cx="4.029" cy="11.463" r="4.029" />\n    <circle cx="4.029" cy="30.062" r="4.029" />\n    <circle cx="4.029" cy="48.661" r="4.029" />\n  </g>\n</svg>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-svg",metastring:'title="analytics.svg"',title:'"analytics.svg"'},'<svg viewBox="0 0 512 512">\n  <path\n    d="M501.333,490.667H10.667C4.779,490.667,0,495.445,0,501.333C0,507.221,4.779,512,10.667,512h490.667\n  c5.888,0,10.667-4.779,10.667-10.667C512,495.445,507.221,490.667,501.333,490.667z"\n  />\n  <path\n    d="M96,362.667H32c-5.888,0-10.667,4.779-10.667,10.667v128C21.333,507.221,26.112,512,32,512h64\n  c5.888,0,10.667-4.779,10.667-10.667v-128C106.667,367.445,101.888,362.667,96,362.667z M85.333,490.667H42.667V384h42.667\n  V490.667z"\n  />\n  <path\n    d="M224,256h-64c-5.888,0-10.667,4.779-10.667,10.667v234.667c0,5.888,4.779,10.667,10.667,10.667h64\n  c5.888,0,10.667-4.779,10.667-10.667V266.667C234.667,260.779,229.888,256,224,256z M213.333,490.667h-42.667V277.333h42.667\n  V490.667z"\n  />\n  <path\n    d="M352,298.667h-64c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667h64\n  c5.888,0,10.667-4.779,10.667-10.667v-192C362.667,303.445,357.888,298.667,352,298.667z M341.333,490.667h-42.667V320h42.667\n  V490.667z"\n  />\n  <path\n    d="M480,170.667h-64c-5.888,0-10.667,4.779-10.667,10.667v320c0,5.888,4.779,10.667,10.667,10.667h64\n  c5.888,0,10.667-4.779,10.667-10.667v-320C490.667,175.445,485.888,170.667,480,170.667z M469.333,490.667h-42.667V192h42.667\n  V490.667z"\n  />\n  <path\n    d="M64,192c-23.531,0-42.667,19.136-42.667,42.667c0,23.531,19.136,42.667,42.667,42.667\n  c23.531,0,42.667-19.136,42.667-42.667C106.667,211.136,87.531,192,64,192z M64,256c-11.776,0-21.333-9.579-21.333-21.333\n  c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333C85.333,246.421,75.776,256,64,256z"\n  />\n  <path\n    d="M192,85.333c-23.531,0-42.667,19.136-42.667,42.667c0,23.531,19.136,42.667,42.667,42.667s42.667-19.136,42.667-42.667\n  C234.667,104.469,215.531,85.333,192,85.333z M192,149.333c-11.776,0-21.333-9.579-21.333-21.333\n  c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333C213.333,139.755,203.776,149.333,192,149.333z"\n  />\n  <path\n    d="M320,128c-23.531,0-42.667,19.136-42.667,42.667c0,23.531,19.136,42.667,42.667,42.667\n  c23.531,0,42.667-19.136,42.667-42.667C362.667,147.136,343.531,128,320,128z M320,192c-11.776,0-21.333-9.579-21.333-21.333\n  c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333C341.333,182.421,331.776,192,320,192z"\n  />\n  <path\n    d="M448,0c-23.531,0-42.667,19.136-42.667,42.667c0,23.531,19.136,42.667,42.667,42.667\n  c23.531,0,42.667-19.136,42.667-42.667C490.667,19.136,471.531,0,448,0z M448,64c-11.776,0-21.333-9.579-21.333-21.333\n  c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333C469.333,54.421,459.776,64,448,64z"\n  />\n  <path\n    d="M432.939,57.728c-4.16-4.16-10.923-4.16-15.083,0l-82.773,82.773c-4.16,4.16-4.16,10.923,0,15.083\n  c2.091,2.069,4.821,3.115,7.552,3.115c2.709,0,5.44-1.024,7.531-3.115l82.773-82.773\n  C437.099,68.651,437.099,61.888,432.939,57.728z"\n  />\n  <path\n    d="M294.208,146.048l-68.523-19.541c-5.739-1.664-11.563,1.664-13.163,7.339c-1.621,5.675,1.664,11.563,7.317,13.184\n  l68.523,19.541c0.981,0.277,1.963,0.405,2.923,0.405c4.651,0,8.917-3.051,10.261-7.744\n  C303.168,153.579,299.883,147.669,294.208,146.048z"\n  />\n  <path\n    d="M175.36,141.291c-3.669-4.608-10.368-5.355-14.976-1.707l-80.427,64.128c-4.608,3.691-5.376,10.389-1.685,14.997\n  c2.112,2.645,5.227,4.011,8.341,4.011c2.325,0,4.672-0.768,6.635-2.304l80.427-64.128\n  C178.283,152.597,179.051,145.899,175.36,141.291z"\n  />\n</svg>\n')),(0,r.kt)("h2",{id:"use-the-icons-in-the-bottom-tab"},"Use the icons in the bottom tab"),(0,r.kt)("p",null,"We can customise the style of the bottom tab - including the name and icons - using the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/6.x/tab-based-navigation#customizing-the-appearance"},(0,r.kt)("inlineCode",{parentName:"a"},"screenOptions"))," prop on the Tab Navigator."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTabs.navigator.tsx")," and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop to return the HomeIcon on the first tab, and the ListIcon on the second tab."),(0,r.kt)("p",null,"Start by just rendering out the route name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<BottomTabs.Navigator\n  screenOptions={({ route }) => ({\n    tabBarIcon: ({ color, size }) => {\n      return <Text>{route.name}</Text>;\n    },\n  })}>\n")),(0,r.kt)("p",null,"Next, render the correct icon based on the route selected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<BottomTabs.Navigator\n  screenOptions={({ route }) => ({\n    tabBarIcon: ({ color, size }) => {\n      if (route.name === 'HomeTab') {\n        return <HomeIcon />;\n      }\n\n      if (route.name === 'HistoryTab') {\n        return <ListIcon />;\n      }\n\n      if (route.name === 'AnalyticsTab') {\n        return <AnalyticsIcon />;\n      }\n\n      return null;\n    },\n  })}>\n")),(0,r.kt)("p",null,"Finally, pass through the ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," args to the icon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<BottomTabs.Navigator\n  screenOptions={({ route }) => ({\n    tabBarIcon: ({ color, size }) => {\n      if (route.name === 'HomeTab') {\n        return <HomeIcon color={color} size={size} />;\n      }\n\n      if (route.name === 'HistoryTab') {\n        return <ListIcon color={color} size={size} />;\n      }\n\n      if (route.name === 'AnalyticsTab') {\n        return <AnalyticsIcon color={color} size={size} />;\n      }\n\n      return null;\n    },\n  })}>\n")),(0,r.kt)("p",null,"To customise the color of the tab bar icon, use ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarActiveTintColor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarInactiveTintColor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"tabBarActiveTintColor: '#1D84B5',\ntabBarInactiveTintColor: '#8E9AAF',\n")),(0,r.kt)("p",null,"Let's hide the tab bar label with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"tabBarShowLabel: false,\n")),(0,r.kt)("h2",{id:"updating-tab-title"},"Updating tab title"),(0,r.kt)("p",null,"While we're here, let's also update the titles of the tabs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<BottomTabs.Screen\n  name="HomeTab"\n  component={HomeTab}\n+  options={{ title: "Today\'s Mood" }}\n/>\n<BottomTabs.Screen\n  name="HistoryTab"\n  component={HistoryTab}\n+  options={{ title: \'Past Moods\' }}\n/>\n<BottomTabs.Screen\n  name="AnalyticsTab"\n  component={AnalyticsTab}\n+  options={{ title: \'Analytics\' }}\n/>\n')),(0,r.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/985a0801f485ed9a8f4e711ca8bad55cef6d51b6"},(0,r.kt)("strong",{parentName:"a"},"Use vector icons for bottom tabs")," 07908e87de8a1951e0eec12c9d676e4c8463eed7")),(0,r.kt)("img",{src:"/img/vector-icons/ios.png",alt:"iOS bottom tabs",width:"50%"}),(0,r.kt)("img",{src:"/img/vector-icons/android.png",alt:"Android bottom tabs",width:"50%"}))}p.isMDXComponent=!0}}]);