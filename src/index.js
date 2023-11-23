import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditUserProfile from './components/EditUser/EditUser';
import UserProfileView from './components/User/UserInfo';
import LoginForm from './components/logRes/Login';
import RegisterForm from './components/logRes/Res';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm/>
  <RegisterForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
