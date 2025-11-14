import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function GET(request, { params }) {
  try {
    const { slug } = await params

    if (!supabase) {
      throw new Error('Supabase client not available')
    }

    // Fetch published blog post by slug from Supabase
    const { data: post, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return NextResponse.json({ error: 'Post not found' }, { status: 404 })
      }
      throw error
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}