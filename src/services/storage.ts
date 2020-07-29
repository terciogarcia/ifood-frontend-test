export enum StorageKeys {
  ACCESS_TOKEN = 'ACCESS_TOKEN'
}

export const getAccessToken = () => (
  localStorage.getItem(StorageKeys.ACCESS_TOKEN)
);

export const setAccessToken = (token: string) => (
  localStorage.setItem(StorageKeys.ACCESS_TOKEN, token)
);

export const removeAccessToken = () => (
  localStorage.removeItem(StorageKeys.ACCESS_TOKEN)
);
