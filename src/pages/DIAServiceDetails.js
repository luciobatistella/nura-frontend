import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import diaImage from '../assets/dia-internet-connectivity.png'; // Substitua pela imagem de DIA
import diaServiceImage2 from '../assets/diaService2.png'; // Pode ser uma imagem diferente, se aplicável
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStep from '../components/StepByStep';
const DIAServiceDetails = () => {
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
                                Speed, Reliability and  <Typography variant="h4" sx={{ color: '#7367EF', fontWeight: 'bold', paddingLeft: '10px' }}>Security Exclusively</Typography>
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={9} sx={{ mt: 1, paddingRight: '100px' }}>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        Dedicated Internet Access (DIA) is a solution that provides an internet connection solely for your business. Unlike regular broadband connections, where bandwidth may be shared with other users, DIA ensures that your business has a fast, stable, and fully dedicated connection.
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        With DIA, your business benefits from guaranteed bandwidth, enhanced security, and a consistent connection, making it the ideal choice for mission-critical applications and high-demand environments.
                                    </Typography>

                                    {/* <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        Benefits of DIA
                                    </Typography>
                                    <Grid sx={{
                                        p: 1,
                                        m: 5,
                                        borderRadius: 1,
                                        bgcolor: 'background.default',
                                        display: 'grid',
                                        textAlign: 'center',
                                        marginTop: '10px',
                                        lineHeight: '10px',
                                        gridTemplateColumns: { md: '1fr 1fr' },
                                        gap: 2,
                                    }}>
                                        <Card>
                                            <CardContent sx={{fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                                                Dedicated Bandwidth
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardContent  sx={{fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                                                High Availability
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardContent  sx={{fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                                                Advanced Security
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardContent  sx={{fontWeight: 'bold', mt: 1, color: '#7367EF' }}>
                                                Personalized Support
                                            </CardContent>
                                        </Card>
                                    </Grid> */}
                                </Grid>
                                <Grid item xs={12} md={3} position="relative" display="flex" justifyContent="center">
                                    <img
                                        src={diaImage}
                                        alt="DIA Services"
                                        style={{ width: '350px', height: '350px', borderRadius: '8px', marginRight: '50px' }}
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
                        Why Choose DIA?
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Security, Performance
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        With DIA, you'll have a dedicated connection offering guaranteed speed, custom SLA, scalability, and reliability.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Custom SLA and Flexibility
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Robust Service Level Agreement (SLA) with rapid support and problem resolution, tailored to your needs.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Scalability
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Easily increase or decrease your connection capacity as your business evolves, with reliable performance.
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
                                Why Choose Nura Connect's DIA?
                            </Typography>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <img
                                        src={diaServiceImage2}
                                        alt="Brazil Connectivity"
                                        style={{ width: 'auto', height: '350px', position: 'relative' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">High-Speed Connectivity</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                DIA services provide dedicated bandwidth for your business, ensuring optimal performance without interruptions.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Reliable Performance</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our services guarantee reliability and stability, making them perfect for mission-critical operations.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Scalable Solutions</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Easily scale your connectivity as your business grows, without any disruptions to your service.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Global Reach</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our DIA services ensure seamless connectivity across multiple regions, supporting your international operations.
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

export default DIAServiceDetails;
