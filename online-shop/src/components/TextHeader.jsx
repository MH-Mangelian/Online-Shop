'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';

const TextHeader = () => {
  return (
    <div css={css`
    display: inline-flex;
    align-items: center;
    @media (max-width: 1024px) {
      display: none;
      
    }`}>

      <div css={css`
       width:100px;`}>

        <select name="Categories" id="1" css={css`
        border: none;
        color: black;
        padding: 5px 2px;
        margin-right: 10px;
        border-radius: 5%;
        `}>
        <option value="1">Categories</option>
        <option value="2">1</option>
        <option value="3">2</option>
        <option value="4">3</option>
        <option value="5">4</option>
      </select>
    </div>

      <Link href="" css={css`
      margin: 0 15px;
      `}>
        Home
      </Link>

      <Link href="" css={css`
      margin: 0 15px;
      `}>
        AboutUs
      </Link>

      <Link href="" css={css`
      margin: 0 15px;
      `}>
        ContactUs</Link>
    </div>
  )
}

export default TextHeader
