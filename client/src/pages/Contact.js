import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const welcomeQuotes = [
  {
    text: "Welcome to Anapnoe Resort, where luxury meets tranquility.",
    author: "Your Perfect Escape"
  },
  {
    text: "Experience the art of hospitality at its finest.",
    author: "Unforgettable Moments"
  },
  {
    text: "Your journey to paradise begins with a simple hello.",
    author: "Begin Your Story"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundImage: 'url(images/contact/contact-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          minHeight: '100vh',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 2,
                color: 'white',
                fontFamily: 'Playfair Display',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Contact Us
            </Typography>

            <Typography
              variant="h5"
              align="center"
              sx={{
                mb: 6,
                color: 'rgba(255, 255, 255, 0.8)',
                fontStyle: 'italic',
                fontFamily: 'Playfair Display',
              }}
            >
              {welcomeQuotes[0].text}
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 4, color: 'white', fontFamily: 'Playfair Display' }}>
                    Get in Touch
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon sx={{ color: 'secondary.main', mr: 2 }} />
                      <Typography color="white">
                        123 Paradise Beach Road, Anapnoe Island
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PhoneIcon sx={{ color: 'secondary.main', mr: 2 }} />
                      <Typography color="white">+1 (555) 123-4567</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmailIcon sx={{ color: 'secondary.main', mr: 2 }} />
                      <Typography color="white">info@anapnoeresort.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ color: 'secondary.main', mr: 2 }} />
                      <Typography color="white">24/7 Available</Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, color: 'white', fontFamily: 'Playfair Display' }}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>
                      <i className="fab fa-facebook-f"></i>
                    </IconButton>
                    <IconButton sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>
                      <i className="fab fa-instagram"></i>
                    </IconButton>
                    <IconButton sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>
                      <i className="fab fa-twitter"></i>
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 4, color: 'white', fontFamily: 'Playfair Display' }}>
                    Send Message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'secondary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'secondary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'secondary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'secondary.main',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            textTransform: 'none',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 