import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import authReducer from './authReducer';

export default combineReducers({
  books: booksReducer,
  auth: authReducer
})

