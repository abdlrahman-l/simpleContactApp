import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function ChatMe({item,index,pressHandler}){

    return (
      <TouchableOpacity onPress={() => (pressHandler(item))}>
        <View style={styles.chatRow}>
            {/* <View style={checkIndex({index})}> */}
            <View style={styles.contentChatRow}>
                <Image style={styles.imageCircle} source={{uri:item.uri}}/>
                <View style={styles.descPerson}>
                  <Text style={styles.nameFont}>{item.name}</Text>
                  <Text style={styles.jobDescFont}>{item.job}</Text>
                </View>
                <View style={styles.interactIcon}>
                  <AntDesign name='message1' size={18} color='#444'/>
                  <AntDesign name='phone' size={18} color='#444'/>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
      chatRow:{
        padding: 5,
        borderTopLeftRadius:35,
        borderBottomStartRadius:35,
        borderTopRightRadius:10,
        borderBottomEndRadius:10,
        backgroundColor: 'white',
        margin: 5,
        marginLeft:5,
        elevation: 4
      },
      imageCircle:{
        height: 60,
        width: 60,
        borderRadius: 30,
      },
      contentChatRow:{
        flex:1,
        flexDirection:'row'
      },
      nameFont:{
        color:'#444',
        fontFamily:'nunito-bold',
      },
      jobDescFont:{
        color:'#444',
        fontFamily:'nunito-regular',
      },
      descPerson:{
        flex:4,
        margin:10
      },
      interactIcon:{
        flexDirection:'row',
        flex:2,
        alignItems: 'center',
        justifyContent: 'space-around',
      }
});