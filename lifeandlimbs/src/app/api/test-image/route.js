import { NextResponse } from 'next/server'

export async function GET() {
  // Test if we can access Supabase Storage directly
  const testImageUrl = "https://irlgqmdezqwoppvbrwcz.supabase.co/storage/v1/object/public/blog-images/blog-images/1763119076493-4lutnh.jpg"
  
  try {
    const response = await fetch(testImageUrl)
    
    return NextResponse.json({
      success: true,
      imageUrl: testImageUrl,
      status: response.status,
      statusText: response.statusText,
      headers: {
        'content-type': response.headers.get('content-type'),
        'cache-control': response.headers.get('cache-control')
      },
      canAccess: response.ok
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      imageUrl: testImageUrl
    })
  }
}