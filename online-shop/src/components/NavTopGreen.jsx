'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
 
//import Icons
import {BsTelephone ,BsShop} from 'react-icons/bs';

const NavTopGreen = () => {
  return (
    <nav css={css`width: 100vw;
    height: 40px;
    background: hsl(120, 58%, 29%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    top: 0; 
    @media (max-width: 768px) {
      display: none;
      
    }`}>
        {/* -------------------------Left side------------------------ */}
        <div
          css={css`
            padding: 3px;
            margin-left: 10px;
            font-size: ;
            border-radius: 4px;
            &hover{
              color: darkred;
            }
          `}
        >
          <div css={css`
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          `}>
            <BsTelephone/><p css={css`
            padding: 0.5px 0px 0px 5px ;`}>+989050691900</p>
          </div>
        </div>
        {/* ---------------------------center side -------------------- */}
        <div css={css`
            padding: 3px;
            margin-left: 10px;
            font-size: ;
            border-radius: 4px;
          `}>
              <div css={css`
          display: inline-flex;
          align-items: center;
          `}>
            <BsShop/><p css={css`
            padding: 0.5px 0px 0px 5px ;
            cursor: pointer;
            &hover{
              color: darkred;
            }`}>Get 50% Off on Selected Items | <span css={css`
            padding: 0.5px 0px 0px 5px ;
            cursor: pointer;
            &hover{
              color: hsl(0, 84%, 58%);
            }`}>Shop Menu</span></p>
          </div>
        </div>
        {/* ----------------------- Right side ------------------------------ */}
        <div
          css={css`
            padding: 3px;
            margin-left: 10px;
            font-size: ;
            border-radius: 4px;
            &hover{
              color: darkred;
            }
          `}
        >
          <div css={css`
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          padding-right: 3px;
          `}>
            <div css={css`
            width:100px;`}>
              <select name="Egn" id="1" css={css`
              background: hsl(120, 58%, 29%);
              border: none;
              color: white;`}>
                <option value="1">Egn</option>
                <option value="2">Abc</option>
                <option value="3">Ggh</option>
                <option value="4">Opa</option>
                <option value="5">Xml</option>
              </select>
            </div>
            <div css={css`
            width:100px;`}>
              <select name="Location" id="1" css={css`
              background: hsl(120, 58%, 29%);
              border: none;
              color: white;`}>
                <option value="1">Location</option>
                <option value="2">USA</option>
                <option value="3">IRAN</option>
                <option value="4">Germany</option>
                <option value="5">Spain</option>
              </select>
            </div>
          </div>
        </div>
  </nav>
  )
}

export default NavTopGreen
