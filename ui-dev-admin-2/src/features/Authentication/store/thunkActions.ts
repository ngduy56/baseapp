import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from 'api/axiosClient';
import { LoginRequest } from 'features/Authentication/types';

export const getLoginInformation = createAsyncThunk(
  'auth/login',
  async ({
    userNameOrEmailAddress,
    password,
    rememberClients,
  }: LoginRequest) => {
    try {
      const res = await axiosClient.post('/api/TokenAuth/Authenticate', {
        userNameOrEmailAddress,
        password,
        rememberClients,
      });
      return res.data.result;
    } catch (error) {
      throw new Error(String(error));
    }
  }
);

export const getCurrentUser = createAsyncThunk('auth/userInfo', async () => {
  try {
    const res = await axiosClient.get(
      '/api/services/app/Session/GetCurrentLoginInformations'
    );
    return res.data.result.user;
  } catch (error) {
    throw new Error(String(error));
  }
});
