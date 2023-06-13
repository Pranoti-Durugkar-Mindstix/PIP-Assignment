import React, { useEffect } from 'react';
import Home from './Components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentsPage from './pages/commentsPage';
import { gapi } from 'gapi-script';
import Signup from './Signup';


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Router () {

  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId: clientId,
        scope:''
      });
    }
    gapi.load('client:auth2', start);
  });

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path='/'
            element={<Signup />} />
          <Route exact path='/home'
            element={<Home />} />
          <Route exact path='comments'
            element={<CommentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;