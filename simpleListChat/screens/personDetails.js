import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Modal,KeyboardAvoidingView} from 'react-native';
import Card from '../components/card';
import editForm from '../components/editForm';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import EditForm from '../components/editForm';
import { connect } from 'react-redux';
import { changeProfile } from '../actions/changeProfile';
import { bindActionCreators } from 'redux';

function PersonDetails({navigation,profile,changeProfile}){
    const [personDetails, setPersonDetails] = useState(
        {
            name:navigation.getParam('name'),
            uri:navigation.getParam('uri'),
            phoneNumber:navigation.getParam('phoneNumber'),
            email:navigation.getParam('email'),
            key:navigation.getParam('key'),
            job:navigation.getParam('job'),
        }
    );
    
    const editPersonDetailsHandler = ({email, name, phoneNumber}) => {
        setPersonDetails((currentPerson) => {
            return {
                name:(name) ? name : currentPerson.name,
                uri:currentPerson.uri,
                phoneNumber:(phoneNumber) ? phoneNumber : currentPerson.phoneNumber,
                email:(email) ? email : currentPerson.email,
            };
        });
        for (let i in profile.profile){
            if (profile.profile[i].key == personDetails.key){
                profile.profile[i] = {
                    name: (name) ? name : personDetails.name,
                     key :personDetails.key,
                     email:(email) ? email : personDetails.email, 
                     phoneNumber:(phoneNumber) ? phoneNumber : personDetails.phoneNumber,
                     job: personDetails.job, 
                     uri:personDetails.uri,
                }
            }
        }
        changeProfile(profile.profile);
        setModalOpen(false);
    }

    const [modalOpen,setModalOpen] = useState(false);
    const RenderImageContainer = () => (
        <React.Fragment>
            <View style={styles.imageContainer}>
                <Image source={{uri:personDetails.uri}} style={styles.imageProfile} />
                <View style={styles.options}>
                    <SimpleLineIcons style={{margin:5}} name='options-vertical' color='white' size={20}/>
                    <MaterialIcons style={{margin:5}} name='edit' color='white' size={20} onPress={() => {setModalOpen(true)}}/>
                </View>
                <Text style={styles.nameProfile}>{personDetails.name}</Text>
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
                <Text style={styles.perDescTitle}>{personDetails.phoneNumber}</Text>
            </View>
            <View style={styles.perDesc}>
                <TouchableOpacity style={styles.box}>
                    <AntDesign name='inbox' color='white' size={20}/>
                </TouchableOpacity>
                <Text style={styles.perDescTitle}>{personDetails.email}</Text>
            </View>
        </View>
    )
        

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}>
             <Modal transparent={true} visible={modalOpen} style={styles.modal} animationType='slide'>
                 <View style={styles.modal}> 
                    <View style={styles.headerModal}>
                        <AntDesign style={{position: "absolute", left:10}} name='close' color='#fff3cd' size={20} onPress={() => {setModalOpen(false)}}/>
                        <Text style={styles.headerTextModal}>Edit Contact</Text>
                    </View>
                    <View style={{backgroundColor:'#ff926b',}}>
                     <EditForm valueHandler={editPersonDetailsHandler} />
                    </View>
                 </View>
             </Modal>
             <Card flex={4} Component={RenderImageContainer} />
             <Card flex={1} Component={DescComponent}/>
             <Card flex={2} Component={DescComponent2}/>
             {console.log(profile)}
        </KeyboardAvoidingView>
    );
}

const mapStateToProps = state => ({
    profile: state.profile,
  });

const mapDispatchToProps = dispatch => ({
    // changeProfile: profile => dispatch(changeProfile(profile)),
    changeProfile: bindActionCreators(changeProfile,dispatch),
});
  
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
    },
    modal:{
        height:250,
        marginLeft:10,
        marginRight:10,
        marginTop:150,
        borderRadius:10,
        elevation:10,
        overflow: 'hidden',
    },
    headerModal:{
        height:50,
        backgroundColor:'#4d3e3e',
        justifyContent:'center',
        alignItems:'center',
    },
    headerTextModal:{
        fontFamily: 'nunito-bold',
        color:'#fff3cd',
        fontSize: 18,
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(PersonDetails);