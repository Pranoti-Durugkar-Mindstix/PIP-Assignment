import React, { useState } from 'react';
import { Avatar, Grid, Box, Button, Stack, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AddSharpIcon from '@mui/icons-material/Add';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { increment, decrement, deleteComment } from '../features/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './commentForm';
import styles from './comment.style.js';
import map from 'lodash/map';


function Comment ({ comment, counterValue, id, setId, value, time }) {
  
  const [isReplying, setIsReplying] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const replyComments = useSelector((state) => state.comments.replyData);

  const handleClickUpvote = () => {
    dispatch(increment(id));
  };

  const handleClickDownvote = () => {
    dispatch(decrement(id));
  };

  const handleDeleteComment = () => {
    dispatch(deleteComment(id));
  };

  const user =false;
  return (
    <Box sx={{ justifyContent: 'center',
      // display: 'flex',
      alignItems: 'center' }}>
      <Box>
        <Box sx={styles.boxContainer}>
          <Grid container>
            <Grid item xs={1}>
              <Stack direction={'column'}>
                <IconButton size='small' sx={{
                  backgroundColor: '#e6e6ff',
                  width: '30px',
                  borderRadius: '0'
                }}
                  onClick={handleClickUpvote}>
                  <AddSharpIcon sx={{
                    padding: '0',
                    color: '#645CBB'
                  }} />
                </IconButton>
                <Typography sx={{
                  width: '30px',
                  display: 'flex',
                  backgroundColor: '#e6e6ff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '550',
                  color: '#645CBB'
                }}>{counterValue}</Typography>
                <IconButton size='small' sx={{
                  backgroundColor: '#e6e6ff',
                  width: '30px',
                  borderRadius: '0'
                }}
                  onClick={handleClickDownvote}>
                  <HorizontalRuleSharpIcon sx={{
                    padding: '0',
                    color: '#645CBB'
                  }} />
                </IconButton>
              </Stack>
            </Grid>
            <Grid xs={11}>
              <Box sx={{ paddingLeft: '5px' }}>
                <Box sx={{ mb: '10px' }}>
                  <Stack direction={'row'} display={'flex'}
                    justifyContent={'space-between'}>
                    <Stack direction={'row'} display={'flex'}
                      justifyContent={'center'}><Avatar alt='Remy Sharp' src='../Assets/profile pic.jfif' />
                      <Typography sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        ml: '10px',
                        fontWeight: '700'
                      }} variant='subtitle1'> juiliusomo</Typography> <Typography sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        ml: '10px',
                        
                      }}> {time}</Typography></Stack>
                    <Stack direction={'row'} display={'flex'}
                      justifyContent={'space-between'}>
                      {user ? <Button startIcon={<DeleteIcon />}
                        onClick={handleDeleteComment}
                      // active={isReplying}
                        sx={{
                          display: 'flex',
                          alignItems: 'right',
                          color: 'red',
                          textTransform: 'none',
                          fontWeight: '600'
                        }}> Delete </Button> : ''}
                      <Button startIcon={user? <ModeEditOutlineIcon /> : <ReplyIcon />}
                        onClick={user ? () => setIsEditMode((prev) => !prev) : () => setIsReplying((prev) => !prev)}
                        active={user ? isEditMode : isReplying}
                        sx={{
                          color: '#645CBB',
                          textTransform: 'none',
                          fontWeight: '600'
                        }}> {user ? 'Edit' : 'Reply'}</Button>
                    </Stack>
                  </Stack>
                </Box>
                <Stack sx={{ ml: '5px' }}>
                  <Typography sx={{
                    color: '#808080',
                    width: '510px'
                  }}>{comment}</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box >
        {isReplying && <CommentForm isReplying={isReplying} setIsReplying={setIsReplying}
          parentId={id} setId={setId}
          value={value} />}
        {isEditMode && <CommentForm isEditMode={isEditMode} setIsEditMode={setIsEditMode}
          commentText={comment} id={id} />}
      </Box>
      <Box sx={styles.replyContainer}>
        {replyComments.length > 0 && map(replyComments.filter((comment) => comment.parent_id === id ), (comment) => (
          <Comment comment={comment.data} key={comment.id+1}
            id={comment.id} counterValue={comment.value}
            value={value} />
        ))}
      </Box>
    </Box>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
  counterValue: PropTypes.number,
  id: PropTypes.number,
  setId: PropTypes.func,
  value: PropTypes.number,
  time: PropTypes.number
};

Comment.defaultProps = {
  comment: {},
  counterValue: 0,
  id: 0,
  setId: () => {},
  value: 0,
  time: 0
};
export default Comment;