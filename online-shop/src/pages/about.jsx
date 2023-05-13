'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'

//icons & img 
import aboutImg from '../public/about.jpg';

const about = () => {
  return (
    <main>
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
        
      `}>

        <div css={css`
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          background-color: hsl(120, 41%, 30%);
          border-radius: 20px;
          width: 100%;
          height: 500px;
          @media (max-width: 640px) {
            height: 100vh;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
          }
        `}>

          <div css={css`
            display:flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            color:white;
            font-size:22px;
          `}>
            
            <Image src={aboutImg}
            width={500}
            height={500}
            alt=''
            css={css`
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

              }
            `}
            />
              
          </div>

          <div css={css`
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            color:white;
            font-size: 20px;
          `}>        

            <p css={css`
              padding: 10px;
              margin:15px;
              @media (max-width: 640px) {
                font-size: 18px;
              }
            `}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>


        </div>
      </section>
    </main>
  )
}

export default about
