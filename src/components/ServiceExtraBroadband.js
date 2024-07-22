import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, IconButton, Switch } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const extraServices = [
  {
    title: 'PUBLIC IPV4',
    description: 'To continue, please choose the type of IP address you want to use. You can select from the following options:',
    options: [
      { label: 'IPV4 - 29', price: 200 },
      { label: 'IPV4 - 30', price: 250 },
      { label: 'IPV4 - 31', price: 300 },
    ],
  },
  {
    title: 'PUBLIC IPV6',
    description: 'To continue, please choose the type of IP address you want to use. You can select from the following options:',
    options: [
      { label: 'IPV6 - 64', price: 150 },
      { label: 'IPV6 - 128', price: 180 },
    ],
  },
];

const wifiService = {
  title: 'WIFI',
  description: `
    As an add-on to our Broadband service, we offer the option to include Wi-Fi in your package. 
    This extra service ensures a high-quality wireless connection throughout your environment, 
    providing the freedom and convenience to connect multiple devices.

    Technical Details of the Provided Equipment:

    High-Performance Wi-Fi Router:
    Model: [Model Name]
    Maximum Speed: Up to 1.9 Gbps (dual-band)
    Supported Frequencies: 2.4 GHz and 5 GHz
    Technology: 802.11ac Wave 2
    Coverage: Up to 1500 square feet

    With this extra service, you can enjoy a robust and reliable internet connection throughout 
    your home or office, ensuring a superior browsing experience for all your devices.
  `,
  price: 99,
};

const burstableService = {
  title: 'BURSTABLE',
  description: `
    Burstable bandwidth allows you to pay for the average usage but can burst to a higher speed when needed.
    Select your preferred burstable option to enjoy flexibility in your internet speed.
  `,
  price: 150, // Preço fictício, ajuste conforme necessário
};

