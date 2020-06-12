import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import AboutStack from './aboutStack';
import About from '../screens/about';
import React from 'react';
import ListStack from './listChatStack';
import ListPerson from '../screens/listPerson';

//   const TabNavigator = createBottomTabNavigator({
//     RootDrawer: createDrawerNavigator({
//         List: {
//             screen: ListStack,
//         },
//         About: {
//             screen: AboutStack,
//         }
//     }),
//     RootDrawers: createDrawerNavigator({
//         About: {
//             screen: AboutStack,
//         },
//         List: {
//             screen: ListStack,
//         },
        
//     }),
//   });

const RootDrawerNavigator = createDrawerNavigator({
    List: {
        screen: ListStack,
    },
    About: {
        screen: AboutStack,
    }
});


// export default createAppContainer(TabNavigator);
export default createAppContainer(RootDrawerNavigator);
// export default RootDrawerNavigator;