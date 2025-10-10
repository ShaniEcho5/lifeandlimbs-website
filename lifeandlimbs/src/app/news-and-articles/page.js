'use client';

import React, { useState } from 'react';
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
  Pagination,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

const NewsAndArticlesPage = () => {
  const [page, setPage] = useState(1);
  const articlesPerPage = 9;

  const featuredArticles = [
    {
      title: 'Complete Guide to Prosthetic Rehabilitation',
      excerpt: 'Everything you need to know about the prosthetic rehabilitation process, from initial consultation to long-term care and maintenance.',
      date: 'October 8, 2025',
      category: 'Guide',
      readTime: '12 mins read',
      author: 'Dr. Samuel Johnson',
      image: '/images/our-mission-img.webp',
      slug: 'prosthetic-rehabilitation-guide',
      featured: true
    },
    {
      title: 'Latest Advances in Prosthetic Technology',
      excerpt: 'Discover the cutting-edge innovations in prosthetic limbs that are transforming lives and improving mobility for amputees worldwide.',
      date: 'October 5, 2025',
      category: 'Technology',
      readTime: '8 mins read',
      author: 'Dr. Samuel Johnson',
      image: '/images/advanced-technology-icon.png',
      slug: 'prosthetic-technology-advances',
      featured: true
    }
  ];

  const regularArticles = [
    {
      title: 'Life-Changing Stories: Meet Our Recipients',
      excerpt: 'Inspiring stories from individuals whose lives have been transformed through our prosthetic program and community support.',
      date: 'October 3, 2025',
      category: 'Success Stories',
      readTime: '6 mins read',
      author: 'Life and Limb Team',
      image: '/images/Johnson-Samuel.jpg',
      slug: 'success-stories'
    },
    {
      title: 'Understanding the Psychology of Limb Loss',
      excerpt: 'Exploring the emotional journey of adaptation and the mental health support available for amputees and their families.',
      date: 'September 28, 2025',
      category: 'Mental Health',
      readTime: '10 mins read',
      author: 'Dr. Samuel Johnson',
      image: '/images/personalized-support.png',
      slug: 'psychology-limb-loss'
    },
    {
      title: 'Partnership with Ottobock: Bringing World-Class Technology',
      excerpt: 'Learn about our strategic partnership with Ottobock and how it enables us to provide state-of-the-art prosthetic solutions.',
      date: 'September 25, 2025',
      category: 'Partnerships',
      readTime: '7 mins read',
      author: 'Life and Limb Team',
      image: '/images/prosthetic-at-no-cost-icon.png',
      slug: 'ottobock-partnership'
    },
    {
      title: 'Prosthetic Care and Maintenance: Essential Tips',
      excerpt: 'A comprehensive guide to caring for your prosthetic limb to ensure longevity, comfort, and optimal performance.',
      date: 'September 20, 2025',
      category: 'Care Guide',
      readTime: '9 mins read',
      author: 'Dr. Samuel Johnson',
      image: '/images/our-vision.webp',
      slug: 'prosthetic-care-maintenance'
    },
    {
      title: 'The Impact of Community Support on Recovery',
      excerpt: 'How community involvement and peer support networks play a crucial role in the rehabilitation and social reintegration process.',
      date: 'September 15, 2025',
      category: 'Community',
      readTime: '8 mins read',
      author: 'Life and Limb Team',
      image: '/images/why-we-exist.jpg',
      slug: 'community-support-impact'
    },
    {
      title: 'Accessibility and Prosthetics: Building Inclusive Spaces',
      excerpt: 'Examining the importance of accessible infrastructure and how it impacts the daily lives of prosthetic users.',
      date: 'September 12, 2025',
      category: 'Accessibility',
      readTime: '11 mins read',
      author: 'Dr. Samuel Johnson',
      image: '/images/Sleeve_Fitting_3345975_900x600.png',
      slug: 'accessibility-prosthetics'
    },
    {
      title: 'Fundraising Milestones: 2024 Impact Report',
      excerpt: 'A detailed look at our 2024 achievements, the lives we\'ve touched, and the prosthetic limbs we\'ve provided this year.',
      date: 'September 8, 2025',
      category: 'Impact Report',
      readTime: '5 mins read',
      author: 'Life and Limb Team',
      image: '/images/our-mission-img_0Z5ajpX.webp',
      slug: 'impact-report-2024'
    },
    {
      title: 'Volunteer Spotlight: The Heroes Behind Our Mission',
      excerpt: 'Meet the dedicated volunteers who make our work possible and learn how you can join our mission to transform lives.',
      date: 'September 5, 2025',
      category: 'Volunteers',
      readTime: '6 mins read',
      author: 'Life and Limb Team',
      image: '/images/life-and-limb-logo.png',
      slug: 'volunteer-spotlight'
    },
    {
      title: 'Financial Transparency: How Your Donations Make a Difference',
      excerpt: 'Understanding how every dollar donated is used to provide free prosthetic limbs and support services to those in need.',
      date: 'August 30, 2025',
      category: 'Transparency',
      readTime: '7 mins read',
      author: 'Life and Limb Team',
      image: '/images/donate.png',
      slug: 'financial-transparency'
    }
  ];

  const allArticles = [...featuredArticles, ...regularArticles];
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  const startIndex = (page - 1) * articlesPerPage;
  const displayedArticles = allArticles.slice(startIndex, startIndex + articlesPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <motion.div {...fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#1a1a1a',
                mb: 0,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Blogs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box sx={{ pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <Grid container spacing={4}>
              {/* Large Featured Article */}
              <Grid item xs={12} md={8}>
                <motion.div variants={fadeInUp}>
                  <Box
                    component={Link}
                    href={`/news-and-articles/${featuredArticles[0].slug}`}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        '& img': {
                          transform: 'scale(1.02)',
                        },
                        '& .article-title': {
                          color: 'primary.main',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 3,
                        overflow: 'hidden',
                        borderRadius: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={featuredArticles[0].image}
                        alt={featuredArticles[0].title}
                        sx={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                          }}
                        >
                          {featuredArticles[0].category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {featuredArticles[0].readTime}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {featuredArticles[0].date}
                      </Typography>
                      <Typography
                        variant="h4"
                        className="article-title"
                        sx={{
                          fontWeight: 700,
                          color: '#1a1a1a',
                          lineHeight: 1.3,
                          transition: 'color 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        {featuredArticles[0].title}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Secondary Featured Article */}
              <Grid item xs={12} md={4}>
                <motion.div variants={fadeInUp}>
                  <Box
                    component={Link}
                    href={`/news-and-articles/${featuredArticles[1].slug}`}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        '& img': {
                          transform: 'scale(1.02)',
                        },
                        '& .article-title': {
                          color: 'primary.main',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 3,
                        overflow: 'hidden',
                        borderRadius: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={featuredArticles[1].image}
                        alt={featuredArticles[1].title}
                        sx={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                          }}
                        >
                          {featuredArticles[1].category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {featuredArticles[1].readTime}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {featuredArticles[1].date}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="article-title"
                        sx={{
                          fontWeight: 600,
                          color: '#1a1a1a',
                          lineHeight: 1.4,
                          transition: 'color 0.3s ease',
                          textDecoration: 'none',
                        }}
                      >
                        {featuredArticles[1].title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        By {featuredArticles[1].author}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content with Sidebar Layout */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <Grid container spacing={6}>
              {/* Main Article List */}
              <Grid item xs={12} md={8}>
                <Box>
                  {regularArticles.map((article, index) => (
                    <motion.div key={article.slug} variants={fadeInUp}>
                      <Box
                        component={Link}
                        href={`/news-and-articles/${article.slug}`}
                        sx={{
                          display: 'flex',
                          textDecoration: 'none',
                          color: 'inherit',
                          py: 4,
                          borderBottom: '1px solid #e5e5e5',
                          gap: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            '& img': {
                              transform: 'scale(1.02)',
                            },
                            '& .article-title': {
                              color: 'primary.main',
                            },
                          },
                        }}
                      >
                        {/* Article Image */}
                        <Box
                          sx={{
                            flexShrink: 0,
                            width: { xs: '120px', sm: '200px' },
                            height: { xs: '80px', sm: '120px' },
                            overflow: 'hidden',
                            borderRadius: 2,
                          }}
                        >
                          <Box
                            component="img"
                            src={article.image}
                            alt={article.title}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease',
                            }}
                          />
                        </Box>

                        {/* Article Content */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                              }}
                            >
                              {article.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {article.readTime}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {article.date}
                          </Typography>
                          <Typography
                            variant="h5"
                            className="article-title"
                            sx={{
                              fontWeight: 700,
                              color: '#1a1a1a',
                              lineHeight: 1.3,
                              transition: 'color 0.3s ease',
                              mb: 1,
                              fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            }}
                          >
                            {article.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            By {article.author}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Grid>

              {/* Most Popular Sidebar */}
              <Grid item xs={12} md={4}>
                <Box sx={{ position: 'sticky', top: 100 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 4,
                      color: '#1a1a1a'
                    }}
                  >
                    Most popular
                  </Typography>
                  <Box>
                    {regularArticles.slice(0, 4).map((article, index) => (
                      <motion.div key={`popular-${article.slug}`} variants={fadeInUp}>
                        <Box
                          component={Link}
                          href={`/news-and-articles/${article.slug}`}
                          sx={{
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit',
                            py: 3,
                            borderBottom: index < 3 ? '1px solid #e5e5e5' : 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              '& .article-title': {
                                color: 'primary.main',
                              },
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                              }}
                            >
                              {article.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {article.readTime}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {article.date}
                          </Typography>
                          <Typography
                            variant="h6"
                            className="article-title"
                            sx={{
                              fontWeight: 600,
                              color: '#1a1a1a',
                              lineHeight: 1.4,
                              transition: 'color 0.3s ease',
                              mb: 1,
                            }}
                          >
                            {article.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            By {article.author}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Pagination */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  fontWeight: 600,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'primary.main',
                  },
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewsAndArticlesPage;