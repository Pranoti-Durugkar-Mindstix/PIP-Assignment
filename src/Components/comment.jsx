import React from 'react';
import { Avatar, Grid, Paper, Box } from '@mui/material';
import PropTypes from 'prop-types';


function Comment ({ comment }) {
  return (
    <Box sx={{ justifyContent: 'center' }}>
      <Paper elevation={5} sx={{ width: '600px',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        mt:'20px' }}>
        <Grid container>
          <Grid xs={1}>
            ++
          </Grid>
          <Grid xs={11}>
            <Box sx={{ mb: '10px' }}>
              <Avatar />
            </Box>
            <Box>
              {comment}
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