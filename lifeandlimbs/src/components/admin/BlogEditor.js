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
import Image from '@tiptap/extension-image'

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
    author: 'Admin',
    banner_image: ''
  })
  const [saving, setSaving] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg my-4',
        },
      }),
    ],
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
        author: blog.author || 'Admin',
        banner_image: blog.banner_image || ''
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
        author: 'Admin',
        banner_image: ''
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

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      return data.url
    } catch (error) {
      console.error('Image upload error:', error)
      throw error
    }
  }

  const addImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async (e) => {
      const file = e.target.files?.[0]
      if (file && editor) {
        try {
          const url = await handleImageUpload(file)
          editor.chain().focus().setImage({ src: url }).run()
        } catch (error) {
          onError('Failed to upload image')
        }
      }
    }
    input.click()
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

      // Try to include banner_image, but don't fail if column doesn't exist
      if (formData.banner_image) {
        try {
          blogData.banner_image = formData.banner_image
        } catch (error) {
          console.warn('banner_image column might not exist:', error)
          // Fallback: store in content metadata as HTML comment
          if (formData.banner_image) {
            blogData.content = `<!-- BANNER_IMAGE:${formData.banner_image} -->\n${formData.content}`
          }
        }
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
            <Typography variant="subtitle2" gutterBottom>
              Banner Image
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                const input = document.createElement('input')
                input.type = 'file'
                input.accept = 'image/*'
                input.onchange = async (e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    try {
                      const url = await handleImageUpload(file)
                      setFormData(prev => ({ ...prev, banner_image: url }))
                    } catch (error) {
                      onError('Failed to upload banner image')
                    }
                  }
                }
                input.click()
              }}
              fullWidth
            >
              {formData.banner_image ? 'Change Banner Image' : 'Upload Banner Image'}
            </Button>
            {formData.banner_image && (
              <Box sx={{ mt: 1 }}>
                <img
                  src={formData.banner_image}
                  alt="Banner preview"
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
                />
              </Box>
            )}
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
            <Paper variant="outlined">
              {/* Editor Toolbar */}
              {editor && (
                <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', p: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Button
                      size="small"
                      variant={editor.isActive('bold') ? 'contained' : 'outlined'}
                      onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                      Bold
                    </Button>
                    <Button
                      size="small"
                      variant={editor.isActive('italic') ? 'contained' : 'outlined'}
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                    >
                      Italic
                    </Button>
                    <Button
                      size="small"
                      variant={editor.isActive('heading', { level: 2 }) ? 'contained' : 'outlined'}
                      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    >
                      H2
                    </Button>
                    <Button
                      size="small"
                      variant={editor.isActive('heading', { level: 3 }) ? 'contained' : 'outlined'}
                      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    >
                      H3
                    </Button>
                    <Button
                      size="small"
                      variant={editor.isActive('bulletList') ? 'contained' : 'outlined'}
                      onClick={() => editor.chain().focus().toggleBulletList().run()}
                    >
                      • List
                    </Button>
                    <Button
                      size="small"
                      variant={editor.isActive('orderedList') ? 'contained' : 'outlined'}
                      onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    >
                      1. List
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={addImage}
                    >
                      📷 Image
                    </Button>
                  </Box>
                </Box>
              )}
              
              <Box sx={{
                minHeight: 300,
                '& .ProseMirror': {
                  padding: 2,
                  minHeight: 300,
                  outline: 'none',
                  '& h2': { fontSize: '1.5rem', fontWeight: 'bold', mt: 2, mb: 1 },
                  '& h3': { fontSize: '1.25rem', fontWeight: 'bold', mt: 2, mb: 1 },
                  '& p': { mb: 1 },
                  '& ul, ol': { pl: 3, mb: 1 },
                  '& img': { maxWidth: '100%', height: 'auto', borderRadius: 1, my: 2 }
                }
              }}>
                <EditorContent editor={editor} />
              </Box>
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