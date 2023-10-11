import AsyncStorage from '@react-native-async-storage/async-storage';


export const KeyNotification = "NotifiKey";

export const storeData = async (key, values) => {
    try {
        await AsyncStorage.setItem(
            key,
            values,
        );
        console.warn("Data Saved Successfully");
    } catch (error) {
        console.warn("Error : " + error + " key : " + key);
        // console.warn("not data save"+error);
        // Error saving data
    }
};

export const retrieveData = async (key) => {
    //
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            return value;
        } else {
            //  console.warn(key+value);
            return 'false';
        }


    } catch (error) {
        console.warn("Error : " + error + " key : " + key);
        // Error retrieving data
    }
};