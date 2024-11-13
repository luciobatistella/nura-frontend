import React from 'react';
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
  Divider,
  Tabs,
  Tab,
  Grid,
  Paper,
} from '@mui/material';
import { People as PeopleIcon, Inbox as InboxIcon, ArrowBack as ArrowBackIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import nuraLogoLight from '../assets/nura-logo.svg';
import nuraLogoDark from '../assets/nura-logo-dark.svg';

const drawerWidth = 265;

const WebAdminDetail = ({ isDarkTheme }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
          <Box display="flex" alignItems="center">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 1 }}>
              <Typography color="textPrimary" component="a" href="/">
                Início
              </Typography>
              <Typography color="textPrimary">Cadastros</Typography>
              <Typography color="textSecondary">Clientes e Fornecedores</Typography>
            </Breadcrumbs>
          </Box>
          <Box>
            <Button variant="contained" sx={{ backgroundColor: '#857af2', mr: 1 }}>Editar</Button>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Title and Tabs */}
        <Typography variant="h5" fontWeight="bold" mb={1}>Contato</Typography>
        <Typography variant="h6" mb={2}>Fernanda Alves</Typography>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Tabs">
          <Tab label="Dados Gerais" />
          <Tab label="Dados Complementares" />
          <Tab label="Anexos" />
          <Tab label="Observações" />
        </Tabs>
        <Divider />

        {/* Tab Content */}
        {selectedTab === 0 && (
          <Box mt={2}>
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Nome</Typography>
              <Typography>Fernanda Alves</Typography>
              <Typography variant="subtitle1" fontWeight="bold">Tipo de Pessoa</Typography>
              <Typography>Pessoa Física</Typography>
              <Typography variant="subtitle1" fontWeight="bold">CPF</Typography>
              <Typography>259.557.328-45</Typography>
              <Typography variant="subtitle1" fontWeight="bold">Contribuinte</Typography>
              <Typography>9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS</Typography>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Endereço</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" fontWeight="bold">CEP</Typography>
                  <Typography>12.242-000</Typography>
                  <Typography variant="subtitle2" fontWeight="bold">Endereço</Typography>
                  <Typography>Avenida São João</Typography>
                  <Typography variant="subtitle2" fontWeight="bold">Bairro</Typography>
                  <Typography>Jardim das Colinas</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" fontWeight="bold">Município</Typography>
                  <Typography>São José dos Campos</Typography>
                  <Typography variant="subtitle2" fontWeight="bold">Número</Typography>
                  <Typography>2380</Typography>
                  <Typography variant="subtitle2" fontWeight="bold">Complemento</Typography>
                  <Typography>Apto 141 Torre 3</Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Contato</Typography>
              <Typography variant="subtitle2" fontWeight="bold">Telefone</Typography>
              <Typography>(12) 98703-8866</Typography>
              <Typography variant="subtitle2" fontWeight="bold">E-mail</Typography>
              <Typography>lucio.batistella@gmail.com</Typography>
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WebAdminDetail;
