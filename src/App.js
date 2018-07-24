import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AsyncApp from './containers/AsyncApp';
import logo from './logo.svg';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <AsyncApp />
        </div>
      </Provider>
    );
  }
}

export default App;
