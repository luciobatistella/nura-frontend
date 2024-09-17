import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Container } from '@mui/material';
import eplheader from '../assets/epl-header.png';
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStepEPL from '../components/StepByStepEPL';
import caseEPL from '../assets/caseepl.png';

const EPLServiceDetails = () => {
  
  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);

  const useCases = [
    {
      title: "Data Center Interconnect",
      description: `It refers to the connection between two or more data centers of a company, ensuring 
      that they are efficiently and securely interconnected. Interconnection enables data synchronization 
      between different locations, essential for redundancy, backup, and load balancing.`,
    },
    {
      title: "Enterprise WAN",
      description: `Ethernet Private Line is used to create a wide area network that connects offices, 
      branches, or corporate campuses in different geographic locations. This ensures efficient and secure 
      communication while avoiding latency and congestion.`,
    },
    {
      title: "Cloud Access",
      description: `EPL can be used to directly connect a company’s premises to cloud service providers 
      like AWS, Azure, or Google Cloud, ensuring faster and more secure access with reliable performance.`,
    },
    {
      title: "Business Continuity",
      description: `Ethernet Private Line is essential in business continuity plans, ensuring reliable backups 
      and disaster recovery by enabling fast data transfer between production sites and recovery locations.`,
    },
  ];

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
                  <Typography variant="body1" sx={{ mt: 1 }} fontSize="1.2rem">
                    Our Ethernet Private Line (EPL) service offers scalable bandwidth from 1 Mbps to 100 Gbps, giving you the flexibility to expand as your business grows while ensuring you only pay for the capacity you need. By using a dedicated private line that bypasses the public Internet, your data enjoys faster, more secure transmission, significantly reducing latency and enhancing application performance.
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 3 }} fontSize="1.2rem">
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

            </CardContent>
          </Card>
        </Container>
      </Box>

      <StepByStepEPL />
      <Box sx={{ mt: 5 }}>
        <Container>
          <Card sx={{ mt: 3, width: '100%', border: '0px', boxShadow: 'none', mb: 4 }}>

            <Grid container spacing={20}>
              <Grid item xs={12} md={4} sx={{ alignContent: 'center' }}>
                <img
                  src={caseEPL}
                  alt="EPL case study"
                  style={{ width: '350px', height: 'auto', marginLeft: '70px' }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Container maxWidth="lg" sx={{ padding: '20px' }}>
                  <Box>
                    <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', textAlign: 'left', color: '#7367EF', paddingTop: 2 }}>
                      Cases for Ethernet Private Line (EPL)
                    </Typography>
                    <Grid container spacing={4}>
                      {useCases.map((useCase, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <Card sx={{ height: '100%' }}>
                            <CardContent>
                              <Typography variant="h6" component="h2" gutterBottom>
                                {useCase.title}
                              </Typography>
                              <Typography variant="body1" component="p">
                                {useCase.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      <CallToAction />

      <FormContact />
    </Box>
  );
};

export default EPLServiceDetails;
