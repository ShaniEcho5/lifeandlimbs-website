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
  IconButton,
  Tabs,
  Tab,
  Chip,
  LinearProgress,
  Alert
} from '@mui/material'
import {
  Save as SaveIcon,
  Close as CloseIcon,
  Image as ImageIcon,
  CloudUpload as UploadIcon,
  Article as ContentIcon,
  Search as SEOIcon
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
    banner_image: '',
    // SEO fields
    meta_title: '',
    meta_description: '',
    focus_keyword: '',
    keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    canonical_url: '',
    robots: 'index, follow'
  })
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

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
        banner_image: blog.banner_image || '',
        // SEO fields with smart defaults
        meta_title: blog.meta_title || blog.title || '',
        meta_description: blog.meta_description || blog.excerpt || '',
        focus_keyword: blog.focus_keyword || '',
        keywords: blog.keywords || '',
        og_title: blog.og_title || blog.title || '',
        og_description: blog.og_description || blog.excerpt || '',
        og_image: blog.og_image || blog.banner_image || '',
        twitter_title: blog.twitter_title || blog.title || '',
        twitter_description: blog.twitter_description || blog.excerpt || '',
        twitter_image: blog.twitter_image || blog.banner_image || '',
        canonical_url: blog.canonical_url || '',
        robots: blog.robots || 'index, follow'
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
        banner_image: '',
        meta_title: '',
        meta_description: '',
        focus_keyword: '',
        keywords: '',
        og_title: '',
        og_description: '',
        og_image: '',
        twitter_title: '',
        twitter_description: '',
        twitter_image: '',
        canonical_url: '',
        robots: 'index, follow'
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
      slug: prev.slug || generateSlug(title),
      // Auto-populate SEO fields if they're empty
      meta_title: prev.meta_title || title,
      og_title: prev.og_title || title,
      twitter_title: prev.twitter_title || title
    }))
  }

  const handleExcerptChange = (e) => {
    const excerpt = e.target.value
    setFormData(prev => ({
      ...prev,
      excerpt,
      // Auto-populate SEO descriptions if they're empty
      meta_description: prev.meta_description || excerpt,
      og_description: prev.og_description || excerpt,
      twitter_description: prev.twitter_description || excerpt
    }))
  }

  // SEO Analysis Functions
  const getSEOScore = () => {
    let score = 0
    const checks = {
      title: formData.title.length > 0 && formData.title.length <= 60,
      metaTitle: formData.meta_title.length > 0 && formData.meta_title.length <= 60,
      metaDescription: formData.meta_description.length >= 120 && formData.meta_description.length <= 160,
      focusKeyword: formData.focus_keyword.length > 0,
      slug: formData.slug.length > 0 && formData.slug.length <= 75,
      excerpt: formData.excerpt.length > 0,
      content: formData.content.length > 300,
      ogImage: formData.og_image.length > 0 || formData.banner_image.length > 0,
      keywords: formData.keywords.split(',').filter(k => k.trim()).length >= 3
    }
    
    Object.values(checks).forEach(check => {
      if (check) score += 11.11 // Each check is worth ~11.11% for 100% total
    })
    
    return Math.round(score)
  }

  const handleImageUpload = async (file, type = 'content') => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type) // 'banner' or 'content'

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to upload image')
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
          onSuccess && onSuccess('Uploading image...')
          const url = await handleImageUpload(file, 'content')
          editor.chain().focus().setImage({ 
            src: url,
            alt: file.name.split('.')[0],
            title: file.name.split('.')[0]
          }).run()
          onSuccess && onSuccess('Image uploaded successfully!')
        } catch (error) {
          onError && onError(error.message || 'Failed to upload image')
        }
      }
    }
    input.click()
  }

  const addBannerImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async (e) => {
      const file = e.target.files?.[0]
      if (file) {
        try {
          onSuccess && onSuccess('Uploading banner image...')
          const url = await handleImageUpload(file, 'banner')
          setFormData(prev => ({ ...prev, banner_image: url }))
          onSuccess && onSuccess('Banner image uploaded successfully!')
        } catch (error) {
          onError && onError(error.message || 'Failed to upload banner image')
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
        status: publishNow ? 'published' : formData.status,
        // SEO fields
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description || formData.excerpt,
        focus_keyword: formData.focus_keyword,
        keywords: formData.keywords,
        og_title: formData.og_title || formData.title,
        og_description: formData.og_description || formData.excerpt,
        og_image: formData.og_image || formData.banner_image,
        twitter_title: formData.twitter_title || formData.title,
        twitter_description: formData.twitter_description || formData.excerpt,
        twitter_image: formData.twitter_image || formData.banner_image,
        canonical_url: formData.canonical_url,
        robots: formData.robots || 'index, follow'
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

      <DialogContent sx={{ p: 0 }}>
        {/* Tabs */}
        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}
        >
          <Tab icon={<ContentIcon />} iconPosition="start" label="Content" />
          <Tab 
            icon={<SEOIcon />} 
            iconPosition="start" 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                SEO
                <Chip 
                  size="small" 
                  label={`${getSEOScore()}%`} 
                  color={getSEOScore() >= 80 ? 'success' : getSEOScore() >= 60 ? 'warning' : 'error'}
                />
              </Box>
            } 
          />
        </Tabs>

        <Box sx={{ p: 2 }}>
          {/* Content Tab */}
          {activeTab === 0 && (
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
                  helperText={`${formData.title.length}/60 characters`}
                  error={formData.title.length > 60}
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
              onClick={addBannerImage}
              fullWidth
              startIcon={<UploadIcon />}
            >
              {formData.banner_image ? 'Change Banner Image' : 'Upload Banner Image'}
            </Button>
            {formData.banner_image && (
              <Box sx={{ mt: 1, position: 'relative' }}>
                <img
                  src={formData.banner_image}
                  alt="Banner preview"
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => setFormData(prev => ({ ...prev, banner_image: '' }))}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  Remove
                </Button>
              </Box>
            )}
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Excerpt"
              value={formData.excerpt}
              onChange={handleExcerptChange}
              multiline
              rows={2}
              variant="outlined"
              size="small"
              helperText={`${formData.excerpt.length}/160 characters (recommended for meta description)`}
              error={formData.excerpt.length > 160}
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
                      startIcon={<ImageIcon />}
                    >
                      Image
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
          )}

          {/* SEO Tab */}
          {activeTab === 1 && (
            <Box>
              {/* SEO Score */}
              <Box sx={{ mb: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Typography variant="h6" gutterBottom>
                  SEO Analysis Score: {getSEOScore()}%
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={getSEOScore()} 
                  color={getSEOScore() >= 80 ? 'success' : getSEOScore() >= 60 ? 'warning' : 'error'}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Grid container spacing={2}>
                {/* Basic SEO */}
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom color="primary">
                    Basic SEO
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Meta Title"
                    value={formData.meta_title}
                    onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                    variant="outlined"
                    size="small"
                    helperText={`${formData.meta_title.length}/60 characters. This appears in search engine results.`}
                    error={formData.meta_title.length > 60}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Meta Description"
                    value={formData.meta_description}
                    onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                    multiline
                    rows={3}
                    variant="outlined"
                    size="small"
                    helperText={`${formData.meta_description.length}/160 characters. This appears in search engine results.`}
                    error={formData.meta_description.length < 120 || formData.meta_description.length > 160}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Focus Keyword"
                    value={formData.focus_keyword}
                    onChange={(e) => setFormData(prev => ({ ...prev, focus_keyword: e.target.value }))}
                    variant="outlined"
                    size="small"
                    helperText="Main keyword you want to rank for"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Additional Keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                    variant="outlined"
                    size="small"
                    helperText="Comma-separated keywords"
                  />
                </Grid>

                {/* Social Media SEO */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom color="primary">
                    Social Media (Open Graph)
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Facebook/LinkedIn Title"
                    value={formData.og_title}
                    onChange={(e) => setFormData(prev => ({ ...prev, og_title: e.target.value }))}
                    variant="outlined"
                    size="small"
                    helperText="Title when shared on Facebook/LinkedIn"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Twitter Title"
                    value={formData.twitter_title}
                    onChange={(e) => setFormData(prev => ({ ...prev, twitter_title: e.target.value }))}
                    variant="outlined"
                    size="small"
                    helperText="Title when shared on Twitter"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Social Media Description"
                    value={formData.og_description}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      og_description: e.target.value,
                      twitter_description: e.target.value 
                    }))}
                    multiline
                    rows={2}
                    variant="outlined"
                    size="small"
                    helperText="Description when shared on social media"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Social Media Image URL"
                    value={formData.og_image}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      og_image: e.target.value,
                      twitter_image: e.target.value 
                    }))}
                    variant="outlined"
                    size="small"
                    helperText="Image when shared on social media (will use banner image if empty)"
                  />
                </Grid>

                {/* Advanced SEO */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom color="primary">
                    Advanced SEO
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Canonical URL"
                    value={formData.canonical_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, canonical_url: e.target.value }))}
                    variant="outlined"
                    size="small"
                    helperText="Canonical URL (optional)"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Robots</InputLabel>
                    <Select
                      value={formData.robots}
                      label="Robots"
                      onChange={(e) => setFormData(prev => ({ ...prev, robots: e.target.value }))}
                    >
                      <MenuItem value="index, follow">Index, Follow</MenuItem>
                      <MenuItem value="noindex, follow">No Index, Follow</MenuItem>
                      <MenuItem value="index, nofollow">Index, No Follow</MenuItem>
                      <MenuItem value="noindex, nofollow">No Index, No Follow</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* SEO Preview */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom color="primary">
                    Search Engine Preview
                  </Typography>
                  <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
                    <Typography 
                      variant="h6" 
                      sx={{ color: '#1a0dab', fontSize: '18px', lineHeight: 1.3, mb: 0.5 }}
                    >
                      {formData.meta_title || formData.title || 'Blog Title'}
                    </Typography>
                    <Typography sx={{ color: '#006621', fontSize: '14px', mb: 0.5 }}>
                      https://lifeandlimbs.org/blog/{formData.slug || 'blog-slug'}
                    </Typography>
                    <Typography sx={{ color: '#545454', fontSize: '14px', lineHeight: 1.4 }}>
                      {formData.meta_description || formData.excerpt || 'Blog description will appear here...'}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
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