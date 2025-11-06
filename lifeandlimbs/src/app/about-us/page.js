import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaBalanceScale,
  FaLightbulb,
  FaLeaf,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const metadata = {
  title: "About Us - Life and Limb",
  description:
    "Learn about Life and Limb's mission, team, and impact in providing free prosthetic limbs to amputees across India.",
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const AboutUsPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        className="hero-gradient"
        sx={{
          py: 8,
          textAlign: "center",
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url(/images/Sleeve_Fitting_3345975_900x600.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for text readability
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h1"
            className="#fff"
            sx={{
              mb: 3,
              fontFamily: "poppins",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 600,
              color: "white",
            }}
          >
            Transforming Lives, One Step at <br /> a Time
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "#fff",
              fontFamily: "poppins",
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            At Life and Limb, we believe that mobility is more than just a
            physical ability—it's the foundation for independence, dignity, and
            hope. Since our inception in 2013, we have been dedicated to
            providing free, high-quality prosthetic limbs to individuals in
            need, empowering them to reclaim their lives and dreams.
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
      <Box
        className="section-padding"
        sx={{ backgroundColor: "background.default" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Our Story
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                Life and Limb was founded by Sam Johnson, a compassionate
                visionary who saw the struggles of amputees in rural Kerala
                firsthand. Moved by the stories of those who lost their limbs
                due to tragic accidents, illnesses, or congenital conditions,
                Sam set out on a mission to make prosthetic care accessible to
                all, regardless of financial circumstances.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                Initially a small, family-supported initiative aimed at helping
                ten amputees per year, Life and Limb quickly grew as the demand
                for affordable prosthetics increased. In 2018, we opened our
                doors to public donations, enabling us to expand our impact and
                touch the lives of more individuals across India.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "400px",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/our-mission-img_0Z5ajpX.webp"
                  alt="Prosthetic fitting session showing a healthcare professional helping a patient with their prosthetic leg"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Founder's Message Section */}
      <Box
        className="section-padding"
        sx={{
          backgroundColor: "background.default",
          overflow: "hidden", // Prevent page scroll overlap
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              A Message from Our Founder
            </Typography>
          </Box>

          <Grid container spacing={6} alignItems="stretch">
            {/* Sticky Full-Height Image Card */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: { xs: "relative", md: "sticky" },
                  top: 0,
                  height: { xs: "400px", md: "100vh" },
                  zIndex: 5,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  }}
                >
                  <Box
                    sx={{ position: "relative", height: "100%", width: "100%" }}
                  >
                    <Image
                      src="/images/Johnson-Samuel.jpg"
                      alt="Johnson Samuel - Founder of Life and Limb"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 15%",
                      }}
                      priority
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ color: "white", fontWeight: 700, mb: 0.5 }}
                      >
                        Johnson Samuel
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                        }}
                      >
                        Founder, Life and Limb Charity
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Grid>

            {/* Scrollable Text Content */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  height: { md: "100vh" },
                  overflowY: { md: "scroll" },
                  pr: { md: 1 },
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE and Edge
                  "&::-webkit-scrollbar": {
                    display: "none", // Chrome, Safari, Opera
                  },
                }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "primary.main",
                      fontWeight: 500,
                    }}
                  >
                    "Many people ask me why our charity is so different. My
                    answer is simple—it is a divine calling."
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    Throughout my life, I have been moved by the struggles of
                    those without food, clothing, or access to education and
                    medical care. Yet, as someone blessed with two legs, I never
                    truly considered what life might be like for those without
                    them—until one moment changed everything.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    During a family vacation to India in 2013, we visited a
                    nearby home to meet a family. There, I met the head of the
                    household, a man who had lost his leg in an accident. Seeing
                    him confined to his bed, helpless and hopeless, stirred
                    something deep within me. That night, I couldn't sleep. My
                    mind was filled with questions—What do people like him go
                    through each day? How can I help?
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    The very next day, I came across an article about a charity
                    that provided artificial limbs to those in need. Soon after,
                    I began noticing more and more people who were living
                    without legs—each with their own story of pain and
                    resilience.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    When I returned to America, I immersed myself in learning
                    about prosthetics. One evening, while watching television, I
                    saw a contestant say she would use her prize money to buy an
                    artificial leg for her husband who had lost his in an
                    accident. That moment sealed my conviction. I felt God was
                    drawing my heart toward this cause.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    That night, I told my wife that I wanted to go to Kerala and
                    provide artificial limbs to at least ten people. My family
                    immediately supported the vision, even our children offering
                    the small gifts they had received to help others.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    What began as a small family mission in 2014—providing
                    artificial limbs to 20 people—has since grown into a
                    lifelong commitment. Each year, we have expanded our reach
                    with the generous support of my brothers, friends, church
                    community, and countless well-wishers.
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      p: 3,
                      borderRadius: 2,
                      mb: 3,
                      borderLeft: "4px solid",
                      borderColor: "primary.light",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        color: "white",
                      }}
                    >
                      Behind every limb we provide is a story of renewed hope.
                      Children and young adults who once ran freely find
                      themselves immobilized after an accident or illness. Many
                      sink into despai r; some even lose the will to live. Our
                      mission is to place a comma where life has tried to put a
                      full stop—to restore dignity, mobility, and confidence.
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    The true meaning of my life is found in seeing these
                    individuals take their first steps again, walking tall with
                    courage and hope. Though I cannot help everyone, I am
                    profoundly grateful for the opportunity to help even a few
                    rediscover the joy of living.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    To date, we have provided artificial limbs to 344 people. We
                    receive hundreds of applications every year, and while our
                    resources limit the number we can support, our goal now is
                    to reach 100 individuals annually.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    May we continue to stand with those who feel forgotten, and
                    together, turn their despair into determination. From the
                    depths of my heart, thank you to everyone who has joined me
                    on this sacred journey.
                  </Typography>

                  <Box
                    sx={{
                      borderTop: "2px solid",
                      borderColor: "primary.main",
                      pt: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        color: "text.secondary",
                        mb: 1,
                      }}
                    >
                      With love and gratitude,
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      Johnson Samuel
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box
        id="mission"
        className="section-padding"
        sx={{ backgroundColor: "grey.50" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "400px",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/our-mission-img.webp"
                  alt="Our mission - providing prosthetic care and support"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Transforming Lives, One Step at a Time
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                At Life and Limb, our mission is to transform lives by restoring
                mobility, independence, and dignity to individuals who have lost
                a limb and cannot afford the cost of prosthetic care. We believe
                that mobility is more than movement—it is the foundation for
                rebuilding confidence, supporting families, and reclaiming one’s
                place in society.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                Since our founding in 2014, we have been committed to providing
                the highest quality, custom-fit prosthetic limbs completely free
                of charge to those who are physically ready and determined to
                rebuild their lives. Our team works closely with each recipient
                to ensure every limb is not only functional, but life-
                changing—crafted with precision, compassion, and care. Through
                partnerships, innovation, and a deep belief in human resilience,
                we strive to remove financial and social barriers to mobility,
                giving every person the opportunity to walk with strength, live
                with dignity, and pursue their dreams without limitation.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box
        className="section-padding"
        sx={{ backgroundColor: "background.default" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                Our vision is a world where mobility is not a privilege, but a
                universal right — where financial hardship never stands in the
                way of a person’s ability to walk, work, and live with dignity.
                We aspire to build a global community of compassion and
                innovation, dedicated to restoring independence to those who
                have lost a limb yet possess the strength and determination to
                rebuild their lives. Through access to the highest quality
                prosthetic care, we envision every individual taking their next
                confident step toward a future filled with purpose, opportunity,
                and hope.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                By blending cutting-edge technology with compassion, we aspire
                to become a global leader in transforming lives. Through
                innovation and collaboration, we aim to create inclusive
                communities that empower individuals with limb loss, breaking
                barriers and enabling them to reclaim their potential and pursue
                their dreams.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "400px",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/our-vision.webp"
                  alt="Our vision - empowering lives through accessible prosthetic care"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box className="section-padding" sx={{ backgroundColor: "grey.50" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Our Values
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaHeart size={32} color="white" />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Compassion
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Every individual deserves to live with dignity and confidence.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaBalanceScale size={32} color="white" />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Equity
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Access to mobility solutions should not depend on financial
                  ability.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaLightbulb size={32} color="white" />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Innovation
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  We partner with leading prosthetic manufacturers to provide
                  cutting-edge solutions.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <FaLeaf size={32} color="white" />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Sustainability
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  We ensure long-term impact through durable prosthetics and
                  follow-up care.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why We Exist Section */}
      <Box
        className="section-padding"
        sx={{ backgroundColor: "background.default" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Why We Exist
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                In India, there are thousands of amputees—men, women, and
                children—who face overwhelming challenges every day. Most come
                from impoverished families and live in rural areas with little
                or no access to healthcare. Here's why Life and Limb is
                essential:
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Lack of accessibility:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Quality prosthetics are expensive and out of reach for the
                  majority.
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
                  Families struggle with the costs of treatment while coping
                  with emotional trauma.
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
              >
                We step in to break these barriers, offering not only physical
                mobility but also emotional and social reintegration for
                amputees and their families.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "400px",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/why-we-exist.jpg"
                  alt="Why we exist - supporting amputees and providing accessible prosthetic care"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        id="team"
        className="section-padding"
        sx={{ backgroundColor: "grey.50" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Our Team
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              Behind every transformed life is a team of passionate
              professionals, volunteers, and partners. Under Sam Johnson's
              leadership, our team continues to grow and innovate, building
              stronger pathways to a future where mobility is accessible to all.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
              <Card
                sx={{
                  display: "flex",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {/* Photo Section */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "220px" },
                    height: { xs: "300px", sm: "300px" },
                    position: "relative",
                    backgroundColor: "grey.100",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/images/Johnson-Samuel.jpg"
                    alt="Johnson Samuel - Founder & Managing Director"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 15%",
                    }}
                  />
                </Box>

                {/* Content Section */}
                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: "text.primary",
                      fontSize: { xs: "1.5rem", sm: "1.75rem" },
                    }}
                  >
                    Johnson Samuel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      fontWeight: 500,
                      color: "primary.main",
                      textTransform: "uppercase",
                      fontSize: "0.9rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Founder & Managing Director
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      lineHeight: 1.6,
                      color: "text.secondary",
                      fontSize: "0.95rem",
                    }}
                  >
                    A compassionate visionary who founded Life and Limb with a
                    mission to make prosthetic care accessible to all,
                    regardless of financial circumstances.
                  </Typography>

                  {/* Social Media Icons */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <FaTwitter size={16} />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <FaFacebookF size={16} />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <FaInstagram size={16} />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <FaLinkedinIn size={16} />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        className="section-padding"
        sx={{ backgroundColor: "primary.main", color: "white" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Join Our Mission
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                opacity: 0.9,
                fontWeight: 400,
              }}
            >
              Whether through donation, volunteering, or spreading awareness,
              you can help us continue changing lives.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
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
                  backgroundColor: "white",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "grey.100",
                  },
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
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
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
