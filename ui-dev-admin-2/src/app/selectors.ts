import { RootState } from 'app/store';
import { SnackbarAlertType } from 'common/components/SnackbarAlert';
import { Task } from 'features/TaskManager/types';

export const accessTokenSelector = (state: RootState) =>
  state.loginReducer.accessToken;

export const userInformation = (state: RootState) => state.loginReducer.user;

export const getLoginAlertInformation = (
  state: RootState
): Partial<SnackbarAlertType> => ({
  isError: state.loginReducer.isError,
  errorMessage: state.loginReducer.errorMessage,
});

export const getTaskList = (state: RootState) =>
  state.taskManagerReducer.taskList;
export const getAllTasks = (state: RootState) =>
  state.taskManagerReducer.allTasks;

export const getTaskAlertInformation = (
  state: RootState
): SnackbarAlertType => ({
  isSuccess: state.taskManagerReducer.isSuccess,
  successMessage: state.taskManagerReducer.successMessage,
  isError: state.taskManagerReducer.isError,
  errorMessage: state.taskManagerReducer.errorMessage,
});

export const getTaskEdit = (state: RootState): Task =>
  state.taskManagerReducer.taskEdit;
