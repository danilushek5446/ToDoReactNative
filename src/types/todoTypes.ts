export type TodoItemType = {
  id: number;
  task: string;
  complete: boolean;
  edit: boolean;
};

export type StateType = {
  todoList: TodoItemType[];
  filter: string;
};

export type ChangeTodoType = {
  id: number;
  value: string;
};
