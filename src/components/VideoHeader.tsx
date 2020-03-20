import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation-locker'


const VideoHeader: React.FC<{
  controlShow: boolean
  isPortrait: boolean
  goBack ():void
  title: string
}> = React.memo((props) => {
  return <View style={{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    position: 'absolute',
    top: (props.controlShow) ? 0 : -1000,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }}>

    <TouchableOpacity
      onPress={() => {
        if (props.isPortrait) {
          props.goBack && props.goBack()
        } else {
          Orientation.lockToPortrait()
        }
      }}
      style={{ height: '100%', width: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ height: 30, width: 30 }} source={require('../images/back.png')}/>
    </TouchableOpacity>

    <Text style={{ color: '#fff' }}>{props.title}</Text>
  </View>
})

export default VideoHeader
