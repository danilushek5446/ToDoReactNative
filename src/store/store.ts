import { configureStore } from '@reduxjs/toolkit';
import activeTubNumberSlice from './activeTubNumberSlice/activeTubNumberSlice';

import todoSlice from './todoSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    todo: todoSlice,
    user: userSlice,
    activeTubNumber: activeTubNumberSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
