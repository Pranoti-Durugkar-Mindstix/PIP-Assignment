/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FormControl, TextareaAutosize, Grid, Button, Paper, Avatar } from '@mui/material';
import Header from '../common/header';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/commentsSlice';
import PropTypes from 'prop-types';
// import { useAddCommentMutation } from '../services/commentsApi';

function CommentForm ({ value, id, setId }) {
  const [text, setText] = useState('');
  // const [addComment] = useAddCommentMutation();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert('Add comment before submitting');
      setText('');
      return;
    }
    dispatch(addComment({
      comment: text,
      id: id,
      value: value
    }));
    setId(id+1);
    // const comment = {
    //   text,
    //   value: setValue(value),
    //   id: setId(id + 1)
    // };
    // await addComment(comment);
    setText('');
  };
 
  return (
    <><Header />
      <Paper elevation={6} sx={{ width: '600px',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ml: '25%',
        bottom : '0px',
        // right: '0px',
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
                maxLength={250}
                value={text}
                placeholder='Add a comment'
                onChange={(e) => setText(e.target.value) }
                // floatingLabelText='MultiLine and FloatingLabel'
                minRows={5}
                maxRows={7} />
            </FormControl>
          </Grid>
          <Grid xs={1}>
            <Button sx={{ backgroundColor: '#645CBB',
              color: 'white' }} onClick={(e) => {
                handleClick(e);
              } }>
              SEND
            </Button>
          </Grid>
        </Grid>
      </Paper></>
  );
}

Comment.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
  setId: PropTypes.func
};

Comment.defaultProps = {
  id: 0,
  value: 0,
  setId: () => {}
};

export default CommentForm ;