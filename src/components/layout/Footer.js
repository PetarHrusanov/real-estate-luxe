import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  
  const footerLinks = [
    {
      title: 'Properties',
      links: [
        { name: 'Buy', url: '/properties?type=buy' },
        { name: 'Rent', url: '/properties?type=rent' },
        { name: 'Sell', url: '/sell' },
        { name: 'New Developments', url: '/new-developments' },
        { name: 'Featured', url: '/featured' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', url: '/about' },
        { name: 'Team', url: '/team' },
        { name: 'Careers', url: '/careers' },
        { name: 'Testimonials', url: '/testimonials' },
        { name: 'Press', url: '/press' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'Guides', url: '/guides' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Privacy Policy', url: '/privacy' }
      ]
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              LUXE<Box component="span" sx={{ color: theme.palette.primary.main }}>Estate</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: '90%' }}>
              Redefining the way you experience real estate with cutting-edge technology and exceptional service.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon color="primary" sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2" color="text.secondary">
                123 Luxury Avenue, Metropolis, 10001
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon color="primary" sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2" color="text.secondary">
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon color="primary" sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2" color="text.secondary">
                info@luxeestate.com
              </Typography>
            </Box>
            <Box>
              <IconButton aria-label="facebook" size="small" sx={{ mr: 1, bgcolor: 'rgba(59, 89, 152, 0.1)', '&:hover': { bgcolor: 'rgba(59, 89, 152, 0.2)' } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="twitter" size="small" sx={{ mr: 1, bgcolor: 'rgba(29, 161, 242, 0.1)', '&:hover': { bgcolor: 'rgba(29, 161, 242, 0.2)' } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="instagram" size="small" sx={{ mr: 1, bgcolor: 'rgba(225, 48, 108, 0.1)', '&:hover': { bgcolor: 'rgba(225, 48, 108, 0.2)' } }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="linkedin" size="small" sx={{ bgcolor: 'rgba(0, 119, 181, 0.1)', '&:hover': { bgcolor: 'rgba(0, 119, 181, 0.2)' } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
          
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={2.5} key={section.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link 
                      href={link.url} 
                      underline="none" 
                      color="text.secondary"
                      sx={{ 
                        '&:hover': { 
                          color: 'primary.main',
                          transition: 'color 0.3s ease'
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} LUXEEstate. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/terms" underline="none" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
              <Typography variant="body2">Terms</Typography>
            </Link>
            <Link href="/privacy" underline="none" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
              <Typography variant="body2">Privacy</Typography>
            </Link>
            <Link href="/cookies" underline="none" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
              <Typography variant="body2">Cookies</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
