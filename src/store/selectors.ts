import {createSelector} from 'reselect';

import {TodoItemType} from 'src/types/todoTypes';
import {RootState} from './store';

export const selectAllTodos = (state: RootState) => state.todo.todoList;
export const selectActiveFilter = (state: RootState) => state.todo.filter;

export const selectTodoByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodo: TodoItemType[], activeFilter: string) => {
    if (activeFilter === 'All') {
      return allTodo;
    }

    if (activeFilter === 'Completed') {
      return allTodo.filter(todo => todo.complete);
    }

    return allTodo.filter(todo => !todo.complete);
  },
);
