import { createSlice } from '@reduxjs/toolkit';
import { Task, TaskManagerState } from '../types';
import {
  getAllTasks,
  saveTask,
  archiveTask,
  deArchiveTask,
  deleteTask,
} from './thunkActions';

const taskInit: Task = {
  id: -1,
  name: '',
  type: 0,
  isDeleted: false,
};

const initialState: TaskManagerState = {
  taskList: [],
  isSuccess: false,
  successMessage: '',
  isError: false,
  errorMessage: '',
  taskEdit: taskInit,
  allTasks: [],
};

const taskManagerSlice = createSlice({
  name: 'taskManager',
  initialState,
  reducers: {
    removeAlert: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.successMessage = '';
      state.errorMessage = '';
    },
    editTask: (state, { payload }) => {
      let task = state.taskList.find((task) => task.id === payload);
      if (task) {
        state.taskEdit = task;
      }
    },
    resetTaskEdit: (state) => {
      state.taskEdit = taskInit;
    },
    searchTask: (state, { payload }) => {
      state.taskList = state.allTasks.filter((task) =>
        task.name.startsWith(payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
      state.allTasks = payload.data.result;
      state.taskList = state.allTasks;
    });
    builder
      .addCase(saveTask.fulfilled, (state, { payload }) => {
        let index = state.taskList.findIndex(
          (task) => task.id === payload.data.result.id
        );
        if (index > -1) {
          state.taskList.splice(index, 1, payload.data.result);
          state.allTasks.splice(index, 1, payload.data.result);
        } else {
          state.taskList.push(payload.data.result);
          state.allTasks.push(payload.data.result);
        }
        state.isSuccess = true;
        state.successMessage = `Create Task: ${payload.data.result.name}`;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(saveTask.rejected, (state, payload) => {
        state.isSuccess = false;
        state.successMessage = '';
        state.isError = true;
        state.errorMessage = `Task ${payload.meta.arg.name} is already exists`;
      });
    builder
      .addCase(archiveTask.fulfilled, (state, { payload }) => {
        let taskName;
        state.taskList.forEach((task) => {
          if (task.id === payload.config.params.id) {
            task.isDeleted = true;
            taskName = task.name;
          }
        });
        state.allTasks = state.taskList;
        state.isSuccess = true;
        state.successMessage = `Archive task: ${taskName}`;
      })
      .addCase(archiveTask.rejected, (state, payload) => {
        let taskName = state.taskList.find(
          (task) => task.id === payload.meta.arg
        )?.name;
        state.isError = true;
        state.errorMessage = `Task ${taskName} is in a project, you can't delete task`;
      });
    builder.addCase(deArchiveTask.fulfilled, (state, { payload }) => {
      let taskName;
      state.taskList.forEach((task) => {
        if (task.id === payload) {
          task.isDeleted = false;
          taskName = task.name;
        }
      });
      state.allTasks = state.taskList;
      state.isSuccess = true;
      state.successMessage = `Unarchive task: ${taskName}`;
    });
    builder
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        let taskName = state.taskList.find(
          (task) => task.id === payload.config.params.id
        )?.name;
        state.taskList = state.taskList.filter(
          (task) => task.id !== payload.config.params.id
        );
        state.allTasks = state.taskList;
        state.isSuccess = true;
        state.successMessage = `Delete task: ${taskName}`;
      })
      .addCase(deleteTask.rejected, (state, payload) => {
        let taskName = state.taskList.find(
          (task) => task.id === payload.meta.arg
        )?.name;
        state.isError = true;
        state.errorMessage = `Task ${taskName} is in a project, you can't delete task`;
      });
  },
});

const { reducer: taskManagerReducer } = taskManagerSlice;

export const { removeAlert, editTask, resetTaskEdit, searchTask } =
  taskManagerSlice.actions;

export default taskManagerReducer;
