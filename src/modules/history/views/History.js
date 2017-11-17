import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class History extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    drawerIcon: ({ tintColor }) => {
      return (
        <MaterialIcons
          name="card-membership"
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Button
              icon={{ name: 'home' }}
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            />
          }
          centerComponent={{ text: 'History', style: { fontSize: 24, color: '#fff' } }}
        />
        <Text>History Screen</Text>
      </View>
    );
  }
}

export default History;
