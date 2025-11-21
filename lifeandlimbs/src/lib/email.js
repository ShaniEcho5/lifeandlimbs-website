// Send contact form notification to admins
export const sendContactFormNotification = async (formData) => {
  try {
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    // Get admin emails from environment variable
    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || []
    
    if (adminEmails.length === 0) {
      console.warn('No admin emails configured for notifications')
      return
    }

    const emailSubject = `New Contact Form Submission - ${formData.name}`
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #6b7280;">Name:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">
                  ${formData.email}
                </a>
              </td>
            </tr>
            ${formData.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
              <td style="padding: 8px 0;">${formData.phone}</td>
            </tr>
            ` : ''}
            ${formData.inquiry_type ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Inquiry Type:</td>
              <td style="padding: 8px 0;">${formData.inquiry_type}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Status:</td>
              <td style="padding: 8px 0;">
                <span style="background-color: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                  ${formData.status || 'New'}
                </span>
              </td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="margin: 30px 0; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
          <p style="margin: 0; font-size: 14px; color: #1e40af;">
            <strong>Action Required:</strong> Please log into the admin dashboard to respond to this inquiry.
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>This is an automated notification from Life and Limbs website.</p>
          <p>Submission Time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Inquiry Type: ${formData.inquiry_type || 'Not specified'}
Status: ${formData.status || 'New'}

Message:
${formData.message}

Submission Time: ${new Date().toLocaleString()}
    `

    // Send email to all admin addresses
    const mailOptions = {
      from: `"Life and Limbs Website" <${process.env.EMAIL_USER}>`,
      to: adminEmails.join(', '),
      subject: emailSubject,
      text: emailText,
      html: emailHtml
    }

    const result = await transporter.sendMail(mailOptions)
    
    console.log('Contact form notification sent successfully:', {
      messageId: result.messageId,
      recipients: adminEmails,
      subject: emailSubject
    })
    
    return {
      success: true,
      messageId: result.messageId,
      recipients: adminEmails
    }

  } catch (error) {
    console.error('Error sending contact form notification:', error)
    
    // Don't throw the error - we don't want email failures to break the form submission
    return {
      success: false,
      error: error.message
    }
  }
}

// Test email configuration
export const testEmailConfiguration = async () => {
  try {
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    // Verify the connection
    await transporter.verify()
    
    console.log('Email configuration is valid')
    return { success: true, message: 'Email configuration is valid' }
    
  } catch (error) {
    console.error('Email configuration error:', error)
    return { 
      success: false, 
      error: error.message,
      message: 'Email configuration is invalid'
    }
  }
}