import * as React from 'react';
import Main from "./src/Main";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }
}
