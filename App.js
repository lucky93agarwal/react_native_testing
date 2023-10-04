/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SplashScreenComponent from './src/screens/Splash';
import VersionScreen from './src/screens/VersionCheck';
import LanguageScreen from './src/screens/Language';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Welcome';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import RegisterWithCodeScreen from './src/screens/RegisterWithCode';

const Stack = createNativeStackNavigator();

const App = () => {

  console.log("in lucky2");
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:"black",
          statusBarColor:"black",
        },
        headerTintColor:"white",
      }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreenComponent}
          options={{ title: 'Welcome', headerShown: false, headerLeft: null, gestureEnabled: false, }}
        />
        <Stack.Screen
          name="Version"
          component={VersionScreen}
          options={{ title: 'Version', headerShown: false }}

        />
        <Stack.Screen
          name="Language"
          component={LanguageScreen}
          options={{ title: 'Language', headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerTitleStyle:{color:"white"},statusBarColor:"black",headerTitleStyle:{fontSize:15}}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register & Play', headerTitleStyle:{color:"white"},statusBarColor:"black",headerTitleStyle:{fontSize:15}}}
        />
        <Stack.Screen
          name="RegisterWithCode"
          component={RegisterWithCodeScreen}
          options={{ title: 'Register & Play', headerTitleStyle:{color:"white"},statusBarColor:"black",headerTitleStyle:{fontSize:15}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 60,
    color: "white",
  },
  sublight: {
    marginTop: 100,
    fontWeight: '600',
    marginHorizontal: 30,
    fontSize: 16,
    color: "white",
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#b40001"
  }
});

export default App;


