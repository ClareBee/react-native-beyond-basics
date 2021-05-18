(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[519],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2470:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_position:6},p={unversionedId:"react-context",id:"react-context",isDocsHomePage:!1,title:"React Context",description:"Next up, we'd like to input the data on the first screen, but show the past moods on the second screen.",source:"@site/docs/react-context.md",sourceDirName:".",slug:"/react-context",permalink:"/docs/react-context",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/react-context.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Mood Picker",permalink:"/docs/mood-picker"},next:{title:"Persisting Data",permalink:"/docs/persist-data"}},c=[{value:"Create a Provider",id:"create-a-provider",children:[]},{value:"Wrap your app in a context provider",id:"wrap-your-app-in-a-context-provider",children:[]},{value:"Access the context",id:"access-the-context",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]},{value:"Exercise",id:"exercise",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint--1",children:[]}],s={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Next up, we'd like to input the data on the first screen, but show the past moods on the second screen."),(0,a.kt)("p",null,"In order to do this, we'll need some sort of shared way to store data so that it could be accessed simultaneously from both pages."),(0,a.kt)("p",null,"There are several ways to do this, for example ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is a popular option. However let's look into a system built into React called ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),"."),(0,a.kt)("p",null,"React Context consists of two parts: a provider and a consumer."),(0,a.kt)("p",null,"A Provider is a top level component that stores the data."),(0,a.kt)("p",null,"A Consumer can consume all data within the Provider from anywhere in the component tree without having to pass the data down as props."),(0,a.kt)("h2",{id:"create-a-provider"},"Create a Provider"),(0,a.kt)("p",null,"First, let's create a provider. Add a new file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"App.provider.tsx"),"."),(0,a.kt)("p",null,"A new context is created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext")," function where we pass in the default value for the context."),(0,a.kt)("p",null,"A Provider is a component that wraps component tree that should have access to context. The object passed in as the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," to the provider will contain all the data that the child components will have access to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { createContext } from "react";\n\ntype AppContextType = {\n  greeting: string,\n};\n\nconst defaultValue = {\n  greeting: "",\n};\n\nconst AppContext = createContext < AppContextType > defaultValue;\n\nexport const AppProvider: React.FC = ({ children }) => {\n  return (\n    <AppContext.Provider value={{ greeting: "Hello" }}>\n      {children}\n    </AppContext.Provider>\n  );\n};\n')),(0,a.kt)("h2",{id:"wrap-your-app-in-a-context-provider"},"Wrap your app in a context provider"),(0,a.kt)("p",null,"Remember that context is only available from the components that are nested within the context provider."),(0,a.kt)("p",null,"In our case, let's put our context provider as high as possible, and wrap our whole app in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react";\nimport { NavigationContainer } from "@react-navigation/native";\nimport { RootNavigator } from "./screens/Root.navigator";\n+import { AppProvider } from "./App.provider";\n\n\nexport const App: React.FC = () => {\n  return (\n+    <AppProvider>\n        <NavigationContainer>\n          <RootNavigator />\n        </NavigationContainer>\n+    </AppProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"access-the-context"},"Access the context"),(0,a.kt)("p",null,"To access your context, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook. Add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.provider.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const useAppContext = () => useContext(AppContext);\n")),(0,a.kt)("p",null,"Now you'll be able to use the same context values from anywhere in your app, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"HistoryTab.screen.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react";\nimport { StyleSheet, View, Text } from "react-native";\n+import { useAppContext } from "~src/App.provider";\n\nexport const HistoryTab = () => {\n+  const appContext = useAppContext();\n\n  return (\n    <View style={styles.container}>\n      <Text>History Tab</Text>\n+      <Text>{appContext.greeting}</Text>\n    </View>\n  );\n};\n')),(0,a.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/df7f6074124b0916edef708974bad43734eae5ff"},(0,a.kt)("strong",{parentName:"a"},"Set Up App Context")," df7f6074124b0916edef708974bad43734eae5ff")),(0,a.kt)("h2",{id:"exercise"},"Exercise"),(0,a.kt)("p",null,"By moving the data to the App Context, move the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"MoodItemsRow"),"s to the history tab."),(0,a.kt)("h2",{id:"checkpoint--1"},"Checkpoint \ud83d\udd17"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/f0b4ca4cba8299faee8ee23fd3852129cf1556c5"},(0,a.kt)("strong",{parentName:"a"},"Move mood list to AppContext")," f0b4ca4cba8299faee8ee23fd3852129cf1556c5")),(0,a.kt)("img",{src:"/img/react-context/ios.png",alt:"React Context iOS",width:"50%"}),(0,a.kt)("img",{src:"/img/react-context/android.png",alt:"React Context Android",width:"50%"}))}l.isMDXComponent=!0}}]);