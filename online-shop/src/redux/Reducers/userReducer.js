'use client';
const initialState = {
  user: null,
  isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      }
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default userReducer;
