import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  currentPage: 1,
  totalPages: 1,
};

const todoslice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    allTodos: (state, action) => {
      state.todos = action.payload.todos;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },
    todoAdd(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    toggleComplete(state, action) {
      const todoToToggle = state.todos.find(
        (todo) => todo._id === action.payload
      );
      if (todoToToggle) {
        todoToToggle.complete = !todoToToggle.complete;
      }
    },
  },
});

export const { todoAdd, removeTodo, toggleComplete, allTodos } =
  todoslice.actions;
export default todoslice.reducer;
