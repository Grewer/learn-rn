/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc 进度条
 */

import React, { Component } from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeModules,
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
  changeCurrentTime: (rate: number) => void
  changeProgress: (rate: number) => void
  pLengh: string
  changeMoveTime: (rate: number) => void
}



export default class Progress extends Component<IProps, {}> {
  private pageX: number
  private isMove: boolean
  private progressLocation: { name?: string, width: number; pageX: number }
  private panResponder: PanResponderInstance

  constructor(props: any) {
    super(props)
    this.pageX = 0//记录触摸按钮的位置
    this.isMove = false//是否拖动
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
      onPanResponderMove: (evt) => {
        this.onMove(evt)
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

  onStart = (e: GestureResponderEvent) => {
    //获取 按钮的 x的位置
    this.pageX = e.nativeEvent.pageX
    console.log('on start', this.pageX)
    this.isMove = true
  }

  //触摸点移动时回调
  onMove = Util.throttle((e: GestureResponderEvent) => {
    console.log(e.nativeEvent)
    //获取手指相对屏幕 x的坐标，并设计拖动按钮的位置，拖动按钮不能超出进度条的位置
    this.pageX = e.nativeEvent.pageX
    console.log(this.pageX)
    if (e.nativeEvent.pageX < this.progressLocation.pageX) {
      this.pageX = this.progressLocation.pageX
    } else if (e.nativeEvent.pageX > (this.progressLocation.pageX + this.progressLocation.width - 10)) {
      //-10的目的是为了修正触摸点的直径，防止超过100%
      this.pageX = this.progressLocation.pageX + this.progressLocation.width - 10
    }
    console.log(this.pageX)
    this.forceUpdate()
    //通过百分比计算视频的播放时间
    this.changeMoveTime()
  }, 16)

  changeMoveTime = () => {
    this.props.changeMoveTime((this.pageX - this.progressLocation.pageX) / this.progressLocation.width)
  }

  //触摸结束时回调
  onEnd = () => {
    //触摸事件结束后，设置视频的播放进度
    this.props.changeMoveTime(0)
    this.props.changeCurrentTime((this.pageX - this.progressLocation.pageX) / this.progressLocation.width)
    this.props.changeProgress((this.pageX - this.progressLocation.pageX) / this.progressLocation.width)
    this.isMove = false
  }


  render() {
    console.log('render progress', ((this.pageX - this.progressLocation.pageX) / this.progressLocation.width))
    // Slider
    return (
      <View style={this.props.style} onLayout={(event: LayoutChangeEvent) => {

        // let {x, y, width, height} = event.nativeEvent.layout;
        //拿到这个view的x位置和宽度
        {
          NativeModules.UIManager.measure(event.currentTarget, (x, y, width, height, pageX, pageY) => {
            //安卓手机获取的值与ios不一样，特殊处理
            console.log(event, x, y, width, height)
            if (Util.isPlatform('android')) {
              x = pageX - Util.getWidth()
            }
            this.progressLocation = {
              name: 'progressLocation',
              pageX: x,
              width: width,
            }
          })
        }
      }}>
        <View style={styles.maxProgress}>
          <View style={[styles.currentProgress, {
            width: this.isMove ? ((this.pageX - this.progressLocation.pageX) / this.progressLocation.width * 100 + '%') : this.props.pLengh,
          }]}/>
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
