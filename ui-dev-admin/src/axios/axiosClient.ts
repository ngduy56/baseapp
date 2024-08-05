/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessToken } from '@/utils';
import axios, { AxiosResponse } from 'axios';
import Http from './Http';

export const HEADER_DEFAULT = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const defaultConfig = (headers: any) => ({
  baseURL: '',
  headers: { ...headers },
});

const getCredentialWithAccessToken = (config: any = {}) => {
  const accessToken = getAccessToken();
  if (!accessToken) return config;
  return {
    ...config,
    headers: {
      ...(config.headers || {}),
      Authorization: 'Bearer ' + accessToken,
    },
  };
};

const configInterceptors = (axiosClient: any) => {
  axiosClient.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (res: any) => Promise.reject(res?.response?.data?.errors || { status: res?.response?.status })
  );
  return axiosClient;
};

const axiosClient = configInterceptors(axios.create(defaultConfig(HEADER_DEFAULT)));

export const ApiClientWithToken = new Http(axiosClient, getCredentialWithAccessToken);

// interceptors authentication
const loginConfigInterceptors = (axiosClient: any) => {
  axiosClient.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (res: any) => Promise.reject(res.response.data)
  );
  return axiosClient;
};

export const LoginClient = loginConfigInterceptors(axios.create(defaultConfig(HEADER_DEFAULT)));

export default axiosClient;
