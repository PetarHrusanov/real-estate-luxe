import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  TextField,
  InputAdornment,
  Rating,
  Chip,
  Avatar,
  IconButton,
  Divider,
  useTheme,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

// Mock data for real estate agents
const agentsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    location: 'Los Angeles, CA',
    rating: 4.9,
    reviews: 127,
    specialty: 'Luxury Homes',
    experience: 8,
    phone: '(310) 555-1234',
    email: 'sarah.j@luxeestate.com',
    bio: 'Specializing in luxury properties across Los Angeles with a focus on delivering exceptional client experiences.',
    verified: true,
    properties: 42,
    languages: ['English', 'Spanish']
  },
  {
    id: 2,
    name: 'Michael Chen',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviews: 98,
    specialty: 'Condos & Apartments',
    experience: 6,
    phone: '(415) 555-6789',
    email: 'michael.c@luxeestate.com',
    bio: 'Bay Area real estate expert with deep knowledge of the San Francisco market and investment properties.',
    verified: true,
    properties: 35,
    languages: ['English', 'Mandarin', 'Cantonese']
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    location: 'Miami, FL',
    rating: 4.7,
    reviews: 85,
    specialty: 'Waterfront Properties',
    experience: 5,
    phone: '(305) 555-4321',
    email: 'jessica.m@luxeestate.com',
    bio: 'Miami native with extensive knowledge of waterfront properties and luxury condominiums.',
    verified: true,
    properties: 29,
    languages: ['English', 'Spanish']
  },
  {
    id: 4,
    name: 'David Wilson',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 156,
    specialty: 'Penthouses & Lofts',
    experience: 12,
    phone: '(212) 555-7890',
    email: 'david.w@luxeestate.com',
    bio: 'Manhattan real estate veteran with a proven track record of high-end property transactions.',
    verified: true,
    properties: 68,
    languages: ['English', 'French']
  },
  {
    id: 5,
    name: 'Emily Thompson',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    location: 'Chicago, IL',
    rating: 4.6,
    reviews: 72,
    specialty: 'Historic Homes',
    experience: 7,
    phone: '(312) 555-2345',
    email: 'emily.t@luxeestate.com',
    bio: 'Passionate about historic properties with expertise in renovation and preservation.',
    verified: false,
    properties: 31,
    languages: ['English']
  },
  {
    id: 6,
    name: 'James Rodriguez',
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    location: 'Austin, TX',
    rating: 4.8,
    reviews: 64,
    specialty: 'New Developments',
    experience: 4,
    phone: '(512) 555-8765',
    email: 'james.r@luxeestate.com',
    bio: 'Austin market specialist focusing on new developments and tech-friendly homes.',
    verified: true,
    properties: 25,
    languages: ['English', 'Spanish']
  }
];

const AgentCard = ({ agent }) => {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0px 16px 40px rgba(0, 0, 0, 0.12)',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="180"
          image={agent.photo}
          alt={agent.name}
          sx={{ 
            objectFit: 'cover',
            objectPosition: 'center top',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        {agent.verified && (
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 12, 
              right: 12, 
              bgcolor: 'white', 
              borderRadius: '50%', 
              width: 32, 
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <VerifiedIcon color="primary" sx={{ fontSize: '1.2rem' }} />
          </Box>
        )}
      </Box>
      
      <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>
          {agent.name}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon color="primary" sx={{ fontSize: '1rem', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {agent.location}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating 
            value={agent.rating} 
            precision={0.1} 
            readOnly 
            size="small" 
            sx={{ mr: 1 }}
          />
          <Typography variant="body2" color="text.secondary">
            ({agent.reviews} reviews)
          </Typography>
        </Box>
        
        <Chip 
          label={agent.specialty} 
          color="primary" 
          variant="outlined" 
          size="small"
          sx={{ 
            alignSelf: 'flex-start', 
            mb: 2,
            fontWeight: 500
          }} 
        />
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 0, fontSize: '0.85rem', lineHeight: 1.5, display: { xs: 'block', md: 'none' } }}>
          {agent.bio}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, display: { xs: 'flex', md: 'none' } }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
              {agent.experience}+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Years
            </Typography>
          </Box>
          
          <Divider orientation="vertical" flexItem />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
              {agent.properties}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Properties
            </Typography>
          </Box>
          
          <Divider orientation="vertical" flexItem />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
              {agent.languages.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Languages
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button 
            variant="outlined" 
            color="primary" 
            fullWidth
            size="small"
            startIcon={<PhoneIcon sx={{ fontSize: '1rem' }} />}
            sx={{ borderRadius: '8px', py: 0.5 }}
          >
            Call
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            size="small"
            startIcon={<EmailIcon sx={{ fontSize: '1rem' }} />}
            sx={{ borderRadius: '8px', py: 0.5 }}
          >
            Message
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const AgentsGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };
  
  const handleSpecialtyChange = (event) => {
    setSpecialtyFilter(event.target.value);
  };
  
  const filteredAgents = agentsData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || agent.location.includes(locationFilter);
    const matchesSpecialty = specialtyFilter === '' || agent.specialty === specialtyFilter;
    
    return matchesSearch && matchesLocation && matchesSpecialty;
  });
  
  const locations = [...new Set(agentsData.map(agent => agent.location))];
  const specialties = [...new Set(agentsData.map(agent => agent.specialty))];
  
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(90deg, #1A1F36 0%, #2D3FE0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Find Your Perfect Agent
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
            Connect with experienced real estate professionals who will guide you through every step of your property journey.
          </Typography>
        </Box>
        
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} sx={{ px: { xs: 2, md: 0 } }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search by agent name"
                value={searchTerm}
                onChange={handleSearchChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="location-filter-label">Location</InputLabel>
                <Select
                  labelId="location-filter-label"
                  id="location-filter"
                  value={locationFilter}
                  label="Location"
                  onChange={handleLocationChange}
                  sx={{ borderRadius: '8px' }}
                >
                  <MenuItem value="">All Locations</MenuItem>
                  {locations.map(location => (
                    <MenuItem key={location} value={location}>{location}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="specialty-filter-label">Specialty</InputLabel>
                <Select
                  labelId="specialty-filter-label"
                  id="specialty-filter"
                  value={specialtyFilter}
                  label="Specialty"
                  onChange={handleSpecialtyChange}
                  sx={{ borderRadius: '8px' }}
                >
                  <MenuItem value="">All Specialties</MenuItem>
                  {specialties.map(specialty => (
                    <MenuItem key={specialty} value={specialty}>{specialty}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        
        <Grid container spacing={3} sx={{ px: { xs: 2, md: 0 } }}>
          {filteredAgents.map((agent, index) => (
            <Grid item xs={12} sm={6} key={agent.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <AgentCard agent={agent} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        {filteredAgents.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No agents found matching your criteria.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              Try adjusting your filters or search term.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AgentsGrid;
