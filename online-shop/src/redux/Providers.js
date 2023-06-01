'use client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


export function Providers({children}){
  return (
    <Provider>
      {children}
    </Provider>
  )
}

