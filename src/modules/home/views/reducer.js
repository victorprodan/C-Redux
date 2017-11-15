import { KEY_PRESS } from './actions/constants';

const INITIAL_STATE = {
  currentValue: 0,
  operand: '+' || '-' || '*' || '/' || '=' || 'CLEAR',
  lastValue: 0,
  midValue: 0,
  nextValue: 0,
  result: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KEY_PRESS:
      if (typeof (action.payload) === 'number') {
        const midValue = state.currentValue * 10;
        const nextValue = midValue + action.payload;
        return { ...state, currentValue: nextValue };
      } else if (typeof (action.payload) === 'string') {
        const { currentValue, lastValue, operand } = INITIAL_STATE;
        if (operand) {
          midValue: eval(lastValue + operand + currentValue);
        }
          switch (action.payload) {
            case '+':
            case '-':
            case '*':
            case '/':
              return {
                ...state,
                operand: action.payload,
                lastValue: currentValue,
                currentValue: 0
              };
            case 'CLEAR':
              return {
                ...state,
                operand: null,
                lastValue: 0,
                currentValue: 0
              };
            case '=':
              return {
                ...state,
                operand: null,
                lastValue: 0,
                result: state.midValue
              };
            default:
              return state;
          }
      }
      break;
    default:
      return state;
  }
};
