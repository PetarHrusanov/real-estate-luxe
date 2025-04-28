import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Avatar,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { motion } from 'framer-motion';

const AboutContent = () => {
  const theme = useTheme();

  // Team members data
  const teamMembers = [
    {
      name: 'Alexander Richards',
      position: 'CEO & Founder',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'With over 20 years of experience in real estate, Alexander founded LUXEEstate with a vision to transform the industry through technology and exceptional service.'
    },
    {
      name: 'Sophia Martinez',
      position: 'Chief Operating Officer',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Sophia oversees all operational aspects of LUXEEstate, ensuring that our clients receive the highest level of service and support throughout their real estate journey.'
    },
    {
      name: 'Daniel Kim',
      position: 'Head of Technology',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      bio: 'Daniel leads our technology initiatives, developing innovative solutions that make finding and purchasing properties a seamless and enjoyable experience.'
    },
    {
      name: 'Emily Johnson',
      position: 'Marketing Director',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      bio: 'Emily crafts our brand strategy and marketing campaigns, showcasing properties in their best light and connecting clients with their dream homes.'
    }
  ];

  // Company stats
  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '10,000+', label: 'Properties Sold' },
    { value: '25,000+', label: 'Happy Clients' },
    { value: '500+', label: 'Expert Agents' }
  ];

  return (
    <Box sx={{ pb: 10 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: { xs: 'auto', md: '60vh' },
          minHeight: { xs: '400px', md: '500px' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `linear-gradient(135deg, rgba(45, 63, 224, 0.05) 0%, rgba(0, 201, 184, 0.05) 100%)`,
          pt: { xs: 8, md: 0 },
          pb: { xs: 8, md: 0 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  About LUXEEstate
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
                    lineHeight: 1.6
                  }}
                >
                  We're on a mission to transform the real estate experience through innovation, 
                  transparency, and exceptional service. Learn about our journey and the team 
                  behind LUXEEstate.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Box 
                  sx={{ 
                    position: 'relative',
                    height: { xs: '300px', md: '400px' },
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="LUXEEstate office"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  height: '500px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Modern building"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: theme.palette.text.primary
                }}
              >
                Our Story
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                Founded in 2010, LUXEEstate began with a simple idea: make real estate transactions 
                more transparent, efficient, and enjoyable. What started as a small team of passionate 
                real estate professionals has grown into a nationwide network of experts dedicated to 
                helping clients find their perfect properties.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                Over the years, we've embraced technology to enhance the real estate experience, 
                developing innovative tools that simplify property searches, virtual tours, and 
                transaction management. But we've never lost sight of what matters most: the personal 
                connection with our clients.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                Today, LUXEEstate is recognized as an industry leader, known for our commitment to 
                excellence, integrity, and client satisfaction. We continue to push boundaries and 
                redefine what's possible in real estate.
              </Typography>
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
                Our Services
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="h3" 
                      component="div" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1,
                        color: theme.palette.primary.main
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              color: theme.palette.text.primary,
              display: 'block',
              width: '100%',
              textAlign: 'center'
            }}
          >
            Our Values
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto',
              mb: 5,
              px: 2,
              textAlign: 'center',
              lineHeight: 1.6
            }}
          >
            These core principles guide everything we do at LUXEEstate, from how we interact with clients 
            to how we develop our technology.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: 'center', px: { xs: 2, md: 0 } }}>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '16px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      width: 64, 
                      height: 64, 
                      mx: 'auto', 
                      mb: 2,
                      color: 'primary.main'
                    }}
                  >
                    <PeopleIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Client-Centered
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We put our clients' needs first, providing personalized service and solutions 
                    tailored to their unique requirements.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '16px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      width: 64, 
                      height: 64, 
                      mx: 'auto', 
                      mb: 2,
                      color: 'primary.main'
                    }}
                  >
                    <HomeWorkIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Innovation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We continuously explore new technologies and approaches to improve the real estate 
                    experience for everyone involved.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '16px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      width: 64, 
                      height: 64, 
                      mx: 'auto', 
                      mb: 2,
                      color: 'primary.main'
                    }}
                  >
                    <StarIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Excellence
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We strive for excellence in everything we do, from the properties we list to the 
                    service we provide and the technology we develop.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '16px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      width: 64, 
                      height: 64, 
                      mx: 'auto', 
                      mb: 2,
                      color: 'primary.main'
                    }}
                  >
                    <HandshakeIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Integrity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We operate with transparency and honesty, building trust with our clients and 
                    partners through ethical business practices.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                color: theme.palette.text.primary
              }}
            >
              Meet Our Leadership Team
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto',
                mb: 4
              }}
            >
              The visionaries and experts driving LUXEEstate's mission to transform real estate.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: 'center', px: { xs: 2, md: 0 } }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      borderRadius: '16px',
                      overflow: 'hidden',
                      height: '100%',
                      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      }
                    }}
                  >
                    <Box sx={{ height: 280, overflow: 'hidden' }}>
                      <Box
                        component="img"
                        src={member.photo}
                        alt={member.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                          '&:hover': {
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle2" color="primary.main" sx={{ mb: 2 }}>
                        {member.position}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: '50px',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              View Full Team
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutContent;
