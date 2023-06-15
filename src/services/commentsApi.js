import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
  
export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/'
  }),
  endpoints: (builder) => ({
    comments: builder.query({
      query: () => '/comments'
    }),
    addComments: builder.mutation({
      query: (comment) => ({
        url: '/comments',
        method: 'POST',
        body: comment
      })
    }),
  })
});

export const {
  useCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation
} = commentsApi;