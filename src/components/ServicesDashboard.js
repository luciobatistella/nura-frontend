import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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
        <Box sx={{ p: 0 }}>
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

  const [open, setOpen] = useState(false); // State to manage modal open/close
  const [selectedPdf, setSelectedPdf] = useState(null); // State to manage selected PDF

  const services = [
    { speed: '10 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '../assets/Colors.pdf' },
    { speed: '50 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '/path/to/pdf2.pdf' },
    { speed: '100 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '/path/to/pdf3.pdf' },
    { speed: '200 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '/path/to/pdf4.pdf' },
    { speed: '300 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '/path/to/pdf5.pdf' },
    { speed: '500 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '/path/to/pdf6.pdf' },
    { speed: '1000 MBPS', price: '199,00', description: 'Business Broadband Connectivity\nProvided with Fiber\nEquipment Included, for current brand/model availability\nContract Term: 12 / 24 / 36 Months', pdf: '/path/to/pdf7.pdf' },
  ];

  // Função para abrir o modal com o PDF selecionado
  const handleMoreDetailsClick = (pdf) => {
    setSelectedPdf(pdf);
    setOpen(true); // Open modal
  };

  // Função para fechar o modal
  const handleClose = () => {
    setOpen(false); // Close modal
    setSelectedPdf(null); // Clear selected PDF
  };

  return (
    <Box sx={{ width: '100%', padding: '20px 0px 0px 0px', marginBottom: '0px' }}>
      <Box sx={{ textAlign: 'center', mt: 0 }}>
        <Typography variant="h5" color="#7367F0" fontWeight="bold">CHOOSE ONE OF THE OPTIONS</Typography>
      </Box>
      <Tabs value={value} onChange={handleChange} aria-label="services tabs" centered sx={{ width: '100%', padding: '20px 0px 20px 0px', marginBottom: '0px' }}>
        <Tab label="DIA" />
        <Tab label="Broadband" />
        <Tab label="EPL´s" />
        <Tab label="Ports" />
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
                    ml: 1,
                    color: '#7367F0',
                    fontWeight: 'bold',
                  }}
                  onClick={() => handleMoreDetailsClick(service.pdf)}
                >
                  More Details
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </TabPanel>
      {/* Modal to show PDF */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>More Details</DialogTitle>
        <DialogContent>
          {selectedPdf ? (
            <iframe
              src={selectedPdf}
              title="PDF Details"
              width="100%"
              height="600px"
              style={{ border: 'none' }}
            />
          ) : (
            <Typography>No details available</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServicesDashboard;
