import {
  DIGIT_PRESS,
  ADD_PRESS,
  MINUS_PRESS,
  TIMES_PRESS,
  DIV_PRESS,
  CLEAR_PRESS,
  SHOW_RESULT
} from './actions/constants';

const INITIAL_STATE = {
  displayValue: 0,
  result: 0,
  showResult: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIGIT_PRESS:
      return {
        ...state,
        displayValue: (state.displayValue * 10) + action.payload,
        showResult: false
      };
    case ADD_PRESS:
      return {
        ...state,
        displayValue: 0,
        result: state.result + state.displayValue,
        showResult: true
      };
    case MINUS_PRESS:
      return {
        ...state,
        displayValue: 0,
        result: state.result - state.displayValue,
        showResult: true
      };
    case TIMES_PRESS:
      return {
        ...state,
        displayValue: 0,
        result: state.result * state.displayValue,
        showResult: true
      };
    case DIV_PRESS:
      return {
          ...state,
          displayValue: 0,
          result: state.result / state.displayValue,
          showResult: true
        };
    case CLEAR_PRESS:
      return {
          ...state,
          result: 0,
          showResult: 0,
          displayValue: 0
        };
    case SHOW_RESULT:
      return {
          ...state,
          result: state.result,
          showResult: true,
          displayValue: state.displayValue,
        };
    default:
      return state;
  }
};
