import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';

const CallToAction = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#7367EF', mt: 0, py: 2, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Container sx={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '100%', display: 'grid', justifyContent: 'center', p: 5, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: '#FFF', fontWeight: 'bold' }}>
              Configure Your Service Today!
            </Typography>
            <Typography variant="h6" sx={{ color: '#FFF', textAlign: 'center', width: '100%', mt: 2, fontWeight: 'normal' }}>
              We are ready to help you find the best broadband solution for your needs. Click below to configure your Broadband Internet service with us and experience reliable and efficient connectivity.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" sx={{
                mt: 2, background: '#FFF', width: '250px', color: '#7367EF', height: '50px', fontWeight
                  : 'bold', fontSize: '18px'
              }}>GET STARTED</Button>
            </Box>
          </Box>
        </Container>
      </Box>
  );
};

export default CallToAction;
