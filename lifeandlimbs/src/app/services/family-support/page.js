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
  FaUsers,
  FaCheckCircle,
  FaHome,
  FaGraduationCap,
  FaHandsHelping,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const FamilySupportPage = () => {
  const services = [
    'Family counselling and guidance',
    'Caregiver support programs',
    'Educational workshops',
    'Financial assistance guidance',
    'Home adaptation consultations',
    'Sibling and children support',
  ];

  const benefits = [
    {
      icon: <FaHome size={32} />,
      title: 'Home Environment',
      description: 'Guidance on creating a supportive home environment',
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: 'Education & Training',
      description: 'Training programs for families and caregivers',
    },
    {
      icon: <FaHandsHelping size={32} />,
      title: 'Ongoing Support',
      description: '24/7 support network for families in need',
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
                color: '#34a3dc',
              }}
            >
              Family Support Program
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
              Comprehensive support for families navigating the prosthetic journey 
              together, because healing happens as a family.
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
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2a8bc2',
                },
              }}
            >
              Join Program
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
                    alt="Family Support"
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
                  Supporting Families Every Step
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
                  We understand that amputation affects not just the individual, 
                  but the entire family. Our Family Support Program provides 
                  comprehensive assistance to help families navigate this journey together.
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
                  From emotional support to practical guidance, we equip families 
                  with the tools and knowledge needed to create a supportive 
                  environment for recovery and adaptation.
                </Typography>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FaCheckCircle color="#34a3dc" size={20} />
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
                How We Support Families
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Comprehensive programs designed to strengthen family bonds
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

      {/* Program Details Section */}
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
                  Program Components
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
                  Our program includes regular family sessions, educational workshops, 
                  and access to a supportive community of families who understand 
                  your journey.
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
                  We also provide practical assistance with home modifications, 
                  financial planning, and connecting families with relevant 
                  resources in their community.
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
                      backgroundColor: '#2a8bc2',
                    },
                  }}
                >
                  Learn More
                </Button>
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
                    height: '400px',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src="/images/Sleeve_Fitting_3345975_900x600.png"
                    alt="Program Activities"
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
                Join Our Family Program
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
                Connect with other families and access the support you need 
                to navigate this journey together.
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
                  Join Program
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

export default FamilySupportPage;