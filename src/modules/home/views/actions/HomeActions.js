import { KEY_PRESS } from './constants';

export const keyPress = (pressed) => {
  return {
    type: KEY_PRESS,
    payload: pressed
  };
};
