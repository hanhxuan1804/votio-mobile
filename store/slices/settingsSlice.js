import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setSettings: (state, action) => {
      state.darkMode = action.payload.darkMode;
      state.language = action.payload.language;
    },
  },
});

export const {toggleDarkMode, setLanguage, setSettings} = settingsSlice.actions;
export default settingsSlice.reducer;
