import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About:{
        screen:About,
        navigationOptions: ({navigation}) => {
            return {
            // headerTitle:'Contacts',
             headerTitle: () => <Header navigation={navigation} titleText='About'/>,
            }
        }
    }
}

const AboutStack = createStackNavigator(screens,{
     defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle:{
                fontFamily: 'nunito-bold',
                color:'#4d3e3e',
            },
            headerTitleContainerStyle:{
                width:'100%',
            },
            headerStyle:{
                backgroundColor:'#fff3cd'
            }
        }}
        );
// export default createAppContainer(ListStack); 
export default AboutStack;