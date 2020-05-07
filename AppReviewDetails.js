import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from './gameZone/screens/home.js';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './gameZone/routes/homeStack';
// let customFonts = {
//       'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//       'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
//     };


// export default class App extends React.Component{

//   state = {
//     fontsLoaded : false,
//   };

//   componentDidMount(){
//     this._loadFontsAsync();
//   }

//   async _loadFontsAsync(){
//     await Font.loadAsync(customFonts);
//     this.setState({fontsLoaded:true});
//   }

//   render(){
//     if (this.state.fontsLoaded){
//       return (
//         <Home/>
//       );
//     } else {
//       return(
//       <AppLoading/>
//       )
//     }
//   }
  
// }

const getFonts = () => Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App(){
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
