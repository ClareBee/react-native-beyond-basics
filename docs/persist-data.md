---
sidebar_position: 7
---

# Persisting Data

Now we have have a nice way to input and store moods. However right now, all our data is stored in-memory - meaning that when we refresh the app, all the data will disappear. This is not ideal in the long run - we'd like to have all our past mood to be saved locally.

## Async Storage

The most straightforward way of storing data across app launches is using [Async Storage](https://github.com/react-native-async-storage/async-storage). This is the native equivalent of `localstorage` from the web and works very similarly. It is a key-value store of data, scoped to the current app. The main difference is unlike `localstorage`, accessing `AsyncStorage` is an asynchronous operation as the name suggests.

## Install Async Storage

To install Async Storage, run:

```sh
yarn add @react-native-async-storage/async-storage
cd ios && pod install
```

And rebuild your app from Xcode / Android Studio.

The [api](https://react-native-async-storage.github.io/async-storage/docs/api) for AsyncStorage is pretty straightforward = you can get, set and delete items from the store based on an ID that can be any string value.

One thing to note is that we can only store things in async storage that are _serializable_ - in short this means that we can't store functions, classes or references.

Let's get functions to get our app data from storage on launch, and save it when it gets updated. In `App.provider.tsx`, add functions to `set` and `get` data from Async Storage:

```js
const storageKey = "my-app-data";

type AppData = {
  moods: MoodOptionWithTimestamp[],
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};
```

In our provider, we want to get the data from storage on launch:

```js
React.useEffect(() => {
  const getDataFromStorage = async () => {
    const data = await getAppData();

    if (data) {
      setMoodList(data.moods);
    }
  };
  getDataFromStorage();
}, []);
```

And finally, whenever a mood is updated, we want to also sync this in out Async Storage

```js
const handleSelect = React.useCallback((moodItem: MoodItem) => {
  setMoods((current) => {
    const newValue = [...current, { timestamp: Date.now(), mood: moodItem }];
    setAppData({ moods: newValue });
    return newValue;
  });
}, []);
```

Now when you add new moods to your list and refresh the app, you'll see that the data is persisted across the app launch.

## Checkpoint 🔗

[**Persist data across app launches** 7e534d255db4be7aea75de5b7afb2cf0391b31ab](https://github.com/kadikraman/mood-tracker/commit/7e534d255db4be7aea75de5b7afb2cf0391b31ab)