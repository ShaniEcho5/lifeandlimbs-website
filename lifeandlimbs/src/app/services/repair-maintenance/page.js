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
  FaTools,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaWrench,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const RepairMaintenancePage = () => {
  const services = [
    'Emergency repairs within 24 hours',
    'Regular maintenance check-ups',
    'Component replacement',
    'Socket adjustments and modifications',
    'Alignment corrections',
    'Wear and tear assessments',
  ];

  const benefits = [
    {
      icon: <FaClock size={32} />,
      title: '24/7 Emergency Service',
      description: 'Quick response for urgent repairs and adjustments',
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Quality Guarantee',
      description: 'All repairs backed by our comprehensive warranty',
    },
    {
      icon: <FaWrench size={32} />,
      title: 'Expert Technicians',
      description: 'Certified professionals with specialized training',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #e9b308 0%, #f4d03f 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <FaTools size={80} style={{ marginBottom: '2rem' }} />
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Repair & Maintenance
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
              Professional repair and maintenance services to keep your prosthetic 
              in optimal condition throughout its lifetime.
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
                color: '#e9b308',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
              }}
            >
              Schedule Service
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    height: '500px',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #fff7e6 0%, #fef3cd 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="h4" color="text.secondary" textAlign="center">
                    Repair Workshop Image
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
                  Expert Care for Your Prosthetic
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
                  Your prosthetic is a significant investment in your mobility and 
                  independence. Our comprehensive repair and maintenance services 
                  ensure it continues to serve you reliably for years to come.
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
                  From routine maintenance to emergency repairs, our skilled 
                  technicians use only genuine parts and advanced techniques 
                  to restore your prosthetic to optimal condition.
                </Typography>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FaCheckCircle color="#e9b308" size={20} />
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
                Professional care you can trust for your prosthetic needs
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
                          color: '#e9b308',
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

      {/* Service Types Section */}
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
                  Comprehensive Service Options
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
                  Whether you need emergency repairs, routine maintenance, or 
                  component upgrades, we offer flexible service options to 
                  meet your specific needs and schedule.
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
                  Our preventive maintenance programs help extend the life 
                  of your prosthetic and identify potential issues before 
                  they become major problems.
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
                    backgroundColor: '#e9b308',
                    '&:hover': {
                      backgroundColor: '#d4a007',
                    },
                  }}
                >
                  Book Appointment
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
                    Service Types Image
                  </Typography>
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
          backgroundColor: '#e9b308',
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
                Need Repair or Maintenance?
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
                Don't wait for small issues to become big problems. Contact us today 
                to schedule your service appointment.
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
                    color: '#e9b308',
                    '&:hover': {
                      backgroundColor: '#f8fafc',
                    },
                  }}
                >
                  Schedule Service
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

export default RepairMaintenancePage;