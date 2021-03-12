import React from 'react'
import {
	Text,
	View
} from 'react-native'
import WPSOffice from 'react-native-wps-office'
import {
	downloadFile,
	ExternalDirectoryPath
} from 'react-native-fs'

// const wpsOptions = {
//   "OpenMode":"ReadOnly",//只读模式
//   "ClearTrace": true    //关闭文件时删除使用记录
// };
class WPSOfficeScreen extends React.Component {
	componentDidMount(): void {
		const url = 'https://grewer.github.io/dataSave/office/test.xls'
		const downloadDest = `${ExternalDirectoryPath}/test.pdf`
		const fileOptions = {
				fromUrl: url,
				toFile: downloadDest,
				background: true,
			}
			// 需要 wps app

		const wpsOptions = {
			'OpenMode': 'ReadOnly', //只读模式
			'ClearTrace': true //关闭文件时删除使用记录
		}

		try {
			const ret = downloadFile(fileOptions)
			ret.promise.then(res => {
				console.log('file://' + downloadDest)
				WPSOffice.open(
						downloadDest, //or: /storage/emulated/0/Android/data/com.your.package/files/test.pdf
						'application/pdf',
						wpsOptions
					)
					.then(res => console.log(res))
					.catch(err => console.log(err))
			}).catch(err => {
				console.log('err', err)
			})
		} catch (e) {
			console.log(error)
		}
	}

	render() {
		return ( <View style = {
				{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}
			}>
			<Text> WPSOfficeScreen! </Text>
		</View>
		)
	}
}

export default WPSOfficeScreen
