import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StateType, TodoItemType, ChangeTodoType} from '../../types/todoTypes';

export const initialState: StateType = {
  todoList: [],
  filter: 'All',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const newItem: TodoItemType = {
        id: Date.now(),
        task: action.payload,
        complete: false,
        edit: false,
      };
      state.todoList.push(newItem);
    },

    removeToDo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        todo => todo.id !== action.payload,
      );
    },

    changeCompletion: (state, action: PayloadAction<number>) => {
      const index = state.todoList.findIndex(
        todo => todo.id === action.payload,
      );
      state.todoList[index].complete = !state.todoList[index].complete;
    },

    deleteAllCompleted: state => {
      state.todoList = state.todoList.filter(todo => !todo.complete);
    },

    checkAll: (state, action: PayloadAction<boolean>) => {
      state.todoList.forEach(todo => {
        todo.complete = action.payload;
      });
    },

    setEditable: (state, action: PayloadAction<number>) => {
      const index = state.todoList.findIndex(
        todo => todo.id === action.payload,
      );
      state.todoList[index].edit = !state.todoList[index].edit;
    },

    editToDo: (state, action: PayloadAction<ChangeTodoType>) => {
      const index: number = state.todoList.findIndex(
        todo => todo.id === action.payload.id,
      );
      state.todoList[index].task = action.payload.value;
      state.todoList[index].edit = false;
    },

    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addToDo,
  removeToDo,
  changeCompletion,
  deleteAllCompleted,
  checkAll,
  setEditable,
  editToDo,
  changeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
