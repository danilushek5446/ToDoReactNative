import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserInitialType } from 'src/types/userTypes';

export const initialState: UserInitialType = {
  username: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
