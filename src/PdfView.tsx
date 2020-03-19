import React from 'react'
import PDFView from 'react-native-pdf-view'
import RNFS, { DownloadBeginCallbackResult, DownloadProgressCallbackResult, exists, touch } from 'react-native-fs'

// 需要修改的地方
// 1. Android/build.gradle  修改
// PDFView.android.js 去掉 PropTypes 相关
// 不使用此库
class PdfView extends React.Component {
  state = { src: '' }


  async componentDidMount() {
    const url = 'https://grewer.github.io/dataSave/office/test.pdf'
    // 使用的是原生 pdf 查看器

    const localFile = `${RNFS.DocumentDirectoryPath}/test.pdf`

    console.log(localFile)

    const success = await exists(localFile)
    console.log('success', success)
    if (success) {
      const toures = await touch(localFile, new Date(), new Date())
      console.log('toures', toures)
      this.setState({ src: localFile })
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
        this.setState({ src: localFile })
      })
  }

  private pdfView: any

  componentWillUnmount(): void {
    this.setState({ src: undefined })
    console.log(this.pdfView)
    this.pdfView.setNativeProps({
      props: {
        src: ''
      }
    })
    // 关闭后 可能内存问题? 不确定
    console.log(this.pdfView)
    // props:
    // src: "/data/user/0/com.learn/files/test.pdf"
  }

  render() {
    return (
      <PDFView ref={(pdf) => {
        this.pdfView = pdf
      }}
               src={this.state.src}
               style={{
                 flex: 1
               }}/>
    )
  }
}

export default PdfView
