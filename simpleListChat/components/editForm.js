import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';
import Card from '../components/card';
import { Formik } from 'formik';

export default function EditForm({valueHandler,person}){
    return (
        <Formik
            initialValues={{ name:'', phoneNumber:'', email:'' }}
            onSubmit={(values) => {
                valueHandler(values);
            }}
        >
            { (props) => (
                <React.Fragment>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Name'
                        onChangeText={props.handleChange('name')}
                        value={props.values.name}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Phone number'
                        onChangeText={props.handleChange('phoneNumber')}
                        value={props.values.phoneNumber}
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                    />
                    <TouchableHighlight style={styles.submitBtnForm} onPress={props.handleSubmit}>
                        <Text style={{fontFamily:'nunito-bold', fontSize:18, color:'#4d3e3e'}}>Update</Text>
                    </TouchableHighlight>

                </React.Fragment>
            )}
            
        </Formik>
    );
}

const styles = StyleSheet.create({
    textInput:{
        padding:5,
        height:50,
        borderBottomWidth:1,
        borderBottomColor: '#4d3e3e',
        backgroundColor: '#fff3cd',
    },
    submitBtnForm:{
        backgroundColor:'#fff3cd',
        height:40,
        justifyContent:'center',
        alignItems: 'center',
    }
});