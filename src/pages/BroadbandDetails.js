import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import broadbandImage from '../assets/broadband-internet-connectivity.png';
import flagBrazilImage from '../assets/flag-brazil.png';
import backgroundTitle from '../assets/section-title-icon.png';

import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStep from '../components/StepByStep';


const BroadbandDetails = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Container>
          <Card sx={{ mt: 0, width: '100%', border: '0px', boxShadow: 'none' }}>
            <CardContent sx={{ padding: '20px 30px' }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Broadband Internet Connectivity
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={9} sx={{ mt: 1, paddingRight: '50px' }}>
                  <Typography variant="h6" sx={{ color: '#7367EF' }} fontSize="1.4rem">
                    Why Choose Our Broadband Services?
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }} fontSize="1.2rem">
                    Broadband Internet from Nura Connect is designed to deliver robust and reliable connectivity tailored to your business needs. Whether you require basic browsing capabilities or need a connection that can handle high-volume data transfers, our broadband solutions provide the flexibility to meet your demands.

                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }} fontSize="1.2rem">

                    Our services typically offer asymmetric download and upload speeds, ensuring that your business has the bandwidth needed for daily operations. For businesses with more specialized requirements, we also provide symmetric speed options that offer equal upload and download rates, ideal for tasks that require consistent two-way data transfer, such as video conferencing or large file uploads.
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }} fontSize="1.2rem">
                    In addition, Nura Connect's premium broadband services are customized to deliver superior performance, whether you're running a small office or managing a large enterprise. Our extensive coverage ensures that you stay connected, no matter where your business is located. With a focus on quality and reliability, Nura Connect broadband services empower your business to thrive in today's digital landscape.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} position="relative" display="flex" justifyContent="center">
                  <img
                    src={broadbandImage}
                    alt="Broadband Services"
                    style={{ width: '300px', height: '300px', borderRadius: '8px', marginRight: '100px' }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Box sx={{ width: '100%', bgcolor: '#F7F4FE', mt: 4, py: 2, }}>
        <Container>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', px: 2 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: '#000', mb: 4, fontWeight: 'Bold' }}>
                Why Choose Nura Connect's Broadband?
                <img
                  src={backgroundTitle}
                  alt=''
                  style={{ width: '20%', height: '14px', position: 'absolute', Left: '50%', marginLeft: '-20%', marginTop: '22px' }}
                />
              </Typography>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                  <img
                    src={flagBrazilImage}
                    alt="Brazil Connectivity"
                    style={{ width: '400px', height: 'auto', position: 'relative' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">Cost-Effective Solution</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontSize="1rem">
                        In Brazil and Latin America, finding broadband services can be challenging, especially concerning the provision of public/static IP addresses. The scarcity of IPv4 addresses and limited adoption of IPv6 are not issues for us. We work with hundreds of local providers to ensure the best coverage and service.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">Reliable Performance</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontSize="1rem">
                        In Brazil and Latin America, finding broadband services can be challenging, especially concerning the provision of public/static IP addresses. The scarcity of IPv4 addresses and limited adoption of IPv6 are not issues for us. We work with hundreds of local providers to ensure the best coverage and service.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">Extensive Coverage</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontSize="1rem">
                        In Brazil and Latin America, finding broadband services can be challenging, especially concerning the provision of public/static IP addresses. The scarcity of IPv4 addresses and limited adoption of IPv6 are not issues for us. We work with hundreds of local providers to ensure the best coverage and service.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">Total Transparency</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontSize="1rem">
                        In Brazil and Latin America, finding broadband services can be challenging, especially concerning the provision of public/static IP addresses. The scarcity of IPv4 addresses and limited adoption of IPv6 are not issues for us. We work with hundreds of local providers to ensure the best coverage and service.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">Partnership with Local Providers</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontSize="1rem">
                        In Brazil and Latin America, finding broadband services can be challenging, especially concerning the provision of public/static IP addresses. The scarcity of IPv4 addresses and limited adoption of IPv6 are not issues for us. We work with hundreds of local providers to ensure the best coverage and service.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <StepByStep />
      <CallToAction />
      <FormContact />
    </Box>
  );
};

export default BroadbandDetails;
