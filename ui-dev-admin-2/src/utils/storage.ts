const ACCESS_TOKEN_KEY: string = 'access_token';

export const setAccessToken = (value: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, value);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN_KEY);
