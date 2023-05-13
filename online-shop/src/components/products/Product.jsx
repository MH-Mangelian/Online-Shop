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

export const dataImg = [
  {
    id: "1",
    text: "Classic Head Phone",
    img: Img1,
  },
  {
    id: "2",
    text: "Nice Head Phone",
    img: Img2,
  },
  {
    id: "3",
    text: "Good Head Phone",
    img: Img3,
  },
  {
    id: "4",
    text: "Gaming Head Phone",
    img: Img4,
  },
]

const Product = () => {

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
       Product Some
    </h3>

    <div css={css`
    display: inline-flex;
    flex-wrap: wrap;
    padding: 10px;
    margin:5px;
    `}>
      {

        dataImg.map((e)=>(
          <Link css={css`
          background-color: hsl(0, 0%, 93%);
          padding: 10px;
          margin:5px;
          border-radius: 20px;
          border: solid 2px hsl(120, 58%, 29%);
          `} 
          href={`/something-else?uri=${e.id}`}
          as={`/products/${e.id}`}
          >
            
            <Image key={e} src={e.img} alt="Product Img"
              width={300}
              height={300}
              />
            <div>
              
            <p key={e.id} css={css`
                    color: black;
                    font-size: 18px;
                    padding: 10px;
                    justify-content: center;
                    font-weight: bold;
                  `}>
                {e.text}
            </p>
                
                
                  
                  
            <button css={css`
                background:hsl(120, 58%, 29%);
                color:white;
                border-radius: 30px;
                padding: 13px;
                width: 300px;
                border: none;
                margin: 8px;
                cursor: pointer;
                transition: all 0.3s;
                &:hover{
                  background: darkred;
                }
                
            `}>Add to Cart</button>
              
            </div>      
          </Link>
        ))
      }

    </div>
      
    </section>
  )
}

export default Product
