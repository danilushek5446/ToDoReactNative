import {configureStore} from '@reduxjs/toolkit';

import todoSlice from './todoSlice/';
import userSlice from './userSlice/';

const store = configureStore({
  reducer: {
    todo: todoSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;
