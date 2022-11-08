import { createSelector } from 'reselect';

import type { TodoItemType } from 'src/types/todoTypes';
import type { RootStateType } from './store';

export const selectAllTodos = (state: RootStateType) => state.todo.todoList;
export const selectActiveFilter = (state: RootStateType) => state.todo.filter;

export const selectTodoByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodo: TodoItemType[], activeFilter: string) => {
    if (activeFilter === 'All') {
      return allTodo;
    }

    if (activeFilter === 'Completed') {
      return allTodo.filter((todo) => todo.complete);
    }

    return allTodo.filter((todo) => !todo.complete);
  },
);
