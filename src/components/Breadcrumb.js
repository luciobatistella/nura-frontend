import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = () => {
  return (
    <Box sx={{ paddingLeft: '24px' }}> {/* Adicionar padding-left */}
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/services">
          Services
        </Link>
        <Typography color="textPrimary">Current Service</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
