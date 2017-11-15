import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './modules/home/containers/Home';
import reducer from './reducer';

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
