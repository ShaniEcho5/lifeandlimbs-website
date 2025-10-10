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

// Animation variants for the grid lines
const gridLineVariants = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5
    }
  }
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.2
    }
  }
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Free Custom Prosthetic',
      description: 'High-quality, custom-fitted prosthetic limbs provided at no cost to those in need.',
      icon: <FaHandPaper size={30} />,
      link: '/services/free-custom-prosthetic',
      color: 'primary.main',
    },
    {
      title: 'Prosthetic Repair & Maintenance',
      description: 'Professional repair and maintenance services to keep your prosthetic in optimal condition.',
      icon: <FaTools size={30} />,
      link: '/services/repair-maintenance',
      color: 'primary.main',
    },
    {
      title: 'Counselling Services',
      description: 'Emotional and psychological support to help you adapt to life with a prosthetic limb.',
      icon: <FaComments size={30} />,
      link: '/services/counselling',
      color: 'primary.main',
    },
    {
      title: 'Family Support Program',
      description: 'Comprehensive support for families navigating the prosthetic journey together.',
      icon: <FaUsers size={30} />,
      link: '/services/family-support',
      color: 'primary.main',
    },
    {
      title: 'Public Education & Awareness Campaign',
      description: 'Educational programs to raise awareness about prosthetics and disability rights.',
      icon: <FaBullhorn size={30} />,
      link: '/services/education-awareness',
      color: 'primary.main',
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
                    color: 'primary.main',
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

      {/* Reasons To Choose Us Section - Innovative Solutions Style */}
      <Box 
        className="section-padding" 
        sx={{ 
          backgroundColor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Grid container spacing={0} sx={{ minHeight: { xs: 'auto', md: '70vh' } }}>
              {/* Left Side - Vertical Text Block */}
              <Grid 
                item 
                xs={12} 
                md={5} 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pr: { xs: 0, md: 6 },
                  mb: { xs: 6, md: 0 },
                }}
              >
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      letterSpacing: '0.5px',
                    }}
                  >
                    Quality services that
                  </Typography>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontWeight: 800,
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                      lineHeight: { xs: 1.1, md: 1 },
                      color: '#1a1a1a',
                      mb: 3,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    RESTORE
                    <br />
                    HOPE &
                    <br />
                    TRANSFORM
                    <br />
                    LIVES
                  </Typography>
                </motion.div>
              </Grid>

              {/* Right Side - Modified Grid for 5 Services with animated connecting lines */}
              <Grid 
                item 
                xs={12} 
                md={7} 
                sx={{ 
                  position: 'relative',
                }}
              >
                {/* Animated Grid Lines Background */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                  }}
                >
                  {/* Horizontal Lines */}
                  <motion.div
                    variants={gridLineVariants}
                    style={{
                      position: 'absolute',
                      top: '33.33%',
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: '#e5e5e5',
                      transformOrigin: 'center',
                      transform: 'translateY(-0.5px)',
                    }}
                  />
                  <motion.div
                    variants={gridLineVariants}
                    style={{
                      position: 'absolute',
                      top: '66.66%',
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: '#e5e5e5',
                      transformOrigin: 'center',
                      transform: 'translateY(-0.5px)',
                    }}
                  />
                  
                  {/* Vertical Lines */}
                  <motion.div
                    variants={{
                      hidden: { scaleY: 0 },
                      visible: {
                        scaleY: 1,
                        transition: {
                          duration: 1.2,
                          ease: "easeOut",
                          delay: 0.1
                        }
                      }
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: '33.33%',
                      width: '1px',
                      backgroundColor: '#e5e5e5',
                      transformOrigin: 'center',
                      transform: 'translateX(-0.5px)',
                    }}
                  />
                  <motion.div
                    variants={{
                      hidden: { scaleY: 0 },
                      visible: {
                        scaleY: 1,
                        transition: {
                          duration: 1.2,
                          ease: "easeOut",
                          delay: 0.1
                        }
                      }
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: '66.66%',
                      width: '1px',
                      backgroundColor: '#e5e5e5',
                      transformOrigin: 'center',
                      transform: 'translateX(-0.5px)',
                    }}
                  />
                </motion.div>

                {/* Animated Grid Dots at intersections */}
                {[
                  { top: '33.33%', left: '33.33%' },
                  { top: '33.33%', left: '66.66%' },
                  { top: '66.66%', left: '33.33%' },
                  { top: '66.66%', left: '66.66%' }
                ].map((position, index) => (
                  <motion.div
                    key={index}
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: position.top,
                      left: position.left,
                      transform: 'translate(-50%, -50%) translate(-0.5px, -0.5px)',
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        px:-4,
                        py:-4,
                        
                      }}
                    />
                  </motion.div>
                ))}

                {/* 3x3 Grid for 5 services with specific placement */}
                <Grid container sx={{ height: '100%', minHeight: { xs: 'auto', md: '500px' } }}>
                  {/* Row 1: Service 1, Empty, Service 2 */}
                  <Grid 
                    item 
                    xs={4} 
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 1.5
                          }
                        }
                      }}
                    >
                      <Box
                        component={Link}
                        href={services[0].link}
                        sx={{
                          height: '100%',
                          minHeight: { xs: '160px', md: '166px' },
                          p: { xs: 2, md: 3 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          position: 'relative',
                          zIndex: 2,
                          backgroundColor: 'transparent',
                          borderRadius: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        <Box
                          className="service-icon"
                          sx={{
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            borderRadius: 2,
                            backgroundColor: services[0].color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            color: 'white',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {services[0].icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="card-title"
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            color: '#1a1a1a',
                            transition: 'color 0.3s ease',
                            lineHeight: 1.2,
                          }}
                        >
                          {services[0].title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          className="card-description" 
                          sx={{ 
                            color: '#666',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.7rem', md: '0.8rem' },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {services[0].description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  
                  {/* Row 1: Empty middle */}
                  <Grid item xs={4} />
                  
                  {/* Row 1: Service 2 */}
                  <Grid 
                    item 
                    xs={4} 
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 1.6
                          }
                        }
                      }}
                    >
                      <Box
                        component={Link}
                        href={services[1].link}
                        sx={{
                          height: '100%',
                          minHeight: { xs: '160px', md: '166px' },
                          p: { xs: 2, md: 3 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          position: 'relative',
                          zIndex: 2,
                          backgroundColor: 'transparent',
                          borderRadius: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        <Box
                          className="service-icon"
                          sx={{
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            borderRadius: 2,
                            backgroundColor: services[1].color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            color: 'white',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {services[1].icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="card-title"
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            color: '#1a1a1a',
                            transition: 'color 0.3s ease',
                            lineHeight: 1.2,
                          }}
                        >
                          {services[1].title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          className="card-description" 
                          sx={{ 
                            color: '#666',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.7rem', md: '0.8rem' },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {services[1].description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  
                  {/* Row 2: Empty left */}
                  <Grid item xs={4} />
                  
                  {/* Row 2: Service 3 in center */}
                  <Grid 
                    item 
                    xs={4} 
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 1.7
                          }
                        }
                      }}
                    >
                      <Box
                        component={Link}
                        href={services[2].link}
                        sx={{
                          height: '100%',
                          minHeight: { xs: '160px', md: '166px' },
                          p: { xs: 2, md: 3 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          position: 'relative',
                          zIndex: 2,
                          backgroundColor: 'transparent',
                          borderRadius: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        <Box
                          className="service-icon"
                          sx={{
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            borderRadius: 2,
                            backgroundColor: services[2].color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            color: 'white',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {services[2].icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="card-title"
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            color: '#1a1a1a',
                            transition: 'color 0.3s ease',
                            lineHeight: 1.2,
                          }}
                        >
                          {services[2].title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          className="card-description" 
                          sx={{ 
                            color: '#666',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.7rem', md: '0.8rem' },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {services[2].description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  
                  {/* Row 2: Empty right */}
                  <Grid item xs={4} />
                  
                  {/* Row 3: Service 4 */}
                  <Grid 
                    item 
                    xs={4} 
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 1.8
                          }
                        }
                      }}
                    >
                      <Box
                        component={Link}
                        href={services[3].link}
                        sx={{
                          height: '100%',
                          minHeight: { xs: '160px', md: '166px' },
                          p: { xs: 2, md: 3 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          position: 'relative',
                          zIndex: 2,
                          backgroundColor: 'transparent',
                          borderRadius: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        <Box
                          className="service-icon"
                          sx={{
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            borderRadius: 2,
                            backgroundColor: services[3].color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            color: 'white',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {services[3].icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="card-title"
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            color: '#1a1a1a',
                            transition: 'color 0.3s ease',
                            lineHeight: 1.2,
                          }}
                        >
                          {services[3].title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          className="card-description" 
                          sx={{ 
                            color: '#666',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.7rem', md: '0.8rem' },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {services[3].description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  
                  {/* Row 3: Empty middle */}
                  <Grid item xs={4} />
                  
                  {/* Row 3: Service 5 */}
                  <Grid 
                    item 
                    xs={4} 
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <motion.div 
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 1.9
                          }
                        }
                      }}
                    >
                      <Box
                        component={Link}
                        href={services[4].link}
                        sx={{
                          height: '100%',
                          minHeight: { xs: '160px', md: '166px' },
                          p: { xs: 2, md: 3 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          position: 'relative',
                          zIndex: 2,
                          backgroundColor: 'transparent',
                          borderRadius: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        <Box
                          className="service-icon"
                          sx={{
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            borderRadius: 2,
                            backgroundColor: services[4].color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            color: 'white',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {services[4].icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          className="card-title"
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            color: '#1a1a1a',
                            transition: 'color 0.3s ease',
                            lineHeight: 1.2,
                          }}
                        >
                          {services[4].title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          className="card-description" 
                          sx={{ 
                            color: '#666',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.7rem', md: '0.8rem' },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {services[4].description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Grid>
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