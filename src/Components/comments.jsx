import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './header';
import Comment from './comment';
import CommentForm from './commentForm';
import { useSelector } from 'react-redux';

function Comments () {

  const comments = useSelector((state) => state.comments);

  return (
    <Box>
      <Header />
      <CommentForm />
      <Box sx={{ mt: '50px',
        justifyContent: 'center',
        ml: '390px' } }>
        <Typography variant='h6' color={'#1976D2'}> Comments </Typography>
        {comments.map((comments) => (
          <Comment comment={comments.name} key={comments.id} />
        ))}
      </Box>
    </Box>
  );
}

export default Comments;