import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Pounda Beach, Paros
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +30 22840 12345
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: info@anapnoe-resort.com
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/rooms" color="inherit" display="block" sx={{ mb: 1 }}>
              Rooms & Suites
            </Link>
            <Link href="/dining" color="inherit" display="block" sx={{ mb: 1 }}>
              Dining
            </Link>
            <Link href="/activities" color="inherit" display="block" sx={{ mb: 1 }}>
              Activities
            </Link>
            <Link href="/spa" color="inherit" display="block" sx={{ mb: 1 }}>
              Spa & Wellness
            </Link>
          </Grid>

          {/* Social Media & Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Subscribe to our newsletter for exclusive offers and updates.
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Anapnoe Resort. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 