(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[40],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,s(s({ref:t},p),{},{components:a})):n.createElement(y,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4247:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),s={sidebar_position:7},i={unversionedId:"persist-data",id:"persist-data",isDocsHomePage:!1,title:"Persisting Data",description:"Now we have have a nice way to input and store moods. However right now, all our data is stored in-memory - meaning that when we refresh the app, all the data will disappear. This is not ideal in the long run - we'd like to have all our past mood to be saved locally.",source:"@site/docs/persist-data.md",sourceDirName:".",slug:"/persist-data",permalink:"/react-native-beyond-basics/docs/persist-data",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/persist-data.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"React Context",permalink:"/react-native-beyond-basics/docs/react-context"},next:{title:"Images",permalink:"/react-native-beyond-basics/docs/images"}},c=[{value:"Async Storage",id:"async-storage",children:[]},{value:"Install Async Storage",id:"install-async-storage",children:[]},{value:"Checkpoint \ud83d\udd17",id:"checkpoint-",children:[]}],l={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now we have have a nice way to input and store moods. However right now, all our data is stored in-memory - meaning that when we refresh the app, all the data will disappear. This is not ideal in the long run - we'd like to have all our past mood to be saved locally."),(0,o.kt)("h2",{id:"async-storage"},"Async Storage"),(0,o.kt)("p",null,"The most straightforward way of storing data across app launches is using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-async-storage/async-storage"},"Async Storage"),". This is the native equivalent of ",(0,o.kt)("inlineCode",{parentName:"p"},"localstorage")," from the web and works very similarly. It is a key-value store of data, scoped to the current app. The main difference is unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"localstorage"),", accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," is an asynchronous operation as the name suggests."),(0,o.kt)("h2",{id:"install-async-storage"},"Install Async Storage"),(0,o.kt)("p",null,"To install Async Storage, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @react-native-async-storage/async-storage\ncd ios && pod install\n")),(0,o.kt)("p",null,"And rebuild your app from Xcode / Android Studio."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://react-native-async-storage.github.io/async-storage/docs/api"},"api")," for AsyncStorage is pretty straightforward = you can get, set and delete items from the store based on an ID that can be any string value."),(0,o.kt)("p",null,"One thing to note is that we can only store things in async storage that are ",(0,o.kt)("em",{parentName:"p"},"serializable")," - in short this means that we can't store functions, classes or references."),(0,o.kt)("p",null,"Let's get functions to get our app data from storage on launch, and save it when it gets updated. In ",(0,o.kt)("inlineCode",{parentName:"p"},"App.provider.tsx"),", add functions to ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," data from Async Storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const storageKey = "my-app-data";\n\ntype AppData = {\n  moods: MoodOptionWithTimestamp[],\n};\n\nconst getAppData = async (): Promise<AppData | null> => {\n  try {\n    const data = await AsyncStorage.getItem(storageKey);\n\n    if (data) {\n      return JSON.parse(data);\n    }\n    return null;\n  } catch {\n    return null;\n  }\n};\n\nconst setAppData = async (newData: AppData) => {\n  try {\n    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));\n  } catch {}\n};\n')),(0,o.kt)("p",null,"In our provider, we want to get the data from storage on launch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const getDataFromStorage = async () => {\n    const data = await getAppData();\n\n    if (data) {\n      setMoodList(data.moods);\n    }\n  };\n  getDataFromStorage();\n}, []);\n")),(0,o.kt)("p",null,"And finally, whenever a mood is updated, we want to also sync this in out Async Storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const handleSelect = React.useCallback((moodItem: MoodItem) => {\n  setMoods((current) => {\n    const newValue = [...current, { timestamp: Date.now(), mood: moodItem }];\n    setAppData({ moods: newValue });\n    return newValue;\n  });\n}, []);\n")),(0,o.kt)("p",null,"Now when you add new moods to your list and refresh the app, you'll see that the data is persisted across the app launch."),(0,o.kt)("h2",{id:"checkpoint-"},"Checkpoint \ud83d\udd17"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/mood-tracker/commit/7e534d255db4be7aea75de5b7afb2cf0391b31ab"},(0,o.kt)("strong",{parentName:"a"},"Persist data across app launches")," 7e534d255db4be7aea75de5b7afb2cf0391b31ab")))}p.isMDXComponent=!0}}]);