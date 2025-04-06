import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: 'en',
  }),
  getters: {
    getLang: (state) => {
      return state.language;
    },
  },
  actions: {
    setLanguage(newLanguage:'en' | 'es') {
      this.language = newLanguage;
    },
  },
});
