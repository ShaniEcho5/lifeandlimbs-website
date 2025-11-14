import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a mock client if environment variables are missing
let supabase = null
let supabaseAdmin = null

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey)
    
    // Admin client with service role key for admin operations
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    supabaseAdmin = supabaseServiceKey 
      ? createClient(supabaseUrl, supabaseServiceKey)
      : null
  } catch (error) {
    console.warn('Supabase client creation failed:', error)
  }
}

export { supabase, supabaseAdmin }