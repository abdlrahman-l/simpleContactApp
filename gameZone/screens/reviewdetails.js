import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Details Screen</Text>
            <Text>{navigation.getParam('rating')[0].rating1}</Text>
            <Text>{navigation.getParam('rating')[0].rating3}</Text>
            <Button title='back to Home' onPress={pressHandler}/>
        </View>
    )
}
