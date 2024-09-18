import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Container, Button } from '@mui/material';
import LanImage from '../assets/lantolan.png';
import LanImage2 from '../assets/lantolan2.png';
import CallToAction from '../components/CallToAction';
import FormContact from '../components/FormContact';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const benefits = [
    {
        icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: "Secure Connectivity",
        description: "Create a secure tunnel between networks, ensuring safe data.",
    },
    {
        icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: "Centralized Resources",
        description: "Access servers, files, and apps seamlessly from any location.",
    },
    {
        icon: <AttachMoneyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: "Cost Reduction",
        description: "Avoid infrastructure duplication and reduce IT costs.",
    },
    {
        icon: <VerifiedUserIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: "High Reliability",
        description: "Ensure service continuity with failover mechanisms.",
    },
];

const PortsServiceDetails = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#FFF';
    }, []);

    return (
        <Box sx={{ width: '100%', mt: 2 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Container>
                    <Box sx={{ mt: 0, width: '100%', border: '0px', boxShadow: 'none' }}>
                        <CardContent sx={{ padding: '20px 30px' }}>
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', display: 'flex' }}>
                                <Typography variant="h4" sx={{ color: '#7367EF', fontWeight: 'bold', paddingRight: '20px' }}>LAN-to-LAN</Typography> Connect Your Networks with Security and Efficiency
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8} sx={{ mt: 1, paddingRight: '20px' }}>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        If your business needs to connect offices in different geographic locations, LAN-to-LAN is the ideal solution to integrate your local networks securely and efficiently. With a dedicated connection between your LANs, your teams will have continuous access to data, servers, and critical systems, no matter where they are located.
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: '10px' }}>
                                        LAN-to-LAN ensures secure data transmission, protecting sensitive information across locations. It centralizes resource management, reducing infrastructure costs. This solution also guarantees reliable access to critical systems, regardless of location.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img
                                        src={LanImage}
                                        alt="Ports Services"
                                        style={{ width: '300px', height: 'auto', borderRadius: '8px' }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Benefícios LAN-to-LAN */}
                            <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>
                                Why Choose LAN-to-LAN for Your Business?
                            </Typography>
                            <Grid container spacing={4} sx={{ mt: 2 }}>
                                {benefits.map((benefit, index) => (
                                    <Grid item xs={12} md={3} key={index}>
                                        <Card
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                p: 2,
                                                boxShadow: 3,
                                                transition: '0.3s',
                                                '&:hover': {
                                                    boxShadow: 6,
                                                    transform: 'scale(1.05)',
                                                },
                                            }}
                                        >
                                            {benefit.icon}
                                            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                                                {benefit.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                {benefit.description}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                        </CardContent>
                    </Box>
              
                    
                </Container>
                
            </Box>
            <Box sx={{ bgcolor: '#F7F3FF', py: 2, mb: 0 }}>
                <Container>
                        
                        {/* Seção Melhorada - Conteúdo Novo */}
                        <Typography variant="h4" sx={{ mt: 2, mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
                            How LAN-to-LAN Improves Your Business Operations
                        </Typography>
                        <Grid container spacing={4} alignItems="center" sx={{mb: 5}}>
                            <Grid item xs={12} md={8}>
                                <Typography variant="body1" sx={{ fontSize: '20px', mb: 2 }}>
                                    With LAN-to-LAN, your business benefits from a unified network that improves communication and productivity across all your locations. Seamless integration means faster file sharing, more efficient collaboration, and less downtime.
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '20px', mb: 2 }}>
                                    Centralized control makes it easier to manage your IT infrastructure. Your IT team can easily deploy updates, monitor performance, and troubleshoot issues, increasing reliability and simplifying maintenance.
                                </Typography>
                              
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <img
                                    src={LanImage2} // Substitua por uma nova imagem de ilustração
                                    alt="Business Operations"
                                    style={{ width: '70%', borderRadius: '8px' }}
                                />
                            </Grid>
                        </Grid>
                        </Container>
                </Box>
            <CallToAction />

            <FormContact />

        </Box>
    );
};

export default PortsServiceDetails;
