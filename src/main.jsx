import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

///import App from './App.jsx'

// import '@storefront-ui/react/styles.css'; // Storefront UI styles
// import './index.css'; // Tailwind styles

// createRoot(document.getElementById('root')).render(
//   <StrictMode>c
//     <App />
//   </StrictMode>,
// )



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Tailwind CSS
//import '@storefront-ui/react/styles.css'; // Storefront UI styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

