require('./stylesheets/vendor/bootstrap/css/bootstrap.min.v.3.3.5.css');
import './stylesheets/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, browserHistory } from 'react-router';
import { env } from './config/config';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import HomePage from './pages/homepage';
import Signin from './pages/users/signin';
import AppContainer from './pages/AppContainer';
import Register from './pages/users/signup';
import JoinUs from './pages/joinus';
import UserProfile from './pages/userProfile';
import ResetPassword from './pages/ResetPassword';
import EventDtail from 'pages/eventDetail';
import Event from './pages/eventPage';

library.add(faArrowDown);

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
          <Route name="home" path="/" component={HomePage} />
          <Route name="signin" path="/users/signin" component={Signin} />
          <Route name="register" path="/register" component={Register} />
          <Route name="jointeam" path="/jointeam" component={JoinUs} />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="users_profile" exact path="/users/profile/:operation/:userId" component={UserProfile} />
          <Route name="reset_password" exact path="/users/reset_password" component={ResetPassword} />
          <Route name="event_detail" path="/events/:eventId" component={EventDtail} />
          <Route name="events" exact path="/events" component={Event} />
        </Route>
      </Router>
    </Provider>
  </div>
);

render(routes, document.getElementById('root'));
