import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import styles from './header.style';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Header () {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ['Profile', 'Logout'];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSuccess = () => {
    navigate('/');
  };

  return (
    <AppBar sx={{ backgroundColor: '#645CBB' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters variant='dense'>
          <AdbIcon sx={{ display: { xs: 'none',
            md: 'flex' },
          mr: 1 }} />
          <Box sx={styles.appbarWrapper}>
            <Typography>COMMENTS APP</Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='../Assets/java.svg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center' >{setting === 'Logout' ? <GoogleLogout buttonText='logout' clientId={clientId}
                    onLogoutSuccess={onSuccess} /> : setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
