import { createSlice } from '@reduxjs/toolkit';
import { assets } from '../assets/assets'

const initialState = {
  icons: assets
};

const iconSlice = createSlice({
  name: 'icons',
  initialState,
  reducers: {
    seticons(state, action) {
      state.icons = action.payload;
    }
  }
});

export const { seticons } = iconSlice.actions;
export default iconSlice.reducer;
