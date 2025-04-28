import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
