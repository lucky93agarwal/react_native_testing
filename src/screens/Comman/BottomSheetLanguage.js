import {
    View,
    Modal,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import sriLankaIcon from '../../../assets/icons/sri_lanka_icon.png';
import newZealandIcon from '../../../assets/icons/new_zealand_icon.png';

const { width, height } = Dimensions.get("window");
const BottomSheetLanguage = (props) => {
    const [textButton,setTextButton] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [colorTextOne, setColorTextOne] = useState("#4c4c4c");
    const [unselect, setUnselect] = useState("#c6c6c6");

    const [hide, setHide] = useState(false);

    const [hideTwo, setHideTwo] = useState(false);


    const [colorTwo, setColorTwo] = useState("#ffffff");
    const [colorTextTwo, setColorTextTwo] = useState("#4c4c4c");
    const [unselectTwo, setUnselectTwo] = useState("#c6c6c6");

    const handleClick = () => {
        setTextButton(" IN "+global.english);
        setColor("#eff9f1");
        setColorTextOne("#0b511f");
        setUnselect("#2a834a");
        setHide(true);
        setHideTwo(false);

        setColorTwo("#ffffff");
        setColorTextTwo("#4c4c4c");
        setUnselectTwo("#c6c6c6");
    }
    const handleClickTwo = () => {
        setTextButton(" IN "+global.hindi);
        setColorTwo("#eff9f1");
        setColorTextTwo("#0b511f");
        setUnselectTwo("#2a834a");
        setHideTwo(true);
        setHide(false);

        setColor("#ffffff");
        setColorTextOne("#4c4c4c");
        setUnselect("#c6c6c6");
    }

    return (
        <Modal transparent={true}
            visible={props.langVisible}
            animationType='slide'
            onRequestClose={props.onPass}>
            <View
                style={{ flex: 1, backgroundColor: "#000000aa" }}>
                <View style={styles.highlightNew}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: "800", marginTop: 10 }}>{global.selectAppLanguage}</Text>

                    <TouchableOpacity style={[styles.customButton, { backgroundColor: color, borderColor: unselect }]}
                        onPress={() => handleClick()}>
                        <Text style={[styles.customTextButton, { color: colorTextOne }]}>{global.english}</Text>
                        <View style={[styles.circle]}>
                            <View style={[styles.circleTwo, { opacity: hide ? 1 : 0 }]} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.customButton, { backgroundColor: colorTwo, borderColor: unselectTwo, }]}
                        onPress={() => handleClickTwo()}>
                        <Text style={[styles.customTextButton, { color: colorTextTwo }]}>{global.hindi}</Text>
                        <View style={[styles.circle]}>

                            <View style={[styles.circleTwo, { opacity: hideTwo ? 1 : 0 }]} />



                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.submitButton,]}
                        onPress={() => {

                        }}>
                        <Text style={{color:'white',fontSize:15,fontWeight:"500"}}>CONTINUE{textButton}</Text>
                       
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>


    );
}
const styles = StyleSheet.create({
    submitButton:{
        backgroundColor:"#109e38",
        width: "90%",
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        marginTop: 20,
        borderRadius:5
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 15,
        borderColor: "#0a531e",
        borderWidth: 2,
        padding: 2,
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center"
    },
    circleTwo: {
        width: 7,
        height: 7,
        borderRadius: 15,
        backgroundColor: "#0a531e",
    },
    customTextButton: {
        color: "#0a531e",
        fontWeight: "800",
        fontSize: 15,
    },
    pointStyle: {
        height: 150,
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        borderColor: "#d5d6d8",
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 15,
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 15,
        shadowOpacity: 11.0
    },
    verticalView: {
        height: "25%",
        borderTopWidth: 1,
        borderColor: "#f6f6f6",
        alignItems: 'center',
        flexDirection: "row",
    },
    verticalTwoView: {
        height: "20%",
        borderBottomWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#f8f9fb",
        borderColor: "#f6f6f6",
        alignItems: 'center',
        flexDirection: "row",
    },
    highlightNew: {
        height: height,
        width: width,
        backgroundColor: "white",
        top: height / 1.5,
        position: "absolute",
        borderRadius: 10,
        alignItems: "center"
    },
    customButton: {
        width: "90%",
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 20
    },

});
export default BottomSheetLanguage;