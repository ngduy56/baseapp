import { ACCESS_TOKEN } from '@/constants';

const setAccessToken = (language: string) => {
  localStorage.setItem(ACCESS_TOKEN, language);
};

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export { setAccessToken, getAccessToken, removeAccessToken };
