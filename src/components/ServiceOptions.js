// Assumindo que as funções de prop `onServicePriceChange` e `onContractPeriodChange` são usadas corretamente neste componente.
// Certifique-se de que você as utilize conforme necessário.

import React, { useState, useRef, useEffect } from 'react';
import { Box, Card, CardContent, Typography, MenuItem, Select, FormControl, Button, Slider, CircularProgress, TextField } from '@mui/material';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as BroadbandServicesIcon } from '../assets/broadband-services.svg';
import '../App.css'; // Certifique-se de importar o arquivo CSS

const initialSpeedOptions = [
  { speed: '10Mbps', prices: { 1: 100, 2: 90, 3: 80 }, description: 'Ideal for basic browsing, social networks and emails.' },
  { speed: '50Mbps', prices: { 1: 200, 2: 180, 3: 160 }, description: 'Perfect for streaming HD videos and online gaming.' },
  { speed: '100Mbps', prices: { 1: 300, 2: 270, 3: 240 }, description: 'Great for multiple devices and heavy usage.' },
  { speed: '200Mbps', prices: { 1: 400, 2: 360, 3: 320 }, description: 'Optimal for large households and remote work.' },
  { speed: '300Mbps', prices: { 1: 500, 2: 450, 3: 400 }, description: 'Best for ultra-fast downloads and streaming 4K videos.' },
];

const customSpeedOption = {
  speed: 'Custom Speed',
  prices: { 1: 0, 2: 0, 3: 0 },
  description: 'Customized speed as per your requirement.',
};

const marks = [
  { value: 10, label: '10' },
  { value: 20, label: '50' },
  { value: 30, label: '100' },
  { value: 40, label: '200' },
  { value: 50, label: '300' },
  { value: 60, label: '500' },
  { value: 70, label: '1000' },
  { value: 80, label: 'Custom Speed' },
];

function valuetext(value) {
  const mark = marks.find((mark) => mark.value === value);
  return mark ? mark.label : `${value}Mbps`;
}

