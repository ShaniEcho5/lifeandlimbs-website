'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  FaComments,
  FaCheckCircle,
  FaHeart,
  FaUsers,
  FaBrain,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const CounsellingPage = () => {
  const services = [
    'Individual counselling sessions',
    'Group therapy programs',
    'Family counselling support',
    'Peer support networks',
    'Adaptation strategies',
    'Mental health assessments',
  ];

  const benefits = [
    {
      icon: <FaHeart size={32} />,
      title: 'Emotional Support',
      description: 'Compassionate care for your emotional well-being',
    },
    {
      icon: <FaUsers size={32} />,
      title: 'Peer Community',
      description: 'Connect with others who share similar experiences',
    },
    {
      icon: <FaBrain size={32} />,
      title: 'Coping Strategies',
      description: 'Learn effective techniques for daily challenges',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: '#ffffff',
          color: '#1a1a1a',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'primary.main',
              }}
            >
              Counselling Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                color: '#666',
              }}
            >
              Emotional and psychological support to help you navigate your journey 
              with confidence and resilience.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/contact-us"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              }}
            >
              Book Session
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box className="section-padding" sx={{ backgroundColor: '#f8fafc' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 4,
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: '#1a1a1a',
                  }}
                >
                  Supporting Your Mental Wellness
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Adapting to life with a prosthetic involves more than just physical 
                  adjustment. Our comprehensive counselling services address the 
                  emotional and psychological aspects of your journey.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Our licensed counsellors specialize in working with amputees and 
                  understand the unique challenges you face. We provide a safe, 
                  supportive environment where you can express your feelings freely.
                </Typography>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FaCheckCircle color="primary.main" size={20} />
                      </ListItemIcon>
                      <ListItemText
                        primary={service}
                        primaryTypographyProps={{
                          variant: 'body1',
                          fontWeight: 500,
                          color: '#1a1a1a',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '500px',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src="/images/Sleeve_Fitting_3345975_900x600.png"
                    alt="Counselling Session"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box className="section-padding" sx={{ backgroundColor: '#f8fafc' }}>
        <Container maxWidth="xl">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#1a1a1a',
                }}
              >
                How We Can Help
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Comprehensive support for your emotional and mental well-being
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} md={4} key={benefit.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 4,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 3,
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: '#1a1a1a',
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666',
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Approach Section */}
      <Box className="section-padding" sx={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src="/images/Sleeve_Fitting_3345975_900x600.png"
                    alt="Therapeutic Approach"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 4,
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: '#1a1a1a',
                  }}
                >
                  Our Therapeutic Approach
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  We use evidence-based therapeutic approaches tailored to your 
                  individual needs. Our goal is to help you build resilience, 
                  develop coping strategies, and maintain positive mental health.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Whether you're dealing with grief, anxiety, depression, or 
                  adjustment difficulties, our compassionate team is here to 
                  support you every step of the way.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/contact-us"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        className="section-padding"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Ready to Talk?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                  opacity: 0.9,
                }}
              >
                Taking the first step towards emotional wellness is important. 
                We're here to listen and support you.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/contact-us"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: '#f8fafc',
                    },
                  }}
                >
                  Book Session
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/services"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'white',
                    },
                  }}
                >
                  View All Services
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default CounsellingPage;