'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector , useDispatch } from 'react-redux';

//Global style body Html 
import '../app/globals.css';

//components
import NavTopGreen from '@/components/NavTopGreen';
import Header from '@/components/Header';

import CartItem from '@/components/CartItem';


const cart = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  
  if(amount < 1){
    return(
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
        border-radius: 20px;
        background-color: hsl(0, 0%, 93%);
      `}>

        <div css={css`
          color: black;
          font-size:30px;
          font-weight:bold;

        `}>
              
          <h3>Shopping Cart</h3>
        
         </div>

        <div css={css`
          display: flex;
        `}>
          {/* ----------------products--------------------------- */}
          <div>
            <p>Cart is empty</p>
          </div>

          {/* -------------------text and price ----------------- */}
          <div></div>
        </div>

      </section>
    </main>
    )
  }

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
        border-radius: 20px;
        background-color: hsl(0, 0%, 93%);
      `}>

        <div css={css`
          color: black;
          font-size:30px;
          font-weight:bold;

        `}>
              
          <h3>Shopping Cart</h3>
        
         </div>

        <div css={css`
          display: flex;
        `}>
          {/* ----------------products--------------------------- */}
          <div>
            {
              cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>
              })
            }
          </div>

          {/* -------------------text and price ----------------- */}
          <div>
            <hr/>
            <h3>total ${total.toFixed(2)}</h3>


            <div>
              <button>Buy</button>
              <button>Clear cart</button>
            </div>

          </div>
        </div>

      </section>
    </main>
  )
}

export default cart
