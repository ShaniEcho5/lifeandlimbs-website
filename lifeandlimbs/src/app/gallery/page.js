"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      src: "/images/prostheticLeg.jpg",
      title: "Prosthetic Limb Fitting",
      category: "Prosthetic Services",
      size: "large",
      description:
        "Professional prosthetic limb fitting session with our expert team",
    },
    {
      id: 2,
      src: "/images/Johnson-Samuel.jpg",
      title: "Dr. Samuel Johnson",
      category: "Our Team",
      size: "medium",
      description:
        "Our lead prosthetist providing expert care and consultation",
    },
    {
      id: 3,
      src: "/images/Sleeve_Fitting_3345975_900x600.png",
      title: "Sleeve Fitting Process",
      category: "Prosthetic Services",
      size: "small",
      description: "Detailed sleeve fitting process for optimal comfort",
    },
    {
      id: 4,
      src: "/images/our-mission-img.webp",
      title: "Our Mission in Action",
      category: "Mission",
      size: "wide",
      description: "Transforming lives through accessible prosthetic care",
    },
    {
      id: 5,
      src: "/images/our-vision.webp",
      title: "Vision for the Future",
      category: "Vision",
      size: "small",
      description: "Building a world where mobility is accessible to all",
    },
    {
      id: 6,
      src: "/images/why-we-exist.jpg",
      title: "Why We Exist",
      category: "Purpose",
      size: "medium",
      description: "The driving force behind our commitment to serve",
    },
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const getGridProps = (size) => {
    switch (size) {
      case "large":
        return { xs: 12, sm: 6, md: 6, lg: 6 };
      case "wide":
        return { xs: 12, sm: 8, md: 8, lg: 8 };
      case "medium":
        return { xs: 12, sm: 6, md: 4, lg: 4 };
      default:
        return { xs: 12, sm: 6, md: 4, lg: 3 };
    }
  };

  const getCardHeight = (size) => {
    // Use consistent height for all cards for a cleaner look
    return 280;
  };

  return (
    <Box>
      {/* Hero Section - Techrish Style Design */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",

          py: { xs: 6, md: 0 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container sx={{ minHeight: { md: "100vh" } }}>
            {/* Left Side - Text Content with Green Accent Line */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                pr: { md: 4 },
                pb: { xs: 6, md: 0 },
                position: "relative",
              }}
            >
              {/* Green Gradient Accent Line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "20%",
                  bottom: "20%",
                  width: 4,
                  background: "primary.main",
                    borderRadius: 2,
                }}
              />

              <Box sx={{ width: "100%", pl: 6 }}>
                <motion.div {...fadeInUp}>
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      fontSize: "3.5rem",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      lineHeight: 1.1,
                    }}
                  >
                    Visual
                    <br />
                    Stories of
                    <br />
                    Hope
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      fontWeight: 400,
                      color: "#666",
                      lineHeight: 1.5,
                      fontFamily:
                        '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    See the impact of our work through images of prosthetic
                    fittings, success stories, and community events.{" "}
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

            {/* Right Side - Floating Image Grid (Techrish Style) */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                minHeight: { xs: "60vh", md: "100vh" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "600px",
                  height: "500px",
                }}
              >
                {/* Image 1 - Top Right */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    width: "160px",
                    height: "120px",
                    zIndex: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "25px",
                      overflow: "hidden",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                      border: "4px solid white",
                      transform: "rotate(5deg)",
                    }}
                  >
                    <img
                      src="/images/Johnson-Samuel.jpg"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 2 - Middle Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "15%",
                    left: "0%",
                    width: "140px",
                    height: "100px",
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                      border: "3px solid white",
                      transform: "rotate(-3deg)",
                    }}
                  >
                    <img
                      src="/images/prostheticLeg.jpg"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 3 - Top Middle */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "30%",
                    width: "120px",
                    height: "90px",
                    zIndex: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                      border: "3px solid white",
                      transform: "rotate(2deg)",
                    }}
                  >
                    <img
                      src="/images/why-we-exist.jpg"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 4 - Right Middle */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{
                    position: "absolute",
                    top: "35%",
                    right: "15%",
                    width: "150px",
                    height: "110px",
                    zIndex: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "22px",
                      overflow: "hidden",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
                      border: "4px solid white",
                      transform: "rotate(-4deg)",
                    }}
                  >
                    <img
                      src="/images/our-mission-img.webp"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 5 - Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "20%",
                    width: "130px",
                    height: "95px",
                    zIndex: 5,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
                      border: "4px solid white",
                      transform: "rotate(1deg)",
                    }}
                  >
                    <img
                      src="/images/our-vision.webp"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 6 - Far Right */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    position: "absolute",
                    top: "55%",
                    right: "0%",
                    width: "140px",
                    height: "100px",
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "25px",
                      overflow: "hidden",
                      boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                      border: "3px solid white",
                      transform: "rotate(6deg)",
                    }}
                  >
                    <img
                      src="/images/Sleeve_Fitting_3345975_900x600.png"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 7 - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "10%",
                    width: "125px",
                    height: "90px",
                    zIndex: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: "0 14px 32px rgba(0,0,0,0.1)",
                      border: "3px solid white",
                      transform: "rotate(-2deg)",
                    }}
                  >
                    <img
                      src="/images/personalized-support.png"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Image 8 - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "20%",
                    width: "135px",
                    height: "95px",
                    zIndex: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
                      border: "4px solid white",
                      transform: "rotate(3deg)",
                    }}
                  >
                    <img
                      src="/images/volunteer.png"
                      alt="Customer"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Bottom center small images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "35%",
                    width: "80px",
                    height: "60px",
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                      border: "2px solid white",
                      background:
                        "linear-gradient(135deg, #64B5F6 0%, #42A5F5 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background: "#42A5F5",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>

                {/* Icon element similar to Techrish */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    right: "8%",
                    width: "70px",
                    height: "55px",
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)",
                      boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
                      border: "2px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-8deg)",
                    }}
                  >
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#4CAF50",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box
        className="section-padding"
        sx={{ backgroundColor: "background.default" }}
      >
        <Container maxWidth="xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Grid container spacing={3}>
              {galleryItems.map((item, index) => (
                <Grid item {...getGridProps(item.size)} key={item.id}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      onClick={() => handleImageClick(item)}
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        height: "100%",
                        position: "relative",
                        "&:hover": {
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                          "& .overlay": {
                            opacity: 1,
                          },
                          "& .image": {
                            transform: "scale(1.05)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: getCardHeight(item.size),
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="image"
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                        />

                        {/* Overlay */}
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            p: 3,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              fontWeight: 700,
                              mb: 1,
                              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "white",
                              opacity: 0.9,
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>

                        {/* Category Badge */}
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Image Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedImage && (
            <Box sx={{ position: "relative" }}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                  p: 3,
                }}
              >
                <Chip
                  label={selectedImage.category}
                  size="small"
                  sx={{
                    mb: 1,
                    bgcolor: "rgba(255,255,255,0.9)",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {selectedImage.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    opacity: 0.9,
                  }}
                >
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
