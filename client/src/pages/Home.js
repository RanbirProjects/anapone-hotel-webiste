import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookNow from '../components/BookNow';

const Home = () => {
  const [openBookNow, setOpenBookNow] = React.useState(false);

  const handleOpenBookNow = () => {
    setOpenBookNow(true);
  };

  const handleCloseBookNow = () => {
    setOpenBookNow(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundImage: 'url(/images/welcome/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundImage: 'url(/images/welcome/overlay.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontFamily: 'Playfair Display',
                fontSize: { xs: '3rem', md: '5rem' },
                textAlign: 'center',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Welcome to Anapnoe
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                textAlign: 'center',
                mb: 4,
                fontFamily: 'Playfair Display',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Where Luxury Meets the Aegean Sea
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleOpenBookNow}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
              >
                Book Your Stay
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 0,
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="/images/welcome/hero-bg.jpg"
                    alt="Luxury Rooms"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontFamily: 'Playfair Display',
                        mb: 2,
                      }}
                    >
                      Luxury Rooms
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      Experience unparalleled comfort in our meticulously designed rooms and suites.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 0,
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="/images/welcome/overlay.jpg"
                    alt="Fine Dining"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontFamily: 'Playfair Display',
                        mb: 2,
                      }}
                    >
                      Fine Dining
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      Savor exquisite cuisine prepared by our world-class chefs using the finest ingredients.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 0,
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="/images/welcome/hero-bg.jpg"
                    alt="Wellness & Spa"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontFamily: 'Playfair Display',
                        mb: 2,
                      }}
                    >
                      Wellness & Spa
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      Rejuvenate your body and soul with our premium spa treatments and wellness programs.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <BookNow open={openBookNow} onClose={handleCloseBookNow} />
    </Box>
  );
};

export default Home; 