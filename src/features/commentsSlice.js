import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  data: [],
  replyData: [],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: state.id += 1,
        data: action.payload.comment,
        value: action.payload.value,
      };
      state.data.push( newComment);
      addComment(newComment);
    },
    increment: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload,
      );
      if (index > -1) {
        state.data[index].value += 1;
        return;
      }
      const index1 = state.replyData.findIndex(
        (item) => item.id === action.payload,
      );
      state.replyData[index1].value += 1;
    },
    decrement: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload,
      );
      if (index > -1) {
        state.data[index].value -= 1;
        return;
      }
      const index1 = state.replyData.findIndex(
        (item) => item.id === action.payload,
      );
      state.replyData[index1].value -= 1;
    },
    addReply: (state, action) => {
      const newReply = {
        id: state.id += 1,
        data: action.payload.comment,
        value: action.payload.value,
        parent_id: action.payload.parent_id
      };
      state.replyData.push(newReply);
    },

    deleteComment: (state, action) => {
      state.data = state.data.filter((comment) => comment.id !== action.payload);
      state.replyData = state.replyData.filter((comment) => comment.id !== action.payload);
    },

    editComment: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index > -1) {
        state.data[index].data = action.payload.comment;
        return;
      }
      const index1 = state.replyData.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.replyData[index1].data = action.payload.comment;
      
    }
  }
});

export const { addComment, increment, decrement, addReply, deleteComment, editComment, deleteReply } = commentSlice.actions;

export default commentSlice.reducer;
