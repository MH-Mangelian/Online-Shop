import './globals.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Shop',
  description: '',
}


const store = configureStore({
  reducer: rootReducer
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  )
}
