import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: JSON.parse(localStorage.getItem("todo")) || [],

};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
      localStorage.setItem("todo", JSON.stringify(state.todo))
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(
        (listItem) => listItem.id !== action.payload
      );
      localStorage.setItem("todo",JSON.stringify(state.todo) )
    },
    deleteAll:(state)=>{
      state.todo = [];
      localStorage.removeItem("todo")
    }
  },
});

export const { addTodo, deleteTodo, deleteAll } = todoSlice.actions;

export default todoSlice.reducer;
