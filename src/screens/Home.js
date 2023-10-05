
import logo from '../../assets/images/one.png';
import facebookImg from '../../assets/images/facebook.png';
import googleImg from '../../assets/images/google.png';
import api, { axiosGetReq } from '../../src/api/axiosapicall';
import TextData from '../../src/screens/TestData';
import React, { useState, useEffect } from 'react';
import '../utils/global';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Dimensions,
    ScrollView,
    Modal,
    TouchableOpacity,
} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState(undefined);

    const getAPIData = async () => {
        // api call


       
        
        await axiosGetReq()
            .then(res => {
                setData(res.data);
                console.warn(res.data);
            }).catch(error => {
                console.warn(error);
            });
    }

    useEffect(() => {
        setVisibile(true);
        getAPIData();
    }, [])

    const [visibile, setVisibile] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="red"
                barStyle="light-content"
            />

            <View
                style={{
                    width: width,
                    height: 45,
                    backgroundColor: 'black',
                    justifyContent: 'center',
                }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ color: "white", fontSize: 9, fontVariant: '400' }}>{global.selectMatch}</Text>
                    <Text style={{ color: "white", fontSize: 9, fontVariant: '400' }}>{global.joinContest}</Text>
                    <Text style={{ color: "white", fontSize: 9, fontVariant: '400' }}>{global.createTeam}</Text>
                </View>



            </View>

            <View></View>


            <TextData />

            {
                data ? <View><Text style={{ color: 'black', marginTop: 30 }}>{data.id}</Text>
                    <Text style={{ color: 'black', marginTop: 30 }}>{data.body}</Text></View> : null
            }
            <Modal transparent={true}
                visible={visibile}>
                <View style={{ flex: 1, backgroundColor: "#000000aa", justifyContent: 'center', alignItems: 'center' }}>
                    <View
                        style={{
                            width: "90%",
                            height: 550,
                            backgroundColor: "#ffe7e7",
                            borderRadius: 5,
                            alignItems: 'center',
                            padding: 15
                        }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: 22,
                            marginTop: 40,
                            textAlign: 'center',
                        }}>
                            {global.neverMissOutOnTheBestOfDreamPlus}
                        </Text>
                        <Image source={logo} resizeMode="contain" style={styles.highlightNew} />

                        <Text style={{
                            color: "#82807f",
                            fontWeight: "400",
                            fontSize: 18,
                            textAlign: 'center',
                        }}>{global.allowNotificationToGetTheLatestUpdate}</Text>

                        <TouchableOpacity onPress={() => {
                            setVisibile(false);
                        }}
                            style={{
                                width: "100%",
                                height: 40,
                                marginTop: 20,
                                marginHorizontal: 20,
                                backgroundColor: "#109e38",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text style={{
                                color: "white",
                                fontWeight: "800",
                                fontSize: 15
                            }}>{global.allowNotification}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            setVisibile(false);
                        }}
                            style={{
                                width: "100%",
                                height: 40,
                                marginTop: 20,
                                marginHorizontal: 20,
                                backgroundColor: "transparent",
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: '#d2d2d2',
                                borderWidth: 1
                            }}>
                            <Text style={{
                                color: "black",
                                fontWeight: "800",
                                fontSize: 15
                            }}>{global.maybeLater}</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </Modal>





        </View>
    );
};

const styles = StyleSheet.create({
    highlightNew: {
        width: 170,
        height: 170,
        backgroundColor: "white",
        borderRadius: 200 / 2,
        overflow: "hidden",
        marginHorizontal: 7,
        marginVertical: 40
    },
    fgbutton: {
        flex: 1,
        marginLeft: 20,
        marginRight: 5,
        flexDirection: "row",
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointStyle: { width: 3, height: 3, backgroundColor: "#e1e1e1", marginHorizontal: 2 },

    highlight: {
        width: 20,
        height: 20,
        alignContent: "center",
        alignSelf: "center",
        padding: "0"
    },
    sublight: {
        fontWeight: '600',
        marginHorizontal: 60,
        fontSize: 12,

        color: "white",
        textAlign: 'center',
    },
    title: {
        fontWeight: '600',
        marginHorizontal: 30,
        fontSize: 22,
        marginBottom: 10,
        color: "white",
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    button: {
        backgroundColor: "white",
        marginTop: 30,
        padding: 12,
        justifyContent: 'center',
        alignItems: "center",
        width: "80%",
        borderRadius: 25
    },
    textButton: {
        color: "#222222",
        fontWeight: "600",
        fontSize: 18
    }
});

export default HomeScreen;


