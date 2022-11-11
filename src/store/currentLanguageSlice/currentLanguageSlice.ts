import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  language: 'en',
};

export const currentLanguage = createSlice({
  name: 'currentLanguage',
  initialState,
  reducers: {
    setCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },

  },
});

export const {
  setCurrentLanguage,
} = currentLanguage.actions;

export default currentLanguage.reducer;
