import * as React from 'react';
import { Button, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Main from "./src/Main";
import DocViewerScreen from './src/DocViewerScreen'
import FileViewerScreen from './src/FileViewerScreen'
import WebViewTest from './src/WebViewTest'
import WPSOfficeScreen from './src/WPSOfficeScreen'

function HomeScreen(props: {
  navigation: { navigate: { (arg0: string, arg1: { name: string; }): void; (arg0: string, arg1: { name: string; }): void; (arg0: string): void; }; }
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details "
        onPress={() => props.navigation.navigate('Details', { name: 'zhang' })}
      />
      <Button
        title="to Main "
        onPress={() => props.navigation.navigate('Main', { name: 'zhang' })}
      />
      <Button
        title="to DocViewerScreen "
        onPress={() => props.navigation.navigate('DocViewerScreen')}
      />
      <Button
        title="to FileViewerScreen "
        onPress={() => props.navigation.navigate('FileViewerScreen')}
      />
      <Button
        title="to WebViewTest "
        onPress={() => props.navigation.navigate('WebViewTest')}
      />
      <Button
        title="to WPSOfficeScreen "
        onPress={() => props.navigation.navigate('WPSOfficeScreen')}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: '主页面',
};


class DetailsScreen extends React.Component<any> {
  static navigationOptions = {
    title: '详情页面',
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    console.log(this.props.navigation.state.params.name)
    return (
      <View>
        <Text>Details Screen Page</Text>
        <Text>
          name params:
          {JSON.stringify(this.props.navigation.getParam('name', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go first"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Main: Main,
    DocViewerScreen,
    FileViewerScreen,
    WebViewTest,
    WPSOfficeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
