
import logo from '../../assets/images/dream_plus_icon_removebg.png';
import facebookImg from '../../assets/images/facebook.png';
import googleImg from '../../assets/images/google.png';
import React, { useEffect } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import '../utils/global';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Dimensions,
    TextInput,
    CheckBox,
} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <View
            style={{marginVertical:5}}
            />
            <View style={styles.inputViewStyle}>
                <TextInput
                    style={styles.inputStyleTwo}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder={global.enterInviteCode}
                ></TextInput>
            </View>
            <View
            style={{marginVertical:5}}
            />
            <View style={styles.inputViewStyle}>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email or mobile no.'
                ></TextInput>
            </View>
            <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text style={styles.sublight}>{global.youWillReceiveAnOtpForVerification}</Text>
            </View>
            <View style={{ width: "100%", height: 50, marginHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
                <View style={{ borderColor: "#d7d7d7", borderWidth: 2, height: 17, width: 17, borderRadius: 2 }} />
                <Text style={{ color: "black", fontWeight: "400", fontSize: 17, paddingLeft: 10 }}>{global.iCertifyThatIAmAbove}</Text>
            </View>


            <View style={{ width: "100%", height: 45, marginVertical: 20, marginHorizontal: 20, backgroundColor: "#dadada", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#737373", fontWeight: "400", fontSize: 15 }}>{global.register}</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center',flexDirection:"row" }}>
                <Text style={styles.sublight}>{global.byRegisteringIaAgreeTo}</Text>

                <Text 
                onPress={()=>{
                    
                }}
                style={{color:'black',
                fontSize:13,
                textDecorationLine: 'underline',
                marginHorizontal:2}}>T&C</Text>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    inputViewStyle: {
        width: "100%",
        height: 50,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: "#f5f5f5"
    },
    inputStyleTwo:{
        fontSize: 12,
        width: "100%",
        paddingLeft: 20,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: "#c6c6c6"
    },
    inputStyle:{
        fontSize: 15,
        width: "100%",
        paddingLeft: 20,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: "#c6c6c6"
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
        color: "#828282",
        fontWeight: "400",
        fontSize: 12,
        paddingLeft: 5
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

export default RegisterScreen;


