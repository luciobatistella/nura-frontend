import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import antiDdosImage from '../assets/antiddos-service.png'; // Imagem representando Anti-DDoS Services
import antiDdosServiceImage2 from '../assets/antiddos-service2.png'; // Outra imagem para Anti-DDoS Services
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStep from '../components/StepByStep';

const AntiDDOSServiceDetails = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : 'panel1');
    };

    useEffect(() => {
        document.body.style.backgroundColor = '#FFF';
    }, []);

    return (
        <Box sx={{ width: '100%', mt: 2 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Container>
                    <Card sx={{ mt: 0, width: '100%', border: '0px', boxShadow: 'none' }}>
                        <CardContent sx={{ padding: '20px 30px' }}>
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', display: 'flex' }}>
                                Ultimate Protection with <Typography variant="h4" sx={{ color: '#7367EF', fontWeight: 'bold', paddingLeft: '10px' }}>Anti-DDoS Solutions</Typography>
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8} sx={{ mt: 1, paddingRight: '100px' }}>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        DDoS (Distributed Denial of Service) attacks can severely disrupt your business operations by overwhelming your network and services. Our Anti-DDoS solution mitigates these attacks in real time, ensuring that your business remains operational, secure, and resilient against malicious threats.
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        Our Anti-DDoS services are designed to detect, analyze, and block threats before they can cause damage, providing you with peace of mind and uninterrupted service.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img
                                        src={antiDdosImage}
                                        alt="Anti-DDoS Services"
                                        style={{ width: '300px', height: 'auto', borderRadius: '8px' }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>

            <Box sx={{ bgcolor: '#F7F3FF', py: 8 }}>
                <Container>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                        Why Choose Our Anti-DDoS Solutions?
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Real-Time Mitigation
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Our Anti-DDoS services identify and neutralize attacks as they happen, ensuring that your services remain unaffected by malicious traffic.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Global Coverage
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Our distributed protection network ensures your business is protected across all regions, providing resilience against DDoS attacks wherever you operate.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Scalable Protection
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Our solution is designed to scale with your business, providing protection from attacks of any size, from small disruptions to large-scale events.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <StepByStep />

            <Box sx={{ width: '100%', bgcolor: '#F7F4FE', mt: 0, py: 2 }}>
                <Container>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ width: '100%', maxWidth: '1280px', px: 4, mb: 6, mt: 5 }}>
                            <Typography variant="h5" sx={{ textAlign: 'center', color: '#000', mb: 4, fontWeight: 'Bold' }}>
                                Why Choose Our Anti-DDoS Solutions?
                            </Typography>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <img
                                        src={antiDdosServiceImage2}
                                        alt="Anti-DDoS Protection"
                                        style={{ width: '350px', height: '350px', position: 'relative' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Comprehensive Coverage</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our Anti-DDoS services offer comprehensive protection against a wide range of DDoS attack vectors, ensuring your business stays secure.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Minimal Downtime</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our solutions are designed to minimize downtime during attacks, keeping your services available when they matter most.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">24/7 Monitoring</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                With 24/7 monitoring, our team is always on guard, ready to respond to any attack as soon as it occurs.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Scalable Protection</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our Anti-DDoS services are built to scale with your business, protecting you from any level of attack, no matter the size.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <CallToAction />
            <FormContact />
        </Box>
    );
};

export default AntiDDOSServiceDetails;
