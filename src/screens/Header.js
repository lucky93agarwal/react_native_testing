import {StyleSheet,View, Image,Text} from 'react-native';
import React, { useState } from 'react';
import logos from '../../assets/images/dream_plus_icon_removebg_small.png';
const Header = (props) => {
    return(
        <View>
             <Image source={logos} resizeMode="contain" style={styles.highlight} />
            {/* <Text>                
                {props.name}
            </Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    highlight: {
        width: 80,
        height:20
    },
});

export default Header;