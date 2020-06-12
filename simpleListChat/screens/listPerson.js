import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,Image , FlatList, ActivityIndicator, PixelRatio} from 'react-native';
import ChatMe from '../components/chatMe';
import { connect } from 'react-redux';
import { changeProfile } from '../actions/changeProfile';
import { bindActionCreators } from 'redux';
class ListPerson extends Component{
  constuctor(props) {

  }
  
  fetchFromService = () => {
    fetch('https://my-json-server.typicode.com/abdlrahman-l/myservice/db')
    .then(response => response.json())
    .then(json => {
      this.props.changeProfile(json.profile);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  componentDidMount(){
    this.fetchFromService();
  }
  pressHandler = (item) => {
    this.props.navigation.navigate('PersonDetails',item);
  }
    render(){
      if (this.props.profile.profile){
        return (
          <View style={styles.container}>
              <FlatList
                data={this.props.profile.profile}
                renderItem={({item,index}) => (
                  <ChatMe item={item} index={index} pressHandler={() => this.pressHandler(item)} />
               )}
              />
          </View>
        );
      } 
      else {
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="small" color='#fff3cd'/>
          </View>
        );
      }
      
    }
    
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
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(ListPerson);