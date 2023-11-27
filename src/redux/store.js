import { configureStore } from "@reduxjs/toolkit";
import worksReducer from './works/WorksSlice';

const store = configureStore({
  reducer: {
    works: worksReducer,
  }
});

export default store;
