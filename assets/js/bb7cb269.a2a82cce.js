"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[3394],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,s(s({ref:t},l),{},{components:a})):n.createElement(g,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8399:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s={sidebar_position:1},i="Async Storage",c={unversionedId:"persisting-data/persist-data",id:"persisting-data/persist-data",isDocsHomePage:!1,title:"Async Storage",description:"We now have have a good way of inputting and store our past moods. However, all our data is stored in-memory. As a result when we refresh the app, all the data will disappear. That's not going to work for a real app. We'll need a way to have all our past moods saved on the device.",source:"@site/docs/persisting-data/persist-data.mdx",sourceDirName:"persisting-data",slug:"/persisting-data/persist-data",permalink:"/react-native-beyond-basics/docs/persisting-data/persist-data",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/persisting-data/persist-data.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Solution",permalink:"/react-native-beyond-basics/docs/react-context/solution"},next:{title:"Local Images",permalink:"/react-native-beyond-basics/docs/images-and-icons/local-images"}},p=[{value:"Async Storage",id:"async-storage-1",children:[]},{value:"Install Async Storage",id:"install-async-storage",children:[]}],l={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"async-storage"},"Async Storage"),(0,o.kt)("p",null,"We now have have a good way of inputting and store our past moods. However, all our data is stored in-memory. As a result when we refresh the app, all the data will disappear. That's not going to work for a real app. We'll need a way to have all our past moods saved on the device."),(0,o.kt)("h2",{id:"async-storage-1"},"Async Storage"),(0,o.kt)("p",null,"The most straightforward way of storing data across app launches is using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-async-storage/async-storage"},"Async Storage"),". This is the native equivalent of ",(0,o.kt)("inlineCode",{parentName:"p"},"localstorage")," from the web and works very similarly. It is a key-value store of data, scoped to the current app. The main difference is unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"localstorage"),", accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," is an asynchronous operation as the name suggests."),(0,o.kt)("h2",{id:"install-async-storage"},"Install Async Storage"),(0,o.kt)("p",null,"To install Async Storage, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-async-storage/async-storage\n# or\nnpm install @react-native-async-storage/async-storage\n")),(0,o.kt)("p",null,"For iOS, install the native dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios && pod install && cd ..\n")),(0,o.kt)("p",null,"And rebuild your app from Xcode / Android Studio / cli command."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://react-native-async-storage.github.io/async-storage/docs/api"},"api")," for AsyncStorage is pretty straightforward: you can ",(0,o.kt)("strong",{parentName:"p"},"get"),", ",(0,o.kt)("strong",{parentName:"p"},"set")," and ",(0,o.kt)("strong",{parentName:"p"},"delete")," items from the store based on an ID that can be any string value."),(0,o.kt)("p",null,"One thing to note is that we can only store things in async storage that are ",(0,o.kt)("em",{parentName:"p"},"serializable")," - in short this means that we can't store functions, classes or references."),(0,o.kt)("p",null,"For starters we'll need to create functions to fetch our app data from storage on launch, and save it when it gets updated."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"App.provider.tsx"),", add functions to ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," data from Async Storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import AsyncStorage from '@react-native-async-storage/async-storage';\n\nconst storageKey = 'my-app-data';\n\ntype AppData = {\n  moods: MoodOptionWithTimestamp[],\n};\n\nconst getAppData = async (): Promise<AppData | null> => {\n  try {\n    const data = await AsyncStorage.getItem(storageKey);\n\n    if (data) {\n      return JSON.parse(data);\n    }\n    return null;\n  } catch {\n    return null;\n  }\n};\n\nconst setAppData = async (newData: AppData) => {\n  try {\n    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));\n  } catch {}\n};\n")),(0,o.kt)("p",null,"Now we want to fetch the initial data ",(0,o.kt)("em",{parentName:"p"},"once")," when the app is first launched. To do this, we can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," with an empty dependency array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const getDataFromStorage = async () => {\n    const data = await getAppData();\n\n    if (data) {\n      setMoodList(data.moods);\n    }\n  };\n  getDataFromStorage();\n}, []);\n")),(0,o.kt)("p",null,"And finally, whenever a mood is updated, we want to also sync this in out Async Storage. For this, let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleAddMood")," callback to also save the new value to async storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const handleSelectMood = React.useCallback((mood: MoodOptionType) => {\n  setMoodList((current) => {\n    const newValue = [...current, { mood, timestamp: Date.now() }];\n    setAppData({ moods: newValue });\n    return newValue;\n  });\n}, []);\n")),(0,o.kt)("p",null,"Now when you add new moods to your list and refresh the app, you'll see that the data is persisted across the app launch."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/MoodTracker/commit/2195d951da4f2933f9d0eb053593a74998531af7"},(0,o.kt)("strong",{parentName:"a"},"Persist data across app launches")," 2195d951da4f2933f9d0eb053593a74998531af7")))))}d.isMDXComponent=!0}}]);