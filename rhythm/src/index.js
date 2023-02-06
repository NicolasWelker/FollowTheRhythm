import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';

import {LoginsContextProvider} from './context/LoginsContext';
import {AuthContextProvider} from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LoginsContextProvider>
        <App />
      </LoginsContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
);

