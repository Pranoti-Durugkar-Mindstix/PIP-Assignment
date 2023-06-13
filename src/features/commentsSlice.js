import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: action.payload.id,
        data: action.payload.comment,
        value: action.payload.value,
      };
      state.data.push( newComment);
    },
    increment: (state, action) => {
      // action.payload.id
      const index = state.data.findIndex(
        (item) => item.id === action.payload,
      );
      state.data[index].value += 1;
    },
    decrement: (state, action) => {
      // action.payload.value - 1;
      const index = state.data.findIndex(
        (item) => item.id === action.payload,
      );
      state.data[index].value -= 1;
    }
  }
});

export const { addComment, increment, decrement } = commentSlice.actions;

export default commentSlice.reducer;
