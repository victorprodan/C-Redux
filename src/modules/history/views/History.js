import React, { Component } from 'react';
import { View, Text } from 'react-native';

class History extends Component {
  render() {
    return (
      <View>
        <Text>History Screen</Text>
      </View>
    );
  }
}

History.navigationOptions = {
  history: 'HistoryScreen',
};

export default History;
