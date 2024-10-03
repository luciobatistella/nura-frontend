import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Switch,
  Avatar,
  Divider,
  Tooltip,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { grey } from '@mui/material/colors';

// Card component for each saved credit card
const CreditCardItem = ({ name, cardType, cardNumber, expiry, primary, onEdit, onDelete }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar sx={{ backgroundColor: '#f0f0f0', marginRight: '10px', width: 45, height: 45 }}>
        {cardType === 'MasterCard' && <img src="https://svgsilh.com/svg/305354.svg" alt="MasterCard" style={{ width: 30 }} />} 
        {cardType === 'Visa' && <img src="https://svgsilh.com/svg/305377.svg" alt="Visa" style={{ width: 30 }} />} 
      </Avatar>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{name}</Typography>
        {primary && <Tooltip title="Primary Card"><Typography variant="body2" sx={{ color: '#7367EF' }}>Primary</Typography></Tooltip>}
        <Typography variant="body2">**** **** {cardNumber}</Typography>
        <Typography variant="body2" color="textSecondary">Card expires at {expiry}</Typography>
      </Box>
    </Box>
    <Box>
      <Button variant="contained" sx={{ marginRight: 1 }} onClick={onEdit}>Edit</Button>
      <Button variant="outlined" color="secondary" onClick={onDelete}>Delete</Button>
    </Box>
  </Box>
);

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [saveCard, setSaveCard] = useState(false);

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Card variant="outlined" sx={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        PAYMENT METHOD
      </Typography>

      <Grid container spacing={3}>
        {/* Payment Method Options */}
        <Grid item xs={12} md={6}>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange} row>
            <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
            <FormControlLabel value="pix" control={<Radio />} label="PIX" />
          </RadioGroup>

          {/* Credit Card Form */}
          {paymentMethod === 'creditCard' && (
            <Box>
              <TextField
                label="Card Number"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <CreditCardIcon sx={{ color: grey[500], marginRight: 1 }} />,
                }}
                defaultValue="1356 3215 6548 7898"
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Full Name" margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Exp. Date" margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CVV" margin="normal" />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Switch checked={saveCard} onChange={() => setSaveCard(!saveCard)} />}
                label="Save card for future payments"
              />
            </Box>
          )}
        </Grid>

        {/* Saved Cards */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">My Cards</Typography>
          <Divider sx={{ marginBottom: 2 }} />

          <CreditCardItem
            name="Tom McBride"
            cardType="MasterCard"
            cardNumber="9856"
            expiry="12/26"
            primary
            onEdit={() => console.log('Edit Card')}
            onDelete={() => console.log('Delete Card')}
          />
          <Divider sx={{ marginY: 2 }} />
          <CreditCardItem
            name="Mildred Wagner"
            cardType="Visa"
            cardNumber="5896"
            expiry="10/27"
            onEdit={() => console.log('Edit Card')}
            onDelete={() => console.log('Delete Card')}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default PaymentMethod;