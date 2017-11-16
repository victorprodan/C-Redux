import { connect } from 'react-redux';

import Home from '../views/Home';
import {
  digitPress,
  addPress,
  minusPress,
  timesPress,
  divPress,
  clearPress,
  showResult
 } from '../views/actions/HomeActions';

export default connect(
  state => ({
    displayValue: state.calculator.displayValue,
    showResult: state.calculator.showResult,
    result: state.calculator.result,
  }),
  {
    onDigitPress: digitPress,
    onAddPress: addPress,
    onMinusPress: minusPress,
    onTimesPress: timesPress,
    onDivPress: divPress,
    onShowResult: showResult,
    onClearPress: clearPress
  }
)(Home);
