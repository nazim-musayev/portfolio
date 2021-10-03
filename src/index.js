import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';


ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Paper square>
          <App />
        </Paper>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
