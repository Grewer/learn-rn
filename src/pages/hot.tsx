import React, { Component } from 'react'
import VideoView from '../src/videoView'
import { Platform, Text } from 'react-native'

export default class Hot extends Component<any> {
  //
  static navigationOptions = ({ navigation }) => {
    return {
      // header: null,
    }

  }

  state = {
    url: ''
  }

  async componentDidMount() {
    console.log(Platform.OS)
  }

  render() {
    //由于没有服务器视频地址，项目中模拟两类(宽高比>1,<=1)视频
    // const addr4 = require('../assets/4.mp4')
    // const addr1 = require('../assets/1.mp4')
    // let addr = Math.random() > 0.5 ? addr1 : addr4
    // addr = require('../assets/index.m3u8')
    // addr = { uri: 'https://grewer.github.io/dataSave/test.mp4' }
    // addr = {uri: 'https://www.runoob.com/try/demo_source/movie.mp4'}
    // addr = {
    //   uri: 'http://qiniu.sishuxuefu.com/ssvideo/%E6%9D%AD%E5%B7%9E%E6%98%A0%E5%83%8F%E8%AF%97-20200311111154670/playlist.m3u8',
    //   type: 'm3u8'
    // }
    //
    // addr = {
    //   // uri: 'http://qiniu.sishuxuefu.com/ssvideo/%E6%9D%AD%E5%B7%9E%E6%98%A0%E5%83%8F%E8%AF%97-20200311144549981/playlist.m3u8',
    //   uri: 'http://192.168.0.106:7888/playlist.m3u8',
    //   type: 'm3u8',
    //   headers: {
    //     userAgent:`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.34 Safari/537.36"`,
    //   }
    // }
    // return (
    //   this.state.url ? <>
    //     <StatusBar barStyle={'light-content'}/>
    //     <VideoView goBack={() => {
    //       this.props.navigation.goBack()
    //     }} title="文件名称xxxxxxxxxxxxxxxxxx" renderMenu={() => <Text style={{ color: '#fff' }}>额外目录</Text>}
    //                source={this.state.url as any}/></> : null)

    const source = {
      // uri: encodeURI('http://192.168.0.106:8080/test.mp4'),
      uri: encodeURI('http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4'),
      // type: 'm3u8'
    }
    console.log(source)
    return (
      <VideoView goBack={() => {
        this.props.navigation.goBack()
      }} onError={err => {
        console.log(err)
      }}
                 height={300}
                 title="文件名称xxxxxxxxxxxxxxxxxx" renderMenu={() => <Text style={{ color: '#fff' }}>额外目录</Text>}
                 source={source}/>
    )
  }

}
