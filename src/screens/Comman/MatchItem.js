import {
    Modal,
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import sriLankaIcon from '../../../assets/icons/sri_lanka_icon.png';
import newZealandIcon from '../../../assets/icons/new_zealand_icon.png';
const NotificationModal = (props) => {
    const [visibile, setVisibile] = useState(true);

    return (
        <View style={styles.pointStyle}>
            <View style={styles.verticalTwoView}>
                <Text style={{ color: "#2a2b2d", fontSize: 11, paddingHorizontal: 10 }}>ICC Men's ODI Cricket World Cup</Text>

            </View>
            <View style={{
                height: "55%",
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
            }}>


                <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                    <View style={{ height: 40, borderRadius: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={newZealandIcon} resizeMode="contain" style={styles.highlightNew} />
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 14, marginHorizontal: 10 }}>
                            NZ
                        </Text>
                    </View>
                    <Text style={{ color: "#707070", fontWeight: "400", fontSize: 10, marginTop: 5 }}>
                        New Zealand
                    </Text>
                </View>


                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ borderRadius: 5, backgroundColor: "#fff5f7", padding: 5 }}>
                        <Text style={{ color: "red", fontWeight: "900", fontSize: 10 }}>
                            55m 29s
                        </Text>
                    </View>
                    <Text style={{ color: "#707070", fontWeight: "400", fontSize: 10, marginTop: 5 }}>
                        05:30 PM
                    </Text>
                </View>


                <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                    <View style={{ height: 40, borderRadius: 5, padding: 5, flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 14, marginHorizontal: 10 }}>
                            SL
                        </Text>
                        <Image source={sriLankaIcon} resizeMode="contain" style={styles.highlightNew} />

                    </View>
                    <Text style={{ color: "#707070", fontWeight: "400", fontSize: 10, marginTop: 5, textAlign: 'right' }}>
                        Sri Lanka
                    </Text>
                </View>
            </View>

            <View style={styles.verticalView}>
                <View style={{
                    flexDirection: "row",
                    borderColor: "#f4e9d2",
                    backgroundColor: "#fef7eb",
                    borderWidth: 1,
                    borderRadius: 5,
                    marginHorizontal: 10,
                    paddingVertical: 3
                }}>
                    <Text style={{ color: "red", fontWeight: "800", fontSize: 12, marginLeft: 10 }}>
                        MEGA ₹
                    </Text>
                    <Text style={{ color: "red", fontWeight: "400", fontSize: 10, marginRight: 10 }}>
                        2.55 Crores
                    </Text>
                </View>

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    pointStyle: {
        height: 150,
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        borderColor: "#d5d6d8",
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 15,
        elevation:5,
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
        height: 40,
        width: 40
    },

});
export default NotificationModal;