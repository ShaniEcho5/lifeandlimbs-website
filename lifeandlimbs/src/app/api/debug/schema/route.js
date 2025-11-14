import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../../lib/supabase'

export async function GET() {
  try {
    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }

    // Try to get table schema
    const { data: schemaData, error: schemaError } = await supabaseAdmin
      .from('information_schema.columns')
      .select('column_name, data_type')
      .eq('table_name', 'blogs')

    console.log('Schema check result:', { schemaData, schemaError })

    // Try to get a sample blog with all fields
    const { data: sampleBlog, error: blogError } = await supabaseAdmin
      .from('blogs')
      .select('*')
      .limit(1)
      .single()

    console.log('Sample blog result:', { sampleBlog, blogError })

    return NextResponse.json({
      schema: schemaData || [],
      sampleBlog: sampleBlog || null,
      errors: {
        schema: schemaError,
        blog: blogError
      }
    })

  } catch (error) {
    console.error('Debug API error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}