import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class Register extends Component {
    click=()=>{
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View>
                <Text>
                    Register Screen
                </Text>
                <Button title={"Register"} onPress={this.click}/>

            </View>
        );
    }
}

export default Register;
