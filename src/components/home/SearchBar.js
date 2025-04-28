import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Tabs, 
  Tab, 
  TextField, 
  Button, 
  InputAdornment,
  Popover,
  Typography,
  Slider,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Chip,
  Grid,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [propertyType, setPropertyType] = useState('buy');
  const [location, setLocation] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [priceRange, setPriceRange] = useState([500000, 2000000]);
  const [areaRange, setAreaRange] = useState([1000, 5000]);
  const [bedrooms, setBedrooms] = useState('any');
  const [bathrooms, setBathrooms] = useState('any');
  const [amenities, setAmenities] = useState([]);
  
  const amenitiesList = [
    'Pool', 'Garden', 'Garage', 'Balcony', 'Gym', 
    'Air Conditioning', 'Fireplace', 'Security System'
  ];
  
  const handleTypeChange = (event, newValue) => {
    setPropertyType(newValue);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  
  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleFilterClose = () => {
    setAnchorEl(null);
  };
  
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  
  const handleAreaChange = (event, newValue) => {
    setAreaRange(newValue);
  };
  
  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };
  
  const handleBathroomsChange = (event) => {
    setBathrooms(event.target.value);
  };
  
  const handleAmenityToggle = (amenity) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter(item => item !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };
  
  const formatPrice = (value) => {
    return `$${value.toLocaleString()}`;
  };
  
  const formatArea = (value) => {
    return `${value.toLocaleString()} sq ft`;
  };
  
  const open = Boolean(anchorEl);
  
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        zIndex: 10,
        marginTop: { xs: '20px', md: '40px', lg: '20px' },
        maxWidth: { md: '900px', lg: '1100px' },
        mx: 'auto',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={propertyType} 
          onChange={handleTypeChange} 
          variant="fullWidth"
          sx={{
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '3px 3px 0 0',
            },
            '& .MuiTab-root': {
              fontWeight: 600,
              py: 2,
              transition: 'all 0.2s',
              '&:hover': {
                color: 'primary.main',
              },
            },
          }}
        >
          <Tab label="Buy" value="buy" />
          <Tab label="Rent" value="rent" />
          <Tab label="Sell" value="sell" />
        </Tabs>
      </Box>
      
      <Box sx={{ p: { xs: 2, md: 3 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <Grid container spacing={2} alignItems="center" sx={{ width: '100%', m: 0 }}>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              placeholder="Enter location, city, or ZIP code"
              value={location}
              onChange={handleLocationChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon color="primary" />
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
          
          <Grid item xs={12} md={5}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '8px',
                p: 1,
                cursor: 'pointer',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                }
              }}
              onClick={handleFilterClick}
            >
              <TuneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {amenities.length > 0 || bedrooms !== 'any' || bathrooms !== 'any' ? 
                  `${bedrooms !== 'any' ? `${bedrooms} bed${bedrooms !== '1' ? 's' : ''} • ` : ''}
                   ${bathrooms !== 'any' ? `${bathrooms} bath${bathrooms !== '1' ? 's' : ''} • ` : ''}
                   ${formatPrice(priceRange[0])} - ${formatPrice(priceRange[1])}
                   ${amenities.length > 0 ? ` • ${amenities.length} amenities` : ''}`
                  : 'Advanced Filters'
                }
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
              sx={{ 
                py: 1.5,
                borderRadius: '8px',
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            width: { xs: '90%', sm: '600px' },
            p: 3,
            borderRadius: '16px',
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Advanced Filters
          </Typography>
          <IconButton onClick={handleFilterClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Price Range
            </Typography>
            <Box sx={{ px: 1 }}>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                valueLabelFormat={formatPrice}
                min={100000}
                max={5000000}
                step={50000}
                color="primary"
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {formatPrice(priceRange[0])}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatPrice(priceRange[1])}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Area (sq ft)
            </Typography>
            <Box sx={{ px: 1 }}>
              <Slider
                value={areaRange}
                onChange={handleAreaChange}
                valueLabelDisplay="auto"
                valueLabelFormat={formatArea}
                min={500}
                max={10000}
                step={100}
                color="primary"
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {formatArea(areaRange[0])}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatArea(areaRange[1])}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Bedrooms
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="bedrooms"
                value={bedrooms}
                onChange={handleBedroomsChange}
              >
                <FormControlLabel value="any" control={<Radio color="primary" />} label="Any" />
                <FormControlLabel value="1" control={<Radio color="primary" />} label="1+" />
                <FormControlLabel value="2" control={<Radio color="primary" />} label="2+" />
                <FormControlLabel value="3" control={<Radio color="primary" />} label="3+" />
                <FormControlLabel value="4" control={<Radio color="primary" />} label="4+" />
              </RadioGroup>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Bathrooms
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="bathrooms"
                value={bathrooms}
                onChange={handleBathroomsChange}
              >
                <FormControlLabel value="any" control={<Radio color="primary" />} label="Any" />
                <FormControlLabel value="1" control={<Radio color="primary" />} label="1+" />
                <FormControlLabel value="2" control={<Radio color="primary" />} label="2+" />
                <FormControlLabel value="3" control={<Radio color="primary" />} label="3+" />
                <FormControlLabel value="4" control={<Radio color="primary" />} label="4+" />
              </RadioGroup>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Amenities
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {amenitiesList.map((amenity) => (
                <Chip
                  key={amenity}
                  label={amenity}
                  onClick={() => handleAmenityToggle(amenity)}
                  color={amenities.includes(amenity) ? "primary" : "default"}
                  variant={amenities.includes(amenity) ? "filled" : "outlined"}
                  sx={{ 
                    borderRadius: '8px',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: amenities.includes(amenity) 
                        ? theme.palette.primary.main 
                        : theme.palette.action.hover,
                    }
                  }}
                />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                variant="outlined" 
                color="primary"
                onClick={() => {
                  setPriceRange([500000, 2000000]);
                  setAreaRange([1000, 5000]);
                  setBedrooms('any');
                  setBathrooms('any');
                  setAmenities([]);
                }}
              >
                Reset Filters
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={handleFilterClose}
              >
                Apply Filters
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Popover>
    </Paper>
  );
};

export default SearchBar;
