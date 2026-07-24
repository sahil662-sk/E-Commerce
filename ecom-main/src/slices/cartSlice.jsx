import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      const index = state.cart.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
