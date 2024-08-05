import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const projectManagerSlice = createSlice({
  name: 'projectManager',
  initialState,
  reducers: {},
});

const { reducer: projectManagerReducer } = projectManagerSlice;

export default projectManagerReducer;
