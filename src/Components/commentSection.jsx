import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../common/header';
import Comment from './comment';
import CommentForm from './commentForm';
import { useSelector } from 'react-redux';
import map from 'lodash/map';
// import { decrement, increment } from '../features/commentsSlice';
// import { useCommentsQuery } from '../services/commentsApi';
// import isEmpty from 'lodash/isEmpty';

function Comments () {
  const [value, setValue] = useState(0);
  // const { data, error, isLoading, isSuccess } = useCommentsQuery();
  const [id, setId] = useState(0);
  // const [currentId, setCurrentId] = useState();
  const comments = useSelector((state) => state.comments.data);
 
  return (
    <Box>
      <Header />
      <Box sx={{ mt: '80px',
        justifyContent: 'center',
        ml: '390px',
        mb: '150px' } }>
        <Typography variant='h6' color={'#645CBB'}> Comments </Typography>
        <Box>
          {/* {error && <p>An error occured</p>}
          {isLoading && <p>Loading...</p>} */}
          {map(comments, (comments) => (
            <Comment comment={comments.data} key={comments.id}
              id={comments.id} setId={setId}
              counterValue={comments.value} />
          ))}
        </Box>
      </Box>
      <CommentForm value={value} setValue={setValue}
        id={id} setId={setId} />
    </Box>
  );
}

export default Comments;