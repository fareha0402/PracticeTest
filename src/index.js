import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import UpdateComponent from './UserComponent';
// import CustomerComponent from './FunctionalComponent';
import reportWebVitals from './reportWebVitals';
// import GetDataComponent from './GetDataComponent';
// import HeroInputComponent from './Hero/HeroInputComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './RandomImages/Main';
ReactDOM.render(
  <React.StrictMode>
    {/* <GetDataComponent/> */}
    {/* <UpdateComponent />
    <CustomerComponent/> */}
    {/* <HeroInputComponent/> */}
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
