import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homePageReducer from './homepage/homePageSlice';

const store = configureStore({
  reducer: {
    home: homePageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
