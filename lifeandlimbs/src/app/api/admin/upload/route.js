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

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 })
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 })
    }

    // Generate unique filename
    const fileExtension = file.name.split('.').pop()
    const fileName = `blog-images/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`

    // Upload to Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from('blog-images')
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
            error: 'Storage bucket not configured. Please create a "blog-images" bucket in Supabase Storage.',
            details: error.message 
          },
          { status: 500 }
        )
      }
      
      throw error
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from('blog-images')
      .getPublicUrl(fileName)

    return NextResponse.json({
      url: publicUrl,
      fileName: fileName
    })

  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to upload image' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}