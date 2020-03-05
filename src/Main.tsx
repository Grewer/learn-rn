import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  Modal,
  Picker,
  ProgressViewIOS,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

class MainScreen extends React.Component {
  state = { modalVisible: false, language: "" }


  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>main !</Text>
        <Switch/>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        />
        <ProgressViewIOS style={{ width: "100%" }} progress={0.6}/>
        <ActivityIndicator size="large" color="#0000ff"/>
        <Button
          onPress={() => alert('text')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>button 类似于 a 标签</Text>
        {/*<FlatList*/}
        {/*  data={[{ key: 'a' }, { key: 'b' }]}*/}
        {/*  renderItem={({ item }) => <Text>{item.key}</Text>}*/}
        {/*/>*/}
        <Button
          onPress={() => this.setModalVisible(true)}
          title="Show Modal"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <SafeAreaView>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 100 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={{ color: 'blue' }}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java"/>
          <Picker.Item label="JavaScript" value="js"/>
        </Picker>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
// })


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const TabNavigator = createStackNavigator({
  Main: { screen: MainScreen ,navigationOptions: {
      headerTitle: '主页',
    },},
  Settings: SettingsScreen,
}, {
  // headerMode: 'none',
  defaultNavigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  headerBackTitleVisible: false,
});

export default createAppContainer(TabNavigator);
