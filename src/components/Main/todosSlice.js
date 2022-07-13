import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoAPI from "../../axios/api";

const todosSlice = createSlice({
    name: "todo list",
    initialState: { status: "idle", todos: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodo.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getTodo.fulfilled, (state, action) => {
                state.status = "idle";
                state.todos = action.payload;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const data = action.payload;
                for (let i = 0; i < state.todos.length; i++) {
                    if (state.todos[i].id === data.id) {
                        state.todos[i] = data;
                    }
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const data = action.payload;
                for (let i = 0; i < state.todos.length; i++) {
                    if (state.todos[i].id === data.id) {
                        state.todos.splice(i, 1);
                    }
                }
            });
    },
});
export default todosSlice;

export const getTodo = createAsyncThunk("todos/getTodo", async () => {
    const todoList = await todoAPI.getTodoList();
    console.log(todoList);
    return todoList;
});

export const addNewTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
    const res = await todoAPI.addTodo(newTodo);
    return res;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
    const res = await todoAPI.updateTodo(todo.data, todo.id);
    console.log(res);
    return res;
});

export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
    const res = await todoAPI.deleteTodo(id);
    console.log(res);
    return res;
});
