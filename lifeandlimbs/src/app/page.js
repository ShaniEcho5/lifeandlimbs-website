'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Favorite as HeartIcon,
  People as PeopleIcon,
  Share as ShareIcon,
  CurrencyRupee as MoneyIcon,
  Engineering as TechIcon,
  SupportAgent as SupportIcon,
  FormatQuote as QuoteIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '../components/FAQ';
import { contactFAQ } from '../data/faqData';

// Animation variants
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

// Hero Section Component
const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src="/videos/hero-background.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </Box>
      
      {/* Video Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '70vh' }}>
          <Grid item xs={12} md={6}>
            
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Welcome to Life and Limb
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                Restoring Independence, Free of Charge
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'white',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                A nonprofit organization dedicated to providing free prosthetic limbs to
                amputees across India. Since 2013, Life and Limb has helped hundreds regain mobility
                and confidence, enabling them to lead fulfilling lives. Join us in our mission to
                make mobility accessible to all, regardless of financial circumstances.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="https://www.gofundme.com/f/fzcv9-life-and-limb/donate"
                  target="_blank"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                  }}
                >
                  Donate Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/about-us"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Testimonial Section
const TestimonialSection = () => (
  <Box sx={{ py: 6, backgroundColor: 'primary.50' }}>
    <Container maxWidth="lg">
      <motion.div {...fadeInUp}>
        {/* <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: 'center',
            position: 'relative',
            backgroundColor: 'white',
          }}
        >
          <QuoteIcon
            sx={{
              fontSize: 60,
              color: 'primary.main',
              opacity: 0.1,
              position: 'absolute',
              top: 20,
              left: 20,
            }}
          />
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 3,
              backgroundColor: 'primary.main',
            }}
          >
            <Typography variant="h4" color="white">
              A
            </Typography>
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontStyle: 'italic',
              color: 'text.primary',
              lineHeight: 1.6,
            }}
          >
            "Life and Limb gave me back my independence after losing my leg. Their prosthetic
            limb has restored my confidence and allowed me to support my family again."
          </Typography>
          <Typography variant="body1" color="text.secondary">
            — Anonymous Beneficiary
          </Typography>
        </Paper> */}
      </motion.div>
    </Container>
  </Box>
);

