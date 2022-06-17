import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppDois from './AppDois';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
import AppC2 from './AppC2';

import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const raiz = ReactDOM.createRoot(document.getElementById('raiz'));
// raiz.render(
//   <React.StrictMode>
//     <AppDois />
//   </React.StrictMode>
// );

// const app3 = ReactDOM.createRoot(document.getElementById('app3'));
// app3.render(
//   <React.StrictMode>
//     <App3 />
//   </React.StrictMode>
// );

// const app4 = ReactDOM.createRoot(document.getElementById('app4'));
// app4.render(
//   <React.StrictMode>
//     <App4 />
//   </React.StrictMode>
// );

// const app5 = ReactDOM.createRoot(document.getElementById('app5'));
// app5.render(
//   <React.StrictMode>
//     <App5 />
//   </React.StrictMode>
// );

const appc2 = ReactDOM.createRoot(document.getElementById('appc2'));
appc2.render(
  <React.StrictMode>
    <AppC2 />
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
