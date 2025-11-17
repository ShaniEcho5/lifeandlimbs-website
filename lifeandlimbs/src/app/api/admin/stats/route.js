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

export async function GET(request) {
  try {
    await verifyAdmin(request)

    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    // Get total blogs count
    const { count: totalBlogs, error: totalError } = await supabaseAdmin
      .from('blogs')
      .select('*', { count: 'exact', head: true })

    if (totalError) throw totalError

    // Get published blogs count
    const { count: publishedBlogs, error: publishedError } = await supabaseAdmin
      .from('blogs')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published')

    if (publishedError) throw publishedError

    // Get draft blogs count
    const { count: draftBlogs, error: draftError } = await supabaseAdmin
      .from('blogs')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'draft')

    if (draftError) throw draftError

    // Get contact leads count
    let totalLeads = 0
    let newLeads = 0
    
    try {
      const { count: leadsCount, error: leadsError } = await supabaseAdmin
        .from('contact_leads')
        .select('*', { count: 'exact', head: true })

      if (!leadsError) totalLeads = leadsCount || 0

      const { count: newLeadsCount, error: newLeadsError } = await supabaseAdmin
        .from('contact_leads')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'new')

      if (!newLeadsError) newLeads = newLeadsCount || 0
    } catch (leadsError) {
      console.warn('Could not fetch contact leads stats:', leadsError)
    }

    // Skip total views for now since view_count column doesn't exist
    const totalViews = 0

    const stats = {
      totalBlogs: totalBlogs || 0,
      publishedBlogs: publishedBlogs || 0,
      draftBlogs: draftBlogs || 0,
      totalViews,
      totalLeads,
      newLeads
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch stats' },
      { status: error.message === 'Unauthorized' ? 401 : 500 }
    )
  }
}