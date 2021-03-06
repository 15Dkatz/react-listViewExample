/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

 var React = require('react-native');
 var SearchPage = require('./SearchPage');

 var styles = React.StyleSheet.create({
  text: {
    color: 'blue',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
    textAlign: 'center'
  },
  container: {
    flex: 1
  }
});


class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;

  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}



React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });

// import React, {ack
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// // psuedo html

// class PropertyFinder extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// // css

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
