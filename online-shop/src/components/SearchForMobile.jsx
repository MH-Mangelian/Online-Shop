'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import {BsSearch} from "react-icons/bs";


const SearchForMobile = () => {
  return (
    <form css={css`
    display: inline-flex;
    display: flex;
    height: 35px;
    width: 95vw;
  `}>
    <input css={css`
        &:focus{
           outline: 0;
           -webkit-box-shadow: none;
           box-shadow: none;
        }
        border: none;
        color: black;
        padding: 5px 20px;
        margin:0 10px;
        border-radius: 2%;
        width: 80%;
        background-color: hsl(0, 0%, 98%);
        `}
      type="search"
      placeholder='Search...'
    />
    <button css={css`
        border: none;
        float: left;
        width: 20%;
        padding: 8px;
        margin-left: -20px;
        background-color: hsl(111, 26%, 52%);
        cursor: pointer;`
      }>
      <BsSearch css={css`
        display: inline-block;
        color: white;
        
        `}/>

    </button>

  </form>
  )
}

export default SearchForMobile
