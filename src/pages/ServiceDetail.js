import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';

const serviceDetails = {
  dia: "Dedicated Internet Access provides a direct connection to the internet with guaranteed bandwidth.",
  broadband: "Broadband offers high-speed internet access over a variety of transmission technologies.",
  eplMetro: "EPL Metropoli is a data service for point-to-point connectivity.",
  eplDatacenters: "EPL Datacenters offer high-speed data transmission solutions.",
  ports: "Port Services provide connectivity through different ports.",
  antiDDoS: "Anti-DDoS protects against distributed denial of service attacks.",
  colocation: "Colocation allows you to place your server in our data center.",
  cloud: "Cloud services offer various computing resources over the internet."
};

const DetailService = () => {
  const { serviceName } = useParams();

  // Get the service details using the serviceName parameter
  const detail = serviceDetails[serviceName] || "Service details not available.";

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {serviceName.toUpperCase()}
          </Typography>
          <Typography variant="body1">
            {detail}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailService;
