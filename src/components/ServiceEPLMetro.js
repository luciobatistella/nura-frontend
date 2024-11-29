import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Tabs,
  Tab,
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import ServiceOptions from './ServiceOptions';
import PaymentOptions from './PaymentOptions';
import Terms from './Terms';

import { locations, locationDetails, flagUrls } from '../constants/locations';

const SelectableCard = styled(Card)(({ selected }) => ({
  backgroundColor: selected ? '#E9E7F8' : 'white',
  border: selected ? '2px solid #7367F0' : '1px solid #ddd',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F1EFFB',
  },
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ServiceEPLMetro = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTabOrigin, setSelectedTabOrigin] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAdditionalLocation, setSelectedAdditionalLocation] = useState('');
  const [selectedDestinationAdditionalLocation, setSelectedDestinationAdditionalLocation] = useState('');
  const [visibleLocationsOrigin, setVisibleLocationsOrigin] = useState(11);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedLocation(null);
    setSelectedAdditionalLocation('');
  };

  const handleTabChangeOrigin = (event, newValue) => {
    setSelectedTabOrigin(newValue);
    setSelectedLocation(null);
    setSelectedAdditionalLocation('');
    setVisibleLocationsOrigin(11);
  };

  const loadMoreLocationsOrigin = () => {
    setVisibleLocationsOrigin((prev) => prev + 11);
  };

  return (
    <Box sx={{ width: '100%', mt: 1 }}>
      <Grid container spacing={2}>
        {/* Select Option Section */}
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent sx={{ padding: '20px 30px' }}>
              <Typography variant="h6" fontWeight="bold">Select Option</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <SelectableCard
                    selected={selectedOption === 'Metropolitan'}
                    onClick={() => handleOptionClick('Metropolitan')}
                  >
                    <CardContent>
                      <Typography textAlign="center" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Both Side
                      </Typography>
                      <Typography textAlign="center">Metropolitan address</Typography>
                    </CardContent>
                  </SelectableCard>
                </Grid>
                <Grid item xs={6}>
                  <SelectableCard
                    selected={selectedOption === 'Datacenter'}
                    onClick={() => handleOptionClick('Datacenter')}
                  >
                    <CardContent>
                      <Typography textAlign="center" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        One Side
                      </Typography>
                      <Typography textAlign="center">
                        Datacenter and Metropolitan address
                      </Typography>
                    </CardContent>
                  </SelectableCard>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Origin Section */}
        {selectedOption && (
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent sx={{ padding: '20px 30px' }}>
                <Typography variant="h6" fontWeight="bold">Origin</Typography>

                {/* Exibe abas e cartões apenas para "One Side" */}
                {selectedOption === 'Datacenter' && (
                  <>
                    <Box display="flex" alignItems="center">
                      <Tabs value={selectedTabOrigin} onChange={handleTabChangeOrigin}>
                        <Tab label="South America" />
                        <Tab label="North America" />
                        <Tab label="Europe" />
                      </Tabs>
                      <IconButton sx={{ ml: 2 }}>
                        <FilterListIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ mt: 2, width: '100%' }}>
                      <Grid container spacing={1}>
                        {locations[selectedTabOrigin]
                          .slice(0, visibleLocationsOrigin)
                          .map((location, index) => (
                            <Grid item xs={3} key={index}>
                              <SelectableCard
                                selected={selectedLocation === location.name}
                                onClick={() => {
                                  setSelectedLocation(location.name);
                                  setSelectedAdditionalLocation('');
                                }}
                              >
                                <CardContent
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '5px',
                                    marginBottom: '-15px !important',
                                  }}
                                >
                                  <Box
                                    component="img"
                                    src={flagUrls[location.country]}
                                    alt={`${location.country} flag`}
                                    sx={{
                                      width: 25,
                                      height: 15,
                                      borderRadius: '10%',
                                      marginRight: '10px',
                                      marginLeft: '-20px',
                                    }}
                                  />
                                  <Box>
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        fontSize: '1em',
                                        color: selectedLocation === location.name ? '#7367F0' : 'inherit',
                                      }}
                                    >
                                      {location.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                      {location.records} records
                                    </Typography>
                                  </Box>
                                </CardContent>
                              </SelectableCard>
                            </Grid>
                          ))}
                        {visibleLocationsOrigin < locations[selectedTabOrigin].length && (
                          <Grid item xs={3}>
                            <SelectableCard
                              onClick={loadMoreLocationsOrigin}
                              sx={{ backgroundColor: '#efefef' }}
                            >
                              <Typography
                                sx={{
                                  color: '#7367F0',
                                  textAlign: 'center',
                                  height: '60px',
                                  lineHeight: '60px',
                                }}
                              >
                                Show More ...
                              </Typography>
                            </SelectableCard>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  </>
                )}

                {/* Exibe sempre o campo "Autocomplete" */}
                <Autocomplete
                  fullWidth
                  sx={{ mt: 2 }}
                  options={
                    selectedOption === 'Datacenter'
                      ? locationDetails[selectedLocation]?.map((option) => option.name) || []
                      : []
                  }
                  value={selectedAdditionalLocation}
                  onChange={(event, newValue) => {
                    setSelectedAdditionalLocation(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Additional Locations"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <RoomOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* Destination Section */}
        {selectedOption && (
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent sx={{ padding: '20px 30px' }}>
                <Typography variant="h6" fontWeight="bold">Destination</Typography>

                {/* Apenas o campo "Autocomplete" é exibido para Destination */}
                <Autocomplete
                  fullWidth
                  sx={{ mt: 2 }}
                  options={[]}
                  value={selectedDestinationAdditionalLocation}
                  onChange={(event, newValue) => {
                    setSelectedDestinationAdditionalLocation(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Additional Locations"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <RoomOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

      {/* <ServiceOptions /> */}
      <PaymentOptions />
      <Terms />
    </Box>
    
  );
};

export default ServiceEPLMetro;
