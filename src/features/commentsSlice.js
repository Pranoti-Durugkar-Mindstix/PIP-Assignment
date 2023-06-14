import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  replyData: [],
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
        parent_id: action.payload.parent_id
      };
      state.replyData.push(newReply);
    },
    deleteComment: (state, action) => {
      state.data = state.data.filter((comment) => comment.id !== action.payload);
    },
    editComment: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.data[index].data = action.payload.comment;
    }
  }
});

export const { addComment, increment, decrement, addReply, deleteComment, editComment } = commentSlice.actions;

export default commentSlice.reducer;
