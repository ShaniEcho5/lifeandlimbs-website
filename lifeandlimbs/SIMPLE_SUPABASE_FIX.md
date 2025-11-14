# SIMPLE FIX: Make Supabase Images Public

## Step 1: Go to Supabase Dashboard
1. Login to your Supabase project: https://supabase.com/dashboard
2. Select your project

## Step 2: Make Bucket Public
1. Go to **Storage** in the left sidebar
2. Click on **blog-images** bucket
3. Click **Settings** (gear icon)
4. Toggle **Public bucket** to ON
5. Click **Save**

## Step 3: Check RLS Policies
1. Still in Storage, click **Policies** tab
2. If you see any restrictive policies, delete them
3. Or create a simple "Allow public read" policy:
   - Policy name: "Public read access"
   - Policy definition: SELECT
   - Target roles: public
   - USING expression: `bucket_id = 'blog-images'`

## Step 4: Test
1. Go to your blog post with banner image
2. Right-click the broken image → "Open image in new tab"
3. If it loads, the fix worked!

## Alternative: Use Public URL Format
If the above doesn't work, try changing the image URL format from:
`https://yourproject.supabase.co/storage/v1/object/public/blog-images/filename.jpg`

To:
`https://yourproject.supabase.co/storage/v1/object/sign/blog-images/filename.jpg`