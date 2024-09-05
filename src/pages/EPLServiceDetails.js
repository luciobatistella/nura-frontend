import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Card, CardContent, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import eplheader from '../assets/epl-header.png';
import flagBrazilImage from '../assets/flag-brazil.png'; // Pode ser uma imagem diferente, se aplicável
import backgroundTitle from '../assets/section-title-icon.png';
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStep from '../components/StepByStep';
const EPLServiceDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Container>
          <Card sx={{ mt: 0, width: '100%', border: '0px', boxShadow: 'none' }}>
            <CardContent sx={{ padding: '20px 30px' }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Ethernet Private Line
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={9} sx={{ mt: 1, paddingRight: '50px' }}>
                  <Typography variant="h6" sx={{ color: '#7367EF' }}>
                    Comprehensive Connectivity Solutions
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1}} fontSize="1.2rem">
                  Our Ethernet Private Line (EPL) service offers scalable bandwidth from 1 Mbps to 100 Gbps, giving you the flexibility to expand as your business grows while ensuring you only pay for the capacity you need. By using a dedicated private line that bypasses the public Internet, your data enjoys faster, more secure transmission, significantly reducing latency and enhancing application performance.
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 3}} fontSize="1.2rem">
                    Additionally, our EPL service is supported by 24/7 proactive monitoring. Our dedicated support team continuously monitors your network, addressing potential issues before they impact your operations. This ensures reliable, uninterrupted performance, providing you with the peace of mind that your business's connectivity is always secure and efficient.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} position="relative" display="flex" justifyContent="center">
                  <img
                    src={eplheader}
                    alt="Broadband Services"
                    style={{ width: '350px', height: '350px', borderRadius: '8px', marginRight: '50px' }}
                  />
                </Grid>

              </Grid>
              {/* <Grid sx={{
                p: 1,
                m: 5,
                borderRadius: 1,
                bgcolor: 'background.default',
                display: 'grid',
                textAlign: 'center',
                marginTop: '10px',
                lineHeight: '10px',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}>
                <Card>
                  <CardContent sx={{ fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                    Precision Scalability
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                    Secure and Fast Data Transmission
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                    Unmatched Reliability
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                    Tailored Connectivity for Your Needs
                  </CardContent>
                </Card>
              </Grid> */}

            </CardContent>
          </Card>
        </Container>
      </Box>
      {/* <Box sx={{ width: '100%', bgcolor: '#F7F4FE', mt: 4, py: 2, }}>
        <Container>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '1280px', px: 2 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: '#000', mb: 4, fontWeight: 'Bold' }}>
                Why Choose Nura Connect's Broadband?
                <img
                  src={backgroundTitle}
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
      </Box> */}
      {/* <StepByStep /> */}
      <CallToAction/>
      <FormContact />
    </Box>
  );
};

export default EPLServiceDetails;
