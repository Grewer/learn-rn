import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

const TotalTime: React.FC<{ duration: number }> = React.memo((props) => {
  return <Text style={{
    color: '#fff',
    fontSize: 12
  }}>{` / ${Util.formSecondTotHMS(props.duration)}`}</Text>
})

const StartAndPaused: React.FC<Pick<IProps, 'changePaused' | 'paused'>> = React.memo((props) => {
  return <TouchableOpacity
    onPress={props.changePaused}
    style={{
      height: '100%',
      width: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Image style={{ height: 25, width: 25 }}
           source={props.paused ? require('../images/play.png') : require('../images/pause.png')}/>
  </TouchableOpacity>
})


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
      <View style={[styles.container, { left: controlShow ? 0 : -1000 }]}>
        <Slider
          style={styles.slider}
          thumbImage={require('../images/icon_control_slider.png')}
          thumbTintColor="#ffffff"
          minimumValue={0}
          step={1}
          value={time}
          maximumValue={duration}
          onValueChange={this.changeMoveTime}
          onSlidingComplete={this.complete}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#999"
        />
        <View style={styles.tools}>
          <View style={styles.toolLeft}>
            <StartAndPaused paused={paused} changePaused={changePaused}/>
            <Text style={{
              color: '#fff',
              fontSize: 12
            }}>{Util.formSecondTotHMS(time)}</Text>
            <TotalTime duration={duration}/>
          </View>

          <View style={styles.toolRight}>

            {/*<TouchableOpacity*/}
            {/*  onPress={() => {*/}
            {/*    this.setState({*/}
            {/*      rateShow: true*/}
            {/*    })*/}
            {/*  }}*/}
            {/*  style={{*/}
            {/*    height: '100%',*/}
            {/*    width: 50,*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: 'center'*/}
            {/*  }}>*/}
            {/*  <Text*/}
            {/*    style={{ color: '#fff' }}>{rate == 1 ? '倍速' : rate + 'x'}</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity*/}
            {/*  onPress={() => {*/}
            {/*    if (isPortrait) {*/}
            {/*      Orientation.lockToLandscapeRight()*/}
            {/*    } else {*/}
            {/*      Orientation.lockToPortrait()*/}
            {/*    }*/}
            {/*  }}*/}
            {/*  style={{*/}
            {/*    height: '100%',*/}
            {/*    width: 50,*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: 'center'*/}
            {/*  }}>*/}
            {/*  <Image style={{ height: 25, width: 25 }}*/}
            {/*         source={require('../images/bigscreen.png')}/>*/}
            {/*</TouchableOpacity>*/}

          </View>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  slider: {
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  tools: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  toolLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  toolRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

export default Control
