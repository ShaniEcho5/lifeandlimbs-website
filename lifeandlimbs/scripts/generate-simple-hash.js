const bcrypt = require('bcryptjs')

async function generateSpecificHash() {
  // Since you want a specific hash that starts with $2b$12$lqCeXfYV4G
  // Let's create a hash for password "admin" and see if we can match
  const password = 'admin'
  
  try {
    const hash = await bcrypt.hash(password, 12)
    console.log('\n=== Generated Hash ===')
    console.log(`Password: ${password}`)
    console.log(`Hash: ${hash}`)
    
    // Test the verification
    const isValid = await bcrypt.compare(password, hash)
    console.log(`Verification test: ${isValid}`)
    
    console.log('\nTo use in .env.local:')
    console.log(`ADMIN_PASSWORD_HASH=${hash}`)
  } catch (error) {
    console.error('Error generating hash:', error)
  }
}

generateSpecificHash()