'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import DataProduct from '../../Api/DataProduct'

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

          DataProduct.map((e)=>(
          <Link key={e.id} css={css`
          background-color: hsl(0, 0%, 93%);
          padding: 10px;
          margin:5px;
          border-radius: 20px;
          border: solid 2px hsl(120, 58%, 29%);
          `} 
          href={`/something-else?uri=${e.id}`}
          as={`/products/${e.id}`}
          >
            
            <Image key={e.id} src={e.img} alt="Product Img"
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
              <p key={e.price} css={css`
                    color: black;
                    font-size: 18px;
                    padding: 10px;
                    justify-content: center;
                    font-weight: bold;
                  `}>
                {e.price}
            </p>
              
            </div>      
          </Link>
        ))
      }

    </div>
      
    </section>
  )
}

export default Product
