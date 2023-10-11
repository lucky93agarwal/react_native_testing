/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import BottomSheetLanguage from './src/screens/Comman/BottomSheetLanguage';
import SplashScreenComponent from './src/screens/Splash';
import VersionScreen from './src/screens/VersionCheck';
import LanguageScreen from './src/screens/Language';

import langIcon from './assets/icons/language_icon.png';
import perceIcons from './assets/icons/percentage_icon.png';
import walletIcon from './assets/icons/wallet_icon.png';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Welcome';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import RegisterWithCodeScreen from './src/screens/RegisterWithCode';
import HomeScreen from './src/screens/Home';
import Header from './src/screens/Header';

const Stack = createNativeStackNavigator();

const App = () => {
  const onPass = ()=>{
    if(visibileData){
      setVisibileData(false);
    }else {
      setVisibileData(true);
    }
  
  }
  const [visibileData, setVisibileData] = useState(false);
  console.log("in lucky2");
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
            statusBarColor: "black",
          },
          headerTintColor: "white",
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
          options={{ title: 'Login', headerTitleStyle: { color: "white" }, statusBarColor: "black", headerTitleStyle: { fontSize: 15 } }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register & Play', headerTitleStyle: { color: "white" }, statusBarColor: "black", headerTitleStyle: { fontSize: 15 } }}
        />
        <Stack.Screen
          name="RegisterWithCode"
          component={RegisterWithCodeScreen}
          options={{ title: 'Register & Play', headerTitleStyle: { color: "white" }, statusBarColor: "black", headerTitleStyle: { fontSize: 15 } }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerBackVisible: false,
            headerTitle: () => <Header name="Home" />,
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{
                  if(visibileData){
                    setVisibileData(false);
                  }else {
                    setVisibileData(true);
                  }
                  
                }}>
                <Image source={langIcon} resizeMode="contain" style={styles.highlightNew} />
                </TouchableOpacity>
                

                <Image source={perceIcons} resizeMode="contain" style={styles.highlightNew} />

                <Image source={walletIcon} resizeMode="contain" style={styles.highlightNew} />

              </View>
            ),
            statusBarColor: "red",
            headerStyle: { backgroundColor: "red", },
            
          }}
        />
      </Stack.Navigator>
      <BottomSheetLanguage langVisible={visibileData} setVisibileData={setVisibileData}/>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  highlightNew: {
    width: 20,
    height: 20,
    marginHorizontal:7
  },
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


