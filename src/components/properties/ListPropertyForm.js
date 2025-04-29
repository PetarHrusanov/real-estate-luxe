import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  Alert,
  Snackbar,
  InputAdornment,
  FormHelperText,
  Paper
} from '@mui/material';
import {
  Home as HomeIcon,
  LocationOn as LocationIcon,
  Description as DescriptionIcon,
  AttachMoney as PriceIcon,
  Hotel as BedroomIcon,
  Bathtub as BathroomIcon,
  SquareFoot as AreaIcon,
  Upload as UploadIcon,
  Check as CheckIcon
} from '@mui/icons-material';

const propertyTypes = ['Villa', 'Penthouse', 'Estate', 'House', 'Townhouse', 'Cabin', 'Apartment'];

const ListPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    description: '',
    features: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);
  const [successOpen, setSuccessOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newImages = selectedFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name
      }));
      
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.type) newErrors.type = 'Property type is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.bedrooms) newErrors.bedrooms = 'Number of bedrooms is required';
    if (!formData.bathrooms) newErrors.bathrooms = 'Number of bathrooms is required';
    if (!formData.area) newErrors.area = 'Area is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';
    
    // Email validation
    if (formData.contactEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Invalid email address';
    }
    
    // Numeric validations
    if (formData.price && isNaN(Number(formData.price))) {
      newErrors.price = 'Price must be a number';
    }
    
    if (formData.bedrooms && (isNaN(Number(formData.bedrooms)) || !Number.isInteger(Number(formData.bedrooms)))) {
      newErrors.bedrooms = 'Bedrooms must be a whole number';
    }
    
    if (formData.bathrooms && isNaN(Number(formData.bathrooms))) {
      newErrors.bathrooms = 'Bathrooms must be a number';
    }
    
    if (formData.area && isNaN(Number(formData.area))) {
      newErrors.area = 'Area must be a number';
    }
    
    // Image validation
    if (images.length === 0) {
      newErrors.images = 'At least one image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData);
      console.log('Images:', images);
      
      // Show success message
      setSuccessOpen(true);
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormData({
        title: '',
        type: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        description: '',
        features: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
      });
      
      // Clear images
      images.forEach(image => URL.revokeObjectURL(image.preview));
      setImages([]);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {formSubmitted ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <CheckIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Property Submitted Successfully!
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for submitting your property. Our team will review your listing and get back to you shortly.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setFormSubmitted(false)}
            sx={{ mt: 2 }}
          >
            Submit Another Property
          </Button>
        </Box>
      ) : (
        <>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Property Details
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                name="title"
                label="Property Title"
                value={formData.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!!errors.type}>
                <InputLabel id="property-type-label">Property Type</InputLabel>
                <Select
                  labelId="property-type-label"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  label="Property Type"
                >
                  {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
                {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="price"
                name="price"
                label="Price (USD)"
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PriceIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="location"
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                error={!!errors.location}
                helperText={errors.location}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="bedrooms"
                name="bedrooms"
                label="Bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={handleChange}
                error={!!errors.bedrooms}
                helperText={errors.bedrooms}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BedroomIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="bathrooms"
                name="bathrooms"
                label="Bathrooms"
                type="number"
                value={formData.bathrooms}
                onChange={handleChange}
                error={!!errors.bathrooms}
                helperText={errors.bathrooms}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BathroomIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="area"
                name="area"
                label="Area (sq ft)"
                type="number"
                value={formData.area}
                onChange={handleChange}
                error={!!errors.area}
                helperText={errors.area}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AreaIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                name="description"
                label="Property Description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="features"
                name="features"
                label="Property Features (comma separated)"
                placeholder="e.g. Swimming pool, Garden, Garage, Smart home"
                value={formData.features}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Property Images
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                  sx={{ mb: 2 }}
                >
                  Upload Images
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                  />
                </Button>
                {errors.images && (
                  <FormHelperText error>{errors.images}</FormHelperText>
                )}
              </Box>
              
              {images.length > 0 && (
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {images.map((image, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <Paper 
                        elevation={2} 
                        sx={{ 
                          p: 1, 
                          position: 'relative',
                          '&:hover .delete-btn': {
                            opacity: 1
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={image.preview}
                          alt={`Property image ${index + 1}`}
                          sx={{
                            width: '100%',
                            height: 120,
                            objectFit: 'cover',
                            borderRadius: 1
                          }}
                        />
                        <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
                          {image.name.length > 20 ? image.name.substring(0, 17) + '...' : image.name}
                        </Typography>
                        <Button
                          size="small"
                          color="error"
                          onClick={() => removeImage(index)}
                          sx={{ 
                            position: 'absolute', 
                            top: 5, 
                            right: 5,
                            minWidth: 'auto',
                            width: 24,
                            height: 24,
                            p: 0,
                            bgcolor: 'rgba(255,255,255,0.7)',
                            opacity: 0,
                            transition: 'opacity 0.2s'
                          }}
                          className="delete-btn"
                        >
                          ×
                        </Button>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Contact Information
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="contactName"
                name="contactName"
                label="Contact Name"
                value={formData.contactName}
                onChange={handleChange}
                error={!!errors.contactName}
                helperText={errors.contactName}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="contactEmail"
                name="contactEmail"
                label="Email Address"
                value={formData.contactEmail}
                onChange={handleChange}
                error={!!errors.contactEmail}
                helperText={errors.contactEmail}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="contactPhone"
                name="contactPhone"
                label="Phone Number"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 5, py: 1.5 }}
            >
              Submit Property
            </Button>
          </Box>
        </>
      )}
      
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your property has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ListPropertyForm;
