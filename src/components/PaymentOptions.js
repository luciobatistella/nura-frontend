import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ReactComponent as InvoiceIcon } from '../assets/invoice-icon.svg'; // Importar o ícone Invoice como componente React

const paymentOptions = [
  { title: 'Invoice', icon: <InvoiceIcon />, disabled: false, description: 'Payment by invoice subject to profile evaluation' },
  { title: 'Credit Card', icon: <CreditCardIcon />, disabled: true, description: '' },
];

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('Invoice');

  const handleCardClick = (title) => {
    if (!paymentOptions.find((option) => option.title === title).disabled) {
      setSelectedPayment(title);
    }
  };

  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
          <Typography variant="h6" gutterBottom>
            Payment Options
          </Typography>
          <Grid container spacing={2}>
            {paymentOptions.map((option) => (
              <Grid item xs={12} sm={6} key={option.title}>
                <Card
                  variant="outlined"
                  onClick={() => handleCardClick(option.title)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    cursor: option.disabled ? 'default' : 'pointer',
                    position: 'relative',
                    backgroundColor: selectedPayment === option.title ? '#F6F5FF' : '',
                    borderColor: selectedPayment === option.title ? '#7367EF' : 'rgba(0, 0, 0, 0.12)',
                    borderWidth: selectedPayment === option.title ? 2 : 1,
                    borderStyle: 'solid',
                    boxSizing: 'border-box',
                    height: '150px',
                    opacity: option.disabled ? 0.5 : 1,
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: selectedPayment === option.title ? '#7367EF' : '#B4B1B1',
                      fill: selectedPayment === option.title ? '#7367EF' : '#B4B1B1',
                      mb: 1,
                    }}
                  >
                    {React.cloneElement(option.icon, {
                      style: { fill: selectedPayment === option.title ? '#7367EF' : '#B4B1B1' },
                      width: 30,
                      height: 30
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '0.875rem',
                      color: selectedPayment === option.title ? '#7367EF' : '#B4B1B1',
                    }}
                  >
                    {option.title}
                  </Typography>
                  {option.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.90rem',
                        color: selectedPayment === option.title ? '#7367EF' : '#B4B1B1',
                        mt: 1,
                      }}
                    >
                      {option.description}
                    </Typography>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaymentOptions;