const ServiceExtraBroadband = ({ onExtraServicesChange }) => {
  const [selectedExtraService, setSelectedExtraService] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    'PUBLIC IPV4': extraServices[0].options[0].label,
    'PUBLIC IPV6': extraServices[1].options[0].label,
  });
  const [isSwitchChecked, setIsSwitchChecked] = useState(false); // Inicialmente desmarcado
  const [isWifiSwitchChecked, setIsWifiSwitchChecked] = useState(false); // Inicialmente desmarcado
  const [isBurstableSwitchChecked, setIsBurstableSwitchChecked] = useState(false); // Inicialmente desmarcado
  const [selectedWifi, setSelectedWifi] = useState(false);
  const [selectedBurstable, setSelectedBurstable] = useState(false);

  const handleCardClick = (title) => {
    setSelectedExtraService(title);
    onExtraServicesChange({ title });
  };

  const handleWifiClick = () => {
    setSelectedWifi(!selectedWifi);
  };

  const handleBurstableClick = () => {
    setSelectedBurstable(!selectedBurstable);
  };

  const handleOptionChange = (title) => (event) => {
    const newOptions = {
      ...selectedOptions,
      [title]: event.target.value,
    };
    setSelectedOptions(newOptions);
    onExtraServicesChange(newOptions);
  };

  const handleSwitchChange = (event) => {
    setIsSwitchChecked(event.target.checked);
  };

  const handleWifiSwitchChange = (event) => {
    setIsWifiSwitchChecked(event.target.checked);
  };

  const handleBurstableSwitchChange = (event) => {
    setIsBurstableSwitchChecked(event.target.checked);
  };

  const getPrice = (service, option) => {
    const selectedService = extraServices.find((s) => s.title === service);
    const selectedOption = selectedService.options.find((o) => o.label === option);
    return selectedOption.price;
  };

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">
              Public IPV
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h7" sx={{ ml: 1, color: '#7367EF', fontWeight: 'Bold' }}>
                Starting from $0.00
              </Typography>
              <Switch checked={isSwitchChecked} onChange={handleSwitchChange} />              
            </Box>
          </Box>
          {isSwitchChecked && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {extraServices.map((service) => (
                <Card
                  key={service.title}
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
                    backgroundColor: selectedExtraService === service.title ? '#F6F5FF' : 'white',
                    borderColor: selectedExtraService === service.title ? '#7367EF' : 'rgba(0, 0, 0, 0.12)',
                    borderWidth: selectedExtraService === service.title ? 2 : 1,
                    borderStyle: 'solid',
                    boxSizing: 'border-box',
                    height: '250px',
                    padding: '20px 30px 0px 30px',
                    marginBottom: '20px',
                    width: '48%',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1rem',
                      color: selectedExtraService === service.title ? '#7367EF' : '#B4B1B1',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: selectedExtraService === service.title ? '#7367EF' : '#B4B1B1',
                      mt: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                    <InputLabel>Options</InputLabel>
                    <Select
                      value={selectedOptions[service.title]}
                      onChange={handleOptionChange(service.title)}
                    >
                      {service.options.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                          {option.label} - ${option.price}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.25rem',
                      color: selectedExtraService === service.title ? '#7367EF' : '#B4B1B1',
                      mt: 1,
                    }}
                  >
                    ${getPrice(service.title, selectedOptions[service.title])} / Year
                  </Typography>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      color: selectedExtraService === service.title ? '#7367EF' : '#B4B1B1',
                    }}
                  >
                    <InfoOutlinedIcon />
                  </IconButton>
                </Card>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant="h6">
              Burstable
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h7" sx={{ ml: 1, color: '#7367EF', fontWeight: 'Bold' }}>
                $150.00 / year
              </Typography>
              <Switch checked={isBurstableSwitchChecked} onChange={handleBurstableSwitchChange} />
            </Box>
          </Box>
          {isBurstableSwitchChecked && (
            <Card
              variant="outlined"
              onClick={handleBurstableClick}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
                backgroundColor: selectedBurstable ? '#F6F5FF' : 'white',
                borderColor: selectedBurstable ? '#7367EF' : 'rgba(0, 0, 0, 0.12)',
                borderWidth: selectedBurstable ? 2 : 1,
                borderStyle: 'solid',
                boxSizing: 'border-box',
                padding: '20px 30px 0px 30px',
                marginBottom: '20px',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    color: selectedBurstable ? '#7367EF' : '#B4B1B1',
                  }}
                >
                  {burstableService.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 1 }}>U$ {burstableService.price} / year</Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: selectedBurstable ? '#7367EF' : '#B4B1B1',
                  mt: 1,
                  whiteSpace: 'pre-line',
                }}
              >
                {burstableService.description}
              </Typography>
            </Card>
          )}
        </CardContent>
      </Card>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant="h6">
              Wi-Fi
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h7" sx={{ ml: 1, color: '#7367EF', fontWeight: 'Bold' }}>
                $99.00 / year
              </Typography>
              <Switch checked={isWifiSwitchChecked} onChange={handleWifiSwitchChange} />              
            </Box>
          </Box>
          {isWifiSwitchChecked && (
            <Card
              variant="outlined"
              onClick={handleWifiClick}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
                backgroundColor: selectedWifi ? '#F6F5FF' : 'white',
                borderColor: selectedWifi ? '#7367EF' : 'rgba(0, 0, 0, 0.12)',
                borderWidth: selectedWifi ? 2 : 1,
                borderStyle: 'solid',
                boxSizing: 'border-box',
                padding: '20px 30px 0px 30px',
                marginBottom: '20px',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    color: selectedWifi ? '#7367EF' : '#B4B1B1',
                  }}
                >
                  {wifiService.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 1 }}>U$ {wifiService.price} / year</Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: selectedWifi ? '#7367EF' : '#B4B1B1',
                  mt: 1,
                  whiteSpace: 'pre-line',
                }}
              >
                {wifiService.description}
              </Typography>
            </Card>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ServiceExtraBroadband;
