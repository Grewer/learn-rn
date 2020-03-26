import * as React from 'react'
import { Animated, Button, Easing, Text, TouchableOpacity, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Main from './src/Main'
import DocViewerScreen from './src/DocViewerScreen'
import FileViewerScreen from './src/FileViewerScreen'
import WebViewTest from './src/WebViewTest'
import WPSOfficeScreen from './src/WPSOfficeScreen'
import Hot from './src/pages/hot'
import PanResponderExample from './src/TextProgress'
import ViewPDF from './src/ViewPDF'

function HomeScreen(props: {
  navigation: { navigate: { (arg0: string, arg1: { name: string; }): void; (arg0: string, arg1: { name: string; }): void; (arg0: string): void; }; }
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="to video "
        onPress={() => props.navigation.navigate('Hot')}
      />

      <TouchableOpacity
        onLongPress={() => console.log('onLongPress')}
      >
        <Text>长按测试</Text>
      </TouchableOpacity>
      <Button
        title="to WebViewTest "
        onPress={() => props.navigation.navigate('WebViewTest')}
      />
      <Button
        title="to progress test "
        onPress={() => props.navigation.navigate('PanResponderExample')}
      />
      <Button
        title="ViewPDF"
        onPress={() => props.navigation.navigate('ViewPDF')}
      />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: '主页面',
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Main: Main,
    DocViewerScreen,
    FileViewerScreen,
    WebViewTest,
    WPSOfficeScreen,
    ViewPDF,
    Hot,
    PanResponderExample,
  },
  {
    // ...stackNavigatorConfig,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)


const AppContainer = createAppContainer(RootStack)


export default class App extends React.Component {
  render() {
    return <AppContainer/>
  }
}
