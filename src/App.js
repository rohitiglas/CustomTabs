import React from 'react';
import { View, Text ,Image} from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './screens/Login';
import Register from './screens/Signup';
import SettingActivity from './screens/SettingActivity';
import DetailsActivity from './screens/DetailsActivity';
import ProfileActivity from './screens/ProfileActivity';
import ArtistScreen from './screens/ArtistScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';





const HomeTab = createStackNavigator(
    {
        ArtistScreen:ArtistScreen,

        Login: Login ,
        SignUp: Register ,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Home Tab',

        },
    }
);

const SettingsTab = createStackNavigator(
    {
        Settings: SettingActivity ,
        Details: DetailsActivity ,
        Profile: ProfileActivity ,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#FFFFFF',
            title: 'Settings Tab',

        },
    }
);


const MainApp = createBottomTabNavigator(
    {
        Home: HomeTab ,
        Settings: SettingsTab ,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={ require('./assets/home.jpeg') }
                            style={{ width: 20, height: 20, }} />
                    );
                } else {
                    return (
                        <Image
                            source={ require('./assets/setting.jpeg') }
                            style={{ width: 20, height: 20 }} />
                    );
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#FF6F00',
            inactiveTintColor: '#263238',
        },
    }
);

export default createAppContainer(MainApp);
