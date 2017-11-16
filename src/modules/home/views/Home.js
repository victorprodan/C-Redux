import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles/HomeStyles';

class Home extends Component {

  onDigitPress(pressed) {
    this.props.onDigitPress(pressed);
  }

  onAddPress() {
    this.props.onAddPress();
  }

  onMinusPress() {
    this.props.onMinusPress();
  }

  onTimesPress() {
    this.props.onTimesPress();
  }

  onDivPress() {
    this.props.onDivPress();
  }

  onShowResult() {
    this.props.onShowResult();
  }

  onClearPress() {
    this.props.onClearPress();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextStyle}>
            {this.props.result}
          </Text>
          <Text style={styles.inputTextStyle}>
            {this.props.displayValue}
          </Text>
        </View>
        <View style={styles.keypadContainer}>
          <View style={styles.renderButtons}>
            <Button
              title='1'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 1)}
            />
            <Button
              title='2'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 2)}
            />
            <Button
              title='3'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 3)}
            />
            <Button
              title='+'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onAddPress()}
            />
            <Button
              title='4'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 4)}
            />
            <Button
              title='5'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 5)}
            />
            <Button
              title='6'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 6)}
            />
            <Button
              title='-'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onMinusPress()}
            />
            <Button
              title='7'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 7)}
            />
            <Button
              title='8'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 8)}
            />
            <Button
              title='9'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 9)}
            />
            <Button
              title='*'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onTimesPress()}
            />
            <Button
              title='CLEAR'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onClearPress()}
            />
            <Button
              title='0'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={this.onDigitPress.bind(this, 0)}
            />
            <Button
              title='='
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onShowResult()}
            />
            <Button
              title='/'
              buttonStyle={styles.buttonResize}
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onDivPress()}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
