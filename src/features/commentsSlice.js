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
      const index = state.data.findIndex(
        (item) => item.id === action.payload,
      );
      state.data[index].value += 1;
    },
    decrement: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload,
      );
      state.data[index].value -= 1;
    },
    addReply: (state, action) => {
      const newReply = {
        id: action.payload.id,
        data: action.payload.comment,
        value: action.payload.value,
        parent_id: action.payload.id
      };
      state.data.push(newReply);
    }
  }
});

export const { addComment, increment, decrement, addReply } = commentSlice.actions;

export default commentSlice.reducer;
