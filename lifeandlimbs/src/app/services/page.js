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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Engineering as EngineeringIcon,
  SupportAgent as SupportIcon,
  MonetizationOff as FreeIcon,
  AccessTime as TimeIcon,
  LocalHospital as MedicalIcon,
  Build as FittingIcon,
  School as TrainingIcon,
  Psychology as FollowUpIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Free Prosthetic Limbs',
      description: 'Complete prosthetic limb provision at no cost to the recipient, including all necessary components and materials.',
      icon: <FreeIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      features: [
        'Lower limb prosthetics (leg, foot)',
        'Upper limb prosthetics (arm, hand)',
        'Advanced technology components',
        'Custom fitting and alignment',
        'Quality assurance testing',
      ],
    },
    {
      title: 'Medical Consultation',
      description: 'Comprehensive medical evaluation and consultation with experienced prosthetists and rehabilitation specialists.',
      icon: <MedicalIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      features: [
        'Initial medical assessment',
        'Residual limb evaluation',
        'Prosthetic recommendation',
        'Health status review',
        'Candidacy determination',
      ],
    },
    {
      title: 'Custom Fitting',
      description: 'Precise measurement, fabrication, and fitting of prosthetic devices tailored to each individual\'s needs.',
      icon: <FittingIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      features: [
        'Detailed measurements',
        'Socket fabrication',
        'Component assembly',
        'Alignment optimization',
        'Comfort adjustments',
      ],
    },
    {
      title: 'Training & Rehabilitation',
      description: 'Comprehensive training program to help recipients learn to use their new prosthetic limbs effectively.',
      icon: <TrainingIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      features: [
        'Gait training',
        'Balance exercises',
        'Daily activity training',
        'Prosthetic care education',
        'Safety instruction',
      ],
    },
    {
      title: 'Follow-up Care',
      description: 'Ongoing support and maintenance to ensure optimal function and comfort of prosthetic devices.',
      icon: <FollowUpIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      features: [
        'Regular check-ups',
        'Adjustments and repairs',
        'Component replacement',
        'Progress monitoring',
        'Long-term support',
      ],
    },
    {
      title: 'Technical Support',
      description: 'Expert technical assistance and maintenance services to keep prosthetic devices functioning optimally.',
      icon: <EngineeringIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      features: [
        'Technical troubleshooting',
        'Maintenance services',
        'Warranty support',
        'Emergency repairs',
        'Component upgrades',
      ],
    },
  ];

  const processSteps = [
    {
      label: 'Application',
      description: 'Submit your application with required documentation including medical records and financial information.',
    },
    {
      label: 'Evaluation',
      description: 'Our team reviews your application and conducts a preliminary assessment of your eligibility.',
    },
    {
      label: 'Medical Assessment',
      description: 'Visit our clinic for a comprehensive medical evaluation and prosthetic consultation.',
    },
    {
      label: 'Fitting Process',
      description: 'Custom measurement, fabrication, and initial fitting of your prosthetic device.',
    },
    {
      label: 'Training',
      description: 'Comprehensive training program to learn proper use and care of your prosthetic limb.',
    },
    {
      label: 'Follow-up',
      description: 'Ongoing support, adjustments, and regular check-ups to ensure optimal function.',
    },
  ];

  const eligibilityRequirements = [
    'Medically suitable for prosthetic use',
    'Demonstrates financial need',
    'Committed to the training program',
    'Able to attend clinic visits',
    'Meets age requirements',
    'Has stable medical condition',
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
              Our Services
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
              Comprehensive Prosthetic Services
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
              From initial consultation to long-term follow-up care, we provide complete
              prosthetic services at no cost to those who need them most.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/contact-us"
              sx={{ px: 4, py: 1.5, fontWeight: 600 }}
            >
              Apply for Services
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                What We Offer
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Complete prosthetic care from assessment to long-term support
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        p: 3,
                        borderRadius: 3,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <Box sx={{ textAlign: 'center', mb: 3 }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, textAlign: 'center' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                        {service.description}
                      </Typography>
                      <List dense>
                        {service.features.map((feature, idx) => (
                          <ListItem key={idx} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary',
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Process Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Process
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Step-by-step journey from application to receiving your prosthetic limb
              </Typography>
            </Box>

            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Stepper orientation="vertical">
                {processSteps.map((step, index) => (
                  <Step key={step.label} active={true}>
                    <StepLabel>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Eligibility Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div {...fadeInUp}>
                <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                  Eligibility Requirements
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  We evaluate each application individually to ensure our services reach 
                  those who need them most. Our eligibility criteria are designed to be 
                  inclusive while ensuring the best outcomes for our recipients.
                </Typography>
                <List>
                  {eligibilityRequirements.map((requirement, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={requirement}
                        primaryTypographyProps={{
                          variant: 'body1',
                          fontWeight: 500,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
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
                    Eligibility Image
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Technology Partners */}
      <Box className="section-padding" sx={{ backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Technology Partners
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                We partner with leading prosthetic technology providers
              </Typography>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
                    Ottobock
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Leading global provider of prosthetic components and technology, 
                    ensuring our recipients receive state-of-the-art prosthetic solutions.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
                    Advanced Technology
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We utilize the latest in prosthetic technology including microprocessor 
                    knees, advanced socket designs, and cutting-edge materials.
                  </Typography>
                </Card>
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
                Ready to Get Started?
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
                Take the first step towards regaining your mobility and independence. 
                Contact us today to learn more about our services.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/contact-us"
                  sx={{ px: 4, py: 1.5, fontWeight: 600 }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/about-us"
                  sx={{ px: 4, py: 1.5, fontWeight: 600 }}
                >
                  Learn More
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