import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions'

document.addEventListener('DOMContentLoaded',()=>{
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        userId: window.currentUser.id,
        currentTeamId: window.currentTeamId.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.currentTeamId
  } else {
    store = configureStore();
  }
  // //Testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // //Testing

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store }/>, root);
});
