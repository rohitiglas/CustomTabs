import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class ProfileActivity extends Component {
    click=()=>{
        this.props.navigation.navigate('Details')
    }
    render() {
        return (
            <View>
                <Text>
                    Profile Activity
                </Text>
                <Button title={"Details"} onPress={this.click}/>

            </View>
        );
    }
}

export default ProfileActivity;
