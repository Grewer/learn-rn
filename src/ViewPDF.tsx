import React from 'react'
import PDFView from 'react-native-view-pdf'

const resources = {
  // file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://grewer.github.io/dataSave/office/test.pdf',
  // base64: 'JVBERi0xLjMKJcfs...',
}

class ViewPDF extends React.Component {

  render() {
    const resourceType = 'url'
    return (
      <PDFView
        fadeInDuration={250.0}
        style={{ flex: 1 }}
        resource={resources[resourceType]}
        resourceType={resourceType}
        onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        onError={(error) => console.log('Cannot render PDF', error)}
      />
    )
  }
}

export default ViewPDF
