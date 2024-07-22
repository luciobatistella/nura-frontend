import React from 'react';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <MainContent />
      </Box>
    </Box>
  );
};

export default App;
