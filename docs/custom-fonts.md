---
sidebar_position: 10
---

# Custom fonts

Most apps you might build for work or for client will use a custom font instead of the default one. Let's see how to add a custom font to your app.

For free fonts, check out [Google Fonts](https://fonts.google.com/).

I'm going to choose [Kalam](https://fonts.google.com/specimen/Kalam)

Note that this font includes 3 styles: light, regular and bold. So far we have used "light" and "regular" in the app so your chosen font must include both styles.

Once you've chosen your font, download it and unzip it.

In your `/assets` directory, create a new directory for `/fonts` and add your font file(s) in there.

Create a new file at at the root of your project and call it `react-native.config.js`.

Inside it, add a link to the fonts directory.

```js
module.exports = {
  assets: ["./src/assets/fonts"],
};
```

Now we'll need to link the project with

```sh
npx react-native link
```

If the linking has worked correctly, then you should be able to see the font files being copied over to both iOS and Android directories.

Finally, rebuild the app from XCode / Android Studio.

## Using custom fonts

To use the new FontFamily, pass it in as a style on a Text component, e.g.

```js
fontFamily: 'Kalam-Bold',
```

Unlike the web, you won't be able to apply a font globally, so each individual `Text` element will need the font family style applied to it.

To add the font family to the screen titles, use `headerTitleStyle` on `screenOptions` in `BottomTabs.navigator.tsx`.

```js
headerTitleStyle: { fontFamily: 'Kalam-Bold' },
```

## Checkpoint 🔗

[**Add a custom font** 4b88f65f5246a2b86e4f0b7f9400fc409e5449f9](https://github.com/kadikraman/mood-tracker/commit/4b88f65f5246a2b86e4f0b7f9400fc409e5449f9)

<img src="/img/custom-fonts/ios.png" alt="iOS custom font" width="50%" />
<img src="/img/custom-fonts/android.png" alt="Android custom font" width="50%"  />
