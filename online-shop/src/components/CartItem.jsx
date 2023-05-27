'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <img src={item.img} alt={item.text} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
