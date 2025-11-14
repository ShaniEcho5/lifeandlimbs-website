import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const response = NextResponse.json({ success: true })
    
    // Clear the admin cookie
    response.cookies.set('admin-logged-in', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0
    })

    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}