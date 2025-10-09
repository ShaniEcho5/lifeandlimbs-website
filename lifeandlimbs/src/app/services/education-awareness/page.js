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
  FaBullhorn,
  FaCheckCircle,
  FaGlobe,
  FaSchool,
  FaMicrophone,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const EducationAwarenessPage = () => {
  const services = [
    'Community awareness workshops',
    'School education programs',
    'Healthcare professional training',
    'Media campaigns and outreach',
    'Disability rights advocacy',
    'Accessibility consultations',
  ];

  const benefits = [
    {
      icon: <FaGlobe size={32} />,
      title: 'Community Impact',
      description: 'Spreading awareness across communities nationwide',
    },
    {
      icon: <FaSchool size={32} />,
      title: 'Educational Outreach',
      description: 'Training programs for schools and institutions',
    },
    {
      icon: <FaMicrophone size={32} />,
      title: 'Advocacy Platform',
      description: 'Promoting disability rights and accessibility',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #ff8a80 0%, #ffab91 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <FaBullhorn size={80} style={{ marginBottom: '2rem' }} />
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Education & Awareness Campaign
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
              Educating communities and raising awareness about prosthetics, 
              disability rights, and the importance of inclusion.
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
                color: '#ff8a80',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
              }}
            >
              Get Involved
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
                  Building Awareness, Breaking Barriers
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
                  Our Education & Awareness Campaign is dedicated to creating a more 
                  inclusive society by educating communities about prosthetics, 
                  disability rights, and the capabilities of people with limb differences.
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
                  Through workshops, training programs, and advocacy initiatives, 
                  we work to eliminate stigma and promote understanding, acceptance, 
                  and inclusion in all aspects of society.
                </Typography>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FaCheckCircle color="#ff8a80" size={20} />
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
                    height: '500px',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="h4" color="text.secondary" textAlign="center">
                    Awareness Campaign Image
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
                Our Impact Areas
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Creating positive change through education and advocacy
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
                          color: '#ff8a80',
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

      {/* Mission Section */}
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
                    Advocacy Mission Image
                  </Typography>
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
                  Our Mission
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
                  We believe that education is the key to creating lasting change. 
                  Our campaigns target schools, workplaces, healthcare facilities, 
                  and community organizations to promote inclusion and accessibility.
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
                  Through storytelling, demonstrations, and interactive workshops, 
                  we help people understand the realities of living with limb 
                  differences and the importance of creating barrier-free environments.
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
                    backgroundColor: '#ff8a80',
                    '&:hover': {
                      backgroundColor: '#f57571',
                    },
                  }}
                >
                  Join Our Mission
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
          backgroundColor: '#ff8a80',
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
                Be Part of the Change
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
                Join us in creating a more inclusive world. Together, we can 
                break down barriers and build understanding.
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
                    color: '#ff8a80',
                    '&:hover': {
                      backgroundColor: '#f8fafc',
                    },
                  }}
                >
                  Get Involved
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

export default EducationAwarenessPage;