import {
    Modal,
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import React, { useState,useEffect } from 'react';
import logo from '../../../assets/images/one.png';
import { storeData, retrieveData, KeyNotification } from '../../storage/LocalStorage';
const NotificationModal = (props) => {
    const [visibile, setVisibile] = useState(true);
    
    getLocalData = async () => {
        console.warn("lucky  "+retrieveData(KeyNotification));
        if(retrieveData(KeyNotification) == "true"){//
            console.warn("lucky  "+retrieveData(KeyNotification));
            setVisibile(false);
        }else {
            setVisibile(true);
        }
    }
    useEffect(() => {
        getLocalData();
    }, [])
    return (


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
                            storeData(KeyNotification,"true");
                           
                         // setVisibile(false);
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
                            //
                            retrieveData(KeyNotification);
                         //   setVisibile(false);
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
       
    );
}
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
  
});
export default NotificationModal;