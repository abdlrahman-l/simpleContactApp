import React, {useState} from 'react';
import { StyleSheet, Text, View,Image , FlatList} from 'react-native';
import ChatMe from '../components/chatMe';

export default function ListPerson({navigation}) {
    const [rowChat, setRowChat] = useState([
        {name: 'Abdul Rahman', key :'0', email:'abdul.r@photoninfotech.net', phoneNumber:'0895332151170', job: 'Software Engineer', uri:'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/73260603_407787749900210_7038870619781332992_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=Aqdr8VEP0cMAX_P3V2g&oh=49342f703fb7486d606fc3cb1440ab0c&oe=5ED9F8F3'},
        {name: 'Dandy Pramudya', key :'1', email:'dandy.p@photoninfotech.net', phoneNumber:'085717321007', job: 'System Analyst', uri:'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/75458055_958324527901447_3246780037784928256_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=kmAiDfPgvt4AX-Grjm2&oh=58c8c3244add13662663447408c2aa6f&oe=5EDB29C1'},
        {name: 'Muhammad Hanif', key :'2', email:'hanif.h@photoninfotech.net', phoneNumber:'088293819232', job: 'Network Engineer', uri:'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/87552259_542803306350533_9003126783930793984_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=EDt4FHjbfPUAX_M6L5x&oh=aeff87cf16fb5023d7e467d608e9de03&oe=5EDAD4A1'},
        {name: 'Bintang Bagaskara', key :'3', email:'bintang.b@photoninfotech.net', phoneNumber:'0884728392', job: 'Big Data Analyst', uri:'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/62354683_942639682796002_8825553993892626432_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=SuLe2qGQrHQAX_Jh9Z4&oh=0f149d227a6a56f00158fe2046c51d63&oe=5EDA5AD9'},
     ]);
     
    const pressHandler = (item) => {
        navigation.navigate('PersonDetails',item);
    }
   
    return (
      <View style={styles.container}>
          <FlatList
            data={rowChat}
            renderItem={({item,index}) => (
              <ChatMe item={item} index={index} pressHandler={pressHandler} />
           )}
          />
          
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#4d3e3e',
      alignItems: 'stretch',
      padding: 10,
    }
  });
  