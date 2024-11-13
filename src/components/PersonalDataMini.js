import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Divider,
  Avatar,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PersonalDataCard = () => {
  return (
  
    <Paper
      sx={{
        padding: 3,
        borderRadius: '6px',
        height: '100%',
        backgroundColor: '#FFF',
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Personal Data
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D4F4E0',
            color: '#28a745',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            textTransform: 'none',
            borderRadius: '12px',
            padding: '3px 10px',
          }}
        >
          Complete
        </Button>
      </Box>

      {/* User Data */}
      <Stack spacing={2} mb={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ marginRight: 1, color: '#6c757d' }} />
            <Typography variant="body1">Lúcio Batistella</Typography>
          </Box>
          <IconButton size="small">
            <VisibilityOffIcon sx={{ color: '#6c757d' }} />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ marginRight: 1, color: '#6c757d' }} />
          <Typography variant="body1">** **** - 8866</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ marginRight: 1, color: '#6c757d' }} />
          <Typography variant="body1">visaoativa.lucio@gmail.com</Typography>
        </Box>
      </Stack>

      <Divider sx={{ marginY: 2 }} />

      {/* Change Data Button */}
      <Button
        fullWidth
        sx={{
          backgroundColor: '#f1effd',
          color: '#7367F0',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#e1e0fc',
          },
        }}
      >
        Change Data
      </Button>
    </Paper>
  );
};

export default PersonalDataCard;
