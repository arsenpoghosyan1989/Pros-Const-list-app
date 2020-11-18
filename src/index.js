import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import GlobalStyle from './themes/global.style';

ReactDOM.render(
  <ThemeProvider theme={themes.default}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
