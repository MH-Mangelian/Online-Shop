'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import bannerImg from '../public/banner.png'

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

      <div className='hi' css={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: row;

      `}>

        <div css={css`
          width: 35%;
          z-index: 1;
          margin-right: -10px;
          @media (max-width: 640px) {
            margin-right: -30px;
              
          }
          
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            margin-left: auto;
          `}>
            <p css={css`
            color:hsl(120, 58%, 29%);
            font-size: 40px;
            @media (max-width: 768px) {
              font-size: 30px;
            }
            `}>Grab Upto 50% Off On
            Selected Headphone</p>

            <button css={css`
              background:hsl(120, 58%, 29%);
              color:white;
              border-radius: 30px;
              padding: 13px;
              border: none;
              margin: 8px;
              cursor: pointer;
              transition: all 0.3s;
              &:hover{
                background: darkred;
              }
              @media (max-width: 768px) {
                border-radius: 5px;
                padding: 10px;
                margin: 5px;
              }
            `}>Buy Now
            </button>
          </div>
        </div>

        <div css={css`
          width: 65%;
          z-index: -3;
          margin-left: 1px;
          
        `}>
          <Image src={bannerImg}
            alt="Banner"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width="100%"
            height={500}
            css={css`
            object-fit: cover;
            @media (max-width: 768px) {
              width: 50vw;
              height: 50vh;
              padding-left:60px;

            }
            
            `}
          />
        </div>

      </div>
    </section>
  )
}

export default Banner
