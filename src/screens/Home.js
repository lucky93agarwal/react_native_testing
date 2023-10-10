

import facebookImg from '../../assets/images/facebook.png';
import googleImg from '../../assets/images/google.png';
import api, { axiosGetReq } from '../../src/api/axiosapicall';
import TextData from '../../src/screens/TestData';
import React, { useState, useEffect } from 'react';
import '../utils/global';
import NotificationModal from './Comman/NotificationModal';
import BottomSheetLanguage from './Comman/BottomSheetLanguage';
import MatchItem from './Comman/MatchItem';
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
                // console.warn(res.status);
                // console.warn(res.data);
            }).catch(error => {
                // console.warn(error);
            });
    }

    useEffect(() => {
        getAPIData();
    }, [])


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









            <ScrollView>
                {
                    data ? data.map((index) => {
                        return (

                            <View>
                                {
                                    index.id == 1 ? <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                        <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>Upcoming Matches</Text>
                                    </View> : null

                                }
                                <MatchItem />
                            </View>
                        )
                    }) : null
                }
            </ScrollView>


           
            <NotificationModal/>






        </View>
    );
};

const styles = StyleSheet.create({




    container: {
        flex: 1,
        backgroundColor: "white"
    },
});

export default HomeScreen;


