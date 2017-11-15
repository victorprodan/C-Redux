import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles/HomeStyles';

class Home extends Component {

  onKeyPress(pressed) {

    this.props.onKeyPress(pressed);
  }

  render() {
    const { currentValue } = this.props;

    console.log('render called');
    console.log(currentValue);
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
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 1)}
            />
            <Button
              title='2'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 2)}
            />
            <Button
              title='3'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 3)}
            />
            <Button
              title='+'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '+')}
            />
            <Button
              title='4'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 4)}
            />
            <Button
              title='5'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 5)}
            />
            <Button
              title='6'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 6)}
            />
            <Button
              title='-'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '-')}
            />
            <Button
              title='7'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 7)}
            />
            <Button
              title='8'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 8)}
            />
            <Button
              title='9'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 9)}
            />
            <Button
              title='*'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '*')}
            />
            <Button
              title='CLEAR'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 'CLEAR')}
            />
            <Button
              title='0'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, 0)}
            />
            <Button
              title='='
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '=')}
            />
            <Button
              title='/'
              containerViewStyle={styles.buttonStyle}
              onPress={this.onKeyPress.bind(this, '/')}
            />
          </View>
        </View>
      </View>
    );
  }
}
//
// const mapStateToProps = state => {
//   return {
//     currentValue: state.calculator.currentValue,
//     operator: state.calculator.operator,
//     lastValue: state.calculator.lastValue,
//     midValue: state.calculator.midValue,
//     nextValue: state.calculator.nextValue,
//     result: state.calculator.result
//   };
// };
//
// export default connect(mapStateToProps, { keyPress })(Home);

export default Home;
