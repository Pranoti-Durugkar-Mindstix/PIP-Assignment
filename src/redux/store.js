import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../features/commentsSlice';
// import { commentsApi } from '../services/commentsApi';

export default configureStore({
  reducer: {
    // [commentsApi.reducerPath]: commentsApi.reducer
    comments: commentReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(commentsApi.middleware)
});