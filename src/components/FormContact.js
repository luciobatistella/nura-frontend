import React from 'react';
import { Button,TextField, Box, Typography, Grid, Container } from '@mui/material';
import contactImage from '../assets/contactImage.png';

const FormContact = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}>
        <Container>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', alignItems: 'center', textAlign: 'center' }}>
                <img
                  src={contactImage}
                  alt="Contact"
                  style={{ width: '350px', height: '350px', borderRadius: '8px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: '#7367EF', fontWeight: 'bold', mb: 2 }}>
                Don't Miss This Opportunity!
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Take advantage now to improve your company's connectivity with Nura Connect.
                We offer economical, reliable, and customized solutions to ensure you always have the
                best connectivity experience.
              </Typography>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <Button variant="contained" color="primary" size="large">
                Send Inquiry
              </Button>
            </Grid>
        </Grid>
        </Container>
      </Box>
  );
};

export default FormContact;
