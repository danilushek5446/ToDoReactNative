import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserInitialType = {
  username: string | null;
};

export const initialState: UserInitialType = {
  username: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },

    removeUser: state => {
      state.username = null;
    },
  },
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
