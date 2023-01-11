import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
// Removed React.strictmode so that it didn't render my components twice.
// The point of strict mode is that you can detect errors by having it render twice

reportWebVitals();
