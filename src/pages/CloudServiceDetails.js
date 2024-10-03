import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cloudImage from '../assets/cloudcomp.png'; // Imagem representando Cloud Services
import cloudServiceImage2 from '../assets/cloudcomp2.png'; // Outra imagem para serviços de Cloud
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import StepByStep from '../components/StepByStep';

const CloudServiceDetails = () => {
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
                                Scalability, Flexibility, and <Typography variant="h4" sx={{ color: '#7367EF', fontWeight: 'bold', paddingLeft: '10px' }}>Security in the Cloud</Typography>
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8} sx={{ mt: 1, paddingRight: '100px' }}>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        Cloud services provide the flexibility and scalability that modern businesses require. With our solutions, you can store, manage, and process data across a distributed network of secure, scalable resources.
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        Whether you're looking to host applications, store critical business data, or enable seamless collaboration, our cloud services are built for performance and reliability, with a high level of security.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img
                                        src={cloudImage}
                                        alt="Cloud Services"
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
                        Why Choose Our Cloud Services?
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#7367EF' }}>
                                        Scalability and Flexibility
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                                        Effortlessly scale your infrastructure as your business grows. Our cloud services adapt to your business needs, offering high levels.
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
                                        Our cloud services are built with top-notch security protocols, ensuring that your data and applications are protected 24/7.
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
                                        Pay only for the resources you use, eliminating the need for large upfront investments in hardware or infrastructure.
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
                                Why Choose Our Cloud Solutions?
                            </Typography>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <img
                                        src={cloudServiceImage2}
                                        alt="Global Cloud Connectivity"
                                        style={{ width: '350px', height: '350px', position: 'relative' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Seamless Integration</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our cloud services integrate effortlessly with your existing infrastructure, enabling smooth transitions and minimal disruptions.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">High Availability</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Our services ensure that your applications and data are always available, reducing downtime and enhancing productivity.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Cost-Effective</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Save on infrastructure costs with our cloud services, which eliminate the need for expensive hardware investments.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography fontWeight="bold">Global Accessibility</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography fontSize="1rem">
                                                Access your data and applications from anywhere in the world, ensuring business continuity and flexibility.
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

export default CloudServiceDetails;
