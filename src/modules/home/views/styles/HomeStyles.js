import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  inputContainer: {
    backgroundColor: theme.colors.screen,
    flex: 3,
    justifyContent: 'flex-end'
  },
  keypadContainer: {
    backgroundColor: theme.colors.keypad,
    flex: 7
  },
  renderButtons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    fontSize: 18
  },
  buttonStyle: {
    minWidth: '25%',
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: theme.colors.keypad
  },
  buttonResize: {
    paddingTop: '53%',
    paddingBottom: '53%'
  },
  inputTextStyle: {
    color: '#000',
    textAlign: 'right',
    fontSize: 45,
  }
});
