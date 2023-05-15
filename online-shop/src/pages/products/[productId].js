'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState , useEffect } from 'react';

//Global style body Html 
import '../../app/globals.css';

//components
import NavTopGreen from '@/components/NavTopGreen';
import Header from '@/components/Header';
import Head from 'next/head';
import { dataImg } from '@/components/products/Product';


export async function getStaticPaths() {
  const paths = dataImg.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const product = dataImg.find((product) => product.id === productId);

  return { props: { product } };
}


const ProductId = ({product}) => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <Head>
        <title>Shop Product {productId}</title>
      </Head>
      <NavTopGreen/>
      <Header/>
      
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
        background-color: hsl(0, 0%, 93%);
      `}>

        <div css={css`
          color: black;
          font-size:30px;
          font-weight:bold;

        `}>
              
          <h3>{product.text}</h3>
        
             
        </div>

        <div css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          
          @media (max-width: 640px) {
            flex-wrap: wrap;
            
          }
        `}>
          {/* -------------------left side --------------- */}
          <div css={css`
            display:flex
          `}>
            {/* -----------big img----------- */}
            <div>
                  <Image src={product.img} alt='img'
                  width={400} height={600} css={css`
                  margin: 10px;
                  @media (max-width: 1024px) {
                    width:400px ;
                    height:400px;
    
                  }
                  @media (max-width: 768px) {
                    width:310px ;
                    height:310px;
    
                  }
                  @media (max-width: 640px) {
                    width:350px ;
                    height:350px;
    
                  }`}/>
            </div>

            {/* -------------------small imgs----------- */}
            {/* <div>
                {
                  
                }
            </div> */}
          </div>

          {/* ----------------------right side --------------- */}
          <div css={css`
            display:flex
          `}>
            <div>
                  <p 
                  css={css`
                    color:black;
                    font-size: 18px;
                    padding: 10px;
                    @media (max-width: 833px) {
                      font-size: 14px;
                      margin: 0 15px;
      
                    }
                  `}
                  >
                    {product.description}
                  </p>

              <div css={css`
                display:inline-flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                padding: 0 1px;
              `}>
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
                  @media (max-width: 640px) {
                    padding: 10px;
                    width: 150px;
    
                  }@media (max-width: 833px) {
                    width: 150px;
    
                  }
                  
                `}>
                  Add to Cart
                </button>

                <p css={css`
                      color: black;
                      font-size: 18px;
                      padding: 10px;
                      justify-content: center;
                      font-weight: bold;
                    `}>
                  {product.price}
              </p>

              </div>

            </div>

          </div>
        </div>

      </section>
    </div>
    
  )
}

export default ProductId



