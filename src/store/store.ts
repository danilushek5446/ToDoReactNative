import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice/todoSlice";


const store = configureStore({
  reducer: {
    todo: todoSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;