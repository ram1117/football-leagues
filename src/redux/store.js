import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import homePageReducer from './homepage/homePageSlice';
import detailReducer from './detailpage/detailSlice';

const store = configureStore({
  reducer: {
    home: homePageReducer,
    detail: detailReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
