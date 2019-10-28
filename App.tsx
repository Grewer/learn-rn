import * as React from 'react';
import { Button, Text, View } from "react-native";
import { createStackNavigator, NavigationStackProp } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Main from "./src/Main";


// class HomeScreen extends React.Component<NavigationInjectedProps> {
//   static navigationOptions = {
//     title: '主页面',
//   };
//
//   render() {
//     console.log(this.props)
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details "
//           onPress={() => this.props.navigation.navigate('Details', { name: 'zhang' })}
//         />
//       </View>
//     );
//   }
// }
function HomeScreen(props: {
  navigation: NavigationStackProp;
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details "
        onPress={() => props.navigation.navigate('Details', { name: 'zhang' })}
      />
      <Button
        title="to Main "
        onPress={() => props.navigation.navigate('Main', { name: 'zhang' })}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: '主页面',
};


class DetailsScreen extends React.Component<{ navigation: NavigationStackProp<{ name: string }> }> {
  static navigationOptions = {
    title: '详情页面',
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    console.log(this.props.navigation.state.params.name)
    return (
      <View>
        <Text>Details Screen Page</Text>
        <Text>
          name params:
          {JSON.stringify(this.props.navigation.getParam('name', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go first"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Main: Main
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
