'use client';
import { combineReducers } from 'redux'
import cartReducer from './Reducers/cartReducer';
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

export default rootReducer
