import { NextResponse } from 'next/server'
import { testEmailConfiguration } from '../../../../lib/email'

export async function GET(request) {
  try {
    // This endpoint is for testing email configuration
    // Only allow in development or with proper authentication
    
    const result = await testEmailConfiguration()
    
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('Email test error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        message: 'Email test failed' 
      },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    // This endpoint is for sending a test email
    const { sendContactFormNotification } = await import('../../../../lib/email')
    
    // Sample test data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      inquiry_type: 'General Inquiry',
      message: 'This is a test message to verify email notifications are working correctly.',
      status: 'new'
    }
    
    const result = await sendContactFormNotification(testData)
    
    return NextResponse.json({
      success: result.success,
      message: result.success ? 'Test email sent successfully' : 'Failed to send test email',
      details: result
    })
    
  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        message: 'Test email failed' 
      },
      { status: 500 }
    )
  }
}