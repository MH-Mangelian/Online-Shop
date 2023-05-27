import './globals.css';
import { Providers } from '@/redux/Providers';

export const metadata = {
  title: 'Online Shop',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className="">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    
  )
}


