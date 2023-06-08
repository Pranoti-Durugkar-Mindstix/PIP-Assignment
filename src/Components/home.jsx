import React from 'react';
import { Box, Typography, Container, Grid, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Python from '../Assets/python.svg';
import Java from '../Assets/java.svg';
import Javascript from '../Assets/js.svg';
import { useNavigate } from 'react-router-dom';
import Header from './header';

function Topic () {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/comments');
  };

  return (
    <><Header /><Box>
      <Container maxWidth='200px'>
        <Grid
          container
          spacing={3}
          sx={{
            m: '200px 30px 0px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={handleClick}>
                <CardMedia
                  component='img'
                  height='250'
                  image={Java}
                  alt='green iguana' />
                <CardContent>
                  <Typography gutterBottom variant='h5'
                    component='div'>
                    Java
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                    deserunt nobis suscipit eaque?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={handleClick}>
                <CardMedia
                  component='img'
                  height='250'
                  image={Javascript}
                  alt='green iguana' />
                <CardContent>
                  <Typography gutterBottom variant='h5'
                    component='div'>
                    Javascript
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                    deserunt nobis suscipit eaque?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={handleClick}>
                <CardMedia
                  component='img'
                  height='250'
                  image={Python}
                  alt='green iguana' />
                <CardContent>
                  <Typography gutterBottom variant='h5'
                    component='div'>
                    Python
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                    deserunt nobis suscipit eaque?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box></>
  );
}

export default Topic;
