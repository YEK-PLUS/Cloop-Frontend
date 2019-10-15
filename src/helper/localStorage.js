export const setLocalStorage = (key, value) => (typeof window !== 'undefined' ? localStorage.setItem(key, value) : null);
export const getLocalStorage = (key) => (typeof window !== 'undefined' ? localStorage.getItem(key) : null);
export const delLocalStorage = (key) => (typeof window !== 'undefined' ? localStorage.removeItem(key) : null);
