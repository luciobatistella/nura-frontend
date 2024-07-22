import React from 'react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#F8F7FA' },
        }}
      />
      <Header />
      <Container maxWidth="lg" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
