import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Badge,
  Box
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloudIcon from '@mui/icons-material/Cloud'; // DIA
import WifiIcon from '@mui/icons-material/Wifi'; // Broadband
import LanIcon from '@mui/icons-material/Lan'; // LAN to LAN
import StorageIcon from '@mui/icons-material/Storage'; // Ports
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // EPL
import { grey } from '@mui/material/colors'; // For inactive icons

const months = [
  'Jan/2023', 'Feb/2023', 'Mar/2023', 'Apr/2023', 'May/2023', 'Jun/2023',
  'Jul/2023', 'Aug/2023', 'Sep/2023', 'Oct/2023', 'Nov/2023', 'Dec/2023',
  'Jan/2024', 'Feb/2024', 'Mar/2024', 'Apr/2024', 'May/2024', 'Jun/2024',
  'Jul/2024', 'Aug/2024', 'Sep/2024', 'Oct/2024', 'Nov/2024', 'Dec/2024'
];

const exchangeRate = 5.0; // Example: 1 USD = 5 BRL

const Signature = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [month, setMonth] = useState('Sep/2024'); // Control for monthly navigation
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu

  const rowsPerPage = 5;

  // Histórico de Janeiro de 2023 a Dezembro de 2024
  const data = [
    { month: 'Jan/2023', project: 'Project 1', services: ['DIA', 'Broadband'], cost: 'R$ 0,99' },
    { month: 'Feb/2023', project: 'Project 2', services: ['EPL', 'Ports'], cost: 'R$ 7,50' },
    { month: 'Mar/2023', project: 'Project 3', services: ['LAN to LAN', 'DIA'], cost: 'R$ 3,45' },
    { month: 'Apr/2023', project: 'Project 4', services: ['Broadband', 'EPL'], cost: 'R$ 8,10' },
    { month: 'May/2023', project: 'Project 1', services: ['Ports', 'LAN to LAN'], cost: 'R$ 2,99' },
    { month: 'Jun/2023', project: 'Project 2', services: ['DIA', 'Broadband'], cost: 'R$ 5,75' },
    { month: 'Jul/2023', project: 'Project 3', services: ['EPL', 'Ports'], cost: 'R$ 6,49' },
    { month: 'Aug/2023', project: 'Project 4', services: ['LAN to LAN', 'Broadband'], cost: 'R$ 9,15' },
    { month: 'Sep/2023', project: 'Project 1', services: ['DIA', 'Ports'], cost: 'R$ 3,89' },
    { month: 'Oct/2023', project: 'Project 2', services: ['Broadband', 'LAN to LAN'], cost: 'R$ 7,45' },
    { month: 'Nov/2023', project: 'Project 3', services: ['EPL', 'DIA'], cost: 'R$ 6,99' },
    { month: 'Dec/2023', project: 'Project 4', services: ['Ports', 'LAN to LAN'], cost: 'R$ 4,29' },
    // 2024: Todos os serviços disponíveis, com ícones ativos e inativos
    { month: 'Jan/2024', project: 'Project 5', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['DIA', 'Broadband'], cost: 'R$ 8,49' },
    { month: 'Feb/2024', project: 'Project 6', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['Ports', 'LAN to LAN'], cost: 'R$ 9,99' },
    { month: 'Mar/2024', project: 'Project 7', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['DIA', 'EPL', 'LAN to LAN'], cost: 'R$ 11,00' },
    { month: 'Apr/2024', project: 'Project 8', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['Broadband', 'Ports'], cost: 'R$ 6,50' },
    { month: 'May/2024', project: 'Project 9', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['DIA', 'Broadband', 'LAN to LAN'], cost: 'R$ 10,00' },
    { month: 'Jun/2024', project: 'Project 10', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['EPL', 'Ports'], cost: 'R$ 8,50' },
    { month: 'Jul/2024', project: 'Project 11', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['DIA', 'LAN to LAN'], cost: 'R$ 7,99' },
    { month: 'Aug/2024', project: 'Project 12', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['EPL', 'Broadband'], cost: 'R$ 9,49' },
    { month: 'Sep/2024', project: 'Project 13', services: ['DIA', 'Broadband', 'EPL', 'Ports', 'LAN to LAN'], activeServices: ['Ports', 'DIA'], cost: 'R$ 12,99' }
  ];

  // Função para calcular o total dinâmico em dólares
  const totalCostUSD = data
    .filter(item => item.month === month)
    .reduce((acc, curr) => acc + parseFloat(curr.cost.replace('R$', '').replace(',', '.')) / exchangeRate, 0)
    .toFixed(2);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(month);
    if (currentIndex > 0) {
      setMonth(months[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(month);
    if (currentIndex < months.length - 1) {
      setMonth(months[currentIndex + 1]);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedMonth) => {
    setAnchorEl(null);
    if (selectedMonth) {
      setMonth(selectedMonth);
    }
  };

  // Filtrar dados com base no mês e termo de pesquisa
  const filteredData = data.filter((row) =>
    row.project.toLowerCase().includes(searchTerm.toLowerCase()) &&
    row.month === month
  );

  // Paginar os dados filtrados
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  // Função para renderizar ícones com badge e tooltips, sem badge se o ícone estiver inativo
  const renderServiceIcons = (services, activeServices = []) => {
    return (
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        {services.map((service, index) => {
          const isActive = activeServices.includes(service);
          const iconColor = isActive ? 'primary' : grey[500]; // Active services are primary, inactive are grey

          const serviceIcons = {
            DIA: <CloudIcon sx={{ color: iconColor, width: 32, height: 32 }} />,
            EPL: <LocalShippingIcon sx={{ color: iconColor, width: 32, height: 32 }} />,
            Broadband: <WifiIcon sx={{ color: iconColor, width: 32, height: 32 }} />,
            Ports: <StorageIcon sx={{ color: iconColor, width: 32, height: 32 }} />,
            'LAN to LAN': <LanIcon sx={{ color: iconColor, width: 32, height: 32 }} />
          };

          // Somente adiciona badge se o ícone estiver ativo
          return (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {isActive ? (
                <Badge
                  badgeContent={index + 1}
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#7367EF',
                      color: '#fff',
                      fontSize: '0.75rem',
                    },
                  }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <Tooltip title={service}>
                    {serviceIcons[service]}
                  </Tooltip>
                </Badge>
              ) : (
                <Tooltip title={service}>
                  {serviceIcons[service]}
                </Tooltip>
              )}
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Grid container spacing={2}>
      {/* Total Signatures Header */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Total signatures: <span style={{ color: 'red' }}>${totalCostUSD}</span></h2> {/* Valor dinâmico em dólares */}
        <div>
          <Button onClick={handlePrevMonth}>
            <ArrowBackIosIcon />
          </Button>
          <Button variant="outlined" onClick={handleClick}>
            {month}
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
            {months.map((m) => (
              <MenuItem key={m} onClick={() => handleClose(m)}>
                {m}
              </MenuItem>
            ))}
          </Menu>
          <Button onClick={handleNextMonth}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </Grid>

      {/* Search Field */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Search..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Grid>

      {/* Table */}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name Project</TableCell>
                <TableCell>Contracted Services</TableCell>
                <TableCell>{month}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.project}</TableCell>
                  <TableCell>{renderServiceIcons(row.services, row.activeServices)}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Pagination */}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </Grid>
    </Grid>
  );
};

export default Signature;