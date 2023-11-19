import {configureStore} from '@reduxjs/toolkit';

import settingsReducer from './slices/settingsSlice';

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
