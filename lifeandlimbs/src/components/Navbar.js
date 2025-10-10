'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as ArrowDownIcon
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    label: 'Organization',
    submenu: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Mission', href: '/about-us#mission' },
      { label: 'Our Team', href: '/about-us#team' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'All Services', href: '/services' },
      { label: 'Free Custom Prosthetic', href: '/services/free-custom-prosthetic' },
      { label: 'Prosthetic Repair & Maintenance', href: '/services/repair-maintenance' },
      { label: 'Counselling Services', href: '/services/counselling' },
      { label: 'Family Support Program', href: '/services/family-support' },
      { label: 'Public Education & Awareness Campaign', href: '/services/education-awareness' },
    ],
  },
  { 
    label: 'Blogs', 
    href: '/news-and-articles'
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEls, setAnchorEls] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMenuOpen = (event, menuId) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuId]: event.currentTarget,
    }));
  };

  const handleMenuClose = (menuId) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuId]: null,
    }));
  };

  const handleMenuEnter = (event, menuId) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuId]: event.currentTarget,
    }));
  };

  const handleMenuLeave = (menuId) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuId]: null,
    }));
  };

  const isMenuOpen = (menuId) => Boolean(anchorEls[menuId]);

  const renderDesktopNavigation = () => (
    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
      {navigationItems.map((item) => (
        <Box 
          key={item.label}
          onMouseEnter={item.submenu ? (e) => handleMenuEnter(e, item.label) : undefined}
          onMouseLeave={item.submenu ? () => handleMenuLeave(item.label) : undefined}
        >
          {item.submenu ? (
            <>
              <Button
                color="inherit"
                component={item.href ? Link : undefined}
                href={item.href}
                endIcon={<ArrowDownIcon />}
                sx={{
                  color: scrolled ? 'text.primary' : 'white',
                  fontWeight: 500,
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&::after': pathname === item.href ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: 2,
                    backgroundColor: 'secondary.main',
                    borderRadius: 1,
                  } : {},
                }}
              >
                {item.label}
              </Button>
              <Menu
                anchorEl={anchorEls[item.label]}
                open={isMenuOpen(item.label)}
                onClose={() => handleMenuClose(item.label)}
                disableScrollLock={true}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  onMouseLeave: () => handleMenuLeave(item.label),
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    minWidth: 200,
                    position: 'absolute',
                    zIndex: 1300,
                  },
                }}
              >
                {item.submenu.map((subItem) => (
                  <MenuItem
                    key={subItem.label}
                    onClick={() => handleMenuClose(item.label)}
                    component={Link}
                    href={subItem.href}
                    sx={{
                      py: 1.5,
                      px: 3,
                      '&:hover': {
                        backgroundColor: 'primary.50',
                      },
                    }}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button
              color="inherit"
              component={Link}
              href={item.href}
              sx={{
                color: scrolled ? 'text.primary' : 'white',
                fontWeight: 500,
                position: 'relative',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&::after': pathname === item.href ? {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: 2,
                  backgroundColor: 'secondary.main',
                  borderRadius: 1,
                } : {},
              }}
            >
              {item.label}
            </Button>
          )}
        </Box>
      ))}
      
      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          href="https://www.gofundme.com/f/fzcv9-life-and-limb/donate"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
        >
          Donate Now
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: scrolled ? 'primary.main' : 'white',
            borderColor: scrolled ? 'primary.main' : 'white',
            fontWeight: 500,
            borderRadius: 2,
            px: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: scrolled ? 'primary.main' : 'white',
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="text"
          sx={{
            color: scrolled ? 'primary.main' : 'white',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );

  const renderMobileDrawer = () => (
    <Drawer
      anchor="right"
      open={mobileDrawerOpen}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image
          src="/images/life-and-limb-logo copy.png"
          alt="Life and Limb Logo"
          width={100}
          height={100}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ pt: 0 }}>
        {navigationItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.submenu ? (
              <>
                <ListItem sx={{ py: 2, px: 3 }}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  />
                </ListItem>
                {item.submenu.map((subItem) => (
                  <ListItem
                    key={subItem.label}
                    component={Link}
                    href={subItem.href}
                    onClick={handleDrawerToggle}
                    sx={{
                      py: 1,
                      px: 4,
                      '&:hover': {
                        backgroundColor: 'primary.50',
                      },
                    }}
                  >
                    <ListItemText
                      primary={subItem.label}
                      primaryTypographyProps={{
                        color: 'text.secondary',
                        fontSize: '0.9rem',
                      }}
                    />
                  </ListItem>
                ))}
              </>
            ) : (
              <ListItem
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'primary.50',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                />
              </ListItem>
            )}
          </React.Fragment>
        ))}
        
        {/* Mobile Action Buttons */}
        <Box sx={{ p: 3, pt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            href="https://www.gofundme.com/f/fzcv9-life-and-limb/donate"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: 2, py: 1.5, fontWeight: 600 }}
          >
            Donate Now
          </Button>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ py: 1, fontWeight: 500 }}
            >
              Login
            </Button>
            <Button
              variant="text"
              color="primary"
              fullWidth
              sx={{ py: 1, fontWeight: 500 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.95)',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, sm: 2 }, minHeight: '80px !important' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, lg: 0 } }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/images/life-and-limb-logo copy.png"
                  alt="Life and Limb Logo"
                  width={120}
                  height={50}
                  priority
                />
              </Link>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {renderDesktopNavigation()}
            </Box>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open navigation menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? 'text.primary' : 'white',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile Drawer */}
      {renderMobileDrawer()}
      
      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ minHeight: '80px !important' }} />
    </>
  );
};

export default Navbar;