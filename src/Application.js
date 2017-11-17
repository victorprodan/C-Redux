import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { addNavigationHelpers } from 'react-navigation';

import Home from './modules/home/containers/Home';
import History from './modules/history/views/History';
import reducer from './reducer';

const App = ({ dispatch, nav }) => {
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />;
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App)


class Application extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
          <Home />
      </Provider>
    );
  }
}
export default Application;
