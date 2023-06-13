import React, { useState } from 'react';
import { Avatar, Grid, Paper, Box, Button, Stack, Typography, IconButton, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import AddSharpIcon from '@mui/icons-material/Add';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import ReplyIcon from '@mui/icons-material/Reply';
import { increment, decrement } from '../features/commentsSlice';
import { useDispatch } from 'react-redux';
import { TextareaAutosize } from '@material-ui/core';


function Comment ({ comment, counterValue, id }) {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState();
  const dispatch = useDispatch();

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleClickUpvote = () => {
    dispatch(increment(id));
  };

  const handleClickDownvote = () => {
    dispatch(decrement(id));
  };

  return (
    <Box sx={{ justifyContent: 'center' }}>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6'
            component='h2' color='#1976D2'
            sx={{ mb: '10px',
              color: '#645CBB' }}>
            Add reply
          </Typography>
          <TextareaAutosize style={{ textAlign: 'left',
            borderColor: 'gray',
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
            mb: '10px' }}
            hintText='Message Field'
            maxLength={50}
            // value={text}
            placeholder='Add a comment'
            // onChange={(e) => setText(e.target.value) }
                // floatingLabelText='MultiLine and FloatingLabel'
            minRows={5}
            maxRows={7} />
          <Button
            sx={{ backgroundColor: '#645CBB',
              color: 'white',
              mt: '10px' }}
            variant='contained'
            // onClick={(e) => {
              // handleClick(e);
            // } }
            >
            SEND
          </Button>
        </Box>
      </Modal>
      <Paper elevation={2} sx={{ width: '630px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: '15px',
        mt:'20px' }}>
        <Grid container>
          <Grid xs={1}>
            <Stack direction={'column'}>
              <IconButton size='small' sx={ { backgroundColor: '#e6e6ff',
                width: '30px',
                borderRadius: '0' }}
                onClick={handleClickUpvote}>
                <AddSharpIcon sx={{ padding: '0',
                  color: '#645CBB' }} />
              </IconButton>
              <Typography sx={{
                width: '30px',
                display: 'flex',
                backgroundColor: '#e6e6ff',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '550',
                color: '#645CBB' }}>{counterValue}</Typography>
              <IconButton size='small' sx={ { backgroundColor: '#e6e6ff',
                width: '30px',
                borderRadius: '0' }}
                onClick={handleClickDownvote}>
                <HorizontalRuleSharpIcon sx={{ padding: '0',
                  color: '#645CBB' }} />
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
                    <Typography sx={{ alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      ml:'10px',
                      fontWeight: '700' }} variant='subtitle1'> juiliusomo</Typography></Stack>
                  <Button startIcon={<ReplyIcon />} onClick={handleOpenModal}
                    sx={{ color: '#645CBB',
                      textTransform: 'none',
                      fontWeight: '600' }}> Reply</Button>
                </Stack>
              </Box>
              <Stack sx={{ ml: '5px' }}>
                <Typography sx={{ color: '#808080',
                  width: '510px' }}>{comment}</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
  counterValue: PropTypes.number,
  id: PropTypes.number,
};

Comment.defaultProps = {
  comment: {},
  counterValue: 0,
  id: 0,
};
export default Comment;