const ServiceOptions = ({ onServicePriceChange, onContractPeriodChange }) => {
  const [selectedSpeed, setSelectedSpeed] = useState('50Mbps');
  const [contractPeriod, setContractPeriod] = useState(
    initialSpeedOptions.reduce((acc, option) => {
      acc[option.speed] = 1;
      return acc;
    }, {})
  );
  const [showCustomize, setShowCustomize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [speedOptions, setSpeedOptions] = useState(initialSpeedOptions);
  const [customSpeed, setCustomSpeed] = useState(50);
  const [customSpeedInput, setCustomSpeedInput] = useState('');
  const customizeRef = useRef(null);
  const slickRef = useRef(null);

  const handleCardClick = (speed) => {
    setSelectedSpeed(speed);
    if (speed === 'Custom Speed' && slickRef.current) {
      slickRef.current.slickGoTo(speedOptions.length - 1); // Vai para o último slide
    }
    onServicePriceChange(speedOptions.find(option => option.speed === speed).prices[contractPeriod[speed]]);
    onContractPeriodChange(contractPeriod[speed]);
  };

  const handlePeriodChange = (speed) => (event) => {
    setContractPeriod((prev) => ({
      ...prev,
      [speed]: event.target.value,
    }));
    if (selectedSpeed === speed) {
      onServicePriceChange(speedOptions.find(option => option.speed === speed).prices[event.target.value]);
      onContractPeriodChange(event.target.value);
    }
  };

  const handleCustomizeClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCustomize(true);
      setSpeedOptions([...initialSpeedOptions, customSpeedOption]);
      setSelectedSpeed('Custom Speed');
      if (customizeRef.current) {
        customizeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Ajuste o tempo para um loading mais rápido
  };

  const handleSliderChange = (event, newValue) => {
    setCustomSpeed(newValue);
    if (newValue === 80) {
      setCustomSpeedInput('');
    } else {
      customSpeedOption.prices[1] = newValue;
      customSpeedOption.prices[2] = newValue - newValue * 0.1;
      customSpeedOption.prices[3] = newValue - newValue * 0.2;
    }
    setContractPeriod((prev) => ({
      ...prev,
      'Custom Speed': 1,
    }));
  };

  const getPrice = () => {
    if (customSpeed === 80) {
      return customSpeedInput;
    } else {
      return customSpeedOption.prices[contractPeriod['Custom Speed']];
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (selectedSpeed === 'Custom Speed' && slickRef.current) {
      slickRef.current.slickGoTo(speedOptions.length - 1); // Vai para o último slide quando "Custom Speed" é selecionado
    }
  }, [selectedSpeed, speedOptions.length]);

  return (
    <Box sx={{ mt: 2 }}>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 50px 0px 50px', marginBottom: '0px' }}>
          <Typography variant="h6" align="center" sx={{ mt: 2, mb: 4 }}>
            Select the desired speed and the contract period. 
            The price will be calculated automatically based on your choices.
          </Typography>
          <SliderSlick {...settings} ref={slickRef}>
            {speedOptions.map((option) => (
              <Box key={option.speed} px={2}>
                <Card
                  variant="outlined"
                  onClick={() => handleCardClick(option.speed)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: selectedSpeed === option.speed ? '#F6F5FF' : 'white',
                    borderColor: selectedSpeed === option.speed ? '#7367EF' : 'rgba(0, 0, 0, 0.12)',
                    borderWidth: selectedSpeed === option.speed ? 2 : 1,
                    borderStyle: 'solid',
                    boxSizing: 'border-box',
                    height: '300px',
                    padding: '20px 30px 0px 30px',
                    marginBottom: '0px',
                    color: selectedSpeed === option.speed ? '#7367EF' : '#B4B1B1',
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <BroadbandServicesIcon
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '1.2rem',
                      color: 'inherit',
                    }}
                  >
                    {option.speed}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: 'inherit',
                    }}
                  >
                    {option.description}
                  </Typography>
                  {option.speed !== 'Custom Speed' && (
                    <>
                      <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                        <Select
                          id="demo-select-small"
                          value={contractPeriod[option.speed]}
                          onChange={handlePeriodChange(option.speed)}
                          size="small"
                        >
                          <MenuItem value={1}>1 Year</MenuItem>
                          <MenuItem value={2}>2 Years</MenuItem>
                          <MenuItem value={3}>3 Years</MenuItem>
                        </Select>
                      </FormControl>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '1.25rem',
                          mt: 1,
                          color: 'inherit',
                        }}
                      >
                        ${option.prices[contractPeriod[option.speed]]} / {contractPeriod[option.speed] > 1 ? `${contractPeriod[option.speed]} Years` : 'Year'}
                      </Typography>
                    </>
                  )}
                </Card>
              </Box>
            ))}
          </SliderSlick>
          <Box sx={{ textAlign: 'center', mt: 7 }}>
            <Button variant="contained" onClick={handleCustomizeClick}>
              Customize your speed
            </Button>
            {loading && <CircularProgress size={24} sx={{ ml: 2 }} />}
          </Box>
        </CardContent>
      </Card>
      {showCustomize && (
        <Box sx={{ mb: 2, mt: '-20px' }} ref={customizeRef}>
          <Card sx={{backgroundColor: '#FBFBFB', borderTop: '2px dashed #ccc', borderRadius: 0}}>
          <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
              <Typography variant="h6" gutterBottom>
                Customize Your Speed
              </Typography>
              <Box sx={{ width: '85%', mx: 'auto', mt: 5 }}>
                <Slider
                  aria-label="Custom Speed"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={null}
                  marks={marks}
                  min={10}
                  max={80}
                  onChange={handleSliderChange}
                  value={customSpeed}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                {customSpeed === 80 && (
                  <TextField
                    label="Enter your desired speed"
                    variant="outlined"
                    value={customSpeedInput}
                    onChange={(e) => setCustomSpeedInput(e.target.value)}
                    size="small"
                    sx={{ mr: 2 }}
                  />
                )}
                <FormControl sx={{ minWidth: 120, mr: 2 }} size="small">
                  <Select
                    id="demo-select-small"
                    value={contractPeriod['Custom Speed']}
                    onChange={handlePeriodChange('Custom Speed')}
                    size="small"
                  >
                    <MenuItem value={1}>1 Year</MenuItem>
                    <MenuItem value={2}>2 Years</MenuItem>
                    <MenuItem value={3}>3 Years</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" size="small">
                  Add Service
                </Button>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.25rem',
                  mt: 2,
                  textAlign: 'center',
                }}
              >
                ${getPrice()} / {contractPeriod['Custom Speed'] > 1 ? `${contractPeriod['Custom Speed']} Years` : 'Year'}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default ServiceOptions;
