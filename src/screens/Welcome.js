
import React, { useState } from 'react';
import logos from '../../assets/images/dream_plus_icon_removebg_small.png';
import oneimg from '../../assets/images/one.png';
import twoimg from '../../assets/images/two.png';
import threeimg from '../../assets/images/three.png';
import fourimg from '../../assets/images/four.png';
import '../utils/global';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get("window");

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title:  global.welcomeToDreamPlus,
      subTitle: global.readyToStartWinning,
      img:oneimg
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title:  global.selectAMatch,
      subTitle: global.chooseAnUpcomingMatch,
      img:twoimg
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title:  global.joinContests,
      subTitle: global.competeWithOtherDreamPlus,
      img:threeimg
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title:  global.createTeams,
        subTitle: global.useYourSkillsToPickTheRight,
        img:fourimg
      },
  ];


const WelcomeScreen = ({navigation}) => {




    const [data, setData] = useState(DATA)
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <LinearGradient colors={['#120107', '#470f1a', '#0e102b', '#010415']} style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.verticalSpace} />
                <Image source={logos} resizeMode="contain" style={styles.highlight} />
                <View style={styles.verticalSpace} />
                <View style={{ height: height * 0.55 }}>
                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((x / width).toFixed(0));
                        }
                        }
                        renderItem={({ item, index }) => {
                            return (
                                <View key={item.id} style={{
                                    width: width, height: height / 2, justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <TouchableOpacity
                                    
                                        disabled={true}
                                        style={{
                                            width: "90%",
                                            height: "100%",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            alignContent:"center",
                                            borderRadius: 10,
                                            padding:20
                                        }} >
                                            <Image source={item.img} resizeMode="contain" style={{height:230}} />
                                            <Text style={{color:"white",fontSize:30,fontWeight:"600",marginBottom:10}}>{item.title}</Text>
                                            <Text style={{color:"#9f9f9f",fontSize:15,fontWeight:"400",textAlign: 'center', }}>{item.subTitle}</Text>
                                        </TouchableOpacity>

                                </View>
                            );
                        }} />
                </View>
                <View style={{ flexDirection: "row", width: width, justifyContent: "center", alignItems: "center" }}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={{ width:currentIndex==index?20: 5, 
                                height:currentIndex==index?8:  5, borderRadius: currentIndex==index?24: 14, backgroundColor: currentIndex==index?'white': 'gray', marginLeft: 5 }}>

                                </View>
                            );
                        })
                    }

                </View>

            </View>

            <View style={styles.footContainer}>
                <View style={[{ justifyContent: "center", alignItems: "center" }]}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register', {name: 'Jane'})}>
                        <Text style={styles.textButton}>{global.register}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.vertical}>
                    <View>
                        <Text style={styles.sublight}>{global.invitedByAFriend}</Text>
                        <Text style={styles.title}>{global.enterCode}</Text>
                    </View>
                    <View style={[{ alignItems: "flex-end" }]}>
                        <Text style={styles.sublight}>{global.alreadyAUser}</Text>
                        <Text style={styles.title} onPress={()=> navigation.navigate('Login', {name: 'Jane'})}>{global.logIn}</Text>
                    </View>
                </View>

            </View>

        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    highlight: {
        height: 50,
        alignContent: "center",
        alignSelf: "center",
    },
    vertical: {
        marginVertical: 5,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    verticalSpace: {
        height: 50
    },
    sublight: {
        fontWeight: '400',
        marginTop: 15,
        fontSize: 12,
        color: "white",
        textAlign: 'center',
    },
    title: {
        fontWeight: '600',
        fontSize: 13,
        marginBottom: 20,

        color: "white",
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: "white",
        marginTop: 30,
        padding: 12,
        alignItems: "center",
        width: "90%",
        borderRadius: 5
    },
    textButton: {
        color: "#222222",
        fontWeight: "600",
        fontSize: 15,
    },
    contentContainer: {
        flex: 1, // pushes the footer to the end of the screen,
        marginVertical: 10,
    },
    footContainer: {
        width: "100%",
    },
});

export default WelcomeScreen;


