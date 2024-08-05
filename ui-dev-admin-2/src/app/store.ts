import { configureStore } from '@reduxjs/toolkit';
import loginReducer from 'features/Authentication/store/loginSlice';
import projectManagerReducer from 'features/ProjectManager/store/projectManagerSlice';
import taskManagerReducer from 'features/TaskManager/store/taskManagerSlice';

const rootReducer = {
  loginReducer,
  projectManagerReducer,
  taskManagerReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
