import * as React from 'react';
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>main!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


const TabNavigator = createStackNavigator({
  Main: MainScreen,
  Settings: SettingsScreen,
}, {
  headerMode: 'none',
  initialRouteName: 'Main'
});

export default createAppContainer(TabNavigator);
