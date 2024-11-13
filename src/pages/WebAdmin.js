import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Breadcrumbs,
  Button,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Popover,
  Divider,
  Grid,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import {
  People as PeopleIcon,
  Inbox as InboxIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Print as PrintIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  FilterList as FilterListIcon,
  CalendarToday as CalendarTodayIcon,
  SortByAlpha as SortByAlphaIcon
} from '@mui/icons-material';
import nuraLogoLight from '../assets/nura-logo.svg';
import nuraLogoDark from '../assets/nura-logo-dark.svg';

const drawerWidth = 265;

const createData = (name, cpf, city, contact) => ({ name, cpf, city, contact });
const rows = Array.from({ length: 50 }, (_, index) =>
  createData(`Nome ${index + 1}`, `CPF ${index + 1}`, `Cidade ${index + 1}`, `Contato ${index + 1}`)
);

const WebAdmin = ({ isDarkTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filtersAnchor, setFiltersAnchor] = useState(null);
  const [selectedTab, setSelectedTab] = useState('Todos');
  const [selected, setSelected] = useState([]);

  const handleOpenFilterMenu = (event) => {
    setFiltersAnchor(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setFiltersAnchor(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const buttonStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ebebeb',
    borderRadius: '19px',
    color: '#000',
    cursor: 'pointer',
    fontFamily: 'Poppins, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '1.428571429',
    padding: '5px 15px',
    transition: 'box-shadow .2s ease-out, border .2s ease-out, border-radius .2s ease-out, background-color .1s ease-out, color .1s ease-out, transform .1s ease-out',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    display: 'flex',
    '&:hover': {
      backgroundColor: '#f2f1fa'
    }
  }

  return (
    <Box sx={{ display: 'flex', marginTop: '10px !important', width: '100%' }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#F2F1FA' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px', justifyContent: 'center' }}>
          <img src={isDarkTheme ? nuraLogoDark : nuraLogoLight} alt="Nura Connect Logo" style={{ width: '70px' }} />
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes e Fornecedores" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Pedidos de Venda" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, height: '100vh', minWidth: '100%' }}>
        {/* Breadcrumbs and Actions */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary" component="a" href="/">
              Início
            </Typography>
            <Typography color="textPrimary">Cadastros</Typography>
            <Typography color="textSecondary">Clientes e Fornecedores</Typography>
          </Breadcrumbs>
          <Box>
            <Button variant="outlined" startIcon={<PrintIcon />}>Imprimir</Button>
            <Button variant="contained" sx={{ ml: 1 }}>Incluir Cadastro</Button>
            <IconButton onClick={handleMenuClick} sx={{ ml: 1 }}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Imprimir Cadastros Agrupados</MenuItem>
              <MenuItem onClick={handleMenuClose}>Exportar para Planilha</MenuItem>
              <MenuItem onClick={handleMenuClose}>Importar de Planilha</MenuItem>
            </Popover>
          </Box>
        </Box>

        {/* Filters and Search */}
        <Box display="flex" alignItems="center" mb={2}>
          <TextField
            placeholder="Pesquise por nome, cód., fantasia, email ou CPF/CNPJ"
            variant="outlined"
            size="small"
            sx={
                {
                    width: '30%',
                    marginRight: '10px'
                }
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" startIcon={<CalendarTodayIcon />} sx={{ 
            
            ...buttonStyle
            
            }}>
            Por data do cadastro
          </Button>
          <Button variant="outlined" startIcon={<SortByAlphaIcon />} sx={{...buttonStyle, ml: 1 }}>
            Nome
          </Button>
          <Button variant="outlined" sx={{...buttonStyle, ml: 1 }}>
            Por situação
          </Button>
          <Button variant="outlined" startIcon={<FilterListIcon />} sx={{...buttonStyle, ml: 1 }}>
            Filtros
          </Button>
        </Box>

        {/* Tabs */}
        <Box display="flex" mb={1}>
          {['Todos', 'Cliente', 'Fornecedor', 'Transportador', 'Outro'].map((tab) => (
            <Button
              key={tab}
              variant="text"
              onClick={() => setSelectedTab(tab)}
              sx={{
                borderBottom: selectedTab === tab ? '2px solid #7367F0' : 'none',
                color: selectedTab === tab ? '#7367F0' : 'inherit'
              }}
            >
              {tab} {tab === 'Todos' ? '(01)' : ''}
            </Button>
          ))}
        </Box>

        <Divider />

        {/* Table */}
        <Paper sx={{ width: '100%', mt: 2 }}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={selected.length > 0 && selected.length < rows.length}
                      checked={rows.length > 0 && selected.length === rows.length}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>CPF/CNPJ</TableCell>
                  <TableCell>Cidade</TableCell>
                  <TableCell>Contato</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  const isItemSelected = isSelected(row.name);
                  return (
                    <TableRow
                      key={row.name}
                      hover
                      onClick={() => handleClick(row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked={isItemSelected} />
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.cpf}</TableCell>
                      <TableCell>{row.city}</TableCell>
                      <TableCell>{row.contact}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default WebAdmin;
