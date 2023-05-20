'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

// icons import
import {SiPicardsurgeles} from "react-icons/si";
import {MdSupervisorAccount , MdClose} from "react-icons/md";
import {BiCartAdd} from "react-icons/bi";
import {RxHamburgerMenu} from "react-icons/rx";

//components
import Search from './Search';
import TextMobileHeader from './TextMobileHeader';
import SearchForMobile from './SearchForMobile';
import TextHeader from './TextHeader';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header css={css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-left : auto;
    margin-right: auto;
    width: 95vw;
    padding: 20px 5px;
    @media (max-width: 768px) {
      top : 0px;
      
    }
    `}>
      {/* -------------left icon&text side ------------------------------ */}
      <div css={css`
        padding: 3px;
        margin-left: 10px;
        font-size: ;
        border-radius: 4px;
        &hover{
          color: darkred;
        }
      `}>
        <div css={css`
          display: inline-flex;
          align-items: center;
          `}>
          <SiPicardsurgeles css={css`
          width: 50px;
          height: 50px;
          color: black;
          `}/>
          <p css={css`
          padding-left:5px;
          font-size: 30px;
          font-weight: bold;
          color: black;
          
          `}>Online Shop</p>

        </div>
      </div>

      {/* -------------center icon side ------------------------------ */}
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
              display: inline-flex;
              align-items: center;
              cursor: pointer;
              padding: 5px 20px;
              margin: 0 15px;
              color:black;
            `}>
              {/* ---------------texts Mobile hiden --------------------- */}
              <TextHeader/>
            </div>
              {/* -------------Search------------- */}
              <Search css={css`${toggle ? "display: none;" : "display: flex;"}`}/>

        </div>
      </div>

      {/* -------------right icon side ------------------------------ */}

        <div css={css`
              padding: 3px;
              margin-left: 10px;
              font-size: 15px;
              border-radius: 4px;
              color: black;
              &hover{
                color: darkred;
              }
              @media (max-width: 768px) {
                display: none;
                
              }
            `}>
              <div css={css`
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                padding-right: 3px;`
              }>
                
                <Link href="" css={css`
                  margin: 0 10px;
                  `}>
                  <div css={css`
                  display:inline-flex;
                  justify-content:center;
                  align-items:center;
                  margin: 0 10px;
                  padding:0 1px`}>
                    <MdSupervisorAccount css={css`
                      width: 20px;
                      height: 20px;`}/>

                    <p css={css`
                      display:inline-flex;
                      padding: 5px;
                    `}>
                      account
                    </p>
                  </div>

                </Link>

                <Link href="/cart" css={css`
                  margin: 0px 20px;
                  `}>
                  <div css={css`
                  display:inline-flex;
                  justify-content:center;
                  align-items:center;
                  margin: 0 10px;
                  padding:0 1px`}>
                    
                      <BiCartAdd css={css`
                      width: 20px;
                      height: 20px;
                      `}/>
                      <p css={css`
                        display:inline-flex;
                        padding: 5px;
                      `}>
                        Cart
                      </p> 
                      
                  </div>


                </Link>

              </div>
            </div>

            {/* ---------------------Hamburger menu------------------------- */}
            <div css={css`
              padding: 3px;
              margin-left: 10px;
              font-size: 15px;
              border-radius: 4px;
              color: black;
              &hover{
                color: darkred;
              }
              @media (min-width: 1024px) {
                display: none;
                
              }
            `}>

              <div>
                {toggle ? (
                  <MdClose
                  css={css`
                    width: 25px;
                    height: 25px;
                    margin-right: 10px;  
                  `}
                    onClick={() => setToggle(!toggle)}
                  />
                ) : (
                  <RxHamburgerMenu
                    css={css`
                      width: 25px;
                      height: 25px;
                      margin-right: 10px;
                      
                    `}
                    onClick={() => setToggle(!toggle)}
                  />
                )}
              </div>

              <div css={css`${toggle ? "display: flex;" : "display: none;"} 
                  flex-direction: column;
                  flex-wrap: nowrap;
                  justify-content: space-evenly;
                  align-items: center;
                  background: #e8e8e8f8;
                  padding: 20px;
                  border-radius: 10px;
                  position: absolute;
                  min-height: 300px;
                  min-width: 300px;
                  left: 0;
                  right: 0;
                  top: 150px;
                  z-index: 5;
                  
              `}>
                <SearchForMobile/>

                <TextMobileHeader/>

                
              </div>
            </div>

    </header>
  )
}

export default Header
