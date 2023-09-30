
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';


console.log("Lucky AGarwal");

const VersionCheckScreen = () => {
  return (
  <View style={styles.container}>
    <Image source={logo} resizeMode="contain" style={styles.highlight} />
    <Text style={styles.sublight}>The current version of app is no longer supported. We apologized for any inconvenience we may have caused you. </Text>
    <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL("https://play.google.com/store/apps/details?id=com.thealphamerc.flutter_twitter_clone") }>
      <Text style={styles.textButton}>Update now</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({

  highlight: {
    width:300,
    alignContent:"center",
    alignSelf:"center",
    color: "white",
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
  },
  button:{
    backgroundColor:"white",
    marginTop:30,
    padding:12,
    justifyContent:'center',
    alignItems:"center",
    width: "80%",
    borderRadius: 25
    },
textButton:{
    color:"#222222",
    fontWeight:"600",
    fontSize:18
}
});

export default VersionCheckScreen;


