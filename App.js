import React, { Component } from 'react';
import {
  Platform,
  Text,
  View 
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Profile from './src/scenes/Profile';
import Contacts from './src/scenes/Contacts';

const AppNavigator = StackNavigator(
  {
    ProfileScreen : {
      screen: Profile
    },
    ContactsScreen:{
      screen: Contacts
    }
  },
  {
    initialRouteName: 'ProfileScreen'
  }
);

//import Perfil from './src/scenes/Profile/index.js';
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      //Retorna un component
      <AppNavigator />
    );
  }
}
