import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';
import iconReducer from './slices/iconSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    icons: iconReducer
  }
});

export default store;
