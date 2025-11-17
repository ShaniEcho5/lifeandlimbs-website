import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../lib/supabase'

export async function PATCH(request, { params }) {
  try {
    const { id } = params
    const body = await request.json()
    const { status, notes } = body

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 500 }
      )
    }

    // Validate status
    const validStatuses = ['new', 'contacted', 'resolved', 'spam']
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      )
    }

    const updateData = {}
    if (status) updateData.status = status
    if (notes !== undefined) updateData.notes = notes

    const { data, error } = await supabaseAdmin
      .from('contact_leads')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to update contact lead' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Contact lead updated successfully',
      lead: data
    })

  } catch (error) {
    console.error('Update contact lead error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 500 }
      )
    }

    const { error } = await supabaseAdmin
      .from('contact_leads')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to delete contact lead' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Contact lead deleted successfully'
    })

  } catch (error) {
    console.error('Delete contact lead error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 500 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('contact_leads')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Contact lead not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      lead: data
    })

  } catch (error) {
    console.error('Fetch contact lead error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}