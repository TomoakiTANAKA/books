/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {  

  // コンストラクタを用意できる
  constructor(props) {
    super(props);
    this.title = "タイトルです";
  }

  render() {
    var message = "田中智章";

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={{color: 'red'}}>{this.title}</Text>
        <Text style={{color: 'red'}}>{message}</Text>
        <Text style={styles.test}>{message}</Text>
        <Text style={styles.instructions}>{instructions}</Text>


        <View style={sizes.small}></View>
      </View>
    );
  }
}

// スタイルもjsで定義して読み出す
// {{}}は、{}の中にデザインオブジェクトをいれているのかな
// StyleSheet.create でスタイルを作る
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  test: {
    color: 'blue',
  }
});

const sizes = StyleSheet.create({
  small: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    backgroundColor: 'red',
  },
  medium: {
    width: 200,
    height: 200,
    borderStyle: 'solid',

  },
  large: {
    width: 400,
    height: 400,
    borderStyle: 'solid',

  }
});
