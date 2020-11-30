import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from "react-navigation-tabs";
import ReadStory from "./screens/LoginScreen";

export default class App extends React.Component {
  render(){
  return (

        <Loginscreen/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
    login:{ screen :Loginscreen },
  Write:{ screen :WriteStory}
})

const AppContainer = createAppContainer(TabNavigator)

