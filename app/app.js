require('./stylesheets/vendor/bootstrap/css/bootstrap.min.v.3.3.5.css');

import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import HomePageContainer from './pages/homepage/HomePageContainer';
import Login from './pages/users/Login';
import AppContainer from './pages/AppContainer';
import { env } from './config/config';
import reducer from './reducers';
import Register from './pages/signup/Register';
import JoinUs from './pages/joinus/joinus';

let appHistory = null;
if (env === 'dev') {
  appHistory = hashHistory;
} else {
  appHistory = browserHistory;
}

let store = createStore(reducer, compose(applyMiddleware(thunk)));

let routes = (
  <div className="app">
    <Provider store={store}>
      <Router history={appHistory}>
        <Route name="main" component={AppContainer}>
          <Route name="home" path="/" component={HomePageContainer} />
          <Route name="signin" path="/users/signin" component={Login} />
          <Route name="register" path="/register" component={Register} />
          <Route name="jointeam" path="/jointeam" component={JoinUs} />
        </Route>
      </Router>
    </Provider>
  </div>
);

render(routes, document.getElementById('root'));
