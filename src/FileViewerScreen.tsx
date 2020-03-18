import React from 'react'
import { Text, View } from 'react-native'
import RNFS, { DownloadBeginCallbackResult, DownloadProgressCallbackResult } from 'react-native-fs'
import FileViewer from 'react-native-file-viewer'

class FileViewerScreen extends React.Component {
  constructor({ props }: { props: any }) {
    super(props)

    const url = 'https://grewer.github.io/dataSave/office/test.pdf'
    // 使用的是原生 pdf 查看器

    const localFile = `${RNFS.DocumentDirectoryPath}/test.pdf`

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
        console.log('download file success')
        return FileViewer.open(localFile, { showOpenWithDialog: true })
      }).catch(err => {
        console.log('download err', err)
      })
      .then(() => {
        // success
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FileViewerScreen !</Text>
      </View>
    )
  }
}

export default FileViewerScreen
