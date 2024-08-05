import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, LoginState } from 'features/Authentication/types';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from 'utils/storage';
import {
  getCurrentUser,
  getLoginInformation,
} from 'features/Authentication/store/thunkActions';

const initialState: LoginState = {
  accessToken: getAccessToken(),
  user: {
    id: 0,
    name: '',
    surname: '',
    userName: '',
    emailAddress: '',
    avatarPath: '',
  },
  isError: false,
  errorMessage: '',
};

const loginSlice = createSlice({
  name: 'auth/login',
  initialState,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      Object.assign(state, initialState);
      state.accessToken = null;
    },
    removeAlert: (state) => {
      state.isError = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginInformation.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        setAccessToken(payload.accessToken as string);
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(getLoginInformation.rejected, (state) => {
        state.isError = true;
        state.errorMessage = 'Username or password incorrect';
      });
    builder
      .addCase(
        getCurrentUser.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user.id = payload.id;
          state.user.name = payload.name;
          state.user.surname = payload.surname;
          state.user.userName = payload.userName;
          state.user.emailAddress = payload.emailAddress;
          state.user.avatarPath = payload.avatarPath;
          state.isError = false;
          state.errorMessage = '';
        }
      )
      .addCase(getCurrentUser.rejected, (state) => {
        state.isError = true;
        state.errorMessage = 'Error';
      });
  },
});

const { reducer: loginReducer } = loginSlice;
const { logout, removeAlert } = loginSlice.actions;

export default loginReducer;
export { logout, removeAlert };
