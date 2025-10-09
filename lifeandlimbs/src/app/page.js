'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>
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

// Action Cards Section
const ActionCardsSection = () => {
  const actions = [
    {
      title: 'Donate',
      description: 'Your support funds life-changing prosthetic limbs.',
      icon: <Image src="/images/donate.png" alt="Donate" width={80} height={80} />,
      color: 'primary',
    },
    {
      title: 'Volunteer',
      description: 'Join us in our mission to uplift and empower.',
      icon: <Image src="/images/volunteer.png" alt="Volunteer" width={80} height={80} />,
      color: 'secondary',
    },
    {
      title: 'Share',
      description: 'Spread awareness and inspire others to contribute.',
      icon: <Image src="/images/share.png" alt="Share" width={80} height={80} />,
      color: 'success',
    },
  ];

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
              Empowering Mobility, Restoring Lives
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              We Believe We Can Save More Lives
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              At Life and Limb, we are committed to restoring mobility and independence for
              amputees. Together, we can transform lives, bring hope, and empower individuals to
              step into a brighter future.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {actions.map((action, index) => (
              <Grid item xs={12} md={4} key={action.title}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      {action.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {action.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {action.description}
                    </Typography>
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
              Our Mission
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Empowerment Through Free Prosthetics
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Founded by Sam Johnson, Life and Limb is driven by a simple yet powerful
              mission: to provide top-quality prosthetic limbs, completely free of charge, to those
              who need them most. From underserved communities in Kerala to other regions
              across India, our work focuses on restoring dignity and independence.
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
              Aiming to Provide 115 Free Prosthetic Limbs in 2024
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              We're reaching out to serve 100 individuals this year, many of whom face
              life-changing challenges due to accidents, illnesses, or other difficult circumstances.
              By supporting Life and Limb, you're helping these individuals reclaim their
              lives.
            </Typography>
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
                Mission Image Placeholder
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the age requirement for applicants?',
      answer: 'We serve individuals of all ages who require prosthetic limbs, from children to elderly adults.',
    },
    {
      question: 'What is the income limit for eligibility?',
      answer: 'Our services are primarily for those who cannot afford prosthetic limbs through other means.',
    },
    {
      question: 'What is the asset cap for applicants?',
      answer: 'We evaluate each case individually to ensure our help reaches those who need it most.',
    },
    {
      question: 'Do I need a specific ration card to apply?',
      answer: 'While documentation helps with verification, we work with individuals on a case-by-case basis.',
    },
    {
      question: 'Do I need to visit the clinic?',
      answer: 'Yes, a clinic visit is necessary for proper fitting and customization of the prosthetic limb.',
    },
    {
      question: 'Is there a minimum recovery period after losing a limb?',
      answer: 'We typically recommend allowing adequate healing time before prosthetic fitting.',
    },
    {
      question: 'Do I need to have physical ability to walk?',
      answer: 'We assess each individual\'s capabilities and provide appropriate prosthetic solutions.',
    },
    {
      question: 'Are individuals with a history of alcoholism eligible to apply?',
      answer: 'We evaluate all applications based on current circumstances and commitment to the program.',
    },
  ];

  return (
    <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
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
              Recently Asked Questions
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Frequently Asked Questions
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Accordion
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    '&:before': { display: 'none' },
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      px: 3,
                      py: 2,
                      '&.Mui-expanded': {
                        borderBottom: '1px solid #e2e8f0',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, py: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

// News Section
const NewsSection = () => (
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
            News & Articles
          </Typography>
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Inspiring Stories, Latest News & Articles
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            href="/news-and-articles"
            sx={{ fontWeight: 600 }}
          >
            Read More
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <motion.div variants={fadeInUp}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                <CardMedia
                  sx={{
                    height: 200,
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color="text.secondary">Article Image</Typography>
                </CardMedia>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    20 Jan, 2025
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Testing
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Lorem Ipsum is simply dummy text of the printing …
                  </Typography>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

// Main Homepage Component
export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <TestimonialSection />
      <ActionCardsSection />
      <FeaturesSection />
      <MissionSection />
      <FAQSection />
      <NewsSection />
    </Box>
  );
}
