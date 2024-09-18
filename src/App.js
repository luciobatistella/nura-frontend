import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Support from './pages/Support';
import PersonalData from './components/PersonalData';
import Projects from './pages/Projects';
import FinancialHistory from './pages/FinancialHistory';
import Alerts from './pages/Alerts';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Security from './pages/Security';
import ChangePassword from './pages/ChangePassword';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import BroadbandDetails from './pages/BroadbandDetails';
import DIAServiceDetails from './pages/DIAServiceDetails';
import EPLServiceDetails from './pages/EPLServiceDetails';
import PortsServiceDetails from './pages/PortsServiceDetails';
import LanToLanServiceDetails from './pages/LanToLanServiceDetails';


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Routes>
            <Route
              path="/services/broadband"
              element={
                <>
                  <Container sx={{ flexGrow: 1, mt: '130px' }}>
                    <Breadcrumb />
                  </Container>
                  <BroadbandDetails />
                </>
              }
            />
            <Route
              path="/services/dia"
              element={
                <>
                  <Container sx={{ flexGrow: 1, mt: '130px' }}>
                    <Breadcrumb />
                  </Container>
                  <DIAServiceDetails />
                </>
              }
            />
            <Route
              path="/services/epl"
              element={
                <>
                  <Container sx={{ flexGrow: 1, mt: '130px' }}>
                    <Breadcrumb />
                  </Container>
                  <EPLServiceDetails />
                </>
              }
            />
            <Route
              path="/services/ports"
              element={
                <>
                  <Container sx={{ flexGrow: 1, mt: '130px' }}>
                    <Breadcrumb />
                  </Container>
                  <PortsServiceDetails />
                </>
              }
            />
             <Route
              path="/services/lan"
              element={
                <>
                  <Container sx={{ flexGrow: 1, mt: '130px' }}>
                    <Breadcrumb />
                  </Container>
                  <LanToLanServiceDetails />
                </>
              }
            />
            <Route
              path="*"
              element={
                <Container component="main" sx={{ flexGrow: 1, mt: '130px' }}>
                  <Breadcrumb />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:serviceName" element={<ServiceDetail />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/personal-data" element={<PersonalData />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/financial-history" element={<FinancialHistory />} />
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </Container>
              }
            />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
