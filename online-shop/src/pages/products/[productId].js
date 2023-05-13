'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';

import Img1 from '../../public/01.jpg'
import Img2 from '../../public/02.jpg'
import Img3 from '../../public/03.jpg'
import Img4 from '../../public/04.jpg'
import Head from 'next/head';

const ProductId = (dataImg) => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <div>
      <Head>
        <title>Shop Product {id}</title>
      </Head>
      [{id}]
      {console.log(id)}
    </div>
  )
}

export default ProductId
