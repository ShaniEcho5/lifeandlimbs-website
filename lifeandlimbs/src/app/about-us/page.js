'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Life and Limb',
  description: 'Learn about Life and Limb\'s mission, team, and impact in providing free prosthetic limbs to amputees across India.',
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Sam Johnson',
      role: 'Founder & CEO',
      bio: 'Passionate about making prosthetic limbs accessible to all. Founded Life and Limb with a vision to restore independence.',
      image: '/images/placeholders/team-member.svg',
    },
    {
      name: 'Dr. Sarah Wilson',
      role: 'Medical Director',
      bio: 'Leading prosthetist with 15 years of experience in rehabilitation medicine and prosthetic fitting.',
      image: '/images/placeholders/team-member.svg',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Operations Manager',
      bio: 'Coordinates our field operations across Kerala and manages patient care processes.',
      image: '/images/placeholders/team-member.svg',
    },
  ];

  const milestones = [
    { year: '2013', event: 'Life and Limb founded', description: 'Started with a mission to provide free prosthetic limbs' },
    { year: '2015', event: 'First 100 recipients', description: 'Reached our first major milestone of helping 100 individuals' },
    { year: '2018', event: 'Partnership with Ottobock', description: 'Partnered with leading prosthetic technology provider' },
    { year: '2020', event: '500+ lives changed', description: 'Expanded our reach to serve over 500 beneficiaries' },
    { year: '2024', event: 'Goal: 115 new limbs', description: 'Aiming to provide 115 free prosthetic limbs this year' },
  ];

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
              About Life and Limb
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
              Empowerment Through Free Prosthetics
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
              Since 2013, we've been dedicated to restoring mobility and dignity to amputees
              across India through our comprehensive prosthetic support program.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
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
                  Our Story
                </Typography>
                <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                  Founded with Purpose
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Life and Limb was founded by Sam Johnson with a simple yet powerful belief: 
                  that everyone deserves access to mobility, regardless of their financial circumstances. 
                  What started as a grassroots initiative in Kerala has grown into a comprehensive 
                  program serving amputees across India.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Our work focuses on providing top-quality prosthetic limbs completely free of charge, 
                  along with the necessary fitting, training, and follow-up care. We believe that 
                  restoring physical mobility is just the beginning – our goal is to restore 
                  confidence, independence, and hope.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href="/services"
                  sx={{ fontWeight: 600 }}
                >
                  Learn About Our Services
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    height: '400px',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" color="text.secondary" textAlign="center">
                    Our Story Image
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Journey
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Key milestones in our mission to serve amputees across India
              </Typography>
            </Box>

            <Box sx={{ position: 'relative' }}>
              {milestones.map((milestone, index) => (
                <Box
                  key={milestone.year}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4,
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
                  }}
                >
                  <Box sx={{ flex: 1, px: { xs: 0, md: 3 } }}>
                    <Card
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      }}
                    >
                      <Chip
                        label={milestone.year}
                        color="primary"
                        sx={{ mb: 2, fontWeight: 600 }}
                      />
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {milestone.event}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Card>
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      my: { xs: 2, md: 0 },
                      mx: { xs: 0, md: 2 },
                    }}
                  >
                    <Typography variant="body2" color="white" fontWeight={600}>
                      {index + 1}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }} />
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Team Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Meet Our Team
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Dedicated professionals working to change lives every day
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} md={4} key={member.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 3,
                          backgroundColor: 'primary.main',
                        }}
                      >
                        <Typography variant="h3" color="white">
                          {member.name.charAt(0)}
                        </Typography>
                      </Avatar>
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary.main"
                        sx={{ mb: 2, fontWeight: 500 }}
                      >
                        {member.role}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {member.bio}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Box className="section-padding" sx={{ backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Impact in Numbers
              </Typography>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                    500+
                  </Typography>
                  <Typography variant="h6">Lives Changed</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                    11
                  </Typography>
                  <Typography variant="h6">Years of Service</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                    100%
                  </Typography>
                  <Typography variant="h6">Free of Charge</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                    24/7
                  </Typography>
                  <Typography variant="h6">Support Available</Typography>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Join Our Mission
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
                Whether through donation, volunteering, or spreading awareness, 
                you can help us continue changing lives.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="https://www.gofundme.com/f/fzcv9-life-and-limb/donate"
                  target="_blank"
                  sx={{ px: 4, py: 1.5, fontWeight: 600 }}
                >
                  Donate Now
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/contact-us"
                  sx={{ px: 4, py: 1.5, fontWeight: 600 }}
                >
                  Get Involved
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsPage;