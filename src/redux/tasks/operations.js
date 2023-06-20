import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as apiOperations from 'helpers/api/tasksRequests';

export const fetchMonthTasks = createAsyncThunk(
  'tasks/fetchMonthTasks',
  async (monthNumber, thunkAPI) => {
    try {
      const data = await apiOperations.getTasksForOneMonth(monthNumber);
      const sortedTasks = data.sort((task1, task2) =>
        task1.priority.localeCompare(task2.priority)
      );
      return sortedTasks;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask, thunkAPI) => {
    try {
      const { _id, ...data } = updatedTask;
      const res = await axios.patch(`/tasks/${_id}`, data);
      return { ...res.data.data, _id: _id };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', task);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
