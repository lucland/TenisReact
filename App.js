import React, {Component} from 'react';

import { Image } from 'react-native';

import { createStackNavigator} from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";


const HomeTab = createStackNavigator(
    {
        Component: ComponentsScreen,
        List: ListScreen,
        Image: ImageScreen,
        Counter:CounterScreen,
        Color: ColorScreen,
        Square: SquareScreen,
        Text: TextScreen,
        Box: BoxScreen,
        Home: HomeScreen,
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
        List: ListScreen ,
        Home: HomeScreen ,
        Text: TextScreen ,
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
                if (routeName === 'Component') {
                    return (
                        <Image
                            source={ require('./assets/home.png') }
                            style={{ width: 20, height: 20, }} />
                    );
                } else {
                    return (
                        <Image
                            source={ require('./assets/settings.png') }
                            style={{ width: 20, height: 20 }} />
                    );
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#0091EA',
            inactiveTintColor: '#263238',
        },
    }
);


/* const navigator = createStackNavigator(
    {
      Home: HomeScreen,
      Components: ComponentsScreen,
      List: ListScreen,
      Image: ImageScreen,
      Counter:CounterScreen,
      Color: ColorScreen,
      Square: SquareScreen,
      Text: TextScreen,
      Box: BoxScreen
    },
    {
      initialRouteName: 'Components',
      defaultNavigationOptions: {
        title: 'Mercantis Test'
      }
    }
);
*/

export default createAppContainer(MainApp);
