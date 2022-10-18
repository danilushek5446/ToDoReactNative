import { createSelector } from "reselect";
import { TodoItemType } from "../types/todoTypes";
import { RootState } from "./store";

export const selectAllTodos = (state: RootState) => state.todo.todoList;
export const selectActiveFilter = (state: RootState) => state.todo.filter;

export const selectTodoByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodo:TodoItemType[], activeFilter:string) => {
    if (activeFilter === 'all') return allTodo;

    if (activeFilter === 'completed') {
      return allTodo.filter(todo => todo.complete)
    }

    return allTodo.filter(todo => !todo.complete)
  }
)