'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const GalleryPage = () => {
  const galleryItems = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Gallery Image ${index + 1}`,
    category: index % 3 === 0 ? 'Prosthetic Fittings' : index % 3 === 1 ? 'Success Stories' : 'Events',
  }));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        className="hero-gradient"
        sx={{
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Gallery
            </Typography>
            <Typography
              variant="h1"
              className="gradient-text"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
              }}
            >
              Visual Stories of Hope
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              See the impact of our work through images of prosthetic fittings, 
              success stories, and community events.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {galleryItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 250,
                        background: `linear-gradient(135deg, ${
                          index % 3 === 0 ? '#e3f2fd 0%, #bbdefb 100%' :
                          index % 3 === 1 ? '#f3e5f5 0%, #e1bee7 100%' :
                          '#e8f5e8 0%, #c8e6c9 100%'
                        })`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="h6" color="text.secondary" textAlign="center">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
                        {item.category}
                      </Typography>
                    </CardMedia>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default GalleryPage;