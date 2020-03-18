import React from 'react'
import { Animated, Easing, Text, TouchableOpacity } from 'react-native'

interface IProps {
  changeRate: (rate: number) => void
  rateShow: boolean
}

class RateView extends React.PureComponent<IProps> {

  state = {
    right: new Animated.Value(120)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('RateView', nextProps, prevState)
    if (nextProps.rateShow) {
      // InteractionManager.runAfterInteractions(() => {
      //   // 耗时较长的同步的任务
      //   this.onReqMakeDeal();
      // });
      Animated.timing(                  // 随时间变化而执行动画
        prevState.right,                       // 动画中的变量值
        {
          toValue: 0,                   // 透明度最终变为1，即完全不透明
          easing: Easing.ease,
          duration: 300,
          isInteraction: false,
          useNativeDriver: true
        }
      ).start()
    } else {
      if (prevState.right._value > 0) {
        Animated.timing(                  // 随时间变化而执行动画
          prevState.right,                       // 动画中的变量值
          {
            toValue: 120,                   // 透明度最终变为1，即完全不透明
            easing: Easing.ease,
            duration: 300,
            isInteraction: false,
            useNativeDriver: true
          }
        ).start()
      }
    }// 将他放入 video 中
    return {}
  }


  render() {
    const { changeRate } = this.props
    console.log('render RateView')
    return <Animated.View style={{
      zIndex: 100,
      width: 120,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      transform:[{
        translateX: this.state.right,
      }],// 这种写法兼容 iOS 和 Android
      //         translateX: this.state.right, 只兼容 Android
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>

      <TouchableOpacity
        onPress={() => {
          changeRate(1)
        }}
        style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>1.0</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          changeRate(1.25)
        }}
        style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>1.25</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changeRate(1.5)
        }}
        style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>1.5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changeRate(1.75)
        }}
        style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>1.75</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changeRate(2)
        }}
        style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>2.0</Text>
      </TouchableOpacity>
    </Animated.View>
  }
}

export default RateView
