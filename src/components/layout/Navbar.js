import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useMediaQuery, 
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Find Agent', path: '/agents' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.name}
            onClick={handleDrawerToggle}
            sx={{ 
              py: 2,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                fontWeight: 'medium',
                fontSize: '1.1rem'
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h5" 
            component={Link} 
            to="/" 
            sx={{ 
              fontWeight: 700, 
              color: 'primary.main', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            LUXE<Box component="span" sx={{ color: 'text.primary' }}>Estate</Box>
          </Typography>
        </motion.div>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button 
                  component={Link} 
                  to={item.path}
                  sx={{ 
                    mx: 1, 
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: 'primary.main',
                    }
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                variant="contained" 
                color="primary"
                sx={{ 
                  ml: 2, 
                  px: 3,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                List Property
              </Button>
            </motion.div>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
