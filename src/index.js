import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";


const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize("G-QP8ZWRQNNE");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });