import { combineReducers } from 'redux'
import cartReducer from './actions/cartActions'
import userReducer from './actions/userActions'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

export default rootReducer
