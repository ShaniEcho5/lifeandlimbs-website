'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Typography,
  Button,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Tab,
  Tabs
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  Article as BlogIcon,
  ContactMail as ContactIcon,
  ExitToApp as LogoutIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material'
import BlogManagement from '../../components/admin/BlogManagement'
import ContactLeadsManagement from '../../components/admin/ContactLeadsManagement'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0,
    totalLeads: 0,
    newLeads: 0
  })
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth/verify')
        if (!response.ok) {
          router.push('/admin/login')
          return
        }
        const userData = await response.json()
        setUser(userData)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/admin/login')
      }
    }

    checkAuth()
    loadStats()
  }, [router])

  const loadStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to load stats:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const tabs = [
    { label: 'Dashboard', value: 0 },
    { label: 'Blog Management', value: 1 },
    { label: 'Contact Leads', value: 2 }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <Box>
            {/* Stats Cards */}
            <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
              <Paper sx={{ p: 3, flex: 1, textAlign: 'center', minWidth: '200px' }}>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {stats.totalBlogs}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Blogs
                </Typography>
              </Paper>
              <Paper sx={{ p: 3, flex: 1, textAlign: 'center', minWidth: '200px' }}>
                <Typography variant="h4" color="success.main" fontWeight="bold">
                  {stats.publishedBlogs}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Published Blogs
                </Typography>
              </Paper>
              <Paper sx={{ p: 3, flex: 1, textAlign: 'center', minWidth: '200px' }}>
                <Typography variant="h4" color="warning.main" fontWeight="bold">
                  {stats.draftBlogs}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Draft Blogs
                </Typography>
              </Paper>
              <Paper sx={{ p: 3, flex: 1, textAlign: 'center', minWidth: '200px' }}>
                <Typography variant="h4" color="info.main" fontWeight="bold">
                  {stats.totalLeads || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contact Leads
                </Typography>
              </Paper>
            </Box>
          </Box>
        )
      case 1:
        return <BlogManagement onStatsUpdate={loadStats} />
      case 2:
        return <ContactLeadsManagement />
      default:
        return null
    }
  }

  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {/* Header */}
      <Paper sx={{ p: 2, mb: 0, borderRadius: 0 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="600">
            Life and Limb Blog Manager
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2">Welcome, Admin</Typography>
            <Button
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              variant="outlined"
              size="small"
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Navigation Tabs */}
      <Paper sx={{ borderRadius: 0, borderBottom: '1px solid #e0e0e0' }}>
        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          sx={{ px: 3 }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              icon={
                tab.value === 0 ? <DashboardIcon /> : 
                tab.value === 1 ? <BlogIcon /> : 
                <ContactIcon />
              }
              iconPosition="start"
              sx={{ minHeight: 60 }}
            />
          ))}
        </Tabs>
      </Paper>

      {/* Content */}
      <Box sx={{ p: 3 }}>
        {renderContent()}
      </Box>
    </Box>
  )
}

export default AdminDashboard