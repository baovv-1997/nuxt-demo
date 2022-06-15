interface TodoItem {
  key: string;
  name: string;
  isComplete: boolean;
}

interface TodoList {
  todoList: TodoItem[]
}

export const state = (): TodoList => ({
  todoList: []
})

export const getters = {
  all(state: TodoList) {
    return state.todoList;
  },
  process(state: TodoList) {
    return state.todoList.filter((item) => !item.isComplete);
  },
  done(state: TodoList) {
    return state.todoList.filter((item) => item.isComplete);
  }
}

export const mutations = {
  setStore(state: TodoList, data: TodoItem[]) {
    state.todoList = data;
  }
}

export const actions = {
  add(state: TodoList, item: TodoItem) {
    state.todoList = [...state.todoList, item];
  },
  remove(state: TodoList, item: TodoItem) {
    state.todoList.filter((todoItem) => todoItem.key !== item.key)
  }
}