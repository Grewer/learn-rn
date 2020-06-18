import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DocViewerScreen from './src/DocViewerScreen'
import FileViewerScreen from './src/FileViewerScreen'
import WebViewTest from './src/WebViewTest'
import WPSOfficeScreen from './src/WPSOfficeScreen'
import Hot from './src/pages/hot'
import PanResponderExample from './src/TextProgress'
import ViewPDF from './src/ViewPDF'
import ConnectNative from './src/ConnectNative'

function HomeScreen(props: {
  navigation: { navigate: { (arg0: string, arg1: { name: string; }): void; (arg0: string, arg1: { name: string; }): void; (arg0: string): void; }; }
  images: string[]
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{JSON.stringify(props.images)}</Text>
      <Text>23</Text>
      <Button title={'跳转 RN 页面'} onPress={() => {
        props.navigation.navigate('ConnectNative')
      }}/>
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: '主页面',
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    ConnectNative: ConnectNative,
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


export default class App extends React.Component<{ images: string[] }> {

  render() {
    return <>
      <Text>{JSON.stringify(this.props.images)}</Text>
      <AppContainer/>
    </>
  }
}
