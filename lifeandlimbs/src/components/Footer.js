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
    { label: 'News & Articles', href: '/news-and-articles' },
    { label: 'Events', href: '/upcoming-events' },
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
        backgroundColor: 'white',
        color: 'black',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/images/life-and-limb-logo copy.png"
                alt="Life and Limb Logo"
                width={120}
                height={70}
              />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'black' }}>
              A nonprofit organization dedicated to providing free prosthetic limbs to
              amputees across India.
            </Typography>
            
            {/* Legal Links */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'secondary.main',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Organization Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'black',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Organization
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {organizationLinks.map((link) => (
                <Link
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      paddingLeft: 1,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={5}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'black',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Address:
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <LocationOn sx={{ color: 'secondary.main', mr: 1, mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Life and Limb
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black', lineHeight: 1.6 }}>
                    6JG8+879, Kochalummoodu,<br />
                    Pandalam Rd, Vettiyar,<br />
                    Kerala 690534
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="body2" sx={{ color: 'black', mr: 1 }}>
                  Office:
                </Typography>
                <Link
                  href="tel:0479-2998836"
                  sx={{
                    color: 'black',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'secondary.main',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  0479-2998836
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="body2" sx={{ color: 'black', mr: 1 }}>
                  Email:
                </Typography>
                <Link
                  href="mailto:founder@lifeandlimbs.org"
                  sx={{
                    color: 'black',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'secondary.main',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  founder@lifeandlimbs.org
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.2)' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'black',
              order: { xs: 2, md: 1 },
            }}
          >
            Copyright © 2025 Life and Limb. All Rights Reserved
          </Typography>

          {/* Social Media Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
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
                  color: 'grey.400',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <social.icon fontSize="small" />
              </IconButton>
            ))}
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: 'grey.400',
              order: { xs: 3, md: 3 },
            }}
          >
            Designed and developed by{' '}
            <Link
              href="https://www.echo5digital.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'secondary.main',
                textDecoration: 'none',
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