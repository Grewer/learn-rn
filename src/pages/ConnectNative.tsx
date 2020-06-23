import * as React from 'react'
import { createContext, useContext, useEffect } from 'react'
import { Button, NativeEventEmitter, NativeModules, Text, View } from 'react-native'

export const NativeProps = createContext([])

const { nativeModule } = NativeModules

const ManagerEmitter = new NativeEventEmitter(nativeModule)

function ConnectNative(props: {
  navigation: { navigate: { (arg0: string, arg1: { name: string; }): void; (arg0: string, arg1: { name: string; }): void; (arg0: string): void; }; }
  images: string[]
}) {

  useEffect(() => {
    const subscription = ManagerEmitter.addListener(
      'EventReminder',
      (reminder) => console.log('这是监听的EventReminder事件回复', reminder.name)
    )

    console.log(ManagerEmitter)
    return () => {
      subscription.remove()
    }
  }, [])

  console.log(nativeModule)
  // addHelloWord: ƒ fn()
  // getConstants: ƒ ()
  // getHBDeviceUniqueID: ƒ fn()
  const images = useContext(NativeProps)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这是从 native 端传来的初始数据{JSON.stringify(images)}</Text>
      <Button title={'传 2 个参数给 native'} onPress={() => {
        nativeModule.addHelloWord('你的名字', '位置:浙江')
      }}/>

      <Button title={'js 传一个回调给 native,回调中收到一个数组'} onPress={() => {
        nativeModule.checkIsRoot((str: string, num: string) => {
          console.log(str, num)
        })
      }}/>
      <Button title={'native传一个 promise 给 JS'} onPress={() => {
        nativeModule.getHBDeviceUniqueID().then((arr: string[]) => {
          console.log('resolve', arr)
        }).catch((err: string) => {
          console.error(err)
        })
      }}/>
      <Button title={'native传一个 promise 给 JS2'} onPress={() => {
        nativeModule.findEvents().then((arr: string[]) => {
          console.log('resolve', arr)
        }).catch((err: string) => {
          console.error(err)
        })
      }}/>

      <Button title={'js 监听事件,让 native 给 js 发通知'} onPress={() => {
        nativeModule.postNotificationEvent('test')
      }}/>

      <Button title={'js 监听事件,让 native 给 js 发通知 send'} onPress={() => {
        nativeModule.Send()
      }}/>
    </View>
  )
}

export default ConnectNative
