import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListPerson from '../screens/listPerson';
import PersonDetails from '../screens/personDetails';

const screens = {
    ListPerson:{
        screen:ListPerson,
        navigationOptions: {
            headerTitle:'Contacts',
        }
    },
    PersonDetails:{
        screen:PersonDetails,
        navigationOptions: {
            headerTitle:'Contact Details',
        }
    }
}

const ListStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTitleStyle:{
            fontFamily: 'nunito-bold',
            color:'#4d3e3e',
        },
        headerStyle:{
            backgroundColor:'#fff3cd',
        }
    }
});
export default createAppContainer(ListStack);