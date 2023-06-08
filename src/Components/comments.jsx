import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Header from './header';
import Comment from './comment';
import CommentForm from './commentForm';


function Comments () {
  const [backendComments, setBackendComments] = useState([]);
  const [history, setHistory] = useState([]) || [];

  const addComment = (input) => {
    const hist = JSON.parse(localStorage.getItem('history')) || [];
    console.log(hist);
    hist.push(input);
    localStorage.setItem('history', JSON.stringify(hist));
    setHistory(hist);
    setBackendComments(hist);
  };

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('history')));
    setBackendComments(history);
    console.log(history);
  }, []);

  return (
    <Box>
      <Header />
      <CommentForm handleSubmit={addComment} />
      <Box sx={{ mt: '100px',
        justifyContent: 'center',
        ml: '390px' } }>
        {backendComments.map((comments) => (
          <Comment comment={comments} key={comments.id} />
        ))}
      </Box>
    </Box>
  );
}

export default Comments;