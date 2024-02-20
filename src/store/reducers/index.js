// src/store/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './users';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
