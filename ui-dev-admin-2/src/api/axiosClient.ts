import axios from 'axios';
import { getAccessToken } from 'utils/storage';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getAccessToken();
  const authorizationString = `Bearer ${accessToken}`;
  request.headers && (request.headers['Authorization'] = authorizationString);
  return request;
});

export default axiosClient;
