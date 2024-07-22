import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PublicIcon from '@mui/icons-material/Public';

const StyledCard = styled(Card)(({ theme, selected }) => ({
  backgroundColor: selected ? '#E9E7F8' : 'white',
  border: selected ? '2px solid #7367F0' : '2px solid transparent',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
}));

const PriceButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#7367F0',
  color: 'white',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#5e50df',
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ServicesDashboard = () => {
  const [value, setValue] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const services = [
    { speed: '10 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
    { speed: '50 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
    { speed: '100 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
    { speed: '200 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
    { speed: '300 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
    { speed: '500 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
    { speed: '1000 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="h6" color="#7367F0" fontWeight="bold">CHOOSE ONE OF THE OPTIONS</Typography>
      </Box>
      <Tabs value={value} onChange={handleChange} aria-label="services tabs" centered>
        <Tab label="DIA" />
        <Tab label="Broadband" />
        <Tab label="EPL" />
        <Tab label="Ports" />
      </Tabs>
      <TabPanel value={value} index={0}>
        DIA Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        {services.map((service, index) => (
          <StyledCard
            key={index}
            selected={selectedCard === index}
            onClick={() => setSelectedCard(index)}
          >
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PublicIcon sx={{ fontSize: 50, mr: 2 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">{service.speed} BROADBAND FIBER</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>{service.description}</Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h6" fontWeight="bold">U$ {service.price} / YEAR</Typography>
                <PriceButton variant="contained">START SERVICE</PriceButton>
                <Typography variant="body2" sx={{ mt: 1 }}>More Details</Typography>
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        EPL Content
      </TabPanel>
      <TabPanel value={value} index={3}>
        Ports Content
      </TabPanel>
    </Box>
  );
};

export default ServicesDashboard;
