
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import React, {useEffect}  from 'react';
import '../utils/global';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';


import {NavigationContainer,useNavigation} from '@react-navigation/native';


const VersionCheckScreen = ({navigation}) => {

  const navigationNew = useNavigation();
  useEffect(()=>{
    navigation.navigate('Language', {name: 'Jane'});
    const unsubscripe = navigationNew.addListener("beforeRemove", e=>{
      e.preventDefault();
    });
    return unsubscripe;
  },[navigationNew])

  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.highlight} />
      <Text style={styles.title}>{global.newUpdate}</Text>
      <Text style={styles.sublight}>{global.theCurrentVersion}</Text>
      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL(global.newVersionURL) }>
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
    padding:"0"
  },
  sublight: {
    fontWeight: '600',
    marginHorizontal:60,
    fontSize:12,
   
    color: "white",
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    marginHorizontal:30,
    fontSize:22,
    marginBottom:10,
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


