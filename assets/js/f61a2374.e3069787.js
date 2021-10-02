"use strict";(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[7330],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,p=i.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(4996),{sidebar_position:1,description:"We use the React Native TypeScript template to create a new project"}),c="New Project",p={unversionedId:"new-project/new-project",id:"new-project/new-project",isDocsHomePage:!1,title:"New Project",description:"We use the React Native TypeScript template to create a new project",source:"@site/docs/new-project/new-project.mdx",sourceDirName:"new-project",slug:"/new-project/new-project",permalink:"/react-native-beyond-basics/docs/new-project/new-project",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/new-project/new-project.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"We use the React Native TypeScript template to create a new project"},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/react-native-beyond-basics/docs/welcome"},next:{title:"Build the iOS app",permalink:"/react-native-beyond-basics/docs/new-project/run-ios"}},s=[{value:"Creating a new application",id:"creating-a-new-application",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-project"},"New Project"),(0,i.kt)("p",null,"Let's start by creating a new React Native project."),(0,i.kt)("p",null,"For this course, we'll be using plain React Native, and there will be no option for using Expo. This is to give you an idea of what's it's like to build mobile applications without the help of the Expo managed workflow. Even if you choose to build your project in Expo, you may end up ejecting and having to manage the builds yourself (e.g. if you wanted to support ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/in-app-purchases/"},"in-app-purchases")," to your app)."),(0,i.kt)("p",null,"This means that you will be building the actual native app(s) on your device. If you didn't previously, you will now have to set up your local environment. Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native CLI Quickstart"),' page in the React Native docs and ensure you have followed the setup instructions up to (but not including) "Creating a new application".'),(0,i.kt)("h2",{id:"creating-a-new-application"},"Creating a new application"),(0,i.kt)("p",null,"To create a new React Native project, open your terminal and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native init MoodTracker --template react-native-template-typescript\n")),(0,i.kt)("p",null,'This will create a new react native project called "MoodTracker" using a react native ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-template-typescript"},"TypeScript")," template."),(0,i.kt)("p",null,"Now before you do anything else, navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"MoodTracker")," directory, initialize a new Git repository and commit the initial template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cd MoodTracker\ngit init\ngit branch -m main\ngit add --all\ngit commit -m "Initial commit"\n')),(0,i.kt)("p",null,"It is generally a good practice to do this even if you never plan to share your project with anyone. Aim to commit your changes whenever you reach a point where you're happy with your progress. This ensures you can easily see and revert any new changes and you'll always have a solid point to go back to if things get lopsided."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use a Git GUI like ",(0,i.kt)("a",{parentName:"p",href:"https://www.sourcetreeapp.com/"},"SourceTree")," and ",(0,i.kt)("a",{parentName:"p",href:"https://git-fork.com/"},"Fork")," alongside or instead of the command line cli. This can make tracking changes (especially diffs) a whole lot easier."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Checkpoint \ud83d\udd17")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/kadikraman/MoodTracker/commit/641a08767d88dde725a5bbdebb3e31fa47fa231c"},(0,i.kt)("strong",{parentName:"a"},"Initial commit")," 641a08767d88dde725a5bbdebb3e31fa47fa231c")))))}u.isMDXComponent=!0}}]);