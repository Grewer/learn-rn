import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Util from '../utils/util'
import Orientation from 'react-native-orientation-locker'
import Slider from '@react-native-community/slider'

interface IProps {
  changeCurrentTime: (rate: number) => void
  changeProgress: (rate: number) => void
  currentTime: number
  duration: number
  paused: boolean
  changePaused: () => void
  isPortrait: boolean
  rate: number
  controlShow: boolean
}


class Control extends React.Component<IProps> {

  state = {
    moveTime: 0
  }

  changeMoveTime = (moveTime: number) => {
    this.setState({ moveTime })
  }

  clearMoveTime = () => {
    this.setState({ moveTime: 0 })
  }

  complete = (time: number) => {
    console.log(time)
    if (!this.props.paused) {
      this.setState({ moveTime: 0 })
    }
    console.log(time, this.props.duration)
    this.props.changeProgress(time)
  }

  render() {
    const { moveTime } = this.state
    const { changePaused, paused, duration, currentTime, rate, isPortrait, controlShow } = this.props
    const time = moveTime ? moveTime : currentTime
    console.log('render control', moveTime, time)
    return (
      <View style={{
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: controlShow ? 0 : -1000,
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          height: '50%',
          backgroundColor: 'rgba(0,0,0,0)'
        }}>

          <Slider
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
            thumbImage={require('../images/icon_control_slider.png')}
            thumbTintColor="#ffffff"
            minimumValue={0}
            value={time}
            maximumValue={duration}
            onValueChange={this.changeMoveTime}
            onSlidingComplete={this.complete}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#999"
          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '50%',
          backgroundColor: 'rgba(0,0,0,0)'
        }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 1,
            height: '100%',
          }}>

            <TouchableOpacity
              onPress={() => {
                console.log('Play or Paused', paused)
                changePaused()
              }}
              style={{
                height: '100%',
                width: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image style={{ height: 25, width: 25 }}
                     source={paused ? require('../images/play.png') : require('../images/pause.png')}/>
            </TouchableOpacity>

            <Text style={{
              color: '#fff',
              fontSize: 12
            }}>{Util.formSecondTotHMS(time)}</Text>
            <Text style={{
              color: '#fff',
              fontSize: 12
            }}>{` / ${Util.formSecondTotHMS(duration)}`}</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0)'
          }}>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  rateShow: true
                })
              }}
              style={{
                height: '100%',
                width: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text
                style={{ color: '#fff' }}>{rate == 1 ? '倍速' : rate + 'x'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (isPortrait) {
                  Orientation.lockToLandscapeRight()
                } else {
                  Orientation.lockToPortrait()
                }
              }}
              style={{
                height: '100%',
                width: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image style={{ height: 25, width: 25 }}
                     source={require('../images/bigscreen.png')}/>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    )
  }
}

export default Control
