import React from 'react'
import PDFView from 'react-native-view-pdf'
import RNFS, { DownloadBeginCallbackResult, DownloadProgressCallbackResult, exists, touch } from 'react-native-fs'
import { View } from 'react-native'

const resources = {
  // file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://grewer.github.io/dataSave/office/test.pdf',
  // base64: 'JVBERi0xLjMKJcfs...',
}

class ViewPDF extends React.Component {
  state = {
    config: {
      resource: '',
      resourceType: 'file'
    }
  }
  private pdfView: any

  async componentDidMount() {
    const url = 'https://grewer.github.io/dataSave/office/test.pdf'
    // 使用的是原生 pdf 查看器

    const localFile = `${RNFS.DocumentDirectoryPath}/test.pdf`

    console.log(localFile)

    const success = await exists(localFile)
    console.log('success', success)
    if (success) {
      this.setState({
        config: {
          resource: localFile,
          resourceType: 'file'
        }
      })
      return
    }

    const options = {
      fromUrl: url,
      toFile: localFile,
      begin: (res: DownloadBeginCallbackResult) => {
        console.log(res)
      },
      progress: (res: DownloadProgressCallbackResult) => {
        console.log('progress', res)
      }
    }

    console.log('start download file', localFile)
    RNFS.downloadFile(options).promise
      .then(() => {
        this.setState({
          config: {
            resource: localFile,
            resourceType: 'file'
          }
        })
      })

  }


  render() {
    const resourceType = 'url'
    return (
      this.state.config.resource ?
      <View style={{ flex: 1 }}>
        <View  style={{
           height: 3, width: '100%',
          flex:1
        }} />
        <PDFView
          ref={(pdf)=>{this.pdfView = pdf;}}
          onLoadComplete = {(pageCount)=>{
            this.pdfView.setNativeProps({
              zoom: 1.5
            });
            console.log('onLoadComplete')
          }}
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={this.state.config.resource}
          resourceType="file"
          onError={error => console.log('Cannot render PDF', error)}
        />
      </View>
        : <View/>
    )
  }
}

export default ViewPDF
