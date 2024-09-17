import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ben13 from '../assets/ben13.svg';
import ben02 from '../assets/ben14.svg';
import ben03 from '../assets/ben15.svg';
import ben04 from '../assets/ben16.svg';
import ben05 from '../assets/ben17.svg';
import ben06 from '../assets/ben18.svg';
import backgroundTitle from '../assets/section-title-icon.png';

const StepByStepPorts = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#efefef', mt: 4, py: 2, }}>
        <Container>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ width: '100%', maxWidth: '1280px', px: 2 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: '#000', mb: 6, fontWeight: 'Bold' }}>
              Key Features of Our Port Services
                <img
                  src={backgroundTitle}
                  style={{ width: '20%', height: '14px', position: 'absolute', Left: '50%', marginLeft: '-20%', marginTop: '22px' }}
                />
              </Typography>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4} display="grid" justifyContent="center" alignItems="center">
                  <Typography sx={{ textAlign: 'center' }}>
                    <img
                      src={ben13}
                      alt="Brazil Connectivity"
                      style={{ width: '60px', height: 'auto', textAlign: 'center' }}
                    />
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#000', fontWeight: 'Bold' }}>
                  High-Speed Performance
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Maximize your network's efficiency with high-capacity, low-latency ports designed to meet the demands of critical business applications, ensuring fast and reliable data transfers.
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
                    Security You Can Trust
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Protect your network at every level with encrypted communication and advanced firewall configurations, ensuring robust security for all your sensitive operations.
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
                  Scalability for Growth
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    As your business expands, our ports adapt effortlessly, providing the flexibility you need to scale your network infrastructure without compromising performance.
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
                    Custom Configurations
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Collaborating with your IT team, we create tailored port setups designed to match your specific operational needs, ensuring optimized performance and security.
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
                    Reliability and Redundancy
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Maintain continuous connectivity with built-in redundancy and failover solutions that minimize downtime and keep your critical systems running smoothly.
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
                  Optimized Resource Allocation
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Efficiently allocate your network resources with ports configured to prioritize critical traffic, ensuring smooth performance even during peak usage times.
                  </Typography>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
  );
};

export default StepByStepPorts;
