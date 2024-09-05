import React from 'react';
import { Box, Typography, Container, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import nuraLogoLight from '../assets/nura-gray-backwhite-hor.svg'; // ajuste o caminho conforme necessário

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#F0F0F2', pt: 6, borderRadius: '90px 90px 0 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link href="/" sx={{ display: 'block', mb: 1 }}>Link 1</Link>
            <Link href="/services/epl" sx={{ display: 'block', mb: 1, color: '#7367F0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              EPL
            </Link>
            <Link href="/services/dia" sx={{ display: 'block', mb: 1, color: '#7367F0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              DIA
            </Link>
            <Link href="/services/broadband" sx={{ display: 'block', mb: 1, color: '#7367F0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Broadband Service Details
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Column 3
            </Typography>
            <Link href="/" sx={{ display: 'block', mb: 1 }}>Link 1</Link>
            <Link href="/" sx={{ display: 'block', mb: 1 }}>Link 2</Link>
            <Link href="/" sx={{ display: 'block', mb: 1 }}>Link 3</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
                sx={{ color: 'black', mb: 1, '&:hover': { color: '#4267B2' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
                sx={{ color: 'black', mb: 1, '&:hover': { color: '#E1306C' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
                sx={{ color: 'black', mb: 1, '&:hover': { color: '#1DA1F2' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.youtube.com"
                target="_blank"
                aria-label="YouTube"
                sx={{ color: 'black', mb: 1, '&:hover': { color: '#FF0000' } }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ color: 'black', mb: 1, '&:hover': { color: '#2867B2' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#E6E6E6', py: 2, mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={nuraLogoLight} alt="Nura Connect Logo" style={{ marginRight: 8, height: 24 }} />
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Nura Connect. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
