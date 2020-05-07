import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import Card from '../components/card';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function PersonDetails({navigation}){
    const RenderImageContainer = () => (
        <React.Fragment>
            <View style={styles.imageContainer}>
                <Image source={{uri:navigation.getParam('uri')}} style={styles.imageProfile} />
                <View style={styles.options}>
                    <SimpleLineIcons style={{margin:5}} name='options-vertical' color='white' size={20}/>
                    <MaterialIcons style={{margin:5}} name='edit' color='white' size={20}/>
                </View>
                <Text style={styles.nameProfile}>{navigation.getParam('name')}</Text>
            </View>
        </React.Fragment>
    );

    const DescComponent = () => (
        <View style={styles.descContainer}> 
            <TouchableOpacity style={styles.circle}>
                <AntDesign name='message1' color='white' size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
                <AntDesign name='phone' color='white' size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
                <AntDesign name='inbox' color='white' size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
                <AntDesign name='staro' color='white' size={20}/>
            </TouchableOpacity>
        </View>
    )

    const DescComponent2 = () => (
        <View style={styles.descContainer2}> 
            <View style={styles.perDesc}>
                <TouchableOpacity style={styles.box}>
                    <AntDesign name='contacts' color='white' size={20}/>
                </TouchableOpacity>
                <Text style={styles.perDescTitle}>{navigation.getParam('phoneNumber')}</Text>
            </View>
            <View style={styles.perDesc}>
                <TouchableOpacity style={styles.box}>
                    <AntDesign name='inbox' color='white' size={20}/>
                </TouchableOpacity>
                <Text style={styles.perDescTitle}>{navigation.getParam('email')}</Text>
            </View>
        </View>
    )
        

    return (
         <View style={styles.container}>
             <Card flex={4} Component={RenderImageContainer} />
             <Card flex={1} Component={DescComponent}/>
             <Card flex={2} Component={DescComponent2}/>
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
      },
    imageContainer:{
        flex:1,
    },
    imageProfile:{
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    },
    options:{
        right:0,
        marginTop:5,
        marginRight:5,
        position:"absolute",
        flexDirection: 'row-reverse',
    },
    nameProfile:{
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontFamily:'nunito-regular',
        fontSize: 20,
        color: 'white',
    },
    circle:{
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: '#4d3e3e',
        justifyContent: 'center',
        alignItems: "center",
    },
    box:{
        width: 44,
        height: 44,
        borderRadius: 5,
        backgroundColor: '#4d3e3e',
        justifyContent: 'center',
        alignItems: "center",
    },
    descContainer:{
        flex: 1,
        backgroundColor:'#fff3cd',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    descContainer2:{
        flex: 1,
        backgroundColor:'#fff3cd',
        justifyContent:'space-around',
        alignItems: 'flex-start',
        padding:20,
    },
    perDesc:{
        flexDirection: 'row',
        alignItems:'center',
    },
    perDescTitle:{
        marginLeft: 10,
        fontFamily:'nunito-regular',
        fontSize: 17,
    }
})