import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Application from './src/Application';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Application />
      </View>
    );
  }
}
