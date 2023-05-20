import { combineReducers } from 'redux';
import cartRedux from './cartRedux'

const rootReducer = combineReducers({
  cart: cartRedux,
});

export default rootReducer;
