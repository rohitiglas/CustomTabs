import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class SettingActivity extends Component {
    click=()=>{
        this.props.navigation.navigate('Profile')
    }
    render() {
        return (
            <View>
                <Text>
                    Setting Activity
                </Text>
                <Button title={"Profile"} onPress={this.click}/>

            </View>
        );
    }
}

export default SettingActivity;
