import React from 'react';
import Layout from '../components/layout/Layout';
import PropertiesGrid from '../components/properties/PropertiesGrid';
import { Box, Typography, Container } from '@mui/material';

const Properties = () => {
  return (
    <Layout>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
            Explore Our Properties
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            Discover our exclusive selection of premium properties. Each listing has been carefully selected to meet the highest standards of luxury and comfort.
          </Typography>
          <PropertiesGrid />
        </Container>
      </Box>
    </Layout>
  );
};

export default Properties;
