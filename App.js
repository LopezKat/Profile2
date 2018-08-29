import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

import Profile from './src/scenes/Profile';
import Contacts from './src/scenes/Contacts';
import Diary from './src/scenes/Diary';


const AppNavigator = StackNavigator(
  {
    ProfileScreen: {
      screen: Profile
    },
    ContactsScreen: {
      screen: Contacts
    },
    DiaryScreen: {
      screen: Diary,
      navigationOptions:()=>({
        title: "Diary"
      })
    }
  },
  {
    initialRouteName: 'DiaryScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#33D1FF',
        borderBottomColor: '#33D1FF',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 20
      }
    }
  }
);

//import Perfil from './src/scenes/Profile/index.js';
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //Retorna un component
      <AppNavigator />
    );
  }
}
