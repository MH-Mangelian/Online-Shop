'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import { useReducer } from 'next/router';

const ProductId = () => {
  const router = useReducer();
  const {productId} = router.query;

  return (
    <div>{productId}</div>
  )
}

export default ProductId
