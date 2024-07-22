import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Badge, Avatar, Container, Typography, Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import nuraLogoLight from '../assets/nura-logo.svg';
import nuraLogoDark from '../assets/nura-logo-dark.svg';

const Header = ({ toggleTheme, isDarkTheme }) => {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    mx: 2,
    color: location.pathname === path ? '#7367EF' : 'inherit',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    textDecoration: 'none',
    '&:hover': {
      color: '#7367EF',
    },
  });

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ backgroundColor: isDarkTheme ? '#000000' : '#FFFFFF', boxShadow: 'none', borderBottom: isDarkTheme ? '1px solid #000' : '1px solid #e0e0e0' }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', height: '120px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={isDarkTheme ? nuraLogoDark : nuraLogoLight} alt="Nura Connect Logo" style={{ width: '70px', marginRight: '70px' }} />
            <Typography component={Link} to="/" variant="body1" sx={getLinkStyle('/')}>
              DASHBOARD
            </Typography>
            <Typography component={Link} to="/services" variant="body1" sx={getLinkStyle('/services')}>
              SERVICES
            </Typography>
            <Typography component={Link} to="/support" variant="body1" sx={getLinkStyle('/support')}>
              SUPPORT
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Toggle light/dark theme">
              <IconButton sx={{ color: 'black' }} onClick={toggleTheme}>
                <Brightness4OutlinedIcon />
              </IconButton>
            </Tooltip>
            <IconButton sx={{ color: 'black' }}>
              <Badge badgeContent={5} color="error">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
            <Avatar sx={{ bgcolor: '#7367EF', mx: 2 }}>A</Avatar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
