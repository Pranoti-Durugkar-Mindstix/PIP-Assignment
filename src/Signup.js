
// import { GoogleLogin } from '@react-oauth/google';
// import { Box } from '@mui/material';

// function Signup() {

//     const responseMessage = (response) => {
//         console.log(response, 'message');
//     };
//     const errorMessage = (error) => {
//         console.log(error, 'error');
//     };

//     return(
        
//         <Box sx={{mt:'200px'}}>
//             <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
//         </Box>
    
//     )
// }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function Copyright (props) {
  return (
    <Typography variant='body2' color='text.secondary'
      align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href=''>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Signup () {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const responseMessage = (response) => {
    console.log(response, 'message');
    navigate('/home');
  };

  const errorMessage = (error) => {
    console.log(error, 'error');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1,
            bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email' />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password' />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me' />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3,
                mb: 2 }}>
              Sign In
            </Button>
            <Typography sx={{ display: 'flex',
              justifyContent: 'center',
              mb:'10px' }}>OR</Typography>
            <GoogleLogin sx={{ display: 'flex',
              justifyContent: 'center',
              mb:'10px' }}
              clientId={clientId}
              onSuccess={responseMessage}
              onError={errorMessage}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true} />
            <Grid container sx={{ mt: '15px' }}>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='' variant='body2'>
                  {'Don\'t have an account? Sign Up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8,
          mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Signup;