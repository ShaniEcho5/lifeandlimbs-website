'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  FaHandPaper,
  FaTools,
  FaComments,
  FaUsers,
  FaBullhorn,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Free Custom Prosthetic',
      description: 'High-quality, custom-fitted prosthetic limbs provided at no cost to those in need.',
      icon: <FaHandPaper size={48} />,
      link: '/services/free-custom-prosthetic',
      color: '#34a3dc',
    },
    {
      title: 'Prosthetic Repair & Maintenance',
      description: 'Professional repair and maintenance services to keep your prosthetic in optimal condition.',
      icon: <FaTools size={48} />,
      link: '/services/repair-maintenance',
      color: '#34a3dc',
    },
    {
      title: 'Counselling Services',
      description: 'Emotional and psychological support to help you adapt to life with a prosthetic limb.',
      icon: <FaComments size={48} />,
      link: '/services/counselling',
      color: '#34a3dc',
    },
    {
      title: 'Family Support Program',
      description: 'Comprehensive support for families navigating the prosthetic journey together.',
      icon: <FaUsers size={48} />,
      link: '/services/family-support',
      color: '#34a3dc',
    },
    {
      title: 'Public Education & Awareness Campaign',
      description: 'Educational programs to raise awareness about prosthetics and disability rights.',
      icon: <FaBullhorn size={48} />,
      link: '/services/education-awareness',
      color: '#34a3dc',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          backgroundColor: '#ffffff',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Content Side */}
            <Grid item xs={12} md={6}>
              <motion.div {...fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#34a3dc',
                    fontWeight: 600,
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Our Services
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    color: '#1a1a1a',
                    lineHeight: 1.1,
                  }}
                >
                  Empowering Lives Through
                  <br />
                  Comprehensive Care
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  We provide comprehensive prosthetic services from initial consultation 
                  to long-term support, ensuring every individual receives the care they deserve.
                </Typography>
              </motion.div>
            </Grid>
            
            {/* Image Side */}
            <Grid item xs={12} md={6}>
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '500px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src="/images/prostheticLeg.jpg"
                    alt="Prosthetic Leg"
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

      {/* Services Grid Section */}
      <Box className="section-padding" sx={{ backgroundColor: '#f8fafc', py: 8 }}>
        <Container maxWidth="xl" sx={{ px: 4 }}>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 6, 
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  color: '#1a1a1a',
                }}
              >
                Reasons To Choose Us
              </Typography>
            </Box>

            {/* First Row - 3 Cards */}
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto', mb: 6 }}>
              {services.slice(0, 3).map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={service.title}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{ position: 'relative', mb: 4 }}>
                      {/* Top connecting line */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -20,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80%',
                          height: '40px',
                          border: '3px solid #e2e8f0',
                          borderBottom: 'none',
                          borderRadius: '20px 20px 0 0',
                          zIndex: 1,
                        }}
                      />
                      
                      <Card
                        sx={{
                          height: '280px',
                          borderRadius: 3,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.3s ease',
                          border: '2px solid #e2e8f0',
                          overflow: 'hidden',
                          position: 'relative',
                          '&:hover': {
                            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                            transform: 'translateY(-4px)',
                            borderColor: service.color,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                          {/* Icon */}
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 2,
                              backgroundColor: service.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 3,
                              color: 'white',
                            }}
                          >
                            {service.icon}
                          </Box>
                          
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              mb: 2, 
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: '#1a1a1a',
                              lineHeight: 1.3,
                            }}
                          >
                            {service.title}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              mb: 3,
                              color: '#666',
                              lineHeight: 1.5,
                              fontSize: '0.9rem',
                              flexGrow: 1,
                            }}
                          >
                            {service.description}
                          </Typography>
                          
                          <Button
                            variant="text"
                            component={Link}
                            href={service.link}
                            sx={{
                              // color: service.color,
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              textTransform: 'none',
                              justifyContent: 'flex-start',
                              p: 0,
                              
                            }}
                          >
                            Read More  →
                          </Button>
                        </CardContent>
                      </Card>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Second Row - 2 Cards Centered */}
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '700px', mx: 'auto' }}>
              {services.slice(3, 5).map((service, index) => (
                <Grid item xs={12} sm={6} md={6} key={service.title}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{ position: 'relative', mb: 4 }}>
                      {/* Top connecting line */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -20,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80%',
                          height: '40px',
                          border: '3px solid #e2e8f0',
                          borderBottom: 'none',
                          borderRadius: '20px 20px 0 0',
                          zIndex: 1,
                        }}
                      />
                      
                      <Card
                        sx={{
                          height: '280px',
                          borderRadius: 3,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.3s ease',
                          border: '2px solid #e2e8f0',
                          overflow: 'hidden',
                          position: 'relative',
                          '&:hover': {
                            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                            transform: 'translateY(-4px)',
                            borderColor: service.color,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                          {/* Icon */}
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 2,
                              backgroundColor: service.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 3,
                              color: 'white',
                            }}
                          >
                            {service.icon}
                          </Box>
                          
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              mb: 2, 
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: '#1a1a1a',
                              lineHeight: 1.3,
                            }}
                          >
                            {service.title}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              mb: 3,
                              color: '#666',
                              lineHeight: 1.5,
                              fontSize: '0.9rem',
                              flexGrow: 1,
                            }}
                          >
                            {service.description}
                          </Typography>
                          
                          <Button
                            variant="text"
                            component={Link}
                            href={service.link}
                            sx={{
                              color: service.color,
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              textTransform: 'none',
                              justifyContent: 'flex-start',
                              p: 0,
                              backgroundColor: 'transparent',
                              '&:hover': {
                                backgroundColor: 'transparent',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            Read More →
                          </Button>
                        </CardContent>
                      </Card>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action Section */}
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
                  fontSize: '2.5rem',
                }}
              >
                Ready to Get Started?
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
                Take the first step towards regaining your mobility and independence. 
                Contact us today to learn more about our services.
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
                  href="/about-us"
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
                  About Us
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;