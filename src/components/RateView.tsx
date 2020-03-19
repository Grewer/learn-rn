import React from 'react'
import { Animated, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native'
type AnimatedValue = Animated.AnimatedValue

interface IProps {
  changeRate: (rate: number) => void
  rateShow: boolean
}

interface IState {
  right: AnimatedValue
}

class RateView extends React.PureComponent<IProps, IState> {

  state = {
    right: new Animated.Value(120)
  }

  static animation = (obj: AnimatedValue, toValue: number) => {
    Animated.timing(                  // 随时间变化而执行动画
      obj,                       // 动画中的变量值
      {
        toValue,
        easing: Easing.ease,
        duration: 200,
        isInteraction: false,
        useNativeDriver: true
      }
    ).start()
  }


  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    console.log('RateView', nextProps, prevState)
    if (nextProps.rateShow) {
      RateView.animation(prevState.right, 0)
    } else {
      // @ts-ignore
      if (prevState.right && prevState.right._value > 0) {
        RateView.animation(prevState.right, 120)
      }
    }
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
      transform: [{
        translateX: this.state.right,
      }],// 这种写法兼容 iOS 和 Android
      // translateX: this.state.right, 只兼容 Android
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      {
        ['1.0', '1.25', '1.5', '1.75', '2.0'].map(rate => {
          return <TouchableOpacity
            key={rate}
            onPress={() => {
              changeRate(Number(rate))
            }}
            style={styles.position}>
            <Text style={styles.text}>{rate}</Text>
          </TouchableOpacity>
        })
      }
    </Animated.View>
  }
}

const styles = StyleSheet.create({
  position: { height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff' }
})

export default RateView
