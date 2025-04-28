import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        position: 'relative',
        height: { xs: 'auto', md: 'auto', lg: 'auto' },
        minHeight: { xs: '700px', md: '700px', lg: '800px' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'visible',
        background: `linear-gradient(135deg, rgba(45, 63, 224, 0.03) 0%, rgba(0, 201, 184, 0.03) 100%)`,
        pt: { xs: 10, md: 12, lg: 10 },
        pb: { xs: 12, md: 14, lg: 16 },
        mb: { xs: 0, md: 6, lg: 2 }
      }}
    >
      {/* Background shapes */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light}22 0%, ${theme.palette.primary.main}11 100%)`,
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.secondary.light}22 0%, ${theme.palette.secondary.main}11 100%)`,
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { md: 4 } }}>
        <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 5 }}>
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 2,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: theme.palette.text.primary, // Fallback for browsers that don't support background-clip
                }}
              >
                Find Your Dream Home With Ease
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  mb: 4, 
                  maxWidth: '90%',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  position: 'relative',
                  zIndex: 5,
                  display: 'block',
                  visibility: 'visible',
                  overflow: 'visible'
                }}
              >
                Discover the perfect property with our cutting-edge platform. 
                Browse thousands of listings, connect with expert agents, and make your dream home a reality.
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Explore Properties
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Find Agents
                </Button>
              </Box>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    10k+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Properties
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    2k+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Customers
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    500+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cities
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  height: { xs: '400px', md: '500px' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)'
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Luxury home"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Luxury Villa with Ocean View
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Malibu, California • $4,500,000
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Box 
            sx={{ 
              mt: { xs: 8, md: 6, lg: 4 },
              mb: { xs: 4, md: 6, lg: 4 },
              position: 'relative',
              zIndex: 2,
              transform: { md: 'translateY(30px)', lg: 'translateY(0)' }
            }}
          >
            <SearchBar />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
