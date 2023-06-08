import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../features/commentsSlice';

export default configureStore({
  reducer: {
    comments: commentReducer,
  }
});