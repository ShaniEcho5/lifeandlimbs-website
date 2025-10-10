'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const NewsAndArticlesPage = () => {
  const articles = [
    {
      title: 'Testing',
      excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      date: '20 Jan, 2025',
      category: 'Updates',
      image: '/images/placeholders/article1.svg',
      slug: 'testing',
    },
    {
      title: 'Life-Changing Stories from Our Recipients',
      excerpt: 'Read inspiring stories from individuals whose lives have been transformed through our prosthetic program...',
      date: '15 Jan, 2025',
      category: 'Success Stories',
      image: '/images/placeholders/article2.svg',
      slug: 'success-stories',
    },
    {
      title: 'Partnership with Leading Technology Providers',
      excerpt: 'Our collaboration with Ottobock brings cutting-edge prosthetic technology to our recipients...',
      date: '10 Jan, 2025',
      category: 'Partnerships',
      image: '/images/placeholders/article3.svg',
      slug: 'technology-partnerships',
    },
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
              Blogs
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
              Inspiring Stories, Latest Blogs
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
              Stay updated with our latest news, success stories, and insights 
              from the world of prosthetic rehabilitation.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Articles Grid */}
      <Box className="section-padding" sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {articles.map((article, index) => (
              <Grid item xs={12} md={6} lg={4} key={article.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
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
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          {article.date}
                        </Typography>
                        <Chip
                          label={article.category}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {article.excerpt}
                      </Typography>
                      <Button
                        component={Link}
                        href={`/news-and-articles/${article.slug}`}
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Load More Button */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5, fontWeight: 600 }}
            >
              Load More Articles
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Newsletter Signup */}
      <Box className="section-padding" sx={{ backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Stay Updated
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Got any questions about the product or services? We're here to help.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                href="/contact-us"
                sx={{ px: 4, py: 1.5, fontWeight: 600 }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default NewsAndArticlesPage;