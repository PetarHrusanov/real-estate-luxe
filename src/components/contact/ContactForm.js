import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
  useTheme,
  InputAdornment,
  IconButton
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'agreeToTerms' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (formData.phone && !/^[0-9+\-() ]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the form data to a server here
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Your message has been sent successfully! We will contact you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        agreeToTerms: false
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form.',
        severity: 'error'
      });
    }
  };
  
  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };
  
  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: 'Our Location',
      details: '123 Luxury Avenue, Metropolis, 10001, United States'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone Number',
      details: '+1 (555) 123-4567'
    },
    {
      icon: <EmailIcon />,
      title: 'Email Address',
      details: 'info@luxeestate.com'
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Working Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];
  
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Get In Touch
              </Typography>
              
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ 
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                Have questions about our properties or services? Fill out the form and our team will get back to you shortly.
              </Typography>
              
              <Box sx={{ mb: 6 }}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        mb: 3,
                        alignItems: 'flex-start'
                      }}
                    >
                      <Box 
                        sx={{ 
                          mr: 2, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '12px',
                          width: 48,
                          height: 48,
                          flexShrink: 0
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.details}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
              
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                alt="Office interior"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
                  display: { xs: 'none', md: 'block' }
                }}
              />
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 5 }, 
                  borderRadius: '16px',
                  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.08)',
                  height: '100%'
                }}
              >
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 4 }}>
                  Send Us a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        required
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                          }
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        required
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                          }
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon color="action" />
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
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon color="action" />
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
                    
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        required
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                          }
                        }}
                      >
                        <MenuItem value="">Select a subject</MenuItem>
                        <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                        <MenuItem value="Property Information">Property Information</MenuItem>
                        <MenuItem value="Schedule Viewing">Schedule Viewing</MenuItem>
                        <MenuItem value="Sell My Property">Sell My Property</MenuItem>
                        <MenuItem value="Join as Agent">Join as Agent</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </TextField>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                          }
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Preferred Contact Method
                      </Typography>
                      <FormControl component="fieldset">
                        <Grid container spacing={2}>
                          <Grid item>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={formData.preferredContact === 'email'}
                                  onChange={() => setFormData({...formData, preferredContact: 'email'})}
                                  color="primary"
                                />
                              }
                              label="Email"
                            />
                          </Grid>
                          <Grid item>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={formData.preferredContact === 'phone'}
                                  onChange={() => setFormData({...formData, preferredContact: 'phone'})}
                                  color="primary"
                                />
                              }
                              label="Phone"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            color="primary"
                          />
                        }
                        label="I agree to the terms and privacy policy"
                      />
                      {errors.agreeToTerms && (
                        <Typography variant="caption" color="error">
                          {errors.agreeToTerms}
                        </Typography>
                      )}
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ 
                          py: 1.5,
                          px: 4,
                          borderRadius: '8px',
                          fontWeight: 600
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 4,
              textAlign: 'center'
            }}
          >
            Visit Our Office
          </Typography>
          
          <Box 
            sx={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1682969584385!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </Box>
        </Box>
      </Container>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
