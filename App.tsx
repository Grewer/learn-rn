import * as React from 'react'
import { Button, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DocViewerScreen from './src/DocViewerScreen'
import FileViewerScreen from './src/FileViewerScreen'
import WebViewTest from './src/WebViewTest'
import WPSOfficeScreen from './src/WPSOfficeScreen'
import Hot from './src/pages/hot'
import PanResponderExample from './src/TextProgress'
import ViewPDF from './src/ViewPDF'
import ConnectNative, { NativeProps } from './src/pages/ConnectNative'
import IconSolution from './src/pages/IconSolution'
import ViewTxt from './src/txtView/ViewTxt'

function HomeScreen(props: {
  navigation: { navigate: { (arg0: string, arg1: { name: string; }): void; (arg0: string, arg1: { name: string; }): void; (arg0: string): void; }; }
}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title={'跳转至与 native 交互页面'} onPress={() => {
        props.navigation.navigate('ConnectNative')
      }}/>
      <Button title={'跳转至 icon 解决方案'} onPress={() => {
        props.navigation.navigate('IconSolution')
      }}/>
      <Button title={'跳转至 txt,md 预览'} onPress={() => {
        props.navigation.navigate('ViewTxt')
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
    ConnectNative,
    DocViewerScreen,
    FileViewerScreen,
    WebViewTest,
    WPSOfficeScreen,
    ViewPDF,
    Hot,
    IconSolution,
    PanResponderExample,
    ViewTxt
  },
  {
    // ...stackNavigatorConfig,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1eb0f4',
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
    return <NativeProps.Provider value={this.props.images}>
      <AppContainer/>
    </NativeProps.Provider>
  }
}
