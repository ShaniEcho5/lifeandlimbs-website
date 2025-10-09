import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from '@mui/material';
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
  return (
    <Box>
      {/* Hero Section */}
      <Box
        className="hero-gradient"
        sx={{
          py: 8,
          textAlign: 'center',
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(/images/Sleeve_Fitting_3345975_900x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for text readability
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
            About Us
          </Typography>
          <Typography
            variant="h1"
            className="#fff"
            sx={{
              mb: 3,
              fontFamily: 'poppins',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              color: 'white',
            }}
          >
            Transforming Lives, One Step at <br /> a Time
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: '#fff',
              fontFamily: 'poppins',
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            At Life and Limb, we believe that mobility is more than just a physical
            ability—it's the foundation for independence, dignity, and hope. Since our inception in
            2013, we have been dedicated to providing free, high-quality prosthetic limbs to
            individuals in need, empowering them to reclaim their lives and dreams.
          </Typography>
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
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
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
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Life and Limb was founded by Sam Johnson, a compassionate visionary who saw the
                struggles of amputees in rural Kerala firsthand. Moved by the stories of those
                who lost their limbs due to tragic accidents, illnesses, or congenital
                conditions, Sam set out on a mission to make prosthetic care accessible to all, regardless
                of financial circumstances.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Initially a small, family-supported initiative aimed at helping ten amputees per
                year, Life and Limb quickly grew as the demand for affordable prosthetics
                increased. In 2018, we opened our doors to public donations, enabling us to expand
                our impact and touch the lives of more individuals across India.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '400px',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/our-mission-img_0Z5ajpX.webp"
                  alt="Prosthetic fitting session showing a healthcare professional helping a patient with their prosthetic leg"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '400px',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/our-mission-img.webp"
                  alt="Our mission - providing prosthetic care and support"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  priority
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                At Life and Limb, our mission is to restore hope, mobility, and independence to
                individuals who have experienced the life-changing loss of a limb. We are
                dedicated to empowering lives by providing state-of-the-art prosthetic limbs free of
                charge to those in need, ensuring that financial challenges do not stand in the
                way of mobility.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                We are committed to fostering a compassionate environment that addresses the
                physical, emotional, and social struggles faced by individuals with limb loss.
                Through advocacy and education, we aim to raise awareness about the realities of
                limb loss and the transformative potential of prosthetic solutions, inspiring
                communities to support and uplift those in need.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Our vision is to build a world where no one is limited by the loss of a limb—a
                world where access to prosthetic care is a universal right, not a privilege. We
                dream of a future where every individual, regardless of socioeconomic background,
                can live with dignity, confidence, and independence.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                By blending cutting-edge technology with compassion, we aspire to become a
                global leader in transforming lives. Through innovation and collaboration, we aim to
                create inclusive communities that empower individuals with limb loss, breaking
                barriers and enabling them to reclaim their potential and pursue their dreams.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '400px',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/our-vision.webp"
                  alt="Our vision - empowering lives through accessible prosthetic care"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Our Values
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
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
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" color="white">
                    💙
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Compassion
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Every individual deserves to live with dignity and confidence.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
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
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" color="white">
                    ⚖️
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Equity
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Access to mobility solutions should not depend on financial ability.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
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
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" color="white">
                    💡
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Innovation
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  We partner with leading prosthetic manufacturers to provide cutting-edge solutions.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
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
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" color="white">
                    🌱
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Sustainability
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  We ensure long-term impact through durable prosthetics and follow-up care.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why We Exist Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Why We Exist
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                In India, there are thousands of amputees—men, women, and children—who face
                overwhelming challenges every day. Most come from impoverished families and live in
                rural areas with little or no access to healthcare. Here's why Life and Limb is
                essential:
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Lack of accessibility:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Quality prosthetics are expensive and out of reach for the majority.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Stigma and Isolation:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Amputees often face social ostracism and discrimination.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Emotional and Financial Burden:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Families struggle with the costs of treatment while coping with emotional trauma.
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                We step in to break these barriers, offering not only physical mobility but also
                emotional and social reintegration for amputees and their families.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  Why We Exist Image
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Our Team
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Behind every transformed life is a team of passionate professionals, volunteers,
              and partners. Under Sam Johnson's leadership, our team continues to grow and
              innovate, building stronger pathways to a future where mobility is accessible to
              all.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
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
                    JS
                  </Typography>
                </Avatar>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                  Johnson Samuel
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary.main"
                  sx={{ mb: 2, fontWeight: 500 }}
                >
                  Founder & Managing Director
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  A compassionate visionary who founded Life and Limb with a mission to make prosthetic care accessible to all, regardless of financial circumstances.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box className="section-padding" sx={{ backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Join Our Mission
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
              Whether through donation, volunteering, or spreading awareness, 
              you can help us continue changing lives.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="https://www.gofundme.com/f/fzcv9-life-and-limb/donate"
                target="_blank"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  fontWeight: 600,
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  }
                }}
              >
                Donate Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/contact-us"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  fontWeight: 600,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Get Involved
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsPage;