import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TimeProvider } from './components/TimeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimeProvider>
      <App />
    </TimeProvider>
  </React.StrictMode>
);

