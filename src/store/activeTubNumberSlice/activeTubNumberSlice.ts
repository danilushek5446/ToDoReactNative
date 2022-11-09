import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { StateType, TodoItemType, ChangeTodoType } from '../../types/todoTypes';

export const initialState = {
  activeTab: 1,
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
  setActiveTubNumber
} = activeTubNumber.actions;

export default activeTubNumber.reducer;
