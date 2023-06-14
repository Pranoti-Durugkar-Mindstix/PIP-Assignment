/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FormControl, TextareaAutosize, Grid, Button, Paper, Avatar, Box } from '@mui/material';
import Header from '../common/header';
import { useDispatch } from 'react-redux';
import { addComment, addReply, editComment } from '../features/commentsSlice';
import PropTypes from 'prop-types';
import styles from './commentForm.style';
// import { useAddCommentMutation } from '../services/commentsApi';

function CommentForm ({ value, id, setId, isReplying, setIsReplying, parentId, setIsEditMode, isEditMode }) {
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
        parent_id: parentId,
        value: value,
        id: setId(parentId+1)
      }));
      
      setIsReplying(false);
    } else if (isEditMode) {
      dispatch(editComment({
        id: id,
        comment: text
      }));
      setIsEditMode(false);
    } else {
      dispatch(addComment({
        comment: text,
        id: id,
        value: value
      }));
      setId(id+1);
    }
    setText('');
  };
 
  return (
    <>{!isReplying && !isEditMode ? <Header /> : ''}
      <Box>
        <Paper elevation={6} sx={isReplying || isEditMode ? styles.paperStyleReply : styles.paperStyle }>
          <Grid container>
            <Grid xs={1}>
              <Avatar sx={{ mr: '4px' }} />
            </Grid>
            <Grid xs={10}>
              <FormControl>
                <TextareaAutosize style={isReplying || isEditMode? styles.textAreaStyleReply: styles.textAreaStyle }
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
              <Button active={isReplying || isEditMode}
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
  isReplying: PropTypes.bool,
  setIsReplying: PropTypes.func,
  parentId: PropTypes.number,
  setIsEditMode: PropTypes.func,
  isEditMode: PropTypes.bool
};

Comment.defaultProps = {
  id: 0,
  value: 0,
  setId: () => {},
  isReplying: false,
  setIsReplying: () => {},
  parentId: 0,
  setEditMode: () => {},
  isEditMode: false
};

export default CommentForm ;