-- Run these commands in your Supabase SQL Editor to fix image access issues

-- 1. Make sure the blog-images bucket is public
UPDATE storage.buckets 
SET public = true 
WHERE id = 'blog-images';

-- 2. Create a policy to allow public read access to images
CREATE POLICY "Public read access for blog images" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

-- 3. Check existing policies (use the correct table name)
SELECT * FROM storage.objects WHERE bucket_id = 'blog-images' LIMIT 5;

-- 4. If you need to see all storage buckets:
SELECT * FROM storage.buckets;

-- 5. Alternative: Drop all existing policies and create a simple public one
-- DROP POLICY IF EXISTS "Public read access for blog images" ON storage.objects;
-- CREATE POLICY "Allow public read" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');