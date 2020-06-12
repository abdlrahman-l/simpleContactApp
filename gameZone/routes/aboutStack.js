import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import About from '../screens/about';

const screens = {
    About : {
        screen: About
    },
}

const AboutStack = createStackNavigator(screens);

export default AboutStack;