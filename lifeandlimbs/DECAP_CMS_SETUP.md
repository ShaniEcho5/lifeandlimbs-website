# Decap CMS GitHub Authentication Setup Guide

This guide will walk you through setting up GitHub authentication for your Decap CMS so that content editors can manage blog posts directly from the `/admin` interface.

## Prerequisites

- GitHub repository with your Next.js project
- Repository deployed on Vercel
- Admin access to your GitHub repository

## Step 1: Create GitHub OAuth App

1. **Go to GitHub Developer Settings**
   - Navigate to https://github.com/settings/developers
   - Click "OAuth Apps" in the left sidebar
   - Click "New OAuth App"

2. **Configure OAuth App Settings**
   ```
   Application name: Life and Limb CMS
   Homepage URL: https://your-site.vercel.app
   Authorization callback URL: https://api.netlify.com/auth/done
   ```

3. **Save Client Credentials**
   - Copy the `Client ID`
   - Generate and copy the `Client Secret`
   - Keep these secure - you'll need them later

## Step 2: Setup Netlify Identity (Recommended)

Even if you're hosting on Vercel, Netlify Identity provides the best authentication experience for Decap CMS.

1. **Create Netlify Account**
   - Sign up at https://netlify.com
   - You don't need to deploy your site here

2. **Create a New Site**
   - Go to your Netlify dashboard
   - Click "Add new site" > "Import an existing project"
   - Connect your GitHub repository
   - Deploy the site (even if you won't use this deployment)

3. **Enable Identity**
   - Go to Site settings > Identity
   - Click "Enable Identity"
   - Under "Registration preferences", select "Invite only"
   - Under "External providers", click "Add provider"
   - Select GitHub and add your OAuth credentials:
     ```
     Client ID: [Your GitHub Client ID]
     Client Secret: [Your GitHub Client Secret]
     ```

4. **Configure Git Gateway**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"
   - This allows Decap CMS to write to your GitHub repo

## Step 3: Update Decap CMS Configuration

1. **Update config.yml for Production**
   
   Replace your current config with the production version:

   ```yaml
   backend:
     name: github
     repo: your-username/your-repo-name  # Replace with your actual repo
     branch: main
     site_domain: your-site.vercel.app   # Replace with your Vercel domain

   media_folder: "public/images/uploads"
   public_folder: "/images/uploads"

   # Use Netlify Identity for authentication
   site_url: https://your-netlify-site.netlify.app
   display_url: https://your-site.vercel.app

   collections:
     - name: "posts"
       label: "Blog Posts"
       folder: "posts"
       create: true
       slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
       fields:
         - {label: "Title", name: "title", widget: "string"}
         - {label: "Date", name: "date", widget: "datetime"}
         - {label: "Description", name: "description", widget: "text"}
         - {label: "Banner Image", name: "banner", widget: "image", required: false}
         - {label: "Author", name: "author", widget: "string", default: "Life and Limb Team"}
         - {label: "Tags", name: "tags", widget: "list", required: false}
         - {label: "Featured", name: "featured", widget: "boolean", default: false}
         - {label: "Body", name: "body", widget: "markdown"}
   ```

2. **Update Admin HTML**
   
   Update your `/public/admin/index.html`:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Life and Limb CMS</title>
     <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   </head>
   <body>
     <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
     <script>
       if (window.netlifyIdentity) {
         window.netlifyIdentity.on("init", user => {
           if (!user) {
             window.netlifyIdentity.on("login", () => {
               document.location.href = "/admin/";
             });
           }
         });
       }
     </script>
   </body>
   </html>
   ```

## Step 4: Invite Content Editors

1. **In Netlify Dashboard**
   - Go to Identity tab
   - Click "Invite users"
   - Enter email addresses of content editors
   - They'll receive invitation emails

2. **User Setup Process**
   - Users click invitation link
   - Create password for Netlify Identity
   - Can now access `/admin` on your site
   - Will be authenticated via GitHub for CMS access

## Step 5: Test the Setup

1. **Access Admin Interface**
   - Go to `https://your-site.vercel.app/admin`
   - Should see Netlify Identity login
   - After login, should see Decap CMS interface

2. **Test Content Creation**
   - Try creating a new blog post
   - Upload an image
   - Publish the post
   - Verify it appears in your GitHub repo
   - Check that Vercel rebuilds automatically

## Alternative: GitHub-Only Authentication (RECOMMENDED)

✅ **Your project now includes this setup!** You can use GitHub authentication directly without Netlify Identity:

### 1. OAuth Callback Function
Your project now includes `/src/app/api/auth/callback/route.js` which handles the OAuth flow.

### 2. Updated Production Configuration
Use the `config-production.yml` file which includes:

```yaml
backend:
  name: github
  repo: ShaniEcho5/lifeandlimbs-website
  branch: main
  auth_type: implicit
  auth_url: https://github.com/login/oauth/authorize
  auth_token_url: /api/auth/callback
  base_url: https://your-domain.vercel.app
```

### 3. GitHub OAuth App Setup
1. **Go to GitHub Developer Settings**
   - Navigate to https://github.com/settings/developers
   - Click "OAuth Apps" → "New OAuth App"

2. **Configure OAuth App**
   ```
   Application name: Life and Limb CMS
   Homepage URL: https://your-domain.vercel.app
   Authorization callback URL: https://your-domain.vercel.app/api/auth/callback
   ```

3. **Environment Variables**
   Add these to your Vercel environment variables:
   ```
   GITHUB_CLIENT_ID=your_client_id
   GITHUB_CLIENT_SECRET=your_client_secret
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

### 4. Switch to Production Config
When ready for production:
1. Rename `config.yml` to `config-dev.yml`
2. Rename `config-production.yml` to `config.yml`
3. Update the domain URLs in the config
4. Deploy to Vercel

### 5. Access Control
With GitHub OAuth, anyone with access to your GitHub repository can edit content. To restrict access:
- Use a private repository
- Only add collaborators who should have CMS access
- Consider using GitHub teams for more granular permissions

## Troubleshooting

### Common Issues

1. **"Error loading the CMS configuration"**
   - Check that your config.yml syntax is valid
   - Ensure file paths are correct

2. **"Cannot authenticate"**
   - Verify OAuth app callback URL is correct
   - Check that Netlify Identity is properly configured

3. **"Cannot save posts"**
   - Ensure Git Gateway is enabled in Netlify
   - Verify repository permissions

4. **Images not uploading**
   - Check media_folder path in config
   - Ensure proper GitHub permissions

### Getting Help

- Check the Decap CMS documentation: https://decapcms.org/docs/
- GitHub OAuth setup: https://docs.github.com/en/developers/apps/oauth-apps
- Join the Decap CMS community for support

## Security Best Practices

1. **Limit Repository Access**
   - Only give CMS access to trusted editors
   - Use branch protection rules on main branch
   - Consider using a staging branch for content

2. **Regular Security Updates**
   - Keep Decap CMS updated to latest version
   - Monitor for security advisories
   - Regularly review user access

3. **Backup Strategy**
   - Your content is stored in Git (automatically backed up)
   - Consider additional backups of media files
   - Document your authentication setup

This completes the GitHub authentication setup for your Decap CMS. Content editors can now manage blog posts directly through the admin interface while maintaining full version control through Git.