import React from 'react'
import { Text, View } from 'react-native'
import IconFont from '../iconfont/index'
import IconStyle from '../iconfont/IconStyle'
import IconNormal from '../iconfont/IconNormal'
import IconClassSvg from '../iconfont/IconClassSvg'
import IconInlineStyle from '../iconfont/IconInlineStyle'
import IconRoutesWork from './IconRoutesWork'

class IconSolution extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>IconSolution !</Text>
        <IconRoutesWork />
        <IconFont name="zantong" size={20}/>
        <IconFont color="red" name="zantong-fill" size={16}/>
        <IconStyle size={100}/>
        <IconNormal size={100}/>
        <IconClassSvg size={100}/>
        <IconInlineStyle size={100}/>
      </View>
    )
  }
}

export default IconSolution
