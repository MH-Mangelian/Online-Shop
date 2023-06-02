'use client';
import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'
import Banner from '@/components/banner'
import Product from '@/components/products/Product'

//Global style body Html 
import '../app/globals.css';

export default function Home() {
  return (
      <main className="">
        <NavTopGreen/>
        <Header/>
        <Banner/>
        <Product/>
      </main>    
  )
}
