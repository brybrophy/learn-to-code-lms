import {
  applyRouterMiddleware,
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router} from 'react-router';
import { useTransitions, withTransition } from 'react-router-transitions';
import About from 'components/about/About';
import App from 'components/App';
import Css from 'components/cssLesson/Css';
import Git from 'components/gitLesson/Git';
import Home from 'components/home/Home';
import Html from 'components/htmlLesson/Html';
import Js from 'components/jsLesson/Js';
import Login from 'components/auth/Login';
import Logout from 'components/auth/Logout';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Routes = React.createClass({
  render() {
    return <Router
      history={browserHistory}
      render={applyRouterMiddleware(useTransitions({
        TransitionGroup: ReactCSSTransitionGroup, defaultTransition: {
          transitionName: 'fade',
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300
        }
      }))}
    >
      <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={About} path="about" />
        <Route component={Css} path="css" />
        <Route component={Git} path="git" />
        <Route component={Html} path="html" />
        <Route component={Js} path="javascript" />
        <Route component={Login} path="login" />
        <Route component={Logout} path="logout" />
      </Route>
    </Router>;
  }
});

export default Routes;
