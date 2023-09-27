import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <title>NeoSao Website</title>
      <meta name="description" content="A brief description of your website goes here." />
      {/* Add more meta tags as needed */}
    </head>

    <App />

  </React.StrictMode>
);


