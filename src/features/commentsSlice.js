import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: new Date(),
        name: action.payload.comment
      };
      state.push(newComment);
    }
  }
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
