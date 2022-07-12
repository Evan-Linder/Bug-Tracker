import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{} from 'react-redux'
//have to import combine reducers because we can only store one of them.
import{configureStore,combineReducers} from '@reduxis/toolkit'

//reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/authSlice'
import userReducer from './Controllers/Redux/authSlice'

const reducer=combineReducers({
  auth:authReducer,
  bug:bugReducer,
  user:userReducer,
})

const store=configureStore({
  reducer
})

//wraps everything into a react app.
ReactDOM.render(
  <Provider store={store}>,
  <App/>
  </Provider>
  ,
  document.getElementById('root')
);

