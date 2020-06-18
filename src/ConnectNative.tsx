import React from 'react'
import { Button, Text, View } from 'react-native'

class ConnectNative extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title={'跳转至原生页面'} onPress={()=>{

        }}/>
      </View>
    )
  }
}

export default ConnectNative
