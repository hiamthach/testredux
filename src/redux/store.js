import { configureStore } from '@reduxjs/toolkit';
import todosSlice from "../components/Main/todosSlice";

const store = configureStore({
  reducer: {
    todoList: todosSlice.reducer,
  },
});

export default store;