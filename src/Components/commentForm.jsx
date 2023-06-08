import React, { useState } from 'react';
import { FormControl, TextareaAutosize, Grid, Button, Paper, Avatar } from '@mui/material';
import Header from './header';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/commentsSlice';

function CommentForm () {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert('Add comment before submitting');
      setText('');
      return;
    }
    dispatch(
      addComment({
        comment: text
      })
    );
    setText('');
  };

  return (
    <><Header />
      <Paper elevation={6} sx={{ width: '600px',
        display: 'flex',
        justifyContent: 'center',
        mt: '100px',
        ml: '25%',
        padding: '30px' }}>
        <Grid container>
          <Grid xs={1}>
            <Avatar sx={{ mr: '4px' }} />
          </Grid>
          <Grid xs={10}>
            <FormControl>
              <TextareaAutosize style={{ textAlign: 'left',
                borderColor: 'gray',
                width: '480px',
                display: 'flex',
                justifyContent: 'center' }}
                hintText='Message Field'
                maxLength={50}
                value={text}
                placeholder='Add a comment'
                onChange={(e) => setText(e.target.value) }
                // floatingLabelText='MultiLine and FloatingLabel'
                minRows={5}
                maxRows={7} />
            </FormControl>
          </Grid>
          <Grid xs={1}>
            <Button
              variant='contained' onClick={(e) => {
                handleClick(e);
              } }>
              SEND
            </Button>
          </Grid>
        </Grid>
      </Paper></>
  );
}

export default CommentForm ;