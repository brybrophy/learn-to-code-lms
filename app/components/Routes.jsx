import {
  applyRouterMiddleware,
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router} from 'react-router';
import { useTransitions, withTransition } from 'react-router-transitions';
import About from 'components/About';
import App from 'components/App';
import Css from 'components/Css';
import Git from 'components/Git';
import Home from 'components/Home';
import Html from 'components/Html';
import Js from 'components/Js';
import Login from 'components/Login';
import Logout from 'components/Logout';
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
