import React from 'react'
import { Animated, Easing, ScrollView, Text } from 'react-native'

class ScrollPage extends React.Component {
  private mod: null | { setNativeProps(props: Record<string, any>): void }
  private modStyles = {
    style: {
      height: 300,
    },
  }
  state = {
    height: 300
  }

  _updateNativeStyles = () => {
    this.mod && this.mod.setNativeProps(this.modStyles)
  }
  private _scrollY: Animated.Value = new Animated.Value(300)

  render() {
    console.log('run')
    return <>
      <Animated.View ref={ref => {
        this.mod = ref
      }}
        // style={[{ width: 400, backgroundColor: 'red' }, this.modStyles.style]}
                     style={[{
                       width: 400,
                       backgroundColor: 'red',
                       height:300,
                       // transform: [{ scaleY: this._scrollY }]
                     },
                       { height: this._scrollY }
                     ]}
      >
        <Text>123</Text>
      </Animated.View>
      <ScrollView
        onScroll={
          ev => {
            const offset = ev.nativeEvent.contentOffset.y

            if (offset > 200 || offset < 0) {
              return
            }

            const setVal = 300 - offset
            // this._scrollY.stopAnimation()
            // Animated.timing(
            //   // 随时间变化而执行动画
            //   this._scrollY, // 动画中的变量值
            //   {
            //     toValue: setVal,
            //     easing: Easing.ease,
            //     duration: 0,
            //     isInteraction: false,
            //     // useNativeDriver: true,
            //   }
            // ).start()
            this._scrollY.setValue(setVal)
          }
        }
        // onScrollBeginDrag={(ev) => {
        //   console.log('onScrollBeginDrag', ev)
        // }}
        // onScroll={Animated.event(
        //   [{ nativeEvent: { contentOffset: { y: this._scrollY } } }],
        //   { useNativeDriver: true, listener: (event) => console.log(event) }, // 可选的异步监听函数
        // )}
        // onScroll={ev => {
        //
        //   Animated.event(
        //     [{ nativeEvent: { contentOffset: { y: this._scrollY } } }],
        //     { useNativeDriver: true, listener: (event) => console.log(event) }, // 可选的异步监听函数
        //   )
        //
        //   // console.log('onScroll', ev.nativeEvent, ev.nativeEvent.contentOffset.y)
        //   // const offset = ev.nativeEvent.contentOffset.y
        //   //
        //   // if (offset > 200 || offset < 0) {
        //   //   return
        //   // }
        //   //
        //   // const setVal = 300 - offset
        //   //
        //   // this.modStyles = {
        //   //   style: {
        //   //     height: setVal,
        //   //   },
        //   // }
        //   // this._updateNativeStyles()
        // }}
        scrollEventThrottle={16}
        style={{ flex: 1, width: '100%' }}>
        {
          [...Array(200)].map((v, k) => {
            return <Text key={k}>{k}</Text>
          })
        }
        <Text>1234</Text>
      </ScrollView>
    </>
  }
}

export default ScrollPage
