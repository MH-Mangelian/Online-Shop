'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';

import Link from 'next/link';
// icons import
import {SiPicardsurgeles} from "react-icons/si";
import {BsSearch} from "react-icons/bs";
import {MdSupervisorAccount} from "react-icons/md";
import {BiCartAdd} from "react-icons/bi";

const Header = () => {
  return (
    <header css={css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-left : auto;
    margin-right: auto;
    width: 95vw;
    padding: 20px 5px
    background-color: red;
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
            width:100px;`}>
              <select name="Categories" id="1" css={css`
              border: none;
              color: black;
              padding: 5px 10px;
              margin-right:10px;
              border-radius: 5%;
              `}>
                <option value="1">Categories</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
              </select>
            </div>

            <div css={css`
              display: inline-flex;
              align-items: center;
              cursor: pointer;
              padding: 5px 20px;
              margin: 0 15px;
              color:black;
            `}>
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

              {/* -------------Search------------- */}
              <form css={css`
              `}>
                <input css={css`
                  border: none;
                  color: black;
                  padding: 5px 20px;
                  margin:0 10px;
                  border-radius: 2%;
                  width: 80%;
                  background-color: hsl(0, 0%, 93%);`}
                  type="search"
                  placeholder='Search...'
                />
                <button css={css`
                    float: left;
                    width: 20%;
                    padding: 1px;
                    color: white;
                    cursor: pointer;`
                  }>
                  <BsSearch css={css`
                    display: inline-block;
                    color: black;
                    width: 15px;
                    height: 15px;
                    `}/>

                </button>

              </form>
            </div>

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
            `}>
              <div css={css`
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                padding-right: 3px;`
              }>
                <div>
                  <MdSupervisorAccount/>
                  <Link href="" css={css`
                  margin: 0 10px;
                  `}>account</Link>
                </div>
                <div>
                  <BiCartAdd/>
                  <Link href="" css={css`
                  margin: 0 10px;
                  `}>Cart</Link>
                </div>

              </div>
            </div>

    </header>
  )
}

export default Header
