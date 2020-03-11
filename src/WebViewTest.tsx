import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'


// var DEFAULT_URL = 'https://www.baidu.com'
var DEFAULT_URL = 'https://grewer.github.io/dataSave/office/test.xls'
// var DEFAULT_URL = 'https://view.officeapps.live.com/op/view.aspx?src=https://grewer.github.io/dataSave/office/test.xls'
// var DEFAULT_URL = 'https://ow365.cn/?i=20844&ssl=1&furl=https://grewer.github.io/dataSave/office/test.xls'


// ios 都支持
// doc xls pdf ppt

// 安卓
// 不支持: xls doc pdf ppt
// 需要加 https://view.officeapps.live.com/op/view.aspx?src=

class WebViewTest extends React.Component {
  componentDidMount(): void {
    const html = `<video controls width="250" controlslist="nodownload">
                    <source src="https://www.runoob.com/try/demo_source/movie.mp4"
                            type="video/mp4">
                </video>`
  }


  state = {
    loadingProgress: 0
  }

  webview: any = null

  handleWebViewNavigationStateChange = (newNavState: any) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState
    if (!url) return

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading()
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading()
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading()
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/'
      const redirectTo = 'window.location = "' + newURL + '"'
      this.webview.injectJavaScript(redirectTo)
    }
  }

  render() {
    // originWhitelist={['*']}
    // source={{ html: '<h1>Hello world</h1>' }}
    // renderLoading={() => (<View><Text>加载中</Text></View>)}//loading效果
    // onShouldStartLoadWithRequest={request => {
    //     // Only allow navigating within this website
    //     return request.url.startsWith('https://reactnative.dev');
    //   }}
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.state.loadingProgress}</Text>
        <WebView style={styles.webview_style}
                 ref={ref => (this.webview = ref)}
                 onLoadProgress={({ nativeEvent }) => {
                   this.setState({ loadingProgress: nativeEvent.progress })
                 }}
                 source={{ uri: DEFAULT_URL }}
                 startInLoadingState={true}
                 domStorageEnabled={true}
                 thirdPartyCookiesEnabled={true}
                 javaScriptEnabled={true}
                 mixedContentMode={'always'}
                 androidHardwareAccelerationDisabled={true}
                 allowUniversalAccessFromFileURLs={true}
                 cacheEnabled={true}
                 userAgent={`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.34 Safari/537.36`}
                 renderError={errorName => <View><Text>{errorName}</Text></View>}
        >
        </WebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  webview_style: {
    backgroundColor: '#666666',
  }
})

export default WebViewTest
