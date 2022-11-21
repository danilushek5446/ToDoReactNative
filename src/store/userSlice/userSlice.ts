import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { UserType } from 'src/types/userTypes';

export const initialState: UserType = {
  name: null,
  photo: null,
  id: null,
  login: null,
  password: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToState: (state, action: PayloadAction<UserType>) => {
      // // eslint-disable-next-line no-param-reassign
      // state = action.payload;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },

    deleteUserFromState: (state) => {
      state.id = null;
      state.name = null;
      state.photo = null;
      state.login = null;
      state.password = null;
    },

    changePhoto: (state, action: PayloadAction<string | null>) => {
      state.photo = action.payload;
    },
  },
});

export const { setUserToState, changePhoto, deleteUserFromState } = userSlice.actions;

export default userSlice.reducer;
