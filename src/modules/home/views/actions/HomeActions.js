import {
  DIGIT_PRESS,
  ADD_PRESS,
  MINUS_PRESS,
  TIMES_PRESS,
  DIV_PRESS,
  CLEAR_PRESS,
  SHOW_RESULT
} from './constants';

export const digitPress = (pressed) => {
  return {
    type: DIGIT_PRESS,
    payload: pressed
  };
};

export const addPress = () => {
  return {
    type: ADD_PRESS
  };
};

export const minusPress = () => {
  return {
    type: MINUS_PRESS
  };
};

export const timesPress = () => {
  return {
    type: TIMES_PRESS
  };
};

export const divPress = () => {
  return {
    type: DIV_PRESS
  };
};

export const showResult = () => {
  return {
    type: SHOW_RESULT
  };
};

export const clearPress = () => {
  return {
    type: CLEAR_PRESS
  };
};
