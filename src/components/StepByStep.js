import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ben01 from '../assets/ben01.svg';
import ben02 from '../assets/ben02.svg';
import ben03 from '../assets/ben03.svg';
import ben04 from '../assets/ben04.svg';
import ben05 from '../assets/ben05.svg';
import ben06 from '../assets/ben06.svg';
import backgroundTitle from '../assets/section-title-icon.png';

const StepByStep = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#FFF', mt: 4, py: 2, }}>
        <Container>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ width: '100%', maxWidth: '1280px', px: 2 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: '#000', mb: 6, fontWeight: 'Bold' }}>
                Benefiots of Nura Connect to start your next project
                <img
                  src={backgroundTitle}
                  style={{ width: '20%', height: '14px', position: 'absolute', Left: '50%', marginLeft: '-20%', marginTop: '22px' }}
                />
              </Typography>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4} display="grid" justifyContent="center" alignItems="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben01}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                    Tailored Connectivity Solutions
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Broadband packages designed to meet your business needs, ensuring optimal performance from day one.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} display="grid" justifyContent="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben02}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                    Reliable Infrastructure
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Seamlessly integrate our robust infrastructure into your business, providing consistent and dependable service.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} display="grid" justifyContent="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben03}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                    Continuous Improvements
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Enjoy free updates for 12 months, including new features and improvements to keep your service state-of-the-art.
                  </Typography>
                </Grid>

              </Grid>
              <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 10, mt: 5 }}>
                <Grid item xs={12} md={4} display="grid" justifyContent="center" alignItems="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben04}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                    Quick Deployment
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Launch your broadband project swiftly without removing unnecessary features, focusing on growth and innovation.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} display="grid" justifyContent="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben05}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                    Enhanced Security
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Built-in security features ensure your data and communications are always protected.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} display="grid" justifyContent="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben06}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                    Expert Support
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Our dedicated support team provides a smooth, efficient experience with comprehensive documentation and examples.
                  </Typography>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
  );
};

export default StepByStep;
