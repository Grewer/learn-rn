import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import io from 'socket.io-client'

class SocketMain extends React.Component {
  state = {
    text: ''
  }
  private socket: SocketIOClient.Socket

  constructor(props: any) {
    super(props)

    const socket = io('http://localhost:3000',{
      // path: '/socket.io',
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
      timeout: 20000,
      autoConnect: true,
      query: {},
    })
    this.socket = socket
    socket.on('connect', (ev => {
      console.log(ev)
    }))
    socket.on('message', (ev) => {
      console.log(ev)
    })
  }


  change = (ev) => {
    const { text } = ev.nativeEvent
    this.setState({ text })
  }

  submit = () => {
    this.socket.emit('submit', this.state.text)
    this.socket.send(this.state.text)
  }

  render() {
    const { text } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SocketMain !</Text>
        <View
          style={{
            borderColor: '#000000',
            borderWidth: 1,
            width: 100,
          }}>
          <UselessTextInput
            multiline
            value={text}
            numberOfLines={4}
            onChange={this.change}
          />
        </View>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={this.submit}>
          <Text>提交</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
      editable
      maxLength={40}
    />
  )
}

export default SocketMain
