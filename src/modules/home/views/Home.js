import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles/HomeStyles';

class Home extends Component {

  onKeyPress(pressed) {
    this.props.onKeyPress(pressed);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextStyle}>
            {this.props.currentValue}
          </Text>
        </View>
        <View style={styles.keypadContainer}>
          <View style={styles.renderButtons}>
            <Button
              title='1'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 1)}
            />
            <Button
              title='2'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 2)}
            />
            <Button
              title='3'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 3)}
            />
            <Button
              title='+'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '+')}
            />
            <Button
              title='4'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 4)}
            />
            <Button
              title='5'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 5)}
            />
            <Button
              title='6'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 6)}
            />
            <Button
              title='-'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '-')}
            />
            <Button
              title='7'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 7)}
            />
            <Button
              title='8'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 8)}
            />
            <Button
              title='9'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 9)}
            />
            <Button
              title='*'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '*')}
            />
            <Button
              title='CLEAR'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 'CLEAR')}
            />
            <Button
              title='0'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 0)}
            />
            <Button
              title='='
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '=')}
            />
            <Button
              title='/'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '/')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
