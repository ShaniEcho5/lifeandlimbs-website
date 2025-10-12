# Life and Limb Blog System - Setup Guide

This guide provides step-by-step instructions for setting up and using the complete blog system with Decap CMS integration.

## 🚀 System Overview

The blog system includes:
- **Static Markdown blog posts** stored in `/posts`
- **Dynamic blog listing** at `/blog`
- **Individual post pages** at `/blog/[slug]`
- **Decap CMS admin interface** at `/admin`
- **GitHub-based content management** with automatic deployment
- **Image uploads** via CMS to `/public/images/uploads`

## 📋 Prerequisites

- GitHub repository with the project
- Vercel account for deployment
- Basic understanding of Markdown formatting

## 🔧 Initial Setup

### 1. Repository Configuration

The blog system is already configured for your repository:
- **Repository**: `ShaniEcho5/lifeandlimbs-website`
- **Branch**: `main`
- **CMS Config**: `/public/admin/config.yml`

### 2. Deploy to Vercel

1. **Connect your repository to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy with default settings

2. **Set up custom domain** (if desired):
   - In Vercel project settings → Domains
   - Add your custom domain (e.g., `lifeandlimbs.org`)

### 3. Enable GitHub Authentication for CMS

#### Option A: Netlify Identity (Recommended for Testing)

1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Enable Netlify Identity**:
   - Go to Site Settings → Identity
   - Enable Identity service
   - Set registration to "Invite only"
   - Enable Git Gateway

3. **Update CMS config** (if using Netlify Identity):
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

#### Option B: GitHub OAuth App (Production)

1. **Create GitHub OAuth App**:
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in details:
     - **Application name**: `Life and Limb CMS`
     - **Homepage URL**: `https://yourdomain.com`
     - **Authorization callback URL**: `https://api.netlify.com/auth/done`

