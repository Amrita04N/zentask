import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTasks,
  addTaskAPI,
  deleteTaskAPI,
  toggleTaskAPI,
} from "./tasksAPI";

export const getTasks = createAsyncThunk(
  "tasks/get",
  fetchTasks
);

export const addTask = createAsyncThunk(
  "tasks/add",
  addTaskAPI
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  deleteTaskAPI
);

export const toggleTask = createAsyncThunk(
  "tasks/toggle",
  toggleTaskAPI
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "all",
    searchText: "",
    theme: "dark",
    status: "idle",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter(t => t.id !== action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.list.findIndex(t => t.id === action.payload.id);
        state.list[index] = action.payload;
      });
  },
});

export const {
  setFilter,
  setSearchText,
  toggleTheme,
} = tasksSlice.actions;

export default tasksSlice.reducer;
