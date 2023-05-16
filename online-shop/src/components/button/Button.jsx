'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
 import React from 'react'
 
 const Button = () => {
   return (
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
   )
 }
 
 export default Button
