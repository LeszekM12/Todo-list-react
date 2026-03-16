import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from "./core/GlobalStyle";
import { App } from './core/App';
import { Provider } from 'react-redux';
import store from './core/store';
import { AppThemeProvider } from './core/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
