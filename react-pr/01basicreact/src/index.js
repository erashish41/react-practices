import React from 'react';                // react is core foundational library which takes all references 
import ReactDOM from 'react-dom/client';  // react-dom is implimentation in web

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
