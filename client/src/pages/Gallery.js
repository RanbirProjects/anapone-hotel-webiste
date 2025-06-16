import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    image: 'images/gallery/gallery-1.jpg',
    title: 'Luxury Suite',
  },
  {
    id: 2,
    image: 'images/gallery/gallery-2.jpg',
    title: 'Beach View',
  },
  {
    id: 3,
    image: 'images/gallery/gallery-3.jpg',
    title: 'Resort Pool',
  },
];

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundImage: 'url(images/gallery/gallery-bg.jpg)',
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
              Photo Gallery
            </Typography>

            <Grid container spacing={4}>
              {galleryImages.map((item, index) => (
                <Grid item xs={12} md={4} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
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
                        height="400"
                        image={item.image}
                        alt={item.title}
                        sx={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '400px',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}
                      />
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

export default Gallery; 