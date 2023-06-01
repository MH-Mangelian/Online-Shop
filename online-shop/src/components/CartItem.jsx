'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

const CartItem = ({id,img,title,price,amount,text}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Image  src={img} alt={text}/>
      <h4>{text}</h4>
      <h3>{price}</h3>
      <button onClick={()=> dispatch(removeItem(id))}>Remove</button>
      <div>
        <button onClick={()=> dispatch(increase({id}))}>+</button>
        <p>{amount}</p>
        <button onClick={()=> {
          if(amount === 1) {
            dispatch(removeItem(id));
            return
          }
          dispatch(decrease({id}))
        }}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
