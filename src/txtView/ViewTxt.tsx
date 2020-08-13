import React from 'react'
import { View } from 'react-native'
// import WebView from 'react-native-webview'
import { ScrollView } from 'react-native-gesture-handler'
import Markdown from 'react-native-markdown-renderer'
import RNFS  from 'react-native-fs'
// var DEFAULT_URL = 'https://grewer.github.io/dataSave/test.txt'
var DEFAULT_URL = 'https://grewer.github.io/dataSave/test.md'


// react-native-markdown-renderer 渲染基本没问题,样式略丑一点

//1、Documents 目录：您应该将所有的应用程序数据文件写入到这个目录下。这个目录用于存储用户数据。该路径可通过配置实现iTunes共享文件。可被iTunes备份。
//
// 2、AppName.app 目录：这是应用程序的程序包目录，包含应用程序的本身。由于应用程序必须经过签名，所以您在运行时不能对这个目录中的内容进行修改，否则可能会使应用程序无法启动。
//
// 3、Library 目录：这个目录下有两个子目录：
// 3.1 Preferences 目录：包含应用程序的偏好设置文件。您不应该直接创建偏好设置文件，而是应该使用NSUserDefaults类来取得和设置应用程序的偏好.
// 3.2 Caches 目录：用于存放应用程序专用的支持文件，保存应用程序再次启动过程中需要的信息。
// 可创建子文件夹。可以用来放置您希望被备份但不希望被用户看到的数据。该路径下的文件夹，除Caches以外，都会被iTunes备份。
//
// 4、tmp 目录：这个目录用于存放临时文件，保存应用程序再次启动过程中不需要的信息。该路径下的文件不会被iTunes备份。
//
//

class ViewTxt extends React.Component<any, any> {
  state = {
    data: ''
  }

  async componentDidMount() {
    const localFile = `${RNFS.TemporaryDirectoryPath}/qwer.md`

    console.log(RNFS,localFile)

    const options = {
      fromUrl: encodeURI(DEFAULT_URL),
      toFile: localFile,
    }
    await RNFS.downloadFile(options).promise
    // stopDownload(jobId: number): void
    // const str2 = await scanFile(localFile)
    const str = await RNFS.readFile(localFile)
    console.log(str)
    this.setState({ data: str })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*<WebView style={styles.webview_style}*/}
        {/*         onLoadProgress={({ nativeEvent }) => {*/}
        {/*           // this.setState({ loadingProgress: nativeEvent.progress })*/}
        {/*         }}*/}
        {/*         source={{ uri: DEFAULT_URL }}*/}
        {/*         startInLoadingState={true}*/}
        {/*         domStorageEnabled={true}*/}
        {/*         thirdPartyCookiesEnabled={true}*/}
        {/*         javaScriptEnabled={true}*/}
        {/*         mixedContentMode={'always'}*/}
        {/*         androidHardwareAccelerationDisabled={true}*/}
        {/*         allowUniversalAccessFromFileURLs={true}*/}
        {/*         cacheEnabled={true}*/}
        {/*         userAgent={`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.34 Safari/537.36`}*/}
        {/*>*/}
        {/*</WebView>*/}
        <ScrollView style={{
          paddingHorizontal: 12,
          marginVertical: 12
        }}>

        <Markdown>
          {
            this.state.data
          }
        </Markdown>

        </ScrollView>
      </View>
    )
  }
}
//
// const styles = StyleSheet.create({
//   webview_style: {
//     backgroundColor: '#fff',
//     fontSize: 18,
//     flex: 1
//   }
// })

export default ViewTxt
