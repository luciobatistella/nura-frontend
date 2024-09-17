import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ben01 from '../assets/ben07.svg';
import ben02 from '../assets/ben08.svg';
import ben03 from '../assets/ben09.svg';
import ben04 from '../assets/ben10.svg';
import ben05 from '../assets/ben11.svg';
import ben06 from '../assets/ben12.svg';
import backgroundTitle from '../assets/section-title-icon.png';

const StepByStep = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#FFF', mt: 4, py: 2, }}>
        <Container>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ width: '100%', maxWidth: '1280px', px: 2 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: '#000', mb: 6, fontWeight: 'Bold' }}>
                Key Features of Ethernet Private Line
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
                    Dedicated Connection
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  EPL provides a direct, exclusive Ethernet connection between two points, ensuring bandwidth is not shared with other users.
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
                  High Speed
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Typically supports high-speed data transfers, often ranging from 10 Mbps to 100 Gbps, depending on the service provider and infrastructure.
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
                    Low Latency
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  The dedicated nature of EPL ensures low latency, which is crucial for real-time applications such as VoIP, video conferencing, and data replication.
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
                  Scalability
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Businesses can easily scale the bandwidth based on current and future requirements without changing the underlying infrastructure.
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
                  Service Level Agreements (SLAs)
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  EPL services often come with SLAs guaranteeing uptime, speed, and performance, which are essential for business continuity.
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
                  Symmetrical Speeds
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  EPL usually offers symmetrical upload and download speeds, ideal for data-heavy tasks like backups or interoffice communications.
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
