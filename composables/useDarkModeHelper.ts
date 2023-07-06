import { defineStore } from 'pinia';

/**
 * @name useDarkModeHelper
 * @description
 * この関数は、darkModeHelperという名前のStoreを返します。
 * このStoreは、darkModeという変数と、toggleDarkModeという関数を持っています。
 * darkModeは、現在のダークモードの状態を保持します。
 * toggleDarkModeは、ダークモードの状態を反転させます。
 */
export const useDarkModeHelper = defineStore('darkModeHelper', {
  state: () => {
    return {
      darkMode: false,
    };
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    },
    init() {
      if (process.client) {
        this.darkMode = isDarkMode();
      }
    },
  },
});

const isDarkMode = (): boolean => {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
};
