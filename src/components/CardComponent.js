import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CardComponent = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a demo card. You can use this section to display some content.
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Box>
  );
};

export default CardComponent;
