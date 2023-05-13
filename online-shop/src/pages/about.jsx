'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'

const about = () => {
  return (
    <main>
      <NavTopGreen/>
      <Header/>
    </main>
  )
}

export default about
