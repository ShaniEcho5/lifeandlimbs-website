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
  FaHandPaper,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaHeart,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const FreeCustomProstheticPage = () => {
  const features = [
    'Completely free of charge',
    'Custom-fitted to your exact measurements',
    'High-quality materials and components',
    'Comprehensive training included',
    'Ongoing maintenance support',
    'No financial requirements or means testing',
  ];

  const benefits = [
    {
      icon: <FaClock size={32} />,
      title: 'Quick Process',
      description: 'From assessment to delivery within 4-6 weeks',
    },
    {
      icon: <FaUsers size={32} />,
      title: 'Expert Team',
      description: 'Certified prosthetists with years of experience',
    },
    {
      icon: <FaHeart size={32} />,
      title: 'Compassionate Care',
      description: 'Understanding support throughout your journey',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #34a3dc 0%, #7cc4e8 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <FaHandPaper size={80} style={{ marginBottom: '2rem' }} />
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Free Custom Prosthetic
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              High-quality, custom-fitted prosthetic limbs provided at absolutely no cost 
              to those who need them most.
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
                backgroundColor: 'white',
                color: '#34a3dc',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
              }}
            >
              Apply Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box className="section-padding" sx={{ backgroundColor: '#ffffff' }}>
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
                  Restoring Mobility, Rebuilding Lives
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
                  Our free custom prosthetic program is the cornerstone of our mission. 
                  We believe that financial constraints should never be a barrier to regaining 
                  mobility and independence. Every prosthetic limb we provide is carefully 
                  crafted to meet the unique needs of each individual.
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
                  From the initial assessment to the final fitting, our experienced team 
                  of prosthetists works closely with each recipient to ensure optimal 
                  comfort, functionality, and aesthetic appeal.
                </Typography>
                <List>
                  {features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FaCheckCircle color="#34a3dc" size={20} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
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
                    height: '500px',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="h4" color="text.secondary" textAlign="center">
                    Prosthetic Fitting Image
                  </Typography>
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
                Why Choose Our Service
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Experience the difference our personalized approach makes
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
                          color: '#34a3dc',
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

      {/* Process Section */}
      <Box className="section-padding" sx={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    height: '400px',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="h4" color="text.secondary" textAlign="center">
                    Process Illustration
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
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
                  Simple Application Process
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
                  Getting started is straightforward. Our streamlined process ensures 
                  you receive the care you need as quickly as possible, without 
                  unnecessary bureaucracy or delays.
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
                  Our team will guide you through every step, from the initial 
                  consultation to the final fitting and beyond. We're here to 
                  support you throughout your entire journey.
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
                    backgroundColor: '#34a3dc',
                    '&:hover': {
                      backgroundColor: '#2891c7',
                    },
                  }}
                >
                  Start Your Application
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
          backgroundColor: '#34a3dc',
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
                Ready to Take the Next Step?
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
                Contact us today to begin your journey toward renewed mobility and independence.
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
                    color: '#34a3dc',
                    '&:hover': {
                      backgroundColor: '#f8fafc',
                    },
                  }}
                >
                  Contact Us
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

export default FreeCustomProstheticPage;