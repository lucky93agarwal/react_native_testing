
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import React, {useState}  from 'react';
import '../utils/global';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


const LanguageChangeScreen = () => {


    const [color,setColor]=useState("#230505");
    const handleClick = () => { 
        setColor("#4b090d"); 
        setColortwo("#230505"); 
        setSelect("#3f181b");
        setUnselect("#7b1b23");
    }

    const [colortwo,setColortwo]=useState("#230505");

    const [unselect,setUnselect]=useState("#3f181b");
    const [select,setSelect]=useState("#3f181b");

    const handleClickTwo = () => { 
        setColor("#230505");
        setColortwo("#4b090d"); 
        setSelect("#7b1b23");
        setUnselect("#3f181b");
    }
  return (
    <LinearGradient  colors={['#120107', '#470f1a','#0e102b', '#010415']}  style={styles.container}>
            <View style={styles.contentContainer}>
            <View style={styles.verticalSpace}/>
            <View style={styles.verticalSpace}/>
                <Text style={styles.title}>Select App Language </Text>
                <Text style={styles.sublight}>You can change your prefersence from "My Info & Setting" in the menu later</Text>
               

                <TouchableOpacity style={[styles.customButton, {backgroundColor:color,  borderColor: unselect,}]} onPress={()=> handleClick() }>
                    <Text style={styles.customTextButton}>English</Text>
                    <Text style={styles.customTextButton}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.customButton, {backgroundColor:colortwo, borderColor: select,}]} onPress={()=>  handleClickTwo() }>
                    <Text style={styles.customTextButton}>हिन्दी - Hindi</Text>
                    <Text style={styles.customTextButton}>English</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footContainer}>
                <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL(global.newVersionURL) }>
                    <Text style={styles.textButton}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            
        </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
    verticalSpace: {
        height:50
    },
    customButton:{
        padding:17,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius: 8,
        borderWidth:2
    },

  highlight: {
    width:300,
    alignContent:"center",
    alignSelf:"center",
    padding:"0"
  },
  sublight: {
    fontWeight: '400',
    marginHorizontal:30,
    fontSize:13,
    color: "white",
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    marginHorizontal:30,
    fontSize:25,
    marginVertical:20,
    color: "white",
    textAlign: 'center',
  },
  container: {
    flex:1,
    alignItems: 'center',
  },
  button:{
    backgroundColor:"white",
    marginTop:30,
    padding:12,
    alignItems:"center",
    width: "90%",
    borderRadius: 5
    },
textButton:{
    color:"#222222",
    fontWeight:"600",
    fontSize:15,
},
customTextButton:{
    color:"white",
    fontWeight:"400",
    fontSize:15,
},
contentContainer: {
    flex: 1, // pushes the footer to the end of the screen,
    marginVertical:10
},
footContainer: {
    height: 100,
    width:"100%",
    alignContent:"center",
    alignItems:'center'
},
});

export default LanguageChangeScreen;


