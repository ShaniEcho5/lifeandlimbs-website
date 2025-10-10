'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      src: '/images/prostheticLeg.jpg',
      title: 'Prosthetic Limb Fitting',
      category: 'Prosthetic Services',
      size: 'large',
      description: 'Professional prosthetic limb fitting session with our expert team'
    },
    {
      id: 2,
      src: '/images/Johnson-Samuel.jpg',
      title: 'Dr. Samuel Johnson',
      category: 'Our Team',
      size: 'medium',
      description: 'Our lead prosthetist providing expert care and consultation'
    },
    {
      id: 3,
      src: '/images/Sleeve_Fitting_3345975_900x600.png',
      title: 'Sleeve Fitting Process',
      category: 'Prosthetic Services',
      size: 'small',
      description: 'Detailed sleeve fitting process for optimal comfort'
    },
    {
      id: 4,
      src: '/images/our-mission-img.webp',
      title: 'Our Mission in Action',
      category: 'Mission',
      size: 'wide',
      description: 'Transforming lives through accessible prosthetic care'
    },
    {
      id: 5,
      src: '/images/our-vision.webp',
      title: 'Vision for the Future',
      category: 'Vision',
      size: 'small',
      description: 'Building a world where mobility is accessible to all'
    },
    {
      id: 6,
      src: '/images/why-we-exist.jpg',
      title: 'Why We Exist',
      category: 'Purpose',
      size: 'medium',
      description: 'The driving force behind our commitment to serve'
    },

 


  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const getGridProps = (size) => {
    switch (size) {
      case 'large':
        return { xs: 12, sm: 6, md: 6, lg: 6 };
      case 'wide':
        return { xs: 12, sm: 8, md: 8, lg: 8 };
      case 'medium':
        return { xs: 12, sm: 6, md: 4, lg: 4 };
      default:
        return { xs: 12, sm: 6, md: 4, lg: 3 };
    }
  };

  const getCardHeight = (size) => {
    // Use consistent height for all cards for a cleaner look
    return 280;
  };

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
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <Grid container spacing={3}>
              {galleryItems.map((item, index) => (
                <Grid item {...getGridProps(item.size)} key={item.id}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      onClick={() => handleImageClick(item)}
                      sx={{
                        borderRadius: 3,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        position: 'relative',
                        '&:hover': {
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                          '& .overlay': {
                            opacity: 1,
                          },
                          '& .image': {
                            transform: 'scale(1.05)',
                          }
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: getCardHeight(item.size),
                          overflow: 'hidden',
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="image"
                          style={{
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                        
                        {/* Overlay */}
                        <Box
                          className="overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            p: 3,
                          }}
                        >
                          
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'white',
                              fontWeight: 700,
                              mb: 1,
                              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'white',
                              opacity: 0.9,
                              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>

                        {/* Category Badge */}
                       
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Image Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          {selectedImage && (
            <Box sx={{ position: 'relative' }}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={800}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                }}
              />
              
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                  p: 3,
                }}
              >
                <Chip
                  label={selectedImage.category}
                  size="small"
                  sx={{
                    mb: 1,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {selectedImage.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    opacity: 0.9,
                  }}
                >
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;