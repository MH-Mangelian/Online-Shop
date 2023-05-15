'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

//Global style body Html 
import '../app/globals.css';

//components
import NavTopGreen from '@/components/NavTopGreen'
import Header from '@/components/Header'

//icons
import {BsInstagram ,BsTwitter ,BsFacebook , BsTelephone} from 'react-icons/bs';
import {FaTelegram} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';



const contact = () => {
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
            <p css={css`
            margin: 15px 0;
            @media (max-width: 768px) {
              font-size: 22px;
              margin:5px;
              margin-left:10px;
              padding: 5px ;
            }
            `}>Follow us on social networks</p>
              <Link href="/">
                <div css={css`
                  display: inline-flex;
                  color: darkred;
                  margin: 15px 0;
                  background-color: azure;
                  padding: 18px;
                  border-radius: 20px;

                `}>
                  <BsInstagram css={css`
                    margin: 0 5px;
                  `}/>
                  <p css={css`
                    margin: 0 5px;
                  `}>Instagram</p>
                </div>
              </Link>

              <Link href="/">
                <div css={css`
                  display: inline-flex;
                  color: dodgerblue;
                  margin: 15px 0;
                  background-color: azure;
                  padding: 18px;
                  border-radius: 20px;
                `}>
                  <FaTelegram css={css`
                    margin: 0 5px;
                  `}/>
                  <p css={css`
                    margin: 0 5px;
                  `}>Telegram</p>
                </div>
              </Link>

              <Link href="/">
                <div css={css`
                  display: inline-flex;
                  color: dodgerblue;
                  margin: 15px 0;
                  background-color: azure;
                  padding: 18px;
                  border-radius: 20px;
                `}>
                  <BsTwitter css={css`
                    margin: 0 5px;
                  `}/>
                  <p css={css`
                    margin: 0 5px;
                  `}>Twitter</p>
                </div>
              </Link>

              <Link href="/">
                <div css={css`
                  display: inline-flex;
                  color:darkblue;
                  margin: 15px 0;
                  background-color: azure;
                  padding: 18px;
                  border-radius: 20px;
                `}>
                  <BsFacebook css={css`
                    margin: 0 5px;
                  `}/>
                  <p css={css`
                    margin: 0 5px;
                  `}>Facebook</p>
                </div>
              </Link>
          </div>

          <div css={css`
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            color:white;
            font-size: 22px;
          `}>
            <p css={css`
              padding: 10px 0 ;
            `}>
              <AiOutlineMail css={css`
                margin: 0 5px;
               `}/>
              onlineshop@onlineshop.com
            </p>

            <p css={css`
              padding: 10px 0 ;
            `}>
              <BsTelephone css={css`
              margin: 0 5px;
              `}/>
              +989050000000
            </p>

            <p css={css`
              padding: 10px 0 ;
              @media (max-width: 640px) {
                font-size: 18px;
                margin:5px;
                padding: 5px ;
              }
            `}>We are available from Saturday to Thursday from 8:00 AM to 5:00 PM</p>
          </div>


        </div>
      </section>
    </main>
  )
}

export default contact
