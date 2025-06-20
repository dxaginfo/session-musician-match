import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import PaymentIcon from '@mui/icons-material/Payment';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <MusicNoteIcon fontSize="large" />,
      title: 'Create Your Profile',
      description: 'Showcase your skills, experience, and audio samples to attract potential clients.'
    },
    {
      icon: <SearchIcon fontSize="large" />,
      title: 'Find the Perfect Match',
      description: 'Search for musicians by instrument, genre, location, and availability.'
    },
    {
      icon: <EventIcon fontSize="large" />,
      title: 'Book Sessions Easily',
      description: 'Schedule recording sessions with integrated calendar and booking management.'
    },
    {
      icon: <PaymentIcon fontSize="large" />,
      title: 'Secure Payments',
      description: 'Handle payments securely with our integrated escrow system.'
    }
  ];

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Session Musician Match
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Connect with the perfect musicians for your recording project
          </Typography>
          <Box mt={4}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                mr: 2 
              }}
            >
              Find Musicians
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                color: 'white',
                borderColor: 'white'
              }}
            >
              Create Profile
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
          Our platform makes it easy to find, book, and collaborate with session musicians
        </Typography>
        
        <Grid container spacing={4} mt={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}
                elevation={2}
              >
                <Box color="primary.main" mb={2}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Musicians Showcase */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Featured Musicians
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
            Discover some of our top session musicians
          </Typography>
          
          <Grid container spacing={4} mt={4}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{ pt: '100%' }}
                    image={`https://source.unsplash.com/random/300x300/?musician&sig=${item}`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      Musician Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Guitar, Bass, Drums
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                      View Profile
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary">
              View All Musicians
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to get started?
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Join our community of musicians and creators today
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: 'white',
              color: 'secondary.main',
              '&:hover': {
                bgcolor: 'grey.100'
              }
            }}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}