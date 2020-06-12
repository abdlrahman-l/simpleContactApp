import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

export default class App extends React.Component {
	render() {
		return (
			<Container >
				<Title>React Native with ❤ Styled Components</Title>
                <CustomButton text="Click me" textColor="#01d1e5" backgroundColor="lavenderblush"/>
			</Container>
		);
    }
    
    

}
const Container = styled.View`
        flex: 1;
        background-color: papayawhip;
        justify-content: center;
        align-items: center;
    `;
const Title = styled.Text`
    font-size: 24px;
    font-weight: 900;
    color: palevioletred;
`;

const CustomButton = props => {
    return (
        <ButtonContainer backgroundColor={props.backgroundColor}>
            <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.TouchableOpacity`
    width:100px;
    height: 40px;
    padding: 12px;
    border-radius: 10px;
    background-color: ${props => props.backgroundColor}
`;

const ButtonText = styled.Text`
    font-size: 15px;
    color: ${props => props.textColor};
    text-align: center;
`;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});