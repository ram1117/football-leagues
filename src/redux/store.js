import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './homepage/homePageSlice';

const store = configureStore({
  reducer: {
    home: homePageReducer,
  },
});

export default store;
