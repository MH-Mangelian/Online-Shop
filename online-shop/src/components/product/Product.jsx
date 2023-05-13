'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import Img1 from '../../public/01.jpg'
import Img2 from '../../public/02.jpg'
import Img3 from '../../public/03.jpg'
import Img4 from '../../public/04.jpg'
import { basePath } from '../../../next.config';

const Product = () => {
  const addressImg = new Map([
    ["Classic Head Phone" , Img1],
    ["Nice Head Phone" , Img2],
    ["Good Head Phone" , Img3],
    ["Gaming Head Phone" , Img4],
  ])
  const values = Array.from(addressImg.values());
  const keys = Object.keys(addressImg.keys());
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
    border-radius: 20px;
    border: solid 1px orange;
  `}>

    <h3 css={css`
    color: black;
    font-size:30px;
    font-weight:bold;

    `}>
       Some Product
    </h3>

    <div css={css`
    display: inline-flex;
    flex-wrap: wrap;
    padding: 10px;
    margin:5px;
    `}>

      
      {
        values.map((e)=>(
          <Link css={css`
          background-color: hsl(0, 0%, 93%);
          padding: 10px;
          margin:5px;
          border-radius: 20px;
          border: solid 2px hsl(120, 58%, 29%);
          `} 
          href=""
          >

            <Image key={e} src={e} alt="Product Img"
              width={300}
              height={300}
              />
            <div>
              {
                keys.map((i)=>(
                  <p key={i} css={css`
                  font-size: 16px;
                  `}>
                    {i}
                  </p>
                ))
              }

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
                
            `}>Buy Now</button>
              
            </div>

                
          </Link>
        ))
      }

    </div>
      
    </section>
  )
}

export default Product
