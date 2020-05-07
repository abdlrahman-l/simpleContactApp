import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
export default function Card({flex,Component}){
   
    const flexStyle =
        {
        flex: flex,
        borderRadius:10,
        elevation:10,
        margin:10,
        backgroundColor:'white',
        overflow: 'hidden',
        };

    return (
        <View style={flexStyle}>
            <Component/>
        </View>
    );
}
