import { createSlice } from "@reduxjs/toolkit";

const tododSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo } = tododSlice.actions;

export default tododSlice.reducer;
