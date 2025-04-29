import React from 'react';
import ListPropertyForm from '../components/properties/ListPropertyForm';
import { Box, Typography, Container, Paper } from '@mui/material';

const ListProperty = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
          List Your Property
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Join our exclusive portfolio of luxury properties. Fill out the form below to submit your property for consideration.
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <ListPropertyForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default ListProperty;
