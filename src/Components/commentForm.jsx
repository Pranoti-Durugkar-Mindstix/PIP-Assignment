/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FormControl, TextareaAutosize, Grid, Button, Paper, Avatar, Box } from '@mui/material';
import Header from '../common/header';
import { useDispatch } from 'react-redux';
import { addComment, addReply } from '../features/commentsSlice';
import PropTypes from 'prop-types';
import styles from './commentForm.style';
// import { useAddCommentMutation } from '../services/commentsApi';

function CommentForm ({ value, id, setId, isReplying, setIsReplying, parenId }) {
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
    if (isReplying) {
      // setId(id+1);
      dispatch(addReply({
        comment: text,
        parent_id: parenId,
        value: value,
        id: id
      }));
    } else {
      dispatch(addComment({
        comment: text,
        id: id,
        value: value
      }));
      setId(id+1);
    }
    setIsReplying(false);
    setText('');
  };
 
  return (
    <><Header />
      <Box>
        <Paper elevation={6} sx={isReplying ? styles.paperStyleReply : styles.paperStyle }>
          <Grid container>
            <Grid xs={1}>
              <Avatar sx={{ mr: '4px' }} />
            </Grid>
            <Grid xs={10}>
              <FormControl>
                <TextareaAutosize style={isReplying? styles.textAreaStyleReply: styles.textAreaStyle }
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
              <Button active={isReplying}
                sx={{ backgroundColor: '#645CBB',
                  color: 'white' }} onClick={(e) => {
                    handleClick(e);
                  } }>
                SEND
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

Comment.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
  setId: PropTypes.func,
  isReplying: PropTypes.boolean,
  setIsReplying: PropTypes.func,
  parenId: PropTypes.number
};

Comment.defaultProps = {
  id: 0,
  value: 0,
  setId: () => {},
  isReplying: false,
  setIsReplying: () => {},
  parenId: 0,
};

export default CommentForm ;