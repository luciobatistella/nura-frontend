import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import colocationImage from '../assets/colocation-service.png'; // Imagem representando Colocation
import colocationServiceImage2 from '../assets/colocation-service2.png'; // Outra imagem para Colocation Services
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStep from '../components/StepByStep';

const ColocationServiceDetails = () => {
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
                                Reliable Infrastructure with <Typography variant="h4" sx={{ color: '#7367EF', fontWeight: 'bold', paddingLeft: '10px' }}>Secure Colocation</Typography>
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8} sx={{ mt: 1, paddingRight: '100px' }}>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        Colocation services provide your business with the physical infrastructure needed to house your servers, data storage, and other IT equipment in a secure and reliable environment.
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        With our colocation solutions, you can avoid the high costs and complexities of maintaining your own data centers, while still retaining full control over your hardware and software.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img
                                        src={colocationImage}
                                        alt="Colocation Services"
                                        style={{ width: 'auto', height: '350px', borderRadius: '8px' }}
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
                        Why Choose Our Colocation Services?
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Reliable Infrastructure
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Our data centers are built with state-of-the-art infrastructure, ensuring reliable power, cooling, and security for your equipment.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Enhanced Security
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        With multi-layered security protocols, your servers and data are protected from unauthorized access and physical threats.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Cost Efficiency
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Save on operational costs by colocating your equipment in our data centers, without having to invest in your own infrastructure.
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
                                Why Choose Our Colocation Solutions?
                            </Typography>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <img
                                        src={colocationServiceImage2}
                                        alt="Colocation Data Centers"
                                        style={{ width: '350px', height: '350px', position: 'relative' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Robust Infrastructure</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our colocation services offer top-tier infrastructure to ensure your equipment runs smoothly with minimal downtime.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">24/7 Monitoring</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our facilities are monitored 24/7 to provide proactive support and address potential issues before they impact your business.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Scalability</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Easily scale your colocation services as your business grows, ensuring your infrastructure keeps up with your demand.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Global Connectivity</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our colocation services offer global connectivity, allowing your business to expand its operations without limitations.
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

export default ColocationServiceDetails;
