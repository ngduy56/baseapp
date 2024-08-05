import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from 'api/axiosClient';
import { Task } from '../types';

export const getAllTasks = createAsyncThunk('tasks/getAll', async () => {
  try {
    const res = await axiosClient.get('/api/services/app/Task/GetAll');
    return res;
  } catch (errors) {
    throw new Error(String(errors));
  }
});

export const saveTask = createAsyncThunk(
  'tasks/save',
  async ({ id, name, type, isDeleted }: Task) => {
    try {
      const res = await axiosClient.post('/api/services/app/Task/Save', {
        id,
        name,
        type,
        isDeleted,
      });
      return res;
    } catch (errors) {
      throw new Error(String(errors));
    }
  }
);

export const archiveTask = createAsyncThunk(
  'tasks/archive',
  async (id: number) => {
    try {
      const res = await axiosClient.delete(`/api/services/app/Task/Archive`, {
        params: { id },
      });
      return res;
    } catch (errors) {
      throw new Error(String(errors));
    }
  }
);

export const deArchiveTask = createAsyncThunk(
  'tasks/deArchive',
  async (id: number) => {
    try {
      const res = await axiosClient.post('/api/services/app/Task/DeArchive', {
        id,
      });
      return id;
    } catch (errors) {
      throw new Error(String(errors));
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id: number) => {
    try {
      const res = await axiosClient.delete('/api/services/app/Task/Delete', {
        params: { id },
      });
      return res;
    } catch (errors) {
      throw new Error(String(errors));
    }
  }
);
