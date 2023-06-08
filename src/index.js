// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Comment from "./Components/comment";


// 2) Get a reference to div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(
  // <GoogleOAuthProvider clientId="768737600073-dnuqr72j98ibj57joe2pos47pvnjuql9.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  /* </GoogleOAuthProvider> */
);