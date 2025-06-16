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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BookNow from '../components/BookNow';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Elegant comfort with modern amenities',
    price: 200,
    image: '/images/rooms/deluxe-room.jpg',
    features: [
      'King-size bed',
      'Private balcony',
      'Ocean view',
      'Smart TV',
      'Mini bar',
      'High-speed WiFi',
      'Luxury bathroom',
      'Room service',
    ],
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Spacious luxury with separate living area',
    price: 350,
    image: '/images/rooms/executive-suite.jpg',
    features: [
      'King-size bed',
      'Separate living room',
      'Private terrace',
      'Premium amenities',
      'Smart TV',
      'Mini bar',
      'High-speed WiFi',
      'Butler service',
    ],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views',
    price: 500,
    image: '/images/rooms/presidential-suite.jpg',
    features: [
      'King-size bed',
      'Private pool',
      'Panoramic views',
      'Luxury amenities',
      'Smart TV',
      'Mini bar',
      'High-speed WiFi',
      '24/7 butler service',
    ],
  },
];

const Rooms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openBookNow, setOpenBookNow] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState(null);

  const handleOpenBookNow = (room) => {
    setSelectedRoom(room);
    setOpenBookNow(true);
  };

  const handleCloseBookNow = () => {
    setOpenBookNow(false);
    setSelectedRoom(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundImage: 'url(images/rooms/rooms-bg.jpg)',
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
              Our Rooms & Suites
            </Typography>

            <Grid container spacing={4}>
              {rooms.map((room, index) => (
                <Grid item xs={12} md={4} key={room.id}>
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
                        image={room.image}
                        alt={room.name}
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
                          {room.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                          {room.description}
                        </Typography>
                        <List>
                          {room.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckCircleOutlineIcon
                                  sx={{ color: 'secondary.main' }}
                                />
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
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              color: 'secondary.main',
                              fontFamily: 'Playfair Display',
                            }}
                          >
                            ${room.price}/night
                          </Typography>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleOpenBookNow(room)}
                            sx={{
                              '&:hover': {
                                backgroundColor: 'secondary.dark',
                              },
                            }}
                          >
                            Book Now
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

      <BookNow
        open={openBookNow}
        onClose={handleCloseBookNow}
        selectedRoom={selectedRoom}
      />
    </Box>
  );
};

export default Rooms; 