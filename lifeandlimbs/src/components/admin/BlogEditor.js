'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Paper,
  IconButton
} from '@mui/material'
import {
  Save as SaveIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-') // Remove leading/trailing hyphens
}

const BlogEditor = ({ open, onClose, blog, onSave, onError, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    status: 'draft',
    category: '',
    author: 'Admin'
  })
  const [saving, setSaving] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit],
    content: formData.content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setFormData(prev => ({ ...prev, content: editor.getHTML() }))
    },
  })

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        slug: blog.slug || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        status: blog.status || 'draft',
        category: blog.category || '',
        author: blog.author || 'Admin'
      })
      if (editor) {
        editor.commands.setContent(blog.content || '')
      }
    } else {
      const emptyForm = {
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        status: 'draft',
        category: '',
        author: 'Admin'
      }
      setFormData(emptyForm)
      if (editor) {
        editor.commands.setContent('')
      }
    }
  }, [blog, editor])

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-')
  }

  const handleTitleChange = (e) => {
    const title = e.target.value
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title)
    }))
  }

  const handleSave = async (publishNow = false) => {
    if (!formData.title.trim()) {
      onError('Title is required')
      return
    }

    try {
      setSaving(true)
      
      const blogData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        content: formData.content,
        excerpt: formData.excerpt,
        author: formData.author || 'Admin',
        category: formData.category,
        status: publishNow ? 'published' : formData.status
      }

      if (blog) {
        // Update existing blog
        const response = await fetch(`/api/admin/blogs/${blog.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(blogData)
        })
        
        if (!response.ok) {
          throw new Error('Failed to update blog')
        }
        
        onSuccess('Blog updated successfully')
      } else {
        // Create new blog
        const response = await fetch('/api/admin/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(blogData)
        })
        
        if (!response.ok) {
          throw new Error('Failed to create blog')
        }
        
        onSuccess('Blog created successfully')
      }

      onSave()
      onClose()
    } catch (error) {
      console.error('Error saving blog:', error)
      onError(`Failed to save blog: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { height: '80vh' }
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {blog ? 'Edit Post' : 'Add New Post'}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={formData.title}
              onChange={handleTitleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Slug"
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              variant="outlined"
              size="small"
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                label="Category"
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              >
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="community">Community</MenuItem>
                <MenuItem value="innovation">Innovation</MenuItem>
                <MenuItem value="support">Support</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              multiline
              rows={2}
              variant="outlined"
              size="small"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Content
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                minHeight: 300,
                '& .ProseMirror': {
                  padding: 2,
                  minHeight: 300,
                  outline: 'none',
                  '& h2': { fontSize: '1.5rem', fontWeight: 'bold', mt: 2, mb: 1 },
                  '& h3': { fontSize: '1.25rem', fontWeight: 'bold', mt: 2, mb: 1 },
                  '& p': { mb: 1 },
                  '& ul, ol': { pl: 3, mb: 1 }
                }
              }}
            >
              <EditorContent editor={editor} />
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button onClick={onClose} disabled={saving}>
          Cancel
        </Button>
        <Button
          onClick={() => handleSave(false)}
          disabled={saving}
          variant="outlined"
        >
          Save Draft
        </Button>
        <Button
          onClick={() => handleSave(true)}
          disabled={saving}
          variant="contained"
        >
          {saving ? 'Publishing...' : 'Publish'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BlogEditor