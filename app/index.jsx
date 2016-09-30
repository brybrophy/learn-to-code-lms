import 'babel-polyfill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { useStrict } from 'mobx';
useStrict(true);

import { Provider } from 'mobx-react';
import appStore from './stores/appStore';

const stores = { appStore };

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    color: '#FFFFFF',
    height: '75px'
  },

  fontFamily: 'MontserratLight',

  palette: {
    accent1Color: 'black',
    primary1Color: '#000000',
    textColor: '#444444'
  }
});

ReactDOM.render(
  <Provider {...stores}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
