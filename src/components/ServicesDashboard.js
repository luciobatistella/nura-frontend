import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from 'react-router-dom'; // Importando o hook de navegação

// Estilizando o Card para incluir a borda e o fundo quando selecionado
const StyledCard = styled(Card)(({ theme, selected }) => ({
  backgroundColor: selected ? '#E9E7F8' : 'white',
  border: selected ? '2px solid #7367F0' : '2px solid transparent',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F1EFFB',
  },
}));

// Estilizando o botão de preço
const PriceButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#7367F0',
  color: 'white',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#5e50df',
  },
}));

// Componente de painel de abas
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
  const navigate = useNavigate(); // Hook de navegação

  // Recupera a aba selecionada do sessionStorage ou define como 0 (primeira aba)
  const [value, setValue] = useState(() => {
    const savedTab = sessionStorage.getItem('selectedTab');
    return savedTab ? Number(savedTab) : 0;
  });

  const [selectedCard, setSelectedCard] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    sessionStorage.setItem('selectedTab', newValue); // Armazena a aba selecionada
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

  // Função para redirecionar ao clicar em "More Details"
  const handleMoreDetailsClick = (serviceName) => {
    navigate(`/services/${serviceName}`);
  };

  return (
    <Box sx={{ width: '100%', padding: '20px 0px 20px 0px', marginBottom: '0px' }}>
      <Box sx={{ textAlign: 'center', mt: 0 }}>
        <Typography variant="h5" color="#7367F0" fontWeight="bold">CHOOSE ONE OF THE OPTIONS</Typography>
      </Box>
      <Tabs value={value} onChange={handleChange} aria-label="services tabs" centered sx={{ width: '100%', padding: '20px 0px 20px 0px', marginBottom: '0px' }}>
        <Tab label="DIA" />
        <Tab label="Broadband" />
        {/* <Tab label="EPL Metropoli" /> */}
        <Tab label="EPL´s" />
        <Tab label="Ports" />
        {/* <Tab label="Anti-DDoS" /> */}
        {/* <Tab label="Colocation" /> */}
        {/* <Tab label="Cloud" /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Dedicated Internet Access</Typography>
        <Typography variant="body1">Here is the content for DIA.</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {services.map((service, index) => (
          <StyledCard
            key={index}
            selected={selectedCard === index}
            onClick={() => setSelectedCard(index)}
          >
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: 2 }}>
                <PublicIcon sx={{ fontSize: 50, mr: 2 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">{service.speed} BROADBAND FIBER</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>{service.description}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  position: 'flex',
                  backgroundColor: selectedCard === index ? '#DCD9F7' : '#F9F9F9',
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">U$ {service.price} / YEAR</Typography>
                <PriceButton variant="contained">START SERVICE</PriceButton>
                <Button
                  variant="text"
                  sx={{
                    mt: 1,
                    color: '#7367F0',
                    fontWeight: 'bold',
                  }}
                  onClick={() => handleMoreDetailsClick(service.speed)}
                >
                  More Details
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6">EPL Metropoli</Typography>
        <Typography variant="body1">Here is the content for EPL Metropoli.</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h6">EPL Datacenters</Typography>
        <Typography variant="body1">Here is the content for EPL Datacenters.</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography variant="h6">Ports</Typography>
        <Typography variant="body1">Here is the content for Ports.</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography variant="h6">Anti-DDoS</Typography>
        <Typography variant="body1">Here is the content for Anti-DDoS.</Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Typography variant="h6">Colocation</Typography>
        <Typography variant="body1">Here is the content for Colocation.</Typography>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Typography variant="h6">Cloud</Typography>
        <Typography variant="body1">Here is the content for Cloud.</Typography>
      </TabPanel>
    </Box>
  );
};

export default ServicesDashboard;
