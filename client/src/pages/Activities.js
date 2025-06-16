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
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PoolIcon from '@mui/icons-material/Pool';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

const activities = [
  {
    id: 1,
    name: 'Water Sports',
    description: 'Exciting aquatic adventures for all ages',
    image: 'images/activities/activity-1.jpg',
    features: [
      'Jet skiing',
      'Water skiing',
      'Kayaking',
      'Paddleboarding',
      'Snorkeling',
      'Scuba diving',
      'Equipment provided',
      'Professional instructors',
    ],
  },
  {
    id: 2,
    name: 'Land Activities',
    description: 'Fun and fitness on solid ground',
    image: 'images/activities/activity-2.jpg',
    features: [
      'Tennis courts',
      'Cycling trails',
      'Hiking paths',
      'Beach volleyball',
      'Fitness center',
      'Yoga classes',
      'Equipment rental',
      'Guided tours',
    ],
  },
  {
    id: 3,
    name: 'Kids Club',
    description: 'Entertainment for our youngest guests',
    image: 'images/activities/activity-3.jpg',
    features: [
      'Supervised activities',
      'Arts and crafts',
      'Games room',
      'Outdoor playground',
      'Swimming lessons',
      'Movie nights',
      'Age-appropriate programs',
      'Qualified staff',
    ],
  },
];

const Activities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundImage: 'url(images/activities/activities-bg.jpg)',
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
              Activities & Entertainment
            </Typography>

            <Grid container spacing={4}>
              {activities.map((activity, index) => (
                <Grid item xs={12} md={4} key={activity.id}>
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
                        image={activity.image}
                        alt={activity.name}
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
                          {activity.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                          {activity.description}
                        </Typography>
                        <List>
                          {activity.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                {idx % 3 === 0 ? (
                                  <PoolIcon sx={{ color: 'secondary.main' }} />
                                ) : idx % 3 === 1 ? (
                                  <DirectionsBikeIcon sx={{ color: 'secondary.main' }} />
                                ) : (
                                  <SportsTennisIcon sx={{ color: 'secondary.main' }} />
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
                            Book Activity
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

export default Activities; 