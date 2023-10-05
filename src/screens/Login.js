
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import facebookImg from '../../assets/images/facebook.png';
import googleImg from '../../assets/images/google.png';
import React, { useEffect } from 'react';
import '../utils/global';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const LoginScreen = ({navigation}) => {



    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <View style={{ width: width, marginHorizontal: 20, flexDirection: "row", marginVertical: 10 }}>
                <View style={{
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
                }}>
                    <Image source={facebookImg} resizeMode="contain" style={styles.highlight} />
                    <Text style={{ color: "black", paddingLeft: 10 }}>Facebook</Text>
                </View>
                <View style={{
                    flex: 1,
                    marginRight: 20,
                    marginLeft: 5,
                    flexDirection: "row",
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={googleImg} resizeMode="contain" style={styles.highlight} />
                    <Text style={{ color: "black", paddingLeft: 10 }}>Google</Text>
                </View>
            </View>
            <View style={{ width: width, height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
                <View style={styles.pointStyle} />
                <View style={styles.pointStyle} />
                <View style={styles.pointStyle} />
                <View style={{ width: 40, height: 40, backgroundColor: "#f5f5f5", marginHorizontal: 5, borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "#7a7a7a", fontWeight: "400" }}>OR</Text>
                </View>
                <View style={styles.pointStyle} />
                <View style={styles.pointStyle} />
                <View style={styles.pointStyle} />
            </View>
            <View style={{ width: "100%", height: 50, marginVertical: 10, marginHorizontal: 20, backgroundColor: "#f5f5f5" }}>
                <TextInput
                    style={{ fontSize: 16, width: "100%", paddingLeft: 20, borderRadius: 5, borderBottomWidth: 2, borderColor: "#c6c6c6" }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email or mobile no.'
                ></TextInput>
            </View>
            <View style={{ width: "100%", height: 50, marginHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
                <View style={{ borderColor: "#d7d7d7", borderWidth: 2, height: 15, width: 15, borderRadius: 2 }} />
                <Text style={{ color: "black", fontWeight: "400", fontSize: 15, paddingLeft: 10 }}>{global.iCertifyThatIAmAbove}</Text>
            </View>


            <TouchableOpacity onPress={() => {
                navigation.navigate('home', {name: 'Jane'});
            }}
                style={{
                    width: "100%",
                    height: 40,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    backgroundColor: "#dadada",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{
                    color: "#737373",
                    fontWeight: "400",
                    fontSize: 15
                }}>Next</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <Text>{global.notAMember}</Text>
                <Text style={{ color: "black" }}>{global.register}</Text>
            </View>




        </View>
    );
};

const styles = StyleSheet.create({
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
        padding: 20,
        alignItems: 'center',
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

export default LoginScreen;


