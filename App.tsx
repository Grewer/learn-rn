import * as React from 'react'
import { Animated, Button, Easing, Text, TouchableOpacity, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Main from './src/Main'
import DocViewerScreen from './src/DocViewerScreen'
import FileViewerScreen from './src/FileViewerScreen'
import WebViewTest from './src/WebViewTest'
import WPSOfficeScreen from './src/WPSOfficeScreen'
import videoView from './src/pages/videoView'
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


const stackNavigatorConfig = {
  initialRouteName: 'Home',//初始页面
  navigationOptions: {
    gesturesEnabled: false,
  },

  transitionConfig: () => ({
    transitionSpec: {
      duration: 400,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: (sceneProps: { layout: any; position: any; scene: any; navigation: any; }) => {
      const { layout, position, scene } = sceneProps
      const { route } = scene
      const params = route.params || {}
      //专场效果，根据modeStyle设置
      const modeStyle = params.modeStyle
      const { index } = scene
      const Width = layout.initWidth
      const height = layout.initHeight
      //沿X轴平移
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [Width, 0, -(Width - 10)],
      })
      //沿Y轴平移
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      })
      //透明度
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      })
      if (modeStyle == 'up') {
        return { opacity, transform: [{ translateY }] }
      } else if (modeStyle == 'opacity') {
        return { opacity }
      } else {
        return { opacity, transform: [{ translateX }] }
      }
    }
  }),

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
    videoView: {
      screen: videoView,
      navigationOptions: {
        header: null
      }
    },
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
