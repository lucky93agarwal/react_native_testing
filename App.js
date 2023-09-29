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



const App = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.highlight}>Dream 11</Text>
    <Text style={styles.sublight}>MSL Dream Plus is an Indian fantasy sports UI platform that allows users to play fantasy cricket, hockey, football, kabaddi, handball, basketball, volleyball, rugby, futsal, American football and baseball. </Text>
  </View>
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


