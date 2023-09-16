import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root'); // Get the root element

const reactRoot = ReactDOM.createRoot(root); // Create a root for your React app

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
