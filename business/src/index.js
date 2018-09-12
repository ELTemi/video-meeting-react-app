import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


ReactDOM.render(
  <Provider store={store}>

  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
  </MuiThemeProvider>
  </Provider>
,

  document.getElementById('root')
);
registerServiceWorker();
