import React from 'react'
import { Text, View } from 'react-native'
import RNFS from 'react-native-fs'
import FileViewer from 'react-native-file-viewer'

class FileViewerScreen extends React.Component {
  constructor({ props }: { props: any }) {
    super(props)

    const url = 'https://grewer.github.io/dataSave/office/test.pdf'


    const localFile = `${RNFS.DocumentDirectoryPath}/test.pdf`

    const options = {
      fromUrl: url,
      toFile: localFile
    }
    RNFS.downloadFile(options).promise
      .then(() => FileViewer.open(localFile, { showOpenWithDialog: true }))
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
