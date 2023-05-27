'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer';
import store from '@/redux/store';

export const metadata = {
  title: 'Online Shop',
  description: '',
}

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer
  });

  return store;
};



export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </Provider>
  )
}

export const wrapper = createWrapper(makeStore);
