import React from 'react';
import { Avatar, Grid, Paper, Box, Button, Stack, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import ReplyIcon from '@mui/icons-material/Reply';

function Comment ({ comment }) {
  return (
    <Box sx={{ justifyContent: 'center' }}>
      <Paper elevation={5} sx={{ width: '600px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: '15px',
        mt:'20px' }}>
        <Grid container>
          <Grid xs={1}>
            <Stack direction={'column'}>
              <IconButton variant='outlined'>
                <AddIcon color='blue' />
              </IconButton>
              <Typography sx={{ display: 'flex',
                justifyContent:'center' }}>12</Typography>
              <IconButton variant='outlined'>
                <HorizontalRuleSharpIcon color='blue' />
              </IconButton>
            </Stack>
            
          </Grid>
          <Grid xs={11}>
            <Box sx={{ paddingLeft: '25px' }}>
              <Box sx={{ mb: '10px' }}>
                <Stack direction={'row'} display={'flex'}
                  justifyContent={'space-between'}>
                  <Stack direction={'row'} display={'flex'}
                    justifyContent={'center'}><Avatar alt='Remy Sharp' src='../Assets/profile pic.jfif' />
                    <Typography sx={{ alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      ml:'10px',
                      fontWeight: '700' }} variant='subtitle1'> Robert Downey Jr</Typography></Stack>
                  <Button startIcon={<ReplyIcon />}> Reply</Button>
                </Stack>
                
              </Box>
              <Stack sx={{ ml: '5px' }}>
                <Typography sx={{ fontColor: 'lightGray',
                  width: '300px' }}>{comment}</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    
  );
}

Comment.propTypes = {
  comment: PropTypes.object
};

Comment.defaultProps = {
  comment: {}
};
export default Comment;