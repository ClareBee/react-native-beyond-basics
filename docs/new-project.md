---
sidebar_position: 5
---

# New Project Setup

To create a new React Native project, open your terminal and run:

```sh
npx react-native init MyApp --template https://github.com/kadikraman/react-native-template.git
```

This will create a new react native project called "MoodTracker" using a react native typescript template.

I like to have my project folder names be in `kebab-case`, but the React Native template won't allow this (if you try, you'll get an error saying that the project name must be _alphanumeric_). To get around this, I usually rename the folder immediately after creating it. You can do this with the `mv` command (`move` if you're on Windows).

```sh
mv MoodTracker mood-tracker
```

Now before you do anything else, navigate into the `mood-tracker` repository, initialize a new Git repository and commit the initial template:

```sh
cd mood-tracker
git init
git branch -m main
git add --all
git commit -m "Initial commit"
```

It is generally a good practice to do this even if you never plan to share your project with anyone. Aim to commit your changes whenever you reach a point where you're happy with your progress. This ensures you can easily see and revert any new changes and you'll always have a solid point to go back to if things get lopsided.

Note that it is common to use a Git GUI as in addition to the cli is common practice. This makes tracking changes a whole lot easier. Two of the most popular Git GUIs out there at the time of writing are [SourceTree](https://www.sourcetreeapp.com/) and [Fork](https://git-fork.com/).
