'use client';

import React, { useState, useEffect } from 'react';
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
  Fab,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogManager from '@/lib/blogManager';

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
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [regularBlogs, setRegularBlogs] = useState([]);
  const articlesPerPage = 9;

  // Load blogs on component mount
  useEffect(() => {
    const loadBlogs = () => {
      const allBlogs = BlogManager.getAllBlogs();
      const featured = BlogManager.getFeaturedBlogs();
      const regular = BlogManager.getRegularBlogs();
      
      setBlogs(allBlogs);
      setFeaturedBlogs(featured);
      setRegularBlogs(regular);
    };

    loadBlogs();
    
    // Listen for storage changes (when new blogs are added)
    const handleStorageChange = () => {
      loadBlogs();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab updates
    window.addEventListener('blogUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('blogUpdated', handleStorageChange);
    };
  }, []);

  // Use regular blogs for pagination, or all blogs if no featured ones exist
  const displayBlogs = regularBlogs.length > 0 ? regularBlogs : blogs;
  const totalPages = Math.ceil(displayBlogs.length / articlesPerPage);
  const startIndex = (page - 1) * articlesPerPage;
  const displayedArticles = displayBlogs.slice(startIndex, startIndex + articlesPerPage);

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  color: '#1a1a1a',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Blogs
              </Typography>
              
              {/* Add Blog Button */}
              {/* <Button
                component={Link}
                href="/blog-admin"
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
              >
                Add New Blog
              </Button> */}
            </Box>
            
            {/* Total blogs count */}
            <Typography variant="body1" color="text.secondary">
              {blogs.length} {blogs.length === 1 ? 'blog' : 'blogs'} published
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      {featuredBlogs.length > 0 && (
        <Box sx={{ pb: { xs: 4, md: 6 } }}>
          <Container maxWidth="xl">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <Grid container spacing={4}>
                {/* Large Featured Article */}
                {featuredBlogs[0] && (
                  <Grid item xs={12} md={8}>
                    <motion.div variants={fadeInUp}>
                      <Box
                        component={Link}
                        href={`/news-and-articles/${featuredBlogs[0].slug}`}
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
                            src={featuredBlogs[0].image}
                            alt={featuredBlogs[0].title}
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
                              {featuredBlogs[0].category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {featuredBlogs[0].readTime}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {new Date(featuredBlogs[0].date).toLocaleDateString()}
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
                            {featuredBlogs[0].title}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                )}

                {/* Secondary Featured Article */}
                {featuredBlogs[1] && (
                  <Grid item xs={12} md={4}>
                    <motion.div variants={fadeInUp}>
                      <Box
                        component={Link}
                        href={`/news-and-articles/${featuredBlogs[1].slug}`}
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
                            src={featuredBlogs[1].image}
                            alt={featuredBlogs[1].title}
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
                              {featuredBlogs[1].category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {featuredBlogs[1].readTime}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {new Date(featuredBlogs[1].date).toLocaleDateString()}
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
                            {featuredBlogs[1].title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            By {featuredBlogs[1].author}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                )}
              </Grid>
            </motion.div>
          </Container>
        </Box>
      )}

      {/* Main Content with Sidebar Layout */}
      {displayedArticles.length > 0 ? (
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Container maxWidth="xl">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <Grid container spacing={6}>
                {/* Main Article List */}
                <Grid item xs={12} md={8}>
                  <Box>
                    {displayedArticles.map((article, index) => (
                      <motion.div key={article.id || article.slug} variants={fadeInUp}>
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
                              {new Date(article.date).toLocaleDateString()}
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
                      {regularBlogs.slice(0, 4).map((article, index) => (
                        <motion.div key={`popular-${article.id || article.slug}`} variants={fadeInUp}>
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
                              {new Date(article.date).toLocaleDateString()}
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
      ) : (
        // No blogs message
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                No blogs published yet
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Be the first to share your story and insights with our community.
              </Typography>
              <Button
                component={Link}
                href="/blog-admin"
                variant="contained"
                size="large"
                startIcon={<AddIcon />}
              >
                Add Your First Blog
              </Button>
            </Box>
          </Container>
        </Box>
      )}

      {/* Pagination */}
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

      {/* Floating Add Button for Mobile */}
      <Fab
        component={Link}
        href="/blog-admin"
        color="primary"
        aria-label="add blog"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: { xs: 'flex', sm: 'none' }
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default NewsAndArticlesPage;