(self.webpackChunkreact_native_beyond_basics=self.webpackChunkreact_native_beyond_basics||[]).push([[909],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return h}});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(i),h=n,f=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return i?o.createElement(f,s(s({ref:t},u),{},{components:i})):o.createElement(f,s({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<r;l++)s[l]=i[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}c.displayName="MDXCreateElement"},3919:function(e,t,i){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}i.d(t,{b:function(){return o},Z:function(){return n}})},4996:function(e,t,i){"use strict";i.d(t,{C:function(){return r},Z:function(){return s}});var o=i(2263),n=i(3919);function r(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,o){var r=void 0===o?{}:o,s=r.forcePrependBaseUrl,a=void 0!==s&&s,p=r.absolute,l=void 0!==p&&p;if(!i)return i;if(i.startsWith("#"))return i;if((0,n.b)(i))return i;if(a)return t+i;var u=i.startsWith(t)?i:t+i.replace(/^\//,"");return l?e+u:u}(r,i,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},5640:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=i(2122),n=i(9756),r=(i(7294),i(3905)),s=i(4996),a={sidebar_position:17},p={unversionedId:"store-deployments",id:"store-deployments",isDocsHomePage:!1,title:"Store Deployments",description:"To share your app with users, you'll need to deploy it to the App / Play stores. In order to do this, you'll need to:",source:"@site/docs/store-deployments.mdx",sourceDirName:".",slug:"/store-deployments",permalink:"/react-native-beyond-basics/docs/store-deployments",editUrl:"https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/docs/store-deployments.mdx",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Splash Screen",permalink:"/react-native-beyond-basics/docs/splash-screen"}},l=[{value:"Build Tools",id:"build-tools",children:[]},{value:"Apple Provisioning, Testing, &amp; Distribution Processes iOS",id:"apple-provisioning-testing--distribution-processes-ios",children:[]},{value:"Android Testing &amp; Distribution Processes",id:"android-testing--distribution-processes",children:[]}],u={toc:l};function d(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To share your app with users, you'll need to deploy it to the App / Play stores. In order to do this, you'll need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Register your app")," - for both iOS and Android have store sites - ",(0,r.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/"},"App Store Connect")," and ",(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/console/about/"},"Play Store Console")," which are used to manage the app versions and deployments. All store submissions are done through these sites."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sign your build")," - to run your app on a real device, it is not enough to simply build the app. You will also need to sign the build with a valid certificate. Signing your app allows iOS/Android to identify who signed your app and to verify that your app hasn't been modified since you signed it."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Submit for review")," - unlike websites where you can deploy just about anything, iOS and Android apps must be reviewed before they are allowed to the stores. If you have a valid signed app, you can submit it for internal testing without review, but each app update to reach the App and Play stores will have had to pass a review process. The initial review could take up to a week, and subsequent release reviews usually take a day or two.")),(0,r.kt)("h2",{id:"build-tools"},"Build Tools"),(0,r.kt)("p",null,"Even though you can build the production bundle for your mobile app, this is not recommended. The preferred approach is to use a CI/CD process. My preferred tool for this has been ",(0,r.kt)("a",{parentName:"p",href:"https://appcenter.ms/"},"App Center"),". This allows you to set up build pipelines for iOS and Android for staging and production using the necessary certificates."),(0,r.kt)("h2",{id:"apple-provisioning-testing--distribution-processes-ios"},"Apple Provisioning, Testing, & Distribution Processes iOS"),(0,r.kt)("img",{src:(0,s.Z)("/img/store-deployments/app-store.png"),alt:"App Store"}),(0,r.kt)("p",null,"Running an application on an iPhone or iPad requires three components: a certificate, a provisioning profile, and a developer account. The certificate validates an application for either development or distribution. Development builds with un-minified source code are intended for developers running locally as they build the product. Optimized distribution builds are shipped to the App Store and testing platforms such as TestFlight or App Center. A provisioning profile ties an application with capabilities such as geolocation or push notifications to a set of approved devices. A developer provisioning profile has a set limit of devices that an application can run on to ensure the App Store is not circumvented for public application distribution. A distribution provisioning profile limits the distribution of an application to either the App Store as a full application or specific devices via services like AppCenter as an \u201cAd-Hoc\u201d designated application."),(0,r.kt)("p",null,"An ideal setup would be to have two build pipelines, one for Ad-Hoc internal testing and one for App Store builds. Our recommendation is to configure the Ad-Hoc internal testing build pipeline to publish a new release on each merge to the main branch. Ad-Hoc testing does require knowing the unique identifiers of each iPhone that will be testing the app but does not require a wait time or approval by Apple. TestFlight is required if a larger test group is preferred where the devices are not known. Fortunately, TestFlight builds follow the same method as App Store builds. And, TestFlight builds do involve wait times and approval by Apple."),(0,r.kt)("h2",{id:"android-testing--distribution-processes"},"Android Testing & Distribution Processes"),(0,r.kt)("img",{src:(0,s.Z)("/img/store-deployments/play-store.png"),alt:"Play Store"}),(0,r.kt)("p",null,"The Android testing and distribution process is much simpler than for iOS. A key store is required for testing and is generated with Android Studio. A single build pipeline is used on App Center for both testing and Google Play store distribution. Test builds are directly downloaded onto Android devices from App Center. To release an app to the Google Play store the key store and app bundle generated by App Center is uploaded to the Google Play console."))}d.isMDXComponent=!0}}]);