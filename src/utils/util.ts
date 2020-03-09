import { Dimensions, Platform } from 'react-native'


export default class Util {
  //屏幕尺寸
  static size = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

  static getSize = () => {
    Util.size = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  }

  //获取屏幕宽度
  static getWidth() {
    return Util.size.width
  }

  //获取屏幕高度
  static getHeight() {
    return Util.size.height
  }

  //是否是指定平台
  static isPlatform(platform: string) {
    return Platform.OS == platform
  }

  //判断是否是IPhoneX
  static isIPhoneX() {
    const size = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }

    return (
      Platform.OS === 'ios' &&
      (size.height === 812 || size.width === 812 || size.height === 896 || size.width === 896)
    )
  }

  //把传入的秒数格式化成 时分秒（00：00：00），
  static formSecondTotHMS(second: string) {
    let _second = parseInt(second)
    let hh = 0, mm = 0, ss = 0
    if (_second > 0) {
      ss = parseInt(`${_second % 60}`)
      mm = _second / 60
      mm = parseInt(`${mm % 60}`)
      hh = parseInt(`${_second / 3600}`)
    }
    // 补零
    let zero = (v: number) => {
      return (v >> 0) < 10 ? '0' + v : v
    }

    if (hh == 0) {
      return zero(mm) + ':' + zero(ss)
    } else {
      return zero(hh) + ':' + zero(mm) + ':' + zero(ss)
    }
  }
}

