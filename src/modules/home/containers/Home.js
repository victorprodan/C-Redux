import { connect } from 'react-redux';

import Home from '../views/Home';
import { keyPress } from '../views/actions/HomeActions';

export default connect(
  state => ({
    currentValue: state.calculator.currentValue,
    operator: state.calculator.operator,
    lastValue: state.calculator.lastValue,
    midValue: state.calculator.midValue,
    nextValue: state.calculator.nextValue,
    result: state.calculator.result
  }),
  {
    onKeyPress: keyPress
  }
)(Home);
