import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'components/GlobalStyle';
import { store } from 'redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>       
        <App />      
        <GlobalStyle />    
    </Provider>
  </React.StrictMode>
);
