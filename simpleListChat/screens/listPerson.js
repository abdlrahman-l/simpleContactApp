import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,Image , FlatList} from 'react-native';
import ChatMe from '../components/chatMe';
import { connect } from 'react-redux';
import { changeProfile } from '../actions/changeProfile';
import { bindActionCreators } from 'redux';

function ListPerson({navigation,profile}) {
  
    const pressHandler = (item) => {
        navigation.navigate('PersonDetails',item);
    }
   
    return (
      <View style={styles.container}>
          <FlatList
            data={profile.profile}
            renderItem={({item,index}) => (
              <ChatMe item={item} index={index} pressHandler={pressHandler} />
           )}
          />
          {console.log(profile)}
      </View>
    );
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  changeProfile: profile => dispatch(changeProfile(profile)),
});

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#4d3e3e',
      alignItems: 'stretch',
      padding: 10,
    }
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(ListPerson);