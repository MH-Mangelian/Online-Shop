import Image from 'next/image'
import styles from './page.module.css'
import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'
import Banner from '@/components/banner'
//----------------------------------------------------------------


export default function Home() {
  return (
    <main className="">
      <NavTopGreen/>
      <Header/>
      <Banner/>
    </main>
  )
}
