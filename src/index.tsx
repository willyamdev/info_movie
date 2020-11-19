import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './pages/global/material/material-theme';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={CustomTheme}>
        <Router>
          <Switch>
            <App />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);