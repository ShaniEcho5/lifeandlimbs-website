'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Typography, CircularProgress } from '@mui/material'

const AdminRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      try {
        const response = await fetch('/api/admin/auth/verify')
        if (response.ok) {
          // User is authenticated, redirect to dashboard
          router.replace('/admin-dashboard')
        } else {
          // User is not authenticated, redirect to login
          router.replace('/admin/login')
        }
      } catch (error) {
        // Error checking auth, redirect to login
        router.replace('/admin/login')
      }
    }

    checkAuthAndRedirect()
  }, [router])

  return (
    <Box 
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      gap={2}
    >
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        Redirecting to admin...
      </Typography>
    </Box>
  )
}

export default AdminRedirect