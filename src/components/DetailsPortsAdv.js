import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Container } from '@mui/material';

const serviceDetails = [
  {
    title: "Lightning-Fast Connectivity",
    description: "Leverage ports designed for high-capacity, low-latency performance to ensure your network delivers peak efficiency.",
  },
  {
    title: "Rock-Solid Security",
    description: "Our port configurations are built with a security-first mindset, ensuring encrypted traffic and multi-layered protection.",
  },
  {
    title: "Effortless Scalability",
    description: "Our ports are crafted to grow alongside your enterprise, scaling effortlessly as new demands arise.",
  },
  {
    title: "Tailored to Your Needs",
    description: "We design custom port configurations that align with your operational requirements, enhancing efficiency and performance.",
  },
  {
    title: "Always-On Redundancy",
    description: "Built-in redundancy and failover mechanisms ensure uninterrupted service and minimize downtime.",
  },
  {
    title: "Intelligent Resource Management",
    description: "Our ports intelligently allocate resources where they are needed most, ensuring priority for critical tasks.",
  },
  // New cards added below
  {
    title: "Seamless Cloud Integration",
    description: "Easily integrate cloud-based applications with secure and scalable port solutions, ensuring seamless connectivity.",
  },
  {
    title: "Optimized Data Flow",
    description: "Streamline data transfer processes, optimizing bandwidth usage for critical applications and improving overall performance.",
  },
  {
    title: "Enhanced Disaster Recovery",
    description: "Our ports enable reliable, fast data recovery to ensure your business continuity in the event of an emergency.",
  },
];

const DetailsPortsAdv = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#efefef', py: 8, }}>
      <Container maxWidth="lg">
        {/* <Typography variant="h4" component="h2" align="center" gutterBottom>
          Advanced Port Services
        </Typography> */}
        <Grid container spacing={4}>
          {serviceDetails.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {service.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailsPortsAdv;