// Action Cards Section - Modern Minimal Grid Layout with Animated Lines
const ActionCardsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const actions = [
    {
      title: 'Donate',
      description: ' Your support funds life-changing prosthetic limbs.',
    },
    {
      title: 'Volunteer',
      description: 'Join us in our mission to uplift and empower communities.',
    },
    {
      title: 'Share',
      description: 'Spread awareness and inspire others to contribute to our cause.',
    },
    {
      title: 'Support',
      description: 'Provide ongoing assistance and care for prosthetic recipients.',
    },
  ];

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

  return (
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
                  Innovative solutions that
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
                  EMPOWERING
                  <br />
                  MOBILITY,
                  <br />
                  RESTORING
                  <br />
                  LIVES
                </Typography>
              </motion.div>
            </Grid>

            {/* Right Side - 2x2 Grid with animated connecting lines */}
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
                {/* Horizontal Line */}
                <motion.div
                  variants={gridLineVariants}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: '#e5e5e5',
                    transformOrigin: 'center',
                    transform: 'translateY(-0.5px)',
                  }}
                />
                
                {/* Vertical Line */}
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
                    left: '50%',
                    width: '1px',
                    backgroundColor: '#e5e5e5',
                    transformOrigin: 'center',
                    transform: 'translateX(-0.5px)',
                  }}
                />
              </motion.div>

              {/* Animated Grid Dot at intersection */}
              <motion.div
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) translate(-0.5px, -0.5px)',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#e9b308',
                    borderRadius: '50%',
                    mx:'-3px',
                    my:'-3px',
                  }}
                />
              </motion.div>

              <Grid container sx={{ height: '100%', minHeight: { xs: 'auto', md: '500px' } }}>
                {actions.map((action, index) => (
                  <Grid 
                    item 
                    xs={6} 
                    key={action.title}
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        '& .card-title, & .card-description': {
                          color: 'white',
                        },
                      },
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
                            delay: 1.5 + (index * 0.1)
                          }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          minHeight: { xs: '200px', md: '250px' },
                          p: { xs: 3, md: 4 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 2,
                          backgroundColor: 'transparent',
                          borderRadius: 0,
                        }}
                      >
                        <Typography 
                          variant="h5" 
                          className="card-title"
                          sx={{ 
                            mb: 2, 
                            fontWeight: 600,
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            color: '#1a1a1a',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {action.title}
                        </Typography>
                        <Typography 
                          variant="body1"
                          className="card-description" 
                          sx={{ 
                            color: '#666',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {action.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: 'Prosthetics at No Cost',
      description: 'Every prosthetic limb is provided free, thanks to the generosity of donors and partners who believe in our mission.',
      icon: <Image src="/images/prosthetic-at-no-cost-icon.png" alt="Volunteer" width={80} height={80} />,
    },
    { 
      title: 'Advanced Technology',
      description: 'We partner with Ottobock, a leader in prosthetics, to ensure recipients and partners who believe in our mission.',
      icon: <Image src="/images/advanced-technology-icon.png" alt="Volunteer" width={80} height={80} />,
    },
    {
      title: 'Personalized Support',
      description: 'Each recipient receives custom care, support, and follow-up and partners who believe in our mission.',
      icon: <Image src="/images/personalized-support.png" alt="Volunteer" width={80} height={80} />,
    },
  ];

  return (
    <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
      <Container maxWidth="xl">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Why We're Different
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      minHeight: '320px',
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

// Mission Section
const MissionSection = () => (
  <Box 
    className="section-padding" 
    sx={{ 
      backgroundColor: '#e6f0ef',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background Image */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '100%', md: '50%' },
        height: '100%',
        zIndex: 1,
      }}
    >
      <Image
        src="/images/Sleeve_Fitting_3345975_900x600.png"
        alt="Prosthetic Fitting Process"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </Box>

    {/* Mobile Overlay for better text readability */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: { 
          xs: 'rgba(230, 240, 239, 0.85)', // Semi-transparent overlay on mobile
          md: 'transparent' // No overlay on desktop
        },
        zIndex: 1,
        display: { md: 'none' }, // Only show on mobile
      }}
    />
    
    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
      <Grid container spacing={6} alignItems="center">
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
              Our Mission
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3, 
                fontWeight: 700,
                color: { xs: '#1a1a1a', md: 'inherit' }, // Darker text on mobile
                textShadow: { xs: '1px 1px 2px rgba(255,255,255,0.8)', md: 'none' } // Text shadow on mobile
              }}
            >
              Empowerment Through Free Prosthetics
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                lineHeight: 1.8, 
                fontSize: '1.1rem',
                color: { xs: '#2c2c2c', md: 'inherit' }, // Darker text on mobile
                textShadow: { xs: '1px 1px 2px rgba(255,255,255,0.8)', md: 'none' } // Text shadow on mobile
              }}
            >
              Founded by Sam Johnson, Life and Limb is driven by a simple yet powerful
              mission: to provide top-quality prosthetic limbs, completely free of charge, to those
              who need them most. From underserved communities in Kerala to other regions
              across India, our work focuses on restoring dignity and independence.
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3, 
                fontWeight: 600, 
                color: 'primary.main',
                textShadow: { xs: '1px 1px 2px rgba(255,255,255,0.8)', md: 'none' }
              }}
            >
              Aiming to Provide 115 Free Prosthetic Limbs in 2024
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                fontSize: '1.1rem',
                color: { xs: '#2c2c2c', md: 'inherit' },
                textShadow: { xs: '1px 1px 2px rgba(255,255,255,0.8)', md: 'none' }
              }}
            >
              We're reaching out to serve 100 individuals this year, many of whom face
              life-changing challenges due to accidents, illnesses, or other difficult circumstances.
              By supporting Life and Limb, you're helping these individuals reclaim their
              lives.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);



// News Section
const NewsSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');
        if (response.ok) {
          const posts = await response.json();
          setBlogPosts(posts.slice(0, 3)); // Get latest 3 posts
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback to dummy data if API fails
        setBlogPosts([
          {
            slug: 'life-and-limbs-restoring-mobility',
            title: 'Life and Limb: Restoring Mobility, Dignity, and Hope',
            description: 'Life and Limb provides affordable prosthetic care, empowering amputees across India to regain mobility, confidence, and a new beginning.',
            formattedDate: 'October 13, 2025',
            banner: '/images/Sleeve_Fitting_3345975_900x600.png'
          }
        ]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              Blogs
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Inspiring Stories, Latest Blogs
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/blog"
              sx={{ fontWeight: 600 }}
            >
              Read More
            </Button>
          </Box>

          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={6} lg={4} key={post.slug}>
                <motion.div variants={fadeInUp}>
                  <Box
                    component={Link}
                    href={`/blog/${post.slug}`}
                    sx={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <Card 
                      sx={{ 
                        borderRadius: 3, 
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        }
                      }}
                    >
                    <CardMedia
                      sx={{
                        height: 200,
                        backgroundImage: post.banner ? `url(${post.banner})` : 
                          'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {!post.banner && (
                        <Typography color="text.secondary">Blog Image</Typography>
                      )}
                    </CardMedia>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {post.formattedDate}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, lineHeight: 1.3 }}>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {post.description?.substring(0, 100)}...
                      </Typography>
                      <Button size="small" color="primary">
                        Read More
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
  );
};

// Main Homepage Component
export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <TestimonialSection />
      <ActionCardsSection />
      <FeaturesSection />
      <MissionSection />
      <FAQ 
        sectionTitle="Common Inquiries"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about our services"
        questions={contactFAQ}
        backgroundColor="grey.50"
        maxWidth="lg"
      />
      <NewsSection />
    </Box>
  );
}
