# Uploads Directory

This directory is used by Decap CMS to store uploaded images and media files.

- Images uploaded through the CMS admin interface will be stored here
- Files are committed to the repository and served by Vercel's CDN
- All files are publicly accessible via `/images/uploads/...` URLs

## Important Notes

- Keep this directory in your git repository
- Do not add large files manually (use the CMS interface)
- Supported formats: JPG, PNG, GIF, WebP, SVG
- Recommended maximum file size: 5MB per image