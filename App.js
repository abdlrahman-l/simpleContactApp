import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navigator from './simpleListChat/routes/listChatStack';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})
export default function App() {
  
  const [fontsLoaded,setFontsLoaded] = useState(false);
  if (fontsLoaded){
    return (
      <Navigator/>
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
