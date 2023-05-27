'use client';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
