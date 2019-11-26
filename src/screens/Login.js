import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class Login extends Component {
    click=()=>{
        // this.props.navigation.navigate('SignUp')

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'SignUp' })],
        });
        this.props.navigation.dispatch(resetAction)
    }
    render() {
        return (
            <View>
                <Text>
                    Login Screen
                </Text>
                <Button title={"Signup"} onPress={this.click}/>

            </View>
        );
    }
}

export default Login;
