import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Progress from './progress'
import Util from '../utils/util'
import Orientation from 'react-native-orientation-locker'

interface IProps {
  changeCurrentTime: (rate: number) => void
  changeProgress: (rate: number) => void
  currentTime: number
  duration: number
  paused: boolean
  changePaused: () => void
  isPortrait: boolean
  rate: number
}


class Control extends React.Component<IProps> {
  state = {
    moveTime: 0
  }

  changeMoveTime = (rate: number) => {
    this.setState({ moveTime: rate * this.props.duration })
  }

  //获取视频当期播放的百分比
  getCurrentTimePercentage() {
    const { currentTime, duration } = this.props
    if (currentTime > 0) {
      const rate = parseFloat(`${currentTime}`) / parseFloat(`${duration}`)
      if (rate > 100) {
        return '100%'
      }
      return rate * 100 + '%'
    }
    return 0 + '%'
  };

  render() {
    const { moveTime } = this.state
    const { changeCurrentTime, changePaused, changeProgress, paused, currentTime, duration, rate, isPortrait } = this.props
    console.log('render control')

    return (
      <View style={{
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          height: '50%',
          backgroundColor: 'rgba(0,0,0,0)'
        }}>

          <Progress changeCurrentTime={changeCurrentTime}
                    changeProgress={changeProgress}
                    pLengh={this.getCurrentTimePercentage()}
                    changeMoveTime={this.changeMoveTime}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      width: '100%',
                      backgroundColor: 'rgba(0,0,0,0)'
                    }}/>
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
            }}>{Util.formSecondTotHMS(moveTime ? moveTime : currentTime)}</Text>
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
