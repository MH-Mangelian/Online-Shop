'use client';
import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'
import Banner from '@/components/banner'
import Product from '@/components/products/Product'

//Global style body Html 
import '../app/globals.css';

//Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';


export default function Home() {
  return (
    <Provider store={store}>
      <main className="">
        <NavTopGreen/>
        <Header/>
        <Banner/>
        <Product/>
      </main>
    </Provider>
  )
}
