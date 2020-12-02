import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import axios from './axios';

const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('resize',()=>{
  let vh= window.innerHeight*0.01;
  document.documentElement.style.setProperty('--vh',`${vh}px`)
})
reportWebVitals(console.log());
