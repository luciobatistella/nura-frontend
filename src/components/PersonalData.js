import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Container,
  IconButton,
  Avatar,
  Autocomplete,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import PaymentsCard from '../components/PaymentsCard'


// Component for a section header
const SectionHeader = ({ title, onEdit }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
    <Typography variant="h6">{title}</Typography>
    <IconButton onClick={onEdit}>
      <EditIcon />
    </IconButton>
  </Box>
);

const PersonalData = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7FA';
  }, []);
  
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [emails, setEmails] = useState([]); // State for multiple emails in Company Information
  const [billingEmails, setBillingEmails] = useState([]); // State for multiple emails in Billing Address
  const [zipCode, setZipCode] = useState(''); // State for zip code in Company Information
  const [billingZipCode, setBillingZipCode] = useState(''); // State for zip code in Billing Address
  const [addressData, setAddressData] = useState({
    address: '',
    city: '',
    state: '',
    neighborhood: ''
  });
  const [billingAddressData, setBillingAddressData] = useState({
    address: '',
    city: '',
    state: '',
    neighborhood: ''
  });

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Fetch address from ViaCEP API when the zip code is valid (8 digits) for Company Information
  useEffect(() => {
    const fetchAddress = async () => {
      if (zipCode.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
          if (!response.data.erro) {
            const { logradouro, localidade, uf, bairro } = response.data;
            setAddressData({
              address: logradouro,
              city: localidade,
              state: uf,
              neighborhood: bairro
            });
          } else {
            alert('CEP not found.');
            setAddressData({
              address: '',
              city: '',
              state: '',
              neighborhood: ''
            });
          }
        } catch (error) {
          alert('Error fetching ZIP code data.');
        }
      }
    };

    fetchAddress();
  }, [zipCode]);

  // Fetch address from ViaCEP API when the billing zip code is valid (8 digits) for Billing Address
  useEffect(() => {
    const fetchBillingAddress = async () => {
      if (billingZipCode.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${billingZipCode}/json/`);
          if (!response.data.erro) {
            const { logradouro, localidade, uf, bairro } = response.data;
            setBillingAddressData({
              address: logradouro,
              city: localidade,
              state: uf,
              neighborhood: bairro
            });
          } else {
            alert('CEP not found.');
            setBillingAddressData({
              address: '',
              city: '',
              state: '',
              neighborhood: ''
            });
          }
        } catch (error) {
          alert('Error fetching ZIP code data.');
        }
      }
    };

    fetchBillingAddress();
  }, [billingZipCode]);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            PERSONAL DATA
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Here, you will find a detailed and comprehensive record of all our financial activities over the years.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={9}>
          <Box sx={{ padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f8f9fa' }}>
            {/* Identification Section */}
            <Card variant="outlined" sx={{ padding: '20px', marginBottom: '20px' }}>
              <SectionHeader title="IDENTIFICATION" />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Contact Name" defaultValue="Lúcio H Batistella" disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" defaultValue="+1 9873 1234" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" defaultValue="nura@example.com" />
                </Grid>
              </Grid>
            </Card>

            {/* Company Information Section */}
            <Card variant="outlined" sx={{ padding: '20px', marginBottom: '20px' }}>
              <SectionHeader title="COMPANY INFORMATION" />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Company Name" defaultValue="Nura LLC" disabled />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Company Tax ID" defaultValue="19.232.432/0001-82" disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="CNPJ" defaultValue="00.000.000/0000-00" disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="ZIP Code" 
                    value={zipCode} 
                    onChange={(e) => setZipCode(e.target.value)} 
                    inputProps={{ maxLength: 8 }} // Ensure only 8 digits
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Address" value={addressData.address} onChange={(e) => setAddressData({ ...addressData, address: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Neighborhood" value={addressData.neighborhood} onChange={(e) => setAddressData({ ...addressData, neighborhood: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="City" value={addressData.city} onChange={(e) => setAddressData({ ...addressData, city: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="State" value={addressData.state} onChange={(e) => setAddressData({ ...addressData, state: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Complement"/>
                </Grid>
                <Grid item xs={12} sm={12}>
                  {/* Multi-email AutoComplete for Company Information */}
                  <Autocomplete
                    multiple
                    freeSolo
                    options={[]}
                    value={emails}
                    onChange={(event, newValue) => setEmails(newValue)}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          key={index}
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Emails"
                        placeholder="Enter multiple emails"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card>

            {/* Payment Method Section */}
            <PaymentsCard />


            {/* Billing Address Section */}
            <Card variant="outlined" sx={{ padding: '20px', marginBottom: '20px' }}>
              <SectionHeader title="BILLING ADDRESS" />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="ZIP Code" 
                    value={billingZipCode} 
                    onChange={(e) => setBillingZipCode(e.target.value)} 
                    inputProps={{ maxLength: 8 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="City" value={billingAddressData.city} onChange={(e) => setBillingAddressData({ ...billingAddressData, city: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Address" value={billingAddressData.address} onChange={(e) => setBillingAddressData({ ...billingAddressData, address: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="State" value={billingAddressData.state} onChange={(e) => setBillingAddressData({ ...billingAddressData, state: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  {/* Multi-email AutoComplete for Billing Address */}
                  <Autocomplete
                    multiple
                    freeSolo
                    options={[]}
                    value={billingEmails}
                    onChange={(event, newValue) => setBillingEmails(newValue)}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          key={index}
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Billing Emails"
                        placeholder="Enter multiple emails"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
              <Button variant="outlined" color="primary">Cancel</Button>
              <Button variant="contained" color="primary">Update</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalData;
