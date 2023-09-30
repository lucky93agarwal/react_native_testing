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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  console.log("in lucky2");
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreenComponent}
          options={{title: 'Welcome',headerShown: false}}
        />
         <Stack.Screen
          name="Version"
          component={VersionScreen}
          options={{title: 'Version',headerShown: false}}
        
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
    fontSize:60,
    color: "white",
  },
  sublight: {
    marginTop:100,
    fontWeight: '600',
    marginHorizontal:30,
    fontSize:16,
    color: "white",
    textAlign: 'center',
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#b40001"
  }
});

export default App;


