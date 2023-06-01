'use client';
import { createSlice } from "@reduxjs/toolkit";
import DataProduct from "@/Api/DataProduct";

const initialState ={
  cartItems : DataProduct,
  amount : 4,
  total : 0,
  isLoading : true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state)=>{
        state.cartItems = [];        
    },
    removeItem : (state,action)=>{
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) =>
            item.id !== itemId);
    },
    increase: (state,{payload})=>{
        const cartItem = state.cartItems.find((item) =>
         item.id === payload.id )
         cartItem.amount = cartItem.amount +1;
    },
    decrease: (state,{payload})=>{
        const cartItem = state.cartItems.find((item) =>
         item.id === payload.id )
         cartItem.amount = cartItem.amount -1;
    },
    calculateTotals : (state)=>{
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.amount * item.price;
        });
        state.amount = amount;
        state.total = total;
    }
  },
  extraReducers : {
    [getCartItems.pending]:(state)=>{
        state.isLoading = true;
    },
    [getCartItems.fulfilled]:(state,action)=>{
        state.isLoading = false;
        state.cartItems = action.payload;
    },
    [getCartItems.rejected]:(state)=>{
        state.isLoading = false;
    },
}

});

export const{clearCart,removeItem,increase,decrease,calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;
