import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../lib/supabase'

// Middleware to verify admin
async function verifyAdmin(request) {
  const isLoggedIn = request.cookies.get('admin-logged-in')?.value
  
  if (!isLoggedIn || isLoggedIn !== 'true') {
    throw new Error('Unauthorized')
  }

  return true
}

export async function POST(request) {
  try {
    await verifyAdmin(request)

    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    const formData = await request.formData()
    const file = formData.get('file')
    const type = formData.get('type') || 'content' // 'banner' or 'content'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 })
    }

    // Set size limits based on type
    const maxSize = type === 'banner' ? 5 * 1024 * 1024 : 10 * 1024 * 1024 // 5MB for banner, 10MB for content
    
    if (file.size > maxSize) {
      const limit = type === 'banner' ? '5MB' : '10MB'
      return NextResponse.json({ error: `File size must be less than ${limit}` }, { status: 400 })
    }

    // Choose bucket based on type
    const bucket = type === 'banner' ? 'blog-images' : 'blog-content-images'
    
    // Generate unique filename with type prefix
    const fileExtension = file.name.split('.').pop()
    const prefix = type === 'banner' ? 'banner' : 'content'
    const fileName = `${prefix}-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`

    // Upload to Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Storage upload error:', error)
      
      // If bucket doesn't exist, provide helpful error message
      if (error.message?.includes('bucket') || error.message?.includes('not found')) {
        return NextResponse.json(
          { 
            error: `Storage bucket "${bucket}" not configured. Please run the Supabase storage setup script.`,
            details: error.message 
          },
          { status: 500 }
        )
      }
      
      throw error
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from(bucket)
      .getPublicUrl(fileName)

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: fileName,
      type: type,
      bucket: bucket,
      size: file.size
    })

  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to upload image' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}