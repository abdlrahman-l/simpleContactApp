import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
// export default class Home extends React.Component{
//     render(){
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.titleText}>Home Screen</Text>
//             </View>
//         )
//     }
// }
export default function Home({ navigation }){

    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    //     //navigation.push('ReviewDetails);
    // }
    const [reviews, setReviews] = useState([
        {title: 'Uvuvewwvwe, the most handsome man', rating:[{rating1:2,rating2:2,rating3:3}], body:'bodynyaa',key:'1'},
        {title: 'Arena Of Valor', rating:[{rating1:2,rating2:2,rating3:3}], body:'bodynyaa',key:'2'},
        {title: 'Clash Of Clans', rating:[{rating1:2,rating2:2,rating3:3}], body:'bodynyaa',key:'3'}
    ]);
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <FlatList 
                data={reviews}
                renderItem={({item}) => {
                    return (
                        <Text onPress={() => (navigation.navigate('ReviewDetails',item))}>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}
