import { configureStore } from "@reduxjs/toolkit";
import worksReducer from './works/WorksSlice';

const store = configureStore({
  works: worksReducer,
});

export default store;
