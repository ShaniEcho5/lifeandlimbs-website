'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material'
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  VisibilityOff as HideIcon
} from '@mui/icons-material'
import BlogEditor from './BlogEditor'

const BlogManagement = ({ onStatsUpdate }) => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [openEditor, setOpenEditor] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/admin/blogs')
      if (!response.ok) {
        throw new Error('Failed to fetch blogs')
      }
      
      const data = await response.json()
      setBlogs(data || [])
      
      if (onStatsUpdate) {
        onStatsUpdate()
      }
    } catch (error) {
      console.error('Error loading blogs:', error)
      showSnackbar('Failed to load blogs', 'error')
      // Fallback to empty array on error
      setBlogs([])
    } finally {
      setLoading(false)
    }
  }

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity })
  }

  const handleCreateBlog = () => {
    setSelectedBlog(null)
    setOpenEditor(true)
  }

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog)
    setOpenEditor(true)
  }

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return

    try {
      const response = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete blog')
      }

      setBlogs(blogs.filter(blog => blog.id !== blogId))
      showSnackbar('Blog deleted successfully')
      
      if (onStatsUpdate) {
        onStatsUpdate()
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
      showSnackbar('Failed to delete blog', 'error')
    }
  }

  const handleToggleStatus = async (blog) => {
    try {
      const newStatus = blog.status === 'published' ? 'draft' : 'published'
      const updateData = {
        status: newStatus,
        published_at: newStatus === 'published' ? new Date().toISOString() : null
      }

      const response = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      })
      
      if (!response.ok) {
        throw new Error('Failed to update blog status')
      }
      
      const updatedBlog = await response.json()

      setBlogs(blogs.map(b => 
        b.id === blog.id 
          ? updatedBlog
          : b
      ))
      
      showSnackbar(`Blog ${newStatus === 'published' ? 'published' : 'unpublished'} successfully`)
      
      if (onStatsUpdate) {
        onStatsUpdate()
      }
    } catch (error) {
      console.error('Error updating blog status:', error)
      showSnackbar('Failed to update blog status', 'error')
    }
  }

  const filteredBlogs = blogs.filter(blog => {
    return statusFilter === 'all' || blog.status === statusFilter
  })

  return (
    <Box>
      {/* Header with Add Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="600">
          Posts
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateBlog}
          sx={{ textTransform: 'none' }}
        >
          Add New
        </Button>
      </Box>

      {/* Filter Tabs */}
      <Box sx={{ mb: 2 }}>
        <Button
          variant={statusFilter === 'all' ? 'contained' : 'text'}
          onClick={() => setStatusFilter('all')}
          sx={{ mr: 1, textTransform: 'none' }}
        >
          All ({blogs.length})
        </Button>
        <Button
          variant={statusFilter === 'published' ? 'contained' : 'text'}
          onClick={() => setStatusFilter('published')}
          sx={{ mr: 1, textTransform: 'none' }}
        >
          Published ({blogs.filter(b => b.status === 'published').length})
        </Button>
        <Button
          variant={statusFilter === 'draft' ? 'contained' : 'text'}
          onClick={() => setStatusFilter('draft')}
          sx={{ textTransform: 'none' }}
        >
          Draft ({blogs.filter(b => b.status === 'draft').length})
        </Button>
      </Box>

      {/* Blog Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Loading blogs...
                </TableCell>
              </TableRow>
            ) : filteredBlogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography color="text.secondary">
                    No blogs found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredBlogs.map((blog) => (
                <TableRow key={blog.id} sx={{ '&:hover': { bgcolor: '#f9f9f9' } }}>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="medium">
                        {blog.title}
                      </Typography>
                      <Box sx={{ mt: 0.5 }}>
                        <Button
                          size="small"
                          onClick={() => handleEditBlog(blog)}
                          sx={{ 
                            textTransform: 'none', 
                            p: 0, 
                            minWidth: 'auto',
                            mr: 1,
                            color: 'primary.main'
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          onClick={() => handleToggleStatus(blog)}
                          sx={{ 
                            textTransform: 'none', 
                            p: 0, 
                            minWidth: 'auto',
                            mr: 1,
                            color: 'primary.main'
                          }}
                        >
                          View
                        </Button>
                        <Button
                          size="small"
                          onClick={() => handleDeleteBlog(blog.id)}
                          sx={{ 
                            textTransform: 'none', 
                            p: 0, 
                            minWidth: 'auto',
                            color: 'error.main'
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(blog.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={blog.status === 'published' ? 'Published' : 'Draft'}
                      color={blog.status === 'published' ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Blog Editor Dialog */}
      <BlogEditor
        open={openEditor}
        onClose={() => setOpenEditor(false)}
        blog={selectedBlog}
        onSave={loadBlogs}
        onError={(message) => showSnackbar(message, 'error')}
        onSuccess={(message) => showSnackbar(message, 'success')}
      />

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default BlogManagement