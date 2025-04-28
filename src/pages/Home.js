import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Hero />
      <FeaturedProperties />
    </Box>
  );
};

export default Home;
