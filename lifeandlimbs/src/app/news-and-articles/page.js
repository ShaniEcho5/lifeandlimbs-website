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
      title: 'Sample Blog Post - Coming Soon',
      excerpt: 'This is a placeholder blog post. More content will be added here soon. Stay tuned for updates and news from Life and Limb.',
      date: 'October 10, 2025',
      category: 'News',
      readTime: '3 mins read',
      author: 'Life and Limb Team',
      image: '/images/life-and-limb-logo.png',
      slug: 'sample-blog-post',
      featured: true
    }
  ];

  const regularArticles = [];

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
              {/* Single Featured Article */}
              <Grid item xs={12}>
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
                        maxWidth: '600px',
                        mx: 'auto',
                      }}
                    >
                      <Box
                        component="img"
                        src={featuredArticles[0].image}
                        alt={featuredArticles[0].title}
                        sx={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </Box>
                    <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
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
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {featuredArticles[0].date}
                      </Typography>
                      <Typography
                        variant="h3"
                        className="article-title"
                        sx={{
                          fontWeight: 700,
                          color: '#1a1a1a',
                          lineHeight: 1.3,
                          transition: 'color 0.3s ease',
                          textDecoration: 'none',
                          mb: 2,
                        }}
                      >
                        {featuredArticles[0].title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {featuredArticles[0].excerpt}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        By {featuredArticles[0].author}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content - Coming Soon Message */}
      {regularArticles.length === 0 && (
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Container maxWidth="xl">
            <motion.div variants={fadeInUp}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a1a',
                    mb: 2,
                  }}
                >
                  More Content Coming Soon
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: '600px', mx: 'auto' }}
                >
                  We're working on bringing you more insightful articles, news, and updates. 
                  Stay tuned for stories about prosthetic technology, success stories from our community, 
                  and updates on our mission to provide free prosthetic limbs to those in need.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
      )}

      {/* Main Content with Sidebar Layout - Only show if there are regular articles */}
      {regularArticles.length > 0 && (
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
      )}

      {/* Pagination - Only show if there are multiple pages */}
      {totalPages > 1 && (
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
      )}
    </Box>
  );
};

export default NewsAndArticlesPage;