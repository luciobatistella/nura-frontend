import React, { useState, useMemo } from 'react';
import { Box, Card, CardContent, Typography, Grid, Tabs, Tab, Autocomplete, TextField, InputAdornment, IconButton, Checkbox, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import ServiceOptions from './ServiceOptions';
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

const ServiceEPLData = () => {
  const [selectedTabOrigin, setSelectedTabOrigin] = useState(0);
  const [selectedTabDestination, setSelectedTabDestination] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAdditionalLocation, setSelectedAdditionalLocation] = useState('');
  const [selectedDestinationLocation, setSelectedDestinationLocation] = useState(null);
  const [selectedDestinationAdditionalLocation, setSelectedDestinationAdditionalLocation] = useState('');
  const [anchorElOrigin, setAnchorElOrigin] = useState(null);
  const [anchorElDestination, setAnchorElDestination] = useState(null);
  const [checkedCountriesOrigin, setCheckedCountriesOrigin] = useState([]);
  const [checkedCountriesDestination, setCheckedCountriesDestination] = useState([]);
  const [visibleLocationsOrigin, setVisibleLocationsOrigin] = useState(11);
  const [visibleLocationsDestination, setVisibleLocationsDestination] = useState(11);

  const handleTabChangeOrigin = (event, newValue) => {
    setSelectedTabOrigin(newValue);
    setSelectedLocation(null);
    setSelectedAdditionalLocation('');
    setVisibleLocationsOrigin(11);
  };

  const handleTabChangeDestination = (event, newValue) => {
    setSelectedTabDestination(newValue);
    setSelectedDestinationLocation(null);
    setSelectedDestinationAdditionalLocation('');
    setVisibleLocationsDestination(11);
  };

  const handleFilterClickOrigin = (event) => {
    setAnchorElOrigin(event.currentTarget);
  };

  const handleFilterCloseOrigin = () => {
    setAnchorElOrigin(null);
  };

  const handleFilterClickDestination = (event) => {
    setAnchorElDestination(event.currentTarget);
  };

  const handleFilterCloseDestination = () => {
    setAnchorElDestination(null);
  };

  const handleCountryCheckOrigin = (country) => {
    setCheckedCountriesOrigin((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

  const handleCountryCheckDestination = (country) => {
    setCheckedCountriesDestination((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

  const groupedCountries = useMemo(() => {
    return locations[0].reduce((acc, location) => {
      if (acc[location.country]) {
        acc[location.country].cityCount += 1;
      } else {
        acc[location.country] = {
          name: location.country,
          flag: flagUrls[location.country],
          cityCount: 1,
        };
      }
      return acc;
    }, {});
  }, [locations]);

  const loadMoreLocationsOrigin = () => {
    setVisibleLocationsOrigin((prev) => prev + 11);
  };

  const loadMoreLocationsDestination = () => {
    setVisibleLocationsDestination((prev) => prev + 11);
  };

  return (
    <Box sx={{ width: '100%', mt: 1 }}>
      <Grid container spacing={2}>
        {/* Seção de Origem */}
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent sx={{ padding: '20px 30px' }}>
              <Typography variant="h6" fontWeight="bold">
                Origin - Select Location
              </Typography>
              <Box display="flex" alignItems="center">
                <Tabs value={selectedTabOrigin} onChange={handleTabChangeOrigin} aria-label="location tabs">
                  <Tab label={`South America`} />
                  <Tab label={`North America`} />
                  <Tab label={`Europe`} />
                </Tabs>
                <IconButton onClick={handleFilterClickOrigin} sx={{ ml: 2 }}>
                  <FilterListIcon />
                </IconButton>
              </Box>

              <Menu anchorEl={anchorElOrigin} open={Boolean(anchorElOrigin)} onClose={handleFilterCloseOrigin}>
                {Object.values(groupedCountries).map((country, index) => (
                  <MenuItem key={index} onClick={() => handleCountryCheckOrigin(country.name)}>
                    <Checkbox checked={checkedCountriesOrigin.includes(country.name)} />
                    <Box component="img" src={country.flag} alt={`${country.name} flag`} sx={{ width: 16, height: 16, marginRight: '10px' }} />
                    {country.name} - {country.cityCount} cities
                  </MenuItem>
                ))}
              </Menu>

              <Box sx={{ mt: 2, width: '100%' }}>
                <Grid container spacing={1}>
                  {locations[selectedTabOrigin]
                    .filter((location) => checkedCountriesOrigin.length === 0 || checkedCountriesOrigin.includes(location.country))
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
                          <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '5px', marginBottom: '-15px !important' }}>
                            <Box
                              component="img"
                              src={flagUrls[location.country]}
                              alt={`${location.country} flag`}
                              sx={{ width: 25, height: 15, borderRadius: '10%', marginRight: '10px', marginLeft: '-20px' }}
                            />
                            <Box>
                              <Typography variant="h6" sx={{ fontSize: '1em', color: selectedLocation === location.name ? '#7367F0' : 'inherit' }}>
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
                      <SelectableCard onClick={loadMoreLocationsOrigin} sx={{ backgroundColor: '#efefef'}}>
                        <Typography sx={{ color: '#7367F0', textAlign: 'center', height: '60px', lineHeight: '60px' }}>
                          Show More ...
                        </Typography>
                      </SelectableCard>
                    </Grid>
                  )}
                </Grid>
              </Box>

              {selectedLocation && (
                <Autocomplete
                  fullWidth
                  sx={{ mt: 2 }}
                  options={locationDetails[selectedLocation]?.map((option) => option.name) || []}
                  value={selectedAdditionalLocation}
                  onChange={(event, newValue) => {
                    setSelectedAdditionalLocation(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`Additional Locations for ${selectedLocation}`}
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
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Seção de Destino - Apenas visível após completar a Seção de Origem */}
        {selectedLocation && selectedAdditionalLocation && (
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <Card>
              <CardContent sx={{ padding: '20px 30px' }}>
                <Typography variant="h6" fontWeight="bold">
                  Destination - Select Location
                </Typography>
                <Box display="flex" alignItems="center">
                  <Tabs value={selectedTabDestination} onChange={handleTabChangeDestination} aria-label="destination tabs">
                    <Tab label={`South America`} />
                    <Tab label={`North America`} />
                    <Tab label={`Europe`} />
                  </Tabs>
                  <IconButton onClick={handleFilterClickDestination} sx={{ ml: 2 }}>
                    <FilterListIcon />
                  </IconButton>
                </Box>

                <Menu anchorEl={anchorElDestination} open={Boolean(anchorElDestination)} onClose={handleFilterCloseDestination}>
                  {Object.values(groupedCountries).map((country, index) => (
                    <MenuItem key={index} onClick={() => handleCountryCheckDestination(country.name)}>
                      <Checkbox checked={checkedCountriesDestination.includes(country.name)} />
                      <Box component="img" src={country.flag} alt={`${country.name} flag`} sx={{ width: 16, height: 16, marginRight: '10px' }} />
                      {country.name} - {country.cityCount} cities
                    </MenuItem>
                  ))}
                </Menu>

                <Box sx={{ mt: 2, width: '100%' }}>
                  <Grid container spacing={1}>
                    {locations[selectedTabDestination]
                      .filter((location) => checkedCountriesDestination.length === 0 || checkedCountriesDestination.includes(location.country))
                      .slice(0, visibleLocationsDestination)
                      .map((location, index) => (
                        <Grid item xs={3} key={index}>
                          <SelectableCard
                            selected={selectedDestinationLocation === location.name}
                            onClick={() => {
                              setSelectedDestinationLocation(location.name);
                              setSelectedDestinationAdditionalLocation('');
                            }}
                          >
                            <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '5px', marginBottom: '-15px !important' }}>
                              <Box
                                component="img"
                                src={flagUrls[location.country]}
                                alt={`${location.country} flag`}
                                sx={{ width: 25, height: 15, borderRadius: '10%', marginRight: '10px', marginLeft: '-20px' }}
                              />
                              <Box>
                                <Typography variant="h6" sx={{ fontSize: '1em', color: selectedDestinationLocation === location.name ? '#7367F0' : 'inherit' }}>
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

                    {visibleLocationsDestination < locations[selectedTabDestination].length && (
                      <Grid item xs={3}>
                        <SelectableCard onClick={loadMoreLocationsDestination} sx={{backgroundColor: '#efefef'}}>
                          <Typography sx={{ color: '#7367F0', textAlign: 'center', height: '60px', lineHeight: '60px'}}>
                            Show More ...
                          </Typography>
                        </SelectableCard>
                      </Grid>
                    )}
                  </Grid>
                </Box>

                {selectedDestinationLocation && (
                  <Autocomplete
                    fullWidth
                    sx={{ mt: 2 }}
                    options={locationDetails[selectedDestinationLocation]?.map((option) => option.name) || []}
                    value={selectedDestinationAdditionalLocation}
                    onChange={(event, newValue) => {
                      setSelectedDestinationAdditionalLocation(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={`Additional Locations for ${selectedDestinationLocation}`}
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
                )}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

      {/* Adicionando ServiceOptions ao final da seleção completa */}
      {selectedDestinationLocation && selectedDestinationAdditionalLocation && <ServiceOptions />}
    </Box>
  );
};

export default ServiceEPLData;
