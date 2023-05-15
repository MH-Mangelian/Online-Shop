'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';

import {MdSupervisorAccount} from "react-icons/md";
import {BiCartAdd} from "react-icons/bi";

const TextMobileHeader = () => {
  return (
    <div css={css`
    display: flex;
    align-items: center;
    width: 95vw;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: column-reverse;
    align-items: center;
    `}>

      <div css={css`
       width:100px;`}>

        <select name="Categories" id="1" css={css`
        border: none;
        color: black;
        padding: 5px 2px;
        margin: 15px 0;
        border-radius: 5%;
        background: #e8e8e8f8;
        `}>
        <option value="1">Categories</option>
        <option value="2">1</option>
        <option value="3">2</option>
        <option value="4">3</option>
        <option value="5">4</option>
      </select>
    </div>

      <Link href="/" css={css`
      margin: 15px 0;
      `}>
        Home
      </Link>

      <Link href="/about" css={css`
      margin: 15px 0;
      `}>
        AboutUs
      </Link>

      <Link href="/contact" css={css`
      margin: 15px 0;
      `}>
        ContactUs</Link>

        <Link href="" css={css`
          margin: 15px 0;
          display: flex;
          align-items: center;;
          `}><BiCartAdd css={css`
          width: 20px;
          height: 20px;
          margin: 0 3px;
          font-size: 15px;`}/>Cart
        </Link>

        <Link href="" css={css`
          margin: 15px 0;
          display: flex;
          align-items: center;
          `}><MdSupervisorAccount css={css`
          width: 20px;
          height: 20px;
          margin: 0 3px;
          font-size: 15px;`}/>account
        </Link>
          
    </div>
  )
}

export default TextMobileHeader
