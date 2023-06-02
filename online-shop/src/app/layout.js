'use client';
import './globals.css';
// import { Providers } from '@/redux/Providers';

//Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export const metadata = {
  title: 'Online Shop',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className="">
          <Provider store={store}>
            {children}
          </Provider>
        </body>
      </html>
    
  )
}


