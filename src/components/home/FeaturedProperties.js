import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Chip,
  IconButton,
  useTheme,
  Divider
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { motion } from 'framer-motion';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    location: 'Beverly Hills, CA',
    price: 4250000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    beds: 5,
    baths: 6,
    area: 4500,
    type: 'Villa',
    isNew: true,
    isFavorite: false
  },
  {
    id: 2,
    title: 'Luxury Penthouse with Ocean View',
    location: 'Miami Beach, FL',
    price: 3800000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    beds: 4,
    baths: 4.5,
    area: 3200,
    type: 'Penthouse',
    isNew: false,
    isFavorite: true
  },
  {
    id: 3,
    title: 'Contemporary House with Garden',
    location: 'Austin, TX',
    price: 1950000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    beds: 4,
    baths: 3,
    area: 2800,
    type: 'House',
    isNew: true,
    isFavorite: false
  },
  {
    id: 4,
    title: 'Waterfront Mansion',
    location: 'Lake Tahoe, NV',
    price: 7500000,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    beds: 7,
    baths: 8,
    area: 8500,
    type: 'Mansion',
    isNew: false,
    isFavorite: false
  },
  {
    id: 5,
    title: 'Downtown Loft',
    location: 'New York, NY',
    price: 2100000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    beds: 2,
    baths: 2,
    area: 1800,
    type: 'Loft',
    isNew: false,
    isFavorite: true
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    price: 5900000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1775&q=80',
    beds: 6,
    baths: 5,
    area: 5200,
    type: 'Chalet',
    isNew: true,
    isFavorite: false
  }
];

const PropertyCard = ({ property }) => {
  const theme = useTheme();
  const [favorite, setFavorite] = React.useState(property.isFavorite);
  
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  
  const formatPrice = (price) => {
    return price >= 1000000 
      ? `$${(price / 1000000).toFixed(1)}M` 
      : `$${(price / 1000).toFixed(0)}K`;
  };
  
  return (
    <Card 
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        maxWidth: '100%',
        height: '100%',
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
          height="200"
          image={property.image}
          alt={property.title}
          sx={{ 
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <IconButton
          onClick={toggleFavorite}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: 'white',
            '&:hover': {
              bgcolor: 'white',
            }
          }}
        >
          {favorite ? (
            <FavoriteIcon sx={{ color: theme.palette.error.main }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: theme.palette.text.secondary }} />
          )}
        </IconButton>
        {property.isNew && (
          <Chip
            label="NEW"
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 600,
              borderRadius: '8px',
            }}
          />
        )}
        <Chip
          label={property.type}
          color="secondary"
          size="small"
          variant="outlined"
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            fontWeight: 600,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          }}
        />
      </Box>
      
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>
          {property.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOnIcon color="primary" sx={{ fontSize: '1rem', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {property.location}
          </Typography>
        </Box>
        
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 2, color: theme.palette.primary.main }}>
          {formatPrice(property.price)}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BedIcon color="action" sx={{ fontSize: '1.2rem', mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BathtubIcon color="action" sx={{ fontSize: '1.2rem', mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SquareFootIcon color="action" sx={{ fontSize: '1.2rem', mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {property.area.toLocaleString()} sq ft
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const FeaturedProperties = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12, lg: 10 }, bgcolor: 'background.default', mt: { md: 6, lg: 2 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(90deg, #1A1F36 0%, #2D3FE0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Properties
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
            Discover our handpicked selection of premium properties, each offering unique features and exceptional value.
          </Typography>
        </Box>
        
        <Grid container spacing={3} sx={{ px: { xs: 2, md: 0 } }}>
          {featuredProperties.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={property.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
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
            View All Properties
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProperties;
