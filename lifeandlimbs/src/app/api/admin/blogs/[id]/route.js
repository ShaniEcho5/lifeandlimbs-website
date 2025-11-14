import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../../lib/supabase'

// Middleware to verify admin
async function verifyAdmin(request) {
  const isLoggedIn = request.cookies.get('admin-logged-in')?.value
  
  if (!isLoggedIn || isLoggedIn !== 'true') {
    throw new Error('Unauthorized')
  }

  return true
}

// PUT - Update blog
export async function PUT(request, { params }) {
  try {
    await verifyAdmin(request)

    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    const { id } = params
    const blogData = await request.json()
    
    // Add updated timestamp
    blogData.updated_at = new Date().toISOString()
    
    // If publishing, set published_at
    if (blogData.status === 'published' && !blogData.published_at) {
      blogData.published_at = new Date().toISOString()
    }

    const { data, error } = await supabaseAdmin
      .from('blogs')
      .update(blogData)
      .eq('id', id)
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to update blog' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}

// DELETE - Delete blog
export async function DELETE(request, { params }) {
  try {
    await verifyAdmin(request)

    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    const { id } = params

    const { error } = await supabaseAdmin
      .from('blogs')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to delete blog' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}