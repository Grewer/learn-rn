import React from 'react'
import PDFView from 'react-native-view-pdf'
import RNFS, { DownloadBeginCallbackResult, DownloadProgressCallbackResult, exists, touch } from 'react-native-fs'

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
      <PDFView
        fadeInDuration={250.0}
        style={{ flex: 1 }}
        resource={this.state.config.resource}
        resourceType={this.state.config.resourceType as 'file'}
        onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        onError={(error) => console.log('Cannot render PDF', error)}
      />
    )
  }
}

export default ViewPDF
