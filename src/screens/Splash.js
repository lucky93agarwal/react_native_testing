
import { NavigationContainer } from '@react-navigation/native';
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';





 

const SplashScreenComponent = ({navigation}) => {
  useEffect(()=>{
    console.warn("Lucky Agarwal");
    setTimeout(() => {
      navigation.navigate('Version', {name: 'Jane'});
    }, 5000);
  },[])
  return (
  <View style={styles.container}>
    <Image source={logo} resizeMode="contain" style={styles.highlight} />
    <Text style={styles.sublight}>MSL Dream Plus is an Indian fantasy sports UI platform that allows users to play fantasy cricket, hockey, football, kabaddi, handball, basketball, volleyball, rugby, futsal, American football and baseball. </Text>
  
  </View>
  );
};

const styles = StyleSheet.create({

  highlight: {
    width:300,
    alignContent:"center",
    alignSelf:"center",
  },
  sublight: {
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

export default SplashScreenComponent;


