/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc 进度条
 */

import React from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeModules,
  NativeSyntheticEvent,
  NativeTouchEvent,
  PanResponder,
  PanResponderInstance,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native'
import Util from '../utils/util'

interface IProps {
  style: StyleProp<ViewStyle>
  onEnd?: (rate: number) => void
  value: number
  onMove?: (rate: number) => void
}

export default class Progress extends React.PureComponent<IProps, {}> {
  private pageX: number
  private progressLocation: { name?: string, width: number; pageX: number }
  private panResponder: PanResponderInstance
  private progress: (null | { setNativeProps(props: Object): void })
  private width: string
  private progressStyles = {
    style: {
      width: this.width,
    }
  }
  private isMove: boolean = false

  constructor(props: any) {
    super(props)
    this.pageX = 0//记录触摸按钮的位置
    //进度条的位置和长度
    this.progressLocation = {
      pageX: 0,
      width: 0,
    }
    console.log(this.props)
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true
      },
      onMoveShouldSetPanResponder: () => {
        return true
      },

      onPanResponderGrant: (evt) => {
        this.onStart(evt)
      },
      onPanResponderMove: (evt: NativeSyntheticEvent<NativeTouchEvent>) => {
        if (Math.abs(evt.nativeEvent.locationX) > 1) {
          this.onMove(evt)
        }
      },
      onPanResponderRelease: () => {
        this.onEnd()
      },
      //有竞争时候，不释放响应者角色
      onPanResponderTerminationRequest: () => {
        return false
      },
      onPanResponderTerminate: () => {
      },
    })
  }

  _updateNativeStyles = () => {
    this.progress && this.progress.setNativeProps(this.progressStyles)
  }

  onStart = (e: GestureResponderEvent) => {
    //获取 按钮的 x的位置
    this.pageX = e.nativeEvent.pageX
    this.isMove = true
  }

  //触摸点移动时回调
  onMove = (e: GestureResponderEvent) => {
    //获取手指相对屏幕 x的坐标，并设计拖动按钮的位置，拖动按钮不能超出进度条的位置
    this.pageX = e.nativeEvent.pageX
    const progressLength = this.progressLocation.pageX
    if (e.nativeEvent.pageX < progressLength) {
      this.pageX = progressLength
    } else if (e.nativeEvent.pageX > (progressLength + this.progressLocation.width - 10)) {
      //-10的目的是为了修正触摸点的直径，防止超过100%
      this.pageX = progressLength + this.progressLocation.width - 10
    }
    const rate = (this.pageX - progressLength) / this.progressLocation.width
    this.props.onMove && this.props.onMove(rate)
    this.progressStyles.style.width = rate * 100 + '%'
    this._updateNativeStyles()
  }

  //触摸结束时回调
  onEnd = () => {
    this.props.onEnd && this.props.onEnd((this.pageX - this.progressLocation.pageX) / this.progressLocation.width)
  }


  onLayout = (event: LayoutChangeEvent) => {

    // let {x, y, width, height} = event.nativeEvent.layout;
    //拿到这个view的x位置和宽度
    // @ts-ignore
    NativeModules.UIManager.measure(event.target, (x, y, width, height, pageX, pageY) => {
      //安卓手机获取的值与ios不一样，特殊处理
      console.log(event, x, y, width, height)
      if (Util.isPlatform('android')) {
        // x = pageX - Util.getDynamicWidth()
      }
      this.progressLocation = {
        name: 'progressLocation',
        pageX: x,
        width: width,
      }
    })

  }

  render() {
    console.log('render progress', ((this.pageX - this.progressLocation.pageX) / this.progressLocation.width), this.progressLocation)
    // Slider
    return (
      <View style={this.props.style} onLayout={this.onLayout}>
        <View style={styles.maxProgress}>
          <View ref={(ref) => {
            this.progress = ref
          }} style={[styles.currentProgress, this.isMove ? {} : { width: this.props.value * 100 + '%' }]}/>
          <View {...this.panResponder.panHandlers}
                style={styles.dragWrap}>
            <View style={styles.drag}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  maxProgress: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 2,
    backgroundColor: '#999'
  },
  currentProgress: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 2,
    backgroundColor: '#fff'
  },
  dragWrap: { justifyContent: 'center', alignItems: 'center', width: 10, height: '100%', },
  drag: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 10,
    backgroundColor: '#fff'
  }
})
