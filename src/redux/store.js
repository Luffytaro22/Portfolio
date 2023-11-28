import { configureStore } from "@reduxjs/toolkit";
import worksReducer from './works/WorksSlice';
import NoticeAlertReducer from './notice_alert/noticeAlertSlice';

const store = configureStore({
  reducer: {
    works: worksReducer,
    noticeAlert: NoticeAlertReducer,
  }
});

export default store;
