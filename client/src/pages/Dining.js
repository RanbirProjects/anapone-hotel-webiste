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
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WineBarIcon from '@mui/icons-material/WineBar';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const restaurants = [
  {
    id: 1,
    name: 'The Grand Restaurant',
    description: 'Fine dining with panoramic ocean views',
    image: '/images/dining/restaurant-1.jpg',
    features: [
      'International cuisine',
      'Ocean view seating',
      'Wine pairing',
      'Private dining rooms',
      'Live music',
      'Chef\'s tasting menu',
      'Reservations recommended',
      'Dress code: Smart casual',
    ],
  },
  {
    id: 2,
    name: 'The Beach Club',
    description: 'Casual beachfront dining experience',
    image: '/images/dining/restaurant-2.jpg',
    features: [
      'Fresh seafood',
      'Beachfront seating',
      'Cocktail bar',
      'Sunset views',
      'Live entertainment',
      'Poolside service',
      'Family friendly',
      'Reservations available',
    ],
  },
  {
    id: 3,
    name: 'The Garden Café',
    description: 'Al fresco dining in tropical gardens',
    image: '/images/dining/restaurant-3.jpg',
    features: [
      'Light cuisine',
      'Garden seating',
      'Fresh juices',
      'Afternoon tea',
      'Vegetarian options',
      'Breakfast service',
      'Outdoor bar',
      'Walk-ins welcome',
    ],
  },
];

const Dining = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundImage: 'url(images/dining/dining-bg.jpg)',
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
              Dining Experiences
            </Typography>

            <Grid container spacing={4}>
              {restaurants.map((restaurant, index) => (
                <Grid item xs={12} md={4} key={restaurant.id}>
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
                        image={restaurant.image}
                        alt={restaurant.name}
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
                          {restaurant.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                          {restaurant.description}
                        </Typography>
                        <List>
                          {restaurant.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                {idx % 3 === 0 ? (
                                  <RestaurantIcon sx={{ color: 'secondary.main' }} />
                                ) : idx % 3 === 1 ? (
                                  <WineBarIcon sx={{ color: 'secondary.main' }} />
                                ) : (
                                  <LocalCafeIcon sx={{ color: 'secondary.main' }} />
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
                            Make Reservation
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

export default Dining; 