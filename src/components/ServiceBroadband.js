import React, { useState, useRef } from 'react';
import { Card, CardContent, Typography, TextField, InputAdornment, Button, Box, IconButton, CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import ServiceOptions from './ServiceOptions';
import ServiceExtraBroadband from './ServiceExtraBroadband';
import PaymentOptions from './PaymentOptions';
import Terms from './Terms';

const ServiceBroadband = ({ onZipcodeChange }) => {
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showSendButton, setShowSendButton] = useState(true); // Estado para controlar a visibilidade do botão de envio
  const serviceOptionsRef = useRef(null);

  const handleZipcodeChange = (event) => {
    const newZipcode = event.target.value;
    setZipcode(newZipcode);
    setError('');
    setMessage('');
    setShowServiceOptions(false);
    setShowSendButton(true); // Mostrar o botão de envio ao digitar
    if (onZipcodeChange) onZipcodeChange(newZipcode);
  };

  const handleSendClick = () => {
    if (!zipcode) {
      setError('This field is required.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (zipcode.toLowerCase().includes('são paulo')) {
        setMessage("Great! We're on net\nWe serve the provided address.\nPlease select the plan that best suits your needs from the options below.");
        setShowServiceOptions(true);
        if (serviceOptionsRef.current) {
          serviceOptionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setMessage("No coverage\nUnfortunately, we do not currently have coverage for the provided address.");
        setShowServiceOptions(false);
      }
      setShowSendButton(false); // Trocar para o botão de limpar após enviar
    }, 500);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
      setShowSendButton(false); // Trocar para o botão de limpar após pressionar Enter
    }
  };

  const handleClear = () => {
    setZipcode('');
    setError('');
    setMessage('');
    setShowServiceOptions(false);
    setShowSendButton(true); // Voltar para o botão de envio após limpar
    if (onZipcodeChange) onZipcodeChange('');
  };

  const handleServicePriceChange = (price) => {
    console.log('Service price changed:', price);
  };

  const handleContractPeriodChange = (period) => {
    console.log('Contract period changed:', period);
  };

  const handleExtraServicesChange = (services) => {
    console.log('Extra services changed:', services);
  };

  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
          <Typography variant="h6" gutterBottom>
            Broadband
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To check the service availability, please provide the ZIP code or address.
          </Typography>
          <TextField
            label="Zipcode or Address"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            value={zipcode}
            onChange={handleZipcodeChange}
            onKeyPress={handleKeyPress}
            error={!!error}
            helperText={error}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RoomOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {showSendButton ? (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#7367EF',
                        color: 'white',
                        borderRadius: '50px',
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: '#5e50df',
                        },
                      }}
                      onClick={handleSendClick}
                    >
                      SEND
                    </Button>
                  ) : (
                    <IconButton onClick={handleClear}>
                      <ClearIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}
          {!loading && message && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                bgcolor: message.startsWith('Great') ? '#d4edda' : '#f8d7da',
                color: message.startsWith('Great') ? '#155724' : '#721c24',
                border: message.startsWith('Great') ? '1px dashed #155724' : '1px dashed #721c24',
                borderRadius: '4px',
              }}
            >
              <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                {message.startsWith('Great') ? (
                  <CheckCircleOutlineIcon sx={{ color: '#155724', fontSize: 40 }} />
                ) : (
                  <ErrorOutlineIcon sx={{ color: '#721c24', fontSize: 40 }} />
                )}
              </Box>
              <Box sx={{ width: '90%' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  {message.startsWith('Great') ? "Great! We're on net" : "No coverage"}
                </Typography>
                <Typography>
                  {message.startsWith('Great')
                    ? "We serve the provided address.\nPlease select the plan that best suits your needs from the options below."
                    : "Unfortunately, we do not currently have coverage for the provided address."}
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
      {!loading && showServiceOptions && (
        <Box ref={serviceOptionsRef}>
          <ServiceOptions 
            onServicePriceChange={handleServicePriceChange} 
            onContractPeriodChange={handleContractPeriodChange} 
            onExtraServicesChange={handleExtraServicesChange} 
          />
          <ServiceExtraBroadband 
            onExtraServicesChange={handleExtraServicesChange} 
          />
          <PaymentOptions />
          <Terms />
        </Box>
      )}
    </Box>
  );
};

export default ServiceBroadband;
