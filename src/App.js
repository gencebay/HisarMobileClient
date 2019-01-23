import React, { Component } from "react";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./App/Reducers";
import AppNavigator from "./AppNavigator";

class App extends Component {
  render() {
    const logger = createLogger();
    const store = createStore(
      reducers,
      {},
      applyMiddleware(thunkMiddleware, logger)
    );
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
