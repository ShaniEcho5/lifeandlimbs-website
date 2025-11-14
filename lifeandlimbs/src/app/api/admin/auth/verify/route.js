import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const isLoggedIn = request.cookies.get('admin-logged-in')?.value

    if (!isLoggedIn || isLoggedIn !== 'true') {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }
    
    return NextResponse.json({
      user: { username: 'admin', role: 'admin' }
    })
  } catch (error) {
    console.error('Auth verification error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 }
    )
  }
}