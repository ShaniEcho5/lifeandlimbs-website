'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import Image from 'next/image';
import NextLink from 'next/link';

const Footer = () => {
  const theme = useTheme();

  const organizationLinks = [
    { label: 'Homepage', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Gallery', href: '/gallery' },
  ];

  const legalLinks = [
    { label: 'Terms of use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: YouTube, href: '#', label: 'YouTube' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        color: '#2c3e50',
        pt: { xs: 3, md: 4 },
        pb: 2,
        mt: 'auto',
        borderTop: '1px solid #e9ecef',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="space-between">
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box>
                <Image
                  src="/images/life-and-limb-logo-03.png"
                  alt="Life and Limb Logo"
                  width={140}
                  height={70}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.7, 
                  color: '#6c757d',
                  fontSize: { xs: '0.95rem', md: '1rem' }
                }}
              >
                A nonprofit organization dedicated to providing free prosthetic limbs to
                amputees across India.
              </Typography>
              
              {/* Legal Links */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 2 } }}>
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link.label}>
                    <Link
                      component={NextLink}
                      href={link.href}
                      sx={{
                        color: '#6c757d',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: theme.palette.primary.main,
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <Typography sx={{ color: '#dee2e6', fontSize: '0.875rem' }}>
                        |
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Stack>
          </Grid>

          {/* Organization Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2c3e50',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  letterSpacing: '0.5px',
                }}
              >
                Organization
              </Typography>
              
              <Stack spacing={1.5}>
                {organizationLinks.map((link) => (
                  <Link
                    key={link.label}
                    component={NextLink}
                    href={link.href}
                    sx={{
                      color: '#6c757d',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      display: 'block',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2c3e50',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  letterSpacing: '0.5px',
                }}
              >
                Get in Touch
              </Typography>
              
              <Stack spacing={2.5}>
                {/* Address */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <LocationOn sx={{ 
                    color: theme.palette.primary.main, 
                    fontSize: '1.4rem',
                    mt: 0.2 
                  }} />
                  <Box>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#2c3e50',
                        mb: 0.5
                      }}
                    >
                      Life and Limb
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#6c757d', 
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}
                    >
                      6JG8+879, Kochalummoodu,<br />
                      Pandalam Rd, Vettiyar,<br />
                      Kerala 690534
                    </Typography>
                  </Box>
                </Box>
                
                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Phone sx={{ 
                    color: theme.palette.primary.main, 
                    fontSize: '1.4rem' 
                  }} />
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ color: '#6c757d', fontSize: '0.9rem' }}
                    >
                      Office:
                    </Typography>
                    <Link
                      href="tel:0479-2998836"
                      sx={{
                        color: '#2c3e50',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        '&:hover': {
                          color: theme.palette.primary.main,
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      0479-2998836
                    </Link>
                  </Box>
                </Box>
                
                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Email sx={{ 
                    color: theme.palette.primary.main, 
                    fontSize: '1.4rem' 
                  }} />
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ color: '#6c757d', fontSize: '0.9rem' }}
                    >
                      Email:
                    </Typography>
                    <Link
                      href="mailto:founder@lifeandlimbs.org"
                      sx={{
                        color: '#2c3e50',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        wordBreak: 'break-word',
                        '&:hover': {
                          color: theme.palette.primary.main,
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      founder@lifeandlimbs.org
                    </Link>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider 
          sx={{ 
            my: { xs: 3, md: 3 }, 
            borderColor: '#dee2e6',
            opacity: 0.8
          }} 
        />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 2, md: 1 },
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: '#6c757d',
              fontSize: '0.875rem',
              order: { xs: 2, md: 1 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            © 2025 Life and Limb. All Rights Reserved
          </Typography>

          {/* Social Media Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              order: { xs: 1, md: 2 },
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                sx={{
                  color: '#6c757d',
                  width: 44,
                  height: 44,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <social.icon fontSize="medium" />
              </IconButton>
            ))}
          </Box>

          {/* Developer Credit */}
          <Typography
            variant="body2"
            sx={{
              color: '#6c757d',
              fontSize: '0.875rem',
              order: { xs: 3, md: 3 },
              textAlign: { xs: 'center', md: 'right' }
            }}
          >
            Designed by{' '}
            <Link
              href="https://www.echo5digital.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Echo5 Digital
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
