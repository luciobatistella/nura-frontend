import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Badge, Avatar, Container, Typography, Tooltip, Menu, MenuItem, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import nuraLogoLight from '../assets/nura-logo.svg';
import nuraLogoDark from '../assets/nura-logo-dark.svg';

const Header = ({ toggleTheme, isDarkTheme }) => {
  const location = useLocation();
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);

  const handleServicesMenuClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const handleAvatarMenuClick = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarAnchorEl(null);
  };

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

            {/* Services Dropdown Menu */}
            <Button
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleServicesMenuClick}
              sx={{
                mx: 2,
                fontWeight: location.pathname.includes('/services') ? 'bold' : 'normal',
                color: location.pathname.includes('/services') ? '#7367EF' : 'inherit',
                '&:hover': {
                  color: '#7367EF',
                },
              }}
              endIcon={<ArrowDropDownIcon />}
            >
              SERVICES
            </Button>

            <Menu
              id="services-menu"
              anchorEl={servicesAnchorEl}
              keepMounted
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesMenuClose}
            >
              <MenuItem component={Link} to="/services/dia" onClick={handleServicesMenuClose}>
                DIA
              </MenuItem>
              <MenuItem component={Link} to="/services/epl" onClick={handleServicesMenuClose}>
                EPL
              </MenuItem>
              <MenuItem component={Link} to="/services/broadband" onClick={handleServicesMenuClose}>
                Broadband
              </MenuItem>
              <MenuItem component={Link} to="/services/ports" onClick={handleServicesMenuClose}>
                Ports
              </MenuItem>
            </Menu>

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

            {/* Avatar Menu */}
            <IconButton onClick={handleAvatarMenuClick}>
              <Avatar sx={{ bgcolor: '#7367EF', mx: 2 }}>A</Avatar>
            </IconButton>

            <Menu
              id="avatar-menu"
              anchorEl={avatarAnchorEl}
              keepMounted
              open={Boolean(avatarAnchorEl)}
              onClose={handleAvatarMenuClose}
            >
              <MenuItem component={Link} to="/personal-data" onClick={handleAvatarMenuClose}>
                Personal Data
              </MenuItem>
              <MenuItem component={Link} to="/projects" onClick={handleAvatarMenuClose}>
                My Projects
              </MenuItem>
              <MenuItem component={Link} to="/financial-history" onClick={handleAvatarMenuClose}>
                History Finance
              </MenuItem>
              <MenuItem component={Link} to="/change-password" onClick={handleAvatarMenuClose}>
                Change Password
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
