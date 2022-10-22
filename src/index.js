import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import { ToastProvider } from 'react-toast-notifications'; 
import theme from './theme';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
