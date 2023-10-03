
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import React, {useState,useEffect}  from 'react';
import logos from '../../assets/images/dream_plus_icon_removebg_small.png';
import '../utils/global';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer,useNavigation} from '@react-navigation/native';

const LanguageChangeScreen = ({navigation}) => {

  const navigationNew = useNavigation();
  useEffect(()=>{
    const unsubscripe = navigationNew.addListener("beforeRemove", e=>{
      e.preventDefault();
    });
    return unsubscripe;
  },[navigationNew])

    const [color,setColor]=useState("#230505");
    const handleClick = () => { 
        setColor("#4b090d"); 
        setColortwo("#230505"); 
        setSelect("#3f181b");
        setUnselect("#7b1b23");
        setHide(true);
        setHideTwo(false);
    }

    const [colortwo,setColortwo]=useState("#230505");
    const [hide,setHide]=useState(false);
    const [hideTwo,setHideTwo]=useState(false);

    const [unselect,setUnselect]=useState("#3f181b");
    const [select,setSelect]=useState("#3f181b");

    const handleClickTwo = () => { 
        setColor("#230505");
        setColortwo("#4b090d"); 
        setSelect("#7b1b23");
        setUnselect("#3f181b");
        setHideTwo(true);
        setHide(false);
    }
  return (
    <LinearGradient  colors={['#120107', '#470f1a','#0e102b', '#010415']}  style={styles.container}>
            <View style={styles.contentContainer}>
            <View style={styles.verticalSpace}/>
                <Image source={logos} resizeMode="contain" style={styles.highlight} />
               
                <Text style={styles.title}>{global.selectAppLanguage}</Text>
                <Text style={styles.sublight}>{global.youCanChangeYourPrefersenceFrom}</Text>
               

                <TouchableOpacity style={[styles.customButton, {backgroundColor:color,  borderColor: unselect}]} onPress={()=> handleClick() }>
                    <Text style={styles.customTextButton}>{global.english}</Text>
                    <View style={[styles.circle]}>
                    <View style={[styles.circleTwo,{opacity:hide?1:0}]}/>
                      
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.customButton, {backgroundColor:colortwo, borderColor: select,}]} onPress={()=>  handleClickTwo() }>
                    <Text style={styles.customTextButton}>{global.hindi}</Text>
                    <View style={[styles.circle]}>
                     
                        <View style={[styles.circleTwo,{opacity:hideTwo?1:0}]}/>
                     
                      
                      
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.footContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>  navigation.navigate('Welcome', {name: 'Jane'}) }>
                    <Text style={styles.textButton}>{global.continue}</Text>
                </TouchableOpacity>
            </View>
            
        </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  highlight: {
    height:50,
    alignContent:"center",
    alignSelf:"center",
  },
  circle:{
    width:18,
    height:18,
    borderRadius: 15,
    borderColor: "white",
    borderWidth:2,
    padding:2,
    justifyContent:'center',
    alignContent:"center",
    alignItems:"center"
  },
  circleTwo:{
    width:7,
    height:7,
    borderRadius: 15,
    backgroundColor: "white",
  },
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
  sublight: {
    fontWeight: '400',
    marginHorizontal:30,
    marginBottom:20,
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


