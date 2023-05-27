'use client';

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer';
import store from '@/redux/store';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer
  });

  return store;
};

import React from 'react'

export function Providers({children}){
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export const wrapper = createWrapper(makeStore);
