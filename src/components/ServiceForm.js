import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ServiceDIA from './ServiceDIA';
import ServiceBroadband from './ServiceBroadband';
import ServiceEPLMetro from './ServiceEPLMetro';
import ServiceEPLData from './ServiceEPLData';
import ServicePorts from './ServicePorts';
import ServiceAntiDDoS from './ServiceAntiDDoS';
import ServiceColocation from './ServiceColocation';
import ServiceCloud from './ServiceCloud';
import PaymentOptions from './PaymentOptions';
import Terms from './Terms';
// Importar SVGs como componentes React
import { ReactComponent as DiaIcon } from '../assets/dia.svg';
import { ReactComponent as BroadbandIcon } from '../assets/broadband.svg';
import { ReactComponent as EplMetroIcon } from '../assets/epl-metro.svg';
import { ReactComponent as EplDataIcon } from '../assets/epl-data.svg';
import { ReactComponent as PortsIcon } from '../assets/ports.svg';
import { ReactComponent as AntiDdosIcon } from '../assets/anti-ddos.svg';
import { ReactComponent as ColocationIcon } from '../assets/colocation.svg';
import { ReactComponent as CloudIcon } from '../assets/cloud.svg';

const services = [
  { title: 'DIA', description: 'Dedicated Internet Access', tooltip: 'Dedicated Internet Access provides a direct connection to the internet with guaranteed bandwidth.', icon: <DiaIcon /> },
  { title: 'BROADBAND', description: 'High-speed internet', tooltip: 'Broadband offers high-speed internet access over a variety of transmission technologies.', icon: <BroadbandIcon /> },
  { title: 'EPL METRO', description: 'Ethernet Private Line', tooltip: 'Ethernet Private Line (EPL) is a data service for point-to-point connectivity.', icon: <EplMetroIcon /> },
  { title: 'EPL DATA', description: 'Data Services', tooltip: 'EPL Data services offer high-speed data transmission.', icon: <EplDataIcon /> },
  { title: 'PORTS', description: 'Port Services', tooltip: 'Port Services provide connectivity through different ports.', icon: <PortsIcon /> },
  { title: 'ANTI-DDOS', description: 'DDoS Protection', tooltip: 'Anti-DDoS protects against distributed denial of service attacks.', icon: <AntiDdosIcon /> },
  { title: 'COLOCATION', description: 'Data Center Colocation', tooltip: 'Colocation allows you to place your server in our data center.', icon: <ColocationIcon /> },
  { title: 'CLOUD', description: 'Cloud Services', tooltip: 'Cloud services offer various computing resources over the internet.', icon: <CloudIcon /> }
];

const ServiceForm = () => {
  const [selectedService, setSelectedService] = useState('BROADBAND');
  const [zipcodeValid, setZipcodeValid] = useState(false);

  const handleCardClick = (title) => {
    setSelectedService(title);
  };

  const renderServiceContent = () => {
    switch (selectedService) {
      case 'DIA':
        return <ServiceDIA />;
      case 'BROADBAND':
        return <ServiceBroadband onZipcodeValid={setZipcodeValid} />;
      case 'EPL METRO':
        return <ServiceEPLMetro />;
      case 'EPL DATA':
        return <ServiceEPLData />;
      case 'PORTS':
        return <ServicePorts />;
      case 'ANTI-DDOS':
        return <ServiceAntiDDoS />;
      case 'COLOCATION':
        return <ServiceColocation />;
      case 'CLOUD':
        return <ServiceCloud />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Grid container spacing={2}>
            {services.map((service) => (
              <Grid item key={service.title}>
                <Card
                  variant="outlined"
                  onClick={() => handleCardClick(service.title)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: selectedService === service.title ? '#F6F5FF' : '',
                    borderColor: selectedService === service.title ? '#7367EF' : 'rgba(0, 0, 0, 0.12)',
                    borderWidth: selectedService === service.title ? 2 : 1,
                    borderStyle: 'solid',
                    boxSizing: 'border-box',
                    height: '100px',
                    width: '110px',
                  }}
                >
                  <Tooltip 
                    title={service.tooltip} 
                    placement="top"
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: selectedService === service.title ? '#7367EF' : '#B4B1B1',
                          color: 'white',
                          fontSize: '1em',
                          textAlign: 'center',
                          mt: '2px',
                          mr: '2px'
                        }
                      }
                    }}
                  >
                    <IconButton 
                      sx={{
                        position: 'absolute',
                        top: -5,
                        right: -5,
                        color: selectedService === service.title ? '#7367EF' : '#B4B1B1',
                        padding: '8px',
                        fontSize: '1.0rem',
                      }}
                    >
                      <InfoOutlinedIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: selectedService === service.title ? '#7367EF' : '#B4B1B1',
                      fill: selectedService === service.title ? '#7367EF' : '#B4B1B1',
                      mb: 1,
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      style: { fill: selectedService === service.title ? '#7367EF' : '#B4B1B1' },
                      width: 30,
                      height: 30
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '0.875rem',
                      color: selectedService === service.title ? '#7367EF' : '#B4B1B1',
                    }}
                  >
                    {service.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      {renderServiceContent()}
      {zipcodeValid && (
        <>
          <PaymentOptions />
          <Terms />
        </>
      )}
    </Box>
  );
};

export default ServiceForm;
