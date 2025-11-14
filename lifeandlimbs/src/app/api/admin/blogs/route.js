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

// GET - Get all blogs
export async function GET(request) {
  try {
    await verifyAdmin(request)

    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    const { data, error } = await supabaseAdmin
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch blogs' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}

// POST - Create new blog
export async function POST(request) {
  try {
    await verifyAdmin(request)

    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    const blogData = await request.json()
    
    // Add timestamps
    blogData.created_at = new Date().toISOString()
    blogData.updated_at = new Date().toISOString()
    
    if (blogData.status === 'published') {
      blogData.published_at = new Date().toISOString()
    }

    const { data, error } = await supabaseAdmin
      .from('blogs')
      .insert([blogData])
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create blog' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}