'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
  Paper,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';
import { contactFAQ } from '../../data/faqData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    agreeToTerms: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3761a92a-d86b-4f69-a6fb-416fc0af6422", //this will change
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
          subject: `New Contact Form Submission - ${formData.inquiryType}`,
          from_name: formData.name,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          agreeToTerms: false,
        });
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Phone',
      content: '0479-2998836',
      description: 'Call us during business hours',
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      link: 'tel:0479-2998836',
    },
    {
      title: 'Email',
      content: 'founder@lifeandlimbs.org',
      description: 'Send us an email anytime',
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      link: 'mailto:founder@lifeandlimbs.org',
    },
    {
      title: 'Address',
      content: '6JG8+879, Kochalummoodu - Pandalam Rd, Vettiyar, Kerala 690534',
      description: 'Visit our clinic',
      icon: <LocationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      link: 'https://www.google.com/maps/place/Life+and+Limb+Service+Center/@9.225888,76.615971,17z/data=!3m1!4b1!4m6!3m5!1s0x3b06190015f1e0cb:0x5f988476f6a937bd!8m2!3d9.225888!4d76.615971!16s%2Fg%2F11y3k5r8qg',
    },
    {
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'Saturday: 9:00 AM - 2:00 PM',
      icon: <TimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      link: null,
    },
  ];

  const inquiryTypes = [
    'Prosthetic Limbs ',
    'Prosthetic Repair and Maintenance',
    'Counseling Services',
    'Public Education Campaigns',
    'Family Counselling',
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
              variant="h1"
              className="gradient-text"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
              }}
            >
              Get in Touch
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
              Ready to take the next step? Contact us today to learn more about our services
              or to begin your application process.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information Cards */}
      {/* <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Contact Information
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Multiple ways to reach us - choose what works best for you
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={3} key={info.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      component={info.link ? 'a' : 'div'}
                      href={info.link || undefined}
                      target={info.link?.startsWith('http') ? '_blank' : undefined}
                      rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        height: '100%',
                        p: 3,
                        textAlign: 'center',
                        borderRadius: 3,
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        {info.icon}
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                        {info.content}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box> */}

      {/* Contact Form and Map */}
      <Box className="section-padding" sx={{ backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <motion.div {...fadeInUp}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                    Send us a Message
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                    Fill out the form below and we'll get back to you as soon as possible. 
                    For urgent matters, please call us directly.
                  </Typography>

                  {showSuccess && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  {showError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      Failed to send message. Please try again or contact us directly.
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Type of Inquiry</InputLabel>
                          <Select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            label="Type of Inquiry"
                            required
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  maxHeight: 300,
                                  width: 'auto',
                                },
                              },
                              anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                              },
                              transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                              },
                              disableScrollLock: true,
                            }}
                          >
                            {inquiryTypes.map((type) => (
                              <MenuItem key={type} value={type}>
                                {type}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          multiline
                          rows={6}
                          variant="outlined"
                          placeholder="Please provide details about your inquiry, including any relevant medical information for prosthetic applications..."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="agreeToTerms"
                              checked={formData.agreeToTerms}
                              onChange={handleInputChange}
                              required
                            />
                          }
                          label="I agree to the terms and conditions and privacy policy"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={isSubmitting}
                          startIcon={<SendIcon />}
                          sx={{
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            borderRadius: 2,
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Additional Information */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Need Immediate Help?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                    For urgent medical concerns or immediate assistance, please call us directly 
                    during business hours.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    href="tel:0479-2998836"
                    sx={{ mb: 2, py: 1.5, fontWeight: 600 }}
                  >
                    Call Now: 0479-2998836
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    href="mailto:founder@lifeandlimbs.org"
                    sx={{ py: 1.5, fontWeight: 600 }}
                  >
                    Email Us
                  </Button>
                </Paper>

                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Visit Our Clinic
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                    <strong>Life and Limb</strong><br />
                    6JG8+879, Kochalummoodu - Pandalam Rd<br />
                    Vettiyar, Kerala 690534
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Please call ahead to schedule an appointment for consultations 
                    and prosthetic fittings.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    href="https://www.google.com/maps/place/Life+and+Limb+Service+Center/@9.225888,76.615971,17z/data=!3m1!4b1!4m6!3m5!1s0x3b06190015f1e0cb:0x5f988476f6a937bd!8m2!3d9.225888!4d76.615971!16s%2Fg%2F11y3k5r8qg"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ py: 1.5, fontWeight: 600 }}
                  >
                    Get Directions
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <FAQ 
        sectionTitle="Common Inquiries"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about our services"
        questions={contactFAQ}
        backgroundColor="grey.50"
        maxWidth="lg"
      />
    </Box>
  );
};

export default ContactUsPage;