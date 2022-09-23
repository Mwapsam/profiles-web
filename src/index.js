import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { userSlice } from './redux/users/userSlice';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={userSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
