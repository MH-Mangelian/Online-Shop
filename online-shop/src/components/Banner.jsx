'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import bannerImg from '../public/banner.jpg'

const Banner = () => {
  return (
    <section css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: nowrap;
      margin-top: 30px;
      margin-left : auto;
      margin-right: auto;
      width: 95vw;
      padding: 20px 5px;
    `}>
      <Image src={bannerImg}
        alt="Banner"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width="100%"
        height={500}
        css={css`
        object-fit: cover;`}
      />

      <div>
        <p css={css`
        color:hsl(120, 58%, 29%);
        font-size: 50px;
        `}>Grab Upto 50% Off On <br />
        Selected Headphone</p>

        <button css={css`
        background:hsl(120, 58%, 29%);
        color:white;
        border-radius: 30px;
        padding: 13px;
        `}>Buy Now</button>
      </div>
    </section>
  )
}

export default Banner
