import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation,titleText}){
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu}/>
            <View>
                <Text style={styles.headerText}> {titleText} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height:'100%',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize: 20,
        fontFamily: 'nunito-bold',
        color:'#4d3e3e',
    },
    icon:{
        position: 'absolute',
        left: 16,
    }
});