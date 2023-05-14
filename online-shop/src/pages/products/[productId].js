'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//Global style body Html 
import '../../app/globals.css';

//components
import NavTopGreen from '@/components/NavTopGreen';
import Header from '@/components/Header';
import Head from 'next/head';
import { dataImg } from '@/components/products/Product';




const ProductId = () => {
  const router = useRouter();
  const { productId } = router.query;

  //data rendering
  const objectToFind = dataImg.find(e => e.id === productId );
  const data = [objectToFind];

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
        border: solid 1px orange;
      `}>

        <div css={css`
          color: black;
          font-size:30px;
          font-weight:bold;

        `}>
             {/* {
              data.map((e)=>(
                <h3 key={e.id}>{e.text}</h3>
              ))
             } */}
             {
              console.log(data)
             }
             
        </div>

        <div css={css`
          display:flex
          align-items: center;
          justify-content: center;
          align-content: center;
          flex-wrap: nowrap;
          @media (max-width: 640px) {
            height: 100vh;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
          }
        `}>
          {/* -------------------left side --------------- */}
          <div css={css`
            display:flex
          `}>
            {/* -----------big img----------- */}
            <div>
              {/* {
                data.map((e)=>(
                  <Image key={e.id} src={e.img} alt='img'
                  width={400} height={600}/>
                ))
              } */}
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
              {/* {
                data.map((e)=>(
                  <p key={e.id}
                  css={css`
                    color:black;
                    font-size: 18px;
                    padding: 10px;
                  `}
                  >
                    {e.description}
                  </p>
                ))
              } */}

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
                
              `}>
                Add to Cart
              </button>

            </div>

          </div>
        </div>

      </section>
    </div>
    
  )
}

export default ProductId
