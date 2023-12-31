This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Screen
<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/5231b535-1aab-4afb-a3f6-0bac5d5a7460" width="200" title="Splash Screen"/>
<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/2cd3d1cc-7faf-4007-8707-89cad33848aa" width="200"  title="Version Update Screen"/>

<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/7b234b03-7560-4ffc-ba11-63bef1abfb7b" width="200" title="Language Screen"/>
<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/d0f02c1f-3003-41c9-ab91-58580d37e93d" width="200" title="Welcome Screen"/>
<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/e8e783e7-6fbf-47ae-902e-03767bd9d9d4" width="200" title="Login Screen"/>

<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/6c78a7ee-b389-4c56-89a3-a433cfa309d1" width="200" title="Register Screen"/>
<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/5555e449-f194-4e5c-9bbc-225eafb996c7" width="200" title="Enter Code Screen"/>
<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/d13a7c71-2d3e-463f-ad46-63f2548ef2cd" width="200" title="Notification Popup Screen"/>


<img src="https://github.com/lucky93agarwal/react_native_testing/assets/53622073/162a2bf8-6806-4b37-93fe-7c3537b7de4b" width="200" title="Language Bottom Sheet"/>

## NetworkCall
Step 1. Firstly, make sure to install the necessary packages by running:
```bash
npm install --save react-native
```
Step 2. Now, you can use the following example to make a simple GET request in a React Native component:

```bash
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>Data: {JSON.stringify(data)}</Text>
          <Button title="Refresh Data" onPress={fetchData} />
        </>
      )}
    </View>
  );
};

export default YourComponent;
```
In this example:
- We use the fetch function to make a GET request to the specified URL.
- The useEffect hook ensures that the data is fetched when the component mounts.
- The component uses state (data, isLoading) to manage the loading state and store the fetched data.
- The UI conditionally renders loading text or the data, along with a button to refresh the data.

Remember to replace the URL 'https://api.example.com/data' with the actual URL of the API you want to call. Additionally, error handling is important, so you might want to enhance it based on your specific requirements.

If you prefer using a third-party library like Axios, you can install it using:
```bash
npm install axios
```

## Local Storage

```bash
npm install @react-native-async-storage/async-storage
```

## model API

```bash
https://jsonplaceholder.typicode.com
```
## API
```bash
npm install axios
```


## Debug and Release APK
# Debug APK
# How to generate one in 3 steps?
Step 1: Go to the root of the project in the terminal and run the below command:<br />
```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
Step 2: Go to android directory:<br />
```bash
cd android
```
Step 3: Now in this android folder, run this command<br />
```bash
./gradlew assembleDebug
```

There! you’ll find the apk file in the following path:< br/>
```bash
yourProject/android/app/build/outputs/apk/debug/app-debug.apk
```

## Screen Navigation

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

## 4 part of screen

Step 1. Import libraries to create componets.<br />
Step 2. Create a component that return some jsx / simple function.<br />
Step 3. Create a StyleSheet to style the component.<br />
Step 4. Export the file, so that we can use it elsewhere in our app.

## How to conver App.tsx to App.js

Step 1: Rename App.tsx file to App.js. <br />
Step 2: Delete tsconfig.json file. <br />
Step 3: Remove typescript library in package.json file.
type command on terminal
```bash
npm uninstall typescript
```

## Linear Gradient

```bash
npm i react-native-linear-gradient
```

## Create new project

```bash
npm install npm -g
npx react-native@latest init <Project_Name>
```

## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## Visitors Count

<img align="left" src = "https://profile-counter.glitch.me/react_native_testing/count.svg" alt ="Loading">