2. **Configure environment variables**:
   - Add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` to Vercel

## 📝 Using the Content Management System

### Accessing the CMS

1. **Navigate to the admin interface**:
   ```
   https://yourdomain.com/admin
   ```

2. **Login with GitHub** (or Netlify Identity)

3. **Dashboard overview**:
   - View all published posts
   - Create new posts
   - Edit existing content
   - Manage media uploads

### Creating a New Blog Post

1. **Click "New Blog Post"** in the CMS dashboard

2. **Fill in required fields**:
   - **Title**: Main heading for your post
   - **Publication Date**: When to publish (can be future date)
   - **Description**: Brief summary (150-160 characters for SEO)
   - **Featured Image**: Banner image (1200x630px recommended)
   - **Content**: Main blog content in Markdown

3. **Content writing tips**:
   - Use **bold** and *italic* formatting
   - Add headers with `## Heading 2` or `### Heading 3`
   - Insert images by clicking the image button
   - Create lists with `-` or `1.`
   - Add blockquotes with `>` 
   - Include code with \`backticks\` or \```code blocks\```

4. **Preview your post**:
   - Use the preview panel on the right
   - Check formatting and image placement

5. **Save and publish**:
   - **Save Draft**: Saves without publishing
   - **Publish**: Makes post live immediately
   - **Set to Ready**: Submits for review (if workflow enabled)

### Managing Images

1. **Upload images**:
   - Click image button in content editor
   - Upload from computer or choose existing
   - Images automatically saved to `/public/images/uploads`

2. **Image best practices**:
   - **Featured images**: 1200x630px (for social sharing)
   - **Content images**: Max 1920px width
   - **File formats**: JPG, PNG, WebP recommended
   - **File size**: Keep under 5MB each

3. **Image optimization**:
   - Images are automatically optimized by Next.js
   - Use descriptive filenames
   - Add alt text for accessibility

### Content Guidelines

#### Writing Effective Posts

1. **Compelling titles**:
   - Clear and descriptive
   - 60 characters or less for SEO
   - Include relevant keywords

2. **Strong descriptions**:
   - 150-160 characters
   - Summarize main points
   - Encourage clicks

3. **Structured content**:
   ```markdown
   # Main Title (automatic from title field)
   
   ## Introduction
   Brief overview of the topic
   
   ## Main Content Sections
   ### Subsection 1
   Content here...
   
   ### Subsection 2
   More content...
   
   ## Conclusion
   Summary and call to action
   ```

4. **Rich formatting examples**:
   ```markdown
   **Bold text** for emphasis
   *Italic text* for subtle emphasis
   
   > Blockquotes for testimonials or important notes
   
   - Bullet points for lists
   - Another point
   
   1. Numbered lists for steps
   2. Second step
   
   [Link text](https://example.com) for external links
   
   ![Image description](image-url) for images
   
   `Code snippets` for technical terms
   ```

#### SEO Best Practices

1. **Use descriptive URLs**: The slug is auto-generated from title
2. **Include keywords naturally** in title and content
3. **Write meta descriptions** that encourage clicks
4. **Use header hierarchy** (H1 → H2 → H3)
5. **Add alt text** to all images
6. **Internal linking** to other pages/posts

## 🔍 Editorial Workflow

### Draft → Review → Publish

1. **Save as Draft**:
   - Work in progress posts
   - Not visible on live site
   - Can be edited multiple times

2. **Set to Ready for Review**:
   - Submits post for approval
   - Triggers review process
   - Reviewer gets notification

3. **Publish**:
   - Makes post live
   - Automatically rebuilds site
   - Available at `/blog/post-slug`

### Team Collaboration

1. **Add team members**:
   - Invite via GitHub repository access
   - Or through Netlify Identity

2. **Roles and permissions**:
   - **Admin**: Full access to all content
   - **Editor**: Create and edit posts
   - **Author**: Create own posts only

## 🛠️ Troubleshooting

### Common Issues

1. **CMS won't load**:
   - Check if `/admin` path is accessible
   - Verify config.yml syntax
   - Check browser console for errors

2. **Can't upload images**:
   - Ensure file size is under 5MB
   - Check file format is supported
   - Verify GitHub permissions

3. **Posts not showing on site**:
   - Check if post is published (not draft)
   - Verify frontmatter format
   - Wait for Vercel rebuild (1-2 minutes)

4. **Authentication issues**:
   - Clear browser cache
   - Check GitHub OAuth settings
   - Verify repository permissions

### Getting Help

1. **Check build logs** in Vercel dashboard
2. **Review console errors** in browser developer tools
3. **Verify file syntax** with online Markdown/YAML validators

## 🚀 Advanced Configuration

### Custom Post Types

To add new content types, edit `/public/admin/config.yml`:

```yaml
collections:
  - name: "news"
    label: "News Updates"
    folder: "content/news"
    create: true
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Content", name: "body", widget: "markdown" }
```

### SEO Enhancements

1. **Add sitemap generation**:
   ```javascript
   // In next.config.mjs
   const nextConfig = {
     async generateBuildId() {
       // Generate sitemap during build
     }
   };
   ```

2. **RSS feed setup**:
   - Create `/pages/feed.xml.js`
   - Generate RSS from blog posts
   - Link in HTML head

### Performance Optimization

1. **Image optimization**:
   - Next.js automatically optimizes images
   - Use WebP format when possible
   - Implement lazy loading

2. **Content caching**:
   - Vercel edge caching enabled
   - Static generation for all posts
   - Incremental regeneration support

## 📊 Analytics and Monitoring

### Content Performance

1. **Google Analytics integration**:
   - Add tracking code to layout
   - Monitor page views and engagement
   - Track popular content

2. **Content metrics**:
   - Reading time calculation
   - Social media shares
   - Comment engagement (if added)

### Site Health

1. **Monitor build times** in Vercel
2. **Check for broken links** regularly
3. **Review site speed** with Lighthouse
4. **Monitor uptime** and performance

## 🔐 Security Considerations

1. **Access control**:
   - Limit CMS access to authorized users
   - Use strong GitHub passwords/2FA
   - Regular review of repository access

2. **Content validation**:
   - Review all submissions before publishing
   - Monitor for inappropriate content
   - Backup important content regularly

3. **Technical security**:
   - Keep dependencies updated
   - Monitor for vulnerabilities
   - Use HTTPS for all traffic

## 📞 Support

For technical issues or questions:

1. **Documentation**: Refer to this guide
2. **GitHub Issues**: Create issues in the repository
3. **Community**: Check Next.js and Decap CMS documentation
4. **Team Contact**: Reach out to development team

---

**Happy blogging! 🎉**

The Life and Limb blog system is now ready to share inspiring stories and important updates with your community.