const bcrypt = require('bcryptjs')

async function generatePasswordHash() {
  const password = process.argv[2]
  
  if (!password) {
    console.log('Usage: node generate-admin-hash.js <password>')
    process.exit(1)
  }

  try {
    const hash = await bcrypt.hash(password, 12)
    console.log('\n=== Admin Password Setup ===')
    console.log('Add this to your .env.local file:')
    console.log(`ADMIN_PASSWORD_HASH=${hash}`)
    console.log('\nMake sure to also set:')
    console.log('ADMIN_EMAIL=admin@lifeandlimbs.com')
    console.log('JWT_SECRET=your_secure_random_string')
    console.log('\n=== Supabase Setup ===')
    console.log('You also need to set up Supabase:')
    console.log('NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url')
    console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key')
    console.log('SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key')
  } catch (error) {
    console.error('Error generating hash:', error)
  }
}

generatePasswordHash()