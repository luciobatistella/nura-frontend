import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const fakeData = {
  selectedService: 'Broadband',
  zipcode: '12345',
  servicePrice: 200,
  contractPeriod: 2,
  extraServices: ['PUBLIC IPV4', 'WIFI'],
  paymentMethod: 'Invoice',
  termsAccepted: true,
};

const ServiceSummary = () => {
  return (
    <Box sx={{ width: '100%', position: 'sticky', top: '150px' }}>
      <Card>
      <CardContent sx={{ padding: '20px 20px 0px 20px', marginBottom: '0px' }}>
          <List>
            <ListItem>
              <ListItemText primary="Service" secondary={fakeData.selectedService || 'N/A'} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Service Availability " secondary={fakeData.zipcode || 'N/A'} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Services" secondary={`$${fakeData.servicePrice || 0} / ${fakeData.contractPeriod > 1 ? `${fakeData.contractPeriod} Years` : 'Year'}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Extra Services" secondary={fakeData.extraServices.length > 0 ? fakeData.extraServices.join(', ') : 'N/A'} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Payment Method" secondary={fakeData.paymentMethod || 'N/A'} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Terms Accepted" secondary={fakeData.termsAccepted ? 'Yes' : 'No'} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServiceSummary;
