'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const FAQ = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Quick answers to common questions about our services",
  sectionTitle = "Common Inquiries",
  questions = [],
  backgroundColor = 'grey.50',
  maxWidth = 'lg'
}) => {
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <Box className="section-padding" sx={{ backgroundColor }}>
      <Container maxWidth={maxWidth}>
        <motion.div {...fadeInUp}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {sectionTitle && (
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
                {sectionTitle}
              </Typography>
            )}
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="h6" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {questions.map((faq, index) => (
              <Accordion
                key={index}
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
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;