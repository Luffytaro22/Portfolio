import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setNotice, setError, clearNoticeAndError } from "../../notice_alert/noticeAlertSlice";

const sendContact = createAsyncThunk('contact/sendContact', async (data, { dispatch }) => {
  return await axios.post('https://formspree.io/f/xrgwwlro', data)
    .then((response) => {
      dispatch(clearNoticeAndError());
      dispatch(setNotice('Information sended'));
      return response.data;
    })
    .catch((error) => {
      dispatch(clearNoticeAndError());
      dispatch(setError('Something went wrong!'));
      return error;
    });
});

export default sendContact;
