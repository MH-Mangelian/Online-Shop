import Image from 'next/image'
import styles from './page.module.css'
import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'
import Banner from '@/components/banner'
import Product from '@/components/product/Product'
//----------------------------------------------------------------


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
