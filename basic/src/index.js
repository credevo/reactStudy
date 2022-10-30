import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
import AppProducts from './AppProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your AppProfile, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

