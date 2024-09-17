import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Container } from '@mui/material';
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import portsImage from '../assets/ports-header.png'; 
import StepByStepPorts from '../components/StepByStepPorts';
import DetailsPortsAdv from '../components/DetailsPortsAdv';


const PortsServiceDetails = () => {
    const [expanded, setExpanded] = useState('panel1');


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
                            <Typography variant="h4" sx={{ color: '#7367EF', fontWeight: 'bold', paddingright: '20px' }}>High-Speed and Secure Networking</Typography> for Your Business
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8} sx={{ mt: 1, paddingRight: '20px' }}>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                    In today’s fast-paced digital world, having a secure and high-speed network is essential for any business to thrive. Our solutions provide the reliability and performance you need to keep your operations running smoothly. Whether you're connecting data centers, accessing cloud services, or ensuring business continuity, we deliver the tools to help your organization stay ahead of the curve.
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                    With a focus on scalability and security, our Ethernet Private Line and networking services are designed to grow with your business. From seamless interoffice communication to robust disaster recovery, we offer a comprehensive range of solutions tailored to meet the unique demands of your enterprise. Let us help you build a network that’s not only fast and reliable but also future-proof.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img
                                        src={portsImage}
                                        alt="Ports Services"
                                        style={{ width: '300px', height: 'auto', borderRadius: '8px'}}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>

                    </Card>

                </Container>
            </Box>
            <StepByStepPorts />
            <CallToAction />
            <DetailsPortsAdv />
            <FormContact />
        </Box>
    );
};

export default PortsServiceDetails;
