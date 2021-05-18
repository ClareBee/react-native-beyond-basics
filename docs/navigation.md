---
sidebar_position: 4
---

# Navigation

You'll notice that this project template comes with some navigation already set up using [React Navigation v6](https://reactnavigation.org/docs/6.x/getting-started/).

This looks kind of complicated at first glance, but it is set to mirror the "usual" navigation you might end up with on a mobile app.

Here is the Navigation layout as a diagram:

<img src="/img/navigation/navigation.png" alt="Navigation" />

## Bottom Tabs

The bottom tabs we're used to seeing on mobile apps is built using the [bottom-tab-navigator](https://reactnavigation.org/docs/6.x/bottom-tab-navigator). This consists of 1 or more bottom tabs which can each contain wither a single screen, or a navigator with multiple screens.

In our example, we have two tabs: the **HomeTab** and the **OtherTab**.

## Stack Navigator

You'll notice that in the **OtherTab** we only have a single page to display whereas in the **HomeTab** we have a stack navigator with **FirstPage** and **SecondPage**. We can turn any page into a nested page by making it into a Stack navigator which is the case with the Home Tab.

## Full Screen Modals

Notice how pages within a navigator only stay within that area on the screen. For example when you navigate to the **SecondPage** on the **HomeTab**, the bottom navigation bar stays visible and only the screen content changes.

In order to display a full screen modal that gets rendered _above_ the bottom navigation, it needs to be configured adjacent to the **BottomTabs** navigator.

## Exercise: update the navigation

Update the app navigation to match the following diagram: a tab navigator with 3 tabs.

<img src="/img/navigation/new-navigation.png" alt="Navigation" />

1. Create a new component in the `screens` directory called `AnalyticsTab.screen.tsx`

```js title="AnalyticsTab.screen.tsx"
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const AnalyticsTab = () => {
  return (
    <View style={styles.container}>
      <Text>Analytics Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

2. Open `BottomTabs.navigator.tsx` and add the new screen as the third bottom tab

```js
<BottomTabs.Screen name="AnalyticsTab" component={AnalyticsTab} />
```

3. Rename `OtherTab.screen.tsx` to `HistoryTab.screen.tsx`

4. Delete `HomeTab.navigator.tsx`, `HomeTabFirstPage.screen.tsx` and `HomeTabSecondPage.screen.tsx`

5. Create a new component in the `screens` directory called `HomeTab.screen.tsx`

```js title="HomeTab.screen.tsx"
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const HomeTab = () => {
  return (
    <View style={styles.container}>
      <Text>Home Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

6. Open `BottomTabs.navigator.tsx` and use the `HomeTab` screen component for the Home tab instead of the stack navigator

```js title="BottomTabs.navigator.tsx"
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '~src/types';
import { HistoryTab } from './HistoryTab.screen';
import { AnalyticsTab } from './AnalyticsTab.screen';
import { HomeTab } from './HomeTab.screen';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="HomeTab" component={HomeTab} />
      <BottomTabs.Screen name="HistoryTab" component={HistoryTab} />
      <BottomTabs.Screen name="AnalyticsTab" component={AnalyticsTab} />
    </BottomTabs.Navigator>
  );
};
```

7. Finally open `src/types.ts` and update the navigation types to match the new layout

```js title="types.ts"
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>,
  ExampleModal: undefined,
};

export type BottomTabsParamList = {
  HomeTab: undefined,
  HistoryTab: undefined,
  AnalyticsTab: undefined,
};
```

## Checkpoint 🔗

[**Update Navigation** e2fb8d0914d37b3354b4f44b3bcbc43aa360a011](https://github.com/kadikraman/mood-tracker/commit/e2fb8d0914d37b3354b4f44b3bcbc43aa360a011)

<img src="/img/navigation/ios.png" alt="iOS navigation" width="50%" />
<img src="/img/navigation/android.png" alt="Android navigation" width="50%"  />
