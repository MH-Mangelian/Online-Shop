'use client';

import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addToCart, removeFromCart } from './features/cart/cartSlice';

describe('cartReducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
    });
  });

  test('should handle adding items to the cart', () => {
    const item = { id: 1, name: 'Product 1', price: 10 };
    store.dispatch(addToCart(item));

    const state = store.getState().cart;
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(item);
  });

  test('should handle removing items from the cart', () => {
    const item = { id: 1, name: 'Product 1', price: 10 };
    store.dispatch(addToCart(item));
    store.dispatch(removeFromCart(item.id));

    const state = store.getState().cart;
    expect(state.items).toHaveLength(0);
  });
});
