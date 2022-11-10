import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  activeTab: 0,
};

export const activeTubNumber = createSlice({
  name: 'activeTubNumber',
  initialState,
  reducers: {
    setActiveTubNumber: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },

  },
});

export const {
  setActiveTubNumber,
} = activeTubNumber.actions;

export default activeTubNumber.reducer;
