import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import AppRouterContainer from './components/app_router/app_router_container.jsx';

const Root = ({ store }) => (
  <Provider store = { store }>
    <AppRouterContainer/>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  window.Store = store;
  ReactDOM.render(<Root store = { store } />, root);
});
