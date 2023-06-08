
import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App () {

  return (
    <div className='app'>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
