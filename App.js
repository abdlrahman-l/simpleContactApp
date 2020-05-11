import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navigator from './simpleListChat/routes/listChatStack';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { connect } from 'react-redux';
import {changeProfile} from './simpleListChat/actions/changeProfile';
import {bindActionCreators} from 'redux';
import { Provider } from 'react-redux';
import configureStore  from './simpleListChat/store/configureStore';

const store = configureStore();
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})
export default function App() {
  
  const [fontsLoaded,setFontsLoaded] = useState(false);
  if (fontsLoaded){
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
