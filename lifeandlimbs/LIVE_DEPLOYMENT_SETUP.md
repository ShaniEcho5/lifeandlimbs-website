# Environment Configuration for Live Deployment

## Required Environment Variables

Add these to your deployment platform (Vercel, Netlify, etc.):

```
NEXT_PUBLIC_SUPABASE_URL=https://irlgqmdezqwoppvbrwcz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable above with your actual values

## For Local Development:

Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_SUPABASE_URL=https://irlgqmdezqwoppvbrwcz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Supabase Storage Configuration:

1. Go to Supabase Dashboard → Storage
2. Make sure `blog-images` bucket exists and is PUBLIC
3. Run the SQL commands from SUPABASE_IMAGE_FIX.sql

## Testing:
- Local: http://localhost:3001/api/test-image
- Live: https://yourdomain.com/api/test-image