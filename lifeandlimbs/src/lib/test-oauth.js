// Test script for GitHub OAuth callback
// Run this to verify your OAuth setup is working

export async function testOAuthCallback() {
  const testCode = 'test_authorization_code';
  
  try {
    const response = await fetch('/api/auth/callback?code=' + testCode, {
      method: 'GET',
    });
    
    const result = await response.text();
    console.log('OAuth callback response:', result);
    
    if (response.ok) {
      console.log('✅ OAuth callback route is working');
      return true;
    } else {
      console.log('❌ OAuth callback failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Error testing OAuth callback:', error);
    return false;
  }
}

// Usage: Call this function in your browser console or component
// testOAuthCallback();

export default testOAuthCallback;