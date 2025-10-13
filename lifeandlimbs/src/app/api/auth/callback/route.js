// app/api/auth/callback/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code) {
    return NextResponse.json(
      { error: "Missing code parameter" },
      { status: 400 }
    );
  }

  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    return NextResponse.json(
      { error: "Missing GitHub OAuth credentials" },
      { status: 500 }
    );
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        client_id, 
        client_secret, 
        code,
        state 
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.error_description || data.error },
        { status: 400 }
      );
    }

    // For Decap CMS, we need to return the token in a specific format
    // This creates a simple HTML page that posts the token back to the CMS
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Authorization Success</title>
      <meta charset="utf-8">
    </head>
    <body>
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            if (e.origin !== "${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}") {
              console.log("Invalid origin: %s", e.origin);
              return;
            }
            
            // Send the token back to Decap CMS
            e.source.postMessage(
              'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          
          // Send success message to parent window
          window.opener && window.opener.postMessage(
            'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
            '${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}'
          );
          
          // Close the popup window
          window.close();
        })();
      </script>
      <p>Authorization successful! This window should close automatically.</p>
    </body>
    </html>`;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });

  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.json(
      { error: "Failed to exchange code for token" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  // Handle POST requests if needed
  return GET(request);
}