---
sidebar_position: 5
---

# Mood Picker

Let's recap everything you should already know about building React Native apps by setting up the User Interface for our Mood Picker app.

We will be building a mood picker interface where the user can pick from 5 emoji options and see the past selections under the picker.

<img src="/img/mood-picker/exercise-5.png" alt="Mood Picker iOS" width="50%"/>
<img src="/img/mood-picker/exercise-5-android.png" alt="Mood Picker Android" width="50%"/>

## Exercise 1 - View and Text

Use the `View` and `Text` components to display the mood options in a horizontal list

```js
const moodOptions = [
  { emoji: "😄", description: "amazing" },
  { emoji: "😊", description: "great" },
  { emoji: "🙂", description: "alright" },
  { emoji: "🙁", description: "sad" },
  { emoji: "😔", description: "miserable" },
];
```

<img src="/img/mood-picker/exercise-1.png" alt="Mood Picker" width="500px"/>

## Checkpoint 🔗

[**Display MoodPicker emoji options** 4c05e7aafeaf82621ffd57e8c463d2c898df83fb](https://github.com/kadikraman/mood-tracker/commit/4c05e7aafeaf82621ffd57e8c463d2c898df83fb)

## Exercise 2 - useState and TouchableOpacity

Allow the user to select an emoji and store the currently selected option in a `useState` variable.

The colors used in the example are `#A0CFD3`, `#454C73` and `#8D94BA`.

<img src="/img/mood-picker/exercise-2.png" alt="Mood Picker" width="500px"/>

## Checkpoint 🔗

[**Enable selecting emoji** c6a8bf11b647b02487d89e544e2a9185663d4e05](https://github.com/kadikraman/mood-tracker/commit/c6a8bf11b647b02487d89e544e2a9185663d4e05)

## Exercise 3 - more styling

Wrap the emoji list in a container with a title saying "How are you right now?" and a call to action to "Choose" and emoji.

<img src="/img/mood-picker/exercise-3.png" alt="Mood Picker" width="500px"/>

## Checkpoint 🔗

[**Add emoji list container** 383ada7c1511b557b108242ab9371139bd381af6](https://github.com/kadikraman/mood-tracker/commit/383ada7c1511b557b108242ab9371139bd381af6)

## Exercise 4 - submit mood, and display thank you message

Store the list of selected emoji in the `HomeTab.screen.tsx` component including the current timestamp.

Display a "Thank You" page when the user has selected an option. The "Add Another" button should let the use choose again.

<img src="/img/mood-picker/exercise-4.png" alt="Mood Picker" width="500px"/>

## Checkpoint 🔗

[**Display previously selected moods** 383ada7c1511b557b108242ab9371139bd381af6](https://github.com/kadikraman/mood-tracker/commit/9fdfc26494b436b248b5369f9bc4bfa77942ffcc)

## Exercise 5 - use date-fns to format the timestamp

The [date-fns](https://date-fns.org/) library is incredibly handy when working with dates and times in JavaScript.

Install the library with:

```sh
yarn add date-fns
```

And use the [format](https://date-fns.org/v2.21.3/docs/format) method format the timestamp on the emoji list.

<img src="/img/mood-picker/exercise-5.png" alt="Mood Picker" width="500px"/>

## Checkpoint 🔗

[**Display previously selected moods** dae7d8143f79692bb36a08dd00e978398c8b2de4](https://github.com/kadikraman/mood-tracker/commit/dae7d8143f79692bb36a08dd00e978398c8b2de4)
