export class LocalStorageService {
  persist = async (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  fetch = async (key: string) => {
    const item = localStorage.getItem(key);
    return item;
  };
  remove = async (key: string) => {
    localStorage.removeItem(key);
  };
}
