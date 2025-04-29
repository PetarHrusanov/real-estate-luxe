import React, { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Button, 
  CardActions,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Stack,
  Pagination
} from '@mui/material';
import { 
  LocationOn as LocationIcon, 
  Hotel as BedroomIcon, 
  Bathtub as BathroomIcon, 
  SquareFoot as AreaIcon,
  Search as SearchIcon,
  AttachMoney as PriceIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    price: 2500000,
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    type: 'Villa',
    featured: true,
    description: 'Stunning beachfront villa with panoramic ocean views, private pool, and direct beach access.'
  },
  {
    id: 2,
    title: 'Modern Downtown Penthouse',
    price: 1850000,
    location: 'New York, NY',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    type: 'Penthouse',
    featured: true,
    description: 'Luxurious penthouse in the heart of Manhattan with floor-to-ceiling windows and private terrace.'
  },
  {
    id: 3,
    title: 'Mediterranean Estate',
    price: 3200000,
    location: 'Beverly Hills, CA',
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80',
    type: 'Estate',
    featured: false,
    description: 'Magnificent Mediterranean estate with lush gardens, pool, and guest house in prestigious neighborhood.'
  },
  {
    id: 4,
    title: 'Waterfront Contemporary Home',
    price: 1950000,
    location: 'Miami, FL',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3800,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    type: 'House',
    featured: true,
    description: 'Sleek contemporary home with water views, private dock, and modern amenities throughout.'
  },
  {
    id: 5,
    title: 'Historic Brownstone',
    price: 2100000,
    location: 'Boston, MA',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    type: 'Townhouse',
    featured: false,
    description: 'Beautifully restored historic brownstone with original details and modern updates in prime location.'
  },
  {
    id: 6,
    title: 'Mountain View Retreat',
    price: 1750000,
    location: 'Aspen, CO',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3600,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80',
    type: 'Cabin',
    featured: false,
    description: 'Stunning mountain retreat with panoramic views, hot tub, and proximity to world-class skiing.'
  }
];

const propertyTypes = ['All Types', 'Villa', 'Penthouse', 'Estate', 'House', 'Townhouse', 'Cabin', 'Apartment'];
const priceRanges = ['Any Price', 'Under $1M', '$1M - $2M', '$2M - $3M', '$3M+'];
const bedroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];

const PropertiesGrid = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: 'All Types',
    priceRange: 'Any Price',
    bedrooms: 'Any',
    location: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
    setCurrentPage(1);
  };

  // Filter properties based on selected filters
  const filteredProperties = mockProperties.filter(property => {
    // Filter by type
    if (filters.type !== 'All Types' && property.type !== filters.type) {
      return false;
    }
    
    // Filter by price range
    if (filters.priceRange !== 'Any Price') {
      if (filters.priceRange === 'Under $1M' && property.price >= 1000000) {
        return false;
      } else if (filters.priceRange === '$1M - $2M' && (property.price < 1000000 || property.price >= 2000000)) {
        return false;
      } else if (filters.priceRange === '$2M - $3M' && (property.price < 2000000 || property.price >= 3000000)) {
        return false;
      } else if (filters.priceRange === '$3M+' && property.price < 3000000) {
        return false;
      }
    }
    
    // Filter by bedrooms
    if (filters.bedrooms !== 'Any') {
      const minBedrooms = parseInt(filters.bedrooms);
      if (property.bedrooms < minBedrooms) {
        return false;
      }
    }
    
    // Filter by location (case insensitive)
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Pagination logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const pageCount = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const handlePropertyClick = (id) => {
    navigate(`/properties/${id}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Filter Section */}
      <Box sx={{ mb: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Property Type</InputLabel>
              <Select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                label="Property Type"
              >
                {propertyTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Price Range</InputLabel>
              <Select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                label="Price Range"
              >
                {priceRanges.map((range) => (
                  <MenuItem key={range} value={range}>{range}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Bedrooms</InputLabel>
              <Select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                label="Bedrooms"
              >
                {bedroomOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              size="small"
              name="location"
              label="Location"
              variant="outlined"
              value={filters.location}
              onChange={handleFilterChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Results count */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" component="h2">
          {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
        </Typography>
      </Box>

      {/* Properties Grid */}
      <Grid container spacing={4}>
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={property.image}
                    alt={property.title}
                  />
                  {property.featured && (
                    <Chip
                      label="Featured"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 'bold',
                      }}
                    />
                  )}
                  <Chip
                    label={formatPrice(property.price)}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    {property.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
                    <LocationIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{property.location}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {property.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BedroomIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BathroomIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AreaIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{property.area} ft²</Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    variant="contained" 
                    fullWidth
                    onClick={() => handlePropertyClick(property.id)}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Container>
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h5" gutterBottom>No properties match your search criteria</Typography>
              <Typography variant="body1">Try adjusting your filters to see more results</Typography>
            </Box>
          </Container>
        )}
      </Grid>

      {/* Pagination */}
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Stack spacing={2}>
            <Pagination 
              count={pageCount} 
              page={currentPage} 
              onChange={handlePageChange} 
              color="primary" 
              size="large"
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default PropertiesGrid;
