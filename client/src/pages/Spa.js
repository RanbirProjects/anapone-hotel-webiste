import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import SpaIcon from '@mui/icons-material/Spa';
import HotTubIcon from '@mui/icons-material/HotTub';
import PoolIcon from '@mui/icons-material/Pool';

const spaServices = [
  {
    id: 1,
    name: 'Luxury Massage',
    description: 'Rejuvenating treatments for body and soul',
    image: 'images/spa/spa-1.jpg',
    features: [
      'Swedish massage',
      'Deep tissue massage',
      'Hot stone therapy',
      'Aromatherapy',
      'Duration: 60-90 mins',
      'Professional therapists',
      'Premium oils',
      'Private treatment rooms',
    ],
  },
  {
    id: 2,
    name: 'Wellness Pool',
    description: 'Relax in our therapeutic water features',
    image: 'images/spa/spa-2.jpg',
    features: [
      'Hydrotherapy pool',
      'Water massage jets',
      'Temperature control',
      'Mineral water',
      'Poolside loungers',
      'Towels provided',
      'Changing facilities',
      'Locker service',
    ],
  },
  {
    id: 3,
    name: 'Beauty Treatments',
    description: 'Enhance your natural beauty',
    image: 'images/spa/spa-3.jpg',
    features: [
      'Facial treatments',
      'Body wraps',
      'Manicure & pedicure',
      'Hair styling',
      'Makeup services',
      'Premium products',
      'Expert therapists',
      'Private suites',
    ],
  },
];

const Spa = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundImage: 'url(images/spa/spa-bg.jpg)',
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
                mb: 6,
                color: 'white',
                fontFamily: 'Playfair Display',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Spa & Wellness
            </Typography>

            <Grid container spacing={4}>
              {spaServices.map((service, index) => (
                <Grid item xs={12} md={4} key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: 0,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="300"
                        image={service.image}
                        alt={service.name}
                        sx={{
                          objectFit: 'cover',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          width: '100%',
                          height: '300px',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, color: 'white' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            mb: 2,
                            fontFamily: 'Playfair Display',
                            color: 'white',
                          }}
                        >
                          {service.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                          {service.description}
                        </Typography>
                        <List>
                          {service.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                {idx % 3 === 0 ? (
                                  <SpaIcon sx={{ color: 'secondary.main' }} />
                                ) : idx % 3 === 1 ? (
                                  <HotTubIcon sx={{ color: 'secondary.main' }} />
                                ) : (
                                  <PoolIcon sx={{ color: 'secondary.main' }} />
                                )}
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontSize: '0.9rem',
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                        <Box
                          sx={{
                            mt: 3,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'secondary.dark',
                              },
                            }}
                          >
                            Book Treatment
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Spa; 