import React from 'react';
import { Card, CardContent, Typography, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Box, Chip, CardActions } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PersonalData = () => {
  return (
    <Card sx={{ mb: 2 }}>
        <CardContent sx={{ padding: '20px 30px 0px 30px', marginBottom: '0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Personal Data
          </Typography>
          <Chip label="COMPLETE" sx={{ bgcolor: '#E9E7FD', color: 'black' }} />
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Lúcio Batistella" />
            <IconButton size="small">
              <VisibilityOffIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="11 98703 - 8866" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="visaoativa.lucio@gmail.com" />
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button variant="text" color="primary" fullWidth sx={{ borderRadius: '20px' }}>
          CHANGE DATA
        </Button>
      </CardActions>
    </Card>
  );
};

export default PersonalData;
