# Simple Admin Access Instructions

## Quick Test (No Authentication Required)

1. **Update CMS config** to use test-repo backend:
   
   In `public/admin/config.yml`, change:
   ```yaml
   backend:
     name: test-repo
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Access admin at**: `http://localhost:3000/admin`

This will allow you to test the CMS interface without any authentication setup.

## Production Setup with GitHub OAuth

For production, you'll need to:

1. **Create GitHub OAuth App**:
   - Application name: Life and Limb CMS
   - Homepage URL: https://yourdomain.com
   - Authorization callback URL: https://api.netlify.com/auth/done

2. **Deploy to Netlify**:
   - Connect your GitHub repository
   - Enable Netlify Identity
   - Configure Git Gateway

3. **Update config for production**:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

## Current Status

- ✅ Blog system is fully implemented
- ✅ Sample posts are created
- ✅ CMS interface is configured
- 🔄 Authentication setup in progress

You can access the blog at: `http://localhost:3000/blog`