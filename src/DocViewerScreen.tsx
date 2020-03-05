import React from 'react'
import {
  ActivityIndicator,
  Alert,
  Button,
  EventEmitter,
  NativeEventEmitter,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import OpenFile from 'react-native-doc-viewer'

class DocViewerScreen extends React.Component<any, any> {
  private eventEmitter: EventEmitter

  constructor(props: any) {
    super(props)
    this.state = {
      animating: false,
      progress: '',
      donebuttonclicked: false,
    }
    this.eventEmitter = new NativeEventEmitter(NativeModules.RNReactNativeDocViewer)
    this.eventEmitter.addListener('DoneButtonEvent', (data) => {
      /*
      *Done Button Clicked
      * return true
      */
      console.log(data.close)
      this.setState({ donebuttonclicked: data.close })
    })
  }

  componentDidMount() {
    // download progress
    this.eventEmitter.addListener(
      'RNDownloaderProgress',
      (Event) => {
        console.log('Progress - Download ' + Event.progress + ' %')
        this.setState({ progress: Event.progress + ' %' })
      }
    )
  }

  componentWillUnmount() {
    // @ts-ignore
    this.eventEmitter.removeListener()
  }

  /*
 * Handle WWW File Method
 * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url the File Extension is missing.
 */
  handlePress = () => {
    this.setState({ animating: true })
    if (Platform.OS === 'ios') {
      OpenFile.openDoc([{
        url: 'https://grewer.github.io/dataSave/office/test.xls',
        fileNameOptional: 'test filename'
      }], (error: any, url: any) => {
        if (error) {
          this.setState({ animating: false })
        } else {
          this.setState({ animating: false })
          console.log(url)
        }
      })
    } else {
      //Android
      this.setState({ animating: true })
      OpenFile.openDoc([{
        url: 'https://www.huf-haus.com/fileadmin/Bilder/Header/ART_3/Header_HUF_Haus_ART_3___1_.jpg', // Local "file://" + filepath
        fileName: 'sample',
        cache: false,
        fileType: 'jpg'
      }], (error: any, url: any) => {
        if (error) {
          this.setState({ animating: false })
          console.error(error)
        } else {
          this.setState({ animating: false })
          console.log(url)
        }
      })
    }
  }

  /*
  * Binary in URL
  * Binary String in Url
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
  */
  handlePressBinaryinUrl = () => {
    this.setState({ animating: true })
    if (Platform.OS === 'ios') {
      OpenFile.openDocBinaryinUrl([{
        url: 'https://grewer.github.io/dataSave/office/test.xls',
        fileName: 'sample',
        fileType: 'xls'
      }], (error: any, url: any) => {
        if (error) {
          console.error(error)
          this.setState({ animating: false })
        } else {
          console.log(url)
          this.setState({ animating: false })
        }
      })
    } else {
      OpenFile.openDocBinaryinUrl([{
        url: 'https://storage.googleapis.com/need-sure/example',
        fileName: 'sample',
        fileType: 'xml',
      }], (error: any, url: any) => {
        if (error) {
          console.error(error)
          this.setState({ animating: false })
        } else {
          console.log(url)
          this.setState({ animating: false })
        }
      })
    }
  }


  /*
* Video File
*/
  handlePressVideo = (url: string) => {
    if (Platform.OS === 'ios') {
      OpenFile.playMovie(url, (error: any, url: any) => {
        if (error) {
          console.error(error)
        } else {
          console.log(url)
        }
      })
    } else {
      Alert.alert('Android coming soon')
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.progress}</Text>
        <Text>{this.state.donebuttonclicked ? 'Done Button Clicked' : ''}</Text>
        <ActivityIndicator
          animating={this.state.animating}
          style={[{ height: 80 }]}
          size="large"/>
        <Text style={styles.welcome}>
          Doc Viewer React Native
        </Text>
        <Button
          onPress={this.handlePress.bind(this)}
          title="doc"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={this.handlePressBinaryinUrl.bind(this)}
          title="Press Me Open BinaryinUrl"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={() => this.handlePressVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4')}
          title="Press Me Open Video"
          accessibilityLabel="See a Document"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})


export default DocViewerScreen
