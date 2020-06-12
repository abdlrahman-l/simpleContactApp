import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListPerson from '../screens/listPerson';
import PersonDetails from '../screens/personDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    ListPerson:{
        screen:ListPerson,
        navigationOptions: ({navigation}) => {
            return {
            // headerTitle:'Contacts',
            headerTitleContainerStyle:{
                width:'100%',
            },
             headerTitle: () => <Header navigation={navigation} titleText='Contacts'/>,
            }
        }
    },
    PersonDetails:{
        screen:PersonDetails,
        navigationOptions: {
            headerTitle:'Contact Details',
        }
    }
}

const ListStack = createStackNavigator(screens
    ,{
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTitleStyle:{
            fontFamily: 'nunito-bold',
            color:'#4d3e3e',
        },
        headerStyle:{
            backgroundColor:'#fff3cd'
        }
    }}
    );
// export default createAppContainer(ListStack);
export default ListStack;